jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b)
            return c;
        if (2 == (b /= e / 2))
            return c + d;
        if (g || (g = e * .3 * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : .5 * h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
});
jQuery.easing['jswing'] = jQuery.easing['swing'];
Math.clamp = function(x, low, high) {
    return Math.min(Math.max(x, low), high);
} /*! Raven.js 3.4.0 (4dba6fe) | github.com/getsentry/raven-js */

!function(a) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.Raven = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)
                        return i(g, !0);
                    if (f)
                        return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; d.length > g; g++)
            e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            function d(a, b, c, d) {
                return JSON.stringify(a, e(b, d), c)
            }
            function e(a, b) {
                var c = [],
                    d = [];
                return null == b && (b = function(a, b) {
                    return c[0] === b ? "[Circular ~]" : "[Circular ~." + d.slice(0, c.indexOf(b)).join(".") + "]"
                }), function(e, f) {
                    if (c.length > 0) {
                        var g = c.indexOf(this);
                        ~g ? c.splice(g + 1) : c.push(this), ~g ? d.splice(g, 1 / 0, e) : d.push(e), ~c.indexOf(f) && (f = b.call(this, e, f))
                    } else
                        c.push(f);
                    return null == a ? f : a.call(this, e, f)
                }
            }
            c = b.exports = d, c.getSerialize = e
        }, {}],
        2: [function(a, b, c) {
            "use strict";
            function d(a) {
                this.name = "RavenConfigError", this.message = a
            }
            d.prototype = new Error, d.prototype.constructor = d, b.exports = d
        }, {}],
        3: [function(a, b, c) {
            "use strict";
            var d = function(a, b, c) {
                var d = a[b],
                    e = a;
                if (b in a) {
                    var f = "warn" === b ? "warning" : b;
                    a[b] = function() {
                        var a = [].slice.call(arguments),
                            b = "" + a.join(" "),
                            g = {
                                level: f,
                                logger: "console",
                                extra: {
                                    arguments: a
                                }
                            };
                        c && c(b, g), d && Function.prototype.apply.call(d, e, a)
                    }
                }
            };
            b.exports = {
                wrapMethod: d
            }
        }, {}],
        4: [function(a, b, c) {
            "use strict";
            function d() {
                return +new Date
            }
            function e() {
                this.a = !("object" != typeof JSON || !JSON.stringify), this.b = "undefined" != typeof document, this.c = null, this.d = null, this.e = null, this.f = null, this.g = null, this.h = {}, this.i = {
                    logger: "javascript",
                    ignoreErrors: [],
                    ignoreUrls: [],
                    whitelistUrls: [],
                    includePaths: [],
                    crossOrigin: "anonymous",
                    collectWindowErrors: !0,
                    maxMessageLength: 0,
                    stackTraceLimit: 50
                }, this.j = 0, this.k = !1, this.l = Error.stackTraceLimit, this.m = window.console || {}, this.n = {}, this.o = [], this.p = d(), this.q = [], this.r = [], this.s = 20, this.t = null, this.u = window.location, this.v = this.u && this.u.href;
                for (var a in this.m)
                    this.n[a] = this.m[a]
            }
            var f = a(7),
                g = a(2),
                h = a(6),
                i = a(1),
                j = h.isFunction,
                k = h.isUndefined,
                l = h.isError,
                m = h.isEmptyObject,
                n = h.hasKey,
                o = h.joinRegExp,
                p = h.each,
                q = h.objectMerge,
                r = h.truncate,
                s = h.urlencode,
                t = h.uuid4,
                u = h.htmlTreeAsString,
                v = h.parseUrl,
                w = h.isString,
                x = a(3).wrapMethod,
                y = "source protocol user pass host port path".split(" "),
                z = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
            e.prototype = {
                VERSION: "3.4.0",
                debug: !1,
                TraceKit: f,
                config: function(a, b) {
                    var c = this;
                    if (this.e)
                        return this.w("error", "Error: Raven has already been configured"), this;
                    if (!a)
                        return this;
                    b && p(b, function(a, b) {
                        "tags" === a || "extra" === a ? c.h[a] = b : c.i[a] = b
                    });
                    var d = this.x(a),
                        e = d.path.lastIndexOf("/"),
                        g = d.path.substr(1, e);
                    return this.y = a, this.i.ignoreErrors.push(/^Script error\.?$/), this.i.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), this.i.ignoreErrors = o(this.i.ignoreErrors), this.i.ignoreUrls = this.i.ignoreUrls.length ? o(this.i.ignoreUrls) : !1, this.i.whitelistUrls = this.i.whitelistUrls.length ? o(this.i.whitelistUrls) : !1, this.i.includePaths = o(this.i.includePaths), this.f = d.user, this.z = d.pass && d.pass.substr(1), this.g = d.path.substr(e + 1), this.e = this.A(d), this.B = this.e + "/" + g + "api/" + this.g + "/store/", f.collectWindowErrors = !!this.i.collectWindowErrors, this
                },
                install: function() {
                    var a = this;
                    return this.isSetup() && !this.k && (f.report.subscribe(function() {
                        a.C.apply(a, arguments)
                    }), this.D(), this.E(), this.k = !0), Error.stackTraceLimit = this.i.stackTraceLimit, this
                },
                context: function(a, b, c) {
                    return j(a) && (c = b || [], b = a, a = void 0), this.wrap(a, b).apply(this, c)
                },
                wrap: function(a, b, c) {
                    function d() {
                        var d = [],
                            f = arguments.length,
                            g = !a || a && a.deep !== !1;
                        for (c && j(c) && c.apply(this, arguments); f--;)
                            d[f] = g ? e.wrap(a, arguments[f]) : arguments[f];
                        try {
                            return b.apply(this, d)
                        } catch (h) {
                            throw e.F(), e.captureException(h, a), h
                        }
                    }
                    var e = this;
                    if (k(b) && !j(a))
                        return a;
                    if (j(a) && (b = a, a = void 0), !j(b))
                        return b;
                    try {
                        if (b.G)
                            return b
                    } catch (f) {
                        return b
                    }
                    if (b.H)
                        return b.H;
                    for (var g in b)
                        n(b, g) && (d[g] = b[g]);
                    return d.prototype = b.prototype, b.H = d, d.G = !0, d.I = b, d
                },
                uninstall: function() {
                    return f.report.uninstall(), this.J(), Error.stackTraceLimit = this.l, this.k = !1, this
                },
                captureException: function(a, b) {
                    if (!l(a))
                        return this.captureMessage(a, b);
                    this.c = a;
                    try {
                        var c = f.computeStackTrace(a);
                        this.K(c, b)
                    } catch (d) {
                        if (a !== d)
                            throw d
                    }
                    return this
                },
                captureMessage: function(a, b) {
                    return this.i.ignoreErrors.test && this.i.ignoreErrors.test(a) ? void 0 : (this.L(q({
                        message: a + ""
                    }, b)), this)
                },
                captureBreadcrumb: function(a) {
                    var b = q({
                        timestamp: d() / 1e3
                    }, a);
                    this.r.push(b), this.r.length > this.s && this.r.shift()
                },
                addPlugin: function(a) {
                    var b = Array.prototype.slice.call(arguments, 1);
                    return this.o.push([a, b]), this.k && this.E(), this
                },
                setUserContext: function(a) {
                    return this.h.user = a, this
                },
                setExtraContext: function(a) {
                    return this.M("extra", a), this
                },
                setTagsContext: function(a) {
                    return this.M("tags", a), this
                },
                clearContext: function() {
                    return this.h = {}, this
                },
                getContext: function() {
                    return JSON.parse(i(this.h))
                },
                setEnvironment: function(a) {
                    return this.i.environment = a, this
                },
                setRelease: function(a) {
                    return this.i.release = a, this
                },
                setDataCallback: function(a) {
                    var b = this.i.dataCallback;
                    return this.i.dataCallback = j(a) ? function(c) {
                        return a(c, b)
                    } : a, this
                },
                setShouldSendCallback: function(a) {
                    var b = this.i.shouldSendCallback;
                    return this.i.shouldSendCallback = j(a) ? function(c) {
                        return a(c, b)
                    } : a, this
                },
                setTransport: function(a) {
                    return this.i.transport = a, this
                },
                lastException: function() {
                    return this.c
                },
                lastEventId: function() {
                    return this.d
                },
                isSetup: function() {
                    return this.a ? this.e ? !0 : (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this.w("error", "Error: Raven has not been configured.")), !1) : !1
                },
                afterLoad: function() {
                    var a = window.RavenConfig;
                    a && this.config(a.dsn, a.config).install()
                },
                showReportDialog: function(a) {
                    if (window.document) {
                        a = a || {};
                        var b = a.eventId || this.lastEventId();
                        if (!b)
                            throw new g("Missing eventId");
                        var c = a.dsn || this.y;
                        if (!c)
                            throw new g("Missing DSN");
                        var d = encodeURIComponent,
                            e = "";
                        e += "?eventId=" + d(b), e += "&dsn=" + d(c);
                        var f = a.user || this.h.user;
                        f && (f.name && (e += "&name=" + d(f.name)), f.email && (e += "&email=" + d(f.email)));
                        var h = this.A(this.x(c)),
                            i = document.createElement("script");
                        i.async = !0, i.src = h + "/api/embed/error-page/" + e, (document.head || document.body).appendChild(i)
                    }
                },
                F: function() {
                    var a = this;
                    this.j += 1, setTimeout(function() {
                        a.j -= 1
                    })
                },
                N: function(a, b) {
                    var c,
                        d;
                    if (this.b) {
                        b = b || {}, a = "raven" + a.substr(0, 1).toUpperCase() + a.substr(1), document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(a, !0, !0)) : (c = document.createEventObject(), c.eventType = a);
                        for (d in b)
                            n(b, d) && (c[d] = b[d]);
                        if (document.createEvent)
                            document.dispatchEvent(c);
                        else
                            try {
                                document.fireEvent("on" + c.eventType.toLowerCase(), c)
                            } catch (e) {}
                    }
                },
                O: function(a) {
                    var b = this;
                    return function(c) {
                        if (b.P = null, b.t !== c) {
                            b.t = c;
                            var d,
                                e = c.target;
                            try {
                                d = u(e)
                            } catch (f) {
                                d = "<unknown>"
                            }
                            b.captureBreadcrumb({
                                category: "ui." + a,
                                message: d
                            })
                        }
                    }
                },
                Q: function() {
                    var a = this,
                        b = 1e3;
                    return function(c) {
                        var d = c.target,
                            e = d && d.tagName;
                        if (e && ("INPUT" === e || "TEXTAREA" === e)) {
                            var f = a.P;
                            f || a.O("input")(c), clearTimeout(f), a.P = setTimeout(function() {
                                a.P = null
                            }, b)
                        }
                    }
                },
                R: function(a, b) {
                    var c = v(this.u.href),
                        d = v(b),
                        e = v(a);
                    this.v = b, c.protocol === d.protocol && c.host === d.host && (b = d.relative), c.protocol === e.protocol && c.host === e.host && (a = e.relative), this.captureBreadcrumb({
                        category: "navigation",
                        data: {
                            to: b,
                            from: a
                        }
                    })
                },
                D: function() {
                    function a(a, b, c, d) {
                        var f = a[b];
                        a[b] = c(f), d || e.q.push([a, b, f])
                    }
                    function b(a) {
                        return function(b, c) {
                            for (var d = new Array(arguments.length), f = 0; d.length > f; ++f)
                                d[f] = arguments[f];
                            var g = d[0];
                            return j(g) && (d[0] = e.wrap(g)), a.apply ? a.apply(this, d) : a(d[0], d[1])
                        }
                    }
                    function c(b) {
                        var c = window[b] && window[b].prototype;
                        c && c.hasOwnProperty && c.hasOwnProperty("addEventListener") && (a(c, "addEventListener", function(a) {
                            return function(c, d, f, g) {
                                try {
                                    d && d.handleEvent && (d.handleEvent = e.wrap(d.handleEvent))
                                } catch (h) {}
                                var i;
                                return ("EventTarget" === b || "Node" === b) && ("click" === c ? i = e.O(c) : "keypress" === c && (i = e.Q())), a.call(this, c, e.wrap(d, void 0, i), f, g)
                            }
                        }), a(c, "removeEventListener", function(a) {
                            return function(b, c, d, e) {
                                return c = c && (c.H ? c.H : c), a.call(this, b, c, d, e)
                            }
                        }))
                    }
                    function d(b, c) {
                        b in c && j(c[b]) && a(c, b, function(a) {
                            return e.wrap(a)
                        }, !0)
                    }
                    var e = this;
                    a(window, "setTimeout", b), a(window, "setInterval", b), window.requestAnimationFrame && a(window, "requestAnimationFrame", function(a) {
                        return function(b) {
                            return a(e.wrap(b))
                        }
                    }), this.b && (document.addEventListener ? (document.addEventListener("click", e.O("click"), !1), document.addEventListener("keypress", e.Q(), !1)) : (document.attachEvent("onclick", e.O("click")), document.attachEvent("onkeypress", e.Q())));
                    for (var f = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], g = 0; f.length > g; g++)
                        c(f[g]);
                    if ("XMLHttpRequest" in window) {
                        var h = XMLHttpRequest.prototype;
                        a(h, "open", function(a) {
                            return function(b, c) {
                                return w(c) && -1 === c.indexOf(e.f) && (this.S = {
                                    method: b,
                                    url: c,
                                    status_code: null
                                }), a.apply(this, arguments)
                            }
                        }), a(h, "send", function(b) {
                            return function(c) {
                                function f() {
                                    if (g.S && (1 === g.readyState || 4 === g.readyState)) {
                                        try {
                                            g.S.status_code = g.status
                                        } catch (a) {}
                                        e.captureBreadcrumb({
                                            type: "http",
                                            category: "xhr",
                                            data: g.S
                                        })
                                    }
                                }
                                for (var g = this, h = ["onload", "onerror", "onprogress"], i = 0; h.length > i; i++)
                                    d(h[i], g);
                                return "onreadystatechange" in g && j(g.onreadystatechange) ? a(g, "onreadystatechange", function(a) {
                                    return e.wrap(a, void 0, f)
                                }, !0) : g.onreadystatechange = f, b.apply(this, arguments)
                            }
                        })
                    }
                    var i = window.chrome,
                        k = i && i.app && i.app.runtime,
                        l = !k && window.history && history.pushState;
                    if (l) {
                        var m = window.onpopstate;
                        window.onpopstate = function() {
                            var a = e.u.href;
                            return e.R(e.v, a), m ? m.apply(this, arguments) : void 0
                        }, a(history, "pushState", function(a) {
                            return function() {
                                var b = arguments.length > 2 ? arguments[2] : void 0;
                                return b && e.R(e.v, b + ""), a.apply(this, arguments)
                            }
                        })
                    }
                    var n = function(a, b) {
                        e.captureBreadcrumb({
                            message: a,
                            level: b.level,
                            category: "console"
                        })
                    };
                    "console" in window && console.log && p(["debug", "info", "warn", "error", "log"], function(a, b) {
                        x(console, b, n)
                    });
                    var o = window.jQuery || window.$;
                    o && o.fn && o.fn.ready && a(o.fn, "ready", function(a) {
                        return function(b) {
                            return a.call(this, e.wrap(b))
                        }
                    })
                },
                J: function() {
                    for (var a; this.q.length;) {
                        a = this.q.shift();
                        var b = a[0],
                            c = a[1],
                            d = a[2];
                        b[c] = d
                    }
                },
                E: function() {
                    var a = this;
                    p(this.o, function(b, c) {
                        var d = c[0],
                            e = c[1];
                        d.apply(a, [a].concat(e))
                    })
                },
                x: function(a) {
                    var b = z.exec(a),
                        c = {},
                        d = 7;
                    try {
                        for (; d--;)
                            c[y[d]] = b[d] || ""
                    } catch (e) {
                        throw new g("Invalid DSN: " + a)
                    }
                    if (c.pass && !this.i.allowSecretKey)
                        throw new g("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                    return c
                },
                A: function(a) {
                    var b = "//" + a.host + (a.port ? ":" + a.port : "");
                    return a.protocol && (b = a.protocol + ":" + b), b
                },
                C: function() {
                    this.j || this.K.apply(this, arguments)
                },
                K: function(a, b) {
                    var c = this,
                        d = [];
                    a.stack && a.stack.length && p(a.stack, function(a, b) {
                        var e = c.T(b);
                        e && d.push(e)
                    }), this.N("handle", {
                        stackInfo: a,
                        options: b
                    }), this.U(a.name, a.message, a.url, a.lineno, d.slice(0, this.i.stackTraceLimit), b)
                },
                T: function(a) {
                    if (a.url) {
                        var b = {
                            filename: a.url,
                            lineno: a.line,
                            colno: a.column,
                            "function": a.func || "?"
                        };
                        return b.in_app = !(this.i.includePaths.test && !this.i.includePaths.test(b.filename) || /(Raven|TraceKit)\./.test(b["function"]) || /raven\.(min\.)?js$/.test(b.filename)), b
                    }
                },
                U: function(a, b, c, d, e, f) {
                    var g;
                    if ((!this.i.ignoreErrors.test || !this.i.ignoreErrors.test(b)) && (b += "", e && e.length ? (c = e[0].filename || c, e.reverse(), g = {
                        frames: e
                    }) : c && (g = {
                        frames: [{
                            filename: c,
                            lineno: d,
                            in_app: !0
                        }]
                    }), (!this.i.ignoreUrls.test || !this.i.ignoreUrls.test(c)) && (!this.i.whitelistUrls.test || this.i.whitelistUrls.test(c)))) {
                        var h = q({
                            exception: {
                                values: [{
                                    type: a,
                                    value: b,
                                    stacktrace: g
                                }]
                            },
                            culprit: c
                        }, f);
                        this.L(h)
                    }
                },
                V: function(a) {
                    var b = this.i.maxMessageLength;
                    if (a.message && (a.message = r(a.message, b)), a.exception) {
                        var c = a.exception.values[0];
                        c.value = r(c.value, b)
                    }
                    return a
                },
                W: function() {
                    if (this.b && document.location && document.location.href) {
                        var a = {
                            headers: {
                                "User-Agent": navigator.userAgent
                            }
                        };
                        return a.url = document.location.href, document.referrer && (a.headers.Referer = document.referrer), a
                    }
                },
                L: function(a) {
                    var b = this.i,
                        c = {
                            project: this.g,
                            logger: b.logger,
                            platform: "javascript"
                        },
                        e = this.W();
                    e && (c.request = e), a = q(c, a), a.tags = q(q({}, this.h.tags), a.tags), a.extra = q(q({}, this.h.extra), a.extra), a.extra["session:duration"] = d() - this.p, this.r && this.r.length > 0 && (a.breadcrumbs = {
                        values: [].slice.call(this.r, 0)
                    }), m(a.tags) && delete a.tags, this.h.user && (a.user = this.h.user), b.environment && (a.environment = b.environment), b.release && (a.release = b.release), b.serverName && (a.server_name = b.serverName), j(b.dataCallback) && (a = b.dataCallback(a) || a), a && !m(a) && (!j(b.shouldSendCallback) || b.shouldSendCallback(a)) && this.X(a)
                },
                X: function(a, b) {
                    var c = this,
                        d = this.i;
                    if (this.d = a.event_id || (a.event_id = t()), a = this.V(a), this.w("debug", "Raven about to send:", a), this.isSetup()) {
                        var e = {
                            sentry_version: "7",
                            sentry_client: "raven-js/" + this.VERSION,
                            sentry_key: this.f
                        };
                        this.z && (e.sentry_secret = this.z);
                        var f = a.exception && a.exception.values[0];
                        this.captureBreadcrumb({
                            category: "sentry",
                            message: f ? (f.type ? f.type + ": " : "") + f.message : a.message,
                            event_id: a.event_id,
                            level: a.level || "error"
                        });
                        var g = this.B;
                        (d.transport || this.Y).call(this, {
                            url: g,
                            auth: e,
                            data: a,
                            options: d,
                            onSuccess: function() {
                                c.N("success", {
                                    data: a,
                                    src: g
                                }), b && b()
                            },
                            onError: function(d) {
                                c.N("failure", {
                                    data: a,
                                    src: g
                                }), d = d || new Error("Raven send failed (no additional details provided)"), b && b(d)
                            }
                        })
                    }
                },
                Y: function(a) {
                    function b() {
                        200 === c.status ? a.onSuccess && a.onSuccess() : a.onError && a.onError(new Error("Sentry error code: " + c.status))
                    }
                    var c = new XMLHttpRequest,
                        d = "withCredentials" in c || "undefined" != typeof XDomainRequest;
                    if (d) {
                        var e = a.url;
                        "withCredentials" in c ? c.onreadystatechange = function() {
                            4 === c.readyState && b()
                        } : (c = new XDomainRequest, e = e.replace(/^https?:/, ""), c.onload = b), c.open("POST", e + "?" + s(a.auth)), c.send(i(a.data))
                    }
                },
                w: function(a) {
                    this.n[a] && this.debug && Function.prototype.apply.call(this.n[a], this.m, [].slice.call(arguments, 1))
                },
                M: function(a, b) {
                    k(b) ? delete this.h[a] : this.h[a] = q(this.h[a] || {}, b)
                }
            }, e.prototype.setUser = e.prototype.setUserContext, e.prototype.setReleaseContext = e.prototype.setRelease, b.exports = e
        }, {
            1: 1,
            2: 2,
            3: 3,
            6: 6,
            7: 7
        }],
        5: [function(a, b, c) {
            "use strict";
            var d = a(4),
                e = window.Raven,
                f = new d;
            f.noConflict = function() {
                return window.Raven = e, f
            }, f.afterLoad(), b.exports = f
        }, {
            4: 4
        }],
        6: [function(a, b, c) {
            "use strict";
            function d(a) {
                return void 0 === a
            }
            function e(a) {
                return "function" == typeof a
            }
            function f(a) {
                return "[object String]" === t.toString.call(a)
            }
            function g(a) {
                return "object" == typeof a && null !== a
            }
            function h(a) {
                for (var b in a)
                    return !1;
                return !0
            }
            function i(a) {
                var b = t.toString.call(a);
                return g(a) && "[object Error]" === b || "[object Exception]" === b || a instanceof Error
            }
            function j(a, b) {
                var c,
                    e;
                if (d(a.length))
                    for (c in a)
                        m(a, c) && b.call(null, c, a[c]);
                else if (e = a.length)
                    for (c = 0; e > c; c++)
                        b.call(null, c, a[c])
            }
            function k(a, b) {
                return b ? (j(b, function(b, c) {
                    a[b] = c
                }), a) : a
            }
            function l(a, b) {
                return !b || b >= a.length ? a : a.substr(0, b) + "…"
            }
            function m(a, b) {
                return t.hasOwnProperty.call(a, b)
            }
            function n(a) {
                for (var b, c = [], d = 0, e = a.length; e > d; d++)
                    b = a[d], f(b) ? c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : b && b.source && c.push(b.source);
                return new RegExp(c.join("|"), "i")
            }
            function o(a) {
                var b = [];
                return j(a, function(a, c) {
                    b.push(encodeURIComponent(a) + "=" + encodeURIComponent(c))
                }), b.join("&")
            }
            function p(a) {
                var b = a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!b)
                    return {};
                var c = b[6] || "",
                    d = b[8] || "";
                return {
                    protocol: b[2],
                    host: b[4],
                    path: b[5],
                    relative: b[5] + c + d
                }
            }
            function q() {
                var a = window.crypto || window.msCrypto;
                if (!d(a) && a.getRandomValues) {
                    var b = new Uint16Array(8);
                    a.getRandomValues(b), b[3] = 4095 & b[3] | 16384, b[4] = 16383 & b[4] | 32768;
                    var c = function(a) {
                        for (var b = a.toString(16); 4 > b.length;)
                            b = "0" + b;
                        return b
                    };
                    return c(b[0]) + c(b[1]) + c(b[2]) + c(b[3]) + c(b[4]) + c(b[5]) + c(b[6]) + c(b[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                    var b = 16 * Math.random() | 0,
                        c = "x" === a ? b : 3 & b | 8;
                    return c.toString(16)
                })
            }
            function r(a) {
                for (var b, c = 5, d = 80, e = [], f = 0, g = 0, h = " > ", i = h.length; a && f++ < c && (b = s(a), !("html" === b || f > 1 && g + e.length * i + b.length >= d));)
                    e.push(b), g += b.length, a = a.parentNode;
                return e.reverse().join(h)
            }
            function s(a) {
                var b,
                    c,
                    d,
                    e,
                    g,
                    h = [];
                if (!a || !a.tagName)
                    return "";
                if (h.push(a.tagName.toLowerCase()), a.id && h.push("#" + a.id), b = a.className, b && f(b))
                    for (c = b.split(" "), g = 0; c.length > g; g++)
                        h.push("." + c[g]);
                var i = ["type", "name", "title", "alt"];
                for (g = 0; i.length > g; g++)
                    d = i[g], e = a.getAttribute(d), e && h.push("[" + d + '="' + e + '"]');
                return h.join("")
            }
            var t = Object.prototype;
            b.exports = {
                isUndefined: d,
                isFunction: e,
                isString: f,
                isObject: g,
                isEmptyObject: h,
                isError: i,
                each: j,
                objectMerge: k,
                truncate: l,
                hasKey: m,
                joinRegExp: n,
                urlencode: o,
                uuid4: q,
                htmlTreeAsString: r,
                htmlElementAsString: s,
                parseUrl: p
            }
        }, {}],
        7: [function(a, b, c) {
            "use strict";
            function d() {
                return "undefined" == typeof document ? "" : document.location.href
            }
            var e = a(6),
                f = e.hasKey,
                g = e.isString,
                h = e.isUndefined,
                i = {
                    collectWindowErrors: !0,
                    debug: !1
                },
                j = [].slice,
                k = "?",
                l = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
            i.report = function() {
                function a(a) {
                    m(), s.push(a)
                }
                function b(a) {
                    for (var b = s.length - 1; b >= 0; --b)
                        s[b] === a && s.splice(b, 1)
                }
                function c() {
                    n(), s = []
                }
                function e(a, b) {
                    var c = null;
                    if (!b || i.collectWindowErrors) {
                        for (var d in s)
                            if (f(s, d))
                                try {
                                    s[d].apply(null, [a].concat(j.call(arguments, 2)))
                                } catch (e) {
                                    c = e
                                }
                        if (c)
                            throw c
                    }
                }
                function h(a, b, c, f, h) {
                    var j = null;
                    if (v)
                        i.computeStackTrace.augmentStackTraceWithInitialElement(v, b, c, a), o();
                    else if (h)
                        j = i.computeStackTrace(h), e(j, !0);
                    else {
                        var m,
                            n = {
                                url: b,
                                line: c,
                                column: f
                            },
                            p = void 0,
                            r = a;
                        if (g(a)) {
                            var m = a.match(l);
                            m && (p = m[1], r = m[2])
                        }
                        n.func = k, j = {
                            name: p,
                            message: r,
                            url: d(),
                            stack: [n]
                        }, e(j, !0)
                    }
                    return q ? q.apply(this, arguments) : !1
                }
                function m() {
                    r || (q = window.onerror, window.onerror = h, r = !0)
                }
                function n() {
                    r && (window.onerror = q, r = !1, q = void 0)
                }
                function o() {
                    var a = v,
                        b = t;
                    t = null, v = null, u = null, e.apply(null, [a, !1].concat(b))
                }
                function p(a, b) {
                    var c = j.call(arguments, 1);
                    if (v) {
                        if (u === a)
                            return;
                        o()
                    }
                    var d = i.computeStackTrace(a);
                    if (v = d, u = a, t = c, window.setTimeout(function() {
                        u === a && o()
                    }, d.incomplete ? 2e3 : 0), b !== !1)
                        throw a
                }
                var q,
                    r,
                    s = [],
                    t = null,
                    u = null,
                    v = null;
                return p.subscribe = a, p.unsubscribe = b, p.uninstall = c, p
            }(), i.computeStackTrace = function() {
                function a(a) {
                    if (!h(a.stack) && a.stack) {
                        for (var b, c, e = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, f = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, g = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, i = a.stack.split("\n"), j = [], l = (/^(.*) is undefined$/.exec(a.message), 0), m = i.length; m > l; ++l) {
                            if (b = e.exec(i[l])) {
                                var n = b[2] && -1 !== b[2].indexOf("native");
                                c = {
                                    url: n ? null : b[2],
                                    func: b[1] || k,
                                    args: n ? [b[2]] : [],
                                    line: b[3] ? +b[3] : null,
                                    column: b[4] ? +b[4] : null
                                }
                            } else if (b = g.exec(i[l]))
                                c = {
                                    url: b[2],
                                    func: b[1] || k,
                                    args: [],
                                    line: +b[3],
                                    column: b[4] ? +b[4] : null
                                };
                            else {
                                if (!(b = f.exec(i[l])))
                                    continue;
                                c = {
                                    url: b[3],
                                    func: b[1] || k,
                                    args: b[2] ? b[2].split(",") : [],
                                    line: b[4] ? +b[4] : null,
                                    column: b[5] ? +b[5] : null
                                }
                            }
                            !c.func && c.line && (c.func = k), j.push(c)
                        }
                        return j.length ? (j[0].column || h(a.columnNumber) || (j[0].column = a.columnNumber + 1), {
                            name: a.name,
                            message: a.message,
                            url: d(),
                            stack: j
                        }) : null
                    }
                }
                function b(a) {
                    var b = a.stacktrace;
                    if (!h(a.stacktrace) && a.stacktrace) {
                        for (var c, e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, f = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, g = b.split("\n"), i = [], j = 0; g.length > j; j += 2) {
                            var l = null;
                            (c = e.exec(g[j])) ? l = {
                                url: c[2],
                                line: +c[1],
                                column: null,
                                func: c[3],
                                args: []
                            } : (c = f.exec(g[j])) && (l = {
                                url: c[6],
                                line: +c[1],
                                column: +c[2],
                                func: c[3] || c[4],
                                args: c[5] ? c[5].split(",") : []
                            }), l && (!l.func && l.line && (l.func = k), i.push(l))
                        }
                        return i.length ? {
                            name: a.name,
                            message: a.message,
                            url: d(),
                            stack: i
                        } : null
                    }
                }
                function c(a) {
                    var b = a.message.split("\n");
                    if (4 > b.length)
                        return null;
                    for (var c, e = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, f = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, g = /^\s*Line (\d+) of function script\s*$/i, h = [], i = (document.getElementsByTagName("script"), 2); b.length > i; i += 2) {
                        var j = null;
                        if (c = e.exec(b[i]))
                            j = {
                                url: c[2],
                                func: c[3],
                                args: [],
                                line: +c[1],
                                column: null
                            };
                        else if (c = f.exec(b[i])) {
                            j = {
                                url: c[3],
                                func: c[4],
                                args: [],
                                line: +c[1],
                                column: null
                            }
                        } else if (c = g.exec(b[i])) {
                            var l = window.location.href.replace(/#.*$/, "");
                            j = {
                                url: l,
                                func: "",
                                args: [],
                                line: c[1],
                                column: null
                            }
                        }
                        j && (j.func || (j.func = k), h.push(j))
                    }
                    return h.length ? {
                        name: a.name,
                        message: b[0],
                        url: d(),
                        stack: h
                    } : null
                }
                function e(a, b, c, d) {
                    var e = {
                        url: b,
                        line: c
                    };
                    if (e.url && e.line) {
                        if (a.incomplete = !1, e.func || (e.func = k), a.stack.length > 0 && a.stack[0].url === e.url) {
                            if (a.stack[0].line === e.line)
                                return !1;
                            if (!a.stack[0].line && a.stack[0].func === e.func)
                                return a.stack[0].line = e.line, !1
                        }
                        return a.stack.unshift(e), a.partial = !0, !0
                    }
                    return a.incomplete = !0, !1
                }
                function f(a, b) {
                    for (var c, h, j = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, l = [], m = {}, n = !1, o = f.caller; o && !n; o = o.caller)
                        if (o !== g && o !== i.report) {
                            if (h = {
                                url: null,
                                func: k,
                                line: null,
                                column: null
                            }, o.name ? h.func = o.name : (c = j.exec(o.toString())) && (h.func = c[1]), "undefined" == typeof h.func)
                                try {
                                    h.func = c.input.substring(0, c.input.indexOf("{"))
                                } catch (p) {}
                            m["" + o] ? n = !0 : m["" + o] = !0, l.push(h)
                        }
                    b && l.splice(0, b);
                    var q = {
                        name: a.name,
                        message: a.message,
                        url: d(),
                        stack: l
                    };
                    return e(q, a.sourceURL || a.fileName, a.line || a.lineNumber, a.message || a.description), q
                }
                function g(e, g) {
                    var h = null;
                    g = null == g ? 0 : +g;
                    try {
                        if (h = b(e))
                            return h
                    } catch (j) {
                        if (i.debug)
                            throw j
                    }
                    try {
                        if (h = a(e))
                            return h
                    } catch (j) {
                        if (i.debug)
                            throw j
                    }
                    try {
                        if (h = c(e))
                            return h
                    } catch (j) {
                        if (i.debug)
                            throw j
                    }
                    try {
                        if (h = f(e, g + 1))
                            return h
                    } catch (j) {
                        if (i.debug)
                            throw j
                    }
                    return {
                        name: e.name,
                        message: e.message,
                        url: d()
                    }
                }
                return g.augmentStackTraceWithInitialElement = e, g.computeStackTraceFromStackProp = a, g
            }(), b.exports = i
        }, {
            6: 6
        }]
    }, {}, [5])(5)
});
(function(a) {
    var b = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        e = "BeforeAppend",
        f = "MarkupParse",
        g = "Open",
        h = "Change",
        i = "mfp",
        j = "." + i,
        k = "mfp-ready",
        l = "mfp-removing",
        m = "mfp-prevent-close",
        n,
        o = function() {},
        p = !!window.jQuery,
        q,
        r = a(window),
        s,
        t,
        u,
        v,
        w,
        x = function(a, b) {
            n.ev.on(i + a + j, b)
        },
        y = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        z = function(b, c) {
            n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
        },
        A = function(b) {
            if (b !== w || !n.currTemplate.closeBtn)
                n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
            return n.currTemplate.closeBtn
        },
        B = function() {
            a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
        },
        C = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (a.transition !== undefined)
                return !0;
            while (b.length)
                if (b.pop() + "Transition" in a)
                    return !0;
            return !1
        };
    o.prototype = {
        constructor: o,
        init: function() {
            var b = navigator.appVersion;
            n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {}
        },
        open: function(b) {
            s || (s = a(document.body));
            var c;
            if (b.isObj === !1) {
                n.items = b.items.toArray(), n.index = 0;
                var d = b.items,
                    e;
                for (c = 0; c < d.length; c++) {
                    e = d[c], e.parsed && (e = e.el[0]);
                    if (e === b.el[0]) {
                        n.index = c;
                        break
                    }
                }
            } else
                n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
            if (n.isOpen) {
                n.updateItemHTML();
                return
            }
            n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function() {
                n.close()
            }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function(a) {
                n._checkIfClose(a.target) && n.close()
            }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
            var h = a.magnificPopup.modules;
            for (c = 0; c < h.length; c++) {
                var i = h[c];
                i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
            }
            z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function(a, b, c, d) {
                c.close_replaceWith = A(d.type)
            }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
                overflow: n.st.overflowY,
                overflowX: "hidden",
                overflowY: n.st.overflowY
            }) : n.wrap.css({
                top: r.scrollTop(),
                position: "absolute"
            }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
                height: t.height(),
                position: "absolute"
            }), n.st.enableEscapeKey && t.on("keyup" + j, function(a) {
                a.keyCode === 27 && n.close()
            }), r.on("resize" + j, function() {
                n.updateSize()
            }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v);
            var l = n.wH = r.height(),
                m = {};
            if (n.fixedContentPos && n._hasScrollBar(l)) {
                var o = n._getScrollbarSize();
                o && (m.marginRight = o)
            }
            n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var p = n.st.mainClass;
            return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function() {
                n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
            }, 16), n.isOpen = !0, n.updateSize(l), z(g), b
        },
        close: function() {
            if (!n.isOpen)
                return;
            z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function() {
                n._close()
            }, n.st.removalDelay)) : n._close()
        },
        _close: function() {
            z(b);
            var c = l + " " + k + " ";
            n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
            if (n.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
        },
        updateSize: function(a) {
            if (n.isIOS) {
                var b = document.documentElement.clientWidth / window.innerWidth,
                    c = window.innerHeight * b;
                n.wrap.css("height", c), n.wH = c
            } else
                n.wH = a || r.height();
            n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
        },
        updateItemHTML: function() {
            var b = n.items[n.index];
            n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
            var c = b.type;
            z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
            if (!n.currTemplate[c]) {
                var d = n.st[c] ? n.st[c].markup : !1;
                z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
            }
            u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
            var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
            n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
        },
        appendContent: function(a, b) {
            n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
        },
        parseEl: function(b) {
            var c = n.items[b],
                d;
            c.tagName ? c = {
                el: a(c)
            } : (d = c.type, c = {
                data: c,
                src: c.src
            });
            if (c.el) {
                var e = n.types;
                for (var f = 0; f < e.length; f++)
                    if (c.el.hasClass("mfp-" + e[f])) {
                        d = e[f];
                        break
                    }
                c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
            }
            return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
        },
        addGroup: function(a, b) {
            var c = function(c) {
                c.mfpEl = this, n._openClick(c, a, b)
            };
            b || (b = {});
            var d = "click.magnificPopup";
            b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
        },
        _openClick: function(b, c, d) {
            var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
            if (!e && (b.which === 2 || b.ctrlKey || b.metaKey))
                return;
            var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
            if (f)
                if (a.isFunction(f)) {
                    if (!f.call(n))
                        return !0
                } else if (r.width() < f)
                    return !0;
            b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
        },
        updateStatus: function(a, b) {
            if (n.preloader) {
                q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
                var c = {
                    status: a,
                    text: b
                };
                z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), n.container.addClass("mfp-s-" + a), q = a
            }
        },
        _checkIfClose: function(b) {
            if (a(b).hasClass(m))
                return;
            var c = n.st.closeOnContentClick,
                d = n.st.closeOnBgClick;
            if (c && d)
                return !0;
            if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0])
                return !0;
            if (b !== n.content[0] && !a.contains(n.content[0], b)) {
                if (d && a.contains(document, b))
                    return !0
            } else if (c)
                return !0;
            return !1
        },
        _addClassToMFP: function(a) {
            n.bgOverlay.addClass(a), n.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
        },
        _setFocus: function() {
            (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
        },
        _onFocusIn: function(b) {
            if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))
                return n._setFocus(), !1
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function(a, c) {
                if (c === undefined || c === !1)
                    return !0;
                e = a.split("_");
                if (e.length > 1) {
                    var d = b.find(j + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else
                    b.find(j + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (n.scrollbarSize === undefined) {
                var a = document.createElement("div");
                a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return n.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: o.prototype,
        modules: [],
        open: function(b, c) {
            return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function(b) {
        B();
        var c = a(this);
        if (typeof b == "string")
            if (b === "open") {
                var d,
                    e = p ? c.data("magnificPopup") : c[0].magnificPopup,
                    f = parseInt(arguments[1], 10) || 0;
                e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({
                    mfpEl: d
                }, c, e)
            } else
                n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
        else
            b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
        return c
    };
    var D = "inline",
        E,
        F,
        G,
        H = function() {
            G && (F.after(G.addClass(E)).detach(), G = null)
        };
    a.magnificPopup.registerModule(D, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                n.types.push(D), x(b + "." + D, function() {
                    H()
                })
            },
            getInline: function(b, c) {
                H();
                if (b.src) {
                    var d = n.st.inline,
                        e = a(b.src);
                    if (e.length) {
                        var f = e[0].parentNode;
                        f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "mfp-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready")
                    } else
                        n.updateStatus("error", d.tNotFound), e = a("<div>");
                    return b.inlineElement = e, e
                }
                return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c
            }
        }
    });
    var I = "ajax",
        J,
        K = function() {
            J && s.removeClass(J)
        },
        L = function() {
            K(), n.req && n.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                n.types.push(I), J = n.st.ajax.cursor, x(b + "." + I, L), x("BeforeChange." + I, L)
            },
            getAjax: function(b) {
                J && s.addClass(J), n.updateStatus("loading");
                var c = a.extend({
                    url: b.src,
                    success: function(c, d, e) {
                        var f = {
                            data: c,
                            xhr: e
                        };
                        z("ParseAjax", f), n.appendContent(a(f.data), I), b.finished = !0, K(), n._setFocus(), setTimeout(function() {
                            n.wrap.addClass(k)
                        }, 16), n.updateStatus("ready"), z("AjaxContentAdded")
                    },
                    error: function() {
                        K(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
                    }
                }, n.st.ajax.settings);
                return n.req = a.ajax(c), ""
            }
        }
    });
    var M,
        N = function(b) {
            if (b.data && b.data.title !== undefined)
                return b.data.title;
            var c = n.st.image.titleSrc;
            if (c) {
                if (a.isFunction(c))
                    return c.call(n, b);
                if (b.el)
                    return b.el.attr(c) || ""
            }
            return ""
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var a = n.st.image,
                    c = ".image";
                n.types.push("image"), x(g + c, function() {
                    n.currItem.type === "image" && a.cursor && s.addClass(a.cursor)
                }), x(b + c, function() {
                    a.cursor && s.removeClass(a.cursor), r.off("resize" + j)
                }), x("Resize" + c, n.resizeImage), n.isLowIE && x("AfterChange", n.resizeImage)
            },
            resizeImage: function() {
                var a = n.currItem;
                if (!a || !a.img)
                    return;
                if (n.st.image.verticalFit) {
                    var b = 0;
                    n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var b = 0,
                    c = a.img[0],
                    d = function(e) {
                        M && clearInterval(M), M = setInterval(function() {
                            if (c.naturalWidth > 0) {
                                n._onImageHasSize(a);
                                return
                            }
                            b > 200 && clearInterval(M), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
                        }, e)
                    };
                d(1)
            },
            getImage: function(b, c) {
                var d = 0,
                    e = function() {
                        b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, z("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
                    },
                    f = function() {
                        b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
                    },
                    g = n.st.image,
                    h = c.find(".mfp-img");
                if (h.length) {
                    var i = document.createElement("img");
                    i.className = "mfp-img", b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1)
                }
                return n._parseMarkup(c, {
                    title: N(b),
                    img_replaceWith: b.img
                }, b), n.resizeImage(), b.hasSize ? (M && clearInterval(M), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c)
            }
        }
    });
    var O,
        P = function() {
            return O === undefined && (O = document.createElement("p").style.MozTransform !== undefined), O
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a = n.st.zoom,
                    d = ".zoom",
                    e;
                if (!a.enabled || !n.supportsTransition)
                    return;
                var f = a.duration,
                    g = function(b) {
                        var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + a.duration / 1e3 + "s " + a.easing,
                            e = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
                    },
                    h = function() {
                        n.content.css("visibility", "visible")
                    },
                    i,
                    j;
                x("BuildControls" + d, function() {
                    if (n._allowZoom()) {
                        clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
                        if (!e) {
                            h();
                            return
                        }
                        j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function() {
                            j.css(n._getOffset(!0)), i = setTimeout(function() {
                                h(), setTimeout(function() {
                                    j.remove(), e = j = null, z("ZoomAnimationEnded")
                                }, 16)
                            }, f)
                        }, 16)
                    }
                }), x(c + d, function() {
                    if (n._allowZoom()) {
                        clearTimeout(i), n.st.removalDelay = f;
                        if (!e) {
                            e = n._getItemToZoom();
                            if (!e)
                                return;
                            j = g(e)
                        }
                        j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function() {
                            j.css(n._getOffset())
                        }, 16)
                    }
                }), x(b + d, function() {
                    n._allowZoom() && (h(), j && j.remove(), e = null)
                })
            },
            _allowZoom: function() {
                return n.currItem.type === "image"
            },
            _getItemToZoom: function() {
                return n.currItem.hasSize ? n.currItem.img : !1
            },
            _getOffset: function(b) {
                var c;
                b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
                var d = c.offset(),
                    e = parseInt(c.css("padding-top"), 10),
                    f = parseInt(c.css("padding-bottom"), 10);
                d.top -= a(window).scrollTop() - e;
                var g = {
                    width: c.width(),
                    height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e
                };
                return P() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
            }
        }
    });
    var Q = "iframe",
        R = "//about:blank",
        S = function(a) {
            if (n.currTemplate[Q]) {
                var b = n.currTemplate[Q].find("iframe");
                b.length && (a || (b[0].src = R), n.isIE8 && b.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(Q, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                n.types.push(Q), x("BeforeChange", function(a, b, c) {
                    b !== c && (b === Q ? S() : c === Q && S(!0))
                }), x(b + "." + Q, function() {
                    S()
                })
            },
            getIframe: function(b, c) {
                var d = b.src,
                    e = n.st.iframe;
                a.each(e.patterns, function() {
                    if (d.indexOf(this.index) > -1)
                        return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
                });
                var f = {};
                return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
            }
        }
    });
    var T = function(a) {
            var b = n.items.length;
            return a > b - 1 ? a - b : a < 0 ? b + a : a
        },
        U = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = n.st.gallery,
                    d = ".mfp-gallery",
                    e = Boolean(a.fn.mfpFastClick);
                n.direction = !0;
                if (!c || !c.enabled)
                    return !1;
                v += " mfp-gallery", x(g + d, function() {
                    c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function() {
                        if (n.items.length > 1)
                            return n.next(), !1
                    }), t.on("keydown" + d, function(a) {
                        a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
                    })
                }), x("UpdateStatus" + d, function(a, b) {
                    b.text && (b.text = U(b.text, n.currItem.index, n.items.length))
                }), x(f + d, function(a, b, d, e) {
                    var f = n.items.length;
                    d.counter = f > 1 ? U(c.tCounter, e.index, f) : ""
                }), x("BuildControls" + d, function() {
                    if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
                        var b = c.arrowMarkup,
                            d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                            f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m),
                            g = e ? "mfpFastClick" : "click";
                        d[g](function() {
                            n.prev()
                        }), f[g](function() {
                            n.next()
                        }), n.isIE7 && (y("b", d[0], !1, !0), y("a", d[0], !1, !0), y("b", f[0], !1, !0), y("a", f[0], !1, !0)), n.container.append(d.add(f))
                    }
                }), x(h + d, function() {
                    n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function() {
                        n.preloadNearbyImages(), n._preloadTimeout = null
                    }, 16)
                }), x(b + d, function() {
                    t.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null
                })
            },
            next: function() {
                n.direction = !0, n.index = T(n.index + 1), n.updateItemHTML()
            },
            prev: function() {
                n.direction = !1, n.index = T(n.index - 1), n.updateItemHTML()
            },
            goTo: function(a) {
                n.direction = a >= n.index, n.index = a, n.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a = n.st.gallery.preload,
                    b = Math.min(a[0], n.items.length),
                    c = Math.min(a[1], n.items.length),
                    d;
                for (d = 1; d <= (n.direction ? c : b); d++)
                    n._preloadItem(n.index + d);
                for (d = 1; d <= (n.direction ? b : c); d++)
                    n._preloadItem(n.index - d)
            },
            _preloadItem: function(b) {
                b = T(b);
                if (n.items[b].preloaded)
                    return;
                var c = n.items[b];
                c.parsed || (c = n.parseEl(b)), z("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                    c.hasSize = !0
                }).on("error.mfploader", function() {
                    c.hasSize = !0, c.loadError = !0, z("LazyLoadError", c)
                }).attr("src", c.src)), c.preloaded = !0
            }
        }
    });
    var V = "retina";
    a.magnificPopup.registerModule(V, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = n.st.retina,
                        b = a.ratio;
                    b = isNaN(b) ? b() : b, b > 1 && (x("ImageHasSize." + V, function(a, c) {
                        c.img.css({
                            "max-width": c.img[0].naturalWidth / b,
                            width: "100%"
                        })
                    }), x("ElementParse." + V, function(c, d) {
                        d.src = a.replaceSrc(d, b)
                    }))
                }
            }
        }
    }), function() {
        var b = 1e3,
            c = "ontouchstart" in window,
            d = function() {
                r.off("touchmove" + f + " touchend" + f)
            },
            e = "mfpFastClick",
            f = "." + e;
        a.fn.mfpFastClick = function(e) {
            return a(this).each(function() {
                var g = a(this),
                    h;
                if (c) {
                    var i,
                        j,
                        k,
                        l,
                        m,
                        n;
                    g.on("touchstart" + f, function(a) {
                        l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function(a) {
                            m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
                            if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10)
                                l = !0, d()
                        }).on("touchend" + f, function(a) {
                            d();
                            if (l || n > 1)
                                return;
                            h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                h = !1
                            }, b), e()
                        })
                    })
                }
                g.on("click" + f, function() {
                    h || e()
                })
            })
        }, a.fn.destroyMfpFastClick = function() {
            a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
        }
    }(), B()
})(window.jQuery || window.Zepto)
!function() {
    var a,
        AbstractChosen,
        Chosen,
        SelectParser,
        b,
        c = {}.hasOwnProperty,
        d = function(a, b) {
            function d() {
                this.constructor = a
            }
            for (var e in b)
                c.call(b, e) && (a[e] = b[e]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    SelectParser = function() {
        function SelectParser() {
            this.options_index = 0, this.parsed = []
        }
        return SelectParser.prototype.add_node = function(a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, SelectParser.prototype.add_group = function(a) {
            var b,
                c,
                d,
                e,
                f,
                g;
            for (b = this.parsed.length, this.parsed.push({
                array_index: b,
                group: !0,
                label: this.escapeExpression(a.label),
                children: 0,
                disabled: a.disabled
            }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++)
                c = f[d], g.push(this.add_option(c, b, a.disabled));
            return g
        }, SelectParser.prototype.add_option = function(a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                selected: a.selected,
                disabled: c === !0 ? c : a.disabled,
                group_array_index: b,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, SelectParser.prototype.escapeExpression = function(a) {
            var b,
                c;
            return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function(a) {
                return b[a] || "&amp;"
            })) : a
        }, SelectParser
    }(), SelectParser.select_to_array = function(a) {
        var b,
            c,
            d,
            e,
            f;
        for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++)
            b = f[d], c.add_node(b);
        return c.parsed
    }, AbstractChosen = function() {
        function AbstractChosen(a, b) {
            this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return AbstractChosen.prototype.set_default_values = function() {
            var a = this;
            return this.click_test_action = function(b) {
                return a.test_active_click(b)
            }, this.activate_action = function(b) {
                return a.activate_field(b)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
        }, AbstractChosen.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
        }, AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, AbstractChosen.prototype.input_focus = function() {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field)
                    return setTimeout(function() {
                        return a.container_mousedown()
                    }, 50)
            } else if (!this.active_field)
                return this.activate_field()
        }, AbstractChosen.prototype.input_blur = function() {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return a.blur_test()
            }, 100))
        }, AbstractChosen.prototype.results_option_build = function(a) {
            var b,
                c,
                d,
                e,
                f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)
                c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.text));
            return b
        }, AbstractChosen.prototype.result_add_option = function(a) {
            var b,
                c;
            return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = "" !== a.style.cssText ? ' style="' + a.style + '"' : "", '<li class="' + b.join(" ") + '"' + c + ' data-option-array-index="' + a.array_index + '">' + a.search_text + "</li>") : "" : ""
        }, AbstractChosen.prototype.result_add_group = function(a) {
            return a.search_match || a.group_match ? a.active_options > 0 ? '<li class="group-result">' + a.search_text + "</li>" : "" : ""
        }, AbstractChosen.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, AbstractChosen.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, AbstractChosen.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, AbstractChosen.prototype.winnow_results = function() {
            var a,
                b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m;
            for (this.no_results_clear(), e = 0, g = this.get_search_text(), a = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), d = this.search_contains ? "" : "^", c = new RegExp(d + a, "i"), j = new RegExp(a, "i"), m = this.results_data, k = 0, l = m.length; l > k; k++)
                b = m[k], b.search_match = !1, f = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (f = this.results_data[b.group_array_index], 0 === f.active_options && f.search_match && (e += 1), f.active_options += 1), (!b.group || this.group_search) && (b.search_text = b.group ? b.label : b.html, b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (e += 1), b.search_match ? (g.length && (h = b.search_text.search(j), i = b.search_text.substr(0, h + g.length) + "</em>" + b.search_text.substr(h + g.length), b.search_text = i.substr(0, h) + "<em>" + i.substr(h)), null != f && (f.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(), 1 > e && g.length ? (this.update_results_content(""), this.no_results(g)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, AbstractChosen.prototype.search_string_match = function(a, b) {
            var c,
                d,
                e,
                f;
            if (b.test(a))
                return !0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))
                for (e = 0, f = d.length; f > e; e++)
                    if (c = d[e], b.test(c))
                        return !0
        }, AbstractChosen.prototype.choices_count = function() {
            var a,
                b,
                c,
                d;
            if (null != this.selected_option_count)
                return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++)
                a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, AbstractChosen.prototype.choices_click = function(a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, AbstractChosen.prototype.keyup_checker = function(a) {
            var b,
                c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)
                    return this.keydown_backstroke();
                if (!this.pending_backstroke)
                    return this.result_clear_highlight(), this.results_search();
                break;
            case 13:
                if (a.preventDefault(), this.results_showing)
                    return this.result_select(a);
                break;
            case 27:
                return this.results_showing && this.results_hide(), !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        }, AbstractChosen.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, AbstractChosen.prototype.include_option_in_results = function(a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, AbstractChosen.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen
    }(), a = jQuery, a.fn.extend({
        chosen: function(b) {
            return AbstractChosen.browser_is_supported() ? this.each(function() {
                var c,
                    d;
                c = a(this), d = c.data("chosen"), "destroy" === b && d ? d.destroy() : d || c.data("chosen", new Chosen(this, b))
            }) : this
        }
    }), Chosen = function(c) {
        function Chosen() {
            return b = Chosen.__super__.constructor.apply(this, arguments)
        }
        return d(Chosen, c), Chosen.prototype.setup = function() {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, Chosen.prototype.set_up_html = function() {
            var b,
                c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, Chosen.prototype.register_observers = function() {
            var a = this;
            return this.container.bind("mousedown.chosen", function(b) {
                a.container_mousedown(b)
            }), this.container.bind("mouseup.chosen", function(b) {
                a.container_mouseup(b)
            }), this.container.bind("mouseenter.chosen", function(b) {
                a.mouse_enter(b)
            }), this.container.bind("mouseleave.chosen", function(b) {
                a.mouse_leave(b)
            }), this.search_results.bind("mouseup.chosen", function(b) {
                a.search_results_mouseup(b)
            }), this.search_results.bind("mouseover.chosen", function(b) {
                a.search_results_mouseover(b)
            }), this.search_results.bind("mouseout.chosen", function(b) {
                a.search_results_mouseout(b)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(b) {
                a.search_results_mousewheel(b)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(b) {
                a.results_update_field(b)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(b) {
                a.activate_field(b)
            }), this.form_field_jq.bind("chosen:open.chosen", function(b) {
                a.container_mousedown(b)
            }), this.search_field.bind("blur.chosen", function(b) {
                a.input_blur(b)
            }), this.search_field.bind("keyup.chosen", function(b) {
                a.keyup_checker(b)
            }), this.search_field.bind("keydown.chosen", function(b) {
                a.keydown_checker(b)
            }), this.search_field.bind("focus.chosen", function(b) {
                a.input_focus(b)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen", function(a) {
                a.preventDefault()
            })
        }, Chosen.prototype.destroy = function() {
            return a(document).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, Chosen.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, Chosen.prototype.container_mousedown = function(b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(document).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, Chosen.prototype.container_mouseup = function(a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, Chosen.prototype.search_results_mousewheel = function(a) {
            var b,
                c,
                d;
            return b = -(null != (c = a.originalEvent) ? c.wheelDelta : void 0) || (null != (d = a.originialEvent) ? d.detail : void 0), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        }, Chosen.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, Chosen.prototype.close_field = function() {
            return a(document).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, Chosen.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, Chosen.prototype.test_active_click = function(b) {
            return this.container.is(a(b.target).closest(".chosen-container")) ? this.active_field = !0 : this.close_field()
        }, Chosen.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, Chosen.prototype.result_do_highlight = function(a) {
            var b,
                c,
                d,
                e,
                f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e)
                    return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c)
                    return this.search_results.scrollTop(c)
            }
        }, Chosen.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, Chosen.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results())
        }, Chosen.prototype.update_results_content = function(a) {
            return this.search_results.html(a)
        }, Chosen.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, Chosen.prototype.set_tab_index = function() {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        }, Chosen.prototype.set_label_behavior = function() {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        }, Chosen.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, Chosen.prototype.search_results_mouseup = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, Chosen.prototype.search_results_mouseover = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, Chosen.prototype.search_results_mouseout = function(b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, Chosen.prototype.choice_build = function(b) {
            var c,
                d,
                e = this;
            return c = a("<li />", {
                "class": "search-choice"
            }).html("<span>" + b.html + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function(a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, Chosen.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, Chosen.prototype.choice_destroy = function(a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, Chosen.prototype.results_reset = function() {
            return this.form_field.options[0].selected = !0, this.selected_option_count = null, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, Chosen.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, Chosen.prototype.result_select = function(a) {
            var b,
                c,
                d;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? b.removeClass("active-result") : (this.result_single_selected && (this.result_single_selected.removeClass("result-selected"), d = this.result_single_selected[0].getAttribute("data-option-array-index"), this.results_data[d].selected = !1), this.result_single_selected = b), b.addClass("result-selected"), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(c.text), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[c.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
        }, Chosen.prototype.single_set_selected_text = function(a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(a)
        }, Chosen.prototype.result_deselect = function(a) {
            var b;
            return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[b.options_index].value
            }), this.search_field_scale(), !0)
        }, Chosen.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, Chosen.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html()
        }, Chosen.prototype.winnow_results_set_highlight = function() {
            var a,
                b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, Chosen.prototype.no_results = function(b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c)
        }, Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, Chosen.prototype.keydown_arrow = function() {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, Chosen.prototype.keyup_arrow = function() {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, Chosen.prototype.keydown_backstroke = function() {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, Chosen.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, Chosen.prototype.keydown_checker = function(a) {
            var b,
                c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                break;
            case 13:
                a.preventDefault();
                break;
            case 38:
                a.preventDefault(), this.keyup_arrow();
                break;
            case 40:
                a.preventDefault(), this.keydown_arrow()
            }
        }, Chosen.prototype.search_field_scale = function() {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++)
                    e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {
                    style: f
                }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({
                    width: h + "px"
                })
            }
        }, Chosen
    }(AbstractChosen)
}.call(this);
(function(c) {
    function g(b, a) {
        this.element = b;
        this.options = c.extend({}, h, a);
        c(this.element).data("max-height", this.options.maxHeight);
        c(this.element).data("height-margin", this.options.heightMargin);
        delete this.options.maxHeight;
        if (this.options.embedCSS && !k) {
            var d = ".readmore-js-toggle, .readmore-js-section { " + this.options.sectionCSS + " } .readmore-js-section { overflow: hidden; }",
                e = document.createElement("style");
            e.type = "text/css";
            e.styleSheet ? e.styleSheet.cssText = d : e.appendChild(document.createTextNode(d));
            document.getElementsByTagName("head")[0].appendChild(e);
            k = !0
        }
        this._defaults = h;
        this._name = f;
        this.init()
    }
    var f = "readmore",
        h = {
            speed: 100,
            maxHeight: 200,
            heightMargin: 16,
            moreLink: '<a href="#">Read More</a>',
            lessLink: '<a href="#">Close</a>',
            embedCSS: !0,
            sectionCSS: "display: block; width: 100%;",
            startOpen: !1,
            expandedClass: "readmore-js-expanded",
            collapsedClass: "readmore-js-collapsed",
            beforeToggle: function() {},
            afterToggle: function() {}
        },
        k = !1;
    g.prototype = {
        init: function() {
            var b = this;
            c(this.element).each(function() {
                var a = c(this),
                    d = a.css("max-height").replace(/[^-\d\.]/g, "") > a.data("max-height") ? a.css("max-height").replace(/[^-\d\.]/g, "") : a.data("max-height"),
                    e = a.data("height-margin");
                "none" != a.css("max-height") && a.css("max-height", "none");
                b.setBoxHeight(a);
                if (a.outerHeight(!0) <= d + e)
                    return !0;
                a.addClass("readmore-js-section " + b.options.collapsedClass).data("collapsedHeight", d);
                a.after(c(b.options.startOpen ? b.options.lessLink : b.options.moreLink).on("click", function(c) {
                    b.toggleSlider(this, a, c)
                }).addClass("readmore-js-toggle"));
                b.options.startOpen || a.css({
                    height: d
                })
            });
            c(window).on("resize", function(a) {
                b.resizeBoxes()
            })
        },
        toggleSlider: function(b, a, d) {
            d.preventDefault();
            var e = this;
            d = newLink = sectionClass = "";
            var f = !1;
            d = c(a).data("collapsedHeight");
            c(a).height() <= d ? (d = c(a).data("expandedHeight") + "px", newLink = "lessLink", f = !0, sectionClass = e.options.expandedClass) : (newLink = "moreLink", sectionClass = e.options.collapsedClass);
            e.options.beforeToggle(b, a, f);
            c(a).animate({
                height: d
            }, {
                duration: e.options.speed,
                complete: function() {
                    e.options.afterToggle(b, a, f);
                    c(b).replaceWith(c(e.options[newLink]).on("click", function(b) {
                        e.toggleSlider(this, a, b)
                    }).addClass("readmore-js-toggle"));
                    c(this).removeClass(e.options.collapsedClass + " " + e.options.expandedClass).addClass(sectionClass)
                }
            })
        },
        setBoxHeight: function(b) {
            var a = b.clone().css({
                    height: "auto",
                    width: b.width(),
                    overflow: "hidden"
                }).insertAfter(b),
                c = a.outerHeight(!0);
            a.remove();
            b.data("expandedHeight", c)
        },
        resizeBoxes: function() {
            var b = this;
            c(".readmore-js-section").each(function() {
                var a = c(this);
                b.setBoxHeight(a);
                (a.height() > a.data("expandedHeight") || a.hasClass(b.options.expandedClass) && a.height() < a.data("expandedHeight")) && a.css("height", a.data("expandedHeight"))
            })
        },
        destroy: function() {
            var b = this;
            c(this.element).each(function() {
                var a = c(this);
                a.removeClass("readmore-js-section " + b.options.collapsedClass + " " + b.options.expandedClass).css({
                    "max-height": "",
                    height: "auto"
                }).next(".readmore-js-toggle").remove();
                a.removeData()
            })
        }
    };
    c.fn[f] = function(b) {
        var a = arguments;
        if (void 0 === b || "object" === typeof b)
            return this.each(function() {
                if (c.data(this, "plugin_" + f)) {
                    var a = c.data(this, "plugin_" + f);
                    a.destroy.apply(a)
                }
                c.data(this, "plugin_" + f, new g(this, b))
            });
        if ("string" === typeof b && "_" !== b[0] && "init" !== b)
            return this.each(function() {
                var d = c.data(this, "plugin_" + f);
                d instanceof g && "function" === typeof d[b] && d[b].apply(d, Array.prototype.slice.call(a, 1))
            })
    }
})(jQuery);
"undefined" == typeof PDFJS && (("undefined" != typeof window ? window : this).PDFJS = {}), PDFJS.version = "1.0.277", PDFJS.build = "250d394", function() {
    "use strict";
    function g(a) {
        PDFJS.verbosity >= PDFJS.VERBOSITY_LEVELS.infos && console.log("Info: " + a)
    }
    function h(a) {
        PDFJS.verbosity >= PDFJS.VERBOSITY_LEVELS.warnings && console.log("Warning: " + a)
    }
    function i(a) {
        if (arguments.length > 1) {
            var b = ["Error:"];
            b.push.apply(b, arguments), console.log.apply(console, b), a = [].join.call(arguments, " ")
        } else
            console.log("Error: " + a);
        throw console.log(j()), m.notify(l.unknown), new Error(a)
    }
    function j() {
        try {
            throw new Error
        } catch (a) {
            return a.stack ? a.stack.split("\n").slice(2).join("\n") : ""
        }
    }
    function k(a, b) {
        a || i(b)
    }
    function n(a, b) {
        if (!b)
            return a;
        if (/^[a-z][a-z0-9+\-.]*:/i.test(b))
            return b;
        var c;
        if ("/" == b.charAt(0))
            return c = a.indexOf("://"), "/" === b.charAt(1) ? ++c : c = a.indexOf("/", c + 3), a.substring(0, c) + b;
        var d = a.length;
        c = a.lastIndexOf("#"), d = c >= 0 ? c : d, c = a.lastIndexOf("?", d), d = c >= 0 ? c : d;
        var e = a.lastIndexOf("/", d);
        return a.substring(0, e + 1) + b
    }
    function o(a, b) {
        if (!a)
            return !1;
        var c = /^[a-z][a-z0-9+\-.]*(?=:)/i.exec(a);
        if (!c)
            return b;
        switch (c = c[0].toLowerCase()) {
        case "http":
        case "https":
        case "ftp":
        case "mailto":
            return !0;
        default:
            return !1
        }
    }
    function p(a, b, c) {
        return Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !1
        }), c
    }
    function y(a) {
        var b = a.length,
            c = 8192;
        if (c > b)
            return String.fromCharCode.apply(null, a);
        for (var d = [], e = 0; b > e; e += c) {
            var f = Math.min(e + c, b),
                g = a.subarray(e, f);
            d.push(String.fromCharCode.apply(null, g))
        }
        return d.join("")
    }
    function A(a) {
        for (var b = a.length, c = new Uint8Array(b), d = 0; b > d; ++d)
            c[d] = 255 & a.charCodeAt(d);
        return c
    }
    function B(a) {
        return String.fromCharCode(255 & a >> 24, 255 & a >> 16, 255 & a >> 8, 255 & a)
    }
    function G() {
        var a = new Uint8Array(2);
        a[0] = 1;
        var b = new Uint16Array(a.buffer);
        return 1 === b[0]
    }
    function H() {
        var a = document.createElement("canvas");
        a.width = a.height = 1;
        var b = a.getContext("2d"),
            c = b.createImageData(1, 1);
        return "undefined" != typeof c.data.buffer
    }
    function N(a) {
        var b,
            c = a.length,
            d = [];
        if ("\xfe" === a[0] && "\xff" === a[1])
            for (b = 2; c > b; b += 2)
                d.push(String.fromCharCode(a.charCodeAt(b) << 8 | a.charCodeAt(b + 1)));
        else
            for (b = 0; c > b; ++b) {
                var e = M[a.charCodeAt(b)];
                d.push(e ? String.fromCharCode(e) : a.charAt(b))
            }
        return d.join("")
    }
    function S(a) {
        return "number" == typeof a
    }
    function V(a) {
        return a instanceof Name
    }
    function X(a, b) {
        if (!(a instanceof Dict))
            return !1;
        if (!b)
            return !0;
        var c = a.get("Type");
        return V(c) && c.name == b
    }
    function Y(a) {
        return a instanceof Array
    }
    function $(a) {
        return "object" == typeof a && null !== a && void 0 !== a && "byteLength" in a
    }
    function ab() {
        var a = {};
        return a.promise = new Promise(function(b, c) {
            a.resolve = b, a.reject = c
        }), a
    }
    function cb(a, b) {
        this.name = a, this.comObj = b, this.callbackIndex = 1, this.postMessageTransfers = !0;
        var c = this.callbacksCapabilities = {},
            d = this.actionHandler = {};
        d.console_log = [function(a) {
            console.log.apply(console, a)
        }], d.console_error = [function(a) {
            console.error.apply(console, a)
        }], d._unsupported_feature = [function(a) {
            m.notify(a)
        }], b.onmessage = function(a) {
            var e = a.data;
            if (e.isReply) {
                var f = e.callbackId;
                if (e.callbackId in c) {
                    var g = c[f];
                    delete c[f], "error" in e ? g.reject(e.error) : g.resolve(e.data)
                } else
                    i("Cannot resolve callback " + f)
            } else if (e.action in d) {
                var h = d[e.action];
                e.callbackId ? Promise.resolve().then(function() {
                    return h[0].call(h[1], e.data)
                }).then(function(a) {
                    b.postMessage({
                        isReply: !0,
                        callbackId: e.callbackId,
                        data: a
                    })
                }, function(a) {
                    b.postMessage({
                        isReply: !0,
                        callbackId: e.callbackId,
                        error: a
                    })
                }) : h[0].call(h[1], e.data)
            } else
                i("Unknown action from worker: " + e.action)
        }
    }
    function db(a, b, c) {
        var d = new Image;
        d.onload = function() {
            c.resolve(a, d)
        }, d.src = b
    }
    function xb(a, b) {
        var c = document.createElement("canvas");
        return c.width = a, c.height = b, c
    }
    function yb(a) {
        a.mozCurrentTransform || (a._scaleX = a._scaleX || 1, a._scaleY = a._scaleY || 1, a._originalSave = a.save, a._originalRestore = a.restore, a._originalRotate = a.rotate, a._originalScale = a.scale, a._originalTranslate = a.translate, a._originalTransform = a.transform, a._originalSetTransform = a.setTransform, a._transformMatrix = [a._scaleX, 0, 0, a._scaleY, 0, 0], a._transformStack = [], Object.defineProperty(a, "mozCurrentTransform", {
            get: function() {
                return this._transformMatrix
            }
        }), Object.defineProperty(a, "mozCurrentTransformInverse", {
            get: function() {
                var a = this._transformMatrix,
                    b = a[0],
                    c = a[1],
                    d = a[2],
                    e = a[3],
                    f = a[4],
                    g = a[5],
                    h = b * e - c * d,
                    i = c * d - b * e;
                return [e / h, c / i, d / i, b / h, (e * f - d * g) / i, (c * f - b * g) / h]
            }
        }), a.save = function() {
            var a = this._transformMatrix;
            this._transformStack.push(a), this._transformMatrix = a.slice(0, 6), this._originalSave()
        }, a.restore = function() {
            var a = this._transformStack.pop();
            a && (this._transformMatrix = a, this._originalRestore())
        }, a.translate = function(a, b) {
            var c = this._transformMatrix;
            c[4] = c[0] * a + c[2] * b + c[4], c[5] = c[1] * a + c[3] * b + c[5], this._originalTranslate(a, b)
        }, a.scale = function(a, b) {
            var c = this._transformMatrix;
            c[0] = c[0] * a, c[1] = c[1] * a, c[2] = c[2] * b, c[3] = c[3] * b, this._originalScale(a, b)
        }, a.transform = function(b, c, d, e, f, g) {
            var h = this._transformMatrix;
            this._transformMatrix = [h[0] * b + h[2] * c, h[1] * b + h[3] * c, h[0] * d + h[2] * e, h[1] * d + h[3] * e, h[0] * f + h[2] * g + h[4], h[1] * f + h[3] * g + h[5]], a._originalTransform(b, c, d, e, f, g)
        }, a.setTransform = function(b, c, d, e, f, g) {
            this._transformMatrix = [b, c, d, e, f, g], a._originalSetTransform(b, c, d, e, f, g)
        }, a.rotate = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a),
                d = this._transformMatrix;
            this._transformMatrix = [d[0] * b + d[2] * c, d[1] * b + d[3] * c, d[0] * -c + d[2] * b, d[1] * -c + d[3] * b, d[4], d[5]], this._originalRotate(a)
        })
    }
    function Ab(a) {
        var e,
            f,
            g,
            o,
            b = 1e3,
            c = a.width,
            d = a.height,
            h = c + 1,
            i = new Uint8Array(h * (d + 1)),
            j = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
            k = -8 & c + 7,
            l = a.data,
            m = new Uint8Array(k * d),
            n = 0;
        for (e = 0, o = l.length; o > e; e++)
            for (var p = 128, q = l[e]; p > 0;)
                m[n++] = q & p ? 0 : 255, p >>= 1;
        var r = 0;
        for (n = 0, 0 !== m[n] && (i[0] = 1, ++r), f = 1; c > f; f++)
            m[n] !== m[n + 1] && (i[f] = m[n] ? 2 : 1, ++r), n++;
        for (0 !== m[n] && (i[f] = 2, ++r), e = 1; d > e; e++) {
            n = e * k, g = e * h, m[n - k] !== m[n] && (i[g] = m[n] ? 1 : 8, ++r);
            var s = (m[n] ? 4 : 0) + (m[n - k] ? 8 : 0);
            for (f = 1; c > f; f++)
                s = (s >> 2) + (m[n + 1] ? 4 : 0) + (m[n - k + 1] ? 8 : 0), j[s] && (i[g + f] = j[s], ++r), n++;
            if (m[n - k] !== m[n] && (i[g + f] = m[n] ? 2 : 4, ++r), r > b)
                return null
        }
        for (n = k * (d - 1), g = e * h, 0 !== m[n] && (i[g] = 8, ++r), f = 1; c > f; f++)
            m[n] !== m[n + 1] && (i[g + f] = m[n] ? 4 : 8, ++r), n++;
        if (0 !== m[n] && (i[g + f] = 4, ++r), r > b)
            return null;
        var t = new Int32Array([0, h, -1, 0, -h, 0, 0, 0, 1]),
            u = [];
        for (e = 0; r && d >= e; e++) {
            for (var v = e * h, w = v + c; w > v && !i[v];)
                v++;
            if (v !== w) {
                var A,
                    x = [v % h, e],
                    y = i[v],
                    z = v;
                do {
                    var B = t[y];
                    do v += B;
                    while (!i[v]);
                    A = i[v], 5 !== A && 10 !== A ? (y = A, i[v] = 0) : (y = A & 51 * y >> 4, i[v] &= y >> 2 | y << 2), x.push(v % h), x.push(0 | v / h), --r
                } while (z !== v);
                u.push(x), --e
            }
        }
        var C = function(a) {
            a.save(), a.scale(1 / c, -1 / d), a.translate(0, -d), a.beginPath();
            for (var b = 0, e = u.length; e > b; b++) {
                var f = u[b];
                a.moveTo(f[0], f[1]);
                for (var g = 2, h = f.length; h > g; g += 2)
                    a.lineTo(f[g], f[g + 1])
            }
            a.fill(), a.beginPath(), a.restore()
        };
        return C
    }
    function Gb(a) {
        var b = Eb[a[0]];
        return b || i("Unknown IR type: " + a[0]), b.fromIR(a)
    }
    var a = "undefined" == typeof window ? this : window,
        b = "undefined" == typeof window,
        c = [.001, 0, 0, .001, 0, 0],
        d = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4
        },
        e = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
        };
    a.PDFJS || (a.PDFJS = {}), a.PDFJS.pdfBug = !1, PDFJS.VERBOSITY_LEVELS = {
        errors: 0,
        warnings: 1,
        infos: 5
    };
    var f = PDFJS.OPS = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotations: 78,
            endAnnotations: 79,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintJpegXObject: 82,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91
        },
        l = PDFJS.UNSUPPORTED_FEATURES = {
            unknown: "unknown",
            forms: "forms",
            javaScript: "javaScript",
            smask: "smask",
            shadingPattern: "shadingPattern",
            font: "font"
        },
        m = PDFJS.UnsupportedManager = function() {
            var a = [];
            return {
                listen: function(b) {
                    a.push(b)
                },
                notify: function(b) {
                    h('Unsupported feature "' + b + '"');
                    for (var c = 0, d = a.length; d > c; c++)
                        a[c](b)
                }
            }
        }();
    PDFJS.isValidUrl = o;
    var q = PDFJS.PasswordResponses = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
    };
    !function() {
        function a(a, b) {
            this.name = "PasswordException", this.message = a, this.code = b
        }
        return a.prototype = new Error, a.constructor = a, a
    }(), function() {
        function a(a, b) {
            this.name = "UnknownErrorException", this.message = a, this.details = b
        }
        return a.prototype = new Error, a.constructor = a, a
    }(), function() {
        function a(a) {
            this.name = "InvalidPDFException", this.message = a
        }
        return a.prototype = new Error, a.constructor = a, a
    }(), function() {
        function a(a) {
            this.name = "MissingPDFException", this.message = a
        }
        return a.prototype = new Error, a.constructor = a, a
    }();
    var v = function() {
        function a(a) {
            this.message = a
        }
        return a.prototype = new Error, a.prototype.name = "NotImplementedException", a.constructor = a, a
    }();
    !function() {
        function a(a, b) {
            this.begin = a, this.end = b, this.message = "Missing data [" + a + ", " + b + ")"
        }
        return a.prototype = new Error, a.prototype.name = "MissingDataException", a.constructor = a, a
    }(), function() {
        function a(a) {
            this.message = a
        }
        return a.prototype = new Error, a.prototype.name = "XRefParseException", a.constructor = a, a
    }(), Object.defineProperty(PDFJS, "isLittleEndian", {
        configurable: !0,
        get: function() {
            return p(PDFJS, "isLittleEndian", G())
        }
    }), Object.defineProperty(PDFJS, "hasCanvasTypedArrays", {
        configurable: !0,
        get: function() {
            return p(PDFJS, "hasCanvasTypedArrays", H())
        }
    });
    var I = function() {
            function a(a, b) {
                this.buffer = a, this.byteLength = a.length, this.length = void 0 === b ? this.byteLength >> 2 : b, d(this.length)
            }
            function c(a) {
                return {
                    get: function() {
                        var b = this.buffer,
                            c = a << 2;
                        return (b[c] | b[c + 1] << 8 | b[c + 2] << 16 | b[c + 3] << 24) >>> 0
                    },
                    set: function(b) {
                        var c = this.buffer,
                            d = a << 2;
                        c[d] = 255 & b, c[d + 1] = 255 & b >> 8, c[d + 2] = 255 & b >> 16, c[d + 3] = 255 & b >>> 24
                    }
                }
            }
            function d(d) {
                for (; d > b;)
                    Object.defineProperty(a.prototype, b, c(b)), b++
            }
            a.prototype = Object.create(null);
            var b = 0;
            return a
        }(),
        J = [1, 0, 0, 1, 0, 0],
        K = PDFJS.Util = function() {
            function a() {}
            return a.makeCssRgb = function(a) {
                return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")"
            }, a.transform = function(a, b) {
                return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]
            }, a.applyTransform = function(a, b) {
                var c = a[0] * b[0] + a[1] * b[2] + b[4],
                    d = a[0] * b[1] + a[1] * b[3] + b[5];
                return [c, d]
            }, a.applyInverseTransform = function(a, b) {
                var c = b[0] * b[3] - b[1] * b[2],
                    d = (a[0] * b[3] - a[1] * b[2] + b[2] * b[5] - b[4] * b[3]) / c,
                    e = (-a[0] * b[1] + a[1] * b[0] + b[4] * b[1] - b[5] * b[0]) / c;
                return [d, e]
            }, a.getAxialAlignedBoundingBox = function(b, c) {
                var d = a.applyTransform(b, c),
                    e = a.applyTransform(b.slice(2, 4), c),
                    f = a.applyTransform([b[0], b[3]], c),
                    g = a.applyTransform([b[2], b[1]], c);
                return [Math.min(d[0], e[0], f[0], g[0]), Math.min(d[1], e[1], f[1], g[1]), Math.max(d[0], e[0], f[0], g[0]), Math.max(d[1], e[1], f[1], g[1])]
            }, a.inverseTransform = function(a) {
                var b = a[0] * a[3] - a[1] * a[2];
                return [a[3] / b, -a[1] / b, -a[2] / b, a[0] / b, (a[2] * a[5] - a[4] * a[3]) / b, (a[4] * a[1] - a[5] * a[0]) / b]
            }, a.apply3dTransform = function(a, b) {
                return [a[0] * b[0] + a[1] * b[1] + a[2] * b[2], a[3] * b[0] + a[4] * b[1] + a[5] * b[2], a[6] * b[0] + a[7] * b[1] + a[8] * b[2]]
            }, a.singularValueDecompose2dScale = function(a) {
                var b = [a[0], a[2], a[1], a[3]],
                    c = a[0] * b[0] + a[1] * b[2],
                    d = a[0] * b[1] + a[1] * b[3],
                    e = a[2] * b[0] + a[3] * b[2],
                    f = a[2] * b[1] + a[3] * b[3],
                    g = (c + f) / 2,
                    h = Math.sqrt((c + f) * (c + f) - 4 * (c * f - e * d)) / 2,
                    i = g + h || 1,
                    j = g - h || 1;
                return [Math.sqrt(i), Math.sqrt(j)]
            }, a.normalizeRect = function(a) {
                var b = a.slice(0);
                return a[0] > a[2] && (b[0] = a[2], b[2] = a[0]), a[1] > a[3] && (b[1] = a[3], b[3] = a[1]), b
            }, a.intersect = function(b, c) {
                function d(a, b) {
                    return a - b
                }
                var e = [b[0], b[2], c[0], c[2]].sort(d),
                    f = [b[1], b[3], c[1], c[3]].sort(d),
                    g = [];
                return b = a.normalizeRect(b), c = a.normalizeRect(c), e[0] === b[0] && e[1] === c[0] || e[0] === c[0] && e[1] === b[0] ? (g[0] = e[1], g[2] = e[2], f[0] === b[1] && f[1] === c[1] || f[0] === c[1] && f[1] === b[1] ? (g[1] = f[1], g[3] = f[2], g) : !1) : !1
            }, a.sign = function(a) {
                return 0 > a ? -1 : 1
            }, a.concatenateToArray = function(a, b) {
                Array.prototype.push.apply(a, b)
            }, a.prependToArray = function(a, b) {
                Array.prototype.unshift.apply(a, b)
            }, a.extendObj = function(a, b) {
                for (var c in b)
                    a[c] = b[c]
            }, a.getInheritableProperty = function(a, b) {
                for (; a && !a.has(b);)
                    a = a.get("Parent");
                return a ? a.get(b) : null
            }, a.inherit = function(a, b, c) {
                a.prototype = Object.create(b.prototype), a.prototype.constructor = a;
                for (var d in c)
                    a.prototype[d] = c[d]
            }, a.loadScript = function(a, b) {
                var c = document.createElement("script"),
                    d = !1;
                c.setAttribute("src", a), b && (c.onload = function() {
                    d || b(), d = !0
                }), document.getElementsByTagName("head")[0].appendChild(c)
            }, a
        }();
    PDFJS.PageViewport = function() {
        function a(a, b, c, d, e, f) {
            this.viewBox = a, this.scale = b, this.rotation = c, this.offsetX = d, this.offsetY = e;
            var i,
                j,
                k,
                l,
                g = (a[2] + a[0]) / 2,
                h = (a[3] + a[1]) / 2;
            switch (c %= 360, c = 0 > c ? c + 360 : c) {
            case 180:
                i = -1, j = 0, k = 0, l = 1;
                break;
            case 90:
                i = 0, j = 1, k = 1, l = 0;
                break;
            case 270:
                i = 0, j = -1, k = -1, l = 0;
                break;
            default:
                i = 1, j = 0, k = 0, l = -1
            }
            f && (k = -k, l = -l);
            var m,
                n,
                o,
                p;
            0 === i ? (m = Math.abs(h - a[1]) * b + d, n = Math.abs(g - a[0]) * b + e, o = Math.abs(a[3] - a[1]) * b, p = Math.abs(a[2] - a[0]) * b) : (m = Math.abs(g - a[0]) * b + d, n = Math.abs(h - a[1]) * b + e, o = Math.abs(a[2] - a[0]) * b, p = Math.abs(a[3] - a[1]) * b), this.transform = [i * b, j * b, k * b, l * b, m - i * b * g - k * b * h, n - j * b * g - l * b * h], this.width = o, this.height = p, this.fontScale = b
        }
        return a.prototype = {
            clone: function(b) {
                b = b || {};
                var c = "scale" in b ? b.scale : this.scale,
                    d = "rotation" in b ? b.rotation : this.rotation;
                return new a(this.viewBox.slice(), c, d, this.offsetX, this.offsetY, b.dontFlip)
            },
            convertToViewportPoint: function(a, b) {
                return K.applyTransform([a, b], this.transform)
            },
            convertToViewportRectangle: function(a) {
                var b = K.applyTransform([a[0], a[1]], this.transform),
                    c = K.applyTransform([a[2], a[3]], this.transform);
                return [b[0], b[1], c[0], c[1]]
            },
            convertToPdfPoint: function(a, b) {
                return K.applyInverseTransform([a, b], this.transform)
            }
        }, a
    }();
    var M = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
    PDFJS.createPromiseCapability = ab, function() {
        function g(a) {
            this._status = b, this._handlers = [];
            try {
                a.call(this, this._resolve.bind(this), this._reject.bind(this))
            } catch (c) {
                this._reject(c)
            }
        }
        if (a.Promise)
            return "function" != typeof a.Promise.all && (a.Promise.all = function(b) {
                var e,
                    f,
                    c = 0,
                    d = [],
                    g = new a.Promise(function(a, b) {
                        e = a, f = b
                    });
                return b.forEach(function(a, b) {
                    c++, a.then(function(a) {
                        d[b] = a, c--, 0 === c && e(d)
                    }, f)
                }), 0 === c && e(d), g
            }), "function" != typeof a.Promise.resolve && (a.Promise.resolve = function(b) {
                return new a.Promise(function(a) {
                    a(b)
                })
            }), "function" != typeof a.Promise.reject && (a.Promise.reject = function(b) {
                return new a.Promise(function(a, c) {
                    c(b)
                })
            }), "function" != typeof a.Promise.prototype.catch && (a.Promise.prototype.catch = function(b) {
                return a.Promise.prototype.then(void 0, b)
            }), void 0;
        var b = 0,
            c = 1,
            d = 2,
            e = 500,
            f = {
                handlers: [],
                running: !1,
                unhandledRejections: [],
                pendingRejectionCheck: !1,
                scheduleHandlers: function(a) {
                    a._status != b && (this.handlers = this.handlers.concat(a._handlers), a._handlers = [], this.running || (this.running = !0, setTimeout(this.runHandlers.bind(this), 0)))
                },
                runHandlers: function() {
                    for (var a = 1, b = Date.now() + a; this.handlers.length > 0;) {
                        var e = this.handlers.shift(),
                            f = e.thisPromise._status,
                            g = e.thisPromise._value;
                        try {
                            f === c ? "function" == typeof e.onResolve && (g = e.onResolve(g)) : "function" == typeof e.onReject && (g = e.onReject(g), f = c, e.thisPromise._unhandledRejection && this.removeUnhandeledRejection(e.thisPromise))
                        } catch (h) {
                            f = d, g = h
                        }
                        if (e.nextPromise._updateStatus(f, g), Date.now() >= b)
                            break
                    }
                    return this.handlers.length > 0 ? (setTimeout(this.runHandlers.bind(this), 0), void 0) : (this.running = !1, void 0)
                },
                addUnhandledRejection: function(a) {
                    this.unhandledRejections.push({
                        promise: a,
                        time: Date.now()
                    }), this.scheduleRejectionCheck()
                },
                removeUnhandeledRejection: function(a) {
                    a._unhandledRejection = !1;
                    for (var b = 0; b < this.unhandledRejections.length; b++)
                        this.unhandledRejections[b].promise === a && (this.unhandledRejections.splice(b), b--)
                },
                scheduleRejectionCheck: function() {
                    this.pendingRejectionCheck || (this.pendingRejectionCheck = !0, setTimeout(function() {
                        this.pendingRejectionCheck = !1;
                        for (var a = Date.now(), b = 0; b < this.unhandledRejections.length; b++)
                            if (a - this.unhandledRejections[b].time > e) {
                                var c = this.unhandledRejections[b].promise._value,
                                    d = "Unhandled rejection: " + c;
                                c.stack && (d += "\n" + c.stack), h(d), this.unhandledRejections.splice(b), b--
                            }
                        this.unhandledRejections.length && this.scheduleRejectionCheck()
                    }.bind(this), e))
                }
            };
        g.all = function(a) {
            function i(a) {
                e._status !== d && (h = [], c(a))
            }
            var b,
                c,
                e = new g(function(a, d) {
                    b = a, c = d
                }),
                f = a.length,
                h = [];
            if (0 === f)
                return b(h), e;
            for (var j = 0, k = a.length; k > j; ++j) {
                var l = a[j],
                    m = function(a) {
                        return function(c) {
                            e._status !== d && (h[a] = c, f--, 0 === f && b(h))
                        }
                    }(j);
                g.isPromise(l) ? l.then(m, i) : m(l)
            }
            return e
        }, g.isPromise = function(a) {
            return a && "function" == typeof a.then
        }, g.resolve = function(a) {
            return new g(function(b) {
                b(a)
            })
        }, g.reject = function(a) {
            return new g(function(b, c) {
                c(a)
            })
        }, g.prototype = {
            _status: null,
            _value: null,
            _handlers: null,
            _unhandledRejection: null,
            _updateStatus: function(a, b) {
                if (this._status !== c && this._status !== d) {
                    if (a == c && g.isPromise(b))
                        return b.then(this._updateStatus.bind(this, c), this._updateStatus.bind(this, d)), void 0;
                    this._status = a, this._value = b, a === d && 0 === this._handlers.length && (this._unhandledRejection = !0, f.addUnhandledRejection(this)), f.scheduleHandlers(this)
                }
            },
            _resolve: function(a) {
                this._updateStatus(c, a)
            },
            _reject: function(a) {
                this._updateStatus(d, a)
            },
            then: function(a, b) {
                var c = new g(function(a, b) {
                    this.resolve = b, this.reject = b
                });
                return this._handlers.push({
                    thisPromise: this,
                    onResolve: a,
                    onReject: b,
                    nextPromise: c
                }), f.scheduleHandlers(this), c
            },
            "catch": function(a) {
                return this.then(void 0, a)
            }
        }, a.Promise = g
    }();
    var bb = function() {
        function a(a, b, c) {
            for (; a.length < c;)
                a += b;
            return a
        }
        function b() {
            this.started = {}, this.times = [], this.enabled = !0
        }
        return b.prototype = {
            time: function(a) {
                this.enabled && (a in this.started && h("Timer is already running for " + a), this.started[a] = Date.now())
            },
            timeEnd: function(a) {
                this.enabled && (a in this.started || h("Timer has not been started for " + a), this.times.push({
                    name: a,
                    start: this.started[a],
                    end: Date.now()
                }), delete this.started[a])
            },
            toString: function() {
                var b,
                    c,
                    d = this.times,
                    e = "",
                    f = 0;
                for (b = 0, c = d.length; c > b; ++b) {
                    var g = d[b].name;
                    g.length > f && (f = g.length)
                }
                for (b = 0, c = d.length; c > b; ++b) {
                    var h = d[b],
                        i = h.end - h.start;
                    e += a(h.name, " ", f) + " " + i + "ms\n"
                }
                return e
            }
        }, b
    }();
    PDFJS.createBlob = function(a, b) {
        if ("undefined" != typeof Blob)
            return new Blob([a], {
                type: b
            });
        var c = new MozBlobBuilder;
        return c.append(a), c.getBlob(b)
    }, PDFJS.createObjectURL = function() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return function(b, c) {
            if (!PDFJS.disableCreateObjectURL && "undefined" != typeof URL && URL.createObjectURL) {
                var d = PDFJS.createBlob(b, c);
                return URL.createObjectURL(d)
            }
            for (var e = "data:" + c + ";base64,", f = 0, g = b.length; g > f; f += 3) {
                var h = 255 & b[f],
                    i = 255 & b[f + 1],
                    j = 255 & b[f + 2],
                    k = h >> 2,
                    l = (3 & h) << 4 | i >> 4,
                    m = g > f + 1 ? (15 & i) << 2 | j >> 6 : 64,
                    n = g > f + 2 ? 63 & j : 64;
                e += a[k] + a[l] + a[m] + a[n]
            }
            return e
        }
    }(), cb.prototype = {
        on: function(a, b, c) {
            var d = this.actionHandler;
            d[a] && i('There is already an actionName called "' + a + '"'), d[a] = [b, c]
        },
        send: function(a, b, c) {
            var d = {
                action: a,
                data: b
            };
            this.postMessage(d, c)
        },
        sendWithPromise: function(a, b, c) {
            var d = this.callbackIndex++,
                e = {
                    action: a,
                    data: b,
                    callbackId: d
                },
                f = ab();
            this.callbacksCapabilities[d] = f;
            try {
                this.postMessage(e, c)
            } catch (g) {
                f.reject(g)
            }
            return f.promise
        },
        postMessage: function(a, b) {
            b && this.postMessageTransfers ? this.comObj.postMessage(a, b) : this.comObj.postMessage(a)
        }
    };
    var eb = 22,
        fb = 4,
        gb = ["Link", "Text", "Widget"],
        hb = function() {
            function a(a, b, c) {
                var d = K.getAxialAlignedBoundingBox(b, c),
                    e = d[0],
                    f = d[1],
                    g = d[2],
                    h = d[3];
                if (e === g || f === h)
                    return [1, 0, 0, 1, a[0], a[1]];
                var i = (a[2] - a[0]) / (g - e),
                    j = (a[3] - a[1]) / (h - f);
                return [i, 0, 0, j, a[0] - e * i, a[1] - f * j]
            }
            function c(a) {
                var b = a.get("AP");
                if (X(b)) {
                    var c,
                        d = b.get("N");
                    if (X(d)) {
                        var e = a.get("AS");
                        e && d.has(e.name) && (c = d.get(e.name))
                    } else
                        c = d;
                    return c
                }
            }
            function d(a) {
                if (a.data)
                    return this.data = a.data, void 0;
                var b = a.dict,
                    d = this.data = {};
                d.subtype = b.get("Subtype").name;
                var e = b.get("Rect") || [0, 0, 0, 0];
                d.rect = K.normalizeRect(e), d.annotationFlags = b.get("F");
                var f = b.get("C");
                if (d.color = Y(f) && 3 === f.length ? f : [0, 0, 0], b.has("BS")) {
                    var g = b.get("BS");
                    d.borderWidth = g.has("W") ? g.get("W") : 1
                } else {
                    var h = b.get("Border") || [0, 0, 1];
                    d.borderWidth = h[2] || 0;
                    var i = h[3];
                    if (d.borderWidth > 0 && i)
                        if (Y(i)) {
                            var j = i.length;
                            if (j > 0) {
                                for (var k = !1, l = 0, m = 0; j > m; m++) {
                                    var n = +i[m] >= 0;
                                    if (!n) {
                                        k = !0;
                                        break
                                    }
                                    i[m] > 0 && l++
                                }
                                (k || 0 === l) && (d.borderWidth = 0)
                            }
                        } else
                            d.borderWidth = 0
                }
                this.appearance = c(b), d.hasAppearance = !!this.appearance, d.id = a.ref.num
            }
            return d.prototype = {
                getData: function() {
                    return this.data
                },
                hasHtml: function() {
                    return !1
                },
                getHtmlElement: function() {
                    throw new v("getHtmlElement() should be implemented in subclass")
                },
                getEmptyContainer: function(a, c, d) {
                    k(!b, "getEmptyContainer() should be called from main thread");
                    var e = d || 0;
                    c = c || this.data.rect;
                    var f = document.createElement(a);
                    f.style.borderWidth = e + "px";
                    var g = c[2] - c[0] - 2 * e,
                        h = c[3] - c[1] - 2 * e;
                    return f.style.width = g + "px", f.style.height = h + "px", f
                },
                isInvisible: function() {
                    var a = this.data;
                    return a && -1 !== gb.indexOf(a.subtype) ? !1 : !!(a && a.annotationFlags && 1 & a.annotationFlags)
                },
                isViewable: function() {
                    var a = this.data;
                    return !(this.isInvisible() || !a || a.annotationFlags && 34 & a.annotationFlags || !a.rect)
                },
                isPrintable: function() {
                    var a = this.data;
                    return !!(!this.isInvisible() && a && a.annotationFlags && 4 & a.annotationFlags && a.rect)
                },
                loadResources: function(a) {
                    return new Promise(function(b, c) {
                        this.appearance.dict.getAsync("Resources").then(function(d) {
                            if (!d)
                                return b(), void 0;
                            var e = new ObjectLoader(d.map, a, d.xref);
                            e.load().then(function() {
                                b(d)
                            }, c)
                        }, c)
                    }.bind(this))
                },
                getOperatorList: function(b) {
                    if (!this.appearance)
                        return Promise.resolve(new OperatorList);
                    var c = this.data,
                        d = this.appearance.dict,
                        e = this.loadResources(["ExtGState", "ColorSpace", "Pattern", "Shading", "XObject", "Font"]),
                        g = d.get("BBox") || [0, 0, 1, 1],
                        h = d.get("Matrix") || [1, 0, 0, 1, 0, 0],
                        i = a(c.rect, g, h),
                        j = this;
                    return e.then(function(a) {
                        var d = new OperatorList;
                        return d.addOp(f.beginAnnotation, [c.rect, i, h]), b.getOperatorList(j.appearance, a, d).then(function() {
                            return d.addOp(f.endAnnotation, []), j.appearance.reset(), d
                        })
                    })
                }
            }, d.getConstructor = function(a, b) {
                if (a) {
                    if ("Link" === a)
                        return mb;
                    if ("Text" === a)
                        return lb;
                    if ("Widget" === a) {
                        if (!b)
                            return;
                        return "Tx" === b ? jb : ib
                    }
                    return d
                }
            }, d.fromData = function(a) {
                var b = a.subtype,
                    c = a.fieldType,
                    e = d.getConstructor(b, c);
                return e ? new e({
                    data: a
                }) : void 0
            }, d.fromRef = function(a, b) {
                var c = a.fetchIfRef(b);
                if (X(c)) {
                    var e = c.get("Subtype");
                    if (e = V(e) ? e.name : "") {
                        var f = K.getInheritableProperty(c, "FT");
                        f = V(f) ? f.name : "";
                        var g = d.getConstructor(e, f);
                        if (g) {
                            var i = {
                                    dict: c,
                                    ref: b
                                },
                                j = new g(i);
                            return j.isViewable() || j.isPrintable() ? j : (h("unimplemented annotation type: " + e), void 0)
                        }
                    }
                }
            }, d.appendToOperatorList = function(a, b, c, d, e) {
                function g(a) {
                    h.reject(a)
                }
                for (var h = ab(), i = [], j = 0, k = a.length; k > j; ++j)
                    ("display" === e && a[j].isViewable() || "print" === e && a[j].isPrintable()) && i.push(a[j].getOperatorList(d));
                return Promise.all(i).then(function(a) {
                    b.addOp(f.beginAnnotations, []);
                    for (var c = 0, d = a.length; d > c; ++c) {
                        var e = a[c];
                        b.addOpList(e)
                    }
                    b.addOp(f.endAnnotations, []), h.resolve()
                }, g), h.promise
            }, d
        }();
    PDFJS.Annotation = hb;
    var ib = function() {
            function a(a) {
                if (hb.call(this, a), !a.data) {
                    var b = a.dict,
                        c = this.data;
                    c.fieldValue = N(K.getInheritableProperty(b, "V") || ""), c.alternativeText = N(b.get("TU") || ""), c.defaultAppearance = K.getInheritableProperty(b, "DA") || "";
                    var d = K.getInheritableProperty(b, "FT");
                    c.fieldType = V(d) ? d.name : "", c.fieldFlags = K.getInheritableProperty(b, "Ff") || 0, this.fieldResources = K.getInheritableProperty(b, "DR") || Dict.empty;
                    for (var e = [], f = b, g = a.ref; f;) {
                        var h = f.get("Parent"),
                            i = f.getRaw("Parent"),
                            j = f.get("T");
                        if (j)
                            e.unshift(N(j));
                        else {
                            var l,
                                m,
                                k = h.get("Kids");
                            for (l = 0, m = k.length; m > l; l++) {
                                var n = k[l];
                                if (n.num == g.num && n.gen == g.gen)
                                    break
                            }
                            e.unshift("`" + l)
                        }
                        f = h, g = i
                    }
                    c.fullName = e.join(".")
                }
            }
            var b = hb.prototype;
            return K.inherit(a, hb, {
                isViewable: function() {
                    return "Sig" === this.data.fieldType ? (h("unimplemented annotation type: Widget signature"), !1) : b.isViewable.call(this)
                }
            }), a
        }(),
        jb = function() {
            function a(a) {
                ib.call(this, a), a.data || (this.data.textAlignment = K.getInheritableProperty(a.dict, "Q"))
            }
            function c(a, b, c) {
                var d = a.style;
                if (d.fontSize = b.fontSize + "px", d.direction = b.fontDirection < 0 ? "rtl" : "ltr", c) {
                    d.fontWeight = c.black ? c.bold ? "bolder" : "bold" : c.bold ? "bold" : "normal", d.fontStyle = c.italic ? "italic" : "normal";
                    var e = c.loadedName,
                        f = e ? '"' + e + '", ' : "",
                        g = c.fallbackName || "Helvetica, sans-serif";
                    d.fontFamily = f + g
                }
            }
            return K.inherit(a, ib, {
                hasHtml: function() {
                    return !this.data.hasAppearance && !!this.data.fieldValue
                },
                getHtmlElement: function(a) {
                    k(!b, "getHtmlElement() shall be called from main thread");
                    var d = this.data,
                        e = this.getEmptyContainer("div");
                    e.style.display = "table";
                    var f = document.createElement("div");
                    f.textContent = d.fieldValue;
                    var g = d.textAlignment;
                    f.style.textAlign = ["left", "center", "right"][g], f.style.verticalAlign = "middle", f.style.display = "table-cell";
                    var h = d.fontRefName ? a.getData(d.fontRefName) : null;
                    return c(f, d, h), e.appendChild(f), e
                },
                getOperatorList: function(a) {
                    if (this.appearance)
                        return hb.prototype.getOperatorList.call(this, a);
                    var b = new OperatorList,
                        c = this.data;
                    if (!c.defaultAppearance)
                        return Promise.resolve(b);
                    var d = new Stream(A(c.defaultAppearance));
                    return a.getOperatorList(d, this.fieldResources, b).then(function() {
                        return b
                    })
                }
            }), a
        }(),
        kb = function() {
            function a(a) {
                hb.call(this, a)
            }
            return K.inherit(a, hb, {
                hasHtml: function() {
                    return !0
                },
                highlight: function() {
                    this.highlightElement && this.highlightElement.hasAttribute("hidden") && this.highlightElement.removeAttribute("hidden")
                },
                unhighlight: function() {
                    this.highlightElement && !this.highlightElement.hasAttribute("hidden") && this.highlightElement.setAttribute("hidden", !0)
                },
                initContainer: function() {
                    var a = this.data,
                        b = a.rect,
                        c = this.getEmptyContainer("section", b, a.borderWidth);
                    c.style.backgroundColor = a.color;
                    for (var d = a.color, e = [], f = 0; 3 > f; ++f)
                        e[f] = Math.round(255 * d[f]);
                    a.colorCssRgb = K.makeCssRgb(e);
                    var g = document.createElement("div");
                    return g.className = "annotationHighlight", g.style.left = g.style.top = -fb + "px", g.style.right = g.style.bottom = -fb + "px", g.setAttribute("hidden", !0), this.highlightElement = g, c.appendChild(this.highlightElement), c
                }
            }), a
        }(),
        lb = function() {
            function a(a) {
                if (kb.call(this, a), !a.data) {
                    var b = a.dict,
                        c = this.data,
                        d = b.get("Contents"),
                        e = b.get("T");
                    c.content = N(d || ""), c.title = N(e || ""), c.hasAppearance ? c.name = "NoIcon" : (c.rect[1] = c.rect[3] - eb, c.rect[2] = c.rect[0] + eb, c.name = b.has("Name") ? b.get("Name").name : "Note"), b.has("C") && (c.hasBgColor = !0)
                }
            }
            var c = 10;
            return K.inherit(a, kb, {
                getHtmlElement: function() {
                    k(!b, "getHtmlElement() shall be called from main thread");
                    var d = this.data,
                        e = d.rect;
                    e[3] - e[1] < c && (e[3] = e[1] + c), e[2] - e[0] < c && (e[2] = e[0] + (e[3] - e[1]));
                    var f = this.initContainer();
                    f.className = "annotText";
                    var g = document.createElement("img");
                    g.style.height = f.style.height, g.style.width = f.style.width;
                    var h = d.name;
                    g.src = PDFJS.imageResourcesPath + "annotation-" + h.toLowerCase() + ".svg", g.alt = "[{{type}} Annotation]", g.dataset.l10nId = "text_annotation_type", g.dataset.l10nArgs = JSON.stringify({
                        type: h
                    });
                    var i = document.createElement("div");
                    i.className = "annotTextContentWrapper", i.style.left = Math.floor(e[2] - e[0] + 5) + "px", i.style.top = "-10px";
                    var j = document.createElement("div");
                    j.className = "annotTextContent", j.setAttribute("hidden", !0);
                    var l,
                        m;
                    if (d.hasBgColor) {
                        var n = d.color,
                            o = [];
                        for (l = 0; 3 > l; ++l) {
                            var p = Math.round(255 * n[l]);
                            o[l] = Math.round(.7 * (255 - p)) + p
                        }
                        j.style.backgroundColor = K.makeCssRgb(o)
                    }
                    var q = document.createElement("h1"),
                        r = document.createElement("p");
                    if (q.textContent = d.title, d.content || d.title) {
                        var s = document.createElement("span"),
                            t = d.content.split(/(?:\r\n?|\n)/);
                        for (l = 0, m = t.length; m > l; ++l) {
                            var u = t[l];
                            s.appendChild(document.createTextNode(u)), m - 1 > l && s.appendChild(document.createElement("br"))
                        }
                        r.appendChild(s);
                        var v = !1,
                            w = function(a) {
                                a && (v = !0), j.hasAttribute("hidden") && (f.style.zIndex += 1, j.removeAttribute("hidden"))
                            },
                            x = function(a) {
                                a && (v = !1), j.hasAttribute("hidden") || v || (f.style.zIndex -= 1, j.setAttribute("hidden", !0))
                            },
                            y = function() {
                                v ? x(!0) : w(!0)
                            };
                        g.addEventListener("click", function() {
                            y()
                        }, !1), g.addEventListener("mouseover", function() {
                            w()
                        }, !1), g.addEventListener("mouseout", function() {
                            x()
                        }, !1), j.addEventListener("click", function() {
                            x(!0)
                        }, !1)
                    } else
                        j.setAttribute("hidden", !0);
                    return j.appendChild(q), j.appendChild(r), i.appendChild(j), f.appendChild(g), f.appendChild(i), f
                }
            }), a
        }(),
        mb = function() {
            function a(a) {
                if (kb.call(this, a), !a.data) {
                    var c = a.dict,
                        d = this.data,
                        e = c.get("A");
                    if (e) {
                        var f = e.get("S").name;
                        if ("URI" === f) {
                            var g = e.get("URI");
                            V(g) ? g = "/" + g.name : g && (g = b(g)), o(g, !1) || (g = ""), d.url = g
                        } else if ("GoTo" === f)
                            d.dest = e.get("D");
                        else if ("GoToR" === f) {
                            var i = e.get("F");
                            X(i) && (g = i.get("F") || ""), o(g, !1) || (g = ""), d.url = g, d.dest = e.get("D")
                        } else
                            "Named" === f ? d.action = e.get("N").name : h("unrecognized link type: " + f)
                    } else if (c.has("Dest")) {
                        var j = c.get("Dest");
                        d.dest = V(j) ? j.name : j
                    }
                }
            }
            function b(a) {
                return a && 0 === a.indexOf("www.") ? "http://" + a : a
            }
            return K.inherit(a, kb, {
                hasOperatorList: function() {
                    return !1
                },
                getHtmlElement: function() {
                    var b = this.initContainer();
                    b.className = "annotLink";
                    var c = this.data;
                    b.style.borderColor = c.colorCssRgb, b.style.borderStyle = "solid";
                    var d = document.createElement("a");
                    return d.href = d.title = this.data.url || "", b.appendChild(d), b
                }
            }), a
        }();
    PDFJS.maxImageSize = void 0 === PDFJS.maxImageSize ? -1 : PDFJS.maxImageSize, PDFJS.cMapUrl = void 0 === PDFJS.cMapUrl ? null : PDFJS.cMapUrl, PDFJS.cMapPacked = void 0 === PDFJS.cMapPacked ? !1 : PDFJS.cMapPacked, PDFJS.disableFontFace = void 0 === PDFJS.disableFontFace ? !1 : PDFJS.disableFontFace, PDFJS.imageResourcesPath = void 0 === PDFJS.imageResourcesPath ? "" : PDFJS.imageResourcesPath, PDFJS.disableWorker = void 0 === PDFJS.disableWorker ? !1 : PDFJS.disableWorker, PDFJS.workerSrc = void 0 === PDFJS.workerSrc ? null : PDFJS.workerSrc, PDFJS.disableRange = void 0 === PDFJS.disableRange ? !1 : PDFJS.disableRange, PDFJS.disableAutoFetch = void 0 === PDFJS.disableAutoFetch ? !1 : PDFJS.disableAutoFetch, PDFJS.pdfBug = void 0 === PDFJS.pdfBug ? !1 : PDFJS.pdfBug, PDFJS.postMessageTransfers = void 0 === PDFJS.postMessageTransfers ? !0 : PDFJS.postMessageTransfers, PDFJS.disableCreateObjectURL = void 0 === PDFJS.disableCreateObjectURL ? !1 : PDFJS.disableCreateObjectURL, PDFJS.disableWebGL = void 0 === PDFJS.disableWebGL ? !0 : PDFJS.disableWebGL, PDFJS.verbosity = void 0 === PDFJS.verbosity ? PDFJS.VERBOSITY_LEVELS.warnings : PDFJS.verbosity, PDFJS.getDocument = function(a, b, c, d) {
        var e,
            f,
            g;
        "string" == typeof a ? a = {
            url: a
        } : $(a) ? a = {
            data: a
        } : "object" != typeof a && i("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"), a.url || a.data || i("Invalid parameter array, need either .data or .url");
        var h = {};
        for (var j in a)
            h[j] = "url" !== j || "undefined" == typeof window ? a[j] : n(window.location.href, a[j]);
        return e = ab(), f = ab(), g = new pb(e, f, b, d), e.promise.then(function() {
            g.passwordCallback = c, g.fetchDocument(h)
        }), f.promise
    };
    var nb = function() {
            function a(a, b) {
                this.pdfInfo = a, this.transport = b
            }
            return a.prototype = {
                get numPages() {
                    return this.pdfInfo.numPages
                },
                get fingerprint() {
                    return this.pdfInfo.fingerprint
                },
                getPage: function(a) {
                    return this.transport.getPage(a)
                },
                getPageIndex: function(a) {
                    return this.transport.getPageIndex(a)
                },
                getDestinations: function() {
                    return this.transport.getDestinations()
                },
                getAttachments: function() {
                    return this.transport.getAttachments()
                },
                getJavaScript: function() {
                    return this.transport.getJavaScript()
                },
                getOutline: function() {
                    return this.transport.getOutline()
                },
                getMetadata: function() {
                    return this.transport.getMetadata()
                },
                getData: function() {
                    return this.transport.getData()
                },
                getDownloadInfo: function() {
                    return this.transport.downloadInfoCapability.promise
                },
                cleanup: function() {
                    this.transport.startCleanup()
                },
                destroy: function() {
                    this.transport.destroy()
                }
            }, a
        }(),
        ob = function() {
            function b(b, c, d) {
                this.pageIndex = b, this.pageInfo = c, this.transport = d, this.stats = new bb, this.stats.enabled = !!a.PDFJS.enableStats, this.commonObjs = d.commonObjs, this.objs = new qb, this.cleanupAfterRender = !1, this.pendingDestroy = !1, this.intentStates = {}
            }
            return b.prototype = {
                get pageNumber() {
                    return this.pageIndex + 1
                },
                get rotate() {
                    return this.pageInfo.rotate
                },
                get ref() {
                    return this.pageInfo.ref
                },
                get view() {
                    return this.pageInfo.view
                },
                getViewport: function(a, b) {
                    return arguments.length < 2 && (b = this.rotate), new PDFJS.PageViewport(this.view, a, b, 0, 0)
                },
                getAnnotations: function() {
                    if (this.annotationsPromise)
                        return this.annotationsPromise;
                    var a = this.transport.getAnnotations(this.pageIndex);
                    return this.annotationsPromise = a, a
                },
                render: function(a) {
                    function h(a) {
                        var c = d.renderTasks.indexOf(e);
                        c >= 0 && d.renderTasks.splice(c, 1), g.cleanupAfterRender && (g.pendingDestroy = !0), g._tryDestroy(), a ? e.capability.reject(a) : e.capability.resolve(), b.timeEnd("Rendering"), b.timeEnd("Overall")
                    }
                    var b = this.stats;
                    b.time("Overall"), this.pendingDestroy = !1;
                    var c = "intent" in a ? "print" == a.intent ? "print" : "display" : "display";
                    this.intentStates[c] || (this.intentStates[c] = {});
                    var d = this.intentStates[c];
                    d.displayReadyCapability || (d.receivingOperatorList = !0, d.displayReadyCapability = ab(), d.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1
                    }, this.stats.time("Page Request"), this.transport.messageHandler.send("RenderPageRequest", {
                        pageIndex: this.pageNumber - 1,
                        intent: c
                    }));
                    var e = new sb(h, a, this.objs, this.commonObjs, d.operatorList, this.pageNumber);
                    d.renderTasks || (d.renderTasks = []), d.renderTasks.push(e);
                    var f = new rb(e),
                        g = this;
                    return d.displayReadyCapability.promise.then(function(a) {
                        return g.pendingDestroy ? (h(), void 0) : (b.time("Rendering"), e.initalizeGraphics(a), e.operatorListChanged(), void 0)
                    }, function(a) {
                        h(a)
                    }), f
                },
                getTextContent: function() {
                    return this.transport.messageHandler.sendWithPromise("GetTextContent", {
                        pageIndex: this.pageNumber - 1
                    })
                },
                destroy: function() {
                    this.pendingDestroy = !0, this._tryDestroy()
                },
                _tryDestroy: function() {
                    this.pendingDestroy && !Object.keys(this.intentStates).some(function(a) {
                        var b = this.intentStates[a];
                        return 0 !== b.renderTasks.length || b.receivingOperatorList
                    }, this) && (Object.keys(this.intentStates).forEach(function(a) {
                        delete this.intentStates[a]
                    }, this), this.objs.clear(), this.annotationsPromise = null, this.pendingDestroy = !1)
                },
                _startRenderPage: function(a, b) {
                    var c = this.intentStates[b];
                    c.displayReadyCapability.resolve(a)
                },
                _renderPageChunk: function(a, b) {
                    var d,
                        e,
                        c = this.intentStates[b];
                    for (d = 0, e = a.length; e > d; d++)
                        c.operatorList.fnArray.push(a.fnArray[d]), c.operatorList.argsArray.push(a.argsArray[d]);
                    for (c.operatorList.lastChunk = a.lastChunk, d = 0; d < c.renderTasks.length; d++)
                        c.renderTasks[d].operatorListChanged();
                    a.lastChunk && (c.receivingOperatorList = !1, this._tryDestroy())
                }
            }, b
        }(),
        pb = function() {
            function b(b, c, d, e) {
                if (this.pdfDataRangeTransport = d, this.workerReadyCapability = c, this.progressCallback = e, this.commonObjs = new qb, this.pageCache = [], this.pagePromises = [], this.downloadInfoCapability = ab(), this.passwordCallback = null, !a.PDFJS.disableWorker && "undefined" != typeof Worker) {
                    var f = PDFJS.workerSrc;
                    f || i("No PDFJS.workerSrc specified");
                    try {
                        var h = new Worker(f),
                            j = new cb("main", h);
                        this.messageHandler = j, j.on("test", function(c) {
                            var d = c && c.supportTypedArray;
                            d ? (this.worker = h, c.supportTransfers || (PDFJS.postMessageTransfers = !1), this.setupMessageHandler(j), b.resolve()) : (a.PDFJS.disableWorker = !0, this.loadFakeWorkerFiles().then(function() {
                                this.setupFakeWorker(), b.resolve()
                            }.bind(this)))
                        }.bind(this));
                        var k = new Uint8Array([PDFJS.postMessageTransfers ? 255 : 0]);
                        try {
                            j.send("test", k, [k.buffer])
                        } catch (l) {
                            g("Cannot use postMessage transfers"), k[0] = 0, j.send("test", k)
                        }
                        return
                    } catch (m) {
                        g("The worker has been disabled.")
                    }
                }
                a.PDFJS.disableWorker = !0, this.loadFakeWorkerFiles().then(function() {
                    this.setupFakeWorker(), b.resolve()
                }.bind(this))
            }
            return b.prototype = {
                destroy: function() {
                    this.pageCache = [], this.pagePromises = [];
                    var a = this;
                    this.messageHandler.sendWithPromise("Terminate", null).then(function() {
                        Ib.clear(), a.worker && a.worker.terminate()
                    })
                },
                loadFakeWorkerFiles: function() {
                    return PDFJS.fakeWorkerFilesLoadedCapability || (PDFJS.fakeWorkerFilesLoadedCapability = ab(), K.loadScript(PDFJS.workerSrc, function() {
                        PDFJS.fakeWorkerFilesLoadedCapability.resolve()
                    })), PDFJS.fakeWorkerFilesLoadedCapability.promise
                },
                setupFakeWorker: function() {
                    h("Setting up fake worker.");
                    var a = {
                            postMessage: function(b) {
                                a.onmessage({
                                    data: b
                                })
                            },
                            terminate: function() {}
                        },
                        b = new cb("main", a);
                    this.setupMessageHandler(b), PDFJS.WorkerMessageHandler.setup(b)
                },
                setupMessageHandler: function(a) {
                    function b(b) {
                        a.send("UpdatePassword", b)
                    }
                    this.messageHandler = a;
                    var c = this.pdfDataRangeTransport;
                    c && (c.addRangeListener(function(b, c) {
                        a.send("OnDataRange", {
                            begin: b,
                            chunk: c
                        })
                    }), c.addProgressListener(function(b) {
                        a.send("OnDataProgress", {
                            loaded: b
                        })
                    }), a.on("RequestDataRange", function(a) {
                        c.requestDataRange(a.begin, a.end)
                    }, this)), a.on("GetDoc", function(a) {
                        var b = a.pdfInfo;
                        this.numPages = a.pdfInfo.numPages;
                        var c = new nb(b, this);
                        this.pdfDocument = c, this.workerReadyCapability.resolve(c)
                    }, this), a.on("NeedPassword", function(a) {
                        return this.passwordCallback ? this.passwordCallback(b, q.NEED_PASSWORD) : (this.workerReadyCapability.reject(a.exception.message, a.exception), void 0)
                    }, this), a.on("IncorrectPassword", function(a) {
                        return this.passwordCallback ? this.passwordCallback(b, q.INCORRECT_PASSWORD) : (this.workerReadyCapability.reject(a.exception.message, a.exception), void 0)
                    }, this), a.on("InvalidPDF", function(a) {
                        this.workerReadyCapability.reject(a.exception.name, a.exception)
                    }, this), a.on("MissingPDF", function(a) {
                        this.workerReadyCapability.reject(a.exception.message, a.exception)
                    }, this), a.on("UnknownError", function(a) {
                        this.workerReadyCapability.reject(a.exception.message, a.exception)
                    }, this), a.on("DataLoaded", function(a) {
                        this.downloadInfoCapability.resolve(a)
                    }, this), a.on("StartRenderPage", function(a) {
                        var b = this.pageCache[a.pageIndex];
                        b.stats.timeEnd("Page Request"), b._startRenderPage(a.transparency, a.intent)
                    }, this), a.on("RenderPageChunk", function(a) {
                        var b = this.pageCache[a.pageIndex];
                        b._renderPageChunk(a.operatorList, a.intent)
                    }, this), a.on("commonobj", function(a) {
                        var b = a[0],
                            c = a[1];
                        if (!this.commonObjs.hasData(b))
                            switch (c) {
                            case "Font":
                                var e,
                                    d = a[2];
                                if ("error" in d) {
                                    var f = d.error;
                                    h("Error during font loading: " + f), this.commonObjs.resolve(b, f);
                                    break
                                }
                                e = new Jb(d), Ib.bind([e], function() {
                                    this.commonObjs.resolve(b, e)
                                }.bind(this));
                                break;
                            case "FontPath":
                                this.commonObjs.resolve(b, a[2]);
                                break;
                            default:
                                f("Got unknown common object type " + c)
                            }
                    }, this), a.on("obj", function(a) {
                        var f,
                            b = a[0],
                            c = a[1],
                            d = a[2],
                            e = this.pageCache[c];
                        if (!e.objs.hasData(b))
                            switch (d) {
                            case "JpegStream":
                                f = a[3], db(b, f, e.objs);
                                break;
                            case "Image":
                                f = a[3], e.objs.resolve(b, f);
                                var g = 8e6;
                                f && "data" in f && f.data.length > g && (e.cleanupAfterRender = !0);
                                break;
                            default:
                                i("Got unknown object type " + d)
                            }
                    }, this), a.on("DocProgress", function(a) {
                        this.progressCallback && this.progressCallback({
                            loaded: a.loaded,
                            total: a.total
                        })
                    }, this), a.on("DocError", function(a) {
                        this.workerReadyCapability.reject(a)
                    }, this), a.on("PageError", function(a) {
                        var b = this.pageCache[a.pageNum - 1],
                            c = b.intentStates[a.intent];
                        c.displayReadyCapability.promise ? c.displayReadyCapability.reject(a.error) : i(a.error)
                    }, this), a.on("JpegDecode", function(a) {
                        var b = a[0],
                            c = a[1];
                        return 3 != c && 1 != c ? Promise.reject(new Error("Only 3 components or 1 component can be returned")) : new Promise(function(a, d) {
                            var e = new Image;
                            e.onload = function() {
                                var b = e.width,
                                    d = e.height,
                                    f = b * d,
                                    g = 4 * f,
                                    h = new Uint8Array(f * c),
                                    i = xb(b, d),
                                    j = i.getContext("2d");
                                j.drawImage(e, 0, 0);
                                var l,
                                    m,
                                    k = j.getImageData(0, 0, b, d).data;
                                if (3 == c)
                                    for (l = 0, m = 0; g > l; l += 4, m += 3)
                                        h[m] = k[l], h[m + 1] = k[l + 1], h[m + 2] = k[l + 2];
                                else if (1 == c)
                                    for (l = 0, m = 0; g > l; l += 4, m++)
                                        h[m] = k[l];
                                a({
                                    data: h,
                                    width: b,
                                    height: d
                                })
                            }, e.onerror = function() {
                                d(new Error("JpegDecode failed to load image"))
                            }, e.src = b
                        })
                    })
                },
                fetchDocument: function(a) {
                    a.disableAutoFetch = PDFJS.disableAutoFetch, a.chunkedViewerLoading = !!this.pdfDataRangeTransport, this.messageHandler.send("GetDocRequest", {
                        source: a,
                        disableRange: PDFJS.disableRange,
                        maxImageSize: PDFJS.maxImageSize,
                        cMapUrl: PDFJS.cMapUrl,
                        cMapPacked: PDFJS.cMapPacked,
                        disableFontFace: PDFJS.disableFontFace,
                        disableCreateObjectURL: PDFJS.disableCreateObjectURL,
                        verbosity: PDFJS.verbosity
                    })
                },
                getData: function() {
                    return this.messageHandler.sendWithPromise("GetData", null)
                },
                getPage: function(a) {
                    if (0 >= a || a > this.numPages || (0 | a) !== a)
                        return Promise.reject(new Error("Invalid page request"));
                    var c = a - 1;
                    if (c in this.pagePromises)
                        return this.pagePromises[c];
                    var d = this.messageHandler.sendWithPromise("GetPage", {
                        pageIndex: c
                    }).then(function(a) {
                        var b = new ob(c, a, this);
                        return this.pageCache[c] = b, b
                    }.bind(this));
                    return this.pagePromises[c] = d, d
                },
                getPageIndex: function(a) {
                    return this.messageHandler.sendWithPromise("GetPageIndex", {
                        ref: a
                    })
                },
                getAnnotations: function(a) {
                    return this.messageHandler.sendWithPromise("GetAnnotations", {
                        pageIndex: a
                    })
                },
                getDestinations: function() {
                    return this.messageHandler.sendWithPromise("GetDestinations", null)
                },
                getAttachments: function() {
                    return this.messageHandler.sendWithPromise("GetAttachments", null)
                },
                getJavaScript: function() {
                    return this.messageHandler.sendWithPromise("GetJavaScript", null)
                },
                getOutline: function() {
                    return this.messageHandler.sendWithPromise("GetOutline", null)
                },
                getMetadata: function() {
                    return this.messageHandler.sendWithPromise("GetMetadata", null).then(function(a) {
                        return {
                            info: a[0],
                            metadata: a[1] ? new PDFJS.Metadata(a[1]) : null
                        }
                    })
                },
                startCleanup: function() {
                    this.messageHandler.sendWithPromise("Cleanup", null).then(function() {
                        for (var a = 0, b = this.pageCache.length; b > a; a++) {
                            var c = this.pageCache[a];
                            c && c.destroy()
                        }
                        this.commonObjs.clear(), Ib.clear()
                    }.bind(this))
                }
            }, b
        }(),
        qb = function() {
            function a() {
                this.objs = {}
            }
            return a.prototype = {
                ensureObj: function(a) {
                    if (this.objs[a])
                        return this.objs[a];
                    var b = {
                        capability: ab(),
                        data: null,
                        resolved: !1
                    };
                    return this.objs[a] = b, b
                },
                get: function(a, b) {
                    if (b)
                        return this.ensureObj(a).capability.promise.then(b), null;
                    var c = this.objs[a];
                    return c && c.resolved || i("Requesting object that isn't resolved yet " + a), c.data
                },
                resolve: function(a, b) {
                    var c = this.ensureObj(a);
                    c.resolved = !0, c.data = b, c.capability.resolve(b)
                },
                isResolved: function(a) {
                    var b = this.objs;
                    return b[a] ? b[a].resolved : !1
                },
                hasData: function(a) {
                    return this.isResolved(a)
                },
                getData: function(a) {
                    var b = this.objs;
                    return b[a] && b[a].resolved ? b[a].data : null
                },
                clear: function() {
                    this.objs = {}
                }
            }, a
        }(),
        rb = function() {
            function a(a) {
                this.internalRenderTask = a, this.promise = this.internalRenderTask.capability.promise
            }
            return a.prototype = {
                cancel: function() {
                    this.internalRenderTask.cancel()
                },
                then: function(a, b) {
                    return this.promise.then(a, b)
                }
            }, a
        }(),
        sb = function() {
            function b(a, b, c, d, e, f) {
                this.callback = a, this.params = b, this.objs = c, this.commonObjs = d, this.operatorListIdx = null, this.operatorList = e, this.pageNumber = f, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this.cancelled = !1, this.capability = ab(), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this)
            }
            return b.prototype = {
                initalizeGraphics: function(b) {
                    if (!this.cancelled) {
                        PDFJS.pdfBug && "StepperManager" in a && a.StepperManager.enabled && (this.stepper = a.StepperManager.create(this.pageNumber - 1), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                        var c = this.params;
                        this.gfx = new Cb(c.canvasContext, this.commonObjs, this.objs, c.imageLayer), this.gfx.beginDrawing(c.viewport, b), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback && this.graphicsReadyCallback()
                    }
                },
                cancel: function() {
                    this.running = !1, this.cancelled = !0, this.callback("cancelled")
                },
                operatorListChanged: function() {
                    return this.graphicsReady ? (this.stepper && this.stepper.updateOperatorList(this.operatorList), this.running || this._continue(), void 0) : (this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound), void 0)
                },
                _continue: function() {
                    this.running = !0, this.cancelled || (this.params.continueCallback ? this.params.continueCallback(this._scheduleNextBound) : this._scheduleNext())
                },
                _scheduleNext: function() {
                    window.requestAnimationFrame(this._nextBound)
                },
                _next: function() {
                    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this.callback())))
                }
            }, b
        }();
    PDFJS.Metadata = function() {
        function a(a) {
            return a.replace(/>\\376\\377([^<]+)/g, function(a, b) {
                for (var c = b.replace(/\\([0-3])([0-7])([0-7])/g, function(a, b, c, d) {
                        return String.fromCharCode(64 * b + 8 * c + 1 * d)
                    }), d = "", e = 0; e < c.length; e += 2) {
                    var f = 256 * c.charCodeAt(e) + c.charCodeAt(e + 1);
                    d += "&#x" + (65536 + f).toString(16).substring(1) + ";"
                }
                return ">" + d
            })
        }
        function b(b) {
            if ("string" == typeof b) {
                b = a(b);
                var c = new DOMParser;
                b = c.parseFromString(b, "application/xml")
            } else
                b instanceof Document || i("Metadata: Invalid metadata object");
            this.metaDocument = b, this.metadata = {}, this.parse()
        }
        return b.prototype = {
            parse: function() {
                var a = this.metaDocument,
                    b = a.documentElement;
                if ("rdf:rdf" !== b.nodeName.toLowerCase())
                    for (b = b.firstChild; b && "rdf:rdf" !== b.nodeName.toLowerCase();)
                        b = b.nextSibling;
                var c = b ? b.nodeName.toLowerCase() : null;
                if (b && "rdf:rdf" === c && b.hasChildNodes()) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        d = b.childNodes;
                    for (h = 0, j = d.length; j > h; h++)
                        if (e = d[h], "rdf:description" === e.nodeName.toLowerCase())
                            for (i = 0, k = e.childNodes.length; k > i; i++)
                                "#text" !== e.childNodes[i].nodeName.toLowerCase() && (f = e.childNodes[i], g = f.nodeName.toLowerCase(), this.metadata[g] = f.textContent.trim())
                }
            },
            get: function(a) {
                return this.metadata[a] || null
            },
            has: function(a) {
                return "undefined" != typeof this.metadata[a]
            }
        }, b
    }();
    var ub = 16,
        vb = 4096,
        wb = !0,
        zb = function() {
            var a = {};
            return {
                getCanvas: function(b, c, d, e) {
                    var f;
                    if (b in a)
                        f = a[b], f.canvas.width = c, f.canvas.height = d, f.context.setTransform(1, 0, 0, 1, 0, 0);
                    else {
                        var g = xb(c, d),
                            h = g.getContext("2d");
                        e && yb(h), a[b] = f = {
                            canvas: g,
                            context: h
                        }
                    }
                    return f
                },
                clear: function() {
                    a = {}
                }
            }
        }(),
        Bb = function() {
            function a(a) {
                this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = J, this.textMatrixScale = 1, this.fontMatrix = c, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = d.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.old = a
            }
            return a.prototype = {
                clone: function() {
                    return Object.create(this)
                },
                setCurrentPoint: function(a, b) {
                    this.x = a, this.y = b
                }
            }, a
        }(),
        Cb = function() {
            function b(a, b, c, d) {
                this.ctx = a, this.current = new Bb, this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = b, this.objs = c, this.imageLayer = d, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, a && yb(a)
            }
            function j(a, b) {
                if ("undefined" != typeof ImageData && b instanceof ImageData)
                    return a.putImageData(b, 0, 0), void 0;
                var n,
                    q,
                    r,
                    s,
                    t,
                    c = b.height,
                    d = b.width,
                    f = 16,
                    g = c / f,
                    h = Math.floor(g),
                    j = Math.ceil(g),
                    k = c - h * f,
                    l = a.createImageData(d, f),
                    m = 0,
                    o = b.data,
                    p = l.data;
                if (b.kind === e.GRAYSCALE_1BPP) {
                    var u = o.byteLength,
                        v = PDFJS.hasCanvasTypedArrays ? new Uint32Array(p.buffer) : new I(p),
                        w = v.length,
                        x = d + 7 >> 3,
                        y = 4294967295,
                        z = PDFJS.isLittleEndian || !PDFJS.hasCanvasTypedArrays ? 4278190080 : 255;
                    for (q = 0; j > q; q++) {
                        for (s = h > q ? f : k, n = 0, r = 0; s > r; r++) {
                            for (var A = u - m, B = 0, C = A > x ? d : 8 * A - 7, D = -8 & C, E = 0, F = 0; D > B; B += 8)
                                F = o[m++], v[n++] = 128 & F ? y : z, v[n++] = 64 & F ? y : z, v[n++] = 32 & F ? y : z, v[n++] = 16 & F ? y : z, v[n++] = 8 & F ? y : z, v[n++] = 4 & F ? y : z, v[n++] = 2 & F ? y : z, v[n++] = 1 & F ? y : z;
                            for (; C > B; B++)
                                0 === E && (F = o[m++], E = 128), v[n++] = F & E ? y : z, E >>= 1
                        }
                        for (; w > n;)
                            v[n++] = 0;
                        a.putImageData(l, 0, q * f)
                    }
                } else if (b.kind === e.RGBA_32BPP) {
                    for (r = 0, t = 4 * d * f, q = 0; h > q; q++)
                        p.set(o.subarray(m, m + t)), m += t, a.putImageData(l, 0, r), r += f;
                    j > q && (t = 4 * d * k, p.set(o.subarray(m, m + t)), a.putImageData(l, 0, r))
                } else if (b.kind === e.RGB_24BPP)
                    for (s = f, t = d * s, q = 0; j > q; q++) {
                        for (q >= h && (s = k, t = d * s), n = 0, r = t; r--;)
                            p[n++] = o[m++], p[n++] = o[m++], p[n++] = o[m++], p[n++] = 255;
                        a.putImageData(l, 0, q * f)
                    }
                else
                    i("bad image kind: " + b.kind)
            }
            function l(a, b) {
                for (var c = b.height, d = b.width, e = 16, f = c / e, g = Math.floor(f), h = Math.ceil(f), i = c - g * e, j = a.createImageData(d, e), k = 0, l = b.data, m = j.data, n = 0; h > n; n++) {
                    for (var o = g > n ? e : i, p = 3, q = 0; o > q; q++)
                        for (var r = 0, s = 0; d > s; s++) {
                            if (!r) {
                                var t = l[k++];
                                r = 128
                            }
                            m[p] = t & r ? 0 : 255, p += 4, r >>= 1
                        }
                    a.putImageData(j, 0, n * e)
                }
            }
            function m(a, b) {
                for (var c = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    f in a && (b[f] = a[f])
                }
                "setLineDash" in a ? (b.setLineDash(a.getLineDash()), b.lineDashOffset = a.lineDashOffset) : "mozDash" in a && (b.mozDash = a.mozDash, b.mozDashOffset = a.mozDashOffset)
            }
            function n(a, b, c, d, e, f) {
                var g;
                g = f ? function(a, b, c, d) {
                    for (var e = d.length, f = 3; e > f; f += 4) {
                        var g = d[f] / 255;
                        if (0 === g)
                            d[f - 3] = a, d[f - 2] = b, d[f - 1] = c;
                        else if (1 > g) {
                            var h = 1 - g;
                            d[f - 3] = 0 | d[f - 3] * g + a * h, d[f - 2] = 0 | d[f - 2] * g + b * h, d[f - 1] = 0 | d[f - 1] * g + c * h
                        }
                    }
                }.bind(null, f[0], f[1], f[2]) : function() {};
                var h;
                h = "Luminosity" === e ? function(a, b) {
                    for (var c = a.length, d = 3; c > d; d += 4) {
                        var e = 0 | 77 * a[d - 3] + 152 * a[d - 2] + 28 * a[d - 1];
                        b[d] = b[d] * e >> 16
                    }
                } : function(a, b) {
                    for (var c = a.length, d = 3; c > d; d += 4) {
                        var e = a[d];
                        b[d] = 0 | b[d] * e / 255
                    }
                };
                for (var i = 65536, j = Math.min(d, Math.ceil(i / c)), k = 0; d > k; k += j) {
                    var l = Math.min(j, d - k),
                        m = a.getImageData(0, k, c, l),
                        n = b.getImageData(0, k, c, l);
                    g(m.data), h(m.data, n.data), a.putImageData(n, 0, k)
                }
            }
            function o(a, b, c) {
                var d = b.canvas,
                    e = b.context;
                a.setTransform(b.scaleX, 0, 0, b.scaleY, b.offsetX, b.offsetY);
                var f = b.backdrop || null;
                if (Db.isEnabled) {
                    var g = Db.composeSMask(c.canvas, d, {
                        subtype: b.subtype,
                        backdrop: f
                    });
                    return a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(g, b.offsetX, b.offsetY), void 0
                }
                n(e, c, d.width, d.height, b.subtype, f), a.drawImage(d, 0, 0)
            }
            var a = 15,
                q = ["butt", "round", "square"],
                r = ["miter", "round", "bevel"],
                s = {},
                t = {};
            b.prototype = {
                beginDrawing: function(a, b) {
                    var c = this.ctx.canvas.width,
                        d = this.ctx.canvas.height;
                    b ? this.ctx.clearRect(0, 0, c, d) : (this.ctx.mozOpaque = !0, this.ctx.save(), this.ctx.fillStyle = "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, c, d), this.ctx.restore());
                    var e = a.transform;
                    this.ctx.save(), this.ctx.transform.apply(this.ctx, e), this.baseTransform = this.ctx.mozCurrentTransform.slice(), this.imageLayer && this.imageLayer.beginLayout()
                },
                executeOperatorList: function(b, c, d, e) {
                    var g = b.argsArray,
                        h = b.fnArray,
                        i = c || 0,
                        j = g.length;
                    if (j == i)
                        return i;
                    for (var n, k = Date.now() + a, l = this.commonObjs, m = this.objs;;) {
                        if (e && i === e.nextBreakPoint)
                            return e.breakIt(i, d), i;
                        if (n = h[i], n !== f.dependency)
                            this[n].apply(this, g[i]);
                        else
                            for (var o = g[i], p = 0, q = o.length; q > p; p++) {
                                var r = o[p],
                                    s = "g_" == r.substring(0, 2);
                                if (!s && !m.isResolved(r))
                                    return m.get(r, d), i;
                                if (s && !l.isResolved(r))
                                    return l.get(r, d), i
                            }
                        if (i++, i == j)
                            return i;
                        if (d && Date.now() > k)
                            return d(), i
                    }
                },
                endDrawing: function() {
                    this.ctx.restore(), zb.clear(), Db.clear(), this.imageLayer && this.imageLayer.endLayout()
                },
                setLineWidth: function(a) {
                    this.current.lineWidth = a, this.ctx.lineWidth = a
                },
                setLineCap: function(a) {
                    this.ctx.lineCap = q[a]
                },
                setLineJoin: function(a) {
                    this.ctx.lineJoin = r[a]
                },
                setMiterLimit: function(a) {
                    this.ctx.miterLimit = a
                },
                setDash: function(a, b) {
                    var c = this.ctx;
                    "setLineDash" in c ? (c.setLineDash(a), c.lineDashOffset = b) : (c.mozDash = a, c.mozDashOffset = b)
                },
                setRenderingIntent: function() {},
                setFlatness: function() {},
                setGState: function(a) {
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b],
                            e = d[0],
                            f = d[1];
                        switch (e) {
                        case "LW":
                            this.setLineWidth(f);
                            break;
                        case "LC":
                            this.setLineCap(f);
                            break;
                        case "LJ":
                            this.setLineJoin(f);
                            break;
                        case "ML":
                            this.setMiterLimit(f);
                            break;
                        case "D":
                            this.setDash(f[0], f[1]);
                            break;
                        case "RI":
                            this.setRenderingIntent(f);
                            break;
                        case "FL":
                            this.setFlatness(f);
                            break;
                        case "Font":
                            this.setFont(f[0], f[1]);
                            break;
                        case "CA":
                            this.current.strokeAlpha = d[1];
                            break;
                        case "ca":
                            this.current.fillAlpha = d[1], this.ctx.globalAlpha = d[1];
                            break;
                        case "BM":
                            if (f && f.name && "Normal" !== f.name) {
                                var g = f.name.replace(/([A-Z])/g, function(a) {
                                    return "-" + a.toLowerCase()
                                }).substring(1);
                                this.ctx.globalCompositeOperation = g, this.ctx.globalCompositeOperation !== g && h('globalCompositeOperation "' + g + '" is not supported')
                            } else
                                this.ctx.globalCompositeOperation = "source-over";
                            break;
                        case "SMask":
                            this.current.activeSMask && this.endSMaskGroup(), this.current.activeSMask = f ? this.tempSMask : null, this.current.activeSMask && this.beginSMaskGroup(), this.tempSMask = null
                        }
                    }
                },
                beginSMaskGroup: function() {
                    var a = this.current.activeSMask,
                        b = a.canvas.width,
                        c = a.canvas.height,
                        d = "smaskGroupAt" + this.groupLevel,
                        e = zb.getCanvas(d, b, c, !0),
                        f = this.ctx,
                        g = f.mozCurrentTransform;
                    this.ctx.save();
                    var h = e.context;
                    h.scale(1 / a.scaleX, 1 / a.scaleY), h.translate(-a.offsetX, -a.offsetY), h.transform.apply(h, g), m(f, h), this.ctx = h, this.setGState([["BM", "Normal"], ["ca", 1], ["CA", 1]]), this.groupStack.push(f), this.groupLevel++
                },
                endSMaskGroup: function() {
                    var a = this.ctx;
                    this.groupLevel--, this.ctx = this.groupStack.pop(), o(this.ctx, this.current.activeSMask, a), this.ctx.restore()
                },
                save: function() {
                    this.ctx.save();
                    var a = this.current;
                    this.stateStack.push(a), this.current = a.clone(), this.current.activeSMask && (this.current.activeSMask = null)
                },
                restore: function() {
                    var a = this.stateStack.pop();
                    a && (this.current.activeSMask && this.endSMaskGroup(), this.current = a, this.ctx.restore())
                },
                transform: function(a, b, c, d, e, f) {
                    this.ctx.transform(a, b, c, d, e, f)
                },
                constructPath: function(a, b) {
                    for (var c = this.ctx, d = this.current, e = d.x, g = d.y, h = 0, i = 0, j = a.length; j > h; h++)
                        switch (0 | a[h]) {
                        case f.moveTo:
                            e = b[i++], g = b[i++], c.moveTo(e, g);
                            break;
                        case f.lineTo:
                            e = b[i++], g = b[i++], c.lineTo(e, g);
                            break;
                        case f.curveTo:
                            e = b[i + 4], g = b[i + 5], c.bezierCurveTo(b[i], b[i + 1], b[i + 2], b[i + 3], e, g), i += 6;
                            break;
                        case f.curveTo2:
                            c.bezierCurveTo(e, g, b[i], b[i + 1], b[i + 2], b[i + 3]), e = b[i + 2], g = b[i + 3], i += 4;
                            break;
                        case f.curveTo3:
                            e = b[i + 2], g = b[i + 3], c.bezierCurveTo(b[i], b[i + 1], e, g, e, g), i += 4;
                            break;
                        case f.closePath:
                            c.closePath()
                        }
                    d.setCurrentPoint(e, g)
                },
                closePath: function() {
                    this.ctx.closePath()
                },
                rectangle: function(a, b, c, d) {
                    0 === c && (c = this.getSinglePixelWidth()), 0 === d && (d = this.getSinglePixelWidth()), this.ctx.rect(a, b, c, d)
                },
                stroke: function(a) {
                    a = "undefined" != typeof a ? a : !0;
                    var b = this.ctx,
                        c = this.current.strokeColor;
                    0 === this.current.lineWidth && (b.lineWidth = this.getSinglePixelWidth()), b.globalAlpha = this.current.strokeAlpha, c && c.hasOwnProperty("type") && "Pattern" === c.type ? (b.save(), b.strokeStyle = c.getPattern(b, this), b.stroke(), b.restore()) : b.stroke(), a && this.consumePath(), b.globalAlpha = this.current.fillAlpha
                },
                closeStroke: function() {
                    this.closePath(), this.stroke()
                },
                fill: function(a) {
                    a = "undefined" != typeof a ? a : !0;
                    var b = this.ctx,
                        c = this.current.fillColor,
                        d = !1;
                    if (c && c.hasOwnProperty("type") && "Pattern" === c.type && (b.save(), b.fillStyle = c.getPattern(b, this), d = !0), this.pendingEOFill) {
                        if (void 0 !== b.mozFillRule)
                            b.mozFillRule = "evenodd", b.fill(), b.mozFillRule = "nonzero";
                        else
                            try {
                                b.fill("evenodd")
                            } catch (e) {
                                b.fill()
                            }
                        this.pendingEOFill = !1
                    } else
                        b.fill();
                    d && b.restore(), a && this.consumePath()
                },
                eoFill: function() {
                    this.pendingEOFill = !0, this.fill()
                },
                fillStroke: function() {
                    this.fill(!1), this.stroke(!1), this.consumePath()
                },
                eoFillStroke: function() {
                    this.pendingEOFill = !0, this.fillStroke()
                },
                closeFillStroke: function() {
                    this.closePath(), this.fillStroke()
                },
                closeEOFillStroke: function() {
                    this.pendingEOFill = !0, this.closePath(), this.fillStroke()
                },
                endPath: function() {
                    this.consumePath()
                },
                clip: function() {
                    this.pendingClip = s
                },
                eoClip: function() {
                    this.pendingClip = t
                },
                beginText: function() {
                    this.current.textMatrix = J, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                },
                endText: function() {
                    var a = this.pendingTextPaths,
                        b = this.ctx;
                    if (void 0 === a)
                        return b.beginPath(), void 0;
                    b.save(), b.beginPath();
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c];
                        b.setTransform.apply(b, d.transform), b.translate(d.x, d.y), d.addToPath(b, d.fontSize)
                    }
                    b.restore(), b.clip(), b.beginPath(), delete this.pendingTextPaths
                },
                setCharSpacing: function(a) {
                    this.current.charSpacing = a
                },
                setWordSpacing: function(a) {
                    this.current.wordSpacing = a
                },
                setHScale: function(a) {
                    this.current.textHScale = a / 100
                },
                setLeading: function(a) {
                    this.current.leading = -a
                },
                setFont: function(a, b) {
                    var d = this.commonObjs.get(a),
                        e = this.current;
                    if (d || i("Can't find font for " + a), e.fontMatrix = d.fontMatrix ? d.fontMatrix : c, (0 === e.fontMatrix[0] || 0 === e.fontMatrix[3]) && h("Invalid font matrix for font " + a), 0 > b ? (b = -b, e.fontDirection = -1) : e.fontDirection = 1, this.current.font = d, this.current.fontSize = b, !d.isType3Font) {
                        var f = d.loadedName || "sans-serif",
                            g = d.black ? d.bold ? "bolder" : "bold" : d.bold ? "bold" : "normal",
                            j = d.italic ? "italic" : "normal",
                            k = '"' + f + '", ' + d.fallbackName,
                            l = b >= ub ? b : ub;
                        this.current.fontSizeScale = l != ub ? 1 : b / ub;
                        var m = j + " " + g + " " + l + "px " + k;
                        this.ctx.font = m
                    }
                },
                setTextRenderingMode: function(a) {
                    this.current.textRenderingMode = a
                },
                setTextRise: function(a) {
                    this.current.textRise = a
                },
                moveText: function(a, b) {
                    this.current.x = this.current.lineX += a, this.current.y = this.current.lineY += b
                },
                setLeadingMoveText: function(a, b) {
                    this.setLeading(-b), this.moveText(a, b)
                },
                setTextMatrix: function(a, b, c, d, e, f) {
                    this.current.textMatrix = [a, b, c, d, e, f], this.current.textMatrixScale = Math.sqrt(a * a + b * b), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                },
                nextLine: function() {
                    this.moveText(0, this.current.leading)
                },
                paintChar: function(a, b, c) {
                    var l,
                        e = this.ctx,
                        f = this.current,
                        g = f.font,
                        h = f.textRenderingMode,
                        i = f.fontSize / f.fontSizeScale,
                        j = h & d.FILL_STROKE_MASK,
                        k = !!(h & d.ADD_TO_PATH_FLAG);
                    if ((g.disableFontFace || k) && (l = g.getPathGenerator(this.commonObjs, a)), g.disableFontFace ? (e.save(), e.translate(b, c), e.beginPath(), l(e, i), (j === d.FILL || j === d.FILL_STROKE) && e.fill(), (j === d.STROKE || j === d.FILL_STROKE) && e.stroke(), e.restore()) : ((j === d.FILL || j === d.FILL_STROKE) && e.fillText(a, b, c), (j === d.STROKE || j === d.FILL_STROKE) && e.strokeText(a, b, c)), k) {
                        var m = this.pendingTextPaths || (this.pendingTextPaths = []);
                        m.push({
                            transform: e.mozCurrentTransform,
                            x: b,
                            y: c,
                            fontSize: i,
                            addToPath: l
                        })
                    }
                },
                get isFontSubpixelAAEnabled() {
                    var a = document.createElement("canvas").getContext("2d");
                    a.scale(1.5, 1), a.fillText("I", 0, 10);
                    for (var b = a.getImageData(0, 0, 10, 10).data, c = !1, d = 3; d < b.length; d += 4)
                        if (b[d] > 0 && b[d] < 255) {
                            c = !0;
                            break
                        }
                    return p(this, "isFontSubpixelAAEnabled", c)
                },
                showText: function(a) {
                    var b = this.current,
                        c = b.font;
                    if (c.isType3Font)
                        return this.showType3Text(a);
                    var e = b.fontSize;
                    if (0 !== e) {
                        var f = this.ctx,
                            g = b.fontSizeScale,
                            h = b.charSpacing,
                            i = b.wordSpacing,
                            j = b.fontDirection,
                            k = b.textHScale * j,
                            l = a.length,
                            m = c.vertical,
                            n = c.defaultVMetrics,
                            o = e * b.fontMatrix[0],
                            p = b.textRenderingMode === d.FILL && !c.disableFontFace;
                        f.save(), f.transform.apply(f, b.textMatrix), f.translate(b.x, b.y + b.textRise), j > 0 ? f.scale(k, -1) : f.scale(k, 1);
                        var q = b.lineWidth,
                            r = b.textMatrixScale;
                        0 === r || 0 === q ? q = this.getSinglePixelWidth() : q /= r, 1 != g && (f.scale(g, g), q /= g), f.lineWidth = q;
                        var t,
                            s = 0;
                        for (t = 0; l > t; ++t) {
                            var u = a[t];
                            if (null !== u)
                                if (S(u))
                                    s += .001 * -u * e;
                                else {
                                    var y,
                                        z,
                                        A,
                                        B,
                                        v = !1,
                                        w = u.fontChar,
                                        x = u.accent,
                                        C = u.width;
                                    if (m) {
                                        var D,
                                            E,
                                            F;
                                        D = u.vmetric || n, E = u.vmetric ? D[1] : .5 * C, E = -E * o, F = D[2] * o, C = D ? -D[0] : C, y = E / g, z = (s + F) / g
                                    } else
                                        y = s / g, z = 0;
                                    if (c.remeasure && C > 0 && this.isFontSubpixelAAEnabled) {
                                        var G = 1e3 * f.measureText(w).width / e * g,
                                            H = C / G;
                                        v = !0, f.save(), f.scale(H, 1), y /= H
                                    }
                                    p && !x ? f.fillText(w, y, z) : (this.paintChar(w, y, z), x && (A = y + x.offset.x / g, B = z - x.offset.y / g, this.paintChar(x.fontChar, A, B)));
                                    var I = C * o + h * j;
                                    s += I, v && f.restore()
                                }
                            else
                                s += j * i
                        }
                        m ? b.y -= s * k : b.x += s * k, f.restore()
                    }
                },
                showType3Text: function(a) {
                    var m,
                        n,
                        o,
                        b = this.ctx,
                        d = this.current,
                        e = d.font,
                        f = d.fontSize,
                        g = d.fontDirection,
                        h = d.charSpacing,
                        i = d.wordSpacing,
                        j = d.textHScale * g,
                        k = d.fontMatrix || c,
                        l = a.length;
                    if (0 !== f) {
                        for (b.save(), b.transform.apply(b, d.textMatrix), b.translate(d.x, d.y), b.scale(j, 1), m = 0; l > m; ++m)
                            if (n = a[m], null !== n)
                                if (S(n)) {
                                    var p = .001 * -n * f;
                                    this.ctx.translate(p, 0), d.x += p * j
                                } else {
                                    this.processingType3 = n, this.save(), b.scale(f, f), b.transform.apply(b, k);
                                    var q = e.charProcOperatorList[n.operatorListId];
                                    this.executeOperatorList(q), this.restore();
                                    var r = K.applyTransform([n.width, 0], k);
                                    o = (r[0] * f + h) * g, b.translate(o, 0), d.x += o * j
                                }
                            else
                                this.ctx.translate(i, 0), d.x += i * j;
                        b.restore(), this.processingType3 = null
                    }
                },
                setCharWidth: function() {},
                setCharWidthAndBounds: function(a, b, c, d, e, f) {
                    this.rectangle(c, d, e - c, f - d), this.clip(), this.endPath()
                },
                getColorN_Pattern: function(a) {
                    var b;
                    if ("TilingPattern" == a[0]) {
                        var c = a[1];
                        b = new Hb(a, c, this.ctx, this.objs, this.commonObjs, this.baseTransform)
                    } else
                        b = Gb(a);
                    return b
                },
                setStrokeColorN: function() {
                    this.current.strokeColor = this.getColorN_Pattern(arguments)
                },
                setFillColorN: function() {
                    this.current.fillColor = this.getColorN_Pattern(arguments)
                },
                setStrokeRGBColor: function() {
                    var d = K.makeCssRgb(arguments);
                    this.ctx.strokeStyle = d, this.current.strokeColor = d
                },
                setFillRGBColor: function() {
                    var d = K.makeCssRgb(arguments);
                    this.ctx.fillStyle = d, this.current.fillColor = d
                },
                shadingFill: function(a) {
                    var b = this.ctx;
                    this.save();
                    var c = Gb(a);
                    b.fillStyle = c.getPattern(b, this, !0);
                    var d = b.mozCurrentTransformInverse;
                    if (d) {
                        var e = b.canvas,
                            f = e.width,
                            g = e.height,
                            h = K.applyTransform([0, 0], d),
                            i = K.applyTransform([0, g], d),
                            j = K.applyTransform([f, 0], d),
                            k = K.applyTransform([f, g], d),
                            l = Math.min(h[0], i[0], j[0], k[0]),
                            m = Math.min(h[1], i[1], j[1], k[1]),
                            n = Math.max(h[0], i[0], j[0], k[0]),
                            o = Math.max(h[1], i[1], j[1], k[1]);
                        this.ctx.fillRect(l, m, n - l, o - m)
                    } else
                        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                    this.restore()
                },
                beginInlineImage: function() {
                    i("Should not call beginInlineImage")
                },
                beginImageData: function() {
                    i("Should not call beginImageData")
                },
                paintFormXObjectBegin: function(a, b) {
                    if (this.save(), this.baseTransformStack.push(this.baseTransform), a && Y(a) && 6 == a.length && this.transform.apply(this, a), this.baseTransform = this.ctx.mozCurrentTransform, b && Y(b) && 4 == b.length) {
                        var c = b[2] - b[0],
                            d = b[3] - b[1];
                        this.rectangle(b[0], b[1], c, d), this.clip(), this.endPath()
                    }
                },
                paintFormXObjectEnd: function() {
                    this.restore(), this.baseTransform = this.baseTransformStack.pop()
                },
                beginGroup: function(a) {
                    this.save();
                    var b = this.ctx;
                    a.isolated || g("TODO: Support non-isolated groups."), a.knockout && h("Knockout groups not supported.");
                    var c = b.mozCurrentTransform;
                    a.matrix && b.transform.apply(b, a.matrix), k(a.bbox, "Bounding box is required.");
                    var d = K.getAxialAlignedBoundingBox(a.bbox, b.mozCurrentTransform),
                        e = [0, 0, b.canvas.width, b.canvas.height];
                    d = K.intersect(d, e) || [0, 0, 0, 0];
                    var f = Math.floor(d[0]),
                        i = Math.floor(d[1]),
                        j = Math.max(Math.ceil(d[2]) - f, 1),
                        l = Math.max(Math.ceil(d[3]) - i, 1),
                        n = 1,
                        o = 1;
                    j > vb && (n = j / vb, j = vb), l > vb && (o = l / vb, l = vb);
                    var p = "groupAt" + this.groupLevel;
                    a.smask && (p += "_smask_" + this.smaskCounter++ % 2);
                    var q = zb.getCanvas(p, j, l, !0),
                        r = q.context;
                    r.scale(1 / n, 1 / o), r.translate(-f, -i), r.transform.apply(r, c), a.smask ? this.smaskStack.push({
                        canvas: q.canvas,
                        context: r,
                        offsetX: f,
                        offsetY: i,
                        scaleX: n,
                        scaleY: o,
                        subtype: a.smask.subtype,
                        backdrop: a.smask.backdrop
                    }) : (b.setTransform(1, 0, 0, 1, 0, 0), b.translate(f, i), b.scale(n, o)), m(b, r), this.ctx = r, this.setGState([["BM", "Normal"], ["ca", 1], ["CA", 1]]), this.groupStack.push(b), this.groupLevel++
                },
                endGroup: function(a) {
                    this.groupLevel--;
                    var b = this.ctx;
                    this.ctx = this.groupStack.pop(), void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1, a.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(b.canvas, 0, 0), this.restore()
                },
                beginAnnotations: function() {
                    this.save(), this.current = new Bb
                },
                endAnnotations: function() {
                    this.restore()
                },
                beginAnnotation: function(a, b, c) {
                    if (this.save(), a && Y(a) && 4 == a.length) {
                        var d = a[2] - a[0],
                            e = a[3] - a[1];
                        this.rectangle(a[0], a[1], d, e), this.clip(), this.endPath()
                    }
                    this.transform.apply(this, b), this.transform.apply(this, c)
                },
                endAnnotation: function() {
                    this.restore()
                },
                paintJpegXObject: function(a, b, c) {
                    var d = this.objs.get(a);
                    if (!d)
                        return h("Dependent image isn't ready yet"), void 0;
                    this.save();
                    var e = this.ctx;
                    if (e.scale(1 / b, -1 / c), e.drawImage(d, 0, 0, d.width, d.height, 0, -c, b, c), this.imageLayer) {
                        var f = e.mozCurrentTransformInverse,
                            g = this.getCanvasPosition(0, 0);
                        this.imageLayer.appendImage({
                            objId: a,
                            left: g[0],
                            top: g[1],
                            width: b / f[0],
                            height: c / f[3]
                        })
                    }
                    this.restore()
                },
                paintImageMaskXObject: function(a) {
                    var b = this.ctx,
                        c = a.width,
                        d = a.height,
                        e = this.processingType3;
                    if (wb && e && !("compiled" in e)) {
                        var f = 1e3;
                        e.compiled = f >= c && f >= d ? Ab({
                            data: a.data,
                            width: c,
                            height: d
                        }) : null
                    }
                    if (e && e.compiled)
                        return e.compiled(b), void 0;
                    var g = zb.getCanvas("maskCanvas", c, d),
                        h = g.context;
                    h.save(), l(h, a), h.globalCompositeOperation = "source-in";
                    var i = this.current.fillColor;
                    h.fillStyle = i && i.hasOwnProperty("type") && "Pattern" === i.type ? i.getPattern(h, this) : i, h.fillRect(0, 0, c, d), h.restore(), this.paintInlineImageXObject(g.canvas)
                },
                paintImageMaskXObjectRepeat: function(a, b, c, d) {
                    var e = a.width,
                        f = a.height,
                        g = this.ctx,
                        h = zb.getCanvas("maskCanvas", e, f),
                        i = h.context;
                    i.save(), l(i, a), i.globalCompositeOperation = "source-in";
                    var j = this.current.fillColor;
                    i.fillStyle = j && j.hasOwnProperty("type") && "Pattern" === j.type ? j.getPattern(i, this) : j, i.fillRect(0, 0, e, f), i.restore();
                    for (var k = 0, m = d.length; m > k; k += 2)
                        g.save(), g.transform(b, 0, 0, c, d[k], d[k + 1]), g.scale(1, -1), g.drawImage(h.canvas, 0, 0, e, f, 0, -1, 1, 1), g.restore()
                },
                paintImageMaskXObjectGroup: function(a) {
                    for (var b = this.ctx, c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = e.width,
                            g = e.height,
                            h = zb.getCanvas("maskCanvas", f, g),
                            i = h.context;
                        i.save(), l(i, e), i.globalCompositeOperation = "source-in";
                        var j = this.current.fillColor;
                        i.fillStyle = j && j.hasOwnProperty("type") && "Pattern" === j.type ? j.getPattern(i, this) : j, i.fillRect(0, 0, f, g), i.restore(), b.save(), b.transform.apply(b, e.transform), b.scale(1, -1), b.drawImage(h.canvas, 0, 0, f, g, 0, -1, 1, 1), b.restore()
                    }
                },
                paintImageXObject: function(a) {
                    var b = this.objs.get(a);
                    return b ? (this.paintInlineImageXObject(b), void 0) : (h("Dependent image isn't ready yet"), void 0)
                },
                paintImageXObjectRepeat: function(a, b, c, d) {
                    var e = this.objs.get(a);
                    if (!e)
                        return h("Dependent image isn't ready yet"), void 0;
                    for (var f = e.width, g = e.height, i = [], j = 0, k = d.length; k > j; j += 2)
                        i.push({
                            transform: [b, 0, 0, c, d[j], d[j + 1]],
                            x: 0,
                            y: 0,
                            w: f,
                            h: g
                        });
                    this.paintInlineImageXObjectGroup(e, i)
                },
                paintInlineImageXObject: function(a) {
                    var b = a.width,
                        c = a.height,
                        d = this.ctx;
                    this.save(), d.scale(1 / b, -1 / c);
                    var m,
                        n,
                        e = d.mozCurrentTransformInverse,
                        f = e[0],
                        g = e[1],
                        h = Math.max(Math.sqrt(f * f + g * g), 1),
                        i = e[2],
                        k = e[3],
                        l = Math.max(Math.sqrt(i * i + k * k), 1);
                    if (a instanceof HTMLElement || !a.data)
                        m = a;
                    else {
                        n = zb.getCanvas("inlineImage", b, c);
                        var o = n.context;
                        j(o, a), m = n.canvas
                    }
                    for (var p = b, q = c, r = "prescale1"; h > 2 && p > 1 || l > 2 && q > 1;) {
                        var s = p,
                            t = q;
                        h > 2 && p > 1 && (s = Math.ceil(p / 2), h /= p / s), l > 2 && q > 1 && (t = Math.ceil(q / 2), l /= q / t), n = zb.getCanvas(r, s, t), o = n.context, o.clearRect(0, 0, s, t), o.drawImage(m, 0, 0, p, q, 0, 0, s, t), m = n.canvas, p = s, q = t, r = "prescale1" === r ? "prescale2" : "prescale1"
                    }
                    if (d.drawImage(m, 0, 0, p, q, 0, -c, b, c), this.imageLayer) {
                        var u = this.getCanvasPosition(0, -c);
                        this.imageLayer.appendImage({
                            imgData: a,
                            left: u[0],
                            top: u[1],
                            width: b / e[0],
                            height: c / e[3]
                        })
                    }
                    this.restore()
                },
                paintInlineImageXObjectGroup: function(a, b) {
                    var c = this.ctx,
                        d = a.width,
                        e = a.height,
                        f = zb.getCanvas("inlineImage", d, e),
                        g = f.context;
                    j(g, a);
                    for (var h = 0, i = b.length; i > h; h++) {
                        var k = b[h];
                        if (c.save(), c.transform.apply(c, k.transform), c.scale(1, -1), c.drawImage(f.canvas, k.x, k.y, k.w, k.h, 0, -1, 1, 1), this.imageLayer) {
                            var l = this.getCanvasPosition(k.x, k.y);
                            this.imageLayer.appendImage({
                                imgData: a,
                                left: l[0],
                                top: l[1],
                                width: d,
                                height: e
                            })
                        }
                        c.restore()
                    }
                },
                paintSolidColorImageMask: function() {
                    this.ctx.fillRect(0, 0, 1, 1)
                },
                markPoint: function() {},
                markPointProps: function() {},
                beginMarkedContent: function() {},
                beginMarkedContentProps: function() {},
                endMarkedContent: function() {},
                beginCompat: function() {},
                endCompat: function() {},
                consumePath: function() {
                    var a = this.ctx;
                    if (this.pendingClip) {
                        if (this.pendingClip == t)
                            if (void 0 !== a.mozFillRule)
                                a.mozFillRule = "evenodd", a.clip(), a.mozFillRule = "nonzero";
                            else
                                try {
                                    a.clip("evenodd")
                                } catch (b) {
                                    a.clip()
                                }
                        else
                            a.clip();
                        this.pendingClip = null
                    }
                    a.beginPath()
                },
                getSinglePixelWidth: function() {
                    var b = this.ctx.mozCurrentTransformInverse;
                    return Math.sqrt(Math.max(b[0] * b[0] + b[1] * b[1], b[2] * b[2] + b[3] * b[3]))
                },
                getCanvasPosition: function(a, b) {
                    var c = this.ctx.mozCurrentTransform;
                    return [c[0] * a + c[2] * b + c[4], c[1] * a + c[3] * b + c[5]]
                }
            };
            for (var u in f)
                b.prototype[f[u]] = b.prototype[u];
            return b
        }(),
        Db = function() {
            function a(a, b, c) {
                var d = a.createShader(c);
                a.shaderSource(d, b), a.compileShader(d);
                var e = a.getShaderParameter(d, a.COMPILE_STATUS);
                if (!e) {
                    var f = a.getShaderInfoLog(d);
                    throw new Error("Error during shader compilation: " + f)
                }
                return d
            }
            function b(b, c) {
                return a(b, c, b.VERTEX_SHADER)
            }
            function c(b, c) {
                return a(b, c, b.FRAGMENT_SHADER)
            }
            function d(a, b) {
                for (var c = a.createProgram(), d = 0, e = b.length; e > d; ++d)
                    a.attachShader(c, b[d]);
                a.linkProgram(c);
                var f = a.getProgramParameter(c, a.LINK_STATUS);
                if (!f) {
                    var g = a.getProgramInfoLog(c);
                    throw new Error("Error during program linking: " + g)
                }
                return c
            }
            function e(a, b, c) {
                a.activeTexture(c);
                var d = a.createTexture();
                return a.bindTexture(a.TEXTURE_2D, d), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b), d
            }
            function h() {
                f || (g = document.createElement("canvas"), f = g.getContext("webgl", {
                    premultipliedalpha: !1
                }))
            }
            function l() {
                var a,
                    e;
                h(), a = g, g = null, e = f, f = null;
                var l = b(e, i),
                    m = c(e, j),
                    n = d(e, [l, m]);
                e.useProgram(n);
                var o = {};
                o.gl = e, o.canvas = a, o.resolutionLocation = e.getUniformLocation(n, "u_resolution"), o.positionLocation = e.getAttribLocation(n, "a_position"), o.backdropLocation = e.getUniformLocation(n, "u_backdrop"), o.subtypeLocation = e.getUniformLocation(n, "u_subtype");
                var p = e.getAttribLocation(n, "a_texCoord"),
                    q = e.getUniformLocation(n, "u_image"),
                    r = e.getUniformLocation(n, "u_mask"),
                    s = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, s), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), e.STATIC_DRAW), e.enableVertexAttribArray(p), e.vertexAttribPointer(p, 2, e.FLOAT, !1, 0, 0), e.uniform1i(q, 0), e.uniform1i(r, 1), k = o
            }
            function m(a, b, c) {
                var d = a.width,
                    f = a.height;
                k || l();
                var g = k,
                    h = g.canvas,
                    i = g.gl;
                h.width = d, h.height = f, i.viewport(0, 0, i.drawingBufferWidth, i.drawingBufferHeight), i.uniform2f(g.resolutionLocation, d, f), c.backdrop ? i.uniform4f(g.resolutionLocation, c.backdrop[0], c.backdrop[1], c.backdrop[2], 1) : i.uniform4f(g.resolutionLocation, 0, 0, 0, 0), i.uniform1i(g.subtypeLocation, "Luminosity" === c.subtype ? 1 : 0);
                var j = e(i, a, i.TEXTURE0),
                    m = e(i, b, i.TEXTURE1),
                    n = i.createBuffer();
                return i.bindBuffer(i.ARRAY_BUFFER, n), i.bufferData(i.ARRAY_BUFFER, new Float32Array([0, 0, d, 0, 0, f, 0, f, d, 0, d, f]), i.STATIC_DRAW), i.enableVertexAttribArray(g.positionLocation), i.vertexAttribPointer(g.positionLocation, 2, i.FLOAT, !1, 0, 0), i.clearColor(0, 0, 0, 0), i.enable(i.BLEND), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA), i.clear(i.COLOR_BUFFER_BIT), i.drawArrays(i.TRIANGLES, 0, 6), i.flush(), i.deleteTexture(j), i.deleteTexture(m), i.deleteBuffer(n), h
            }
            function r() {
                var a,
                    e;
                h(), a = g, g = null, e = f, f = null;
                var i = b(e, n),
                    j = c(e, o),
                    k = d(e, [i, j]);
                e.useProgram(k);
                var l = {};
                l.gl = e, l.canvas = a, l.resolutionLocation = e.getUniformLocation(k, "u_resolution"), l.scaleLocation = e.getUniformLocation(k, "u_scale"), l.offsetLocation = e.getUniformLocation(k, "u_offset"), l.positionLocation = e.getAttribLocation(k, "a_position"), l.colorLocation = e.getAttribLocation(k, "a_color"), q = l
            }
            function s(a, b, c, d, e) {
                q || r();
                var f = q,
                    g = f.canvas,
                    h = f.gl;
                g.width = a, g.height = b, h.viewport(0, 0, h.drawingBufferWidth, h.drawingBufferHeight), h.uniform2f(f.resolutionLocation, a, b);
                var j,
                    k,
                    l,
                    i = 0;
                for (j = 0, k = d.length; k > j; j++)
                    switch (d[j].type) {
                    case "lattice":
                        l = 0 | d[j].coords.length / d[j].verticesPerRow, i += 6 * (l - 1) * (d[j].verticesPerRow - 1);
                        break;
                    case "triangles":
                        i += d[j].coords.length
                    }
                var m = new Float32Array(2 * i),
                    n = new Uint8Array(3 * i),
                    o = e.coords,
                    p = e.colors,
                    s = 0,
                    t = 0;
                for (j = 0, k = d.length; k > j; j++) {
                    var u = d[j],
                        v = u.coords,
                        w = u.colors;
                    switch (u.type) {
                    case "lattice":
                        var x = u.verticesPerRow;
                        l = 0 | v.length / x;
                        for (var y = 1; l > y; y++)
                            for (var z = y * x + 1, A = 1; x > A; A++, z++)
                                m[s] = o[v[z - x - 1]], m[s + 1] = o[v[z - x - 1] + 1], m[s + 2] = o[v[z - x]], m[s + 3] = o[v[z - x] + 1], m[s + 4] = o[v[z - 1]], m[s + 5] = o[v[z - 1] + 1], n[t] = p[w[z - x - 1]], n[t + 1] = p[w[z - x - 1] + 1], n[t + 2] = p[w[z - x - 1] + 2], n[t + 3] = p[w[z - x]], n[t + 4] = p[w[z - x] + 1], n[t + 5] = p[w[z - x] + 2], n[t + 6] = p[w[z - 1]], n[t + 7] = p[w[z - 1] + 1], n[t + 8] = p[w[z - 1] + 2], m[s + 6] = m[s + 2], m[s + 7] = m[s + 3], m[s + 8] = m[s + 4], m[s + 9] = m[s + 5], m[s + 10] = o[v[z]], m[s + 11] = o[v[z] + 1], n[t + 9] = n[t + 3], n[t + 10] = n[t + 4], n[t + 11] = n[t + 5], n[t + 12] = n[t + 6], n[t + 13] = n[t + 7], n[t + 14] = n[t + 8], n[t + 15] = p[w[z]], n[t + 16] = p[w[z] + 1], n[t + 17] = p[w[z] + 2], s += 12, t += 18;
                        break;
                    case "triangles":
                        for (var B = 0, C = v.length; C > B; B++)
                            m[s] = o[v[B]], m[s + 1] = o[v[B] + 1], n[t] = p[w[j]], n[t + 1] = p[w[B] + 1], n[t + 2] = p[w[B] + 2], s += 2, t += 3
                    }
                }
                c ? h.clearColor(c[0] / 255, c[1] / 255, c[2] / 255, 1) : h.clearColor(0, 0, 0, 0), h.clear(h.COLOR_BUFFER_BIT);
                var D = h.createBuffer();
                h.bindBuffer(h.ARRAY_BUFFER, D), h.bufferData(h.ARRAY_BUFFER, m, h.STATIC_DRAW), h.enableVertexAttribArray(f.positionLocation), h.vertexAttribPointer(f.positionLocation, 2, h.FLOAT, !1, 0, 0);
                var E = h.createBuffer();
                return h.bindBuffer(h.ARRAY_BUFFER, E), h.bufferData(h.ARRAY_BUFFER, n, h.STATIC_DRAW), h.enableVertexAttribArray(f.colorLocation), h.vertexAttribPointer(f.colorLocation, 3, h.UNSIGNED_BYTE, !1, 0, 0), h.uniform2f(f.scaleLocation, e.scaleX, e.scaleY), h.uniform2f(f.offsetLocation, e.offsetX, e.offsetY), h.drawArrays(h.TRIANGLES, 0, i), h.flush(), h.deleteBuffer(D), h.deleteBuffer(E), g
            }
            function t() {
                k = null, q = null
            }
            var f,
                g,
                i = "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",
                j = "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",
                k = null,
                n = "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",
                o = "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",
                q = null;
            return {
                get isEnabled() {
                    if (PDFJS.disableWebGL)
                        return !1;
                    var a = !1;
                    try {
                        h(), a = !!f
                    } catch (b) {}
                    return p(this, "isEnabled", a)
                },
                composeSMask: m,
                drawFigures: s,
                clear: t
            }
        }(),
        Eb = {};
    Eb.RadialAxial = {
        fromIR: function(a) {
            var b = a[1],
                c = a[2],
                d = a[3],
                e = a[4],
                f = a[5],
                g = a[6];
            return {
                type: "Pattern",
                getPattern: function(a) {
                    var h;
                    "axial" === b ? h = a.createLinearGradient(d[0], d[1], e[0], e[1]) : "radial" === b && (h = a.createRadialGradient(d[0], d[1], f, e[0], e[1], g));
                    for (var i = 0, j = c.length; j > i; ++i) {
                        var k = c[i];
                        h.addColorStop(k[0], k[1])
                    }
                    return h
                }
            }
        }
    };
    var Fb = function() {
        function a(a, b, c, d, e, f, g, h) {
            var m,
                i = b.coords,
                j = b.colors,
                k = a.data,
                l = 4 * a.width;
            i[c + 1] > i[d + 1] && (m = c, c = d, d = m, m = f, f = g, g = m), i[d + 1] > i[e + 1] && (m = d, d = e, e = m, m = g, g = h, h = m), i[c + 1] > i[d + 1] && (m = c, c = d, d = m, m = f, f = g, g = m);
            var n = (i[c] + b.offsetX) * b.scaleX,
                o = (i[c + 1] + b.offsetY) * b.scaleY,
                p = (i[d] + b.offsetX) * b.scaleX,
                q = (i[d + 1] + b.offsetY) * b.scaleY,
                r = (i[e] + b.offsetX) * b.scaleX,
                s = (i[e + 1] + b.offsetY) * b.scaleY;
            if (!(o >= s))
                for (var E, F, G, H, I, J, K, L, M, t = j[f], u = j[f + 1], v = j[f + 2], w = j[g], x = j[g + 1], y = j[g + 2], z = j[h], A = j[h + 1], B = j[h + 2], C = Math.round(o), D = Math.round(s), N = C; D >= N; N++) {
                    q > N ? (M = o > N ? 0 : o === q ? 1 : (o - N) / (o - q), E = n - (n - p) * M, F = t - (t - w) * M, G = u - (u - x) * M, H = v - (v - y) * M) : (M = N > s ? 1 : q === s ? 0 : (q - N) / (q - s), E = p - (p - r) * M, F = w - (w - z) * M, G = x - (x - A) * M, H = y - (y - B) * M), M = o > N ? 0 : N > s ? 1 : (o - N) / (o - s), I = n - (n - r) * M, J = t - (t - z) * M, K = u - (u - A) * M, L = v - (v - B) * M;
                    for (var O = Math.round(Math.min(E, I)), P = Math.round(Math.max(E, I)), Q = l * N + 4 * O, R = O; P >= R; R++)
                        M = (E - R) / (E - I), M = 0 > M ? 0 : M > 1 ? 1 : M, k[Q++] = 0 | F - (F - J) * M, k[Q++] = 0 | G - (G - K) * M, k[Q++] = 0 | H - (H - L) * M, k[Q++] = 255
                }
        }
        function b(b, c, d) {
            var g,
                h,
                e = c.coords,
                f = c.colors;
            switch (c.type) {
            case "lattice":
                var j = c.verticesPerRow,
                    k = Math.floor(e.length / j) - 1,
                    l = j - 1;
                for (g = 0; k > g; g++)
                    for (var m = g * j, n = 0; l > n; n++, m++)
                        a(b, d, e[m], e[m + 1], e[m + j], f[m], f[m + 1], f[m + j]), a(b, d, e[m + j + 1], e[m + 1], e[m + j], f[m + j + 1], f[m + 1], f[m + j]);
                break;
            case "triangles":
                for (g = 0, h = e.length; h > g; g += 3)
                    a(b, d, e[g], e[g + 1], e[g + 2], f[g], f[g + 1], f[g + 2]);
                break;
            default:
                i("illigal figure")
            }
        }
        function c(a, c, d, e, f, g) {
            var s,
                t,
                u,
                v,
                h = 1.1,
                i = 3e3,
                j = Math.floor(a[0]),
                k = Math.floor(a[1]),
                l = Math.ceil(a[2]) - j,
                m = Math.ceil(a[3]) - k,
                n = Math.min(Math.ceil(Math.abs(l * c[0] * h)), i),
                o = Math.min(Math.ceil(Math.abs(m * c[1] * h)), i),
                p = l / n,
                q = m / o,
                r = {
                    coords: d,
                    colors: e,
                    offsetX: -j,
                    offsetY: -k,
                    scaleX: 1 / p,
                    scaleY: 1 / q
                };
            if (Db.isEnabled)
                s = Db.drawFigures(n, o, g, f, r), t = zb.getCanvas("mesh", n, o, !1), t.context.drawImage(s, 0, 0), s = t.canvas;
            else {
                t = zb.getCanvas("mesh", n, o, !1);
                var w = t.context,
                    x = w.createImageData(n, o);
                if (g) {
                    var y = x.data;
                    for (u = 0, v = y.length; v > u; u += 4)
                        y[u] = g[0], y[u + 1] = g[1], y[u + 2] = g[2], y[u + 3] = 255
                }
                for (u = 0; u < f.length; u++)
                    b(x, f[u], r);
                w.putImageData(x, 0, 0), s = t.canvas
            }
            return {
                canvas: s,
                offsetX: j,
                offsetY: k,
                scaleX: p,
                scaleY: q
            }
        }
        return c
    }();
    Eb.Mesh = {
        fromIR: function(a) {
            var b = a[2],
                c = a[3],
                d = a[4],
                e = a[5],
                f = a[6],
                g = a[8];
            return {
                type: "Pattern",
                getPattern: function(a, h, i) {
                    var j;
                    if (i)
                        j = K.singularValueDecompose2dScale(a.mozCurrentTransform);
                    else {
                        var k = K.singularValueDecompose2dScale(f),
                            l = K.singularValueDecompose2dScale(h.baseTransform);
                        j = [k[0] * l[0], k[1] * l[1]]
                    }
                    var m = Fb(e, j, b, c, d, i ? null : g);
                    return i || (a.setTransform.apply(a, h.baseTransform), f && a.transform.apply(a, f)), a.translate(m.offsetX, m.offsetY), a.scale(m.scaleX, m.scaleY), a.createPattern(m.canvas, "no-repeat")
                }
            }
        }
    }, Eb.Dummy = {
        fromIR: function() {
            return {
                type: "Pattern",
                getPattern: function() {
                    return "hotpink"
                }
            }
        }
    };
    var Hb = function() {
        function c(a, b, c, d, e, f) {
            this.operatorList = a[2], this.matrix = a[3] || [1, 0, 0, 1, 0, 0], this.bbox = a[4], this.xstep = a[5], this.ystep = a[6], this.paintType = a[7], this.tilingType = a[8], this.color = b, this.objs = d, this.commonObjs = e, this.baseTransform = f, this.type = "Pattern", this.ctx = c
        }
        var a = {
                COLORED: 1,
                UNCOLORED: 2
            },
            b = 3e3;
        return c.prototype = {
            createPatternCanvas: function(a) {
                var c = this.operatorList,
                    d = this.bbox,
                    e = this.xstep,
                    f = this.ystep,
                    h = this.paintType,
                    i = this.tilingType,
                    j = this.color,
                    k = this.objs,
                    l = this.commonObjs;
                g("TilingType: " + i);
                var m = d[0],
                    n = d[1],
                    o = d[2],
                    p = d[3],
                    q = [m, n],
                    r = [m + e, n + f],
                    s = r[0] - q[0],
                    t = r[1] - q[1],
                    u = K.singularValueDecompose2dScale(this.matrix),
                    v = K.singularValueDecompose2dScale(this.baseTransform),
                    w = [u[0] * v[0], u[1] * v[1]];
                s = Math.min(Math.ceil(Math.abs(s * w[0])), b), t = Math.min(Math.ceil(Math.abs(t * w[1])), b);
                var x = zb.getCanvas("pattern", s, t, !0),
                    y = x.context,
                    z = new Cb(y, l, k);
                z.groupLevel = a.groupLevel, this.setFillAndStrokeStyleToContext(y, h, j), this.setScale(s, t, e, f), this.transformToScale(z);
                var A = [1, 0, 0, 1, -q[0], -q[1]];
                return z.transform.apply(z, A), this.clipBbox(z, d, m, n, o, p), z.executeOperatorList(c), x.canvas
            },
            setScale: function(a, b, c, d) {
                this.scale = [a / c, b / d]
            },
            transformToScale: function(a) {
                var b = this.scale,
                    c = [b[0], 0, 0, b[1], 0, 0];
                a.transform.apply(a, c)
            },
            scaleToContext: function() {
                var a = this.scale;
                this.ctx.scale(1 / a[0], 1 / a[1])
            },
            clipBbox: function(a, b, c, d, e, f) {
                if (b && Y(b) && 4 == b.length) {
                    var g = e - c,
                        h = f - d;
                    a.rectangle(c, d, g, h), a.clip(), a.endPath()
                }
            },
            setFillAndStrokeStyleToContext: function(b, c, d) {
                switch (c) {
                case a.COLORED:
                    var e = this.ctx;
                    b.fillStyle = e.fillStyle, b.strokeStyle = e.strokeStyle;
                    break;
                case a.UNCOLORED:
                    var f = K.makeCssRgb(d);
                    b.fillStyle = f, b.strokeStyle = f;
                    break;
                default:
                    i("Unsupported paint type: " + c)
                }
            },
            getPattern: function(a, b) {
                var c = this.createPatternCanvas(b);
                return a = this.ctx, a.setTransform.apply(a, this.baseTransform), a.transform.apply(a, this.matrix), this.scaleToContext(), a.createPattern(c, "repeat")
            }
        }, c
    }();
    PDFJS.disableFontFace = !1;
    var Ib = {
            insertRule: function(a) {
                var b = document.getElementById("PDFJS_FONT_STYLE_TAG");
                b || (b = document.createElement("style"), b.id = "PDFJS_FONT_STYLE_TAG", document.documentElement.getElementsByTagName("head")[0].appendChild(b));
                var c = b.sheet;
                c.insertRule(a, c.cssRules.length)
            },
            clear: function() {
                var a = document.getElementById("PDFJS_FONT_STYLE_TAG");
                a && a.parentNode.removeChild(a)
            },
            get loadTestFont() {
                return p(this, "loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))
            },
            loadTestFontId: 0,
            loadingContext: {
                requests: [],
                nextRequestId: 0
            },
            isSyncFontLoadingSupported: function() {
                if (b)
                    return !1;
                var a = window.navigator.userAgent,
                    c = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(a);
                return c && c[1] >= 14 ? !0 : !1
            }(),
            bind: function(a, c) {
                k(!b, "bind() shall be called from main thread");
                for (var d = [], e = [], f = 0, g = a.length; g > f; f++) {
                    var h = a[f];
                    if (!h.attached && h.loading !== !1) {
                        h.attached = !0;
                        var i = h.bindDOM();
                        i && (d.push(i), e.push(h))
                    }
                }
                var j = Ib.queueLoadingCallback(c);
                d.length > 0 && !this.isSyncFontLoadingSupported ? Ib.prepareFontLoadEvent(d, e, j) : j.complete()
            },
            queueLoadingCallback: function(a) {
                function b() {
                    for (k(!e.end, "completeRequest() cannot be called twice"), e.end = Date.now(); c.requests.length > 0 && c.requests[0].end;) {
                        var a = c.requests.shift();
                        setTimeout(a.callback, 0)
                    }
                }
                var c = Ib.loadingContext,
                    d = "pdfjs-font-loading-" + c.nextRequestId++,
                    e = {
                        id: d,
                        complete: b,
                        callback: a,
                        started: Date.now()
                    };
                return c.requests.push(e), e
            },
            prepareFontLoadEvent: function(a, b, c) {
                function d(a, b) {
                    return a.charCodeAt(b) << 24 | a.charCodeAt(b + 1) << 16 | a.charCodeAt(b + 2) << 8 | 255 & a.charCodeAt(b + 3)
                }
                function e(a, b, c, d) {
                    var e = a.substr(0, b),
                        f = a.substr(b + c);
                    return e + d + f
                }
                function l(a, b) {
                    if (k++, k > 30)
                        return h("Load test font never loaded."), b(), void 0;
                    j.font = "30px " + a, j.fillText(".", 0, 20);
                    var c = j.getImageData(0, 0, 1, 1);
                    return c.data[3] > 0 ? (b(), void 0) : (setTimeout(l.bind(null, a, b)), void 0)
                }
                var f,
                    g,
                    i = document.createElement("canvas");
                i.width = 1, i.height = 1;
                var j = i.getContext("2d"),
                    k = 0,
                    m = "lt" + Date.now() + this.loadTestFontId++,
                    n = this.loadTestFont,
                    o = 976;
                n = e(n, o, m.length, m);
                var p = 16,
                    q = 1482184792,
                    r = d(n, p);
                for (f = 0, g = m.length - 3; g > f; f += 4)
                    r = 0 | r - q + d(m, f);
                f < m.length && (r = 0 | r - q + d(m + "XXX", f)), n = e(n, p, 4, B(r));
                var s = "url(data:font/opentype;base64," + btoa(n) + ");",
                    t = '@font-face { font-family:"' + m + '";src:' + s + "}";
                Ib.insertRule(t);
                var u = [];
                for (f = 0, g = b.length; g > f; f++)
                    u.push(b[f].loadedName);
                u.push(m);
                var v = document.createElement("div");
                for (v.setAttribute("style", "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"), f = 0, g = u.length; g > f; ++f) {
                    var w = document.createElement("span");
                    w.textContent = "Hi", w.style.fontFamily = u[f], v.appendChild(w)
                }
                document.body.appendChild(v), l(m, function() {
                    document.body.removeChild(v), c.complete()
                })
            }
        },
        Jb = function() {
            function b() {
                if (this.compiledGlyphs = {}, 1 !== arguments.length)
                    ;
                else {
                    var d = arguments[0];
                    for (var e in d)
                        this[e] = d[e]
                }
            }
            return b.prototype = {
                bindDOM: function() {
                    if (!this.data)
                        return null;
                    if (PDFJS.disableFontFace)
                        return this.disableFontFace = !0, null;
                    var b = y(new Uint8Array(this.data)),
                        c = this.loadedName,
                        d = "url(data:" + this.mimetype + ";base64," + window.btoa(b) + ");",
                        e = '@font-face { font-family:"' + c + '";src:' + d + "}";
                    return Ib.insertRule(e), PDFJS.pdfBug && "FontInspector" in a && a.FontInspector.enabled && a.FontInspector.fontAdded(this, d), e
                },
                getPathGenerator: function(a, b) {
                    if (!(b in this.compiledGlyphs)) {
                        var c = a.get(this.loadedName + "_path_" + b);
                        this.compiledGlyphs[b] = new Function("c", "size", c)
                    }
                    return this.compiledGlyphs[b]
                }
            }, b
        }()
}.call("undefined" == typeof window ? this : window), PDFJS.workerSrc || "undefined" == typeof document || (PDFJS.workerSrc = function() {
    "use strict";
    var a = document.body || document.getElementsByTagName("head")[0],
        b = a.lastChild.src;
    return b && b.replace(/\.js$/i, ".worker.js")
}());
PDFJS.workerSrc = '/js/pdf.worker.js'; /*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */








(function(a, b) {
    function d(b) {
        return !a(b).parents().andSelf().filter(function() {
            return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
        }).length
    }
    function c(b, c) {
        var e = b.nodeName.toLowerCase();
        if ("area" === e) {
            var f = b.parentNode,
                g = f.name,
                h;
            if (!b.href || !g || f.nodeName.toLowerCase() !== "map")
                return !1;
            h = a("img[usemap=#" + g + "]")[0];
            return !!h && d(h)
        }
        return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
    }
    a.ui = a.ui || {};
    a.ui.version || (a.extend(a.ui, {
        version: "1.8.17",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), a.fn.extend({
        propAttr: a.fn.prop || a.fn.attr,
        _focus: a.fn.focus,
        focus: function(b, c) {
            return typeof b == "number" ? this.each(function() {
                var d = this;
                setTimeout(function() {
                    a(d).focus(), c && c.call(d)
                }, b)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var b;
            a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0) : b = this.parents().filter(function() {
                return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0);
            return /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function(c) {
            if (c !== b)
                return this.css("zIndex", c);
            if (this.length) {
                var d = a(this[0]),
                    e,
                    f;
                while (d.length && d[0] !== document) {
                    e = d.css("position");
                    if (e === "absolute" || e === "relative" || e === "fixed") {
                        f = parseInt(d.css("zIndex"), 10);
                        if (!isNaN(f) && f !== 0)
                            return f
                    }
                    d = d.parent()
                }
            }
            return 0
        },
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), a.each(["Width", "Height"], function(c, d) {
        function h(b, c, d, f) {
            a.each(e, function() {
                c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
            });
            return c
        }
        var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            f = d.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + d] = function(c) {
            if (c === b)
                return g["inner" + d].call(this);
            return this.each(function() {
                a(this).css(f, h(this, c) + "px")
            })
        }, a.fn["outer" + d] = function(b, c) {
            if (typeof b != "number")
                return g["outer" + d].call(this, b);
            return this.each(function() {
                a(this).css(f, h(this, b, !0, c) + "px")
            })
        }
    }), a.extend(a.expr[":"], {
        data: function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function(b) {
            var d = a.attr(b, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a(function() {
        var b = document.body,
            c = b.appendChild(c = document.createElement("div"));
        a.extend(c.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
    }), a.extend(a.ui, {
        plugin: {
            add: function(b, c, d) {
                var e = a.ui[b].prototype;
                for (var f in d)
                    e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
            },
            call: function(a, b, c) {
                var d = a.plugins[b];
                if (!!d && !!a.element[0].parentNode)
                    for (var e = 0; e < d.length; e++)
                        a.options[d[e][0]] && d[e][1].apply(a.element, c)
            }
        },
        contains: function(a, b) {
            return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
        },
        hasScroll: function(b, c) {
            if (a(b).css("overflow") === "hidden")
                return !1;
            var d = c && c === "left" ? "scrollLeft" : "scrollTop",
                e = !1;
            if (b[d] > 0)
                return !0;
            b[d] = 1, e = b[d] > 0, b[d] = 0;
            return e
        },
        isOverAxis: function(a, b, c) {
            return a > b && a < b + c
        },
        isOver: function(b, c, d, e, f, g) {
            return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
        }
    }))
})(jQuery), function(a, b) {
    if (a.cleanData) {
        var c = a.cleanData;
        a.cleanData = function(b) {
            for (var d = 0, e; (e = b[d]) != null; d++)
                try {
                    a(e).triggerHandler("remove")
                } catch (f) {}
            c(b)
        }
    } else {
        var d = a.fn.remove;
        a.fn.remove = function(b, c) {
            return this.each(function() {
                c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function() {
                    try {
                        a(this).triggerHandler("remove")
                    } catch (b) {}
                });
                return d.call(a(this), b, c)
            })
        }
    }
    a.widget = function(b, c, d) {
        var e = b.split(".")[0],
            f;
        b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function(c) {
            return !!a.data(c, b)
        }, a[e] = a[e] || {}, a[e][b] = function(a, b) {
            arguments.length && this._createWidget(a, b)
        };
        var g = new c;
        g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {
            namespace: e,
            widgetName: b,
            widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
            widgetBaseClass: f
        }, d), a.widget.bridge(b, a[e][b])
    }, a.widget.bridge = function(c, d) {
        a.fn[c] = function(e) {
            var f = typeof e == "string",
                g = Array.prototype.slice.call(arguments, 1),
                h = this;
            e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e;
            if (f && e.charAt(0) === "_")
                return h;
            f ? this.each(function() {
                var d = a.data(this, c),
                    f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
                if (f !== d && f !== b) {
                    h = f;
                    return !1
                }
            }) : this.each(function() {
                var b = a.data(this, c);
                b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
            });
            return h
        }
    }, a.Widget = function(a, b) {
        arguments.length && this._createWidget(a, b)
    }, a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(b, c) {
            a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
            var d = this;
            this.element.bind("remove." + this.widgetName, function() {
                d.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(c, d) {
            var e = c;
            if (arguments.length === 0)
                return a.extend({}, this.options);
            if (typeof c == "string") {
                if (d === b)
                    return this.options[c];
                e = {}, e[c] = d
            }
            this._setOptions(e);
            return this
        },
        _setOptions: function(b) {
            var c = this;
            a.each(b, function(a, b) {
                c._setOption(a, b)
            });
            return this
        },
        _setOption: function(a, b) {
            this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b);
            return this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(b, c, d) {
            var e,
                f,
                g = this.options[b];
            d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
            if (f)
                for (e in f)
                    e in c || (c[e] = f[e]);
            this.element.trigger(c, d);
            return !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
        }
    }
}(jQuery), function(a, b) {
    var c = !1;
    a(document).mouseup(function(a) {
        c = !1
    }), a.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) {
                    a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation();
                    return !1
                }
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function(b) {
            if (!c) {
                this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                var d = this,
                    e = b.which == 1,
                    f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                if (!e || f || !this._mouseCapture(b))
                    return !0;
                this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
                    this._mouseStarted = this._mouseStart(b) !== !1;
                    if (!this._mouseStarted) {
                        b.preventDefault();
                        return !0
                    }
                }
                !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0;
                return !0
            }
        },
        _mouseMove: function(b) {
            if (a.browser.msie && !(document.documentMode >= 9) && !b.button)
                return this._mouseUp(b);
            if (this._mouseStarted) {
                this._mouseDrag(b);
                return b.preventDefault()
            }
            this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b));
            return !this._mouseStarted
        },
        _mouseUp: function(b) {
            a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b));
            return !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(a) {
            return this.mouseDelayMet
        },
        _mouseStart: function(a) {},
        _mouseDrag: function(a) {},
        _mouseStop: function(a) {},
        _mouseCapture: function(a) {
            return !0
        }
    })
}(jQuery), function(a, b) {
    a.widget("ui.draggable", a.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function() {
            if (!!this.element.data("draggable")) {
                this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
                return this
            }
        },
        _mouseCapture: function(b) {
            var c = this.options;
            if (this.helper || c.disabled || a(b.target).is(".ui-resizable-handle"))
                return !1;
            this.handle = this._getHandle(b);
            if (!this.handle)
                return !1;
            c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() {
                a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body")
            });
            return !0
        },
        _mouseStart: function(b) {
            var c = this.options;
            this.helper = this._createHelper(b), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment();
            if (this._trigger("start", b) === !1) {
                this._clear();
                return !1
            }
            this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b);
            return !0
        },
        _mouseDrag: function(b, c) {
            this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute");
            if (!c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) {
                    this._mouseUp({});
                    return !1
                }
                this.position = d.position
            }
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b);
            return !1
        },
        _mouseStop: function(b) {
            var c = !1;
            a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original")
                return !1;
            if (this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
                var d = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    d._trigger("stop", b) !== !1 && d._clear()
                })
            } else
                this._trigger("stop", b) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function(b) {
            this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b);
            return a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        },
        _getHandle: function(b) {
            var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1;
            a(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == b.target && (c = !0)
            });
            return c
        },
        _createHelper: function(b) {
            var c = this.options,
                d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute");
            return d
        },
        _adjustOffsetFromHelper: function(b) {
            typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)
                b = {
                    top: 0,
                    left: 0
                };
            return {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b = this.options;
            b.containment == "parent" && (b.containment = this.helper[0].parentNode);
            if (b.containment == "document" || b.containment == "window")
                this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
                var c = a(b.containment),
                    d = c[0];
                if (!d)
                    return;
                var e = c.offset(),
                    f = a(d).css("overflow") != "hidden";
                this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
            } else
                b.containment.constructor == Array && (this.containment = b.containment)
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = b == "absolute" ? 1 : -1,
                e = this.options,
                f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                g = /(html|body)/i.test(f[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)
            }
        },
        _generatePosition: function(b) {
            var c = this.options,
                d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                e = /(html|body)/i.test(d[0].tagName),
                f = b.pageX,
                g = b.pageY;
            if (this.originalPosition) {
                var h;
                if (this.containment) {
                    if (this.relative_container) {
                        var i = this.relative_container.offset();
                        h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
                    } else
                        h = this.containment;
                    b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top)
                }
                if (c.grid) {
                    var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
                    g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j;
                    var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
                    f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k
                }
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(b, c, d) {
            d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute"));
            return a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function(a) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.extend(a.ui.draggable, {
        version: "1.8.17"
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c) {
            var d = a(this).data("draggable"),
                e = d.options,
                f = a.extend({}, c, {
                    item: d.element
                });
            d.sortables = [], a(e.connectToSortable).each(function() {
                var c = a.data(this, "sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f))
            })
        },
        stop: function(b, c) {
            var d = a(this).data("draggable"),
                e = a.extend({}, c, {
                    item: d.element
                });
            a.each(d.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, d.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
            })
        },
        drag: function(b, c) {
            var d = a(this).data("draggable"),
                e = this,
                f = function(b) {
                    var c = this.offset.click.top,
                        d = this.offset.click.left,
                        e = this.positionAbs.top,
                        f = this.positionAbs.left,
                        g = b.height,
                        h = b.width,
                        i = b.top,
                        j = b.left;
                    return a.ui.isOver(e + c, f + d, i, j, g, h)
                };
            a.each(d.sortables, function(f) {
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return c.helper[0]
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function(b, c) {
            var d = a("body"),
                e = a(this).data("draggable").options;
            d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor)
        },
        stop: function(b, c) {
            var d = a(this).data("draggable").options;
            d._cursor && a("body").css("cursor", d._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c) {
            var d = a(c.helper),
                e = a(this).data("draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
        },
        stop: function(b, c) {
            var d = a(this).data("draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function(b, c) {
            var d = a(this).data("draggable");
            d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset())
        },
        drag: function(b, c) {
            var d = a(this).data("draggable"),
                e = d.options,
                f = !1;
            if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
                if (!e.axis || e.axis != "x")
                    d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed);
                if (!e.axis || e.axis != "y")
                    d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed)
            } else {
                if (!e.axis || e.axis != "x")
                    b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed));
                if (!e.axis || e.axis != "y")
                    b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed))
            }
            f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function(b, c) {
            var d = a(this).data("draggable"),
                e = d.options;
            d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function() {
                var b = a(this),
                    c = b.offset();
                this != d.element[0] && d.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: c.top,
                    left: c.left
                })
            })
        },
        drag: function(b, c) {
            var d = a(this).data("draggable"),
                e = d.options,
                f = e.snapTolerance,
                g = c.offset.left,
                h = g + d.helperProportions.width,
                i = c.offset.top,
                j = i + d.helperProportions.height;
            for (var k = d.snapElements.length - 1; k >= 0; k--) {
                var l = d.snapElements[k].left,
                    m = l + d.snapElements[k].width,
                    n = d.snapElements[k].top,
                    o = n + d.snapElements[k].height;
                if (!(l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f)) {
                    d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                        snapItem: d.snapElements[k].item
                    })), d.snapElements[k].snapping = !1;
                    continue
                }
                if (e.snapMode != "inner") {
                    var p = Math.abs(n - j) <= f,
                        q = Math.abs(o - i) <= f,
                        r = Math.abs(l - h) <= f,
                        s = Math.abs(m - g) <= f;
                    p && (c.position.top = d._convertPositionTo("relative", {
                        top: n - d.helperProportions.height,
                        left: 0
                    }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                        top: o,
                        left: 0
                    }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: l - d.helperProportions.width
                    }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: m
                    }).left - d.margins.left)
                }
                var t = p || q || r || s;
                if (e.snapMode != "outer") {
                    var p = Math.abs(n - i) <= f,
                        q = Math.abs(o - j) <= f,
                        r = Math.abs(l - g) <= f,
                        s = Math.abs(m - h) <= f;
                    p && (c.position.top = d._convertPositionTo("relative", {
                        top: n,
                        left: 0
                    }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                        top: o - d.helperProportions.height,
                        left: 0
                    }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: m - d.helperProportions.width
                    }).left - d.margins.left)
                }
                !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[k].item
                })), d.snapElements[k].snapping = p || q || r || s || t
            }
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function(b, c) {
            var d = a(this).data("draggable").options,
                e = a.makeArray(a(d.stack)).sort(function(b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                });
            if (!!e.length) {
                var f = parseInt(e[0].style.zIndex) || 0;
                a(e).each(function(a) {
                    this.style.zIndex = f + a
                }), this[0].style.zIndex = f + e.length
            }
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c) {
            var d = a(c.helper),
                e = a(this).data("draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
        },
        stop: function(b, c) {
            var d = a(this).data("draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex)
        }
    })
}(jQuery), function(a, b) {
    a.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var b = this.options,
                c = b.accept;
            this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            var b = a.ui.ddmanager.droppables[this.options.scope];
            for (var c = 0; c < b.length; c++)
                b[c] == this && b.splice(c, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
            return this
        },
        _setOption: function(b, c) {
            b == "accept" && (this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c)
            }), a.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            !!c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            !!c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0])
                return !1;
            var e = !1;
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var b = a.data(this, "droppable");
                if (b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                    offset: b.element.offset()
                }), b.options.tolerance)) {
                    e = !0;
                    return !1
                }
            });
            if (e)
                return !1;
            if (this.accept.call(this.element[0], d.currentItem || d.element)) {
                this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d));
                return this.element
            }
            return !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    }), a.extend(a.ui.droppable, {
        version: "1.8.17"
    }), a.ui.intersect = function(b, c, d) {
        if (!c.offset)
            return !1;
        var e = (b.positionAbs || b.position.absolute).left,
            f = e + b.helperProportions.width,
            g = (b.positionAbs || b.position.absolute).top,
            h = g + b.helperProportions.height,
            i = c.offset.left,
            j = i + c.proportions.width,
            k = c.offset.top,
            l = k + c.proportions.height;
        switch (d) {
        case "fit":
            return i <= e && f <= j && k <= g && h <= l;
        case "intersect":
            return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;
        case "pointer":
            var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left,
                n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top,
                o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width);
            return o;
        case "touch":
            return (g >= k && g <= l || h >= k && h <= l || g < k && h > l) && (e >= i && e <= j || f >= i && f <= j || e < i && f > j);
        default:
            return !1
        }
    }, a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(b, c) {
            var d = a.ui.ddmanager.droppables[b.options.scope] || [],
                e = c ? c.type : null,
                f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
            droppablesLoop:
            for (var g = 0; g < d.length; g++) {
                if (d[g].options.disabled || b && !d[g].accept.call(d[g].element[0], b.currentItem || b.element))
                    continue;
                for (var h = 0; h < f.length; h++)
                    if (f[h] == d[g].element[0]) {
                        d[g].proportions.height = 0;
                        continue droppablesLoop
                    }
                d[g].visible = d[g].element.css("display") != "none";
                if (!d[g].visible)
                    continue;
                e == "mousedown" && d[g]._activate.call(d[g], c), d[g].offset = d[g].element.offset(), d[g].proportions = {
                    width: d[g].element[0].offsetWidth,
                    height: d[g].element
                    [0].offsetHeight
                }
            }
        },
        drop: function(b, c) {
            var d = !1;
            a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                !this.options || (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c)))
            });
            return d
        },
        dragStart: function(b, c) {
            b.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            })
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                    var d = a.ui.intersect(b, this, this.options.tolerance),
                        e = !d && this.isover == 1 ? "isout" : d && this.isover == 0 ? "isover" : null;
                    if (!e)
                        return;
                    var f;
                    if (this.options.greedy) {
                        var g = this.element.parents(":data(droppable):eq(0)");
                        g.length && (f = a.data(g[0], "droppable"), f.greedyChild = e == "isover" ? 1 : 0)
                    }
                    f && e == "isover" && (f.isover = 0, f.isout = 1, f._out.call(f, c)), this[e] = 1, this[e == "isout" ? "isover" : "isout"] = 0, this[e == "isover" ? "_over" : "_out"].call(this, c), f && e == "isout" && (f.isout = 0, f.isover = 1, f._over.call(f, c))
                }
            })
        },
        dragStop: function(b, c) {
            b.element.parents(":not(body,html)").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        }
    }
}(jQuery), function(a, b) {
    a.widget("ui.resizable", a.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var b = this,
                c = this.options;
            this.element.addClass("ui-resizable"), a.extend(this, {
                _aspectRatio: !!c.aspectRatio,
                aspectRatio: c.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && a.browser.opera && this.element.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = c.handles || (a(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var d = this.handles.split(",");
                this.handles = {};
                for (var e = 0; e < d.length; e++) {
                    var f = a.trim(d[e]),
                        g = "ui-resizable-" + f,
                        h = a('<div class="ui-resizable-handle ' + g + '"></div>');
                    /sw|se|ne|nw/.test(f) && h.css({
                        zIndex: ++c.zIndex
                    }), "se" == f && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[f] = ".ui-resizable-" + f, this.element.append(h)
                }
            }
            this._renderAxis = function(b) {
                b = b || this.element;
                for (var c in this.handles) {
                    this.handles[c].constructor == String && (this.handles[c] = a(this.handles[c], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var d = a(this.handles[c], this.element),
                            e = 0;
                        e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth();
                        var f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join("");
                        b.css(f, e), this._proportionallyResize()
                    }
                    if (!a(this.handles[c]).length)
                        continue
                }
            }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                if (!b.resizing) {
                    if (this.className)
                        var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    b.axis = a && a[1] ? a[1] : "se"
                }
            }), c.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").hover(function() {
                c.disabled || (a(this).removeClass("ui-resizable-autohide"), b._handles.show())
            }, function() {
                c.disabled || b.resizing || (a(this).addClass("ui-resizable-autohide"), b._handles.hide())
            })), this._mouseInit()
        },
        destroy: function() {
            this._mouseDestroy();
            var b = function(b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                b(this.element);
                var c = this.element;
                c.after(this.originalElement.css({
                    position: c.css("position"),
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: c.css("top"),
                    left: c.css("left")
                })).remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement);
            return this
        },
        _mouseCapture: function(b) {
            var c = !1;
            for (var d in this.handles)
                a(this.handles[d])[0] == b.target && (c = !0);
            return !this.options.disabled && c
        },
        _mouseStart: function(b) {
            var d = this.options,
                e = this.element.position(),
                f = this.element;
            this.resizing = !0, this.documentScroll = {
                top: a(document).scrollTop(),
                left: a(document).scrollLeft()
            }, (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) && f.css({
                position: "absolute",
                top: e.top,
                left: e.left
            }), a.browser.opera && /relative/.test(f.css("position")) && f.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this._renderProxy();
            var g = c(this.helper.css("left")),
                h = c(this.helper.css("top"));
            d.containment && (g += a(d.containment).scrollLeft() || 0, h += a(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: g,
                top: h
            }, this.size = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            }, this.originalSize = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            }, this.originalPosition = {
                left: g,
                top: h
            }, this.sizeDiff = {
                width: f.outerWidth() - f.width(),
                height: f.outerHeight() - f.height()
            }, this.originalMousePosition = {
                left: b.pageX,
                top: b.pageY
            }, this.aspectRatio = typeof d.aspectRatio == "number" ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var i = a(".ui-resizable-" + this.axis).css("cursor");
            a("body").css("cursor", i == "auto" ? this.axis + "-resize" : i), f.addClass("ui-resizable-resizing"), this._propagate("start", b);
            return !0
        },
        _mouseDrag: function(b) {
            var c = this.helper,
                d = this.options,
                e = {},
                f = this,
                g = this.originalMousePosition,
                h = this.axis,
                i = b.pageX - g.left || 0,
                j = b.pageY - g.top || 0,
                k = this._change[h];
            if (!k)
                return !1;
            var l = k.apply(this, [b, i, j]),
                m = a.browser.msie && a.browser.version < 7,
                n = this.sizeDiff;
            this._updateVirtualBoundaries(b.shiftKey);
            if (this._aspectRatio || b.shiftKey)
                l = this._updateRatio(l, b);
            l = this._respectSize(l, b), this._propagate("resize", b), c.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", b, this.ui());
            return !1
        },
        _mouseStop: function(b) {
            this.resizing = !1;
            var c = this.options,
                d = this;
            if (this._helper) {
                var e = this._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    g = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height,
                    h = f ? 0 : d.sizeDiff.width,
                    i = {
                        width: d.helper.width() - h,
                        height: d.helper.height() - g
                    },
                    j = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
                    k = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
                c.animate || this.element.css(a.extend(i, {
                    top: k,
                    left: j
                })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize()
            }
            a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove();
            return !1
        },
        _updateVirtualBoundaries: function(a) {
            var b = this.options,
                c,
                e,
                f,
                g,
                h;
            h = {
                minWidth: d(b.minWidth) ? b.minWidth : 0,
                maxWidth: d(b.maxWidth) ? b.maxWidth : Infinity,
                minHeight: d(b.minHeight) ? b.minHeight : 0,
                maxHeight: d(b.maxHeight) ? b.maxHeight : Infinity
            };
            if (this._aspectRatio || a)
                c = h.minHeight * this.aspectRatio, f = h.minWidth / this.aspectRatio, e = h.maxHeight * this.aspectRatio, g = h.maxWidth / this.aspectRatio, c > h.minWidth && (h.minWidth = c), f > h.minHeight && (h.minHeight = f), e < h.maxWidth && (h.maxWidth = e), g < h.maxHeight && (h.maxHeight = g);
            this._vBoundaries = h
        },
        _updateCache: function(a) {
            var b = this.options;
            this.offset = this.helper.offset(), d(a.left) && (this.position.left = a.left), d(a.top) && (this.position.top = a.top), d(a.height) && (this.size.height = a.height), d(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function(a, b) {
            var c = this.options,
                e = this.position,
                f = this.size,
                g = this.axis;
            d(a.height) ? a.width = a.height * this.aspectRatio : d(a.width) && (a.height = a.width / this.aspectRatio), g == "sw" && (a.left = e.left + (f.width - a.width), a.top = null), g == "nw" && (a.top = e.top + (f.height - a.height), a.left = e.left + (f.width - a.width));
            return a
        },
        _respectSize: function(a, b) {
            var c = this.helper,
                e = this._vBoundaries,
                f = this._aspectRatio || b.shiftKey,
                g = this.axis,
                h = d(a.width) && e.maxWidth && e.maxWidth < a.width,
                i = d(a.height) && e.maxHeight && e.maxHeight < a.height,
                j = d(a.width) && e.minWidth && e.minWidth > a.width,
                k = d(a.height) && e.minHeight && e.minHeight > a.height;
            j && (a.width = e.minWidth), k && (a.height = e.minHeight), h && (a.width = e.maxWidth), i && (a.height = e.maxHeight);
            var l = this.originalPosition.left + this.originalSize.width,
                m = this.position.top + this.size.height,
                n = /sw|nw|w/.test(g),
                o = /nw|ne|n/.test(g);
            j && n && (a.left = l - e.minWidth), h && n && (a.left = l - e.maxWidth), k && o && (a.top = m - e.minHeight), i && o && (a.top = m - e.maxHeight);
            var p = !a.width && !a.height;
            p && !a.left && a.top ? a.top = null : p && !a.top && a.left && (a.left = null);
            return a
        },
        _proportionallyResize: function() {
            var b = this.options;
            if (!!this._proportionallyResizeElements.length) {
                var c = this.helper || this.element;
                for (var d = 0; d < this._proportionallyResizeElements.length; d++) {
                    var e = this._proportionallyResizeElements[d];
                    if (!this.borderDif) {
                        var f = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")],
                            g = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
                        this.borderDif = a.map(f, function(a, b) {
                            var c = parseInt(a, 10) || 0,
                                d = parseInt(g[b], 10) || 0;
                            return c + d
                        })
                    }
                    if (a.browser.msie && (!!a(c).is(":hidden") || !!a(c).parents(":hidden").length))
                        continue;
                    e.css({
                        height: c.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: c.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var b = this.element,
                c = this.options;
            this.elementOffset = b.offset();
            if (this._helper) {
                this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
                var d = a.browser.msie && a.browser.version < 7,
                    e = d ? 1 : 0,
                    f = d ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + f,
                    height: this.element.outerHeight() + f,
                    position: "absolute",
                    left: this.elementOffset.left - e + "px",
                    top: this.elementOffset.top - e + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else
                this.helper = this.element
        },
        _change: {
            e: function(a, b, c) {
                return {
                    width: this.originalSize.width + b
                }
            },
            w: function(a, b, c) {
                var d = this.options,
                    e = this.originalSize,
                    f = this.originalPosition;
                return {
                    left: f.left + b,
                    width: e.width - b
                }
            },
            n: function(a, b, c) {
                var d = this.options,
                    e = this.originalSize,
                    f = this.originalPosition;
                return {
                    top: f.top + c,
                    height: e.height - c
                }
            },
            s: function(a, b, c) {
                return {
                    height: this.originalSize.height + c
                }
            },
            se: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            sw: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            },
            ne: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            nw: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }
        },
        _propagate: function(b, c) {
            a.ui.plugin.call(this, b, [c, this.ui()]), b != "resize" && this._trigger(b, c, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), a.extend(a.ui.resizable, {
        version: "1.8.17"
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = function(b) {
                    a(b).each(function() {
                        var b = a(this);
                        b.data("resizable-alsoresize", {
                            width: parseInt(b.width(), 10),
                            height: parseInt(b.height(), 10),
                            left: parseInt(b.css("left"), 10),
                            top: parseInt(b.css("top"), 10),
                            position: b.css("position")
                        })
                    })
                };
            typeof e.alsoResize == "object" && !e.alsoResize.parentNode ? e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], f(e.alsoResize)) : a.each(e.alsoResize, function(a) {
                f(a)
            }) : f(e.alsoResize)
        },
        resize: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = d.originalSize,
                g = d.originalPosition,
                h = {
                    height: d.size.height - f.height || 0,
                    width: d.size.width - f.width || 0,
                    top: d.position.top - g.top || 0,
                    left: d.position.left - g.left || 0
                },
                i = function(b, e) {
                    a(b).each(function() {
                        var b = a(this),
                            f = a(this).data("resizable-alsoresize"),
                            g = {},
                            i = e && e.length ? e : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        a.each(i, function(a, b) {
                            var c = (f[b] || 0) + (h[b] || 0);
                            c && c >= 0 && (g[b] = c || null)
                        }), a.browser.opera && /relative/.test(b.css("position")) && (d._revertToRelativePosition = !0, b.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })), b.css(g)
                    })
                };
            typeof e.alsoResize == "object" && !e.alsoResize.nodeType ? a.each(e.alsoResize, function(a, b) {
                i(a, b)
            }) : i(e.alsoResize)
        },
        stop: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = function(b) {
                    a(b).each(function() {
                        var b = a(this);
                        b.css({
                            position: b.data("resizable-alsoresize").position
                        })
                    })
                };
            d._revertToRelativePosition && (d._revertToRelativePosition = !1, typeof e.alsoResize == "object" && !e.alsoResize.nodeType ? a.each(e.alsoResize, function(a) {
                f(a)
            }) : f(e.alsoResize)), a(this).removeData("resizable-alsoresize")
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = d._proportionallyResizeElements,
                g = f.length && /textarea/i.test(f[0].nodeName),
                h = g && a.ui.hasScroll(f[0], "left") ? 0 : d.sizeDiff.height,
                i = g ? 0 : d.sizeDiff.width,
                j = {
                    width: d.size.width - i,
                    height: d.size.height - h
                },
                k = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
                l = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
            d.element.animate(a.extend(j, l && k ? {
                top: l,
                left: k
            } : {}), {
                duration: e.animateDuration,
                easing: e.animateEasing,
                step: function() {
                    var c = {
                        width: parseInt(d.element.css("width"), 10),
                        height: parseInt(d.element.css("height"), 10),
                        top: parseInt(d.element.css("top"), 10),
                        left: parseInt(d.element.css("left"), 10)
                    };
                    f && f.length && a(f[0]).css({
                        width: c.width,
                        height: c.height
                    }), d._updateCache(c), d._propagate("resize", b)
                }
            })
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function(b, d) {
            var e = a(this).data("resizable"),
                f = e.options,
                g = e.element,
                h = f.containment,
                i = h instanceof a ? h.get(0) : /parent/.test(h) ? g.parent().get(0) : h;
            if (!!i) {
                e.containerElement = a(i);
                if (/document/.test(h) || h == document)
                    e.containerOffset = {
                        left: 0,
                        top: 0
                    }, e.containerPosition = {
                        left: 0,
                        top: 0
                    }, e.parentData = {
                        element: a(document),
                        left: 0,
                        top: 0,
                        width: a(document).width(),
                        height: a(document).height() || document.body.parentNode.scrollHeight
                    };
                else {
                    var j = a(i),
                        k = [];
                    a(["Top", "Right", "Left", "Bottom"]).each(function(a, b) {
                        k[a] = c(j.css("padding" + b))
                    }), e.containerOffset = j.offset(), e.containerPosition = j.position(), e.containerSize = {
                        height: j.innerHeight() - k[3],
                        width: j.innerWidth() - k[1]
                    };
                    var l = e.containerOffset,
                        m = e.containerSize.height,
                        n = e.containerSize.width,
                        o = a.ui.hasScroll(i, "left") ? i.scrollWidth : n,
                        p = a.ui.hasScroll(i) ? i.scrollHeight : m;
                    e.parentData = {
                        element: i,
                        left: l.left,
                        top: l.top,
                        width: o,
                        height: p
                    }
                }
            }
        },
        resize: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = d.containerSize,
                g = d.containerOffset,
                h = d.size,
                i = d.position,
                j = d._aspectRatio || b.shiftKey,
                k = {
                    top: 0,
                    left: 0
                },
                l = d.containerElement;
            l[0] != document && /static/.test(l.css("position")) && (k = g), i.left < (d._helper ? g.left : 0) && (d.size.width = d.size.width + (d._helper ? d.position.left - g.left : d.position.left - k.left), j && (d.size.height = d.size.width / e.aspectRatio), d.position.left = e.helper ? g.left : 0), i.top < (d._helper ? g.top : 0) && (d.size.height = d.size.height + (d._helper ? d.position.top - g.top : d.position.top), j && (d.size.width = d.size.height * e.aspectRatio), d.position.top = d._helper ? g.top : 0), d.offset.left = d.parentData.left + d.position.left, d.offset.top = d.parentData.top + d.position.top;
            var m = Math.abs((d._helper ? d.offset.left - k.left : d.offset.left - k.left) + d.sizeDiff.width),
                n = Math.abs((d._helper ? d.offset.top - k.top : d.offset.top - g.top) + d.sizeDiff.height),
                o = d.containerElement.get(0) == d.element.parent().get(0),
                p = /relative|absolute/.test(d.containerElement.css("position"));
            o && p && (m -= d.parentData.left), m + d.size.width >= d.parentData.width && (d.size.width = d.parentData.width - m, j && (d.size.height = d.size.width / d.aspectRatio)), n + d.size.height >= d.parentData.height && (d.size.height = d.parentData.height - n, j && (d.size.width = d.size.height * d.aspectRatio))
        },
        stop: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = d.position,
                g = d.containerOffset,
                h = d.containerPosition,
                i = d.containerElement,
                j = a(d.helper),
                k = j.offset(),
                l = j.outerWidth() - d.sizeDiff.width,
                m = j.outerHeight() - d.sizeDiff.height;
            d._helper && !e.animate && /relative/.test(i.css("position")) && a(this).css({
                left: k.left - h.left - g.left,
                width: l,
                height: m
            }), d._helper && !e.animate && /static/.test(i.css("position")) && a(this).css({
                left: k.left - h.left - g.left,
                width: l,
                height: m
            })
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = d.size;
            d.ghost = d.originalElement.clone(), d.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof e.ghost == "string" ? e.ghost : ""), d.ghost.appendTo(d.helper)
        },
        resize: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options;
            d.ghost && d.ghost.css({
                position: "relative",
                height: d.size.height,
                width: d.size.width
            })
        },
        stop: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options;
            d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0))
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function(b, c) {
            var d = a(this).data("resizable"),
                e = d.options,
                f = d.size,
                g = d.originalSize,
                h = d.originalPosition,
                i = d.axis,
                j = e._aspectRatio || b.shiftKey;
            e.grid = typeof e.grid == "number" ? [e.grid, e.grid] : e.grid;
            var k = Math.round((f.width - g.width) / (e.grid[0] || 1)) * (e.grid[0] || 1),
                l = Math.round((f.height - g.height) / (e.grid[1] || 1)) * (e.grid[1] || 1);
            /^(se|s|e)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l) : /^(ne)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l, d.position.top = h.top - l) : /^(sw)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l, d.position.left = h.left - k) : (d.size.width = g.width + k, d.size.height = g.height + l, d.position.top = h.top - l, d.position.left = h.left - k)
        }
    });
    var c = function(a) {
            return parseInt(a, 10) || 0
        },
        d = function(a) {
            return !isNaN(parseInt(a, 10))
        }
}(jQuery), function(a, b) {
    a.widget("ui.selectable", a.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var b = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var c;
            this.refresh = function() {
                c = a(b.options.filter, b.element[0]), c.addClass("ui-selectee"), c.each(function() {
                    var b = a(this),
                        c = b.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: b,
                        left: c.left,
                        top: c.top,
                        right: c.left + b.outerWidth(),
                        bottom: c.top + b.outerHeight(),
                        startselected: !1,
                        selected: b.hasClass("ui-selected"),
                        selecting: b.hasClass("ui-selecting"),
                        unselecting: b.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
        },
        destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy();
            return this
        },
        _mouseStart: function(b) {
            var c = this;
            this.opos = [b.pageX, b.pageY];
            if (!this.options.disabled) {
                var d = this.options;
                this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                    left: b.clientX,
                    top: b.clientY,
                    width: 0,
                    height: 0
                }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var d = a.data(this, "selectable-item");
                    d.startselected = !0, !b.metaKey && !b.ctrlKey && (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                        unselecting: d.element
                    }))
                }), a(b.target).parents().andSelf().each(function() {
                    var d = a.data(this, "selectable-item");
                    if (d) {
                        var e = !b.metaKey && !b.ctrlKey || !d.$element.hasClass("ui-selected");
                        d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), d.unselecting = !e, d.selecting = e, d.selected = e, e ? c._trigger("selecting", b, {
                            selecting: d.element
                        }) : c._trigger("unselecting", b, {
                            unselecting: d.element
                        });
                        return !1
                    }
                })
            }
        },
        _mouseDrag: function(b) {
            var c = this;
            this.dragged = !0;
            if (!this.options.disabled) {
                var d = this.options,
                    e = this.opos[0],
                    f = this.opos[1],
                    g = b.pageX,
                    h = b.pageY;
                if (e > g) {
                    var i = g;
                    g = e, e = i
                }
                if (f > h) {
                    var i = h;
                    h = f, f = i
                }
                this.helper.css({
                    left: e,
                    top: f,
                    width: g - e,
                    height: h - f
                }), this.selectees.each(function() {
                    var i = a.data(this, "selectable-item");
                    if (!!i && i.element != c.element[0]) {
                        var j = !1;
                        d.tolerance == "touch" ? j = !(i.left > g || i.right < e || i.top > h || i.bottom < f) : d.tolerance == "fit" && (j = i.left > e && i.right < g && i.top > f && i.bottom < h), j ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, c._trigger("selecting", b, {
                            selecting: i.element
                        }))) : (i.selecting && ((b.metaKey || b.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), c._trigger("unselecting", b, {
                            unselecting: i.element
                        }))), i.selected && !b.metaKey && !b.ctrlKey && !i.startselected && (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, c._trigger("unselecting", b, {
                            unselecting: i.element
                        })))
                    }
                });
                return !1
            }
        },
        _mouseStop: function(b) {
            var c = this;
            this.dragged = !1;
            var d = this.options;
            a(".ui-unselecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
                    unselected: d.element
                })
            }), a(".ui-selecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                    selected: d.element
                })
            }), this._trigger("stop", b), this.helper.remove();
            return !1
        }
    }), a.extend(a.ui.selectable, {
        version: "1.8.17"
    })
}(jQuery), function(a, b) {
    a.widget("ui.sortable", a.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--)
                this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(b, c) {
            b === "disabled" ? (this.options[b] = c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(b, c) {
            var d = this;
            if (this.reverting)
                return !1;
            if (this.options.disabled || this.options.type == "static")
                return !1;
            this._refreshItems(b);
            var e = null,
                f = this,
                g = a(b.target).parents().each(function() {
                    if (a.data(this, d.widgetName + "-item") == f) {
                        e = a(this);
                        return !1
                    }
                });
            a.data(b.target, d.widgetName + "-item") == f && (e = a(b.target));
            if (!e)
                return !1;
            if (this.options.handle && !c) {
                var h = !1;
                a(this.options.handle, e).find("*").andSelf().each(function() {
                    this == b.target && (h = !0)
                });
                if (!h)
                    return !1
            }
            this.currentItem = e, this._removeCurrentsFromItems();
            return !0
        },
        _mouseStart: function(b, c, d) {
            var e = this.options,
                f = this;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), e.containment && this._setContainment(), e.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", e.cursor)), e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)), e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!d)
                for (var g = this.containers.length - 1; g >= 0; g--)
                    this.containers[g]._trigger("activate", b, f._uiHash(this));
            a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b);
            return !0
        },
        _mouseDrag: function(b) {
            this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var c = this.options,
                    d = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            for (var e = this.items.length - 1; e >= 0; e--) {
                var f = this.items[e],
                    g = f.item[0],
                    h = this._intersectsWithPointer(f);
                if (!h)
                    continue;
                if (g != this.currentItem[0] && this.placeholder[h == 1 ? "next" : "prev"]()[0] != g && !a.ui.contains(this.placeholder[0], g) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], g) : !0)) {
                    this.direction = h == 1 ? "down" : "up";
                    if (this.options.tolerance == "pointer" || this._intersectsWithSides(f))
                        this._rearrange(b, f);
                    else
                        break;
                    this._trigger("change", b, this._uiHash());
                    break
                }
            }
            this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs;
            return !1
        },
        _mouseStop: function(b, c) {
            if (!!b) {
                a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b);
                if (this.options.revert) {
                    var d = this,
                        e = d.placeholder.offset();
                    d.reverting = !0, a(this.helper).animate({
                        left: e.left - this.offset.parent.left - d.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: e.top - this.offset.parent.top - d.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b)
                    })
                } else
                    this._clear(b, c);
                return !1
            }
        },
        cancel: function() {
            var b = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var c = this.containers.length - 1; c >= 0; c--)
                    this.containers[c]._trigger("deactivate", null, b._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, b._uiHash(this)), this.containers[c].containerCache.over = 0)
            }
            this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem));
            return this
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            b = b || {}, a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !d.length && b.key && d.push(b.key + "=");
            return d.join("&")
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            b = b || {}, c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "")
            });
            return d
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                e = d + this.helperProportions.height,
                f = a.left,
                g = f + a.width,
                h = a.top,
                i = h + a.height,
                j = this.offset.click.top,
                k = this.offset.click.left,
                l = d + j > h && d + j < i && b + k > f && b + k < g;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
        },
        _intersectsWithPointer: function(b) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height),
                d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width),
                e = c && d,
                f = this._getDragVerticalDirection(),
                g = this._getDragHorizontalDirection();
            if (!e)
                return !1;
            return this.floating ? g && g == "right" || f == "down" ? 2 : 1 : f && (f == "down" ? 2 : 1)
        },
        _intersectsWithSides: function(b) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height),
                d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width),
                e = this._getDragVerticalDirection(),
                f = this._getDragHorizontalDirection();
            return this.floating && f ? f == "right" && d || f == "left" && !d : e && (e == "down" && c || e == "up" && !c)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return a != 0 && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return a != 0 && (a > 0 ? "right" : "left")
        },
        refresh: function(a) {
            this._refreshItems(a), this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(b) {
            var c = this,
                d = [],
                e = [],
                f = this._connectWith();
            if (f && b)
                for (var g = f.length - 1; g >= 0; g--) {
                    var h = a(f[g]);
                    for (var i = h.length - 1; i >= 0; i--) {
                        var j = a.data(h[i], this.widgetName);
                        j && j != this && !j.options.disabled && e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element) : a(j.options.items, j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), j])
                    }
                }
            e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var g = e.length - 1; g >= 0; g--)
                e[g][0].each(function() {
                    d.push(this)
                });
            return a(d)
        },
        _removeCurrentsFromItems: function() {
            var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
            for (var b = 0; b < this.items.length; b++)
                for (var c = 0; c < a.length; c++)
                    a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        },
        _refreshItems: function(b) {
            this.items = [], this.containers = [this];
            var c = this.items,
                d = this,
                e = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                    item: this.currentItem
                }) : a(this.options.items, this.element), this]],
                f = this._connectWith();
            if (f)
                for (var g = f.length - 1; g >= 0; g--) {
                    var h = a(f[g]);
                    for (var i = h.length - 1; i >= 0; i--) {
                        var j = a.data(h[i], this.widgetName);
                        j && j != this && !j.options.disabled && (e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element[0], b, {
                            item: this.currentItem
                        }) : a(j.options.items, j.element), j]), this.containers.push(j))
                    }
                }
            for (var g = e.length - 1; g >= 0; g--) {
                var k = e[g][1],
                    l = e[g][0];
                for (var i = 0, m = l.length; i < m; i++) {
                    var n = a(l[i]);
                    n.data(this.widgetName + "-item", k), c.push({
                        item: n,
                        instance: k,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var c = this.items.length - 1; c >= 0; c--) {
                var d = this.items[c];
                if (d.instance != this.currentContainer && this.currentContainer && d.item[0] != this.currentItem[0])
                    continue;
                var e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
                b || (d.width = e.outerWidth(), d.height = e.outerHeight());
                var f = e.offset();
                d.left = f.left, d.top = f.top
            }
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (var c = this.containers.length - 1; c >= 0; c--) {
                    var f = this.containers[c].element.offset();
                    this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function(b) {
            var c = b || this,
                d = c.options;
            if (!d.placeholder || d.placeholder.constructor == String) {
                var e = d.placeholder;
                d.placeholder = {
                    element: function() {
                        var b = a(document.createElement(c.currentItem[0].nodeName)).addClass(e || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        e || (b.style.visibility = "hidden");
                        return b
                    },
                    update: function(a, b) {
                        if (!e || !!d.forcePlaceholderSize)
                            b.height() || b.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), b.width() || b.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), d.placeholder.update(c, c.placeholder)
        },
        _contactContainers: function(b) {
            var c = null,
                d = null;
            for (var e = this.containers.length - 1; e >= 0; e--) {
                if (a.ui.contains(this.currentItem[0], this.containers[e].element[0]))
                    continue;
                if (this._intersectsWith(this.containers[e].containerCache)) {
                    if (c && a.ui.contains(this.containers[e].element[0], c.element[0]))
                        continue;
                    c = this.containers[e], d = e
                } else
                    this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            if (!!c)
                if (this.containers.length === 1)
                    this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1;
                else if (this.currentContainer != this.containers[d]) {
                    var f = 1e4,
                        g = null,
                        h = this.positionAbs[this.containers[d].floating ? "left" : "top"];
                    for (var i = this.items.length - 1; i >= 0; i--) {
                        if (!a.ui.contains(this.containers[d].element[0], this.items[i].item[0]))
                            continue;
                        var j = this.items[i][this.containers[d].floating ? "left" : "top"];
                        Math.abs(j - h) < f && (f = Math.abs(j - h), g = this.items[i])
                    }
                    if (!g && !this.options.dropOnEmpty)
                        return;
                    this.currentContainer = this.containers[d], g ? this._rearrange(b, g, null, !0) : this._rearrange(b, null, this.containers[d].element, !0), this._trigger("change", b, this._uiHash()), this.containers[d]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1
                }
        },
        _createHelper: function(b) {
            var c = this.options,
                d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            d.parents("body").length || a(c.appendTo != "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (d[0].style.width == "" || c.forceHelperSize) && d.width(this.currentItem.width()), (d[0].style.height == "" || c.forceHelperSize) && d.height(this.currentItem.height());
            return d
        },
        _adjustOffsetFromHelper: function(b) {
            typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)
                b = {
                    top: 0,
                    left: 0
                };
            return {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b = this.options;
            b.containment == "parent" && (b.containment = this.helper[0].parentNode);
            if (b.containment == "document" || b.containment == "window")
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(b.containment)) {
                var c = a(b.containment)[0],
                    d = a(b.containment).offset(),
                    e = a(c).css("overflow") != "hidden";
                this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = b == "absolute" ? 1 : -1,
                e = this.options,
                f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                g = /(html|body)/i.test(f[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)
            }
        },
        _generatePosition: function(b) {
            var c = this.options,
                d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                e = /(html|body)/i.test(d[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var f = b.pageX,
                g = b.pageY;
            if (this.originalPosition) {
                this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top));
                if (c.grid) {
                    var h = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
                    g = this.containment ? h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3] ? h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1] : h : h;
                    var i = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
                    f = this.containment ? i - this.offset.click.left < this.containment[0] || i - this.offset.click.left > this.containment[2] ? i - this.offset.click.left < this.containment[0] ? i + c.grid[0] : i - c.grid[0] : i : i
                }
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
            }
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this,
                f = this.counter;
            window.setTimeout(function() {
                f == e.counter && e.refreshPositions(!d)
            }, 0)
        },
        _clear: function(b, c) {
            this.reverting = !1;
            var d = [],
                e = this;
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var f in this._storedCSS)
                    if (this._storedCSS[f] == "auto" || this._storedCSS[f] == "static")
                        this._storedCSS[f] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            this.fromOutside && !c && d.push(function(a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c && d.push(function(a) {
                this._trigger("update", a, this._uiHash())
            });
            if (!a.ui.contains(this.element[0], this.currentItem[0])) {
                c || d.push(function(a) {
                    this._trigger("remove", a, this._uiHash())
                });
                for (var f = this.containers.length - 1; f >= 0; f--)
                    a.ui.contains(this.containers[f].element[0], this.currentItem[0]) && !c && (d.push(function(a) {
                        return function(b) {
                            a._trigger("receive", b, this._uiHash(this))
                        }
                    }.call(this, this.containers[f])), d.push(function(a) {
                        return function(b) {
                            a._trigger("update", b, this._uiHash(this))
                        }
                    }.call(this, this.containers[f])))
            }
            for (var f = this.containers.length - 1; f >= 0; f--)
                c || d.push(function(a) {
                    return function(b) {
                        a._trigger("deactivate", b, this._uiHash(this))
                    }
                }.call(this, this.containers[f])), this.containers[f].containerCache.over && (d.push(function(a) {
                    return function(b) {
                        a._trigger("out", b, this._uiHash(this))
                    }
                }.call(this, this.containers[f])), this.containers[f].containerCache.over = 0);
            this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!c) {
                    this._trigger("beforeStop", b, this._uiHash());
                    for (var f = 0; f < d.length; f++)
                        d[f].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return !1
            }
            c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!c) {
                for (var f = 0; f < d.length; f++)
                    d[f].call(this, b);
                this._trigger("stop", b, this._uiHash())
            }
            this.fromOutside = !1;
            return !0
        },
        _trigger: function() {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    }), a.extend(a.ui.sortable, {
        version: "1.8.17"
    })
}(jQuery), jQuery.effects || function(a, b) {
    function l(b) {
        if (!b || typeof b == "number" || a.fx.speeds[b])
            return !0;
        if (typeof b == "string" && !a.effects[b])
            return !0;
        return !1
    }
    function k(b, c, d, e) {
        typeof b == "object" && (e = c, d = null, c = b, b = c.effect), a.isFunction(c) && (e = c, d = null, c = {});
        if (typeof c == "number" || a.fx.speeds[c])
            e = d, d = c, c = {};
        a.isFunction(d) && (e = d, d = null), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, e = e || c.complete;
        return [b, c, d, e]
    }
    function j(a, b) {
        var c = {
                _: 0
            },
            d;
        for (d in b)
            a[d] != b[d] && (c[d] = b[d]);
        return c
    }
    function i(b) {
        var c,
            d;
        for (c in b)
            d = b[c], (d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c];
        return b
    }
    function h() {
        var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            b = {},
            c,
            d;
        if (a && a.length && a[0] && a[a[0]]) {
            var e = a.length;
            while (e--)
                c = a[e], typeof a[c] == "string" && (d = c.replace(/\-(\w)/g, function(a, b) {
                    return b.toUpperCase()
                }), b[d] = a[c])
        } else
            for (c in a)
                typeof a[c] == "string" && (b[c] = a[c]);
        return b
    }
    function d(b, d) {
        var e;
        do {
            e = a.curCSS(b, d);
            if (e != "" && e != "transparent" || a.nodeName(b, "body"))
                break;
            d = "backgroundColor"
        } while (b = b.parentNode);
        return c(e)
    }
    function c(b) {
        var c;
        if (b && b.constructor == Array && b.length == 3)
            return b;
        if (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))
            return [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)];
        if (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))
            return [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55];
        if (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))
            return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)];
        if (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))
            return [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)];
        if (c = /rgba\(0, 0, 0, 0\)/.exec(b))
            return e.transparent;
        return e[a.trim(b).toLowerCase()]
    }
    a.effects = {}, a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(b, e) {
        a.fx.step[e] = function(a) {
            a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0), a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")"
        }
    });
    var e = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0],
            transparent: [255, 255, 255]
        },
        f = ["add", "remove", "toggle"],
        g = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    a.effects.animateClass = function(b, c, d, e) {
        a.isFunction(d) && (e = d, d = null);
        return this.queue(function() {
            var g = a(this),
                k = g.attr("style") || " ",
                l = i(h.call(this)),
                m,
                n = g.attr("class");
            a.each(f, function(a, c) {
                b[c] && g[c + "Class"](b[c])
            }), m = i(h.call(this)), g.attr("class", n), g.animate(j(l, m), {
                queue: !1,
                duration: c,
                easing: d,
                complete: function() {
                    a.each(f, function(a, c) {
                        b[c] && g[c + "Class"](b[c])
                    }), typeof g.attr("style") == "object" ? (g.attr("style").cssText = "", g.attr("style").cssText = k) : g.attr("style", k), e && e.apply(this, arguments), a.dequeue(this)
                }
            })
        })
    }, a.fn.extend({
        _addClass: a.fn.addClass,
        addClass: function(b, c, d, e) {
            return c ? a.effects.animateClass.apply(this, [{
                add: b
            }, c, d, e]) : this._addClass(b)
        },
        _removeClass: a.fn.removeClass,
        removeClass: function(b, c, d, e) {
            return c ? a.effects.animateClass.apply(this, [{
                remove: b
            }, c, d, e]) : this._removeClass(b)
        },
        _toggleClass: a.fn.toggleClass,
        toggleClass: function(c, d, e, f, g) {
            return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply(this, [d ? {
                add: c
            } : {
                remove: c
            }, e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{
                toggle: c
            }, d, e, f])
        },
        switchClass: function(b, c, d, e, f) {
            return a.effects.animateClass.apply(this, [{
                add: c,
                remove: b
            }, d, e, f])
        }
    }), a.extend(a.effects, {
        version: "1.8.17",
        save: function(a, b) {
            for (var c = 0; c < b.length; c++)
                b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]])
        },
        restore: function(a, b) {
            for (var c = 0; c < b.length; c++)
                b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]))
        },
        setMode: function(a, b) {
            b == "toggle" && (b = a.is(":hidden") ? "show" : "hide");
            return b
        },
        getBaseline: function(a, b) {
            var c,
                d;
            switch (a[0]) {
            case "top":
                c = 0;
                break;
            case "middle":
                c = .5;
                break;
            case "bottom":
                c = 1;
                break;
            default:
                c = a[0] / b.height
            }
            switch (a[1]) {
            case "left":
                d = 0;
                break;
            case "center":
                d = .5;
                break;
            case "right":
                d = 1;
                break;
            default:
                d = a[1] / b.width
            }
            return {
                x: d,
                y: c
            }
        },
        createWrapper: function(b) {
            if (b.parent().is(".ui-effects-wrapper"))
                return b.parent();
            var c = {
                    width: b.outerWidth(!0),
                    height: b.outerHeight(!0),
                    "float": b.css("float")
                },
                d = a("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                e = document.activeElement;
            b.wrap(d), (b[0] === e || a.contains(b[0], e)) && a(e).focus(), d = b.parent(), b.css("position") == "static" ? (d.css({
                position: "relative"
            }), b.css({
                position: "relative"
            })) : (a.extend(c, {
                position: b.css("position"),
                zIndex: b.css("z-index")
            }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
            }), b.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            }));
            return d.css(c).show()
        },
        removeWrapper: function(b) {
            var c,
                d = document.activeElement;
            if (b.parent().is(".ui-effects-wrapper")) {
                c = b.parent().replaceWith(b), (b[0] === d || a.contains(b[0], d)) && a(d).focus();
                return c
            }
            return b
        },
        setTransition: function(b, c, d, e) {
            e = e || {}, a.each(c, function(a, c) {
                unit = b.cssUnit(c), unit[0] > 0 && (e[c] = unit[0] * d + unit[1])
            });
            return e
        }
    }), a.fn.extend({
        effect: function(b, c, d, e) {
            var f = k.apply(this, arguments),
                g = {
                    options: f[1],
                    duration: f[2],
                    callback: f[3]
                },
                h = g.options.mode,
                i = a.effects[b];
            if (a.fx.off || !i)
                return h ? this[h](g.duration, g.callback) : this.each(function() {
                    g.callback && g.callback.call(this)
                });
            return i.call(this, g)
        },
        _show: a.fn.show,
        show: function(a) {
            if (l(a))
                return this._show.apply(this, arguments);
            var b = k.apply(this, arguments);
            b[1].mode = "show";
            return this.effect.apply(this, b)
        },
        _hide: a.fn.hide,
        hide: function(a) {
            if (l(a))
                return this._hide.apply(this, arguments);
            var b = k.apply(this, arguments);
            b[1].mode = "hide";
            return this.effect.apply(this, b)
        },
        __toggle: a.fn.toggle,
        toggle: function(b) {
            if (l(b) || typeof b == "boolean" || a.isFunction(b))
                return this.__toggle.apply(this, arguments);
            var c = k.apply(this, arguments);
            c[1].mode = "toggle";
            return this.effect.apply(this, c)
        },
        cssUnit: function(b) {
            var c = this.css(b),
                d = [];
            a.each(["em", "px", "%", "pt"], function(a, b) {
                c.indexOf(b) > 0 && (d = [parseFloat(c), b])
            });
            return d
        }
    }), a.easing.jswing = a.easing.swing, a.extend(a.easing, {
        def: "easeOutQuad",
        swing: function(b, c, d, e, f) {
            return a.easing[a.easing.def](b, c, d, e, f)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            if ((b /= e / 2) < 1)
                return d / 2 * b * b + c;
            return -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            if ((b /= e / 2) < 1)
                return d / 2 * b * b * b + c;
            return d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            if ((b /= e / 2) < 1)
                return d / 2 * b * b * b * b + c;
            return -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            if ((b /= e / 2) < 1)
                return d / 2 * b * b * b * b * b + c;
            return d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            if (b == 0)
                return c;
            if (b == e)
                return c + d;
            if ((b /= e / 2) < 1)
                return d / 2 * Math.pow(2, 10 * (b - 1)) + c;
            return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            if ((b /= e / 2) < 1)
                return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c;
            return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (b == 0)
                return c;
            if ((b /= e) == 1)
                return c + d;
            g || (g = e * .3);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else
                var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (b == 0)
                return c;
            if ((b /= e) == 1)
                return c + d;
            g || (g = e * .3);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else
                var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (b == 0)
                return c;
            if ((b /= e / 2) == 2)
                return c + d;
            g || (g = e * .3 * 1.5);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else
                var f = g / (2 * Math.PI) * Math.asin(d / h);
            if (b < 1)
                return -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c;
            return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, c, d, e, f, g) {
            g == b && (g = 1.70158);
            return e * (c /= f) * c * ((g + 1) * c - g) + d
        },
        easeOutBack: function(a, c, d, e, f, g) {
            g == b && (g = 1.70158);
            return e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
        },
        easeInOutBack: function(a, c, d, e, f, g) {
            g == b && (g = 1.70158);
            if ((c /= f / 2) < 1)
                return e / 2 * c * c * (((g *= 1.525) + 1) * c - g) + d;
            return e / 2 * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
        },
        easeInBounce: function(b, c, d, e, f) {
            return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(b, c, d, e, f) {
            if (c < f / 2)
                return a.easing.easeInBounce(b, c * 2, 0, e, f) * .5 + d;
            return a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * .5 + e * .5 + d
        }
    })
}(jQuery), function(a, b) {
    a.effects.blind = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.direction || "vertical";
            a.effects.save(c, d), c.show();
            var g = a.effects.createWrapper(c).css({
                    overflow: "hidden"
                }),
                h = f == "vertical" ? "height" : "width",
                i = f == "vertical" ? g.height() : g.width();
            e == "show" && g.css(h, 0);
            var j = {};
            j[h] = e == "show" ? i : 0, g.animate(j, b.duration, b.options.easing, function() {
                e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.bounce = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "effect"),
                f = b.options.direction || "up",
                g = b.options.distance || 20,
                h = b.options.times || 5,
                i = b.duration || 250;
            /show|hide/.test(e) && d.push("opacity"), a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
            var j = f == "up" || f == "down" ? "top" : "left",
                k = f == "up" || f == "left" ? "pos" : "neg",
                g = b.options.distance || (j == "top" ? c.outerHeight({
                    margin: !0
                }) / 3 : c.outerWidth({
                    margin: !0
                }) / 3);
            e == "show" && c.css("opacity", 0).css(j, k == "pos" ? -g : g), e == "hide" && (g = g / (h * 2)), e != "hide" && h--;
            if (e == "show") {
                var l = {
                    opacity: 1
                };
                l[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(l, i / 2, b.options.easing), g = g / 2, h--
            }
            for (var m = 0; m < h; m++) {
                var n = {},
                    p = {};
                n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing), g = e == "hide" ? g * 2 : g / 2
            }
            if (e == "hide") {
                var l = {
                    opacity: 0
                };
                l[j] = (k == "pos" ? "-=" : "+=") + g, c.animate(l, i / 2, b.options.easing, function() {
                    c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
                })
            } else {
                var n = {},
                    p = {};
                n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing, function() {
                    a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
                })
            }
            c.queue("fx", function() {
                c.dequeue()
            }), c.dequeue()
        })
    }
}(jQuery), function(a, b) {
    a.effects.clip = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right", "height", "width"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.direction || "vertical";
            a.effects.save(c, d), c.show();
            var g = a.effects.createWrapper(c).css({
                    overflow: "hidden"
                }),
                h = c[0].tagName == "IMG" ? g : c,
                i = {
                    size: f == "vertical" ? "height" : "width",
                    position: f == "vertical" ? "top" : "left"
                },
                j = f == "vertical" ? h.height() : h.width();
            e == "show" && (h.css(i.size, 0), h.css(i.position, j / 2));
            var k = {};
            k[i.size] = e == "show" ? j : 0, k[i.position] = e == "show" ? 0 : j / 2, h.animate(k, {
                queue: !1,
                duration: b.duration,
                easing: b.options.easing,
                complete: function() {
                    e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
                }
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.drop = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right", "opacity"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.direction || "left";
            a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
            var g = f == "up" || f == "down" ? "top" : "left",
                h = f == "up" || f == "left" ? "pos" : "neg",
                i = b.options.distance || (g == "top" ? c.outerHeight({
                    margin: !0
                }) / 2 : c.outerWidth({
                    margin: !0
                }) / 2);
            e == "show" && c.css("opacity", 0).css(g, h == "pos" ? -i : i);
            var j = {
                opacity: e == "show" ? 1 : 0
            };
            j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {
                queue: !1,
                duration: b.duration,
                easing: b.options.easing,
                complete: function() {
                    e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
                }
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.explode = function(b) {
        return this.queue(function() {
            var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3,
                d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
            b.options.mode = b.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : "show" : b.options.mode;
            var e = a(this).show().css("visibility", "hidden"),
                f = e.offset();
            f.top -= parseInt(e.css("marginTop"), 10) || 0, f.left -= parseInt(e.css("marginLeft"), 10) || 0;
            var g = e.outerWidth(!0),
                h = e.outerHeight(!0);
            for (var i = 0; i < c; i++)
                for (var j = 0; j < d; j++)
                    e.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -j * (g / d),
                        top: -i * (h / c)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: g / d,
                        height: h / c,
                        left: f.left + j * (g / d) + (b.options.mode == "show" ? (j - Math.floor(d / 2)) * (g / d) : 0),
                        top: f.top + i * (h / c) + (b.options.mode == "show" ? (i - Math.floor(c / 2)) * (h / c) : 0),
                        opacity: b.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: f.left + j * (g / d) + (b.options.mode == "show" ? 0 : (j - Math.floor(d / 2)) * (g / d)),
                        top: f.top + i * (h / c) + (b.options.mode == "show" ? 0 : (i - Math.floor(c / 2)) * (h / c)),
                        opacity: b.options.mode == "show" ? 1 : 0
                    }, b.duration || 500);
            setTimeout(function() {
                b.options.mode == "show" ? e.css({
                    visibility: "visible"
                }) : e.css({
                    visibility: "visible"
                }).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove()
            }, b.duration || 500)
        })
    }
}(jQuery), function(a, b) {
    a.effects.fade = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = a.effects.setMode(c, b.options.mode || "hide");
            c.animate({
                opacity: d
            }, {
                queue: !1,
                duration: b.duration,
                easing: b.options.easing,
                complete: function() {
                    b.callback && b.callback.apply(this, arguments), c.dequeue()
                }
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.fold = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.size || 15,
                g = !!b.options.horizFirst,
                h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
            a.effects.save(c, d), c.show();
            var i = a.effects.createWrapper(c).css({
                    overflow: "hidden"
                }),
                j = e == "show" != g,
                k = j ? ["width", "height"] : ["height", "width"],
                l = j ? [i.width(), i.height()] : [i.height(), i.width()],
                m = /([0-9]+)%/.exec(f);
            m && (f = parseInt(m[1], 10) / 100 * l[e == "hide" ? 0 : 1]), e == "show" && i.css(g ? {
                height: 0,
                width: f
            } : {
                height: f,
                width: 0
            });
            var n = {},
                p = {};
            n[k[0]] = e == "show" ? l[0] : f, p[k[1]] = e == "show" ? l[1] : 0, i.animate(n, h, b.options.easing).animate(p, h, b.options.easing, function() {
                e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.highlight = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["backgroundImage", "backgroundColor", "opacity"],
                e = a.effects.setMode(c, b.options.mode || "show"),
                f = {
                    backgroundColor: c.css("backgroundColor")
                };
            e == "hide" && (f.opacity = 0), a.effects.save(c, d), c.show().css({
                backgroundImage: "none",
                backgroundColor: b.options.color || "#ffff99"
            }).animate(f, {
                queue: !1,
                duration: b.duration,
                easing: b.options.easing,
                complete: function() {
                    e == "hide" && c.hide(), a.effects.restore(c, d), e == "show" && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue()
                }
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.pulsate = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = a.effects.setMode(c, b.options.mode || "show");
            times = (b.options.times || 5) * 2 - 1, duration = b.duration ? b.duration / 2 : a.fx.speeds._default / 2, isVisible = c.is(":visible"), animateTo = 0, isVisible || (c.css("opacity", 0).show(), animateTo = 1), (d == "hide" && isVisible || d == "show" && !isVisible) && times--;
            for (var e = 0; e < times; e++)
                c.animate({
                    opacity: animateTo
                }, duration, b.options.easing), animateTo = (animateTo + 1) % 2;
            c.animate({
                opacity: animateTo
            }, duration, b.options.easing, function() {
                animateTo == 0 && c.hide(), b.callback && b.callback.apply(this, arguments)
            }), c.queue("fx", function() {
                c.dequeue()
            }).dequeue()
        })
    }
}(jQuery), function(a, b) {
    a.effects.puff = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = a.effects.setMode(c, b.options.mode || "hide"),
                e = parseInt(b.options.percent, 10) || 150,
                f = e / 100,
                g = {
                    height: c.height(),
                    width: c.width()
                };
            a.extend(b.options, {
                fade: !0,
                mode: d,
                percent: d == "hide" ? e : 100,
                from: d == "hide" ? g : {
                    height: g.height * f,
                    width: g.width * f
                }
            }), c.effect("scale", b.options, b.duration, b.callback), c.dequeue()
        })
    }, a.effects.scale = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = a.extend(!0, {}, b.options),
                e = a.effects.setMode(c, b.options.mode || "effect"),
                f = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : e == "hide" ? 0 : 100),
                g = b.options.direction || "both",
                h = b.options.origin;
            e != "effect" && (d.origin = h || ["middle", "center"], d.restore = !0);
            var i = {
                height: c.height(),
                width: c.width()
            };
            c.from = b.options.from || (e == "show" ? {
                height: 0,
                width: 0
            } : i);
            var j = {
                y: g != "horizontal" ? f / 100 : 1,
                x: g != "vertical" ? f / 100 : 1
            };
            c.to = {
                height: i.height * j.y,
                width: i.width * j.x
            }, b.options.fade && (e == "show" && (c.from.opacity = 0, c.to.opacity = 1), e == "hide" && (c.from.opacity = 1, c.to.opacity = 0)), d.from = c.from, d.to = c.to, d.mode = e, c.effect("size", d, b.duration, b.callback), c.dequeue()
        })
    }, a.effects.size = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                e = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                f = ["width", "height", "overflow"],
                g = ["fontSize"],
                h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                j = a.effects.setMode(c, b.options.mode || "effect"),
                k = b.options.restore || !1,
                l = b.options.scale || "both",
                m = b.options.origin,
                n = {
                    height: c.height(),
                    width: c.width()
                };
            c.from = b.options.from || n, c.to = b.options.to || n;
            if (m) {
                var p = a.effects.getBaseline(m, n);
                c.from.top = (n.height - c.from.height) * p.y, c.from.left = (n.width - c.from.width) * p.x, c.to.top = (n.height - c.to.height) * p.y, c.to.left = (n.width - c.to.width) * p.x
            }
            var q = {
                from: {
                    y: c.from.height / n.height,
                    x: c.from.width / n.width
                },
                to: {
                    y: c.to.height / n.height,
                    x: c.to.width / n.width
                }
            };
            if (l == "box" || l == "both")
                q.from.y != q.to.y && (d = d.concat(h), c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (d = d.concat(i), c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to));
            (l == "content" || l == "both") && q.from.y != q.to.y && (d = d.concat(g), c.from = a.effects.setTransition(c, g, q.from.y, c.from), c.to = a.effects.setTransition(c, g, q.to.y, c.to)), a.effects.save(c, k ? d : e), c.show(), a.effects.createWrapper(c), c.css("overflow", "hidden").css(c.from);
            if (l == "content" || l == "both")
                h = h.concat(["marginTop", "marginBottom"]).concat(g), i = i.concat(["marginLeft", "marginRight"]), f = d.concat(h).concat(i), c.find("*[width]").each(function() {
                    child = a(this), k && a.effects.save(child, f);
                    var c = {
                        height: child.height(),
                        width: child.width()
                    };
                    child.from = {
                        height: c.height * q.from.y,
                        width: c.width * q.from.x
                    }, child.to = {
                        height: c.height * q.to.y,
                        width: c.width * q.to.x
                    }, q.from.y != q.to.y && (child.from = a.effects.setTransition(child, h, q.from.y, child.from), child.to = a.effects.setTransition(child, h, q.to.y, child.to)), q.from.x != q.to.x && (child.from = a.effects.setTransition(child, i, q.from.x, child.from), child.to = a.effects.setTransition(child, i, q.to.x, child.to)), child.css(child.from), child.animate(child.to, b.duration, b.options.easing, function() {
                        k && a.effects.restore(child, f)
                    })
                });
            c.animate(c.to, {
                queue: !1,
                duration: b.duration,
                easing: b.options.easing,
                complete: function() {
                    c.to.opacity === 0 && c.css("opacity", c.from.opacity), j == "hide" && c.hide(), a.effects.restore(c, k ? d : e), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
                }
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.shake = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "effect"),
                f = b.options.direction || "left",
                g = b.options.distance || 20,
                h = b.options.times || 3,
                i = b.duration || b.options.duration || 140;
            a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
            var j = f == "up" || f == "down" ? "top" : "left",
                k = f == "up" || f == "left" ? "pos" : "neg",
                l = {},
                m = {},
                n = {};
            l[j] = (k == "pos" ? "-=" : "+=") + g, m[j] = (k == "pos" ? "+=" : "-=") + g * 2, n[j] = (k == "pos" ? "-=" : "+=") + g * 2, c.animate(l, i, b.options.easing);
            for (var p = 1; p < h; p++)
                c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
            c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing, function() {
                a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
            }), c.queue("fx", function() {
                c.dequeue()
            }), c.dequeue()
        })
    }
}(jQuery), function(a, b) {
    a.effects.slide = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "show"),
                f = b.options.direction || "left";
            a.effects.save(c, d), c.show(), a.effects.createWrapper(c).css({
                overflow: "hidden"
            });
            var g = f == "up" || f == "down" ? "top" : "left",
                h = f == "up" || f == "left" ? "pos" : "neg",
                i = b.options.distance || (g == "top" ? c.outerHeight({
                    margin: !0
                }) : c.outerWidth({
                    margin: !0
                }));
            e == "show" && c.css(g, h == "pos" ? isNaN(i) ? "-" + i : -i : i);
            var j = {};
            j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {
                queue: !1,
                duration: b.duration,
                easing: b.options.easing,
                complete: function() {
                    e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
                }
            })
        })
    }
}(jQuery), function(a, b) {
    a.effects.transfer = function(b) {
        return this.queue(function() {
            var c = a(this),
                d = a(b.options.to),
                e = d.offset(),
                f = {
                    top: e.top,
                    left: e.left,
                    height: d.innerHeight(),
                    width: d.innerWidth()
                },
                g = c.offset(),
                h = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({
                    top: g.top,
                    left: g.left,
                    height: c.innerHeight(),
                    width: c.innerWidth(),
                    position: "absolute"
                }).animate(f, b.duration, b.options.easing, function() {
                    h.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
                })
        })
    }
}(jQuery), function(a, b) {
    a.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function() {
            var b = this,
                c = b.options;
            b.running = 0, b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), b.headers = b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                c.disabled || a(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function() {
                c.disabled || a(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function() {
                c.disabled || a(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function() {
                c.disabled || a(this).removeClass("ui-state-focus")
            }), b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (c.navigation) {
                var d = b.element.find("a").filter(c.navigationFilter).eq(0);
                if (d.length) {
                    var e = d.closest(".ui-accordion-header");
                    e.length ? b.active = e : b.active = d.closest(".ui-accordion-content").prev()
                }
            }
            b.active = b._findActive(b.active || c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), b.active.next().addClass("ui-accordion-content-active"), b._createIcons(), b.resize(), b.element.attr("role", "tablist"), b.headers.attr("role", "tab").bind("keydown.accordion", function(a) {
                return b._keydown(a)
            }).next().attr("role", "tabpanel"), b.headers.not(b.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide(), b.active.length ? b.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : b.headers.eq(0).attr("tabIndex", 0), a.browser.safari || b.headers.find("a").attr("tabIndex", -1), c.event && b.headers.bind(c.event.split(" ").join(".accordion ") + ".accordion", function(a) {
                b._clickHandler.call(b, a, this), a.preventDefault()
            })
        },
        _createIcons: function() {
            var b = this.options;
            b.icons && (a("<span></span>").addClass("ui-icon " + b.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function() {
            var b = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var c = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            (b.autoHeight || b.fillHeight) && c.css("height", "");
            return a.Widget.prototype.destroy.call(this)
        },
        _setOption: function(b, c) {
            a.Widget.prototype._setOption.apply(this, arguments), b == "active" && this.activate(c), b == "icons" && (this._destroyIcons(), c && this._createIcons()), b == "disabled" && this.headers.add(this.headers.next())[c ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function(b) {
            if (!(this.options.disabled || b.altKey || b.ctrlKey)) {
                var c = a.ui.keyCode,
                    d = this.headers.length,
                    e = this.headers.index(b.target),
                    f = !1;
                switch (b.keyCode) {
                case c.RIGHT:
                case c.DOWN:
                    f = this.headers[(e + 1) % d];
                    break;
                case c.LEFT:
                case c.UP:
                    f = this.headers[(e - 1 + d) % d];
                    break;
                case c.SPACE:
                case c.ENTER:
                    this._clickHandler({
                        target: b.target
                    }, b.target), b.preventDefault()
                }
                if (f) {
                    a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus();
                    return !1
                }
                return !0
            }
        },
        resize: function() {
            var b = this.options,
                c;
            if (b.fillSpace) {
                if (a.browser.msie) {
                    var d = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                c = this.element.parent().height(), a.browser.msie && this.element.parent().css("overflow", d), this.headers.each(function() {
                    c -= a(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")
            } else
                b.autoHeight && (c = 0, this.headers.next().each(function() {
                    c = Math.max(c, a(this).height("").height())
                }).height(c));
            return this
        },
        activate: function(a) {
            this.options.active = a;
            var b = this._findActive(a)[0];
            this._clickHandler({
                target: b
            }, b);
            return this
        },
        _findActive: function(b) {
            return b ? typeof b == "number" ? this.headers.filter(":eq(" + b + ")") : this.headers.not(this.headers.not(b)) : b === !1 ? a([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function(b, c) {
            var d = this.options;
            if (!d.disabled) {
                if (!b.target) {
                    if (!d.collapsible)
                        return;
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), this.active.next().addClass("ui-accordion-content-active");
                    var e = this.active.next(),
                        f = {
                            options: d,
                            newHeader: a([]),
                            oldHeader: d.active,
                            newContent: a([]),
                            oldContent: e
                        },
                        g = this.active = a([]);
                    this._toggle(g, e, f);
                    return
                }
                var h = a(b.currentTarget || c),
                    i = h[0] === this.active[0];
                d.active = d.collapsible && i ? !1 : this.headers.index(h);
                if (this.running || !d.collapsible && i)
                    return;
                var j = this.active,
                    g = h.next(),
                    e = this.active.next(),
                    f = {
                        options: d,
                        newHeader: i && d.collapsible ? a([]) : h,
                        oldHeader: this.active,
                        newContent: i && d.collapsible ? a([]) : g,
                        oldContent: e
                    },
                    k = this.headers.index(this.active[0]) > this.headers.index(h[0]);
                this.active = i ? a([]) : h, this._toggle(g, e, f, i, k), j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), i || (h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected), h.next().addClass("ui-accordion-content-active"));
                return
            }
        },
        _toggle: function(b, c, d, e, f) {
            var g = this,
                h = g.options;
            g.toShow = b, g.toHide = c, g.data = d;
            var i = function() {
                if (!!g)
                    return g._completed.apply(g, arguments)
            };
            g._trigger("changestart", null, g.data), g.running = c.size() === 0 ? b.size() : c.size();
            if (h.animated) {
                var j = {};
                h.collapsible && e ? j = {
                    toShow: a([]),
                    toHide: c,
                    complete: i,
                    down: f,
                    autoHeight: h.autoHeight || h.fillSpace
                } : j = {
                    toShow: b,
                    toHide: c,
                    complete: i,
                    down: f,
                    autoHeight: h.autoHeight || h.fillSpace
                }, h.proxied || (h.proxied = h.animated), h.proxiedDuration || (h.proxiedDuration = h.duration), h.animated = a.isFunction(h.proxied) ? h.proxied(j) : h.proxied, h.duration = a.isFunction(h.proxiedDuration) ? h.proxiedDuration(j) : h.proxiedDuration;
                var k = a.ui.accordion.animations,
                    l = h.duration,
                    m = h.animated;
                m && !k[m] && !a.easing[m] && (m = "slide"), k[m] || (k[m] = function(a) {
                    this.slide(a, {
                        easing: m,
                        duration: l || 700
                    })
                }), k[m](j)
            } else
                h.collapsible && e ? b.toggle() : (c.hide(), b.show()), i(!0);
            c.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur(), b.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function(a) {
            this.running = a ? 0 : --this.running;
            this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
        }
    }), a.extend(a.ui.accordion, {
        version: "1.8.17",
        animations: {
            slide: function(b, c) {
                b = a.extend({
                    easing: "swing",
                    duration: 300
                }, b, c);
                if (!b.toHide.size())
                    b.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, b);
                else {
                    if (!b.toShow.size()) {
                        b.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, b);
                        return
                    }
                    var d = b.toShow.css("overflow"),
                        e = 0,
                        f = {},
                        g = {},
                        h = ["height", "paddingTop", "paddingBottom"],
                        i,
                        j = b.toShow;
                    i = j[0].style.width, j.width(j.parent().width() - parseFloat(j.css("paddingLeft")) - parseFloat(j.css("paddingRight")) - (parseFloat(j.css("borderLeftWidth")) || 0) - (parseFloat(j.css("borderRightWidth")) || 0)), a.each(h, function(c, d) {
                        g[d] = "hide";
                        var e = ("" + a.css(b.toShow[0], d)).match(/^([\d+-.]+)(.*)$/);
                        f[d] = {
                            value: e[1],
                            unit: e[2] || "px"
                        }
                    }), b.toShow.css({
                        height: 0,
                        overflow: "hidden"
                    }).show(), b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g, {
                        step: function(a, c) {
                            c.prop == "height" && (e = c.end - c.start === 0 ? 0 : (c.now - c.start) / (c.end - c.start)), b.toShow[0].style[c.prop] = e * f[c.prop].value + f[c.prop].unit
                        },
                        duration: b.duration,
                        easing: b.easing,
                        complete: function() {
                            b.autoHeight || b.toShow.css("height", ""), b.toShow.css({
                                width: i,
                                overflow: d
                            }), b.complete()
                        }
                    })
                }
            },
            bounceslide: function(a) {
                this.slide(a, {
                    easing: a.down ? "easeOutBounce" : "swing",
                    duration: a.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery), function(a, b) {
    var c = 0;
    a.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var b = this,
                c = this.element[0].ownerDocument,
                d;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function(c) {
                if (!b.options.disabled && !b.element.propAttr("readOnly")) {
                    d = !1;
                    var e = a.ui.keyCode;
                    switch (c.keyCode) {
                    case e.PAGE_UP:
                        b._move("previousPage", c);
                        break;
                    case e.PAGE_DOWN:
                        b._move("nextPage", c);
                        break;
                    case e.UP:
                        b._move("previous", c), c.preventDefault();
                        break;
                    case e.DOWN:
                        b._move("next", c), c.preventDefault();
                        break;
                    case e.ENTER:
                    case e.NUMPAD_ENTER:
                        b.menu.active && (d = !0, c.preventDefault());
                    case e.TAB:
                        if (!b.menu.active)
                            return;
                        b.menu.select(c);
                        break;
                    case e.ESCAPE:
                        b.element.val(b.term), b.close(c);
                        break;
                    default:
                        clearTimeout(b.searching), b.searching = setTimeout(function() {
                            b.term != b.element.val() && (b.selectedItem = null, b.search(null, c))
                        }, b.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function(a) {
                d && (d = !1, a.preventDefault())
            }).bind("focus.autocomplete", function() {
                b.options.disabled || (b.selectedItem = null, b.previous = b.element.val())
            }).bind("blur.autocomplete", function(a) {
                b.options.disabled || (clearTimeout(b.searching), b.closing = setTimeout(function() {
                    b.close(a), b._change(a)
                }, 150))
            }), this._initSource(), this.response = function() {
                return b._response.apply(b, arguments)
            }, this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", c)[0]).mousedown(function(c) {
                var d = b.menu.element[0];
                a(c.target).closest(".ui-menu-item").length || setTimeout(function() {
                    a(document).one("mousedown", function(c) {
                        c.target !== b.element[0] && c.target !== d && !a.ui.contains(d, c.target) && b.close()
                    })
                }, 1), setTimeout(function() {
                    clearTimeout(b.closing)
                }, 13)
            }).menu({
                focus: function(a, c) {
                    var d = c.item.data("item.autocomplete");
                    !1 !== b._trigger("focus", a, {
                        item: d
                    }) && /^key/.test(a.originalEvent.type) && b.element.val(d.value)
                },
                selected: function(a, d) {
                    var e = d.item.data("item.autocomplete"),
                        f = b.previous;
                    b.element[0] !== c.activeElement && (b.element.focus(), b.previous = f, setTimeout(function() {
                        b.previous = f, b.selectedItem = e
                    }, 1)), !1 !== b._trigger("select", a, {
                        item: e
                    }) && b.element.val(e.value), b.term = b.element.val(), b.close(a), b.selectedItem = e
                },
                blur: function(a, c) {
                    b.menu.element.is(":visible") && b.element.val() !== b.term && b.element.val(b.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), a.fn.bgiframe && this.menu.element.bgiframe(), b.beforeunloadHandler = function() {
                b.element.removeAttr("autocomplete")
            }, a(window).bind("beforeunload", b.beforeunloadHandler)
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), a(window).unbind("beforeunload", this.beforeunloadHandler), a.Widget.prototype.destroy.call(this)
        },
        _setOption: function(b, c) {
            a.Widget.prototype._setOption.apply(this, arguments), b === "source" && this._initSource(), b === "appendTo" && this.menu.element.appendTo(a(c || "body", this.element[0].ownerDocument)[0]), b === "disabled" && c && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var b = this,
                d,
                e;
            a.isArray(this.options.source) ? (d = this.options.source, this.source = function(b, c) {
                c(a.ui.autocomplete.filter(d, b.term))
            }) : typeof this.options.source == "string" ? (e = this.options.source, this.source = function(d, f) {
                b.xhr && b.xhr.abort(), b.xhr = a.ajax({
                    url: e,
                    data: d,
                    dataType: "json",
                    autocompleteRequest: ++c,
                    success: function(a, b) {
                        this.autocompleteRequest === c && f(a)
                    },
                    error: function() {
                        this.autocompleteRequest === c && f([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function(a, b) {
            a = a != null ? a : this.element.val(), this.term = this.element.val();
            if (a.length < this.options.minLength)
                return this.close(b);
            clearTimeout(this.closing);
            if (this._trigger("search", b) !== !1)
                return this._search(a)
        },
        _search: function(a) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: a
            }, this.response)
        },
        _response: function(a) {
            !this.options.disabled && a && a.length ? (a = this._normalize(a), this._suggest(a), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function(a) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this.element.val() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(b) {
            if (b.length && b[0].label && b[0].value)
                return b;
            return a.map(b, function(b) {
                if (typeof b == "string")
                    return {
                        label: b,
                        value: b
                    };
                return a.extend({
                    label: b.label || b.value,
                    value: b.value || b.label
                }, b)
            })
        },
        _suggest: function(b) {
            var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(c, b), this.menu.deactivate(), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new a.Event("mouseover"))
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(b, c) {
            var d = this;
            a.each(c, function(a, c) {
                d._renderItem(b, c)
            })
        },
        _renderItem: function(b, c) {
            return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>").text(c.label)).appendTo(b)
        },
        _move: function(a, b) {
            if (!this.menu.element.is(":visible"))
                this.search(null, b);
            else {
                if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) {
                    this.element.val(this.term), this.menu.deactivate();
                    return
                }
                this.menu[a](b)
            }
        },
        widget: function() {
            return this.menu.element
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(b, c) {
            var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function(a) {
                return d.test(a.label || a.value || a)
            })
        }
    })
}(jQuery), function(a) {
    a.widget("ui.menu", {
        _create: function() {
            var b = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(c) {
                !a(c.target).closest(".ui-menu-item a").length || (c.preventDefault(), b.select(c))
            }), this.refresh()
        },
        refresh: function() {
            var b = this,
                c = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            c.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(c) {
                b.activate(c, a(this).parent())
            }).mouseleave(function() {
                b.deactivate()
            })
        },
        activate: function(a, b) {
            this.deactivate();
            if (this.hasScroll()) {
                var c = b.offset().top - this.element.offset().top,
                    d = this.element.scrollTop(),
                    e = this.element.height();
                c < 0 ? this.element.scrollTop(d + c) : c >= e && this.element.scrollTop(d + c - e + b.height())
            }
            this.active = b.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", a, {
                item: b
            })
        },
        deactivate: function() {
            !this.active || (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function(a) {
            this.move("next", ".ui-menu-item:first", a)
        },
        previous: function(a) {
            this.move("prev", ".ui-menu-item:last", a)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(a, b, c) {
            if (!this.active)
                this.activate(c, this.element.children(b));
            else {
                var d = this.active[a + "All"](".ui-menu-item").eq(0);
                d.length ? this.activate(c, d) : this.activate(c, this.element.children(b))
            }
        },
        nextPage: function(b) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) {
                    this.activate(b, this.element.children(".ui-menu-item:first"));
                    return
                }
                var c = this.active.offset().top,
                    d = this.element.height(),
                    e = this.element.children(".ui-menu-item").filter(function() {
                        var b = a(this).offset().top - c - d + a(this).height();
                        return b < 10 && b > -10
                    });
                e.length || (e = this.element.children(".ui-menu-item:last")), this.activate(b, e)
            } else
                this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function(b) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) {
                    this.activate(b, this.element.children(".ui-menu-item:last"));
                    return
                }
                var c = this.active.offset().top,
                    d = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function() {
                    var b = a(this).offset().top - c + d - a(this).height();
                    return b < 10 && b > -10
                }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(b, result)
            } else
                this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function(a) {
            this._trigger("selected", a, {
                item: this.active
            })
        }
    })
}(jQuery), function(a, b) {
    var c,
        d,
        e,
        f,
        g = "ui-button ui-widget ui-state-default ui-corner-all",
        h = "ui-state-hover ui-state-active ",
        i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        j = function() {
            var b = a(this).find(":ui-button");
            setTimeout(function() {
                b.button("refresh")
            }, 1)
        },
        k = function(b) {
            var c = b.name,
                d = b.form,
                e = a([]);
            c && (d ? e = a(d).find("[name='" + c + "']") : e = a("[name='" + c + "']", b.ownerDocument).filter(function() {
                return !this.form
            }));
            return e
        };
    a.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset.button").bind("reset.button", j), typeof this.options.disabled != "boolean" && (this.options.disabled = this.element.propAttr("disabled")), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var b = this,
                h = this.options,
                i = this.type === "checkbox" || this.type === "radio",
                l = "ui-state-hover" + (i ? "" : " ui-state-active"),
                m = "ui-state-focus";
            h.label === null && (h.label = this.buttonElement.html()), this.element.is(":disabled") && (h.disabled = !0), this.buttonElement.addClass(g).attr("role", "button").bind("mouseenter.button", function() {
                h.disabled || (a(this).addClass("ui-state-hover"), this === c && a(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function() {
                h.disabled || a(this).removeClass(l)
            }).bind("click.button", function(a) {
                h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
            }), this.element.bind("focus.button", function() {
                b.buttonElement.addClass(m)
            }).bind("blur.button", function() {
                b.buttonElement.removeClass(m)
            }), i && (this.element.bind("change.button", function() {
                f || b.refresh()
            }), this.buttonElement.bind("mousedown.button", function(a) {
                h.disabled || (f = !1, d = a.pageX, e = a.pageY)
            }).bind("mouseup.button", function(a) {
                !h.disabled && (d !== a.pageX || e !== a.pageY) && (f = !0)
            })), this.type === "checkbox" ? this.buttonElement.bind("click.button", function() {
                if (h.disabled || f)
                    return !1;
                a(this).toggleClass("ui-state-active"), b.buttonElement.attr("aria-pressed", b.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click.button", function() {
                if (h.disabled || f)
                    return !1;
                a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
                var c = b.element[0];
                k(c).not(c).map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown.button", function() {
                if (h.disabled)
                    return !1;
                a(this).addClass("ui-state-active"), c = this, a(document).one("mouseup", function() {
                    c = null
                })
            }).bind("mouseup.button", function() {
                if (h.disabled)
                    return !1;
                a(this).removeClass("ui-state-active")
            }).bind("keydown.button", function(b) {
                if (h.disabled)
                    return !1;
                (b.keyCode == a.ui.keyCode.SPACE || b.keyCode == a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active")
            }).bind("keyup.button", function() {
                a(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                b.keyCode === a.ui.keyCode.SPACE && a(this).click()
            })), this._setOption("disabled", h.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";
            if (this.type === "checkbox" || this.type === "radio") {
                var a = this.element.parents().filter(":last"),
                    b = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible");
                var c = this.element.is(":checked");
                c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", c)
            } else
                this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(g + " " + h + " " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), a.Widget.prototype.destroy.call(this)
        },
        _setOption: function(b, c) {
            a.Widget.prototype._setOption.apply(this, arguments);
            b === "disabled" ? c ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1) : this._resetButton()
        },
        refresh: function() {
            var b = this.element.is(":disabled");
            b !== this.options.disabled && this._setOption("disabled", b), this.type === "radio" ? k(this.element[0]).each(function() {
                a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input")
                this.options.label && this.element.val(this.options.label);
            else {
                var b = this.buttonElement.removeClass(i),
                    c = a("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                    d = this.options.icons,
                    e = d.primary && d.secondary,
                    f = [];
                d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", c))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
            }
        }
    }), a.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(b, c) {
            b === "disabled" && this.buttons.button("option", b, c), a.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function() {
            var b = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), a.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery), function($, undefined) {
    function isArray(a) {
        return a && ($.browser.safari && typeof a == "object" && a.length || a.constructor && a.constructor.toString().match(/\Array\(\)/))
    }
    function extendRemove(a, b) {
        $.extend(a, b);
        for (var c in b)
            if (b[c] == null || b[c] == undefined)
                a[c] = b[c];
        return a
    }
    function bindHover(a) {
        var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return a.bind("mouseout", function(a) {
            var c = $(a.target).closest(b);
            !c.length || c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function(c) {
            var d = $(c.target).closest(b);
            !$.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) && !!d.length && (d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d.addClass("ui-state-hover"), d.hasClass("ui-datepicker-prev") && d.addClass("ui-datepicker-prev-hover"), d.hasClass("ui-datepicker-next") && d.addClass("ui-datepicker-next-hover"))
        })
    }
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.8.17"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime(),
        instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            extendRemove(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = nodeName == "div" || nodeName == "span";
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function(a, b) {
            var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: c,
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: b,
                dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function(a, b) {
            var c = $(a);
            b.append = $([]), b.trigger = $([]);
            c.hasClass(this.markerClassName) || (this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(a, c, d) {
                b.settings[c] = d
            }).bind("getData.datepicker", function(a, c) {
                return this._get(b, c)
            }), this._autoSize(b), $.data(a, PROP_NAME, b), b.settings.disabled && this._disableDatepicker(a))
        },
        _attachments: function(a, b) {
            var c = this._get(b, "appendText"),
                d = this._get(b, "isRTL");
            b.append && b.append.remove(), c && (b.append = $('<span class="' + this._appendClass + '">' + c + "</span>"), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove();
            var e = this._get(b, "showOn");
            (e == "focus" || e == "both") && a.focus(this._showDatepicker);
            if (e == "button" || e == "both") {
                var f = this._get(b, "buttonText"),
                    g = this._get(b, "buttonImage");
                b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: g,
                    alt: f,
                    title: f
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(g == "" ? f : $("<img/>").attr({
                    src: g,
                    alt: f,
                    title: f
                }))), a[d ? "before" : "after"](b.trigger), b.trigger.click(function() {
                    $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0] ? $.datepicker._hideDatepicker() : $.datepicker._showDatepicker(a[0]);
                    return !1
                })
            }
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b = new Date(2009, 11, 20),
                    c = this._get(a, "dateFormat");
                if (c.match(/[DM]/)) {
                    var d = function(a) {
                        var b = 0,
                            c = 0;
                        for (var d = 0; d < a.length; d++)
                            a[d].length > b && (b = a[d].length, c = d);
                        return c
                    };
                    b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                }
                a.input.attr("size", this._formatDate(a, b).length)
            }
        },
        _inlineDatepicker: function(a, b) {
            var c = $(a);
            c.hasClass(this.markerClassName) || (c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function(a, c, d) {
                b.settings[c] = d
            }).bind("getData.datepicker", function(a, c) {
                return this._get(b, c)
            }), $.data(a, PROP_NAME, b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(a, b, c, d, e) {
            var f = this._dialogInst;
            if (!f) {
                this.uuid += 1;
                var g = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, $.data(this._dialogInput[0], PROP_NAME, f)
            }
            extendRemove(f.settings, d || {}), b = b && b.constructor == Date ? this._formatDate(f, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null;
            if (!this._pos) {
                var h = document.documentElement.clientWidth,
                    i = document.documentElement.clientHeight,
                    j = document.documentElement.scrollLeft || document.body.scrollLeft,
                    k = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [h / 2 - 100 + j, i / 2 - 150 + k]
            }
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, f);
            return this
        },
        _destroyDatepicker: function(a) {
            var b = $(a),
                c = $.data(a, PROP_NAME);
            if (!!b.hasClass(this.markerClassName)) {
                var d = a.nodeName.toLowerCase();
                $.removeData(a, PROP_NAME), d == "input" ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (d == "div" || d == "span") && b.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function(a) {
            var b = $(a),
                c = $.data(a, PROP_NAME);
            if (!!b.hasClass(this.markerClassName)) {
                var d = a.nodeName.toLowerCase();
                if (d == "input")
                    a.disabled = !1, c.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                else if (d == "div" || d == "span") {
                    var e = b.children("." + this._inlineClass);
                    e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function(b) {
                    return b == a ? null : b
                })
            }
        },
        _disableDatepicker: function(a) {
            var b = $(a),
                c = $.data(a, PROP_NAME);
            if (!!b.hasClass(this.markerClassName)) {
                var d = a.nodeName.toLowerCase();
                if (d == "input")
                    a.disabled = !0, c.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                else if (d == "div" || d == "span") {
                    var e = b.children("." + this._inlineClass);
                    e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function(b) {
                    return b == a ? null : b
                }), this._disabledInputs[this._disabledInputs.length] = a
            }
        },
        _isDisabledDatepicker: function(a) {
            if (!a)
                return !1;
            for (var b = 0; b < this._disabledInputs.length; b++)
                if (this._disabledInputs[b] == a)
                    return !0;
            return !1
        },
        _getInst: function(a) {
            try {
                return $.data(a, PROP_NAME)
            } catch (b) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(a, b, c) {
            var d = this._getInst(a);
            if (arguments.length == 2 && typeof b == "string")
                return b == "defaults" ? $.extend({}, $.datepicker._defaults) : d ? b == "all" ? $.extend({}, d.settings) : this._get(d, b) : null;
            var e = b || {};
            typeof b == "string" && (e = {}, e[b] = c);
            if (d) {
                this._curInst == d && this._hideDatepicker();
                var f = this._getDateDatepicker(a, !0),
                    g = this._getMinMaxDate(d, "min"),
                    h = this._getMinMaxDate(d, "max");
                extendRemove(d.settings, e), g !== null && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)), h !== null && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)), this._attachments($(a), d), this._autoSize(d), this._setDate(d, f), this._updateAlternate(d), this._updateDatepicker(d)
            }
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function(a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b)
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && !c.inline && this._setDateFromField(c, b);
            return c ? this._getDate(c) : null
        },
        _doKeyDown: function(a) {
            var b = $.datepicker._getInst(a.target),
                c = !0,
                d = b.dpDiv.is(".ui-datepicker-rtl");
            b._keyEvent = !0;
            if ($.datepicker._datepickerShowing)
                switch (a.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker(), c = !1;
                    break;
                case 13:
                    var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv);
                    e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]);
                    var f = $.datepicker._get(b, "onSelect");
                    if (f) {
                        var g = $.datepicker._formatDate(b);
                        f.apply(b.input ? b.input[0] : null, [g, b])
                    } else
                        $.datepicker._hideDatepicker();
                    return !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 35:
                    (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), c = a.ctrlKey || a.metaKey;
                    break;
                case 36:
                    (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), c = a.ctrlKey || a.metaKey;
                    break;
                case 37:
                    (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 38:
                    (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), c = a.ctrlKey || a.metaKey;
                    break;
                case 39:
                    (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 40:
                    (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), c = a.ctrlKey || a.metaKey;
                    break;
                default:
                    c = !1
                }
            else
                a.keyCode == 36 && a.ctrlKey ? $.datepicker._showDatepicker(this) : c = !1;
            c && (a.preventDefault(), a.stopPropagation())
        },
        _doKeyPress: function(a) {
            var b = $.datepicker._getInst(a.target);
            if ($.datepicker._get(b, "constrainInput")) {
                var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")),
                    d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode);
                return a.ctrlKey || a.metaKey || d < " " || !c || c.indexOf(d) > -1
            }
        },
        _doKeyUp: function(a) {
            var b = $.datepicker._getInst(a.target);
            if (b.input.val() != b.lastVal)
                try {
                    var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b));
                    c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b))
                } catch (a) {
                    $.datepicker.log(a)
                }
            return !0
        },
        _showDatepicker: function(a) {
            a = a.target || a, a.nodeName.toLowerCase() != "input" && (a = $("input", a.parentNode)[0]);
            if (!$.datepicker._isDisabledDatepicker(a) && $.datepicker._lastInput != a) {
                var b = $.datepicker._getInst(a);
                $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                var c = $.datepicker._get(b, "beforeShow"),
                    d = c ? c.apply(a, [a, b]) : {};
                if (d === !1)
                    return;
                extendRemove(b.settings, d), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight);
                var e = !1;
                $(a).parents().each(function() {
                    e |= $(this).css("position") == "fixed";
                    return !e
                }), e && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                var f = {
                    left: $.datepicker._pos[0],
                    top: $.datepicker._pos[1]
                };
                $.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), $.datepicker._updateDatepicker(b), f = $.datepicker._checkOffset(b, f, e), b.dpDiv.css({
                    position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute",
                    display: "none",
                    left: f.left + "px",
                    top: f.top + "px"
                });
                if (!b.inline) {
                    var g = $.datepicker._get(b, "showAnim"),
                        h = $.datepicker._get(b, "duration"),
                        i = function() {
                            var a = b.dpDiv.find("iframe.ui-datepicker-cover");
                            if (!!a.length) {
                                var c = $.datepicker._getBorders(b.dpDiv);
                                a.css({
                                    left: -c[0],
                                    top: -c[1],
                                    width: b.dpDiv.outerWidth(),
                                    height: b.dpDiv.outerHeight()
                                })
                            }
                        };
                    b.dpDiv.zIndex($(a).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[g] ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i), (!g || !h) && i(), b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(), $.datepicker._curInst = b
                }
            }
        },
        _updateDatepicker: function(a) {
            var b = this;
            b.maxRows = 4;
            var c = $.datepicker._getBorders(a.dpDiv);
            instActive = a, a.dpDiv.empty().append(this._generateHTML(a));
            var d = a.dpDiv.find("iframe.ui-datepicker-cover");
            !d.length || d.css({
                left: -c[0],
                top: -c[1],
                width: a.dpDiv.outerWidth(),
                height: a.dpDiv.outerHeight()
            }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var e = this._getNumberOfMonths(a),
                f = e[1],
                g = 17;
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", g * f + "em"), a.dpDiv[(e[0] != 1 || e[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();
            if (a.yearshtml) {
                var h = a.yearshtml;
                setTimeout(function() {
                    h === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), h = a.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function(a) {
            var b = function(a) {
                return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[a] || a
            };
            return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
        },
        _checkOffset: function(a, b, c) {
            var d = a.dpDiv.outerWidth(),
                e = a.dpDiv.outerHeight(),
                f = a.input ? a.input.outerWidth() : 0,
                g = a.input ? a.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + $(document).scrollLeft(),
                i = document.documentElement.clientHeight + $(document).scrollTop();
            b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0);
            return b
        },
        _findPos: function(a) {
            var b = this._getInst(a),
                c = this._get(b, "isRTL");
            while (a && (a.type == "hidden" || a.nodeType != 1 || $.expr.filters.hidden(a)))
                a = a[c ? "previousSibling" : "nextSibling"];
            var d = $(a).offset();
            return [d.left, d.top]
        },
        _hideDatepicker: function(a) {
            var b = this._curInst;
            if (!(!b || a && b != $.data(a, PROP_NAME)) && this._datepickerShowing) {
                var c = this._get(b, "showAnim"),
                    d = this._get(b, "duration"),
                    e = this,
                    f = function() {
                        $.datepicker._tidyDialog(b), e._curInst = null
                    };
                $.effects && $.effects[c] ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, f) : b.dpDiv[c == "slideDown" ? "slideUp" : c == "fadeIn" ? "fadeOut" : "hide"](c ? d : null, f), c || f(), this._datepickerShowing = !1;
                var g = this._get(b, "onClose");
                g && g.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(a) {
            if (!!$.datepicker._curInst) {
                var b = $(a.target),
                    c = $.datepicker._getInst(b[0]);
                (b[0].id != $.datepicker._mainDivId && b.parents("#" + $.datepicker._mainDivId).length == 0 && !b.hasClass($.datepicker.markerClassName) && !b.hasClass($.datepicker._triggerClass) && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c) && $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(a, b, c) {
            var d = $(a),
                e = this._getInst(d[0]);
            this._isDisabledDatepicker(d[0]) || (this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e))
        },
        _gotoToday: function(a) {
            var b = $(a),
                c = this._getInst(b[0]);
            if (this._get(c, "gotoCurrent") && c.currentDay)
                c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear;
            else {
                var d = new Date;
                c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear()
            }
            this._notifyChange(c), this._adjustDate(b)
        },
        _selectMonthYear: function(a, b, c) {
            var d = $(a),
                e = this._getInst(d[0]);
            e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d)
        },
        _selectDay: function(a, b, c, d) {
            var e = $(a);
            if (!$(d).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(e[0])) {
                var f = this._getInst(e[0]);
                f.selectedDay = f.currentDay = $("a", d).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
            }
        },
        _clearDate: function(a) {
            var b = $(a),
                c = this._getInst(b[0]);
            this._selectDate(b, "")
        },
        _selectDate: function(a, b) {
            var c = $(a),
                d = this._getInst(c[0]);
            b = b != null ? b : this._formatDate(d), d.input && d.input.val(b), this._updateAlternate(d);
            var e = this._get(d, "onSelect");
            e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"), d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], typeof d.input[0] != "object" && d.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(a) {
            var b = this._get(a, "altField");
            if (b) {
                var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
                    d = this._getDate(a),
                    e = this.formatDate(c, d, this._getFormatConfig(a));
                $(b).each(function() {
                    $(this).val(e)
                })
            }
        },
        noWeekends: function(a) {
            var b = a.getDay();
            return [b > 0 && b < 6, ""]
        },
        iso8601Week: function(a) {
            var b = new Date(a.getTime());
            b.setDate(b.getDate() + 4 - (b.getDay() || 7));
            var c = b.getTime();
            b.setMonth(0), b.setDate(1);
            return Math.floor(Math.round((c - b) / 864e5) / 7) + 1
        },
        parseDate: function(a, b, c) {
            if (a == null || b == null)
                throw "Invalid arguments";
            b = typeof b == "object" ? b.toString() : b + "";
            if (b == "")
                return null;
            var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            d = typeof d != "string" ? d : (new Date).getFullYear() % 100 + parseInt(d, 10);
            var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                f = (c ? c.dayNames : null) || this._defaults.dayNames,
                g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                h = (c ? c.monthNames : null) || this._defaults.monthNames,
                i = -1,
                j = -1,
                k = -1,
                l = -1,
                m = !1,
                n = function(b) {
                    var c = s + 1 < a.length && a.charAt(s + 1) == b;
                    c && s++;
                    return c
                },
                o = function(a) {
                    var c = n(a),
                        d = a == "@" ? 14 : a == "!" ? 20 : a == "y" && c ? 4 : a == "o" ? 3 : 2,
                        e = new RegExp("^\\d{1," + d + "}"),
                        f = b.substring(r).match(e);
                    if (!f)
                        throw "Missing number at position " + r;
                    r += f[0].length;
                    return parseInt(f[0], 10)
                },
                p = function(a, c, d) {
                    var e = $.map(n(a) ? d : c, function(a, b) {
                            return [[b, a]]
                        }).sort(function(a, b) {
                            return -(a[1].length - b[1].length)
                        }),
                        f = -1;
                    $.each(e, function(a, c) {
                        var d = c[1];
                        if (b.substr(r, d.length).toLowerCase() == d.toLowerCase()) {
                            f = c[0], r += d.length;
                            return !1
                        }
                    });
                    if (f != -1)
                        return f + 1;
                    throw "Unknown name at position " + r
                },
                q = function() {
                    if (b.charAt(r) != a.charAt(s))
                        throw "Unexpected literal at position " + r;
                    r++
                },
                r = 0;
            for (var s = 0; s < a.length; s++)
                if (m)
                    a.charAt(s) == "'" && !n("'") ? m = !1 : q();
                else
                    switch (a.charAt(s)) {
                    case "d":
                        k = o("d");
                        break;
                    case "D":
                        p("D", e, f);
                        break;
                    case "o":
                        l = o("o");
                        break;
                    case "m":
                        j = o("m");
                        break;
                    case "M":
                        j = p("M", g, h);
                        break;
                    case "y":
                        i = o("y");
                        break;
                    case "@":
                        var t = new Date(o("@"));
                        i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                        break;
                    case "!":
                        var t = new Date((o("!") - this._ticksTo1970) / 1e4);
                        i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                        break;
                    case "'":
                        n("'") ? q() : m = !0;
                        break;
                    default:
                        q()
                    }
            if (r < b.length)
                throw "Extra/unparsed characters found in date: " + b.substring(r);
            i == -1 ? i = (new Date).getFullYear() : i < 100 && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (i <= d ? 0 : -100));
            if (l > -1) {
                j = 1, k = l;
                for (;;) {
                    var u = this._getDaysInMonth(i, j - 1);
                    if (k <= u)
                        break;
                    j++, k -= u
                }
            }
            var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
            if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k)
                throw "Invalid date";
            return t
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function(a, b, c) {
            if (!b)
                return "";
            var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                e = (c ? c.dayNames : null) || this._defaults.dayNames,
                f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                g = (c ? c.monthNames : null) || this._defaults.monthNames,
                h = function(b) {
                    var c = m + 1 < a.length && a.charAt(m + 1) == b;
                    c && m++;
                    return c
                },
                i = function(a, b, c) {
                    var d = "" + b;
                    if (h(a))
                        while (d.length < c)
                            d = "0" + d;
                    return d
                },
                j = function(a, b, c, d) {
                    return h(a) ? d[b] : c[b]
                },
                k = "",
                l = !1;
            if (b)
                for (var m = 0; m < a.length; m++)
                    if (l)
                        a.charAt(m) == "'" && !h("'") ? l = !1 : k += a.charAt(m);
                    else
                        switch (a.charAt(m)) {
                        case "d":
                            k += i("d", b.getDate(), 2);
                            break;
                        case "D":
                            k += j("D", b.getDay(), d, e);
                            break;
                        case "o":
                            k += i("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            k += i("m", b.getMonth() + 1, 2);
                            break;
                        case "M":
                            k += j("M", b.getMonth(), f, g);
                            break;
                        case "y":
                            k += h("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                            break;
                        case "@":
                            k += b.getTime();
                            break;
                        case "!":
                            k += b.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? k += "'" : l = !0;
                            break;
                        default:
                            k += a.charAt(m)
                        }
            return k
        },
        _possibleChars: function(a) {
            var b = "",
                c = !1,
                d = function(b) {
                    var c = e + 1 < a.length && a.charAt(e + 1) == b;
                    c && e++;
                    return c
                };
            for (var e = 0; e < a.length; e++)
                if (c)
                    a.charAt(e) == "'" && !d("'") ? c = !1 : b += a.charAt(e);
                else
                    switch (a.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        b += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        d("'") ? b += "'" : c = !0;
                        break;
                    default:
                        b += a.charAt(e)
                    }
            return b
        },
        _get: function(a, b) {
            return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b]
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() != a.lastVal) {
                var c = this._get(a, "dateFormat"),
                    d = a.lastVal = a.input ? a.input.val() : null,
                    e,
                    f;
                e = f = this._getDefaultDate(a);
                var g = this._getFormatConfig(a);
                try {
                    e = this.parseDate(c, d, g) || f
                } catch (h) {
                    this.log(h), d = b ? "" : d
                }
                a.selectedDay = e.getDate(), a.drawMonth = a.selectedMonth = e.getMonth(), a.drawYear = a.selectedYear = e.getFullYear(), a.currentDay = d ? e.getDate() : 0, a.currentMonth = d ? e.getMonth() : 0, a.currentYear = d ? e.getFullYear() : 0, this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(a, b, c) {
            var d = function(a) {
                    var b = new Date;
                    b.setDate(b.getDate() + a);
                    return b
                },
                e = function(b) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a))
                    } catch (c) {}
                    var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date,
                        e = d.getFullYear(),
                        f = d.getMonth(),
                        g = d.getDate(),
                        h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        i = h.exec(b);
                    while (i) {
                        switch (i[2] || "d") {
                        case "d":
                        case "D":
                            g += parseInt(i[1], 10);
                            break;
                        case "w":
                        case "W":
                            g += parseInt(i[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
                            break;
                        case "y":
                        case "Y":
                            e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f))
                        }
                        i = h.exec(b)
                    }
                    return new Date(e, f, g)
                },
                f = b == null || b === "" ? c : typeof b == "string" ? e(b) : typeof b == "number" ? isNaN(b) ? c : d(b) : new Date(b.getTime());
            f = f && f.toString() == "Invalid Date" ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0));
            return this._daylightSavingAdjust(f)
        },
        _daylightSavingAdjust: function(a) {
            if (!a)
                return null;
            a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function(a, b, c) {
            var d = !b,
                e = a.selectedMonth,
                f = a.selectedYear,
                g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), (e != a.selectedMonth || f != a.selectedYear) && !c && this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
        },
        _getDate: function(a) {
            var b = !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b
        },
        _generateHTML: function(a) {
            var b = new Date;
            b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
            var c = this._get(a, "isRTL"),
                d = this._get(a, "showButtonPanel"),
                e = this._get(a, "hideIfNoPrevNext"),
                f = this._get(a, "navigationAsDateFormat"),
                g = this._getNumberOfMonths(a),
                h = this._get(a, "showCurrentAtPos"),
                i = this._get(a, "stepMonths"),
                j = g[0] != 1 || g[1] != 1,
                k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                l = this._getMinMaxDate(a, "min"),
                m = this._getMinMaxDate(a, "max"),
                n = a.drawMonth - h,
                o = a.drawYear;
            n < 0 && (n += 12, o--);
            if (m) {
                var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate()));
                p = l && p < l ? l : p;
                while (this._daylightSavingAdjust(new Date(o, n, 1)) > p)
                    n--, n < 0 && (n = 11, o--)
            }
            a.drawMonth = n, a.drawYear = o;
            var q = this._get(a, "prevText");
            q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q;
            var r = this._canAdjustMonth(a, -1, o, n) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + a.id + "', -" + i + ", 'M');\"" + ' title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>" : e ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>",
                s = this._get(a, "nextText");
            s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s;
            var t = this._canAdjustMonth(a, 1, o, n) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + a.id + "', +" + i + ", 'M');\"" + ' title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : e ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>",
                u = this._get(a, "currentText"),
                v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;
            u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
            var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(a, "closeText") + "</button>",
                x = d ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? w : "") + (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + a.id + "');\"" + ">" + u + "</button>" : "") + (c ? "" : w) + "</div>" : "",
                y = parseInt(this._get(a, "firstDay"), 10);
            y = isNaN(y) ? 0 : y;
            var z = this._get(a, "showWeek"),
                A = this._get(a, "dayNames"),
                B = this._get(a, "dayNamesShort"),
                C = this._get(a, "dayNamesMin"),
                D = this._get(a, "monthNames"),
                E = this._get(a, "monthNamesShort"),
                F = this._get(a, "beforeShowDay"),
                G = this._get(a, "showOtherMonths"),
                H = this._get(a, "selectOtherMonths"),
                I = this._get(a, "calculateWeek") || this.iso8601Week,
                J = this._getDefaultDate(a),
                K = "";
            for (var L = 0; L < g[0]; L++) {
                var M = "";
                this.maxRows = 4;
                for (var N = 0; N < g[1]; N++) {
                    var O = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
                        P = " ui-corner-all",
                        Q = "";
                    if (j) {
                        Q += '<div class="ui-datepicker-group';
                        if (g[1] > 1)
                            switch (N) {
                            case 0:
                                Q += " ui-datepicker-group-first", P = " ui-corner-" + (c ? "right" : "left");
                                break;
                            case g[1] - 1:
                                Q += " ui-datepicker-group-last", P = " ui-corner-" + (c ? "left" : "right");
                                break;
                            default:
                                Q += " ui-datepicker-group-middle", P = ""
                            }
                        Q += '">'
                    }
                    Q += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + P + '">' + (/all|left/.test(P) && L == 0 ? c ? t : r : "") + (/all|right/.test(P) && L == 0 ? c ? r : t : "") + this._generateMonthYearHeader(a, n, o, l, m, L > 0 || N > 0, D, E) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                    var R = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";
                    for (var S = 0; S < 7; S++) {
                        var T = (S + y) % 7;
                        R += "<th" + ((S + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + A[T] + '">' + C[T] + "</span></th>"
                    }
                    Q += R + "</tr></thead><tbody>";
                    var U = this._getDaysInMonth(o, n);
                    o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, U));
                    var V = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
                        W = Math.ceil((V + U) / 7),
                        X = j ? this.maxRows > W ? this.maxRows : W : W;
                    this.maxRows = X;
                    var Y = this._daylightSavingAdjust(new Date(o, n, 1 - V));
                    for (var Z = 0; Z < X; Z++) {
                        Q += "<tr>";
                        var _ = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(Y) + "</td>" : "";
                        for (var S = 0; S < 7; S++) {
                            var ba = F ? F.apply(a.input ? a.input[0] : null, [Y]) : [!0, ""],
                                bb = Y.getMonth() != n,
                                bc = bb && !H || !ba[0] || l && Y < l || m && Y > m;
                            _ += '<td class="' + ((S + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (bb ? " ui-datepicker-other-month" : "") + (Y.getTime() == O.getTime() && n == a.selectedMonth && a._keyEvent || J.getTime() == Y.getTime() && J.getTime() == O.getTime() ? " " + this._dayOverClass : "") + (bc ? " " + this._unselectableClass + " ui-state-disabled" : "") + (bb && !G ? "" : " " + ba[1] + (Y.getTime() == k.getTime() ? " " + this._currentClass : "") + (Y.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!bb || G) && ba[2] ? ' title="' + ba[2] + '"' : "") + (bc ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + a.id + "'," + Y.getMonth() + "," + Y.getFullYear() + ', this);return false;"') + ">" + (bb && !G ? "&#xa0;" : bc ? '<span class="ui-state-default">' + Y.getDate() + "</span>" : '<a class="ui-state-default' + (Y.getTime() == b.getTime() ? " ui-state-highlight" : "") + (Y.getTime() == k.getTime() ? " ui-state-active" : "") + (bb ? " ui-priority-secondary" : "") + '" href="#">' + Y.getDate() + "</a>") + "</td>", Y.setDate(Y.getDate() + 1), Y = this._daylightSavingAdjust(Y)
                        }
                        Q += _ + "</tr>"
                    }
                    n++, n > 11 && (n = 0, o++), Q += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && N == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), M += Q
                }
                K += M
            }
            K += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1;
            return K
        },
        _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
            var i = this._get(a, "changeMonth"),
                j = this._get(a, "changeYear"),
                k = this._get(a, "showMonthAfterYear"),
                l = '<div class="ui-datepicker-title">',
                m = "";
            if (f || !i)
                m += '<span class="ui-datepicker-month">' + g[b] + "</span>";
            else {
                var n = d && d.getFullYear() == c,
                    o = e && e.getFullYear() == c;
                m += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" " + ">";
                for (var p = 0; p < 12; p++)
                    (!n || p >= d.getMonth()) && (!o || p <= e.getMonth()) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>");
                m += "</select>"
            }
            k || (l += m + (f || !i || !j ? "&#xa0;" : ""));
            if (!a.yearshtml) {
                a.yearshtml = "";
                if (f || !j)
                    l += '<span class="ui-datepicker-year">' + c + "</span>";
                else {
                    var q = this._get(a, "yearRange").split(":"),
                        r = (new Date).getFullYear(),
                        s = function(a) {
                            var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10);
                            return isNaN(b) ? r : b
                        },
                        t = s(q[0]),
                        u = Math.max(t, s(q[1] || ""));
                    t = d ? Math.max(t, d.getFullYear()) : t, u = e ? Math.min(u, e.getFullYear()) : u, a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" " + ">";
                    for (; t <= u; t++)
                        a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>";
                    a.yearshtml += "</select>", l += a.yearshtml, a.yearshtml = null
                }
            }
            l += this._get(a, "yearSuffix"), k && (l += (f || !i || !j ? "&#xa0;" : "") + m), l += "</div>";
            return l
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.drawYear + (c == "Y" ? b : 0),
                e = a.drawMonth + (c == "M" ? b : 0),
                f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + (c == "D" ? b : 0),
                g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), (c == "M" || c == "Y") && this._notifyChange(a)
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"),
                d = this._getMinMaxDate(a, "max"),
                e = c && b < c ? c : b;
            e = d && e > d ? d : e;
            return e
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
            var b = this._get(a, "numberOfMonths");
            return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function(a, b) {
            return (new Date(a, b, 1)).getDay()
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a),
                f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
            b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth()));
            return this._isInRange(a, f)
        },
        _isInRange: function(a, b) {
            var c = this._getMinMaxDate(a, "min"),
                d = this._getMinMaxDate(a, "max");
            return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime())
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
            return {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function(a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date
            (a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
        }
    }), $.fn.datepicker = function(a) {
        if (!this.length)
            return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var b = Array.prototype.slice.call(arguments, 1);
        if (typeof a == "string" && (a == "isDisabled" || a == "getDate" || a == "widget"))
            return $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b));
        if (a == "option" && arguments.length == 2 && typeof arguments[1] == "string")
            return $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b));
        return this.each(function() {
            typeof a == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a)
        })
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.17", window["DP_jQuery_" + dpuuid] = $
}(jQuery), function(a, b) {
    var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        d = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        e = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        f = a.attrFn || {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
            click: !0
        };
    a.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(b) {
                    var c = a(this).css(b).offset().top;
                    c < 0 && a(this).css("top", b.top - c)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var b = this,
                d = b.options,
                e = d.title || "&#160;",
                f = a.ui.dialog.getTitleId(b.element),
                g = (b.uiDialog = a("<div></div>")).appendTo(document.body).hide().addClass(c + d.dialogClass).css({
                    zIndex: d.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function(c) {
                    d.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": f
                }).mousedown(function(a) {
                    b.moveToTop(!1, a)
                }),
                h = b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),
                i = (b.uiDialogTitlebar = a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
                j = a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                    j.addClass("ui-state-hover")
                }, function() {
                    j.removeClass("ui-state-hover")
                }).focus(function() {
                    j.addClass("ui-state-focus")
                }).blur(function() {
                    j.removeClass("ui-state-focus")
                }).click(function(a) {
                    b.close(a);
                    return !1
                }).appendTo(i),
                k = (b.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),
                l = a("<span></span>").addClass("ui-dialog-title").attr("id", f).html(e).prependTo(i);
            a.isFunction(d.beforeclose) && !a.isFunction(d.beforeClose) && (d.beforeClose = d.beforeclose), i.find("*").add(i).disableSelection(), d.draggable && a.fn.draggable && b._makeDraggable(), d.resizable && a.fn.resizable && b._makeResizable(), b._createButtons(d.buttons), b._isOpen = !1, a.fn.bgiframe && g.bgiframe()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var a = this;
            a.overlay && a.overlay.destroy(), a.uiDialog.hide(), a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), a.uiDialog.remove(), a.originalTitle && a.element.attr("title", a.originalTitle);
            return a
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(b) {
            var c = this,
                d,
                e;
            if (!1 !== c._trigger("beforeClose", b)) {
                c.overlay && c.overlay.destroy(), c.uiDialog.unbind("keypress.ui-dialog"), c._isOpen = !1, c.options.hide ? c.uiDialog.hide(c.options.hide, function() {
                    c._trigger("close", b)
                }) : (c.uiDialog.hide(), c._trigger("close", b)), a.ui.dialog.overlay.resize(), c.options.modal && (d = 0, a(".ui-dialog").each(function() {
                    this !== c.uiDialog[0] && (e = a(this).css("z-index"), isNaN(e) || (d = Math.max(d, e)))
                }), a.ui.dialog.maxZ = d);
                return c
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(b, c) {
            var d = this,
                e = d.options,
                f;
            if (e.modal && !b || !e.stack && !e.modal)
                return d._trigger("focus", c);
            e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex), d.overlay && (a.ui.dialog.maxZ += 1, d.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)), f = {
                scrollTop: d.element.scrollTop(),
                scrollLeft: d.element.scrollLeft()
            }, a.ui.dialog.maxZ += 1, d.uiDialog.css("z-index", a.ui.dialog.maxZ), d.element.attr(f), d._trigger("focus", c);
            return d
        },
        open: function() {
            if (!this._isOpen) {
                var b = this,
                    c = b.options,
                    d = b.uiDialog;
                b.overlay = c.modal ? new a.ui.dialog.overlay(b) : null, b._size(), b._position(c.position), d.show(c.show), b.moveToTop(!0), c.modal && d.bind("keydown.ui-dialog", function(b) {
                    if (b.keyCode === a.ui.keyCode.TAB) {
                        var c = a(":tabbable", this),
                            d = c.filter(":first"),
                            e = c.filter(":last");
                        if (b.target === e[0] && !b.shiftKey) {
                            d.focus(1);
                            return !1
                        }
                        if (b.target === d[0] && b.shiftKey) {
                            e.focus(1);
                            return !1
                        }
                    }
                }), a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(), b._isOpen = !0, b._trigger("open");
                return b
            }
        },
        _createButtons: function(b) {
            var c = this,
                d = !1,
                e = a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                g = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
            c.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof b == "object" && b !== null && a.each(b, function() {
                return !(d = !0)
            }), d && (a.each(b, function(b, d) {
                d = a.isFunction(d) ? {
                    click: d,
                    text: b
                } : d;
                var e = a('<button type="button"></button>').click(function() {
                    d.click.apply(c.element[0], arguments)
                }).appendTo(g);
                a.each(d, function(a, b) {
                    a !== "click" && (a in f ? e[a](b) : e.attr(a, b))
                }), a.fn.button && e.button()
            }), e.appendTo(c.uiDialog))
        },
        _makeDraggable: function() {
            function f(a) {
                return {
                    position: a.position,
                    offset: a.offset
                }
            }
            var b = this,
                c = b.options,
                d = a(document),
                e;
            b.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(d, g) {
                    e = c.height === "auto" ? "auto" : a(this).height(), a(this).height(a(this).height()).addClass("ui-dialog-dragging"), b._trigger("dragStart", d, f(g))
                },
                drag: function(a, c) {
                    b._trigger("drag", a, f(c))
                },
                stop: function(g, h) {
                    c.position = [h.position.left - d.scrollLeft(), h.position.top - d.scrollTop()], a(this).removeClass("ui-dialog-dragging").height(e), b._trigger("dragStop", g, f(h)), a.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(c) {
            function h(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                }
            }
            c = c === b ? this.options.resizable : c;
            var d = this,
                e = d.options,
                f = d.uiDialog.css("position"),
                g = typeof c == "string" ? c : "n,e,s,w,se,sw,ne,nw";
            d.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: d.element,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                minWidth: e.minWidth,
                minHeight: d._minHeight(),
                handles: g,
                start: function(b, c) {
                    a(this).addClass("ui-dialog-resizing"), d._trigger("resizeStart", b, h(c))
                },
                resize: function(a, b) {
                    d._trigger("resize", a, h(b))
                },
                stop: function(b, c) {
                    a(this).removeClass("ui-dialog-resizing"), e.height = a(this).height(), e.width = a(this).width(), d._trigger("resizeStop", b, h(c)), a.ui.dialog.overlay.resize()
                }
            }).css("position", f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var a = this.options;
            return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function(b) {
            var c = [],
                d = [0, 0],
                e;
            if (b) {
                if (typeof b == "string" || typeof b == "object" && "0" in b)
                    c = b.split ? b.split(" ") : [b[0], b[1]], c.length === 1 && (c[1] = c[0]), a.each(["left", "top"], function(a, b) {
                        +c[a] === c[a] && (d[a] = c[a], c[a] = b)
                    }), b = {
                        my: c.join(" "),
                        at: c.join(" "),
                        offset: d.join(" ")
                    };
                b = a.extend({}, a.ui.dialog.prototype.options.position, b)
            } else
                b = a.ui.dialog.prototype.options.position;
            e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(a.extend({
                of: window
            }, b)), e || this.uiDialog.hide()
        },
        _setOptions: function(b) {
            var c = this,
                f = {},
                g = !1;
            a.each(b, function(a, b) {
                c._setOption(a, b), a in d && (g = !0), a in e && (f[a] = b)
            }), g && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f)
        },
        _setOption: function(b, d) {
            var e = this,
                f = e.uiDialog;
            switch (b) {
            case "beforeclose":
                b = "beforeClose";
                break;
            case "buttons":
                e._createButtons(d);
                break;
            case "closeText":
                e.uiDialogTitlebarCloseText.text("" + d);
                break;
            case "dialogClass":
                f.removeClass(e.options.dialogClass).addClass(c + d);
                break;
            case "disabled":
                d ? f.addClass("ui-dialog-disabled") : f.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                var g = f.is(":data(draggable)");
                g && !d && f.draggable("destroy"), !g && d && e._makeDraggable();
                break;
            case "position":
                e._position(d);
                break;
            case "resizable":
                var h = f.is(":data(resizable)");
                h && !d && f.resizable("destroy"), h && typeof d == "string" && f.resizable("option", "handles", d), !h && d !== !1 && e._makeResizable(d);
                break;
            case "title":
                a(".ui-dialog-title", e.uiDialogTitlebar).html("" + (d || "&#160;"))
            }
            a.Widget.prototype._setOption.apply(e, arguments)
        },
        _size: function() {
            var b = this.options,
                c,
                d,
                e = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), b.minWidth > b.width && (b.width = b.minWidth), c = this.uiDialog.css({
                height: "auto",
                width: b.width
            }).height(), d = Math.max(0, b.minHeight - c);
            if (b.height === "auto")
                if (a.support.minHeight)
                    this.element.css({
                        minHeight: d,
                        height: "auto"
                    });
                else {
                    this.uiDialog.show();
                    var f = this.element.css("height", "auto").height();
                    e || this.uiDialog.hide(), this.element.height(Math.max(f, d))
                }
            else
                this.element.height(Math.max(b.height - c, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), a.extend(a.ui.dialog, {
        version: "1.8.17",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(a) {
            var b = a.attr("id");
            b || (this.uuid += 1, b = this.uuid);
            return "ui-dialog-title-" + b
        },
        overlay: function(b) {
            this.$el = a.ui.dialog.overlay.create(b)
        }
    }), a.extend(a.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(a) {
            return a + ".dialog-overlay"
        }).join(" "),
        create: function(b) {
            this.instances.length === 0 && (setTimeout(function() {
                a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function(b) {
                    if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ)
                        return !1
                })
            }, 1), a(document).bind("keydown.dialog-overlay", function(c) {
                b.options.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault())
            }), a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize));
            var c = (this.oldInstances.pop() || a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            a.fn.bgiframe && c.bgiframe(), this.instances.push(c);
            return c
        },
        destroy: function(b) {
            var c = a.inArray(b, this.instances);
            c != -1 && this.oldInstances.push(this.instances.splice(c, 1)[0]), this.instances.length === 0 && a([document, window]).unbind(".dialog-overlay"), b.remove();
            var d = 0;
            a.each(this.instances, function() {
                d = Math.max(d, this.css("z-index"))
            }), this.maxZ = d
        },
        height: function() {
            var b,
                c;
            if (a.browser.msie && a.browser.version < 7) {
                b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                return b < c ? a(window).height() + "px" : b + "px"
            }
            return a(document).height() + "px"
        },
        width: function() {
            var b,
                c;
            if (a.browser.msie) {
                b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                return b < c ? a(window).width() + "px" : b + "px"
            }
            return a(document).width() + "px"
        },
        resize: function() {
            var b = a([]);
            a.each(a.ui.dialog.overlay.instances, function() {
                b = b.add(this)
            }), b.css({
                width: 0,
                height: 0
            }).css({
                width: a.ui.dialog.overlay.width(),
                height: a.ui.dialog.overlay.height()
            })
        }
    }), a.extend(a.ui.dialog.overlay.prototype, {
        destroy: function() {
            a.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery), function(a, b) {
    a.ui = a.ui || {};
    var c = /left|center|right/,
        d = /top|center|bottom/,
        e = "center",
        f = {},
        g = a.fn.position,
        h = a.fn.offset;
    a.fn.position = function(b) {
        if (!b || !b.of)
            return g.apply(this, arguments);
        b = a.extend({}, b);
        var h = a(b.of),
            i = h[0],
            j = (b.collision || "flip").split(" "),
            k = b.offset ? b.offset.split(" ") : [0, 0],
            l,
            m,
            n;
        i.nodeType === 9 ? (l = h.width(), m = h.height(), n = {
            top: 0,
            left: 0
        }) : i.setTimeout ? (l = h.width(), m = h.height(), n = {
            top: h.scrollTop(),
            left: h.scrollLeft()
        }) : i.preventDefault ? (b.at = "left top", l = m = 0, n = {
            top: b.of.pageY,
            left: b.of.pageX
        }) : (l = h.outerWidth(), m = h.outerHeight(), n = h.offset()), a.each(["my", "at"], function() {
            var a = (b[this] || "").split(" ");
            a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), a[0] = c.test(a[0]) ? a[0] : e, a[1] = d.test(a[1]) ? a[1] : e, b[this] = a
        }), j.length === 1 && (j[1] = j[0]), k[0] = parseInt(k[0], 10) || 0, k.length === 1 && (k[1] = k[0]), k[1] = parseInt(k[1], 10) || 0, b.at[0] === "right" ? n.left += l : b.at[0] === e && (n.left += l / 2), b.at[1] === "bottom" ? n.top += m : b.at[1] === e && (n.top += m / 2), n.left += k[0], n.top += k[1];
        return this.each(function() {
            var c = a(this),
                d = c.outerWidth(),
                g = c.outerHeight(),
                h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
                i = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
                o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
                p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
                q = a.extend({}, n),
                r;
            b.my[0] === "right" ? q.left -= d : b.my[0] === e && (q.left -= d / 2), b.my[1] === "bottom" ? q.top -= g : b.my[1] === e && (q.top -= g / 2), f.fractions || (q.left = Math.round(q.left), q.top = Math.round(q.top)), r = {
                left: q.left - h,
                top: q.top - i
            }, a.each(["left", "top"], function(c, e) {
                a.ui.position[j[c]] && a.ui.position[j[c]][e](q, {
                    targetWidth: l,
                    targetHeight: m,
                    elemWidth: d,
                    elemHeight: g,
                    collisionPosition: r,
                    collisionWidth: o,
                    collisionHeight: p,
                    offset: k,
                    my: b.my,
                    at: b.at
                })
            }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(q, {
                using: b.using
            }))
        })
    }, a.ui.position = {
        fit: {
            left: function(b, c) {
                var d = a(window),
                    e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
                b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left)
            },
            top: function(b, c) {
                var d = a(window),
                    e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
                b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top)
            }
        },
        flip: {
            left: function(b, c) {
                if (c.at[0] !== e) {
                    var d = a(window),
                        f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(),
                        g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0,
                        h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
                        i = -2 * c.offset[0];
                    b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0
                }
            },
            top: function(b, c) {
                if (c.at[1] !== e) {
                    var d = a(window),
                        f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(),
                        g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0,
                        h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
                        i = -2 * c.offset[1];
                    b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0
                }
            }
        }
    }, a.offset.setOffset || (a.offset.setOffset = function(b, c) {
        /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
        var d = a(b),
            e = d.offset(),
            f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
            g = parseInt(a.curCSS(b, "left", !0), 10) || 0,
            h = {
                top: c.top - e.top + f,
                left: c.left - e.left + g
            };
        "using" in c ? c.using.call(b, h) : d.css(h)
    }, a.fn.offset = function(b) {
        var c = this[0];
        if (!c || !c.ownerDocument)
            return null;
        if (b)
            return this.each(function() {
                a.offset.setOffset(this, b)
            });
        return h.call(this)
    }), function() {
        var b = document.getElementsByTagName("body")[0],
            c = document.createElement("div"),
            d,
            e,
            g,
            h,
            i;
        d = document.createElement(b ? "div" : "body"), g = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, b && jQuery.extend(g, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (var j in g)
            d.style[j] = g[j];
        d.appendChild(c), e = b || document.documentElement, e.insertBefore(d, e.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a(c).offset(function(a, b) {
            return b
        }).offset(), d.innerHTML = "", e.removeChild(d), i = h.top + h.left + (b ? 2e3 : 0), f.fractions = i > 21 && i < 22
    }()
}(jQuery), function(a, b) {
    a.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), a.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function(a) {
            if (a === b)
                return this._value();
            this._setOption("value", a);
            return this
        },
        _setOption: function(b, c) {
            b === "value" && (this.options.value = c, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), a.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function() {
            var a = this.options.value;
            typeof a != "number" && (a = 0);
            return Math.min(this.options.max, Math.max(this.min, a))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var a = this.value(),
                b = this._percentage();
            this.oldValue !== a && (this.oldValue = a, this._trigger("change")), this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(b.toFixed(0) + "%"), this.element.attr("aria-valuenow", a)
        }
    }), a.extend(a.ui.progressbar, {
        version: "1.8.17"
    })
}(jQuery), function(a, b) {
    var c = 5;
    a.widget("ui.slider", a.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var b = this,
                d = this.options,
                e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                g = d.values && d.values.length || 1,
                h = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (d.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a([]), d.range && (d.range === !0 && (d.values || (d.values = [this._valueMin(), this._valueMin()]), d.values.length && d.values.length !== 2 && (d.values = [d.values[0], d.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (d.range === "min" || d.range === "max" ? " ui-slider-range-" + d.range : "")));
            for (var i = e.length; i < g; i += 1)
                h.push(f);
            this.handles = e.add(a(h.join("")).appendTo(b.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(a) {
                a.preventDefault()
            }).hover(function() {
                d.disabled || a(this).addClass("ui-state-hover")
            }, function() {
                a(this).removeClass("ui-state-hover")
            }).focus(function() {
                d.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"))
            }).blur(function() {
                a(this).removeClass("ui-state-focus")
            }), this.handles.each(function(b) {
                a(this).data("index.ui-slider-handle", b)
            }), this.handles.keydown(function(d) {
                var e = !0,
                    f = a(this).data("index.ui-slider-handle"),
                    g,
                    h,
                    i,
                    j;
                if (!b.options.disabled) {
                    switch (d.keyCode) {
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        e = !1;
                        if (!b._keySliding) {
                            b._keySliding = !0, a(this).addClass("ui-state-active"), g = b._start(d, f);
                            if (g === !1)
                                return
                        }
                    }
                    j = b.options.step, b.options.values && b.options.values.length ? h = i = b.values(f) : h = i = b.value();
                    switch (d.keyCode) {
                    case a.ui.keyCode.HOME:
                        i = b._valueMin();
                        break;
                    case a.ui.keyCode.END:
                        i = b._valueMax();
                        break;
                    case a.ui.keyCode.PAGE_UP:
                        i = b._trimAlignValue(h + (b._valueMax() - b._valueMin()) / c);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        i = b._trimAlignValue(h - (b._valueMax() - b._valueMin()) / c);
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                        if (h === b._valueMax())
                            return;
                        i = b._trimAlignValue(h + j);
                        break;
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (h === b._valueMin())
                            return;
                        i = b._trimAlignValue(h - j)
                    }
                    b._slide(d, f, i);
                    return e
                }
            }).keyup(function(c) {
                var d = a(this).data("index.ui-slider-handle");
                b._keySliding && (b._keySliding = !1, b._stop(c, d), b._change(c, d), a(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy();
            return this
        },
        _mouseCapture: function(b) {
            var c = this.options,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l;
            if (c.disabled)
                return !1;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), d = {
                x: b.pageX,
                y: b.pageY
            }, e = this._normValueFromMouse(d), f = this._valueMax() - this._valueMin() + 1, h = this, this.handles.each(function(b) {
                var c = Math.abs(e - h.values(b));
                f > c && (f = c, g = a(this), i = b)
            }), c.range === !0 && this.values(1) === c.min && (i += 1, g = a(this.handles[i])), j = this._start(b, i);
            if (j === !1)
                return !1;
            this._mouseSliding = !0, h._handleIndex = i, g.addClass("ui-state-active").focus(), k = g.offset(), l = !a(b.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - k.left - g.width() / 2,
                top: b.pageY - k.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(b, i, e), this._animateOff = !0;
            return !0
        },
        _mouseStart: function(a) {
            return !0
        },
        _mouseDrag: function(a) {
            var b = {
                    x: a.pageX,
                    y: a.pageY
                },
                c = this._normValueFromMouse(b);
            this._slide(a, this._handleIndex, c);
            return !1
        },
        _mouseStop: function(a) {
            this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1;
            return !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            var b,
                c,
                d,
                e,
                f;
            this.orientation === "horizontal" ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), d < 0 && (d = 0), this.orientation === "vertical" && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e;
            return this._trimAlignValue(f)
        },
        _start: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values());
            return this._trigger("start", a, c)
        },
        _slide: function(a, b, c) {
            var d,
                e,
                f;
            this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (b === 0 && c > d || b === 1 && c < d) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e
            }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c
            }), f !== !1 && this.value(c))
        },
        _stop: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c)
            }
        },
        value: function(a) {
            if (arguments.length)
                this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
            else
                return this._value()
        },
        values: function(b, c) {
            var d,
                e,
                f;
            if (arguments.length > 1)
                this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b);
            else {
                if (!arguments.length)
                    return this._values();
                if (!a.isArray(arguments[0]))
                    return this.options.values && this.options.values.length ? this._values(b) : this.value();
                d = this.options.values, e = arguments[0];
                for (f = 0; f < d.length; f += 1)
                    d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                this._refreshValue()
            }
        },
        _setOption: function(b, c) {
            var d,
                e = 0;
            a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments);
            switch (b) {
            case "disabled":
                c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0, this._refreshValue();
                for (d = 0; d < e; d += 1)
                    this._change(null, d);
                this._animateOff = !1
            }
        },
        _value: function() {
            var a = this.options.value;
            a = this._trimAlignValue(a);
            return a
        },
        _values: function(a) {
            var b,
                c,
                d;
            if (arguments.length) {
                b = this.options.values[a], b = this._trimAlignValue(b);
                return b
            }
            c = this.options.values.slice();
            for (d = 0; d < c.length; d += 1)
                c[d] = this._trimAlignValue(c[d]);
            return c
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin())
                return this._valueMin();
            if (a >= this._valueMax())
                return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1,
                c = (a - this._valueMin()) % b,
                d = a - c;
            Math.abs(c) * 2 >= b && (d += c > 0 ? b : -b);
            return parseFloat(d.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var b = this.options.range,
                c = this.options,
                d = this,
                e = this._animateOff ? !1 : c.animate,
                f,
                g = {},
                h,
                i,
                j,
                k;
            this.options.values && this.options.values.length ? this.handles.each(function(b, i) {
                f = (d.values(b) - d._valueMin()) / (d._valueMax() - d._valueMin()) * 100, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", a(this).stop(1, 1)[e ? "animate" : "css"](g, c.animate), d.options.range === !0 && (d.orientation === "horizontal" ? (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
                    left: f + "%"
                }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
                    width: f - h + "%"
                }, {
                    queue: !1,
                    duration: c.animate
                })) : (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
                    bottom: f + "%"
                }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
                    height: f - h + "%"
                }, {
                    queue: !1,
                    duration: c.animate
                }))), h = f
            }) : (i = this.value(), j = this._valueMin(), k = this._valueMax(), f = k !== j ? (i - j) / (k - j) * 100 : 0, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", this.handle.stop(1, 1)[e ? "animate" : "css"](g, c.animate), b === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[e ? "animate" : "css"]({
                width: f + "%"
            }, c.animate), b === "max" && this.orientation === "horizontal" && this.range[e ? "animate" : "css"]({
                width: 100 - f + "%"
            }, {
                queue: !1,
                duration: c.animate
            }), b === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[e ? "animate" : "css"]({
                height: f + "%"
            }, c.animate), b === "max" && this.orientation === "vertical" && this.range[e ? "animate" : "css"]({
                height: 100 - f + "%"
            }, {
                queue: !1,
                duration: c.animate
            }))
        }
    }), a.extend(a.ui.slider, {
        version: "1.8.17"
    })
}(jQuery), function(a, b) {
    function f() {
        return ++d
    }
    function e() {
        return ++c
    }
    var c = 0,
        d = 0;
    a.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function() {
            this._tabify(!0)
        },
        _setOption: function(a, b) {
            if (a == "selected") {
                if (this.options.collapsible && b == this.options.selected)
                    return;
                this.select(b)
            } else
                this.options[a] = b, this._tabify()
        },
        _tabId: function(a) {
            return a.title && a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + e()
        },
        _sanitizeSelector: function(a) {
            return a.replace(/:/g, "\\:")
        },
        _cookie: function() {
            var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + f());
            return a.cookie.apply(null, [b].concat(a.makeArray(arguments)))
        },
        _ui: function(a, b) {
            return {
                tab: a,
                panel: b,
                index: this.anchors.index(a)
            }
        },
        _cleanup: function() {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                var b = a(this);
                b.html(b.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function(c) {
            function m(b, c) {
                b.css("display", ""), !a.support.opacity && c.opacity && b[0].style.removeAttribute("filter")
            }
            var d = this,
                e = this.options,
                f = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = a(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
                return a("a", this)[0]
            }), this.panels = a([]), this.anchors.each(function(b, c) {
                var g = a(c).attr("href"),
                    h = g.split("#")[0],
                    i;
                h && (h === location.toString().split("#")[0] || (i = a("base")[0]) && h === i.href) && (g = c.hash, c.href = g);
                if (f.test(g))
                    d.panels = d.panels.add(d.element.find(d._sanitizeSelector(g)));
                else if (g && g !== "#") {
                    a.data(c, "href.tabs", g), a.data(c, "load.tabs", g.replace(/#.*$/, ""));
                    var j = d._tabId(c);
                    c.href = "#" + j;
                    var k = d.element.find("#" + j);
                    k.length || (k = a(e.panelTemplate).attr("id", j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b - 1] || d.list), k.data("destroy.tabs", !0)), d.panels = d.panels.add(k)
                } else
                    e.disabled.push(b)
            }), c ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), e.selected === b ? (location.hash && this.anchors.each(function(a, b) {
                if (b.hash == location.hash) {
                    e.selected = a;
                    return !1
                }
            }), typeof e.selected != "number" && e.cookie && (e.selected = parseInt(d._cookie(), 10)), typeof e.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), e.selected = e.selected || (this.lis.length ? 0 : -1)) : e.selected === null && (e.selected = -1), e.selected = e.selected >= 0 && this.anchors[e.selected] || e.selected < 0 ? e.selected : 0, e.disabled = a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"), function(a, b) {
                return d.lis.index(a)
            }))).sort(), a.inArray(e.selected, e.disabled) != -1 && e.disabled.splice(a.inArray(e.selected, e.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), e.selected >= 0 && this.anchors.length && (d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"), d.element.queue("tabs", function() {
                d._trigger("show", null, d._ui(d.anchors[e.selected], d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))
            }), this.load(e.selected)), a(window).bind("unload", function() {
                d.lis.add(d.anchors).unbind(".tabs"), d.lis = d.anchors = d.panels = null
            })) : e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[e.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), e.cookie && this._cookie(e.selected, e.cookie);
            for (var g = 0, h; h = this.lis[g]; g++)
                a(h)[a.inArray(g, e.disabled) != -1 && !a(h).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            e.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
            if (e.event !== "mouseover") {
                var i = function(a, b) {
                        b.is(":not(.ui-state-disabled)") && b.addClass("ui-state-" + a)
                    },
                    j = function(a, b) {
                        b.removeClass("ui-state-" + a)
                    };
                this.lis.bind("mouseover.tabs", function() {
                    i("hover", a(this))
                }), this.lis.bind("mouseout.tabs", function() {
                    j("hover", a(this))
                }), this.anchors.bind("focus.tabs", function() {
                    i("focus", a(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function() {
                    j("focus", a(this).closest("li"))
                })
            }
            var k,
                l;
            e.fx && (a.isArray(e.fx) ? (k = e.fx[0], l = e.fx[1]) : k = l = e.fx);
            var n = l ? function(b, c) {
                    a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.hide().removeClass("ui-tabs-hide").animate(l, l.duration || "normal", function() {
                        m(c, l), d._trigger("show", null, d._ui(b, c[0]))
                    })
                } : function(b, c) {
                    a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.removeClass("ui-tabs-hide"), d._trigger("show", null, d._ui(b, c[0]))
                },
                o = k ? function(a, b) {
                    b.animate(k, k.duration || "normal", function() {
                        d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), m(b, k), d.element.dequeue("tabs")
                    })
                } : function(a, b, c) {
                    d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), d.element.dequeue("tabs")
                };
            this.anchors.bind(e.event + ".tabs", function() {
                var b = this,
                    c = a(b).closest("li"),
                    f = d.panels.filter(":not(.ui-tabs-hide)"),
                    g = d.element.find(d._sanitizeSelector(b.hash));
                if (c.hasClass("ui-tabs-selected") && !e.collapsible || c.hasClass("ui-state-disabled") || c.hasClass("ui-state-processing") || d.panels.filter(":animated").length || d._trigger("select", null, d._ui(this, g[0])) === !1) {
                    this.blur();
                    return !1
                }
                e.selected = d.anchors.index(this), d.abort();
                if (e.collapsible) {
                    if (c.hasClass("ui-tabs-selected")) {
                        e.selected = -1, e.cookie && d._cookie(e.selected, e.cookie), d.element.queue("tabs", function() {
                            o(b, f)
                        }).dequeue("tabs"), this.blur();
                        return !1
                    }
                    if (!f.length) {
                        e.cookie && d._cookie(e.selected, e.cookie), d.element.queue("tabs", function() {
                            n(b, g)
                        }), d.load(d.anchors.index(this)), this.blur();
                        return !1
                    }
                }
                e.cookie && d._cookie(e.selected, e.cookie);
                if (g.length)
                    f.length && d.element.queue("tabs", function() {
                        o(b, f)
                    }), d.element.queue("tabs", function() {
                        n(b, g)
                    }), d.load(d.anchors.index(this));
                else
                    throw "jQuery UI Tabs: Mismatching fragment identifier.";
                a.browser.msie && this.blur()
            }), this.anchors.bind("click.tabs", function() {
                return !1
            })
        },
        _getIndex: function(a) {
            typeof a == "string" && (a = this.anchors.index(this.anchors.filter("[href$=" + a + "]")));
            return a
        },
        destroy: function() {
            var b = this.options;
            this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
                var b = a.data(this, "href.tabs");
                b && (this.href = b);
                var c = a(this).unbind(".tabs");
                a.each(["href", "load", "cache"], function(a, b) {
                    c.removeData(b + ".tabs")
                })
            }), this.lis.unbind(".tabs").add(this.panels).each(function() {
                a.data(this, "destroy.tabs") ? a(this).remove() : a(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
            }), b.cookie && this._cookie(null, b.cookie);
            return this
        },
        add: function(c, d, e) {
            e === b && (e = this.anchors.length);
            var f = this,
                g = this.options,
                h = a(g.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)),
                i = c.indexOf("#") ? this._tabId(a("a", h)[0]) : c.replace("#", "");
            h.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var j = f.element.find("#" + i);
            j.length || (j = a(g.panelTemplate).attr("id", i).data("destroy.tabs", !0)), j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), e >= this.lis.length ? (h.appendTo(this.list), j.appendTo(this.list[0].parentNode)) : (h.insertBefore(this.lis[e]), j.insertBefore(this.panels[e])), g.disabled = a.map(g.disabled, function(a, b) {
                return a >= e ? ++a : a
            }), this._tabify(), this.anchors.length == 1 && (g.selected = 0, h.addClass("ui-tabs-selected ui-state-active"), j.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
                f._trigger("show", null, f._ui(f.anchors[0], f.panels[0]))
            }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[e], this.panels[e]));
            return this
        },
        remove: function(b) {
            b = this._getIndex(b);
            var c = this.options,
                d = this.lis.eq(b).remove(),
                e = this.panels.eq(b).remove();
            d.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(b + (b + 1 < this.anchors.length ? 1 : -1)), c.disabled = a.map(a.grep(c.disabled, function(a, c) {
                return a != b
            }), function(a, c) {
                return a >= b ? --a : a
            }), this._tabify(), this._trigger("remove", null, this._ui(d.find("a")[0], e[0]));
            return this
        },
        enable: function(b) {
            b = this._getIndex(b);
            var c = this.options;
            if (a.inArray(b, c.disabled) != -1) {
                this.lis.eq(b).removeClass("ui-state-disabled"), c.disabled = a.grep(c.disabled, function(a, c) {
                    return a != b
                }), this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b]));
                return this
            }
        },
        disable: function(a) {
            a = this._getIndex(a);
            var b = this,
                c = this.options;
            a != c.selected && (this.lis.eq(a).addClass("ui-state-disabled"), c.disabled.push(a), c.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[a], this.panels[a])));
            return this
        },
        select: function(a) {
            a = this._getIndex(a);
            if (a == -1)
                if (this.options.collapsible && this.options.selected != -1)
                    a = this.options.selected;
                else
                    return this;
            this.anchors.eq(a).trigger(this.options.event + ".tabs");
            return this
        },
        load: function(b) {
            b = this._getIndex(b);
            var c = this,
                d = this.options,
                e = this.anchors.eq(b)[0],
                f = a.data(e, "load.tabs");
            this.abort();
            if (!f || this.element.queue("tabs").length !== 0 && a.data(e, "cache.tabs"))
                this.element.dequeue("tabs");
            else {
                this.lis.eq(b).addClass("ui-state-processing");
                if (d.spinner) {
                    var g = a("span", e);
                    g.data("label.tabs", g.html()).html(d.spinner)
                }
                this.xhr = a.ajax(a.extend({}, d.ajaxOptions, {
                    url: f,
                    success: function(f, g) {
                        c.element.find(c._sanitizeSelector(e.hash)).html(f), c._cleanup(), d.cache && a.data(e, "cache.tabs", !0), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                        try {
                            d.ajaxOptions.success(f, g)
                        } catch (h) {}
                    },
                    error: function(a, f, g) {
                        c._cleanup(), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                        try {
                            d.ajaxOptions.error(a, f, b, e)
                        } catch (g) {}
                    }
                })), c.element.dequeue("tabs");
                return this
            }
        },
        abort: function() {
            this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup();
            return this
        },
        url: function(a, b) {
            this.anchors.eq(a).removeData("cache.tabs").data("load.tabs", b);
            return this
        },
        length: function() {
            return this.anchors.length
        }
    }), a.extend(a.ui.tabs, {
        version: "1.8.17"
    }), a.extend(a.ui.tabs.prototype, {
        rotation: null,
        rotate: function(a, b) {
            var c = this,
                d = this.options,
                e = c._rotate || (c._rotate = function(b) {
                    clearTimeout(c.rotation), c.rotation = setTimeout(function() {
                        var a = d.selected;
                        c.select(++a < c.anchors.length ? a : 0)
                    }, a), b && b.stopPropagation()
                }),
                f = c._unrotate || (c._unrotate = b ? function(a) {
                    t = d.selected, e()
                } : function(a) {
                    a.clientX && c.rotate(null)
                });
            a ? (this.element.bind("tabsshow", e), this.anchors.bind(d.event + ".tabs", f), e()) : (clearTimeout(c.rotation), this.element.unbind("tabsshow", e), this.anchors.unbind(d.event + ".tabs", f), delete this._rotate, delete this._unrotate);
            return this
        }
    })
}(jQuery) /*!
 * A very small part of Bootstrap: Tooltips and popovers
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */






+ function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        var e = this.options.trigger.split(" ");
        for (var f = e.length; f--;) {
            var g = e[f];
            if (g == "click")
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if (g != "manual") {
                var h = g == "hover" ? "mouseenter" : "focusin",
                    i = g == "hover" ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && typeof b.delay == "number" && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(c.timeout), c.hoverState = "in";
        if (!c.options.delay || !c.options.delay.show)
            return c.show();
        c.timeout = setTimeout(function() {
            c.hoverState == "in" && c.show()
        }, c.options.delay.show)
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        clearTimeout(c.timeout), c.hoverState = "out";
        if (!c.options.delay || !c.options.delay.hide)
            return c.hide();
        c.timeout = setTimeout(function() {
            c.hoverState == "out" && c.hide()
        }, c.options.delay.hide)
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            if (b.isDefaultPrevented())
                return;
            var c = this,
                d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = typeof this.options.placement == "function" ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(),
                i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(),
                    l = e,
                    m = document.documentElement.scrollTop || document.body.scrollTop,
                    n = this.options.container == "body" ? window.innerWidth : k.outerWidth(),
                    o = this.options.container == "body" ? window.innerHeight : k.outerHeight(),
                    p = this.options.container == "body" ? 0 : k.offset().left;
                e = e == "bottom" && h.top + h.height + j - m > o ? "top" : e == "top" && h.top - m - j < 0 ? "bottom" : e == "right" && h.right + i > n ? "left" : e == "left" && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    }, b.prototype.applyPlacement = function(b, c) {
        var d,
            e = this.tip(),
            f = e[0].offsetWidth,
            g = e[0].offsetHeight,
            h = parseInt(e.css("margin-top"), 10),
            i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth,
            k = e[0].offsetHeight;
        c == "top" && k != g && (d = !0, b.top = b.top + g - k);
        if (/bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = b.left * -2, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
        } else
            this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function() {
        function e() {
            b.hoverState != "in" && c.detach(), b.$element.trigger("hidden.bs." + b.type)
        }
        var b = this,
            c = this.tip(),
            d = a.Event("hide.bs." + this.type);
        this.$element.trigger(d);
        if (d.isDefaultPrevented())
            return;
        return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? c.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function() {
        return this.getTitle()
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, typeof b.getBoundingClientRect == "function" ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return a == "bottom" ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : a == "top" ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : a == "left" ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function() {
        var a,
            b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function() {
        this.enabled = !0
    }, b.prototype.disable = function() {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = typeof c == "object" && c;
            if (!e && c == "destroy")
                return;
            e || d.data("bs.tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }
}(jQuery), +function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? typeof c == "string" ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || (typeof b.content == "function" ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = typeof c == "object" && c;
            if (!e && c == "destroy")
                return;
            e || d.data("bs.popover", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this
    }
}(jQuery)
var NANNA_SERVER = '//' + window.location.hostname + '/nanna';
var paths = {};
var SHOW_NARROW_BY_COLLECTION = false;
window.onpopstate = function(event) {
    if (event.state) {
        window.location = event.state.url;
    }
};
$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
}
function allowedPagebodyStripes() {
    return window.location.pathname.match('^/$') ? 2 : 1;
}
function IEversion()
{
    var rv = 99,
        re;
    var ua = navigator.userAgent;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    } else {
        re = new RegExp("Trident.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) {
            rv = parseFloat(RegExp.$1);
        }
    }
    return rv;
}
(function($) {
    var re = /([^&=]+)=?([^&]*)/g;
    var decodeRE = /\+/g;
    var decode = function(str) {
        return decodeURIComponent(str.replace(decodeRE, " "));
    };
    $.parseParams = function(query) {
        var params = {},
            e;
        first = true;
        while (e = re.exec(query)) {
            var k = decode(e[1]),
                v = decode(e[2]);
            if (first) {
                k = k.replace(/.*\?/, "");
                first = false;
            }
            if (k in params) {
                params[k] = [].concat(params[k], v);
            } else {
                params[k] = v;
            }
        }
        return params;
    };
})(jQuery);
function submitSearchForm(form) {
    var spinner = $('<div id="loading-spinner"><div id="loading-spinner-icon"></div></div>');
    $.ajax(form.attr('action'), {
        data: form.serialize(),
        beforeSend: function() {
            if ($('.all-results').length > 0) {
                $(".all-results").replaceWith(spinner);
            } else {
                $('.pagebodystripemiddle > span.quicknote').replaceWith(spinner);
            }
        },
        success: function(data) {
            if ($('.pagebodystripemiddle').length >= allowedPagebodyStripes())
                $('.pagebodystripemiddle').last().remove();
            var result = $(data);
            if ($('.simplesearch').length >= 1)
                result.find('.simplesearch').remove();
            result.find('#left-menu-container').find('input[type="hidden"]').each(function() {
                var e = $(this);
                var name = e.attr('name');
                var value = e.val();
                var dest = $('form[name="search"]');
                var dest_e = dest.find('input[name="' + name + '"]');
                if (dest_e.length > 0) {
                    dest_e.val(value)
                }
                else {
                    var dest_e = $('<input>').attr('type', 'hidden').attr('name', name).val(value).appendTo(dest);
                }
            })
            result.find('.pagebodystripemiddle').css('opacity', 0).appendTo('.pagebody').animate({
                opacity: 1
            }, {
                easing: 'easeInOutQuad',
                duration: 500
            });
            var url = 'search?' + form.serialize();
            if (IEversion() > 9) {
                history.pushState({
                    url: url
                }, 'Search results', url);
            }
            paths['^/search$']();
            tweakLanguageLinks(form.serialize());
            var forms = $('form[name="search"]');
            if (forms.length > 1) {
                hidden_p = $('<input type="hidden" name="p">');
                hidden_p.attr('value', $(forms[0]).find('input[name="p"]').val());
                $(forms[1]).append(hidden_p);
            }
            if (typeof MathJax != "undefined") {
                MathJax.Hub.Queue(["resetEquationNumbers", MathJax.InputJax.TeX], ["PreProcess", MathJax.Hub], ["Reprocess", MathJax.Hub]);
            }
        }
    });
    $('.narrowsearch-slidein').slideUp();
}
function openPdfPreview(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#pdf-preview-container').remove();
    var url = $(this).closest('td').find('a[href$=".pdf"]').attr('href');
    var canvasContainer = $('<div id="pdf-preview-container">');
    canvasContainer.appendTo('body').on('click', function() {
        $.magnificPopup.close();
    });
    var firstLookUrl = $(this).data('thumb-big');
    var firstLookImg = $('<img class="pdf-firstlook">').attr('src', firstLookUrl);
    firstLookImg.appendTo(canvasContainer);
    var spinner = $('<div id="loading-spinner"><div id="loading-spinner-icon"></div></div>').appendTo(canvasContainer);
    function renderPage(page) {
        var canvas = $('#pdf-preview-container canvas').get(page.pageNumber - 2);
        var context = canvas.getContext('2d');
        var viewport = page.getViewport(800 / page.getViewport(1.0).width);
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    }
    PDFJS.getDocument(url).then(function(pdf) {
        var count = pdf.numPages;
        spinner.remove();
        for (var i = 2; i < count + 1; i++) {
            $('#pdf-preview-container').append('<canvas>');
            pdf.getPage(i).then(renderPage);
        }
    });
    $.magnificPopup.open({
        items: {
            src: '#pdf-preview-container',
            type: 'inline'
        }
    });
    $('body > #pdf-preview-container').remove();
}
function isRTL() {
    return ( $('html[dir="rtl"]').length !== 0) ;
}
String.prototype.toArabicDigits = function() {
    var id = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return this.replace(/[0-9]/g, function(w) {
        return id[+w];
    });
};
function elementToArabicDigits() {
    $(this).html($(this).html().toArabicDigits());
}
function addAlphabetBrowsing() {
    var container = $('<div id="alphabetindex"></div>');
    container.append($('<h5>Browse by title</h5>'));
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var urlparams = $.parseParams(location.search.substring(1));
    $('form[name="search"] > input[type="hidden"]').each(function() {
        urlparams[$(this).attr('name')] = $(this).attr('value');
    });
    for (i = 0; i < alphabet.length; i++) {
        urlparams['p'] = '245__a:/^' + alphabet[i] + '.*/';
        urlparams['rg'] = '200';
        urlparams['sf'] = '245__a';
        urlparams['so'] = 'a';
        var href = location.origin + '/search?' + $.param(urlparams);
        var link = $('<a href="' + href + '">' + alphabet[i] + '</a>');
        container.append(link);
    }
    $('.searchbox.simplesearch').after(container);
}
function addThumbnail(container, recID, url, el) {
    url = url || '';
    if (recID) {
        $.ajax({
            url: NANNA_SERVER + '/thumbnail/' + recID,
            success: function(response) {
                thumbUrl = response.small;
                thumbUrlBig = response.big;
                container.data('thumb-small', thumbUrl);
                container.data('thumb-big', thumbUrlBig);
                var thumb = $('<img>').attr('src', thumbUrl);
                thumb.on('load', function() {
                    container.removeClass("loading");
                    container.removeClass('no-preview');
                    if (response["type"] != "bookcover") {
                        container.on('click', openPdfPreview);
                        container.html(thumb);
                    }
                    else {
                        container.html(thumb);
                        container.wrap($("<a>").attr("href", url));
                    }
                });
                thumb.on('error', function() {
                    container.removeClass("loading");
                    container.addClass('no-preview');
                    el.prepend(container.html(''));
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                if (xhr.status == 404) {
                    container.removeClass("loading");
                    container.addClass('no-preview');
                    el.prepend(container.html(''));
                }
            }
        });
    }
}
function toggle_search_options() {
    var search_menu = $('#search-menu');
    if (search_menu.hasClass("expanded")) {
        search_menu.removeClass("expanded");
        search_menu.slideUp(400, "swing", function() {});
    } else {
        search_menu.slideDown(400, "swing", function() {
            search_menu.addClass("expanded");
        });
    }
}
function open_sidebar_menu(that) {
    $('div.detailedrecordtabs').addClass('expanded', 200, 'swing');
    return false
}
function close_sidebar_menu(that) {
    $('div.detailedrecordtabs').removeClass('expanded', 200, 'swing');
    return false
}
function toggle_select_all(button) {
    var inputs = $(button).closest('.all-results').find('input[type=checkbox]');
    var all = true;
    inputs.each(function(index) {
        all = all && $(this).prop('checked');
    });
    inputs.prop('checked', !all);
}
function tweakAdvancedSearch() {
    var is_librarian = $('.headerbox .menu a[href*="record/edit"]').length > 0;
    var buttons = $('.formbutton');
    var links = $('.searchboxbody.box').last().detach();
    var form = buttons.first().closest('form');
    $(buttons[1]).remove();
    form.append(buttons[0]).append(links);
    links.closest("div").css("margin-bottom", "0px");
    var options_wrapper = $(".options-button-wrapper").detach();
    form.append(options_wrapper);
    var left_menu = $("#left-menu-container").detach();
    form.append(left_menu);
    form.after($('table.narrowandfocusonsearchbox').detach());
    $('body').removeClass('home').addClass('advanced-search');
    var d1d = $('.searchboxbody select[name=d1d]').hide();
    var d1m = $('.searchboxbody select[name=d1m]').hide();
    var d1y = $('.searchboxbody select[name=d1y]').hide();
    var d2d = $('.searchboxbody select[name=d2d]').hide();
    var d2m = $('.searchboxbody select[name=d2m]').hide();
    var d2y = $('.searchboxbody select[name=d2y]').hide();
    var d1val = (d1d.val() !== '' && d1m.val() !== '' && d1y.val() !== '') ? d1d.val() + '/' + d1m.val() + '/' + d1y.val() : '';
    var d2val = (d2d.val() !== '' && d2m.val() !== '' && d2y.val() !== '') ? d2d.val() + '/' + d2m.val() + '/' + d2y.val() : '';
    var boxFrom = d1d.closest('td');
    var boxTo = boxFrom.next();
    $('<input type="text" placeholder="dd/mm/yyyy" class="advancedsearchfield">').appendTo(boxFrom).val(d1val).on('change', function() {
        var val = $(this).val().split('/');
        d1d.val(val[0]);
        d1m.val(val[1]);
        d1y.val(val[2]);
    }).datepicker({
        dateFormat: "dd/mm/yy"
    });
    $('<input type="text" placeholder="dd/mm/yyyy" class="advancedsearchfield">').appendTo(boxTo).val(d2val).on('change', function() {
        var val = $(this).val().split('/');
        d2d.val(val[0]);
        d2m.val(val[1]);
        d2y.val(val[2]);
    }).datepicker({
        dateFormat: "dd/mm/yy"
    });
    $('.searchbox:first-of-type select:not([name="c"])').chosen({
        disable_search_threshold: 10,
        width: ''
    });
    if (is_librarian) {
        boxFrom.parents('.searchbox').show();
    }
    $('.searchbox.advancedsearch').show();
}
function tweakSearchResults() {
    var is_bibcircadmin = $('.headerbox .menu a[href*="bibcirculationadmin.py"]').length > 0;
    var can_edit_records = $('.headerbox .menu a[href*="record/edit/"]').length > 0;
    $('.pagebodystripemiddle > br').remove();
    $('.search .result-row').each(function() {
        var el = $(this).closest('td');
        var url = $(el.find('a.moreinfo').get(0)).attr('href');
        el.find('.result-title a').attr('href', url);
        var recID = url.match(/\/record\/([0-9]+)/)[1];
        if (!$(this).hasClass("hide-preview")) {
            var thumbContainer = $('<div class="record thumb loading">');
            el.prepend(thumbContainer.html('<i class="fa fa-2x fa-spinner fa-spin"></i>'));
            addThumbnail(thumbContainer, recID, url, el);
        }
        if ($(this).find('.brief-options').length == 0) {
            $(this).find('.result-abstract').append("<div class='brief-options'>");
        }
        var brief_options = $(this).find('.brief-options');
        if (brief_options) {
            if (can_edit_records) {
                var editlink = "<a href='/record/edit/?#state=edit&recid=" + recID + "'>Edit Bib Record</a><span class='separator'> | </span>";
                brief_options.append(editlink);
            }
            if (is_bibcircadmin) {
                var bibcirclink = "<a href='/admin2/bibcirculation/get_item_details?recid=" + recID + "'>Edit Item Record</a><span class='separator'> | </span>";
                brief_options.append(bibcirclink);
            }
            if (recID) {
                var library;
                $.ajax({
                    url: NANNA_SERVER + '/bibcirc/' + recID + '/',
                    success: function(response) {
                        var status_msg = '';
                        if (response.status == 0) {
                            if (response.library) {
                                if (response.library instanceof Array) {
                                    library = response.library.join([separator = ', ']);
                                } else {
                                    library = response.library;
                                }
                                status_msg += "<span class='available'><i class='fa fa-check-circle'></i>Available at " + library + "</span>";
                            } else {
                                status_msg += "<span class='available'><i class='fa fa-check-circle'></i>Available</span>";
                            }
                        } else if (response.status == 1) {
                            if (response.library) {
                                if (response.library instanceof Array) {
                                    library = response.library.join([separator = ', ']);
                                } else {
                                    library = response.library;
                                }
                                status_msg += "<span class='due'><i class='fa fa-clock-o'></i>On loan from " + library + ", due " + response.date + "</span>";
                            } else {
                                status_msg += "<span class='due'><i class='fa fa-clock-o'></i>On loan, due " + response.date + "</span>";
                            }
                        } else if (response.status == 2) {
                            if (response.date) {
                                status_msg += "<span class='order'><i class='fa fa-shopping-cart'></i>On order, expected " + response.date + "</span>";
                            } else {
                                status_msg += "<span class='order'><i class='fa fa-shopping-cart'></i>On order</span>";
                            }
                        }
                        if (response.status != '-1') {
                            brief_options.append("<a href='/record/" + recID + "/holdings'>Request</a> | " + status_msg + "<span class='separator'> | </span>");
                        }
                    }
                });
            }
        }
    });
    $('.search .searchresultsbox .searchresultsboxheader[align=center]').each(function(i, el) {
        if ($(el).find('input').length) {
            $(el).contents().last().remove();
            $(el).contents().last().remove();
        }
    });
    $('form[action="/yourbaskets/add"]').addClass('all-results').prepend('<div class="media-results"></div>');
    $('.result-row-media').each(function() {
        var row = $(this);
        var resultContainer = row.closest('form').find('.media-results');
        var title = row.find('.result-title');
        var titleText = title.find('a').text();
        title.find('a').text(titleText.substr(0, 35) + (titleText.length > 35 ? '...' : ''));
        var largeImages = row.find('.result-images-data-for-lightbox a:nth-child(1)').toArray().map(function(el) {
            return $(el).attr('href');
        }).sort();
        var images = row.find('.result-images img').toArray().sort(function(a, b) {
            a = $(a).attr('src');
            b = $(b).attr('src');
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        }).forEach(function(el, i) {
            var img = $(el);
            var a = img.closest('a').addClass('result-image');
            a.attr('data-mfp-src', largeImages[i] || img.attr('src'));
            a.attr('data-title', titleText);
            a.prepend(title.clone().on('click', function(e) {
                e.stopPropagation();
                window.location = $(this).find('a').attr('href');
                return false;
            }));
            resultContainer.append(a);
        });
    });
    $('.result-row-media').closest('tr').remove();
    $('.rankscoreinfo').remove();
    $('form.all-results').each(function() {
        if ($(this).find('tr').length === 0) {
            $(this).find('input.formbutton').remove();
        } else {
            function multi_edit_record() {
                var all_result = this.parentNode;
                var list_recid = "";
                var checkboxes = $(":checkbox", all_result);
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked == true) {
                        list_recid = list_recid + checkboxes[i].value + ",";
                        checkboxes[i].value;
                    }
                }
                window.location.replace(window.location.origin + "/record/edit/#state=edit&js_rec=" + list_recid);
            }
            ;
            if (can_edit_records) {
                $btnEditRecord = $('<input/>').attr({
                    class: 'formbutton',
                    type: 'button',
                    name: 'btnEdit',
                    value: 'Edit in record editor'
                });
                $btnEditRecord.on("click", multi_edit_record);
                $(this).append($btnEditRecord);
            }
        }
    });
    $('.media-results').each(function() {
        var $this = $(this);
        $this.magnificPopup({
            delegate: 'a.result-image',
            key: "heyho",
            type: 'image',
            mainClass: 'mfp-with-zoom',
            image: {
                titleSrc: function(item) {
                    return '<a href="' + item.el.attr('href') + '">' + item.el.attr('data-title') + '</a>';
                }
            },
            gallery: {
                enabled: true
            }
        });
    });
    $('.media-results img').on('load', function() {
        $(this).addClass('loaded');
    });
}
function tweakAccountDetails() {
    $('h1').show();
    $('body').addClass("accountDetails");
    logoutlink = $('.youraccountbox:nth-of-type(1) td a:nth-of-type(1)').detach().addClass("formbutton mini-space-right");
    logoutlink.prepend('<i class="fa fa-sign-out"></i>&nbsp;');
    settingslink = $('.youraccountbox:nth-of-type(1) td a:nth-of-type(1)').detach().addClass("formbutton mini-space-right");
    settingslink.prepend('<i class="fa fa-cogs"></i>&nbsp;');
    messageslink = $('.youraccountbox:nth-of-type(2) th a').detach();
    msgno = $('.youraccountbox:nth-of-type(2) td b').html();
    if (parseInt(msgno) > 0) {
        messageslink.append(" (" + msgno + " new)");
    }
    messageslink.prepend('<i class="fa fa-envelope"></i>&nbsp;');
    basketslink = $('.youraccountbox:nth-of-type(3) th a').detach();
    basketslink.prepend('<i class="fa fa-shopping-cart"></i>&nbsp;');
    commentslink = $('.youraccountbox:nth-of-type(4) th a').detach();
    commentslink.prepend('<i class="fa fa-comments"></i>&nbsp;');
    alertslink = $('.youraccountbox:nth-of-type(5) th a:nth-child(1)').detach();
    alertslink.prepend('<i class="fa fa-bell"></i>&nbsp;');
    searcheslink = $('.youraccountbox:nth-of-type(6) th a:nth-child(1)').detach();
    searcheslink.prepend('<i class="fa fa-search"></i>&nbsp;');
    groupslink = $('.youraccountbox:nth-of-type(7) th a:nth-child(1)').detach();
    groupslink.prepend('<i class="fa fa-group"></i>&nbsp;');
    loanslink = $('.headerbox .subsubmenu li a[href*="yourloans/display"]').clone();
    loanslink.prepend('<i class="fa fa-book"></i>&nbsp;');
    possiblelinks = $('.youraccountbox:nth-of-type(8) th a, .youraccountbox:nth-of-type(9) th a, .youraccountbox:nth-of-type(10) th a');
    submissionslink = approvalslink = ticketslink = "";
    for (i = 0; i < possiblelinks.length; i++) {
        found = false;
        if ($(possiblelinks[i]).attr("href").indexOf("submissions") != -1) {
            found = true;
            submissionslink = $(possiblelinks[i]).prepend('<i class="fa fa-files-o"></i>&nbsp;');
        } else if ($(possiblelinks[i]).attr("href").indexOf("approvals") != -1) {
            found = true;
            approvalslink = $(possiblelinks[i]).prepend('<i class="fa fa-check"></i>&nbsp;');
        } else if ($(possiblelinks[i]).attr("href").indexOf("tickets") != -1) {
            found = true;
            ticketslink = $(possiblelinks[i]).prepend('<i class="fa fa-ticket"></i>&nbsp;');
        }
        if (found) {
            $(possiblelinks[i]).parents().eq(3).remove();
        }
    }
    $('a[href="/admin"]').remove();
    $('.youraccountbox:nth-of-type(1), .youraccountbox:nth-of-type(2), .youraccountbox:nth-of-type(3),'
    + ' .youraccountbox:nth-of-type(4), .youraccountbox:nth-of-type(5), .youraccountbox:nth-of-type(6),'
    + ' .youraccountbox:nth-of-type(7)').remove();
    $('h1').after($('<br class="clear"/>')).after(settingslink).after(logoutlink);
    buttons = $('<div class="buttonRow push-down"></div>');
    buttons.append(messageslink).append(basketslink).append(loanslink[0]).append(commentslink).append(alertslink).append(searcheslink).append(groupslink);
    if (submissionslink) {
        buttons.append(submissionslink);
    }
    if (approvalslink) {
        buttons.append(approvalslink);
    }
    if (ticketslink) {
        buttons.append(ticketslink);
    }
    $('.headline_div').after(buttons);
    $('p font[color="red"] a').parent().remove();
    $('.pagebodystripemiddle').show();
}
function tweakEditAccount() {
    $('body').addClass("editAccountDetails");
    submitbtn = $('form[name="edit_profiling_settings"] input[type="submit"]').detach().css("margin-top", "6px");
    $('form[name="edit_profiling_settings"] tr:nth-of-type(1)').append(submitbtn);
    $('.pagebody').attr("style", "background:white;box-shadow:#999 0px 10px 30px;min-height:700px");
    $('.pagebodystripemiddle').show();
}
function tweakRegisterAccount() {
    $('small .quicknote, small .example').parent().attr("style", "margin-top: -26px;display: inline-block;");
    $('.pagebody').attr("style", "background:white;box-shadow:#999 0px 10px 30px;min-height:700px");
    $('.pagebodystripemiddle').show();
}
function tweakLanguageLinks(query) {
    $('.pagefooterstriperight a').each(function() {
        var language = $.parseParams($(this).attr("href").split("?")[1])['ln'];
        var urlparams = $.parseParams(query);
        urlparams['ln'] = language;
        var href = location.origin + '/search?' + $.param(urlparams);
        $(this).attr("href", href);
    });
}
paths['^/collection/'] = function() {
    var advancedSearch = window.location.search.indexOf('&as=1') !== -1;
    if (advancedSearch) {
        tweakAdvancedSearch();
    }
    if ($('form[name="search"] input[type="hidden"][name="cc"][value="Electronic Journals"]').length != 0) {
        addAlphabetBrowsing();
    }
    if (SHOW_NARROW_BY_COLLECTION) {
        $('.narrowandfocusonsearchbox').show();
    }
    if ($('.collection-first-level').length === 0) {
        tweakSearchResults();
        $('.latestadditionsboxtimebody').remove();
        $('.latestadditionsboxrecordbody .moreinfo').remove();
    }
    $('table.narrowandfocusonsearchbox td').each(function() {
        if ($(this).text().indexOf('collection is restricted') != -1) {
            $(this).closest('table').css("margin-top", "20px");
        }
    });
};
paths['^/+$'] = function() {
    var advancedSearch = window.location.search.indexOf('&as=1') !== -1;
    if (advancedSearch) {
        $('.headerboxbodylogo').addClass('scrolled');
        tweakAdvancedSearch();
        return;
    }
    $('.searchboxbody > small').addClass('links');
    $('.simplesearchfield').focus();
    if (IEversion() > 9) {
        history.pushState({
            url: window.location.href
        }, document.title, window.location.href);
    }
    var text = $('.home .searchboxheader').text();
    $('.home .searchboxheader').remove();
    $('.home .simplesearch .searchboxbody input[type="text"]').attr('placeholder', text);
    $('form[name=search]').one('submit', function() {
        var form = $(this);
        var margin_height = '200px';
        var scroll_height = '310px';
        var scroll = "245px";
        if ($('.home').width() < 700) {
            margin_height = '30px';
            scroll_height = '258px';
            scroll = "258px";
        }
        $('.pagebody').attr("style", "background:white;box-shadow:#999 0px 10px 30px;");
        $('.pagebody').css('background', '#fff').css('padding-top', '100px').css('min-height', '1000px');
        if ($('.pagebodystripemiddle').length > allowedPagebodyStripes())
            $('.pagebodystripemiddle').last().remove();
        var searchBox = $('.home .searchbox');
        var boxWidth = $(window).outerWidth() - 40;
        searchBox.css("width", boxWidth).addClass('scrolling');
        searchBox.css('top', searchBox.offset().y + 'px');
        $('body').addClass("scrolled");
        $('.home .headerboxbodylogo').addClass('scrolled');
        searchBox.animate({
            top: scroll_height
        }, {
            easing: 'easeOutExpo',
            duration: 1500,
            complete: function() {
                $(this).addClass('scrolled').removeClass('scrolling').css("width", "");
            }
        });
        $('#botmiddle_links').remove();
        var logo = $('div.headerboxbodylogo');
        logo.css('top', logo.offset().y + 'px');
        $('.pagebody').animate({
            marginTop: margin_height
        }, {
            easing: 'easeOutExpo',
            duration: 1500
        });
        $("html, body").animate({
            scrollTop: scroll
        }, {
            easing: 'easeOutExpo',
            duration: 1500
        });
        submitSearchForm(form);
        return false;
    });
    var narrowSearch = $('.narrowsearch-slidein');
    if (narrowSearch.length) {
        $('.searchbox tbody tr:nth-child(2) td').prepend(narrowSearch);
        var narrowLink = $('.narrowsearch-slidein-button');
        narrowLink.on('click', function() {
            narrowSearch.slideToggle({
                easing: 'easeOutExpo',
                duration: 400
            });
            narrowLink.toggleClass('fa-rotate-180');
        });
        if (collection_collapsed_on_frontpage) {
            narrowSearch.hide();
        } else {
            narrowSearch.show();
            narrowLink.toggleClass('fa-rotate-180');
        }
        var w = $(window).width();
        $(window).resize(function() {
            if (w != $(window).width()) {
                var expanded_narrowsearch = narrowSearch.is(':visible');
                narrowSearch.css('height', '');
                narrowSearch.show().css('height', narrowSearch.outerHeight()).hide();
                if (expanded_narrowsearch) {
                    narrowSearch.show();
                } else {
                    narrowLink.removeClass('fa-rotate-180');
                }
                w = $(window).width();
            }
        });
    }
    if (isRTL()) {
        var searchfield = $('.search .simplesearch .searchboxbody input[type="text"]');
        searchfield.attr("placeholder", searchfield.attr("placeholder").toArabicDigits());
        $('.nbdoccoll').each(elementToArabicDigits);
    }
    $('table.narrowandfocusonsearchbox').remove();
};
paths['^/collection/$'] = paths['^/collection$'] = paths['^/$'];
paths['^/search$'] = function() {
    $('html').addClass('searching');
    var advancedSearch = window.location.search.indexOf('&as=1') !== -1;
    $('.narrowsearch-slidein-button').remove();
    if (advancedSearch) {
        tweakAdvancedSearch();
    }
    alphabet_browsing = false;
    if ($('form[name="search"] input[type="hidden"][name="cc"][value="Electronic Journals"]').length != 0) {
        addAlphabetBrowsing();
        alphabet_browsing = true;
    }
    if ($('input[name="p"]').length != 0) {
        searchvalue = $('input[name="p"]').attr("value");
        if (alphabet_browsing && searchvalue.indexOf("245__a") != -1) {
            letter = searchvalue.match(/245__a:\/\^(\w)\.\*\//)[1];
            $('input[name="p"]').attr("value", "");
            $('#alphabetindex a:contains("' + letter + '")').replaceWith('<span class="selected">' + letter + '</span>');
            document.title = document.title.replace(/245__a:\/\^(\w)\.\*\//, '$1');
            $('select[name="sf"] option[value="245__a"]').html("alphabetic");
        }
    }
    var menu = $("#search-menu.no-facets");
    if (menu.length > 0) {
        var menuTop = menu.offset().top;
        $(window).scroll(function sticky() {
            menu.toggleClass('fixed', $(window).scrollTop() > menuTop);
        }).scroll();
    }
    tweakSearchResults();
    var ext_coll = $('.externalcollectionsbox');
    $(ext_coll).find('tr:nth-of-type(2)').remove();
    $(ext_coll).find('th').text("No similar records could be found in the database.");
    $(ext_coll).css("display", "table");
    var results_table = $('.searchresultsbox');
    if (ext_coll.length == 0 && results_table.length == 0) {
        var msg_elem = $('<div class="externalcollectionsbox"><t')
    }
    $('.pagebodystripemiddle > span').attr('style', 'margin-top:30px;display:table;width:100%');
    $('.pagebodystripemiddle').show();
    params = $.parseParams(location.search.substring(1));
    if ((!('p' in params) || params['p'] == '') && (!'p1' in params || params['p1'] == '')) {
        $('.pagebodystripemiddle > span.quicknote').remove();
    }
    $('#search-menu select[name="c"]').chosen({
        disable_search_threshold: 10,
        width: ''
    });
    $('#search-menu select[name="of"]').chosen({
        disable_search_threshold: 10,
        width: ''
    });
    $(document).click(function(e) {
        if (!e.target.matches('.ws-dd-input, .ws-dd-button')) {
            $('.ws-dd-input').prop('checked', false);
        }
    });
};
function closeAllCollapse() {
    var collapse = $('.action-dropdown.in');
    Array.from(collapse).forEach(function(el) {
        $(el).collapse("hide");
    });
}
function triggerCollapse(id) {
    closeAllCollapse();
    $('#' + id).collapse("show");
}
function clearArrows(el) {
    var panels = $('.action-item');
    Array.from(panels).forEach(function(panel) {
        if (panel != $(el).parent()[0]) {
            $(panel).children(".arrow:visible").hide();
        }
    });
}
function showArrow(el, id) {
    triggerCollapse(id);
    clearArrows(el);
    $(el).next().toggle();
}
paths['^/record/((?!edit).)*$'] = function() {
    var actionBar = $('.action-bar');
    var collapse = $('.action-item > .collapse');
    if (collapse) {
        Array.from(collapse).forEach(function(el) {
            actionBar.after(el);
        });
    }
};
paths['^/record/.*$'] = function() {
    if ($('#detailedrecordminipanelfile a').length) {
        var downloads = $('<li class="actions-download"><i class="fa fa-download"></i></li>').appendTo('.improved-record-actions');
        $('#detailedrecordminipanelfile').remove().find('a').appendTo(downloads);
        downloads.find('br').remove();
    }
    $('.actions-add-to-basket').remove().prepend('<i class="fa fa-heart"></i>').appendTo('.improved-record-actions');
    $('.actions-export-as').remove().prepend('<i class="fa fa-caret-square-o-down"></i>').appendTo('.improved-record-actions');
    $('a.moreinfo[href*="&p=recid"]').remove().removeClass('moreinfo').appendTo('ul.detailedrecordtabs').wrap('<li>');
    var pagination = $('<div class="record-pagination">').prependTo('.inside');
    $('.inside').find('span.moreinfo').remove().prependTo(pagination);
    var open_sidebar_btn = "<div class='space-top space-bottom'><button class='open_sidebar_btn formbutton' onclick='open_sidebar_menu(this)'>&gt; Show tabs</button></div>";
    if ($(".detailed_header").length > 0) {
        $(".detailed_header").first().append(open_sidebar_btn);
    } else if ($("#detailedrecordshortreminder").length > 0 && $(".detailedrecordbox .open_sidebar_btn").length == 0) {
        $("#detailedrecordshortreminder").next().after(open_sidebar_btn);
    } else if ($(".record-title").length > 0) {
        $(".record-title").first().append(open_sidebar_btn);
    } else {
        $(".detailedrecordboxcontent").first().prepend(open_sidebar_btn);
    }
    $('div.detailedrecordtabs').append('<div style="clear: both;">');
    $('.record-images a:first-child').addClass('thumbnail');
    $('.record-images div').magnificPopup({
        delegate: 'a.thumbnail',
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        },
        image: {
            titleSrc: function(item) {
                var path = item.el.attr('href').split('/');
                path = path[path.length - 1];
                path = path.split('?')[0];
                return '<a href="' + item.el.attr('href') + '">' + path + '</a>';
            }
        }
    });
    $('.record-images img').on('load', function() {
        $(this).addClass('loaded');
    });
    $(".record-abstract:not(.no_readmore)").css("margin-bottom", "0").readmore({
        maxHeight: 100,
        moreLink: '<a class="readmore" href="#">More</a>',
        lessLink: '<a class="readmore" href="#">Less</a>'
    });
    $('.pagebodystripemiddle').show();
    $(document).click(function(event) {
        if (!$(event.target).closest('.detailedrecordtabs.expanded').length) {
            if ($('.detailedrecordtabs').hasClass('expanded')) {
                close_sidebar_menu();
            }
        }
    });
};
paths['^/record/.*/references.*'] = function() {
    var useless_div = $('.inside li').parent();
    var new_list = $('<ul class="neutrallist"></ul>').append($('.inside li'));
    useless_div.replaceWith(new_list);
};
paths['/bibcirculation/'] = function() {
    $(".pagebody").addClass("hasleftmenu");
    $('input[type!="hidden"][name="expected_arrival_date"]').attr("id", "date_picker1").datepicker({
        dateFormat: 'yy-mm-dd',
        showOn: 'button',
        buttonImage: "/img/calendar.gif",
        buttonImageOnly: true
    });
    var ln = $.parseParams(location.search.substring(1))['ln'] || '';
    var ln_str = '';
    if (ln) {
        ln_str = 'ln=' + ln
    }
    var bibcirc_url = "https://" + location.hostname + '/admin2/bibcirculation'
    $('a[data-toggle]').each(function() {
        var menu_id = $(this).attr('data-toggle');
        $(this).click(function() {
            if ($('ul#' + menu_id).is(':visible')) {
                $('ul#' + menu_id).slideUp();
            } else {
                $('.bibcirc-submenu').slideUp();
                $('ul#' + menu_id).slideDown();
            }
        });
    });
};
paths['/bibcirculation/.'] = function() {
    $(".pagebody").addClass("hasleftmenu");
};
paths['/bibcirculation/location_exceptions'] = function() {
    $('select').chosen({
        disable_search_threshold: 10,
        width: '230px'
    });
};
paths['/bibcirculation/purchase_details_step1'] = paths['/bibcirculation/ill_request_details_step1'] = function() {
    var style = '<style type="text/css">'
    + 'table.tablesorter tbody td {'
    + '    text-align: left;'
    + '    font-size: small !important;'
    + '}'
    + 'table.tablesorter td {'
    + '    text-align: left;'
    + '}'
    + 'table.bibcirctable:nth-of-type(2) th {'
    + '    font-size: small;'
    + '    font-weight: 200;'
    + '    width: 70px;'
    + '    background: none;'
    + '}'
    + 'table.bibcirctable:nth-of-type(2) td {'
    + '    border: none;'
    + '}'
    + 'td[width="800"] input[type="text"] {'
    + '     font-size: 13px !important;'
    + '     padding: 5px !important;'
    + '     margin: 0 !important;'
    + '}'
    + '</style>';
    $('head').append(style);
    $('img[alt="Book Cover"]').remove();
    $('td[width="800"] textarea').each(function() {
        name = $(this).attr('name');
        value = $(this).html();
        $(this).replaceWith('<input type="text" name="' + name + '" value="' + value + '" size="30">');
    });
    headers = $('.bibcirctableheader');
    $(headers[0]).removeAttr("width").css("width", "50%");
    $(headers[1]).detach().appendTo($(headers[0]).parent());
    $('.bibcirctable:nth-of-type(2)').attr("style", "float:left;width:50%");
    borrower_table = $('td[width="550"] table:nth-of-type(2)')
    $(borrower_table).detach().attr("style", "float:left;width:40%").insertAfter('.bibcirctable:nth-of-type(2)');
    $('td[width="550"]').remove();
};
paths['/bibcirculation/add_new_copy_step3'] = function() {
    $('td[width="400"]').css("padding-right", "20px");
};
paths['/bibcirculation/ill_search(\\?+|$)'] = function() {
    $(".bibcircbottom table, td").removeAttr('align');
    $(".bibcircbottom table[class!='bibcirctable'] tr td:first-child").remove();
    $(".bibcircbottom table[class!='bibcirctable'] tbody").prepend('<tr><td class="bibcirctableheader" colspan="2">Date restriction</td></tr>');
    $(".bibcircbottom table[class!='bibcirctable'] tr[align='center'] td:first-child").removeAttr("class").css("font-size", "0.8em");
};
paths['/bibcirculation/get_pending_requests'] = function() {
    $('table#table_all_loans td:nth-child(2) a').each(function() {
        var main_title = $(this).html().split(':')[0]
        $(this).html(main_title);
    });
    $('table#table_all_loans td:nth-child(1)').css("width", "100px");
    $('table#table_all_loans td:nth-child(2)').attr("style", "text-align:left;width:200px;");
    $('table#table_all_loans td:nth-child(7),'
    + 'table#table_all_loans td:nth-child(8),'
    + 'table#table_all_loans td:nth-child(9)').css("width", "120px");
    $('table#table_all_loans td:nth-child(5),'
    + 'table#table_all_loans td:nth-child(6),').remove();
    $('table#table_all_loans th:nth-child(5),'
    + 'table#table_all_loans th:nth-child(6),').remove();
    re = /\s\d{2}:\d{2}:\d{2}/;
    $('table#table_all_loans td:nth-child(7)').each(function() {
        $(this).html($(this).html().replace(re, ''));
    });
    $('input').attr("style", "margin-top: 2px;");
};
paths['/bibcirculation/get_waiting_requests'] = function() {
    $('table#table_all_loans td:nth-child(2) a').each(function() {
        var main_title = $(this).html().split(':')[0]
        $(this).html(main_title);
    });
    $('table#table_all_loans td:nth-child(1)').css("width", "100px");
    $('table#table_all_loans td:nth-child(2)').attr("style", "text-align:left;width:200px;");
    $('table#table_all_loans td:nth-child(5),'
    + 'table#table_all_loans td:nth-child(6),'
    + 'table#table_all_loans td:nth-child(7)').css("width", "120px");
    re = /\s\d{2}:\d{2}:\d{2}/;
    $('table#table_all_loans td:nth-child(7)').each(function() {
        $(this).html($(this).html().replace(re, ''));
    });
    $('input').attr("style", "margin-top: 2px;");
}
paths['/bibcirculation/get_expired_loans_with_waiting_requests'] = function() {
    $('table#table_requests td:nth-child(2) a').each(function() {
        var main_title = $(this).html().split(':')[0]
        $(this).html(main_title);
    });
    $('table#table_requests td:nth-child(1)').css("width", "100px");
    $('table#table_requests td:nth-child(2)').css("text-align", "left");
    $('table#table_requests td:nth-child(5),'
    + 'table#table_requests td:nth-child(6),'
    + 'table#table_requests td:nth-child(7)').css("width", "120px");
    re = /\s\d{2}:\d{2}:\d{2}/;
    $('table#table_requests td:nth-child(7)').each(function() {
        $(this).html($(this).html().replace(re, ''));
    });
    $('input').attr("style", "margin-top: 2px;");
};
paths['/bibcirculation/register_ill_request_with_no_recid_step1'] = function() {
    var style = '<style type="text/css">'
    + 'table.tablesorterborrower tr th {'
    + '    background-color: white;'
    + '}'
    + 'table.tablesorterborrower {'
    + '    background: none;'
    + '}'
    + 'div.bibcircbottom th:not(.header) {'
    + '  font-size: 0.8em;'
    + '}'
    + '</style>';
    $('head').append(style);
    table_details = $('table.tablesorterborrower')[0];
    table_dates = $('table.tablesorterborrower')[1];
    $(table_details).find('input[size="45"]').attr("size", "30");
    $(table_details).attr("class", "pull-left");
    $(table_dates).attr("class", "pull-right");
    $('table.bibcirctable')[1].remove();
    $('.pagebodystripemiddle > br, .bibcircbottom > br, form > br').remove()
}
paths['/bibcirculation/register_ill_request_with_no_recid_step2'] = function() {
    var style = '<style type="text/css">'
    + 'table.tablesorter {'
    + '    font-size: small !important;'
    + '}'
    + 'table.tablesorter td {'
    + '    text-align: left;'
    + '}'
    + '</style>';
    $('head').append(style);
}
paths['/bibcirculation/loan_on_desk_step1'] = function() {
    var style = '<style type="text/css">'
    + 'table.tablesortersmall td, table.tablesortersmall th {'
    + '      padding: 8px !important;'
    + '      font-size: 1.1em !important;'
    + '}'
    + '</style>';
    $('head').append(style);
    setTimeout(function() {
        $('#string').focus()
    }, 0);
    setTimeout(function() {
        $('#barcode').focus()
    }, 0);
}
paths['/bibcirculation/loan_on_desk_step2'] = function() {
    setTimeout(function() {
        $('#barcode').focus()
    }, 0);
}
paths['/bibcirculation/loan_on_desk_step3'] = function() {
    setTimeout(function() {
        $('#barcode').focus()
    }, 0);
}
paths['/bibcirculation/add_new_library_step1'] = function() {
    var style = '<style type="text/css">'
    + 'table.tablesorterborrower {'
    + '    width: 100% !important;'
    + '    background: none !important;'
    + '}'
    + 'table.tablesorterborrower tr th {'
    + '    background: none !important;'
    + '    width: 50px !important;'
    + '}'
    + '</style>';
    $('head').append(style);
    $('.pagebodystripemiddle > br, .bibcircbottom > br, form > br').remove();
}
paths['/bibcirculation/place_new_request_step1'] = paths['/bibcirculation/place_new_request_step2'] = function() {
    var style = '<style type="text/css">'
    + 'table.tablesorterborrower th {'
    + '    width: auto !important;'
    + '    background: none !important;'
    + '    font-size: small !important;'
    + '}'
    + 'table.tablesorterborrower {'
    + '    background: none !important;'
    + '}'
    + '</style>';
    $('head').append(style);
    $('table.tablesorterborrower th').removeAttr("width");
    $('table.bibcirctable > tbody > tr > td:nth-child(2)').attr("width", "20").find('table').remove()
}
paths['/bibcirculation/register_purchase_request_step1'] = function() {
    tweakPurchaseRequest()
}
paths['/bibcirculation/register_purchase_request_step2'] = function() {
    if ($('.infobox').length != 0) {
        tweakPurchaseRequest()
    }
}
function tweakPurchaseRequest() {
    var style = '<style type="text/css">'
    + 'table.tablesorterborrower tr th {'
    + '    background-color: white;'
    + '}'
    + 'table.tablesorterborrower {'
    + '    background: none;'
    + '}'
    + 'div.bibcircbottom th:not(.header) {'
    + '  font-size: 0.9em;'
    + '}'
    + 'table.bibcirctable {'
    + '  margin-bottom: 10px;'
    + '}'
    + '.bibcirctableheader {'
    + '  font-size: 1.2em;'
    + '}'
    + '</style>';
    $('head').append(style);
    document_details = $('table.tablesorterborrower')[0];
    request_details = $('table.tablesorterborrower')[1];
    $(document_details).attr("class", "pull-left");
    $(document_details).find('input[size="45"]').attr("size", "30");
    $(request_details).attr("class", "pull-right");
    $(request_details).find('input[name="budget_code"]').attr("size", "18");
    $(request_details).find('textarea[cols="48"]').attr("cols", "38");
    table_headers = $('.bibcirctableheader');
    $(table_headers[0]).removeAttr("width").css("width", "50%");
    $(table_headers[1]).detach().appendTo($(table_headers[0]).parent());
    $('table.bibcirctable')[1].remove();
    $('.pagebodystripemiddle > br, .bibcircbottom > br, form > br').remove();
}
paths['/bibcirculation/get_item_details'] = paths['/bibcirculation/update_item_info_step6'] = paths['/bibcirculation/item_search_result'] = function() {
    if ($('#table_copies').length == 0) {
        return;
    }
    var titlelink = $('.bibcirctable:first table a').detach();
    titlelink.html(titlelink.html().split(':')[0]);
    titlelink.attr("style", "font-size: 1.6em;");
    $('.bibcirctableheader:first').html(titlelink);
    $('.bibcirctableheader:first').attr('colspan', '4').attr("style", "white-space:normal");
    $('.bibcirctable:first table tr:first').remove();
    $('.bibcirctable:first table').parent().prepend("Information<br>");
    var recID = titlelink.attr("href").match(/\d+$/)[0];
    var thumbContainer = $('<div class="detailed thumb no-preview">');
    var thumbTD = $("<td width='140px'></td>");
    var el = thumbContainer.closest("td");
    $('.bibcirctable:first > tbody > tr:nth-child(2)').prepend(thumbTD.append(thumbContainer));
    addThumbnail(thumbContainer, recID, "", el);
    $('.bibcirctable:first .tablesorter th').attr("style", "width: 50px !important");
    $('.bibcirctable:first .tablesorter td').attr("style", "text-align: left");
    var seach_td = $('.bibcirctable:first > tbody > tr:nth-child(2) > td:nth-child(4)').detach();
    var overview_tables = $('.tablesortersmall').detach();
    $('.bibcirctable:first > tbody > tr:nth-child(2)').append($('<td style="padding-left: 15px;">Current status<br></td>').append(overview_tables[0]));
    $('.bibcirctable:first > tbody > tr:nth-child(2)').append($('<td style="padding-left: 15px;">Historical overview<br></td>').append(overview_tables[1]));
    var editbutton = $('.bibcirctable:first input[class="formbutton"]').detach().attr("style", "margin-left: 15px;");
    $('.bibcirctable:nth-of-type(4) td').append(editbutton);
    $('.bibcirctable:first > tbody > tr:nth-child(2) > td:nth-child(3)').remove();
    $('.bibcirctable:nth-of-type(5),'
    + ' .bibcirctable:nth-of-type(6),'
    + ' .bibcirctable:nth-of-type(7)').remove();
};
paths['/bibcirculation/list_ill_request'] = function() {
    $('table#table_ill td:nth-of-type(2)').attr("style", "text-align:left;width:200px;");
    $('table#table_ill td:nth-of-type(6), ' +
    'table#table_ill td:nth-of-type(7)').css("width", "100px");
    $('input').attr("style", "margin-top: 2px;");
};
paths['/bibcirculation/get_item_requests_details'] = function() {
    $('#table_requests input').attr("class", "bibcircbutton").attr("style", "margin-top:5px;");
};
paths['/bibcirculation/register_ill_book_request_result'] = function() {
    var style = '<style type="text/css">'
    + 'table.tablesorterborrower tr th {'
    + '    background-color: white;'
    + '}'
    + 'table.tablesorterborrower {'
    + '    background: none;'
    + '}'
    + 'div.bibcircbottom th:not(.header) {'
    + '  font-size: 0.9em;'
    + '}'
    + 'table.bibcirctable {'
    + '  margin-bottom: 10px;'
    + '}'
    + '.bibcirctableheader {'
    + '  font-size: 1.2em;'
    + '}'
    + '</style>';
    $('head').append(style);
    document_details = $('table.tablesorterborrower')[0];
    request_details = $('table.tablesorterborrower')[1];
    $(document_details).attr("class", "pull-left");
    $(document_details).find('input[size="45"]').attr("size", "30");
    $(request_details).attr("class", "pull-right");
    $(request_details).find('input[size="45"]').attr("size", "18");
    $(request_details).find('textarea[cols="48"]').attr("cols", "38");
    table_headers = $('.bibcirctableheader');
    $(table_headers[0]).removeAttr("width").css("width", "50%");
    $(table_headers[1]).detach().appendTo($(table_headers[0]).parent());
    $('table.bibcirctable')[1].remove();
    $('.pagebodystripemiddle > br, .bibcircbottom > br, form > br').remove();
    $('table td:nth-child(1) a').each(function() {
        var main_title = $(this).html().split(':')[0];
        $(this).html(main_title);
    });
    if ($('input[type="submit"]').length == 0) {
        $('.bibcircbottom').append('<a href="/admin2/bibcirculation/register_ill_request_with_no_recid_step1" class="pull-right formbutton">The book is not here, continue</a>');
    }
};
paths['/bibcirculation/loan_on_desk_step'] = function() {
    $('br').remove();
    var submitbutton = $('form[name="step1_form1"] input[type="submit"]').detach().css("margin-left", "10px");
    $('form[name="step1_form1"] input[type="text"]').after(submitbutton);
    $('form[name="step1_form1"] .bibcirctable:nth-of-type(2)').remove();
    $('form[name="step2_form"] .bibcirctableheader[width="77"]').attr("style", "padding:0;vertical-align:middle");
    $('form[name="step2_form"] .bibcirctable:nth-of-type(4)').hide();
}
paths['/bibcirculation/loan_return?'] = function() {
    $('.pagebodystripemiddle').show();
};
paths['/bibcirculation/borrower_search'] = function() {
    $('br').remove();
    var submitbutton = $('input[type="submit"]').detach().css("margin-left", "10px");
    $('input[type="text"]').after(submitbutton);
    $('form .bibcirctable:nth-of-type(2)').remove();
    setTimeout(function() {
        $('#string').focus()
    }, 0);
}
paths["/bibcirculation/borrower_search_result"] = function() {
    setTimeout(function() {
        $("input[name='p']").focus()
    }, 0);
};
paths['/bibcirculation/item_search'] = function() {
    $('br').remove();
    var submitbutton = $('input[type="submit"]').detach().css("margin-left", "10px");
    $('input[type="text"]').after(submitbutton);
    $('form .bibcirctable:nth-of-type(2)').remove();
    setTimeout(function() {
        $('#p').focus()
    }, 0);
}
paths['/bibcirculation/ill_search_result'] = function() {
    $('input').attr("style", "margin-top: 2px;");
    $('table td:nth-of-type(2)').attr("style", "text-align:left");
    $('table td:nth-of-type(6), ' +
    'table td:nth-of-type(7)').attr("style", "width: 80px");
}
paths['^/youraccount'] = function() {
    var loginform = !($('form').length == 0 || $('form').attr('action').indexOf('login') == -1);
    var accountdetails = ($('a.userinfo').length == 2 && (location.pathname.indexOf("display") != -1 || location.pathname.indexOf("login") != -1));
    var editaccount = location.pathname.indexOf("edit") != -1;
    var registeraccount = location.pathname.indexOf("register") != -1;
    if (loginform) {
        $('body').addClass('login');
    } else if (accountdetails) {
        tweakAccountDetails();
    } else if (editaccount) {
        tweakEditAccount();
    } else if (registeraccount) {
        tweakRegisterAccount();
    } else {
        $('.pagebody').attr("style", "min-height: 800px; background: rgb(255, 255, 255);");
    }
}
paths['^/yourmessages'] = function() {
    if ($('form[name="write_message"]').length != 0) {
        $('form[name="write_message"] div:nth-of-type(2)').css("width", "200px");
        var dd = $('.mailboxbody select[name="msg_send_day"]').hide();
        var dm = $('.mailboxbody select[name="msg_send_month"]').hide();
        var dy = $('.mailboxbody select[name="msg_send_year"]').hide();
        var date = (dd.val() !== '0' && dm.val() !== '0' && dy.val() !== '0') ? dd.val() + '/' + dm.val() + '/' + dy.val() : '';
        var td_sendlater = $('.mailboxbody select[name="msg_send_day"]').parent();
        $('<input type="text" placeholder="dd/mm/yyyy">').appendTo(td_sendlater).val(date).on('change', function() {
            var val = $(this).val().split('/');
            dd.val(parseInt(val[0], 10));
            dm.val(parseInt(val[1], 10));
            dy.val(parseInt(val[2], 10));
        }).datepicker({
            dateFormat: "dd/mm/yy"
        });
    }
}
paths['^/yourbaskets'] = function() {
    $('img[src$="wb-create-basket.png"]').replaceWith($('<i class="fa fa-plus" style="font-size:1.1em;margin-right:3px;"></i>'));
    $('img[src$="wb-go-back.png"]').replaceWith($('<i class="fa fa-reply" style="font-size:1.1em;margin-right:3px;"></i>'));
    $('img[src$="wb-edit-topic.png"]').replaceWith($('<i class="fa fa-cogs" style="font-size:1.1em;margin-right:3px;"></i>'));
    $('img[src$="webbasket_create.png"]').replaceWith($('<i class="fa fa-shopping-cart" style="font-size:1.3em;"></i>'));
    $('img[src$="webbasket_user.png"]').replaceWith($('<i class="fa fa-user" style="font-size:1.3em;"></i>'));
    $('.pagebodystripemiddle').show();
};
paths["^/record/edit/"] = function() {
    $(document).ready(function() {
        var parameters = $.parseParams(document.URL)["js_rec"];
        if (parameters != undefined) {
            var recids = parameters.split(",");
            var list_recids = [];
            for (var y = 0; y < recids.length; y++) {
                if (recids[y] != "") {
                    list_recids[list_recids.length] = parseInt(recids[y]);
                }
            }
            onSearchForRecordSuccess({
                "resultSet": list_recids
            });
        }
    });
    $(".bibEditCellContent").css("vertical-align", "top");
    if (typeof (resize_content) === typeof (Function)) {
        resize_content();
    }
};
paths['^/admin2/bibz39/'] = function() {
    $(".pagebodystripemiddle").css("width", "55%");
};
paths['^/youralerts'] = function() {
    cols = $('.alrtTable tr:first td').siblings().length;
    if (cols == 4) {
        $('.alrtTable tr td:nth-of-type(1)').css("width", "5%");
        $('.alrtTable tr td:nth-of-type(2)').css("width", "55%");
        $('.alrtTable tr td:nth-of-type(3)').css("width", "20%");
        $('.alrtTable tr td:nth-of-type(4)').css("width", "20%");
    } else if (cols == 9) {
        $('.alrtTable td').css("padding", "4px");
        $('.alrtTable tr.pageboxlefttop td:nth-of-type(3)').html('<i style="font-size: 1.6em" class="fa fa-clock-o"></i>');
        $('.alrtTable tr.pageboxlefttop td:nth-of-type(4)').html('<i style="font-size: 1.6em" class="fa fa-envelope-o"></i>');
        $('.alrtTable tr.pageboxlefttop td:nth-of-type(5)').html('<i style="font-size: 1.6em" class="fa fa-shopping-cart"></i>');
        $('.alrtTable tr td:nth-of-type(1)').css("width", "3%");
        $('.alrtTable tr td:nth-of-type(2)').css("width", "15%");
        $('.alrtTable tr td:nth-of-type(3)').css("width", "5%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(4)').css("width", "5%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(5)').css("width", "10%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(6)').css("width", "12%");
        ;
        $('.alrtTable tr td:nth-of-type(7)').css("width", "12%");
        $('.alrtTable tr td:nth-of-type(8)').css("width", "25%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(9)').css("width", "13%");
    }
}
paths['^/yourgroups'] = function() {
    if (location.pathname.indexOf("members") != -1) {
        $('table.bskbasket').width("500px");
        $('table.bskbasket table').css("margin", "5px");
    }
    $('img[src$="group_admin.png"]').remove();
    $('img[src$="webbasket_us.png"]').remove();
    $('img[src$="webbasket_create_small.png"]').replaceWith($('<i class="fa fa-cogs" style="font-size:1.3em;"></i>'));
    $('img[src$="webbasket_create.png"]').replaceWith($('<i class="fa fa-cogs" style="font-size:1.3em;"></i>'));
    $('img[src$="webbasket_usergroup_gray.png"]').replaceWith($('<i class="fa fa-group" style="font-size:1.3em;"></i>'));
    $('img[src$="webbasket_usergroup.png"]').replaceWith($('<i class="fa fa-group" style="font-size:1.3em;"></i>'));
    $('img[src$="iconpen.gif"]').replaceWith($('<i class="fa fa-pencil" style="font-size:1.3em;"></i>'));
    $('.mailboxfooter td:nth-of-type(4)').remove();
}
paths['^/youralerts'] = function() {
    cols = $('.alrtTable tr:first td').siblings().length;
    if (cols == 4) {
        $('.alrtTable tr td:nth-of-type(1)').css("width", "5%");
        $('.alrtTable tr td:nth-of-type(2)').css("width", "55%");
        $('.alrtTable tr td:nth-of-type(3)').css("width", "20%");
        $('.alrtTable tr td:nth-of-type(4)').css("width", "20%");
    } else if (cols == 9) {
        $('.alrtTable td').css("padding", "4px");
        $('.alrtTable tr.pageboxlefttop td:nth-of-type(3)').html('<i style="font-size: 1.6em" class="fa fa-clock-o"></i>');
        $('.alrtTable tr.pageboxlefttop td:nth-of-type(4)').html('<i style="font-size: 1.6em" class="fa fa-envelope-o"></i>');
        $('.alrtTable tr.pageboxlefttop td:nth-of-type(5)').html('<i style="font-size: 1.6em" class="fa fa-archive"></i>');
        $('.alrtTable tr td:nth-of-type(1)').css("width", "3%");
        $('.alrtTable tr td:nth-of-type(2)').css("width", "15%");
        $('.alrtTable tr td:nth-of-type(3)').css("width", "5%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(4)').css("width", "5%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(5)').css("width", "10%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(6)').css("width", "12%");
        ;
        $('.alrtTable tr td:nth-of-type(7)').css("width", "12%");
        $('.alrtTable tr td:nth-of-type(8)').css("width", "25%").css("font-size", "0.9em");
        $('.alrtTable tr td:nth-of-type(9)').css("width", "13%");
    }
};
paths['^/yourloans'] = function() {
    $('table.tablesortermedium').attr('class', 'tablesorter');
    $('table.tablesorter td:nth-of-type(2), table.tablesorter td:nth-of-type(3)').css('width', '80px');
    $('a[href*="renew_all"]').parent().css('text-align', 'right');
}
paths['^/stats/customevent'] = function() {
    $('#cols0 tr[valign="bottom"] td:nth-of-type(1)').css('width', "180px");
    $('#cols0 tr[valign="bottom"] td:nth-of-type(2)').css('width', "100px");
    $('#cols0 tr[valign="bottom"] td:nth-of-type(3)').css('width', "200px");
    $('#time_format tr[valign="bottom"]').append('<td width="22%">');
}
paths['article_request_step1'] = function() {
    params = $.parseParams(location.search.substring(1));
    $('input[name="issn"]').val(params['issn']);
    $('input[name="periodical_title"]').val(params['periodical_title']);
};
paths['^/submit'] = function() {
    $('.form-element select').chosen({
        disable_search_threshold: 10,
        width: ''
    });
    $('form > center > table').attr("style", "-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;background:#345681;");
    $('input.adminbutton').parent().find('br').remove();
    $('input.adminbutton').css("display", "inline");
    $('table[bgcolor="#CCCCCC"]').attr("style", "padding: 0 10px;margin-top: 10px;");
    $('input[name*="date"], input[name*="Date"]').datepicker({
        dateFormat: "yy-mm-dd"
    }).css("width", "110px");
    $('#uploadFileInterface input[type="button"]').addClass("formbutton");
    $('td.submitHeader button[type="submit"]').html("<i class='fa fa-check'></i>&nbsp;Submit");
    returnlink = $('img[src$="mainmenu.gif"]').parent();
    returnlink.detach().addClass("cancel").html("<i class='fa fa-trash-o'></i>&nbsp;Cancel");
    if (window.location.search.indexOf('recid') > -1) {
        $('button[type="submit"]').before(returnlink);
        $('button[type="submit"]').css("margin-left", "5px");
    }
    else {
        savelink = $('<input class="adminbutton" name="save" value="Save" style="display: inline; margin-left:5px; margin-right: 5px;" width="400" type="button" height="50">');
        $('button[type="submit"]').before(returnlink).before(savelink);
        $("[name=save]").on("click", function() {
            save();
            document.querySelector("[name=save]").value = "Saved !";
            $("[name=save]").animate({
                backgroundColor: '#5fba7d',
                "border-color": '1px solid #5fba7d',
                "wdith": "55px"
            }, 500);
            setTimeout(function() {
                document.querySelector("[name=save]").value = 'Save';
                $("[name=save]").animate({
                    backgroundColor: '#428bca',
                    "border-color": '1px solid #357ebd',
                    "wdith": "38px"
                }, 500);
            }, 3000);
        });
    }
    $('.submitBody .form-group label').each(function() {
        var header = $(this).html().split('<br>')[0];
        var desc = $(this).html().split('<br>')[1];
        $(this).html('<span class="submitElemHeader">' + header + '</span>');
        if (desc !== undefined) {
            $(this).parent().find(".form-element").append('<span class="submitElemText">' + desc + '</span>');
        }
    });
}
$(document).ready(function() {
    if (typeof (TOP_LINKS) == 'object') {
        $('.pageheader tr.menu').each(function() {
            for (var key in TOP_LINKS) {
                var tblcell = $('<td class="headermoduleboxbody">');
                if (typeof (TOP_LINKS[key]) == 'object') {
                    var menudiv = $('<div class="hassubmenu">')
                    var submenu = $('<ul class="subsubmenu">');
                    for (menukey in TOP_LINKS[key]) {
                        $(submenu).append('<li><a href="' + TOP_LINKS[key][menukey] + '">' + menukey + '</a></li>');
                    }
                    $(menudiv).append('<a class="header" href="#">' + key + '</a></td>');
                    $(menudiv).append(submenu);
                    $(tblcell).append(menudiv)
                } else {
                    $(tblcell).append('<a class="header" href="' + TOP_LINKS[key] + '">' + key + '</a></td>')
                }
                $(this).append(tblcell);
            }
        })
    }
    $('input.adminbutton').show();
    ie = IEversion();
    if (ie < 99) {
        $('html').addClass('ie').addClass(String(ie));
    }
    for (var pattern in paths) {
        if (window.location.pathname.match(pattern)) {
            paths[pattern]();
        }
    }
    $('.pagefooterstriperight').detach().appendTo('body');
    $("#date_picker1, #date_picker2").css("margin-right", "7px").css("width", "110px");
    $('.pagebodystripemiddle').show();
    $('.menu-toggle').click(function() {
        if ($('.topmenu').hasClass("expanded")) {
            $('.topmenu').slideUp(400, "swing", function() {
                $(this).removeClass("expanded");
            });
        } else {
            $('.topmenu').slideDown(400, "swing", function() {
                $(this).addClass("expanded");
            });
        }
    });
    $('.headermoduleboxbody').mouseenter(function() {
        if ($(window).width() < 650) {
            $(this).find('.subsubmenu-wrapper').slideDown(400, "swing");
        }
    });
    $('.subsubmenu-wrapper').mouseleave(function() {
        $(this).slideUp(400, "swing");
    });
});
$(window).on('resize', function() {
    if ($(window).width() > 649 && $('.topmenu').hasClass("expanded")) {
        $('.topmenu').removeClass('expanded').css('overflow', '');
    }
});
function update_popup_position() {
    var popupWidget = $("#popup_widget"),
        win = $(window);
    if (popupWidget.length > 0) {
        $("#popup_widget_background").css("height", $(document).height());
        popupWidget.css("top", win.height() / 2 - popupWidget.height() / 2 + win.scrollTop() + "px");
        popupWidget.css("left", win.width() / 2 - popupWidget.width() / 2 + "px");
        if (popupWidget.get(0).scrollHeight > popupWidget.height()) {
            popupWidget.css("overflow", "auto");
        } else {
            popupWidget.css("overflow", "none");
        }
    }
}
var Popup = function() {
    this.url_widget = "";
    var self = this;
    this.init = function() {};
    this.flash = function(message, type) {
        "use strict";
        var box = $(".popup_title");
        if (typeof type == "undefined") {
            type = "success";
        }
        box.after("<div class='alert alert-" + type + "'>" + message + "</div>");
        setTimeout(function() {
            var flash_msg = $(".alert");
            flash_msg.fadeOut(300, function() {
                flash_msg.remove();
            });
        }, 5000);
    };
    this.show = function() {
        var popupWidget,
            popupWidgetBackground,
            body = $("body"),
            win = $(window),
            documentHeight = $(document).height();
        body.append("<div id='popup_widget'><div onclick='popup.close()' style='position: relative; float:right; top:15px; right:15px;'><i class='fa fa-times'></i></div><div id='content'><p style='text-align: center;'><i class='fa fa-spinner fa-spin fa-3x'></i></p></div></div>");
        body.append("<div id='popup_widget_background'></div>");
        popupWidget = $("#popup_widget");
        popupWidgetBackground = $("#popup_widget_background");
        popupWidgetBackground.on('wheel mousewheel', function(e, d) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        popupWidget.on('wheel mousewheel', function(e, d) {
            var scrollHeight = popupWidget.get(0).scrollHeight;
            var scrollTop = popupWidget.get(0).scrollTop;
            var height = popupWidget.height(),
                t = $(e.target),
                oe = e.originalEvent;
            var scrollBottom = scrollHeight - height - scrollTop;
            if (t.parents("#popup_widget").length > 0 && (t.parents(".chosen-results").length > 0 || !((scrollBottom <= 1 && oe.deltaY > 0) || (scrollTop === 0 && oe.deltaY < 0)))) {
                return true;
            }
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        update_popup_position();
        $("#popup_widget_background").css("height", documentHeight);
        win.on("resize", function() {
            update_popup_position();
        });
    };
    this.next = function(url, data, method) {
        if (typeof url === "undefined") {
            url = this.url_widget;
        }
        if (typeof data === "undefined") {
            $.ajax({
                url: url,
                dataType: 'html'
            }).always(function(data) {
                self.changeContent(data);
            });
        }
        else {
            if (typeof method === "undefined") {
                method = "GET";
            }
            $.ajax({
                type: method,
                url: url,
                dataType: 'html',
                data: data
            }).always(function(data) {
                self.changeContent(data);
            });
        }
    };
    this.changeContent = function(content) {
        $("#popup_widget > #content").html(content);
        update_popup_position();
    };
    this.close = function() {
        $("#popup_widget").remove();
        $("#popup_widget_background").remove();
        $('body').off('mousewheel wheel');
    };
};
var popup = new Popup();
popup.init();
function inputsToUrl(inputs) {
    var url = "";
    inputs.each(function(index) {
        url += "&" + this.name + "=" + this.value;
    });
    return url;
}
function inputsToData(inputs) {
    var data = {};
    inputs.each(function(index) {
        if (!data[this.name]) {
            data[this.name] = []
        }
        data[this.name] = data[this.name].concat(this.value);
    });
    return data;
}
function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key))
            obj[key] = src[key];
    }
    return obj;
}
function valueClick(event, key, value) {
    var form = $(event.target).closest("form");
    if (key === "rm") {
        $("input[name=sf]").val("");
    } else if (key === "sf") {
        $("input[name=rm]").val("");
    }
    $("input[name=" + key + "]").val(value);
    submitSearchForm(form);
    event.stopPropagation();
    event.preventDefault();
    return false;
}
function setSorting(event, sortMethod, sortField, sortOrder) {
    if (sortOrder !== undefined) {
        $("input[name=so]").val(sortOrder);
    }
    return valueClick(event, sortMethod, sortField);
}
function facetClick(event, key, value) {
    if (event.checked) {
        insertParam(key, value);
    }
    else {
        removeParam(key, value);
    }
    var form = $(event).closest("form");
    submitSearchForm(form);
}
function toggle_facet_visibility(el, more, less) {
    var fct_block = $('.' + $(el).data('for'));
    var fct_block_parent = $(fct_block).parent();
    if (fct_block.is(':visible')) {
        fct_block_parent.removeClass('expanded');
        fct_block.hide();
        $(el).text(more);
    }
    else {
        fct_block.show();
        fct_block_parent.addClass('expanded');
        $(el).text(less);
    }
}
function insertParam(key, value) {
    $("#facet_filter").append('<input type="hidden" name="' + key + '" value="' + value + '">');
}
function removeParam(key, value) {
    $("input[name='" + key + "'][value='" + value + "']").remove()
}
function print_notif(message, type, timeout, callback) {
    var msg_area = $(".messagearea"),
        box;
    if (msg_area.length === 0) {
        $('.headline_div').append('<div class="messagearea">');
        msg_area = $(".messagearea");
    }
    if ((type.indexOf("alert") === -1) || (type.indexOf("alert") > 0)) {
        box = "<div class='alert alert-" + type + "'>" + message + "<div onclick='closingAlert(event);' class='boxclose' id='boxclose'><i class='fa fa-times'></i></div></div>";
    }
    if (typeof callback !== 'undefined') {
        callback();
    }
    msg_area.append(box);
    if (typeof timeout === 'undefined') {
        setTimeout(function() {
            $(".alert").fadeOut(300, function() {
                $(".alert").remove();
            });
        }, 6000);
    } else {
        if (timeout !== -1) {
            setTimeout(function() {
                $(".alert").fadeOut(300, function() {
                    $(".alert").remove();
                });
            }, timeout);
        }
    }
}
function closingAlert(event) {
    $(event.target).closest(".alert").fadeOut(function() {
        $(event.target).closest(".alert").remove();
    });
}
var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};
function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function(s) {
        return entityMap[s];
    });
}
jQuery.fn.putCursorAtEnd = function() {
    return this.each(function() {
        var $el = $(this),
            el = this;
        if (!$el.is(":focus")) {
            $el.focus();
        }
        if (el.setSelectionRange) {
            var len = $el.val().length * 2;
            setTimeout(function() {
                el.setSelectionRange(len, len);
            }, 1);
        } else {
            $el.val($el.val());
        }
        this.scrollTop = 999999;
    });
};
function select_collection() {
    $('input[name=rm]').val('');
    $('input[name=sf]').val('');
    $('form[name=search]').submit();
}
Raven.config("https://6a07fedac7fa4a8d915e37a9dc6e21c4@sentry.tind.io/4", {
    fetchContext: true,
    linesOfContext: 11,
    collectWindowErrors: true
}).install()

