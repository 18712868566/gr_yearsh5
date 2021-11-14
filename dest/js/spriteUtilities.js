var SpriteUtilities = function() {
    function e(e) {
        if (void 0 === (e = void 0 === e ? PIXI : e)) throw new Error("Please supply a reference to PIXI in the SpriteUtilities constructor before using spriteUtilities.js");
        this.renderer = "", e.particles.ParticleContainer && e.Sprite && (this.renderer = "pixi", 
        this.Container = e.Container, this.ParticleContainer = e.particles.ParticleContainer, 
        this.TextureCache = e.utils.TextureCache, this.Texture = e.Texture, this.Rectangle = e.Rectangle, 
        this.MovieClip = e.extras.AnimatedSprite, this.BitmapText = e.extras.BitmapText, 
        this.Sprite = e.Sprite, this.TilingSprite = e.extras.TilingSprite, this.Graphics = e.Graphics, 
        this.Text = e.Text, this.shakingSprites = []);
    }
    var t = e.prototype;
    return t.update = function() {
        if (0 < this.shakingSprites.length) for (var e = this.shakingSprites.length - 1; 0 <= e; e--) {
            var t = this.shakingSprites[e];
            t.updateShake && t.updateShake();
        }
    }, t.sprite = function(e, t, i, n, r, o) {
        var a;
        if (void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = !1), 
        "string" == typeof e) {
            if (!(a = this.TextureCache[e] || this.Texture.fromImage(e))) throw new Error(e + " cannot be found");
            a = n ? new this.TilingSprite(a, r, o) : new this.Sprite(a);
        } else e instanceof this.Texture ? a = n ? new this.TilingSprite(e, r, o) : new this.Sprite(e) : e instanceof Array && ("string" == typeof e[0] ? a = this.TextureCache[e[0]] ? this.MovieClip.fromFrames(e) : this.MovieClip.fromImages(e) : e[0] instanceof this.Texture && (a = new this.MovieClip(e)));
        if (a) return a.x = t, a.y = i, r && (a.width = r), o && (a.height = o), a instanceof this.MovieClip && this.addStatePlayer(a), 
        a;
    }, t.addStatePlayer = function(t) {
        var i = 0, n = 0, r = 0, o = 0, a = void 0;
        function l() {
            void 0 !== a && !0 === t.animating && (t.animating = !1, n = o = r = i = 0, clearInterval(a));
        }
        t.show = function(e) {
            l(), t.gotoAndStop(e);
        }, t.stopAnimation = function() {
            l(), t.gotoAndStop(t.currentFrame);
        }, t.playAnimation = function(e) {
            l(), o = e ? (r = e[0], e[1]) : (r = 0, t.totalFrames - 1), n = o - r, t.fps || (t.fps = 12), 
            e = 1e3 / t.fps, t.gotoAndStop(r), i = 1, t.animating || (a = setInterval(function() {
                i < n + 1 ? (t.gotoAndStop(t.currentFrame + 1), i += 1) : t.loop && (t.gotoAndStop(r), 
                i = 1);
            }.bind(this), e), t.animating = !0);
        };
    }, t.tilingSprite = function(e, t, i, n, r) {
        if (void 0 === t) throw new Error("Please define a width as your second argument for the tiling sprite");
        if (void 0 === i) throw new Error("Please define a height as your third argument for the tiling sprite");
        var o = this.sprite(e, n, r, !0, t, i);
        return Object.defineProperties(o, {
            tileX: {
                get: function() {
                    return o.tilePosition.x;
                },
                set: function(e) {
                    o.tilePosition.x = e;
                },
                enumerable: !0,
                configurable: !0
            },
            tileY: {
                get: function() {
                    return o.tilePosition.y;
                },
                set: function(e) {
                    o.tilePosition.y = e;
                },
                enumerable: !0,
                configurable: !0
            },
            tileScaleX: {
                get: function() {
                    return o.tileScale.x;
                },
                set: function(e) {
                    o.tileScale.x = e;
                },
                enumerable: !0,
                configurable: !0
            },
            tileScaleY: {
                get: function() {
                    return o.tileScale.y;
                },
                set: function(e) {
                    o.tileScale.y = e;
                },
                enumerable: !0,
                configurable: !0
            }
        }), o;
    }, t.filmstrip = function(e, t, i, n) {
        void 0 === n && (n = 0);
        for (var r = [], o = this.TextureCache[e].width / t, a = o * (this.TextureCache[e].height / i), l = 0; l < a; l++) {
            var s = l % o * t, u = Math.floor(l / o) * i;
            0 < n && (s += n + n * l % o, u += n + n * Math.floor(l / o)), r.push([ s, u ]);
        }
        return this.frames(e, r, t, i);
    }, t.frame = function(e, t, i, n, r) {
        var o;
        if ("string" == typeof e ? this.TextureCache[e] && (o = new this.Texture(this.TextureCache[e])) : e instanceof this.Texture && (o = new this.Texture(e)), 
        o) return r = new this.Rectangle(t, i, n, r), o.frame = r, o;
        throw new Error("Please load the " + e + " texture into the cache.");
    }, t.frames = function(e, t, i, n) {
        var r, o = this;
        if ("string" == typeof e ? this.TextureCache[e] && (r = new this.Texture(this.TextureCache[e])) : e instanceof this.Texture && (r = new this.Texture(e)), 
        r) return t.map(function(e) {
            var t = e[0], e = e[1], t = new o.Rectangle(t, e, i, n), e = new o.Texture(r);
            return e.frame = t, e;
        });
        throw new Error("Please load the " + e + " texture into the cache.");
    }, t.frameSeries = function(e, t, i, n) {
        void 0 === t && (t = 1), void 0 === i && (i = ""), void 0 === n && (n = "");
        for (var r = [], o = e = void 0 === e ? 0 : e; o < t + 1; o++) {
            var a = this.TextureCache["" + (i + o + n)];
            r.push(a);
        }
        return r;
    }, t.text = function(e, t, i, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = 0);
        i = new this.Text(e = void 0 === e ? "message" : e, {
            font: t = void 0 === t ? "16px sans" : t,
            fill: i = void 0 === i ? "red" : i
        });
        return i.x = n, i.y = r, i._content = e, Object.defineProperty(i, "content", {
            get: function() {
                return this._content;
            },
            set: function(e) {
                this._content = e, this.text = e;
            },
            enumerable: !0,
            configurable: !0
        }), i;
    }, t.bitmapText = function(e, t, i, n, r, o) {
        void 0 === r && (r = 0), void 0 === o && (o = 0);
        n = new this.BitmapText(e = void 0 === e ? "message" : e, {
            font: t,
            align: i,
            tint: n
        });
        return n.x = r, n.y = o, n._content = e, Object.defineProperty(n, "content", {
            get: function() {
                return this._content;
            },
            set: function(e) {
                this._content = e, this.text = e;
            },
            enumerable: !0,
            configurable: !0
        }), n;
    }, t.rectangle = function(e, t, i, n, r, o, a) {
        void 0 === e && (e = 32), void 0 === t && (t = 32), void 0 === i && (i = 16724736), 
        void 0 === n && (n = 13260), void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === a && (a = 0);
        var l = new this.Graphics();
        l._sprite = void 0, l._width = e, l._height = t, l._fillStyle = this.color(i), l._strokeStyle = this.color(n), 
        l._lineWidth = r;
        function s(e, t, i, n, r) {
            l.clear(), l.beginFill(i), 0 < r && l.lineStyle(r, n, 1), l.drawRect(0, 0, e, t), 
            l.endFill();
        }
        s(l._width, l._height, l._fillStyle, l._strokeStyle, l._lineWidth);
        r = l.generateTexture(), r = new this.Sprite(r);
        r.x = o, r.y = a;
        var u = this;
        return Object.defineProperties(r, {
            fillStyle: {
                get: function() {
                    return l._fillStyle;
                },
                set: function(e) {
                    l._fillStyle = u.color(e), s(l._width, l._height, l._fillStyle, l._strokeStyle, l._lineWidth, l._x, l._y);
                    e = l.generateTexture();
                    l._sprite.texture = e;
                },
                enumerable: !0,
                configurable: !0
            },
            strokeStyle: {
                get: function() {
                    return l._strokeStyle;
                },
                set: function(e) {
                    l._strokeStyle = u.color(e), s(l._width, l._height, l._fillStyle, l._strokeStyle, l._lineWidth, l._x, l._y);
                    e = l.generateTexture();
                    l._sprite.texture = e;
                },
                enumerable: !0,
                configurable: !0
            },
            lineWidth: {
                get: function() {
                    return l._lineWidth;
                },
                set: function(e) {
                    l._lineWidth = e, s(l._width, l._height, l._fillStyle, l._strokeStyle, l._lineWidth, l._x, l._y);
                    e = l.generateTexture();
                    l._sprite.texture = e;
                },
                enumerable: !0,
                configurable: !0
            }
        }), l._sprite = r;
    }, t.circle = function(e, t, i, n, r, o) {
        void 0 === e && (e = 32), void 0 === t && (t = 16724736), void 0 === i && (i = 13260), 
        void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === o && (o = 0);
        var a = new this.Graphics();
        a._diameter = e, a._fillStyle = this.color(t), a._strokeStyle = this.color(i), a._lineWidth = n;
        function l(e, t, i, n) {
            a.clear(), a.beginFill(t), 0 < n && a.lineStyle(n, i, 1), a.drawCircle(0, 0, e / 2), 
            a.endFill();
        }
        l(a._diameter, a._fillStyle, a._strokeStyle, a._lineWidth);
        n = a.generateTexture(), n = new this.Sprite(n);
        n.x = r, n.y = o;
        var s = this;
        return Object.defineProperties(n, {
            fillStyle: {
                get: function() {
                    return a._fillStyle;
                },
                set: function(e) {
                    a._fillStyle = s.color(e), l(a._diameter, a._fillStyle, a._strokeStyle, a._lineWidth);
                    e = a.generateTexture();
                    a._sprite.texture = e;
                },
                enumerable: !0,
                configurable: !0
            },
            strokeStyle: {
                get: function() {
                    return a._strokeStyle;
                },
                set: function(e) {
                    a._strokeStyle = s.color(e), l(a._diameter, a._fillStyle, a._strokeStyle, a._lineWidth);
                    e = a.generateTexture();
                    a._sprite.texture = e;
                },
                enumerable: !0,
                configurable: !0
            },
            diameter: {
                get: function() {
                    return a._diameter;
                },
                set: function(e) {
                    a._lineWidth = 10, l(a._diameter, a._fillStyle, a._strokeStyle, a._lineWidth);
                    var t = a.generateTexture();
                    a._sprite.texture = t;
                },
                enumerable: !0,
                configurable: !0
            },
            radius: {
                get: function() {
                    return a._diameter / 2;
                },
                set: function(e) {
                    l(2 * e, a._fillStyle, a._strokeStyle, a._lineWidth);
                    e = a.generateTexture();
                    a._sprite.texture = e;
                },
                enumerable: !0,
                configurable: !0
            }
        }), a._sprite = n;
    }, t.line = function(e, t, i, n, r, o) {
        void 0 === e && (e = 0), void 0 === t && (t = 1), void 0 === i && (i = 0), void 0 === n && (n = 0), 
        void 0 === r && (r = 32), void 0 === o && (o = 32);
        var a = new this.Graphics();
        a._strokeStyle = this.color(e), a._width = t, a._ax = i, a._ay = n, a._bx = r, a._by = o;
        function l(e, t, i, n, r, o) {
            a.clear(), a.lineStyle(t, e, 1), a.moveTo(i, n), a.lineTo(r, o);
        }
        l(a._strokeStyle, a._width, a._ax, a._ay, a._bx, a._by);
        var s = this;
        return Object.defineProperties(a, {
            ax: {
                get: function() {
                    return a._ax;
                },
                set: function(e) {
                    a._ax = e, l(a._strokeStyle, a._width, a._ax, a._ay, a._bx, a._by);
                },
                enumerable: !0,
                configurable: !0
            },
            ay: {
                get: function() {
                    return a._ay;
                },
                set: function(e) {
                    a._ay = e, l(a._strokeStyle, a._width, a._ax, a._ay, a._bx, a._by);
                },
                enumerable: !0,
                configurable: !0
            },
            bx: {
                get: function() {
                    return a._bx;
                },
                set: function(e) {
                    a._bx = e, l(a._strokeStyle, a._width, a._ax, a._ay, a._bx, a._by);
                },
                enumerable: !0,
                configurable: !0
            },
            by: {
                get: function() {
                    return a._by;
                },
                set: function(e) {
                    a._by = e, l(a._strokeStyle, a._width, a._ax, a._ay, a._bx, a._by);
                },
                enumerable: !0,
                configurable: !0
            },
            strokeStyle: {
                get: function() {
                    return a._strokeStyle;
                },
                set: function(e) {
                    a._strokeStyle = s.color(e), l(a._strokeStyle, a._width, a._ax, a._ay, a._bx, a._by);
                },
                enumerable: !0,
                configurable: !0
            },
            width: {
                get: function() {
                    return a._width;
                },
                set: function(e) {
                    a._width = e, l(a._strokeStyle, a._width, a._ax, a._ay, a._bx, a._by);
                },
                enumerable: !0,
                configurable: !0
            }
        }), a;
    }, t.grid = function(o, a, l, s, u, h, c, f, d) {
        void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === l && (l = 32), void 0 === s && (s = 32), 
        void 0 === u && (u = !1), void 0 === h && (h = 0), void 0 === c && (c = 0), void 0 === f && (f = void 0), 
        void 0 === d && (d = void 0);
        var _ = new this.Container();
        return function() {
            for (var e = o * a, t = 0; t < e; t++) {
                var i = t % o * l, n = Math.floor(t / o) * s, r = f();
                _.addChild(r), u ? (r.x = i + l / 2 - r.width / 2 + h, r.y = n + s / 2 - r.width / 2 + c) : (r.x = i + h, 
                r.y = n + c), d && d(r);
            }
        }(), _;
    }, t.shoot = function(e, t, i, n, r, o, a, l) {
        l = l();
        l.anchor.set(.5, .5), e.addChild(l), l.x = i, l.y = n;
        i = l.getGlobalPosition().x, n = l.getGlobalPosition().y;
        r.addChild(l), l.x = i, l.y = n, l.vx = Math.cos(t) * o, l.vy = Math.sin(t) * o, 
        a.push(l);
    }, t.grid = function(o, a, l, s, u, h, c, f, d) {
        void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === l && (l = 32), void 0 === s && (s = 32), 
        void 0 === u && (u = !1), void 0 === h && (h = 0), void 0 === c && (c = 0), void 0 === f && (f = void 0), 
        void 0 === d && (d = void 0);
        var _ = this.group();
        return function() {
            for (var e = o * a, t = 0; t < e; t++) {
                var i = t % o * l, n = Math.floor(t / o) * s, r = f();
                _.addChild(r), u ? (r.x = i + l / 2 - r.halfWidth + h, r.y = n + s / 2 - r.halfHeight + c) : (r.x = i + h, 
                r.y = n + c), d && d(r);
            }
        }(), _;
    }, t.shake = function(e, t, i) {
        void 0 === t && (t = 16), void 0 === i && (i = !1);
        var n = this, r = 1, o = 10, a = e.x, l = e.y, s = e.rotation, u = t / o, h = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
        };
        -1 === n.shakingSprites.indexOf(e) && (n.shakingSprites.push(e), e.updateShake = function() {
            (i ? function() {
                r < o && (e.rotation = s, t -= u, e.rotation = t * c, r += 1, c *= -1);
                o <= r && (e.rotation = s, n.shakingSprites.splice(n.shakingSprites.indexOf(e), 1));
            } : function() {
                r < o && (e.x = a, e.y = l, t -= u, e.x += h(-t, t), e.y += h(-t, t), r += 1);
                o <= r && (e.x = a, e.y = l, n.shakingSprites.splice(n.shakingSprites.indexOf(e), 1));
            })();
        });
        var c = 1;
    }, t._getCenter = function(e, t, i) {
        return void 0 !== e.anchor ? 0 !== e.anchor[i] ? 0 : t / 2 : t;
    }, t.group = function() {
        for (var t = new this.Container(), e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
        return i.forEach(function(e) {
            t.addChild(e);
        }), t;
    }, t.batch = function(e, t) {
        return new this.ParticleContainer(e = void 0 === e ? 15e3 : e, t = void 0 === t ? {
            rotation: !0,
            alpha: !0,
            scale: !0,
            uvs: !0
        } : t);
    }, t.remove = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        if (t[0] instanceof Array) {
            var n = t[0];
            if (0 < n.length) for (var r = n.length - 1; 0 <= r; r--) {
                var o = n[r];
                o.parent.removeChild(o), n.splice(n.indexOf(o), 1);
            }
        } else 1 < t.length ? t.forEach(function(e) {
            e.parent.removeChild(e);
        }) : t[0].parent.removeChild(t[0]);
    }, t.colorToRGBA = function(e) {
        var t = document.createElement("canvas");
        return t.height = 1, t.width = 1, (t = t.getContext("2d")).fillStyle = e, t.fillRect(0, 0, 1, 1), 
        t.getImageData(0, 0, 1, 1).data;
    }, t.byteToHex = function(e) {
        return ("0" + e.toString(16)).slice(-2);
    }, t.colorToHex = function(e) {
        var t = this, i = this.colorToRGBA(e);
        return "0x" + [ 0, 1, 2 ].map(function(e) {
            return t.byteToHex(i[e]);
        }).join("");
    }, t.color = function(e) {
        return isNaN(e) ? parseInt(this.colorToHex(e)) : e;
    }, e;
}();