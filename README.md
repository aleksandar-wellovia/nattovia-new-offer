# Nattovia — offline kopija product stranice

Izvor: `https://nattovia.com/products/nattokinase`

## Pokretanje

Dupli klik na **`START.bat`**, ili:

```
node serve.js
```

Stranica: **http://localhost:8080/products/nattokinase**
(koren `/` automatski preusmerava tamo)

> **Bitno:** stranica se servira na putanji `/products/nattokinase`, a ne na `/`.
> Theme i app skripte grade URL-ove iz `window.location.pathname` — npr. Kaching
> Bundles traži `window.location.pathname + '.js'`. Ako se servira sa korena,
> offer blok sa 3 bundle opcije se ne iscrta.
>
> Iz istog razloga `index.html` **ne radi** ako se otvori direktno kao `file://` —
> mora preko servera.

## Struktura

```
index.html              prepravljena stranica (sve putanje lokalne)
_original.html          netaknuti HTML sa live sajta
_manifest.json          mapa: originalni URL -> lokalni fajl
_download-report.txt    log preuzimanja
_api/                   snimljeni Shopify runtime odgovori
  product.js.json         -> /products/nattokinase.js
  cart.js.json            -> /cart.js
_tools/                 skripte za ponovno preuzimanje (vidi dole)
assets/<host>/<putanja> svi asseti, sa originalnom strukturom putanja
serve.js                lokalni server
```

Struktura putanja unutar `assets/` je namerno identična originalnoj. ES-moduli se
uvoze po imenu fajla (`loader.js` radi `import("./kaching-bundles.js")`), pa bi
preimenovanje polomilo lanac Kaching Bundles skripti.

## Osvežavanje kopije

```
node _tools/mirror.js "https://nattovia.com/products/nattokinase" "."
node _tools/fix-google-fonts.js "."
node _tools/rewrite-html.js "."
```

Ako menjaš samo rewrite logiku, dovoljan je `rewrite-html.js` — regeneriše
`index.html` iz `_original.html` + `_manifest.json`, bez ponovnog skidanja.

## Offer blok (Kaching Bundles)

Blok sa 3 bundle opcije **ne stoji u HTML-u** — crta ga app iz dva izvora:

| Deo | Izvor |
|---|---|
| Cena (npr. $59.99) | pretplatna cena varijante u `<script class="kaching-bundles-product">` |
| Precrtana cena | `compareAtPrice` iste varijante |
| Naslov / „You save…" / badge | Shopify Storefront GraphQL `FetchDealBlocks` — **živi poziv** |
| Sličice bundle-ova | GraphQL `FetchMediaImages` — **živi poziv** |

Ta dva GraphQL poziva se lokalno presreću (patch na `window.fetch`, ubačen na vrh
`<head>`, označen `<!-- nv-local-offer -->`) i odgovaraju iz `_api/`. Zato blok
radi i bez interneta, a i menja se bez diranja live prodavnice.

### Izmena cena / naziva

Otvori `_tools/apply-offer.js`, izmeni `OFFER` niz na vrhu, pa:

```
node _tools/apply-offer.js .
```

Trenutna ponuda:

| Bundle | Cena | Precrtano | Ušteda | Badge |
|---|---|---|---|---|
| Buy One | $29.99 | $59.99 | You save $30 | — |
| Buy 2 Get 1 Free Gift | $59.99 | $144.98 | You save $85 | Most Popular |
| Buy 3 Get 2 Free Gifts | $89.99 | $219.97 | You save $130 | Free Shipping |

### Veliki badge iznad bloka

Prati izabrani bundle. Sva tri prikazuju uštedu u dolarima, preko `topBadge`
polja u `OFFER` nizu:

| Izabran bundle | Cena gore | Badge |
|---|---|---|
| Buy One | $29.99 / $59.99 | Memorial Day Sale – Save $30 |
| Buy 2 Get 1 Free Gift | $59.99 / $144.98 | Memorial Day Sale – Save $85 |
| Buy 3 Get 2 Free Gifts | $89.99 / $219.97 | Memorial Day Sale – Save $130 |

Ako se `topBadge` izostavi, theme vraća automatski računat procenat iz prikazanih
cena (bilo bi 50% / 59% / 59%).

### Linija „BUY ONCE — NO SAVINGS … →"

Takođe prati izabrani bundle, preko `buyOnce` polja:

| Izabran bundle | Linija |
|---|---|
| Buy One | BUY ONCE — NO SAVINGS $30 → |
| Buy 2 Get 1 Free Gift | BUY ONCE — NO SAVINGS $85 → |
| Buy 3 Get 2 Free Gifts | BUY ONCE — NO SAVINGS $130 → |

Bez `buyOnce`, theme tu prikaže jednokratnu cenu varijante ($49.94 / $74.94 /
$112.44).

### Sličice bundle-ova

| Bundle | Slika |
|---|---|
| Buy One | originalna Kaching sličica (skinuta lokalno) |
| Buy 2 Get 1 Free Gift | `two-plus-one.png` |
| Buy 3 Get 2 Free Gifts | `three-plus-two.png` |

Postavlja se `image` poljem u `OFFER` nizu. Slike stoje u korenu foldera —
zameni fajl istim imenom i sličica se menja bez ikakve izmene koda.

Kaching svim sličicama daje kvadrat **48×48**, u kom bi se široka „proizvod +
poklon" slika svela na 48×24. Zato `IMAGE_SLOT` u `apply-offer.js` daje svim
barovima isti slot — tako su kesice jednako velike u svim redovima, a naslovi
počinju u istoj liniji, kao kod kompetitora:

```js
const IMAGE_SLOT = { width: '152px', height: '52px', position: 'center' };
```

`position` je `object-position` — `'center'`, `'left center'` ili `'right center'`.
Slika 3-pack-a skoro popunjava slot, pa se na njoj centriranje ne primećuje.

### Panel „GIFTS UNLOCKED"

Stoji ispod treće kartice ponude. Nije deo Kaching app-a — ubacuje ga skripta iz
`<!-- nv-local-offer -->` bloka, čim se barovi iscrtaju (uz `MutationObserver`,
da se vrati ako Kaching ponovo iscrta blok).

| Poklon | Slika | Visina slike | Precrtano | Otključava |
|---|---|---|---|---|
| FREE Shipping | `freeship-green.png` | 60px | $9.95 | Buy One |
| FREE Glass Jar | `gift1.png` | 84px | $24.95 | Buy 2 Get 1 Free Gift |
| FREE Softgel Case | `gift2.png` | 84px | $14.95 | Buy 3 Get 2 Free Gifts |

### Zaključavanje po nivou

Izabran bar N otključava prvih N+1 poklona; ostali su zaključani — zamućena
slika/cena/naziv, preko toga katanac i natpis „Locked".

Stanje se prati preko klase `kaching-bundles__bar--selected` na barovima, kroz
`MutationObserver` sa `attributeFilter: ['class']`. Nije vezano za theme skriptu
(`selectedBarIndex` je u njenom closure-u i nedostupan spolja).

Tekst i katanac koriste `--bar-subtitle-color`; podešavanje je `GIFTS.lock`
(`label`, `color`, `blur`, `opacity`).

### Zeleni kamion

`freeship-green.png` nastaje iz originalnog `freeship.avif`:

```
node _tools/recolor-truck.js .      # server mora da radi
```

Skripta menja samo **nijansu** crvenim pikselima i skalira zasićenje/svetlinu na
brend zelenu, pa senke, ivice i beli tekst ostaju netaknuti. CSS `hue-rotate()`
bi dao aproksimaciju i pomerio i ostale boje. Original `freeship.avif` se ne dira.

Podešava se `GIFTS` objektom u `apply-offer.js` — stavke, cene, boje, visine
slika. `enabled: false` uklanja panel.

Četiri stvari koje nisu očigledne:

- Slike imaju **različite visine ali isti okvir**. Okvir je `SLOT` (najveća od
  visina, 84px), a manje slike se spuštaju vertikalnim paddingom. Da svaka slika
  ima svoju visinu okvira, cene i nazivi ispod bi pali na različite visine i
  mreža bi se raspala. `imageHeight` po stavci menja samo vidljivu veličinu.

- Natpis je pravi `<legend>` unutar `<fieldset>`, pa **sam preseca ivicu okvira**.
  Alternativa (apsolutno pozicioniran span sa bojom pozadine) bi zahtevala da se
  pogodi boja pozadine iza njega i pukla bi ako se pozadina promeni.
- Boja ivice nije fiksna vrednost nego `var(--bar-border-color)` — **ista siva
  kojom Kaching ocrtava neizabrane kartice** i liniju pored „Low Stock - Selling
  Fast" (`rgba(58, 96, 81, .3)`). Isto važi za `--bar-border-radius` (7px) i za
  boju naziva: `var(--bar-subtitle-color)` je ista zelena kao „You save $130"
  (`rgb(40, 113, 84)`). Ako se tema promeni, panel prati.
- Kolone su `flex: 1 1 0`, dakle **jednake**, da bi slike i tekst bili na
  pravilnoj mreži i sve centrirano. Najduži naziv se zbog toga prelama u dva
  reda — to je namerno.

Na mobilnom (≤480px) fontovi i slike se smanjuju (58px umesto 72px); nazivi se
prelamaju u dva reda jer tri ne mogu stati u 390px — nema horizontalnog preliva.

Pretplatni sloj nije diran: prikazane cene su i dalje **pretplatne** („Subscribe &
save"), pa ispod bloka stoji „Refilled every month", „Skip, Pause, or Cancel
Anytime" i „BUY ONCE — NO SAVINGS $74.94 →" (jednokratne cene su ostale
$49.94 / $74.94 / $112.44).

> Ako ponovo pokreneš `mirror.js`, `index.html` se regeneriše iz nule — tada
> ponovo pokreni `apply-offer.js` da vratiš ponudu.

## Šta ne radi offline (i zašto)

| Stvar | Razlog |
|---|---|
| Add to Cart / checkout | POST na Shopify backend, server-side |
| Shopify analytics (monorail, web pixels, GTM) | live endpointi |
| Prefetch `checkout-web` bandla | Shop Pay vuče checkout sa Shopify CDN-a |
| `nattovia-check-mark-white-*.webp` | **404 i na live sajtu** — ista rupa u prikazu |
| `<a>` linkovi na druge stranice | vode na live sajt (nisu skinute) |

Jedina JS greška u konzoli (`TypeError ... showDeal`) postoji **i na live sajtu**,
na istoj liniji — nije posledica skidanja.
