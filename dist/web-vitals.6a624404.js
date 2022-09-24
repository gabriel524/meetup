// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"RBA8d":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "64cfdb576a624404";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aOXYM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCLS", ()=>h
);
parcelHelpers.export(exports, "getFCP", ()=>d
);
parcelHelpers.export(exports, "getFID", ()=>L
);
parcelHelpers.export(exports, "getLCP", ()=>F
);
parcelHelpers.export(exports, "getTTFB", ()=>P
);
var e, t, n, i, r2 = function(e1, t1) {
    return {
        name: e1,
        value: (void 0) === t1 ? -1 : t1,
        delta: 0,
        entries: [],
        id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1000000000000)
    };
}, a = function(e1, t1) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e1)) {
            if ("first-input" === e1 && !("PerformanceEventTiming" in self)) return;
            var n1 = new PerformanceObserver(function(e2) {
                return e2.getEntries().map(t1);
            });
            return n1.observe({
                type: e1,
                buffered: !0
            }), n1;
        }
    } catch (e2) {
    }
}, o = function(e1, t1) {
    var n2 = function n3(i1) {
        "pagehide" !== i1.type && "hidden" !== document.visibilityState || (e1(i1), t1 && (removeEventListener("visibilitychange", n3, !0), removeEventListener("pagehide", n3, !0)));
    };
    addEventListener("visibilitychange", n2, !0), addEventListener("pagehide", n2, !0);
}, u = function(e1) {
    addEventListener("pageshow", function(t1) {
        t1.persisted && e1(t1);
    }, !0);
}, c = function(e1, t1, n2) {
    var i1;
    return function(r1) {
        t1.value >= 0 && (r1 || n2) && (t1.delta = t1.value - (i1 || 0), (t1.delta || (void 0) === i1) && (i1 = t1.value, e1(t1)));
    };
}, f = -1, s = function() {
    return "hidden" === document.visibilityState ? 0 : 1 / 0;
}, m1 = function() {
    o(function(e1) {
        var t1 = e1.timeStamp;
        f = t1;
    }, !0);
}, v = function() {
    return f < 0 && (f = s(), m1(), u(function() {
        setTimeout(function() {
            f = s(), m1();
        }, 0);
    })), {
        get firstHiddenTime () {
            return f;
        }
    };
}, d = function(e1, t1) {
    var n2, i1 = v(), o1 = r2("FCP"), f1 = function(e2) {
        "first-contentful-paint" === e2.name && (m2 && m2.disconnect(), e2.startTime < i1.firstHiddenTime && (o1.value = e2.startTime, o1.entries.push(e2), n2(!0)));
    }, s1 = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], m2 = s1 ? null : a("paint", f1);
    (s1 || m2) && (n2 = c(e1, o1, t1), s1 && f1(s1), u(function(i2) {
        o1 = r2("FCP"), n2 = c(e1, o1, t1), requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                o1.value = performance.now() - i2.timeStamp, n2(!0);
            });
        });
    }));
}, p = !1, l = -1, h = function(e1, t1) {
    p || (d(function(e2) {
        l = e2.value;
    }), p = !0);
    var n2, i1 = function(t2) {
        l > -1 && e1(t2);
    }, f1 = r2("CLS", 0), s1 = 0, m2 = [], v1 = function(e2) {
        if (!e2.hadRecentInput) {
            var t2 = m2[0], i2 = m2[m2.length - 1];
            s1 && e2.startTime - i2.startTime < 1000 && e2.startTime - t2.startTime < 5000 ? (s1 += e2.value, m2.push(e2)) : (s1 = e2.value, m2 = [
                e2
            ]), s1 > f1.value && (f1.value = s1, f1.entries = m2, n2());
        }
    }, h1 = a("layout-shift", v1);
    h1 && (n2 = c(i1, f1, t1), o(function() {
        h1.takeRecords().map(v1), n2(!0);
    }), u(function() {
        s1 = 0, l = -1, f1 = r2("CLS", 0), n2 = c(i1, f1, t1);
    }));
}, T = {
    passive: !0,
    capture: !0
}, y = new Date, g = function(i1, r1) {
    e || (e = r1, t = i1, n = new Date, w(removeEventListener), E());
}, E = function() {
    if (t >= 0 && t < n - y) {
        var r1 = {
            entryType: "first-input",
            name: e.type,
            target: e.target,
            cancelable: e.cancelable,
            startTime: e.timeStamp,
            processingStart: e.timeStamp + t
        };
        i.forEach(function(e1) {
            e1(r1);
        }), i = [];
    }
}, S = function(e1) {
    if (e1.cancelable) {
        var t1 = (e1.timeStamp > 1000000000000 ? new Date : performance.now()) - e1.timeStamp;
        "pointerdown" == e1.type ? (function(e2, t3) {
            var n2 = function() {
                g(e2, t3), r3();
            }, i1 = function() {
                r3();
            }, r3 = function() {
                removeEventListener("pointerup", n2, T), removeEventListener("pointercancel", i1, T);
            };
            addEventListener("pointerup", n2, T), addEventListener("pointercancel", i1, T);
        })(t1, e1) : g(t1, e1);
    }
}, w = function(e1) {
    [
        "mousedown",
        "keydown",
        "touchstart",
        "pointerdown"
    ].forEach(function(t3) {
        return e1(t3, S, T);
    });
}, L = function(n2, f1) {
    var s1, m2 = v(), d1 = r2("FID"), p1 = function(e1) {
        e1.startTime < m2.firstHiddenTime && (d1.value = e1.processingStart - e1.startTime, d1.entries.push(e1), s1(!0));
    }, l1 = a("first-input", p1);
    s1 = c(n2, d1, f1), l1 && o(function() {
        l1.takeRecords().map(p1), l1.disconnect();
    }, !0), l1 && u(function() {
        var a1;
        d1 = r2("FID"), s1 = c(n2, d1, f1), i = [], t = -1, e = null, w(addEventListener), a1 = p1, i.push(a1), E();
    });
}, b = {
}, F = function(e1, t3) {
    var n2, i1 = v(), f1 = r2("LCP"), s1 = function(e2) {
        var t4 = e2.startTime;
        t4 < i1.firstHiddenTime && (f1.value = t4, f1.entries.push(e2), n2());
    }, m2 = a("largest-contentful-paint", s1);
    if (m2) {
        n2 = c(e1, f1, t3);
        var d1 = function() {
            b[f1.id] || (m2.takeRecords().map(s1), m2.disconnect(), b[f1.id] = !0, n2(!0));
        };
        [
            "keydown",
            "click"
        ].forEach(function(e2) {
            addEventListener(e2, d1, {
                once: !0,
                capture: !0
            });
        }), o(d1, !0), u(function(i3) {
            f1 = r2("LCP"), n2 = c(e1, f1, t3), requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    f1.value = performance.now() - i3.timeStamp, b[f1.id] = !0, n2(!0);
                });
            });
        });
    }
}, P = function(e1) {
    var t3, n2 = r2("TTFB");
    t3 = function() {
        try {
            var t4 = performance.getEntriesByType("navigation")[0] || function() {
                var e2 = performance.timing, t5 = {
                    entryType: "navigation",
                    startTime: 0
                };
                for(var n3 in e2)"navigationStart" !== n3 && "toJSON" !== n3 && (t5[n3] = Math.max(e2[n3] - e2.navigationStart, 0));
                return t5;
            }();
            if (n2.value = n2.delta = t4.responseStart, n2.value < 0 || n2.value > performance.now()) return;
            n2.entries = [
                t4
            ], e1(n2);
        } catch (e2) {
        }
    }, "complete" === document.readyState ? setTimeout(t3, 0) : addEventListener("load", function() {
        return setTimeout(t3, 0);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2gPqr"}]},["RBA8d"], null, "parcelRequireb2e4")

//# sourceMappingURL=web-vitals.6a624404.js.map
