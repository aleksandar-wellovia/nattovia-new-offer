// Prebojava crveni "FREE SHIPPING" kamion u zelenu brenda.
//
// Radi tako sto crvenim pikselima menja NIJANSU (hue), a zadrzava zasicenost i
// svetlinu - pa senke, ivice i beli tekst ostaju netaknuti. CSS filter
// hue-rotate() bi dao aproksimaciju i pomerio i ostale boje.
//
// Pokretanje:  node _tools/recolor-truck.js .   (server mora da radi)
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const DIR = process.argv[2] || '.';
const SRC = '/freeship.avif';
const OUT = 'freeship-green.png';
// Cilj: telo kamiona da padne na rgb(40,113,84) - istu zelenu kao "You save $130".
// Ta zelena je HSL(156, .48, .30); crveno telo je HSL(356, .72, .455), pa se
// zasicenje i svetlina skaliraju ~0.66 da zelena ne ispadne neonska/svetla.
const TARGET_HUE = 156;
const SAT_SCALE = 0.66;
const LIGHT_SCALE = 0.66;
const MAX_SAT = 0.55;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const RECOLOR = `(async () => {
  const img = new Image();
  img.src = ${JSON.stringify(SRC)};
  await img.decode();
  const c = document.createElement('canvas');
  c.width = img.naturalWidth; c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const d = ctx.getImageData(0, 0, c.width, c.height);
  const p = d.data;

  const toHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
    if (mx === mn) return [0, 0, l];
    const dd = mx - mn;
    const s = l > 0.5 ? dd / (2 - mx - mn) : dd / (mx + mn);
    let h;
    if (mx === r) h = ((g - b) / dd + (g < b ? 6 : 0));
    else if (mx === g) h = (b - r) / dd + 2;
    else h = (r - g) / dd + 4;
    return [h * 60, s, l];
  };
  const hue2rgb = (p1, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p1 + (q - p1) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p1 + (q - p1) * (2/3 - t) * 6;
    return p1;
  };
  const toRgb = (h, s, l) => {
    h /= 360;
    if (s === 0) return [l * 255, l * 255, l * 255];
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p1 = 2 * l - q;
    return [hue2rgb(p1, q, h + 1/3) * 255, hue2rgb(p1, q, h) * 255, hue2rgb(p1, q, h - 1/3) * 255];
  };

  let changed = 0;
  for (let i = 0; i < p.length; i += 4) {
    if (p[i + 3] < 8) continue;                  // providno
    const [h, s, l] = toHsl(p[i], p[i + 1], p[i + 2]);
    const isRed = (h <= 25 || h >= 335) && s > 0.18 && l > 0.05 && l < 0.95;
    if (!isRed) continue;                        // belo/sivo/providno ostaje
    const [r2, g2, b2] = toRgb(
      ${TARGET_HUE},
      Math.min(s * ${SAT_SCALE}, ${MAX_SAT}),
      Math.max(0.04, l * ${LIGHT_SCALE})
    );
    p[i] = Math.round(r2); p[i + 1] = Math.round(g2); p[i + 2] = Math.round(b2);
    changed++;
  }
  ctx.putImageData(d, 0, 0);
  return JSON.stringify({ w: c.width, h: c.height, changed, total: p.length / 4,
    data: c.toDataURL('image/png') });
})()`;

(async () => {
  const P = 9611;
  const proc = spawn(CHROME, ['--headless=new','--disable-gpu','--no-sandbox',
    `--remote-debugging-port=${P}`, '--user-data-dir=' + process.env.TEMP + '\\recolorprof',
    'about:blank'], { stdio: 'ignore' });
  let t;
  for (let i = 0; i < 60; i++) {
    try { const l = await (await fetch(`http://127.0.0.1:${P}/json`)).json(); t = l.find(x => x.type === 'page'); if (t) break; } catch {}
    await sleep(500);
  }
  if (!t) { console.log('Chrome se nije pokrenuo'); proc.kill(); return; }
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let id = 0; const pend = new Map();
  ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); } });
  const send = (me, pa = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method: me, params: pa })); });

  await send('Page.enable'); await send('Runtime.enable');
  await send('Page.navigate', { url: 'http://localhost:8080/products/nattokinase' });
  await sleep(4000);

  const res = await send('Runtime.evaluate', { expression: RECOLOR, awaitPromise: true, returnByValue: true });
  if (res.result && res.result.exceptionDetails) { console.log('greska:', JSON.stringify(res.result.exceptionDetails)); ws.close(); proc.kill(); return; }
  const out = JSON.parse(res.result.result.value);
  const b64 = out.data.replace(/^data:image\/png;base64,/, '');
  const abs = path.join(DIR, OUT);
  fs.writeFileSync(abs, Buffer.from(b64, 'base64'));
  console.log(`${OUT}  ${out.w}x${out.h}  prebojano ${out.changed} od ${out.total} piksela  ${(fs.statSync(abs).size / 1024).toFixed(1)} KB`);
  ws.close(); proc.kill();
})();
