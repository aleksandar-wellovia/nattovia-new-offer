// Skida 3 Kaching bundle slicice lokalno i pravi odgovor za FetchMediaImages,
// da blok ne zavisi od interneta.  Pokretanje: node _tools/fetch-bundle-images.js .
const fs = require('fs');
const path = require('path');

const DIR = process.argv[2] || '.';
const NODES = [
  { id: 'gid://shopify/MediaImage/32686552711353', url: 'https://cdn.shopify.com/s/files/1/0776/1805/3305/files/Kaching-Bundles-1x_300x300.png?v=1781286666' },
  { id: 'gid://shopify/MediaImage/32686564737209', url: 'https://cdn.shopify.com/s/files/1/0776/1805/3305/files/Kaching-Bundles-3x_300x300.png?v=1781286686' },
  { id: 'gid://shopify/MediaImage/32686573060281', url: 'https://cdn.shopify.com/s/files/1/0776/1805/3305/files/Kaching-Bundles-5x_300x300.png?v=1781286701' },
];

// bez avif/webp u Accept-u -> CDN vraca pravi PNG, a ne AVIF pod .png imenom
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Accept': 'image/png,image/jpeg,*/*;q=0.8',
};

const sniff = (b) => {
  if (b[0] === 0x89 && b[1] === 0x50) return 'png';
  if (b[0] === 0xff && b[1] === 0xd8) return 'jpg';
  if (b.slice(4, 8).toString('latin1') === 'ftyp') return 'avif';
  if (b.slice(0, 4).toString('latin1') === 'RIFF') return 'webp';
  return 'bin';
};

(async () => {
  const out = [];
  for (const n of NODES) {
    const res = await fetch(n.url, { headers: HEADERS });
    if (!res.ok) throw new Error('HTTP ' + res.status + ' ' + n.url);
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = sniff(buf);
    const u = new URL(n.url);
    const base = path.basename(u.pathname).replace(/\.[^.]*$/, '');
    const rel = `assets/${u.host}${path.dirname(u.pathname)}/${base}.${ext}`.replace(/\\/g, '/');
    const abs = path.join(DIR, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, buf);
    console.log(`  ${rel}  (${ext}, ${(buf.length / 1024).toFixed(1)} KB)`);
    out.push({ id: n.id, image: { url: '/' + rel } });
  }
  fs.writeFileSync(
    path.join(DIR, '_api', 'media-images-response.json'),
    JSON.stringify({ data: { nodes: out }, extensions: { cost: { requestedQueryCost: 2 } } }),
    'utf8'
  );
  console.log('_api/media-images-response.json napisan');
})();
