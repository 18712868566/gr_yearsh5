!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.$Snow = e();
}(this, function() {
    "use strict";
    function t(t) {
        this.wrap = document.createElement("div"), this.offset = 0, this.createSnowOffset = 0, 
        this.clientWidth = document.body.clientWidth, this.clientHeight = document.documentElement.clientHeight, 
        this.count = 0, this.isStop = !1, this.pause = !1, this.color = "#fff", this.opacity = 1, 
        this.randombase = 1500, this.num = 8, this.limit = 150, this.isOffset = !0, this.stay = !1, 
        this.stayTime = 1500, this.speed = 10, this.maxSize = 4, this.maxImgSize = 30, this.hideType = "scale", 
        this.hideDuration = 300, this.isOffsetOnTouch = !0, this.isPause = !0, this.shadow = !0, 
        this.shadowColor = "#fff", this.shadowBlur = 10, this.shadowSize = 3, this.zIndex = 99999, 
        this.reversionOffset = !1, this.css = {}, this.constrain = !1, this.randomColor = !1, 
        this.stayedcss = {}, t && (this.opacity = t.opacity || this.opacity, this.num = t.num || this.num, 
        this.limit = t.limit || this.limit, this.maxSize = t.maxSize || this.maxSize, this.maxImgSize = t.maxImgSize || this.maxImgSize, 
        this.hideType = t.hideType || this.hideType, this.shadowColor = t.shadowColor || this.shadowColor, 
        this.css = t.css || this.css, this.stayedcss = t.stayedcss || this.stayedcss, "number" == typeof t.speed && (this.speed = t.speed), 
        "number" == typeof t.randombase && (this.randombase = t.randombase), "number" == typeof t.stayTime && (this.stayTime = t.stayTime), 
        "number" == typeof t.hideDuration && (this.hideDuration = t.hideDuration), "number" == typeof t.shadowBlur && (this.shadowBlur = t.shadowBlur), 
        "number" == typeof t.shadowSize && (this.shadowSize = t.shadowSize), "number" == typeof t.zIndex && (this.zIndex = t.zIndex), 
        "boolean" == typeof t.offset && (this.isOffset = t.offset), "boolean" == typeof t.isOffsetOnTouch && (this.isOffsetOnTouch = t.isOffsetOnTouch), 
        "boolean" == typeof t.stay && (this.stay = t.stay), "boolean" == typeof t.isPause && (this.isPause = t.isPause), 
        "boolean" == typeof t.shadow && (this.shadow = t.shadow), "boolean" == typeof t.reversionOffset && (this.reversionOffset = t.reversionOffset), 
        "boolean" == typeof t.constrain && (this.constrain = t.constrain), "boolean" == typeof t.randomColor && (this.randomColor = t.randomColor), 
        "string" == typeof t.imgurl && (this.img = t.imgurl), "string" == typeof t.color && (this.color = t.color), 
        "string" == typeof t.cusShadowColor && (this.cusShadowColor = t.cusShadowColor), 
        "string" == typeof t.color && (this.color = t.color, this.shadowColor = this.color), 
        "[object Array]" === Object.prototype.toString.call(t.imgurl) && (this.imgLength = t.imgurl.length, 
        this.img = t.imgurl), "[object Array]" === Object.prototype.toString.call(t.color) && (this.colorLength = t.color.length, 
        this.color = t.color), t.beforeCreate && (this.beforeCreate = t.beforeCreate), t.created && (this.created = t.created), 
        t.beforeMoving && (this.beforeMoving = t.beforeMoving), t.afterMoving && (this.afterMoving = t.afterMoving), 
        t.stoped && (this.stoped = t.stoped), t.beforeDestroy && (this.beforeDestroy = t.beforeDestroy), 
        t.destoryed && (this.destoryed = t.destoryed)), this.wrap.style.height = 0, this.wrap.style.width = 0, 
        this.wrap.style.background = "transparent", document.querySelector(".page2").appendChild(this.wrap);
        var e = this;
        window.addEventListener("resize", function() {
            e.clientWidth = document.body.clientWidth, e.clientHeight = document.documentElement.clientHeight;
        }), this.isOffset && window.addEventListener("mousemove", function(t) {
            t = t.clientX / e.clientWidth;
            e.setOffset(t);
        }), this.isOffsetOnTouch && window.addEventListener("touchmove", function(t) {
            t = t.touches[0].pageX / e.clientWidth;
            e.setOffset(t);
        }), window.addEventListener("focus", function() {
            e.pause = !1;
        }), window.addEventListener("blur", function() {
            e.pause = !0;
        }), this.createSnow();
    }
    return t.prototype.setOffset = function(t) {
        this.offset = (t - .5) * (.35 < t && t < .65 ? 6 : 4), this.reversionOffset && (this.offset = -this.offset), 
        this.createSnowOffset = .3 < t && t < .7 ? 0 : 0 < t - .5 ? .5 * -this.clientWidth : .5 * this.clientWidth;
    }, t.prototype.createSnow = function() {
        var i = this, r = setInterval(function() {
            if (i.isStop && clearInterval(r), !i.pause || !i.isPause) for (var t = 0; t < parseInt(Math.random() * i.num) + 1; t++) {
                if (i.count > i.limit) return;
                i.beforeCreate && i.beforeCreate();
                var e, o = document.createElement(i.img ? "img" : "div"), s = parseInt(Math.random() * (i.img ? i.maxImgSize : i.maxSize)) + 6;
                for (e in i.img && ("string" == typeof i.img ? o.setAttribute("src", i.img) : o.setAttribute("src", i.img[parseInt(Math.random() * i.imgLength)])), 
                o.style.position = "fixed", o.style.top = -s - (i.shadow ? i.shadowSize : 0) + "px", 
                o.style.left = parseInt(Math.random() * i.clientWidth) + i.createSnowOffset + "px", 
                o.style.width = s + "px", i.constrain || (o.style.height = s + "px"), i.img || (o.style.borderRadius = "100%"), 
                o.style.zIndex = i.zIndex.toString(), o.style.opacity = i.opacity, i.img || (i.randomColor ? (o.style.backgroundColor = "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6), 
                i.shadowColor = o.style.backgroundColor) : "string" == typeof i.color ? o.style.backgroundColor = i.color : (o.style.backgroundColor = i.color[parseInt(Math.random() * i.colorLength)], 
                i.shadowColor = o.style.backgroundColor)), !i.img && i.shadow && (o.style.boxShadow = "0 0 " + i.shadowBlur + "px " + i.shadowSize + "px " + (i.cusShadowColor || i.shadowColor)), 
                i.css) i.css.hasOwnProperty(e) && (o.style[e] = i.css[e]);
                i.count++, i.wrap.appendChild(o), i.created && i.created(o), i.move(o, 1.5 * Math.random() - 1);
            }
        }, parseInt(300 * Math.random()) + i.randombase);
    }, t.prototype.move = function(o, s) {
        var i = this, r = setInterval(function() {
            if (i.isStop && clearInterval(r), !i.pause || !i.isPause) {
                i.beforeMoving && i.beforeMoving(o), o.style.top = parseFloat(o.style.top) + 1 + "px", 
                i.afterMoving && i.afterMoving(o), o.style.left = parseFloat(o.style.left) + i.offset + s + "px";
                var t = i.stay ? i.clientHeight - parseInt(o.style.height) : i.clientHeight;
                if (t -= i.shadow ? i.shadowSize : 0, parseInt(o.style.top) > t) {
                    if (i.stay) {
                        for (var e in clearInterval(r), i.stoped && i.stoped(o), i.stayedcss) i.stayedcss.hasOwnProperty(e) && (o.style[e] = i.stayedcss[e]);
                        return o.style.transition = "all " + i.hideDuration / 1e3 + "s", void setTimeout(function() {
                            o.style.animation = null, "scale" === i.hideType ? o.style.transform = "scale(0, 0)" : o.style.opacity = "0", 
                            setTimeout(function() {
                                i.beforeDestroy && i.beforeDestroy(o), i.wrap.removeChild(o), i.destoryed && i.destoryed(), 
                                i.count--;
                            }, i.hideDuration);
                        }, i.stayTime);
                    }
                    i.wrap.removeChild(o), i.count--, i.destoryed && i.destoryed(), clearInterval(r);
                }
            }
        }, parseInt(5 * Math.random()) + i.speed);
    }, t.prototype.stop = function() {
        this.isStop = !0, this.wrap.parentNode.removeChild(this.wrap);
    }, t;
});