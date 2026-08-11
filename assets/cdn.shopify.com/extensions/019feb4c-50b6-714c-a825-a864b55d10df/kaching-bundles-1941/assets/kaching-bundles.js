import { s as g, a as F, g as Y, d as h, i as v, e as O, n as ot, b as M, c as D, f as S, q as B, h as q, j as Ce, w as ne, k as w, l as ke, o as lt, m as Z, p as L, r as R, t as we, u as ve, v as Ie, x as J, y as V, z as Se, A as Pe, B as Ae, C as Be, D as Te, E as Ee, F as De, G as qe, H as Fe, I as Ne } from "./kaching-bundles-api.js";
const Me = () => {
  const i = /\b__kaching_/, t = ["script", "style"], e = (r) => {
    const a = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, {
      acceptNode: (o) => {
        const l = o.parentElement;
        return !l || t.includes(l.tagName.toLowerCase()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    let s;
    for (; s = a.nextNode(); ) {
      const o = s.textContent || "";
      if (i.test(o)) {
        const l = s.parentElement;
        if (l.classList.contains("properties-key-value-key"))
          continue;
        if (l.tagName.toLowerCase() === "dt") {
          const c = l.nextElementSibling;
          (c == null ? void 0 : c.tagName.toLowerCase()) === "dd" && (c.style.display = "none");
        }
        l.style.display = "none", g(
          "kaching_property_hidden_v2",
          {
            text: o,
            element: l.tagName
          },
          { sampleRate: 0.01, once: !1 }
        );
      }
    }
  };
  new MutationObserver((r) => {
    for (const a of r)
      for (const s of a.addedNodes)
        s.nodeType === Node.ELEMENT_NODE && e(s);
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  }), e(document.body);
}, Oe = () => {
  const i = document.querySelector('link[href*="kaching-bundles.css"]');
  if (!i) return;
  const t = i.closest(
    'div[data-block-type="liquid"]'
  );
  t && (t.dataset.blockType = "liquid-kaching-fix");
}, H = ({
  country: i,
  language: t
}) => {
  const e = [];
  return i && e.push(`country: ${i}`), t && e.push(`language: ${t}`), e.length > 0 ? `@inContext(${e.join(", ")})` : "";
}, Le = async (i, {
  productId: t,
  country: e,
  language: n
}) => {
  var a;
  const r = H({ country: e, language: n });
  return ((a = (await i.query(
    `
      query FetchComplementaryProductGIDs($productGID: ID!) ${r} {
        productRecommendations(productId: $productGID, intent: COMPLEMENTARY) {
          id
        }
      }
    `,
    {
      variables: {
        productGID: `gid://shopify/Product/${t}`
      }
    }
  )).productRecommendations) == null ? void 0 : a.map((s) => s.id)) || [];
}, vt = async (i, t, e = 200) => (t = t.filter(Boolean).filter((n) => !n.startsWith("placeholder")), t.length === 0 ? [] : (await i.query(
  `
      query FetchMediaImages($mediaImageIds: [ID!]!, $size: Int!) {
        nodes(ids: $mediaImageIds) {
          ... on MediaImage {
            id
            image {
              url(transform: { maxWidth: $size, maxHeight: $size })
            }
          }
        }
      }
    `,
  {
    variables: {
      mediaImageIds: t,
      size: e
    }
  }
)).nodes.filter(Boolean).map((n) => ({
  gid: n.id,
  url: n.image.url
}))), xe = async (i, t) => {
  if (!t.length) return [];
  const e = t.map((n) => `gid://shopify/Product/${n}`);
  return (await i.query(
    `
      query FetchNativeBundleProductIds($productGIDs: [ID!]!) {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            variants(first: 1) {
              nodes {
                requiresComponents
              }
            }
          }
        }
      }
    `,
    { variables: { productGIDs: e } }
  )).nodes.filter((n) => n !== null).filter(
    (n) => n.variants.nodes.some((r) => r.requiresComponents)
  ).map((n) => Number(n.id.split("/").pop()));
}, It = async (i, {
  country: t,
  language: e,
  blockVisibility: n,
  excludedProductGIDs: r,
  selectedProductGIDs: a,
  selectedCollectionGIDs: s,
  limit: o = 1e3
}) => {
  switch (n) {
    case "selected-products":
      return a.slice(0, o);
    case "all-products":
    case "excluded-products": {
      const l = H({ country: t, language: e });
      let c = [], d = null;
      for (; c.length < o; ) {
        const p = Math.min(o - c.length, 250), f = await i.query(
          `
            query FetchProductGIDs($limit: Int!, $cursor: String) ${l} {
              products(first: $limit, after: $cursor) {
                nodes {
                  id
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          `,
          {
            variables: {
              limit: p,
              cursor: d
            }
          }
        );
        if (c.push(...f.products.nodes.map((u) => u.id)), !f.products.pageInfo.hasNextPage) break;
        d = f.products.pageInfo.endCursor;
      }
      if (n === "excluded-products") {
        const p = new Set(r);
        c = c.filter((f) => !p.has(f));
      }
      return c;
    }
    case "selected-collections": {
      const l = H({ country: t, language: e }), c = (await i.query(
        `
          query FetchCollectionProductGIDs($collectionGIDs: [ID!]!, $limit: Int!) ${l} {
            nodes(ids: $collectionGIDs) {
              ... on Collection {
                products(first: $limit) {
                  nodes {
                    id
                  }
                }
              }
            }
          }
        `,
        {
          variables: {
            collectionGIDs: s,
            limit: Math.min(o, 250)
          }
        }
      )).nodes.filter((d) => d !== null).flatMap(
        (d) => d.products.nodes.map((p) => p.id)
      );
      return Array.from(new Set(c)).slice(0, o);
    }
  }
}, ie = `
  id
  availableForSale
  price {
    amount
  }
  compareAtPrice {
    amount
  }
  selectedOptions {
    name
    value
  }
  image {
    id
    url(transform: { maxWidth: 200, maxHeight: 200 })
  }
  unitPriceMeasurement {
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
  requiresComponents
  sellingPlanAllocations(first: 100) @include(if: $includeSellingPlans) {
    nodes {
      sellingPlan {
        id
      }
      priceAdjustments {
        price {
          amount
        }
        compareAtPrice {
          amount
        }
        perDeliveryPrice {
          amount
        }
      }
    }
  }
  quantityAvailable @include(if: $includeAvailableQuantity)
`, W = async (i, {
  country: t,
  language: e,
  productIds: n,
  includeSellingPlans: r = !0,
  includeAvailableQuantity: a = !0,
  useExternalMetafieldNamespace: s = !1,
  batchSize: o = 250,
  onBatchError: l
}) => {
  if (!n.length)
    return [];
  const c = n.map((_) => typeof _ == "string" && _.startsWith("gid://") ? _ : `gid://shopify/Product/${_}`), d = `
    query FetchProducts($productGIDs: [ID!]!, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!, $metafieldNamespace: String!) ${H({ country: t, language: e })} {
      nodes(ids: $productGIDs) {
        ... on Product {
          id
          handle
          onlineStoreUrl
          availableForSale
          createdAt
          title
          featuredImage {
            url
          }
          options {
            name
            optionValues {
              id
              name
              swatch {
                color
                image {
                  previewImage {
                    url(transform: { maxWidth: 200, maxHeight: 200 })
                  }
                }
              }
            }
          }
          variants(first: 250) {
            nodes {
              ${ie}
            }
          }
          collections(first: 50) {
            nodes {
              id
            }
          }
          metafield: metafield(namespace: $metafieldNamespace, key: "text") {
            value
          }
          metafield2: metafield(namespace: $metafieldNamespace, key: "text2") {
            value
          }
          metafield3: metafield(namespace: $metafieldNamespace, key: "text3") {
            value
          }
          metafield4: metafield(namespace: $metafieldNamespace, key: "text4") {
            value
          }
          requiresSellingPlan
          sellingPlanGroups(first: 100) @include(if: $includeSellingPlans) {
            nodes {
              sellingPlans(first: 100) {
                nodes {
                  id
                  name
                  priceAdjustments {
                    adjustmentValue {
                      __typename
                      ... on SellingPlanPercentagePriceAdjustment {
                        adjustmentPercentage
                      }
                      ... on SellingPlanFixedAmountPriceAdjustment {
                        adjustmentAmount {
                          amount
                        }
                      }
                      ... on SellingPlanFixedPriceAdjustment {
                        price {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `, p = s ? "app--2935586817--kaching_bundles" : "$app:kaching_bundles", f = [], u = Math.min(o, 250);
  for (let _ = 0; _ < c.length; _ += u)
    f.push(c.slice(_, _ + u));
  const m = (_) => i.query(d, {
    variables: {
      productGIDs: _,
      includeSellingPlans: r,
      includeAvailableQuantity: a,
      metafieldNamespace: p
    }
  });
  let y;
  if (l) {
    const _ = await Promise.allSettled(f.map(m));
    for (const C of _)
      C.status === "rejected" && l(
        C.reason instanceof Error ? C.reason : new Error(String(C.reason))
      );
    y = _.filter(
      (C) => C.status === "fulfilled"
    ).flatMap((C) => C.value.nodes);
  } else
    y = (await Promise.all(f.map(m))).flatMap((_) => _.nodes);
  const k = y.filter((_) => _ != null);
  if (l) {
    const _ = await Promise.allSettled(
      k.map(async (b) => {
        const A = await St(
          i,
          b,
          { includeSellingPlans: r, includeAvailableQuantity: a }
        );
        return Pt(A, i.shopifyDomain);
      })
    ), C = [];
    for (const b of _)
      b.status === "fulfilled" ? C.push(b.value) : l(
        b.reason instanceof Error ? b.reason : new Error(String(b.reason))
      );
    return C;
  }
  return (await Promise.all(
    k.map(
      (_) => St(i, _, {
        includeSellingPlans: r,
        includeAvailableQuantity: a
      })
    )
  )).map(
    (_) => Pt(_, i.shopifyDomain)
  );
}, St = async (i, t, e) => {
  if (t.variants.nodes.length < 250)
    return t;
  const n = /* @__PURE__ */ new Set(), r = [], a = [], s = async (o) => {
    let l = !0, c = null;
    for (; l; ) {
      const d = await i.query(
        `
          query($productGID: ID!, $cursor: String, $reverse: Boolean, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!) {
            product(id: $productGID) {
              variants(first: 250, after: $cursor, reverse: $reverse) {
                nodes {
                  ${ie}
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          }
        `,
        {
          variables: {
            productGID: t.id,
            cursor: c,
            reverse: o,
            ...e
          }
        }
      ), { nodes: p, pageInfo: f } = d.product.variants;
      for (const u of p) {
        if (n.has(u.id)) {
          l = !1;
          break;
        }
        n.add(u.id), o ? a.push(u) : r.push(u);
      }
      f.hasNextPage || (l = !1), c = f.endCursor;
    }
  };
  return await Promise.all([
    s(!1),
    s(!0)
  ]), t.variants.nodes = [...r, ...a.reverse()], t;
}, Pt = (i, t) => {
  var o, l, c, d, p, f;
  const e = i.variants.nodes.map(
    ({ unitPriceMeasurement: u, ...m }) => {
      var y, k, _;
      return {
        id: Number(m.id.split("/").pop()),
        availableForSale: m.availableForSale,
        price: Math.round(Number(m.price.amount) * 100),
        compareAtPrice: m.compareAtPrice ? Math.round(Number(m.compareAtPrice.amount) * 100) : null,
        options: m.selectedOptions.map((C) => C.value),
        imageId: m.image ? Number(m.image.id.split("/").pop()) : null,
        image: ((y = m.image) == null ? void 0 : y.url) || null,
        sellingPlans: ((k = m.sellingPlanAllocations) == null ? void 0 : k.nodes.map((C) => ({
          id: Number(C.sellingPlan.id.split("/").pop()),
          price: C.priceAdjustments.length > 0 ? Math.round(Number(C.priceAdjustments[0].price.amount) * 100) : Math.round(Number(m.price.amount) * 100),
          compareAtPrice: C.priceAdjustments.length > 0 ? Math.round(
            Number(C.priceAdjustments[0].compareAtPrice.amount) * 100
          ) : Math.round(Number(m.price.amount) * 100),
          perDeliveryPrice: C.priceAdjustments.length > 0 ? Math.round(
            Number(C.priceAdjustments[0].perDeliveryPrice.amount) * 100
          ) : Math.round(Number(m.price.amount) * 100)
        }))) || [],
        inventoryManagement: null,
        // Storefront API does not return inventory management, only available in liquid
        inventoryPolicy: null,
        // Storefront API does not return inventory policy, only available in liquid
        inventoryQuantity: (_ = m.quantityAvailable) != null ? _ : null,
        unitPriceMeasurement: u != null && u.quantityUnit && (u != null && u.referenceUnit) ? {
          quantityValue: u.quantityValue,
          quantityUnit: u.quantityUnit.toLowerCase(),
          referenceValue: u.referenceValue,
          referenceUnit: u.referenceUnit.toLowerCase()
        } : null
      };
    }
  ), n = i.options.map((u, m) => {
    const y = u.optionValues.map((k) => {
      var _, C, b, A;
      return {
        id: Number(k.id.split("/").pop()),
        defaultName: k.name,
        name: k.name,
        swatch: {
          color: ((_ = k.swatch) == null ? void 0 : _.color) || null,
          image: ((A = (b = (C = k.swatch) == null ? void 0 : C.image) == null ? void 0 : b.previewImage) == null ? void 0 : A.url) || null
        }
      };
    });
    return {
      defaultName: u.name,
      name: u.name,
      position: m + 1,
      optionValues: Ve(y, m, e)
    };
  }), r = (u) => {
    const m = u.priceAdjustments[0];
    if (!m)
      return null;
    const y = m.adjustmentValue;
    switch (y.__typename) {
      case "SellingPlanPercentagePriceAdjustment":
        return {
          type: "percentage",
          value: y.adjustmentPercentage
        };
      case "SellingPlanFixedAmountPriceAdjustment":
        return {
          type: "fixed_amount",
          value: Number(y.adjustmentAmount.amount) * 100
        };
      case "SellingPlanFixedPriceAdjustment":
        return {
          type: "price",
          value: Number(y.price.amount) * 100
        };
      default:
        throw new Error(
          `Unknown price adjustment type: ${y.__typename}`
        );
    }
  }, a = ((o = i.sellingPlanGroups) == null ? void 0 : o.nodes.flatMap(
    (u) => u.sellingPlans.nodes.map((m) => ({
      id: Number(m.id.split("/").pop()),
      name: m.name,
      priceAdjustment: r(m)
    }))
  )) || [], s = i.variants.nodes.some(
    (u) => u.requiresComponents
  );
  return {
    id: Number(i.id.split("/").pop()),
    handle: i.handle,
    url: i.onlineStoreUrl || `https://${t}/products/${i.handle}`,
    availableForSale: i.availableForSale,
    createdAt: i.createdAt,
    title: i.title,
    image: ((l = i.featuredImage) == null ? void 0 : l.url) || null,
    collectionIds: i.collections.nodes.map(
      (u) => Number(u.id.split("/").pop())
    ),
    options: n,
    selectedVariantId: Number(
      i.variants.nodes[0].id.split("/").pop()
    ),
    variants: e,
    requiresSellingPlan: i.requiresSellingPlan,
    sellingPlans: a,
    isNativeBundle: s,
    metafields: {
      text: ((c = i.metafield) == null ? void 0 : c.value) || null,
      text2: ((d = i.metafield2) == null ? void 0 : d.value) || null,
      text3: ((p = i.metafield3) == null ? void 0 : p.value) || null,
      text4: ((f = i.metafield4) == null ? void 0 : f.value) || null
    }
  };
}, Ve = (i, t, e) => i.filter((n) => e.filter(
  (r) => r.options[t] === n.name
).length > 0), Re = async (i, t, e) => {
  const n = t.map((a) => `gid://shopify/Product/${a}`), r = H({
    country: e == null ? void 0 : e.country,
    language: e == null ? void 0 : e.language
  });
  return (await i.query(
    `
      query FetchProductsInDefaultLanguage($productGIDs: [ID!]!) ${r} {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            options {
              name
              optionValues {
                id
                name
              }
            }
          }
        }
        localization {
          country {
            isoCode
          }
          language {
            isoCode
          }
        }
      }
    `,
    {
      variables: {
        productGIDs: n
      }
    }
  )).nodes.filter((a) => a != null).map($e);
}, $e = (i) => {
  const t = i.options.map(
    (e, n) => ({
      defaultName: e.name,
      position: n + 1,
      optionValues: e.optionValues.map((r) => ({
        id: Number(r.id.split("/").pop()),
        defaultName: r.name
      }))
    })
  );
  return {
    id: Number(i.id.split("/").pop()),
    options: t
  };
}, Ge = (i, t) => {
  const e = [], n = i.filter(
    (o) => o.blockVisibility === "selected-products"
  );
  for (const o of n)
    o.selectedProductIds.map(Number).includes(t.id) && e.push(o);
  const r = i.filter(
    (o) => o.blockVisibility === "selected-collections"
  );
  for (const o of r)
    t.collectionIds.some(
      (l) => o.selectedCollectionIds.map(Number).includes(l)
    ) && e.push(o);
  const a = i.filter(
    (o) => o.blockVisibility === "excluded-products"
  );
  for (const o of a)
    !o.excludedProductIds.map(Number).includes(t.id) && !(o.excludedCollectionIds || []).some(
      (l) => t.collectionIds.includes(l)
    ) && e.push(o);
  const s = i.filter(
    (o) => o.blockVisibility === "all-products"
  );
  for (const o of s)
    e.push(o);
  return e;
}, He = (i) => [
  ...Qe(i),
  ...je(i),
  ...ze(i),
  ...Ue(i),
  ...Je(i),
  ...We(i),
  ...Ke(i),
  ...Xe(i),
  ...Ye(i),
  ...Ze(i),
  ...tn(i),
  ...en(i)
].filter((t) => t != null && !t.includes("placeholder")), Qe = (i) => i.dealBars.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), je = (i) => i.dealBars.map(
  ({ freeGifts: t }) => (t || []).map((e) => e.mediaImageGID)
).reduce((t, e) => t.concat(e), []).filter((t) => t != null), ze = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => (t || []).map((e) => e.mediaImageGID)
).filter((t) => t != null), Ue = (i) => i.dealBars.map(({ upsells: t }) => (t || []).map((e) => e.mediaImageGID)).reduce((t, e) => t.concat(e), []).filter((t) => t != null), Je = (i) => i.swatchOptions ? i.swatchOptions.reduce((t, e) => {
  const n = e.images.map((r) => r.mediaImageGID).filter((r) => r != null);
  return [...t, ...n];
}, []) : [], We = (i) => {
  if (!i.collectionBreaksEnabled || !i.collectionBreaks)
    return [];
  const t = i.collectionBreaks.mediaImageGID;
  return t ? [t] : [];
}, Ke = (i) => {
  var t, e, n;
  return i.progressiveGifts ? [
    ...((t = i.progressiveGifts.gifts) == null ? void 0 : t.map((r) => r.mediaImageGID)) || [],
    (e = i.progressiveGifts.style) == null ? void 0 : e.lockedMediaImageGID,
    (n = i.progressiveGifts.dealBarStyle) == null ? void 0 : n.lockedMediaImageGID
  ].filter((r) => r != null) : [];
}, Xe = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), Ye = (i) => i.dealBars.map((t) => {
  var e;
  return (e = t.productPersonalisation) == null ? void 0 : e.mediaImageGID;
}).filter((t) => t != null), Ze = (i) => {
  var n, r;
  const t = i.dealBars.map((a) => {
    var s;
    return (s = a.highlights) == null ? void 0 : s.customIconGID;
  }).filter((a) => a != null), e = (r = (n = i.subscriptions) == null ? void 0 : n.highlights) == null ? void 0 : r.customIconGID;
  return e ? [...t, e] : t;
}, tn = (i) => (i.badges || []).flatMap(
  (t) => t.badgeType === "custom" && t.imageGID ? [t.imageGID] : []
), en = (i) => !i.savingsSummaryEnabled || !i.savingsSummary ? [] : i.savingsSummary.customIconGID ? [i.savingsSummary.customIconGID] : [];
var it = /* @__PURE__ */ ((i) => (i.QuantityBreak = "quantity-break", i.Bxgy = "bxgy", i.Bundle = "bundle", i.MixAndMatch = "mix-and-match", i.Sku = "sku", i))(it || {});
const nn = (i) => {
  const t = [
    ...rn(i),
    ...an(i),
    ...sn(i),
    ...on(i),
    ...ln(i),
    ...cn(i),
    ...dn(i),
    ...un(i)
  ];
  return Array.from(new Set(t.filter((e) => e != null)));
}, rn = (i) => i.dealBars.flatMap(
  ({ freeGifts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null), an = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => t ? t.flatMap(
    (e) => e.products ? e.products.map((n) => n.id) : []
  ) : []
).filter((t) => t != null), sn = (i) => {
  var t;
  return i.progressiveGiftsEnabled ? ((t = i.progressiveGifts) == null ? void 0 : t.gifts.map((e) => e.productGID).filter((e) => e != null)) || [] : [];
}, on = (i) => i.dealBars.flatMap(({ upsells: t }) => t ? t.map((e) => e.productGID) : []).filter((t) => t != null), ln = (i) => i.dealBars.filter((t) => t.dealBarType === it.Bundle).flatMap(
  ({ bundleProducts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null).filter((t) => t !== "default"), cn = (i) => i.dealBars.filter((t) => t.dealBarType === it.MixAndMatch).flatMap(
  ({ bundleProducts: t }) => t ? t.flatMap((e) => {
    var n, r;
    return [
      e.productGID,
      ...(r = (n = e.selectedProducts) == null ? void 0 : n.map((a) => a.id)) != null ? r : []
    ];
  }) : []
).filter((t) => t != null).filter((t) => t !== "default"), dn = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.map((t) => t.productGID).filter((t) => t != null), un = (i) => i.dealBars.filter((t) => t.dealBarType === it.Sku).flatMap(({ productGID: t }) => t ? [t] : []), $ = "kachingBundlesSaveOverlayDismissed", pn = "bundles.kachingappz.app", fn = () => {
  const i = document.createElement("div");
  return i.className = "kaching-bundles-save-overlay", i.setAttribute("role", "status"), i.setAttribute("tabindex", "0"), i.setAttribute(
    "aria-label",
    "Click Save in the top-right corner to activate the app. Press Escape or Enter to dismiss."
  ), i.innerHTML = `
    <div class="kaching-bundles-save-overlay__content">
      <div class="kaching-bundles-save-overlay__text">Click "Save" in the top-right corner.</div>
      <svg class="kaching-bundles-save-overlay__arrow" aria-hidden="true" width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0235 30.0476C26.9813 26.0688 31.6367 20.3068 34.359 13.6647C34.5787 13.1287 34.7807 12.5866 34.9688 12.0407C34.9872 12.1286 35.0055 12.2166 35.0239 12.3045C35.6997 15.541 36.1871 18.9234 37.35 22.0252C37.7091 22.9828 39.2759 22.7067 39.9528 22.449C40.7647 22.1396 42.0725 21.3396 41.9969 20.292C41.7562 16.9608 40.8171 13.666 40.0928 10.414C39.3726 7.17983 38.6526 3.94569 37.9324 0.711381C37.7809 0.0312821 36.6451 -0.0343474 36.1453 0.0113582C35.3082 0.0879608 34.2573 0.50077 33.6973 1.15893C33.4368 1.46497 33.1749 1.76993 32.9143 2.07579C32.6324 2.30048 32.3929 2.56904 32.2294 2.87801C29.1225 6.52203 26.0063 10.1587 22.8826 13.7888C22.4856 14.2503 22.2166 14.9143 22.9177 15.2375C23.5886 15.5469 24.5829 15.0895 25.0594 14.6178C27.0866 12.6108 29.1155 10.6056 31.1471 8.60291C30.1175 12.9391 28.3489 17.1025 25.7631 20.7229C24.0598 23.1078 21.9 25.3178 19.6649 26.9826C17.264 28.771 14.6378 30.214 11.9792 31.178C10.3347 31.7744 8.62775 32.2461 6.92197 32.6287C5.09815 33.0377 3.24342 33.2486 1.42578 33.6781C0.857063 33.8125 -0.79524 35.2271 0.459136 35.5827C3.73503 36.5115 7.65457 35.7308 10.8601 34.7902C14.4641 33.7324 17.896 32.1362 21.0235 30.0476Z" fill="white"/>
      </svg>
    </div>
  `, i;
}, At = (i) => {
  i.classList.add("kaching-bundles-save-overlay--dismissed");
  try {
    sessionStorage.setItem($, "true");
  } catch {
  }
  setTimeout(() => i.remove(), 300);
}, hn = () => {
  if (sessionStorage.getItem($))
    return;
  const i = fn();
  document.body.appendChild(i), requestAnimationFrame(() => {
    i.classList.add("kaching-bundles-save-overlay--visible"), i.focus();
  }), i.addEventListener("click", () => At(i)), i.addEventListener("keydown", (t) => {
    (t.key === "Escape" || t.key === "Enter") && At(i);
  });
}, mn = async ({
  appHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  try {
    if (sessionStorage.getItem($))
      return !0;
  } catch {
  }
  const n = new URLSearchParams({ shop: t });
  e && n.set("theme_id", e.toString());
  const r = `${i}/public_api/app_embed?${n.toString()}`, a = await fetch(r);
  if (!a.ok)
    throw new Error(`API error: ${a.status}`);
  const s = await a.json();
  if (s.themeInaccessible) {
    try {
      sessionStorage.setItem($, "true");
    } catch {
    }
    return !0;
  }
  if (s.active)
    try {
      sessionStorage.setItem($, "true");
    } catch {
    }
  return s.active;
}, _n = async ({
  customApiHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  const r = `https://${i != null ? i : pn}`;
  try {
    await mn({
      appHost: r,
      shopifyDomain: t,
      themeId: e
    }) || hn();
  } catch {
  }
};
function gn(i, t, e) {
  var r, a;
  return t ? ((a = (r = window.Shopify.currency) == null ? void 0 : r.active) != null ? a : e) === t.currencyCode ? 1 : 1 / t.currencyRate * i : i;
}
const bn = (i, t) => i && t !== 422, Bt = (i) => i !== 422;
function Tt(i) {
  const t = i.properties && typeof i.properties == "object" ? i.properties : {};
  for (const [n, r] of Object.entries(i)) {
    const a = n.match(/^properties\[(.+)\]$/);
    a && (t[a[1]] = r);
  }
  bt(t);
  const e = {
    id: Number(i.id),
    quantity: Number(i.quantity) || 1,
    properties: t
  };
  return i.selling_plan && (e.selling_plan = Number(i.selling_plan)), i.parent_id && (e.parent_id = Number(i.parent_id)), e;
}
function bt(i) {
  const t = i.__kaching_bundles;
  typeof t == "string" && (i.__kaching_bundles = z(t));
}
function z(i) {
  try {
    const t = atob(i);
    return JSON.parse(t), t;
  } catch {
    return i;
  }
}
function yn(i) {
  if (typeof i == "string" && !Q(i)) {
    const e = JSON.parse(i);
    return (Array.isArray(e.items) ? e.items : [e]).some(
      (r) => {
        var a;
        return Et((a = r.properties) == null ? void 0 : a.__kaching_bundles);
      }
    );
  }
  const t = i instanceof FormData ? i : j(i);
  for (const [e, n] of t)
    if (e.includes("__kaching_bundles") && Et(n))
      return !0;
  return !1;
}
function Et(i) {
  return typeof i == "string" && z(i) !== i;
}
function Q(i) {
  try {
    return JSON.parse(i), !1;
  } catch {
    return !0;
  }
}
function j(i) {
  const t = new URLSearchParams(i), e = new FormData();
  return t.forEach((n, r) => {
    e.append(r, n);
  }), e;
}
function Cn(i) {
  const t = new URLSearchParams();
  return i.forEach((e, n) => {
    t.append(n, e);
  }), t.toString();
}
function kn(i, t) {
  const e = i.find((n) => n.properties.__kaching_bundles);
  if (!e)
    return t;
  try {
    return JSON.parse(e.properties.__kaching_bundles).deal;
  } catch {
    return t;
  }
}
async function ct(i, t) {
  if (!(!i || !t))
    try {
      const e = await fetch(F("cart.js"));
      if (!e.ok) return;
      const n = await e.json(), r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
      for (const o of n.items) {
        const l = dt(o);
        (l == null ? void 0 : l.deal) === i && l.pp === t && (r.add(o.key), l.id && a.add(l.id));
      }
      if (r.size === 0) return;
      for (const o of n.items) {
        const l = dt(o);
        l != null && l.id && a.has(l.id) && r.add(o.key);
      }
      const s = {};
      for (const o of r)
        s[o] = 0;
      await fetch(F("cart/update.js"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates: s })
      });
    } catch (e) {
      console.error("removeDealFromCart failed", e);
    }
}
function wn(i) {
  for (const t of i) {
    const e = dt(t);
    if (e != null && e.pp) return e.pp;
  }
}
function dt(i) {
  var e;
  const t = (e = i.properties) == null ? void 0 : e.__kaching_bundles;
  if (typeof t == "string")
    try {
      return JSON.parse(z(t));
    } catch {
      return;
    }
}
const vn = (i) => {
  var r;
  let t;
  try {
    t = JSON.parse(i);
  } catch {
    return null;
  }
  if (t.key != null || !Array.isArray(t.items)) return null;
  const e = t.items.filter(
    (a) => {
      var s;
      return (s = a.properties) == null ? void 0 : s.__kaching_bundles;
    }
  );
  if (!e.length) return null;
  const n = (r = e.find(In)) != null ? r : e[0];
  return JSON.stringify({ ...t, ...n });
}, In = (i) => {
  var e;
  const t = (e = i.properties) == null ? void 0 : e.__kaching_bundles;
  if (typeof t != "string") return !1;
  try {
    return !!JSON.parse(z(t)).main;
  } catch {
    return !1;
  }
}, Sn = (i) => /\/cart\/change(\.js)?(\?|$)/.test(i), Pn = (i) => {
  const t = { id: null, line: null, quantity: null };
  if (i == null) return t;
  if (i instanceof FormData || i instanceof URLSearchParams)
    return at(i);
  if (typeof i == "string") {
    if (Q(i))
      return at(j(i));
    try {
      const e = JSON.parse(i);
      return {
        id: e.id != null ? String(e.id) : null,
        line: e.line != null ? Number(e.line) : null,
        quantity: e.quantity != null ? Number(e.quantity) : null
      };
    } catch {
      return t;
    }
  }
  return t;
}, at = (i) => {
  const t = i.get("id"), e = i.get("line"), n = i.get("quantity");
  return {
    id: t,
    line: e != null ? Number(e) : null,
    quantity: n != null ? Number(n) : null
  };
}, An = (i, t) => {
  if (t.line != null && Number.isFinite(t.line)) {
    const e = t.line - 1;
    return e >= 0 && e < i.length ? e : -1;
  }
  if (t.id != null) {
    const e = i.findIndex((r) => r.key === t.id);
    if (e >= 0) return e;
    const n = Number(t.id);
    if (Number.isFinite(n))
      return i.findIndex((r) => r.id === n);
  }
  return -1;
}, Bn = (i, t) => {
  var o;
  if (t.quantity == null || !Number.isFinite(t.quantity))
    return { rewrite: !1 };
  let e;
  try {
    e = JSON.parse(i);
  } catch {
    return { rewrite: !1 };
  }
  const n = e == null ? void 0 : e.items;
  if (!Array.isArray(n)) return { rewrite: !1 };
  const r = An(n, t);
  if (r < 0) return { rewrite: !1 };
  const a = n[r];
  return ((o = a.properties) == null ? void 0 : o.__kaching_bundles) ? a.quantity === t.quantity ? { rewrite: !1 } : (a.quantity = t.quantity, { rewrite: !0, body: JSON.stringify(e) }) : { rewrite: !1 };
};
function Tn(i, t) {
  const e = /* @__PURE__ */ new Map();
  for (const a of i) {
    const s = En(a);
    e.set(s, (e.get(s) || 0) + a.quantity);
  }
  const n = /* @__PURE__ */ new Map();
  for (const a of t) {
    const s = Dt(a);
    n.set(s, (n.get(s) || 0) + a.quantity);
  }
  for (const [a, s] of e)
    if ((n.get(a) || 0) < s)
      return null;
  const r = new Set(e.keys());
  return t.filter((a) => r.has(Dt(a)));
}
function En(i) {
  return re(i.id, i.selling_plan, i.properties);
}
function Dt(i) {
  var t;
  return re(
    i.variant_id,
    (t = i.selling_plan_allocation) == null ? void 0 : t.selling_plan.id,
    i.properties
  );
}
function re(i, t, e) {
  const n = e == null ? void 0 : e.__kaching_bundles, r = typeof n == "string" ? z(n) : "";
  return `${i}|${t != null ? t : ""}|${r}`;
}
const Dn = async (i, t) => {
  if (!i) return;
  const e = Fn(await t.text()), n = await Nn();
  g(
    "debug_cart_add_v6",
    {
      sessionId: Y(),
      sent: i.map(qn),
      added: e,
      cart: n
    },
    { once: !1 }
  );
}, qn = (i) => {
  const t = {
    id: i.id,
    quantity: i.quantity
  };
  try {
    const { deal: e, bar: n, bid: r } = JSON.parse(
      i.properties.__kaching_bundles
    );
    t.deal = e, t.bar = n != null ? n : r;
  } catch {
  }
  return t;
}, ae = (i) => {
  var t;
  return {
    id: i.id,
    quantity: i.quantity,
    originalLinePrice: i.original_line_price,
    discount: i.line_level_total_discount,
    // Deal bar titles when the discount is ours, since that is what the
    // function labels its discounts with.
    discountTitles: (t = i.line_level_discount_allocations) == null ? void 0 : t.map(
      (e) => {
        var n;
        return (n = e.discount_application) == null ? void 0 : n.title;
      }
    )
  };
}, Fn = (i) => {
  try {
    const t = JSON.parse(i);
    return !Array.isArray(t.items) && t.key == null ? void 0 : (Array.isArray(t.items) ? t.items : [t]).map(ae);
  } catch {
    return;
  }
}, Nn = async () => {
  try {
    return (await (await fetch(F("cart.js"))).json()).items.map(ae);
  } catch {
    return;
  }
};
function tt(i) {
  return Array.from(i.keys()).some(
    (e) => e.startsWith("items[")
  ) ? On(i) : Mn(i);
}
function Mn(i) {
  const t = i.get("id");
  if (!t)
    return g(
      "intercept_cart_request_declined_v2",
      {
        reason: "missing_item_id"
      },
      { sampleRate: 0.05, once: !1 }
    ), null;
  const e = {};
  i.forEach((s, o) => {
    const l = o.match(/^properties\[(.+)\]$/);
    l && (e[l[1]] = s);
  }), bt(e);
  const n = {
    id: Number(t),
    quantity: Number(i.get("quantity")) || 1,
    properties: e
  }, r = i.get("selling_plan");
  r && (n.selling_plan = Number(r));
  const a = i.get("parent_id");
  return a && (n.parent_id = Number(a)), [n];
}
function On(i) {
  const t = /* @__PURE__ */ new Map();
  if (i.forEach((n, r) => {
    const a = r.match(/^items\[(\d+)\]\[(.+)\]$/);
    if (!a) return;
    const s = Number(a[1]), o = a[2];
    t.has(s) || t.set(s, { properties: {} });
    const l = t.get(s);
    switch (o) {
      case "id":
        l.id = Number(n);
        break;
      case "quantity":
        l.quantity = Number(n);
        break;
      case "selling_plan":
        l.selling_plan = Number(n);
        break;
      case "parent_id":
        l.parent_id = Number(n);
        break;
      default: {
        const c = o.match(/^properties\]\[(.+)$/);
        c && (l.properties[c[1]] = n);
      }
    }
  }), t.size === 0) return null;
  const e = [];
  for (const [, n] of t) {
    if (!n.id) continue;
    bt(n.properties);
    const r = {
      id: n.id,
      quantity: n.quantity || 1,
      properties: n.properties
    };
    n.selling_plan && (r.selling_plan = n.selling_plan), n.parent_id && (r.parent_id = n.parent_id), e.push(r);
  }
  return e.length > 0 ? e : null;
}
function qt(i, t) {
  const e = new FormData(), n = Array.from(i.keys()).some(
    (r) => r.startsWith("items[")
  );
  if (i.forEach((r, a) => {
    Ln(a) || e.append(a, r);
  }), t.length === 1 && !n) {
    const r = t[0];
    if (e.append("id", String(r.id)), e.append("quantity", String(r.quantity)), r.selling_plan && e.append("selling_plan", String(r.selling_plan)), r.parent_id && e.append("parent_id", String(r.parent_id)), r.properties)
      for (const [a, s] of Object.entries(r.properties))
        e.append(`properties[${a}]`, se(s));
  } else
    t.forEach(
      (r, a) => xn(e, r, a)
    );
  return e;
}
function Ln(i) {
  return ["id", "quantity", "selling_plan", "parent_id"].includes(i) || // Some themes (e.g. Candy) submit both `id` and `id[]` with the same
  // variant id in their product form. Shopify treats `id[]` as a separate
  // add operation, so it must be stripped along with `id` — otherwise the
  // variant gets added a second time (with empty properties) alongside the
  // rewritten `items[N][...]` payload.
  ["id[]", "quantity[]", "selling_plan[]", "parent_id[]"].includes(i) || i.startsWith("properties[") || i.startsWith("items[");
}
function xn(i, t, e) {
  if (i.append(`items[${e}][id]`, String(t.id)), i.append(`items[${e}][quantity]`, String(t.quantity)), t.selling_plan && i.append(`items[${e}][selling_plan]`, String(t.selling_plan)), t.parent_id && i.append(`items[${e}][parent_id]`, String(t.parent_id)), t.properties)
    for (const [n, r] of Object.entries(t.properties))
      i.append(
        `items[${e}][properties][${n}]`,
        se(r)
      );
}
function se(i) {
  return i instanceof Blob ? i : String(i);
}
const Vn = 500, Ft = (i) => g(
  "intercept_cart_request_declined_v2",
  {
    reason: "json_parse_failed",
    body: i.slice(0, Vn)
  },
  { sampleRate: 0.05, once: !1 }
);
function oe(i) {
  try {
    const t = JSON.parse(i);
    return !t || typeof t != "object" ? (Ft(i), null) : Array.isArray(t.items) ? t.items.filter(
      (e) => e && typeof e == "object" && "id" in e
    ).map((e) => Tt(e)) : t.id ? [Tt(t)] : null;
  } catch {
    return Ft(i), null;
  }
}
function Rn(i, t) {
  try {
    const e = JSON.parse(i), n = [
      "id",
      "quantity",
      "selling_plan",
      "parent_id",
      "properties"
    ], r = {};
    for (const [a, s] of Object.entries(e))
      !n.includes(a) && a !== "items" && !a.startsWith("properties[") && (r[a] = s);
    return t.length === 1 && !Array.isArray(e.items) ? Object.assign(r, t[0]) : r.items = t, JSON.stringify(r);
  } catch {
    return t.length === 1 ? JSON.stringify(t[0]) : JSON.stringify({ items: t });
  }
}
const $n = 100, Gn = 1500;
class Hn {
  constructor() {
    this._inFlight = /* @__PURE__ */ new Map(), this._staleDeadlines = /* @__PURE__ */ new Map();
  }
  // The interceptor's committed-cart check runs inside the in-flight send and
  // can outlive STALE_MS. Evicting during that window would dispatch a fresh
  // full add on top of one that may already be committed, so the check extends
  // how long waiters keep trusting the entry. Bounded by the caller — a popup
  // holding a request open never extends, so the anti-wedge eviction stays.
  extendStale(t, e) {
    this._staleDeadlines.set(t, Date.now() + e);
  }
  // Returns a stable key for a bundle add body, or null if this body either
  // isn't a bundle add or isn't a body shape we know how to dedupe. The cheap
  // string check up front means we don't parse (and don't trigger the parse-
  // error telemetry) for normal non-bundle adds.
  buildKey(t) {
    if (!Qn(t)) return null;
    const e = jn(t);
    return !(e != null && e.length) || !e.some((n) => n.properties.__kaching_bundles) ? null : zn(e);
  }
  // Runs `send` and remembers the in-flight Response for `key`. If another
  // call comes in with the same key while the first is in flight, or for a
  // short window after it settles, the second call doesn't run — it gets a
  // clone of the first response and `deduped: true`.
  //
  // If the first request errors out, we don't replay the error: we re-enter
  // so this waiter either joins onto a sibling's fresh retry (if one already
  // started) or starts the retry itself. Without re-entering, three concurrent
  // waiters could each fire their own send after a failed first attempt and
  // double the cart all over again — the bug this guard exists to prevent.
  async dispatch(t, e) {
    const n = this._inFlight.get(t);
    if (n)
      try {
        return { response: (await this._raceStale(t, n)).clone(), deduped: !0 };
      } catch {
        return this.dispatch(t, e);
      }
    const r = e();
    return this._inFlight.set(t, r), r.then(
      () => {
        this._staleDeadlines.delete(t), setTimeout(() => {
          this._inFlight.get(t) === r && this._inFlight.delete(t);
        }, $n);
      },
      () => {
        this._staleDeadlines.delete(t), this._inFlight.get(t) === r && this._inFlight.delete(t);
      }
    ), { response: (await r).clone(), deduped: !1 };
  }
  // Race the in-flight request against a stale timer. If the request doesn't
  // settle within STALE_MS (e.g. a popup is holding the Promise open), we
  // evict the entry and let the caller dispatch fresh rather than blocking
  // the cart button indefinitely — unless the send extended its deadline via
  // extendStale, in which case the timer re-arms until that deadline passes.
  async _raceStale(t, e) {
    const n = e.then((a) => ({ response: a }));
    n.catch(() => {
    });
    let r = Gn;
    for (; ; ) {
      const a = await Promise.race([
        n,
        new Promise(
          (l) => setTimeout(() => l({ stale: !0 }), r)
        )
      ]);
      if ("response" in a)
        return a.response;
      const s = this._staleDeadlines.get(t), o = s ? s - Date.now() : 0;
      if (o <= 0)
        throw this._staleDeadlines.delete(t), this._inFlight.get(t) === e && this._inFlight.delete(t), new Error("stale");
      r = o;
    }
  }
}
function Qn(i) {
  if (typeof i == "string")
    return i.includes("__kaching_bundles");
  if (i instanceof FormData) {
    for (const t of i.keys())
      if (t.includes("__kaching_bundles")) return !0;
    return !1;
  }
  return !1;
}
function jn(i) {
  try {
    return i instanceof FormData ? tt(i) : Q(i) ? tt(j(i)) : oe(i);
  } catch {
    return null;
  }
}
function zn(i) {
  const t = i.map((e) => {
    var n;
    return {
      id: e.id,
      quantity: e.quantity,
      sellingPlan: (n = e.selling_plan) != null ? n : null,
      properties: e.properties
    };
  }).sort((e, n) => {
    var s, o;
    if (e.id !== n.id) return e.id - n.id;
    const r = String((s = e.properties.__kaching_bundles) != null ? s : ""), a = String((o = n.properties.__kaching_bundles) != null ? o : "");
    return r.localeCompare(a);
  });
  return JSON.stringify(t);
}
function Un(i, t, e) {
  i = i.map((l) => ({
    ...l
  }));
  const n = i.find(
    (l) => l.properties.__kaching_bundles
  );
  if (!n && e.fallbackDeal) {
    const l = e.fallbackDeal, c = i.filter(
      (m) => !l.product.variants.some((y) => y.id === m.id) && !t.some((y) => y.id === m.id)
    ), d = i.find(
      (m) => l.product.variants.some((y) => y.id === m.id)
    ), p = d ? Ot(d.properties).custom : {}, f = Mt(
      p,
      t,
      e.propagateLineProperties
    );
    return [...t.map(
      (m) => Nt(
        m,
        f,
        p
      )
    ), ...c];
  }
  const r = n ? Ot(n.properties) : { custom: {}, internal: {} }, a = n ? Mt(
    r.custom,
    t,
    e.propagateLineProperties
  ) : null;
  if (n) {
    const l = t.find(
      (c) => c.id === n.id && c.properties.__kaching_bundles === n.properties.__kaching_bundles
    );
    l && (n.quantity = l.quantity, l.selling_plan && (n.selling_plan = l.selling_plan), a && (n.properties = {
      ...r.internal,
      ...a.get(l)
    }));
  }
  return [...t.filter(
    (l) => !i.some(
      (c) => c.id === l.id && c.properties.__kaching_bundles === l.properties.__kaching_bundles
    )
  ).map(
    (l) => Nt(
      l,
      a,
      r.custom
    )
  ), ...i];
}
function Nt(i, t, e) {
  if (t)
    return {
      ...i,
      properties: {
        ...t.get(i),
        ...i.properties
      }
    };
  const n = JSON.parse(i.properties.__kaching_bundles);
  return n != null && n.main ? {
    ...i,
    properties: {
      ...e,
      ...i.properties
    }
  } : i;
}
function Mt(i, t, e) {
  var l;
  if (!e)
    return null;
  const n = {}, r = /* @__PURE__ */ new Map();
  for (const [c, d] of Object.entries(i)) {
    const p = c.match(/(\d+)\s*$/);
    if (p) {
      const f = parseInt(p[1], 10), u = (l = r.get(f)) != null ? l : {};
      u[c] = d, r.set(f, u);
    } else
      n[c] = d;
  }
  const a = t.reduce(
    (c, d) => c + d.quantity,
    0
  );
  for (const [c, d] of r)
    (c < 1 || c > a) && (Object.assign(n, d), r.delete(c));
  const s = /* @__PURE__ */ new Map();
  let o = 0;
  for (const c of t) {
    const d = { ...n };
    for (const [p, f] of r)
      p > o && p <= o + c.quantity && Object.assign(d, f);
    s.set(c, d), o += c.quantity;
  }
  return s;
}
function Ot(i) {
  const t = {}, e = {};
  for (const [n, r] of Object.entries(i))
    n.startsWith("_kaching") || n.startsWith("__kaching") ? e[n] = r : t[n] = r;
  return { custom: t, internal: e };
}
const Jn = [400, 1e3], Wn = 4e3, Lt = /* @__PURE__ */ new WeakMap();
class Kn {
  constructor() {
    this._started = !1, this._registeredDeals = /* @__PURE__ */ new Map(), this._fallbackDeal = null, this._fallbackDealTimeout = null, this._rewriteCartChangeEnabled = !1, this._propagateLinePropertiesEnabled = !1, this._cartChangeDetectionReported = !1, this._dedupeEnabled = !0, this._debugCartAddEnabled = !1, this._dedupe = new Hn(), this._skipCartDealIds = /* @__PURE__ */ new Set();
  }
  start(t) {
    this._rewriteCartChangeEnabled = t.cart_change_response_rewrite === !0, this._propagateLinePropertiesEnabled = t.propagate_line_properties === !0, this._dedupeEnabled = t.cart_interceptor_dedupe_disabled !== !0, this._debugCartAddEnabled = t.debug_cart_add === !0, !this._started && (this._started = !0, this._interceptFetchRequests(), this._interceptXHRRequests(), this._interceptCartFormSubmits(), window.OpusNoATC = !0, h("CartInterceptor started"));
  }
  registerDeal(t, e, n, r) {
    const a = this._registeredDeals.get(t) || [];
    a.push({ getItems: n, product: e }), this._registeredDeals.set(t, a), r && this._skipCartDealIds.add(t), h("CartInterceptor deal registered", {
      dealId: t,
      totalDeals: a.length
    });
  }
  setFallbackDeal(t, e) {
    h("CartInterceptor fallback deal set", { dealId: t }), this._fallbackDealTimeout && clearTimeout(this._fallbackDealTimeout), this._fallbackDeal = { dealId: t, product: e }, this._fallbackDealTimeout = window.setTimeout(() => {
      this._fallbackDeal = null, this._fallbackDealTimeout = null;
    }, 2e3);
  }
  _interceptFetchRequests() {
    if (window.__kachingBundlesFetchHandler !== void 0) {
      window.__kachingBundlesFetchHandler = (e, n, r) => this._handleFetchRequest(e, n, r), h("CartInterceptor installed into embed fetch handler slot");
      return;
    }
    const t = window.fetch.bind(window);
    window.fetch = (e, n) => this._handleFetchRequest(t, e, n);
  }
  async _handleFetchRequest(t, e, n) {
    var s, o;
    const r = this._withDebugCartAddReport(t), a = xt(e);
    if (!a) return r(e, n);
    if (this._isInterceptableUrl(a)) {
      const l = this._getModifiedBody(a, n == null ? void 0 : n.body), c = (s = l == null ? void 0 : l.body) != null ? s : n == null ? void 0 : n.body, d = this._dedupe.buildKey(c), p = () => this._sendInterceptableCartAdd(
        r,
        e,
        n,
        l,
        this._dedupeEnabled ? d : null
      );
      if (d && this._dedupeEnabled) {
        const { response: f, deduped: u } = await this._dedupe.dispatch(
          d,
          p
        );
        return u && g(
          "intercept_cart_request_deduped_v3",
          {
            theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name
          },
          { sampleRate: 0.05, once: !1 }
        ), f;
      }
      return p();
    } else if (Sn(a)) {
      const l = await r(e, n);
      return this._maybeRewriteCartChangeResponse(l, n == null ? void 0 : n.body);
    }
    return r(e, n);
  }
  // Every cart add we let through — the theme's, the merged one, and our own
  // kaching_bundles=true one — goes through this fetch, so wrapping it reports
  // all of them from a single place. Only for shops with debug_cart_add on.
  _withDebugCartAddReport(t) {
    return (e, n) => {
      var r;
      return !this._debugCartAddEnabled || !((r = xt(e)) != null && r.includes("cart/add")) ? t(e, n) : this._cartAddWithDebugReport(t, e, n);
    };
  }
  async _cartAddWithDebugReport(t, e, n) {
    const r = await t(e, n), a = n == null ? void 0 : n.body;
    return (typeof a == "string" || a instanceof FormData) && Dn(this._parseOriginalItems(a), r.clone()), r;
  }
  async _sendInterceptableCartAdd(t, e, n, r, a = null) {
    var s, o, l;
    if (!r)
      return t(e, n);
    v("Intercepting cart/add request, merging bundle items"), g(
      "intercept_cart_request_v3",
      {
        type: "fetch",
        theme: (s = window.Shopify.theme) == null ? void 0 : s.schema_name
      },
      { sampleRate: 0.01, once: !1 }
    );
    try {
      const c = await t(e, {
        ...n,
        body: r.body
      });
      return await this._rewriteCartAddResponse(c);
    } catch (c) {
      h("Modified request failed, retrying with original", { error: c }), g(
        "intercept_cart_request_failed_v1",
        {
          type: "fetch",
          theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name,
          error: O(c)
        },
        { once: !1 }
      ), a && this._dedupe.extendStale(a, Wn);
      const d = await this._findCommittedCartLines(r.items);
      return d ? (g("intercept_cart_request_retry_skipped", {
        type: "fetch",
        theme: (l = window.Shopify.theme) == null ? void 0 : l.schema_name
      }), this._rewriteCartAddResponse(
        new Response(JSON.stringify({ items: d }), {
          status: 200,
          headers: { "content-type": "application/json" }
        })
      )) : t(e, n);
    }
  }
  async _findCommittedCartLines(t) {
    for (const e of Jn) {
      await new Promise((n) => setTimeout(n, e));
      try {
        const n = await fetch(F("cart.js"));
        if (!n.ok) continue;
        const r = await n.json(), a = Tn(t, r.items);
        if (a)
          return a;
      } catch {
        continue;
      }
    }
    return null;
  }
  async _rewriteCartAddResponse(t) {
    var e;
    if (!t.ok)
      return Bt(t.status) && g(
        "intercept_cart_request_failed_v1",
        {
          type: "fetch",
          theme: (e = window.Shopify.theme) == null ? void 0 : e.schema_name,
          status: t.status
        },
        { once: !1 }
      ), t;
    try {
      const n = vn(await t.clone().text());
      if (!n) return t;
      const r = new Headers(t.headers);
      return r.delete("content-length"), new Response(n, {
        status: t.status,
        statusText: t.statusText,
        headers: r
      });
    } catch (n) {
      return h("Cart add response rewrite failed, returning original", {
        error: n
      }), t;
    }
  }
  async _maybeRewriteCartChangeResponse(t, e) {
    var a;
    if (!t.ok || !(t.headers.get("content-type") || "").includes("json")) return t;
    const r = Pn(e);
    if (r.quantity == null || !this._rewriteCartChangeEnabled && this._cartChangeDetectionReported)
      return t;
    try {
      const o = await t.clone().text(), l = Bn(o, r);
      if (!l.rewrite || (this._cartChangeDetectionReported || (this._cartChangeDetectionReported = !0, g("cart_change_rewrite_detected", {
        applied: this._rewriteCartChangeEnabled,
        theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
      })), !this._rewriteCartChangeEnabled)) return t;
      const c = new Headers(t.headers);
      return c.delete("content-length"), new Response(l.body, {
        status: t.status,
        statusText: t.statusText,
        headers: c
      });
    } catch (s) {
      return h("Cart change response rewrite failed, returning original", {
        error: s
      }), t;
    }
  }
  _interceptXHRRequests() {
    var o, l, c, d;
    const t = XMLHttpRequest.prototype.open, e = XMLHttpRequest.prototype.send, n = function(p, f, u = !0, m, y) {
      return Lt.set(this, f instanceof URL ? f.href : f), t.call(this, p, f, u, m, y);
    }, r = function(p) {
      var u, m;
      const f = Lt.get(this);
      if (f) {
        const y = K._getModifiedBody(f, p);
        if (y) {
          v("Intercepting XHR cart/add request, merging bundle items"), g(
            "intercept_cart_request_v3",
            {
              type: "xhr",
              theme: (u = window.Shopify.theme) == null ? void 0 : u.schema_name
            },
            { sampleRate: 0.01, once: !1 }
          );
          try {
            return e.call(this, y.body);
          } catch (k) {
            return h("Modified XHR request failed, retrying with original", {
              error: k
            }), g(
              "intercept_cart_request_failed_v1",
              {
                type: "xhr",
                theme: (m = window.Shopify.theme) == null ? void 0 : m.schema_name,
                error: O(k)
              },
              { once: !1 }
            ), e.call(this, p);
          }
        }
      }
      return e.call(this, p);
    }, a = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "open"
    ), s = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "send"
    );
    if ((a == null ? void 0 : a.configurable) === !1 || (s == null ? void 0 : s.configurable) === !1) {
      h("Cannot intercept XHR - prototype methods are not configurable");
      return;
    }
    Object.defineProperty(XMLHttpRequest.prototype, "open", {
      value: n,
      writable: (o = a == null ? void 0 : a.writable) != null ? o : !0,
      configurable: (l = a == null ? void 0 : a.configurable) != null ? l : !0
    }), Object.defineProperty(XMLHttpRequest.prototype, "send", {
      value: r,
      writable: (c = s == null ? void 0 : s.writable) != null ? c : !0,
      configurable: (d = s == null ? void 0 : s.configurable) != null ? d : !0
    });
  }
  _interceptCartFormSubmits() {
    const t = async (e) => {
      var d, p, f, u, m, y, k;
      if (e.defaultPrevented || this._fallbackDeal && this._skipCartDealIds.has(this._fallbackDeal.dealId) || !(e.target instanceof HTMLFormElement))
        return;
      const n = e.target, r = n.action;
      if (!r.includes("/cart/add"))
        return;
      const a = new FormData(n), s = this._getModifiedBody(r, a);
      if (!s)
        return;
      e.preventDefault(), g(
        "intercept_cart_request_v3",
        {
          type: "form",
          theme: (d = window.Shopify.theme) == null ? void 0 : d.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      );
      const o = this._parseOriginalItems(a), l = o ? kn(o, (p = this._fallbackDeal) == null ? void 0 : p.dealId) : (f = this._fallbackDeal) == null ? void 0 : f.dealId, c = l ? this._skipCartDealIds.has(l) : !1;
      try {
        c && await ct(l, wn(o != null ? o : []));
        let _ = null;
        try {
          _ = await fetch(r, {
            method: "POST",
            body: a
          });
        } catch (C) {
          if (g(
            "intercept_cart_request_failed_v1",
            {
              type: "form",
              theme: (u = window.Shopify.theme) == null ? void 0 : u.schema_name,
              error: O(C)
            },
            { once: !1 }
          ), !await this._findCommittedCartLines(
            s.items
          )) {
            h("Fetch request failed, submitting original form", {
              error: C
            }), n.submit();
            return;
          }
          g("intercept_cart_request_retry_skipped", {
            type: "form",
            theme: (m = window.Shopify.theme) == null ? void 0 : m.schema_name
          });
        }
        if (_ && !_.ok) {
          Bt(_.status) && g(
            "intercept_cart_request_failed_v1",
            {
              type: "form",
              theme: (y = window.Shopify.theme) == null ? void 0 : y.schema_name,
              status: _.status
            },
            { once: !1 }
          ), h("Merged form request failed, submitting original form", {
            status: _.status
          }), n.submit();
          return;
        }
        window.location.href = c ? F("checkout") : "/cart";
      } catch (_) {
        h("Fetch request failed, submitting original form", {
          error: _
        }), g(
          "intercept_cart_request_failed_v1",
          {
            type: "form",
            theme: (k = window.Shopify.theme) == null ? void 0 : k.schema_name,
            error: O(_)
          },
          { once: !1 }
        ), n.submit();
      }
    };
    document.addEventListener("submit", t), setTimeout(() => {
      document.removeEventListener("submit", t), document.addEventListener("submit", t);
    }, 3e3);
  }
  _getModifiedBody(t, e) {
    try {
      if (!this._isInterceptableUrl(t))
        return null;
      if (h("Request body", e), typeof e != "string" && !(e instanceof FormData))
        return g(
          "intercept_cart_request_declined_v2",
          {
            reason: "invalid_body_type"
          },
          { sampleRate: 0.05, once: !1 }
        ), null;
      const n = this._parseOriginalItems(e);
      if (h("Original items", n), !n)
        return null;
      const r = this._findBundleItems(n);
      if (h("Bundle items", r), !r)
        return null;
      const a = this._mergeItems(n, r);
      if (h("Merged items", a), JSON.stringify(n) === JSON.stringify(a) && !yn(e))
        return null;
      const s = this._updateBody(e, a);
      return h("Updated body", s), { body: s, items: a };
    } catch (n) {
      return h("CartInterceptor error, falling back to original request", {
        error: n
      }), g(
        "intercept_cart_request_declined_v2",
        {
          reason: "processing_exception"
        },
        { sampleRate: 0.05, once: !1 }
      ), null;
    }
  }
  _isInterceptableUrl(t) {
    return t.includes("cart/add") && !t.includes("kaching_bundles=true") && !t.includes("kaching-cart=true") && !t.includes("kaching_popup=true") && !t.includes("kaching_subscriptions_gift=true");
  }
  _parseOriginalItems(t) {
    if (t instanceof FormData)
      return tt(t);
    if (Q(t)) {
      const e = j(t);
      return tt(e);
    }
    return oe(t);
  }
  _findBundleItems(t) {
    var s, o;
    const e = t.find(
      (l) => l.properties.__kaching_bundles
    ), n = e ? JSON.parse(e.properties.__kaching_bundles).deal : (s = this._fallbackDeal) == null ? void 0 : s.dealId;
    if (!n)
      return null;
    const r = this._fallbackDeal;
    if (!e && r) {
      if (!t.some(
        (c) => r.product.variants.some((d) => d.id === c.id)
      ))
        return null;
      g(
        "fallback_deal_used_v3",
        {
          theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name
        },
        { sampleRate: 0.05, once: !1 }
      );
    }
    const a = this._registeredDeals.get(n);
    if (!(a != null && a.length))
      return h("No registered deals found", { dealId: n }), null;
    for (const { getItems: l, product: c } of a) {
      const d = l();
      if (e ? d.some(
        (f) => t.some(
          (u) => u.id === f.id && u.properties.__kaching_bundles === f.properties.__kaching_bundles
        )
      ) : d.length > 0 && c.id === (r == null ? void 0 : r.product.id)) return d;
    }
    return h("No matching items found for deal", { dealId: n }), null;
  }
  _mergeItems(t, e) {
    return Un(t, e, {
      fallbackDeal: this._fallbackDeal,
      propagateLineProperties: this._propagateLinePropertiesEnabled
    });
  }
  _updateBody(t, e) {
    if (t instanceof FormData)
      return qt(t, e);
    if (Q(t)) {
      const n = j(t), r = qt(n, e);
      return Cn(r);
    }
    return Rn(t, e);
  }
}
const xt = (i) => typeof i == "string" ? i : i instanceof URL ? i.href : i && typeof i == "object" && "url" in i ? i.url : null, K = new Kn();
function Xn(i, t) {
  var e;
  if ((i == null ? void 0 : i.dealBarType) === ot.Sku && i.productGID)
    return M(i.productGID);
  if ((i == null ? void 0 : i.dealBarType) === ot.Bundle && i.bundleProducts) {
    const n = i.bundleProducts.some(
      (a) => a.productGID === "default"
    ), r = (e = i.bundleProducts[0]) == null ? void 0 : e.productGID;
    if (!n && r)
      return M(r);
  }
  return t;
}
const Vt = /* @__PURE__ */ new WeakSet();
function Yn(i, t) {
  var o;
  if (Vt.has(i)) return;
  Vt.add(i);
  const e = (o = i.closest("main")) != null ? o : document.body;
  let n = i.getAttribute("selling-plan-id") || void 0;
  const r = () => {
    let l = i;
    for (; l; ) {
      const c = B(
        'input[name="selling_plan"]:checked',
        l
      );
      if (c) return c.value || void 0;
      const d = B(
        'input[name="selling_plan"]',
        l
      );
      if (d) return d.value || void 0;
      if (l === e) break;
      l = l.parentElement;
    }
  }, a = (l) => {
    n !== l && (n = l, h("observeExternalSellingPlanInput", l), S(i, "selling-plan-id", l != null ? l : ""));
  };
  a(r()), D(e, "change", (l) => {
    const c = l.target;
    (c == null ? void 0 : c.name) === "selling_plan" && a(r());
  }), new MutationObserver(() => {
    a(r());
  }).observe(e, {
    childList: !0,
    subtree: !0
  });
}
function Rt(i, t) {
  var e;
  if (i.featuredImages && i.featuredImages.length > 0)
    return (e = i.featuredImages.find(
      (n) => M(n.productGID) === t
    )) == null ? void 0 : e.mediaGID;
  if (i.featuredMediaGID && !(i.featuredProductGID && M(i.featuredProductGID) !== t))
    return i.featuredMediaGID;
}
const Zn = (i, t, e) => {
  le(String(M(i)), {
    activatedGalleries: /* @__PURE__ */ new Set(),
    clickedControls: /* @__PURE__ */ new Set(),
    pendingScrollTargets: [],
    galleryOwner: e,
    imageUrl: t
  });
}, ti = (i) => {
  const t = oi(i), e = document.querySelector("[data-media-id]");
  if (!e)
    return;
  const n = e.getAttribute("data-media-id");
  le(
    n.slice(n.lastIndexOf("-") + 1),
    {
      activatedGalleries: t,
      clickedControls: /* @__PURE__ */ new Set(),
      pendingScrollTargets: [],
      galleryOwner: i
    }
  );
}, le = (i, t) => {
  var e;
  try {
    const n = hi(i), { activatedGalleries: r, imageUrl: a } = t;
    if (n.length === 0) {
      if (fi(i, r) || a && li(a, t))
        return;
      h("activateGalleryMedia: no media element matched", i);
      return;
    }
    const s = n.filter(
      (p) => p.matches("button[data-action='select'][data-media-id]")
    ), o = n.filter(
      (p) => !p.matches("button[data-action='select'][data-media-id]")
    ), l = o.filter(x), c = s.filter(x), d = l.length ? l : c.length ? c : [(e = o[0]) != null ? e : n[0]];
    for (const p of d)
      ei(p, i, t);
    ce(t);
  } catch (n) {
    console.error(n);
  }
}, ei = (i, t, e) => {
  const { activatedGalleries: n, clickedControls: r, pendingScrollTargets: a } = e, s = i.getAttribute("data-media-id"), o = s !== t, l = i.closest(ue);
  if (l && ai(l, t, n))
    return;
  const c = i.closest(
    "media-gallery"
  );
  if (!l && o && c && typeof c.setActiveMedia == "function") {
    n.has(c) || (n.add(c), c.setActiveMedia(s, !1));
    return;
  }
  const d = i.closest(
    "slideshow-component"
  );
  if (d && typeof d.select == "function") {
    const u = i.closest("slideshow-slide");
    if (u) {
      if (!n.has(d)) {
        n.add(d);
        const m = Array.from(
          d.querySelectorAll("slideshow-slide")
        );
        d.select(m.indexOf(u));
      }
      return;
    }
  }
  if (ci(i, t, n) || di(i, t, n) || pi(i, t, n) || si(i, t, n) || ui(i, t, n) || yt(i, n) || pe(i, e))
    return;
  const p = mi(t);
  for (const u of p)
    if (!r.has(u)) {
      r.add(u), et(u, n), u.click();
      return;
    }
  const f = de(i);
  if (f) {
    r.has(f) || (r.add(f), et(f, n), f.click());
    return;
  }
  a.push(i);
}, ce = ({
  pendingScrollTargets: i,
  activatedGalleries: t
}) => {
  for (const e of i)
    yt(e, t) || (et(e, t), e.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    }));
}, $t = "button, [role='button'], a[href^='#']", ni = /zoom|lightbox|photoswipe|pswp|fullscreen|modal|dialog/i, ii = (i) => ni.test(i.className + "") || i.closest(
  "modal-opener, gallery-zoom-open, zoom-dialog, [aria-haspopup='dialog']"
) !== null, de = (i) => {
  var n;
  const t = getComputedStyle(i).cursor === "pointer" && !i.closest("a[href]:not([href^='#'])");
  return (n = [
    i.closest($t),
    ...Array.from(
      i.querySelectorAll($t)
    ),
    t ? i : null
  ].filter((r) => r !== null).find((r) => !ii(r))) != null ? n : null;
}, et = (i, t) => {
  const e = i.closest(
    ".shopify-section, section, [id^='shopify-section']"
  );
  e && t.add(e);
}, yt = (i, t) => {
  let e = i;
  for (; e; ) {
    if (t.has(e))
      return !0;
    e = e.parentElement;
  }
  return !1;
}, ue = "media-gallery.m-media-gallery[data-context='product']", ri = ".m-media-gallery__list > .m-product-media--item[data-media-id][data-index]:not(.swiper-slide-duplicate)", ai = (i, t, e) => {
  var o;
  if (e.has(i))
    return !0;
  const n = Array.from(
    i.querySelectorAll(ri)
  ).find(
    (l) => l.closest(ue) === i && l.getAttribute("data-media-id") === t
  ), r = (o = n == null ? void 0 : n.getAttribute("data-index")) == null ? void 0 : o.trim(), a = r ? Number(r) : Number.NaN, s = a + 1;
  return !Number.isSafeInteger(a) || a < 0 || !Number.isSafeInteger(s) || typeof i.setActiveMedia != "function" ? !1 : (e.add(i), i.setActiveMedia({
    featured_media: { id: Number(t), position: s }
  }), !0);
}, Gt = "swiper-slider-container.swiper-slider__product-page__mobile", si = (i, t, e) => {
  var s;
  const n = i.closest(Gt), r = (s = n == null ? void 0 : n.parentElement) == null ? void 0 : s.closest(
    ".product--thumbnail_slider__mobile"
  );
  return !n || !r ? !1 : e.has(n) ? !0 : !Array.from(
    n.querySelectorAll("swiper-slider [data-media-id]")
  ).some(
    (o) => o.closest(Gt) === n && o.getAttribute("data-media-id") === t
  ) || typeof n.changeSlide != "function" ? !1 : (e.add(n), n.changeSlide(t), !0);
}, nt = /* @__PURE__ */ new Map(), pe = (i, { activatedGalleries: t, galleryOwner: e }) => {
  const n = i.closest(".swiper-slide"), r = i.closest(".swiper"), a = r == null ? void 0 : r.swiper;
  if (!n || !r || !a || typeof a.slideTo != "function")
    return !1;
  if (t.has(r))
    return !0;
  const s = n.getAttribute("data-swiper-slide-index"), o = s ? Number(s) : Number.NaN;
  if (Number.isSafeInteger(o) && o >= 0)
    return typeof a.slideToLoop != "function" ? !1 : (Ht(r, a, e), t.add(r), a.slideToLoop(o), !0);
  const c = Array.from(
    r.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)")
  ).indexOf(n);
  return c < 0 ? !1 : (Ht(r, a, e), t.add(r), a.slideTo(c), !0);
}, Ht = (i, t, e) => {
  var n, r;
  nt.has(i) || nt.set(i, {
    initialIndex: (r = (n = t.realIndex) != null ? n : t.activeIndex) != null ? r : 0,
    owner: e
  });
}, oi = (i) => {
  var e;
  const t = /* @__PURE__ */ new Set();
  for (const [n, { initialIndex: r, owner: a }] of nt) {
    if (a !== i || (nt.delete(n), !n.isConnected))
      continue;
    const s = n.swiper;
    if (s) {
      try {
        typeof s.slideToLoop == "function" ? s.slideToLoop(r) : (e = s.slideTo) == null || e.call(s, r);
      } catch (o) {
        console.error(o);
        continue;
      }
      t.add(n);
    }
  }
  return t;
}, li = (i, t) => {
  const { activatedGalleries: e, clickedControls: n, pendingScrollTargets: r } = t, a = Qt(i);
  if (!a)
    return !1;
  const s = [];
  for (const c of Array.from(document.images)) {
    if (Qt(c.currentSrc || c.src) !== a)
      continue;
    const d = c.closest(
      ".swiper-slide, [data-position], li, figure"
    ) || c;
    s.includes(d) || s.push(d);
  }
  if (s.length === 0)
    return !1;
  const o = s.filter(x), l = o.length ? o : [s[0]];
  for (const c of l) {
    if (yt(c, e) || pe(c, t))
      continue;
    const d = de(c);
    if (d) {
      n.has(d) || (n.add(d), et(d, e), d.click());
      continue;
    }
    r.push(c);
  }
  return ce(t), !0;
}, Qt = (i) => {
  if (!i)
    return null;
  const t = i.split(/[?#]/)[0], e = t.slice(t.lastIndexOf("/") + 1);
  return e ? decodeURIComponent(e).replace(/_\d+x\d*(?=\.[a-z]+$)/i, "").toLowerCase() : null;
}, ci = (i, t, e) => {
  var l;
  const n = i.closest(
    "[data-product-single-media-slider].flickity-enabled"
  );
  if (!n)
    return !1;
  if (e.has(n))
    return !0;
  const a = Array.from(
    n.querySelectorAll("[data-product-slide]")
  ).findIndex(
    (c) => [c.getAttribute("data-id"), c.getAttribute("data-media-id")].some(
      (d) => d === t || (d == null ? void 0 : d.endsWith(`-${t}`))
    )
  ), s = (l = window.theme) == null ? void 0 : l.Flickity;
  if (a < 0 || !s || typeof s.data != "function")
    return !1;
  const o = s.data(n);
  return !o || typeof o.select != "function" ? !1 : (e.add(n), o.select(a), !0);
}, di = (i, t, e) => {
  const n = i.closest(
    "[data-product-slideshow].flickity-enabled"
  );
  return n ? (e.has(n) || (e.add(n), n.dispatchEvent(
    new CustomEvent("theme:image:change", { detail: { id: t } })
  )), !0) : !1;
}, ui = (i, t, e) => {
  var l, c;
  const n = i.closest(
    "[data-product-photos].flickity-enabled"
  );
  if (!n)
    return !1;
  if (e.has(n))
    return !0;
  const a = Array.from(
    n.querySelectorAll("[data-media-id]")
  ).findIndex((d) => {
    const p = d.getAttribute("data-media-id");
    return p === t || (p == null ? void 0 : p.endsWith(`-${t}`));
  }), s = (c = (l = window.theme) == null ? void 0 : l.Flickity) != null ? c : window.Flickity;
  if (a < 0 || typeof (s == null ? void 0 : s.data) != "function")
    return !1;
  const o = s.data(n);
  return !o || typeof o.select != "function" ? !1 : (e.add(n), o.select(a), !0);
}, Ct = "[data-section-type='product'][data-product-id]", fe = (i) => `a.product__thumb[data-product-thumb][data-id='${i}'][data-index]`, he = (i, t, e) => e.has(i) ? !0 : Array.from(
  i.querySelectorAll(fe(t))
).some(
  (r) => r.closest(Ct) === i
) ? (e.add(i), i.dispatchEvent(
  new CustomEvent("variantImageChange", {
    detail: {
      variant: {
        featured_media: {
          id: Number(t),
          preview_image: { src: null }
        }
      }
    }
  })
), !0) : !1, pi = (i, t, e) => {
  if (!i.matches(".product-main-slide[data-media-id]"))
    return !1;
  const n = i.closest(Ct);
  return n ? he(n, t, e) : !1;
}, fi = (i, t) => {
  const e = [], n = document.querySelectorAll(
    fe(i)
  );
  for (const o of n) {
    const l = o.closest(Ct);
    l && !e.includes(l) && e.push(l);
  }
  const r = e.filter(x), a = r.length ? r : e.slice(0, 1);
  let s = !1;
  for (const o of a)
    s = he(o, i, t) || s;
  return s;
}, hi = (i) => {
  const t = document.querySelectorAll("[data-media-id]"), e = [];
  for (const n of t) {
    const r = n.getAttribute("data-media-id");
    (r === i || r.endsWith(`-${i}`)) && e.push(n);
  }
  return e;
}, mi = (i) => {
  const t = Array.from(
    document.querySelectorAll(
      `button[data-target$="-${i}"], button[data-action='select'][data-media-id='${i}'], button[data-action='select'][data-media-id$='-${i}']`
    )
  ), e = t.filter(x), n = t.filter(
    (r) => !x(r)
  );
  return [...e, ...n];
}, x = (i) => {
  if (typeof i.checkVisibility == "function")
    return i.checkVisibility({ checkVisibilityCSS: !0 });
  let t = i;
  for (; t; ) {
    const e = getComputedStyle(t);
    if (e.display === "none" || e.visibility === "hidden")
      return !1;
    t = t.parentElement;
  }
  return !0;
};
function _i(i) {
  const t = i.map((n) => ({
    item: n,
    kachingBundles: gi(n)
  })), e = new Set(
    t.filter(({ kachingBundles: n }) => jt(n)).map(({ item: n }) => n.id)
  );
  return t.reduce((n, { item: r, kachingBundles: a }) => jt(a) || a.collectionBreaksProduct && !a.bxgy && e.has(r.id) ? n + r.quantity : n, 0);
}
function jt(i) {
  return i ? i.main || !1 : !0;
}
function gi(i) {
  return i.properties.__kaching_bundles ? JSON.parse(i.properties.__kaching_bundles) : null;
}
const X = async (i, t, e, n) => {
  var l;
  if (!t || e.length === 0) return;
  const r = bi(n);
  if (r.length === 0) return;
  const a = e.map((c) => c.id), s = (l = r.find((c) => c.localization)) == null ? void 0 : l.localization, o = new q(
    i,
    t
  );
  try {
    const c = await Re(
      o,
      a,
      s
    );
    for (const d of e) {
      const p = c.find(
        (f) => f.id === d.id
      );
      p && yi(d, p);
    }
  } catch (c) {
    console.error("[Kaching Bundles] Failed to fetch swatches", c), setTimeout(() => {
      throw c;
    }, 0);
  }
}, bi = (i) => i.map((e) => e.swatchOptions || []).reduce((e, n) => e.concat(n), []).filter((e) => e != null).filter((e) => e.swatchType !== "default"), yi = (i, t) => {
  for (const e of t.options) {
    const n = i.options.find(
      (r) => r.position === e.position
    );
    if (n) {
      n.defaultName = e.defaultName;
      for (const r of e.optionValues) {
        const a = n.optionValues.find(
          (s) => s.id === r.id
        );
        a && (a.defaultName = r.defaultName);
      }
    }
  }
}, zt = window;
class Ci {
  constructor(t, e, n, r, a, s, o) {
    var l, c, d, p;
    if (this._featuredImageActivated = !1, this._featuredMediaImageUrls = /* @__PURE__ */ new Map(), this._featuredImageSelectionSequence = 0, this._items = [], this._clickedAddToCartBeforeFormSubmit = !1, this._isFirstVariantChange = !0, v("Deal block id:", a.id), v("Deal block settings", a), v("Config", n), v("Product", s), v("Deal block widget", { widget: t }), v("Cart form", { form: (l = e.addToCartForm()) == null ? void 0 : l.form }), v("Add to cart button", {
      button: (c = e.addToCartButton()) == null ? void 0 : c.button
    }), v("Quantity input", { input: e.quantityInput() }), v("Variant picker", {
      picker: (d = e.variantPicker()) == null ? void 0 : d.elements()
    }), this._dealBlockElement = t, this._productBlock = e, this._globalConfig = n, this._translations = r, this._dealBlockSettings = a, this._product = s, this._otherProductsFromLiquid = o, this._country = this._globalConfig.country, this._language = this._globalConfig.locale.split("-")[0].toUpperCase(), this._globalConfig.featureFlags.initialize_with_form_variant) {
      let f = this._product.selectedVariantId || this._product.variants[0].id;
      const u = (p = this._productBlock.addToCartForm()) == null ? void 0 : p.currentVariantId();
      u && this._product.variants.some((m) => m.id == u) && (f = u), this._currentVariantId = f;
    } else
      this._currentVariantId = this._product.selectedVariantId || this._product.variants[0].id;
    this._initialize();
  }
  _initialize() {
    S(
      this._dealBlockElement,
      "deal-block-id",
      this._dealBlockSettings.id
    ), S(
      this._dealBlockElement,
      "config",
      JSON.stringify(this._globalConfig)
    ), S(
      this._dealBlockElement,
      "translations",
      JSON.stringify(this._translations)
    ), S(
      this._dealBlockElement,
      "deal-block",
      JSON.stringify(this._dealBlockSettings)
    ), S(
      this._dealBlockElement,
      "product",
      JSON.stringify(this._product)
    ), S(
      this._dealBlockElement,
      "current-variant-id",
      String(this._currentVariantId)
    ), S(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(this._otherProductsFromLiquid)
    ), this._loadMediaImagesAsync(), this._loadOtherProductsAsync(), this._loadCollectionBreaksProductsAsync(), this._loadComplementaryProductsAsync(), this._loadNativeBundleProductIdsAsync(), this._listenForExternalSellingPlanInput();
    const t = !!this._productBlock.addToCartForm(), e = !t && this._globalConfig.featureFlags.intercept_cart_request === !0 && !!this._globalConfig.customSelectors.addToCartButton;
    !t && !e || this._addEventListeners(e);
  }
  async _loadMediaImagesAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), e = He(this._dealBlockSettings), n = await vt(t, e, 300);
    S(
      this._dealBlockElement,
      "media-images",
      JSON.stringify(n)
    );
  }
  async _loadOtherProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = nn(this._dealBlockSettings);
    if (!t.length)
      return;
    const e = new Set(
      this._otherProductsFromLiquid.map((o) => o.id)
    ), n = t.filter(
      (o) => !e.has(M(o))
    ), r = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), a = n.length ? await W(r, {
      country: this._country,
      language: this._language,
      productIds: n,
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    }) : [], s = [...this._otherProductsFromLiquid, ...a];
    await X(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      s,
      [this._dealBlockSettings]
    ), S(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(s)
    );
  }
  async _loadCollectionBreaksProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const { collectionBreaksEnabled: t, collectionBreaks: e } = this._dealBlockSettings;
    if (!t || !e)
      return;
    const n = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    );
    let r;
    e.visibility === "deal-products" ? r = await It(n, {
      country: this._country,
      language: this._language,
      blockVisibility: this._dealBlockSettings.blockVisibility,
      excludedProductGIDs: (this._dealBlockSettings.excludedProductIds || []).map((s) => `gid://shopify/Product/${s}`),
      selectedProductGIDs: (this._dealBlockSettings.selectedProductIds || []).map((s) => `gid://shopify/Product/${s}`),
      selectedCollectionGIDs: (this._dealBlockSettings.selectedCollectionIds || []).map((s) => `gid://shopify/Collection/${s}`)
    }) : r = await It(n, {
      country: this._country,
      language: this._language,
      blockVisibility: e.visibility,
      excludedProductGIDs: (e.excludedProducts || []).map(
        ({ id: s }) => s
      ),
      selectedProductGIDs: (e.selectedProducts || []).map(
        ({ id: s }) => s
      ),
      selectedCollectionGIDs: (e.selectedCollections || []).map(({ id: s }) => s)
    });
    let a = await W(n, {
      country: this._country,
      language: this._language,
      productIds: r.map((s) => Number(s.split("/").pop())),
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1,
      batchSize: 20,
      onBatchError: (s) => {
        var o;
        return ke(s.message, (o = s.stack) != null ? o : "", {
          sampleRate: 1
        });
      }
    });
    a = a.filter(
      (s) => s.availableForSale
    ), a.sort((s, o) => s.id === this._product.id ? -1 : o.id === this._product.id ? 1 : 0), await X(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      [this._dealBlockSettings]
    ), S(
      this._dealBlockElement,
      "collection-breaks-products",
      JSON.stringify(a)
    ), setTimeout(() => {
      this._preloadImages(a);
    }, 1e3);
  }
  async _loadComplementaryProductsAsync() {
    var a, s;
    if (!(this._dealBlockSettings.dealBars.some(
      (o) => {
        var l;
        return (l = o.upsells) == null ? void 0 : l.some(
          (c) => c.productSource === "complementary"
        );
      }
    ) || ((s = (a = this._dealBlockSettings.checkboxUpsells) == null ? void 0 : a.upsells) == null ? void 0 : s.some(
      (o) => o.productSource === "complementary"
    ))) || !this._globalConfig.storefrontAccessToken)
      return;
    const e = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await Le(
      e,
      {
        country: this._country,
        language: this._language,
        productId: this._product.id
      }
    );
    if (!n.length)
      return;
    let r = await W(e, {
      country: this._country,
      language: this._language,
      productIds: n.map(
        (o) => Number(o.split("/").pop())
      ),
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    });
    r = r.filter(
      (o) => o.availableForSale
    ), await X(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      r,
      [this._dealBlockSettings]
    ), S(
      this._dealBlockElement,
      "complementary-products",
      JSON.stringify(r)
    );
  }
  async _loadNativeBundleProductIdsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = [
      this._product,
      ...this._otherProductsFromLiquid
    ].filter((r) => r.isNativeBundle === null);
    if (t.length === 0)
      return;
    const e = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await xe(
      e,
      t.map((r) => r.id)
    );
    n.length > 0 && S(
      this._dealBlockElement,
      "native-bundle-product-ids",
      JSON.stringify(n)
    );
  }
  _preloadImages(t) {
    for (const e of t) {
      const n = e.variants[0].image || e.image;
      if (n) {
        const r = new Image();
        r.src = n;
      }
    }
  }
  _addEventListeners(t) {
    if (this._listenForVariantUrlChange(), this._listenForQuantityInputChange(), this._listenForBlockVariantSelect(), this._listenForBlockDealBarSelect(), this._listenForBlockDealBarFeaturedImage(), this._listenForBlockItemsChange(), this._listenForBlockAddToCartRequested(), t || (this._listenForFormVariantIdChange(), this._listenForFormSellingPlanChange()), this._listenForAmountDiscountExceedsPrice(), this._listenForUpsellSubscriptionInherited(), !window.kachingBundlesDisableAddToCartHandling) {
      if (this._globalConfig.featureFlags.intercept_cart_request) {
        K.start(this._globalConfig.featureFlags);
        const e = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
        K.registerDeal(
          e,
          this._product,
          () => this._items,
          this._dealBlockSettings.skipCart === !0
        );
      }
      this._listenForAddToCartClick();
    }
  }
  _listenForBlockAddToCartRequested() {
    D(
      this._dealBlockElement,
      "add-to-cart-requested",
      async (t) => {
        var r, a;
        const e = (r = t.detail) == null ? void 0 : r.items;
        if (!(e != null && e.length))
          return;
        h("add-to-cart-requested", e);
        const n = (a = this._productBlock.addToCartButton()) == null ? void 0 : a.button;
        if (n) {
          this._overrideItemsForNextAddToCart = e, n.click();
          return;
        }
        await ct(
          this._dealBlockSettings.nanoId || this._dealBlockSettings.id,
          this._product.id
        ), await this._makeAddToCartRequest({ items: e }), window.location.href = F("checkout");
      }
    );
  }
  /* Native variant change handling */
  _listenForVariantUrlChange() {
    Ce(), D(zt, "locationchange", () => {
      const e = new URLSearchParams(zt.location.search).get("variant");
      e && (h("listenForVariantUrlChange", e), this._handleNativeVariantChange(Number(e)));
    });
  }
  _listenForFormVariantIdChange() {
    const t = this._productBlock.addToCartForm();
    t && t.onVariantIdChange((e) => {
      h("listenForFormVariantIdChange", e), this._handleNativeVariantChange(e);
    });
  }
  _handleNativeVariantChange(t) {
    if (h("handleNativeVariantChange", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), t != this._currentVariantId && this._product.variants.find((e) => e.id == t)) {
      if (this._globalConfig.featureFlags.remove_variant_change_delay ? window.kachingBundlesCurrentVariantChangeInProgress || (this._currentVariantId = t) : this._currentVariantId = t, this._globalConfig.featureFlags.remove_variant_change_delay) {
        if (window.kachingBundlesCurrentVariantChangeInProgress) {
          h("handleNativeVariantChange", "skipping");
          return;
        }
      } else if (this._dealBlockElement.dataset.nativeVariantChangeInProgress || window.kachingBundlesCurrentVariantChangeInProgress) {
        h("handleNativeVariantChange", "skipping");
        return;
      }
      this._dealBlockElement.dataset.nativeVariantChangeInProgress = "true", setTimeout(
        () => {
          delete this._dealBlockElement.dataset.nativeVariantChangeInProgress;
        },
        this._globalConfig.featureFlags.remove_variant_change_delay ? 1e3 : 500
      ), S(
        this._dealBlockElement,
        "current-variant-id",
        String(t)
      );
    }
  }
  _listenForFormSellingPlanChange() {
    if (!this._globalConfig.featureFlags.observe_form_selling_plan)
      return;
    const t = this._productBlock.addToCartForm();
    if (t) {
      try {
        !!B(
          'input[name="selling_plan"][type="radio"]',
          t.form
        ) && g(
          "selling_plan_radio_detected_v2",
          {
            dealBlockId: this._dealBlockSettings.id,
            productId: this._product.id
          },
          { once: !1 }
        );
      } catch {
      }
      t.onSellingPlanChange((e) => {
        h("listenForFormSellingPlanChange", e), S(
          this._dealBlockElement,
          "selling-plan-id",
          e ? String(e) : ""
        );
      });
    }
  }
  _listenForExternalSellingPlanInput() {
    this._globalConfig.featureFlags.observe_external_selling_plan && (this._productBlock.addToCartForm() || Yn(this._dealBlockElement));
  }
  /* Native quantity input */
  _listenForQuantityInputChange() {
    this._productBlock.onQuantityInputChange((t) => {
      if (h("_listenForQuantityInputChange", t), !window.kachingBundlesQuantityChangeInProgress) {
        if (!this._globalConfig.keepQuantityInput || window.kachingBundlesCurrentVariantChangeInProgress || this._dealBlockElement.dataset.nativeVariantChangeInProgress) {
          this._changeQuantityInput();
          return;
        }
        this._globalConfig.keepQuantityInput && S(this._dealBlockElement, "quantity", String(t));
      }
    });
  }
  _changeQuantityInput() {
    const t = this._productBlock.quantityInput();
    !t || this._items.length === 0 || window.kachingBundlesDisableAddToCartHandling && !this._globalConfig.keepQuantityInput || this._setQuantityInputValue(t, _i(this._items));
  }
  _setQuantityInputValue(t, e) {
    window.kachingBundlesQuantityChangeInProgress = !0, h("_setQuantityInputValue", e), t.value = String(e), this._globalConfig.shopifyDomain === "119a01-bf.myshopify.com" && t.dispatchEvent(new Event("input", { bubbles: !0 })), t.dispatchEvent(new Event("change", { bubbles: !0 })), setTimeout(() => {
      delete window.kachingBundlesQuantityChangeInProgress;
    }, 100);
  }
  /* Block variants change handling */
  _listenForBlockVariantSelect() {
    D(this._dealBlockElement, "variant-selected", (t) => {
      const { variantId: e } = t.detail;
      h("listenForBlockVariantSelect", e), this._changeCurrentVariant(e);
    });
  }
  _listenForBlockDealBarSelect() {
    this._globalConfig.webPixel && this._dealBlockElement.addEventListener("deal-bar-selected", (t) => {
      const { dealBarId: e } = t.detail, n = this._dealBlockSettings.dealBars.find(
        (a) => a.id === e
      ), r = Xn(n, this._product.id);
      ne(() => {
        window.Shopify.analytics.publish("kaching_deal_bar_selected", {
          product_id: r,
          deal_block_id: this._dealBlockSettings.id,
          deal_bar_id: e,
          ab_test_variant_id: this._dealBlockSettings.abTestVariantId,
          deal_block_version_id: this._dealBlockSettings.versionId
        });
      });
    });
  }
  // Resolved eagerly so galleries without data-media-id (matched by image URL)
  // can switch on the first bar click instead of waiting for a fetch.
  async _loadFeaturedMediaImagesAsync() {
    const t = [
      ...new Set(
        this._dealBlockSettings.dealBars.map(
          (r) => Rt(r, this._product.id)
        ).filter((r) => r != null)
      )
    ];
    if (!t.length || !this._globalConfig.storefrontAccessToken || t.every(
      (r) => this._featuredMediaMatchedById(r)
    ))
      return;
    const n = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    );
    try {
      const r = await vt(
        n,
        t,
        600
      );
      for (const { gid: a, url: s } of r)
        this._featuredMediaImageUrls.set(a, s);
    } catch (r) {
      console.error(r);
    }
  }
  _featuredMediaMatchedById(t) {
    const e = M(t);
    return !!document.querySelector(
      `[data-media-id="${e}"], [data-media-id$="-${e}"]`
    );
  }
  _listenForBlockDealBarFeaturedImage() {
    this._featuredMediaImagesPromise = this._loadFeaturedMediaImagesAsync(), D(
      this._dealBlockElement,
      "deal-bar-selected",
      async (t) => {
        const { dealBarId: e, preselected: n } = t.detail;
        if (n)
          return;
        const r = e ? this._dealBlockSettings.dealBars.find((s) => s.id === e) : void 0, a = r && Rt(r, this._product.id);
        if (a) {
          h("listenForBlockDealBarFeaturedImage", a);
          const s = ++this._featuredImageSelectionSequence;
          if (!this._featuredMediaMatchedById(a) && (await this._featuredMediaImagesPromise, s !== this._featuredImageSelectionSequence))
            return;
          this._featuredImageActivated = !0, Zn(
            a,
            this._featuredMediaImageUrls.get(a),
            this
          );
          return;
        }
        this._featuredImageSelectionSequence++, this._featuredImageActivated && (this._featuredImageActivated = !1, ti(this));
      }
    );
  }
  _listenForBlockItemsChange() {
    D(this._dealBlockElement, "items-changed", () => {
      var r, a, s;
      clearTimeout(this._updateQuantityInputTimeoutHandle);
      const t = this._dealBlockElement.pricing();
      this._items = this._dealBlockElement.items(), v("Selected items changed", this._items);
      const e = this._items.filter(
        (o) => this._isMainProductItem(o)
      ), n = e.find((o) => o.id == this._currentVariantId) || e[0];
      if (n) {
        if (this._changeCurrentVariant(n.id), (r = this._productBlock.addToCartForm()) == null || r.updateItem(n), this._changeQuantityInput(), (a = this._productBlock.addToCartButton()) == null || a.updatePrice(t.discountedPrice, t.fullPrice), clearTimeout(this._updateAddToCartButtonPriceTimeoutHandle), this._updateAddToCartButtonPriceTimeoutHandle = setTimeout(
          () => {
            var o;
            return (o = this._productBlock.addToCartButton()) == null ? void 0 : o.updatePrice(t.discountedPrice, t.fullPrice);
          },
          2e3
        ), (s = this._productBlock.addToCartForm()) == null || s.toggleAcceleratedCheckoutButtons(
          this._shouldShowAcceleratedCheckoutButtons()
        ), this._isFirstVariantChange && (this._updateQuantityInputTimeoutHandle = setTimeout(() => {
          this._changeQuantityInput(), delete this._updateQuantityInputTimeoutHandle;
        }, 1e3), this._isFirstVariantChange = !1), this._dealBlockSettings.updateNativePrice) {
          clearTimeout(this._updateNativePriceTimeoutHandle);
          const o = this._dealBlockSettings.updateNativePriceType === "item" ? t.discountedPricePerItem : t.discountedPrice, l = this._dealBlockSettings.updateNativePriceType === "item" ? t.fullPricePerItem : t.fullPrice;
          this._productBlock.updatePrice(o, l), this._updateNativePriceTimeoutHandle = setTimeout(() => {
            this._productBlock.updatePrice(o, l);
          }, 1e3);
        }
        this._reconvertPrices();
      }
    });
  }
  _reconvertPrices() {
    var t, e, n, r;
    h("reconvertPrices");
    try {
      (t = window.bucksCC) != null && t.reConvert && window.bucksCC.reConvert(), (e = window.baCurr) != null && e.refreshConversion && window.baCurr.refreshConversion(), (n = window.DoublyGlobalCurrency) != null && n.convertAll && window.DoublyGlobalCurrency.convertAll(), (r = window.conversionBearAutoCurrencyConverter) != null && r.convertPricesOnPage && window.conversionBearAutoCurrencyConverter.convertPricesOnPage(), window.mlvedaload && window.mlvedaload();
    } catch (a) {
      console.error(a);
    }
  }
  _changeCurrentVariant(t) {
    const e = this._product.variants.find((a) => a.id == t);
    if (h("_changeCurrentVariant", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), this._currentVariantId == t || (this._currentVariantId = t, !e))
      return;
    const n = this._productBlock.variantPicker();
    if (!n)
      return;
    (this._globalConfig.featureFlags.remove_variant_change_delay ? !this._dealBlockElement.dataset.nativeVariantChangeInProgress : !0) && (clearTimeout(window.kachingBundlesCurrentVariantChangeInProgress), window.kachingBundlesCurrentVariantChangeInProgress = setTimeout(() => {
      delete window.kachingBundlesCurrentVariantChangeInProgress;
    }, 1e3));
    for (const [a, s] of e.options.entries()) {
      const o = this._product.options[a], l = o.name, c = o.optionValues.find(
        (d) => d.name === s
      ).id;
      n.select(
        a + 1,
        c,
        l,
        s,
        this._product.id,
        e.id
      );
    }
  }
  _listenForAmountDiscountExceedsPrice() {
    document.addEventListener(
      "kaching-bundles-amount-discount-exceeds-price",
      (t) => {
        var r;
        const { totalDiscount: e, fullOrderPrice: n } = t.detail;
        g("amount_discount_exceeds_price_v3", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id,
          country: this._country,
          currency: (r = window.Shopify.currency) == null ? void 0 : r.active,
          totalDiscount: e,
          fullOrderPrice: n
        });
      },
      { once: !0 }
    );
  }
  _listenForUpsellSubscriptionInherited() {
    document.addEventListener(
      "kaching-bundles-upsell-subscription-inherited",
      (t) => {
        const { type: e } = t.detail;
        g("upsell_subscription_inherited", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id,
          upsellType: e
        });
      },
      { once: !0 }
    );
  }
  /* Add to cart */
  _refreshItemsBeforeAddToCart() {
    var n, r;
    this._dealBlockElement.rotateBundleNonce(), this._overrideItemsForNextAddToCart ? (this._items = this._overrideItemsForNextAddToCart, this._overrideItemsForNextAddToCart = void 0) : this._items = this._dealBlockElement.items();
    const t = this._items.filter(
      (a) => this._isMainProductItem(a)
    ), e = (n = t.find((a) => a.id == this._currentVariantId)) != null ? n : t[0];
    e && ((r = this._productBlock.addToCartForm()) == null || r.updateItem(e));
  }
  _listenForAddToCartClick() {
    const t = this._productBlock.addToCartButton();
    if (!t)
      return;
    t.setValidation(() => {
      var a;
      return !this._dealBlockSettings.collectionBreaksEnabled || !((a = this._dealBlockSettings.collectionBreaks) != null && a.requireItemSelectionEnabled) ? !0 : this._dealBlockElement.validateItemSelection().valid;
    }), t.onClick(() => {
      if (this._globalConfig.featureFlags.intercept_cart_request) {
        const a = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
        K.setFallbackDeal(a, this._product);
      }
      this._refreshItemsBeforeAddToCart();
    });
    const e = () => window.kachingBundlesDisableAddToCartHandling ? !1 : this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled() ? !0 : this._globalConfig.featureFlags.intercept_cart_request ? !1 : this._items.length > 1, n = async () => {
      var a;
      if (this._dealBlockSettings.skipCart) {
        await ct(
          this._dealBlockSettings.nanoId || this._dealBlockSettings.id,
          this._product.id
        ), await this._addAllItemsToCart(), window.kachingCartApi && (h("Kaching Cart update tiered promotions bar"), await window.kachingCartApi.updateTieredPromotionsBar()), window.location.href = F("checkout");
        return;
      }
      if (this._isUpcartAppEnabled()) {
        try {
          window.upcartOpenCart && window.upcartOpenCart();
        } catch (s) {
          console.error("upcartOpenCart error", s);
        }
        await this._addAllItemsToCart(), window.upcartRefreshCart && window.upcartRefreshCart();
        return;
      }
      if (this._isOpusAppEnabled()) {
        try {
          window.opusOpen && window.opusOpen();
        } catch (s) {
          console.error("opusOpen error", s);
        }
        await this._addAllItemsToCart(), window.opusRefreshCart && window.opusRefreshCart();
        return;
      }
      if (this._isKrakenCartAppEnabled()) {
        try {
          (a = window.KrakenCart) != null && a.toggleCart && window.KrakenCart.toggleCart(!0);
        } catch (s) {
          console.error("KrakenCart error", s);
        }
        await this._addAllItemsToCart();
        return;
      }
      return this._addItemsExceptCurrentToCart();
    }, r = () => this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled();
    t.onClickIfConditionMet(
      e,
      n,
      r
    ), !this._globalConfig.featureFlags.intercept_cart_request && (this._setupUpcart(), this._setupOpus(), this._setupKrakenCart());
  }
  _setupUpcart() {
    window.upcartShouldSkipAddToCartInterceptor = !0;
    const t = window.upcartShouldSkipAddToCart;
    window.upcartShouldSkipAddToCart = (e) => typeof t == "function" && t(e) === !0 ? !0 : e.includes("kaching_bundles=true");
  }
  _setupOpus() {
    [
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) && (window.OpusNoATC = !0);
  }
  _setupKrakenCart() {
    window.krakenCartIsFormATCEnabled = !1;
  }
  _isUpcartAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || this._globalConfig.shopifyDomain === "qu1udi-ws.myshopify.com" ? !1 : !!B("#UpcartPopup") || !!window.upcartDocumentOrShadowRoot;
  }
  _isOpusAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || ![
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) ? !1 : window.opusActive || !1;
  }
  _isKrakenCartAppEnabled() {
    var t;
    return this._globalConfig.featureFlags.intercept_cart_request ? !1 : ((t = window.KrakenCart) == null ? void 0 : t.isActive) && window.KrakenCart.isActive() || !1;
  }
  async _addItemsExceptCurrentToCart() {
    var l;
    h("addItemsExceptCurrentToCart", this._items);
    const t = (l = this._productBlock.addToCartForm()) == null ? void 0 : l.currentVariantId();
    setTimeout(() => {
      t != this._currentVariantId && g(
        "different_current_variant_v5",
        {
          form: t,
          object: this._currentVariantId
        },
        { sampleRate: 0.05, once: !1 }
      );
    });
    const e = this._items.findIndex(
      (c) => this._isMainProductItem(c) && c.id == t
    ), n = this._items.filter(
      (c, d) => d !== e
    ), r = n.filter((c) => c.parent_id), a = n.filter((c) => !c.parent_id), s = [
      ...r.reverse(),
      ...a
    ].map(({ parent_id: c, ...d }) => d);
    v("Adding only extra items to cart", s);
    const o = e >= 0 ? this._items[e] : void 0;
    if (o) {
      const c = this._productBlock.quantityInput();
      c && this._setQuantityInputValue(c, o.quantity);
    }
    try {
      await this._makeAddToCartRequest({
        items: s,
        partial: !0
      });
    } catch (c) {
      throw this._changeQuantityInput(), c;
    }
  }
  async _addAllItemsToCart() {
    var e, n;
    h("addAllItemsToCart", this._items);
    let t = this._items;
    t.length === 0 && (t = [
      {
        id: (n = (e = this._productBlock.addToCartForm()) == null ? void 0 : e.currentVariantId()) != null ? n : this._currentVariantId,
        quantity: 1,
        properties: {}
      }
    ]), v("Adding all items to cart", t), await this._makeAddToCartRequest({ items: t });
  }
  _collectProperties() {
    const e = w(
      '[name^="properties"]'
    ).map((n) => [n.name.match(/properties\[(.*)\]/)[1], n.value]).filter(([n]) => n !== "__kaching_bundles");
    return Object.fromEntries(e);
  }
  _isMainProductItem(t) {
    const e = this._kachingBundlesProperty(t);
    return e ? e.main || !1 : !0;
  }
  _shouldShowAcceleratedCheckoutButtons() {
    var t;
    return this._items.length > 1 ? !1 : !this._dealBlockSettings.collectionBreaksEnabled || !((t = this._dealBlockSettings.collectionBreaks) != null && t.requireItemSelectionEnabled) ? !0 : this._dealBlockElement.isItemSelectionValid();
  }
  _kachingBundlesProperty(t) {
    return t.properties.__kaching_bundles ? JSON.parse(
      t.properties.__kaching_bundles
    ) : null;
  }
  async _makeAddToCartRequest({
    items: t,
    partial: e = !1
  }) {
    var d, p;
    const n = this._collectProperties(), r = t.map((f) => {
      var u;
      return !this._isMainProductItem(f) && !((u = this._kachingBundlesProperty(f)) != null && u.collectionBreaksProduct) ? f : {
        ...f,
        properties: { ...n, ...f.properties }
      };
    });
    setTimeout(() => this._logCollectionBreakProperties(n));
    const a = { kaching_bundles: "true" };
    e && (a.partial = "true");
    const s = {
      "Content-Type": "application/json"
    };
    e || (s["X-Kaching-Cart-Ignore"] = "1");
    let o;
    try {
      o = await fetch(F("cart/add.js", a), {
        method: "POST",
        body: JSON.stringify({ items: r }),
        headers: s
      });
    } catch (f) {
      throw g(
        "bundle_cart_add_failed_v2",
        {
          partial: e,
          aborted: !0,
          reason: O(f),
          theme: (d = window.Shopify.theme) == null ? void 0 : d.schema_name
        },
        { once: !1 }
      ), f;
    }
    if (o.ok)
      return;
    let l;
    try {
      l = (await o.json()).description;
    } catch {
      l = void 0;
    }
    const c = bn(e, o.status);
    if (g(
      "bundle_cart_add_failed_v2",
      {
        status: o.status,
        partial: e,
        aborted: c,
        reason: l,
        theme: (p = window.Shopify.theme) == null ? void 0 : p.schema_name
      },
      { once: !1 }
    ), c)
      throw new Error(`cart/add.js failed with HTTP ${o.status}`);
  }
  _logCollectionBreakProperties(t) {
    if (!this._dealBlockSettings.collectionBreaksEnabled)
      return;
    const e = Object.fromEntries(
      Object.entries(t).filter(
        ([n]) => !n.startsWith("__kaching_")
      )
    );
    Object.keys(e).length !== 0 && g(
      "collection_break_properties_v3",
      {
        properties: e
      },
      { sampleRate: 0.05, once: !1 }
    );
  }
}
const ki = "essential-preorder:kaching-bundles-pv-updated", ut = "kaching-bundles-block, kaching-bundles-bar", Ut = "variant-badges", rt = "[]";
let N = rt, Jt = !1, Wt = !1, Kt = !1;
function wi() {
  try {
    Jt || (Jt = !0, D(
      window,
      ki,
      () => Xt(!0)
    )), Xt(!1);
  } catch (i) {
    console.error(i);
  }
}
function Xt(i) {
  var n, r, a;
  const t = (a = (r = (n = window.essentialPreorderConfigs) == null ? void 0 : n.kachingBundles) == null ? void 0 : r.preorderVariants) != null ? a : [];
  vi(t, i);
  const e = Ii(t);
  e !== N && (N = e, h("Essential preorder badges updated", N), Si(), N !== rt && Pi());
}
function vi(i, t) {
  Kt || i.length === 0 || (Kt = !0, g(
    "essential_preorders_detected_v6",
    {
      variantCount: i.length,
      badgeCount: i.filter((e) => e.badgeHtml).length,
      late: t
    },
    { sampleRate: 0.1 }
  ));
}
function Ii(i) {
  const t = [];
  for (const { id: e, badgeHtml: n } of i)
    e && n && t.push({ variantId: e, badgeHtml: n });
  return JSON.stringify(t);
}
function Si() {
  for (const i of w(ut))
    pt(i);
}
function pt(i) {
  var e;
  ((e = i.getAttribute(Ut)) != null ? e : rt) !== N && S(i, Ut, N);
}
function Pi() {
  if (Wt)
    return;
  Wt = !0, new MutationObserver((t) => {
    if (N !== rt) {
      for (const e of t)
        for (const n of e.addedNodes)
          if (n instanceof HTMLElement) {
            if (n.matches(ut)) {
              pt(n);
              continue;
            }
            if (n.firstElementChild)
              for (const r of w(ut, n))
                pt(r);
          }
    }
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  });
}
class Ai {
  constructor(t) {
    this._submitInProgress = !1, this._ignoreClick = !1, this._clickHandler = null, this._onClickCallback = null, this._validationCallback = null, this._horizonAnimationDisabled = !1, this.button = t;
  }
  onClick(t) {
    this._onClickCallback = t;
  }
  setValidation(t) {
    this._validationCallback = t;
  }
  onClickIfConditionMet(t, e, n) {
    this._clickHandler = {
      condition: t,
      callback: e,
      shouldPreventDefault: n
    }, this._registerClickHandler();
  }
  replaceButton(t) {
    v("New add to cart button", { button: t }), this.button = t, this._clickHandler && this._registerClickHandler();
  }
  _registerClickHandler() {
    if (!this._clickHandler)
      return;
    this._setupHorizonThemeHandling();
    const t = async (n) => {
      var l;
      const r = this._submitInProgress || this._ignoreClick;
      if (this._onClickCallback && !r && this._onClickCallback(), this._validationCallback && !this._validationCallback()) {
        n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation();
        return;
      }
      const a = this._clickHandler.condition(), s = this._clickHandler.shouldPreventDefault();
      if (this._ignoreClick || v("Add to cart button clicked"), h("AddToCartButton#interceptClick", {
        conditionMet: a,
        preventDefault: s,
        submitInProgress: this._submitInProgress,
        ignoreClick: this._ignoreClick
      }), !a)
        return;
      if (this._submitInProgress) {
        this._submitInProgress = !1;
        return;
      }
      if (this._ignoreClick)
        return;
      this._submitInProgress = !0, this._ignoreClick = !0, this.button.disabled = !0;
      const o = setTimeout(() => {
        this._ignoreClick = !1;
      }, 1e3);
      n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation();
      try {
        await this._clickHandler.callback();
      } catch (c) {
        h("Add to cart callback failed, not submitting", { error: c }), clearTimeout(o), this._submitInProgress = !1, this._ignoreClick = !1, this.button.disabled = !1, g(
          "add_to_cart_callback_failed_v2",
          {
            error: O(c),
            theme: (l = window.Shopify.theme) == null ? void 0 : l.schema_name
          },
          { once: !1 }
        );
        return;
      }
      if (this.button.disabled = !1, s) {
        this._submitInProgress = !1;
        return;
      }
      await new Promise((c) => setTimeout(c, 200)), this.button.click();
    };
    this.button.addEventListener("click", t, !0);
  }
  updatePrice(t, e) {
    const n = this._findAllAddToCartPriceElements(this.button);
    if (n.length === 0)
      return;
    const r = n.find(
      (s) => this._isCompareAtPriceElement(s)
    ), a = n.find((s) => s !== r) || n[0];
    a.innerHTML = t.amount > 0 ? t.formatted : "", r && r !== a && (e.amount > t.amount && t.amount > 0 ? (r.innerHTML = e.formatted, r.style.display = "") : r.innerHTML = "");
  }
  _setupHorizonThemeHandling() {
    const t = this.button.closest("add-to-cart-component");
    t && this.button.addEventListener(
      "pointerdown",
      () => {
        this._validationCallback && !this._validationCallback() ? (t.setAttribute("data-add-to-cart-animation", "false"), this._horizonAnimationDisabled = !0) : this._horizonAnimationDisabled && (t.setAttribute("data-add-to-cart-animation", "true"), this._horizonAnimationDisabled = !1);
      },
      !0
    );
  }
  _isPriceNode(t) {
    var n;
    const e = (n = t.childNodes[0]) == null ? void 0 : n.nodeValue;
    return !!(e && e.match(/\d/) && !e.match(/\p{L}{4}/u) && !e.includes("%"));
  }
  _findAllAddToCartPriceElements(t) {
    const e = [];
    if (!t.childNodes.length)
      return e;
    if (this._isPriceNode(t))
      return e.push(t), e;
    for (const n of t.childNodes)
      e.push(...this._findAllAddToCartPriceElements(n));
    return e;
  }
  _isCompareAtPriceElement(t) {
    let e = t;
    for (; e && e !== this.button; ) {
      const n = e.tagName;
      if (n === "S" || n === "DEL" || n === "STRIKE" || /compare/i.test(e.className || "") || getComputedStyle(e).textDecorationLine.includes("line-through"))
        return !0;
      e = e.parentElement;
    }
    return !1;
  }
}
class Bi {
  constructor(t, e, n, r) {
    this._acceleratedCheckoutButtonsEnabled = !0, this._currentItem = null, this._variantIdChangeCallback = null, this._sellingPlanChangeCallback = null, this._variantIdIntervalId = null, this._sellingPlanObserver = null, this._sellingPlanChangeHandler = null, h("AddToCartForm", {
      form: t,
      addQuantityInput: e,
      allowSellingPlanUpdate: n
    }), this.form = t, this._addQuantityInput = e, this._allowSellingPlanUpdate = n, this._addSessionId = r, this._addSessionIdInput();
  }
  _addSessionIdInput() {
    if (!this._addSessionId)
      return;
    const t = this._findOrCreateInput(
      "properties[__kaching_session_id]"
    );
    t.value = Y();
  }
  updateItem(t) {
    h("AddToCartForm#updateItem", [this.form, t]), this._currentItem = t, this._updateIdInput(t.id), this._updateQuantityInput(t.quantity), this._updateKachingBundlesPropertyInput(t.properties), this._updateSellingPlanInput(t.selling_plan);
  }
  currentVariantId() {
    const t = this._findVariantIdElement();
    if (t)
      return Number(t.value);
  }
  onVariantIdChange(t) {
    this._variantIdChangeCallback = t, this._registerVariantIdObserver();
  }
  _registerVariantIdObserver() {
    if (!this._variantIdChangeCallback)
      return;
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null);
    const t = this._variantIdChangeCallback, e = this._findVariantIdElement();
    if (e instanceof HTMLInputElement && lt(e, "value", (n, r) => {
      n !== r && r && t(Number(r));
    }), e instanceof HTMLSelectElement) {
      let n;
      this._variantIdIntervalId = window.setInterval(() => {
        const r = e.value;
        n !== r && r && (n = r, t(Number(r)));
      }, 100);
    }
  }
  onSellingPlanChange(t) {
    this._sellingPlanChangeCallback = t, this._registerSellingPlanObserver();
  }
  _registerSellingPlanObserver() {
    if (this._allowSellingPlanUpdate || !this._sellingPlanChangeCallback)
      return;
    this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null);
    const t = this._sellingPlanChangeCallback;
    let e;
    const n = (s) => {
      e !== s && (e = s, t(s ? Number(s) : void 0));
    };
    let r = null;
    const a = () => {
      var l;
      const s = this._findInput("selling_plan");
      s !== r && (r = s, s && lt(s, "value", (c, d) => {
        n(d);
      })), this._sellingPlanChangeHandler || (this._sellingPlanChangeHandler = (c) => {
        const d = c.target;
        d.name === "selling_plan" && n(d.value);
      }, this.form.addEventListener("change", this._sellingPlanChangeHandler));
      const o = B(
        'input[name="selling_plan"]:checked',
        this.form
      );
      n((l = o == null ? void 0 : o.value) != null ? l : s == null ? void 0 : s.value);
    };
    a(), this._sellingPlanObserver = new MutationObserver((s) => {
      s.some((o) => o.type === "childList") && a();
    }), this._sellingPlanObserver.observe(this.form, {
      childList: !0,
      subtree: !0
    });
  }
  toggleAcceleratedCheckoutButtons(t) {
    const e = "kaching-bundles-form--different-variants-selected";
    this._acceleratedCheckoutButtonsEnabled = t, t ? this.form.classList.remove(e) : this.form.classList.add(e);
  }
  _cleanupObservers() {
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null), this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null), this._sellingPlanChangeHandler && (this.form.removeEventListener("change", this._sellingPlanChangeHandler), this._sellingPlanChangeHandler = null);
  }
  replaceForm(t) {
    v("New add to cart form", { form: t }), this._cleanupObservers(), this.form = t, this._addSessionIdInput(), this.toggleAcceleratedCheckoutButtons(
      this._acceleratedCheckoutButtonsEnabled
    ), this._currentItem && this.updateItem(this._currentItem), this._registerVariantIdObserver(), this._registerSellingPlanObserver();
  }
  _updateIdInput(t) {
    const e = this._findVariantIdElement() || this._createInput("id"), n = String(t);
    this._ensureSelectOptionExists(e, n), e.disabled = !1, e.value = n;
  }
  _updateQuantityInput(t) {
    h("AddToCartForm#_updateQuantityInput", t);
    let e = null;
    this._addQuantityInput ? e = this._findOrCreateInput("quantity") : e = this._findInput("quantity"), e && (e.disabled = !1, e.value = String(t));
  }
  _updateKachingBundlesPropertyInput(t) {
    var e, n;
    if (t.__kaching_bundles) {
      const r = this._findOrCreateInput(
        "properties[__kaching_bundles]"
      );
      r.disabled = !1, r.value = this._encodeBundlesProperty(
        t.__kaching_bundles
      );
      const a = (n = (e = window.Shopify.theme) == null ? void 0 : e.schema_name) == null ? void 0 : n.toLowerCase();
      a != null && a.includes("pipeline") && (r.dataset.morphSkip = "true");
    } else {
      const r = this._findInput("properties[__kaching_bundles]");
      r == null || r.remove();
    }
  }
  _encodeBundlesProperty(t) {
    var n, r;
    const e = (r = (n = window.Shopify.theme) == null ? void 0 : n.schema_name) == null ? void 0 : r.toLowerCase();
    return e != null && e.includes("shrine pro") || e != null && e.includes("ascendify") ? btoa(t) : t;
  }
  _updateSellingPlanInput(t) {
    if (this._allowSellingPlanUpdate)
      if (t) {
        const e = this._findOrCreateInput("selling_plan");
        e.disabled = !1, e.value = String(t);
      } else {
        const e = this._findInput("selling_plan");
        e == null || e.remove();
      }
  }
  _findOrCreateInput(t) {
    return this._findInput(t) || this._createInput(t);
  }
  _ensureSelectOptionExists(t, e) {
    if (!(t instanceof HTMLSelectElement)) return;
    if (!Array.from(t.options).some(
      (r) => r.value === e
    )) {
      const r = Z("option");
      r.value = e, r.text = "", t.appendChild(r);
    }
  }
  _findInput(t) {
    return B(
      `[name="${t}"]`,
      this.form
    );
  }
  _findVariantIdElement() {
    return Array.from(this.form.elements).find(
      (t) => (t instanceof HTMLInputElement || t instanceof HTMLSelectElement) && t.name === "id"
    ) || null;
  }
  _createInput(t) {
    const e = Z("input");
    return e.type = "hidden", e.name = t, this.form.prepend(e), e;
  }
}
const ft = "kaching-bundle, kaching-bundle-deals", me = [
  'form[action*="/cart/add"]',
  "form[data-instant-form-product-url]",
  // Instant page builder
  'form[action$="/add"]'
], ht = [
  '[data-pf-type^="ProductATC"]',
  // PageFly sometimes uses ProductATC2
  "button.gp-button-atc",
  // Gempages
  "gp-product-button button",
  // Gempages v7
  "x-buy-button",
  // Minimog
  "button.button--addToCart",
  // Booster
  'button[type="submit"]',
  'input[type="submit"]'
], _e = [
  // Gempages
  [
    '[data-icon="gpicon-product-cartbutton"]',
    '[data-icon="gpicon-product-quantity"]'
  ],
  // Gempages v7
  ["gp-product-button", "gp-product-quantity"],
  // Dawn (and other free themes)
  ["product-form", ".product-form__quantity"],
  // Horizon
  [".buy-buttons-block", ".quantity-selector-wrapper"],
  // PageFly app
  ['[data-pf-type^="ProductATC"]', '[data-pf-type="ProductQuantity"]'],
  // PageFly sometimes uses ProductATC2
  // Debut
  [".product-form__item--submit", 'label[for="Quantity-product-template"]'],
  // Debutify
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Impact
  [".product-info__buy-buttons", ".product-info__quantity-selector"],
  // Prestige
  [
    ".ProductForm__BuyButtons, .ProductForm__AddToCart",
    ".ProductForm__QuantitySelector"
  ],
  // Prestige (v7)
  ['[data-block-type="buy-buttons"]', '[data-block-type="quantity-selector"]'],
  // Envy
  [".product-page--submit-action", ".quantity-controls__outer"],
  // Warehouse
  [".product-form__payment-container", ".product-form__info-item--quantity"],
  // Atlantic
  ["[data-product-submit]", ".product-quantity-input"],
  // Empire
  [".product-form--atc", ".product-form--atc-qty"],
  // Turbo
  [".purchase-details", ".purchase-details__quantity"],
  // Expanse
  [".product-single__form .payment-buttons", ".product__quantity"],
  // Minimal
  [".product-form--wide", ".product-single__quantity"],
  // Brooklyn
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Blockshop
  [".product-form--button-container", null],
  // Venture
  [".product-form__item--submit", ".product-form__item--quantity"],
  // Showcase
  [".product-detail__form__action", null],
  // Palo Alto
  [".product__submit__buttons", null],
  // Symmetry
  [".buy-buttons-row", ".quantity-wrapper"],
  // Kalles, Unsen
  [".t4s-product-form__buttons", "[data-quantity-wrapper]"],
  // Alchemy
  [".qty-wrapper--with-payment-button", ".product-qty"],
  // Baseline
  [".shopify-product-form", ".product-quantity-block"],
  // Shapes
  [".shopify-product-form", ".product-block-quantity-selector"],
  // Colors
  [".type_buy_buttons", ".type_quantity_selector"],
  // Motion
  [".product-single__form .add-to-cart", ".product__quantity"],
  // Avenue
  [".purchase-section", ".quantity.form"],
  // Ella
  [".product-form__buttons", ".quantity_selector"],
  // Booster
  [".product__atc", ".quantity--input"],
  // Focal
  [".product-form__payment-container", ".quantity-selector"],
  // EComposer
  [".ecom-product-single__add-to-cart", ".ecom-product-single__quantity"],
  // Solodrop
  [".product-form__submit", ".product__quantity"],
  // Enterprise
  [".product-info__add-to-cart", "quantity-input"],
  // Yuva
  [".yv-checkout-btn", ".yv-product-quantity"],
  // Reformation
  [".product-add-to-cart-container", "quantity-selector"],
  // Pipeline
  [".product__block__buttons", ".product__block__quantity"],
  // Minimog
  ["x-buy-button", "x-quantity-input"],
  // Xtra
  [".submit:has(.overlay-buy_button)", ".input-amount"],
  // Instant page builder
  [
    '[data-instant-action-type="redirect-to-cart"]',
    '[data-instant-type="container"]:has(> .instant-quantity-input)'
  ]
], Ti = (i, t, e, n) => {
  if (h("_updateNativePrice", {
    discountedPrice: t,
    fullPrice: e
  }), e.amount > 0) {
    const r = st(
      "[data-kaching-price-compare]",
      n.customSelectors.priceCompare
    );
    if (r.length > 0)
      for (const a of r)
        e.amount > t.amount ? (a.innerHTML = e.formatted, a.style.display = "") : a.style.display = "none";
    else {
      const a = [
        ".price--large .price__sale .price-item--regular",
        // Dawn, Shrine
        ".price--medium .price__sale .price-item--regular",
        // Be Yours
        ".lumin-price .price__sale .price-item--regular",
        // Architect, Beauty
        ".product-page-price .price__sale .price-item--regular",
        // Craft, Atlas
        ".f-price--large .f-price__sale .f-price-item--regular",
        // Sleek
        'gp-product-price div[type="compare"]',
        // Gempages
        "gp-product-price .gp-product-compare-price",
        // Gempages
        "product-price .compare-at-price",
        // Horizon
        ".pp-product-price .pp-price-item--sale",
        // Page Pilot
        ".product__price-and-badge .product__price--compare",
        // Palo Alto
        ".product-block--price span[data-compare-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--regular",
        // Minimog
        ".product-info__price compare-at-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] compare-at-price',
        // Prestige
        ".product-form__info-item .price--compare",
        // Warehouse
        '[data-product-type="compare_at_price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale del",
        // Marble
        ".product__price-wrapper .price__container .product__price span:not(.visually-hidden)"
        // Marble
      ].flatMap((o) => w(o)), s = L(
        i,
        a
      );
      if (s) {
        s.innerHTML = e.formatted;
        const o = s.closest("gp-product-price");
        o instanceof HTMLElement && (o.dataset.hidden = e.amount > t.amount ? "false" : "true");
      }
    }
    for (const a of st(
      "[data-kaching-label]",
      n.customSelectors.label
    ))
      a.innerHTML !== e.formatted && (a.innerHTML = e.formatted);
  }
  if (t.amount > 0) {
    const r = st(
      "[data-kaching-price]",
      n.customSelectors.price
    );
    if (r.length > 0)
      for (const a of r)
        a.innerHTML = t.formatted;
    else {
      const a = [
        ".price--large .price__regular .price-item--regular",
        // Dawn, Shrine
        ".price--large .price__sale .price-item--sale",
        // Dawn, Shrine
        ".price--medium .price__regular .price-item--regular",
        // Be Yours
        ".price--medium .price__sale .price-item--sale",
        // Be Yours
        ".lumin-price .price__regular .price-item--regular",
        // Architect, Beauty
        ".lumin-price .price__sale .price-item--sale",
        // Architect, Beauty
        ".product-page-price .price__regular .price-item--regular",
        // Craft, Atlas
        ".product-page-price .price__sale .price-item--sale",
        // Craft, Atlas
        ".f-price--large .f-price__regular .f-price-item--regular",
        // Sleek
        ".f-price--large .f-price__sale .f-price-item--sale",
        // Sleek
        'gp-product-price div[type="regular"]',
        // Gempages
        "gp-product-price .gp-price:not(.gp-product-compare-price)",
        // Gempages
        "product-price .price",
        // Horizon
        ".pp-product-price .pp-price-item--regular",
        // Page Pilot
        ".product__price-and-badge .product__price--regular",
        // Palo Alto
        ".product-block--price span[data-product-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--sale",
        // Minimog
        ".product-info__price sale-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] sale-price',
        // Prestige
        ".product-form__info-item .price:not(.price--compare)",
        // Warehouse
        '[data-product-type="price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale ins"
        // Marble
      ].flatMap((o) => w(o)), s = L(i, a);
      s && (s.innerHTML = t.formatted);
    }
  }
  if (t.amount > 0 && e.amount > 0) {
    const r = Math.round(
      (e.amount - t.amount) / e.amount * 100
    ), a = w("[data-kaching-price-badge]");
    if (a.length > 0)
      for (const s of a)
        r > 0 ? (s.innerHTML = s.innerHTML.replace(
          /\d+%/,
          `${r}%`
        ), s.style.display = "") : s.style.display = "none";
    else {
      const s = [
        ".price--large .price__badge-sale",
        // Dawn, Shrine
        ".lumin-price .price__badge-sale",
        // Architect
        ".product-page-price .price__badge-sale",
        // Craft, Atlas
        "gp-product-tag div[data-gp-text]",
        // Gempages
        ".product__price-and-badge span[data-price-off-amount]",
        // Palo Alto
        ".product-block--price span[data-save-price]",
        // Impulse
        ".product-info__price on-sale-badge"
        // Impact
      ].flatMap((l) => w(l)), o = L(i, s);
      o && (/\d/.test(o.innerHTML) && !o.innerHTML.includes("%") ? o.style.display = "none" : o.innerHTML = o.innerHTML.replace(/\d+%/, `${r}%`));
    }
  }
}, st = (i, t) => w(t || i);
class G {
  static find(t, e) {
    let n = t.parentElement;
    for (; n; ) {
      if (e) {
        const s = w(
          e,
          n
        );
        if (s.length > 0)
          return new G(s);
      }
      const r = B(
        [
          "variant-selects",
          "variant-radios",
          "variant-picker",
          "product-variants",
          "gp-product-variants",
          ".gf_variants-wrapper",
          '[data-pf-type="ProductVariantSwatches"]',
          ".product-selectors",
          ".product-block-variant-picker",
          "dm-variant-selects",
          "simple-variant-picker"
        ].join(", "),
        n
      );
      if (r) return new G([r]);
      let a = w(
        [
          ".selector-wrapper",
          ".radio-wrapper",
          ".variant-wrapper",
          "div[data-product-option]",
          ".pp-variant-picker"
        ].join(", "),
        n
      );
      if (window.Shopify.shop && ["28212b.myshopify.com", "9bd9ad.myshopify.com"].includes(
        window.Shopify.shop
      ) && (a = w(
        ".selector-wrapper, .radio-wrapper, .variant-wrapper, .select-wrapper, div[data-product-option]",
        n
      )), a.length > 0) {
        const s = a.filter(
          (o) => !a.some(
            (l) => l !== o && l.contains(o)
          )
        );
        return new G(s);
      }
      n = n.parentElement;
    }
    return null;
  }
  constructor(t) {
    this._elements = t;
  }
  elements() {
    return this._elements;
  }
  hide() {
    for (const t of this._elements)
      t.style.display = "none", t.parentElement.classList.add(
        "kaching-bundles--variant-selects-hidden"
      );
  }
  select(t, e, n, r, a, s) {
    h("VariantPicker#select", [
      t,
      e,
      n,
      r
    ]), this._clickOptionWrapper(n, r) || this._clickRadioInput(
      t,
      e,
      n,
      r,
      a
    ) || this._setSelectValue(t, n, r) || this._setSelectVariantId(s) || this._clickButton(n, r);
  }
  // GemPages v7
  _clickOptionWrapper(t, e) {
    const r = this._elements.map((a) => w(".option-value-wrapper", a)).flat().find(
      (a) => a.getAttribute("option-data") === t && a.getAttribute("option-value") === e
    );
    return r ? (h("VariantPicker#_clickOptionWrapper", r), r.click(), !0) : !1;
  }
  _clickRadioInput(t, e, n, r, a) {
    const s = this._elements.map((c) => [...c.querySelectorAll("input")]).flat();
    let o = s.filter(
      (c) => [
        n,
        `${n}-${t}`,
        `options[${n}]`,
        `option${t}`,
        `option-${a}-${t - 1}`,
        `${a}-options-${n}`
      ].includes(c.name.trim())
    );
    o.length || (o = s.filter(
      (c) => c.dataset.optionPosition ? Number(c.dataset.optionPosition) === t : !1
    )), o.length || (o = s.filter((c) => c.type === "radio"));
    const l = o.find(
      (c) => c.value == r || c.value === String(e)
    );
    return l ? (h("VariantPicker#_clickRadioInput", l), l.click(), !0) : !1;
  }
  _setSelectValue(t, e, n) {
    const a = this._elements.map((o) => [...o.querySelectorAll("select")]).flat().find((o) => !!([`options[${e}]`, `option${t}`].includes(o.name) || o.dataset.index === `option${t}` || o.dataset.optionName === e || [
      `SingleOptionSelector-product-${t - 1}`,
      // PageFly
      `p-variant-dropdown-${t}`,
      // Gempages v6
      `option-${e.toLowerCase().replace(/ /g, "-")}`
    ].includes(o.id)));
    return !a || ![...a.options].find(
      (o) => o.value == n
    ) ? !1 : a.value === n ? (h("VariantPicker#_setSelectValue - already set", {
      variantSelect: a,
      optionValue: n
    }), !0) : (h("VariantPicker#_setSelectValue", { variantSelect: a, optionValue: n }), a.value = n, a.dispatchEvent(new Event("change", { bubbles: !0 })), !0);
  }
  _setSelectVariantId(t) {
    const n = this._elements.map((r) => [...r.querySelectorAll("select")]).flat().find(
      (r) => [...r.options].find((a) => Number(a.value) === t)
    );
    return n ? n.value === String(t) ? (h("VariantPicker#_setSelectVariantId - already set", {
      variantSelect: n,
      variantId: t
    }), !0) : (h("VariantPicker#_setSelectVariantId", { variantSelect: n, variantId: t }), n.value = String(t), n.dispatchEvent(new Event("change", { bubbles: !0 })), !0) : !1;
  }
  _clickButton(t, e) {
    const n = this._elements.find(
      (a) => a.getAttribute("data-product-option") === t
    );
    if (!n) return !1;
    const r = w("[data-value]", n).find(
      (a) => a.getAttribute("data-value") === e
    );
    return r ? (h("VariantPicker#_clickButton", r), r.click(), !0) : !1;
  }
}
class Ei {
  constructor(t, e, n) {
    this._variantPicker = null, this._quantityInput = null, this._hiddenQuantityElement = null, this._onQuantityChange = null, this._addToCartForm = null, this._addToCartButton = null, this._placeholder = t, this._globalConfig = e, this._dealBlockSettings = n;
  }
  initialize() {
    this._findVariantPicker(), this._observeVariantPickerRemoval(), this._findQuantityInput(), this._listenForQuantityInputChange(), this._observeQuantityInputRemoval(), this._findAddToCartForm(), this._observeAddToCartFormRemoval(), this._findAddToCartButton(), this._moveAddToCartButtonOutOfQuantityElement(), this._observeAddToCartButtonRemoval();
  }
  variantPicker() {
    return this._variantPicker;
  }
  quantityInput() {
    return this._quantityInput;
  }
  addToCartForm() {
    return this._addToCartForm;
  }
  addToCartButton() {
    return this._addToCartButton;
  }
  onQuantityInputChange(t) {
    this._onQuantityChange = t;
  }
  updatePrice(t, e) {
    Ti(
      this._placeholder,
      t,
      e,
      this._globalConfig
    );
  }
  _findVariantPicker() {
    const t = G.find(
      this._placeholder,
      this._globalConfig.customSelectors.variantPicker
    );
    t && (this._dealBlockSettings.hideVariantPicker && t.hide(), this._variantPicker = t);
  }
  _observeVariantPickerRemoval() {
    this._variantPicker && R(this._variantPicker.elements()[0], () => {
      var t, e;
      this._findVariantPicker(), v("New variant picker", {
        picker: (t = this._variantPicker) == null ? void 0 : t.elements()
      }), g(
        "variant_picker_removed_v2",
        {
          recreated: !!this._variantPicker,
          theme: (e = window.Shopify.theme) == null ? void 0 : e.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeVariantPickerRemoval();
    });
  }
  _findQuantityInput() {
    const t = this._findQuantityElements(), n = L(
      this._placeholder,
      t,
      6
    );
    if (!n)
      return;
    this._globalConfig.keepQuantityInput || (this._hiddenQuantityElement = n, n.style.display = "none");
    const r = n.matches("input") ? n : n.querySelector("input");
    this._quantityInput = r;
  }
  _listenForQuantityInputChange() {
    this._quantityInput && (D(this._quantityInput, "change", () => {
      this._onQuantityChange && this._onQuantityChange(Number(this._quantityInput.value));
    }), lt(this._quantityInput, "value", (t, e) => {
      t !== e && this._onQuantityChange && this._onQuantityChange(Number(e));
    }));
  }
  _observeQuantityInputRemoval() {
    this._quantityInput && R(this._quantityInput, () => {
      var t;
      this._findQuantityInput(), this._listenForQuantityInputChange(), this._moveAddToCartButtonOutOfQuantityElement(), v("New quantity input", {
        input: this._quantityInput
      }), g(
        "quantity_input_removed_v2",
        {
          recreated: !!this._quantityInput,
          theme: (t = window.Shopify.theme) == null ? void 0 : t.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeQuantityInputRemoval();
    });
  }
  _findQuantityElements() {
    const t = this._globalConfig.customSelectors.quantity;
    if (t) {
      const e = w(t);
      if (e.length)
        return e;
    }
    for (const [e, n] of _e) {
      if (!n)
        continue;
      const r = w(n);
      if (r.length)
        return r;
    }
    return w(".product-form__quantity");
  }
  _findAddToCartForm() {
    const t = this._findCartForm();
    if (!t)
      return;
    const e = !!this._dealBlockSettings.subscriptionsEnabled || this._dealBlockSettings.dealBars.some(
      (r) => r.sellingPlanEnabled
    ), n = !!this._dealBlockSettings.abTestVariantNumber || this._globalConfig.featureFlags.debug_cart_add === !0;
    this._addToCartForm = new Bi(
      t,
      !this._quantityInput,
      e,
      n
    );
  }
  _findCartForm() {
    let t = this._placeholder.parentElement;
    for (; t; ) {
      for (const e of me)
        for (const n of [
          this._globalConfig.customSelectors.addToCartButton,
          ...ht,
          "button"
        ]) {
          if (!n)
            continue;
          const r = B(
            `${e} ${n}`,
            t
          );
          if (r) {
            const a = r.closest(
              e
            );
            if (!a) continue;
            return !a.contains(this._placeholder) && a.querySelector(ft) ? null : a;
          }
        }
      t = t.parentElement;
    }
    return null;
  }
  _observeAddToCartFormRemoval() {
    var e;
    const t = (e = this._addToCartForm) == null ? void 0 : e.form;
    window.Shopify.designMode || !t || R(t, () => {
      var r, a;
      const n = this._findCartForm();
      n && ((r = this._addToCartForm) == null || r.replaceForm(n), g(
        "cart_form_removed_v2",
        {
          theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeAddToCartFormRemoval());
    });
  }
  _findAddToCartButton() {
    const t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
    if (!t) {
      this._warnAboutMissingAddToCartButton(), this._addToCartButton = null;
      return;
    }
    this._addToCartButton = new Ai(t);
  }
  _moveAddToCartButtonOutOfQuantityElement() {
    !this._hiddenQuantityElement || !this._addToCartButton || this._hiddenQuantityElement.contains(this._addToCartButton.button) && this._hiddenQuantityElement.after(this._addToCartButton.button);
  }
  _findAddToCartButtonElement() {
    var r;
    const t = (r = this.addToCartForm()) == null ? void 0 : r.form;
    if (!t)
      return null;
    if (this._globalConfig.customSelectors.addToCartButton) {
      const a = B(
        this._globalConfig.customSelectors.addToCartButton,
        t
      );
      if (a)
        return a;
    }
    const e = [];
    for (const a of ht) {
      const s = w(a, t);
      e.push(...s);
    }
    const n = L(
      this._placeholder,
      e
    );
    return n || t.querySelector("button");
  }
  _findFormlessAddToCartButtonElement() {
    if (this._addToCartForm || this._globalConfig.featureFlags.intercept_cart_request !== !0 || !this._globalConfig.customSelectors.addToCartButton)
      return null;
    const t = this._globalConfig.customSelectors.addToCartButton;
    if (!t)
      return null;
    const e = w(t);
    return e.length === 0 ? null : L(
      this._placeholder,
      e,
      3
    );
  }
  _observeAddToCartButtonRemoval() {
    this._addToCartButton && R(this._addToCartButton.button, () => {
      var e, n;
      if ((e = this._addToCartButton) != null && e.button.isConnected) {
        this._observeAddToCartButtonRemoval();
        return;
      }
      let t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
      t ? (this._addToCartButton.replaceButton(t), this._moveAddToCartButtonOutOfQuantityElement()) : this._addToCartButton = null, g(
        "add_to_cart_button_removed_v2",
        {
          recreated: !!t,
          theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeAddToCartButtonRemoval();
    });
  }
  _warnAboutMissingAddToCartButton() {
    new URLSearchParams(window.location.search).get("source") !== "visualPreviewInitialLoad" && console.log(
      "%c[Kaching Bundles] Add to cart button not found. Please add a selector to the settings page or contact support.",
      "background: #f8d7da; color: #721c24; padding: 8px; border-left: 4px solid #f5c6cb;"
    );
  }
}
const Di = (i, t, e, n, r) => {
  if (!e.stickyAtcEnabled || t.offsetParent === null || document.querySelector(".kaching-bundles-sticky-atc-wrapper"))
    return;
  const a = document.createElement("div");
  a.classList.add("kaching-bundles-sticky-atc-wrapper"), document.body.appendChild(a);
  const s = document.createElement("div");
  s.classList.add("kaching-bundles-sticky-atc-spacer"), a.appendChild(s);
  const o = document.createElement("kaching-bundles-sticky-atc");
  o.setAttribute(
    "sticky-atc",
    JSON.stringify(e.stickyAtc)
  ), o.setAttribute("config", JSON.stringify(i)), o.setAttribute("translations", JSON.stringify(n)), o.setAttribute("product", JSON.stringify(r)), o.setAttribute("deal-block", JSON.stringify(e)), a.appendChild(o), o.addEventListener(
    "kaching-bundles-sticky-atc-clicked",
    () => {
      const f = t.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: f,
        behavior: "smooth"
      });
    }
  );
  let l = !1;
  const c = () => {
    const p = t.getBoundingClientRect().bottom < 0;
    p !== l && (l = p, p ? (o.style.display = "block", requestAnimationFrame(() => {
      l && o.classList.add("kaching-bundles-sticky-atc--visible");
    })) : o.classList.contains("kaching-bundles-sticky-atc--visible") && (o.classList.remove("kaching-bundles-sticky-atc--visible"), o.addEventListener(
      "transitionend",
      () => {
        l || (o.style.display = "");
      },
      { once: !0 }
    )));
  };
  requestAnimationFrame(c), window.addEventListener("scroll", c, { passive: !0 }), new ResizeObserver(() => {
    const p = o.offsetHeight;
    s.style.height = `${p}px`;
  }).observe(o);
}, qi = 0.1;
let Yt = !1, mt, _t, gt = 0, ge;
const Fi = (i) => {
  mt === void 0 && (mt = Math.round(i));
}, Ni = (i) => {
  _t === void 0 && (gt = performance.now(), _t = Math.round(gt), ge = i);
}, Mi = async () => {
  var i;
  if (!Yt && !((i = window.Shopify) != null && i.designMode) && typeof PerformanceObserver != "undefined" && (Yt = !0, !(!we() && !ve() && Math.random() > qi)))
    try {
      (await import("./web-vitals-collector.js")).start(() => ({
        bundleImportMs: mt,
        widgetMountedMs: _t,
        widgetInsertedAt: gt,
        widgetElement: ge
      }));
    } catch (t) {
      console.error(t);
    }
};
class Zt {
  constructor(t) {
    this._globalConfig = t, setTimeout(() => {
      const e = document.querySelector(
        'link[href*="kaching-bundles.css"]'
      );
      e && R(e, () => {
        var n;
        g(
          "css_removed",
          {
            theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
          },
          { sampleRate: 0.01 }
        );
      });
    }, 100), wi();
  }
  initialize() {
    this._setupTranslations();
    const t = w(ft);
    this._addProductIdForPlaceholders(t), t.length === 0 && this._addPlaceholders(), this._initializePlaceholders(), this._globalConfig.abTestsRunning && Ie(), this._setupPlaceholderObserver();
  }
  _setupTranslations() {
    const t = J("script#kaching-bundles-translations") || [], e = t.find(
      (n) => n.locale === this._globalConfig.locale
    );
    this._translations = e == null ? void 0 : e.translations, Be(t);
  }
  _addProductIdForPlaceholders(t) {
    const e = J("script.kaching-bundles-product[data-main]");
    if (e)
      for (const n of t)
        n.getAttribute("product-id") || n.setAttribute("product-id", e.id);
  }
  _addPlaceholders() {
    if (!B("script.kaching-bundles-deal-block-settings"))
      return;
    const t = this._findPosition();
    if (!t)
      return;
    const e = J("script.kaching-bundles-product[data-main]"), n = e && e.id || this._globalConfig.productId, r = Z("kaching-bundle");
    r.setAttribute("product-id", n), t.parentElement.insertBefore(r, t);
  }
  async _initializePlaceholders() {
    const t = [...w(ft)].filter(
      (o) => o.getAttribute("product-id")
    );
    if (h("_initializePlaceholders", t), t.length === 0) {
      window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
      return;
    }
    if (t.filter(
      (o) => !V(o).initialized
    ).length === 0)
      return;
    const n = await this._fetchPlaceholdersData(t);
    h("placeholdersData", n);
    const r = Array.from(n.values()).map(({ dealBlock: o }) => o).filter((o) => o != null), a = Array.from(n.values()).map(({ product: o }) => o).filter((o) => o != null);
    await X(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      r
    );
    const s = Y();
    for (const o of t) {
      const { product: l, dealBlock: c } = n.get(o);
      if (!l || !c) {
        V(o).initialized = "skipped";
        continue;
      }
      await this._initializePlaceholder(
        o,
        l,
        c,
        s
      );
    }
    window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
  }
  async _initializePlaceholder(t, e, n, r) {
    var m, y;
    const a = e.id;
    Mi(), this._globalConfig.webPixel ? (h("Tracking view with web pixel", window.Shopify.analytics), ne(() => {
      window.Shopify.analytics.publish("kaching_bundle_viewed", {
        product_id: a,
        deal_block_id: n.id,
        ab_test_variant_id: n.abTestVariantId,
        deal_block_version_id: n.versionId,
        session_id: r
      });
    })) : (h("Tracking view without web pixel (legacy)"), setTimeout(() => {
      Se(
        this._globalConfig.shopifyDomain,
        n.id,
        a,
        n.abTestVariantId,
        n.versionId,
        r
      );
    }, 2e3));
    const s = {
      ...this._globalConfig.defaultTranslations,
      ...(m = this._translations) == null ? void 0 : m.system
    }, o = (y = this._translations) == null ? void 0 : y.dealBlocks[n.id], l = { ...s, ...o }, c = this._globalConfig.locale === this._globalConfig.liquidLocale ? w("script.kaching-bundles-product:not([data-main])").map((k) => JSON.parse(k.textContent)).filter((k) => k.variants.length < 250) : [], d = performance.now();
    await import("./kaching-bundles-block.js"), Fi(performance.now() - d);
    const p = { ...this._globalConfig };
    p.currencyRate = gn(
      this._globalConfig.currencyRate,
      n.currency,
      this._globalConfig.marketCurrencyCode
    ), n.dealBars.some(
      (k) => k.dealBarType === ot.QuantityBreak && k.quantitySelector
    ) && (p.keepQuantityInput = !1);
    const f = new Ei(t, p, n);
    f.initialize();
    const u = Z(
      "kaching-bundles-block"
    );
    for (u.setAttribute("data-instant-styles", "none"), new Ci(
      u,
      f,
      p,
      l,
      n,
      e,
      c
    ); t.firstChild; )
      t.removeChild(t.firstChild);
    t.appendChild(u), V(t).initialized = "true", Ni(u), Oi(u), Di(
      this._globalConfig,
      u,
      n,
      l,
      e
    );
  }
  _setupPlaceholderObserver() {
    if (window.Shopify.designMode)
      return;
    new MutationObserver((e) => {
      var r;
      e.some(
        (a) => Array.from(a.addedNodes).some((s) => {
          if (!(s instanceof HTMLElement)) return !1;
          const o = (l) => l.tagName === "KACHING-BUNDLE" && !V(l).initialized;
          return o(s) || Array.from(s.querySelectorAll("kaching-bundle")).some(
            (l) => o(l)
          );
        })
      ) && (this._globalConfig.featureFlags.reinitialize_morphed_placeholders ? (v("Initializing new kaching-bundle placeholder"), this._initializePlaceholders()) : document.querySelector(
        "#replo-fullpage-element, #replo-element-styles"
      ) || g(
        "kaching_bundle_added_v9",
        {
          theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ));
    }).observe(document.body, {
      childList: !0,
      subtree: !0
    });
  }
  async _fetchPlaceholdersData(t) {
    var _, C;
    const e = t.map(
      (b) => Number(b.getAttribute("product-id"))
    ), n = new Map(
      this._globalConfig.locale === this._globalConfig.liquidLocale ? w("script.kaching-bundles-product[data-main]").map((b) => JSON.parse(b.textContent)).filter((b) => b.variants.length < 250).map((b) => [b.id, b]) : []
    ), r = e.filter(
      (b) => !n.has(b)
    ), a = w(
      "script.kaching-bundles-deal-block-settings"
    ), s = /* @__PURE__ */ new Map();
    for (const b of e) {
      const A = a.filter(
        (E) => Number(V(E).productId) === b
      );
      A.length && s.set(
        b,
        A.map(
          (E) => E.textContent ? JSON.parse(E.textContent) : null
        )
      );
    }
    const o = e.filter(
      (b) => !s.has(b)
    ), l = this._globalConfig.storefrontAccessToken ? new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ) : null, c = l && r.length > 0 ? W(l, {
      country: this._globalConfig.country,
      language: this._globalConfig.locale.split("-")[0].toUpperCase(),
      productIds: r,
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    }) : [], d = l && o.length > 0 ? Pe(l, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: this._globalConfig.featureFlags.storefront_metaobjects
    }) : [], [p, f] = await Promise.all([
      c,
      d
    ]), u = new Map(
      r.map((b) => [
        b,
        p.find((A) => A.id == b)
      ])
    ), m = new Map([...n, ...u]), y = Y(), k = /* @__PURE__ */ new Map();
    for (const b of t) {
      const A = Number(b.getAttribute("product-id")), E = m.get(A);
      if (!E)
        continue;
      const kt = ((_ = s.get(A)) == null ? void 0 : _.filter((I) => I)) || f;
      kt.sort((I, T) => {
        const wt = !!I.marketId, ye = !!T.marketId;
        return wt === ye ? 0 : wt ? -1 : 1;
      });
      let P = Ge(kt, E);
      h("applicableDealBlocks", P), P = P.filter((I) => I.marketId ? I.marketId === this._globalConfig.marketId : !0), P = P.filter(
        (I) => {
          var T;
          return !((T = I.excludedMarketIds) != null && T.includes(this._globalConfig.marketId));
        }
      ), P = P.filter((I) => {
        if (!I.abTestVariantId)
          return !0;
        const T = Ae({
          kachingSessionId: y,
          abTestVariantsCount: I.abTestVariantsCount,
          abTestTrafficAllocation: I.abTestTrafficAllocation
        });
        return I.abTestVariantNumber === T;
      }), this._globalConfig.b2bCustomer && (P = P.filter(
        (I) => !I.excludeB2bCustomers
      )), this._globalConfig.requireCustomerLogin && !this._globalConfig.isLoggedIn && (P = []);
      const U = (C = b.getAttribute("manual-deal-block-id")) == null ? void 0 : C.trim();
      if (U) {
        const I = P.findIndex(
          (T) => T.id === U || T.nanoId === U
        );
        if (v("Manual deal override", {
          deal: P[I],
          manualDealBlockId: U,
          manualDealBlockIndex: I
        }), I > 0) {
          const [T] = P.splice(
            I,
            1
          );
          P.unshift(T);
        }
      }
      if (!P.length) {
        k.set(b, {
          product: E,
          dealBlock: null
        });
        continue;
      }
      k.set(b, {
        product: E,
        dealBlock: P[0]
      });
    }
    return k;
  }
  _findPosition() {
    const t = this._findGempagesPosition();
    if (t)
      return t;
    const e = this._findThemePosition();
    if (e)
      return e;
    const n = this._findDefaultPosition();
    return n || null;
  }
  // Temporary
  _findGempagesPosition() {
    const t = w("gp-product-button");
    for (const e of t)
      if (!e.closest("gp-sticky"))
        return e;
    return null;
  }
  _findThemePosition() {
    for (const t of _e) {
      const e = B(t[0]);
      if (e) {
        if (e.closest(
          ".dbtfy-sticky-addtocart, .cart-drawer, cart-drawer, cart-items"
        ))
          continue;
        return setTimeout(() => {
          var r;
          const n = e.closest(
            '[class*="cart"], [class*="Cart"]'
          );
          n && n.tagName.toLowerCase() !== "body" && !n.classList.toString().includes("add-to-cart") && !n.classList.toString().includes("AddToCart") && !n.classList.toString().includes("icartShopifyCartContent") && g(
            "theme_position_in_cart_drawer_v8",
            {
              selector: t[0],
              classes: n.classList.toString(),
              theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
            },
            { sampleRate: 0.01 }
          );
        }), e;
      }
    }
    return null;
  }
  _findDefaultPosition() {
    for (const t of me)
      for (const e of [
        this._globalConfig.customSelectors.addToCartButton,
        ...ht,
        "button"
      ]) {
        if (!e)
          continue;
        const n = B(
          `${t} ${e}`
        );
        if (n)
          return n.parentElement;
      }
    return null;
  }
}
function Oi(i) {
  const t = () => typeof window.FastClick != "undefined" || typeof window.T4SThemeSP != "undefined" && typeof window.T4SThemeSP.FastClick != "undefined" || typeof window.BEEThemeSP != "undefined" && typeof window.BEEThemeSP.FastClick != "undefined", e = setInterval(() => {
    t() && (clearInterval(e), w("*", i).forEach(
      (n) => Te(n, "needsclick")
    ));
  }, 500);
}
const te = (i) => {
  var t;
  ((t = window.Shopify.theme) == null ? void 0 : t.theme_store_id) === 801 ? setTimeout(() => new Zt(i).initialize(), 100) : new Zt(i).initialize();
}, be = () => {
  var t;
  if (Ee()) {
    const e = w(
      "style#kaching-bundles-custom-css"
    );
    for (const n of e)
      n.remove();
    return;
  }
  const i = J(
    "script#kaching-bundles-config"
  );
  i && (v("Shopify domain:", i.shopifyDomain), De(), qe(i), window.kachingBundlesKeepQuantityInput && (i.keepQuantityInput = !0), te(i), window.Shopify.designMode && (D(window, "shopify:section:load", () => {
    te(i);
  }), i.isDeprecatedAppEmbed || _n({
    customApiHost: i.customApiHost,
    shopifyDomain: i.shopifyDomain,
    themeId: (t = window.Shopify.theme) == null ? void 0 : t.id
  })), Me(), Oe(), window.kachingBundlesApi = Fe(i), setTimeout(() => {
    Ne();
  }, 1e3));
};
window.__kachingBundlesInitializeInternal = be;
const ee = () => {
  window.kachingBundlesDisableAutoInitialize || be();
};
document.readyState === "loading" ? (h("Waiting for DOMContentLoaded"), document.addEventListener("DOMContentLoaded", ee)) : ee();
