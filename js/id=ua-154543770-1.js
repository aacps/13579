// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []

    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa, da = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ea;
    if ("function" == typeof Object.setPrototypeOf)
        ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                Mf: !0
            }
              , ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.Mf;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ja = ea
      , ka = function(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja)
            ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c]
    }
      , la = this || self
      , oa = /^[\w+/_-]+[=]{0,2}$/
      , pa = null;
    var qa = function() {}
      , ra = function(a) {
        return "function" == typeof a
    }
      , g = function(a) {
        return "string" == typeof a
    }
      , sa = function(a) {
        return "number" == typeof a && !isNaN(a)
    }
      , ua = function(a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }
      , va = function(a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++)
            if (a[d] === b)
                return d;
        return -1
    }
      , wa = function(a, b) {
        if (a && ua(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , ya = function(a, b) {
        if (!sa(a) || !sa(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Aa = function(a, b) {
        for (var c = new za, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Ba = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Ca = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Da = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }
      , Ea = function(a) {
        var b = [];
        if (ua(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Fa = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ga = function() {
        return (new Date).getTime()
    }
      , za = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    za.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    za.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ha = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Ia = function(a) {
        var b = !1;
        return function() {
            if (!b)
                try {
                    a()
                } catch (c) {}
            b = !0
        }
    }
      , Ja = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Ka = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , La = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , Ma = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , Na = function(a) {
        var b = [];
        Ba(a, function(c, d) {
            10 > c.length && d && b.push(c)
        });
        return b.join(",")
    };
    /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Oa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Pa = function(a) {
        if (null == a)
            return String(a);
        var b = Oa.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Qa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Ra = function(a) {
        if (!a || "object" != Pa(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Qa(a, "constructor") && !Qa(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Qa(a, b)
    }
      , n = function(a, b) {
        var c = b || ("array" == Pa(a) ? [] : {}), d;
        for (d in a)
            if (Qa(a, d)) {
                var e = a[d];
                "array" == Pa(e) ? ("array" != Pa(c[d]) && (c[d] = []),
                c[d] = n(e, c[d])) : Ra(e) ? (Ra(c[d]) || (c[d] = {}),
                c[d] = n(e, c[d])) : c[d] = e
            }
        return c
    };
    var qb;
    var rb = [], sb = [], tb = [], ub = [], vb = [], wb = {}, xb, yb, zb, Ab = function(a, b) {
        var c = a["function"];
        if (!c)
            throw Error("Error: No function name given for function call.");
        var d = wb[c], e = {}, f;
        for (f in a)
            a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[f]);
        return void 0 !== d ? d(e) : qb(c, e, b)
    }, Db = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Bb(a[e], b, c));
        return d
    }, Eb = function(a) {
        var b = a["function"];
        if (!b)
            throw "Error: No function name given for function call.";
        var c = wb[b];
        return c ? c.priorityOverride || 0 : 0
    }, Bb = function(a, b, c) {
        if (ua(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Bb(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var h = rb[f];
                if (!h || b.Zc(h))
                    return;
                c[f] = !0;
                try {
                    var k = Db(h, b, c);
                    k.vtp_gtmEventId = b.id;
                    d = Ab(k, b);
                    zb && (d = zb.kg(d, k))
                } catch (y) {
                    b.Ke && b.Ke(y, Number(f)),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var l = 1; l < a.length; l += 2)
                    d[Bb(a[l], b, c)] = Bb(a[l + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, m = 1; m < a.length; m++) {
                    var r = Bb(a[m], b, c);
                    yb && (p = p || r === yb.Lb);
                    d.push(r)
                }
                return yb && p ? yb.ng(d) : d.join("");
            case "escape":
                d = Bb(a[1], b, c);
                if (yb && ua(a[1]) && "macro" === a[1][0] && yb.Lg(a))
                    return yb.bh(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Sa[a[t]] && (d = Sa[a[t]](d));
                return d;
            case "tag":
                var q = a[1];
                if (!ub[q])
                    throw Error("Unable to resolve tag reference " + q + ".");
                return d = {
                    we: a[2],
                    index: q
                };
            case "zb":
                var u = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                u["function"] = a[1];
                var v = Fb(u, b, c)
                  , w = !!a[4];
                return w || 2 !== v ? w !== (1 === v) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Fb = function(a, b, c) {
        try {
            return xb(Db(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Gb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Fd: a("convert_case_to"),
            Gd: a("convert_false_to"),
            Hd: a("convert_null_to"),
            Id: a("convert_true_to"),
            Jd: a("convert_undefined_to"),
            Jh: a("debug_mode_metadata"),
            Ia: a("function"),
            pf: a("instance_name"),
            tf: a("live_only"),
            vf: a("malware_disabled"),
            wf: a("metadata"),
            Kh: a("original_vendor_template_id"),
            Af: a("once_per_event"),
            Qd: a("once_per_load"),
            Yd: a("setup_tags"),
            $d: a("tag_id"),
            ae: a("teardown_tags")
        }
    }();
    var Hb = null
      , Kb = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        var c = []
          , d = [];
        Hb = Ib(a);
        for (var e = 0; e < sb.length; e++) {
            var f = sb[e]
              , h = Jb(f);
            if (h) {
                for (var k = f.add || [], l = 0; l < k.length; l++)
                    c[k[l]] = !0;
                b(f.block || [])
            } else
                null === h && b(f.block || [])
        }
        for (var p = [], m = 0; m < ub.length; m++)
            c[m] && !d[m] && (p[m] = !0);
        return p
    }
      , Jb = function(a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = Hb(b[c]);
            if (0 === d)
                return !1;
            if (2 === d)
                return null
        }
        for (var e = a.unless || [], f = 0; f < e.length; f++) {
            var h = Hb(e[f]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , Ib = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Fb(tb[c], a));
            return b[c]
        }
    };
    var Lb = {
        kg: function(a, b) {
            b[Gb.Fd] && "string" === typeof a && (a = 1 == b[Gb.Fd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Gb.Hd) && null === a && (a = b[Gb.Hd]);
            b.hasOwnProperty(Gb.Jd) && void 0 === a && (a = b[Gb.Jd]);
            b.hasOwnProperty(Gb.Id) && !0 === a && (a = b[Gb.Id]);
            b.hasOwnProperty(Gb.Gd) && !1 === a && (a = b[Gb.Gd]);
            return a
        }
    };
    /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var C = {
        eb: "_ee",
        Lc: "_syn",
        Nh: "_uei",
        Lh: "_pci",
        Ac: "event_callback",
        Kb: "event_timeout",
        ba: "gtag.config",
        ca: "allow_ad_personalization_signals",
        Bc: "restricted_data_processing",
        ab: "allow_google_signals",
        da: "cookie_expires",
        Jb: "cookie_update",
        cb: "session_duration",
        la: "user_properties",
        ya: "transport_url",
        M: "ads_data_redaction",
        m: "ad_storage",
        J: "analytics_storage",
        cf: "region",
        df: "wait_for_update"
    };
    C.xd = "page_view",
    C.Ah = "user_engagement",
    C.qa = "purchase",
    C.Yb = "refund",
    C.fb = "begin_checkout",
    C.Sb = "add_to_cart",
    C.Ub = "remove_from_cart",
    C.jh = "view_cart",
    C.Od = "add_to_wishlist",
    C.Ka = "view_item",
    C.zh = "view_promotion",
    C.wh = "select_promotion",
    C.qh = "select_item",
    C.wd = "view_item_list",
    C.Nd = "add_payment_info",
    C.ih = "add_shipping_info",
    C.Ch = "allow_custom_scripts",
    C.Gh = "allow_display_features",
    C.zd = "allow_enhanced_conversions",
    C.Dd = "enhanced_conversions",
    C.$b = "client_id",
    C.T = "cookie_domain",
    C.bc = "cookie_name",
    C.Na = "cookie_path",
    C.ia = "cookie_flags",
    C.ka = "currency",
    C.Ad = "custom_params",
    C.fe = "custom_map",
    C.Cc = "groups",
    C.Oa = "language",
    C.Ih = "country",
    C.Oh = "non_interaction",
    C.lb = "page_location",
    C.mb = "page_referrer",
    C.Ec = "page_title",
    C.nb = "send_page_view",
    C.za = "send_to",
    C.Fc = "session_engaged",
    C.fc = "session_id",
    C.Gc = "session_number",
    C.Ef = "tracking_id",
    C.ra = "linker",
    C.pb = "url_passthrough",
    C.ib = "accept_incoming",
    C.F = "domains",
    C.kb = "url_position",
    C.jb = "decorate_forms",
    C.Be = "phone_conversion_number",
    C.ue = "phone_conversion_callback",
    C.ve = "phone_conversion_css_class",
    C.Ce = "phone_conversion_options",
    C.xf = "phone_conversion_ids",
    C.uf = "phone_conversion_country_code",
    C.Rd = "aw_remarketing",
    C.Td = "aw_remarketing_only",
    C.ja = "value",
    C.yf = "quantity",
    C.ef = "affiliation",
    C.ke = "tax",
    C.kf = "shipping",
    C.wc = "list_name",
    C.je = "checkout_step",
    C.ie = "checkout_option",
    C.hf = "coupon",
    C.jf = "promotions",
    C.ob = "transaction_id",
    C.qb = "user_id",
    C.Ma = "conversion_linker",
    C.La = "conversion_cookie_prefix",
    C.V = "cookie_prefix",
    C.R = "items",
    C.ce = "aw_merchant_id",
    C.Xd = "aw_feed_country",
    C.Zd = "aw_feed_language",
    C.Ud = "discount",
    C.he = "disable_merchant_reported_purchases",
    C.me = "new_customer",
    C.de = "customer_lifetime_value",
    C.bf = "dc_natural_search",
    C.$e = "dc_custom_params",
    C.Ff = "trip_type",
    C.pe = "passengers",
    C.rf = "method",
    C.Df = "search_term",
    C.Hh = "content_type",
    C.sf = "optimize_id",
    C.lf = "experiments",
    C.gb = "google_signals",
    C.zc = "google_tld",
    C.hc = "update",
    C.yc = "firebase_id",
    C.cc = "ga_restrict_domain",
    C.xc = "event_settings",
    C.Bd = "dynamic_event_settings",
    C.Cf = "screen_name",
    C.qf = "_x_19",
    C.nf = "_x_20",
    C.Hf = [C.ca, C.ab, C.R, C.Bc, C.T, C.da, C.ia, C.bc, C.Na, C.V, C.Jb, C.fe, C.Ad, C.Bd, C.Ac, C.xc, C.Kb, C.cc, C.gb, C.zc, C.Cc, C.ra, C.za, C.nb, C.cb, C.hc, C.la, C.ya, C.zd],
    C.Ee = [C.lb, C.mb, C.Ec, C.Oa, C.Cf, C.qb, C.yc],
    C.If = [C.qa, C.Yb, C.fb, C.Sb, C.Ub, C.jh, C.Od, C.Ka, C.zh, C.wh, C.wd, C.qh, C.Nd, C.ih],
    C.Md = [C.za, C.Rd, C.Td, C.Ad, C.nb, C.Oa, C.ja, C.ka, C.ob, C.qb, C.Ma, C.La, C.V, C.T, C.da, C.ia, C.lb, C.mb, C.Be, C.ue, C.ve, C.Ce, C.R, C.ce, C.Xd, C.Zd, C.Ud, C.he, C.me, C.de, C.ca, C.Bc, C.hc, C.yc, C.Dd, C.ya, C.pb, C.zd];
    C.Fe = [C.ca, C.ab, C.Jb];
    C.Ge = [C.da, C.Kb, C.cb];
    var hc = {}
      , ic = function(a, b) {
        hc[a] = hc[a] || [];
        hc[a][b] = !0
    }
      , jc = function(a) {
        for (var b = [], c = hc[a] || [], d = 0; d < c.length; d++)
            c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var E = function(a) {
        ic("GTM", a)
    };
    var G = window
      , H = document
      , kc = navigator
      , lc = H.currentScript && H.currentScript.src
      , mc = function(a, b) {
        var c = G[a];
        G[a] = void 0 === c ? b : c;
        return G[a]
    }
      , nc = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , oc = function(a, b, c) {
        var d = H.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        d.src = a;
        nc(d, b);
        c && (d.onerror = c);
        var e;
        if (null === pa)
            b: {
                var f = la.document
                  , h = f.querySelector && f.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && oa.test(k)) {
                        pa = k;
                        break b
                    }
                }
                pa = ""
            }
        e = pa;
        e && d.setAttribute("nonce", e);
        var l = H.getElementsByTagName("script")[0] || H.body || H.head;
        l.parentNode.insertBefore(d, l);
        return d
    }
      , pc = function() {
        if (lc) {
            var a = lc.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , qc = function(a, b) {
        var c = H.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = H.body && H.body.lastChild || H.body || H.head;
        d.parentNode.insertBefore(c, d);
        nc(c, b);
        void 0 !== a && (c.src = a);
        return c
    }
      , rc = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a;
        return d
    }
      , sc = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , tc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , I = function(a) {
        G.setTimeout(a, 0)
    }
      , uc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , vc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , wc = function(a) {
        var b = H.createElement("div");
        b.innerHTML = "A<div>" + a + "</div>";
        b = b.lastChild;
        for (var c = []; b.firstChild; )
            c.push(b.removeChild(b.firstChild));
        return c
    }
      , xc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, h = 0; f && h <= c; h++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , yc = function(a) {
        kc.sendBeacon && kc.sendBeacon(a) || rc(a)
    }
      , zc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    };
    var Ac = {}
      , Dc = function(a) {
        return void 0 == Ac[a] ? !1 : Ac[a]
    };
    var Ec = [];
    function Fc() {
        var a = mc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Gc,
            update: Hc,
            addListener: Ic,
            notifyListeners: Jc,
            active: !1
        });
        return a.ics
    }
    function Gc(a, b, c, d, e, f) {
        var h = Fc();
        h.active = !0;
        if (void 0 != b) {
            var k = h.entries
              , l = k[a] || {}
              , p = l.region
              , m = c && g(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (m === e || (m === d ? p !== e : !m && !p)) {
                var r = !!(f && 0 < f && void 0 === l.update)
                  , t = {
                    region: m,
                    initial: "granted" === b,
                    update: l.update,
                    quiet: r
                };
                k[a] = t;
                r && G.setTimeout(function() {
                    k[a] === t && t.quiet && (t.quiet = !1,
                    Kc(a),
                    Jc(),
                    ic("TAGGING", 2))
                }, f)
            }
        }
    }
    function Hc(a, b) {
        var c = Fc();
        c.active = !0;
        if (void 0 != b) {
            var d = Lc(a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = Lc(a);
            f.quiet ? (f.quiet = !1,
            Kc(a)) : h !== d && Kc(a)
        }
    }
    function Ic(a, b) {
        Ec.push({
            qe: a,
            xg: b
        })
    }
    function Kc(a) {
        for (var b = 0; b < Ec.length; ++b) {
            var c = Ec[b];
            ua(c.qe) && -1 !== c.qe.indexOf(a) && (c.Se = !0)
        }
    }
    function Jc() {
        for (var a = 0; a < Ec.length; ++a) {
            var b = Ec[a];
            if (b.Se) {
                b.Se = !1;
                try {
                    b.xg.call()
                } catch (c) {}
            }
        }
    }
    var Lc = function(a) {
        var b = Fc().entries[a] || {};
        return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
    }
      , Mc = function(a) {
        return !(Fc().entries[a] || {}).quiet
    }
      , Nc = function() {
        return Dc("gtag_cs_api") ? Fc().active : !1
    }
      , Oc = function(a, b) {
        Fc().addListener(a, b)
    }
      , Pc = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Mc(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Oc(b, function() {
                d || c() || (d = !0,
                a())
            })
        } else
            a()
    }
      , Qc = function(a, b) {
        if (!1 === Lc(b)) {
            var c = !1;
            Oc([b], function() {
                !c && Lc(b) && (a(),
                c = !0)
            })
        }
    };
    var Rc = [C.m, C.J]
      , Sc = function(a) {
        var b = a[C.cf];
        b && E(40);
        var c = a[C.df];
        c && E(41);
        for (var d = ua(b) ? b : [b], e = 0; e < d.length; ++e)
            for (var f = 0; f < Rc.length; f++) {
                var h = Rc[f]
                  , k = a[Rc[f]]
                  , l = d[e];
                Fc().set(h, k, l, "HK", "", c)
            }
    }
      , Tc = function(a) {
        for (var b = 0; b < Rc.length; b++) {
            var c = Rc[b]
              , d = a[Rc[b]];
            Fc().update(c, d)
        }
        Fc().notifyListeners()
    }
      , Uc = function(a) {
        var b = Lc(a);
        return void 0 != b ? b : !0
    }
      , Vc = function() {
        for (var a = [], b = 0; b < Rc.length; b++) {
            var c = Lc(Rc[b]);
            a[b] = !0 === c ? "1" : !1 === c ? "0" : "-"
        }
        return "G1" + a.join("")
    }
      , Wc = function(a, b) {
        Pc(a, b)
    };
    var Yc = function(a) {
        return Xc ? H.querySelectorAll(a) : null
    }
      , Zc = function(a, b) {
        if (!Xc)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!H.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);return null
    }
      , $c = !1;
    if (H.querySelectorAll)
        try {
            var ad = H.querySelectorAll(":root");
            ad && 1 == ad.length && ad[0] == H.documentElement && ($c = !0)
        } catch (a) {}
    var Xc = $c;
    var od = {}
      , K = null
      , pd = Math.random();
    od.s = "UA-154543770-1";
    od.Pb = "7v1";
    od.Pd = "";
    var qd = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0,
        __paused: !0,
        __tg: !0
    }
      , ud = "www.googletagmanager.com/gtm.js";
    ud = "www.googletagmanager.com/gtag/js";
    var vd = ud
      , wd = null
      , xd = null
      , yd = "//www.googletagmanager.com/a?id=" + od.s + "&cv=1"
      , zd = {}
      , Ad = {}
      , Bd = function() {
        var a = K.sequence || 1;
        K.sequence = a + 1;
        return a
    };
    var Cd = function() {
        return "&tc=" + ub.filter(function(a) {
            return a
        }).length
    }
      , Fd = function() {
        Dd || (Dd = G.setTimeout(Ed, 500))
    }
      , Ed = function() {
        Dd && (G.clearTimeout(Dd),
        Dd = void 0);
        void 0 === Gd || Hd[Gd] && !Id && !Jd || (Kd[Gd] || Ld.Ng() || 0 >= Md-- ? (E(1),
        Kd[Gd] = !0) : (Ld.lh(),
        rc(Nd()),
        Hd[Gd] = !0,
        Od = Pd = Jd = Id = ""))
    }
      , Nd = function() {
        var a = Gd;
        if (void 0 === a)
            return "";
        var b = jc("GTM")
          , c = jc("TAGGING");
        return [Qd, Hd[a] ? "" : "&es=1", Rd[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Cd(), Id, Jd, Pd, Od, "&z=0"].join("")
    }
      , Sd = function() {
        return [yd, "&v=3&t=t", "&pid=" + ya(), "&rv=" + od.Pb].join("")
    }
      , Td = "0.005000" > Math.random()
      , Qd = Sd()
      , Ud = function() {
        Qd = Sd()
    }
      , Hd = {}
      , Id = ""
      , Jd = ""
      , Od = ""
      , Pd = ""
      , Gd = void 0
      , Rd = {}
      , Kd = {}
      , Dd = void 0
      , Ld = function(a, b) {
        var c = 0
          , d = 0;
        return {
            Ng: function() {
                if (c < a)
                    return !1;
                Ga() - d >= b && (c = 0);
                return c >= a
            },
            lh: function() {
                Ga() - d >= b && (c = 0);
                c++;
                d = Ga()
            }
        }
    }(2, 1E3)
      , Md = 1E3
      , Vd = function(a, b) {
        if (Td && !Kd[a] && Gd !== a) {
            Ed();
            Gd = a;
            Od = Id = "";
            var c;
            c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
            Rd[a] = "&e=" + c + "&eid=" + a;
            Fd()
        }
    }
      , Wd = function(a, b, c) {
        if (Td && !Kd[a] && b) {
            a !== Gd && (Ed(),
            Gd = a);
            var d, e = String(b[Gb.Ia] || "").replace(/_/g, "");
            0 === e.indexOf("cvt") && (e = "cvt");
            d = e;
            var f = c + d;
            Id = Id ? Id + "." + f : "&tr=" + f;
            var h = b["function"];
            if (!h)
                throw Error("Error: No function name given for function call.");
            var k = (wb[h] ? "1" : "2") + d;
            Od = Od ? Od + "." + k : "&ti=" + k;
            Fd();
            2022 <= Nd().length && Ed()
        }
    }
      , Xd = function(a, b, c) {
        if (Td && !Kd[a]) {
            a !== Gd && (Ed(),
            Gd = a);
            var d = c + b;
            Jd = Jd ? Jd + "." + d : "&epr=" + d;
            Fd();
            2022 <= Nd().length && Ed()
        }
    };
    var Yd = {}
      , Zd = new za
      , $d = {}
      , ae = {}
      , de = {
        name: "dataLayer",
        set: function(a, b) {
            n(Ma(a, b), $d);
            be()
        },
        get: function(a) {
            return ce(a, 2)
        },
        reset: function() {
            Zd = new za;
            $d = {};
            be()
        }
    }
      , ce = function(a, b) {
        if (2 != b) {
            var c = Zd.get(a);
            Td && c !== ee(a.split(".")) && E(5);
            return c
        }
        return ee(a.split("."))
    }
      , ee = function(a) {
        for (var b = $d, c = 0; c < a.length; c++) {
            if (null === b)
                return !1;
            if (void 0 === b)
                break;
            b = b[a[c]]
        }
        return b
    }
      , fe = function(a, b) {
        ae.hasOwnProperty(a) || (Zd.set(a, b),
        n(Ma(a, b), $d),
        be())
    }
      , be = function(a) {
        Ba(ae, function(b, c) {
            Zd.set(b, c);
            n(Ma(b, void 0), $d);
            n(Ma(b, c), $d);
            a && delete ae[b]
        })
    }
      , ge = function(a, b, c) {
        Yd[a] = Yd[a] || {};
        var d = 1 !== c ? ee(b.split(".")) : Zd.get(b);
        "array" === Pa(d) || "object" === Pa(d) ? Yd[a][b] = n(d) : Yd[a][b] = d
    }
      , he = function(a, b) {
        if (Yd[a])
            return Yd[a][b]
    }
      , ie = function(a, b) {
        Yd[a] && delete Yd[a][b]
    };
    var le = /:[0-9]+$/
      , me = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var h = f.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    }
      , pe = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = ne(a.protocol) || ne(G.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || G.location.hostname).replace(le, "").toLowerCase());
        return oe(a, b, c, d, e)
    }
      , oe = function(a, b, c, d, e) {
        var f, h = ne(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = qe(a);
            break;
        case "protocol":
            f = h;
            break;
        case "host":
            f = a.hostname.replace(le, "").toLowerCase();
            if (c) {
                var k = /^www\d*\./.exec(f);
                k && k[0] && (f = f.substr(k[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || ic("TAGGING", 1);
            f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var l = f.split("/");
            0 <= va(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
            f = l.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = me(f, e, void 0));
            break;
        case "extension":
            var p = a.pathname.split(".");
            f = 1 < p.length ? p[p.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , ne = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , qe = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , re = function(a) {
        var b = H.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || ic("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(le, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , se = function(a) {
        function b(p) {
            var m = p.split("=")[0];
            return 0 > d.indexOf(m) ? p : m + "=0"
        }
        function c(p) {
            return p.split("&").map(b).filter(function(m) {
                return void 0 != m
            }).join("&")
        }
        var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" ")
          , e = re(a)
          , f = a.split(/[?#]/)[0]
          , h = e.search
          , k = e.hash;
        "?" === h[0] && (h = h.substring(1));
        "#" === k[0] && (k = k.substring(1));
        h = c(h);
        k = c(k);
        "" !== h && (h = "?" + h);
        "" !== k && (k = "#" + k);
        var l = "" + f + h + k;
        "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
        return l
    };
    function te(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("=")
              , k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    }
    ;var ve = function(a, b, c, d) {
        return ue(d) ? te(a, String(b || document.cookie), c) : []
    }
      , ye = function(a, b, c, d, e) {
        if (ue(e)) {
            var f = we(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = xe(f, function(h) {
                    return h.Wb
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = xe(f, function(h) {
                    return h.zb
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function ze(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= ve(b, f, !1, d).indexOf(c)
    }
    var De = function(a, b, c) {
        function d(q, u, v) {
            if (null == v)
                return delete h[u],
                q;
            h[u] = v;
            return q + "; " + u + "=" + v
        }
        function e(q, u) {
            if (null == u)
                return delete h[u],
                q;
            h[u] = !0;
            return q + "; " + u
        }
        if (!ue(c.Da))
            return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Ae(b),
        f = a + "=" + b);
        var h = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.Xh);
        f = d(f, "samesite", c.bi);
        c.ci && (f = e(f, "secure"));
        var l = c.domain;
        if ("auto" === l) {
            for (var p = Be(), m = 0; m < p.length; ++m) {
                var r = "none" !== p[m] ? p[m] : void 0
                  , t = d(f, "domain", r);
                t = e(t, c.flags);
                if (!Ce(r, c.path) && ze(t, a, b, c.Da))
                    return 0
            }
            return 1
        }
        l && "none" !== l && (f = d(f, "domain", l));
        f = e(f, c.flags);
        return Ce(l, c.path) ? 1 : ze(f, a, b, c.Da) ? 0 : 1
    }
      , Ee = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return De(a, b, c)
    };
    function xe(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h]
              , l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k],
            f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }
    function we(a, b, c) {
        for (var d = [], e = ve(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split(".")
              , k = h.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = h.shift();
                l && (l = l.split("-"),
                d.push({
                    id: h.join("."),
                    Wb: 1 * l[0] || 1,
                    zb: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Ae = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Fe = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Ge = /(^|\.)doubleclick\.net$/i
      , Ce = function(a, b) {
        return Ge.test(document.location.hostname) || "/" === b && Fe.test(a)
    }
      , Be = function() {
        var a = []
          , b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = document.location.hostname;
        Ge.test(e) || Fe.test(e) || a.push("none");
        return a
    }
      , ue = function(a) {
        if (!Dc("gtag_cs_api") || !a || !Nc())
            return !0;
        if (!Mc(a))
            return !1;
        var b = Lc(a);
        return null == b ? !0 : !!b
    };
    var He = function() {
        for (var a = kc.userAgent + (H.cookie || "") + (H.referrer || ""), b = a.length, c = G.history.length; 0 < c; )
            a += c-- ^ b++;
        var d = 1, e, f, h;
        if (a)
            for (d = 0,
            f = a.length - 1; 0 <= f; f--)
                h = a.charCodeAt(f),
                d = (d << 6 & 268435455) + h + (h << 14),
                e = d & 266338304,
                d = 0 != e ? d ^ e >> 21 : d;
        return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Ga() / 1E3)].join(".")
    }
      , Ke = function(a, b, c, d, e) {
        var f = Ie(b);
        return ye(a, f, Je(c), d, e)
    }
      , Le = function(a, b, c, d) {
        var e = "" + Ie(c)
          , f = Je(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , Ie = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Je = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function Me(a, b, c) {
        var d, e = a.xb;
        null == e && (e = 7776E3);
        0 !== e && (d = new Date((b || Ga()) + 1E3 * e));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;var Ne = ["1"]
      , Oe = {}
      , Se = function(a) {
        var b = Pe(a.prefix);
        Oe[b] || Qe(b, a.path, a.domain) || (Re(b, He(), a),
        Qe(b, a.path, a.domain))
    };
    function Re(a, b, c) {
        var d = Le(b, "1", c.domain, c.path)
          , e = Me(c);
        e.Da = "ad_storage";
        Ee(a, d, e)
    }
    function Qe(a, b, c) {
        var d = Ke(a, b, c, Ne, "ad_storage");
        d && (Oe[a] = d);
        return d
    }
    function Pe(a) {
        return (a || "_gcl") + "_au"
    }
    ;var Te = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Ue() {
        for (var a = Ve, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function We() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ve, Xe;
    function Ye(a) {
        Ve = Ve || We();
        Xe = Xe || Ue();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , h = d ? a.charCodeAt(c + 1) : 0
              , k = e ? a.charCodeAt(c + 2) : 0
              , l = f >> 2
              , p = (f & 3) << 4 | h >> 4
              , m = (h & 15) << 2 | k >> 6
              , r = k & 63;
            e || (r = 64,
            d || (m = 64));
            b.push(Ve[l], Ve[p], Ve[m], Ve[r])
        }
        return b.join("")
    }
    function Ze(a) {
        function b(l) {
            for (; d < a.length; ) {
                var p = a.charAt(d++)
                  , m = Xe[p];
                if (null != m)
                    return m;
                if (!/^[\s\xa0]*$/.test(p))
                    throw Error("Unknown base64 encoding at char: " + p);
            }
            return l
        }
        Ve = Ve || We();
        Xe = Xe || Ue();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , h = b(64)
              , k = b(64);
            if (64 === k && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2),
            64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    }
    ;var $e;
    var df = function() {
        var a = af
          , b = bf
          , c = cf()
          , d = function(h) {
            a(h.target || h.srcElement || {})
        }
          , e = function(h) {
            b(h.target || h.srcElement || {})
        };
        if (!c.init) {
            sc(H, "mousedown", d);
            sc(H, "keyup", d);
            sc(H, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , ef = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        cf().decorators.push(f)
    }
      , ff = function(a, b, c) {
        for (var d = cf().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h = d[f], k;
            if (k = !c || h.forms)
                a: {
                    var l = h.domains
                      , p = a
                      , m = !!h.sameHost;
                    if (l && (m || p !== H.location.hostname))
                        for (var r = 0; r < l.length; r++)
                            if (l[r]instanceof RegExp) {
                                if (l[r].test(p)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= p.indexOf(l[r]) || m && 0 <= l[r].indexOf(p)) {
                                k = !0;
                                break a
                            }
                    k = !1
                }
            if (k) {
                var t = h.placement;
                void 0 == t && (t = h.fragment ? 2 : 1);
                t === b && Ja(e, h.callback())
            }
        }
        return e
    }
      , cf = function() {
        var a = mc("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    };
    var gf = /(.*?)\*(.*?)\*(.*)/
      , hf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , jf = /^(?:www\.|m\.|amp\.)+/
      , kf = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function lf(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var nf = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c),
                b.push(Ye(String(d))))
            }
        var e = b.join("*");
        return ["1", mf(e), e].join("*")
    }
      , mf = function(a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = $e)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, k = 0; 8 > k; k++)
                    h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        $e = d;
        for (var l = 4294967295, p = 0; p < c.length; p++)
            l = l >>> 8 ^ $e[(l ^ c.charCodeAt(p)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }
      , pf = function() {
        return function(a) {
            var b = re(G.location.href)
              , c = b.search.replace("?", "")
              , d = me(c, "_gl", !0) || "";
            a.query = of(d) || {};
            var e = pe(b, "fragment").match(lf("_gl"));
            a.fragment = of(e && e[3] || "") || {}
        }
    }
      , qf = function(a) {
        var b = pf()
          , c = cf();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Ja(d, e.query),
        a && Ja(d, e.fragment));
        return d
    }
      , of = function(a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = gf.exec(d);
                        if (f) {
                            c = f;
                            break a
                        }
                        d = decodeURIComponent(d)
                    }
                    c = void 0
                }
                var h = c;
                if (h && "1" === h[1]) {
                    var k = h[3], l;
                    a: {
                        for (var p = h[2], m = 0; m < b; ++m)
                            if (p === mf(k, m)) {
                                l = !0;
                                break a
                            }
                        l = !1
                    }
                    if (l) {
                        for (var r = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2)
                            r[t[q]] = Ze(t[q + 1]);
                        return r
                    }
                }
            }
        } catch (u) {}
    };
    function rf(a, b, c, d) {
        function e(m) {
            var r = m
              , t = lf(a).exec(r)
              , q = r;
            if (t) {
                var u = t[2]
                  , v = t[4];
                q = t[1];
                v && (q = q + u + v)
            }
            m = q;
            var w = m.charAt(m.length - 1);
            m && "&" !== w && (m += "&");
            return m + p
        }
        d = void 0 === d ? !1 : d;
        var f = kf.exec(c);
        if (!f)
            return "";
        var h = f[1]
          , k = f[2] || ""
          , l = f[3] || ""
          , p = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + h + k + l
    }
    function sf(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = ff(b, 1, c)
          , e = ff(b, 2, c)
          , f = ff(b, 3, c);
        if (Ka(d)) {
            var h = nf(d);
            c ? tf("_gl", h, a) : uf("_gl", h, a, !1)
        }
        if (!c && Ka(e)) {
            var k = nf(e);
            uf("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a: {
                    var p = l
                      , m = f[l]
                      , r = a;
                    if (r.tagName) {
                        if ("a" === r.tagName.toLowerCase()) {
                            uf(p, m, r, void 0);
                            break a
                        }
                        if ("form" === r.tagName.toLowerCase()) {
                            tf(p, m, r);
                            break a
                        }
                    }
                    "string" == typeof r && rf(p, m, r, void 0)
                }
    }
    function uf(a, b, c, d) {
        if (c.href) {
            var e = rf(a, b, c.href, void 0 === d ? !1 : d);
            Te.test(e) && (c.href = e)
        }
    }
    function tf(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var k = e[h];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = H.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var p = rf(a, b, c.action);
                Te.test(p) && (c.action = p)
            }
        }
    }
    var af = function(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || sf(e, e.hostname)
            }
        } catch (h) {}
    }
      , bf = function(a) {
        try {
            if (a.action) {
                var b = pe(re(a.action), "host");
                sf(a, b)
            }
        } catch (c) {}
    }
      , vf = function(a, b, c, d) {
        df();
        ef(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , wf = function(a, b) {
        df();
        ef(a, [oe(G.location, "host", !0)], b, !0, !0)
    }
      , xf = function() {
        var a = H.location.hostname
          , b = hf.exec(H.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , h = f[1];
            e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(jf, ""), l = e.replace(jf, ""), p;
        if (!(p = k === l)) {
            var m = "." + l;
            p = k.substring(k.length - m.length, k.length) === m
        }
        return p
    }
      , yf = function(a, b) {
        return !1 === a ? !1 : a || b || xf()
    };
    var zf = /^\w+$/
      , Af = /^[\w-]+$/
      , Bf = /^~?[\w-]+$/
      , Cf = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp"
    }
      , Df = function() {
        if (!Dc("gtag_cs_api") || !Nc())
            return !0;
        var a = Lc("ad_storage");
        return null == a ? !0 : !!a
    }
      , Ef = function(a, b) {
        Mc("ad_storage") ? Df() ? a() : Qc(a, "ad_storage") : b ? ic("TAGGING", 3) : Pc(function() {
            Ef(a, !0)
        }, ["ad_storage"])
    }
      , Hf = function(a) {
        var b = [];
        if (!H.cookie)
            return b;
        var c = ve(a, H.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = 0; d < c.length; d++) {
            var e = Ff(c[d]);
            e && -1 === va(b, e) && b.push(e)
        }
        return Gf(b)
    };
    function If(a) {
        return a && "string" == typeof a && a.match(zf) ? a : "_gcl"
    }
    var Kf = function() {
        var a = re(G.location.href)
          , b = pe(a, "query", !1, void 0, "gclid")
          , c = pe(a, "query", !1, void 0, "gclsrc")
          , d = pe(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || me(e, "gclid", void 0);
            c = c || me(e, "gclsrc", void 0)
        }
        return Jf(b, c, d)
    }
      , Jf = function(a, b, c) {
        var d = {}
          , e = function(f, h) {
            d[h] || (d[h] = []);
            d[h].push(f)
        };
        d.gclid = a;
        d.gclsrc = b;
        d.dclid = c;
        if (void 0 !== a && a.match(Af))
            switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                Dc("gtm_3pds") && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha");
                break;
            case "gp":
                e(a, "gp")
            }
        c && e(c, "dc");
        return d
    }
      , Mf = function(a) {
        var b = Kf();
        Ef(function() {
            return Lf(b, a)
        })
    };
    function Lf(a, b, c) {
        function d(p, m) {
            var r = Nf(p, e);
            r && (Ee(r, m, f),
            h = !0)
        }
        b = b || {};
        var e = If(b.prefix);
        c = c || Ga();
        var f = Me(b, c, !0);
        f.Da = "ad_storage";
        var h = !1
          , k = Math.round(c / 1E3)
          , l = function(p) {
            return ["GCL", k, p].join(".")
        };
        a.aw && (!0 === b.gi ? d("aw", l("~" + a.aw[0])) : d("aw", l(a.aw[0])));
        a.dc && d("dc", l(a.dc[0]));
        a.gf && d("gf", l(a.gf[0]));
        a.ha && d("ha", l(a.ha[0]));
        a.gp && d("gp", l(a.gp[0]));
        return h
    }
    var Pf = function(a, b) {
        var c = qf(!0);
        Ef(function() {
            for (var d = If(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== Cf[f]) {
                    var h = Nf(f, d)
                      , k = c[h];
                    if (k) {
                        var l = Math.min(Of(k), Ga()), p;
                        b: {
                            for (var m = l, r = ve(h, H.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t)
                                if (Of(r[t]) > m) {
                                    p = !0;
                                    break b
                                }
                            p = !1
                        }
                        if (!p) {
                            var q = Me(b, l, !0);
                            q.Da = "ad_storage";
                            Ee(h, k, q)
                        }
                    }
                }
            }
            Lf(Jf(c.gclid, c.gclsrc), b)
        })
    }
      , Nf = function(a, b) {
        var c = Cf[a];
        if (void 0 !== c)
            return b + c
    }
      , Of = function(a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
    };
    function Ff(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1])
            return b[2]
    }
    var Qf = function(a, b, c, d, e) {
        if (ua(b)) {
            var f = If(e)
              , h = function() {
                for (var k = {}, l = 0; l < a.length; ++l) {
                    var p = Nf(a[l], f);
                    if (p) {
                        var m = ve(p, H.cookie, void 0, "ad_storage");
                        m.length && (k[p] = m.sort()[m.length - 1])
                    }
                }
                return k
            };
            Ef(function() {
                vf(h, b, c, d)
            })
        }
    }
      , Gf = function(a) {
        return a.filter(function(b) {
            return Bf.test(b)
        })
    }
      , Rf = function(a, b) {
        for (var c = If(b.prefix), d = {}, e = 0; e < a.length; e++)
            Cf[a[e]] && (d[a[e]] = Cf[a[e]]);
        Ef(function() {
            Ba(d, function(f, h) {
                var k = ve(c + h, H.cookie, void 0, "ad_storage");
                if (k.length) {
                    var l = k[0]
                      , p = Of(l)
                      , m = {};
                    m[f] = [Ff(l)];
                    Lf(m, b, p)
                }
            })
        })
    };
    function Sf(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Tf = function() {
        function a(e, f, h) {
            h && (e[f] = h)
        }
        var b = ["aw", "dc"];
        if (Nc()) {
            var c = Kf();
            if (Sf(c, b)) {
                var d = {};
                a(d, "gclid", c.gclid);
                a(d, "dclid", c.dclid);
                a(d, "gclsrc", c.gclsrc);
                wf(function() {
                    return d
                }, 3);
                wf(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , Uf = function() {
        var a;
        if (Df()) {
            for (var b = [], c = H.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({
                    td: f[1],
                    value: f[2]
                })
            }
            var h = {};
            if (b && b.length)
                for (var k = 0; k < b.length; k++) {
                    var l = b[k].value.split(".");
                    "1" == l[0] && 3 == l.length && l[1] && (h[b[k].td] || (h[b[k].td] = []),
                    h[b[k].td].push({
                        timestamp: l[1],
                        zg: l[2]
                    }))
                }
            a = h
        } else
            a = {};
        return a
    };
    var Vf = /^\d+\.fls\.doubleclick\.net$/;
    function Wf(a, b) {
        Mc(C.m) ? Uc(C.m) ? a() : Qc(a, C.m) : b ? E(42) : Wc(function() {
            Wf(a, !0)
        }, [C.m])
    }
    function Xf(a) {
        var b = re(G.location.href)
          , c = pe(b, "host", !1);
        if (c && c.match(Vf)) {
            var d = pe(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    }
    function Yf(a, b, c) {
        if ("aw" == a || "dc" == a) {
            var d = Xf("gcl" + a);
            if (d)
                return d.split(".")
        }
        var e = If(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !Uc(C.m) && c, h;
            h = Kf()[a] || [];
            if (0 < h.length)
                return f ? ["0"] : h
        }
        var k = Nf(a, e);
        return k ? Hf(k) : []
    }
    var Zf = function(a) {
        var b = Xf("gac");
        if (b)
            return !Uc(C.m) && a ? "0" : decodeURIComponent(b);
        var c = Uf()
          , d = [];
        Ba(c, function(e, f) {
            for (var h = [], k = 0; k < f.length; k++)
                h.push(f[k].zg);
            h = Gf(h);
            h.length && d.push(e + ":" + h.join(","))
        });
        return d.join(";")
    }
      , $f = function(a, b) {
        var c = Kf().dc || [];
        Wf(function() {
            Se(b);
            var d = Oe[Pe(b.prefix)]
              , e = !1;
            if (d && 0 < c.length) {
                var f = K.joined_au = K.joined_au || {}
                  , h = b.prefix || "_gcl";
                if (!f[h])
                    for (var k = 0; k < c.length; k++) {
                        var l = "https://adservice.google.com/ddm/regclk";
                        l = l + "?gclid=" + c[k] + "&auiddc=" + d;
                        yc(l);
                        e = f[h] = !0
                    }
            }
            null == a && (a = e);
            if (a && d) {
                var p = Pe(b.prefix)
                  , m = Oe[p];
                m && Re(p, m, b)
            }
        })
    };
    var ag = /[A-Z]+/
      , bg = /\s/
      , cg = function(a) {
        if (g(a) && (a = Fa(a),
        !bg.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (ag.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e])
                            return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        B: d
                    }
                }
            }
        }
    }
      , eg = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = cg(a[c]);
            d && (b[d.id] = d)
        }
        dg(b);
        var e = [];
        Ba(b, function(f, h) {
            e.push(h)
        });
        return e
    };
    function dg(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.B[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var fg = function() {
        var a = !1;
        return a
    };
    var O = function(a, b, c, d) {
        return (2 === gg() || d || "http:" != G.location.protocol ? a : b) + c
    }
      , gg = function() {
        var a = pc(), b;
        if (1 === a)
            a: {
                var c = vd;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = H.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var ig = function(a, b, c) {
        if (G[a.functionName])
            return b.fd && I(b.fd),
            G[a.functionName];
        var d = hg();
        G[a.functionName] = d;
        if (a.Rb)
            for (var e = 0; e < a.Rb.length; e++)
                G[a.Rb[e]] = G[a.Rb[e]] || hg();
        a.ac && void 0 === G[a.ac] && (G[a.ac] = c);
        oc(O("https://", "http://", a.qd), b.fd, b.Xg);
        return d
    }
      , hg = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , jg = {
        functionName: "_googWcmImpl",
        ac: "_googWcmAk",
        qd: "www.gstatic.com/wcm/loader.js"
    }
      , kg = {
        functionName: "_gaPhoneImpl",
        ac: "ga_wpid",
        qd: "www.gstatic.com/gaphone/loader.js"
    }
      , lg = {
        af: "",
        Gf: "5"
    }
      , mg = {
        functionName: "_googCallTrackingImpl",
        Rb: [kg.functionName, jg.functionName],
        qd: "www.gstatic.com/call-tracking/call-tracking_" + (lg.af || lg.Gf) + ".js"
    }
      , ng = {}
      , og = function(a, b, c, d) {
        E(22);
        if (c) {
            d = d || {};
            var e = ig(jg, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.na && (f.autoreplace = c);
            e(2, d.na, f, c, 0, new Date, d.options)
        }
    }
      , pg = function(a, b, c, d) {
        E(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: new Date
            }, f = 0; f < a.length; f++) {
                var h = a[f];
                ng[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.B.length ? (e.adData = {
                    ak: h.B[0],
                    cl: h.B[1]
                },
                ng[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                    gaWpid: h.containerId
                },
                ng[h.id] = !0))
            }
            (e.gaData || e.adData) && ig(mg, d)(d.na, e, d.options)
        }
    }
      , qg = function() {
        var a = !1;
        return a
    }
      , rg = function(a, b) {
        if (a)
            if (fg()) {} else {
                if (g(a)) {
                    var c = cg(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = b.getWithConfig(C.xf);
                if (f && ua(f)) {
                    d = [];
                    for (var h = 0; h < f.length; h++) {
                        var k = cg(f[h]);
                        k && (d.push(k),
                        (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var l = b.getWithConfig(C.Be), p;
                    if (l) {
                        ua(l) ? p = l : p = [l];
                        var m = b.getWithConfig(C.ue)
                          , r = b.getWithConfig(C.ve)
                          , t = b.getWithConfig(C.Ce)
                          , q = b.getWithConfig(C.uf)
                          , u = m || r
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < p.length; w++)
                            if (w < v)
                                if (d)
                                    pg(d, p[w], q, {
                                        na: u,
                                        options: t
                                    });
                                else if ("AW" === a.prefix && a.B[1])
                                    qg() ? pg([a], p[w], q || "US", {
                                        na: u,
                                        options: t
                                    }) : og(a.B[0], a.B[1], p[w], {
                                        na: u,
                                        options: t
                                    });
                                else if ("UA" === a.prefix)
                                    if (qg())
                                        pg([a], p[w], q || "US", {
                                            na: u
                                        });
                                    else {
                                        var y = a.containerId
                                          , x = p[w]
                                          , A = {
                                            na: u
                                        };
                                        E(23);
                                        if (x) {
                                            A = A || {};
                                            var B = ig(kg, A, y)
                                              , z = {};
                                            void 0 !== A.na ? z.receiver = A.na : z.replace = x;
                                            z.ga_wpid = y;
                                            z.destination = x;
                                            B(2, new Date, z)
                                        }
                                    }
                    }
                }
            }
    };
    var ug = function(a) {
        return Uc(C.m) ? a : a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = se(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        })
    };
    var vg = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , wg = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , xg = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , yg = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ag = function(a) {
        var b;
        b || (b = ce("gtm.whitelist"));
        b && E(9);
        b = "google gtagfl lcl zone oid op".split(" ");
        var c = b && La(Ea(b), wg), d;
        d || (d = ce("gtm.blacklist"));
        d || (d = ce("tagTypeBlacklist")) && E(3);
        d ? E(8) : d = [];
        zg() && (d = Ea(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= va(Ea(d), "google") && E(2);
        var e = d && La(Ea(d), xg)
          , f = {};
        return function(h) {
            var k = h && h[Gb.Ia];
            if (!k || "string" != typeof k)
                return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k])
                return f[k];
            var l = Ad[k] || []
              , p = a(k, l);
            if (b) {
                var m;
                if (m = p)
                    a: {
                        if (0 > va(c, k))
                            if (l && 0 < l.length)
                                for (var r = 0; r < l.length; r++) {
                                    if (0 > va(c, l[r])) {
                                        E(11);
                                        m = !1;
                                        break a
                                    }
                                }
                            else {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                p = m
            }
            var t = !1;
            if (d) {
                var q = 0 <= va(e, k);
                if (q)
                    t = q;
                else {
                    var u = Aa(e, l || []);
                    u && E(10);
                    t = u
                }
            }
            var v = !p || t;
            v || !(0 <= va(l, "sandboxedScripts")) || c && -1 !== va(c, "sandboxedScripts") || (v = Aa(e, yg));
            return f[k] = v
        }
    }
      , zg = function() {
        return vg.test(G.location && G.location.hostname)
    };
    var Bg = {
        active: !0,
        isAllowed: function() {
            return !0
        },
        isWhitelisted: function() {
            return !0
        }
    }
      , Cg = function(a) {
        var b = K.zones;
        !b && a && (b = K.zones = a());
        return b
    };
    var Eg = function() {};
    var Fg = !1
      , Gg = 0
      , Hg = [];
    function Ig(a) {
        if (!Fg) {
            var b = H.createEventObject
              , c = "complete" == H.readyState
              , d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Fg = !0;
                for (var e = 0; e < Hg.length; e++)
                    I(Hg[e])
            }
            Hg.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    I(arguments[f]);
                return 0
            }
        }
    }
    function Jg() {
        if (!Fg && 140 > Gg) {
            Gg++;
            try {
                H.documentElement.doScroll("left"),
                Ig()
            } catch (a) {
                G.setTimeout(Jg, 50)
            }
        }
    }
    var Kg = function(a) {
        Fg ? a() : Hg.push(a)
    };
    var Lg = {}
      , Mg = {}
      , Ng = function(a, b, c, d) {
        if (!Mg[a] || qd[b] || "__zone" === b)
            return -1;
        var e = {};
        Ra(d) && (e = n(d, e));
        e.id = c;
        e.status = "timeout";
        return Mg[a].tags.push(e) - 1
    }
      , Og = function(a, b, c, d) {
        if (Mg[a]) {
            var e = Mg[a].tags[b];
            e && (e.status = c,
            e.executionTime = d)
        }
    };
    function Pg(a) {
        for (var b = Lg[a] || [], c = 0; c < b.length; c++)
            b[c]();
        Lg[a] = {
            push: function(d) {
                d(od.s, Mg[a])
            }
        }
    }
    var Sg = function(a, b, c) {
        Mg[a] = {
            tags: []
        };
        ra(b) && Qg(a, b);
        c && G.setTimeout(function() {
            return Pg(a)
        }, Number(c));
        return Rg(a)
    }
      , Qg = function(a, b) {
        Lg[a] = Lg[a] || [];
        Lg[a].push(Ia(function() {
            return I(function() {
                b(od.s, Mg[a])
            })
        }))
    };
    function Rg(a) {
        var b = 0
          , c = 0
          , d = !1;
        return {
            add: function() {
                c++;
                return Ia(function() {
                    b++;
                    d && b >= c && Pg(a)
                })
            },
            Yf: function() {
                d = !0;
                b >= c && Pg(a)
            }
        }
    }
    ;var Tg = function() {
        function a(d) {
            return !sa(d) || 0 > d ? 0 : d
        }
        if (!K._li && G.performance && G.performance.timing) {
            var b = G.performance.timing.navigationStart
              , c = sa(de.get("gtm.start")) ? de.get("gtm.start") : 0;
            K._li = {
                cst: a(c - b),
                cbt: a(xd - b)
            }
        }
    };
    var Xg = {}
      , Yg = function() {
        return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject]
    }
      , Zg = !1;
    var $g = function(a) {
        G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
        var b = G.GoogleAnalyticsObject;
        if (G[b])
            G.hasOwnProperty(b) || E(12);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            G[b] = c
        }
        Tg();
        return G[b]
    }
      , ah = function(a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = Yg();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var ch = function(a) {}
      , bh = function() {
        return G.GoogleAnalyticsObject || "ga"
    };
    var dh = function(a, b) {
        return function() {
            var c = Yg()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var h = f.get("hitPayload")
                      , k = f.get("hitCallback")
                      , l = 0 > h.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", h, !0),
                    f.set("hitCallback", k, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    function ih(a, b, c, d) {
        var e = ub[a]
          , f = jh(a, b, c, d);
        if (!f)
            return null;
        var h = Bb(e[Gb.Yd], c, []);
        if (h && h.length) {
            var k = h[0];
            f = ih(k.index, {
                D: f,
                C: 1 === k.we ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function jh(a, b, c, d) {
        function e() {
            if (f[Gb.vf])
                k();
            else {
                var w = Db(f, c, [])
                  , y = Ng(c.id, String(f[Gb.Ia]), Number(f[Gb.$d]), w[Gb.wf])
                  , x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var z = Ga() - B;
                        Wd(c.id, ub[a], "5");
                        Og(c.id, y, "success", z);
                        h()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var z = Ga() - B;
                        Wd(c.id, ub[a], "6");
                        Og(c.id, y, "failure", z);
                        k()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Wd(c.id, f, "1");
                var A = function() {
                    var z = Ga() - B;
                    Wd(c.id, f, "7");
                    Og(c.id, y, "exception", z);
                    x || (x = !0,
                    k())
                };
                var B = Ga();
                try {
                    Ab(w, c)
                } catch (z) {
                    A(z)
                }
            }
        }
        var f = ub[a]
          , h = b.D
          , k = b.C
          , l = b.terminate;
        if (c.Zc(f))
            return null;
        var p = Bb(f[Gb.ae], c, []);
        if (p && p.length) {
            var m = p[0]
              , r = ih(m.index, {
                D: h,
                C: k,
                terminate: l
            }, c, d);
            if (!r)
                return null;
            h = r;
            k = 2 === m.we ? l : r
        }
        if (f[Gb.Qd] || f[Gb.Af]) {
            var t = f[Gb.Qd] ? vb : c.uh
              , q = h
              , u = k;
            if (!t[a]) {
                e = Ia(e);
                var v = kh(a, t, e);
                h = v.D;
                k = v.C
            }
            return function() {
                t[a](q, u)
            }
        }
        return e
    }
    function kh(a, b, c) {
        var d = []
          , e = [];
        b[a] = lh(d, e, c);
        return {
            D: function() {
                b[a] = mh;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            C: function() {
                b[a] = nh;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function lh(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function mh(a) {
        a()
    }
    function nh(a, b) {
        b()
    }
    ;var qh = function(a, b) {
        for (var c = [], d = 0; d < ub.length; d++)
            if (a.yb[d]) {
                var e = ub[d];
                var f = b.add();
                try {
                    var h = ih(d, {
                        D: f,
                        C: f,
                        terminate: f
                    }, a, d);
                    h ? c.push({
                        Ye: d,
                        Te: Eb(e),
                        vg: h
                    }) : (oh(d, a),
                    f())
                } catch (l) {
                    f()
                }
            }
        b.Yf();
        c.sort(ph);
        for (var k = 0; k < c.length; k++)
            c[k].vg();
        return 0 < c.length
    };
    function ph(a, b) {
        var c, d = b.Te, e = a.Te;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var h = a.Ye
              , k = b.Ye;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }
    function oh(a, b) {
        if (!Td)
            return;
        var c = function(d) {
            var e = b.Zc(ub[d]) ? "3" : "4"
              , f = Bb(ub[d][Gb.Yd], b, []);
            f && f.length && c(f[0].index);
            Wd(b.id, ub[d], e);
            var h = Bb(ub[d][Gb.ae], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var rh = !1
      , sh = function(a, b, c, d, e) {
        if ("gtm.js" == b) {
            if (rh)
                return !1;
            rh = !0
        }
        Vd(a, b);
        var f = Sg(a, d, e);
        ge(a, "event", 1);
        ge(a, "ecommerce", 1);
        ge(a, "gtm");
        var h = {
            id: a,
            name: b,
            Zc: Ag(c),
            yb: [],
            uh: [],
            Ke: function() {
                E(6)
            }
        };
        h.yb = Kb(h);
        var k = qh(h, f);
        "gtm.js" !== b && "gtm.sync" !== b || ch(od.s);
        if (!k)
            return k;
        for (var l = 0; l < h.yb.length; l++)
            if (h.yb[l]) {
                var p = ub[l];
                if (p && !qd[String(p[Gb.Ia])])
                    return !0
            }
        return !1
    };
    function th(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return re("" + c + b).href
        }
    }
    function uh(a, b) {
        return vh() ? th(a, b) : void 0
    }
    function vh() {
        var a = !1;
        return a
    }
    ;var wh = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.h = {};
        this.globalConfig = {};
        this.D = function() {}
        ;
        this.C = function() {}
        ;
        this.eventId = void 0
    }
      , xh = function(a) {
        var b = new wh;
        b.eventModel = a;
        return b
    }
      , yh = function(a, b) {
        a.targetConfig = b;
        return a
    }
      , zh = function(a, b) {
        a.containerConfig = b;
        return a
    }
      , Ah = function(a, b) {
        a.h = b;
        return a
    }
      , Bh = function(a, b) {
        a.globalConfig = b;
        return a
    }
      , Ch = function(a, b) {
        a.D = b;
        return a
    }
      , Dh = function(a, b) {
        a.C = b;
        return a
    };
    wh.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        if (void 0 !== this.h[a])
            return this.h[a];
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a]
    }
    ;
    var Eh = function(a) {
        function b(e) {
            Ba(e, function(f) {
                c[f] = null
            })
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        Ba(c, function(e) {
            d.push(e)
        });
        return d
    };
    var Fh;
    if (3 === od.Pb.length)
        Fh = "g";
    else {
        var Gh = "G";
        Gh = "g";
        Fh = Gh
    }
    var Hh = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: Fh,
        OPT: "o"
    }
      , Ih = function(a) {
        var b = od.s.split("-"), c = b[0].toUpperCase(), d = Hh[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === od.Pb.length) {
            var h = "w";
            h = fg() ? "s" : "o";
            f = "2" + h
        } else
            f = "";
        return f + d + od.Pb + e
    };
    var Jh = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Kh = function(a, b) {
        a.addEventListener && a.addEventListener("message", b, !1)
    };
    var Lh;
    a: {
        var Mh = la.navigator;
        if (Mh) {
            var Nh = Mh.userAgent;
            if (Nh) {
                Lh = Nh;
                break a
            }
        }
        Lh = ""
    }
    var Oh = function(a) {
        return -1 != Lh.indexOf(a)
    };
    var Ph = function() {
        return Oh("iPhone") && !Oh("iPod") && !Oh("iPad")
    };
    Oh("Opera");
    Oh("Trident") || Oh("MSIE");
    Oh("Edge");
    !Oh("Gecko") || -1 != Lh.toLowerCase().indexOf("webkit") && !Oh("Edge") || Oh("Trident") || Oh("MSIE") || Oh("Edge");
    -1 != Lh.toLowerCase().indexOf("webkit") && !Oh("Edge") && Oh("Mobile");
    Oh("Macintosh");
    Oh("Windows");
    Oh("Linux") || Oh("CrOS");
    var Qh = la.navigator || null;
    Qh && (Qh.appVersion || "").indexOf("X11");
    Oh("Android");
    Ph();
    Oh("iPad");
    Oh("iPod");
    Ph() || Oh("iPad") || Oh("iPod");
    Lh.toLowerCase().indexOf("kaios");
    var Rh = function(a, b) {
        for (var c = a, d = 0; 50 > d; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b])
            } catch (k) {
                e = !1
            }
            if (e)
                return c;
            var f;
            a: {
                try {
                    var h = c.parent;
                    if (h && h != c) {
                        f = h;
                        break a
                    }
                } catch (k) {}
                f = null
            }
            if (!(c = f))
                break
        }
        return null
    };
    var Sh = function() {};
    var Th = function(a) {
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies || void 0 !== a.listenerId && "number" !== typeof a.listenerId || void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Uh = function(a, b) {
        this.i = a;
        this.h = null;
        this.H = {};
        this.fa = 0;
        this.ma = void 0 === b ? 500 : b;
        this.o = null
    };
    ka(Uh, Sh);
    var Wh = function(a) {
        return "function" === typeof a.i.__tcfapi || null != Vh(a)
    }
      , Zh = function(a, b) {
        var c = setTimeout(function() {
            c = 0;
            b({
                tcString: "tcunavailable",
                internalErrorState: 1
            })
        }, a.ma);
        Xh(a, "addEventListener", function(d) {
            d && Yh(d) && (d.internalErrorState = Th(d),
            0 != d.internalErrorState && (d.tcString = "tcunavailable"),
            Xh(a, "removeEventListener", null, d.listenerId),
            c && (clearTimeout(c),
            c = 0,
            b(d)))
        })
    };
    Uh.prototype.addEventListener = function(a) {
        Xh(this, "addEventListener", function(b, c) {
            var d = c ? b : {};
            d.internalErrorState = Th(d);
            0 !== d.internalErrorState && (d.tcString = "tcunavailable");
            a(d)
        })
    }
    ;
    Uh.prototype.removeEventListener = function(a) {
        a && a.listenerId && Xh(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var $h = function(a, b) {
        return !(!a || !a[b])
    }
      , Xh = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.i.__tcfapi) {
            var e = a.i.__tcfapi;
            e(b, 2, c, d)
        } else if (Vh(a)) {
            ai(a);
            var f = ++a.fa;
            a.H[f] = c;
            if (a.h) {
                var h = {};
                a.h.postMessage((h.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                h), "*")
            }
        } else
            c({}, !1)
    }
      , Vh = function(a) {
        if (a.h)
            return a.h;
        a.h = Rh(a.i, "__tcfapiLocator");
        return a.h
    }
      , ai = function(a) {
        a.o || (a.o = function(b) {
            try {
                var c, d;
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                c = d.__tcfapiReturn;
                a.H[c.callId](c.returnValue, c.success)
            } catch (e) {}
        }
        ,
        Kh(a.i, a.o))
    }
      , Yh = function(a) {
        return !1 === a.gdprApplies || "error" === a.cmpStatus || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    };
    var bi = {
        1: 1,
        3: 1,
        7: 3,
        9: 3,
        10: 3
    };
    function ci() {
        var a = K.tcf || {};
        return K.tcf = a
    }
    var di = function() {
        var a = ci();
        if (!a.active) {
            a.active = !0;
            var b = new Uh(G,3E3)
              , c = "x";
            "function" === typeof G.__tcfapi ? c = "s" : Wh(b) ? c = "i" : "function" === typeof G.__cmp ? c = "c" : Rh(G, "__cmpLocator") && (c = "d");
            a.Je = Ga();
            try {
                var d = !1;
                Zh(b, function() {
                    d = !0;
                    a.cd = Ga()
                });
                d && (a.cd = a.Je)
            } catch (e) {
                c = "e"
            }
            a.type = c
        }
    }
      , gi = function() {
        if (!1 !== G.gtag_enable_tcf_support) {
            var a = ci();
            if (!a.active || !a.Ca) {
                var b = new Uh(G,3E3);
                if ("function" === typeof G.__tcfapi || Wh(b)) {
                    a.active = !0;
                    a.type = "p";
                    a.Ca = {};
                    ei();
                    try {
                        b.addEventListener(function(c) {
                            if (!1 === c.gdprApplies) {
                                a.tcString = c.tcString;
                                var d = {}, e;
                                for (e in bi)
                                    bi.hasOwnProperty(e) && (d[e] = !0);
                                a.Ca = d;
                                fi(a);
                                b.removeEventListener(c)
                            } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                                a.tcString = c.tcString;
                                var f = {}, h;
                                for (h in bi)
                                    if (bi.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var k;
                                            if (Yh(c))
                                                if (!1 === c.gdprApplies || "tcunavailable" === c.tcString || c.purposeOneTreatment && "DE" === c.publisherCC)
                                                    k = !0;
                                                else {
                                                    var l = c.purpose && c.purpose.consents;
                                                    k = l ? !!l["1"] : !1
                                                }
                                            else
                                                k = !1;
                                            f["1"] = k
                                        } else {
                                            var p = c.purpose && c.vendor ? $h(c.purpose.legitimateInterests, h) && $h(c.vendor.legitimateInterests, "755") : !1
                                              , m = c.purpose && c.vendor ? $h(c.purpose.consents, h) && $h(c.vendor.consents, "755") : !1
                                              , r = bi[h];
                                            1 === r ? f[h] = m : 2 === r ? f[h] = p : 3 === r && (f[h] = m || p)
                                        }
                                a.Ca = f;
                                fi(a)
                            }
                        })
                    } catch (c) {
                        a.type = "e"
                    }
                }
            }
        }
    };
    function ei() {
        var a = {};
        Sc((a.ad_storage = "denied",
        a.wait_for_update = 500,
        a))
    }
    function fi(a) {
        var b = {};
        Tc((b.ad_storage = a.Ca["1"] ? "granted" : "denied",
        b))
    }
    var hi = function() {
        var a = ci();
        if (a.active && void 0 !== a.cd)
            return Number(a.cd - a.Je)
    }
      , ii = function() {
        var a = ci();
        return a.active && a.Ca ? a.tcString || "" : ""
    }
      , ji = function(a) {
        if (!bi.hasOwnProperty(String(a)))
            return !0;
        var b = ci();
        return b.active && b.Ca ? !!b.Ca[String(a)] : !0
    };
    function ki(a, b, c) {
        function d(r) {
            var t;
            K.reported_gclid || (K.reported_gclid = {});
            t = K.reported_gclid;
            var q = f + (r ? "gcu" : "gcs");
            if (!t[q]) {
                t[q] = !0;
                var u = []
                  , v = function(B, z) {
                    z && u.push(B + "=" + encodeURIComponent(z))
                }
                  , w = "https://www.google.com";
                if (Nc()) {
                    var y = Uc(C.m);
                    v("gcs", Vc());
                    r && v("gcu", "1");
                    v("rnd", m);
                    if ((!f || h && "aw.ds" !== h) && Uc(C.m)) {
                        var x = Hf("_gcl_aw");
                        v("gclaw", x.join("."))
                    }
                    v("url", String(G.location).split(/[?#]/)[0]);
                    v("dclid", li(b, k));
                    !y && b && (w = "https://pagead2.googlesyndication.com")
                }
                "1" === qf(!1)._up && v("gtm_up", "1");
                v("gclid", li(b, f));
                v("gclsrc", h);
                v("gtm", Ih(!c));
                var A = w + "/pagead/landing?" + u.join("&");
                yc(A)
            }
        }
        var e = Kf()
          , f = e.gclid || ""
          , h = e.gclsrc
          , k = e.dclid || ""
          , l = !a && (!f || h && "aw.ds" !== h ? !1 : !0)
          , p = Nc();
        if (l || p) {
            var m = "" + He();
            p ? Wc(function() {
                d();
                Uc(C.m) || Qc(function() {
                    return d(!0)
                }, C.m)
            }, [C.m]) : d()
        }
    }
    function li(a, b) {
        var c = a && !Uc(C.m);
        return b && c ? "0" : b
    }
    var mi = function(a) {
        var b = uh(a, "/pagead/conversion_async.js");
        return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? O("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js") : "https://www.google.com/pagead/conversion_async.js"
    }
      , ni = !1
      , oi = []
      , pi = ["aw", "dc"]
      , qi = function(a) {
        var b = G.google_trackConversion
          , c = a.gtm_onFailure;
        "function" == typeof b ? b(a) || c() : c()
    }
      , ri = function() {
        for (; 0 < oi.length; )
            qi(oi.shift())
    }
      , si = function(a) {
        if (!ni) {
            ni = !0;
            Tg();
            var b = function() {
                ri();
                oi = {
                    push: qi
                }
            };
            fg() ? b() : oc(a, b, function() {
                ri();
                ni = !1
            })
        }
    }
      , ti = function(a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        }
    }
      , ui = function(a, b, c, d) {
        function e() {}
        function f(N) {
            var ba = !0;
            ba && oi.push(F)
        }
        var h = cg(a)
          , k = b == C.ba
          , l = h.B[0]
          , p = h.B[1]
          , m = void 0 !== p
          , r = function(N) {
            return d.getWithConfig(N)
        }
          , t = void 0 != r(C.M) && !1 !== r(C.M)
          , q = !1 !== r(C.Ma)
          , u = r(C.La) || r(C.V)
          , v = r(C.T)
          , w = r(C.da)
          , y = r(C.ia)
          , x = r(C.ya)
          , A = mi(x)
          , B = {
            prefix: u,
            domain: v,
            xb: w,
            flags: y
        };
        if (k) {
            var z = r(C.ra) || {};
            q && (yf(z[C.ib], !!z[C.F]) && Pf(pi, B),
            Mf(B),
            Rf(["aw", "dc"], B));
            r(C.pb) && Tf();
            z[C.F] && Qf(pi, z[C.F], z[C.kb], !!z[C.jb], u);
            rg(h, d);
            ki(!1, t, a)
        }
        var D = !1 === r(C.Rd) || !1 === r(C.nb);
        if (!k || !m && !D)
            if (!0 === r(C.Td) && (m = !1),
            !1 !== r(C.ca) || m) {
                var F = {
                    google_conversion_id: l,
                    google_remarketing_only: !m,
                    onload_callback: d.D,
                    gtm_onFailure: d.C,
                    google_conversion_format: "3",
                    google_conversion_color: "ffffff",
                    google_conversion_domain: "",
                    google_conversion_label: p,
                    google_conversion_language: r(C.Oa),
                    google_conversion_value: r(C.ja),
                    google_conversion_currency: r(C.ka),
                    google_conversion_order_id: r(C.ob),
                    google_user_id: r(C.qb),
                    google_conversion_page_url: r(C.lb),
                    google_conversion_referrer_url: r(C.mb),
                    google_gtm: Ih()
                };
                m && (F.google_transport_url = th(x, "/"));
                F.google_restricted_data_processing = r(C.Bc);
                fg() && (F.opt_image_generator = function() {
                    return new Image
                }
                ,
                F.google_enable_display_cookie_match = !1);
                !1 === r(C.ca) && (F.google_allow_ad_personalization_signals = !1);
                F.google_read_gcl_cookie_opt_out = !q;
                q && u && (F.google_gcl_cookie_prefix = u);
                var L = function() {
                    var N = r(C.Ad)
                      , ba = {
                        event: b
                    };
                    if (ua(N)) {
                        E(26);
                        for (var V = 0; V < N.length; ++V) {
                            var M = N[V]
                              , J = r(M);
                            void 0 !== J && (ba[M] = J)
                        }
                        return ba
                    }
                    var R = d.eventModel;
                    if (!R)
                        return null;
                    n(R, ba);
                    for (var Y = 0; Y < C.Md.length; ++Y)
                        delete ba[C.Md[Y]];
                    return ba
                }();
                L && (F.google_custom_params = L);
                !m && r(C.R) && (F.google_gtag_event_data = {
                    items: r(C.R),
                    value: r(C.ja)
                });
                if (m && b == C.qa) {
                    F.google_conversion_merchant_id = r(C.ce);
                    F.google_basket_feed_country = r(C.Xd);
                    F.google_basket_feed_language = r(C.Zd);
                    F.google_basket_discount = r(C.Ud);
                    F.google_basket_transaction_type = b;
                    F.google_disable_merchant_reported_conversions = !0 === r(C.he);
                    fg() && (F.google_disable_merchant_reported_conversions = !0);
                    var P = ti(r(C.R));
                    P && (F.google_conversion_items = P)
                }
                var Q = function(N, ba) {
                    void 0 != ba && "" !== ba && (F.google_additional_conversion_params = F.google_additional_conversion_params || {},
                    F.google_additional_conversion_params[N] = ba)
                };
                "1" === qf(!1)._up && Q("gtm_up", "1");
                m && (Q("vdnc", r(C.me)),
                Q("vdltv", r(C.de)));
                e();
                F.google_gtm_url_processor = function(N) {
                    t && (N = ug(N));
                    return N
                }
                ;
                (function() {
                    Nc() ? Wc(function() {
                        e();
                        var N = Uc(C.m);
                        if (m)
                            Q("gcs", Vc()),
                            N || x || !t || (F.google_transport_url = "https://pagead2.googlesyndication.com/"),
                            f(N);
                        else if (N) {
                            f(N);
                            return
                        }
                        N || Qc(function() {
                            F = n(F);
                            !x && F.google_transport_url && delete F.google_transport_url;
                            e();
                            m && (Q("gcs", Vc()),
                            Q("gcu", "1"));
                            f(!0)
                        }, C.m)
                    }, [C.m]) : f(!0)
                }
                )()
            }
        si(A)
    };
    var vi = function(a) {
        return !(void 0 === a || null === a || 0 === (a + "").length)
    }
      , wi = function(a, b) {
        var c;
        if (2 === b.Y)
            return a("ord", ya(1E11, 1E13)),
            !0;
        if (3 === b.Y)
            return a("ord", "1"),
            a("num", ya(1E11, 1E13)),
            !0;
        if (4 === b.Y)
            return vi(b.sessionId) && a("ord", b.sessionId),
            !0;
        if (5 === b.Y)
            c = "1";
        else if (6 === b.Y)
            c = b.od;
        else
            return !1;
        vi(c) && a("qty", c);
        vi(b.Tb) && a("cost", b.Tb);
        vi(b.transactionId) && a("ord", b.transactionId);
        return !0
    }
      , yi = function(a, b, c) {
        function d(x, A, B) {
            m.hasOwnProperty(x) || (A = String(A),
            p.push(";" + x + "=" + (B ? A : xi(A))))
        }
        var e = a.Sc
          , f = a.rd
          , h = a.protocol;
        h += f ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        var k = ";"
          , l = !Uc(C.m) && a.Ab;
        l && (h = "https://ade.googlesyndication.com/ddm/activity",
        k = "/",
        f = !1);
        var p = [k, "src=" + xi(e), ";type=" + xi(a.Vc), ";cat=" + xi(a.sb)]
          , m = a.pg || {};
        Ba(m, function(x, A) {
            p.push(";" + xi(x) + "=" + xi(A + ""))
        });
        if (wi(d, a)) {
            vi(a.vc) && d("u", a.vc);
            vi(a.uc) && d("tran", a.uc);
            d("gtm", Ih());
            Nc() && (d("gcs", Vc()),
            c && d("gcu", "1"));
            "1" === qf(!1)._up && d("gtm_up", "1");
            !1 === a.Uf && d("npa", "1");
            if (a.Rc) {
                var r = void 0 === a.Ab ? !0 : !!a.Ab
                  , t = Yf("dc", a.Pa, r);
                t && t.length && d("gcldc", t.join("."));
                var q = Yf("aw", a.Pa, r);
                q && q.length && d("gclaw", q.join("."));
                var u = Zf(r);
                u && d("gac", u);
                Se({
                    prefix: a.Pa,
                    xb: a.mg,
                    domain: a.lg,
                    flags: a.Rh
                });
                var v = Oe[Pe(a.Pa)];
                v && d("auiddc", v)
            }
            vi(a.kd) && d("prd", a.kd, !0);
            Ba(a.vd, function(x, A) {
                d(x, A)
            });
            p.push(b || "");
            if (vi(a.ic)) {
                var w = a.ic || "";
                l && (w = se(w));
                d("~oref", w)
            }
            var y = h + p.join("") + "?";
            f ? qc(y, a.D) : rc(y, a.D, a.C)
        } else
            I(a.C)
    }
      , xi = encodeURIComponent
      , zi = function(a, b) {
        Nc() ? Wc(function() {
            yi(a, b);
            Uc(C.m) || Qc(function() {
                yi(a, b, !0)
            }, C.m)
        }, [C.m]) : yi(a, b)
    };
    var Ai = function(a, b, c, d) {
        function e() {
            var f = {
                config: a,
                gtm: Ih()
            };
            c && (Se(d),
            f.auiddc = Oe[Pe(d.prefix)]);
            b && (f.loadInsecure = b);
            void 0 === G.__dc_ns_processor && (G.__dc_ns_processor = []);
            G.__dc_ns_processor.push(f);
            oc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
        }
        Uc(C.m) ? e() : Qc(e, C.m)
    }
      , Bi = function(a) {
        var b = /^u([1-9]\d?|100)$/
          , c = a.getWithConfig(C.fe) || {}
          , d = Eh(a)
          , e = {}
          , f = {};
        if (Ra(c))
            for (var h in c)
                if (c.hasOwnProperty(h) && b.test(h)) {
                    var k = c[h];
                    g(k) && (e[h] = k)
                }
        for (var l = 0; l < d.length; l++) {
            var p = d[l];
            b.test(p) && (e[p] = p)
        }
        for (var m in e)
            e.hasOwnProperty(m) && (f[m] = a.getWithConfig(e[m]));
        return f
    }
      , Ci = function(a) {
        function b(l, p, m) {
            void 0 !== m && 0 !== (m + "").length && d.push(l + p + ":" + c(m + ""))
        }
        var c = encodeURIComponent
          , d = []
          , e = a(C.R) || [];
        if (ua(e))
            for (var f = 0; f < e.length; f++) {
                var h = e[f]
                  , k = f + 1;
                b("i", k, h.id);
                b("p", k, h.price);
                b("q", k, h.quantity);
                b("c", k, a(C.Ih));
                b("l", k, a(C.Oa))
            }
        return d.join("|")
    }
      , Di = function(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
            var c = {
                standard: 2,
                unique: 3,
                per_session: 4,
                transactions: 5,
                items_sold: 6,
                "": 1
            }[(b[5] || "").toLowerCase()];
            if (c)
                return {
                    containerId: "DC-" + b[1],
                    aa: b[3] ? a : "",
                    Of: b[1],
                    Nf: b[3] || "",
                    sb: b[4] || "",
                    Y: c
                }
        }
    }
      , Fi = function(a, b, c, d) {
        var e = Di(a);
        if (e) {
            var f = function(N) {
                return d.getWithConfig(N)
            }
              , h = !1 !== f(C.Ma)
              , k = f(C.La) || f(C.V)
              , l = f(C.T)
              , p = f(C.da)
              , m = f(C.ia)
              , r = f(C.bf)
              , t = 3 === gg();
            if (b === C.ba) {
                var q = {
                    prefix: k,
                    domain: l,
                    xb: p,
                    flags: m
                }
                  , u = f(C.ra) || {}
                  , v = f(C.Jb)
                  , w = void 0 === v ? !0 : !!v;
                h && (yf(u[C.ib], !!u[C.F]) && Pf(Ei, q),
                Mf(q),
                Rf(Ei, q),
                $f(w, q));
                u[C.F] && Qf(Ei, u[C.F], u[C.kb], !!u[C.jb], k);
                f(C.pb) && Tf();
                if (r && r.exclusion_parameters && r.engines)
                    if (fg()) {} else
                        Ai(r, t, h, q);
                var y = void 0 != f(C.M) && !1 !== f(C.M);
                ki(!0, y, a);
                I(d.D)
            } else {
                var x = {}
                  , A = f(C.$e);
                if (Ra(A))
                    for (var B in A)
                        if (A.hasOwnProperty(B)) {
                            var z = A[B];
                            void 0 !== z && null !== z && (x[B] = z)
                        }
                var D = "";
                if (5 === e.Y || 6 === e.Y)
                    D = Ci(f);
                var F = Bi(d)
                  , L = !0 === f(C.Ch);
                if (fg() && L) {
                    L = !1
                }
                var P = void 0 != f(C.M) && !1 !== f(C.M)
                  , Q = {
                    sb: e.sb,
                    Rc: h,
                    lg: l,
                    mg: p,
                    Pa: k,
                    Tb: f(C.ja),
                    Y: e.Y,
                    pg: x,
                    Sc: e.Of,
                    Vc: e.Nf,
                    C: d.C,
                    D: d.D,
                    ic: qe(re(G.location.href)),
                    kd: D,
                    protocol: t ? "http:" : "https:",
                    od: f(C.yf),
                    rd: L,
                    sessionId: f(C.fc),
                    uc: void 0,
                    transactionId: f(C.ob),
                    vc: void 0,
                    vd: F,
                    Uf: !1 !== f(C.ca),
                    eventId: d.eventId,
                    Ab: P
                };
                zi(Q)
            }
        } else
            I(d.C)
    }
      , Ei = ["aw", "dc"];
    var Hi = function(a) {
        function b() {
            var d = c
              , e = Gi(JSON.stringify(a[d]))
              , f = "https://www.google.com/travel/flights/click/conversion/" + Gi(a.conversion_id) + "/?" + d + "=" + e;
            if (a.conversionLinkerEnabled) {
                var h = Yf("gf", a.cookiePrefix, void 0);
                if (h && h.length)
                    for (var k = 0; k < h.length; k++)
                        f += "&gclgf=" + Gi(h[k])
            }
            rc(f, a.onSuccess, a.onFailure)
        }
        var c;
        if (a.hasOwnProperty("conversion_data"))
            c = "conversion_data";
        else if (a.hasOwnProperty("price"))
            c = "price";
        else
            return;
        Uc(C.m) ? b() : Qc(b, C.m)
    }
      , Gi = function(a) {
        return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
    };
    var Ii = /.*\.google\.com(:\d+)?\/booking\/flights.*/
      , Ki = function(a, b, c, d) {
        var e = function(y) {
            return d.getWithConfig(y)
        }
          , f = cg(a).B[0]
          , h = !1 !== e(C.Ma)
          , k = e(C.La) || e(C.V)
          , l = e(C.T)
          , p = e(C.da)
          , m = e(C.ia);
        if (b === C.ba) {
            if (h) {
                var r = {
                    prefix: k,
                    domain: l,
                    flags: m,
                    xb: p
                };
                Mf(r);
                Rf(["aw", "dc"], r)
            }
            I(d.D)
        } else {
            var t = {
                conversion_id: f,
                onFailure: d.C,
                onSuccess: d.D,
                conversionLinkerEnabled: h,
                cookiePrefix: k
            }
              , q = Ii.test(G.location.href);
            if (b === C.Ka) {
                var u = {
                    partner_id: f,
                    is_direct_booking: q,
                    total_price: e(C.ja),
                    currency: e(C.ka)
                };
                t.price = u;
                Hi(t);
                return
            }
            if (b !== C.qa)
                I(d.C);
            else {
                var v = {
                    partner_id: f,
                    trip_type: e(C.Ff),
                    total_price: e(C.ja),
                    currency: e(C.ka),
                    is_direct_booking: q,
                    flight_segment: Ji(e(C.R))
                }
                  , w = e(C.pe);
                w && "object" === typeof w && (v.passengers_total = Ca(w.total),
                v.passengers_adult = Ca(w.adult),
                v.passengers_child = Ca(w.child),
                v.passengers_infant_in_seat = Ca(w.infant_in_seat),
                v.passengers_infant_in_lap = Ca(w.infant_in_lap));
                t.conversion_data = v;
                Hi(t)
            }
        }
    }
      , Ji = function(a) {
        if (a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d];
                !e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
                    cabin: e.travel_class,
                    fare_product: e.fare_product,
                    booking_code: e.booking_code,
                    flight_number: e.flight_number,
                    origin: e.origin,
                    destination: e.destination,
                    departure_date: e.start_date
                },
                c++)
            }
            return b
        }
    };
    var Pi = function(a, b, c, d) {
        function e() {
            if (k) {
                var x = b === C.Ka ? Yf("aw", l, void 0) : Yf("ha", l, void 0);
                v += x.map(function(A) {
                    return "&gclha=" + encodeURIComponent(A)
                }).join("")
            }
            rc(v, d.D, d.C)
        }
        var f = cg(a)
          , h = function(x) {
            return d.getWithConfig(x)
        }
          , k = !1 !== h(C.Ma)
          , l = h(C.La) || h(C.V)
          , p = h(C.T)
          , m = h(C.da)
          , r = h(C.ia);
        if (b === C.ba) {
            var t = h(C.ra) || {};
            if (k) {
                var q = {
                    prefix: l,
                    domain: p,
                    flags: r,
                    xb: m
                };
                yf(t[C.ib], !!t[C.F]) && Pf(Li, q);
                Mf(q);
                Rf(["aw", "dc"], q)
            }
            t[C.F] && Qf(Li, t[C.F], t[C.kb], !!t[C.jb], l);
            I(d.D)
        } else {
            var u = f.B[0];
            if (/^\d+$/.test(u)) {
                var v = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + encodeURIComponent(u) + "/";
                if (b === C.qa) {
                    var w = Mi(h(C.ob), h(C.ja), h(C.ka), h(C.R));
                    w = encodeURIComponent(Ni(w));
                    v += "?data=" + w
                } else if (b === C.Ka) {
                    var y = Oi(u, h(C.ja), h(C.ke), h(C.ka), h(C.R));
                    y = encodeURIComponent(Ni(y));
                    v += "?label=FH&guid=ON&script=0&ord=" + ya(0, 4294967295) + ("&price=" + y)
                } else {
                    I(d.C);
                    return
                }
                Uc(C.m) ? e() : Qc(e, C.m)
            } else
                I(d.C)
        }
    }
      , Mi = function(a, b, c, d) {
        var e = {};
        Qi(a) && (e.hct_booking_xref = a);
        g(c) && (e.hct_currency_code = c);
        Qi(b) && (e.hct_total_price = b,
        e.hct_base_price = b);
        if (!ua(d) || 0 === d.length)
            return e;
        var f = d[0];
        if (!Ra(f))
            return e;
        Qi(f[Ri.Aa]) && (e.hct_partner_hotel_id = f[Ri.Aa]);
        g(f[Ri.sa]) && (e.hct_checkin_date = f[Ri.sa]);
        g(f[Ri.$a]) && (e.hct_checkout_date = f[Ri.$a]);
        return e
    }
      , Oi = function(a, b, c, d, e) {
        function f(m) {
            void 0 === m && (m = 0);
            if (Qi(m))
                return l + m
        }
        function h(m, r, t) {
            t(r) && (k[m] = r)
        }
        var k = {};
        k.partner_id = a;
        var l = "USD";
        g(d) && (l = k.currency = d);
        Qi(b) && (k.base_price_value_string = f(b),
        k.display_price_value_string = f(b));
        Qi(c) && (k.tax_price_value_string = f(c));
        g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
        if (!ua(e) || 0 == e.length)
            return k;
        var p = e[0];
        if (!Ra(p))
            return k;
        Qi(p[Ri.Sd]) && (k.total_price_value_string = f(p[Ri.Sd]));
        h("partner_hotel_id", p[Ri.Aa], Qi);
        h("check_in_date", p[Ri.sa], g);
        h("check_out_date", p[Ri.$a], g);
        h("adults", p[Ri.zf], Si);
        h(Ri.Wd, p[Ri.Wd], g);
        h(Ri.Vd, p[Ri.Vd], g);
        return k
    }
      , Ni = function(a) {
        var b = [];
        Ba(a, function(c, d) {
            b.push(c + "=" + d)
        });
        return b.join(";")
    }
      , Qi = function(a) {
        return g(a) || Si(a)
    }
      , Si = function(a) {
        return "number" === typeof a
    }
      , Ri = {
        Aa: "id",
        Sd: "price",
        sa: "start_date",
        $a: "end_date",
        zf: "occupancy",
        Wd: "room_id",
        Vd: "rate_rule_id"
    }
      , Li = ["ha"];
    var Vi = function(a, b, c, d) {
        var e = cg(a)
          , f = !1 !== d.getWithConfig(C.Ma)
          , h = d.getWithConfig(C.La) || d.getWithConfig(C.V)
          , k = d.getWithConfig(C.ia);
        if (b === C.ba) {
            if (f) {
                var l = {
                    prefix: h,
                    flags: k
                };
                Mf(l);
                Rf(["aw", "dc"], l)
            }
            I(d.D)
        } else if (b === C.qa) {
            var p = d.getWithConfig(C.ja)
              , m = d.getWithConfig(C.ka)
              , r = d.getWithConfig(C.pe)
              , t = d.getWithConfig(C.R)
              , q = {};
            if (g(p) || "number" === typeof p)
                q.base_price_value_string = "" + m + p,
                q.tax_price_value_string = m + "0";
            Ra(r) && "number" === typeof r.adult && (q.adult_count = r.adult);
            if (ua(t) && 0 !== t.length) {
                var u = t[0];
                if (Ra(u)) {
                    if (g(u[Ti.Aa]) || "number" === typeof u[Ti.Aa])
                        q.partner_hotel_id = u[Ti.Aa];
                    g(u[Ti.sa]) && (q.hotel_checkin_date = u[Ti.sa]);
                    var v = u[Ti.$a];
                    g(v) && (q.hotel_checkout_date = v,
                    q.return_date = v);
                    if (1 !== t.length) {
                        var w = t[1];
                        if (Ra(w)) {
                            q.origin_airport = w[Ti.Bf];
                            q.departure_date = w[Ti.sa];
                            for (var y = [w[Ti.be]], x = [w[Ti.Ed]], A = [w[Ti.Kd]], B = null !== v && g(v), z = 1, D = 2; D < t.length; D++) {
                                var F = t[D];
                                Ra(F) && (y.push(F[Ti.be]),
                                x.push(F[Ti.Ed]),
                                A.push(F[Ti.Kd]),
                                B && F[Ti.sa] < v && (z = D))
                            }
                            B && (q.destination_airport = t[z][Ti.ff]);
                            q.cabins = y.join(",");
                            q.booking_codes = x.join(",");
                            q.flight_numbers = A.join(",")
                        }
                    }
                }
            }
            Ui(e.B[0], q, f, h, d.D, d.C)
        } else
            I(d.C)
    }
      , Ui = function(a, b, c, d, e, f) {
        function h() {
            c && (p += Yf("gp", d, void 0).map(function(m) {
                return "&gclgp=" + encodeURIComponent(m)
            }).join(""));
            rc(p, e, f)
        }
        if (/^\d+$/.test(a)) {
            var k = encodeURIComponent(a)
              , l = encodeURIComponent(Wi(b))
              , p = "https://www.googletraveladservices.com/travel/vacations/clk/pagead/conversion/" + k + "/?data=" + l;
            Uc(C.m) ? h() : Qc(h, C.m)
        } else
            I(f)
    }
      , Wi = function(a) {
        var b = [], c;
        for (c in a)
            a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
        return b.join(";")
    }
      , Ti = {
        Aa: "id",
        sa: "start_date",
        $a: "end_date",
        Bf: "origin",
        be: "travel_class",
        Ed: "booking_code",
        Kd: "flight_number",
        ff: "destination"
    };
    var Xi = function() {
        var a = !0;
        return a
    }
      , Yi = function() {
        var a = !0;
        return a
    };
    var aj = function(a, b, c) {
        if (Nc()) {
            var d = function() {
                var e = Yg()
                  , f = Zi(a, b, "", c);
                $i(b, f.va) && (e(function() {
                    e.remove(b)
                }),
                e("create", a, f.va))
            };
            Qc(d, C.J);
            Qc(d, C.m)
        }
    }, ij = function(a, b, c) {
        var d = "https://www.google-analytics.com/analytics.js"
          , e = $g();
        if (ra(e)) {
            var f = "gtag_" + a.split("-").join("_")
              , h = function(w) {
                var y = [].slice.call(arguments, 0);
                y[0] = f + "." + y[0];
                e.apply(window, y)
            }
              , k = function() {
                var w = function(B, z) {
                    for (var D = 0; z && D < z.length; D++)
                        h(B, z[D])
                }
                  , y = bj(b, c);
                if (y) {
                    var x = y.action;
                    if ("impressions" === x)
                        w("ec:addImpression", y.Gg);
                    else if ("promo_click" === x || "promo_view" === x) {
                        var A = y.ld;
                        w("ec:addPromo", y.ld);
                        A && 0 < A.length && "promo_click" === x && h("ec:setAction", x)
                    } else
                        w("ec:addProduct", y.Ta),
                        h("ec:setAction", x, y.rb)
                }
            }
              , l = function() {
                if (fg()) {} else {
                    var w = c.getWithConfig(C.sf);
                    w && (h("require", w, {
                        dataLayer: "dataLayer"
                    }),
                    h("require", "render"))
                }
            }
              , p = Zi(a, f, b, c)
              , m = function(w, y, x) {
                x && (y = "" + y);
                p.wa[w] = y
            };
            $i(f, p.va) && (e(function() {
                Yg() && Yg().remove(f)
            }),
            cj[f] = !1);
            e("create", a, p.va);
            if (p.va._x_19) {
                var r = uh(p.va._x_19, "/analytics.js");
                r && (d = r);
                p.va._x_20 && !cj[f] && (cj[f] = !0,
                e(dh(f, p.va._x_20)))
            }
            (function() {
                var w = c.getWithConfig("custom_map");
                e(function() {
                    if (Ra(w)) {
                        var y = p.wa, x = Yg().getByName(f), A;
                        for (A in w)
                            if (w.hasOwnProperty(A) && /^(dimension|metric)\d+$/.test(A) && void 0 != w[A]) {
                                var B = x.get(dj(w[A]));
                                ej(y, A, B)
                            }
                    }
                })
            }
            )();
            (function(w) {
                if (w) {
                    var y = {};
                    if (Ra(w))
                        for (var x in fj)
                            fj.hasOwnProperty(x) && gj(fj[x], x, w[x], y);
                    h("require", "linkid", y)
                }
            }
            )(p.linkAttribution);
            var t = p[C.ra];
            if (t && t[C.F]) {
                var q = t[C.kb];
                ah(f + ".", t[C.F], void 0 === q ? !!t.use_anchor : "fragment" === q, !!t[C.jb])
            }
            b === C.xd ? (l(),
            h("send", "pageview", p.wa)) : b === C.ba ? (l(),
            rg(a, c),
            c.getWithConfig(C.pb) && Tf(),
            0 != p.sendPageView && h("send", "pageview", p.wa),
            aj(a, f, c)) : "screen_view" === b ? h("send", "screenview", p.wa) : "timing_complete" === b ? (m("timingCategory", p.eventCategory, !0),
            m("timingVar", p.name, !0),
            m("timingValue", Ca(p.value)),
            void 0 !== p.eventLabel && m("timingLabel", p.eventLabel, !0),
            h("send", "timing", p.wa)) : "exception" === b ? h("send", "exception", p.wa) : "optimize.callback" !== b && (0 <= va([C.wd, "select_content", C.Ka, C.Sb, C.Ub, C.fb, "set_checkout_option", C.qa, C.Yb, "view_promotion", "checkout_progress"], b) && (h("require", "ec", "ec.js"),
            k()),
            m("eventCategory", p.eventCategory, !0),
            m("eventAction", p.eventAction || b, !0),
            void 0 !== p.eventLabel && m("eventLabel", p.eventLabel, !0),
            void 0 !== p.value && m("eventValue", Ca(p.value)),
            h("send", "event", p.wa));
            if (!hj) {
                hj = !0;
                Tg();
                var u = c.C
                  , v = function() {
                    Yg().loaded || u()
                };
                fg() ? I(v) : oc(d, v, u)
            }
        } else
            I(c.C)
    }, jj = function(a, b, c, d) {
        Wc(function() {
            ij(a, b, d)
        }, [C.J, C.m])
    }, hj, cj = {}, kj = {
        client_id: 1,
        client_storage: "storage",
        cookie_name: 1,
        cookie_domain: 1,
        cookie_expires: 1,
        cookie_path: 1,
        cookie_update: 1,
        cookie_flags: 1,
        sample_rate: 1,
        site_speed_sample_rate: 1,
        use_amp_client_id: 1,
        store_gac: 1,
        conversion_linker: "storeGac"
    }, lj = {
        anonymize_ip: 1,
        app_id: 1,
        app_installer_id: 1,
        app_name: 1,
        app_version: 1,
        campaign: {
            name: "campaignName",
            source: "campaignSource",
            medium: "campaignMedium",
            term: "campaignKeyword",
            content: "campaignContent",
            id: "campaignId"
        },
        currency: "currencyCode",
        description: "exDescription",
        fatal: "exFatal",
        language: 1,
        non_interaction: 1,
        page_hostname: "hostname",
        page_referrer: "referrer",
        page_path: "page",
        page_location: "location",
        page_title: "title",
        screen_name: 1,
        transport_type: "transport",
        user_id: 1
    }, mj = {
        content_id: 1,
        event_category: 1,
        event_action: 1,
        event_label: 1,
        link_attribution: 1,
        linker: 1,
        method: 1,
        name: 1,
        send_page_view: 1,
        value: 1
    }, fj = {
        cookie_name: 1,
        cookie_expires: "duration",
        levels: 1
    }, nj = {
        anonymize_ip: 1,
        fatal: 1,
        non_interaction: 1,
        use_amp_client_id: 1,
        send_page_view: 1,
        store_gac: 1,
        conversion_linker: 1
    }, gj = function(a, b, c, d) {
        if (void 0 !== c)
            if (nj[b] && (c = Da(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[dj(b)] = c;
            else if (g(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, dj = function(a) {
        return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, oj = function(a) {
        var b = "general";
        0 <= va([C.Nd, C.Sb, C.Od, C.fb, "checkout_progress", C.qa, C.Yb, C.Ub, "set_checkout_option"], a) ? b = "ecommerce" : 0 <= va("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, ej = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, pj = function(a) {
        if (ua(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, Zi = function(a, b, c, d) {
        function e(F, L) {
            void 0 !== L && (k[F] = L)
        }
        var f = function(F) {
            return d.getWithConfig(F)
        }
          , h = {}
          , k = {}
          , l = {}
          , p = pj(f(C.lf));
        p && ej(k, "exp", p);
        var m = f("custom_map");
        if (Ra(m))
            for (var r in m)
                if (m.hasOwnProperty(r) && /^(dimension|metric)\d+$/.test(r) && void 0 != m[r]) {
                    var t = f(String(m[r]));
                    void 0 !== t && ej(k, r, t)
                }
        for (var q = Eh(d), u = 0; u < q.length; ++u) {
            var v = q[u]
              , w = f(v);
            if (mj.hasOwnProperty(v))
                gj(mj[v], v, w, h);
            else if (lj.hasOwnProperty(v))
                gj(lj[v], v, w, k);
            else if (kj.hasOwnProperty(v))
                gj(kj[v], v, w, l);
            else if (/^(dimension|metric|content_group)\d+$/.test(v))
                gj(1, v, w, k);
            else if ("developer_id" === v) {
                var y = Na(w);
                y && (k["&did"] = y)
            } else
                v === C.V && 0 > va(q, C.bc) && (l.cookieName = w + "_ga")
        }
        ej(l, "cookieDomain", "auto");
        ej(k, "forceSSL", !0);
        ej(h, "eventCategory", oj(c));
        0 <= va(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && ej(k, "nonInteraction", !0);
        "login" === c || "sign_up" === c || "share" === c ? ej(h, "eventLabel", f(C.rf)) : "search" === c || "view_search_results" === c ? ej(h, "eventLabel", f(C.Df)) : "select_content" === c && ej(h, "eventLabel", f(C.Hh));
        var x = h[C.ra] || {}
          , A = x[C.ib];
        A || 0 != A && x[C.F] ? l.allowLinker = !0 : !1 === A && ej(l, "useAmpClientId", !1);
        !1 !== f(C.Gh) && !1 !== f(C.ab) && Xi() || (k.allowAdFeatures = !1);
        if (!1 === f(C.ca) || !Yi()) {
            var B = "allowAdFeatures";
            k[B] = !1
        }
        l.name = b;
        k["&gtm"] = Ih(!0);
        k.hitCallback = d.D;
        Nc() && (k["&gcs"] = Vc(),
        Uc(C.J) || (l.storage = "none"),
        Uc(C.m) || (k.allowAdFeatures = !1,
        l.storeGac = !1));
        var z = f(C.ya) || f(C.qf) || ce("gtag.remote_config." + a + ".url", 2)
          , D = f(C.nf) || ce("gtag.remote_config." + a + ".dualId", 2);
        if (z && null != lc) {
            l._x_19 = z;
        }
        D && (l._x_20 = D);
        h.wa = k;
        h.va = l;
        return h
    }, bj = function(a, b) {
        function c(v) {
            var w = n(v);
            w.list = v.list_name;
            w.listPosition = v.list_position;
            w.position = v.list_position || v.creative_slot;
            w.creative = v.creative_name;
            return w
        }
        function d(v) {
            for (var w = [], y = 0; v && y < v.length; y++)
                v[y] && w.push(c(v[y]));
            return w.length ? w : void 0
        }
        function e(v) {
            return {
                id: f(C.ob),
                affiliation: f(C.ef),
                revenue: f(C.ja),
                tax: f(C.ke),
                shipping: f(C.kf),
                coupon: f(C.hf),
                list: f(C.wc) || v
            }
        }
        for (var f = function(v) {
            return b.getWithConfig(v)
        }, h = f(C.R), k, l = 0; h && l < h.length && !(k = h[l][C.wc]); l++)
            ;
        var p = f("custom_map");
        if (Ra(p))
            for (var m = 0; h && m < h.length; ++m) {
                var r = h[m], t;
                for (t in p)
                    p.hasOwnProperty(t) && /^(dimension|metric)\d+$/.test(t) && void 0 != p[t] && ej(r, t, r[p[t]])
            }
        var q = null
          , u = f(C.jf);
        a === C.qa || a === C.Yb ? q = {
            action: a,
            rb: e(),
            Ta: d(h)
        } : a === C.Sb ? q = {
            action: "add",
            Ta: d(h)
        } : a === C.Ub ? q = {
            action: "remove",
            Ta: d(h)
        } : a === C.Ka ? q = {
            action: "detail",
            rb: e(k),
            Ta: d(h)
        } : a === C.wd ? q = {
            action: "impressions",
            Gg: d(h)
        } : "view_promotion" === a ? q = {
            action: "promo_view",
            ld: d(u)
        } : "select_content" === a && u && 0 < u.length ? q = {
            action: "promo_click",
            ld: d(u)
        } : "select_content" === a ? q = {
            action: "click",
            rb: {
                list: f(C.wc) || k
            },
            Ta: d(h)
        } : a === C.fb || "checkout_progress" === a ? q = {
            action: "checkout",
            Ta: d(h),
            rb: {
                step: a === C.fb ? 1 : f(C.je),
                option: f(C.ie)
            }
        } : "set_checkout_option" === a && (q = {
            action: "checkout_option",
            rb: {
                step: f(C.je),
                option: f(C.ie)
            }
        });
        q && (q.Sh = f(C.ka));
        return q
    }, qj = {}, $i = function(a, b) {
        var c = qj[a];
        qj[a] = n(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    function rj() {
        var a = K;
        return a.gcq = a.gcq || new sj
    }
    var tj = function(a, b, c) {
        rj().register(a, b, c)
    }
      , uj = function(a, b, c, d) {
        rj().push("event", [b, a], c, d)
    }
      , vj = function(a, b) {
        rj().push("config", [a], b)
    }
      , wj = {}
      , xj = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.i = {};
        this.o = null;
        this.h = !1
    }
      , yj = function(a, b, c, d, e) {
        this.type = a;
        this.o = b;
        this.aa = c || "";
        this.h = d;
        this.i = e
    }
      , sj = function() {
        this.o = {};
        this.i = {};
        this.h = []
    }
      , zj = function(a, b) {
        var c = cg(b);
        return a.o[c.containerId] = a.o[c.containerId] || new xj
    }
      , Aj = function(a, b, c) {
        if (b) {
            var d = cg(b);
            if (d && 1 === zj(a, b).status) {
                zj(a, b).status = 2;
                var e = {};
                Td && (e.timeoutId = G.setTimeout(function() {
                    E(38);
                    Fd()
                }, 3E3));
                a.push("require", [e], d.containerId);
                wj[d.containerId] = Ga();
                if (fg()) {} else {
                    var h = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c"
                      , k = ("http:" != G.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h)
                      , l = uh(c, h) || k;
                    oc(l)
                }
            }
        }
    }
      , Bj = function(a, b, c, d) {
        if (d.aa) {
            var e = zj(a, d.aa)
              , f = e.o;
            if (f) {
                var h = n(c)
                  , k = n(e.targetConfig[d.aa])
                  , l = n(e.containerConfig)
                  , p = n(e.i)
                  , m = n(a.i)
                  , r = ce("gtm.uniqueEventId")
                  , t = cg(d.aa).prefix
                  , q = Dh(Ch(Bh(Ah(zh(yh(xh(h), k), l), p), m), function() {
                    Xd(r, t, "2");
                }), function() {
                    Xd(r, t, "3");
                });
                try {
                    Xd(r, t, "1");
                    f(d.aa, b, d.o, q)
                } catch (u) {
                    Xd(r, t, "4");
                }
            }
        }
    };
    sj.prototype.register = function(a, b, c) {
        if (3 !== zj(this, a).status) {
            zj(this, a).o = b;
            zj(this, a).status = 3;
            c && (zj(this, a).i = c);
            var d = cg(a)
              , e = wj[d.containerId];
            if (void 0 !== e) {
                var f = K[d.containerId].bootstrap
                  , h = d.prefix.toUpperCase();
                K[d.containerId]._spx && (h = h.toLowerCase());
                var k = ce("gtm.uniqueEventId")
                  , l = h
                  , p = Ga() - f;
                if (Td && !Kd[k]) {
                    k !== Gd && (Ed(),
                    Gd = k);
                    var m = l + "." + Math.floor(f - e) + "." + Math.floor(p);
                    Pd = Pd ? Pd + "," + m : "&cl=" + m
                }
                delete wj[d.containerId]
            }
            this.flush()
        }
    }
    ;
    sj.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Ga() / 1E3);
        Aj(this, c, b[0][C.ya] || this.i[C.ya]);
        this.h.push(new yj(a,e,c,b,d));
        d || this.flush()
    }
    ;
    sj.prototype.flush = function(a) {
        for (var b = this; this.h.length; ) {
            var c = this.h[0];
            if (c.i)
                c.i = !1,
                this.h.push(c);
            else
                switch (c.type) {
                case "require":
                    if (3 !== zj(this, c.aa).status && !a)
                        return;
                    Td && G.clearTimeout(c.h[0].timeoutId);
                    break;
                case "set":
                    Ba(c.h[0], function(l, p) {
                        n(Ma(l, p), b.i)
                    });
                    break;
                case "config":
                    var d = c.h[0]
                      , e = !!d[C.hc];
                    delete d[C.hc];
                    var f = zj(this, c.aa)
                      , h = cg(c.aa)
                      , k = h.containerId === h.id;
                    e || (k ? f.containerConfig = {} : f.targetConfig[c.aa] = {});
                    f.h && e || Bj(this, C.ba, d, c);
                    f.h = !0;
                    delete d[C.eb];
                    k ? n(d, f.containerConfig) : n(d, f.targetConfig[c.aa]);
                    break;
                case "event":
                    Bj(this, c.h[1], c.h[0], c)
                }
            this.h.shift()
        }
    }
    ;
    var Cj = "HA GF GP G UA AW DC".split(" ")
      , Dj = !1
      , Ej = {}
      , Fj = !1;
    function Gj(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = n(b),
        b[C.Ac] && (c.eventCallback = b[C.Ac]),
        b[C.Kb] && (c.eventTimeout = b[C.Kb]));
        return c
    }
    var Ij = function() {
        Dj = Dj || !K.gtagRegistered,
        K.gtagRegistered = !0,
        Dj && (K.addTargetToGroup = function(a) {
            Hj(a, "default")
        }
        );
        return Dj
    };
    var Jj = function(a) {
        Ba(Ej, function(b, c) {
            var d = va(c, a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Hj = function(a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++)
            Ej[b[c]] = Ej[b[c]] || [],
            Ej[b[c]].push(a)
    };
    var Kj = {
        config: function(a) {
            var b = a[2] || {};
            if (2 > a.length || !g(a[1]) || !Ra(b))
                return;
            var c = cg(a[1]);
            if (!c)
                return;
            Jj(c.id);
            Hj(c.id, b[C.Cc] || "default");
            delete b[C.Cc];
            Fj || E(43);
            Bd();
            if (Ij() && -1 !== va(Cj, c.prefix)) {
                "G" === c.prefix && (b[C.eb] = !0);
                vj(b, c.id);
                return
            }
            fe("gtag.targets." + c.id, void 0);
            fe("gtag.targets." + c.id, n(b));
            var d = {};
            d[C.za] = c.id;
            return Gj(C.ba, d);
        },
        event: function(a) {
            var b = a[1];
            if (g(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Ra(a[2]) && void 0 != a[2])
                        return;
                    c = a[2]
                }
                var d = Gj(b, c);
                var e;
                var f = c && c[C.za];
                void 0 === f && (f = ce(C.za, 2),
                void 0 === f && (f = "default"));
                if (g(f) || ua(f)) {
                    for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h.length; l++)
                        0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(Ej[h[l]] || []);
                    e = eg(k)
                } else
                    e = void 0;
                var p = e;
                if (!p)
                    return;
                var m = Ij();
                Bd();
                for (var r = [], t = 0; m && t < p.length; t++) {
                    var q = p[t];
                    if (-1 !== va(Cj, q.prefix)) {
                        var u = n(c);
                        "G" === q.prefix && (u[C.eb] = !0);
                        uj(b, u, q.id)
                    }
                    r.push(q.id)
                }
                d.eventModel = d.eventModel || {};
                0 < p.length ? d.eventModel[C.za] = r.join() : delete d.eventModel[C.za];
                Fj || E(43);
                return d
            }
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime)
                return Fj = !0,
                Ij(),
                {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
        },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && Ra(a[1]) ? b = n(a[1]) : 3 == a.length && g(a[1]) && (b = {},
            Ra(a[2]) || ua(a[2]) ? b[a[1]] = n(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (Bd(),
                Ij()) {
                    n(b);
                    var c = n(b);
                    rj().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        },
        consent: function(a) {
            if (3 === a.length) {
                var b = function() {
                    Ij() && n(a[2], {
                        subcommand: a[1]
                    })
                };
                E(39);
                var c = a[1];
                "default" === c ? (b(),
                Sc(a[2])) : "update" === c && (b(),
                Tc(a[2]))
            }
        }
    }
      , Lj = {
        policy: !0
    };
    var Mj = function(a, b) {
        var c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            var d = !0, e;
            for (e in c)
                if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break
                }
            d && (c.end(),
            c.end = null)
        }
    }
      , Oj = function(a) {
        var b = Nj()
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Pj = !1
      , Qj = [];
    function Rj() {
        if (!Pj) {
            Pj = !0;
            for (var a = 0; a < Qj.length; a++)
                I(Qj[a])
        }
    }
    var Sj = function(a) {
        Pj ? I(a) : Qj.push(a)
    };
    var jk = function(a) {
        if (ik(a))
            return a;
        this.h = a
    };
    jk.prototype.Dg = function() {
        return this.h
    }
    ;
    var ik = function(a) {
        return !a || "object" !== Pa(a) || Ra(a) ? !1 : "getUntrustedUpdateValue"in a
    };
    jk.prototype.getUntrustedUpdateValue = jk.prototype.Dg;
    var kk = []
      , lk = !1
      , mk = function(a) {
        return G["dataLayer"].push(a)
    }
      , pk = function(a) {
        var b = K["dataLayer"]
          , c = b ? b.subscribers : 1
          , d = 0;
        return function() {
            ++d === c && a()
        }
    };
    function qk(a) {
        var b = a._clear;
        Ba(a, function(f, h) {
            "_clear" !== f && (b && fe(f, void 0),
            fe(f, h))
        });
        wd || (wd = a["gtm.start"]);
        var c = a.event
          , d = a["gtm.uniqueEventId"];
        if (!c)
            return !1;
        d || (d = Bd(),
        a["gtm.uniqueEventId"] = d,
        fe("gtm.uniqueEventId", d));
        var e = rk(a);
        switch (c) {
        case "gtm.init":
            E(19),
            e && E(20)
        }
        return e
    }
    function rk(a) {
        var b = a.event, c = a["gtm.uniqueEventId"], d, e = K.zones;
        d = e ? e.checkState(od.s, c) : Bg;
        return d.active ? sh(c, b, d.isAllowed || d.isWhitelist, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    function sk() {
        for (var a = !1; !lk && 0 < kk.length; ) {
            lk = !0;
            delete $d.eventModel;
            be();
            var b = kk.shift();
            if (null != b) {
                var c = ik(b);
                if (c) {
                    var d = b;
                    b = ik(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
                        var h = e[f]
                          , k = ce(h, 1);
                        if (ua(k) || Ra(k))
                            k = n(k);
                        ae[h] = k
                    }
                }
                try {
                    if (ra(b))
                        try {
                            b.call(de)
                        } catch (w) {}
                    else if (ua(b)) {
                        var l = b;
                        if (g(l[0])) {
                            var p = l[0].split(".")
                              , m = p.pop()
                              , r = l.slice(1)
                              , t = ce(p.join("."), 2);
                            if (void 0 !== t && null !== t)
                                try {
                                    t[m].apply(t, r)
                                } catch (w) {}
                        }
                    } else {
                        var q = b;
                        if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                            a: {
                                var u = b;
                                if (u.length && g(u[0])) {
                                    var v = Kj[u[0]];
                                    if (v && (!c || !Lj[u[0]])) {
                                        b = v(u);
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            if (!b) {
                                lk = !1;
                                continue
                            }
                        }
                        a = qk(b) || a
                    }
                } finally {
                    c && be(!0)
                }
            }
            lk = !1
        }
        return !a
    }
    function tk() {
        var a = sk();
        try {
            Mj(G["dataLayer"], od.s)
        } catch (b) {}
        return a
    }
    var vk = function() {
        var a = mc("dataLayer", [])
          , b = mc("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Kg(function() {
            b.gtmDom || (b.gtmDom = !0,
            a.push({
                event: "gtm.dom"
            }))
        });
        Sj(function() {
            b.gtmLoad || (b.gtmLoad = !0,
            a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < K.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++)
                    e[f] = new jk(arguments[f])
            } else
                e = [].slice.call(arguments, 0);
            var h = c.apply(a, e);
            kk.push.apply(kk, e);
            if (300 < this.length)
                for (E(4); 300 < this.length; )
                    this.shift();
            var k = "boolean" !== typeof h || h;
            return sk() && k
        }
        ;
        var d = a.slice(0);
        kk.push.apply(kk, d);
        uk() && I(tk)
    }
      , uk = function() {
        var a = !0;
        return a
    };
    var wk = {};
    wk.Lb = new String("undefined");
    var xk = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d] === wk.Lb ? b : a[d]);
            return c.join("")
        }
    };
    xk.prototype.toString = function() {
        return this.h("undefined")
    }
    ;
    xk.prototype.valueOf = xk.prototype.toString;
    wk.Jf = xk;
    wk.Kc = {};
    wk.ng = function(a) {
        return new xk(a)
    }
    ;
    var yk = {};
    wk.mh = function(a, b) {
        var c = Bd();
        yk[c] = [a, b];
        return c
    }
    ;
    wk.se = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = yk[c];
            if (d && "function" === typeof d[b])
                d[b]();
            yk[c] = void 0
        }
    }
    ;
    wk.Lg = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)
            b = b || 8 === a[d],
            c = c || 16 === a[d];
        return b && c
    }
    ;
    wk.bh = function(a) {
        if (a === wk.Lb)
            return a;
        var b = Bd();
        wk.Kc[b] = a;
        return 'google_tag_manager["' + od.s + '"].macro(' + b + ")"
    }
    ;
    wk.Vg = function(a, b, c) {
        a instanceof wk.Jf && (a = a.h(wk.mh(b, c)),
        b = qa);
        return {
            Xc: a,
            D: b
        }
    }
    ;
    var zk = function(a, b, c) {
        function d(f, h) {
            var k = f[h];
            return k
        }
        var e = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": d(a, "className"),
            "gtm.elementId": a["for"] || uc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || d(a, "target") || ""
        };
        c && (e["gtm.triggers"] = c.join(","));
        e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase || "";
        return e
    }
      , Ak = function(a) {
        K.hasOwnProperty("autoEventsSettings") || (K.autoEventsSettings = {});
        var b = K.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , Bk = function(a, b, c) {
        Ak(a)[b] = c
    }
      , Ck = function(a, b, c, d) {
        var e = Ak(a)
          , f = Ha(e, b, d);
        e[b] = c(f)
    }
      , Dk = function(a, b, c) {
        var d = Ak(a);
        return Ha(d, b, c)
    };
    var Ek = ["input", "select", "textarea"]
      , Fk = ["button", "hidden", "image", "reset", "submit"]
      , Gk = function(a) {
        var b = a.tagName.toLowerCase();
        return !wa(Ek, function(c) {
            return c === b
        }) || "input" === b && wa(Fk, function(c) {
            return c === a.type.toLowerCase()
        }) ? !1 : !0
    }
      , Hk = function(a) {
        return a.form ? a.form.tagName ? a.form : H.getElementById(a.form) : xc(a, ["form"], 100)
    }
      , Ik = function(a, b, c) {
        if (!a.elements)
            return 0;
        for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
            var h = a.elements[e];
            if (Gk(h)) {
                if (h.getAttribute(c) === d)
                    return f;
                f++
            }
        }
        return 0
    };
    var Jk = !!G.MutationObserver
      , Kk = void 0
      , Lk = function(a) {
        if (!Kk) {
            var b = function() {
                var c = H.body;
                if (c)
                    if (Jk)
                        (new MutationObserver(function() {
                            for (var e = 0; e < Kk.length; e++)
                                I(Kk[e])
                        }
                        )).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                    else {
                        var d = !1;
                        sc(c, "DOMNodeInserted", function() {
                            d || (d = !0,
                            I(function() {
                                d = !1;
                                for (var e = 0; e < Kk.length; e++)
                                    I(Kk[e])
                            }))
                        })
                    }
            };
            Kk = [];
            H.body ? b() : I(b)
        }
        Kk.push(a)
    };
    var fl = G.clearTimeout
      , gl = G.setTimeout
      , T = function(a, b, c) {
        if (fg()) {
            b && I(b)
        } else
            return oc(a, b, c)
    }
      , hl = function() {
        return new Date
    }
      , il = function() {
        return G.location.href
    }
      , jl = function(a) {
        return pe(re(a), "fragment")
    }
      , kl = function(a) {
        return qe(re(a))
    }
      , ll = function(a, b) {
        return ce(a, b || 2)
    }
      , ml = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = mk(a)) : d = mk(a);
        return d
    }
      , nl = function(a, b) {
        G[a] = b
    }
      , W = function(a, b, c) {
        b && (void 0 === G[a] || c && !G[a]) && (G[a] = b);
        return G[a]
    }
      , ol = function(a, b, c) {
        return ve(a, b, void 0 === c ? !0 : !!c)
    }
      , pl = function(a, b, c) {
        return 0 === Ee(a, b, c)
    }
      , ql = function(a, b) {
        if (fg()) {
            b && I(b)
        } else
            qc(a, b)
    }
      , rl = function(a) {
        return !!Dk(a, "init", !1)
    }
      , sl = function(a) {
        Bk(a, "init", !0)
    }
      , tl = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : vd;
        c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        T(O("https://", "http://", c))
    }
      , ul = function(a, b) {
        var c = a[b];
        return c
    };
    var vl = wk.Vg;
    function Sl(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Tl = new za;
    function Ul(a, b) {
        function c(h) {
            var k = re(h)
              , l = pe(k, "protocol")
              , p = pe(k, "host", !0)
              , m = pe(k, "port")
              , r = pe(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == m || "https" == l && "443" == m)
                l = "web",
                m = "default";
            return [l, p, m, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Vl(a) {
        return Wl(a) ? 1 : 0
    }
    function Wl(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && ua(c)) {
            for (var d = 0; d < c.length; d++)
                if (Vl({
                    "function": a["function"],
                    arg0: b,
                    arg1: c[d]
                }))
                    return !0;
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var e;
            a: {
                if (b) {
                    var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                    try {
                        for (var h = 0; h < f.length; h++)
                            if (b[f[h]]) {
                                e = b[f[h]](c);
                                break a
                            }
                    } catch (t) {}
                }
                e = !1
            }
            return e;
        case "_ew":
            return Sl(b, c);
        case "_eq":
            return String(b) == String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            var k;
            k = String(b).split(",");
            return 0 <= va(k, String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            var l;
            var p = a.ignore_case ? "i" : void 0;
            try {
                var m = String(c) + p
                  , r = Tl.get(m);
                r || (r = new RegExp(c,p),
                Tl.set(m, r));
                l = r.test(b)
            } catch (t) {
                l = !1
            }
            return l;
        case "_sw":
            return 0 == String(b).indexOf(String(c));
        case "_um":
            return Ul(b, c)
        }
        return !1
    }
    ;var Xl = {}
      , Yl = encodeURI
      , X = encodeURIComponent
      , Zl = rc;
    var $l = function(a, b) {
        if (!a)
            return !1;
        var c = pe(re(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    };
    var am = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    Xl.Mg = function() {
        var a = !1;
        return a
    }
    ;
    function An() {
        return G.gaGlobal = G.gaGlobal || {}
    }
    var Bn = function() {
        var a = An();
        a.hid = a.hid || ya();
        return a.hid
    }
      , Cn = function(a, b) {
        var c = An();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var Ln = window
      , Mn = document
      , Nn = function(a) {
        var b = Ln._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Ln["ga-disable-" + a])
            return !0;
        try {
            var c = Ln.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = te("AMP_TOKEN", String(Mn.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return Mn.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    function Qn(a) {
        delete a.eventModel[C.eb];
        Sn(a.eventModel)
    }
    var Sn = function(a) {
        Ba(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[C.la] || {};
        Ba(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Vn = function(a, b, c) {
        uj(b, c, a)
    }
      , Wn = function(a, b, c) {
        uj(b, c, a, !0)
    }
      , Yn = function(a, b) {};
    function Xn(a, b) {}
    var Z = {
        a: {}
    };

    Z.a.gtagha = ["google"],
    function() {
        (function(a) {
            Z.__gtagha = a;
            Z.__gtagha.b = "gtagha";
            Z.__gtagha.g = !0;
            Z.__gtagha.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();
    Z.a.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0;
            Z.__e.priorityOverride = 0
        }
        )(function(a) {
            return String(he(a.vtp_gtmEventId, "event"))
        })
    }();

    Z.a.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0;
            Z.__v.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = ll(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();
    Z.a.rep = ["google"],
    function() {
        (function(a) {
            Z.__rep = a;
            Z.__rep.b = "rep";
            Z.__rep.g = !0;
            Z.__rep.priorityOverride = 0
        }
        )(function(a) {
            var b;
            switch (cg(a.vtp_containerId).prefix) {
            case "AW":
                b = ui;
                break;
            case "DC":
                b = Fi;
                break;
            case "GF":
                b = Ki;
                break;
            case "GP":
                b = Vi;
                break;
            case "HA":
                b = Pi;
                break;
            case "UA":
                b = jj;
                break;
            default:
                I(a.vtp_gtmOnFailure);
                return
            }
            I(a.vtp_gtmOnSuccess);
            tj(a.vtp_containerId, b, a.vtp_remoteConfig || {})
        })
    }();

    Z.a.cid = ["google"],
    function() {
        (function(a) {
            Z.__cid = a;
            Z.__cid.b = "cid";
            Z.__cid.g = !0;
            Z.__cid.priorityOverride = 0
        }
        )(function() {
            return od.s
        })
    }();

    Z.a.gtagaw = ["google"],
    function() {
        (function(a) {
            Z.__gtagaw = a;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0;
            Z.__gtagaw.priorityOverride = 0
        }
        )(function(a) {
            var b = "AW-" + String(a.vtp_conversionId);
            uj(String(a.vtp_eventName), a.vtp_eventData || {}, a.vtp_conversionLabel ? b + "/" + String(a.vtp_conversionLabel) : b);
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.b = "get";
            Z.__get.g = !0;
            Z.__get.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? Wn : Vn)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();

    Z.a.gtagfl = [],
    function() {
        (function(a) {
            Z.__gtagfl = a;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0;
            Z.__gtagfl.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.gtaggf = ["google"],
    function() {
        (function(a) {
            Z.__gtaggf = a;
            Z.__gtaggf.b = "gtaggf";
            Z.__gtaggf.g = !0;
            Z.__gtaggf.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();
    Z.a.gtaggp = ["google"],
    function() {
        (function(a) {
            Z.__gtaggp = a;
            Z.__gtaggp.b = "gtaggp";
            Z.__gtaggp.g = !0;
            Z.__gtaggp.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.gtagua = ["google"],
    function() {
        (function(a) {
            Z.__gtagua = a;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0;
            Z.__gtagua.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    var Zn = {};
    Zn.macro = function(a) {
        if (wk.Kc.hasOwnProperty(a))
            return wk.Kc[a]
    }
    ,
    Zn.onHtmlSuccess = wk.se(!0),
    Zn.onHtmlFailure = wk.se(!1);
    Zn.dataLayer = de;
    Zn.callback = function(a) {
        zd.hasOwnProperty(a) && ra(zd[a]) && zd[a]();
        delete zd[a]
    }
    ;
    function $n() {
        K[od.s] = Zn;
        Ja(Ad, Z.a);
        yb = yb || wk;
        zb = Lb
    }
    function ao() {
        Ac.gtm_3pds = !0;
        Ac.gtag_cs_api = !0;
        K = G.google_tag_manager = G.google_tag_manager || {};
        var a = !1;
        if (K[od.s]) {
            var b = K.zones;
            b && b.unregisterChild(od.s);
        } else {
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++)
                rb.push(d[e]);
            for (var f = c.tags || [], h = 0; h < f.length; h++)
                ub.push(f[h]);
            for (var k = c.predicates || [], l = 0; l < k.length; l++)
                tb.push(k[l]);
            for (var p = c.rules || [], m = 0; m < p.length; m++) {
                for (var r = p[m], t = {}, q = 0; q < r.length; q++)
                    t[r[q][0]] = Array.prototype.slice.call(r[q], 1);
                sb.push(t)
            }
            wb = Z;
            xb = Vl;
            $n();
            vk();
            Fg = !1;
            Gg = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState)
                Ig();
            else {
                sc(H, "DOMContentLoaded", Ig);
                sc(H, "readystatechange", Ig);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var u = !0;
                    try {
                        u = !G.frameElement
                    } catch (x) {}
                    u && Jg()
                }
                sc(G, "load", Ig)
            }
            Pj = !1;
            "complete" === H.readyState ? Rj() : sc(G, "load", Rj);
            a: {
                if (!Td)
                    break a;
                G.setInterval(Ud, 864E5);
            }
            xd = (new Date).getTime();
            Zn.bootstrap = xd;
        }
    }
    (function(a) {
        a()
    }
    )(ao);

}
)()
