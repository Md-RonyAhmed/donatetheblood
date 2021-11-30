/*!
 * Font Awesome Free 5.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
! function () {
  "use strict";
  var t = function () {},
    e = {},
    r = {},
    a = null,
    n = {
      mark: t,
      measure: t
    };
  try {
    "undefined" != typeof window && (e = window), "undefined" != typeof document && (r = document), "undefined" != typeof MutationObserver && (a = MutationObserver), "undefined" != typeof performance && (n = performance)
  } catch (t) {}
  var i = (e.navigator || {}).userAgent,
    o = void 0 === i ? "" : i,
    m = e,
    d = r,
    s = a,
    l = n,
    f = !!m.document,
    c = !!d.documentElement && !!d.head && "function" == typeof d.addEventListener && "function" == typeof d.createElement,
    k = ~o.indexOf("MSIE") || ~o.indexOf("Trident/"),
    u = "___FONT_AWESOME___",
    C = 16,
    g = "svg-inline--fa",
    A = "data-fa-i2svg",
    h = "data-fa-pseudo-element",
    p = "data-prefix",
    v = "data-icon",
    b = "fontawesome-i2svg",
    y = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    w = function () {
      try {
        return !0
      } catch (t) {
        return !1
      }
    }(),
    x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    N = x.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    z = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
    M = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(x.map(function (t) {
      return t + "x"
    })).concat(N.map(function (t) {
      return "w-" + t
    })),
    S = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    },
    L = function () {
      function a(t, e) {
        for (var r = 0; r < e.length; r++) {
          var a = e[r];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
      }
      return function (t, e, r) {
        return e && a(t.prototype, e), r && a(t, r), t
      }
    }(),
    E = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
      }
      return t
    },
    O = function (t, e) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return function (t, e) {
        var r = [],
          a = !0,
          n = !1,
          i = void 0;
        try {
          for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e); a = !0);
        } catch (t) {
          n = !0, i = t
        } finally {
          try {
            !a && s.return && s.return()
          } finally {
            if (n) throw i
          }
        }
        return r
      }(t, e);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    P = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r
      }
      return Array.from(t)
    },
    j = m.FontAwesomeConfig || {};
  if (d && "function" == typeof d.querySelector) {
    [
      ["data-family-prefix", "familyPrefix"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"]
    ].forEach(function (t) {
      var e, r = O(t, 2),
        a = r[0],
        n = r[1],
        i = "" === (e = function (t) {
          var e = d.querySelector("script[" + t + "]");
          if (e) return e.getAttribute(t)
        }(a)) || "false" !== e && ("true" === e || e);
      null != i && (j[n] = i)
    })
  }
  var R = E({
    familyPrefix: "fa",
    replacementClass: g,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
  }, j);
  R.autoReplaceSvg || (R.observeMutations = !1);
  var T = E({}, R);
  m.FontAwesomeConfig = T;
  var H = m || {};
  H[u] || (H[u] = {}), H[u].styles || (H[u].styles = {}), H[u].hooks || (H[u].hooks = {}), H[u].shims || (H[u].shims = []);
  var I = H[u],
    F = [],
    _ = !1;
  c && ((_ = (d.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(d.readyState)) || d.addEventListener("DOMContentLoaded", function t() {
    d.removeEventListener("DOMContentLoaded", t), _ = 1, F.map(function (t) {
      return t()
    })
  }));
  var Y = function (t) {
      c && (_ ? setTimeout(t, 0) : F.push(t))
    },
    D = C,
    W = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: !1,
      flipY: !1
    };

  function X(t) {
    if (t && c) {
      var e = d.createElement("style");
      e.setAttribute("type", "text/css"), e.innerHTML = t;
      for (var r = d.head.childNodes, a = null, n = r.length - 1; - 1 < n; n--) {
        var i = r[n],
          o = (i.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(o) && (a = i)
      }
      return d.head.insertBefore(e, a), t
    }
  }
  var q = 0;

  function B() {
    return ++q
  }

  function U(t) {
    for (var e = [], r = (t || []).length >>> 0; r--;) e[r] = t[r];
    return e
  }

  function V(t) {
    return t.classList ? U(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function (t) {
      return t
    })
  }

  function K(t, e) {
    var r, a = e.split("-"),
      n = a[0],
      i = a.slice(1).join("-");
    return n !== t || "" === i || (r = i, ~M.indexOf(r)) ? null : i
  }

  function G(t) {
    return ("" + t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function J(r) {
    return Object.keys(r || {}).reduce(function (t, e) {
      return t + (e + ": ") + r[e] + ";"
    }, "")
  }

  function Q(t) {
    return t.size !== W.size || t.x !== W.x || t.y !== W.y || t.rotate !== W.rotate || t.flipX || t.flipY
  }

  function Z(t) {
    var e = t.transform,
      r = t.containerWidth,
      a = t.iconWidth;
    return {
      outer: {
        transform: "translate(" + r / 2 + " 256)"
      },
      inner: {
        transform: "translate(" + 32 * e.x + ", " + 32 * e.y + ") " + " " + ("scale(" + e.size / 16 * (e.flipX ? -1 : 1) + ", " + e.size / 16 * (e.flipY ? -1 : 1) + ") ") + " " + ("rotate(" + e.rotate + " 0 0)")
      },
      path: {
        transform: "translate(" + a / 2 * -1 + " -256)"
      }
    }
  }
  var $ = {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%"
    },
    tt = function (t) {
      var e = t.children,
        r = t.attributes,
        a = t.main,
        n = t.mask,
        i = t.transform,
        o = a.width,
        s = a.icon,
        l = n.width,
        f = n.icon,
        c = Z({
          transform: i,
          containerWidth: l,
          iconWidth: o
        }),
        u = {
          tag: "rect",
          attributes: E({}, $, {
            fill: "white"
          })
        },
        m = {
          tag: "g",
          attributes: E({}, c.inner),
          children: [{
            tag: "path",
            attributes: E({}, s.attributes, c.path, {
              fill: "black"
            })
          }]
        },
        d = {
          tag: "g",
          attributes: E({}, c.outer),
          children: [m]
        },
        g = "mask-" + B(),
        h = "clip-" + B(),
        p = {
          tag: "defs",
          children: [{
            tag: "clipPath",
            attributes: {
              id: h
            },
            children: [f]
          }, {
            tag: "mask",
            attributes: E({}, $, {
              id: g,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [u, d]
          }]
        };
      return e.push(p, {
        tag: "rect",
        attributes: E({
          fill: "currentColor",
          "clip-path": "url(#" + h + ")",
          mask: "url(#" + g + ")"
        }, $)
      }), {
        children: e,
        attributes: r
      }
    },
    et = function (t) {
      var e = t.children,
        r = t.attributes,
        a = t.main,
        n = t.transform,
        i = J(t.styles);
      if (0 < i.length && (r.style = i), Q(n)) {
        var o = Z({
          transform: n,
          containerWidth: a.width,
          iconWidth: a.width
        });
        e.push({
          tag: "g",
          attributes: E({}, o.outer),
          children: [{
            tag: "g",
            attributes: E({}, o.inner),
            children: [{
              tag: a.icon.tag,
              children: a.icon.children,
              attributes: E({}, a.icon.attributes, o.path)
            }]
          }]
        })
      } else e.push(a.icon);
      return {
        children: e,
        attributes: r
      }
    },
    rt = function (t) {
      var e = t.children,
        r = t.main,
        a = t.mask,
        n = t.attributes,
        i = t.styles,
        o = t.transform;
      if (Q(o) && r.found && !a.found) {
        var s = r.width / r.height / 2,
          l = .5;
        n.style = J(E({}, i, {
          "transform-origin": s + o.x / 16 + "em " + (l + o.y / 16) + "em"
        }))
      }
      return [{
        tag: "svg",
        attributes: n,
        children: e
      }]
    },
    at = function (t) {
      var e = t.prefix,
        r = t.iconName,
        a = t.children,
        n = t.attributes,
        i = t.symbol,
        o = !0 === i ? e + "-" + T.familyPrefix + "-" + r : i;
      return [{
        tag: "svg",
        attributes: {
          style: "display: none;"
        },
        children: [{
          tag: "symbol",
          attributes: E({}, n, {
            id: o
          }),
          children: a
        }]
      }]
    };

  function nt(t) {
    var e = t.icons,
      r = e.main,
      a = e.mask,
      n = t.prefix,
      i = t.iconName,
      o = t.transform,
      s = t.symbol,
      l = t.title,
      f = t.extra,
      c = t.watchable,
      u = void 0 !== c && c,
      m = a.found ? a : r,
      d = m.width,
      g = m.height,
      h = "fa-w-" + Math.ceil(d / g * 16),
      p = [T.replacementClass, i ? T.familyPrefix + "-" + i : "", h].filter(function (t) {
        return -1 === f.classes.indexOf(t)
      }).concat(f.classes).join(" "),
      v = {
        children: [],
        attributes: E({}, f.attributes, {
          "data-prefix": n,
          "data-icon": i,
          class: p,
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 " + d + " " + g
        })
      };
    u && (v.attributes[A] = ""), l && v.children.push({
      tag: "title",
      attributes: {
        id: v.attributes["aria-labelledby"] || "title-" + B()
      },
      children: [l]
    });
    var b = E({}, v, {
        prefix: n,
        iconName: i,
        main: r,
        mask: a,
        transform: o,
        symbol: s,
        styles: f.styles
      }),
      y = a.found && r.found ? tt(b) : et(b),
      w = y.children,
      x = y.attributes;
    return b.children = w, b.attributes = x, s ? at(b) : rt(b)
  }

  function it(t) {
    var e = t.content,
      r = t.width,
      a = t.height,
      n = t.transform,
      i = t.title,
      o = t.extra,
      s = t.watchable,
      l = void 0 !== s && s,
      f = E({}, o.attributes, i ? {
        title: i
      } : {}, {
        class: o.classes.join(" ")
      });
    l && (f[A] = "");
    var c, u, m, d, g, h, p, v, b, y = E({}, o.styles);
    Q(n) && (y.transform = (u = (c = {
      transform: n,
      startCentered: !0,
      width: r,
      height: a
    }).transform, m = c.width, d = void 0 === m ? C : m, g = c.height, h = void 0 === g ? C : g, p = c.startCentered, b = "", b += (v = void 0 !== p && p) && k ? "translate(" + (u.x / D - d / 2) + "em, " + (u.y / D - h / 2) + "em) " : v ? "translate(calc(-50% + " + u.x / D + "em), calc(-50% + " + u.y / D + "em)) " : "translate(" + u.x / D + "em, " + u.y / D + "em) ", b += "scale(" + u.size / D * (u.flipX ? -1 : 1) + ", " + u.size / D * (u.flipY ? -1 : 1) + ") ", b += "rotate(" + u.rotate + "deg) "), y["-webkit-transform"] = y.transform);
    var w = J(y);
    0 < w.length && (f.style = w);
    var x = [];
    return x.push({
      tag: "span",
      attributes: f,
      children: [e]
    }), i && x.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [i]
    }), x
  }
  var ot = function () {},
    st = T.measurePerformance && l && l.mark && l.measure ? l : {
      mark: ot,
      measure: ot
    },
    lt = 'FA "5.1.0"',
    ft = function (t) {
      st.mark(lt + " " + t + " ends"), st.measure(lt + " " + t, lt + " " + t + " begins", lt + " " + t + " ends")
    },
    ct = {
      begin: function (t) {
        return st.mark(lt + " " + t + " begins"),
          function () {
            return ft(t)
          }
      },
      end: ft
    },
    ut = function (t, e, r, a) {
      var n, i, o, s, l, f = Object.keys(t),
        c = f.length,
        u = void 0 !== a ? (s = e, l = a, function (t, e, r, a) {
          return s.call(l, t, e, r, a)
        }) : e;
      for (void 0 === r ? (n = 1, o = t[f[0]]) : (n = 0, o = r); n < c; n++) o = u(o, t[i = f[n]], i, t);
      return o
    },
    mt = I.styles,
    dt = I.shims,
    gt = {},
    ht = {},
    pt = {},
    vt = function () {
      var t = function (a) {
        return ut(mt, function (t, e, r) {
          return t[r] = ut(e, a, {}), t
        }, {})
      };
      gt = t(function (t, e, r) {
        return t[e[3]] = r, t
      }), ht = t(function (e, t, r) {
        var a = t[2];
        return e[r] = r, a.forEach(function (t) {
          e[t] = r
        }), e
      });
      var i = "far" in mt;
      pt = ut(dt, function (t, e) {
        var r = e[0],
          a = e[1],
          n = e[2];
        return "far" !== a || i || (a = "fas"), t[r] = {
          prefix: a,
          iconName: n
        }, t
      }, {})
    };

  function bt(t, e) {
    return gt[t][e]
  }
  vt();
  var yt = I.styles,
    wt = function () {
      return {
        prefix: null,
        iconName: null,
        rest: []
      }
    };

  function xt(t) {
    return t.reduce(function (t, e) {
      var r = K(T.familyPrefix, e);
      if (yt[e]) t.prefix = e;
      else if (r) {
        var a = "fa" === t.prefix ? pt[r] || {
          prefix: null,
          iconName: null
        } : {};
        t.iconName = a.iconName || r, t.prefix = a.prefix || t.prefix
      } else e !== T.replacementClass && 0 !== e.indexOf("fa-w-") && t.rest.push(e);
      return t
    }, wt())
  }

  function kt(t, e, r) {
    if (t && t[e] && t[e][r]) return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    }
  }

  function Ct(t) {
    var r, e = t.tag,
      a = t.attributes,
      n = void 0 === a ? {} : a,
      i = t.children,
      o = void 0 === i ? [] : i;
    return "string" == typeof t ? G(t) : "<" + e + " " + (r = n, Object.keys(r || {}).reduce(function (t, e) {
      return t + (e + '="') + G(r[e]) + '" '
    }, "").trim()) + ">" + o.map(Ct).join("") + "</" + e + ">"
  }
  var At = function () {};

  function Nt(t) {
    return "string" == typeof (t.getAttribute ? t.getAttribute(A) : null)
  }
  var zt = {
    replace: function (t) {
      var e = t[0],
        r = t[1].map(function (t) {
          return Ct(t)
        }).join("\n");
      if (e.parentNode && e.outerHTML) e.outerHTML = r + (T.keepOriginalSource && "svg" !== e.tagName.toLowerCase() ? "\x3c!-- " + e.outerHTML + " --\x3e" : "");
      else if (e.parentNode) {
        var a = document.createElement("span");
        e.parentNode.replaceChild(a, e), a.outerHTML = r
      }
    },
    nest: function (t) {
      var e = t[0],
        r = t[1];
      if (~V(e).indexOf(T.replacementClass)) return zt.replace(t);
      var a = new RegExp(T.familyPrefix + "-.*");
      delete r[0].attributes.style;
      var n = r[0].attributes.class.split(" ").reduce(function (t, e) {
        return e === T.replacementClass || e.match(a) ? t.toSvg.push(e) : t.toNode.push(e), t
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = n.toSvg.join(" ");
      var i = r.map(function (t) {
        return Ct(t)
      }).join("\n");
      e.setAttribute("class", n.toNode.join(" ")), e.setAttribute(A, ""), e.innerHTML = i
    }
  };

  function Mt(r, t) {
    var a = "function" == typeof t ? t : At;
    0 === r.length ? a() : (m.requestAnimationFrame || function (t) {
      return t()
    })(function () {
      var t = !0 === T.autoReplaceSvg ? zt.replace : zt[T.autoReplaceSvg] || zt.replace,
        e = ct.begin("mutate");
      r.map(t), e(), a()
    })
  }
  var St = !1;
  var Lt = null;

  function Et(t) {
    if (s && T.observeMutations) {
      var n = t.treeCallback,
        i = t.nodeCallback,
        o = t.pseudoElementsCallback,
        e = t.observeMutationsRoot,
        r = void 0 === e ? d.body : e;
      Lt = new s(function (t) {
        St || U(t).forEach(function (t) {
          if ("childList" === t.type && 0 < t.addedNodes.length && !Nt(t.addedNodes[0]) && (T.searchPseudoElements && o(t.target), n(t.target)), "attributes" === t.type && t.target.parentNode && T.searchPseudoElements && o(t.target.parentNode), "attributes" === t.type && Nt(t.target) && ~z.indexOf(t.attributeName))
            if ("class" === t.attributeName) {
              var e = xt(V(t.target)),
                r = e.prefix,
                a = e.iconName;
              r && t.target.setAttribute("data-prefix", r), a && t.target.setAttribute("data-icon", a)
            } else i(t.target)
        })
      }), c && Lt.observe(r, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      })
    }
  }
  var Ot = function (t) {
    var e = t.getAttribute("style"),
      r = [];
    return e && (r = e.split(";").reduce(function (t, e) {
      var r = e.split(":"),
        a = r[0],
        n = r.slice(1);
      return a && 0 < n.length && (t[a] = n.join(":").trim()), t
    }, {})), r
  };

  function Pt(t) {
    for (var e = "", r = 0; r < t.length; r++) {
      e += ("000" + t.charCodeAt(r).toString(16)).slice(-4)
    }
    return e
  }
  var jt = function (t) {
      var e, r, a = t.getAttribute("data-prefix"),
        n = t.getAttribute("data-icon"),
        i = void 0 !== t.innerText ? t.innerText.trim() : "",
        o = xt(V(t));
      return a && n && (o.prefix = a, o.iconName = n), o.prefix && 1 < i.length ? o.iconName = (e = o.prefix, r = t.innerText, ht[e][r]) : o.prefix && 1 === i.length && (o.iconName = bt(o.prefix, Pt(t.innerText))), o
    },
    Rt = function (t) {
      var e = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
      };
      return t ? t.toLowerCase().split(" ").reduce(function (t, e) {
        var r = e.toLowerCase().split("-"),
          a = r[0],
          n = r.slice(1).join("-");
        if (a && "h" === n) return t.flipX = !0, t;
        if (a && "v" === n) return t.flipY = !0, t;
        if (n = parseFloat(n), isNaN(n)) return t;
        switch (a) {
          case "grow":
            t.size = t.size + n;
            break;
          case "shrink":
            t.size = t.size - n;
            break;
          case "left":
            t.x = t.x - n;
            break;
          case "right":
            t.x = t.x + n;
            break;
          case "up":
            t.y = t.y - n;
            break;
          case "down":
            t.y = t.y + n;
            break;
          case "rotate":
            t.rotate = t.rotate + n
        }
        return t
      }, e) : e
    },
    Tt = function (t) {
      return Rt(t.getAttribute("data-fa-transform"))
    },
    Ht = function (t) {
      var e = t.getAttribute("data-fa-symbol");
      return null !== e && ("" === e || e)
    },
    It = function (t) {
      var e = U(t.attributes).reduce(function (t, e) {
          return "class" !== t.name && "style" !== t.name && (t[e.name] = e.value), t
        }, {}),
        r = t.getAttribute("title");
      return T.autoA11y && (r ? e["aria-labelledby"] = T.replacementClass + "-title-" + B() : e["aria-hidden"] = "true"), e
    },
    Ft = function (t) {
      var e = t.getAttribute("data-fa-mask");
      return e ? xt(e.split(" ").map(function (t) {
        return t.trim()
      })) : wt()
    },
    _t = {
      iconName: null,
      title: null,
      prefix: null,
      transform: W,
      symbol: !1,
      mask: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };

  function Yt(t) {
    this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
  }(Yt.prototype = Object.create(Error.prototype)).constructor = Yt;
  var Dt = {
      fill: "currentColor"
    },
    Wt = {
      attributeType: "XML",
      repeatCount: "indefinite",
      dur: "2s"
    },
    Xt = {
      tag: "path",
      attributes: E({}, Dt, {
        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
      })
    },
    qt = E({}, Wt, {
      attributeName: "opacity"
    }),
    Bt = {
      tag: "g",
      children: [Xt, {
        tag: "circle",
        attributes: E({}, Dt, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: [{
          tag: "animate",
          attributes: E({}, Wt, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: E({}, qt, {
            values: "1;0;1;1;0;1;"
          })
        }]
      }, {
        tag: "path",
        attributes: E({}, Dt, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: [{
          tag: "animate",
          attributes: E({}, qt, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }, {
        tag: "path",
        attributes: E({}, Dt, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: E({}, qt, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }]
    },
    Ut = I.styles,
    Vt = "fa-layers-text",
    Kt = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,
    Gt = {
      Solid: "fas",
      Regular: "far",
      Light: "fal",
      Brands: "fab"
    },
    Jt = {
      900: "fas",
      400: "far",
      300: "fal"
    };

  function Qt(t, e) {
    var r = {
      found: !1,
      width: 512,
      height: 512,
      icon: Bt
    };
    if (t && e && Ut[e] && Ut[e][t]) {
      var a = Ut[e][t];
      r = {
        found: !0,
        width: a[0],
        height: a[1],
        icon: {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: a.slice(4)[0]
          }
        }
      }
    } else if (t && e && !T.showMissingIcons) throw new Yt("Icon is missing for prefix " + e + " with icon name " + t);
    return r
  }

  function Zt(t) {
    var e, r, a, n, i, o, s, l, f, c, u, m, d, g, h, p, v, b, y, w = (r = jt(e = t), a = r.iconName, n = r.prefix, i = r.rest, o = Ot(e), s = Tt(e), l = Ht(e), f = It(e), c = Ft(e), {
      iconName: a,
      title: e.getAttribute("title"),
      prefix: n,
      transform: s,
      symbol: l,
      mask: c,
      extra: {
        classes: i,
        styles: o,
        attributes: f
      }
    });
    return ~w.extra.classes.indexOf(Vt) ? function (t, e) {
      var r = e.title,
        a = e.transform,
        n = e.extra,
        i = null,
        o = null;
      if (k) {
        var s = parseInt(getComputedStyle(t).fontSize, 10),
          l = t.getBoundingClientRect();
        i = l.width / s, o = l.height / s
      }
      return T.autoA11y && !r && (n.attributes["aria-hidden"] = "true"), [t, it({
        content: t.innerHTML,
        width: i,
        height: o,
        transform: a,
        title: r,
        extra: n,
        watchable: !0
      })]
    }(t, w) : (u = t, d = (m = w).iconName, g = m.title, h = m.prefix, p = m.transform, v = m.symbol, b = m.mask, y = m.extra, [u, nt({
      icons: {
        main: Qt(d, h),
        mask: Qt(b.iconName, b.prefix)
      },
      prefix: h,
      iconName: d,
      transform: p,
      symbol: v,
      mask: b,
      title: g,
      extra: y,
      watchable: !0
    })])
  }

  function $t(t) {
    if (c) {
      var e = ct.begin("searchPseudoElements");
      St = !0,
        function () {
          U(t.querySelectorAll("*")).filter(function (t) {
            return !(t.parentNode === document.head || ~y.indexOf(t.tagName.toUpperCase()) || t.getAttribute(h) || t.parentNode && "svg" === t.parentNode.tagName)
          }).forEach(function (u) {
            [":before", ":after"].forEach(function (e) {
              var t = U(u.children).filter(function (t) {
                  return t.getAttribute(h) === e
                })[0],
                r = m.getComputedStyle(u, e),
                a = r.getPropertyValue("font-family").match(Kt),
                n = r.getPropertyValue("font-weight");
              if (t && !a) u.removeChild(t);
              else if (a) {
                var i = r.getPropertyValue("content"),
                  o = ~["Light", "Regular", "Solid"].indexOf(a[1]) ? Gt[a[1]] : Jt[n],
                  s = bt(o, Pt(3 === i.length ? i.substr(1, 1) : i));
                if (!t || t.getAttribute(p) !== o || t.getAttribute(v) !== s) {
                  t && u.removeChild(t);
                  var l = _t.extra;
                  l.attributes[h] = e;
                  var f = nt(E({}, _t, {
                      icons: {
                        main: Qt(s, o),
                        mask: wt()
                      },
                      prefix: o,
                      iconName: s,
                      extra: l,
                      watchable: !0
                    })),
                    c = d.createElement("svg");
                  ":before" === e ? u.insertBefore(c, u.firstChild) : u.appendChild(c), c.outerHTML = f.map(function (t) {
                    return Ct(t)
                  }).join("\n")
                }
              }
            })
          })
        }(), St = !1, e()
    }
  }

  function te(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    if (c) {
      var r = d.documentElement.classList,
        a = function (t) {
          return r.add(b + "-" + t)
        },
        n = function (t) {
          return r.remove(b + "-" + t)
        },
        i = Object.keys(Ut),
        o = ["." + Vt + ":not([" + A + "])"].concat(i.map(function (t) {
          return "." + t + ":not([" + A + "])"
        })).join(", ");
      if (0 !== o.length) {
        var s = U(t.querySelectorAll(o));
        if (0 < s.length) {
          a("pending"), n("complete");
          var l = ct.begin("onTree"),
            f = s.reduce(function (t, e) {
              try {
                var r = Zt(e);
                r && t.push(r)
              } catch (t) {
                w || t instanceof Yt && console.error(t)
              }
              return t
            }, []);
          l(), Mt(f, function () {
            a("active"), a("complete"), n("pending"), "function" == typeof e && e()
          })
        }
      }
    }
  }

  function ee(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
      r = Zt(t);
    r && Mt([r], e)
  }
  var re = function () {
    var t = g,
      e = T.familyPrefix,
      r = T.replacementClass,
      a = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";
    if ("fa" !== e || r !== t) {
      var n = new RegExp("\\.fa\\-", "g"),
        i = new RegExp("\\." + t, "g");
      a = a.replace(n, "." + e + "-").replace(i, "." + r)
    }
    return a
  };

  function ae(t) {
    return {
      found: !0,
      width: t[0],
      height: t[1],
      icon: {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: t.slice(4)[0]
        }
      }
    }
  }

  function ne() {
    T.autoAddCss && !fe && (X(re()), fe = !0)
  }

  function ie(e, t) {
    return Object.defineProperty(e, "abstract", {
      get: t
    }), Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (t) {
          return Ct(t)
        })
      }
    }), Object.defineProperty(e, "node", {
      get: function () {
        if (c) {
          var t = d.createElement("div");
          return t.innerHTML = e.html, t.children
        }
      }
    }), e
  }

  function oe(t) {
    var e = t.prefix,
      r = void 0 === e ? "fa" : e,
      a = t.iconName;
    if (a) return kt(le.definitions, r, a) || kt(I.styles, r, a)
  }
  var se, le = new(function () {
      function t() {
        S(this, t), this.definitions = {}
      }
      return L(t, [{
        key: "add",
        value: function () {
          for (var e = this, t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
          var n = r.reduce(this._pullDefinitions, {});
          Object.keys(n).forEach(function (t) {
            e.definitions[t] = E({}, e.definitions[t] || {}, n[t]),
              function t(e, a) {
                var r = Object.keys(a).reduce(function (t, e) {
                  var r = a[e];
                  return r.icon ? t[r.iconName] = r.icon : t[e] = r, t
                }, {});
                "function" == typeof I.hooks.addPack ? I.hooks.addPack(e, r) : I.styles[e] = E({}, I.styles[e] || {}, r), "fas" === e && t("fa", a)
              }(t, n[t])
          })
        }
      }, {
        key: "reset",
        value: function () {
          this.definitions = {}
        }
      }, {
        key: "_pullDefinitions",
        value: function (i, t) {
          var o = t.prefix && t.iconName && t.icon ? {
            0: t
          } : t;
          return Object.keys(o).map(function (t) {
            var e = o[t],
              r = e.prefix,
              a = e.iconName,
              n = e.icon;
            i[r] || (i[r] = {}), i[r][a] = n
          }), i
        }
      }]), t
    }()),
    fe = !1,
    ce = {
      i2svg: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        if (c) {
          ne();
          var e = t.node,
            r = void 0 === e ? d : e,
            a = t.callback,
            n = void 0 === a ? function () {} : a;
          T.searchPseudoElements && $t(r), te(r, n)
        }
      },
      css: re,
      insertCss: function () {
        fe || (X(re()), fe = !0)
      },
      watch: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.autoReplaceSvgRoot,
          r = t.observeMutationsRoot;
        !1 === T.autoReplaceSvg && (T.autoReplaceSvg = !0), T.observeMutations = !0, Y(function () {
          de({
            autoReplaceSvgRoot: e
          }), Et({
            treeCallback: te,
            nodeCallback: ee,
            pseudoElementsCallback: $t,
            observeMutationsRoot: r
          })
        })
      }
    },
    ue = (se = function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        r = e.transform,
        a = void 0 === r ? W : r,
        n = e.symbol,
        i = void 0 !== n && n,
        o = e.mask,
        s = void 0 === o ? null : o,
        l = e.title,
        f = void 0 === l ? null : l,
        c = e.classes,
        u = void 0 === c ? [] : c,
        m = e.attributes,
        d = void 0 === m ? {} : m,
        g = e.styles,
        h = void 0 === g ? {} : g;
      if (t) {
        var p = t.prefix,
          v = t.iconName,
          b = t.icon;
        return ie(E({
          type: "icon"
        }, t), function () {
          return ne(), T.autoA11y && (f ? d["aria-labelledby"] = T.replacementClass + "-title-" + B() : d["aria-hidden"] = "true"), nt({
            icons: {
              main: ae(b),
              mask: s ? ae(s.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
              }
            },
            prefix: p,
            iconName: v,
            transform: E({}, W, a),
            symbol: i,
            title: f,
            extra: {
              attributes: d,
              styles: h,
              classes: u
            }
          })
        })
      }
    }, function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        r = (t || {}).icon ? t : oe(t || {}),
        a = e.mask;
      return a && (a = (a || {}).icon ? a : oe(a || {})), se(r, E({}, e, {
        mask: a
      }))
    }),
    me = {
      noAuto: function () {
        T.autoReplaceSvg = !1, T.observeMutations = !1, Lt && Lt.disconnect()
      },
      config: T,
      dom: ce,
      library: le,
      parse: {
        transform: function (t) {
          return Rt(t)
        }
      },
      findIconDefinition: oe,
      icon: ue,
      text: function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          r = e.transform,
          a = void 0 === r ? W : r,
          n = e.title,
          i = void 0 === n ? null : n,
          o = e.classes,
          s = void 0 === o ? [] : o,
          l = e.attributes,
          f = void 0 === l ? {} : l,
          c = e.styles,
          u = void 0 === c ? {} : c;
        return ie({
          type: "text",
          content: t
        }, function () {
          return ne(), it({
            content: t,
            transform: E({}, W, a),
            title: i,
            extra: {
              attributes: f,
              styles: u,
              classes: [T.familyPrefix + "-layers-text"].concat(P(s))
            }
          })
        })
      },
      counter: function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          r = e.title,
          a = void 0 === r ? null : r,
          n = e.classes,
          i = void 0 === n ? [] : n,
          o = e.attributes,
          s = void 0 === o ? {} : o,
          l = e.styles,
          f = void 0 === l ? {} : l;
        return ie({
          type: "counter",
          content: t
        }, function () {
          return ne(),
            function (t) {
              var e = t.content,
                r = t.title,
                a = t.extra,
                n = E({}, a.attributes, r ? {
                  title: r
                } : {}, {
                  class: a.classes.join(" ")
                }),
                i = J(a.styles);
              0 < i.length && (n.style = i);
              var o = [];
              return o.push({
                tag: "span",
                attributes: n,
                children: [e]
              }), r && o.push({
                tag: "span",
                attributes: {
                  class: "sr-only"
                },
                children: [r]
              }), o
            }({
              content: t.toString(),
              title: a,
              extra: {
                attributes: s,
                styles: f,
                classes: [T.familyPrefix + "-layers-counter"].concat(P(i))
              }
            })
        })
      },
      layer: function (t) {
        return ie({
          type: "layer"
        }, function () {
          ne();
          var e = [];
          return t(function (t) {
            Array.isArray(t) ? t.map(function (t) {
              e = e.concat(t.abstract)
            }) : e = e.concat(t.abstract)
          }), [{
            tag: "span",
            attributes: {
              class: T.familyPrefix + "-layers"
            },
            children: e
          }]
        })
      },
      toHtml: Ct
    },
    de = function () {
      var t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
        e = void 0 === t ? d : t;
      0 < Object.keys(I.styles).length && c && T.autoReplaceSvg && me.dom.i2svg({
        node: e
      })
    };
  ! function (t) {
    try {
      t()
    } catch (t) {
      if (!w) throw t
    }
  }(function () {
    f && (m.FontAwesome || (m.FontAwesome = me), Y(function () {
      de(), Et({
        treeCallback: te,
        nodeCallback: ee,
        pseudoElementsCallback: $t
      })
    })), I.hooks = E({}, I.hooks, {
      addPack: function (t, e) {
        I.styles[t] = E({}, I.styles[t] || {}, e), vt(), de()
      },
      addShims: function (t) {
        var e;
        (e = I.shims).push.apply(e, P(t)), vt(), de()
      }
    })
  })
}();