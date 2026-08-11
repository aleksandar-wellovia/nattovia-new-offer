var Ne = Object.defineProperty;
var Be = (t, e, n) => e in t ? Ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var E = (t, e, n) => Be(t, typeof e != "symbol" ? e + "" : e, n);
import { d as Ue, J as je, t as We, u as qe } from "./kaching-bundles-api.js";
class fe {
  constructor() {
    E(this, "t");
    E(this, "o", 0);
    E(this, "i", []);
  }
  u(e) {
    var i;
    if (e.hadRecentInput) return;
    const n = this.i[0], r = this.i.at(-1);
    this.o && n && r && e.startTime - r.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (this.o += e.value, this.i.push(e)) : (this.o = e.value, this.i = [e]), (i = this.t) == null || i.call(this, e);
  }
}
const W = () => {
  const t = performance.getEntriesByType("navigation")[0];
  if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t;
}, we = (t) => {
  if (document.readyState === "loading") return "loading";
  const e = W();
  if (e) {
    if (t < e.domInteractive) return "loading";
    if (e.domContentLoadedEventStart === 0 || t < e.domContentLoadedEventStart) return "dom-interactive";
    if (e.domComplete === 0 || t < e.domComplete) return "dom-content-loaded";
  }
  return "complete";
}, He = (t) => {
  const e = t.nodeName;
  return t.nodeType === 1 ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "");
}, te = (t) => {
  let e = "";
  try {
    for (; (t == null ? void 0 : t.nodeType) !== 9; ) {
      const n = t, r = n.id ? "#" + n.id : [He(n), ...Array.from(n.classList).sort()].join(".");
      if (e.length + r.length > 99) return e || r;
      if (e = e ? r + ">" + e : r, n.id) break;
      t = n.parentNode;
    }
  } catch {
  }
  return e;
}, me = /* @__PURE__ */ new WeakMap();
function k(t, e) {
  let n = me.get(e);
  return n || (n = /* @__PURE__ */ new WeakMap(), me.set(e, n)), n.get(t) || n.set(t, new e()), n.get(t);
}
let Ce = -1;
const Je = () => Ce, F = (t) => {
  addEventListener("pageshow", (e) => {
    e.persisted && (Ce = e.timeStamp, t(e));
  }, !0);
}, L = (t, e, n, r) => {
  let i, o;
  return (l) => {
    e.value >= 0 && (l || r) && (o = e.value - (i != null ? i : 0), (o || i === void 0) && (i = e.value, e.delta = o, e.rating = ((s, c) => s > c[1] ? "poor" : s > c[0] ? "needs-improvement" : "good")(e.value, n), t(e)));
  };
}, ne = (t) => {
  requestAnimationFrame(() => requestAnimationFrame(t));
}, q = () => {
  var t, e;
  return (e = (t = W()) == null ? void 0 : t.activationStart) != null ? e : 0;
}, D = (t, e = -1) => {
  const n = W();
  let r = "navigate";
  return Je() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || q() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), { name: t, value: e, rating: "good", delta: 0, entries: [], id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`, navigationType: r };
}, A = (t, e, n = {}) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      const r = new PerformanceObserver((i) => {
        queueMicrotask(() => {
          e(i.getEntries());
        });
      });
      return r.observe({ type: t, buffered: !0, ...n }), r;
    }
  } catch {
  }
}, re = (t) => {
  let e = !1;
  return () => {
    e || (t(), e = !0);
  };
};
let C = -1;
const ke = /* @__PURE__ */ new Set(), pe = () => document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0, Y = (t) => {
  if (document.visibilityState === "hidden") {
    if (t.type === "visibilitychange") for (const e of ke) e();
    isFinite(C) || (C = t.type === "visibilitychange" ? t.timeStamp : 0, removeEventListener("prerenderingchange", Y, !0));
  }
}, H = () => {
  var t;
  if (C < 0) {
    const e = q(), n = document.prerendering || (t = globalThis.performance.getEntriesByType("visibility-state").find((r) => r.name === "hidden" && r.startTime >= e)) == null ? void 0 : t.startTime;
    C = n != null ? n : pe(), addEventListener("visibilitychange", Y, !0), addEventListener("prerenderingchange", Y, !0), F(() => {
      setTimeout(() => {
        C = pe();
      });
    });
  }
  return { get firstHiddenTime() {
    return C;
  }, onHidden(e) {
    ke.add(e);
  } };
}, ie = (t) => {
  document.prerendering ? addEventListener("prerenderingchange", t, !0) : t();
}, ge = [1800, 3e3], $e = (t, e = {}) => {
  ie(() => {
    const n = H();
    let r, i = D("FCP");
    const o = A("paint", (l) => {
      for (const s of l) s.name === "first-contentful-paint" && (o.disconnect(), s.startTime < n.firstHiddenTime && (i.value = Math.max(s.startTime - q(), 0), i.entries.push(s), r(!0)));
    });
    o && (r = L(t, i, ge, e.reportAllChanges), F((l) => {
      i = D("FCP"), r = L(t, i, ge, e.reportAllChanges), ne(() => {
        i.value = performance.now() - l.timeStamp, r(!0);
      });
    }));
  });
}, he = [0.1, 0.25], ve = (t) => t.find((e) => {
  var n;
  return ((n = e.node) == null ? void 0 : n.nodeType) === 1;
}) || t[0], Ve = (t, e = {}) => {
  const n = k(e = Object.assign({}, e), fe), r = /* @__PURE__ */ new WeakMap();
  n.t = (i) => {
    var o, l, s;
    if ((o = i == null ? void 0 : i.sources) != null && o.length) {
      const c = ve(i.sources), f = c == null ? void 0 : c.node;
      if (f) {
        const h = (s = (l = e.generateTarget) == null ? void 0 : l.call(e, f)) != null ? s : te(f);
        r.set(c, h);
      }
    }
  }, ((i, o = {}) => {
    const l = H();
    $e(re(() => {
      let s, c = D("CLS", 0);
      const f = k(o, fe), h = (T) => {
        for (const a of T) f.u(a);
        f.o > c.value && (c.value = f.o, c.entries = f.i, s());
      }, v = A("layout-shift", h);
      v && (s = L(i, c, he, o.reportAllChanges), l.onHidden(() => {
        h(v.takeRecords()), s(!0);
      }), F(() => {
        f.o = 0, c = D("CLS", 0), s = L(i, c, he, o.reportAllChanges), ne(s);
      }), setTimeout(s));
    }));
  })((i) => {
    t(((o) => {
      var s;
      let l = {};
      if (o.entries.length) {
        const c = o.entries.reduce((f, h) => f.value > h.value ? f : h);
        if ((s = c == null ? void 0 : c.sources) != null && s.length) {
          const f = ve(c.sources);
          f && (l = { largestShiftTarget: r.get(f), largestShiftTime: c.startTime, largestShiftValue: c.value, largestShiftSource: f, largestShiftEntry: c, loadState: we(c.startTime) });
        }
      }
      return Object.assign(o, { attribution: l });
    })(i));
  }, e);
};
let Ae = 0, X = 1 / 0, j = 0;
const ze = (t) => {
  for (const e of t) e.interactionId && (X = Math.min(X, e.interactionId), j = Math.max(j, e.interactionId), Ae = j ? (j - X) / 7 + 1 : 0);
};
let Z;
const Te = () => {
  var t;
  return Z ? Ae : (t = performance.interactionCount) != null ? t : 0;
}, Ge = () => {
  "interactionCount" in performance || Z || (Z = A("event", ze, { durationThreshold: 0 }));
};
let ye = 0;
class be {
  constructor() {
    E(this, "l", []);
    E(this, "h", /* @__PURE__ */ new Map());
    E(this, "m");
    E(this, "p");
  }
  v() {
    ye = Te(), this.l.length = 0, this.h.clear();
  }
  M() {
    const e = Math.min(this.l.length - 1, Math.floor((Te() - ye) / 50));
    return this.l[e];
  }
  u(e) {
    var i, o;
    if ((i = this.m) == null || i.call(this, e), !e.interactionId && e.entryType !== "first-input") return;
    const n = this.l.at(-1);
    let r = this.h.get(e.interactionId);
    if (r || this.l.length < 10 || e.duration > n.T) {
      if (r ? e.duration > r.T ? (r.entries = [e], r.T = e.duration) : e.duration === r.T && e.startTime === r.entries[0].startTime && r.entries.push(e) : (r = { id: e.interactionId, entries: [e], T: e.duration }, this.h.set(r.id, r), this.l.push(r)), this.l.sort((l, s) => s.T - l.T), this.l.length > 10) {
        const l = this.l.splice(10);
        for (const s of l) this.h.delete(s.id);
      }
      (o = this.p) == null || o.call(this, r);
    }
  }
}
const ee = (t) => {
  const e = globalThis.requestIdleCallback || setTimeout, n = globalThis.cancelIdleCallback || clearTimeout;
  if (document.visibilityState === "hidden") t();
  else {
    const r = re(t);
    let i = -1;
    const o = () => {
      n(i), r();
    };
    addEventListener("visibilitychange", o, { once: !0, capture: !0 }), i = e(() => {
      removeEventListener("visibilitychange", o, { capture: !0 }), r();
    });
  }
}, Se = [200, 500], Ke = (t, e = {}) => {
  const n = k(e = Object.assign({}, e), be);
  let r = [], i = [], o = 0;
  const l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
  let c = !1;
  const f = () => {
    c || (ee(h), c = !0);
  }, h = () => {
    const a = new Set(n.l.map((d) => l.get(d.entries[0]))), u = i.length - 10;
    i = i.filter((d, p) => p >= u || a.has(d));
    const m = /* @__PURE__ */ new Set();
    for (const d of i) {
      const p = v(d.startTime, d.processingEnd);
      for (const y of p) m.add(y);
    }
    r = r.filter((d) => d.startTime > o || m.has(d)), c = !1;
  };
  n.m = (a) => {
    const u = a.startTime + a.duration;
    let m;
    o = Math.max(o, a.processingEnd);
    for (let d = i.length - 1; d >= 0; d--) {
      const p = i[d];
      if (Math.abs(u - p.renderTime) <= 8) {
        m = p, m.startTime = Math.min(a.startTime, m.startTime), m.processingStart = Math.min(a.processingStart, m.processingStart), m.processingEnd = Math.max(a.processingEnd, m.processingEnd), e.includeProcessedEventEntries !== !1 && m.entries.push(a);
        break;
      }
    }
    m || (m = { startTime: a.startTime, processingStart: a.processingStart, processingEnd: a.processingEnd, renderTime: u, entries: e.includeProcessedEventEntries !== !1 ? [a] : [] }, i.push(m)), (a.interactionId || a.entryType === "first-input") && l.set(a, m), f();
  }, n.p = (a) => {
    var u, m, d, p;
    if (!s.get(a)) {
      const y = (u = a.entries.find((b) => b.target)) == null ? void 0 : u.target;
      if (y) {
        const b = (d = (m = e.generateTarget) == null ? void 0 : m.call(e, y)) != null ? d : te(y);
        s.set(a, b);
      } else {
        const b = (p = a.entries.find((w) => w.targetSelector)) == null ? void 0 : p.targetSelector;
        b && s.set(a, b);
      }
    }
  };
  const v = (a, u) => {
    const m = [];
    for (const d of r) if (!(d.startTime + d.duration < a)) {
      if (d.startTime > u) break;
      m.push(d);
    }
    return m;
  }, T = (a) => {
    const u = a.entries[0], m = l.get(u), d = u.processingStart, p = Math.max(u.startTime + u.duration, d), y = Math.min(m.processingEnd, p), b = m.entries.sort((g, S) => g.processingStart - S.processingStart), w = v(u.startTime, y), _ = n.h.get(u.interactionId), N = { interactionTarget: s.get(_), interactionType: u.name.startsWith("key") ? "keyboard" : "pointer", interactionTime: u.startTime, nextPaintTime: p, processedEventEntries: b, longAnimationFrameEntries: w, inputDelay: d - u.startTime, processingDuration: y - d, presentationDelay: p - y, loadState: we(u.startTime), longestScript: void 0, totalScriptDuration: void 0, totalStyleAndLayoutDuration: void 0, totalPaintDuration: void 0, totalUnattributedDuration: void 0 };
    return ((g) => {
      var le;
      if (!((le = g.longAnimationFrameEntries) != null && le.length)) return;
      const S = g.interactionTime, J = g.inputDelay, ae = g.processingDuration;
      let $, V, z = 0, R = 0, G = 0, K = 0;
      for (const B of g.longAnimationFrameEntries) {
        R = R + B.startTime + B.duration - B.styleAndLayoutStart;
        for (const M of B.scripts) {
          const ue = M.startTime + M.duration;
          if (ue < S) continue;
          const U = ue - Math.max(S, M.startTime), de = M.duration ? U / M.duration * M.forcedStyleAndLayoutDuration : 0;
          z += U - de, R += de, U > K && (V = M.startTime < S + J ? "input-delay" : M.startTime >= S + J + ae ? "presentation-delay" : "processing-duration", $ = M, K = U);
        }
      }
      const Q = g.longAnimationFrameEntries.at(-1), ce = Q ? Q.startTime + Q.duration : 0;
      ce >= S + J + ae && (G = g.nextPaintTime - ce), $ && V && (g.longestScript = { entry: $, subpart: V, intersectingDuration: K }), g.totalScriptDuration = z, g.totalStyleAndLayoutDuration = R, g.totalPaintDuration = G, g.totalUnattributedDuration = g.nextPaintTime - S - z - R - G;
    })(N), Object.assign(a, { attribution: N });
  };
  A("long-animation-frame", (a) => {
    r = r.concat(a), f();
  }), ((a, u = {}) => {
    if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
    const m = H();
    ie(() => {
      var _;
      Ge();
      let d, p = D("INP");
      const y = k(u, be), b = (N) => {
        ee(() => {
          for (const S of N) y.u(S);
          const g = y.M();
          g && g.T !== p.value && (p.value = g.T, p.entries = g.entries, d());
        });
      }, w = A("event", b, { durationThreshold: (_ = u.durationThreshold) != null ? _ : 40 });
      d = L(a, p, Se, u.reportAllChanges), w && (w.observe({ type: "first-input", buffered: !0 }), m.onHidden(() => {
        b(w.takeRecords()), d(!0);
      }), F(() => {
        y.v(), p = D("INP"), d = L(a, p, Se, u.reportAllChanges);
      }));
    });
  })((a) => {
    t(T(a));
  }, e);
};
class Me {
  constructor() {
    E(this, "m");
  }
  u(e) {
    var n;
    (n = this.m) == null || n.call(this, e);
  }
}
const Ee = [2500, 4e3], Qe = (t, e = {}) => {
  const n = k(e = Object.assign({}, e), Me), r = /* @__PURE__ */ new WeakMap();
  n.m = (i) => {
    var l, s;
    const o = i.element;
    if (o) {
      const c = (s = (l = e.generateTarget) == null ? void 0 : l.call(e, o)) != null ? s : te(o);
      r.set(i, c);
    } else i.id && r.set(i, `#${i.id}`);
  }, ((i, o = {}) => {
    ie(() => {
      const l = H();
      let s, c = D("LCP");
      const f = k(o, Me), h = (T) => {
        o.reportAllChanges || (T = T.slice(-1));
        for (const a of T) f.u(a), a.startTime < l.firstHiddenTime && (c.value = Math.max(a.startTime - q(), 0), c.entries = [a], s());
      }, v = A("largest-contentful-paint", h);
      if (v) {
        s = L(i, c, Ee, o.reportAllChanges);
        const T = re(() => {
          h(v.takeRecords()), v.disconnect(), s(!0);
        }), a = (u) => {
          u.isTrusted && (ee(T), removeEventListener(u.type, a, { capture: !0 }));
        };
        for (const u of ["keydown", "click", "visibilitychange"]) addEventListener(u, a, { capture: !0 });
        F((u) => {
          c = D("LCP"), s = L(i, c, Ee, o.reportAllChanges), ne(() => {
            c.value = performance.now() - u.timeStamp, s(!0);
          });
        });
      }
    });
  })((i) => {
    t(((o) => {
      let l = { timeToFirstByte: 0, resourceLoadDelay: 0, resourceLoadDuration: 0, elementRenderDelay: o.value };
      if (o.entries.length) {
        const s = o.entries.at(-1), c = s.url && performance.getEntriesByType("resource").find((h) => h.name === s.url);
        l.target = r.get(s), l.lcpEntry = s, s.url && (l.url = s.url), c && (l.lcpResourceEntry = c);
        const f = W();
        if (f) {
          const h = f.activationStart || 0, v = Math.max(0, f.responseStart - h), T = Math.max(v, c ? (c.requestStart || c.startTime) - h : 0), a = Math.min(o.value, Math.max(T, c ? c.responseEnd - h : 0));
          l = { ...l, timeToFirstByte: v, resourceLoadDelay: T - v, resourceLoadDuration: a - T, elementRenderDelay: o.value - a, navigationEntry: f };
        }
      }
      return Object.assign(o, { attribution: l });
    })(i));
  }, e);
}, Xe = "widget_web_vitals_v1", Ie = "kaching-bundle, kaching-bundles-block, .kaching-bundles, .kaching-bundles-sticky-atc-wrapper", oe = "kaching-bundles", Ye = "kaching-bundle";
let se = () => ({
  bundleImportMs: void 0,
  widgetMountedMs: void 0,
  widgetInsertedAt: 0,
  widgetElement: void 0
}), Le = !1, I, O, P, Oe = 0, Pe = 0, Re = 0, xe = 0, Fe = 0;
const ft = (t) => {
  se = t, Qe((e) => I = e, { reportAllChanges: !0 }), Ve((e) => O = e, { reportAllChanges: !0 }), Ke((e) => P = e, { reportAllChanges: !0 }), Ze(), et(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && De();
  }), window.addEventListener("pagehide", De);
}, Ze = () => {
  try {
    new PerformanceObserver((e) => {
      for (const n of e.getEntries())
        n.hadRecentInput || (tt(n) ? Oe += n.value : nt(n) && (Pe += n.value));
    }).observe({ type: "layout-shift", buffered: !0 });
  } catch {
  }
}, et = () => {
  try {
    new PerformanceObserver((e) => {
      for (const n of e.getEntries()) {
        Fe += n.blockingDuration;
        for (const r of n.scripts)
          xe += r.duration, r.sourceURL.includes(oe) && (Re += r.duration);
      }
    }).observe({ type: "long-animation-frame", buffered: !0 });
  } catch {
  }
}, tt = (t) => {
  var e;
  for (const n of (e = t.sources) != null ? e : []) {
    const r = n.node;
    if (r instanceof Element && r.closest(Ie))
      return !0;
  }
  return !1;
}, nt = (t) => {
  var r;
  const { widgetElement: e, widgetInsertedAt: n } = se();
  if (!e || t.startTime < n) return !1;
  for (const i of (r = t.sources) != null ? r : []) {
    const o = i.node;
    if (o instanceof Node && e.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING)
      return !0;
  }
  return !1;
}, De = () => {
  var t, e, n, r;
  if (!Le) {
    Le = !0;
    try {
      const { bundleImportMs: i, widgetMountedMs: o } = se(), l = navigator.connection, s = {
        lcp: I ? Math.round(I.value) : void 0,
        cls: O ? x(O.value) : void 0,
        inp: P ? Math.round(P.value) : void 0,
        clsSelf: x(Oe),
        clsFromInsertion: x(Pe),
        bundleImportMs: i,
        widgetMountedMs: o,
        theme: (e = (t = window.Shopify) == null ? void 0 : t.theme) == null ? void 0 : e.schema_name,
        themeStoreId: (r = (n = window.Shopify) == null ? void 0 : n.theme) == null ? void 0 : r.theme_store_id,
        effectiveType: l == null ? void 0 : l.effectiveType,
        attribution: rt() ? it() : void 0
      };
      Ue("web vitals", s), je(Xe, s);
    } catch (i) {
      console.error(i);
    }
  }
}, rt = () => We() || qe() ? !0 : [I, O, P].some(
  (t) => t && t.rating !== "good"
), it = () => ({
  lcp: I && ot(I),
  cls: O && st(O),
  inp: P && at(P),
  loaf: {
    ourScriptMs: Math.round(Re),
    totalScriptMs: Math.round(xe),
    blockingMs: Math.round(Fe)
  },
  resources: ct()
}), ot = (t) => {
  var n;
  const e = t.attribution;
  return {
    value: Math.round(t.value),
    element: e.target,
    url: e.url,
    isOurs: _e((n = e.lcpEntry) == null ? void 0 : n.element),
    ttfb: Math.round(e.timeToFirstByte),
    resourceLoadDelay: Math.round(e.resourceLoadDelay),
    resourceLoadDuration: Math.round(e.resourceLoadDuration),
    elementRenderDelay: Math.round(e.elementRenderDelay)
  };
}, st = (t) => {
  var n, r, i;
  const e = t.attribution;
  return {
    value: x(t.value),
    largestShiftTarget: e.largestShiftTarget,
    largestShiftValue: x((n = e.largestShiftValue) != null ? n : 0),
    largestShiftTime: Math.round((r = e.largestShiftTime) != null ? r : 0),
    isOurs: _e(lt((i = e.largestShiftSource) == null ? void 0 : i.node))
  };
}, at = (t) => {
  var r, i, o, l, s;
  const e = t.attribution, n = (i = (r = e.longestScript) == null ? void 0 : r.entry.sourceURL) != null ? i : "";
  return {
    value: Math.round(t.value),
    target: e.interactionTarget,
    type: e.interactionType,
    isOurs: e.interactionTarget.includes(Ye) || n.includes(oe),
    inputDelay: Math.round(e.inputDelay),
    processingDuration: Math.round(e.processingDuration),
    presentationDelay: Math.round(e.presentationDelay),
    longestScriptMs: Math.round(
      (l = (o = e.longestScript) == null ? void 0 : o.intersectingDuration) != null ? l : 0
    ),
    longestScriptSubpart: (s = e.longestScript) == null ? void 0 : s.subpart,
    loadState: e.loadState
  };
}, ct = () => {
  let t = 0, e = 0, n = 0;
  const r = performance.getEntriesByType(
    "resource"
  );
  for (const i of r)
    i.name.includes(oe) && (t += i.transferSize, e = Math.max(e, Math.round(i.duration))), i.name.includes("graphql.json") && (n = Math.max(n, Math.round(i.duration)));
  return {
    ourJsKb: Math.round(t / 1024),
    ourJsDurationMs: e,
    graphqlMs: n
  };
}, _e = (t) => !!t && !!t.closest(Ie), lt = (t) => {
  if (t)
    return t instanceof Element ? t : t.parentElement;
}, x = (t) => Math.round(t * 1e3) / 1e3;
export {
  ft as start
};
