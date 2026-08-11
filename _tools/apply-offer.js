// Primenjuje novu ponudu na lokalnu kopiju.
//
// Blok crta Kaching Bundles app iz dva izvora:
//   1. <script class="kaching-bundles-product">  -> cene (pretplatna cena + compareAtPrice)
//   2. Shopify Storefront GraphQL "FetchDealBlocks" -> naslovi, "You save", badge
// Drugi je ZIV poziv na prodavnicu, pa ga presrecemo lokalno umesto da diramo live podatke.
//
// Pokretanje:  node _tools/apply-offer.js .

const fs = require('fs');
const path = require('path');

const DIR = process.argv[2] || '.';
const INDEX = path.join(DIR, 'index.html');
const API = path.join(DIR, '_api');

// --- nova ponuda, redom kojim se prikazuju barovi -------------------------
// topBadge (opciono): tekst velikog badge-a IZNAD bloka kad je taj bar izabran.
// Ako se izostavi, radi se podrazumevani procenat ("Save 59%").
// buyOnce (opciono): iznos u liniji "BUY ONCE — NO SAVINGS ... →" ispod bloka.
// Ako se izostavi, theme prikaze jednokratnu cenu varijante.
// image (opciono): putanja do slicice tog bara. Ako se izostavi, koristi se
// originalna Kaching slika skinuta sa _tools/fetch-bundle-images.js.
const OFFER = [
  { title: 'Buy One',                subtitle: 'You save $30',  badge: '',              price: 2999, compareAt: 5999,
    topBadge: 'Save $30',  buyOnce: '$30' },
  { title: 'Buy 2 Get 1 Free Gift',  subtitle: 'You save $85',  badge: 'Most Popular',  price: 5999, compareAt: 14498,
    topBadge: 'Save $85',  buyOnce: '$85',  image: 'two-plus-one.png' },
  { title: 'Buy 3 Get 2 Free Gifts', subtitle: 'You save $130', badge: 'Free Shipping', price: 8999, compareAt: 21997,
    topBadge: 'Save $130', buyOnce: '$130', image: 'three-plus-two.png' },
];

// Okvir za slicicu bara. Kaching podrazumevano daje 48x48 kvadrat, u kom se
// siroka "proizvod + poklon" slika svede na 48x24 i ne vidi se nista.
//
// Umesto toga svim barovima dajemo ISTI slot: fiksna sirina + visina, slika se
// uklapa po visini i centrira u slotu. Tako su kesice jednako velike u svim
// redovima, a naslovi pocinju u istoj liniji - kao kod kompetitora.
// position: 'center' | 'left center' | 'right center'
const IMAGE_SLOT = { width: '152px', height: '52px', position: 'center' };

// --- panel "GIFTS UNLOCKED" ispod poslednje kartice ------------------------
// Slike stoje u korenu foldera; zameni fajl istim imenom i slika se menja.
const GIFTS = {
  enabled: true,
  legend: 'GIFTS UNLOCKED',
  // imageHeight po stavci je opciono; bez njega vazi GIFTS.imageHeight ispod.
  items: [
    // freeship-green.png pravi _tools/recolor-truck.js iz originalnog freeship.avif
    { image: 'freeship-green.png', was: '$9.95',  name: 'FREE Shipping',      imageHeight: 60 },
    { image: 'gift1.png',          was: '$24.95', name: 'FREE Glass Jar',     imageHeight: 84 },
    { image: 'gift2.png',          was: '$14.95', name: 'FREE Softgel Case',  imageHeight: 84 },
  ],
  // izgled
  // --bar-border-color je ista siva kojom Kaching ocrtava neizabrane kartice i
  // liniju pored "Low Stock - Selling Fast". Uzimamo promenljivu, ne fiksnu
  // vrednost, da panel prati temu ako se boje promene.
  borderColor: 'var(--bar-border-color, rgba(58, 96, 81, .3))',
  borderWidth: '1px',
  borderRadius: 'var(--bar-border-radius, 7px)',
  legendColor: '#2a2a2a',
  // ista zelena kao "You save $130" u karticama iznad (--bar-subtitle-color)
  nameColor: 'var(--bar-subtitle-color, rgba(40, 113, 84, 1))',
  wasColor: '#8b8b8b',
  imageHeight: 72,          // podrazumevana visina slike, u px
  mobileScale: 0.8,         // koliko se slike smanjuju na <=480px
  nameSize: '12px',
  wasSize: '11px',
  // Zakljucavanje: bar 1 otkljucava 1. poklon, bar 2 prva dva, bar 3 sve.
  // Poklon i pod indeksom i je zakljucan dok je izabran bar indeksa < i.
  lock: {
    label: 'Locked',
    color: 'var(--bar-subtitle-color, rgba(40, 113, 84, 1))',
    blur: '4px',
    opacity: 0.4,
  },
};

const money = (c) => '$' + (c / 100).toFixed(2);

// --- helper: zameni sadrzaj <script class="X" ...>...</script> -------------
function patchJsonScript(html, cls, fn) {
  const re = new RegExp(`(<script class="${cls}"[^>]*>)([\\s\\S]*?)(<\\/script>)`);
  const m = html.match(re);
  if (!m) throw new Error('nije nadjen <script class="' + cls + '">');
  const data = JSON.parse(m[2]);
  const out = fn(data);
  return html.replace(re, (_, a, __, c) => a + '\n' + JSON.stringify(out, null, 1) + '\n' + c);
}

let html = fs.readFileSync(INDEX, 'utf8');

// 1) cene u Kaching product JSON-u ------------------------------------------
html = patchJsonScript(html, 'kaching-bundles-product', (p) => {
  const variants = p.product ? p.product.variants : p.variants;
  if (!variants) throw new Error('nema variants u kaching-bundles-product');
  variants.forEach((v, i) => {
    const o = OFFER[i];
    if (!o) return;
    v.compareAtPrice = o.compareAt;
    (v.sellingPlans || []).forEach(sp => {
      sp.price = o.price;
      if ('perDeliveryPrice' in sp) sp.perDeliveryPrice = o.price;
    });
    console.log(`  variant ${i + 1} (${(v.options || []).join('/')}): cena ${money(o.price)}, precrtano ${money(o.compareAt)}`);
  });
  return p;
});

// 2) naslovi/uštede u inline deal-block settings (fallback ako fetch ne prodje)
html = patchJsonScript(html, 'kaching-bundles-deal-block-settings', (s) => {
  s.dealBars.forEach((b, i) => {
    const o = OFFER[i];
    if (!o) return;
    b.title = o.title; b.subtitle = o.subtitle; b.badgeText = o.badge;
  });
  return s;
});

// 3) lokalni odgovor za FetchDealBlocks --------------------------------------
const blocksPath = path.join(API, 'deal-blocks.json');
const blocks = JSON.parse(fs.readFileSync(blocksPath, 'utf8'));
blocks.forEach(block => {
  block.dealBars.forEach((b, i) => {
    const o = OFFER[i];
    if (!o) return;
    b.title = o.title; b.subtitle = o.subtitle; b.badgeText = o.badge;
    console.log(`  bar ${i + 1}: "${o.title}" / "${o.subtitle}" / badge "${o.badge}"`);
  });
});
fs.writeFileSync(blocksPath, JSON.stringify(blocks, null, 1), 'utf8');
fs.writeFileSync(
  path.join(API, 'deal-blocks-response.json'),
  JSON.stringify({ data: { shop: { metafield: { value: JSON.stringify(blocks) } } } }),
  'utf8'
);

// 4) Shopify product.js (theme skripta ga povlaci preko pathname + '.js') ----
const prodPath = path.join(API, 'product.js.json');
const prod = JSON.parse(fs.readFileSync(prodPath, 'utf8'));
prod.variants.forEach((v, i) => {
  const o = OFFER[i];
  if (!o) return;
  v.compare_at_price = o.compareAt;
  (v.selling_plan_allocations || []).forEach(a => {
    a.price = o.price;
    if ('per_delivery_price' in a) a.per_delivery_price = o.price;
    if ('compare_at_price' in a && a.compare_at_price != null) a.compare_at_price = v.price;
  });
});
if ('compare_at_price_min' in prod) prod.compare_at_price_min = Math.min(...OFFER.map(o => o.compareAt));
if ('compare_at_price_max' in prod) prod.compare_at_price_max = Math.max(...OFFER.map(o => o.compareAt));
if ('compare_at_price' in prod) prod.compare_at_price = OFFER[0].compareAt;
fs.writeFileSync(prodPath, JSON.stringify(prod, null, 1), 'utf8');

// 5) veliki badge iznad bloka: per-bar override umesto procenta -------------
// Theme sam racuna "Memorial Day Sale – Save NN%" iz prikazanih cena. Ubacujemo
// pogled u window.NV_TOP_BADGE[selectedBarIndex] pre nego sto padne na procenat.
const BADGE_ORIG = "badgeEl.textContent = 'Memorial Day Sale – Save ' + Math.round((1 - sub / comp) * 100) + '%';";
const BADGE_NEW =
  "badgeEl.textContent = (window.NV_TOP_BADGE && window.NV_TOP_BADGE[selectedBarIndex]) " +
  "? ('Memorial Day Sale – ' + window.NV_TOP_BADGE[selectedBarIndex]) " +
  ": ('Memorial Day Sale – Save ' + Math.round((1 - sub / comp) * 100) + '%');";

if (html.includes(BADGE_ORIG)) {
  html = html.split(BADGE_ORIG).join(BADGE_NEW);
} else if (!html.includes('NV_TOP_BADGE')) {
  throw new Error('nije nadjena linija koja pravi badge iznad bloka');
}

const topBadges = {};
OFFER.forEach((o, i) => { if (o.topBadge) topBadges[i] = o.topBadge; });
Object.entries(topBadges).forEach(([i, t]) =>
  console.log(`  badge gore, bar ${Number(i) + 1}: "Memorial Day Sale – ${t}"`));

// 5b) "BUY ONCE — NO SAVINGS ..." ispod bloka: per-bar override -------------
const ONCE_ORIG = "link.textContent = 'BUY ONCE — NO SAVINGS ' + (price ? formatPrice(price) : '') + ' →';";
const ONCE_NEW =
  "link.textContent = 'BUY ONCE — NO SAVINGS ' + " +
  "((window.NV_BUY_ONCE && window.NV_BUY_ONCE[selectedBarIndex]) || (price ? formatPrice(price) : '')) + ' →';";

if (html.includes(ONCE_ORIG)) {
  html = html.split(ONCE_ORIG).join(ONCE_NEW);
} else if (!html.includes('NV_BUY_ONCE')) {
  throw new Error('nije nadjena linija "BUY ONCE — NO SAVINGS"');
}

const buyOnce = {};
OFFER.forEach((o, i) => { if (o.buyOnce) buyOnce[i] = o.buyOnce; });
Object.entries(buyOnce).forEach(([i, t]) =>
  console.log(`  buy-once, bar ${Number(i) + 1}: "BUY ONCE — NO SAVINGS ${t} →"`));

// 5c) slicice barova: zameni URL u odgovoru za FetchMediaImages -------------
const mediaPath = path.join(API, 'media-images-response.json');
const media = JSON.parse(fs.readFileSync(mediaPath, 'utf8'));
const customImages = [];
OFFER.forEach((o, i) => {
  if (!o.image) return;
  if (!media.data.nodes[i]) throw new Error('nema media node za bar ' + (i + 1));
  const abs = path.join(DIR, o.image.replace(/^\//, ''));
  if (!fs.existsSync(abs)) throw new Error('slika ne postoji: ' + abs);
  media.data.nodes[i].image.url = o.image;
  customImages.push(o.image);
  console.log(`  slika, bar ${i + 1}: ${o.image}`);
});
fs.writeFileSync(mediaPath, JSON.stringify(media), 'utf8');

// 6) presretac: deal-blocks + media slike iz lokalnih fajlova ----------------
const MARK = '<!-- nv-local-offer -->';
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
html = html.replace(new RegExp(esc(MARK) + '[\\s\\S]*?' + esc(MARK)), ''); // ukloni stari ako postoji
// 5d) panel "GIFTS UNLOCKED" ------------------------------------------------
// Koristi <fieldset>/<legend> da bi natpis prirodno "presekao" ivicu okvira,
// bez pogadjanja boje pozadine iza njega.
if (GIFTS.enabled) {
  for (const g of GIFTS.items) {
    const abs = path.join(DIR, g.image.replace(/^\//, ''));
    if (!fs.existsSync(abs)) throw new Error('slika poklona ne postoji: ' + abs);
    console.log(`  poklon: ${g.name.padEnd(30)} ${g.was.padEnd(7)} ${g.image}`);
  }
}

// Slike imaju razlicite visine, ali im okvir mora biti JEDNAK - inace bi cene i
// nazivi ispod pali na razlicite visine i mreza bi se raspala. Zato svaka slika
// dobija isti box (SLOT), a manje se "spustaju" vertikalnim paddingom.
const giftH = (g) => Number(g.imageHeight || GIFTS.imageHeight);
const SLOT = GIFTS.enabled ? Math.max(...GIFTS.items.map(giftH)) : 0;
const SLOT_M = Math.round(SLOT * GIFTS.mobileScale);
const pad = (h, slot) => Math.max(0, Math.round((slot - h) / 2));

const giftsPerItemCss = GIFTS.enabled ? GIFTS.items.map((g, i) => {
  const d = pad(giftH(g), SLOT);
  return d ? `#nv-gifts .nv-gifts__item--${i} img { padding: ${d}px 0; }` : '';
}).filter(Boolean).join('\n') : '';

const giftsPerItemCssMobile = GIFTS.enabled ? GIFTS.items.map((g, i) => {
  const d = pad(Math.round(giftH(g) * GIFTS.mobileScale), SLOT_M);
  return d ? `  #nv-gifts .nv-gifts__item--${i} img { padding: ${d}px 0; }` : '';
}).filter(Boolean).join('\n') : '';

const giftsCss = GIFTS.enabled ? `
#nv-gifts {
  border: ${GIFTS.borderWidth} solid ${GIFTS.borderColor};
  border-radius: ${GIFTS.borderRadius};
  margin: 6px 0 2px;
  padding: 6px 10px 16px;
  min-width: 0;
}
#nv-gifts legend {
  margin-inline-start: 6px;
  padding: 0 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;
  color: ${GIFTS.legendColor};
  line-height: 1;
}
#nv-gifts .nv-gifts__row {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
}
/* Jednake kolone -> slike i tekst su na pravilnoj mrezi i sve je centrirano.
   Najduzi naziv se zbog toga prelama u dva reda, sto je u redu. */
#nv-gifts .nv-gifts__item {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;
}
#nv-gifts .nv-gifts__item img {
  height: ${SLOT}px;
  box-sizing: border-box;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
}
${giftsPerItemCss}
#nv-gifts .nv-gifts__was {
  font-size: ${GIFTS.wasSize};
  color: ${GIFTS.wasColor};
  text-decoration: line-through;
  line-height: 1.1;
}
#nv-gifts .nv-gifts__name {
  font-size: ${GIFTS.nameSize};
  font-weight: 700;
  color: ${GIFTS.nameColor};
  line-height: 1.25;
}
/* "+" se poravnava sa trakom slika, ne sa sredinom cele kolone */
/* --- zakljucan poklon ------------------------------------------------- */
#nv-gifts .nv-gifts__item { position: relative; }
#nv-gifts .nv-gifts__lock {
  display: none;
  position: absolute;
  inset: 0;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: ${Math.round((SLOT - 24) / 2)}px;
  color: ${GIFTS.lock.color};
  pointer-events: none;
}
#nv-gifts .nv-gifts__lock svg { width: 24px; height: 24px; display: block; }
#nv-gifts .nv-gifts__lock span { font-size: ${GIFTS.nameSize}; font-weight: 600; line-height: 1; }
#nv-gifts .nv-gifts__item--locked .nv-gifts__lock { display: flex; }
#nv-gifts .nv-gifts__item--locked img,
#nv-gifts .nv-gifts__item--locked .nv-gifts__was,
#nv-gifts .nv-gifts__item--locked .nv-gifts__name {
  filter: blur(${GIFTS.lock.blur});
  opacity: ${GIFTS.lock.opacity};
}
#nv-gifts .nv-gifts__plus {
  flex: 0 0 auto;
  align-self: flex-start;
  margin-top: ${Math.round((SLOT - 18) / 2)}px;
  width: 18px;
  height: 18px;
  border: 1px solid #d0d0d0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
  color: #9a9a9a;
}
@media (max-width: 480px) {
  #nv-gifts { padding: 5px 5px 13px; }
  #nv-gifts .nv-gifts__name { font-size: 10.5px; }
  #nv-gifts .nv-gifts__was { font-size: 10px; }
  #nv-gifts .nv-gifts__item img { height: ${SLOT_M}px; padding: 0; }
${giftsPerItemCssMobile}
  #nv-gifts .nv-gifts__lock { padding-top: ${Math.round((SLOT_M - 20) / 2)}px; gap: 4px; }
  #nv-gifts .nv-gifts__lock svg { width: 20px; height: 20px; }
  #nv-gifts .nv-gifts__lock span { font-size: 10.5px; }
  #nv-gifts .nv-gifts__plus { margin-top: ${Math.round((SLOT_M - 15) / 2)}px; width: 15px; height: 15px; font-size: 10px; }
}
` : '';

// Kaching pravilo je ".kaching-bundles .kaching-bundles__bar-image" (0,2,0) i
// ubacuje se u runtime, dakle POSLE ovog stylea - na istoj specificnosti bi ono
// pobedilo. Zato "img." u selektoru: (0,2,1) sigurno nadjacava.
const wideCss = (customImages.length || GIFTS.enabled)
  ? `<style>
${customImages.length ? `.kaching-bundles img.kaching-bundles__bar-image {
  width: ${IMAGE_SLOT.width};
  height: ${IMAGE_SLOT.height};
  max-width: none;
  object-fit: contain;
  object-position: ${IMAGE_SLOT.position};
  flex-shrink: 0;
}` : ''}
${giftsCss}</style>`
  : '';

const patch = `${MARK}${wideCss}<script>
window.NV_TOP_BADGE = ${JSON.stringify(topBadges)};
window.NV_BUY_ONCE = ${JSON.stringify(buyOnce)};
(function () {
  var orig = window.fetch;
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    if (url.indexOf('FetchDealBlocks') !== -1) {
      return orig('_api/deal-blocks-response.json', { cache: 'no-store' });
    }
    if (url.indexOf('FetchMediaImages') !== -1) {
      return orig('_api/media-images-response.json', { cache: 'no-store' });
    }
    return orig.apply(this, arguments);
  };
})();

/* --- panel "GIFTS UNLOCKED" ispod poslednje kartice ponude ---------------
   Kaching crta barove u runtime i ume da ih ponovo iscrta, pa panel
   ubacujemo kad se barovi pojave i vracamo ga ako nestane. */
(function () {
  var GIFTS = ${JSON.stringify(GIFTS.enabled ? GIFTS.items : [])};
  var LEGEND = ${JSON.stringify(GIFTS.legend)};
  var LOCK_LABEL = ${JSON.stringify(GIFTS.lock.label)};
  if (!GIFTS.length) return;

  function offerBars() {
    return [].slice.call(document.querySelectorAll('.kaching-bundles__bar'))
      .filter(function (b) { return !b.closest('.kaching-bundles__subscriptions-wrapper'); });
  }

  function build() {
    var fs = document.createElement('fieldset');
    fs.id = 'nv-gifts';
    var lg = document.createElement('legend');
    lg.textContent = LEGEND;
    fs.appendChild(lg);

    var row = document.createElement('div');
    row.className = 'nv-gifts__row';
    GIFTS.forEach(function (g, i) {
      if (i) {
        var plus = document.createElement('span');
        plus.className = 'nv-gifts__plus';
        plus.textContent = '+';
        row.appendChild(plus);
      }
      var item = document.createElement('div');
      item.className = 'nv-gifts__item nv-gifts__item--' + i;

      var img = document.createElement('img');
      img.src = g.image; img.alt = g.name; img.loading = 'lazy';
      item.appendChild(img);

      if (g.was) {
        var was = document.createElement('span');
        was.className = 'nv-gifts__was';
        was.textContent = g.was;
        item.appendChild(was);
      }

      var name = document.createElement('span');
      name.className = 'nv-gifts__name';
      name.textContent = g.name;
      item.appendChild(name);

      var lock = document.createElement('span');
      lock.className = 'nv-gifts__lock';
      lock.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"'
        + ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
        + '<rect x="4" y="10.5" width="16" height="11" rx="2.5" fill="currentColor" stroke="none"></rect>'
        + '<path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"></path></svg>'
        + '<span>' + LOCK_LABEL + '</span>';
      item.appendChild(lock);

      row.appendChild(item);
    });
    fs.appendChild(row);
    return fs;
  }

  function place() {
    if (document.getElementById('nv-gifts')) return true;
    var bars = offerBars();
    if (!bars.length) return false;
    var last = bars[bars.length - 1];
    var card = last.closest('.kaching-bundles__bar-container') || last;
    card.insertAdjacentElement('afterend', build());
    syncLocks();
    return true;
  }

  /* Izabran bar N otkljucava prvih N+1 poklona; ostali su zakljucani. */
  function syncLocks() {
    var panel = document.getElementById('nv-gifts');
    if (!panel) return;
    var bars = offerBars();
    var sel = 0;
    for (var i = 0; i < bars.length; i++) {
      if (bars[i].classList.contains('kaching-bundles__bar--selected')) { sel = i; break; }
    }
    var items = panel.querySelectorAll('.nv-gifts__item');
    for (var j = 0; j < items.length; j++) {
      items[j].classList.toggle('nv-gifts__item--locked', j > sel);
    }
  }

  var tries = 0;
  var iv = setInterval(function () {
    if (place() || ++tries > 60) clearInterval(iv);
  }, 300);

  document.addEventListener('DOMContentLoaded', function () {
    var host = document.querySelector('kaching-bundle') || document.body;
    // childList -> Kaching je ponovo iscrtao blok, panel treba vratiti
    // attributes(class) -> promenjen izabrani bar, treba presloziti katance
    new MutationObserver(function () { place(); syncLocks(); })
      .observe(host, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  });
})();
</script>${MARK}`;
html = html.replace(/<head([^>]*)>/i, (m0) => m0 + '\n' + patch);

fs.writeFileSync(INDEX, html, 'utf8');
console.log('\nindex.html azuriran.');
