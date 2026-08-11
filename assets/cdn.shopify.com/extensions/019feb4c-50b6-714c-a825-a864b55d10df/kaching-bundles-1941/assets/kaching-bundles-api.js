Array.prototype.flat || (Array.prototype.flat = function(t = 1) {
  return t > 0 ? (
    // @ts-expect-error - Polyfill for older browsers
    this.reduce(
      (e, s) => e.concat(Array.isArray(s) ? s.flat(t - 1) : s),
      []
    )
  ) : (
    // @ts-expect-error - Polyfill for older browsers
    this.slice()
  );
});
Array.prototype.flatMap || (Array.prototype.flatMap = function(t, e) {
  return this.map(t, e).flat();
});
const At = (t) => {
  const e = window.Shopify.currency;
  e && (t.currencyRate = Number(e.rate));
  const s = window.Shopify.country;
  s && (t.country = s);
  const n = window.Shopify.locale;
  n && (t.locale = n);
}, Y = () => {
  try {
    const t = "kaching_local_storage_test";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}, v = Y() ? window.localStorage : window.sessionStorage, G = () => new URLSearchParams(window.location.search).get("kaching");
let N;
const Ot = () => (N === void 0 && (N = G() === "off"), N);
let A;
const D = () => (A === void 0 && (A = G() === "debug"), A);
let O;
const T = () => (O === void 0 && (O = G() === "dev"), O);
let _;
const Z = () => (_ === void 0 && (_ = G() === "info"), _), _t = async (t, e, s, n, o, a) => {
  try {
    const c = "kaching_visited_deal_blocks", u = v.getItem(c), f = u ? JSON.parse(u) : [];
    if (f.includes(e))
      return;
    f.push(e), v.setItem(c, JSON.stringify(f)), await fetch("https://bundles-stats.kachingappz.app/impressions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shopDomain: t,
        dealBlockId: e,
        productId: s,
        abTestVariantId: n,
        dealBlockVersionId: o,
        sessionId: a
      }),
      keepalive: !0
    });
  } catch (c) {
    console.error(c);
  }
}, B = "https://storefront-events.kachingappz.app", tt = () => {
  if (D() || T())
    try {
      const t = localStorage.getItem("kaching_storefront_events_host");
      if (t) return t;
    } catch {
    }
  return B;
}, et = 16e3, nt = (t, e) => {
  const s = JSON.stringify(t), n = new Blob([s]).size;
  return n <= et ? s : JSON.stringify(e(n));
}, j = async (t, e, s, { sampleRate: n = 1, keepalive: o = !0, once: a = !0 }) => {
  if (Math.random() > n)
    return;
  if (a) {
    if (e.sent.has(e.key))
      return;
    e.sent.add(e.key);
  }
  return await fetch(`${tt()}${t}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: nt(s.full, s.truncated),
    keepalive: o
  });
}, st = /* @__PURE__ */ new Set(), rt = async (t, e = {}, s = {}) => {
  k("sendStorefrontEvent", { name: t, data: e });
  const n = window.location.href, o = window.Shopify.shop;
  return j(
    "/bundles/events",
    { key: t, sent: st },
    {
      full: { event: { name: t, data: e, url: n, shop: o } },
      truncated: (a) => ({
        event: { name: t, data: { truncated: !0, size: a }, url: n, shop: o }
      })
    },
    s
  );
}, ot = /* @__PURE__ */ new Set(), Tt = async (t, e = {}, s = {}) => {
  k("sendStorefrontMetric", { name: t, data: e });
  const n = window.location.href, o = window.Shopify.shop;
  return j(
    "/bundles/metrics",
    { key: t, sent: ot },
    {
      full: { event: { name: t, data: e, url: n, shop: o } },
      truncated: (a) => ({
        event: { name: t, data: { truncated: !0, size: a }, url: n, shop: o }
      })
    },
    s
  );
}, at = /* @__PURE__ */ new Set(), $ = async (t, e, s = {}) => {
  if (t === "Failed to fetch" || t && (t.includes(
    "Cannot define multiple custom elements with the same tag name"
  ) || t.includes(
    "Failed to execute 'define' on 'CustomElementRegistry'"
  ) || t.includes("CustomElementRegistry.define")))
    return;
  const n = window.location.href, o = window.Shopify.shop;
  return j(
    "/bundles/errors",
    { key: t, sent: at },
    {
      full: { error: { message: t, stack: e, url: n, shop: o } },
      truncated: (a) => ({
        error: { message: t, stack: `[truncated ${a} bytes]`, url: n, shop: o }
      })
    },
    { sampleRate: 0.1, ...s }
  );
}, jt = (t) => t instanceof Error ? t.message : String(t), Vt = () => {
  const t = ["kaching-bundles.js", "kaching-bundles-block.js"];
  window.addEventListener("error", async function(e) {
    const s = async (n) => {
      const { filename: o, message: a, error: c } = n;
      for (const u of t)
        if (o.includes(u)) {
          if (D() || R()) {
            k("Error", n);
            return;
          }
          await $(a, c.stack);
        }
    };
    try {
      await s(e);
    } catch (n) {
      console.error(n);
    }
  }), window.addEventListener("unhandledrejection", async function(e) {
    const s = async (n) => {
      if (typeof n.reason != "object")
        return;
      const { message: o, stack: a } = n.reason;
      if (a) {
        for (const c of t)
          if (a.includes(c)) {
            if (D() || R()) {
              k("Unhandled rejection", n);
              return;
            }
            await $(o, a);
          }
      }
    };
    try {
      await s(e);
    } catch (n) {
      console.error(n);
    }
  });
};
function k(t, e = null) {
  !D() && !T() || console.debug("[Kaching Bundles]", t, e);
}
function qt(t, e = null) {
  !Z() && !D() && !T() || console.info("[Kaching Bundles]", t, e);
}
const Pt = () => {
  const t = (n) => {
    window.dispatchEvent(new Event(n));
  }, e = history.pushState;
  history.pushState = function(...o) {
    const a = e.apply(this, o);
    return t("pushstate"), t("locationchange"), a;
  };
  const s = history.replaceState;
  history.replaceState = function(...o) {
    const a = s.apply(this, o);
    return t("replacestate"), t("locationchange"), a;
  }, ct(window, "popstate", () => {
    t("locationchange");
  });
}, Mt = (t, e, s, n = 0) => {
  let o = Object.getPrototypeOf(t), a;
  for (; o && (a = Object.getOwnPropertyDescriptor(o, e), !a); )
    o = Object.getPrototypeOf(o);
  if (a) {
    if (!a.configurable)
      return;
    Object.defineProperty(t, e, {
      configurable: !0,
      get: function(...c) {
        return a.get.apply(this, c);
      },
      set: function(...c) {
        const u = this[e];
        a.set.apply(this, c);
        const f = this[e];
        return typeof s == "function" && setTimeout(s.bind(this, u, f), n), f;
      }
    });
  }
}, it = (t, e = document) => {
  try {
    return e.querySelector(t);
  } catch {
    return null;
  }
}, xt = (t, e = document) => {
  try {
    return [...e.querySelectorAll(t)];
  } catch {
    return [];
  }
}, ct = (t, e, s) => t.addEventListener(e, s), Ft = (t) => document.createElement(t), Ut = (t, e) => t && t.classList.add(e), Ct = (t, e, s) => t.setAttribute(e, s), zt = (t) => Number(t.split("/").pop()), Kt = (t) => t.dataset, Lt = (t) => {
  const e = it(t);
  if (!e)
    return;
  const s = JSON.parse(e.textContent);
  return k("jsonFromElement", s), s;
}, ut = (t, e) => {
  let s = 0, n = t;
  for (; n && n !== e && n !== document.body; )
    s++, n = n.parentNode;
  return n !== e ? 1 / 0 : s;
}, lt = (t, e) => {
  if (t === e)
    return t;
  const s = /* @__PURE__ */ new Set();
  let n = t;
  for (; n; )
    s.add(n), n = n.parentElement;
  for (n = e; n; ) {
    if (s.has(n))
      return n;
    n = n.parentElement;
  }
  return document.documentElement;
}, $t = (t, e, s = 1 / 0) => {
  let n = null, o = 1 / 0;
  for (const a of e) {
    const c = lt(t, a);
    if (c === document.body || c === document.documentElement)
      continue;
    const u = ut(t, c);
    u > s || u < o && (n = a, o = u);
  }
  return n;
}, R = () => {
  const t = document.currentScript;
  return t ? t.src.includes("kaching-bundles-dev") : !1;
}, J = (t, e = {}) => {
  const s = window.Shopify.routes, o = (s && s.root || "/") + t, a = new URLSearchParams();
  for (const [u, f] of Object.entries(e))
    a.append(u, f);
  const c = a.toString();
  return c ? `${o}?${c}` : o;
}, Rt = (t, e) => {
  new MutationObserver((n, o) => {
    for (const a of n)
      a.type === "childList" && a.removedNodes.forEach((c) => {
        c.contains(t) && (o.disconnect(), e());
      });
  }).observe(document.body, { childList: !0, subtree: !0 });
}, Jt = (t, e = 300, s = 100) => {
  let n = 0;
  const o = () => {
    window.Shopify.analytics ? t() : n < e ? (n++, setTimeout(o, s)) : rt(
      "shopify_analytics_missing",
      {
        userAgent: navigator.userAgent
      },
      { sampleRate: 0.1 }
    );
  };
  o();
}, dt = async (t, {
  useExternalMetafieldNamespace: e,
  useMetaobjects: s
}) => s ? pt(
  t
) : ft(t), ft = async (t, e) => {
  var n;
  const s = (n = (await t.query(
    `
      query FetchDealBlocks($metafieldNamespace: String!) {
        shop {
          metafield(namespace: $metafieldNamespace, key: "deal_blocks") {
            value
          }
        }
      }
    `,
    {
      variables: {
        metafieldNamespace: "$app:kaching_bundles"
      }
    }
  )).shop.metafield) == null ? void 0 : n.value;
  return s ? JSON.parse(s) : [];
}, pt = async (t, e) => {
  const s = "$app:deal_block", n = [];
  let o = null;
  for (; ; ) {
    const a = await t.query(
      `
        query FetchDealBlockMetaobjects($type: String!, $cursor: String) {
          metaobjects(type: $type, first: 250, after: $cursor) {
            nodes {
              fields {
                key
                value
              }
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
          type: s,
          cursor: o
        }
      }
    );
    for (const c of a.metaobjects.nodes) {
      const u = c.fields.find(
        (f) => f.key === "settings"
      );
      u != null && u.value && n.push(JSON.parse(u.value));
    }
    if (!a.metaobjects.pageInfo.hasNextPage)
      break;
    o = a.metaobjects.pageInfo.endCursor;
  }
  return n;
};
class ht {
  constructor(e, s) {
    this.storefrontApiVersion = "2026-01", this.storefrontAccessToken = s, this.shopifyDomain = e;
  }
  async query(e, s) {
    var u, f;
    const n = (u = s == null ? void 0 : s.variables) != null ? u : {};
    let o = `https://${this.shopifyDomain}/api/${this.storefrontApiVersion}/graphql.json`;
    const a = (f = e.match(/query\s+(\w+)/)) == null ? void 0 : f[1];
    a && (o += `?operation_name=${a}`);
    const c = await (await fetch(o, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": this.storefrontAccessToken
      },
      body: JSON.stringify({
        query: e,
        variables: n
      })
    })).text();
    if (!c)
      throw new Error("Empty graphql response");
    return JSON.parse(c).data;
  }
}
var h = /* @__PURE__ */ ((t) => (t.QuantityBreak = "quantity-break", t.Bxgy = "bxgy", t.Bundle = "bundle", t.MixAndMatch = "mix-and-match", t.Sku = "sku", t))(h || {});
class Q extends Error {
  constructor(e) {
    super(e), this.name = "CartFetchError";
  }
}
const V = "kaching_session_id", Qt = async () => {
  try {
    yt();
    const t = H();
    await St() !== t && await wt(t);
  } catch (t) {
    if (t instanceof Q)
      console.error(t);
    else
      throw t;
  }
}, yt = () => {
  const t = new URL(window.location.href), e = new URLSearchParams(t.search), s = e.get("preview_kaching_session_id");
  s && (v.setItem(V, s), e.delete("preview_kaching_session_id"), t.search = e.toString(), window.history.replaceState({}, "", t.toString()));
}, H = () => v.getItem(V) || mt(), mt = () => {
  const t = gt();
  return v.setItem(V, t), t;
}, gt = () => typeof crypto != "undefined" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : It(), It = () => "10000000-1000-4000-8000-100000000000".replace(
  /[018]/g,
  (t) => (+t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +t / 4).toString(16)
), St = async () => {
  const t = await fetch(J("cart.js"));
  if (!t.ok)
    throw new Q("Failed to fetch cart");
  return (await t.json()).attributes._kaching_session_id;
}, wt = async (t) => await fetch(J("cart/update.js"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    attributes: {
      _kaching_session_id: t
    }
  })
}), bt = ({
  kachingSessionId: t,
  abTestVariantsCount: e,
  abTestTrafficAllocation: s
}) => {
  const n = parseInt(t.replace(/-/g, "").slice(0, 4), 16) % 256, o = Math.floor(n * 100 / 256);
  if (!s)
    return vt(o, e);
  const a = 100 - s;
  if (o < a)
    return 1;
  const c = e - 1;
  if (c === 0)
    return 1;
  const u = s / c, f = Math.floor(
    (o - a) / u
  );
  return Math.min(f + 2, e);
}, vt = (t, e) => {
  const s = 100 / e, n = Math.floor(t / s);
  return Math.min(n + 1, e);
};
let y, w = null, W, X = [];
const Ht = (t) => {
  X = t;
}, Dt = async () => {
  if (w)
    return w;
  w = (async () => {
    if (!y.storefrontAccessToken)
      return;
    const t = new ht(
      y.shopifyDomain,
      y.storefrontAccessToken
    );
    W = await dt(t, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: y.featureFlags.storefront_metaobjects
    });
  })();
  try {
    await w;
  } catch (t) {
    throw w = null, t;
  }
}, kt = async () => {
  var s;
  await Dt();
  const t = W.filter((n) => {
    if (!n.abTestVariantId)
      return !0;
    const o = H(), a = bt({
      kachingSessionId: o,
      abTestVariantsCount: n.abTestVariantsCount,
      abTestTrafficAllocation: n.abTestTrafficAllocation
    });
    return n.abTestVariantNumber === a;
  }), e = (s = X.find(
    (n) => n.locale === y.locale
  )) == null ? void 0 : s.translations;
  return t.map((n) => {
    const o = (e == null ? void 0 : e.dealBlocks[n.id]) || {};
    return Et(n, o);
  });
}, Et = (t, e) => {
  var q, P, M, x, F, U, C, z;
  const s = /* @__PURE__ */ new Map();
  for (const r of (q = t.defaultVariantsV2) != null ? q : []) {
    const i = [
      ...new Set(
        r.variantGIDs.filter((I) => I !== null).map(p)
      )
    ];
    if (i.length === 0)
      continue;
    const l = (P = s.get(r.dealBarId)) != null ? P : [];
    l.push({
      productId: p(r.productGID),
      variantIds: i
    }), s.set(r.dealBarId, l);
  }
  const n = (r) => {
    switch (r.dealBarType) {
      case void 0:
      case h.QuantityBreak:
        return o(r);
      case h.Bxgy:
        return a(r);
      case h.Bundle:
        return c(r);
      case h.Sku:
        return u(r);
      default:
        return null;
    }
  }, o = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.QuantityBreak,
      quantity: Number(r.quantity),
      discount: b(r.discountType, r.discountValue)
    };
  }, a = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.Bxgy,
      buyQuantity: Number(r.buyQuantity),
      buyDiscount: b(
        r.buyDiscountType,
        r.buyDiscountValue
      ),
      getQuantity: Number(r.getQuantity),
      getDiscount: b(
        r.getDiscountType,
        r.getDiscountValue
      )
    };
  }, c = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.Bundle,
      bundleProducts: f(r.bundleProducts)
    };
  }, u = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.Sku
    };
  }, f = (r) => r.map((i) => {
    var l;
    return {
      id: i.id,
      productId: i.productGID === "default" ? "default" : p(i.productGID),
      variantId: i.variantGIDs && ((l = i.variantGIDs) != null && l[0]) ? p(i.variantGIDs[0]) : null,
      variantIds: i.variantGIDs ? i.variantGIDs.map(p) : null,
      quantity: Number(i.quantity),
      discount: b(
        i.discountType,
        i.discountValue
      )
    };
  }), m = (r) => r ? r.filter((l) => l.productGID).map((l) => {
    var I, d, S;
    return {
      id: l.id,
      productId: p(l.productGID),
      variantId: l.variantGIDs && ((I = l.variantGIDs) != null && I[0]) ? p(l.variantGIDs[0]) : null,
      variantIds: l.variantGIDs ? l.variantGIDs.map(p) : null,
      mediaImageGID: (d = l.mediaImageGID) != null ? d : null,
      quantity: Number(l.quantity),
      applyOnlyForSubscriptions: (S = l.applyOnlyForSubscriptions) != null ? S : !1
    };
  }) : [], g = (r, i) => {
    if (!i)
      return [];
    const l = t.dealBars.findIndex((d) => d.id === r) + 1;
    return i.gifts.filter(
      (d) => d.giftType === "product" && d.productGID && Gt(d, l)
    ).map((d) => {
      var S, K, L;
      return {
        id: d.id,
        productId: p(d.productGID),
        variantId: d.variantGIDs && ((S = d.variantGIDs) != null && S[0]) ? p(d.variantGIDs[0]) : null,
        variantIds: d.variantGIDs ? d.variantGIDs.map(p) : null,
        mediaImageGID: (K = d.mediaImageGID) != null ? K : null,
        quantity: Number(d.quantity),
        applyOnlyForSubscriptions: (L = d.applyOnlyForSubscriptions) != null ? L : !1
      };
    });
  }, E = (r) => r ? r.map((i) => {
    var l;
    return {
      id: i.id,
      productId: i.productGID ? p(i.productGID) : null,
      variantId: i.variantGIDs && i.variantGIDs[0] ? p(i.variantGIDs[0]) : null,
      variantIds: i.variantGIDs ? i.variantGIDs.map(p) : null,
      mediaImageGID: (l = i.mediaImageGID) != null ? l : null,
      quantity: Number(i.quantity),
      discount: b(i.discountType, i.discountValue)
    };
  }) : [];
  return {
    id: t.id,
    nanoId: t.nanoId,
    discountName: (M = t.discountName) != null ? M : null,
    collectionBreaksEnabled: (x = t.collectionBreaksEnabled) != null ? x : !1,
    collectionBreaksDealProducts: !!t.collectionBreaksEnabled && ((F = t.collectionBreaks) == null ? void 0 : F.visibility) === "deal-products",
    differentVariantsEnabled: t.differentVariantsEnabled,
    marketId: (U = t.marketId) != null ? U : null,
    excludedMarketIds: (C = t.excludedMarketIds) != null ? C : null,
    currency: (z = t.currency) != null ? z : null,
    dealBars: t.dealBars.filter((r) => "showAsSoldOutEnabled" in r ? !r.showAsSoldOutEnabled : !0).map(n).filter((r) => r !== null)
  };
}, Gt = (t, e) => t.unlockAtBarOnly ? e === t.unlockAtBar : e >= t.unlockAtBar, b = (t, e) => !t || t === "default" ? null : {
  type: t,
  value: Number(e)
}, p = (t) => typeof t == "number" ? t : Number(t.split("/").pop()), Wt = (t) => (y = t, {
  fetchDeals: kt
});
export {
  dt as A,
  bt as B,
  Ht as C,
  Ut as D,
  Ot as E,
  Vt as F,
  At as G,
  Wt as H,
  Dt as I,
  Tt as J,
  J as a,
  zt as b,
  ct as c,
  k as d,
  jt as e,
  Ct as f,
  H as g,
  ht as h,
  qt as i,
  Pt as j,
  xt as k,
  $ as l,
  Ft as m,
  h as n,
  Mt as o,
  $t as p,
  it as q,
  Rt as r,
  rt as s,
  D as t,
  T as u,
  Qt as v,
  Jt as w,
  Lt as x,
  Kt as y,
  _t as z
};
