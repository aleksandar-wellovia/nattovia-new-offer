// Mirror v2 — preserves original host/path structure so ES-module relative
// imports and CSS relative url() keep resolving. Also follows JS module imports.
// Usage: node mirror2.js <pageUrl> <outDir>
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const crypto = require('crypto');

const PAGE_URL = process.argv[2];
const OUT_DIR = process.argv[3];
const CONCURRENCY = 8;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const ASSET_EXT = new Set(['css','js','mjs','png','jpg','jpeg','gif','webp','avif','svg','ico','bmp','woff','woff2','ttf','otf','eot','mp4','webm','ogv','mp3','wav','json','map']);
// Only JS keeps its bare filename (ES-module siblings are imported by name).
// CSS must keep a query hash: fonts.googleapis.com/css2?family=A and ?family=B
// share one pathname and would otherwise overwrite each other.
const CODE_EXT = new Set(['js','mjs','map']);

const EXT_FROM_CT = (ct) => {
  ct = (ct || '').split(';')[0].trim();
  const m = {'text/css':'css','application/javascript':'js','text/javascript':'js','application/x-javascript':'js',
    'image/png':'png','image/jpeg':'jpg','image/gif':'gif','image/webp':'webp','image/avif':'avif','image/svg+xml':'svg',
    'image/x-icon':'ico','image/vnd.microsoft.icon':'ico','font/woff':'woff','font/woff2':'woff2','application/font-woff':'woff',
    'application/font-woff2':'woff2','font/ttf':'ttf','font/otf':'otf','application/json':'json','video/mp4':'mp4','text/html':'html'};
  return m[ct] || '';
};

const hash = (s, n = 6) => crypto.createHash('sha1').update(s).digest('hex').slice(0, n);
const safeSeg = (s) => s.replace(/[<>:"\\|?*\x00-\x1f]/g, '_').replace(/^\.+$/, '_') || '_';

function normalizeUrl(raw, base) {
  if (!raw) return null;
  raw = raw.trim().replace(/&amp;/g, '&').replace(/\\\//g, '/');
  if (!raw || /^(data:|blob:|javascript:|mailto:|tel:|#)/i.test(raw)) return null;
  try {
    const u = new URL(raw, base);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
    u.hash = '';
    return u.href;
  } catch { return null; }
}

// -------- local path: assets/<host>/<original path> --------
function localPathFor(url, ext) {
  const u = new URL(url);
  let segs = u.pathname.split('/').filter(Boolean).map(safeSeg);
  let file = segs.pop() || 'index';
  segs = segs.map(s => (s.length > 60 ? s.slice(0, 54) + '-' + hash(s) : s));

  let stem = file, fext = '';
  const dot = file.lastIndexOf('.');
  if (dot > 0) { stem = file.slice(0, dot); fext = file.slice(dot + 1).toLowerCase(); }
  if (!fext || !ASSET_EXT.has(fext)) fext = ext || fext || 'bin';

  // code files: ignore query so sibling imports by bare name resolve
  if (!CODE_EXT.has(fext) && u.search) stem += '-q' + hash(u.search);
  if (stem.length > 70) stem = stem.slice(0, 62) + '-' + hash(file);

  return ['assets', safeSeg(u.host), ...segs, stem + '.' + fext].join('/');
}

// ---------------- state ----------------
const assets = new Map(); // absUrl -> rec
const queue = [];
const enqueued = new Set();
const enqueue = (u) => { if (u && !enqueued.has(u)) { enqueued.add(u); queue.push(u); } };

async function fetchWithRetry(url, tries = 3) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 45000);
      const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow',
        headers: { 'User-Agent': UA, 'Accept': '*/*', 'Accept-Language': 'en-US,en;q=0.9', 'Referer': PAGE_URL } });
      clearTimeout(t);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return { buf: Buffer.from(await res.arrayBuffer()), ct: res.headers.get('content-type') || '' };
    } catch (e) { lastErr = e; await new Promise(r => setTimeout(r, 400 * (i + 1))); }
  }
  throw lastErr;
}

// ---------------- extraction ----------------
const EXTS_RE = 'css|js|mjs|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|eot|mp4|webm|mp3';

function extractFromHtml(html, base) {
  const out = new Set();
  const add = (u) => { const n = normalizeUrl(u, base); if (n) out.add(n); };
  let m;

  const attrRe = /\b(?:href|src|data-src|data-original|data-bg|poster)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/gi;
  while ((m = attrRe.exec(html))) add(m[2] ?? m[3] ?? m[4]);

  const contentRe = /\bcontent\s*=\s*("([^"]*)"|'([^']*)')/gi;
  while ((m = contentRe.exec(html))) {
    const v = m[2] ?? m[3] ?? '';
    if (new RegExp(`\\.(?:${EXTS_RE})(?:\\?|$)`, 'i').test(v)) add(v);
  }

  const srcsetRe = /\b(?:srcset|data-srcset|imagesrcset)\s*=\s*("([^"]*)"|'([^']*)')/gi;
  while ((m = srcsetRe.exec(html))) {
    for (const part of (m[2] ?? m[3] ?? '').split(',')) add(part.trim().split(/\s+/)[0]);
  }

  const urlFnRe = /url\(\s*['"]?([^'")]+)['"]?\s*\)/gi;
  while ((m = urlFnRe.exec(html))) add(m[1]);

  // absolute urls anywhere, incl. backslash-escaped JSON form
  const plain = new RegExp(`(?:https?:)?//[^\\s"'\`<>()\\\\]+?\\.(?:${EXTS_RE})(?:\\?[^\\s"'\`<>()\\\\]*)?`, 'gi');
  while ((m = plain.exec(html))) add(m[0]);
  const escd = new RegExp(`(?:https?:)?\\\\/\\\\/(?:[^\\s"'\`<>()]|\\\\/)+?\\.(?:${EXTS_RE})(?:\\?[^\\s"'\`<>()\\\\]*)?`, 'gi');
  while ((m = escd.exec(html))) add(m[0]);

  return [...out];
}

function extractFromCss(css, base) {
  const out = new Set();
  const add = (u) => { const n = normalizeUrl(u, base); if (n) out.add(n); };
  let m;
  const urlFnRe = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^'")]+))\s*\)/gi;
  while ((m = urlFnRe.exec(css))) add(m[1] ?? m[2] ?? m[3]);
  const impRe = /@import\s+(?:url\(\s*)?["']([^"']+)["']/gi;
  while ((m = impRe.exec(css))) add(m[1]);
  return [...out];
}

function extractFromJs(js, base) {
  const out = new Set();
  const add = (u) => { const n = normalizeUrl(u, base); if (n) out.add(n); };
  let m;
  // static + dynamic imports and re-exports
  const impRe = /(?:\bimport\s*\(\s*|\bimport\s*|\bfrom\s*|\bexport\s+\*\s+from\s*)["']([^"']+\.(?:js|mjs|css))["']/gi;
  while ((m = impRe.exec(js))) add(m[1]);
  // new URL("x.js", import.meta.url / script.src)
  const urlRe = /new\s+URL\s*\(\s*["']([^"']+\.(?:js|mjs|css|json))["']/gi;
  while ((m = urlRe.exec(js))) add(m[1]);
  return [...out];
}

// ---------------- download ----------------
async function processQueue() {
  let active = 0, idx = 0;
  return new Promise((resolve) => {
    const tick = () => {
      if (idx >= queue.length && active === 0) return resolve();
      while (active < CONCURRENCY && idx < queue.length) {
        const url = queue[idx++];
        active++;
        (async () => {
          try {
            const { buf, ct } = await fetchWithRetry(url);
            let ext = (path.extname(new URL(url).pathname).slice(1) || '').toLowerCase();
            if (!ext || !ASSET_EXT.has(ext)) ext = EXT_FROM_CT(ct) || ext;
            if (ext === 'html') { assets.set(url, { skip: true }); return; }
            const localRel = localPathFor(url, ext);
            assets.set(url, { localRel, ext, buf, ct, ok: true });
            if (ext === 'css') for (const s of extractFromCss(buf.toString('utf8'), url)) enqueue(s);
            if (ext === 'js' || ext === 'mjs') for (const s of extractFromJs(buf.toString('utf8'), url)) enqueue(s);
          } catch (e) {
            assets.set(url, { ok: false, err: String(e.message || e) });
          } finally { active--; tick(); }
        })();
      }
    };
    tick();
  });
}

// ---------------- rewriting ----------------
function variantsOf(url) {
  const noProto = url.replace(/^https?:/, '');
  const esc = (s) => s.replace(/\//g, '\\/');
  const amp = (s) => s.replace(/&/g, '&amp;');
  const set = new Set([url, noProto, esc(url), esc(noProto), amp(url), amp(noProto)]);
  try {
    const u = new URL(url);
    if (u.origin === new URL(PAGE_URL).origin) {
      const rr = u.pathname + u.search;
      set.add(rr); set.add(esc(rr)); set.add(amp(rr));
    }
  } catch {}
  return [...set].filter(v => v && v.length >= 8);
}

function rewriteHtml(text, replacements) {
  for (const [url, localRel] of replacements) {
    const target = '/' + localRel;                 // root-absolute: page is served at /products/nattokinase
    for (const v of variantsOf(url)) {
      if (!text.includes(v)) continue;
      const repl = v.includes('\\/') ? target.replace(/\//g, '\\/') : target;
      text = text.split(v).join(repl);
    }
  }
  return text;
}

function rewriteCss(text, consumerRel, replacements) {
  for (const [url, localRel] of replacements) {
    const rel = path.relative(path.dirname(consumerRel), localRel).split(path.sep).join('/');
    const target = rel.startsWith('.') ? rel : './' + rel;
    for (const v of variantsOf(url)) {
      if (!text.includes(v)) continue;
      text = text.split(v).join(target);
    }
  }
  return text;
}

// ---------------- main ----------------
(async () => {
  console.log('Fetching page:', PAGE_URL);
  const { buf: pageBuf } = await fetchWithRetry(PAGE_URL);
  let html = pageBuf.toString('utf8');
  await fsp.mkdir(OUT_DIR, { recursive: true });
  await fsp.writeFile(path.join(OUT_DIR, '_original.html'), html, 'utf8');

  let base = PAGE_URL;
  const bm = html.match(/<base[^>]+href\s*=\s*["']([^"']+)["']/i);
  if (bm) { try { base = new URL(bm[1], PAGE_URL).href; } catch {} }

  const found = extractFromHtml(html, base);
  console.log('candidates in HTML:', found.length);
  found.forEach(enqueue);
  await processQueue();

  let ok = 0, fail = 0, skipped = 0;
  for (const [, r] of assets) { if (r.skip) skipped++; else if (r.ok) ok++; else fail++; }
  console.log(`downloaded ${ok}, failed ${fail}, skipped(html) ${skipped}`);

  const replacements = [...assets.entries()]
    .filter(([, r]) => r && r.ok)
    .map(([u, r]) => [u, r.localRel])
    .sort((a, b) => b[0].length - a[0].length);

  for (const [, rec] of assets) {
    if (!rec || !rec.ok) continue;
    const abs = path.join(OUT_DIR, rec.localRel);
    await fsp.mkdir(path.dirname(abs), { recursive: true });
    if (rec.ext === 'css') {
      await fsp.writeFile(abs, rewriteCss(rec.buf.toString('utf8'), rec.localRel, replacements), 'utf8');
    } else {
      await fsp.writeFile(abs, rec.buf);            // JS untouched: relative imports resolve naturally
    }
  }

  html = rewriteHtml(html, replacements);
  const origin = new URL(PAGE_URL).origin;
  const selfPath = new URL(PAGE_URL).pathname;
  html = html.replace(/(<a\b[^>]*\bhref\s*=\s*")(\/(?!\/)[^"]*)"/gi, (m0, p1, p2) =>
    (p2.startsWith('/assets/') || p2 === selfPath) ? m0 : p1 + origin + p2 + '"');

  await fsp.writeFile(path.join(OUT_DIR, 'index.html'), html, 'utf8');

  const manifest = [...assets.entries()].filter(([, r]) => r && r.ok).map(([u, r]) => ({ url: u, file: r.localRel }));
  await fsp.writeFile(path.join(OUT_DIR, '_manifest.json'), JSON.stringify(manifest, null, 1), 'utf8');

  const failed = [...assets.entries()].filter(([, r]) => r && r.ok === false);
  await fsp.writeFile(path.join(OUT_DIR, '_download-report.txt'),
    `page: ${PAGE_URL}\nok: ${ok}\nfailed: ${fail}\n\n` + failed.map(([u, r]) => `FAIL ${u} -> ${r.err}`).join('\n'), 'utf8');

  console.log('failures:');
  failed.forEach(([u, r]) => console.log(' ', r.err, u));
})();
