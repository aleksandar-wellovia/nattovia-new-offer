// Lokalni server za offline kopiju nattovia.com/products/nattokinase
// Pokretanje:  node serve.js       ->  http://localhost:8080
//
// Stranica se servira iz KORENA jer su sve putanje u index.html relativne
// ("assets/..."), da bi ista kopija radila i ovde i na GitHub Pages, gde sajt
// zivi pod /<repo>/ i root-apsolutne putanje bi promasile.
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT = __dirname;
const PORT = process.env.PORT || 8080;
const OLD_PAGE_PATH = '/products/nattokinase';   // stara putanja -> redirect na /

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.avif': 'image/avif',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.otf': 'font/otf', '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.mp3': 'audio/mpeg',
  '.map': 'application/json; charset=utf-8',
};

const LOG_404 = process.env.LOG_404 === '1';

function sendFile(res, file, type) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('404'); }
    res.writeHead(200, {
      'Content-Type': type || MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': st.size,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    fs.createReadStream(file).pipe(res);
  });
}

function sendJson(res, obj) {
  const body = Buffer.from(JSON.stringify(obj));
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': body.length,
    'Access-Control-Allow-Origin': '*',
  });
  res.end(body);
}

http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let p;
  try { p = decodeURIComponent(parsed.pathname); } catch { p = parsed.pathname; }

  // stranica je u korenu
  if (p === '/' || p === '' || p === '/index.html') {
    return sendFile(res, path.join(ROOT, 'index.html'), MIME['.html']);
  }

  // stara putanja iz ranije verzije -> koren
  if (p === OLD_PAGE_PATH || p === OLD_PAGE_PATH + '/') {
    res.writeHead(302, { Location: '/' });
    return res.end();
  }

  // Shopify runtime endpointi koje skripte pozivaju
  if (p === OLD_PAGE_PATH + '.js') return sendFile(res, path.join(ROOT, '_api', 'product.js.json'), MIME['.json']);
  if (p === '/cart.js' || p === '/cart/update.js' || p === '/cart/change.js') {
    return sendFile(res, path.join(ROOT, '_api', 'cart.js.json'), MIME['.json']);
  }
  if (p === '/cart/add.js') return sendJson(res, { status: 200, items: [] });

  // staticki fajlovi
  const file = path.join(ROOT, path.normalize(p).replace(/^([/\\])+/, ''));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }

  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      if (LOG_404) console.log('404', req.method, req.url);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 ' + p);
    }
    sendFile(res, file);
  });
}).listen(PORT, () => {
  console.log('Nattovia offline kopija:  http://localhost:' + PORT + '/');
});
