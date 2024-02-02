/* 2023-12-01 10:34:42 joya.js @issue to huangzhihua@jd.com Thanks */
window = global;

window.navigator = {}

window.navigator.javaEnabled = function javaEnabled() {
    return false;
};



document = {
    'title': '京东联盟 - 网络赚钱，流量变现，专业电商CPS联盟平台！',
    'referrer': '',
    'domain': "union.jd.com",
    'cookie': "RT=\"sl=0&ss=lqdjt86t&tt=0&z=1&dm=jd.com&si=kapv6dq0d1\"",

    createElement: function () {
        return {}
    }
};

document.location = {
    'hostname': "union.jd.com",
    'href': "https://union.jd.com/proManager/index?pageNo=1"
}


location = {
    'href': "https://union.jd.com/proManager/index?pageNo=1"
}

!function() {
    var t = window
      , r = document
      , n = encodeURIComponent
      , o = decodeURIComponent
      , a = "length"
      , s = "indexOf"
      , c = "toLowerCase"
      , d = !1
      , u = !1
      , g = ""
      , l = ""
      , f = {};
    f.util = {
        join: function(t) {
            if (t instanceof Array) {
                for (var e = "", r = 0, n = t.length; r < n; r++)
                    e += t[r] + (r == n - 1 ? "" : "|||");
                return e
            }
            return t
        },
        getParameter: function(t, e) {
            var r = new RegExp("(?:^|&|[?]|[/])" + e + "=([^&]*)").exec(t);
            return r ? n(r[1]) : ""
        },
        Wv: function(t, e, n, i) {
            n = n && ((n.match(/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/) || [""])[0] || n.replace(/.*?([^.]+\.[^.]+)$/, "$1")),
            t = t + "=" + e + "; path=/; ",
            i && (t += "expires=" + new Date((new Date).getTime() + i).toGMTString() + "; "),
            n && (t += "domain=" + n + ";"),
            r.cookie = t
        },
        Vv: function(t) {
            for (var e = [], n = r.cookie.split(";"), i = RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$"), o = 0; o < n[a]; o++) {
                var s = n[o].match(i);
                s && e.push(s[1])
            }
            return e
        },
        isIE8OrIE9: function() {
            return ~window.navigator.userAgent.indexOf("MSIE 8.0") || ~window.navigator.userAgent.indexOf("MSIE 9.0")
        },
        hasAXO: function() {
            return !!window.ActiveXObject || "ActiveXObject"in window
        },
        loadJs: function(t, e) {
            var r = document.createElement("script");
            r.type = "text/javascript",
            r.async = !0,
            r.src = t,
            r.onload = r.onreadystatechange = function() {
                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e && e(),
                r.onload = r.onreadystatechange = null)
            }
            ;
            var n = document.getElementsByTagName("script");
            n && n[0] && n[0].parentNode.insertBefore(r, n[0])
        },
        getSessionStorage: function(t) {
            try {
                if (window.Storage && window.sessionStorage && window.sessionStorage instanceof Storage)
                    return JSON.parse(sessionStorage.getItem(t))
            } catch (e) {}
        },
        setSessionStorage: function(t, r) {
            try {
                window.Storage && window.sessionStorage && window.sessionStorage instanceof Storage && sessionStorage.setItem(t, JSON.stringify(r))
            } catch (e) {}
        },
        removeSessionStorage: function(t) {
            window.Storage && window.sessionStorage && window.sessionStorage instanceof Storage && sessionStorage.removeItem(t)
        },
        isObject: function(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        },
        isJson: function(t) {
            if ("string" == typeof t)
                try {
                    var r = JSON.parse(t);
                    return !("object" != typeof r || !r)
                } catch (e) {
                    return !1
                }
            return !1
        },
        randomNum: function(t) {
            for (var e = Math.floor(9 * Math.random()) + 1 + "", r = 1; r < t; r++)
                e += Math.floor(10 * Math.random());
            return e
        }
    };
    var h = function() {
        var t = navigator.userAgent || "";
        if (t.indexOf(";jdlog;") > -1) {
            var e = t.split(";");
            if (e && e.length > 3)
                return {
                    client: e[0],
                    platform: e[2],
                    clientVer: e[3],
                    platformVer: e[4]
                }
        }
    }()
      , p = 0;
    function m(t) {
        return (t ? "_" : "") + p++
    }
    var v, _, w, b = m(), j = m(), y = m(), S = m(), A = m(), x = m(), J = m(), O = m(), N = m(), k = m(), C = m(), T = m(), D = m(), E = m(), M = m(), R = m(), I = m(), L = m(), P = m(), q = m(), $ = m(), V = m(), U = m(), X = m(), z = m(), F = m(), B = m(), Y = m(), W = m(), H = m(), G = m(), K = m(), Q = m(), Z = m(), tt = m(), et = m(), rt = m(), nt = m(), it = m(), ot = ["i.easou.com:q", "m.baidu.com:word", "m.sm.cn:q", "m.so.com:q", "wap.sogou.com:keyword", "m.sogou.com:keyword", "wap.sogo.com:keyword", "m.sogo.com:keyword", "page.roboo.com:q", "ask.com:q", "baidu:word", "baidu:wd", "bing:q", "easou:q", "google:q", "roboo:word", "roboo:q", "sm.cn:q", "so.com:q", "sogou:keyword", "sogou:query", "sogo.com:keyword", "sogo.com:query", "yahoo:p", "yandex:text", "yicha:key"], at = function() {
        return (new Date).getTime() + "" + parseInt(2147483647 * Math.random())
    }, st = function() {
        return gt(r.domain)
    }, ct = function() {
        var e = {}
          , n = t.navigator
          , i = t.screen;
        return e.D = i ? i.width + "x" + i.height : "-",
        e.C = i ? i.colorDepth + "-bit" : "-",
        e.language = (n && (n.language || n.browserLanguage) || "-")[c](),
        e.javaEnabled = n && n.javaEnabled() ? 1 : 0,
        e.characterSet = r.characterSet || r.charset || "-",
        e
    }, dt = function() {
        var t, e, r, n;
        if (r = "ShockwaveFlash",
        (t = (t = window.navigator) ? t.plugins : void 0) && t[a] > 0)
            for (e = 0; e < t[a] && !n; e++)
                r = t[e],
                r.name[s]("Shockwave Flash") > -1 && (n = r.description.split("Shockwave Flash ")[1]);
        else {
            r = r + "." + r;
            try {
                n = (e = new ActiveXObject(r + ".7")).GetVariable("$version")
            } catch (d) {}
            if (!n)
                try {
                    e = new ActiveXObject(r + ".6"),
                    n = "WIN 6,0,21,0",
                    e.AllowScriptAccess = "always",
                    n = e.GetVariable("$version")
                } catch (i) {}
            if (!n)
                try {
                    n = (e = new ActiveXObject(r)).GetVariable("$version")
                } catch (u) {}
            n && (n = (n = n.split(" ")[1].split(","))[0] + "." + n[1] + " r" + n[2])
        }
        var o = f.util.Vv("_r2");
        t = n ? n + (o[a] > 0 ? "_" + o[0] : "") : "-";
        var c = f.util.Vv("limgs");
        return t += c[a] > 0 ? "_" + c[0] : ""
    }, ut = function(t) {
        return void 0 == t || "-" == t || "" == t
    }, gt = function(t) {
        var e, r = 1, n = 0;
        if (!ut(t))
            for (r = 0,
            e = t[a] - 1; e >= 0; e--)
                n = t.charCodeAt(e),
                r = (r << 6 & 268435455) + n + (n << 14),
                n = 266338304 & r,
                r = 0 != n ? r ^ n >> 21 : r;
        return r
    }, lt = function() {
        var t = window.jaq || []
          , e = {};
        if (t instanceof Array)
            for (var r = 0, n = t.length; r < n; r++)
                e[t[r][0]] = t[r][1];
        return e
    }, ft = function() {
        var t = {
            name: "other",
            version: "0"
        }
          , e = navigator.userAgent.toLowerCase();
        browserRegExp = {
            se360: /360se/,
            se360_2x: /qihu/,
            ie: /msie[ ]([\w.]+)/,
            firefox: /firefox[|\/]([\w.]+)/,
            chrome: /chrome[|\/]([\w.]+)/,
            safari: /version[|\/]([\w.]+)(\s\w.+)?\s?safari/,
            opera: /opera[|\/]([\w.]+)/
        };
        for (var r in browserRegExp) {
            var n = browserRegExp[r].exec(e);
            if (n) {
                t.name = r,
                t.version = n[1] || "0";
                break
            }
        }
        return t
    }, ht = function() {
        var t = /(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(navigator.platform.toLowerCase());
        return null == t ? "other" : t[0]
    }, pt = function(t) {
        t.set(N, r.location.hostname),
        t.set(k, r.title.replace(/\$/g, "")),
        t.set(C, r.location.pathname),
        t.set(T, r.referrer.replace(/\$/g, "")),
        t.set(D, r.location.href);
        var e = f.util.Vv("__jda")
          , n = e[a] > 0 ? e[0].split(".") : null;
        t.set(j, n && !ut(n[1]) ? n[1] : at()),
        t.set(U, n ? n[2] : t.get(A)),
        t.set(X, n ? n[3] : t.get(A)),
        t.set(z, n ? n[4] : t.get(A)),
        t.set(F, n ? n[5] : 1);
        var i, s = f.util.Vv("__jdv");
        s[a] > 0 && (i = (s = jt ? o(s[0]) : s[0]).split("|")),
        t.set(W, i ? i[1] : "direct"),
        t.set(H, i ? i[2] : "-"),
        t.set(G, i ? i[3] : "none"),
        t.set(K, i ? i[4] : "-");
        var c = f.util.Vv("__jdb")
          , d = c[a] > 0 ? c[0].split(".") : null
          , u = d && 4 == d.length ? 1 : 0;
        t.set(B, d ? d[0 + u] : 0),
        t.set(Z, function() {
            for (var t = "", e = ["jwotest_product", "jwotest_list", "jwotest_cart", "jwotest_orderinfo", "jwotest_homepage", "jwotest_other1", "jwotest_other2", "jwotest_other3"], r = 0, n = e.length; r < n; r++) {
                var i = f.util.Vv(e[r]);
                if (0 != i[a]) {
                    var s = o(i[0]).match(/=(.*?)&/gi)
                      , c = [];
                    if (null != s) {
                        for (var d = 0; d < s.length; d++) {
                            var u = s[d];
                            c.push(0 == d ? "T" + u.substring(1, u.length - 1) : u.substring(1, u.length - 1))
                        }
                        t += c.join("-") + ";"
                    }
                }
            }
            return t
        }() || "-");
        var g = lt();
        return "pin" !== g.account_type && g.erp_account && t.set(tt, g.erp_account),
        !0
    }, mt = function(t, e) {
        var r = e.split(".");
        t.set(U, r[2]),
        t.set(X, r[4]),
        t.set(z, Math.round((new Date).getTime() / 1e3)),
        t.m(F),
        t.set(B, 1)
    }, vt = function(t) {
        t.m(B)
    }, _t = function(t) {
        return [t.get(y), t.get(W) || r.domain, t.get(H) || "(direct)", t.get(G) || "direct", t.get(K) || "-", (new Date).getTime()].join("|")
    }, wt = function(t) {
        var e, r, n = f.util.Vv("__jda");
        0 == n.length ? (r = (e = t).get(A),
        e.set(j, at()),
        e.set(U, r),
        e.set(X, r),
        e.set(z, r),
        e.set(F, 1),
        e.set(B, 1)) : mt(t, n[0])
    }, bt = function() {
        for (var t = ".jd.com", e = r.domain.toLowerCase(), n = ["jd.ru", "joybuy.com", "joybuy.es"], i = 0; i < n.length; i++) {
            var o = n[i];
            if (e.substr(e.length - o.length) === o) {
                t = ".joybuy.com";
                break
            }
        }
        return t
    }(), jt = ".joybuy.com" === bt, yt = function(t) {
        var e = t.split("#")
          , r = e[0].split("?");
        if (u && e[1]) {
            var n = e[1].split("?")
              , i = (t = r[0].replace(/\/$/, ""),
            n[0].replace(/^\//, ""));
            r[0] = t + "/" + i,
            n[1] && (r[1] = r[1] ? r[1] + "&" + n[1] : n[1])
        }
        return r.join("?")
    }, St = new function() {
        var t = {};
        this.set = function(e, r) {
            t[e] = r
        }
        ,
        this.get = function(e) {
            if (e === rt) {
                var r = lt();
                if (r.extParams) {
                    var i = r.extParams;
                    return "object" == typeof i && (i = JSON.stringify(i)),
                    n(i)
                }
                return void 0 !== t[e] ? t[e] : null
            }
            return void 0 !== t[e] ? t[e] : null
        }
        ,
        this.m = function(e) {
            var r = this.get(e)
              , n = void 0 == r || "" === r ? 0 : 1 * r;
            t[e] = n + 1
        }
        ;
        var e = lt();
        this.set(b, e.account),
        this.set(S, e.domain),
        this.set(y, st()),
        this.set(A, Math.round((new Date).getTime() / 1e3)),
        this.set(x, 15552e6),
        this.set(J, 1296e6),
        this.set(O, 18e5),
        this.set(E, dt());
        var r = ft();
        this.set(M, r.name),
        this.set(R, r.version),
        this.set(I, ht());
        var i = ct();
        this.set(L, i.D),
        this.set(P, i.C),
        this.set(q, i.language),
        this.set($, i.javaEnabled),
        this.set(V, i.characterSet),
        this.set(Y, ot),
        this.set(Q, (new Date).getTime()),
        this.set(it, [Number("IntersectionObserver"in window), Number("MutationObserver"in window), Number("querySelectorAll"in document)].join("|"));
        var o, s = e.erp_account, c = f.util.Vv("pin"), g = e.account_type || "erp_pin";
        o = "erp" === g ? s : "pin" === g ? c[a] ? c[0] : "-" : s || (c[a] ? c[0] : "-"),
        this.set(nt, g),
        this.set(tt, o);
        var l, h, p = "";
        (l = f.util.Vv("pinId")) && l[a] && (p = l[0]),
        this.set(et, p || "-"),
        e.extParams && ("object" == typeof (h = e.extParams) && (h = JSON.stringify(h)),
        this.set(rt, n(h))),
        e.anchorpvflag && "true" == e.anchorpvflag && (d = !0,
        e.anchorToUri && (u = !0))
    }
    , At = function() {
        this.a = {},
        this.add = function(t, e) {
            this.a[t] = e
        }
        ,
        this.get = function(t) {
            return this.a[t]
        }
        ,
        this.toString = function() {
            return this.a.join("&")
        }
    }, xt = function(t, e) {
        e.add("jdac", t.get(b)),
        e.add("jduid", t.get(j)),
        e.add("jdsid", t.get(j) + "|" + t.get(F)),
        e.add("jdje", t.get($)),
        e.add("jdsc", t.get(P)),
        e.add("jdsr", t.get(L)),
        e.add("jdul", t.get(q)),
        e.add("jdcs", t.get(V)),
        e.add("jddt", t.get(k) || "-"),
        e.add("jdmr", n(t.get(T))),
        e.add("jdhn", t.get(N) || "-"),
        e.add("jdfl", t.get(E)),
        e.add("jdos", t.get(I)),
        e.add("jdbr", t.get(M)),
        e.add("jdbv", t.get(R)),
        e.add("jdwb", t.get(U)),
        e.add("jdxb", t.get(X)),
        e.add("jdyb", t.get(z)),
        e.add("jdzb", t.get(F)),
        e.add("jdcb", t.get(B)),
        e.add("jdusc", t.get(W) || "direct"),
        e.add("jducp", t.get(H) || "-"),
        e.add("jdumd", t.get(G) || "-"),
        e.add("jduct", t.get(K) || "-"),
        e.add("jdlt", "object" != typeof jdpts ? 0 : jdpts._st == undefined ? 0 : t.get(Q) - jdpts._st),
        e.add("jdtad", t.get(Z)),
        e.add("pinid", t.get(et))
    }, Jt = function() {
        pt(St);
        var t, e, i = function(t) {
            var e = r.location.search
              , n = r.referrer
              , i = t.get(S)
              , o = f.util.getParameter(e, "utm_source")
              , d = []
              , u = t.get(W)
              , g = t.get(H)
              , l = t.get(G)
              , h = 0 == f.util.Vv("__jdb")[a]
              , p = !1;
            if (o) {
                var m = f.util.getParameter(e, "utm_campaign")
                  , v = f.util.getParameter(e, "utm_medium")
                  , _ = f.util.getParameter(e, "utm_term");
                d.push(o),
                d.push(m || "-"),
                d.push(v || "-"),
                d.push(_ || "notset"),
                t.set(K, d[3]),
                p = !0
            } else {
                var w = n && n.split("/")[2]
                  , b = !1;
                if (w && w[s](i) < 0) {
                    for (var j = t.get(Y), y = 0; y < j.length; y++) {
                        var A = j[y].split(":");
                        if (w[s](A[0][c]()) > -1 && n[s]((A[1] + "=")[c]()) > -1) {
                            var x = f.util.getParameter(n, A[1]);
                            d.push(A[0]),
                            d.push("-"),
                            d.push("organic"),
                            d.push(x || "notset"),
                            t.set(K, d[3]),
                            b = !0;
                            break
                        }
                    }
                    b || (w[s]("zol.com.cn") > -1 ? (d.push("zol.com.cn"),
                    d.push("-"),
                    d.push("cpc"),
                    d.push("notset")) : (d.push(w),
                    d.push("-"),
                    d.push("referral"),
                    d.push("-")))
                }
            }
            var J = d[a] > 0 && (d[0] !== u || d[1] !== g || d[2] !== l) && "referral" !== d[2];
            return h || !h && J ? (t.set(W, d[0] || t.get(W)),
            t.set(H, d[1] || t.get(H)),
            t.set(G, d[2] || t.get(G)),
            t.set(K, d[3] || t.get(K)),
            wt(t)) : vt(t),
            J || p
        }(St), o = f.util.Vv("__jdv"), d = new At, u = St.get(S);
        return xt(St, d),
        f.util.Wv("__jda", [(t = St).get(y), t.get(j) || "-", t.get(U) || "-", t.get(X) || "-", t.get(z) || "-", t.get(F) || 1].join("."), u, St.get(x)),
        f.util.Wv("__jdb", [(e = St).get(y), e.get(B) || 1, e.get(j) + "|" + e.get(F) || 1, e.get(z) || e.get(A)].join("."), u, St.get(O)),
        f.util.Wv("__jdc", St.get(y), u),
        !i && o.length || f.util.Wv("__jdv", jt ? n(_t(St)) : _t(St), u, St.get(J)),
        d.a;
        

    }, Ot = function() {
        var t = new At;
        return xt(St, t),
        t.a
    }, Nt = function(t, e, r) {
        if (f.util.hasAXO() && f.util.isIE8OrIE9()) {
            var n = new XDomainRequest;
            n.onload = function() {}
            ,
            n.open("POST", t),
            n.send(e)
        } else
            window.navigator.sendBeacon ? window.navigator.sendBeacon(t, e) : (i = t,
            o = e,
            a = r,
            null != (s = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.AbortSignalActiveXObject("Microsoft.XMLHttpRequest")) ? (s.open("POST", i, !0),
            s.send(o),
            s.onreadystatechange = function() {
                if (1 == s.readyState || 2 == s.readyState || s.readyState,
                4 == s.readyState && 200 == s.status) {
                    var t = s.responseText;
                    a && a(t)
                }
            }
            ) : console.warn("Your browser does not support AJAX！"));
        var i, o, a, s
    }, kt = function(t) {
        var r = function(t) {
            var r = document.createElement("img");
            r.width = 1,
            r.height = 1,
            r.src = t;
            try {
                r.setAttribute("referrerpolicy", "no-referrer-when-downgrade")
            } catch (e) {}
            return r
        }(t);
        r.onload = r.onerror = function() {
            r.onload = null,
            r.onerror = null
        }
    };
    f.tracker = {
        sendOld: function(t, e, r, n) {},
        sendNew: function(t, e) {
            var i = Ot()
              , o = "https://mercury" + bt + "/log.gif?t=" + t + "&m=" + St.get(b) + "&pin=" + n(St.get(tt)) + "&uid=" + i.jduid + "&sid=" + i.jdsid;
            o += d || u ? "&ref=" + n(l) + "&cul=" + n(g) : "&ref=" + n(r.referrer) + "&cul=" + n(location.href),
            o += "&v=" + n(e) + "&rm=" + (new Date).getTime(),
            kt(o)
        },
        sendPost: function(t, e, i) {
            var o = Ot()
              , a = "https://mercury" + bt + "/log.gif"
              , s = "t=" + t + "&m=" + St.get(b) + "&pin=" + n(St.get(tt)) + "&uid=" + o.jduid + "&sid=" + o.jdsid;
            a += d || u ? "&ref=" + n(l) + "&cul=" + n(g) : "&ref=" + n(r.referrer) + "&cul=" + n(location.href),
            s += "&v=" + n(e) + "&rm=" + (new Date).getTime(),
            Nt(a, s, i)
        },
        sendToWarriors: function(t, e) {
            var i = Ot()
              , o = "https://mercury" + bt + "/log.gif?t=" + t + "&m=" + St.get(b) + "&pin=" + n(St.get(tt)) + "&uid=" + i.jduid + "&sid=" + i.jdsid;
            o += d || u ? "&ref=" + n(l) + "&cul=" + n(g) : "&ref=" + n(r.referrer) + "&cul=" + n(location.href),
            o += "&v=" + n(e) + "&rm=" + (new Date).getTime(),
            kt(o)
        },
        ngloader: function(t, e) {
            var r = Ot()
              , n = {
                je: r.jdje,
                sc: r.jdsc,
                sr: r.jdsr,
                ul: r.jdul,
                cs: r.jdcs,
                dt: r.jddt,
                hn: r.jdhn,
                fl: r.jdfl,
                os: r.jdos,
                br: r.jdbr,
                bv: r.jdbv,
                wb: r.jdwb,
                xb: r.jdxb,
                yb: r.jdyb,
                zb: r.jdzb,
                cb: r.jdcb,
                usc: r.jdusc,
                ucp: r.jducp,
                umd: r.jdumd,
                uct: r.jduct,
                ct: (new Date).getTime(),
                lt: r.jdlt,
                tad: r.jdtad
            };
            this.ngaloader(t, n, e)
        },
        ngaloader: function(t, e, r, n) {
            var i = "";
            for (var a in e)
                i += a + "=" + e[a] + "$";
            if (r)
                for (var a in r)
                    i += a + "=" + r[a] + "$";
            i += "pinid=" + St.get(et) + "$";
            try {
                var s = f.util.Vv("__jdv")[0] || "";
                jt && (s = o(s)),
                i += "jdv=" + s + "$"
            } catch (d) {}
            i += "dataver=0.1$",
            St.get(rt) && "magic.000001" != t && (i += "ext=" + St.get(rt) + "$"),
            St.get(nt) && (i += "account_type=" + St.get(nt) + "$"),
            St.get(it) && (i += "brc=" + St.get(it) + "$");
            var c = f.util.Vv("unpl");
            c.length > 0 && (i += "unpl=" + c[0] + "$"),
            h && (i += "cli=" + h.client + "$",
            i += "apv=" + h.clientVer + "$",
            i += "osv=" + h.platformVer + "$"),
            i = i.substring(0, i.length - 1),
            this.sendNew(t, i)
        },
        ngloaderJSON: function(t, e, r) {
            var n = Ot();
            e.pinid = St.get(et),
            e.je = n.jdje,
            e.sc = n.jdsc,
            e.sr = n.jdsr,
            e.ul = n.jdul,
            e.cs = n.jdcs,
            e.dt = n.jddt,
            e.hn = n.jdhn,
            e.fl = n.jdfl,
            e.os = n.jdos,
            e.br = n.jdbr,
            e.bv = n.jdbv,
            e.wb = n.jdwb,
            e.xb = n.jdxb,
            e.yb = n.jdyb,
            e.zb = n.jdzb,
            e.cb = n.jdcb,
            e.usc = n.jdusc,
            e.ucp = n.jducp,
            e.umd = n.jdumd,
            e.uct = n.jduct,
            e.ct = (new Date).getTime(),
            e.lt = n.jdlt,
            e.tad = n.jdtad;
            try {
                var i = f.util.Vv("__jdv")[0] || "";
                jt && (i = o(i)),
                e.jdv = i
            } catch (a) {}
            St.get(nt) && (e.account_type = St.get(nt)),
            e.dataver = "0.1",
            h && (e.cli = h.client,
            e.apv = h.clientVer,
            e.osv = h.platformVer),
            r && "toWarriors" == r ? this.sendToWarriors(t, JSON.stringify(e)) : r && "post" === r ? this.sendPost(t, JSON.stringify(e)) : this.sendNew(t, JSON.stringify(e))
        },
        bloading: function(t, n) {
            var i = Jt()
              , o = (new Date).getTime();
            d && (u ? g ? (l = g,
            g = yt(r.location.href)) : (g = yt(r.location.href),
            l = r.referrer) : g ? (l = g,
            g = r.location.href) : (g = r.location.href,
            l = r.referrer));
            var a = 0
              , s = "";
            try {
                var c = (new Date).getTime();
                s = getFingerprint(),
                a = (new Date).getTime() - c
            } catch (e) {}
            var f = {
                je: i.jdje,
                sc: i.jdsc,
                sr: i.jdsr,
                ul: i.jdul,
                cs: i.jdcs,
                dt: i.jddt,
                hn: i.jdhn,
                fl: i.jdfl,
                os: i.jdos,
                br: i.jdbr,
                bv: i.jdbv,
                wb: i.jdwb,
                xb: i.jdxb,
                yb: i.jdyb,
                zb: i.jdzb,
                cb: i.jdcb,
                usc: i.jdusc,
                ucp: i.jducp,
                umd: i.jdumd,
                uct: i.jduct,
                lt: i.jdlt,
                ct: o,
                tad: i.jdtad,
                mba_finger: s,
                fpftime: a
            };
            this.ngaloader("www.100000", f),
            i.jduid % 1e3 == 1 && this.ngloader("jsver.000000", {
                jsfile: "wl",
                jsver: "20141223"
            })
        },
        loading: function() {},
        aloading: function(t, e, r) {},
        aloadingJSON: function(t, e, r) {},
        isCanPrey: function() {
            var t = f.util.Vv("__jda")[0];
            if (t) {
                var e = t.split(".");
                if (e.length > 1) {
                    var r = e[1]
                      , n = e[1].length;
                    return "2" == (r = r.substr(n - 1, n))
                }
            }
            return !1
        },
        isDegrade: function(t, r, n) {
            var i = {
                "magic.000001": 20,
                "other.000000-pv_stock": 20,
                "other.000000-d-c": 0,
                "other.000000": 0
            }
              , o = new Date(2018,5,16).getTime()
              , a = new Date(2018,5,20).getTime()
              , s = (new Date).getTime();
            if (s < o || s > a)
                return !1;
            var c = i[t + "-" + r + "-" + n];
            return c === undefined && (c = i[t + "-" + r]),
            c === undefined && (c = i[t]),
            function(t) {
                try {
                    var r = St.get(j)
                      , n = r.length;
                    return (r = parseInt(r.substr(n - 2, n))) < t
                } catch (e) {}
                return !1
            }(c = c || 0)
        },
        getConfig: function() {
            return lt()
        },
        prot: function(t) {
            if (JA.util.isJson(t)) {
                var e = (t = JSON.parse(t)).pro_nm
                  , r = t.pro_sp || "-"
                  , n = t.pro_start;
                if (!e || !n && r) {
                    if (e && r) {
                        var i = JA.util.getSessionStorage(e) || {}
                          , o = (u = (new Date).getTime(),
                        d = i.process_task_id || JA.util.randomNum(10),
                        u - (i.process_start_timestamp || 0))
                          , a = i.process_current_step || "-"
                          , s = i.process_current_timestamp || u
                          , c = u - (i.process_current_timestamp || 0);
                        return t.pro_ts = i.process_start_timestamp || "-",
                        t.pro_tid = d,
                        t.pro_tc = o,
                        t.pro_lsp = a,
                        t.pro_lts = s,
                        t.pro_ltc = c,
                        i.process_current_timestamp = u,
                        i.process_current_step = r,
                        JA.util.setSessionStorage(e, i),
                        JSON.stringify(t)
                    }
                    return !1
                }
                var d = JA.util.randomNum(10)
                  , u = (new Date).getTime();
                return t.pro_ts = u,
                t.pro_tid = d,
                JA.util.setSessionStorage(e, {
                    process_start_timestamp: u,
                    process_task_id: d,
                    process_current_timestamp: u,
                    process_current_step: r
                }),
                JSON.stringify(t)
            }
            return !1
        }
    },
    window.JA = f,
    f.tracker.bloading("J", "A"),
    window.pageConfig && window.pageConfig.product && window.pageConfig.product.cat && f.tracker.ngloader("item.010001", {
        sku: window.pageConfig.product.skuid,
        cid1: window.pageConfig.product.cat[0],
        cid2: window.pageConfig.product.cat[1],
        cid3: window.pageConfig.product.cat[2],
        brand: window.pageConfig.product.brand
    }),
    d && (window.history ? (v = window.history,
    w = v.pushState,
    v.pushState = (_ = f,
    function(t) {
        return "function" == typeof v.onpushstate && v.onpushstate({
            state: t
        }, _),
        w.apply(v, arguments)
    }
    ),
    window.onpopstate = history.onpushstate = function(t, e) {
        setTimeout(function() {
            (e || window.JA).tracker.bloading("J", "A")
        }, 0)
    }
    ) : window.addEventListener("hashchange", function() {
        f.tracker.bloading("J", "A")
    }));
    try {
        lt().theup + "" == "true" && f.util.loadJs("https://storage.jd.com/jadfe/theup/jad.js")
    } catch (e) {}
}()

console.log(document.cookie);