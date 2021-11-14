!function(t) {
    var n, e, i = document, d = window, o = i.documentElement, l = document.createElement("style");
    function r() {
        var e = o.getBoundingClientRect().width;
        (t = t || 750) < e && (e = t), l.innerHTML = "html{font-size:" + 100 * e / 750 + "px;}";
    }
    o.firstElementChild ? o.firstElementChild.appendChild(l) : ((e = i.createElement("div")).appendChild(l), 
    i.write(e.innerHTML), e = null), r(), d.addEventListener("resize", function() {
        clearTimeout(n), n = setTimeout(r, 300);
    }, !1), d.addEventListener("pageshow", function(e) {
        e.persisted && (clearTimeout(n), n = setTimeout(r, 300));
    }, !1), "complete" === i.readyState ? i.body.style.fontSize = "16px" : i.addEventListener("DOMContentLoaded", function(e) {
        i.body.style.fontSize = "16px";
    }, !1);
}(750);