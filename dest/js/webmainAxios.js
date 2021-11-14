function asyncGeneratorStep(e, t, r, n, a, o, i) {
    try {
        var s = e[o](i), l = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(n, a);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, i);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, r, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var instance = axios.create({
    method: "post",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    transformRequest: [ function(e) {
        var t, r = "";
        for (t in e) r += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]) + "&";
        return r;
    } ]
});

instance.interceptors.request.use(function(e) {
    layer.load(2, {
        shade: [ .1, "#fff" ]
    });
    return e;
}, function(e) {
    return Promise.reject(e);
}), instance.interceptors.response.use(function(e) {
    return layer.closeAll(), e;
}, function(e) {
    return Promise.reject(e);
});

var Projet_Global_Parameter = {
    bOff: !0,
    bEmail: null,
    upData: null,
    aUrlData: [],
    user_from_uid: "",
    PrefixInteger: function(e, t) {
        return ("0000000000000000" + e).substr(-t);
    },
    getUrlData: function() {
        if (url = window.location.href, -1 != url.indexOf("?from_uid")) {
            for (var e = url.split("?")[1].split("&"), t = decodeURI(url), r = t.length, n = t.indexOf("?"), a = t.substr(n + 1, r).split("&"), e = new Array(), o = 0; o < a.length; o++) {
                var i = a[o].split("=")[1];
                e.push(i);
            }
            return e;
        }
        url;
    },
    resGetUrlData: function() {
        Projet_Global_Parameter.aUrlData = Projet_Global_Parameter.getUrlData(), Projet_Global_Parameter.aUrlData && Projet_Global_Parameter.aUrlData[0] && (null == typeof Projet_Global_Parameter.aUrlData[0] ? Projet_Global_Parameter.upData = "" : Projet_Global_Parameter.upData = Projet_Global_Parameter.aUrlData[0]);
    },
    tapCopy: function(e) {
        Projet_Global_Parameter.selectText(e), document.execCommand("copy");
    },
    selectText: function(e) {
        var t, r = document.getElementById(e);
        document.body.createTextRange ? ((t = document.body.createTextRange()).moveToElementText(r), 
        t.select()) : window.getSelection ? (e = window.getSelection(), (t = document.createRange()).selectNodeContents(r), 
        e.removeAllRanges(), e.addRange(t)) : layer.msg("请稍后再试");
    },
    isEmail: function(e) {
        return -1 != e.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    },
    getUserInfo: function() {
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, instance.post("/first-year/get-user-info", {
                        role_id: t
                    });

                  case 2:
                    r = e.sent, n = r.data.data, 0 == r.data.code && (sessionStorage.setItem("sess-isLogin", JSON.stringify(!0)), 
                    sessionStorage.setItem("sess-isShare", JSON.stringify(n.user_info.is_share)), sessionStorage.setItem("sess-left_points", JSON.stringify(n.user_info.left_points)));

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }()
};

$(function() {
    $(".btn_play").on("click", function(e) {
        e.preventDefault(), dialog.alertPopLogin();
    }), $(document).on("click", ".pop_login .btn_login", function(e) {
        e.preventDefault(), dialog.closeDiv(), $(".page1").hide(), gsap.fromTo(".page2", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1
        }), flower();
    }), $(document).on("click", ".page2_footer_btns .btn_goLott", function(e) {
        e.preventDefault(), layer.msg("请求接口 游戏内发奖励"), dialog.alertPopLottend();
    });
});