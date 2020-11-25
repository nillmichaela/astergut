function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-cssanimations-cssvhunit-cssvwunit-flexbox-fullscreen-objectfit-svg-svgasimg-video-webaudio-webgl-webp-websockets-webworkers-setclasses !*/
!function (e, n, t) {
  function r(e, n) {
    return _typeof(e) === n;
  }

  function o() {
    var e, n, t, o, a, i, s;

    for (var l in T) {
      if (T.hasOwnProperty(l)) {
        if (e = [], n = T[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }

        for (o = r(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), b.push((o ? "" : "no-") + s.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = _.className,
        t = Modernizr._config.classPrefix || "";

    if (P && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), P ? _.className.baseVal = n : _.className = n);
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : P ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function s(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }

  function l(n, t, r) {
    var o;

    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, n, t);
      var a = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (a) {
        var i = a.error ? "error" : "log";
        a[i].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !t && n.currentStyle && n.currentStyle[r];

    return o;
  }

  function u(e, n) {
    return e - 1 === n || e === n || e + 1 === n;
  }

  function c(e, n) {
    if ("object" == _typeof(e)) for (var t in e) {
      B(e, t) && c(t, e[t]);
    } else {
      e = e.toLowerCase();
      var r = e.split("."),
          o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == r.length ? Modernizr[r[0]] = n : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = n), a([(n && 0 != n ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  function f(e, n) {
    return !!~("" + e).indexOf(n);
  }

  function p() {
    var e = n.body;
    return e || (e = i(P ? "svg" : "body"), e.fake = !0), e;
  }

  function d(e, t, r, o) {
    var a,
        s,
        l,
        u,
        c = "modernizr",
        f = i("div"),
        d = p();
    if (parseInt(r, 10)) for (; r--;) {
      l = i("div"), l.id = o ? o[r] : c + (r + 1), f.appendChild(l);
    }
    return a = i("style"), a.type = "text/css", a.id = "s" + c, (d.fake ? d : f).appendChild(a), d.appendChild(f), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), f.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = _.style.overflow, _.style.overflow = "hidden", _.appendChild(d)), s = t(f, e), d.fake ? (d.parentNode.removeChild(d), _.style.overflow = u, _.offsetHeight) : f.parentNode.removeChild(f), !!s;
  }

  function A(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }

  function v(e, n, t) {
    var o;

    for (var a in e) {
      if (e[a] in n) return t === !1 ? e[a] : (o = n[e[a]], r(o, "function") ? A(o, t || n) : o);
    }

    return !1;
  }

  function g(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function m(n, r) {
    var o = n.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(g(n[o]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var a = []; o--;) {
        a.push("(" + g(n[o]) + ":" + r + ")");
      }

      return a = a.join(" or "), d("@supports (" + a + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == l(e, null, "position");
      });
    }

    return t;
  }

  function y(e, n, o, a) {
    function l() {
      c && (delete $.style, delete $.modElem);
    }

    if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
      var u = m(e, o);
      if (!r(u, "undefined")) return u;
    }

    for (var c, p, d, A, v, g = ["modernizr", "tspan", "samp"]; !$.style && g.length;) {
      c = !0, $.modElem = i(g.shift()), $.style = $.modElem.style;
    }

    for (d = e.length, p = 0; d > p; p++) {
      if (A = e[p], v = $.style[A], f(A, "-") && (A = s(A)), $.style[A] !== t) {
        if (a || r(o, "undefined")) return l(), "pfx" == n ? A : !0;

        try {
          $.style[A] = o;
        } catch (y) {}

        if ($.style[A] != v) return l(), "pfx" == n ? A : !0;
      }
    }

    return l(), !1;
  }

  function h(e, n, t, o, a) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + R.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined") ? y(s, n, o, a) : (s = (e + " " + U.join(i + " ") + i).split(" "), v(s, n, t));
  }

  function w(e, n, r) {
    return h(e, t, t, n, r);
  }

  var b = [],
      T = [],
      C = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      T.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      T.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = C, Modernizr = new Modernizr(), Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var x = !1;

  try {
    x = "WebSocket" in e && 2 === e.WebSocket.CLOSING;
  } catch (S) {}

  Modernizr.addTest("websockets", x), Modernizr.addTest("webaudio", function () {
    var n = ("webkitAudioContext" in e),
        t = ("AudioContext" in e);
    return Modernizr._config.usePrefixes ? n || t : t;
  });

  var _ = n.documentElement,
      P = "svg" === _.nodeName.toLowerCase();

  Modernizr.addTest("audio", function () {
    var e = i("audio"),
        n = !1;

    try {
      n = !!e.canPlayType, n && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), n.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""));
    } catch (t) {}

    return n;
  }), Modernizr.addTest("video", function () {
    var e = i("video"),
        n = !1;

    try {
      n = !!e.canPlayType, n && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), n.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), n.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""));
    } catch (t) {}

    return n;
  }), Modernizr.addTest("webgl", function () {
    var n = i("canvas"),
        t = "probablySupportsContext" in n ? "probablySupportsContext" : "supportsContext";
    return t in n ? n[t]("webgl") || n[t]("experimental-webgl") : "WebGLRenderingContext" in e;
  });
  var B;
  !function () {
    var e = {}.hasOwnProperty;
    B = r(e, "undefined") || r(e.call, "undefined") ? function (e, n) {
      return n in e && r(e.constructor.prototype[n], "undefined");
    } : function (n, t) {
      return e.call(n, t);
    };
  }(), C._l = {}, C.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, C._trigger = function (e, n) {
    if (this._l[e]) {
      var t = this._l[e];
      setTimeout(function () {
        var e, r;

        for (e = 0; e < t.length; e++) {
          (r = t[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    C.addTest = c;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, t) {
      function r(n) {
        var r = n && "load" === n.type ? 1 == o.width : !1,
            a = "webp" === e;
        c(e, a && r ? new Boolean(r) : r), t && t(n);
      }

      var o = new Image();
      o.onerror = r, o.onload = r, o.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        t = n.shift();
    e(t.name, t.uri, function (t) {
      if (t && "load" === t.type) for (var r = 0; r < n.length; r++) {
        e(n[r].name, n[r].uri);
      }
    });
  }), Modernizr.addTest("svgasimg", n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
  var E = "Moz O ms Webkit",
      R = C._config.usePrefixes ? E.split(" ") : [];
  C._cssomPrefixes = R;

  var Q = function Q(n) {
    var r,
        o = prefixes.length,
        a = e.CSSRule;
    if ("undefined" == typeof a) return t;
    if (!n) return !1;
    if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + n;

    for (var i = 0; o > i; i++) {
      var s = prefixes[i],
          l = s.toUpperCase() + "_" + r;
      if (l in a) return "@-" + s.toLowerCase() + "-" + n;
    }

    return !1;
  };

  C.atRule = Q;
  var U = C._config.usePrefixes ? E.toLowerCase().split(" ") : [];
  C._domPrefixes = U;
  var k = C.testStyles = d;
  k("#modernizr { height: 50vh; }", function (n) {
    var t = parseInt(e.innerHeight / 2, 10),
        r = parseInt(l(n, null, "height"), 10);
    Modernizr.addTest("cssvhunit", u(r, t));
  }), k("#modernizr { width: 50vw; }", function (n) {
    var t = parseInt(e.innerWidth / 2, 10),
        r = parseInt(l(n, null, "width"), 10);
    Modernizr.addTest("cssvwunit", u(r, t));
  });
  var N = {
    elem: i("modernizr")
  };

  Modernizr._q.push(function () {
    delete N.elem;
  });

  var $ = {
    style: N.elem.style
  };
  Modernizr._q.unshift(function () {
    delete $.style;
  }), C.testAllProps = h;

  var j = C.prefixed = function (e, n, t) {
    return 0 === e.indexOf("@") ? Q(e) : (-1 != e.indexOf("-") && (e = s(e)), n ? h(e, n, t) : h(e, "pfx"));
  };

  Modernizr.addTest("fullscreen", !(!j("exitFullscreen", n, !1) && !j("cancelFullScreen", n, !1))), Modernizr.addTest("objectfit", !!j("objectFit"), {
    aliases: ["object-fit"]
  }), C.testAllProps = w, Modernizr.addTest("cssanimations", w("animationName", "a", !0)), Modernizr.addTest("flexbox", w("flexBasis", "1px", !0)), Modernizr.addTest("webworkers", "Worker" in e), o(), a(b), delete C.addTest, delete C.addAsyncTest;

  for (var z = 0; z < Modernizr._q.length; z++) {
    Modernizr._q[z]();
  }

  e.Modernizr = Modernizr;
}(window, document);
/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */

/* This file is meant as a standalone workflow for

- testing support for link[rel=preload]

- enabling async CSS loading in browsers that do not support rel=preload

- applying rel preload css once loaded, whether supported or not.

*/

(function (w) {
  "use strict"; // rel=preload support test

  if (!w.loadCSS) {
    w.loadCSS = function () {};
  } // define on the loadCSS obj


  var rp = loadCSS.relpreload = {}; // rel=preload feature support test
  // runs once and returns a function for compat purposes

  rp.support = function () {
    var ret;

    try {
      ret = w.document.createElement("link").relList.supports("preload");
    } catch (e) {
      ret = false;
    }

    return function () {
      return ret;
    };
  }(); // if preload isn't supported, get an asynchronous load by using a non-matching media attribute
  // then change that media back to its intended value on load


  rp.bindMediaToggle = function (link) {
    // remember existing media attr for ultimate state, or default to 'all'
    var finalMedia = link.media || "all";

    function enableStylesheet() {
      // unbind listeners
      if (link.addEventListener) {
        link.removeEventListener("load", enableStylesheet);
      } else if (link.attachEvent) {
        link.detachEvent("onload", enableStylesheet);
      }

      link.setAttribute("onload", null);
      link.media = finalMedia;
    } // bind load handlers to enable media


    if (link.addEventListener) {
      link.addEventListener("load", enableStylesheet);
    } else if (link.attachEvent) {
      link.attachEvent("onload", enableStylesheet);
    } // Set rel and non-applicable media type to start an async request
    // note: timeout allows this to happen async to let rendering continue in IE


    setTimeout(function () {
      link.rel = "stylesheet";
      link.media = "only x";
    }); // also enable media after 3 seconds,
    // which will catch very old browsers (android 2.x, old firefox) that don't support onload on link

    setTimeout(enableStylesheet, 3000);
  }; // loop through link elements in DOM


  rp.poly = function () {
    // double check this to prevent external calls from running
    if (rp.support()) {
      return;
    }

    var links = w.document.getElementsByTagName("link");

    for (var i = 0; i < links.length; i++) {
      var link = links[i]; // qualify links to those with rel=preload and as=style attrs

      if (link.rel === "preload" && link.getAttribute("as") === "style" && !link.getAttribute("data-loadcss")) {
        // prevent rerunning on link
        link.setAttribute("data-loadcss", true); // bind listeners to toggle media back

        rp.bindMediaToggle(link);
      }
    }
  }; // if unsupported, run the polyfill


  if (!rp.support()) {
    // run once at least
    rp.poly(); // rerun poly on an interval until onload

    var run = w.setInterval(rp.poly, 500);

    if (w.addEventListener) {
      w.addEventListener("load", function () {
        rp.poly();
        w.clearInterval(run);
      });
    } else if (w.attachEvent) {
      w.attachEvent("onload", function () {
        rp.poly();
        w.clearInterval(run);
      });
    }
  } // commonjs


  if (typeof exports !== "undefined") {
    exports.loadCSS = loadCSS;
  } else {
    w.loadCSS = loadCSS;
  }
})(typeof global !== "undefined" ? global : this);

(function (window, factory) {
  if (!window) {
    return;
  }

  var globalInstall = function globalInstall() {
    factory(window.lazySizes);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module.exports) {
    factory(require('lazysizes'));
  } else if (typeof define == 'function' && define.amd) {
    define(['lazysizes'], factory);
  } else if (window.lazySizes) {
    globalInstall();
  } else {
    window.addEventListener('lazyunveilread', globalInstall, true);
  }
})(typeof window != 'undefined' ? window : 0, function (window, document, lazySizes) {
  /*jshint eqnull:true */
  'use strict';

  var polyfill;
  var lazySizesCfg = lazySizes.cfg;
  var img = document.createElement('img');
  var supportSrcset = 'sizes' in img && 'srcset' in img;
  var regHDesc = /\s+\d+h/g;

  var fixEdgeHDescriptor = function () {
    var regDescriptors = /\s+(\d+)(w|h)\s+(\d+)(w|h)/;
    var forEach = Array.prototype.forEach;
    return function () {
      var img = document.createElement('img');

      var removeHDescriptors = function removeHDescriptors(source) {
        var ratio, match;
        var srcset = source.getAttribute(lazySizesCfg.srcsetAttr);

        if (srcset) {
          if (match = srcset.match(regDescriptors)) {
            if (match[2] == 'w') {
              ratio = match[1] / match[3];
            } else {
              ratio = match[3] / match[1];
            }

            if (ratio) {
              source.setAttribute('data-aspectratio', ratio);
            }

            source.setAttribute(lazySizesCfg.srcsetAttr, srcset.replace(regHDesc, ''));
          }
        }
      };

      var handler = function handler(e) {
        if (e.detail.instance != lazySizes) {
          return;
        }

        var picture = e.target.parentNode;

        if (picture && picture.nodeName == 'PICTURE') {
          forEach.call(picture.getElementsByTagName('source'), removeHDescriptors);
        }

        removeHDescriptors(e.target);
      };

      var test = function test() {
        if (!!img.currentSrc) {
          document.removeEventListener('lazybeforeunveil', handler);
        }
      };

      document.addEventListener('lazybeforeunveil', handler);
      img.onload = test;
      img.onerror = test;
      img.srcset = 'data:,a 1w 1h';

      if (img.complete) {
        test();
      }
    };
  }();

  if (!lazySizesCfg.supportsType) {
    lazySizesCfg.supportsType = function (type
    /*, elem*/
    ) {
      return !type;
    };
  }

  if (window.HTMLPictureElement && supportSrcset) {
    if (!lazySizes.hasHDescriptorFix && document.msElementsFromPoint) {
      lazySizes.hasHDescriptorFix = true;
      fixEdgeHDescriptor();
    }

    return;
  }

  if (window.picturefill || lazySizesCfg.pf) {
    return;
  }

  lazySizesCfg.pf = function (options) {
    var i, len;

    if (window.picturefill) {
      return;
    }

    for (i = 0, len = options.elements.length; i < len; i++) {
      polyfill(options.elements[i]);
    }
  }; // partial polyfill


  polyfill = function () {
    var ascendingSort = function ascendingSort(a, b) {
      return a.w - b.w;
    };

    var regPxLength = /^\s*\d+\.*\d*px\s*$/;

    var reduceCandidate = function reduceCandidate(srces) {
      var lowerCandidate, bonusFactor;
      var len = srces.length;
      var candidate = srces[len - 1];
      var i = 0;

      for (i; i < len; i++) {
        candidate = srces[i];
        candidate.d = candidate.w / srces.w;

        if (candidate.d >= srces.d) {
          if (!candidate.cached && (lowerCandidate = srces[i - 1]) && lowerCandidate.d > srces.d - 0.13 * Math.pow(srces.d, 2.2)) {
            bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

            if (lowerCandidate.cached) {
              lowerCandidate.d += 0.15 * bonusFactor;
            }

            if (lowerCandidate.d + (candidate.d - srces.d) * bonusFactor > srces.d) {
              candidate = lowerCandidate;
            }
          }

          break;
        }
      }

      return candidate;
    };

    var parseWsrcset = function () {
      var candidates;
      var regWCandidates = /(([^,\s].[^\s]+)\s+(\d+)w)/g;
      var regMultiple = /\s/;

      var addCandidate = function addCandidate(match, candidate, url, wDescriptor) {
        candidates.push({
          c: candidate,
          u: url,
          w: wDescriptor * 1
        });
      };

      return function (input) {
        candidates = [];
        input = input.trim();
        input.replace(regHDesc, '').replace(regWCandidates, addCandidate);

        if (!candidates.length && input && !regMultiple.test(input)) {
          candidates.push({
            c: input,
            u: input,
            w: 99
          });
        }

        return candidates;
      };
    }();

    var runMatchMedia = function runMatchMedia() {
      if (runMatchMedia.init) {
        return;
      }

      runMatchMedia.init = true;
      addEventListener('resize', function () {
        var timer;
        var matchMediaElems = document.getElementsByClassName('lazymatchmedia');

        var run = function run() {
          var i, len;

          for (i = 0, len = matchMediaElems.length; i < len; i++) {
            polyfill(matchMediaElems[i]);
          }
        };

        return function () {
          clearTimeout(timer);
          timer = setTimeout(run, 66);
        };
      }());
    };

    var createSrcset = function createSrcset(elem, isImage) {
      var parsedSet;
      var srcSet = elem.getAttribute('srcset') || elem.getAttribute(lazySizesCfg.srcsetAttr);

      if (!srcSet && isImage) {
        srcSet = !elem._lazypolyfill ? elem.getAttribute(lazySizesCfg.srcAttr) || elem.getAttribute('src') : elem._lazypolyfill._set;
      }

      if (!elem._lazypolyfill || elem._lazypolyfill._set != srcSet) {
        parsedSet = parseWsrcset(srcSet || '');

        if (isImage && elem.parentNode) {
          parsedSet.isPicture = elem.parentNode.nodeName.toUpperCase() == 'PICTURE';

          if (parsedSet.isPicture) {
            if (window.matchMedia) {
              lazySizes.aC(elem, 'lazymatchmedia');
              runMatchMedia();
            }
          }
        }

        parsedSet._set = srcSet;
        Object.defineProperty(elem, '_lazypolyfill', {
          value: parsedSet,
          writable: true
        });
      }
    };

    var getX = function getX(elem) {
      var dpr = window.devicePixelRatio || 1;
      var optimum = lazySizes.getX && lazySizes.getX(elem);
      return Math.min(optimum || dpr, 2.5, dpr);
    };

    var _matchesMedia = function matchesMedia(media) {
      if (window.matchMedia) {
        _matchesMedia = function matchesMedia(media) {
          return !media || (matchMedia(media) || {}).matches;
        };
      } else {
        return !media;
      }

      return _matchesMedia(media);
    };

    var getCandidate = function getCandidate(elem) {
      var sources, i, len, media, source, srces, src, width;
      source = elem;
      createSrcset(source, true);
      srces = source._lazypolyfill;

      if (srces.isPicture) {
        for (i = 0, sources = elem.parentNode.getElementsByTagName('source'), len = sources.length; i < len; i++) {
          if (lazySizesCfg.supportsType(sources[i].getAttribute('type'), elem) && _matchesMedia(sources[i].getAttribute('media'))) {
            source = sources[i];
            createSrcset(source);
            srces = source._lazypolyfill;
            break;
          }
        }
      }

      if (srces.length > 1) {
        width = source.getAttribute('sizes') || '';
        width = regPxLength.test(width) && parseInt(width, 10) || lazySizes.gW(elem, elem.parentNode);
        srces.d = getX(elem);

        if (!srces.src || !srces.w || srces.w < width) {
          srces.w = width;
          src = reduceCandidate(srces.sort(ascendingSort));
          srces.src = src;
        } else {
          src = srces.src;
        }
      } else {
        src = srces[0];
      }

      return src;
    };

    var p = function p(elem) {
      if (supportSrcset && elem.parentNode && elem.parentNode.nodeName.toUpperCase() != 'PICTURE') {
        return;
      }

      var candidate = getCandidate(elem);

      if (candidate && candidate.u && elem._lazypolyfill.cur != candidate.u) {
        elem._lazypolyfill.cur = candidate.u;
        candidate.cached = true;
        elem.setAttribute(lazySizesCfg.srcAttr, candidate.u);
        elem.setAttribute('src', candidate.u);
      }
    };

    p.parse = parseWsrcset;
    return p;
  }();

  if (lazySizesCfg.loadedClass && lazySizesCfg.loadingClass) {
    (function () {
      var sels = [];
      ['img[sizes$="px"][srcset].', 'picture > img:not([srcset]).'].forEach(function (sel) {
        sels.push(sel + lazySizesCfg.loadedClass);
        sels.push(sel + lazySizesCfg.loadingClass);
      });
      lazySizesCfg.pf({
        elements: document.querySelectorAll(sels.join(', '))
      });
    })();
  }
});

(function (window, factory) {
  var lazySizes = factory(window, window.document, Date);
  window.lazySizes = lazySizes;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module.exports) {
    module.exports = lazySizes;
  }
})(typeof window != 'undefined' ? window : {}, function l(window, document, Date) {
  // Pass in the windoe Date function also for SSR because the Date class can be lost
  'use strict';
  /*jshint eqnull:true */

  var lazysizes, lazySizesCfg;

  (function () {
    var prop;
    var lazySizesDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 0,
      throttleDelay: 125
    };
    lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

    for (prop in lazySizesDefaults) {
      if (!(prop in lazySizesCfg)) {
        lazySizesCfg[prop] = lazySizesDefaults[prop];
      }
    }
  })();

  if (!document || !document.getElementsByClassName) {
    return {
      init: function init() {},
      cfg: lazySizesCfg,
      noSupport: true
    };
  }

  var docElem = document.documentElement;
  var supportPicture = window.HTMLPictureElement;
  var _addEventListener = 'addEventListener';
  var _getAttribute = 'getAttribute';
  /**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */

  var addEventListener = window[_addEventListener].bind(window);

  var setTimeout = window.setTimeout;
  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
  var requestIdleCallback = window.requestIdleCallback;
  var regPicture = /^picture$/i;
  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
  var regClassCache = {};
  var forEach = Array.prototype.forEach;

  var hasClass = function hasClass(ele, cls) {
    if (!regClassCache[cls]) {
      regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    }

    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };

  var addClass = function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };

  var removeClass = function removeClass(ele, cls) {
    var reg;

    if (reg = hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
    var action = add ? _addEventListener : 'removeEventListener';

    if (add) {
      addRemoveLoadEvents(dom, fn);
    }

    loadEvents.forEach(function (evt) {
      dom[action](evt, fn);
    });
  };

  var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
    var event = document.createEvent('Event');

    if (!detail) {
      detail = {};
    }

    detail.instance = lazysizes;
    event.initEvent(name, !noBubbles, !noCancelable);
    event.detail = detail;
    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function updatePolyfill(el, full) {
    var polyfill;

    if (!supportPicture && (polyfill = window.picturefill || lazySizesCfg.pf)) {
      if (full && full.src && !el[_getAttribute]('srcset')) {
        el.setAttribute('srcset', full.src);
      }

      polyfill({
        reevaluate: true,
        elements: [el]
      });
    } else if (full && full.src) {
      el.src = full.src;
    }
  };

  var getCSS = function getCSS(elem, style) {
    return (getComputedStyle(elem, null) || {})[style];
  };

  var getWidth = function getWidth(elem, parent, width) {
    width = width || elem.offsetWidth;

    while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
      width = parent.offsetWidth;
      parent = parent.parentNode;
    }

    return width;
  };

  var rAF = function () {
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function run() {
      var runFns = fns;
      fns = firstFns.length ? secondFns : firstFns;
      running = true;
      waiting = false;

      while (runFns.length) {
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function rafBatch(fn, queue) {
      if (running && !queue) {
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if (!waiting) {
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;
    return rafBatch;
  }();

  var rAFIt = function rAFIt(fn, simple) {
    return simple ? function () {
      rAF(fn);
    } : function () {
      var that = this;
      var args = arguments;
      rAF(function () {
        fn.apply(that, args);
      });
    };
  };

  var throttle = function throttle(fn) {
    var running;
    var lastTime = 0;
    var gDelay = lazySizesCfg.throttleDelay;
    var rICTimeout = lazySizesCfg.ricTimeout;

    var run = function run() {
      running = false;
      lastTime = Date.now();
      fn();
    };

    var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
      requestIdleCallback(run, {
        timeout: rICTimeout
      });

      if (rICTimeout !== lazySizesCfg.ricTimeout) {
        rICTimeout = lazySizesCfg.ricTimeout;
      }
    } : rAFIt(function () {
      setTimeout(run);
    }, true);
    return function (isPriority) {
      var delay;

      if (isPriority = isPriority === true) {
        rICTimeout = 33;
      }

      if (running) {
        return;
      }

      running = true;
      delay = gDelay - (Date.now() - lastTime);

      if (delay < 0) {
        delay = 0;
      }

      if (isPriority || delay < 9) {
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  }; //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html


  var debounce = function debounce(func) {
    var timeout, timestamp;
    var wait = 99;

    var run = function run() {
      timeout = null;
      func();
    };

    var later = function later() {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function () {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  var loader = function () {
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;
    var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);
    var shrinkExpand = 0;
    var currentExpand = 0;
    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function resetPreloading(e) {
      isLoading--;

      if (!e || isLoading < 0 || !e.target) {
        isLoading = 0;
      }
    };

    var isVisible = function isVisible(elem) {
      if (isBodyHidden == null) {
        isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
      }

      return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
    };

    var isNestedVisible = function isNestedVisible(elem, elemExpand) {
      var outerRect;
      var parent = elem;
      var visible = isVisible(elem);
      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
        visible = (getCSS(parent, 'opacity') || 1) > 0;

        if (visible && getCSS(parent, 'overflow') != 'visible') {
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
        }
      }

      return visible;
    };

    var checkElements = function checkElements() {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
      var lazyloadElems = lazysizes.elements;

      if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
        i = 0;
        lowRuns++;

        for (; i < eLlen; i++) {
          if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
            continue;
          }

          if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
            unveilElement(lazyloadElems[i]);
            continue;
          }

          if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
            elemExpand = currentExpand;
          }

          if (!defaultExpand) {
            defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
            lazysizes._defEx = defaultExpand;
            preloadExpand = defaultExpand * lazySizesCfg.expFactor;
            hFac = lazySizesCfg.hFac;
            isBodyHidden = null;

            if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
              currentExpand = preloadExpand;
              lowRuns = 0;
            } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
              currentExpand = defaultExpand;
            } else {
              currentExpand = shrinkExpand;
            }
          }

          if (beforeExpandVal !== elemExpand) {
            eLvW = innerWidth + elemExpand * hFac;
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;

            if (isLoading > 9) {
              break;
            }
          } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto'))) {
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if (autoLoadElem && !loadedSomething) {
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function switchLoadingClass(e) {
      var elem = e.target;

      if (elem._lazyCache) {
        delete elem._lazyCache;
        return;
      }

      resetPreloading(e);
      addClass(elem, lazySizesCfg.loadedClass);
      removeClass(elem, lazySizesCfg.loadingClass);
      addRemoveLoadEvents(elem, rafSwitchLoadingClass);
      triggerEvent(elem, 'lazyloaded');
    };

    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);

    var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
      rafedSwitchLoadingClass({
        target: e.target
      });
    };

    var changeIframeSrc = function changeIframeSrc(elem, src) {
      try {
        elem.contentWindow.location.replace(src);
      } catch (e) {
        elem.src = src;
      }
    };

    var handleSources = function handleSources(source) {
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

      if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
        source.setAttribute('media', customMedia);
      }

      if (sourceSrcset) {
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
      var src, srcset, parent, isPicture, event, firesLoad;

      if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
        if (sizes) {
          if (isAuto) {
            addClass(elem, lazySizesCfg.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
        src = elem[_getAttribute](lazySizesCfg.srcAttr);

        if (isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);
        event = {
          target: elem
        };
        addClass(elem, lazySizesCfg.loadingClass);

        if (firesLoad) {
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if (isPicture) {
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if (srcset) {
          elem.setAttribute('srcset', srcset);
        } else if (src && !isPicture) {
          if (regIframe.test(elem.nodeName)) {
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if (isImg && (srcset || isPicture)) {
          updatePolyfill(elem, {
            src: src
          });
        }
      }

      if (elem._lazyRace) {
        delete elem._lazyRace;
      }

      removeClass(elem, lazySizesCfg.lazyClass);
      rAF(function () {
        // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
        var isLoaded = elem.complete && elem.naturalWidth > 1;

        if (!firesLoad || isLoaded) {
          if (isLoaded) {
            addClass(elem, 'ls-is-cached');
          }

          switchLoadingClass(event);
          elem._lazyCache = true;
          setTimeout(function () {
            if ('_lazyCache' in elem) {
              delete elem._lazyCache;
            }
          }, 9);
        }

        if (elem.loading == 'lazy') {
          isLoading--;
        }
      }, true);
    });

    var unveilElement = function unveilElement(elem) {
      if (elem._lazyRace) {
        return;
      }

      var detail;
      var isImg = regImg.test(elem.nodeName); //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")

      var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));

      var isAuto = sizes == 'auto';

      if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
        return;
      }

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if (isAuto) {
        autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;
      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var afterScroll = debounce(function () {
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
    });

    var altLoadmodeScrollListner = function altLoadmodeScrollListner() {
      if (lazySizesCfg.loadMode == 3) {
        lazySizesCfg.loadMode = 2;
      }

      afterScroll();
    };

    var onload = function onload() {
      if (isCompleted) {
        return;
      }

      if (Date.now() - started < 999) {
        setTimeout(onload, 999);
        return;
      }

      isCompleted = true;
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
      addEventListener('scroll', altLoadmodeScrollListner, true);
    };

    return {
      _: function _() {
        started = Date.now();
        lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);
        addEventListener('scroll', throttledCheckElements, true);
        addEventListener('resize', throttledCheckElements, true);
        addEventListener('pageshow', function (e) {
          if (e.persisted) {
            var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

            if (loadingElements.length && loadingElements.forEach) {
              requestAnimationFrame(function () {
                loadingElements.forEach(function (img) {
                  if (img.complete) {
                    unveilElement(img);
                  }
                });
              });
            }
          }
        });

        if (window.MutationObserver) {
          new MutationObserver(throttledCheckElements).observe(docElem, {
            childList: true,
            subtree: true,
            attributes: true
          });
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);

          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);

          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true); //, 'fullscreenchange'

        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (name) {
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if (/d$|^c/.test(document.readyState)) {
          onload();
        } else {
          addEventListener('load', onload);

          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);

          setTimeout(onload, 20000);
        }

        if (lazysizes.elements.length) {
          checkElements();

          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement,
      _aLSL: altLoadmodeScrollListner
    };
  }();

  var autoSizer = function () {
    var autosizesElems;
    var sizeElement = rAFIt(function (elem, parent, event, width) {
      var sources, i, len;
      elem._lazysizesWidth = width;
      width += 'px';
      elem.setAttribute('sizes', width);

      if (regPicture.test(parent.nodeName || '')) {
        sources = parent.getElementsByTagName('source');

        for (i = 0, len = sources.length; i < len; i++) {
          sources[i].setAttribute('sizes', width);
        }
      }

      if (!event.detail.dataAttr) {
        updatePolyfill(elem, event.detail);
      }
    });

    var getSizeElement = function getSizeElement(elem, dataAttr, width) {
      var event;
      var parent = elem.parentNode;

      if (parent) {
        width = getWidth(elem, parent, width);
        event = triggerEvent(elem, 'lazybeforesizes', {
          width: width,
          dataAttr: !!dataAttr
        });

        if (!event.defaultPrevented) {
          width = event.detail.width;

          if (width && width !== elem._lazysizesWidth) {
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function updateElementsSizes() {
      var i;
      var len = autosizesElems.length;

      if (len) {
        i = 0;

        for (; i < len; i++) {
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
    return {
      _: function _() {
        autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  }();

  var init = function init() {
    if (!init.i && document.getElementsByClassName) {
      init.i = true;

      autoSizer._();

      loader._();
    }
  };

  setTimeout(function () {
    if (lazySizesCfg.init) {
      init();
    }
  });
  lazysizes = {
    cfg: lazySizesCfg,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF
  };
  return lazysizes;
});
/*! npm.im/object-fit-images 3.2.4 */


var objectFitImages = function () {
  'use strict';

  var OFI = 'bfred-it:object-fit-images';
  var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
  var testImg = typeof Image === 'undefined' ? {
    style: {
      'object-position': 1
    }
  } : new Image();
  var supportsObjectFit = ('object-fit' in testImg.style);
  var supportsObjectPosition = ('object-position' in testImg.style);
  var supportsOFI = ('background-size' in testImg.style);
  var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
  var nativeGetAttribute = testImg.getAttribute;
  var nativeSetAttribute = testImg.setAttribute;
  var autoModeEnabled = false;

  function createPlaceholder(w, h) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E";
  }

  function polyfillCurrentSrc(el) {
    if (el.srcset && !supportsCurrentSrc && window.picturefill) {
      var pf = window.picturefill._; // parse srcset with picturefill where currentSrc isn't available

      if (!el[pf.ns] || !el[pf.ns].evaled) {
        // force synchronous srcset parsing
        pf.fillImg(el, {
          reselect: true
        });
      }

      if (!el[pf.ns].curSrc) {
        // force picturefill to parse srcset
        el[pf.ns].supported = false;
        pf.fillImg(el, {
          reselect: true
        });
      } // retrieve parsed currentSrc, if any


      el.currentSrc = el[pf.ns].curSrc || el.src;
    }
  }

  function getStyle(el) {
    var style = getComputedStyle(el).fontFamily;
    var parsed;
    var props = {};

    while ((parsed = propRegex.exec(style)) !== null) {
      props[parsed[1]] = parsed[2];
    }

    return props;
  }

  function setPlaceholder(img, width, height) {
    // Default: fill width, no height
    var placeholder = createPlaceholder(width || 1, height || 0); // Only set placeholder if it's different

    if (nativeGetAttribute.call(img, 'src') !== placeholder) {
      nativeSetAttribute.call(img, 'src', placeholder);
    }
  }

  function onImageReady(img, callback) {
    // naturalWidth is only available when the image headers are loaded,
    // this loop will poll it every 100ms.
    if (img.naturalWidth) {
      callback(img);
    } else {
      setTimeout(onImageReady, 100, img, callback);
    }
  }

  function fixOne(el) {
    var style = getStyle(el);
    var ofi = el[OFI];
    style['object-fit'] = style['object-fit'] || 'fill'; // default value
    // Avoid running where unnecessary, unless OFI had already done its deed

    if (!ofi.img) {
      // fill is the default behavior so no action is necessary
      if (style['object-fit'] === 'fill') {
        return;
      } // Where object-fit is supported and object-position isn't (Safari < 10)


      if (!ofi.skipTest && // unless user wants to apply regardless of browser support
      supportsObjectFit && // if browser already supports object-fit
      !style['object-position'] // unless object-position is used
      ) {
          return;
        }
    } // keep a clone in memory while resetting the original to a blank


    if (!ofi.img) {
      ofi.img = new Image(el.width, el.height);
      ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
      ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src; // preserve for any future cloneNode calls
      // https://github.com/bfred-it/object-fit-images/issues/53

      nativeSetAttribute.call(el, "data-ofi-src", el.src);

      if (el.srcset) {
        nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
      }

      setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height); // remove srcset because it overrides src

      if (el.srcset) {
        el.srcset = '';
      }

      try {
        keepSrcUsable(el);
      } catch (err) {
        if (window.console) {
          console.warn('https://bit.ly/ofi-old-browser');
        }
      }
    }

    polyfillCurrentSrc(ofi.img);
    el.style.backgroundImage = "url(\"" + (ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"') + "\")";
    el.style.backgroundPosition = style['object-position'] || 'center';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundOrigin = 'content-box';

    if (/scale-down/.test(style['object-fit'])) {
      onImageReady(ofi.img, function () {
        if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
          el.style.backgroundSize = 'contain';
        } else {
          el.style.backgroundSize = 'auto';
        }
      });
    } else {
      el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
    }

    onImageReady(ofi.img, function (img) {
      setPlaceholder(el, img.naturalWidth, img.naturalHeight);
    });
  }

  function keepSrcUsable(el) {
    var descriptors = {
      get: function get(prop) {
        return el[OFI].img[prop ? prop : 'src'];
      },
      set: function set(value, prop) {
        el[OFI].img[prop ? prop : 'src'] = value;
        nativeSetAttribute.call(el, "data-ofi-" + prop, value); // preserve for any future cloneNode

        fixOne(el);
        return value;
      }
    };
    Object.defineProperty(el, 'src', descriptors);
    Object.defineProperty(el, 'currentSrc', {
      get: function get() {
        return descriptors.get('currentSrc');
      }
    });
    Object.defineProperty(el, 'srcset', {
      get: function get() {
        return descriptors.get('srcset');
      },
      set: function set(ss) {
        return descriptors.set(ss, 'srcset');
      }
    });
  }

  function hijackAttributes() {
    function getOfiImageMaybe(el, name) {
      return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
    }

    if (!supportsObjectPosition) {
      HTMLImageElement.prototype.getAttribute = function (name) {
        return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
      };

      HTMLImageElement.prototype.setAttribute = function (name, value) {
        return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
      };
    }
  }

  function fix(imgs, opts) {
    var startAutoMode = !autoModeEnabled && !imgs;
    opts = opts || {};
    imgs = imgs || 'img';

    if (supportsObjectPosition && !opts.skipTest || !supportsOFI) {
      return false;
    } // use imgs as a selector or just select all images


    if (imgs === 'img') {
      imgs = document.getElementsByTagName('img');
    } else if (typeof imgs === 'string') {
      imgs = document.querySelectorAll(imgs);
    } else if (!('length' in imgs)) {
      imgs = [imgs];
    } // apply fix to all


    for (var i = 0; i < imgs.length; i++) {
      imgs[i][OFI] = imgs[i][OFI] || {
        skipTest: opts.skipTest
      };
      fixOne(imgs[i]);
    }

    if (startAutoMode) {
      document.body.addEventListener('load', function (e) {
        if (e.target.tagName === 'IMG') {
          fix(e.target, {
            skipTest: opts.skipTest
          });
        }
      }, true);
      autoModeEnabled = true;
      imgs = 'img'; // reset to a generic selector for watchMQ
    } // if requested, watch media queries for object-fit change


    if (opts.watchMQ) {
      window.addEventListener('resize', fix.bind(null, imgs, {
        skipTest: opts.skipTest
      }));
    }
  }

  fix.supportsObjectFit = supportsObjectFit;
  fix.supportsObjectPosition = supportsObjectPosition;
  hijackAttributes();
  return fix;
}();

if (document.documentElement.classList.contains('no-objectfit')) objectFitImages();