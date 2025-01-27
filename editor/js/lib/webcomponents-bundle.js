/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  "use strict";
  var q,
    aa =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this,
    ba =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          };
  function ca() {
    ca = function () {};
    aa.Symbol || (aa.Symbol = da);
  }
  var da = (function () {
    var a = 0;
    return function (b) {
      return "jscomp_symbol_" + (b || "") + a++;
    };
  })();
  function ea() {
    ca();
    var a = aa.Symbol.iterator;
    a || (a = aa.Symbol.iterator = aa.Symbol("iterator"));
    "function" != typeof Array.prototype[a] &&
      ba(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return fa(this);
        },
      });
    ea = function () {};
  }
  function fa(a) {
    var b = 0;
    return ha(function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }
  function ha(a) {
    ea();
    a = { next: a };
    a[aa.Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function ia(a) {
    ea();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : fa(a);
  }
  function ja(a) {
    for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
    return c;
  }
  (function () {
    if (
      !(function () {
        var a = document.createEvent("Event");
        a.initEvent("foo", !0, !0);
        a.preventDefault();
        return a.defaultPrevented;
      })()
    ) {
      var a = Event.prototype.preventDefault;
      Event.prototype.preventDefault = function () {
        this.cancelable &&
          (a.call(this),
          Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            },
            configurable: !0,
          }));
      };
    }
    var b = /Trident/.test(navigator.userAgent);
    if (!window.CustomEvent || (b && "function" !== typeof window.CustomEvent))
      (window.CustomEvent = function (a, b) {
        b = b || {};
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
        return c;
      }),
        (window.CustomEvent.prototype = window.Event.prototype);
    if (!window.Event || (b && "function" !== typeof window.Event)) {
      var c = window.Event;
      window.Event = function (a, b) {
        b = b || {};
        var c = document.createEvent("Event");
        c.initEvent(a, !!b.bubbles, !!b.cancelable);
        return c;
      };
      if (c) for (var d in c) window.Event[d] = c[d];
      window.Event.prototype = c.prototype;
    }
    if (!window.MouseEvent || (b && "function" !== typeof window.MouseEvent)) {
      b = window.MouseEvent;
      window.MouseEvent = function (a, b) {
        b = b || {};
        var c = document.createEvent("MouseEvent");
        c.initMouseEvent(
          a,
          !!b.bubbles,
          !!b.cancelable,
          b.view || window,
          b.detail,
          b.screenX,
          b.screenY,
          b.clientX,
          b.clientY,
          b.ctrlKey,
          b.altKey,
          b.shiftKey,
          b.metaKey,
          b.button,
          b.relatedTarget
        );
        return c;
      };
      if (b) for (d in b) window.MouseEvent[d] = b[d];
      window.MouseEvent.prototype = b.prototype;
    }
    Array.from ||
      (Array.from = function (a) {
        return [].slice.call(a);
      });
    Object.assign ||
      (Object.assign = function (a, b) {
        for (var c = [].slice.call(arguments, 1), d = 0, e; d < c.length; d++)
          if ((e = c[d]))
            for (
              var f = a, n = e, r = Object.getOwnPropertyNames(n), G = 0;
              G < r.length;
              G++
            )
              (e = r[G]), (f[e] = n[e]);
        return a;
      });
  })(window.WebComponents);
  (function () {
    function a() {}
    function b(a, b) {
      if (!a.childNodes.length) return [];
      switch (a.nodeType) {
        case Node.DOCUMENT_NODE:
          return G.call(a, b);
        case Node.DOCUMENT_FRAGMENT_NODE:
          return x.call(a, b);
        default:
          return r.call(a, b);
      }
    }
    var c = "undefined" === typeof HTMLTemplateElement,
      d = !(
        document.createDocumentFragment().cloneNode() instanceof
        DocumentFragment
      ),
      e = !1;
    /Trident/.test(navigator.userAgent) &&
      (function () {
        function a(a, b) {
          if (a instanceof DocumentFragment)
            for (var d; (d = a.firstChild); ) c.call(this, d, b);
          else c.call(this, a, b);
          return a;
        }
        e = !0;
        var b = Node.prototype.cloneNode;
        Node.prototype.cloneNode = function (a) {
          a = b.call(this, a);
          this instanceof DocumentFragment &&
            (a.__proto__ = DocumentFragment.prototype);
          return a;
        };
        DocumentFragment.prototype.querySelectorAll =
          HTMLElement.prototype.querySelectorAll;
        DocumentFragment.prototype.querySelector =
          HTMLElement.prototype.querySelector;
        Object.defineProperties(DocumentFragment.prototype, {
          nodeType: {
            get: function () {
              return Node.DOCUMENT_FRAGMENT_NODE;
            },
            configurable: !0,
          },
          localName: { get: function () {}, configurable: !0 },
          nodeName: {
            get: function () {
              return "#document-fragment";
            },
            configurable: !0,
          },
        });
        var c = Node.prototype.insertBefore;
        Node.prototype.insertBefore = a;
        var d = Node.prototype.appendChild;
        Node.prototype.appendChild = function (b) {
          b instanceof DocumentFragment
            ? a.call(this, b, null)
            : d.call(this, b);
          return b;
        };
        var f = Node.prototype.removeChild,
          g = Node.prototype.replaceChild;
        Node.prototype.replaceChild = function (b, c) {
          b instanceof DocumentFragment
            ? (a.call(this, b, c), f.call(this, c))
            : g.call(this, b, c);
          return c;
        };
        Document.prototype.createDocumentFragment = function () {
          var a = this.createElement("df");
          a.__proto__ = DocumentFragment.prototype;
          return a;
        };
        var h = Document.prototype.importNode;
        Document.prototype.importNode = function (a, b) {
          b = h.call(this, a, b || !1);
          a instanceof DocumentFragment &&
            (b.__proto__ = DocumentFragment.prototype);
          return b;
        };
      })();
    var f = Node.prototype.cloneNode,
      g = Document.prototype.createElement,
      h = Document.prototype.importNode,
      k = Node.prototype.removeChild,
      m = Node.prototype.appendChild,
      n = Node.prototype.replaceChild,
      r = Element.prototype.querySelectorAll,
      G = Document.prototype.querySelectorAll,
      x = DocumentFragment.prototype.querySelectorAll,
      v = (function () {
        if (!c) {
          var a = document.createElement("template"),
            b = document.createElement("template");
          b.content.appendChild(document.createElement("div"));
          a.content.appendChild(b);
          a = a.cloneNode(!0);
          return (
            0 === a.content.childNodes.length ||
            0 === a.content.firstChild.content.childNodes.length ||
            d
          );
        }
      })();
    if (c) {
      var U = document.implementation.createHTMLDocument("template"),
        Dc = !0,
        xa = document.createElement("style");
      xa.textContent = "template{display:none;}";
      var Ec = document.head;
      Ec.insertBefore(xa, Ec.firstElementChild);
      a.prototype = Object.create(HTMLElement.prototype);
      var mf = !document.createElement("div").hasOwnProperty("innerHTML");
      a.R = function (b) {
        if (
          !b.content &&
          b.namespaceURI === document.documentElement.namespaceURI
        ) {
          b.content = U.createDocumentFragment();
          for (var c; (c = b.firstChild); ) m.call(b.content, c);
          if (mf) b.__proto__ = a.prototype;
          else if (
            ((b.cloneNode = function (b) {
              return a.a(this, b);
            }),
            Dc)
          )
            try {
              p(b), Fc(b);
            } catch (zh) {
              Dc = !1;
            }
          a.b(b.content);
        }
      };
      var p = function (b) {
          Object.defineProperty(b, "innerHTML", {
            get: function () {
              return Gc(this);
            },
            set: function (b) {
              U.body.innerHTML = b;
              for (a.b(U); this.content.firstChild; )
                k.call(this.content, this.content.firstChild);
              for (; U.body.firstChild; )
                m.call(this.content, U.body.firstChild);
            },
            configurable: !0,
          });
        },
        Fc = function (a) {
          Object.defineProperty(a, "outerHTML", {
            get: function () {
              return "<template>" + this.innerHTML + "</template>";
            },
            set: function (a) {
              if (this.parentNode) {
                U.body.innerHTML = a;
                for (
                  a = this.ownerDocument.createDocumentFragment();
                  U.body.firstChild;

                )
                  m.call(a, U.body.firstChild);
                n.call(this.parentNode, a, this);
              } else
                throw Error(
                  "Failed to set the 'outerHTML' property on 'Element': This element has no parent node."
                );
            },
            configurable: !0,
          });
        };
      p(a.prototype);
      Fc(a.prototype);
      a.b = function (c) {
        c = b(c, "template");
        for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) a.R(f);
      };
      document.addEventListener("DOMContentLoaded", function () {
        a.b(document);
      });
      Document.prototype.createElement = function () {
        var b = g.apply(this, arguments);
        "template" === b.localName && a.R(b);
        return b;
      };
      var nf = /[&\u00A0"]/g,
        kb = /[&\u00A0<>]/g,
        l = function (a) {
          switch (a) {
            case "&":
              return "&amp;";
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case '"':
              return "&quot;";
            case "\u00a0":
              return "&nbsp;";
          }
        };
      xa = function (a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
        return b;
      };
      var F = xa(
          "area base br col command embed hr img input keygen link meta param source track wbr".split(
            " "
          )
        ),
        of = xa(
          "style script xmp iframe noembed noframes plaintext noscript".split(
            " "
          )
        ),
        Gc = function (a, b) {
          "template" === a.localName && (a = a.content);
          for (
            var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g;
            e < f && (g = d[e]);
            e++
          ) {
            a: {
              var h = g;
              var k = a;
              var m = b;
              switch (h.nodeType) {
                case Node.ELEMENT_NODE:
                  for (
                    var n = h.localName, v = "<" + n, r = h.attributes, p = 0;
                    (k = r[p]);
                    p++
                  )
                    v += " " + k.name + '="' + k.value.replace(nf, l) + '"';
                  v += ">";
                  h = F[n] ? v : v + Gc(h, m) + "</" + n + ">";
                  break a;
                case Node.TEXT_NODE:
                  h = h.data;
                  h = k && of[k.localName] ? h : h.replace(kb, l);
                  break a;
                case Node.COMMENT_NODE:
                  h = "\x3c!--" + h.data + "--\x3e";
                  break a;
                default:
                  throw (window.console.error(h), Error("not implemented"));
              }
            }
            c += h;
          }
          return c;
        };
    }
    if (c || v) {
      a.a = function (a, b) {
        var c = f.call(a, !1);
        this.R && this.R(c);
        b &&
          (m.call(c.content, f.call(a.content, !0)), lb(c.content, a.content));
        return c;
      };
      var lb = function (c, d) {
          if (d.querySelectorAll && ((d = b(d, "template")), 0 !== d.length)) {
            c = b(c, "template");
            for (var e = 0, f = c.length, g, h; e < f; e++)
              (h = d[e]),
                (g = c[e]),
                a && a.R && a.R(h),
                n.call(g.parentNode, pf.call(h, !0), g);
          }
        },
        pf = (Node.prototype.cloneNode = function (b) {
          if (!e && d && this instanceof DocumentFragment)
            if (b) var c = qf.call(this.ownerDocument, this, !0);
            else return this.ownerDocument.createDocumentFragment();
          else
            this.nodeType === Node.ELEMENT_NODE &&
            "template" === this.localName &&
            this.namespaceURI == document.documentElement.namespaceURI
              ? (c = a.a(this, b))
              : (c = f.call(this, b));
          b && lb(c, this);
          return c;
        }),
        qf = (Document.prototype.importNode = function (c, d) {
          d = d || !1;
          if ("template" === c.localName) return a.a(c, d);
          var e = h.call(this, c, d);
          if (d) {
            lb(e, c);
            c = b(
              e,
              'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'
            );
            for (var f, k = 0; k < c.length; k++) {
              f = c[k];
              d = g.call(document, "script");
              d.textContent = f.textContent;
              for (var m = f.attributes, l = 0, v; l < m.length; l++)
                (v = m[l]), d.setAttribute(v.name, v.value);
              n.call(f.parentNode, d, f);
            }
          }
          return e;
        });
    }
    c && (window.HTMLTemplateElement = a);
  })();
  var ka;
  Array.isArray
    ? (ka = Array.isArray)
    : (ka = function (a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      });
  var la = ka;
  var ma = 0,
    na,
    oa = "undefined" !== typeof window ? window : void 0,
    pa = oa || {},
    qa = pa.MutationObserver || pa.WebKitMutationObserver,
    ra =
      "undefined" === typeof self &&
      "undefined" !== typeof process &&
      "[object process]" === {}.toString.call(process),
    sa =
      "undefined" !== typeof Uint8ClampedArray &&
      "undefined" !== typeof importScripts &&
      "undefined" !== typeof MessageChannel;
  function ta() {
    return "undefined" !== typeof na
      ? function () {
          na(ua);
        }
      : va();
  }
  function wa() {
    var a = 0,
      b = new qa(ua),
      c = document.createTextNode("");
    b.observe(c, { characterData: !0 });
    return function () {
      c.data = a = ++a % 2;
    };
  }
  function ya() {
    var a = new MessageChannel();
    a.port1.onmessage = ua;
    return function () {
      return a.port2.postMessage(0);
    };
  }
  function va() {
    var a = setTimeout;
    return function () {
      return a(ua, 1);
    };
  }
  var za = Array(1e3);
  function ua() {
    for (var a = 0; a < ma; a += 2)
      (0, za[a])(za[a + 1]), (za[a] = void 0), (za[a + 1] = void 0);
    ma = 0;
  }
  var Aa, Ba;
  if (ra)
    Ba = function () {
      return process.xb(ua);
    };
  else {
    var Ca;
    if (qa) Ca = wa();
    else {
      var Da;
      if (sa) Da = ya();
      else {
        var Ea;
        if (void 0 === oa && "function" === typeof require)
          try {
            var Fa = require("vertx");
            na = Fa.zb || Fa.yb;
            Ea = ta();
          } catch (a) {
            Ea = va();
          }
        else Ea = va();
        Da = Ea;
      }
      Ca = Da;
    }
    Ba = Ca;
  }
  Aa = Ba;
  function Ga(a, b) {
    za[ma] = a;
    za[ma + 1] = b;
    ma += 2;
    2 === ma && Aa();
  }
  function Ha(a, b) {
    var c = this,
      d = new this.constructor(Ia);
    void 0 === d[Ja] && Ka(d);
    var e = c.o;
    if (e) {
      var f = arguments[e - 1];
      Ga(function () {
        return La(e, d, f, c.l);
      });
    } else Ma(c, d, a, b);
    return d;
  }
  function Na(a) {
    if (a && "object" === typeof a && a.constructor === this) return a;
    var b = new this(Ia);
    Oa(b, a);
    return b;
  }
  var Ja = Math.random().toString(36).substring(16);
  function Ia() {}
  var Qa = new Pa();
  function Ra(a) {
    try {
      return a.then;
    } catch (b) {
      return (Qa.error = b), Qa;
    }
  }
  function Sa(a, b, c, d) {
    try {
      a.call(b, c, d);
    } catch (e) {
      return e;
    }
  }
  function Ta(a, b, c) {
    Ga(function (a) {
      var d = !1,
        f = Sa(
          c,
          b,
          function (c) {
            d || ((d = !0), b !== c ? Oa(a, c) : t(a, c));
          },
          function (b) {
            d || ((d = !0), u(a, b));
          }
        );
      !d && f && ((d = !0), u(a, f));
    }, a);
  }
  function Ua(a, b) {
    1 === b.o
      ? t(a, b.l)
      : 2 === b.o
      ? u(a, b.l)
      : Ma(
          b,
          void 0,
          function (b) {
            return Oa(a, b);
          },
          function (b) {
            return u(a, b);
          }
        );
  }
  function Va(a, b, c) {
    b.constructor === a.constructor && c === Ha && b.constructor.resolve === Na
      ? Ua(a, b)
      : c === Qa
      ? (u(a, Qa.error), (Qa.error = null))
      : void 0 === c
      ? t(a, b)
      : "function" === typeof c
      ? Ta(a, b, c)
      : t(a, b);
  }
  function Oa(a, b) {
    if (a === b)
      u(a, new TypeError("You cannot resolve a promise with itself"));
    else {
      var c = typeof b;
      null === b || ("object" !== c && "function" !== c)
        ? t(a, b)
        : Va(a, b, Ra(b));
    }
  }
  function Wa(a) {
    a.xa && a.xa(a.l);
    Xa(a);
  }
  function t(a, b) {
    void 0 === a.o && ((a.l = b), (a.o = 1), 0 !== a.U.length && Ga(Xa, a));
  }
  function u(a, b) {
    void 0 === a.o && ((a.o = 2), (a.l = b), Ga(Wa, a));
  }
  function Ma(a, b, c, d) {
    var e = a.U,
      f = e.length;
    a.xa = null;
    e[f] = b;
    e[f + 1] = c;
    e[f + 2] = d;
    0 === f && a.o && Ga(Xa, a);
  }
  function Xa(a) {
    var b = a.U,
      c = a.o;
    if (0 !== b.length) {
      for (var d, e, f = a.l, g = 0; g < b.length; g += 3)
        (d = b[g]), (e = b[g + c]), d ? La(c, d, e, f) : e(f);
      a.U.length = 0;
    }
  }
  function Pa() {
    this.error = null;
  }
  var Ya = new Pa();
  function La(a, b, c, d) {
    var e = "function" === typeof c;
    if (e) {
      try {
        var f = c(d);
      } catch (m) {
        (Ya.error = m), (f = Ya);
      }
      if (f === Ya) {
        var g = !0;
        var h = f.error;
        f.error = null;
      } else var k = !0;
      if (b === f) {
        u(
          b,
          new TypeError("A promises callback cannot return that same promise.")
        );
        return;
      }
    } else (f = d), (k = !0);
    void 0 === b.o &&
      (e && k
        ? Oa(b, f)
        : g
        ? u(b, h)
        : 1 === a
        ? t(b, f)
        : 2 === a && u(b, f));
  }
  function Za(a, b) {
    try {
      b(
        function (b) {
          Oa(a, b);
        },
        function (b) {
          u(a, b);
        }
      );
    } catch (c) {
      u(a, c);
    }
  }
  var $a = 0;
  function Ka(a) {
    a[Ja] = $a++;
    a.o = void 0;
    a.l = void 0;
    a.U = [];
  }
  function ab(a, b) {
    this.Na = a;
    this.N = new a(Ia);
    this.N[Ja] || Ka(this.N);
    if (la(b))
      if (
        ((this.$ = this.length = b.length),
        (this.l = Array(this.length)),
        0 === this.length)
      )
        t(this.N, this.l);
      else {
        this.length = this.length || 0;
        for (a = 0; void 0 === this.o && a < b.length; a++) bb(this, b[a], a);
        0 === this.$ && t(this.N, this.l);
      }
    else u(this.N, Error("Array Methods must be provided an Array"));
  }
  function bb(a, b, c) {
    var d = a.Na,
      e = d.resolve;
    e === Na
      ? ((e = Ra(b)),
        e === Ha && void 0 !== b.o
          ? cb(a, b.o, c, b.l)
          : "function" !== typeof e
          ? (a.$--, (a.l[c] = b))
          : d === w
          ? ((d = new d(Ia)), Va(d, b, e), db(a, d, c))
          : db(
              a,
              new d(function (a) {
                return a(b);
              }),
              c
            ))
      : db(a, e(b), c);
  }
  function cb(a, b, c, d) {
    var e = a.N;
    void 0 === e.o && (a.$--, 2 === b ? u(e, d) : (a.l[c] = d));
    0 === a.$ && t(e, a.l);
  }
  function db(a, b, c) {
    Ma(
      b,
      void 0,
      function (b) {
        return cb(a, 1, c, b);
      },
      function (b) {
        return cb(a, 2, c, b);
      }
    );
  }
  function eb(a) {
    return new ab(this, a).N;
  }
  function fb(a) {
    var b = this;
    return la(a)
      ? new b(function (c, d) {
          for (var e = a.length, f = 0; f < e; f++) b.resolve(a[f]).then(c, d);
        })
      : new b(function (a, b) {
          return b(new TypeError("You must pass an array to race."));
        });
  }
  function gb(a) {
    var b = new this(Ia);
    u(b, a);
    return b;
  }
  function w(a) {
    this[Ja] = $a++;
    this.l = this.o = void 0;
    this.U = [];
    if (Ia !== a) {
      if ("function" !== typeof a)
        throw new TypeError(
          "You must pass a resolver function as the first argument to the promise constructor"
        );
      if (this instanceof w) Za(this, a);
      else
        throw new TypeError(
          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
        );
    }
  }
  w.prototype = {
    constructor: w,
    then: Ha,
    a: function (a) {
      return this.then(null, a);
    },
  }; /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  window.Promise ||
    ((window.Promise = w),
    (w.prototype["catch"] = w.prototype.a),
    (w.prototype.then = w.prototype.then),
    (w.all = eb),
    (w.race = fb),
    (w.resolve = Na),
    (w.reject = gb)); /*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  window.WebComponents = window.WebComponents || { flags: {} };
  var hb = document.querySelector('script[src*="webcomponents-bundle"]'),
    ib = /wc-(.+)/,
    y = {};
  if (!y.noOpts) {
    location.search
      .slice(1)
      .split("&")
      .forEach(function (a) {
        a = a.split("=");
        var b;
        a[0] && (b = a[0].match(ib)) && (y[b[1]] = a[1] || !0);
      });
    if (hb)
      for (var jb = 0, mb; (mb = hb.attributes[jb]); jb++)
        "src" !== mb.name && (y[mb.name] = mb.value || !0);
    if (y.log && y.log.split) {
      var nb = y.log.split(",");
      y.log = {};
      nb.forEach(function (a) {
        y.log[a] = !0;
      });
    } else y.log = {};
  }
  window.WebComponents.flags = y;
  var ob = y.shadydom;
  ob &&
    ((window.ShadyDOM = window.ShadyDOM || {}), (window.ShadyDOM.force = ob));
  var pb = y.register || y.ce;
  pb && window.customElements && (window.customElements.forcePolyfill = pb); /*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  function qb() {
    this.Da = this.root = null;
    this.da = !1;
    this.L =
      this.Z =
      this.pa =
      this.assignedSlot =
      this.assignedNodes =
      this.S =
        null;
    this.childNodes =
      this.nextSibling =
      this.previousSibling =
      this.lastChild =
      this.firstChild =
      this.parentNode =
      this.V =
        void 0;
    this.Ia = this.va = !1;
  }
  qb.prototype.toJSON = function () {
    return {};
  };
  function z(a) {
    a.ka || (a.ka = new qb());
    return a.ka;
  }
  function A(a) {
    return a && a.ka;
  }
  var B = window.ShadyDOM || {};
  B.Ua = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
  var rb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
  B.I = !!(rb && rb.configurable && rb.get);
  B.Ba = B.force || !B.Ua;
  var sb = navigator.userAgent.match("Trident"),
    tb = navigator.userAgent.match("Edge");
  void 0 === B.Fa && (B.Fa = B.I && (sb || tb));
  function ub(a) {
    return (a = A(a)) && void 0 !== a.firstChild;
  }
  function C(a) {
    return "ShadyRoot" === a.Oa;
  }
  function vb(a) {
    a = a.getRootNode();
    if (C(a)) return a;
  }
  var wb = Element.prototype,
    xb =
      wb.matches ||
      wb.matchesSelector ||
      wb.mozMatchesSelector ||
      wb.msMatchesSelector ||
      wb.oMatchesSelector ||
      wb.webkitMatchesSelector;
  function yb(a, b) {
    if (a && b)
      for (
        var c = Object.getOwnPropertyNames(b), d = 0, e;
        d < c.length && (e = c[d]);
        d++
      ) {
        var f = Object.getOwnPropertyDescriptor(b, e);
        f && Object.defineProperty(a, e, f);
      }
  }
  function zb(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    for (d = 0; d < c.length; d++) yb(a, c[d]);
    return a;
  }
  function Ab(a, b) {
    for (var c in b) a[c] = b[c];
  }
  var Bb = document.createTextNode(""),
    Cb = 0,
    Db = [];
  new MutationObserver(function () {
    for (; Db.length; )
      try {
        Db.shift()();
      } catch (a) {
        throw ((Bb.textContent = Cb++), a);
      }
  }).observe(Bb, { characterData: !0 });
  function Eb(a) {
    Db.push(a);
    Bb.textContent = Cb++;
  }
  var Fb = !!document.contains;
  function Gb(a, b) {
    for (; b; ) {
      if (b == a) return !0;
      b = b.parentNode;
    }
    return !1;
  }
  var Hb = [],
    Ib;
  function Jb(a) {
    Ib || ((Ib = !0), Eb(Kb));
    Hb.push(a);
  }
  function Kb() {
    Ib = !1;
    for (var a = !!Hb.length; Hb.length; ) Hb.shift()();
    return a;
  }
  Kb.list = Hb;
  function Lb() {
    this.a = !1;
    this.addedNodes = [];
    this.removedNodes = [];
    this.ca = new Set();
  }
  function Mb(a) {
    a.a ||
      ((a.a = !0),
      Eb(function () {
        Nb(a);
      }));
  }
  function Nb(a) {
    if (a.a) {
      a.a = !1;
      var b = a.takeRecords();
      b.length &&
        a.ca.forEach(function (a) {
          a(b);
        });
    }
  }
  Lb.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [
        { addedNodes: this.addedNodes, removedNodes: this.removedNodes },
      ];
      this.addedNodes = [];
      this.removedNodes = [];
      return a;
    }
    return [];
  };
  function Ob(a, b) {
    var c = z(a);
    c.S || (c.S = new Lb());
    c.S.ca.add(b);
    var d = c.S;
    return {
      La: b,
      P: d,
      Pa: a,
      takeRecords: function () {
        return d.takeRecords();
      },
    };
  }
  function Pb(a) {
    var b = a && a.P;
    b && (b.ca.delete(a.La), b.ca.size || (z(a.Pa).S = null));
  }
  function Qb(a, b) {
    var c = b.getRootNode();
    return a
      .map(function (a) {
        var b = c === a.target.getRootNode();
        if (b && a.addedNodes) {
          if (
            ((b = Array.from(a.addedNodes).filter(function (a) {
              return c === a.getRootNode();
            })),
            b.length)
          )
            return (
              (a = Object.create(a)),
              Object.defineProperty(a, "addedNodes", {
                value: b,
                configurable: !0,
              }),
              a
            );
        } else if (b) return a;
      })
      .filter(function (a) {
        return a;
      });
  }
  var D = {},
    Rb = Element.prototype.insertBefore,
    Sb = Element.prototype.replaceChild,
    Tb = Element.prototype.removeChild,
    Ub = Element.prototype.setAttribute,
    Vb = Element.prototype.removeAttribute,
    Wb = Element.prototype.cloneNode,
    Xb = Document.prototype.importNode,
    Yb = Element.prototype.addEventListener,
    Zb = Element.prototype.removeEventListener,
    $b = Window.prototype.addEventListener,
    ac = Window.prototype.removeEventListener,
    bc = Element.prototype.dispatchEvent,
    cc = Node.prototype.contains || HTMLElement.prototype.contains,
    dc = Document.prototype.getElementById,
    ec = Element.prototype.querySelector,
    fc = DocumentFragment.prototype.querySelector,
    gc = Document.prototype.querySelector,
    hc = Element.prototype.querySelectorAll,
    ic = DocumentFragment.prototype.querySelectorAll,
    jc = Document.prototype.querySelectorAll;
  D.appendChild = Element.prototype.appendChild;
  D.insertBefore = Rb;
  D.replaceChild = Sb;
  D.removeChild = Tb;
  D.setAttribute = Ub;
  D.removeAttribute = Vb;
  D.cloneNode = Wb;
  D.importNode = Xb;
  D.addEventListener = Yb;
  D.removeEventListener = Zb;
  D.eb = $b;
  D.fb = ac;
  D.dispatchEvent = bc;
  D.contains = cc;
  D.getElementById = dc;
  D.ob = ec;
  D.sb = fc;
  D.mb = gc;
  D.querySelector = function (a) {
    switch (this.nodeType) {
      case Node.ELEMENT_NODE:
        return ec.call(this, a);
      case Node.DOCUMENT_NODE:
        return gc.call(this, a);
      default:
        return fc.call(this, a);
    }
  };
  D.pb = hc;
  D.tb = ic;
  D.nb = jc;
  D.querySelectorAll = function (a) {
    switch (this.nodeType) {
      case Node.ELEMENT_NODE:
        return hc.call(this, a);
      case Node.DOCUMENT_NODE:
        return jc.call(this, a);
      default:
        return ic.call(this, a);
    }
  };
  var kc = /[&\u00A0"]/g,
    lc = /[&\u00A0<>]/g;
  function mc(a) {
    switch (a) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "\u00a0":
        return "&nbsp;";
    }
  }
  function nc(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
    return b;
  }
  var oc = nc(
      "area base br col command embed hr img input keygen link meta param source track wbr".split(
        " "
      )
    ),
    pc = nc(
      "style script xmp iframe noembed noframes plaintext noscript".split(" ")
    );
  function qc(a, b) {
    "template" === a.localName && (a = a.content);
    for (
      var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g;
      e < f && (g = d[e]);
      e++
    ) {
      a: {
        var h = g;
        var k = a;
        var m = b;
        switch (h.nodeType) {
          case Node.ELEMENT_NODE:
            for (
              var n = h.localName, r = "<" + n, G = h.attributes, x = 0;
              (k = G[x]);
              x++
            )
              r += " " + k.name + '="' + k.value.replace(kc, mc) + '"';
            r += ">";
            h = oc[n] ? r : r + qc(h, m) + "</" + n + ">";
            break a;
          case Node.TEXT_NODE:
            h = h.data;
            h = k && pc[k.localName] ? h : h.replace(lc, mc);
            break a;
          case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";
            break a;
          default:
            throw (window.console.error(h), Error("not implemented"));
        }
      }
      c += h;
    }
    return c;
  }
  var E = {},
    H = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
    I = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);
  function rc(a) {
    var b = [];
    H.currentNode = a;
    for (a = H.firstChild(); a; ) b.push(a), (a = H.nextSibling());
    return b;
  }
  E.parentNode = function (a) {
    H.currentNode = a;
    return H.parentNode();
  };
  E.firstChild = function (a) {
    H.currentNode = a;
    return H.firstChild();
  };
  E.lastChild = function (a) {
    H.currentNode = a;
    return H.lastChild();
  };
  E.previousSibling = function (a) {
    H.currentNode = a;
    return H.previousSibling();
  };
  E.nextSibling = function (a) {
    H.currentNode = a;
    return H.nextSibling();
  };
  E.childNodes = rc;
  E.parentElement = function (a) {
    I.currentNode = a;
    return I.parentNode();
  };
  E.firstElementChild = function (a) {
    I.currentNode = a;
    return I.firstChild();
  };
  E.lastElementChild = function (a) {
    I.currentNode = a;
    return I.lastChild();
  };
  E.previousElementSibling = function (a) {
    I.currentNode = a;
    return I.previousSibling();
  };
  E.nextElementSibling = function (a) {
    I.currentNode = a;
    return I.nextSibling();
  };
  E.children = function (a) {
    var b = [];
    I.currentNode = a;
    for (a = I.firstChild(); a; ) b.push(a), (a = I.nextSibling());
    return b;
  };
  E.innerHTML = function (a) {
    return qc(a, function (a) {
      return rc(a);
    });
  };
  E.textContent = function (a) {
    switch (a.nodeType) {
      case Node.ELEMENT_NODE:
      case Node.DOCUMENT_FRAGMENT_NODE:
        a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
        for (var b = "", c; (c = a.nextNode()); ) b += c.nodeValue;
        return b;
      default:
        return a.nodeValue;
    }
  };
  var J = {},
    sc = B.I,
    tc = [Node.prototype, Element.prototype, HTMLElement.prototype];
  function K(a) {
    var b;
    a: {
      for (b = 0; b < tc.length; b++) {
        var c = tc[b];
        if (c.hasOwnProperty(a)) {
          b = c;
          break a;
        }
      }
      b = void 0;
    }
    if (!b) throw Error("Could not find descriptor for " + a);
    return Object.getOwnPropertyDescriptor(b, a);
  }
  var L = sc
      ? {
          parentNode: K("parentNode"),
          firstChild: K("firstChild"),
          lastChild: K("lastChild"),
          previousSibling: K("previousSibling"),
          nextSibling: K("nextSibling"),
          childNodes: K("childNodes"),
          parentElement: K("parentElement"),
          previousElementSibling: K("previousElementSibling"),
          nextElementSibling: K("nextElementSibling"),
          innerHTML: K("innerHTML"),
          textContent: K("textContent"),
          firstElementChild: K("firstElementChild"),
          lastElementChild: K("lastElementChild"),
          children: K("children"),
        }
      : {},
    uc = sc
      ? {
          firstElementChild: Object.getOwnPropertyDescriptor(
            DocumentFragment.prototype,
            "firstElementChild"
          ),
          lastElementChild: Object.getOwnPropertyDescriptor(
            DocumentFragment.prototype,
            "lastElementChild"
          ),
          children: Object.getOwnPropertyDescriptor(
            DocumentFragment.prototype,
            "children"
          ),
        }
      : {},
    vc = sc
      ? {
          firstElementChild: Object.getOwnPropertyDescriptor(
            Document.prototype,
            "firstElementChild"
          ),
          lastElementChild: Object.getOwnPropertyDescriptor(
            Document.prototype,
            "lastElementChild"
          ),
          children: Object.getOwnPropertyDescriptor(
            Document.prototype,
            "children"
          ),
        }
      : {};
  J.Ca = L;
  J.rb = uc;
  J.lb = vc;
  J.parentNode = function (a) {
    return L.parentNode.get.call(a);
  };
  J.firstChild = function (a) {
    return L.firstChild.get.call(a);
  };
  J.lastChild = function (a) {
    return L.lastChild.get.call(a);
  };
  J.previousSibling = function (a) {
    return L.previousSibling.get.call(a);
  };
  J.nextSibling = function (a) {
    return L.nextSibling.get.call(a);
  };
  J.childNodes = function (a) {
    return Array.prototype.slice.call(L.childNodes.get.call(a));
  };
  J.parentElement = function (a) {
    return L.parentElement.get.call(a);
  };
  J.previousElementSibling = function (a) {
    return L.previousElementSibling.get.call(a);
  };
  J.nextElementSibling = function (a) {
    return L.nextElementSibling.get.call(a);
  };
  J.innerHTML = function (a) {
    return L.innerHTML.get.call(a);
  };
  J.textContent = function (a) {
    return L.textContent.get.call(a);
  };
  J.children = function (a) {
    switch (a.nodeType) {
      case Node.DOCUMENT_FRAGMENT_NODE:
        a = uc.children.get.call(a);
        break;
      case Node.DOCUMENT_NODE:
        a = vc.children.get.call(a);
        break;
      default:
        a = L.children.get.call(a);
    }
    return Array.prototype.slice.call(a);
  };
  J.firstElementChild = function (a) {
    switch (a.nodeType) {
      case Node.DOCUMENT_FRAGMENT_NODE:
        return uc.firstElementChild.get.call(a);
      case Node.DOCUMENT_NODE:
        return vc.firstElementChild.get.call(a);
      default:
        return L.firstElementChild.get.call(a);
    }
  };
  J.lastElementChild = function (a) {
    switch (a.nodeType) {
      case Node.DOCUMENT_FRAGMENT_NODE:
        return uc.lastElementChild.get.call(a);
      case Node.DOCUMENT_NODE:
        return vc.lastElementChild.get.call(a);
      default:
        return L.lastElementChild.get.call(a);
    }
  };
  var M = B.Fa ? J : E;
  function wc(a) {
    for (; a.firstChild; ) a.removeChild(a.firstChild);
  }
  var xc = B.I,
    yc = document.implementation.createHTMLDocument("inert"),
    zc = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
    Ac = zc && zc.get,
    Bc = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"),
    Cc = {
      parentElement: {
        get: function () {
          var a = A(this);
          (a = a && a.parentNode) &&
            a.nodeType !== Node.ELEMENT_NODE &&
            (a = null);
          return void 0 !== a ? a : M.parentElement(this);
        },
        configurable: !0,
      },
      parentNode: {
        get: function () {
          var a = A(this);
          a = a && a.parentNode;
          return void 0 !== a ? a : M.parentNode(this);
        },
        configurable: !0,
      },
      nextSibling: {
        get: function () {
          var a = A(this);
          a = a && a.nextSibling;
          return void 0 !== a ? a : M.nextSibling(this);
        },
        configurable: !0,
      },
      previousSibling: {
        get: function () {
          var a = A(this);
          a = a && a.previousSibling;
          return void 0 !== a ? a : M.previousSibling(this);
        },
        configurable: !0,
      },
      nextElementSibling: {
        get: function () {
          var a = A(this);
          if (a && void 0 !== a.nextSibling) {
            for (a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE; )
              a = a.nextSibling;
            return a;
          }
          return M.nextElementSibling(this);
        },
        configurable: !0,
      },
      previousElementSibling: {
        get: function () {
          var a = A(this);
          if (a && void 0 !== a.previousSibling) {
            for (
              a = this.previousSibling;
              a && a.nodeType !== Node.ELEMENT_NODE;

            )
              a = a.previousSibling;
            return a;
          }
          return M.previousElementSibling(this);
        },
        configurable: !0,
      },
    },
    Hc = {
      className: {
        get: function () {
          return this.getAttribute("class") || "";
        },
        set: function (a) {
          this.setAttribute("class", a);
        },
        configurable: !0,
      },
    },
    Ic = {
      childNodes: {
        get: function () {
          if (ub(this)) {
            var a = A(this);
            if (!a.childNodes) {
              a.childNodes = [];
              for (var b = this.firstChild; b; b = b.nextSibling)
                a.childNodes.push(b);
            }
            var c = a.childNodes;
          } else c = M.childNodes(this);
          c.item = function (a) {
            return c[a];
          };
          return c;
        },
        configurable: !0,
      },
      childElementCount: {
        get: function () {
          return this.children.length;
        },
        configurable: !0,
      },
      firstChild: {
        get: function () {
          var a = A(this);
          a = a && a.firstChild;
          return void 0 !== a ? a : M.firstChild(this);
        },
        configurable: !0,
      },
      lastChild: {
        get: function () {
          var a = A(this);
          a = a && a.lastChild;
          return void 0 !== a ? a : M.lastChild(this);
        },
        configurable: !0,
      },
      textContent: {
        get: function () {
          if (ub(this)) {
            for (var a = [], b = 0, c = this.childNodes, d; (d = c[b]); b++)
              d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
            return a.join("");
          }
          return M.textContent(this);
        },
        set: function (a) {
          if ("undefined" === typeof a || null === a) a = "";
          switch (this.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              if (!ub(this) && xc) {
                var b = this.firstChild;
                (b != this.lastChild || (b && b.nodeType != Node.TEXT_NODE)) &&
                  wc(this);
                J.Ca.textContent.set.call(this, a);
              } else
                wc(this),
                  (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                    this.appendChild(document.createTextNode(a));
              break;
            default:
              this.nodeValue = a;
          }
        },
        configurable: !0,
      },
      firstElementChild: {
        get: function () {
          var a = A(this);
          if (a && void 0 !== a.firstChild) {
            for (a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE; )
              a = a.nextSibling;
            return a;
          }
          return M.firstElementChild(this);
        },
        configurable: !0,
      },
      lastElementChild: {
        get: function () {
          var a = A(this);
          if (a && void 0 !== a.lastChild) {
            for (a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE; )
              a = a.previousSibling;
            return a;
          }
          return M.lastElementChild(this);
        },
        configurable: !0,
      },
      children: {
        get: function () {
          var a;
          ub(this)
            ? (a = Array.prototype.filter.call(this.childNodes, function (a) {
                return a.nodeType === Node.ELEMENT_NODE;
              }))
            : (a = M.children(this));
          a.item = function (b) {
            return a[b];
          };
          return a;
        },
        configurable: !0,
      },
      innerHTML: {
        get: function () {
          return ub(this)
            ? qc("template" === this.localName ? this.content : this)
            : M.innerHTML(this);
        },
        set: function (a) {
          var b = "template" === this.localName ? this.content : this;
          wc(b);
          var c = this.localName;
          (c && "template" !== c) || (c = "div");
          c = yc.createElement(c);
          for (
            xc ? J.Ca.innerHTML.set.call(c, a) : (c.innerHTML = a);
            c.firstChild;

          )
            b.appendChild(c.firstChild);
        },
        configurable: !0,
      },
    },
    Jc = {
      shadowRoot: {
        get: function () {
          var a = A(this);
          return (a && a.Da) || null;
        },
        configurable: !0,
      },
    },
    Kc = {
      activeElement: {
        get: function () {
          var a =
            Bc && Bc.get
              ? Bc.get.call(document)
              : B.I
              ? void 0
              : document.activeElement;
          if (a && a.nodeType) {
            var b = !!C(this);
            if (
              this === document ||
              (b && this.host !== a && D.contains.call(this.host, a))
            ) {
              for (b = vb(a); b && b !== this; ) (a = b.host), (b = vb(a));
              a = this === document ? (b ? null : a) : b === this ? a : null;
            } else a = null;
          } else a = null;
          return a;
        },
        set: function () {},
        configurable: !0,
      },
    };
  function N(a, b, c) {
    for (var d in b) {
      var e = Object.getOwnPropertyDescriptor(a, d);
      (e && e.configurable) || (!e && c)
        ? Object.defineProperty(a, d, b[d])
        : c && console.warn("Could not define", d, "on", a);
    }
  }
  function Lc(a) {
    N(a, Cc);
    N(a, Hc);
    N(a, Ic);
    N(a, Kc);
  }
  function Mc() {
    var a = Nc.prototype;
    a.__proto__ = DocumentFragment.prototype;
    N(a, Cc, !0);
    N(a, Ic, !0);
    N(a, Kc, !0);
    Object.defineProperties(a, {
      nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 },
      nodeName: { value: "#document-fragment", configurable: !0 },
      nodeValue: { value: null, configurable: !0 },
    });
    ["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });
    ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, {
        get: function () {
          return this.host[b];
        },
        configurable: !0,
      });
    });
  }
  var Oc = B.I
      ? function () {}
      : function (a) {
          var b = z(a);
          b.va || ((b.va = !0), N(a, Cc, !0), N(a, Hc, !0));
        },
    Pc = B.I
      ? function () {}
      : function (a) {
          z(a).Ia || (N(a, Ic, !0), N(a, Jc, !0));
        };
  var Qc = M.childNodes;
  function Rc(a, b, c) {
    Oc(a);
    c = c || null;
    var d = z(a),
      e = z(b),
      f = c ? z(c) : null;
    d.previousSibling = c ? f.previousSibling : b.lastChild;
    if ((f = A(d.previousSibling))) f.nextSibling = a;
    if ((f = A((d.nextSibling = c)))) f.previousSibling = a;
    d.parentNode = b;
    c
      ? c === e.firstChild && (e.firstChild = a)
      : ((e.lastChild = a), e.firstChild || (e.firstChild = a));
    e.childNodes = null;
  }
  function Sc(a, b) {
    var c = z(a);
    if (void 0 === c.firstChild)
      for (
        b = b || Qc(a),
          c.firstChild = b[0] || null,
          c.lastChild = b[b.length - 1] || null,
          Pc(a),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c],
          e = z(d);
        e.parentNode = a;
        e.nextSibling = b[c + 1] || null;
        e.previousSibling = b[c - 1] || null;
        Oc(d);
      }
  }
  var Tc = M.parentNode;
  function Uc(a, b, c) {
    if (b === a)
      throw Error(
        "Failed to execute 'appendChild' on 'Node': The new child element contains the parent."
      );
    if (c) {
      var d = A(c);
      d = d && d.parentNode;
      if ((void 0 !== d && d !== a) || (void 0 === d && Tc(c) !== a))
        throw Error(
          "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."
        );
    }
    if (c === b) return b;
    b.parentNode && Vc(b.parentNode, b);
    var e, f;
    if (!b.__noInsertionPoint) {
      if ((f = e = vb(a))) {
        var g;
        "slot" === b.localName
          ? (g = [b])
          : b.querySelectorAll && (g = b.querySelectorAll("slot"));
        f = g && g.length ? g : void 0;
      }
      f &&
        ((g = e),
        (d = f),
        (g.a = g.a || []),
        (g.m = g.m || []),
        (g.w = g.w || {}),
        g.a.push.apply(g.a, [].concat(d instanceof Array ? d : ja(ia(d)))));
    }
    ("slot" === a.localName || f) && (e = e || vb(a)) && Wc(e);
    if (ub(a)) {
      e = c;
      Pc(a);
      f = z(a);
      void 0 !== f.firstChild && (f.childNodes = null);
      if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        f = b.childNodes;
        for (g = 0; g < f.length; g++) Rc(f[g], a, e);
        e = z(b);
        f = void 0 !== e.firstChild ? null : void 0;
        e.firstChild = e.lastChild = f;
        e.childNodes = f;
      } else Rc(b, a, e);
      e = A(a);
      if (Xc(a)) {
        Wc(e.root);
        var h = !0;
      } else e.root && (h = !0);
    }
    h ||
      ((h = C(a) ? a.host : a),
      c
        ? ((c = Yc(c)), D.insertBefore.call(h, b, c))
        : D.appendChild.call(h, b));
    Zc(a, b);
    return b;
  }
  function Vc(a, b) {
    if (b.parentNode !== a)
      throw Error("The node to be removed is not a child of this node: " + b);
    var c = vb(b),
      d = A(a);
    if (ub(a)) {
      var e = z(b),
        f = z(a);
      b === f.firstChild && (f.firstChild = e.nextSibling);
      b === f.lastChild && (f.lastChild = e.previousSibling);
      var g = e.previousSibling,
        h = e.nextSibling;
      g && (z(g).nextSibling = h);
      h && (z(h).previousSibling = g);
      e.parentNode = e.previousSibling = e.nextSibling = void 0;
      void 0 !== f.childNodes && (f.childNodes = null);
      if (Xc(a)) {
        Wc(d.root);
        var k = !0;
      }
    }
    $c(b);
    if (c) {
      (e = a && "slot" === a.localName) && (k = !0);
      if (c.m) {
        ad(c);
        f = c.w;
        for (v in f)
          for (g = f[v], h = 0; h < g.length; h++) {
            var m = g[h];
            if (Gb(b, m)) {
              g.splice(h, 1);
              var n = c.m.indexOf(m);
              0 <= n && c.m.splice(n, 1);
              h--;
              n = A(m);
              if ((m = n.L))
                for (var r = 0; r < m.length; r++) {
                  var G = m[r],
                    x = bd(G);
                  x && D.removeChild.call(x, G);
                }
              n.L = [];
              n.assignedNodes = [];
              n = !0;
            }
          }
        var v = n;
      } else v = void 0;
      (v || e) && Wc(c);
    }
    k ||
      ((k = C(a) ? a.host : a),
      ((!d.root && "slot" !== b.localName) || k === Tc(b)) &&
        D.removeChild.call(k, b));
    Zc(a, null, b);
    return b;
  }
  function $c(a) {
    var b = A(a);
    if (b && void 0 !== b.V) {
      b = a.childNodes;
      for (var c = 0, d = b.length, e; c < d && (e = b[c]); c++) $c(e);
    }
    if ((a = A(a))) a.V = void 0;
  }
  function Yc(a) {
    var b = a;
    a &&
      "slot" === a.localName &&
      (b = (b = (b = A(a)) && b.L) && b.length ? b[0] : Yc(a.nextSibling));
    return b;
  }
  function Xc(a) {
    return (a = (a = A(a)) && a.root) && cd(a);
  }
  function dd(a, b) {
    if ("slot" === b) (a = a.parentNode), Xc(a) && Wc(A(a).root);
    else if ("slot" === a.localName && "name" === b && (b = vb(a))) {
      if (b.m) {
        var c = a.Ja,
          d = ed(a);
        if (d !== c) {
          c = b.w[c];
          var e = c.indexOf(a);
          0 <= e && c.splice(e, 1);
          c = b.w[d] || (b.w[d] = []);
          c.push(a);
          1 < c.length && (b.w[d] = fd(c));
        }
      }
      Wc(b);
    }
  }
  function Zc(a, b, c) {
    if ((a = (a = A(a)) && a.S))
      b && a.addedNodes.push(b), c && a.removedNodes.push(c), Mb(a);
  }
  function gd(a) {
    if (a && a.nodeType) {
      var b = z(a),
        c = b.V;
      void 0 === c &&
        (C(a)
          ? ((c = a), (b.V = c))
          : ((c = (c = a.parentNode) ? gd(c) : a),
            D.contains.call(document.documentElement, a) && (b.V = c)));
      return c;
    }
  }
  function hd(a, b, c) {
    var d = [];
    id(a.childNodes, b, c, d);
    return d;
  }
  function id(a, b, c, d) {
    for (var e = 0, f = a.length, g; e < f && (g = a[e]); e++) {
      var h;
      if ((h = g.nodeType === Node.ELEMENT_NODE)) {
        h = g;
        var k = b,
          m = c,
          n = d,
          r = k(h);
        r && n.push(h);
        m && m(r) ? (h = r) : (id(h.childNodes, k, m, n), (h = void 0));
      }
      if (h) break;
    }
  }
  var jd = null;
  function kd(a, b, c) {
    jd || (jd = window.ShadyCSS && window.ShadyCSS.ScopingShim);
    jd && "class" === b
      ? jd.setElementClass(a, c)
      : (D.setAttribute.call(a, b, c), dd(a, b));
  }
  function ld(a, b) {
    if (a.ownerDocument !== document) return D.importNode.call(document, a, b);
    var c = D.importNode.call(document, a, !1);
    if (b) {
      a = a.childNodes;
      b = 0;
      for (var d; b < a.length; b++) (d = ld(a[b], !0)), c.appendChild(d);
    }
    return c;
  }
  var md = "__eventWrappers" + Date.now(),
    nd = {
      blur: !0,
      focus: !0,
      focusin: !0,
      focusout: !0,
      click: !0,
      dblclick: !0,
      mousedown: !0,
      mouseenter: !0,
      mouseleave: !0,
      mousemove: !0,
      mouseout: !0,
      mouseover: !0,
      mouseup: !0,
      wheel: !0,
      beforeinput: !0,
      input: !0,
      keydown: !0,
      keyup: !0,
      compositionstart: !0,
      compositionupdate: !0,
      compositionend: !0,
      touchstart: !0,
      touchend: !0,
      touchmove: !0,
      touchcancel: !0,
      pointerover: !0,
      pointerenter: !0,
      pointerdown: !0,
      pointermove: !0,
      pointerup: !0,
      pointercancel: !0,
      pointerout: !0,
      pointerleave: !0,
      gotpointercapture: !0,
      lostpointercapture: !0,
      dragstart: !0,
      drag: !0,
      dragenter: !0,
      dragleave: !0,
      dragover: !0,
      drop: !0,
      dragend: !0,
      DOMActivate: !0,
      DOMFocusIn: !0,
      DOMFocusOut: !0,
      keypress: !0,
    };
  function od(a, b) {
    var c = [],
      d = a;
    for (a = a === window ? window : a.getRootNode(); d; )
      c.push(d),
        (d = d.assignedSlot
          ? d.assignedSlot
          : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
            d.host &&
            (b || d !== a)
          ? d.host
          : d.parentNode);
    c[c.length - 1] === document && c.push(window);
    return c;
  }
  function pd(a, b) {
    if (!C) return a;
    a = od(a, !0);
    for (var c = 0, d, e, f, g; c < b.length; c++)
      if (
        ((d = b[c]),
        (f = d === window ? window : d.getRootNode()),
        f !== e && ((g = a.indexOf(f)), (e = f)),
        !C(f) || -1 < g)
      )
        return d;
  }
  var qd = {
    get composed() {
      !1 !== this.isTrusted && void 0 === this.ha && (this.ha = nd[this.type]);
      return this.ha || !1;
    },
    composedPath: function () {
      this.ta || (this.ta = od(this.__target, this.composed));
      return this.ta;
    },
    get target() {
      return pd(this.currentTarget, this.composedPath());
    },
    get relatedTarget() {
      if (!this.ja) return null;
      this.wa || (this.wa = od(this.ja, !0));
      return pd(this.currentTarget, this.wa);
    },
    stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);
      this.ia = !0;
    },
    stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);
      this.ia = this.Ha = !0;
    },
  };
  function rd(a) {
    function b(b, d) {
      b = new a(b, d);
      b.ha = d && !!d.composed;
      return b;
    }
    Ab(b, a);
    b.prototype = a.prototype;
    return b;
  }
  var sd = { focus: !0, blur: !0 };
  function td(a) {
    return a.__target !== a.target || a.ja !== a.relatedTarget;
  }
  function ud(a, b, c) {
    if ((c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]))
      for (
        var d = 0, e;
        (e = c[d]) &&
        (!td(a) || a.target !== a.relatedTarget) &&
        (e.call(b, a), !a.Ha);
        d++
      );
  }
  function vd(a) {
    var b = a.composedPath();
    Object.defineProperty(a, "currentTarget", {
      get: function () {
        return d;
      },
      configurable: !0,
    });
    for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c];
      ud(a, d, "capture");
      if (a.ia) return;
    }
    Object.defineProperty(a, "eventPhase", {
      get: function () {
        return Event.AT_TARGET;
      },
    });
    var e;
    for (c = 0; c < b.length; c++) {
      d = b[c];
      var f = A(d);
      f = f && f.root;
      if (0 === c || (f && f === e))
        if ((ud(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.ia))
          break;
    }
  }
  function wd(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
        k = h.type,
        m = h.capture,
        n = h.once,
        r = h.passive;
      if (b === h.node && c === k && d === m && e === n && f === r) return g;
    }
    return -1;
  }
  function xd(a, b, c) {
    if (b) {
      var d = typeof b;
      if ("function" === d || "object" === d)
        if (
          "object" !== d ||
          (b.handleEvent && "function" === typeof b.handleEvent)
        ) {
          if (c && "object" === typeof c) {
            var e = !!c.capture;
            var f = !!c.once;
            var g = !!c.passive;
          } else (e = !!c), (g = f = !1);
          var h = (c && c.la) || this,
            k = b[md];
          if (k) {
            if (-1 < wd(k, h, a, e, f, g)) return;
          } else b[md] = [];
          k = function (e) {
            f && this.removeEventListener(a, b, c);
            e.__target || yd(e);
            if (h !== this) {
              var g = Object.getOwnPropertyDescriptor(e, "currentTarget");
              Object.defineProperty(e, "currentTarget", {
                get: function () {
                  return h;
                },
                configurable: !0,
              });
            }
            if (e.composed || -1 < e.composedPath().indexOf(h))
              if (td(e) && e.target === e.relatedTarget)
                e.eventPhase === Event.BUBBLING_PHASE &&
                  e.stopImmediatePropagation();
              else if (
                e.eventPhase === Event.CAPTURING_PHASE ||
                e.bubbles ||
                e.target === h ||
                h instanceof Window
              ) {
                var k =
                  "function" === d
                    ? b.call(h, e)
                    : b.handleEvent && b.handleEvent(e);
                h !== this &&
                  (g
                    ? (Object.defineProperty(e, "currentTarget", g), (g = null))
                    : delete e.currentTarget);
                return k;
              }
          };
          b[md].push({
            node: h,
            type: a,
            capture: e,
            once: f,
            passive: g,
            gb: k,
          });
          sd[a]
            ? ((this.__handlers = this.__handlers || {}),
              (this.__handlers[a] = this.__handlers[a] || {
                capture: [],
                bubble: [],
              }),
              this.__handlers[a][e ? "capture" : "bubble"].push(k))
            : (this instanceof Window ? D.eb : D.addEventListener).call(
                this,
                a,
                k,
                c
              );
        }
    }
  }
  function zd(a, b, c) {
    if (b) {
      if (c && "object" === typeof c) {
        var d = !!c.capture;
        var e = !!c.once;
        var f = !!c.passive;
      } else (d = !!c), (f = e = !1);
      var g = (c && c.la) || this,
        h = void 0;
      var k = null;
      try {
        k = b[md];
      } catch (m) {}
      k &&
        ((e = wd(k, g, a, d, e, f)),
        -1 < e && ((h = k.splice(e, 1)[0].gb), k.length || (b[md] = void 0)));
      (this instanceof Window ? D.fb : D.removeEventListener).call(
        this,
        a,
        h || b,
        c
      );
      h &&
        sd[a] &&
        this.__handlers &&
        this.__handlers[a] &&
        ((a = this.__handlers[a][d ? "capture" : "bubble"]),
        (h = a.indexOf(h)),
        -1 < h && a.splice(h, 1));
    }
  }
  function Ad() {
    for (var a in sd)
      window.addEventListener(
        a,
        function (a) {
          a.__target || (yd(a), vd(a));
        },
        !0
      );
  }
  function yd(a) {
    a.__target = a.target;
    a.ja = a.relatedTarget;
    if (B.I) {
      var b = Object.getPrototypeOf(a);
      if (!b.hasOwnProperty("__patchProto")) {
        var c = Object.create(b);
        c.ib = b;
        yb(c, qd);
        b.__patchProto = c;
      }
      a.__proto__ = b.__patchProto;
    } else yb(a, qd);
  }
  var Bd = rd(window.Event),
    Cd = rd(window.CustomEvent),
    Dd = rd(window.MouseEvent);
  function Ed(a, b) {
    return { index: a, W: [], ba: b };
  }
  function Fd(a, b, c, d) {
    var e = 0,
      f = 0,
      g = 0,
      h = 0,
      k = Math.min(b - e, d - f);
    if (0 == e && 0 == f)
      a: {
        for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
        g = k;
      }
    if (b == a.length && d == c.length) {
      h = a.length;
      for (var m = c.length, n = 0; n < k - g && Gd(a[--h], c[--m]); ) n++;
      h = n;
    }
    e += g;
    f += g;
    b -= h;
    d -= h;
    if (0 == b - e && 0 == d - f) return [];
    if (e == b) {
      for (b = Ed(e, 0); f < d; ) b.W.push(c[f++]);
      return [b];
    }
    if (f == d) return [Ed(e, b - e)];
    k = e;
    g = f;
    d = d - g + 1;
    h = b - k + 1;
    b = Array(d);
    for (m = 0; m < d; m++) (b[m] = Array(h)), (b[m][0] = m);
    for (m = 0; m < h; m++) b[0][m] = m;
    for (m = 1; m < d; m++)
      for (n = 1; n < h; n++)
        if (a[k + n - 1] === c[g + m - 1]) b[m][n] = b[m - 1][n - 1];
        else {
          var r = b[m - 1][n] + 1,
            G = b[m][n - 1] + 1;
          b[m][n] = r < G ? r : G;
        }
    k = b.length - 1;
    g = b[0].length - 1;
    d = b[k][g];
    for (a = []; 0 < k || 0 < g; )
      0 == k
        ? (a.push(2), g--)
        : 0 == g
        ? (a.push(3), k--)
        : ((h = b[k - 1][g - 1]),
          (m = b[k - 1][g]),
          (n = b[k][g - 1]),
          (r = m < n ? (m < h ? m : h) : n < h ? n : h),
          r == h
            ? (h == d ? a.push(0) : (a.push(1), (d = h)), k--, g--)
            : r == m
            ? (a.push(3), k--, (d = m))
            : (a.push(2), g--, (d = n)));
    a.reverse();
    b = void 0;
    k = [];
    for (g = 0; g < a.length; g++)
      switch (a[g]) {
        case 0:
          b && (k.push(b), (b = void 0));
          e++;
          f++;
          break;
        case 1:
          b || (b = Ed(e, 0));
          b.ba++;
          e++;
          b.W.push(c[f]);
          f++;
          break;
        case 2:
          b || (b = Ed(e, 0));
          b.ba++;
          e++;
          break;
        case 3:
          b || (b = Ed(e, 0)), b.W.push(c[f]), f++;
      }
    b && k.push(b);
    return k;
  }
  function Gd(a, b) {
    return a === b;
  }
  var bd = M.parentNode,
    Hd = M.childNodes,
    Id = {};
  function Jd(a) {
    var b = [];
    do b.unshift(a);
    while ((a = a.parentNode));
    return b;
  }
  function Nc(a, b, c) {
    if (a !== Id) throw new TypeError("Illegal constructor");
    this.Oa = "ShadyRoot";
    a = Hd(b);
    this.host = b;
    this.b = c && c.mode;
    Sc(b, a);
    c = A(b);
    c.root = this;
    c.Da = "closed" !== this.b ? this : null;
    c = z(this);
    c.firstChild =
      c.lastChild =
      c.parentNode =
      c.nextSibling =
      c.previousSibling =
        null;
    c.childNodes = [];
    this.aa = !1;
    this.a = this.w = this.m = null;
    c = 0;
    for (var d = a.length; c < d; c++) D.removeChild.call(b, a[c]);
  }
  function Wc(a) {
    a.aa ||
      ((a.aa = !0),
      Jb(function () {
        return Kd(a);
      }));
  }
  function Kd(a) {
    for (var b; a; ) {
      a.aa && (b = a);
      a: {
        var c = a;
        a = c.host.getRootNode();
        if (C(a))
          for (var d = c.host.childNodes, e = 0; e < d.length; e++)
            if (((c = d[e]), "slot" == c.localName)) break a;
        a = void 0;
      }
    }
    b && b._renderRoot();
  }
  Nc.prototype._renderRoot = function () {
    this.aa = !1;
    if (this.m) {
      ad(this);
      for (var a = 0, b; a < this.m.length; a++) {
        b = this.m[a];
        var c = A(b),
          d = c.assignedNodes;
        c.assignedNodes = [];
        c.L = [];
        if ((c.pa = d))
          for (c = 0; c < d.length; c++) {
            var e = A(d[c]);
            e.Z = e.assignedSlot;
            e.assignedSlot === b && (e.assignedSlot = null);
          }
      }
      for (b = this.host.firstChild; b; b = b.nextSibling) Ld(this, b);
      for (a = 0; a < this.m.length; a++) {
        b = this.m[a];
        d = A(b);
        if (!d.assignedNodes.length)
          for (c = b.firstChild; c; c = c.nextSibling) Ld(this, c, b);
        (c = (c = A(b.parentNode)) && c.root) && cd(c) && c._renderRoot();
        Md(this, d.L, d.assignedNodes);
        if ((c = d.pa)) {
          for (e = 0; e < c.length; e++) A(c[e]).Z = null;
          d.pa = null;
          c.length > d.assignedNodes.length && (d.da = !0);
        }
        d.da && ((d.da = !1), Nd(this, b));
      }
      a = this.m;
      b = [];
      for (d = 0; d < a.length; d++)
        (c = a[d].parentNode),
          ((e = A(c)) && e.root) || !(0 > b.indexOf(c)) || b.push(c);
      for (a = 0; a < b.length; a++) {
        d = b[a];
        c = d === this ? this.host : d;
        e = [];
        d = d.childNodes;
        for (var f = 0; f < d.length; f++) {
          var g = d[f];
          if ("slot" == g.localName) {
            g = A(g).L;
            for (var h = 0; h < g.length; h++) e.push(g[h]);
          } else e.push(g);
        }
        d = void 0;
        f = Hd(c);
        g = Fd(e, e.length, f, f.length);
        for (var k = (h = 0); h < g.length && (d = g[h]); h++) {
          for (var m = 0, n; m < d.W.length && (n = d.W[m]); m++)
            bd(n) === c && D.removeChild.call(c, n), f.splice(d.index + k, 1);
          k -= d.ba;
        }
        for (k = 0; k < g.length && (d = g[k]); k++)
          for (h = f[d.index], m = d.index; m < d.index + d.ba; m++)
            (n = e[m]), D.insertBefore.call(c, n, h), f.splice(m, 0, n);
      }
    }
  };
  function Ld(a, b, c) {
    var d = z(b),
      e = d.Z;
    d.Z = null;
    c || (c = (a = a.w[b.slot || "__catchall"]) && a[0]);
    c
      ? (z(c).assignedNodes.push(b), (d.assignedSlot = c))
      : (d.assignedSlot = void 0);
    e !== d.assignedSlot && d.assignedSlot && (z(d.assignedSlot).da = !0);
  }
  function Md(a, b, c) {
    for (var d = 0, e; d < c.length && (e = c[d]); d++)
      if ("slot" == e.localName) {
        var f = A(e).assignedNodes;
        f && f.length && Md(a, b, f);
      } else b.push(c[d]);
  }
  function Nd(a, b) {
    D.dispatchEvent.call(b, new Event("slotchange"));
    b = A(b);
    b.assignedSlot && Nd(a, b.assignedSlot);
  }
  function ad(a) {
    if (a.a && a.a.length) {
      for (var b = a.a, c, d = 0; d < b.length; d++) {
        var e = b[d];
        Sc(e);
        Sc(e.parentNode);
        var f = ed(e);
        a.w[f] ? ((c = c || {}), (c[f] = !0), a.w[f].push(e)) : (a.w[f] = [e]);
        a.m.push(e);
      }
      if (c) for (var g in c) a.w[g] = fd(a.w[g]);
      a.a = [];
    }
  }
  function ed(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";
    return (a.Ja = b);
  }
  function fd(a) {
    return a.sort(function (a, c) {
      a = Jd(a);
      for (var b = Jd(c), e = 0; e < a.length; e++) {
        c = a[e];
        var f = b[e];
        if (c !== f)
          return (
            (a = Array.from(c.parentNode.childNodes)),
            a.indexOf(c) - a.indexOf(f)
          );
      }
    });
  }
  function cd(a) {
    ad(a);
    return !(!a.m || !a.m.length);
  }
  function Od(a) {
    var b = a.getRootNode();
    C(b) && Kd(b);
    return ((a = A(a)) && a.assignedSlot) || null;
  }
  var Pd = {
      addEventListener: xd.bind(window),
      removeEventListener: zd.bind(window),
    },
    Qd = {
      addEventListener: xd,
      removeEventListener: zd,
      appendChild: function (a) {
        return Uc(this, a);
      },
      insertBefore: function (a, b) {
        return Uc(this, a, b);
      },
      removeChild: function (a) {
        return Vc(this, a);
      },
      replaceChild: function (a, b) {
        Uc(this, a, b);
        Vc(this, b);
        return a;
      },
      cloneNode: function (a) {
        if ("template" == this.localName) var b = D.cloneNode.call(this, a);
        else if (((b = D.cloneNode.call(this, !1)), a)) {
          a = this.childNodes;
          for (var c = 0, d; c < a.length; c++)
            (d = a[c].cloneNode(!0)), b.appendChild(d);
        }
        return b;
      },
      getRootNode: function () {
        return gd(this);
      },
      contains: function (a) {
        return Gb(this, a);
      },
      dispatchEvent: function (a) {
        Kb();
        return D.dispatchEvent.call(this, a);
      },
    };
  Object.defineProperties(Qd, {
    isConnected: {
      get: function () {
        if (Ac && Ac.call(this)) return !0;
        if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
        var a = this.ownerDocument;
        if (Fb) {
          if (D.contains.call(a, this)) return !0;
        } else if (
          a.documentElement &&
          D.contains.call(a.documentElement, this)
        )
          return !0;
        for (a = this; a && !(a instanceof Document); )
          a = a.parentNode || (C(a) ? a.host : void 0);
        return !!(a && a instanceof Document);
      },
      configurable: !0,
    },
  });
  var Rd = {
      get assignedSlot() {
        return Od(this);
      },
    },
    Sd = {
      querySelector: function (a) {
        return (
          hd(
            this,
            function (b) {
              return xb.call(b, a);
            },
            function (a) {
              return !!a;
            }
          )[0] || null
        );
      },
      querySelectorAll: function (a, b) {
        if (b) {
          b = Array.prototype.slice.call(D.querySelectorAll(this, a));
          var c = this.getRootNode();
          return b.filter(function (a) {
            return a.getRootNode() == c;
          });
        }
        return hd(this, function (b) {
          return xb.call(b, a);
        });
      },
    },
    Td = {
      assignedNodes: function (a) {
        if ("slot" === this.localName) {
          var b = this.getRootNode();
          C(b) && Kd(b);
          return (b = A(this))
            ? (a && a.flatten ? b.L : b.assignedNodes) || []
            : [];
        }
      },
    },
    Ud = zb(
      {
        setAttribute: function (a, b) {
          kd(this, a, b);
        },
        removeAttribute: function (a) {
          D.removeAttribute.call(this, a);
          dd(this, a);
        },
        attachShadow: function (a) {
          if (!this) throw "Must provide a host.";
          if (!a) throw "Not enough arguments.";
          return new Nc(Id, this, a);
        },
        get slot() {
          return this.getAttribute("slot");
        },
        set slot(a) {
          kd(this, "slot", a);
        },
        get assignedSlot() {
          return Od(this);
        },
      },
      Sd,
      Td
    );
  Object.defineProperties(Ud, Jc);
  var Vd = zb(
    {
      importNode: function (a, b) {
        return ld(a, b);
      },
      getElementById: function (a) {
        return (
          hd(
            this,
            function (b) {
              return b.id == a;
            },
            function (a) {
              return !!a;
            }
          )[0] || null
        );
      },
    },
    Sd
  );
  Object.defineProperties(Vd, { _activeElement: Kc.activeElement });
  var Wd = HTMLElement.prototype.blur,
    Xd = zb({
      blur: function () {
        var a = A(this);
        (a = (a = a && a.root) && a.activeElement) ? a.blur() : Wd.call(this);
      },
    }),
    Yd = {
      addEventListener: function (a, b, c) {
        "object" !== typeof c && (c = { capture: !!c });
        c.la = this;
        this.host.addEventListener(a, b, c);
      },
      removeEventListener: function (a, b, c) {
        "object" !== typeof c && (c = { capture: !!c });
        c.la = this;
        this.host.removeEventListener(a, b, c);
      },
      getElementById: function (a) {
        return (
          hd(
            this,
            function (b) {
              return b.id == a;
            },
            function (a) {
              return !!a;
            }
          )[0] || null
        );
      },
    };
  function Zd(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
      var e = c[d],
        f = Object.getOwnPropertyDescriptor(b, e);
      f.value ? (a[e] = f.value) : Object.defineProperty(a, e, f);
    }
  }
  if (B.Ba) {
    var ShadyDOM = {
      inUse: B.Ba,
      patch: function (a) {
        Pc(a);
        Oc(a);
        return a;
      },
      isShadyRoot: C,
      enqueue: Jb,
      flush: Kb,
      settings: B,
      filterMutations: Qb,
      observeChildren: Ob,
      unobserveChildren: Pb,
      nativeMethods: D,
      nativeTree: M,
    };
    window.ShadyDOM = ShadyDOM;
    window.Event = Bd;
    window.CustomEvent = Cd;
    window.MouseEvent = Dd;
    Ad();
    var $d =
      (window.customElements && window.customElements.nativeHTMLElement) ||
      HTMLElement;
    Zd(Nc.prototype, Yd);
    Zd(window.Node.prototype, Qd);
    Zd(window.Window.prototype, Pd);
    Zd(window.Text.prototype, Rd);
    Zd(window.DocumentFragment.prototype, Sd);
    Zd(window.Element.prototype, Ud);
    Zd(window.Document.prototype, Vd);
    window.HTMLSlotElement && Zd(window.HTMLSlotElement.prototype, Td);
    Zd($d.prototype, Xd);
    B.I &&
      (Lc(window.Node.prototype),
      Lc(window.Text.prototype),
      Lc(window.DocumentFragment.prototype),
      Lc(window.Element.prototype),
      Lc($d.prototype),
      Lc(window.Document.prototype),
      window.HTMLSlotElement && Lc(window.HTMLSlotElement.prototype));
    Mc();
    window.ShadowRoot = Nc;
  }
  var ae = new Set(
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(
      " "
    )
  );
  function be(a) {
    var b = ae.has(a);
    a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  function O(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
      a =
        a.parentNode ||
        (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function ce(a, b) {
    for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function de(a, b, c) {
    c = void 0 === c ? new Set() : c;
    for (var d = a; d; ) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        var e = d;
        b(e);
        var f = e.localName;
        if ("link" === f && "import" === e.getAttribute("rel")) {
          d = e.import;
          if (d instanceof Node && !c.has(d))
            for (c.add(d), d = d.firstChild; d; d = d.nextSibling) de(d, b, c);
          d = ce(a, e);
          continue;
        } else if ("template" === f) {
          d = ce(a, e);
          continue;
        }
        if ((e = e.__CE_shadowRoot))
          for (e = e.firstChild; e; e = e.nextSibling) de(e, b, c);
      }
      d = d.firstChild ? d.firstChild : ce(a, d);
    }
  }
  function P(a, b, c) {
    a[b] = c;
  }
  function ee() {
    this.a = new Map();
    this.M = new Map();
    this.F = [];
    this.c = !1;
  }
  function fe(a, b, c) {
    a.a.set(b, c);
    a.M.set(c.constructor, c);
  }
  function ge(a, b) {
    a.c = !0;
    a.F.push(b);
  }
  function he(a, b) {
    a.c &&
      de(b, function (b) {
        return a.b(b);
      });
  }
  ee.prototype.b = function (a) {
    if (this.c && !a.__CE_patched) {
      a.__CE_patched = !0;
      for (var b = 0; b < this.F.length; b++) this.F[b](a);
    }
  };
  function Q(a, b) {
    var c = [];
    de(b, function (a) {
      return c.push(a);
    });
    for (b = 0; b < c.length; b++) {
      var d = c[b];
      1 === d.__CE_state ? a.connectedCallback(d) : ie(a, d);
    }
  }
  function R(a, b) {
    var c = [];
    de(b, function (a) {
      return c.push(a);
    });
    for (b = 0; b < c.length; b++) {
      var d = c[b];
      1 === d.__CE_state && a.disconnectedCallback(d);
    }
  }
  function je(a, b, c) {
    c = void 0 === c ? {} : c;
    var d = c.bb || new Set(),
      e =
        c.ga ||
        function (b) {
          return ie(a, b);
        },
      f = [];
    de(
      b,
      function (b) {
        if ("link" === b.localName && "import" === b.getAttribute("rel")) {
          var c = b.import;
          c instanceof Node &&
            ((c.__CE_isImportDocument = !0), (c.__CE_hasRegistry = !0));
          c && "complete" === c.readyState
            ? (c.__CE_documentLoadHandled = !0)
            : b.addEventListener("load", function () {
                var c = b.import;
                if (!c.__CE_documentLoadHandled) {
                  c.__CE_documentLoadHandled = !0;
                  var f = new Set(d);
                  f.delete(c);
                  je(a, c, { bb: f, ga: e });
                }
              });
        } else f.push(b);
      },
      d
    );
    if (a.c) for (b = 0; b < f.length; b++) a.b(f[b]);
    for (b = 0; b < f.length; b++) e(f[b]);
  }
  function ie(a, b) {
    if (void 0 === b.__CE_state) {
      var c = b.ownerDocument;
      if (c.defaultView || (c.__CE_isImportDocument && c.__CE_hasRegistry))
        if ((c = a.a.get(b.localName))) {
          c.constructionStack.push(b);
          var d = c.constructor;
          try {
            try {
              if (new d() !== b)
                throw Error(
                  "The custom element constructor did not produce the element being upgraded."
                );
            } finally {
              c.constructionStack.pop();
            }
          } catch (g) {
            throw ((b.__CE_state = 2), g);
          }
          b.__CE_state = 1;
          b.__CE_definition = c;
          if (c.attributeChangedCallback)
            for (c = c.observedAttributes, d = 0; d < c.length; d++) {
              var e = c[d],
                f = b.getAttribute(e);
              null !== f && a.attributeChangedCallback(b, e, null, f, null);
            }
          O(b) && a.connectedCallback(b);
        }
    }
  }
  ee.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;
    b.connectedCallback && b.connectedCallback.call(a);
  };
  ee.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;
    b.disconnectedCallback && b.disconnectedCallback.call(a);
  };
  ee.prototype.attributeChangedCallback = function (a, b, c, d, e) {
    var f = a.__CE_definition;
    f.attributeChangedCallback &&
      -1 < f.observedAttributes.indexOf(b) &&
      f.attributeChangedCallback.call(a, b, c, d, e);
  };
  function ke(a) {
    var b = document;
    this.A = a;
    this.a = b;
    this.P = void 0;
    je(this.A, this.a);
    "loading" === this.a.readyState &&
      ((this.P = new MutationObserver(this.b.bind(this))),
      this.P.observe(this.a, { childList: !0, subtree: !0 }));
  }
  function le(a) {
    a.P && a.P.disconnect();
  }
  ke.prototype.b = function (a) {
    var b = this.a.readyState;
    ("interactive" !== b && "complete" !== b) || le(this);
    for (b = 0; b < a.length; b++)
      for (var c = a[b].addedNodes, d = 0; d < c.length; d++) je(this.A, c[d]);
  };
  function me() {
    var a = this;
    this.b = this.a = void 0;
    this.c = new Promise(function (b) {
      a.b = b;
      a.a && b(a.a);
    });
  }
  me.prototype.resolve = function (a) {
    if (this.a) throw Error("Already resolved.");
    this.a = a;
    this.b && this.b(a);
  };
  function S(a) {
    this.ma = !1;
    this.A = a;
    this.ra = new Map();
    this.na = function (a) {
      return a();
    };
    this.Y = !1;
    this.oa = [];
    this.Ma = new ke(a);
  }
  q = S.prototype;
  q.define = function (a, b) {
    var c = this;
    if (!(b instanceof Function))
      throw new TypeError("Custom element constructors must be functions.");
    if (!be(a))
      throw new SyntaxError("The element name '" + a + "' is not valid.");
    if (this.A.a.get(a))
      throw Error(
        "A custom element with name '" + a + "' has already been defined."
      );
    if (this.ma) throw Error("A custom element is already being defined.");
    this.ma = !0;
    try {
      var d = function (a) {
          var b = e[a];
          if (void 0 !== b && !(b instanceof Function))
            throw Error("The '" + a + "' callback must be a function.");
          return b;
        },
        e = b.prototype;
      if (!(e instanceof Object))
        throw new TypeError(
          "The custom element constructor's prototype is not an object."
        );
      var f = d("connectedCallback");
      var g = d("disconnectedCallback");
      var h = d("adoptedCallback");
      var k = d("attributeChangedCallback");
      var m = b.observedAttributes || [];
    } catch (n) {
      return;
    } finally {
      this.ma = !1;
    }
    b = {
      localName: a,
      constructor: b,
      connectedCallback: f,
      disconnectedCallback: g,
      adoptedCallback: h,
      attributeChangedCallback: k,
      observedAttributes: m,
      constructionStack: [],
    };
    fe(this.A, a, b);
    this.oa.push(b);
    this.Y ||
      ((this.Y = !0),
      this.na(function () {
        return ne(c);
      }));
  };
  q.ga = function (a) {
    je(this.A, a);
  };
  function ne(a) {
    if (!1 !== a.Y) {
      a.Y = !1;
      for (var b = a.oa, c = [], d = new Map(), e = 0; e < b.length; e++)
        d.set(b[e].localName, []);
      je(a.A, document, {
        ga: function (b) {
          if (void 0 === b.__CE_state) {
            var e = b.localName,
              f = d.get(e);
            f ? f.push(b) : a.A.a.get(e) && c.push(b);
          }
        },
      });
      for (e = 0; e < c.length; e++) ie(a.A, c[e]);
      for (; 0 < b.length; ) {
        var f = b.shift();
        e = f.localName;
        f = d.get(f.localName);
        for (var g = 0; g < f.length; g++) ie(a.A, f[g]);
        (e = a.ra.get(e)) && e.resolve(void 0);
      }
    }
  }
  q.get = function (a) {
    if ((a = this.A.a.get(a))) return a.constructor;
  };
  q.whenDefined = function (a) {
    if (!be(a))
      return Promise.reject(
        new SyntaxError("'" + a + "' is not a valid custom element name.")
      );
    var b = this.ra.get(a);
    if (b) return b.c;
    b = new me();
    this.ra.set(a, b);
    this.A.a.get(a) &&
      !this.oa.some(function (b) {
        return b.localName === a;
      }) &&
      b.resolve(void 0);
    return b.c;
  };
  q.Xa = function (a) {
    le(this.Ma);
    var b = this.na;
    this.na = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };
  window.CustomElementRegistry = S;
  S.prototype.define = S.prototype.define;
  S.prototype.upgrade = S.prototype.ga;
  S.prototype.get = S.prototype.get;
  S.prototype.whenDefined = S.prototype.whenDefined;
  S.prototype.polyfillWrapFlushCallback = S.prototype.Xa;
  var oe = window.Document.prototype.createElement,
    pe = window.Document.prototype.createElementNS,
    qe = window.Document.prototype.importNode,
    re = window.Document.prototype.prepend,
    se = window.Document.prototype.append,
    te = window.DocumentFragment.prototype.prepend,
    ue = window.DocumentFragment.prototype.append,
    ve = window.Node.prototype.cloneNode,
    we = window.Node.prototype.appendChild,
    xe = window.Node.prototype.insertBefore,
    ye = window.Node.prototype.removeChild,
    ze = window.Node.prototype.replaceChild,
    Ae = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
    Be = window.Element.prototype.attachShadow,
    Ce = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
    De = window.Element.prototype.getAttribute,
    Ee = window.Element.prototype.setAttribute,
    Fe = window.Element.prototype.removeAttribute,
    Ge = window.Element.prototype.getAttributeNS,
    He = window.Element.prototype.setAttributeNS,
    Ie = window.Element.prototype.removeAttributeNS,
    Je = window.Element.prototype.insertAdjacentElement,
    Ke = window.Element.prototype.insertAdjacentHTML,
    Le = window.Element.prototype.prepend,
    Me = window.Element.prototype.append,
    Ne = window.Element.prototype.before,
    Oe = window.Element.prototype.after,
    Pe = window.Element.prototype.replaceWith,
    Qe = window.Element.prototype.remove,
    Re = window.HTMLElement,
    Se = Object.getOwnPropertyDescriptor(
      window.HTMLElement.prototype,
      "innerHTML"
    ),
    Te = window.HTMLElement.prototype.insertAdjacentElement,
    Ue = window.HTMLElement.prototype.insertAdjacentHTML;
  var Ve = new (function () {})();
  function We() {
    var a = Xe;
    window.HTMLElement = (function () {
      function b() {
        var b = this.constructor,
          d = a.M.get(b);
        if (!d)
          throw Error(
            "The custom element being constructed was not registered with `customElements`."
          );
        var e = d.constructionStack;
        if (0 === e.length)
          return (
            (e = oe.call(document, d.localName)),
            Object.setPrototypeOf(e, b.prototype),
            (e.__CE_state = 1),
            (e.__CE_definition = d),
            a.b(e),
            e
          );
        d = e.length - 1;
        var f = e[d];
        if (f === Ve)
          throw Error(
            "The HTMLElement constructor was either called reentrantly for this constructor or called multiple times."
          );
        e[d] = Ve;
        Object.setPrototypeOf(f, b.prototype);
        a.b(f);
        return f;
      }
      b.prototype = Re.prototype;
      return b;
    })();
  }
  function Ye(a, b, c) {
    function d(b) {
      return function (c) {
        for (var d = [], e = 0; e < arguments.length; ++e)
          d[e - 0] = arguments[e];
        e = [];
        for (var f = [], m = 0; m < d.length; m++) {
          var n = d[m];
          n instanceof Element && O(n) && f.push(n);
          if (n instanceof DocumentFragment)
            for (n = n.firstChild; n; n = n.nextSibling) e.push(n);
          else e.push(n);
        }
        b.apply(this, d);
        for (d = 0; d < f.length; d++) R(a, f[d]);
        if (O(this))
          for (d = 0; d < e.length; d++)
            (f = e[d]), f instanceof Element && Q(a, f);
      };
    }
    void 0 !== c.fa && (b.prepend = d(c.fa));
    void 0 !== c.append && (b.append = d(c.append));
  }
  function Ze() {
    var a = Xe;
    P(Document.prototype, "createElement", function (b) {
      if (this.__CE_hasRegistry) {
        var c = a.a.get(b);
        if (c) return new c.constructor();
      }
      b = oe.call(this, b);
      a.b(b);
      return b;
    });
    P(Document.prototype, "importNode", function (b, c) {
      b = qe.call(this, b, c);
      this.__CE_hasRegistry ? je(a, b) : he(a, b);
      return b;
    });
    P(Document.prototype, "createElementNS", function (b, c) {
      if (
        this.__CE_hasRegistry &&
        (null === b || "http://www.w3.org/1999/xhtml" === b)
      ) {
        var d = a.a.get(c);
        if (d) return new d.constructor();
      }
      b = pe.call(this, b, c);
      a.b(b);
      return b;
    });
    Ye(a, Document.prototype, { fa: re, append: se });
  }
  function $e() {
    var a = Xe;
    function b(b, d) {
      Object.defineProperty(b, "textContent", {
        enumerable: d.enumerable,
        configurable: !0,
        get: d.get,
        set: function (b) {
          if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b);
          else {
            var c = void 0;
            if (this.firstChild) {
              var e = this.childNodes,
                h = e.length;
              if (0 < h && O(this)) {
                c = Array(h);
                for (var k = 0; k < h; k++) c[k] = e[k];
              }
            }
            d.set.call(this, b);
            if (c) for (b = 0; b < c.length; b++) R(a, c[b]);
          }
        },
      });
    }
    P(Node.prototype, "insertBefore", function (b, d) {
      if (b instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(b.childNodes);
        b = xe.call(this, b, d);
        if (O(this)) for (d = 0; d < c.length; d++) Q(a, c[d]);
        return b;
      }
      c = O(b);
      d = xe.call(this, b, d);
      c && R(a, b);
      O(this) && Q(a, b);
      return d;
    });
    P(Node.prototype, "appendChild", function (b) {
      if (b instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(b.childNodes);
        b = we.call(this, b);
        if (O(this)) for (var e = 0; e < c.length; e++) Q(a, c[e]);
        return b;
      }
      c = O(b);
      e = we.call(this, b);
      c && R(a, b);
      O(this) && Q(a, b);
      return e;
    });
    P(Node.prototype, "cloneNode", function (b) {
      b = ve.call(this, b);
      this.ownerDocument.__CE_hasRegistry ? je(a, b) : he(a, b);
      return b;
    });
    P(Node.prototype, "removeChild", function (b) {
      var c = O(b),
        e = ye.call(this, b);
      c && R(a, b);
      return e;
    });
    P(Node.prototype, "replaceChild", function (b, d) {
      if (b instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(b.childNodes);
        b = ze.call(this, b, d);
        if (O(this)) for (R(a, d), d = 0; d < c.length; d++) Q(a, c[d]);
        return b;
      }
      c = O(b);
      var f = ze.call(this, b, d),
        g = O(this);
      g && R(a, d);
      c && R(a, b);
      g && Q(a, b);
      return f;
    });
    Ae && Ae.get
      ? b(Node.prototype, Ae)
      : ge(a, function (a) {
          b(a, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              for (var a = [], b = 0; b < this.childNodes.length; b++)
                a.push(this.childNodes[b].textContent);
              return a.join("");
            },
            set: function (a) {
              for (; this.firstChild; ) ye.call(this, this.firstChild);
              we.call(this, document.createTextNode(a));
            },
          });
        });
  }
  function af(a) {
    var b = Element.prototype;
    function c(b) {
      return function (c) {
        for (var d = [], e = 0; e < arguments.length; ++e)
          d[e - 0] = arguments[e];
        e = [];
        for (var h = [], k = 0; k < d.length; k++) {
          var m = d[k];
          m instanceof Element && O(m) && h.push(m);
          if (m instanceof DocumentFragment)
            for (m = m.firstChild; m; m = m.nextSibling) e.push(m);
          else e.push(m);
        }
        b.apply(this, d);
        for (d = 0; d < h.length; d++) R(a, h[d]);
        if (O(this))
          for (d = 0; d < e.length; d++)
            (h = e[d]), h instanceof Element && Q(a, h);
      };
    }
    void 0 !== Ne && (b.before = c(Ne));
    void 0 !== Ne && (b.after = c(Oe));
    void 0 !== Pe &&
      P(b, "replaceWith", function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d)
          c[d - 0] = arguments[d];
        d = [];
        for (var g = [], h = 0; h < c.length; h++) {
          var k = c[h];
          k instanceof Element && O(k) && g.push(k);
          if (k instanceof DocumentFragment)
            for (k = k.firstChild; k; k = k.nextSibling) d.push(k);
          else d.push(k);
        }
        h = O(this);
        Pe.apply(this, c);
        for (c = 0; c < g.length; c++) R(a, g[c]);
        if (h)
          for (R(a, this), c = 0; c < d.length; c++)
            (g = d[c]), g instanceof Element && Q(a, g);
      });
    void 0 !== Qe &&
      P(b, "remove", function () {
        var b = O(this);
        Qe.call(this);
        b && R(a, this);
      });
  }
  function bf() {
    var a = Xe;
    function b(b, c) {
      Object.defineProperty(b, "innerHTML", {
        enumerable: c.enumerable,
        configurable: !0,
        get: c.get,
        set: function (b) {
          var d = this,
            e = void 0;
          O(this) &&
            ((e = []),
            de(this, function (a) {
              a !== d && e.push(a);
            }));
          c.set.call(this, b);
          if (e)
            for (var f = 0; f < e.length; f++) {
              var g = e[f];
              1 === g.__CE_state && a.disconnectedCallback(g);
            }
          this.ownerDocument.__CE_hasRegistry ? je(a, this) : he(a, this);
          return b;
        },
      });
    }
    function c(b, c) {
      P(b, "insertAdjacentElement", function (b, d) {
        var e = O(d);
        b = c.call(this, b, d);
        e && R(a, d);
        O(b) && Q(a, d);
        return b;
      });
    }
    function d(b, c) {
      function d(b, c) {
        for (var d = []; b !== c; b = b.nextSibling) d.push(b);
        for (c = 0; c < d.length; c++) je(a, d[c]);
      }
      P(b, "insertAdjacentHTML", function (a, b) {
        a = a.toLowerCase();
        if ("beforebegin" === a) {
          var e = this.previousSibling;
          c.call(this, a, b);
          d(e || this.parentNode.firstChild, this);
        } else if ("afterbegin" === a)
          (e = this.firstChild), c.call(this, a, b), d(this.firstChild, e);
        else if ("beforeend" === a)
          (e = this.lastChild),
            c.call(this, a, b),
            d(e || this.firstChild, null);
        else if ("afterend" === a)
          (e = this.nextSibling), c.call(this, a, b), d(this.nextSibling, e);
        else
          throw new SyntaxError(
            "The value provided (" +
              String(a) +
              ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
          );
      });
    }
    Be &&
      P(Element.prototype, "attachShadow", function (a) {
        return (this.__CE_shadowRoot = a = Be.call(this, a));
      });
    Ce && Ce.get
      ? b(Element.prototype, Ce)
      : Se && Se.get
      ? b(HTMLElement.prototype, Se)
      : ge(a, function (a) {
          b(a, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return ve.call(this, !0).innerHTML;
            },
            set: function (a) {
              var b = "template" === this.localName,
                c = b ? this.content : this,
                d = oe.call(document, this.localName);
              for (d.innerHTML = a; 0 < c.childNodes.length; )
                ye.call(c, c.childNodes[0]);
              for (a = b ? d.content : d; 0 < a.childNodes.length; )
                we.call(c, a.childNodes[0]);
            },
          });
        });
    P(Element.prototype, "setAttribute", function (b, c) {
      if (1 !== this.__CE_state) return Ee.call(this, b, c);
      var d = De.call(this, b);
      Ee.call(this, b, c);
      c = De.call(this, b);
      a.attributeChangedCallback(this, b, d, c, null);
    });
    P(Element.prototype, "setAttributeNS", function (b, c, d) {
      if (1 !== this.__CE_state) return He.call(this, b, c, d);
      var e = Ge.call(this, b, c);
      He.call(this, b, c, d);
      d = Ge.call(this, b, c);
      a.attributeChangedCallback(this, c, e, d, b);
    });
    P(Element.prototype, "removeAttribute", function (b) {
      if (1 !== this.__CE_state) return Fe.call(this, b);
      var c = De.call(this, b);
      Fe.call(this, b);
      null !== c && a.attributeChangedCallback(this, b, c, null, null);
    });
    P(Element.prototype, "removeAttributeNS", function (b, c) {
      if (1 !== this.__CE_state) return Ie.call(this, b, c);
      var d = Ge.call(this, b, c);
      Ie.call(this, b, c);
      var e = Ge.call(this, b, c);
      d !== e && a.attributeChangedCallback(this, c, d, e, b);
    });
    Te
      ? c(HTMLElement.prototype, Te)
      : Je
      ? c(Element.prototype, Je)
      : console.warn(
          "Custom Elements: `Element#insertAdjacentElement` was not patched."
        );
    Ue
      ? d(HTMLElement.prototype, Ue)
      : Ke
      ? d(Element.prototype, Ke)
      : console.warn(
          "Custom Elements: `Element#insertAdjacentHTML` was not patched."
        );
    Ye(a, Element.prototype, { fa: Le, append: Me });
    af(a);
  }
  var cf = window.customElements;
  if (
    !cf ||
    cf.forcePolyfill ||
    "function" != typeof cf.define ||
    "function" != typeof cf.get
  ) {
    var Xe = new ee();
    We();
    Ze();
    Ye(Xe, DocumentFragment.prototype, { fa: te, append: ue });
    $e();
    bf();
    document.__CE_hasRegistry = !0;
    var customElements = new S(Xe);
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: customElements,
    });
  }
  function df() {
    this.end = this.start = 0;
    this.rules = this.parent = this.previous = null;
    this.cssText = this.parsedCssText = "";
    this.atRule = !1;
    this.type = 0;
    this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function ef(a) {
    a = a.replace(ff, "").replace(gf, "");
    var b = hf,
      c = a,
      d = new df();
    d.start = 0;
    d.end = c.length;
    for (var e = d, f = 0, g = c.length; f < g; f++)
      if ("{" === c[f]) {
        e.rules || (e.rules = []);
        var h = e,
          k = h.rules[h.rules.length - 1] || null;
        e = new df();
        e.start = f + 1;
        e.parent = h;
        e.previous = k;
        h.rules.push(e);
      } else "}" === c[f] && ((e.end = f + 1), (e = e.parent || d));
    return b(d, a);
  }
  function hf(a, b) {
    var c = b.substring(a.start, a.end - 1);
    a.parsedCssText = a.cssText = c.trim();
    a.parent &&
      ((c = b.substring(
        a.previous ? a.previous.end : a.parent.start,
        a.start - 1
      )),
      (c = jf(c)),
      (c = c.replace(kf, " ")),
      (c = c.substring(c.lastIndexOf(";") + 1)),
      (c = a.parsedSelector = a.selector = c.trim()),
      (a.atRule = 0 === c.indexOf("@")),
      a.atRule
        ? 0 === c.indexOf("@media")
          ? (a.type = lf)
          : c.match(rf) &&
            ((a.type = sf), (a.keyframesName = a.selector.split(kf).pop()))
        : (a.type = 0 === c.indexOf("--") ? tf : uf));
    if ((c = a.rules))
      for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) hf(f, b);
    return a;
  }
  function jf(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
      a = c;
      for (c = 6 - a.length; c--; ) a = "0" + a;
      return "\\" + a;
    });
  }
  function vf(a, b, c) {
    c = void 0 === c ? "" : c;
    var d = "";
    if (a.cssText || a.rules) {
      var e = a.rules,
        f;
      if ((f = e))
        (f = e[0]), (f = !(f && f.selector && 0 === f.selector.indexOf("--")));
      if (f) {
        f = 0;
        for (var g = e.length, h; f < g && (h = e[f]); f++) d = vf(h, b, d);
      } else
        b
          ? (b = a.cssText)
          : ((b = a.cssText),
            (b = b.replace(wf, "").replace(xf, "")),
            (b = b.replace(yf, "").replace(zf, ""))),
          (d = b.trim()) && (d = "  " + d + "\n");
    }
    d &&
      (a.selector && (c += a.selector + " {\n"),
      (c += d),
      a.selector && (c += "}\n\n"));
    return c;
  }
  var uf = 1,
    sf = 7,
    lf = 4,
    tf = 1e3,
    ff = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    gf = /@import[^;]*;/gim,
    wf = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    xf = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    yf = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    zf = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    rf = /^@[^\s]*keyframes/,
    kf = /\s+/g;
  var T = !(window.ShadyDOM && window.ShadyDOM.inUse),
    Af;
  function Bf(a) {
    Af =
      a && a.shimcssproperties
        ? !1
        : T ||
          !(
            navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
            !window.CSS ||
            !CSS.supports ||
            !CSS.supports("box-shadow", "0 0 0 var(--foo)")
          );
  }
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
    ? (Af = window.ShadyCSS.nativeCss)
    : window.ShadyCSS
    ? (Bf(window.ShadyCSS), (window.ShadyCSS = void 0))
    : Bf(window.WebComponents && window.WebComponents.flags);
  var V = Af;
  var Cf =
      /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
    Df = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
    Ef = /(--[\w-]+)\s*([:,;)]|$)/gi,
    Ff = /(animation\s*:)|(animation-name\s*:)/,
    Gf = /@media\s(.*)/,
    Hf = /\{[^}]*\}/g;
  var If = new Set();
  function Jf(a, b) {
    if (!a) return "";
    "string" === typeof a && (a = ef(a));
    b && Kf(a, b);
    return vf(a, V);
  }
  function Lf(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = ef(a.textContent));
    return a.__cssRules || null;
  }
  function Mf(a) {
    return !!a.parent && a.parent.type === sf;
  }
  function Kf(a, b, c, d) {
    if (a) {
      var e = !1,
        f = a.type;
      if (d && f === lf) {
        var g = a.selector.match(Gf);
        g && (window.matchMedia(g[1]).matches || (e = !0));
      }
      f === uf ? b(a) : c && f === sf ? c(a) : f === tf && (e = !0);
      if ((a = a.rules) && !e) {
        e = 0;
        f = a.length;
        for (var h; e < f && (h = a[e]); e++) Kf(h, b, c, d);
      }
    }
  }
  function Nf(a, b, c, d) {
    var e = document.createElement("style");
    b && e.setAttribute("scope", b);
    e.textContent = a;
    Of(e, c, d);
    return e;
  }
  var Pf = null;
  function Of(a, b, c) {
    b = b || document.head;
    b.insertBefore(a, (c && c.nextSibling) || b.firstChild);
    Pf
      ? a.compareDocumentPosition(Pf) === Node.DOCUMENT_POSITION_PRECEDING &&
        (Pf = a)
      : (Pf = a);
  }
  function Qf(a, b) {
    var c = a.indexOf("var(");
    if (-1 === c) return b(a, "", "", "");
    a: {
      var d = 0;
      var e = c + 3;
      for (var f = a.length; e < f; e++)
        if ("(" === a[e]) d++;
        else if (")" === a[e] && 0 === --d) break a;
      e = -1;
    }
    d = a.substring(c + 4, e);
    c = a.substring(0, c);
    a = Qf(a.substring(e + 1), b);
    e = d.indexOf(",");
    return -1 === e
      ? b(c, d.trim(), "", a)
      : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a);
  }
  function Rf(a, b) {
    T
      ? a.setAttribute("class", b)
      : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  function Sf(a) {
    var b = a.localName,
      c = "";
    b
      ? -1 < b.indexOf("-") ||
        ((c = b), (b = (a.getAttribute && a.getAttribute("is")) || ""))
      : ((b = a.is), (c = a.extends));
    return { is: b, X: c };
  }
  function Tf() {}
  function Uf(a, b, c) {
    var d = Vf;
    a.__styleScoped ? (a.__styleScoped = null) : Wf(d, a, b || "", c);
  }
  function Wf(a, b, c, d) {
    b.nodeType === Node.ELEMENT_NODE && Xf(b, c, d);
    if (
      (b =
        "template" === b.localName
          ? (b.content || b.jb).childNodes
          : b.children || b.childNodes)
    )
      for (var e = 0; e < b.length; e++) Wf(a, b[e], c, d);
  }
  function Xf(a, b, c) {
    if (b)
      if (a.classList)
        c
          ? (a.classList.remove("style-scope"), a.classList.remove(b))
          : (a.classList.add("style-scope"), a.classList.add(b));
      else if (a.getAttribute) {
        var d = a.getAttribute(Yf);
        c
          ? d && ((b = d.replace("style-scope", "").replace(b, "")), Rf(a, b))
          : Rf(a, (d ? d + " " : "") + "style-scope " + b);
      }
  }
  function Zf(a, b, c) {
    var d = Vf,
      e = a.__cssBuild;
    T || "shady" === e
      ? (b = Jf(b, c))
      : ((a = Sf(a)), (b = $f(d, b, a.is, a.X, c) + "\n\n"));
    return b.trim();
  }
  function $f(a, b, c, d, e) {
    var f = ag(c, d);
    c = c ? bg + c : "";
    return Jf(b, function (b) {
      b.c || ((b.selector = b.G = cg(a, b, a.b, c, f)), (b.c = !0));
      e && e(b, c, f);
    });
  }
  function ag(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function cg(a, b, c, d, e) {
    var f = b.selector.split(dg);
    if (!Mf(b)) {
      b = 0;
      for (var g = f.length, h; b < g && (h = f[b]); b++)
        f[b] = c.call(a, h, d, e);
    }
    return f.join(dg);
  }
  function eg(a) {
    return a.replace(fg, function (a, c, d) {
      -1 < d.indexOf("+")
        ? (d = d.replace(/\+/g, "___"))
        : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
      return ":" + c + "(" + d + ")";
    });
  }
  Tf.prototype.b = function (a, b, c) {
    var d = !1;
    a = a.trim();
    var e = fg.test(a);
    e &&
      ((a = a.replace(fg, function (a, b, c) {
        return ":" + b + "(" + c.replace(/\s/g, "") + ")";
      })),
      (a = eg(a)));
    a = a.replace(gg, hg + " $1");
    a = a.replace(ig, function (a, e, h) {
      d || ((a = jg(h, e, b, c)), (d = d || a.stop), (e = a.Sa), (h = a.value));
      return e + h;
    });
    e && (a = eg(a));
    return a;
  };
  function jg(a, b, c, d) {
    var e = a.indexOf(kg);
    0 <= a.indexOf(hg) ? (a = lg(a, d)) : 0 !== e && (a = c ? mg(a, c) : a);
    c = !1;
    0 <= e && ((b = ""), (c = !0));
    if (c) {
      var f = !0;
      c &&
        (a = a.replace(ng, function (a, b) {
          return " > " + b;
        }));
    }
    a = a.replace(og, function (a, b, c) {
      return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
    });
    return { value: a, Sa: b, stop: f };
  }
  function mg(a, b) {
    a = a.split(pg);
    a[0] += b;
    return a.join(pg);
  }
  function lg(a, b) {
    var c = a.match(qg);
    return (c = (c && c[2].trim()) || "")
      ? c[0].match(rg)
        ? a.replace(qg, function (a, c, f) {
            return b + f;
          })
        : c.split(rg)[0] === b
        ? c
        : sg
      : a.replace(hg, b);
  }
  function tg(a) {
    a.selector === ug && (a.selector = "html");
  }
  Tf.prototype.c = function (a) {
    return a.match(kg) ? this.b(a, vg) : mg(a.trim(), vg);
  };
  aa.Object.defineProperties(Tf.prototype, {
    a: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return "style-scope";
      },
    },
  });
  var fg = /:(nth[-\w]+)\(([^)]+)\)/,
    vg = ":not(.style-scope)",
    dg = ",",
    ig = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
    rg = /[[.:#*]/,
    hg = ":host",
    ug = ":root",
    kg = "::slotted",
    gg = new RegExp("^(" + kg + ")"),
    qg = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    ng = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    og = /(.*):dir\((?:(ltr|rtl))\)/,
    bg = ".",
    pg = ":",
    Yf = "class",
    sg = "should_not_match",
    Vf = new Tf();
  function wg(a, b, c, d) {
    this.K = a || null;
    this.b = b || null;
    this.sa = c || [];
    this.T = null;
    this.X = d || "";
    this.a = this.H = this.O = null;
  }
  function xg(a) {
    return a ? a.__styleInfo : null;
  }
  function yg(a, b) {
    return (a.__styleInfo = b);
  }
  wg.prototype.c = function () {
    return this.K;
  };
  wg.prototype._getStyleRules = wg.prototype.c;
  function zg(a) {
    var b =
      this.matches ||
      this.matchesSelector ||
      this.mozMatchesSelector ||
      this.msMatchesSelector ||
      this.oMatchesSelector ||
      this.webkitMatchesSelector;
    return b && b.call(this, a);
  }
  var Ag = navigator.userAgent.match("Trident");
  function Bg() {}
  function Cg(a) {
    var b = {},
      c = [],
      d = 0;
    Kf(
      a,
      function (a) {
        Dg(a);
        a.index = d++;
        a = a.B.cssText;
        for (var c; (c = Ef.exec(a)); ) {
          var e = c[1];
          ":" !== c[2] && (b[e] = !0);
        }
      },
      function (a) {
        c.push(a);
      }
    );
    a.b = c;
    a = [];
    for (var e in b) a.push(e);
    return a;
  }
  function Dg(a) {
    if (!a.B) {
      var b = {},
        c = {};
      Eg(a, c) && ((b.J = c), (a.rules = null));
      b.cssText = a.parsedCssText.replace(Hf, "").replace(Cf, "");
      a.B = b;
    }
  }
  function Eg(a, b) {
    var c = a.B;
    if (c) {
      if (c.J) return Object.assign(b, c.J), !0;
    } else {
      c = a.parsedCssText;
      for (var d; (a = Cf.exec(c)); ) {
        d = (a[2] || a[3]).trim();
        if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
        d = !0;
      }
      return d;
    }
  }
  function Fg(a, b, c) {
    b &&
      (b =
        0 <= b.indexOf(";")
          ? Gg(a, b, c)
          : Qf(b, function (b, e, f, g) {
              if (!e) return b + g;
              (e = Fg(a, c[e], c)) && "initial" !== e
                ? "apply-shim-inherit" === e && (e = "inherit")
                : (e = Fg(a, c[f] || f, c) || f);
              return b + (e || "") + g;
            }));
    return (b && b.trim()) || "";
  }
  function Gg(a, b, c) {
    b = b.split(";");
    for (var d = 0, e, f; d < b.length; d++)
      if ((e = b[d])) {
        Df.lastIndex = 0;
        if ((f = Df.exec(e))) e = Fg(a, c[f[1]], c);
        else if (((f = e.indexOf(":")), -1 !== f)) {
          var g = e.substring(f);
          g = g.trim();
          g = Fg(a, g, c) || g;
          e = e.substring(0, f) + g;
        }
        b[d] =
          e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
      }
    return b.join(";");
  }
  function Hg(a, b) {
    var c = {},
      d = [];
    Kf(
      a,
      function (a) {
        a.B || Dg(a);
        var e = a.G || a.parsedSelector;
        b &&
          a.B.J &&
          e &&
          zg.call(b, e) &&
          (Eg(a, c),
          (a = a.index),
          (e = parseInt(a / 32, 10)),
          (d[e] = (d[e] || 0) | (1 << a % 32)));
      },
      null,
      !0
    );
    return { J: c, key: d };
  }
  function Ig(a, b, c, d) {
    b.B || Dg(b);
    if (b.B.J) {
      var e = Sf(a);
      a = e.is;
      e = e.X;
      e = a ? ag(a, e) : "html";
      var f = b.parsedSelector,
        g = ":host > *" === f || "html" === f,
        h = 0 === f.indexOf(":host") && !g;
      "shady" === c &&
        ((g = f === e + " > *." + e || -1 !== f.indexOf("html")),
        (h = !g && 0 === f.indexOf(e)));
      "shadow" === c &&
        ((g = ":host > *" === f || "html" === f), (h = h && !g));
      if (g || h)
        (c = e),
          h &&
            (b.G || (b.G = cg(Vf, b, Vf.b, a ? bg + a : "", e)),
            (c = b.G || e)),
          d({ Za: c, Wa: h, wb: g });
    }
  }
  function Jg(a, b) {
    var c = {},
      d = {},
      e = b && b.__cssBuild;
    Kf(
      b,
      function (b) {
        Ig(a, b, e, function (e) {
          zg.call(a.kb || a, e.Za) && (e.Wa ? Eg(b, c) : Eg(b, d));
        });
      },
      null,
      !0
    );
    return { Ya: d, Va: c };
  }
  function Kg(a, b, c, d) {
    var e = Sf(b),
      f = ag(e.is, e.X),
      g = new RegExp(
        "(?:^|[^.#[:])" +
          (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) +
          "($|[.:[\\s>+~])"
      );
    e = xg(b).K;
    var h = Lg(e, d);
    return Zf(b, e, function (b) {
      var e = "";
      b.B || Dg(b);
      b.B.cssText && (e = Gg(a, b.B.cssText, c));
      b.cssText = e;
      if (!T && !Mf(b) && b.cssText) {
        var k = (e = b.cssText);
        null == b.za && (b.za = Ff.test(e));
        if (b.za)
          if (null == b.ea) {
            b.ea = [];
            for (var r in h)
              (k = h[r]), (k = k(e)), e !== k && ((e = k), b.ea.push(r));
          } else {
            for (r = 0; r < b.ea.length; ++r) (k = h[b.ea[r]]), (e = k(e));
            k = e;
          }
        b.cssText = k;
        b.G = b.G || b.selector;
        e = "." + d;
        r = b.G.split(",");
        k = 0;
        for (var G = r.length, x; k < G && (x = r[k]); k++)
          r[k] = x.match(g) ? x.replace(f, e) : e + " " + x;
        b.selector = r.join(",");
      }
    });
  }
  function Lg(a, b) {
    a = a.b;
    var c = {};
    if (!T && a)
      for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        var f = e,
          g = b;
        f.F = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
        f.a = f.keyframesName + "-" + g;
        f.G = f.G || f.selector;
        f.selector = f.G.replace(f.keyframesName, f.a);
        c[e.keyframesName] = Mg(e);
      }
    return c;
  }
  function Mg(a) {
    return function (b) {
      return b.replace(a.F, a.a);
    };
  }
  function Ng(a, b) {
    var c = Og,
      d = Lf(a);
    a.textContent = Jf(d, function (a) {
      var d = (a.cssText = a.parsedCssText);
      a.B &&
        a.B.cssText &&
        ((d = d.replace(wf, "").replace(xf, "")), (a.cssText = Gg(c, d, b)));
    });
  }
  aa.Object.defineProperties(Bg.prototype, {
    a: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return "x-scope";
      },
    },
  });
  var Og = new Bg();
  var Pg = {},
    Qg = window.customElements;
  if (Qg && !T) {
    var Rg = Qg.define;
    Qg.define = function (a, b, c) {
      var d = document.createComment(" Shady DOM styles for " + a + " "),
        e = document.head;
      e.insertBefore(d, (Pf ? Pf.nextSibling : null) || e.firstChild);
      Pf = d;
      Pg[a] = d;
      Rg.call(Qg, a, b, c);
    };
  }
  function Sg() {
    this.cache = {};
  }
  Sg.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];
    e.push({ J: b, styleElement: c, H: d });
    100 < e.length && e.shift();
    this.cache[a] = e;
  };
  Sg.prototype.fetch = function (a, b, c) {
    if ((a = this.cache[a]))
      for (var d = a.length - 1; 0 <= d; d--) {
        var e = a[d],
          f;
        a: {
          for (f = 0; f < c.length; f++) {
            var g = c[f];
            if (e.J[g] !== b[g]) {
              f = !1;
              break a;
            }
          }
          f = !0;
        }
        if (f) return e;
      }
  };
  function Tg() {}
  function Ug(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.target !== document.documentElement && c.target !== document.head)
        for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];
          if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode();
            var g = e;
            var h = [];
            g.classList
              ? (h = Array.from(g.classList))
              : g instanceof window.SVGElement &&
                g.hasAttribute("class") &&
                (h = g.getAttribute("class").split(/\s+/));
            g = h;
            h = g.indexOf(Vf.a);
            if ((g = -1 < h ? g[h + 1] : "") && f === e.ownerDocument)
              Uf(e, g, !0);
            else if (f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host))
              if (((f = Sf(f).is), g === f))
                for (
                  e = window.ShadyDOM.nativeMethods.querySelectorAll.call(
                    e,
                    ":not(." + Vf.a + ")"
                  ),
                    f = 0;
                  f < e.length;
                  f++
                )
                  Xf(e[f], g);
              else g && Uf(e, g, !0), Uf(e, f);
          }
        }
    }
  }
  if (!T) {
    var Vg = new MutationObserver(Ug),
      Wg = function (a) {
        Vg.observe(a, { childList: !0, subtree: !0 });
      };
    if (
      window.customElements &&
      !window.customElements.polyfillWrapFlushCallback
    )
      Wg(document);
    else {
      var Xg = function () {
        Wg(document.body);
      };
      window.HTMLImports
        ? window.HTMLImports.whenReady(Xg)
        : requestAnimationFrame(function () {
            if ("loading" === document.readyState) {
              var a = function () {
                Xg();
                document.removeEventListener("readystatechange", a);
              };
              document.addEventListener("readystatechange", a);
            } else Xg();
          });
    }
    Tg = function () {
      Ug(Vg.takeRecords());
    };
  }
  var Yg = Tg;
  var Zg = {};
  var $g = Promise.resolve();
  function ah(a) {
    if ((a = Zg[a]))
      (a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0),
        (a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0),
        (a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1);
  }
  function bh(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }
  function ch(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;
    a.b ||
      ((a.b = !0),
      $g.then(function () {
        a._applyShimCurrentVersion = a._applyShimNextVersion;
        a.b = !1;
      }));
  }
  var dh = new Sg();
  function W() {
    this.Aa = {};
    this.c = document.documentElement;
    var a = new df();
    a.rules = [];
    this.F = yg(this.c, new wg(a));
    this.M = !1;
    this.b = this.a = null;
  }
  q = W.prototype;
  q.Ga = function () {
    Yg();
  };
  q.Ta = function (a) {
    return Lf(a);
  };
  q.ab = function (a) {
    return Jf(a);
  };
  q.prepareTemplate = function (a, b, c) {
    if (!a.F) {
      a.F = !0;
      a.name = b;
      a.extends = c;
      Zg[b] = a;
      var d = (d = a.content.querySelector("style"))
        ? d.getAttribute("css-build") || ""
        : "";
      var e = [];
      for (
        var f = a.content.querySelectorAll("style"), g = 0;
        g < f.length;
        g++
      ) {
        var h = f[g];
        if (h.hasAttribute("shady-unscoped")) {
          if (!T) {
            var k = h.textContent;
            If.has(k) ||
              (If.add(k), (k = h.cloneNode(!0)), document.head.appendChild(k));
            h.parentNode.removeChild(h);
          }
        } else e.push(h.textContent), h.parentNode.removeChild(h);
      }
      e = e.join("").trim();
      c = { is: b, extends: c, hb: d };
      T || Uf(a.content, b);
      eh(this);
      f = Df.test(e) || Cf.test(e);
      Df.lastIndex = 0;
      Cf.lastIndex = 0;
      e = ef(e);
      f && V && this.a && this.a.transformRules(e, b);
      a._styleAst = e;
      a.M = d;
      d = [];
      V || (d = Cg(a._styleAst));
      if (!d.length || V)
        (e = T ? a.content : null),
          (b = Pg[b]),
          (f = Zf(c, a._styleAst)),
          (b = f.length ? Nf(f, c.is, e, b) : void 0),
          (a.a = b);
      a.c = d;
    }
  };
  function fh(a) {
    !a.b &&
      window.ShadyCSS &&
      window.ShadyCSS.CustomStyleInterface &&
      ((a.b = window.ShadyCSS.CustomStyleInterface),
      (a.b.transformCallback = function (b) {
        a.Ea(b);
      }),
      (a.b.validateCallback = function () {
        requestAnimationFrame(function () {
          (a.b.enqueued || a.M) && a.flushCustomStyles();
        });
      }));
  }
  function eh(a) {
    !a.a &&
      window.ShadyCSS &&
      window.ShadyCSS.ApplyShim &&
      ((a.a = window.ShadyCSS.ApplyShim), (a.a.invalidCallback = ah));
    fh(a);
  }
  q.flushCustomStyles = function () {
    eh(this);
    if (this.b) {
      var a = this.b.processStyles();
      if (this.b.enqueued) {
        if (V)
          for (var b = 0; b < a.length; b++) {
            var c = this.b.getStyleForCustomStyle(a[b]);
            if (c && V && this.a) {
              var d = Lf(c);
              eh(this);
              this.a.transformRules(d);
              c.textContent = Jf(d);
            }
          }
        else
          for (gh(this, this.c, this.F), b = 0; b < a.length; b++)
            (c = this.b.getStyleForCustomStyle(a[b])) && Ng(c, this.F.O);
        this.b.enqueued = !1;
        this.M && !V && this.styleDocument();
      }
    }
  };
  q.styleElement = function (a, b) {
    var c = Sf(a).is,
      d = xg(a);
    if (!d) {
      var e = Sf(a);
      d = e.is;
      e = e.X;
      var f = Pg[d];
      d = Zg[d];
      if (d) {
        var g = d._styleAst;
        var h = d.c;
      }
      d = yg(a, new wg(g, f, h, e));
    }
    a !== this.c && (this.M = !0);
    b && ((d.T = d.T || {}), Object.assign(d.T, b));
    if (V) {
      if (d.T) {
        b = d.T;
        for (var k in b)
          null === k ? a.style.removeProperty(k) : a.style.setProperty(k, b[k]);
      }
      if (((k = Zg[c]) || a === this.c) && k && k.a && !bh(k)) {
        if (bh(k) || k._applyShimValidatingVersion !== k._applyShimNextVersion)
          eh(this),
            this.a && this.a.transformRules(k._styleAst, c),
            (k.a.textContent = Zf(a, d.K)),
            ch(k);
        T &&
          (c = a.shadowRoot) &&
          (c.querySelector("style").textContent = Zf(a, d.K));
        d.K = k._styleAst;
      }
    } else if ((gh(this, a, d), d.sa && d.sa.length)) {
      c = d;
      k = Sf(a).is;
      d = (b = dh.fetch(k, c.O, c.sa)) ? b.styleElement : null;
      g = c.H;
      (h = b && b.H) ||
        ((h = this.Aa[k] = (this.Aa[k] || 0) + 1), (h = k + "-" + h));
      c.H = h;
      h = c.H;
      e = Og;
      e = d ? d.textContent || "" : Kg(e, a, c.O, h);
      f = xg(a);
      var m = f.a;
      m &&
        !T &&
        m !== d &&
        (m._useCount--,
        0 >= m._useCount && m.parentNode && m.parentNode.removeChild(m));
      T
        ? f.a
          ? ((f.a.textContent = e), (d = f.a))
          : e && (d = Nf(e, h, a.shadowRoot, f.b))
        : d
        ? d.parentNode ||
          (Ag && -1 < e.indexOf("@media") && (d.textContent = e),
          Of(d, null, f.b))
        : e && (d = Nf(e, h, null, f.b));
      d &&
        ((d._useCount = d._useCount || 0),
        f.a != d && d._useCount++,
        (f.a = d));
      h = d;
      T ||
        ((d = c.H),
        (f = e = a.getAttribute("class") || ""),
        g &&
          (f = e.replace(new RegExp("\\s*x-scope\\s*" + g + "\\s*", "g"), " ")),
        (f += (f ? " " : "") + "x-scope " + d),
        e !== f && Rf(a, f));
      b || dh.store(k, c.O, h, c.H);
    }
  };
  function hh(a, b) {
    return (b = b.getRootNode().host) ? (xg(b) ? b : hh(a, b)) : a.c;
  }
  function gh(a, b, c) {
    a = hh(a, b);
    var d = xg(a);
    a = Object.create(d.O || null);
    var e = Jg(b, c.K);
    b = Hg(d.K, b).J;
    Object.assign(a, e.Va, b, e.Ya);
    b = c.T;
    for (var f in b) if ((e = b[f]) || 0 === e) a[f] = e;
    f = Og;
    b = Object.getOwnPropertyNames(a);
    for (e = 0; e < b.length; e++) (d = b[e]), (a[d] = Fg(f, a[d], a));
    c.O = a;
  }
  q.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  q.styleSubtree = function (a, b) {
    var c = a.shadowRoot;
    (c || a === this.c) && this.styleElement(a, b);
    if ((b = c && (c.children || c.childNodes)))
      for (a = 0; a < b.length; a++) this.styleSubtree(b[a]);
    else if ((a = a.children || a.childNodes))
      for (b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  q.Ea = function (a) {
    var b = this,
      c = Lf(a);
    Kf(c, function (a) {
      if (T) tg(a);
      else {
        var c = Vf;
        a.selector = a.parsedSelector;
        tg(a);
        a.selector = a.G = cg(c, a, c.c, void 0, void 0);
      }
      V && (eh(b), b.a && b.a.transformRule(a));
    });
    V ? (a.textContent = Jf(c)) : this.F.K.rules.push(c);
  };
  q.getComputedStyleValue = function (a, b) {
    var c;
    V || (c = (xg(a) || xg(hh(this, a))).O[b]);
    return (c = c || window.getComputedStyle(a).getPropertyValue(b))
      ? c.trim()
      : "";
  };
  q.$a = function (a, b) {
    var c = a.getRootNode();
    b = b ? b.split(/\s/) : [];
    c = c.host && c.host.localName;
    if (!c) {
      var d = a.getAttribute("class");
      if (d) {
        d = d.split(/\s/);
        for (var e = 0; e < d.length; e++)
          if (d[e] === Vf.a) {
            c = d[e + 1];
            break;
          }
      }
    }
    c && b.push(Vf.a, c);
    V || ((c = xg(a)) && c.H && b.push(Og.a, c.H));
    Rf(a, b.join(" "));
  };
  q.Qa = function (a) {
    return xg(a);
  };
  W.prototype.flush = W.prototype.Ga;
  W.prototype.prepareTemplate = W.prototype.prepareTemplate;
  W.prototype.styleElement = W.prototype.styleElement;
  W.prototype.styleDocument = W.prototype.styleDocument;
  W.prototype.styleSubtree = W.prototype.styleSubtree;
  W.prototype.getComputedStyleValue = W.prototype.getComputedStyleValue;
  W.prototype.setElementClass = W.prototype.$a;
  W.prototype._styleInfoForNode = W.prototype.Qa;
  W.prototype.transformCustomStyleForDocument = W.prototype.Ea;
  W.prototype.getStyleAst = W.prototype.Ta;
  W.prototype.styleAstToString = W.prototype.ab;
  W.prototype.flushCustomStyles = W.prototype.flushCustomStyles;
  Object.defineProperties(W.prototype, {
    nativeShadow: {
      get: function () {
        return T;
      },
    },
    nativeCss: {
      get: function () {
        return V;
      },
    },
  });
  var X = new W(),
    ih,
    jh;
  window.ShadyCSS &&
    ((ih = window.ShadyCSS.ApplyShim),
    (jh = window.ShadyCSS.CustomStyleInterface));
  window.ShadyCSS = {
    ScopingShim: X,
    prepareTemplate: function (a, b, c) {
      X.flushCustomStyles();
      X.prepareTemplate(a, b, c);
    },
    styleSubtree: function (a, b) {
      X.flushCustomStyles();
      X.styleSubtree(a, b);
    },
    styleElement: function (a) {
      X.flushCustomStyles();
      X.styleElement(a);
    },
    styleDocument: function (a) {
      X.flushCustomStyles();
      X.styleDocument(a);
    },
    flushCustomStyles: function () {
      X.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return X.getComputedStyleValue(a, b);
    },
    nativeCss: V,
    nativeShadow: T,
  };
  ih && (window.ShadyCSS.ApplyShim = ih);
  jh && (window.ShadyCSS.CustomStyleInterface = jh);
  (function (a) {
    function b(a) {
      "" == a && (f.call(this), (this.h = !0));
      return a.toLowerCase();
    }
    function c(a) {
      var b = a.charCodeAt(0);
      return 32 < b && 127 > b && -1 == [34, 35, 60, 62, 63, 96].indexOf(b)
        ? a
        : encodeURIComponent(a);
    }
    function d(a) {
      var b = a.charCodeAt(0);
      return 32 < b && 127 > b && -1 == [34, 35, 60, 62, 96].indexOf(b)
        ? a
        : encodeURIComponent(a);
    }
    function e(a, e, g) {
      function h(a) {
        kb.push(a);
      }
      var k = e || "scheme start",
        v = 0,
        p = "",
        x = !1,
        U = !1,
        kb = [];
      a: for (; (void 0 != a[v - 1] || 0 == v) && !this.h; ) {
        var l = a[v];
        switch (k) {
          case "scheme start":
            if (l && r.test(l)) (p += l.toLowerCase()), (k = "scheme");
            else if (e) {
              h("Invalid scheme.");
              break a;
            } else {
              p = "";
              k = "no scheme";
              continue;
            }
            break;
          case "scheme":
            if (l && G.test(l)) p += l.toLowerCase();
            else if (":" == l) {
              this.g = p;
              p = "";
              if (e) break a;
              void 0 !== m[this.g] && (this.D = !0);
              k =
                "file" == this.g
                  ? "relative"
                  : this.D && g && g.g == this.g
                  ? "relative or authority"
                  : this.D
                  ? "authority first slash"
                  : "scheme data";
            } else if (e) {
              void 0 != l && h("Code point not allowed in scheme: " + l);
              break a;
            } else {
              p = "";
              v = 0;
              k = "no scheme";
              continue;
            }
            break;
          case "scheme data":
            "?" == l
              ? ((this.u = "?"), (k = "query"))
              : "#" == l
              ? ((this.C = "#"), (k = "fragment"))
              : void 0 != l &&
                "\t" != l &&
                "\n" != l &&
                "\r" != l &&
                (this.qa += c(l));
            break;
          case "no scheme":
            if (g && void 0 !== m[g.g]) {
              k = "relative";
              continue;
            } else h("Missing scheme."), f.call(this), (this.h = !0);
            break;
          case "relative or authority":
            if ("/" == l && "/" == a[v + 1]) k = "authority ignore slashes";
            else {
              h("Expected /, got: " + l);
              k = "relative";
              continue;
            }
            break;
          case "relative":
            this.D = !0;
            "file" != this.g && (this.g = g.g);
            if (void 0 == l) {
              this.i = g.i;
              this.s = g.s;
              this.j = g.j.slice();
              this.u = g.u;
              this.v = g.v;
              this.f = g.f;
              break a;
            } else if ("/" == l || "\\" == l)
              "\\" == l && h("\\ is an invalid code point."),
                (k = "relative slash");
            else if ("?" == l)
              (this.i = g.i),
                (this.s = g.s),
                (this.j = g.j.slice()),
                (this.u = "?"),
                (this.v = g.v),
                (this.f = g.f),
                (k = "query");
            else if ("#" == l)
              (this.i = g.i),
                (this.s = g.s),
                (this.j = g.j.slice()),
                (this.u = g.u),
                (this.C = "#"),
                (this.v = g.v),
                (this.f = g.f),
                (k = "fragment");
            else {
              k = a[v + 1];
              var F = a[v + 2];
              if (
                "file" != this.g ||
                !r.test(l) ||
                (":" != k && "|" != k) ||
                (void 0 != F && "/" != F && "\\" != F && "?" != F && "#" != F)
              )
                (this.i = g.i),
                  (this.s = g.s),
                  (this.v = g.v),
                  (this.f = g.f),
                  (this.j = g.j.slice()),
                  this.j.pop();
              k = "relative path";
              continue;
            }
            break;
          case "relative slash":
            if ("/" == l || "\\" == l)
              "\\" == l && h("\\ is an invalid code point."),
                (k =
                  "file" == this.g ? "file host" : "authority ignore slashes");
            else {
              "file" != this.g &&
                ((this.i = g.i),
                (this.s = g.s),
                (this.v = g.v),
                (this.f = g.f));
              k = "relative path";
              continue;
            }
            break;
          case "authority first slash":
            if ("/" == l) k = "authority second slash";
            else {
              h("Expected '/', got: " + l);
              k = "authority ignore slashes";
              continue;
            }
            break;
          case "authority second slash":
            k = "authority ignore slashes";
            if ("/" != l) {
              h("Expected '/', got: " + l);
              continue;
            }
            break;
          case "authority ignore slashes":
            if ("/" != l && "\\" != l) {
              k = "authority";
              continue;
            } else h("Expected authority, got: " + l);
            break;
          case "authority":
            if ("@" == l) {
              x && (h("@ already seen."), (p += "%40"));
              x = !0;
              for (l = 0; l < p.length; l++)
                (F = p[l]),
                  "\t" == F || "\n" == F || "\r" == F
                    ? h("Invalid whitespace in authority.")
                    : ":" == F && null === this.f
                    ? (this.f = "")
                    : ((F = c(F)),
                      null !== this.f ? (this.f += F) : (this.v += F));
              p = "";
            } else if (
              void 0 == l ||
              "/" == l ||
              "\\" == l ||
              "?" == l ||
              "#" == l
            ) {
              v -= p.length;
              p = "";
              k = "host";
              continue;
            } else p += l;
            break;
          case "file host":
            if (void 0 == l || "/" == l || "\\" == l || "?" == l || "#" == l) {
              2 != p.length || !r.test(p[0]) || (":" != p[1] && "|" != p[1])
                ? (0 != p.length && ((this.i = b.call(this, p)), (p = "")),
                  (k = "relative path start"))
                : (k = "relative path");
              continue;
            } else
              "\t" == l || "\n" == l || "\r" == l
                ? h("Invalid whitespace in file host.")
                : (p += l);
            break;
          case "host":
          case "hostname":
            if (":" != l || U)
              if (
                void 0 == l ||
                "/" == l ||
                "\\" == l ||
                "?" == l ||
                "#" == l
              ) {
                this.i = b.call(this, p);
                p = "";
                k = "relative path start";
                if (e) break a;
                continue;
              } else
                "\t" != l && "\n" != l && "\r" != l
                  ? ("[" == l ? (U = !0) : "]" == l && (U = !1), (p += l))
                  : h("Invalid code point in host/hostname: " + l);
            else if (
              ((this.i = b.call(this, p)),
              (p = ""),
              (k = "port"),
              "hostname" == e)
            )
              break a;
            break;
          case "port":
            if (/[0-9]/.test(l)) p += l;
            else if (
              void 0 == l ||
              "/" == l ||
              "\\" == l ||
              "?" == l ||
              "#" == l ||
              e
            ) {
              "" != p &&
                ((p = parseInt(p, 10)),
                p != m[this.g] && (this.s = p + ""),
                (p = ""));
              if (e) break a;
              k = "relative path start";
              continue;
            } else
              "\t" == l || "\n" == l || "\r" == l
                ? h("Invalid code point in port: " + l)
                : (f.call(this), (this.h = !0));
            break;
          case "relative path start":
            "\\" == l && h("'\\' not allowed in path.");
            k = "relative path";
            if ("/" != l && "\\" != l) continue;
            break;
          case "relative path":
            if (
              void 0 != l &&
              "/" != l &&
              "\\" != l &&
              (e || ("?" != l && "#" != l))
            )
              "\t" != l && "\n" != l && "\r" != l && (p += c(l));
            else {
              "\\" == l && h("\\ not allowed in relative path.");
              if ((F = n[p.toLowerCase()])) p = F;
              ".." == p
                ? (this.j.pop(), "/" != l && "\\" != l && this.j.push(""))
                : "." == p && "/" != l && "\\" != l
                ? this.j.push("")
                : "." != p &&
                  ("file" == this.g &&
                    0 == this.j.length &&
                    2 == p.length &&
                    r.test(p[0]) &&
                    "|" == p[1] &&
                    (p = p[0] + ":"),
                  this.j.push(p));
              p = "";
              "?" == l
                ? ((this.u = "?"), (k = "query"))
                : "#" == l && ((this.C = "#"), (k = "fragment"));
            }
            break;
          case "query":
            e || "#" != l
              ? void 0 != l &&
                "\t" != l &&
                "\n" != l &&
                "\r" != l &&
                (this.u += d(l))
              : ((this.C = "#"), (k = "fragment"));
            break;
          case "fragment":
            void 0 != l && "\t" != l && "\n" != l && "\r" != l && (this.C += l);
        }
        v++;
      }
    }
    function f() {
      this.v = this.qa = this.g = "";
      this.f = null;
      this.s = this.i = "";
      this.j = [];
      this.C = this.u = "";
      this.D = this.h = !1;
    }
    function g(a, b) {
      void 0 === b || b instanceof g || (b = new g(String(b)));
      this.Ra = a;
      f.call(this);
      a = a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
      e.call(this, a, null, b);
    }
    var h = !1;
    if (!a.qb)
      try {
        var k = new URL("b", "http://a");
        k.pathname = "c%20d";
        h = "http://a/c%20d" === k.href;
      } catch (v) {}
    if (!h) {
      var m = Object.create(null);
      m.ftp = 21;
      m.file = 0;
      m.gopher = 70;
      m.http = 80;
      m.https = 443;
      m.ws = 80;
      m.wss = 443;
      var n = Object.create(null);
      n["%2e"] = ".";
      n[".%2e"] = "..";
      n["%2e."] = "..";
      n["%2e%2e"] = "..";
      var r = /[a-zA-Z]/,
        G = /[a-zA-Z0-9\+\-\.]/;
      g.prototype = {
        toString: function () {
          return this.href;
        },
        get href() {
          if (this.h) return this.Ra;
          var a = "";
          if ("" != this.v || null != this.f)
            a = this.v + (null != this.f ? ":" + this.f : "") + "@";
          return (
            this.protocol +
            (this.D ? "//" + a + this.host : "") +
            this.pathname +
            this.u +
            this.C
          );
        },
        set href(a) {
          f.call(this);
          e.call(this, a);
        },
        get protocol() {
          return this.g + ":";
        },
        set protocol(a) {
          this.h || e.call(this, a + ":", "scheme start");
        },
        get host() {
          return this.h ? "" : this.s ? this.i + ":" + this.s : this.i;
        },
        set host(a) {
          !this.h && this.D && e.call(this, a, "host");
        },
        get hostname() {
          return this.i;
        },
        set hostname(a) {
          !this.h && this.D && e.call(this, a, "hostname");
        },
        get port() {
          return this.s;
        },
        set port(a) {
          !this.h && this.D && e.call(this, a, "port");
        },
        get pathname() {
          return this.h ? "" : this.D ? "/" + this.j.join("/") : this.qa;
        },
        set pathname(a) {
          !this.h &&
            this.D &&
            ((this.j = []), e.call(this, a, "relative path start"));
        },
        get search() {
          return this.h || !this.u || "?" == this.u ? "" : this.u;
        },
        set search(a) {
          !this.h &&
            this.D &&
            ((this.u = "?"),
            "?" == a[0] && (a = a.slice(1)),
            e.call(this, a, "query"));
        },
        get hash() {
          return this.h || !this.C || "#" == this.C ? "" : this.C;
        },
        set hash(a) {
          this.h ||
            ((this.C = "#"),
            "#" == a[0] && (a = a.slice(1)),
            e.call(this, a, "fragment"));
        },
        get origin() {
          var a;
          if (this.h || !this.g) return "";
          switch (this.g) {
            case "data":
            case "file":
            case "javascript":
            case "mailto":
              return "null";
          }
          return (a = this.host) ? this.g + "://" + a : "";
        },
      };
      var x = a.URL;
      x &&
        ((g.createObjectURL = function (a) {
          return x.createObjectURL.apply(x, arguments);
        }),
        (g.revokeObjectURL = function (a) {
          x.revokeObjectURL(a);
        }));
      a.URL = g;
    }
  })(window);
  var kh = {},
    lh = Object.create,
    mh = Object.defineProperties,
    nh = Object.defineProperty;
  function Y(a, b) {
    b = void 0 === b ? {} : b;
    return {
      value: a,
      configurable: !!b.ya,
      writable: !!b.cb,
      enumerable: !!b.e,
    };
  }
  var oh = void 0;
  try {
    oh =
      1 ===
      nh({}, "y", {
        get: function () {
          return 1;
        },
      }).y;
  } catch (a) {
    oh = !1;
  }
  var ph = {};
  function qh(a) {
    a = String(a);
    for (var b = "", c = 0; ph[a + b]; ) b = c += 1;
    ph[a + b] = 1;
    var d = "Symbol(" + a + "" + b + ")";
    oh &&
      nh(Object.prototype, d, {
        get: void 0,
        set: function (a) {
          nh(this, d, Y(a, { ya: !0, cb: !0 }));
        },
        configurable: !0,
        enumerable: !1,
      });
    return d;
  }
  var rh = lh(null);
  function Z(a) {
    if (this instanceof Z) throw new TypeError("Symbol is not a constructor");
    a = void 0 === a ? "" : String(a);
    var b = qh(a);
    return oh ? lh(rh, { ua: Y(a), Ka: Y(b) }) : b;
  }
  mh(Z, {
    for: Y(function (a) {
      a = String(a);
      if (kh[a]) return kh[a];
      var b = Z(a);
      return (kh[a] = b);
    }),
    keyFor: Y(function (a) {
      if (oh && (!a || "Symbol" !== a[Z.toStringTag]))
        throw new TypeError("" + a + " is not a symbol");
      for (var b in kh)
        if (kh[b] === a)
          return oh ? kh[b].ua : kh[b].substr(7, kh[b].length - 8);
    }),
  });
  mh(Z, {
    ub: Y(Z("hasInstance")),
    vb: Y(Z("isConcatSpreadable")),
    iterator: Y(Z("iterator")),
    match: Y(Z("match")),
    replace: Y(Z("replace")),
    search: Y(Z("search")),
    Ab: Y(Z("species")),
    split: Y(Z("split")),
    Bb: Y(Z("toPrimitive")),
    toStringTag: Y(Z("toStringTag")),
    unscopables: Y(Z("unscopables")),
  });
  mh(rh, {
    constructor: Y(Z),
    toString: Y(function () {
      return this.Ka;
    }),
    valueOf: Y(function () {
      return "Symbol(" + this.ua + ")";
    }),
  });
  oh && nh(rh, Z.toStringTag, Y("Symbol", { ya: !0 }));
  var sh = "function" === typeof Symbol ? Symbol : Z; /*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  window.Symbol ||
    ((window.Symbol = sh),
    (Array.prototype[sh.iterator] = function () {
      function a(a, e, h) {
        for (;;)
          switch (b) {
            case 0:
              c = 0;
            case 1:
              if (!(c < d.length)) {
                b = 3;
                break;
              }
              b = 4;
              return { value: d[c], done: !1 };
            case 4:
              if (1 != a) {
                b = 5;
                break;
              }
              b = -1;
              throw h;
            case 5:
            case 2:
              c++;
              b = 1;
              break;
            case 3:
              b = -1;
            default:
              return { value: void 0, done: !0 };
          }
      }
      var b = 0,
        c,
        d = this,
        e = {
          next: function (b) {
            return a(0, b, void 0);
          },
          throw: function (b) {
            return a(1, void 0, b);
          },
          return: function () {
            throw Error("Not yet implemented");
          },
        };
      ea();
      e[Symbol.iterator] = function () {
        return this;
      };
      return e;
    }),
    (Set.prototype[sh.iterator] = function () {
      function a(a, f, k) {
        for (;;)
          switch (b) {
            case 0:
              (d = []),
                e.forEach(function (a) {
                  d.push(a);
                }),
                (c = 0);
            case 1:
              if (!(c < d.length)) {
                b = 3;
                break;
              }
              b = 4;
              return { value: d[c], done: !1 };
            case 4:
              if (1 != a) {
                b = 5;
                break;
              }
              b = -1;
              throw k;
            case 5:
            case 2:
              c++;
              b = 1;
              break;
            case 3:
              b = -1;
            default:
              return { value: void 0, done: !0 };
          }
      }
      var b = 0,
        c,
        d,
        e = this,
        f = {
          next: function (b) {
            return a(0, b, void 0);
          },
          throw: function (b) {
            return a(1, void 0, b);
          },
          return: function () {
            throw Error("Not yet implemented");
          },
        };
      ea();
      f[Symbol.iterator] = function () {
        return this;
      };
      return f;
    }),
    (Map.prototype[sh.iterator] = function () {
      function a(a, f, k) {
        for (;;)
          switch (b) {
            case 0:
              (d = []),
                e.forEach(function (a, b) {
                  d.push([b, a]);
                }),
                (c = 0);
            case 1:
              if (!(c < d.length)) {
                b = 3;
                break;
              }
              b = 4;
              return { value: d[c], done: !1 };
            case 4:
              if (1 != a) {
                b = 5;
                break;
              }
              b = -1;
              throw k;
            case 5:
            case 2:
              c++;
              b = 1;
              break;
            case 3:
              b = -1;
            default:
              return { value: void 0, done: !0 };
          }
      }
      var b = 0,
        c,
        d,
        e = this,
        f = {
          next: function (b) {
            return a(0, b, void 0);
          },
          throw: function (b) {
            return a(1, void 0, b);
          },
          return: function () {
            throw Error("Not yet implemented");
          },
        };
      ea();
      f[Symbol.iterator] = function () {
        return this;
      };
      return f;
    }),
    (String.prototype[sh.iterator] = function () {
      function a(a, e, h) {
        for (;;)
          switch (b) {
            case 0:
              c = 0;
            case 1:
              if (!(c < d.length)) {
                b = 3;
                break;
              }
              b = 4;
              return { value: d[c], done: !1 };
            case 4:
              if (1 != a) {
                b = 5;
                break;
              }
              b = -1;
              throw h;
            case 5:
            case 2:
              c++;
              b = 1;
              break;
            case 3:
              b = -1;
            default:
              return { value: void 0, done: !0 };
          }
      }
      var b = 0,
        c,
        d = this,
        e = {
          next: function (b) {
            return a(0, b, void 0);
          },
          throw: function (b) {
            return a(1, void 0, b);
          },
          return: function () {
            throw Error("Not yet implemented");
          },
        };
      ea();
      e[Symbol.iterator] = function () {
        return this;
      };
      return e;
    }));
  var th = document.createElement("style");
  th.textContent =
    "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
  var uh = document.querySelector("head");
  uh.insertBefore(th, uh.firstChild);
  var vh = window.customElements,
    wh = !1,
    xh = null;
  vh.polyfillWrapFlushCallback &&
    vh.polyfillWrapFlushCallback(function (a) {
      xh = a;
      wh && a();
    });
  function yh() {
    window.HTMLTemplateElement.bootstrap &&
      window.HTMLTemplateElement.bootstrap(window.document);
    xh && xh();
    wh = !0;
    window.WebComponents.ready = !0;
    document.dispatchEvent(
      new CustomEvent("WebComponentsReady", { bubbles: !0 })
    );
  }
  "complete" !== document.readyState
    ? (window.addEventListener("load", yh),
      window.addEventListener("DOMContentLoaded", function () {
        window.removeEventListener("load", yh);
        yh();
      }))
    : yh();
}.call(this));

//# sourceMappingURL=webcomponents-bundle.js.map
