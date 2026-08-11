// Give each fonts.googleapis.com CSS its own file (query was being dropped, so
// three different @font-face sheets collapsed into one and overwrote each other).
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const crypto = require('crypto');

const OUT_DIR = process.argv[2];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const hash = (s, n = 6) => crypto.createHash('sha1').update(s).digest('hex').slice(0, n);
const safeSeg = (s) => s.replace(/[<>:"\\|?*\x00-\x1f]/g, '_') || '_';

async function get(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': '*/*' }, redirect: 'follow' });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return Buffer.from(await res.arrayBuffer());
}

function gstaticLocal(url) {
  const u = new URL(url);
  return ['assets', safeSeg(u.host), ...u.pathname.split('/').filter(Boolean).map(safeSeg)].join('/');
}

(async () => {
  const manifestPath = path.join(OUT_DIR, '_manifest.json');
  const manifest = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));

  const targets = manifest.filter(e => e.url.includes('fonts.googleapis.com'));
  console.log('google fonts sheets:', targets.length);

  for (const entry of targets) {
    const u = new URL(entry.url);
    const stem = (path.basename(u.pathname) || 'css').replace(/\.css$/, '');
    const localRel = `assets/${safeSeg(u.host)}/${stem}-q${hash(u.search)}.css`;

    let css = (await get(entry.url)).toString('utf8');

    // pull down every font file this sheet references, then point at local copies
    const urls = [...css.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^'")]+))\s*\)/g)]
      .map(m => ((m[1] ?? m[2] ?? m[3]) || '').trim())
      .filter(v => /^https?:\/\//.test(v));

    for (const fu of [...new Set(urls)]) {
      const rel = gstaticLocal(fu);
      const abs = path.join(OUT_DIR, rel);
      if (!fs.existsSync(abs)) {
        try {
          await fsp.mkdir(path.dirname(abs), { recursive: true });
          await fsp.writeFile(abs, await get(fu));
        } catch (e) { console.log('  FAIL font', fu, e.message); continue; }
      }
      const target = path.relative(path.dirname(localRel), rel).split(path.sep).join('/');
      css = css.split(fu).join(target);
      if (!manifest.some(x => x.url === fu)) manifest.push({ url: fu, file: rel });
    }

    const absCss = path.join(OUT_DIR, localRel);
    await fsp.mkdir(path.dirname(absCss), { recursive: true });
    await fsp.writeFile(absCss, css, 'utf8');

    const fams = [...new Set([...css.matchAll(/font-family:\s*'([^']+)'/g)].map(m => m[1]))];
    console.log(`  ${localRel}  <- ${u.search.slice(0, 60)}  [${fams.join(', ')}]  ${urls.length} fonts`);

    entry.file = localRel;
  }

  // drop the stale collided file
  const stale = path.join(OUT_DIR, 'assets', 'fonts.googleapis.com', 'css2.css');
  if (fs.existsSync(stale) && !manifest.some(e => e.file.endsWith('fonts.googleapis.com/css2.css'))) {
    await fsp.unlink(stale);
    console.log('removed stale css2.css');
  }

  await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 1), 'utf8');
  console.log('manifest updated');
})();
