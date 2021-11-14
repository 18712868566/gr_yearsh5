!function(t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).PIXI = t();
}(function() {
    return function i(n, o, s) {
        function a(r, t) {
            if (!o[r]) {
                if (!n[r]) {
                    var e = "function" == typeof require && require;
                    if (!t && e) return e(r, !0);
                    if (u) return u(r, !0);
                    e = new Error("Cannot find module '" + r + "'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                }
                e = o[r] = {
                    exports: {}
                };
                n[r][0].call(e.exports, function(t) {
                    var e = n[r][1][t];
                    return a(e || t);
                }, e, e.exports, i, n, o, s);
            }
            return o[r].exports;
        }
        for (var u = "function" == typeof require && require, t = 0; t < s.length; t++) a(s[t]);
        return a;
    }({
        1: [ function(t, e, r) {
            "use strict";
            function i(t) {
                var e = 32;
                return (t &= -t) && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 
                858993459 & t && (e -= 2), 1431655765 & t && --e, e;
            }
            r.INT_BITS = 32, r.INT_MAX = 2147483647, r.INT_MIN = -1 << 31, r.sign = function(t) {
                return (0 < t) - (t < 0);
            }, r.abs = function(t) {
                var e = t >> 31;
                return (t ^ e) - e;
            }, r.min = function(t, e) {
                return e ^ (t ^ e) & -(t < e);
            }, r.max = function(t, e) {
                return t ^ (t ^ e) & -(t < e);
            }, r.isPow2 = function(t) {
                return !(t & t - 1 || !t);
            }, r.log2 = function(t) {
                var e, r = (65535 < t) << 4;
                return r |= e = (255 < (t >>>= r)) << 3, r |= e = (15 < (t >>>= e)) << 2, (r |= e = (3 < (t >>>= e)) << 1) | (t >>>= e) >> 1;
            }, r.log10 = function(t) {
                return 1e9 <= t ? 9 : 1e8 <= t ? 8 : 1e7 <= t ? 7 : 1e6 <= t ? 6 : 1e5 <= t ? 5 : 1e4 <= t ? 4 : 1e3 <= t ? 3 : 100 <= t ? 2 : 10 <= t ? 1 : 0;
            }, r.popCount = function(t) {
                return 16843009 * ((t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24;
            }, r.countTrailingZeros = i, r.nextPow2 = function(t) {
                return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 
                (t |= t >>> 16) + 1;
            }, r.prevPow2 = function(t) {
                return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) - (t >>> 1);
            }, r.parity = function(t) {
                return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, 27030 >>> (t &= 15) & 1;
            };
            var n = new Array(256);
            !function(t) {
                for (var e = 0; e < 256; ++e) {
                    var r = e, i = e, n = 7;
                    for (r >>>= 1; r; r >>>= 1) i <<= 1, i |= 1 & r, --n;
                    t[e] = i << n & 255;
                }
            }(n), r.reverse = function(t) {
                return n[255 & t] << 24 | n[t >>> 8 & 255] << 16 | n[t >>> 16 & 255] << 8 | n[t >>> 24 & 255];
            }, r.interleave2 = function(t, e) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t &= 65535) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e &= 65535) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
            }, r.deinterleave2 = function(t, e) {
                return (t = 65535 & ((t = 16711935 & ((t = 252645135 & ((t = 858993459 & ((t = t >>> e & 1431655765) | t >>> 1)) | t >>> 2)) | t >>> 4)) | t >>> 16)) << 16 >> 16;
            }, r.interleave3 = function(t, e, r) {
                return t = 1227133513 & ((t = 3272356035 & ((t = 251719695 & ((t = 4278190335 & ((t &= 1023) | t << 16)) | t << 8)) | t << 4)) | t << 2), 
                (t |= (e = 1227133513 & ((e = 3272356035 & ((e = 251719695 & ((e = 4278190335 & ((e &= 1023) | e << 16)) | e << 8)) | e << 4)) | e << 2)) << 1) | (r = 1227133513 & ((r = 3272356035 & ((r = 251719695 & ((r = 4278190335 & ((r &= 1023) | r << 16)) | r << 8)) | r << 4)) | r << 2)) << 2;
            }, r.deinterleave3 = function(t, e) {
                return (t = 1023 & ((t = 4278190335 & ((t = 251719695 & ((t = 3272356035 & ((t = t >>> e & 1227133513) | t >>> 2)) | t >>> 4)) | t >>> 8)) | t >>> 16)) << 22 >> 22;
            }, r.nextCombination = function(t) {
                var e = t | t - 1;
                return 1 + e | (~e & -~e) - 1 >>> i(t) + 1;
            };
        }, {} ],
        2: [ function(t, e, r) {
            "use strict";
            function i(t, e, r) {
                r = r || 2;
                var i, n, o, s, a, u = e && e.length, h = u ? e[0] * r : t.length, l = v(t, 0, h, r, !0), c = [];
                if (!l) return c;
                if (u && (l = function(t, e, r, i) {
                    var n, o, s, a, u = [];
                    for (n = 0, o = e.length; n < o; n++) s = e[n] * i, a = n < o - 1 ? e[n + 1] * i : t.length, 
                    (a = v(t, s, a, i, !1)) === a.next && (a.steiner = !0), u.push(function(t) {
                        var e = t, r = t;
                        for (;e.x < r.x && (r = e), e = e.next, e !== t; );
                        return r;
                    }(a));
                    for (u.sort(_), n = 0; n < u.length; n++) !function(t, e) {
                        (e = function(t, e) {
                            var r, i = e, n = t.x, o = t.y, s = -1 / 0;
                            do {
                                if (o <= i.y && o >= i.next.y) {
                                    var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                                    if (a <= n && s < a) {
                                        if ((s = a) === n) {
                                            if (o === i.y) return i;
                                            if (o === i.next.y) return i.next;
                                        }
                                        r = i.x < i.next.x ? i : i.next;
                                    }
                                }
                            } while (i = i.next, i !== e);
                            if (!r) return null;
                            if (n === s) return r.prev;
                            var u, h = r, l = r.x, c = r.y, d = 1 / 0;
                            i = r.next;
                            for (;i !== h; ) n >= i.x && i.x >= l && m(o < c ? n : s, o, l, c, o < c ? s : n, o, i.x, i.y) && ((u = Math.abs(o - i.y) / (n - i.x)) < d || u === d && i.x > r.x) && x(i, t) && (r = i, 
                            d = u), i = i.next;
                            return r;
                        }(t, e)) && y(t = T(e, t), t.next);
                    }(u[n], r), r = y(r, r.next);
                    return r;
                }(t, e, l, r)), t.length > 80 * r) {
                    for (var d = i = t[0], f = n = t[1], p = r; p < h; p += r) (o = t[p]) < d && (d = o), 
                    (s = t[p + 1]) < f && (f = s), i < o && (i = o), n < s && (n = s);
                    a = Math.max(i - d, n - f);
                }
                return g(l, c, r, d, f, a), c;
            }
            function v(t, e, r, i, n) {
                var o, s;
                if (n === 0 < w(t, e, r, i)) for (o = e; o < r; o += i) s = a(o, t[o], t[o + 1], s); else for (o = r - i; e <= o; o -= i) s = a(o, t[o], t[o + 1], s);
                return s && l(s, s.next) && (d(s), s = s.next), s;
            }
            function y(t, e) {
                if (!t) return t;
                e = e || t;
                var r, i = t;
                do {
                    if (r = !1, i.steiner || !l(i, i.next) && 0 !== b(i.prev, i, i.next)) i = i.next; else {
                        if (d(i), (i = e = i.prev) === i.next) return null;
                        r = !0;
                    }
                } while (r || i !== e);
                return e;
            }
            function g(t, e, r, i, n, o, s) {
                if (t) {
                    !s && o && function(t, e, r, i) {
                        var n = t;
                        for (;null === n.z && (n.z = p(n.x, n.y, e, r, i)), n.prevZ = n.prev, n.nextZ = n.next, 
                        n = n.next, n !== t; );
                        n.prevZ.nextZ = null, n.prevZ = null, function(t) {
                            var e, r, i, n, o, s, a, u, h = 1;
                            do {
                                for (r = t, o = t = null, s = 0; r; ) {
                                    for (s++, i = r, e = a = 0; e < h && (a++, i = i.nextZ); e++);
                                    for (u = h; 0 < a || 0 < u && i; ) 0 !== a && (0 === u || !i || r.z <= i.z) ? (r = (n = r).nextZ, 
                                    a--) : (i = (n = i).nextZ, u--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                                    r = i;
                                }
                            } while (o.nextZ = null, h *= 2, 1 < s);
                        }(n);
                    }(t, i, n, o);
                    for (var a, u, h = t; t.prev !== t.next; ) if (a = t.prev, u = t.next, o ? function(t, e, r, i) {
                        var n = t.prev, o = t, s = t.next;
                        if (0 <= b(n, o, s)) return !1;
                        var a = (n.x < o.x ? n.x < s.x ? n : s : o.x < s.x ? o : s).x, u = (n.y < o.y ? n.y < s.y ? n : s : o.y < s.y ? o : s).y, h = (n.x > o.x ? n.x > s.x ? n : s : o.x > s.x ? o : s).x, l = (n.y > o.y ? n.y > s.y ? n : s : o.y > s.y ? o : s).y, c = p(a, u, e, r, i), d = p(h, l, e, r, i), f = t.nextZ;
                        for (;f && f.z <= d; ) {
                            if (f !== t.prev && f !== t.next && m(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && 0 <= b(f.prev, f, f.next)) return !1;
                            f = f.nextZ;
                        }
                        f = t.prevZ;
                        for (;f && f.z >= c; ) {
                            if (f !== t.prev && f !== t.next && m(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && 0 <= b(f.prev, f, f.next)) return !1;
                            f = f.prevZ;
                        }
                        return !0;
                    }(t, i, n, o) : function(t) {
                        var e = t.prev, r = t, i = t.next;
                        if (0 <= b(e, r, i)) return !1;
                        var n = t.next.next;
                        for (;n !== t.prev; ) {
                            if (m(e.x, e.y, r.x, r.y, i.x, i.y, n.x, n.y) && 0 <= b(n.prev, n, n.next)) return !1;
                            n = n.next;
                        }
                        return !0;
                    }(t)) e.push(a.i / r), e.push(t.i / r), e.push(u.i / r), d(t), t = u.next, h = u.next; else if ((t = u) === h) {
                        s ? 1 === s ? g(t = function(t, e, r) {
                            var i = t;
                            do {
                                var n = i.prev, o = i.next.next;
                            } while (!l(n, o) && c(n, i, i.next, o) && x(n, o) && x(o, n) && (e.push(n.i / r), 
                            e.push(i.i / r), e.push(o.i / r), d(i), d(i.next), i = t = o), i = i.next, i !== t);
                            return i;
                        }(t, e, r), e, r, i, n, o, 2) : 2 === s && function(t, e, r, i, n, o) {
                            var s = t;
                            do {
                                for (var a = s.next.next; a !== s.prev; ) {
                                    if (s.i !== a.i && function(t, e) {
                                        return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
                                            var r = t;
                                            do {
                                                if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && c(r, r.next, t, e)) return !0;
                                            } while (r = r.next, r !== t);
                                            return !1;
                                        }(t, e) && x(t, e) && x(e, t) && function(t, e) {
                                            var r = t, i = !1, n = (t.x + e.x) / 2, o = (t.y + e.y) / 2;
                                            for (;r.y > o != r.next.y > o && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i), 
                                            r = r.next, r !== t; );
                                            return i;
                                        }(t, e);
                                    }(s, a)) {
                                        var u = T(s, a);
                                        return s = y(s, s.next), u = y(u, u.next), g(s, e, r, i, n, o), g(u, e, r, i, n, o);
                                    }
                                    a = a.next;
                                }
                            } while (s = s.next, s !== t);
                        }(t, e, r, i, n, o) : g(y(t), e, r, i, n, o, 1);
                        break;
                    }
                }
            }
            function _(t, e) {
                return t.x - e.x;
            }
            function p(t, e, r, i, n) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) / n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) / n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
            }
            function m(t, e, r, i, n, o, s, a) {
                return 0 <= (n - s) * (e - a) - (t - s) * (o - a) && 0 <= (t - s) * (i - a) - (r - s) * (e - a) && 0 <= (r - s) * (o - a) - (n - s) * (i - a);
            }
            function b(t, e, r) {
                return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y);
            }
            function l(t, e) {
                return t.x === e.x && t.y === e.y;
            }
            function c(t, e, r, i) {
                return l(t, e) && l(r, i) || l(t, i) && l(r, e) || 0 < b(t, e, r) != 0 < b(t, e, i) && 0 < b(r, i, t) != 0 < b(r, i, e);
            }
            function x(t, e) {
                return b(t.prev, t, t.next) < 0 ? 0 <= b(t, e, t.next) && 0 <= b(t, t.prev, e) : b(t, e, t.prev) < 0 || b(t, t.next, e) < 0;
            }
            function T(t, e) {
                var r = new s(t.i, t.x, t.y), i = new s(e.i, e.x, e.y), n = t.next, o = e.prev;
                return (t.next = e).prev = t, (r.next = n).prev = r, (i.next = r).prev = i, (o.next = i).prev = o, 
                i;
            }
            function a(t, e, r, i) {
                r = new s(t, e, r);
                return i ? (r.next = i.next, (r.prev = i).next.prev = r, i.next = r) : (r.prev = r).next = r, 
                r;
            }
            function d(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
                t.nextZ && (t.nextZ.prevZ = t.prevZ);
            }
            function s(t, e, r) {
                this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, 
                this.prevZ = null, this.nextZ = null, this.steiner = !1;
            }
            function w(t, e, r, i) {
                for (var n = 0, o = e, s = r - i; o < r; o += i) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), 
                s = o;
                return n;
            }
            (e.exports = i).deviation = function(t, e, r, i) {
                var n = e && e.length, o = n ? e[0] * r : t.length, s = Math.abs(w(t, 0, o, r));
                if (n) for (var a = 0, u = e.length; a < u; a++) {
                    var h = e[a] * r, l = a < u - 1 ? e[a + 1] * r : t.length;
                    s -= Math.abs(w(t, h, l, r));
                }
                for (var c = 0, a = 0; a < i.length; a += 3) {
                    var d = i[a] * r, f = i[a + 1] * r, p = i[a + 2] * r;
                    c += Math.abs((t[d] - t[p]) * (t[1 + f] - t[1 + d]) - (t[d] - t[f]) * (t[1 + p] - t[1 + d]));
                }
                return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s);
            }, i.flatten = function(t) {
                for (var e = t[0][0].length, r = {
                    vertices: [],
                    holes: [],
                    dimensions: e
                }, i = 0, n = 0; n < t.length; n++) {
                    for (var o = 0; o < t[n].length; o++) for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);
                    0 < n && (i += t[n - 1].length, r.holes.push(i));
                }
                return r;
            };
        }, {} ],
        3: [ function(t, e, r) {
            "use strict";
            var i = Object.prototype.hasOwnProperty, f = "~";
            function u() {}
            function n(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1;
            }
            function o() {
                this._events = new u(), this._eventsCount = 0;
            }
            Object.create && (u.prototype = Object.create(null), new u().__proto__ || (f = !1)), 
            o.prototype.eventNames = function() {
                var t, e, r = [];
                if (0 === this._eventsCount) return r;
                for (e in t = this._events) i.call(t, e) && r.push(f ? e.slice(1) : e);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r;
            }, o.prototype.listeners = function(t, e) {
                var t = f ? f + t : t, r = this._events[t];
                if (e) return !!r;
                if (!r) return [];
                if (r.fn) return [ r.fn ];
                for (var i = 0, n = r.length, o = new Array(n); i < n; i++) o[i] = r[i].fn;
                return o;
            }, o.prototype.emit = function(t, e, r, i, n, o) {
                var s = f ? f + t : t;
                if (!this._events[s]) return !1;
                var a, u = this._events[s], h = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(t, u.fn, void 0, !0), h) {
                      case 1:
                        return u.fn.call(u.context), !0;

                      case 2:
                        return u.fn.call(u.context, e), !0;

                      case 3:
                        return u.fn.call(u.context, e, r), !0;

                      case 4:
                        return u.fn.call(u.context, e, r, i), !0;

                      case 5:
                        return u.fn.call(u.context, e, r, i, n), !0;

                      case 6:
                        return u.fn.call(u.context, e, r, i, n, o), !0;
                    }
                    for (d = 1, a = new Array(h - 1); d < h; d++) a[d - 1] = arguments[d];
                    u.fn.apply(u.context, a);
                } else for (var l, c = u.length, d = 0; d < c; d++) switch (u[d].once && this.removeListener(t, u[d].fn, void 0, !0), 
                h) {
                  case 1:
                    u[d].fn.call(u[d].context);
                    break;

                  case 2:
                    u[d].fn.call(u[d].context, e);
                    break;

                  case 3:
                    u[d].fn.call(u[d].context, e, r);
                    break;

                  case 4:
                    u[d].fn.call(u[d].context, e, r, i);
                    break;

                  default:
                    if (!a) for (l = 1, a = new Array(h - 1); l < h; l++) a[l - 1] = arguments[l];
                    u[d].fn.apply(u[d].context, a);
                }
                return !0;
            }, o.prototype.on = function(t, e, r) {
                r = new n(e, r || this), t = f ? f + t : t;
                return this._events[t] ? this._events[t].fn ? this._events[t] = [ this._events[t], r ] : this._events[t].push(r) : (this._events[t] = r, 
                this._eventsCount++), this;
            }, o.prototype.once = function(t, e, r) {
                r = new n(e, r || this, !0), t = f ? f + t : t;
                return this._events[t] ? this._events[t].fn ? this._events[t] = [ this._events[t], r ] : this._events[t].push(r) : (this._events[t] = r, 
                this._eventsCount++), this;
            }, o.prototype.removeListener = function(t, e, r, i) {
                t = f ? f + t : t;
                if (!this._events[t]) return this;
                if (!e) return 0 == --this._eventsCount ? this._events = new u() : delete this._events[t], 
                this;
                var n = this._events[t];
                if (n.fn) n.fn !== e || i && !n.once || r && n.context !== r || (0 == --this._eventsCount ? this._events = new u() : delete this._events[t]); else {
                    for (var o = 0, s = [], a = n.length; o < a; o++) (n[o].fn !== e || i && !n[o].once || r && n[o].context !== r) && s.push(n[o]);
                    s.length ? this._events[t] = 1 === s.length ? s[0] : s : 0 == --this._eventsCount ? this._events = new u() : delete this._events[t];
                }
                return this;
            }, o.prototype.removeAllListeners = function(t) {
                return t ? (t = f ? f + t : t, this._events[t] && (0 == --this._eventsCount ? this._events = new u() : delete this._events[t])) : (this._events = new u(), 
                this._eventsCount = 0), this;
            }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, 
            o.prototype.setMaxListeners = function() {
                return this;
            }, o.prefixed = f, o.EventEmitter = o, void 0 !== e && (e.exports = o);
        }, {} ],
        4: [ function(t, e, r) {
            function i(t, e) {
                return t.test(e);
            }
            function n(t) {
                var e = t || navigator.userAgent;
                if (void 0 !== (t = (e = void 0 !== (t = e.split("[FBAN"))[1] ? t[0] : e).split("Twitter"))[1] && (e = t[0]), 
                this.apple = {
                    phone: i(a, e),
                    ipod: i(u, e),
                    tablet: !i(a, e) && i(h, e),
                    device: i(a, e) || i(u, e) || i(h, e)
                }, this.amazon = {
                    phone: i(d, e),
                    tablet: !i(d, e) && i(f, e),
                    device: i(d, e) || i(f, e)
                }, this.android = {
                    phone: i(d, e) || i(l, e),
                    tablet: !i(d, e) && !i(l, e) && (i(f, e) || i(c, e)),
                    device: i(d, e) || i(f, e) || i(l, e) || i(c, e)
                }, this.windows = {
                    phone: i(p, e),
                    tablet: i(v, e),
                    device: i(p, e) || i(v, e)
                }, this.other = {
                    blackberry: i(y, e),
                    blackberry10: i(g, e),
                    opera: i(_, e),
                    firefox: i(b, e),
                    chrome: i(m, e),
                    device: i(y, e) || i(g, e) || i(_, e) || i(b, e) || i(m, e)
                }, this.seven_inch = i(x, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, 
                this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, 
                "undefined" == typeof window) return this;
            }
            function o() {
                var t = new n();
                return t.Class = n, t;
            }
            /**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */ var s, a, u, h, l, c, d, f, p, v, y, g, _, m, b, x;
            s = this, a = /iPhone/i, u = /iPod/i, h = /iPad/i, l = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, 
            c = /Android/i, d = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, f = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, 
            p = /Windows Phone/i, v = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, y = /BlackBerry/i, 
            g = /BB10/i, _ = /Opera Mini/i, m = /(CriOS|Chrome)(?=.*\bMobile\b)/i, b = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, 
            x = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), void 0 !== e && e.exports && "undefined" == typeof window ? e.exports = n : void 0 !== e && e.exports && "undefined" != typeof window ? e.exports = o() : s.isMobile = o();
        }, {} ],
        5: [ function(t, e, r) {
            /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ "use strict";
            var u = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign) return;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return;
                    for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t];
                    }).join("")) return;
                    var i = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        i[t] = t;
                    }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("") ? void 0 : 1;
                } catch (t) {
                    return;
                }
            }() ? Object.assign : function(t, e) {
                for (var r, i = function(t) {
                    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t);
                }(t), n = 1; n < arguments.length; n++) {
                    for (var o in r = Object(arguments[n])) h.call(r, o) && (i[o] = r[o]);
                    if (u) for (var s = u(r), a = 0; a < s.length; a++) l.call(r, s[a]) && (i[s[a]] = r[s[a]]);
                }
                return i;
            };
        }, {} ],
        6: [ function(t, e, r) {
            function n(t, e, r, i) {
                this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = i || t.STATIC_DRAW, 
                this.data = o, r && this.upload(r), this._updateID = 0;
            }
            var o = new ArrayBuffer(0);
            n.prototype.upload = function(t, e, r) {
                r || this.bind();
                r = this.gl;
                t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? r.bufferSubData(this.type, e, t) : r.bufferData(this.type, t, this.drawType), 
                this.data = t;
            }, n.prototype.bind = function() {
                this.gl.bindBuffer(this.type, this.buffer);
            }, n.createVertexBuffer = function(t, e, r) {
                return new n(t, t.ARRAY_BUFFER, e, r);
            }, n.createIndexBuffer = function(t, e, r) {
                return new n(t, t.ELEMENT_ARRAY_BUFFER, e, r);
            }, n.create = function(t, e, r, i) {
                return new n(t, e, r, i);
            }, n.prototype.destroy = function() {
                this.gl.deleteBuffer(this.buffer);
            }, e.exports = n;
        }, {} ],
        7: [ function(t, e, r) {
            function o(t, e, r) {
                this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, 
                this.width = e || 100, this.height = r || 100;
            }
            var s = t("./GLTexture");
            o.prototype.enableTexture = function(t) {
                var e = this.gl;
                this.texture = t || new s(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0);
            }, o.prototype.enableStencil = function() {
                var t;
                this.stencil || (t = this.gl, this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), 
                t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), 
                t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height));
            }, o.prototype.clear = function(t, e, r, i) {
                this.bind();
                var n = this.gl;
                n.clearColor(t, e, r, i), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
            }, o.prototype.bind = function() {
                var t = this.gl;
                t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer);
            }, o.prototype.unbind = function() {
                var t = this.gl;
                t.bindFramebuffer(t.FRAMEBUFFER, null);
            }, o.prototype.resize = function(t, e) {
                var r = this.gl;
                this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), 
                this.stencil && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencil), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t, e));
            }, o.prototype.destroy = function() {
                var t = this.gl;
                this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, 
                this.stencil = null, this.texture = null;
            }, o.createRGBA = function(t, e, r, i) {
                var n = s.fromData(t, null, e, r);
                n.enableNearestScaling(), n.enableWrapClamp();
                r = new o(t, e, r);
                return r.enableTexture(n), r.unbind(), r;
            }, o.createFloat32 = function(t, e, r, i) {
                i = new s.fromData(t, i, e, r);
                i.enableNearestScaling(), i.enableWrapClamp();
                r = new o(t, e, r);
                return r.enableTexture(i), r.unbind(), r;
            }, e.exports = o;
        }, {
            "./GLTexture": 9
        } ],
        8: [ function(t, e, r) {
            var o = t("./shader/compileProgram"), s = t("./shader/extractAttributes"), a = t("./shader/extractUniforms"), u = t("./shader/setPrecision"), h = t("./shader/generateUniformAccessObject"), t = function(t, e, r, i, n) {
                this.gl = t, i && (e = u(e, i), r = u(r, i)), this.program = o(t, e, r, n), this.attributes = s(t, this.program), 
                this.uniformData = a(t, this.program), this.uniforms = h(t, this.uniformData);
            };
            t.prototype.bind = function() {
                this.gl.useProgram(this.program);
            }, t.prototype.destroy = function() {
                this.attributes = null, this.uniformData = null, this.uniforms = null, this.gl.deleteProgram(this.program);
            }, e.exports = t;
        }, {
            "./shader/compileProgram": 14,
            "./shader/extractAttributes": 16,
            "./shader/extractUniforms": 17,
            "./shader/generateUniformAccessObject": 18,
            "./shader/setPrecision": 22
        } ],
        9: [ function(t, e, r) {
            function n(t, e, r, i, n) {
                this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, 
                this.width = e || -1, this.height = r || -1, this.format = i || t.RGBA, this.type = n || t.UNSIGNED_BYTE;
            }
            var o = !(n.prototype.upload = function(t) {
                this.bind();
                var e = this.gl;
                e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                var r = t.videoWidth || t.width, i = t.videoHeight || t.height;
                i !== this.height || r !== this.width ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this.format, this.type, t), 
                this.width = r, this.height = i;
            });
            n.prototype.uploadData = function(t, e, r) {
                this.bind();
                var i = this.gl;
                if (t instanceof Float32Array) {
                    if (!o) {
                        if (!i.getExtension("OES_texture_float")) throw new Error("floating point textures not available");
                        o = !0;
                    }
                    this.type = i.FLOAT;
                } else this.type = this.type || i.UNSIGNED_BYTE;
                i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e !== this.width || r !== this.height ? i.texImage2D(i.TEXTURE_2D, 0, this.format, e, r, 0, this.format, this.type, t || null) : i.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, e, r, this.format, this.type, t || null), 
                this.width = e, this.height = r;
            }, n.prototype.bind = function(t) {
                var e = this.gl;
                void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture);
            }, n.prototype.unbind = function() {
                var t = this.gl;
                t.bindTexture(t.TEXTURE_2D, null);
            }, n.prototype.minFilter = function(t) {
                var e = this.gl;
                this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST);
            }, n.prototype.magFilter = function(t) {
                var e = this.gl;
                this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST);
            }, n.prototype.enableMipmap = function() {
                var t = this.gl;
                this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D);
            }, n.prototype.enableLinearScaling = function() {
                this.minFilter(!0), this.magFilter(!0);
            }, n.prototype.enableNearestScaling = function() {
                this.minFilter(!1), this.magFilter(!1);
            }, n.prototype.enableWrapClamp = function() {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
            }, n.prototype.enableWrapRepeat = function() {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT);
            }, n.prototype.enableWrapMirrorRepeat = function() {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), 
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT);
            }, n.prototype.destroy = function() {
                this.gl.deleteTexture(this.texture);
            }, n.fromSource = function(t, e, r) {
                t = new n(t);
                return t.premultiplyAlpha = r || !1, t.upload(e), t;
            }, n.fromData = function(t, e, r, i) {
                t = new n(t);
                return t.uploadData(e, r, i), t;
            }, e.exports = n;
        }, {} ],
        10: [ function(t, e, r) {
            var n = t("./setVertexAttribArrays");
            function i(t, e) {
                this.nativeVaoExtension = null, i.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), 
                this.nativeState = e, this.nativeVaoExtension && (this.nativeVao = this.nativeVaoExtension.createVertexArrayOES(), 
                e = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.nativeState = {
                    tempAttribState: new Array(e),
                    attribState: new Array(e)
                }), this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1;
            }
            (e.exports = i.prototype.constructor = i).FORCE_NATIVE = !1, i.prototype.bind = function() {
                return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), 
                this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this;
            }, i.prototype.unbind = function() {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this;
            }, i.prototype.activate = function() {
                for (var t = this.gl, e = null, r = 0; r < this.attributes.length; r++) {
                    var i = this.attributes[r];
                    e !== i.buffer && (i.buffer.bind(), e = i.buffer), t.vertexAttribPointer(i.attribute.location, i.attribute.size, i.type || t.FLOAT, i.normalized || !1, i.stride || 0, i.start || 0);
                }
                return n(t, this.attributes, this.nativeState), this.indexBuffer && this.indexBuffer.bind(), 
                this;
            }, i.prototype.addAttribute = function(t, e, r, i, n, o) {
                return this.attributes.push({
                    buffer: t,
                    attribute: e,
                    location: e.location,
                    type: r || this.gl.FLOAT,
                    normalized: i || !1,
                    stride: n || 0,
                    start: o || 0
                }), this.dirty = !0, this;
            }, i.prototype.addIndex = function(t) {
                return this.indexBuffer = t, this.dirty = !0, this;
            }, i.prototype.clear = function() {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), 
                this.attributes.length = 0, this.indexBuffer = null, this;
            }, i.prototype.draw = function(t, e, r) {
                var i = this.gl;
                return this.indexBuffer ? i.drawElements(t, e || this.indexBuffer.data.length, i.UNSIGNED_SHORT, 2 * (r || 0)) : i.drawArrays(t, r, e || this.getSize()), 
                this;
            }, i.prototype.destroy = function() {
                this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, 
                this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), 
                this.nativeVaoExtension = null, this.nativeVao = null;
            }, i.prototype.getSize = function() {
                var t = this.attributes[0];
                return t.buffer.data.length / (t.stride / 4 || t.attribute.size);
            };
        }, {
            "./setVertexAttribArrays": 13
        } ],
        11: [ function(t, e, r) {
            e.exports = function(t, e) {
                e = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
                if (!e) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                return e;
            };
        }, {} ],
        12: [ function(t, e, r) {
            t = {
                createContext: t("./createContext"),
                setVertexAttribArrays: t("./setVertexAttribArrays"),
                GLBuffer: t("./GLBuffer"),
                GLFramebuffer: t("./GLFramebuffer"),
                GLShader: t("./GLShader"),
                GLTexture: t("./GLTexture"),
                VertexArrayObject: t("./VertexArrayObject"),
                shader: t("./shader")
            };
            void 0 !== e && e.exports && (e.exports = t), "undefined" != typeof window && (window.PIXI = window.PIXI || {}, 
            window.PIXI.glCore = t);
        }, {
            "./GLBuffer": 6,
            "./GLFramebuffer": 7,
            "./GLShader": 8,
            "./GLTexture": 9,
            "./VertexArrayObject": 10,
            "./createContext": 11,
            "./setVertexAttribArrays": 13,
            "./shader": 19
        } ],
        13: [ function(t, e, r) {
            e.exports = function(t, e, r) {
                if (r) {
                    for (var i = r.tempAttribState, n = r.attribState, o = 0; o < i.length; o++) i[o] = !1;
                    for (o = 0; o < e.length; o++) i[e[o].attribute.location] = !0;
                    for (o = 0; o < n.length; o++) n[o] !== i[o] && (n[o] = i[o], r.attribState[o] ? t.enableVertexAttribArray(o) : t.disableVertexAttribArray(o));
                } else for (o = 0; o < e.length; o++) {
                    var s = e[o];
                    t.enableVertexAttribArray(s.attribute.location);
                }
            };
        }, {} ],
        14: [ function(t, e, r) {
            function s(t, e, r) {
                return e = t.createShader(e), t.shaderSource(e, r), t.compileShader(e), t.getShaderParameter(e, t.COMPILE_STATUS) ? e : null;
            }
            e.exports = function(t, e, r, i) {
                var e = s(t, t.VERTEX_SHADER, e), r = s(t, t.FRAGMENT_SHADER, r), n = t.createProgram();
                if (t.attachShader(n, e), t.attachShader(n, r), i) for (var o in i) t.bindAttribLocation(n, i[o], o);
                return t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || (t.getProgramInfoLog(n), 
                t.deleteProgram(n), n = null), t.deleteShader(e), t.deleteShader(r), n;
            };
        }, {} ],
        15: [ function(t, e, r) {
            function i(t) {
                for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
                return e;
            }
            e.exports = function(t, e) {
                switch (t) {
                  case "float":
                    return 0;

                  case "vec2":
                    return new Float32Array(2 * e);

                  case "vec3":
                    return new Float32Array(3 * e);

                  case "vec4":
                    return new Float32Array(4 * e);

                  case "int":
                  case "sampler2D":
                    return 0;

                  case "ivec2":
                    return new Int32Array(2 * e);

                  case "ivec3":
                    return new Int32Array(3 * e);

                  case "ivec4":
                    return new Int32Array(4 * e);

                  case "bool":
                    return !1;

                  case "bvec2":
                    return i(2 * e);

                  case "bvec3":
                    return i(3 * e);

                  case "bvec4":
                    return i(4 * e);

                  case "mat2":
                    return new Float32Array([ 1, 0, 0, 1 ]);

                  case "mat3":
                    return new Float32Array([ 1, 0, 0, 0, 1, 0, 0, 0, 1 ]);

                  case "mat4":
                    return new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
                }
            };
        }, {} ],
        16: [ function(t, e, r) {
            function a(t, e, r, i) {
                gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, r || 0, i || 0);
            }
            var u = t("./mapType"), h = t("./mapSize");
            e.exports = function(t, e) {
                for (var r = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), n = 0; n < i; n++) {
                    var o = t.getActiveAttrib(e, n), s = u(t, o.type);
                    r[o.name] = {
                        type: s,
                        size: h(s),
                        location: t.getAttribLocation(e, o.name),
                        pointer: a
                    };
                }
                return r;
            };
        }, {
            "./mapSize": 20,
            "./mapType": 21
        } ],
        17: [ function(t, e, r) {
            var u = t("./mapType"), h = t("./defaultValue");
            e.exports = function(t, e) {
                for (var r = {}, i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), n = 0; n < i; n++) {
                    var o = t.getActiveUniform(e, n), s = o.name.replace(/\[.*?\]/, ""), a = u(t, o.type);
                    r[s] = {
                        type: a,
                        size: o.size,
                        location: t.getUniformLocation(e, s),
                        value: h(a, o.size)
                    };
                }
                return r;
            };
        }, {
            "./defaultValue": 15,
            "./mapType": 21
        } ],
        18: [ function(t, e, r) {
            function u(t) {
                return t = i.replace("%%", t), new Function(t);
            }
            function h(t, e) {
                return t = n.replace(/%%/g, t), (e = (1 === e.size ? o : s)[e.type]) && (t += "\nthis.gl." + e + ";"), 
                new Function("value", t);
            }
            function l(t, e) {
                for (var r = e, i = 0; i < t.length - 1; i++) {
                    var n = r[t[i]] || {
                        data: {}
                    };
                    r[t[i]] = n, r = n;
                }
                return r;
            }
            var i = [ "return this.data.%%.value;" ].join("\n"), n = [ "this.data.%%.value = value;", "var location = this.data.%%.location;" ].join("\n"), o = {
                float: "uniform1f(location, value)",
                vec2: "uniform2f(location, value[0], value[1])",
                vec3: "uniform3f(location, value[0], value[1], value[2])",
                vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
                int: "uniform1i(location, value)",
                ivec2: "uniform2i(location, value[0], value[1])",
                ivec3: "uniform3i(location, value[0], value[1], value[2])",
                ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                bool: "uniform1i(location, value)",
                bvec2: "uniform2i(location, value[0], value[1])",
                bvec3: "uniform3i(location, value[0], value[1], value[2])",
                bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                mat2: "uniformMatrix2fv(location, false, value)",
                mat3: "uniformMatrix3fv(location, false, value)",
                mat4: "uniformMatrix4fv(location, false, value)",
                sampler2D: "uniform1i(location, value)"
            }, s = {
                float: "uniform1fv(location, value)",
                vec2: "uniform2fv(location, value)",
                vec3: "uniform3fv(location, value)",
                vec4: "uniform4fv(location, value)",
                int: "uniform1iv(location, value)",
                ivec2: "uniform2iv(location, value)",
                ivec3: "uniform3iv(location, value)",
                ivec4: "uniform4iv(location, value)",
                bool: "uniform1iv(location, value)",
                bvec2: "uniform2iv(location, value)",
                bvec3: "uniform3iv(location, value)",
                bvec4: "uniform4iv(location, value)",
                sampler2D: "uniform1iv(location, value)"
            };
            e.exports = function(t, e) {
                var r = {
                    data: {}
                };
                r.gl = t;
                for (var i = Object.keys(e), n = 0; n < i.length; n++) {
                    var o = i[n], s = o.split("."), a = s[s.length - 1], s = l(s, r), o = e[o];
                    s.data[a] = o, s.gl = t, Object.defineProperty(s, a, {
                        get: u(a),
                        set: h(a, o)
                    });
                }
                return r;
            };
        }, {} ],
        19: [ function(t, e, r) {
            e.exports = {
                compileProgram: t("./compileProgram"),
                defaultValue: t("./defaultValue"),
                extractAttributes: t("./extractAttributes"),
                extractUniforms: t("./extractUniforms"),
                generateUniformAccessObject: t("./generateUniformAccessObject"),
                setPrecision: t("./setPrecision"),
                mapSize: t("./mapSize"),
                mapType: t("./mapType")
            };
        }, {
            "./compileProgram": 14,
            "./defaultValue": 15,
            "./extractAttributes": 16,
            "./extractUniforms": 17,
            "./generateUniformAccessObject": 18,
            "./mapSize": 20,
            "./mapType": 21,
            "./setPrecision": 22
        } ],
        20: [ function(t, e, r) {
            var i = {
                float: 1,
                vec2: 2,
                vec3: 3,
                vec4: 4,
                int: 1,
                ivec2: 2,
                ivec3: 3,
                ivec4: 4,
                bool: 1,
                bvec2: 2,
                bvec3: 3,
                bvec4: 4,
                mat2: 4,
                mat3: 9,
                mat4: 16,
                sampler2D: 1
            };
            e.exports = function(t) {
                return i[t];
            };
        }, {} ],
        21: [ function(t, e, r) {
            var o = null, s = {
                FLOAT: "float",
                FLOAT_VEC2: "vec2",
                FLOAT_VEC3: "vec3",
                FLOAT_VEC4: "vec4",
                INT: "int",
                INT_VEC2: "ivec2",
                INT_VEC3: "ivec3",
                INT_VEC4: "ivec4",
                BOOL: "bool",
                BOOL_VEC2: "bvec2",
                BOOL_VEC3: "bvec3",
                BOOL_VEC4: "bvec4",
                FLOAT_MAT2: "mat2",
                FLOAT_MAT3: "mat3",
                FLOAT_MAT4: "mat4",
                SAMPLER_2D: "sampler2D"
            };
            e.exports = function(t, e) {
                if (!o) {
                    var r = Object.keys(s);
                    o = {};
                    for (var i = 0; i < r.length; ++i) {
                        var n = r[i];
                        o[t[n]] = s[n];
                    }
                }
                return o[e];
            };
        }, {} ],
        22: [ function(t, e, r) {
            e.exports = function(t, e) {
                return "precision" !== t.substring(0, 9) ? "precision " + e + " float;\n" + t : t;
            };
        }, {} ],
        23: [ function(t, e, h) {
            !function(n) {
                function o(t, e) {
                    for (var r = 0, i = t.length - 1; 0 <= i; i--) {
                        var n = t[i];
                        "." === n ? t.splice(i, 1) : ".." === n ? (t.splice(i, 1), r++) : r && (t.splice(i, 1), 
                        r--);
                    }
                    if (e) for (;r--; ) t.unshift("..");
                    return t;
                }
                function r(t) {
                    return e.exec(t).slice(1);
                }
                var e = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                function s(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var r = [], i = 0; i < t.length; i++) e(t[i], i, t) && r.push(t[i]);
                    return r;
                }
                h.resolve = function() {
                    for (var t = "", e = !1, r = arguments.length - 1; -1 <= r && !e; r--) {
                        var i = 0 <= r ? arguments[r] : n.cwd();
                        if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                        i && (t = i + "/" + t, e = "/" === i.charAt(0));
                    }
                    return (e ? "/" : "") + (t = o(s(t.split("/"), function(t) {
                        return !!t;
                    }), !e).join("/")) || ".";
                }, h.normalize = function(t) {
                    var e = h.isAbsolute(t), r = "/" === i(t, -1);
                    return (t = !(t = o(s(t.split("/"), function(t) {
                        return !!t;
                    }), !e).join("/")) && !e ? "." : t) && r && (t += "/"), (e ? "/" : "") + t;
                }, h.isAbsolute = function(t) {
                    return "/" === t.charAt(0);
                }, h.join = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return h.normalize(s(t, function(t, e) {
                        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t;
                    }).join("/"));
                }, h.relative = function(t, e) {
                    function r(t) {
                        for (var e = 0; e < t.length && "" === t[e]; e++);
                        for (var r = t.length - 1; 0 <= r && "" === t[r]; r--);
                        return r < e ? [] : t.slice(e, r - e + 1);
                    }
                    t = h.resolve(t).substr(1), e = h.resolve(e).substr(1);
                    for (var i = r(t.split("/")), n = r(e.split("/")), o = Math.min(i.length, n.length), s = o, a = 0; a < o; a++) if (i[a] !== n[a]) {
                        s = a;
                        break;
                    }
                    for (var u = [], a = s; a < i.length; a++) u.push("..");
                    return (u = u.concat(n.slice(s))).join("/");
                }, h.sep = "/", h.delimiter = ":", h.dirname = function(t) {
                    var e = r(t), t = e[0], e = e[1];
                    return t || e ? t + (e = e && e.substr(0, e.length - 1)) : ".";
                }, h.basename = function(t, e) {
                    t = r(t)[2];
                    return t = e && t.substr(-1 * e.length) === e ? t.substr(0, t.length - e.length) : t;
                }, h.extname = function(t) {
                    return r(t)[3];
                };
                var i = "b" === "ab".substr(-1) ? function(t, e, r) {
                    return t.substr(e, r);
                } : function(t, e, r) {
                    return e < 0 && (e = t.length + e), t.substr(e, r);
                };
            }.call(this, t("_process"));
        }, {
            _process: 24
        } ],
        24: [ function(t, e, r) {
            var i, n, e = e.exports = {};
            function o() {
                throw new Error("setTimeout has not been defined");
            }
            function s() {
                throw new Error("clearTimeout has not been defined");
            }
            function a(e) {
                if (i === setTimeout) return setTimeout(e, 0);
                if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
                try {
                    return i(e, 0);
                } catch (t) {
                    try {
                        return i.call(null, e, 0);
                    } catch (t) {
                        return i.call(this, e, 0);
                    }
                }
            }
            !function() {
                try {
                    i = "function" == typeof setTimeout ? setTimeout : o;
                } catch (t) {
                    i = o;
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (t) {
                    n = s;
                }
            }();
            var u, h = [], l = !1, c = -1;
            function d() {
                l && u && (l = !1, u.length ? h = u.concat(h) : c = -1, h.length && f());
            }
            function f() {
                if (!l) {
                    var t = a(d);
                    l = !0;
                    for (var e = h.length; e; ) {
                        for (u = h, h = []; ++c < e; ) u && u[c].run();
                        c = -1, e = h.length;
                    }
                    u = null, l = !1, function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e);
                        } catch (t) {
                            try {
                                return n.call(null, e);
                            } catch (t) {
                                return n.call(this, e);
                            }
                        }
                    }(t);
                }
            }
            function p(t, e) {
                this.fun = t, this.array = e;
            }
            function v() {}
            e.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                h.push(new p(t, e)), 1 !== h.length || l || a(f);
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", 
            e.versions = {}, e.on = v, e.addListener = v, e.once = v, e.off = v, e.removeListener = v, 
            e.removeAllListeners = v, e.emit = v, e.prependListener = v, e.prependOnceListener = v, 
            e.listeners = function(t) {
                return [];
            }, e.binding = function(t) {
                throw new Error("process.binding is not supported");
            }, e.cwd = function() {
                return "/";
            }, e.chdir = function(t) {
                throw new Error("process.chdir is not supported");
            }, e.umask = function() {
                return 0;
            };
        }, {} ],
        25: [ function(t, P, C) {
            !function(M) {
                !function(t) {
                    var e = "object" == typeof C && C && !C.nodeType && C, r = "object" == typeof P && P && !P.nodeType && P, i = "object" == typeof M && M;
                    i.global !== i && i.window !== i && i.self !== i || (t = i);
                    var n, o, y = 2147483647, g = 36, _ = 26, s = 38, a = 700, u = /^xn--/, h = /[^\x20-\x7E]/, l = /[\x2E\u3002\uFF0E\uFF61]/g, c = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, d = g - 1, m = Math.floor, b = String.fromCharCode;
                    function x(t) {
                        throw new RangeError(c[t]);
                    }
                    function f(t, e) {
                        for (var r = t.length, i = []; r--; ) i[r] = e(t[r]);
                        return i;
                    }
                    function p(t, e) {
                        var r = t.split("@"), i = "";
                        return 1 < r.length && (i = r[0] + "@", t = r[1]), i + f((t = t.replace(l, ".")).split("."), e).join(".");
                    }
                    function T(t) {
                        for (var e, r, i = [], n = 0, o = t.length; n < o; ) 55296 <= (e = t.charCodeAt(n++)) && e <= 56319 && n < o ? 56320 == (64512 & (r = t.charCodeAt(n++))) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), 
                        n--) : i.push(e);
                        return i;
                    }
                    function v(t) {
                        return f(t, function(t) {
                            var e = "";
                            return 65535 < t && (e += b((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), 
                            e += b(t);
                        }).join("");
                    }
                    function w(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                    }
                    function E(t, e, r) {
                        var i = 0;
                        for (t = r ? m(t / a) : t >> 1, t += m(t / e); d * _ >> 1 < t; i += g) t = m(t / d);
                        return m(i + (d + 1) * t / (t + s));
                    }
                    function S(t) {
                        var e, r, i, n, o, s, a, u = [], h = t.length, l = 0, c = 128, d = 72, f = t.lastIndexOf("-");
                        for (f < 0 && (f = 0), r = 0; r < f; ++r) 128 <= t.charCodeAt(r) && x("not-basic"), 
                        u.push(t.charCodeAt(r));
                        for (i = 0 < f ? f + 1 : 0; i < h; ) {
                            for (n = l, o = 1, s = g; h <= i && x("invalid-input"), a = t.charCodeAt(i++), (g <= (a = a - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : g) || a > m((y - l) / o)) && x("overflow"), 
                            l += a * o, !(a < (a = s <= d ? 1 : d + _ <= s ? _ : s - d)); s += g) o > m(y / (a = g - a)) && x("overflow"), 
                            o *= a;
                            d = E(l - n, e = u.length + 1, 0 == n), m(l / e) > y - c && x("overflow"), c += m(l / e), 
                            l %= e, u.splice(l++, 0, c);
                        }
                        return v(u);
                    }
                    function O(t) {
                        for (var e, r, i, n, o, s, a, u, h, l, c = [], d = (t = T(t)).length, f = 128, p = 72, v = e = 0; v < d; ++v) (a = t[v]) < 128 && c.push(b(a));
                        for (r = i = c.length, i && c.push("-"); r < d; ) {
                            for (n = y, v = 0; v < d; ++v) f <= (a = t[v]) && a < n && (n = a);
                            for (n - f > m((y - e) / (u = r + 1)) && x("overflow"), e += (n - f) * u, f = n, 
                            v = 0; v < d; ++v) if ((a = t[v]) < f && ++e > y && x("overflow"), a == f) {
                                for (o = e, s = g; !(o < (h = s <= p ? 1 : p + _ <= s ? _ : s - p)); s += g) c.push(b(w(h + (l = o - h) % (h = g - h), 0))), 
                                o = m(l / h);
                                c.push(b(w(o, 0))), p = E(e, u, r == i), e = 0, ++r;
                            }
                            ++e, ++f;
                        }
                        return c.join("");
                    }
                    if (n = {
                        version: "1.4.1",
                        ucs2: {
                            decode: T,
                            encode: v
                        },
                        decode: S,
                        encode: O,
                        toASCII: function(t) {
                            return p(t, function(t) {
                                return h.test(t) ? "xn--" + O(t) : t;
                            });
                        },
                        toUnicode: function(t) {
                            return p(t, function(t) {
                                return u.test(t) ? S(t.slice(4).toLowerCase()) : t;
                            });
                        }
                    }, 0, e && r) if (P.exports == e) r.exports = n; else for (o in n) n.hasOwnProperty(o) && (e[o] = n[o]); else t.punycode = n;
                }(this);
            }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {} ],
        26: [ function(t, e, r) {
            "use strict";
            e.exports = function(t, e, r, i) {
                r = r || "=";
                var n = {};
                if ("string" != typeof t || 0 === t.length) return n;
                var o = /\+/g;
                t = t.split(e = e || "&");
                e = 1e3;
                i && "number" == typeof i.maxKeys && (e = i.maxKeys);
                var s = t.length;
                0 < e && e < s && (s = e);
                for (var a = 0; a < s; ++a) {
                    var u, h = t[a].replace(o, "%20"), l = h.indexOf(r), l = 0 <= l ? (u = h.substr(0, l), 
                    h.substr(l + 1)) : (u = h, ""), h = decodeURIComponent(u), l = decodeURIComponent(l);
                    Object.prototype.hasOwnProperty.call(n, h) ? c(n[h]) ? n[h].push(l) : n[h] = [ n[h], l ] : n[h] = l;
                }
                return n;
            };
            var c = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            };
        }, {} ],
        27: [ function(t, e, r) {
            "use strict";
            function o(t) {
                switch (typeof t) {
                  case "string":
                    return t;

                  case "boolean":
                    return t ? "true" : "false";

                  case "number":
                    return isFinite(t) ? t : "";

                  default:
                    return "";
                }
            }
            e.exports = function(r, i, n, t) {
                return i = i || "&", n = n || "=", "object" == typeof (r = null === r ? void 0 : r) ? a(u(r), function(t) {
                    var e = encodeURIComponent(o(t)) + n;
                    return s(r[t]) ? a(r[t], function(t) {
                        return e + encodeURIComponent(o(t));
                    }).join(i) : e + encodeURIComponent(o(r[t]));
                }).join(i) : t ? encodeURIComponent(o(t)) + n + encodeURIComponent(o(r)) : "";
            };
            var s = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            };
            function a(t, e) {
                if (t.map) return t.map(e);
                for (var r = [], i = 0; i < t.length; i++) r.push(e(t[i], i));
                return r;
            }
            var u = Object.keys || function(t) {
                var e, r = [];
                for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
                return r;
            };
        }, {} ],
        28: [ function(t, e, r) {
            "use strict";
            r.decode = r.parse = t("./decode"), r.encode = r.stringify = t("./encode");
        }, {
            "./decode": 26,
            "./encode": 27
        } ],
        29: [ function(t, e, r) {
            "use strict";
            var O = t("punycode"), M = t("./util");
            function x() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, 
                this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, 
                this.path = null, this.href = null;
            }
            r.parse = n, r.resolve = function(t, e) {
                return n(t, !1, !0).resolve(e);
            }, r.resolveObject = function(t, e) {
                return t ? n(t, !1, !0).resolveObject(e) : e;
            }, r.format = function(t) {
                M.isString(t) && (t = n(t));
                return t instanceof x ? t.format() : x.prototype.format.call(t);
            }, r.Url = x;
            var P = /^([a-z0-9.+-]+:)/i, i = /:[0-9]*$/, C = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, r = [ "{", "}", "|", "\\", "^", "`" ].concat([ "<", ">", '"', "`", " ", "\r", "\n", "\t" ]), R = [ "'" ].concat(r), A = [ "%", "/", "?", ";", "#" ].concat(R), D = [ "/", "?", "#" ], I = /^[+a-z0-9A-Z_-]{0,63}$/, L = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, N = {
                javascript: !0,
                "javascript:": !0
            }, k = {
                javascript: !0,
                "javascript:": !0
            }, B = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, F = t("querystring");
            function n(t, e, r) {
                if (t && M.isObject(t) && t instanceof x) return t;
                var i = new x();
                return i.parse(t, e, r), i;
            }
            x.prototype.parse = function(t, e, r) {
                if (!M.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var i = t.indexOf("?"), n = -1 !== i && i < t.indexOf("#") ? "?" : "#", i = t.split(n);
                i[0] = i[0].replace(/\\/g, "/");
                var o = (o = t = i.join(n)).trim();
                if (!r && 1 === t.split("#").length) {
                    var s = C.exec(o);
                    if (s) return this.path = o, this.href = o, this.pathname = s[1], s[2] ? (this.search = s[2], 
                    this.query = e ? F.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", 
                    this.query = {}), this;
                }
                var a, s = P.exec(o);
                if (s && (S = (s = s[0]).toLowerCase(), this.protocol = S, o = o.substr(s.length)), 
                (r || s || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(a = "//" === o.substr(0, 2)) || s && k[s] || (o = o.substr(2), 
                this.slashes = !0)), !k[s] && (a || s && !B[s])) {
                    for (var u = -1, h = 0; h < D.length; h++) -1 !== (l = o.indexOf(D[h])) && (-1 === u || l < u) && (u = l);
                    -1 !== (x = -1 === u ? o.lastIndexOf("@") : o.lastIndexOf("@", u)) && (T = o.slice(0, x), 
                    o = o.slice(x + 1), this.auth = decodeURIComponent(T));
                    for (var l, u = -1, h = 0; h < A.length; h++) -1 !== (l = o.indexOf(A[h])) && (-1 === u || l < u) && (u = l);
                    -1 === u && (u = o.length), this.host = o.slice(0, u), o = o.slice(u), this.parseHost(), 
                    this.hostname = this.hostname || "";
                    var c = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!c) for (var d = this.hostname.split(/\./), h = 0, f = d.length; h < f; h++) {
                        var p = d[h];
                        if (p && !p.match(I)) {
                            for (var v = "", y = 0, g = p.length; y < g; y++) 127 < p.charCodeAt(y) ? v += "x" : v += p[y];
                            if (!v.match(I)) {
                                var _ = d.slice(0, h), m = d.slice(h + 1), b = p.match(L);
                                b && (_.push(b[1]), m.unshift(b[2])), m.length && (o = "/" + m.join(".") + o), this.hostname = _.join(".");
                                break;
                            }
                        }
                    }
                    255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), 
                    c || (this.hostname = O.toASCII(this.hostname));
                    var x = this.port ? ":" + this.port : "", T = this.hostname || "";
                    this.host = T + x, this.href += this.host, c && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), 
                    "/" !== o[0] && (o = "/" + o));
                }
                if (!N[S]) for (h = 0, f = R.length; h < f; h++) {
                    var w, E = R[h];
                    -1 !== o.indexOf(E) && ((w = encodeURIComponent(E)) === E && (w = escape(E)), o = o.split(E).join(w));
                }
                c = o.indexOf("#");
                -1 !== c && (this.hash = o.substr(c), o = o.slice(0, c));
                var S, c = o.indexOf("?");
                return -1 !== c ? (this.search = o.substr(c), this.query = o.substr(c + 1), e && (this.query = F.parse(this.query)), 
                o = o.slice(0, c)) : e && (this.search = "", this.query = {}), o && (this.pathname = o), 
                B[S] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (x = this.pathname || "", 
                S = this.search || "", this.path = x + S), this.href = this.format(), this;
            }, x.prototype.format = function() {
                var t = this.auth || "";
                t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "", r = this.pathname || "", i = this.hash || "", n = !1, o = "";
                this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), 
                this.port && (n += ":" + this.port)), this.query && M.isObject(this.query) && Object.keys(this.query).length && (o = F.stringify(this.query));
                o = this.search || o && "?" + o || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || B[e]) && !1 !== n ? (n = "//" + (n || ""), 
                r && "/" !== r.charAt(0) && (r = "/" + r)) : n = n || "", i && "#" !== i.charAt(0) && (i = "#" + i), 
                o && "?" !== o.charAt(0) && (o = "?" + o), e + n + (r = r.replace(/[?#]/g, function(t) {
                    return encodeURIComponent(t);
                })) + (o = o.replace("#", "%23")) + i;
            }, x.prototype.resolve = function(t) {
                return this.resolveObject(n(t, !1, !0)).format();
            }, x.prototype.resolveObject = function(t) {
                M.isString(t) && ((f = new x()).parse(t, !1, !0), t = f);
                for (var e = new x(), r = Object.keys(this), i = 0; i < r.length; i++) {
                    var n = r[i];
                    e[n] = this[n];
                }
                if (e.hash = t.hash, "" === t.href) return e.href = e.format(), e;
                if (t.slashes && !t.protocol) {
                    for (var o = Object.keys(t), s = 0; s < o.length; s++) {
                        var a = o[s];
                        "protocol" !== a && (e[a] = t[a]);
                    }
                    return B[e.protocol] && e.hostname && !e.pathname && (e.path = e.pathname = "/"), 
                    e.href = e.format(), e;
                }
                if (t.protocol && t.protocol !== e.protocol) {
                    if (!B[t.protocol]) {
                        for (var u = Object.keys(t), h = 0; h < u.length; h++) {
                            var l = u[h];
                            e[l] = t[l];
                        }
                        return e.href = e.format(), e;
                    }
                    if (e.protocol = t.protocol, t.host || k[t.protocol]) e.pathname = t.pathname; else {
                        for (var c = (t.pathname || "").split("/"); c.length && !(t.host = c.shift()); );
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== c[0] && c.unshift(""), 
                        c.length < 2 && c.unshift(""), e.pathname = c.join("/");
                    }
                    return e.search = t.search, e.query = t.query, e.host = t.host || "", e.auth = t.auth, 
                    e.hostname = t.hostname || t.host, e.port = t.port, (e.pathname || e.search) && (p = e.pathname || "", 
                    v = e.search || "", e.path = p + v), e.slashes = e.slashes || t.slashes, e.href = e.format(), 
                    e;
                }
                var d = e.pathname && "/" === e.pathname.charAt(0), f = t.host || t.pathname && "/" === t.pathname.charAt(0), p = f || d || e.host && t.pathname, v = p, y = e.pathname && e.pathname.split("/") || [], c = t.pathname && t.pathname.split("/") || [], d = e.protocol && !B[e.protocol];
                if (d && (e.hostname = "", e.port = null, e.host && ("" === y[0] ? y[0] = e.host : y.unshift(e.host)), 
                e.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === c[0] ? c[0] = t.host : c.unshift(t.host)), 
                t.host = null), p = p && ("" === c[0] || "" === y[0])), f) e.host = (t.host || "" === t.host ? t : e).host, 
                e.hostname = (t.hostname || "" === t.hostname ? t : e).hostname, e.search = t.search, 
                e.query = t.query, y = c; else if (c.length) (y = y || []).pop(), y = y.concat(c), 
                e.search = t.search, e.query = t.query; else if (!M.isNullOrUndefined(t.search)) return d && (e.hostname = e.host = y.shift(), 
                (b = !!(e.host && 0 < e.host.indexOf("@")) && e.host.split("@")) && (e.auth = b.shift(), 
                e.host = e.hostname = b.shift())), e.search = t.search, e.query = t.query, M.isNull(e.pathname) && M.isNull(e.search) || (e.path = (e.pathname || "") + (e.search || "")), 
                e.href = e.format(), e;
                if (!y.length) return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, 
                e.href = e.format(), e;
                for (var g = y.slice(-1)[0], f = (e.host || t.host || 1 < y.length) && ("." === g || ".." === g) || "" === g, _ = 0, m = y.length; 0 <= m; m--) "." === (g = y[m]) ? y.splice(m, 1) : ".." === g ? (y.splice(m, 1), 
                _++) : _ && (y.splice(m, 1), _--);
                if (!p && !v) for (;_--; ) y.unshift("..");
                !p || "" === y[0] || y[0] && "/" === y[0].charAt(0) || y.unshift(""), f && "/" !== y.join("/").substr(-1) && y.push("");
                var b, f = "" === y[0] || y[0] && "/" === y[0].charAt(0);
                return d && (e.hostname = e.host = !f && y.length ? y.shift() : "", (b = !!(e.host && 0 < e.host.indexOf("@")) && e.host.split("@")) && (e.auth = b.shift(), 
                e.host = e.hostname = b.shift())), (p = p || e.host && y.length) && !f && y.unshift(""), 
                y.length ? e.pathname = y.join("/") : (e.pathname = null, e.path = null), M.isNull(e.pathname) && M.isNull(e.search) || (e.path = (e.pathname || "") + (e.search || "")), 
                e.auth = t.auth || e.auth, e.slashes = e.slashes || t.slashes, e.href = e.format(), 
                e;
            }, x.prototype.parseHost = function() {
                var t = this.host, e = i.exec(t);
                e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), 
                t && (this.hostname = t);
            };
        }, {
            "./util": 30,
            punycode: 25,
            querystring: 28
        } ],
        30: [ function(t, e, r) {
            "use strict";
            e.exports = {
                isString: function(t) {
                    return "string" == typeof t;
                },
                isObject: function(t) {
                    return "object" == typeof t && null !== t;
                },
                isNull: function(t) {
                    return null === t;
                },
                isNullOrUndefined: function(t) {
                    return null == t;
                }
            };
        }, {} ],
        31: [ function(t, e, r) {
            "use strict";
            e.exports = function(t, e, r) {
                var i = t.length;
                if (!(i <= e || 0 === r)) {
                    for (var n = i - (r = i < e + r ? i - e : r), o = e; o < n; ++o) t[o] = t[o + r];
                    t.length = n;
                }
            };
        }, {} ],
        32: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, i = s(t("mini-signals")), n = s(t("parse-uri")), o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("./async")), c = s(t("./Resource"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var a = /(#[\w-]+)?$/, t = (u.prototype.add = function(t, e, r, i) {
                if (Array.isArray(t)) {
                    for (var n = 0; n < t.length; ++n) this.add(t[n]);
                    return this;
                }
                if ("object" === (void 0 === t ? "undefined" : l(t)) && (i = e || t.callback || t.onComplete, 
                e = (r = t).url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, 
                r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof r && (i = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                if (e = this._prepareUrl(e), this.resources[t] = new c.default(t, e, r), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), 
                this.loading) {
                    for (var o = r.parentResource, s = [], a = 0; a < o.children.length; ++a) o.children[a].isComplete || s.push(o.children[a]);
                    var u = o.progressChunk * (s.length + 1) / (s.length + 2);
                    o.children.push(this.resources[t]), o.progressChunk = u;
                    for (var h = 0; h < s.length; ++h) s[h].progressChunk = u;
                    this.resources[t].progressChunk = u;
                }
                return this._queue.push(this.resources[t]), this;
            }, u.prototype.pre = function(t) {
                return this._beforeMiddleware.push(t), this;
            }, u.prototype.use = function(t) {
                return this._afterMiddleware.push(t), this;
            }, u.prototype.reset = function() {
                for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), 
                this.resources) {
                    t = this.resources[t];
                    t._onLoadBinding && t._onLoadBinding.detach(), t.isLoading && t.abort();
                }
                return this.resources = {}, this;
            }, u.prototype.load = function(t) {
                if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = e;
                return this.loading = !0, this.onStart.dispatch(this), this._queue.resume(), this;
            }, u.prototype._prepareUrl = function(t) {
                var e = (0, n.default)(t, {
                    strictMode: !0
                }), r = void 0;
                return r = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, 
                this.defaultQueryString && (t = a.exec(r)[0], -1 !== (r = r.substr(0, r.length - t.length)).indexOf("?") ? r += "&" + this.defaultQueryString : r += "?" + this.defaultQueryString, 
                r += t), r;
            }, u.prototype._loadResource = function(r, t) {
                var i = this;
                r._dequeue = t, o.eachSeries(this._beforeMiddleware, function(t, e) {
                    t.call(i, r, function() {
                        e(r.isComplete ? {} : null);
                    });
                }, function() {
                    r.isComplete ? i._onLoad(r) : (r._onLoadBinding = r.onComplete.once(i._onLoad, i), 
                    r.load());
                }, !0);
            }, u.prototype._onComplete = function() {
                this.loading = !1, this.onComplete.dispatch(this, this.resources);
            }, u.prototype._onLoad = function(r) {
                var i = this;
                r._onLoadBinding = null, this._resourcesParsing.push(r), r._dequeue(), o.eachSeries(this._afterMiddleware, function(t, e) {
                    t.call(i, r, e);
                }, function() {
                    r.onAfterMiddleware.dispatch(r), i.progress += r.progressChunk, i.onProgress.dispatch(i, r), 
                    r.error ? i.onError.dispatch(r.error, i, r) : i.onLoad.dispatch(i, r), i._resourcesParsing.splice(i._resourcesParsing.indexOf(r), 1), 
                    i._queue.idle() && 0 === i._resourcesParsing.length && (i.progress = 100, i._onComplete());
                }, !0);
            }, u);
            function u() {
                var r = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u), this.baseUrl = t, this.progress = 0, this.loading = !1, this.defaultQueryString = "", 
                this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], 
                this._boundLoadResource = function(t, e) {
                    return r._loadResource(t, e);
                }, this._queue = o.queue(this._boundLoadResource, e), this._queue.pause(), this.resources = {}, 
                this.onProgress = new i.default(), this.onError = new i.default(), this.onLoad = new i.default(), 
                this.onStart = new i.default(), this.onComplete = new i.default();
            }
            r.default = t;
        }, {
            "./Resource": 33,
            "./async": 34,
            "mini-signals": 38,
            "parse-uri": 39
        } ],
        33: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = a(t("parse-uri")), s = a(t("mini-signals"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var u = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest()), h = null;
            function l() {}
            c.setExtensionLoadType = function(t, e) {
                d(c._loadTypeMap, t, e);
            }, c.setExtensionXhrType = function(t, e) {
                d(c._xhrTypeMap, t, e);
            }, c.prototype.complete = function() {
                if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), 
                this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), 
                this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), 
                this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), 
                this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, 
                this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), 
                this.isComplete) throw new Error("Complete called again for an already completed resource.");
                this._setFlag(c.STATUS_FLAGS.COMPLETE, !0), this._setFlag(c.STATUS_FLAGS.LOADING, !1), 
                this.onComplete.dispatch(this);
            }, c.prototype.abort = function(t) {
                if (!this.error) {
                    if (this.error = new Error(t), this.xhr) this.xhr.abort(); else if (this.xdr) this.xdr.abort(); else if (this.data) if (this.data.src) this.data.src = c.EMPTY_GIF; else for (;this.data.firstChild; ) this.data.removeChild(this.data.firstChild);
                    this.complete();
                }
            }, c.prototype.load = function(t) {
                var e = this;
                if (!this.isLoading) if (this.isComplete) t && setTimeout(function() {
                    return t(e);
                }, 1); else switch (t && this.onComplete.once(t), this._setFlag(c.STATUS_FLAGS.LOADING, !0), 
                this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), 
                this.loadType) {
                  case c.LOAD_TYPE.IMAGE:
                    this.type = c.TYPE.IMAGE, this._loadElement("image");
                    break;

                  case c.LOAD_TYPE.AUDIO:
                    this.type = c.TYPE.AUDIO, this._loadSourceElement("audio");
                    break;

                  case c.LOAD_TYPE.VIDEO:
                    this.type = c.TYPE.VIDEO, this._loadSourceElement("video");
                    break;

                  default:
                    c.LOAD_TYPE.XHR;
                    u && this.crossOrigin ? this._loadXdr() : this._loadXhr();
                }
            }, c.prototype._hasFlag = function(t) {
                return !!(this._flags & t);
            }, c.prototype._setFlag = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t;
            }, c.prototype._loadElement = function(t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image() : this.data = document.createElement(t), 
                this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), 
                this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), 
                this.data.addEventListener("progress", this._boundOnProgress, !1);
            }, c.prototype._loadSourceElement = function(t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio() : this.data = document.createElement(t), 
                null !== this.data) {
                    if (!this.metadata.skipSource) if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; else if (Array.isArray(this.url)) for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e)); else {
                        var i = this.metadata.mimeType;
                        this.data.appendChild(this._createSource(t, this.url, Array.isArray(i) ? i[0] : i));
                    }
                    this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), 
                    this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), 
                    this.data.load();
                } else this.abort("Unsupported element: " + t);
            }, c.prototype._loadXhr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XMLHttpRequest();
                t.open("GET", this.url, !0), this.xhrType === c.XHR_RESPONSE_TYPE.JSON || this.xhrType === c.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = c.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, 
                t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), 
                t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), 
                t.send();
            }, c.prototype._loadXdr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest();
                t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, 
                t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), 
                setTimeout(function() {
                    return t.send();
                }, 1);
            }, c.prototype._createSource = function(t, e, r) {
                r = r || t + "/" + this._getExtension(e);
                t = document.createElement("source");
                return t.src = e, t.type = r, t;
            }, c.prototype._onError = function(t) {
                this.abort("Failed to load element using: " + t.target.nodeName);
            }, c.prototype._onProgress = function(t) {
                t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total);
            }, c.prototype._xhrOnError = function() {
                var t = this.xhr;
                this.abort(f(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"');
            }, c.prototype._xhrOnAbort = function() {
                this.abort(f(this.xhr) + " Request was aborted by the user.");
            }, c.prototype._xdrOnTimeout = function() {
                this.abort(f(this.xhr) + " Request timed out.");
            }, c.prototype._xhrOnLoad = function() {
                var t, e, r = this.xhr, i = "", n = void 0 === r.status ? 200 : r.status;
                if ("" !== r.responseType && "text" !== r.responseType && void 0 !== r.responseType || (i = r.responseText), 
                0 === n && 0 < i.length ? n = 200 : 1223 === n && (n = 204), 2 == (n / 100 | 0)) {
                    if (this.xhrType === c.XHR_RESPONSE_TYPE.TEXT) this.data = i, this.type = c.TYPE.TEXT; else if (this.xhrType === c.XHR_RESPONSE_TYPE.JSON) try {
                        this.data = JSON.parse(i), this.type = c.TYPE.JSON;
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded json: " + t);
                    } else if (this.xhrType === c.XHR_RESPONSE_TYPE.DOCUMENT) try {
                        window.DOMParser ? (t = new DOMParser(), this.data = t.parseFromString(i, "text/xml")) : ((e = document.createElement("div")).innerHTML = i, 
                        this.data = e), this.type = c.TYPE.XML;
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded xml: " + t);
                    } else this.data = r.response || i;
                    this.complete();
                } else this.abort("[" + r.status + "] " + r.statusText + ": " + r.responseURL);
            }, c.prototype._determineCrossOrigin = function(t, e) {
                if (0 === t.indexOf("data:")) return "";
                e = e || window.location, (h = h || document.createElement("a")).href = t;
                var r = !(t = (0, o.default)(h.href, {
                    strictMode: !0
                })).port && "" === e.port || t.port === e.port, i = t.protocol ? t.protocol + ":" : "";
                return t.host === e.hostname && r && i === e.protocol ? "" : "anonymous";
            }, c.prototype._determineXhrType = function() {
                return c._xhrTypeMap[this.extension] || c.XHR_RESPONSE_TYPE.TEXT;
            }, c.prototype._determineLoadType = function() {
                return c._loadTypeMap[this.extension] || c.LOAD_TYPE.XHR;
            }, c.prototype._getExtension = function() {
                var t, e, r = this.url;
                return (this.isDataUrl ? (e = r.indexOf("/"), r.substring(e + 1, r.indexOf(";", e))) : (t = r.indexOf("?"), 
                e = r.indexOf("#"), e = Math.min(-1 < t ? t : r.length, -1 < e ? e : r.length), 
                (r = r.substring(0, e)).substring(r.lastIndexOf(".") + 1))).toLowerCase();
            }, c.prototype._getMimeFromXhrType = function(t) {
                switch (t) {
                  case c.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";

                  case c.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";

                  case c.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";

                  case c.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";

                  case c.XHR_RESPONSE_TYPE.DEFAULT:
                  case c.XHR_RESPONSE_TYPE.TEXT:
                  default:
                    return "text/plain";
                }
            }, i(c, [ {
                key: "isDataUrl",
                get: function() {
                    return this._hasFlag(c.STATUS_FLAGS.DATA_URL);
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this._hasFlag(c.STATUS_FLAGS.COMPLETE);
                }
            }, {
                key: "isLoading",
                get: function() {
                    return this._hasFlag(c.STATUS_FLAGS.LOADING);
                }
            } ]), i = c;
            function c(t, e, r) {
                if (!function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, c), "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
                r = r || {}, this._flags = 0, this._setFlag(c.STATUS_FLAGS.DATA_URL, 0 === e.indexOf("data:")), 
                this.name = t, this.url = e, this.extension = this._getExtension(), this.data = null, 
                this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.loadType = r.loadType || this._determineLoadType(), 
                this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, 
                this.children = [], this.type = c.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = l, 
                this._onLoadBinding = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), 
                this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), 
                this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), 
                this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this), this.onStart = new s.default(), 
                this.onProgress = new s.default(), this.onComplete = new s.default(), this.onAfterMiddleware = new s.default();
            }
            function d(t, e, r) {
                (e = e && 0 === e.indexOf(".") ? e.substring(1) : e) && (t[e] = r);
            }
            function f(t) {
                return t.toString().replace("object ", "");
            }
            (r.default = i).STATUS_FLAGS = {
                NONE: 0,
                DATA_URL: 1,
                COMPLETE: 2,
                LOADING: 4
            }, i.TYPE = {
                UNKNOWN: 0,
                JSON: 1,
                XML: 2,
                IMAGE: 3,
                AUDIO: 4,
                VIDEO: 5,
                TEXT: 6
            }, i.LOAD_TYPE = {
                XHR: 1,
                IMAGE: 2,
                AUDIO: 3,
                VIDEO: 4
            }, i.XHR_RESPONSE_TYPE = {
                DEFAULT: "text",
                BUFFER: "arraybuffer",
                BLOB: "blob",
                DOCUMENT: "document",
                JSON: "json",
                TEXT: "text"
            }, i._loadTypeMap = {
                gif: i.LOAD_TYPE.IMAGE,
                png: i.LOAD_TYPE.IMAGE,
                bmp: i.LOAD_TYPE.IMAGE,
                jpg: i.LOAD_TYPE.IMAGE,
                jpeg: i.LOAD_TYPE.IMAGE,
                tif: i.LOAD_TYPE.IMAGE,
                tiff: i.LOAD_TYPE.IMAGE,
                webp: i.LOAD_TYPE.IMAGE,
                tga: i.LOAD_TYPE.IMAGE,
                svg: i.LOAD_TYPE.IMAGE,
                "svg+xml": i.LOAD_TYPE.IMAGE,
                mp3: i.LOAD_TYPE.AUDIO,
                ogg: i.LOAD_TYPE.AUDIO,
                wav: i.LOAD_TYPE.AUDIO,
                mp4: i.LOAD_TYPE.VIDEO,
                webm: i.LOAD_TYPE.VIDEO
            }, i._xhrTypeMap = {
                xhtml: i.XHR_RESPONSE_TYPE.DOCUMENT,
                html: i.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: i.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: i.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: i.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: i.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: i.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: i.XHR_RESPONSE_TYPE.BLOB,
                png: i.XHR_RESPONSE_TYPE.BLOB,
                bmp: i.XHR_RESPONSE_TYPE.BLOB,
                jpg: i.XHR_RESPONSE_TYPE.BLOB,
                jpeg: i.XHR_RESPONSE_TYPE.BLOB,
                tif: i.XHR_RESPONSE_TYPE.BLOB,
                tiff: i.XHR_RESPONSE_TYPE.BLOB,
                webp: i.XHR_RESPONSE_TYPE.BLOB,
                tga: i.XHR_RESPONSE_TYPE.BLOB,
                json: i.XHR_RESPONSE_TYPE.JSON,
                text: i.XHR_RESPONSE_TYPE.TEXT,
                txt: i.XHR_RESPONSE_TYPE.TEXT,
                ttf: i.XHR_RESPONSE_TYPE.BUFFER,
                otf: i.XHR_RESPONSE_TYPE.BUFFER
            }, i.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        }, {
            "mini-signals": 38,
            "parse-uri": 39
        } ],
        34: [ function(t, e, r) {
            "use strict";
            function o() {}
            r.__esModule = !0, r.eachSeries = function(r, i, n, o) {
                var s = 0, a = r.length;
                !function t(e) {
                    e || s === a ? n && n(e) : o ? setTimeout(function() {
                        i(r[s++], t);
                    }, 1) : i(r[s++], t);
                }();
            }, r.queue = function(e, t) {
                if (null == t) t = 1; else if (0 === t) throw new Error("Concurrency must not be zero");
                var r = 0, i = {
                    _tasks: [],
                    concurrency: t,
                    saturated: o,
                    unsaturated: o,
                    buffer: t / 4,
                    empty: o,
                    drain: o,
                    error: o,
                    started: !1,
                    paused: !1,
                    push: function(t, e) {
                        n(t, !1, e);
                    },
                    kill: function() {
                        r = 0, i.drain = o, i.started = !1, i._tasks = [];
                    },
                    unshift: function(t, e) {
                        n(t, !0, e);
                    },
                    process: function() {
                        for (;!i.paused && r < i.concurrency && i._tasks.length; ) {
                            var t = i._tasks.shift();
                            0 === i._tasks.length && i.empty(), (r += 1) === i.concurrency && i.saturated(), 
                            e(t.data, function(e) {
                                return function() {
                                    if (null === e) throw new Error("Callback was already called.");
                                    var t = e;
                                    e = null, t.apply(this, arguments);
                                };
                            }(function(t) {
                                return function() {
                                    --r, t.callback.apply(t, arguments), null != arguments[0] && i.error(arguments[0], t.data), 
                                    r <= i.concurrency - i.buffer && i.unsaturated(), i.idle() && i.drain(), i.process();
                                };
                            }(t)));
                        }
                    },
                    length: function() {
                        return i._tasks.length;
                    },
                    running: function() {
                        return r;
                    },
                    idle: function() {
                        return i._tasks.length + r === 0;
                    },
                    pause: function() {
                        !0 !== i.paused && (i.paused = !0);
                    },
                    resume: function() {
                        if (!1 !== i.paused) {
                            i.paused = !1;
                            for (var t = 1; t <= i.concurrency; t++) i.process();
                        }
                    }
                };
                function n(t, e, r) {
                    if (null != r && "function" != typeof r) throw new Error("task callback must be a function");
                    i.started = !0, null == t && i.idle() ? setTimeout(function() {
                        return i.drain();
                    }, 1) : (r = {
                        data: t,
                        callback: "function" == typeof r ? r : o
                    }, e ? i._tasks.unshift(r) : i._tasks.push(r), setTimeout(function() {
                        return i.process();
                    }, 1));
                }
                return i;
            };
        }, {} ],
        35: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.encodeBinary = function(t) {
                var e = "", r = 0;
                for (;r < t.length; ) {
                    for (var i = [ 0, 0, 0 ], n = [ 0, 0, 0, 0 ], o = 0; o < i.length; ++o) r < t.length ? i[o] = 255 & t.charCodeAt(r++) : i[o] = 0;
                    switch (n[0] = i[0] >> 2, n[1] = (3 & i[0]) << 4 | i[1] >> 4, n[2] = (15 & i[1]) << 2 | i[2] >> 6, 
                    n[3] = 63 & i[2], r - (t.length - 1)) {
                      case 2:
                        n[3] = 64, n[2] = 64;
                        break;

                      case 1:
                        n[3] = 64;
                    }
                    for (var s = 0; s < n.length; ++s) e += a.charAt(n[s]);
                }
                return e;
            };
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        }, {} ],
        36: [ function(t, e, r) {
            "use strict";
            var i = t("./Loader").default, n = t("./Resource").default, o = t("./async"), t = t("./b64");
            i.Resource = n, i.async = o, i.base64 = t, e.exports = i, e.exports.default = i;
        }, {
            "./Loader": 32,
            "./Resource": 33,
            "./async": 34,
            "./b64": 35
        } ],
        37: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            };
            r.blobMiddlewareFactory = function() {
                return function(t, e) {
                    if (t.data) {
                        if (t.xhr && t.xhrType === o.default.XHR_RESPONSE_TYPE.BLOB) if (window.Blob && "string" != typeof t.data) {
                            if (0 === t.data.type.indexOf("image")) {
                                var r = (i = a.createObjectURL(t.data), t.blob = t.data, t.data = new Image(), t.data.src = i, 
                                t.type = o.default.TYPE.IMAGE, t.data.onload = function() {
                                    a.revokeObjectURL(i), t.data.onload = null, e();
                                }, {
                                    v: void 0
                                });
                                if ("object" === (void 0 === r ? "undefined" : n(r))) return r.v;
                            }
                        } else {
                            r = t.xhr.getResponseHeader("content-type");
                            if (r && 0 === r.indexOf("image")) return t.data = new Image(), t.data.src = "data:" + r + ";base64," + s.default.encodeBinary(t.xhr.responseText), 
                            t.type = o.default.TYPE.IMAGE, void (t.data.onload = function() {
                                t.data.onload = null, e();
                            });
                        }
                        var i;
                        e();
                    } else e();
                };
            };
            var o = i(t("../../Resource")), s = i(t("../../b64"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var a = window.URL || window.webkitURL;
        }, {
            "../../Resource": 33,
            "../../b64": 35
        } ],
        38: [ function(t, e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var s = (i(a, [ {
                key: "detach",
                value: function() {
                    return null !== this._owner && (this._owner.detach(this), !0);
                }
            } ]), a);
            function a(t, e, r) {
                void 0 === e && (e = !1), o(this, a), this._fn = t, this._once = e, this._thisArg = r, 
                this._next = this._prev = this._owner = null;
            }
            function u(t, e) {
                return t._head ? (t._tail._next = e)._prev = t._tail : t._head = e, (t._tail = e)._owner = t, 
                e;
            }
            i(h, [ {
                key: "handlers",
                value: function() {
                    var t = this._head;
                    if (!(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0]) return !!t;
                    for (var e = []; t; ) e.push(t), t = t._next;
                    return e;
                }
            }, {
                key: "has",
                value: function(t) {
                    if (!(t instanceof s)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                    return t._owner === this;
                }
            }, {
                key: "dispatch",
                value: function() {
                    var t = this._head;
                    if (!t) return !1;
                    for (;t; ) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
                    return !0;
                }
            }, {
                key: "add",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                    return u(this, new s(t, !1, e));
                }
            }, {
                key: "once",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                    return u(this, new s(t, !0, e));
                }
            }, {
                key: "detach",
                value: function(t) {
                    if (!(t instanceof s)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                    return t._owner !== this || (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), 
                    t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, 
                    this._tail._next = null), t._owner = null), this;
                }
            }, {
                key: "detachAll",
                value: function() {
                    var t = this._head;
                    if (!t) return this;
                    for (this._head = this._tail = null; t; ) t._owner = null, t = t._next;
                    return this;
                }
            } ]), i = h;
            function h() {
                o(this, h), this._head = this._tail = void 0;
            }
            i.MiniSignalBinding = s, r.default = i, e.exports = r.default;
        }, {} ],
        39: [ function(t, e, r) {
            "use strict";
            e.exports = function(t, e) {
                for (var i = {
                    key: [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, r = i.parser[(e = e || {}).strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--; ) n[i.key[o]] = r[o] || "";
                return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, function(t, e, r) {
                    e && (n[i.q.name][e] = r);
                }), n;
            };
        }, {} ],
        40: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var u = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), i = n(t("ismobilejs")), t = n(t("./accessibleTarget"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            u.utils.mixins.delayMixin(u.DisplayObject.prototype, t.default);
            o.prototype.createTouchHook = function() {
                var t = this, e = document.createElement("button");
                e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", 
                e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", 
                e.title = "HOOK DIV", e.addEventListener("focus", function() {
                    t.isMobileAccessabillity = !0, t.activate(), document.body.removeChild(e);
                }), document.body.appendChild(e);
            }, o.prototype.activate = function() {
                this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), 
                window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), 
                this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div));
            }, o.prototype.deactivate = function() {
                this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), 
                window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), 
                this.div.parentNode && this.div.parentNode.removeChild(this.div));
            }, o.prototype.updateAccessibleObjects = function(t) {
                if (t.visible) {
                    t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                    for (var e = t.children, r = e.length - 1; 0 <= r; r--) this.updateAccessibleObjects(e[r]);
                }
            }, o.prototype.update = function() {
                if (this.renderer.renderingToScreen) {
                    this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                    var t = this.renderer.view.getBoundingClientRect(), e = t.width / this.renderer.width, r = t.height / this.renderer.height;
                    (n = this.div).style.left = t.left + "px", n.style.top = t.top + "px", n.style.width = this.renderer.width + "px", 
                    n.style.height = this.renderer.height + "px";
                    for (var i = 0; i < this.children.length; i++) {
                        var n, o, s, a = this.children[i];
                        a.renderId !== this.renderId ? (a._accessibleActive = !1, u.utils.removeItems(this.children, i, 1), 
                        this.div.removeChild(a._accessibleDiv), this.pool.push(a._accessibleDiv), a._accessibleDiv = null, 
                        i--, 0 === this.children.length && this.deactivate()) : (n = a._accessibleDiv, o = a.hitArea, 
                        s = a.worldTransform, a.hitArea ? (n.style.left = (s.tx + o.x * s.a) * e + "px", 
                        n.style.top = (s.ty + o.y * s.d) * r + "px", n.style.width = o.width * s.a * e + "px", 
                        n.style.height = o.height * s.d * r + "px") : (o = a.getBounds(), this.capHitArea(o), 
                        n.style.left = o.x * e + "px", n.style.top = o.y * r + "px", n.style.width = o.width * e + "px", 
                        n.style.height = o.height * r + "px"));
                    }
                    this.renderId++;
                }
            }, o.prototype.capHitArea = function(t) {
                t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), 
                t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y);
            }, o.prototype.addChild = function(t) {
                var e = this.pool.pop();
                e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", 
                e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", 
                e.style.zIndex = 2, e.style.borderStyle = "none", e.addEventListener("click", this._onClick.bind(this)), 
                e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), 
                t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleTitle || t.accessibleHint || (e.title = "displayObject " + this.tabIndex), 
                t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, 
                (t._accessibleDiv = e).displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), 
                t._accessibleDiv.tabIndex = t.tabIndex;
            }, o.prototype._onClick = function(t) {
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "click", e.eventData);
            }, o.prototype._onFocus = function(t) {
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData);
            }, o.prototype._onFocusOut = function(t) {
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData);
            }, o.prototype._onKeyDown = function(t) {
                9 === t.keyCode && this.activate();
            }, o.prototype._onMouseMove = function() {
                this.deactivate();
            }, o.prototype.destroy = function() {
                this.div = null;
                for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
                window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), 
                this.pool = null, this.children = null, this.renderer = null;
            }, t = o;
            function o(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, o), !i.default.tablet && !i.default.phone || navigator.isCocoonJS || this.createTouchHook();
                var e = document.createElement("div");
                e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", 
                e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2, this.div = e, this.pool = [], 
                this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), 
                this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, 
                window.addEventListener("keydown", this._onKeyDown, !1);
            }
            r.default = t, u.WebGLRenderer.registerPlugin("accessibility", t), u.CanvasRenderer.registerPlugin("accessibility", t);
        }, {
            "../core": 65,
            "./accessibleTarget": 41,
            ismobilejs: 4
        } ],
        41: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = {
                accessible: !1,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                _accessibleActive: !1,
                _accessibleDiv: !1
            };
        }, {} ],
        42: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./accessibleTarget");
            Object.defineProperty(r, "accessibleTarget", {
                enumerable: !0,
                get: function() {
                    return o(i).default;
                }
            });
            var n = t("./AccessibilityManager");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "AccessibilityManager", {
                enumerable: !0,
                get: function() {
                    return o(n).default;
                }
            });
        }, {
            "./AccessibilityManager": 40,
            "./accessibleTarget": 41
        } ],
        43: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = t("./autoDetectRenderer"), s = l(t("./display/Container")), a = t("./ticker"), u = l(t("./settings")), h = t("./const");
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            c.prototype.render = function() {
                this.renderer.render(this.stage);
            }, c.prototype.stop = function() {
                this._ticker.stop();
            }, c.prototype.start = function() {
                this._ticker.start();
            }, c.prototype.destroy = function(t) {
                var e = this._ticker;
                this.ticker = null, e.destroy(), this.stage.destroy(), this.stage = null, this.renderer.destroy(t), 
                this.renderer = null, this._options = null;
            }, i(c, [ {
                key: "ticker",
                set: function(t) {
                    this._ticker && this._ticker.remove(this.render, this), (this._ticker = t) && t.add(this.render, this, h.UPDATE_PRIORITY.LOW);
                },
                get: function() {
                    return this._ticker;
                }
            }, {
                key: "view",
                get: function() {
                    return this.renderer.view;
                }
            }, {
                key: "screen",
                get: function() {
                    return this.renderer.screen;
                }
            } ]), i = c;
            function c(t, e, r, i, n) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, c), "number" == typeof t && (t = Object.assign({
                    width: t,
                    height: e || u.default.RENDER_OPTIONS.height,
                    forceCanvas: !!i,
                    sharedTicker: !!n
                }, r)), this._options = t = Object.assign({
                    autoStart: !0,
                    sharedTicker: !1,
                    forceCanvas: !1,
                    sharedLoader: !1
                }, t), this.renderer = (0, o.autoDetectRenderer)(t), this.stage = new s.default(), 
                this._ticker = null, this.ticker = t.sharedTicker ? a.shared : new a.Ticker(), t.autoStart && this.start();
            }
            r.default = i;
        }, {
            "./autoDetectRenderer": 45,
            "./const": 46,
            "./display/Container": 48,
            "./settings": 101,
            "./ticker": 120
        } ],
        44: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("pixi-gl-core"), o = t("./settings"), s = (i = o) && i.__esModule ? i : {
                default: i
            };
            function a(t, e) {
                if (t instanceof Array) {
                    if ("precision" !== t[0].substring(0, 9)) {
                        var r = t.slice(0);
                        return r.unshift("precision " + e + " float;"), r;
                    }
                } else if ("precision" !== t.substring(0, 9)) return "precision " + e + " float;\n" + t;
                return t;
            }
            var u, n = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(h, u = n.GLShader), h);
            function h(t, e, r) {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h), function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, u.call(this, t, a(e, s.default.PRECISION_VERTEX), a(r, s.default.PRECISION_FRAGMENT)));
            }
            r.default = n;
        }, {
            "./settings": 101,
            "pixi-gl-core": 12
        } ],
        45: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.autoDetectRenderer = function(t, e, r, i) {
                var n = t && t.forceCanvas;
                void 0 !== i && (n = i);
                return new (n || !o.isWebGLSupported() ? s : a).default(t, e, r);
            };
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("./utils")), s = i(t("./renderers/canvas/CanvasRenderer")), a = i(t("./renderers/webgl/WebGLRenderer"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
        }, {
            "./renderers/canvas/CanvasRenderer": 77,
            "./renderers/webgl/WebGLRenderer": 84,
            "./utils": 124
        } ],
        46: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            r.VERSION = "4.5.5", r.PI_2 = 2 * Math.PI, r.RAD_TO_DEG = 180 / Math.PI, r.DEG_TO_RAD = Math.PI / 180, 
            r.RENDERER_TYPE = {
                UNKNOWN: 0,
                WEBGL: 1,
                CANVAS: 2
            }, r.BLEND_MODES = {
                NORMAL: 0,
                ADD: 1,
                MULTIPLY: 2,
                SCREEN: 3,
                OVERLAY: 4,
                DARKEN: 5,
                LIGHTEN: 6,
                COLOR_DODGE: 7,
                COLOR_BURN: 8,
                HARD_LIGHT: 9,
                SOFT_LIGHT: 10,
                DIFFERENCE: 11,
                EXCLUSION: 12,
                HUE: 13,
                SATURATION: 14,
                COLOR: 15,
                LUMINOSITY: 16,
                NORMAL_NPM: 17,
                ADD_NPM: 18,
                SCREEN_NPM: 19
            }, r.DRAW_MODES = {
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6
            }, r.SCALE_MODES = {
                LINEAR: 0,
                NEAREST: 1
            }, r.WRAP_MODES = {
                CLAMP: 0,
                REPEAT: 1,
                MIRRORED_REPEAT: 2
            }, r.GC_MODES = {
                AUTO: 0,
                MANUAL: 1
            }, r.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i, r.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i, 
            r.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, 
            r.SHAPES = {
                POLY: 0,
                RECT: 1,
                CIRC: 2,
                ELIP: 3,
                RREC: 4
            }, r.PRECISION = {
                LOW: "lowp",
                MEDIUM: "mediump",
                HIGH: "highp"
            }, r.TRANSFORM_MODE = {
                STATIC: 0,
                DYNAMIC: 1
            }, r.TEXT_GRADIENT = {
                LINEAR_VERTICAL: 0,
                LINEAR_HORIZONTAL: 1
            }, r.UPDATE_PRIORITY = {
                INTERACTION: 50,
                HIGH: 25,
                NORMAL: 0,
                LOW: -25,
                UTILITY: -50
            };
        }, {} ],
        47: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("../math");
            n.prototype.isEmpty = function() {
                return this.minX > this.maxX || this.minY > this.maxY;
            }, n.prototype.clear = function() {
                this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
            }, n.prototype.getRectangle = function(t) {
                return this.minX > this.maxX || this.minY > this.maxY ? i.Rectangle.EMPTY : ((t = t || new i.Rectangle(0, 0, 1, 1)).x = this.minX, 
                t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, 
                t);
            }, n.prototype.addPoint = function(t) {
                this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), 
                this.maxY = Math.max(this.maxY, t.y);
            }, n.prototype.addQuad = function(t) {
                var e = this.minX, r = this.minY, i = this.maxX, n = this.maxY, o = t[0], s = t[1], e = o < e ? o : e, r = s < r ? s : r, i = i < o ? o : i, n = n < s ? s : n;
                e = (o = t[2]) < e ? o : e, r = (s = t[3]) < r ? s : r, i = i < o ? o : i, n = n < s ? s : n, 
                e = (o = t[4]) < e ? o : e, r = (s = t[5]) < r ? s : r, i = i < o ? o : i, n = n < s ? s : n, 
                o = t[6], r = (s = t[7]) < r ? s : r, i = i < o ? o : i, n = n < s ? s : n, this.minX = e = o < e ? o : e, 
                this.minY = r, this.maxX = i, this.maxY = n;
            }, n.prototype.addFrame = function(t, e, r, i, n) {
                var o = t.worldTransform, s = o.a, a = o.b, u = o.c, h = o.d, l = o.tx, c = o.ty, d = s * e + u * r + l, f = a * e + h * r + c, p = d < (p = this.minX) ? d : p, v = f < (v = this.minY) ? f : v, t = (t = this.maxX) < d ? d : t, o = (o = this.maxY) < f ? f : o;
                p = (d = s * i + u * r + l) < p ? d : p, v = (f = a * i + h * r + c) < v ? f : v, 
                t = t < d ? d : t, o = o < f ? f : o, p = (d = s * e + u * n + l) < p ? d : p, v = (f = a * e + h * n + c) < v ? f : v, 
                o = o < f ? f : o, v = (f = a * i + h * n + c) < v ? f : v, t = (t = t < d ? d : t) < (d = s * i + u * n + l) ? d : t, 
                o = o < f ? f : o, this.minX = p = d < p ? d : p, this.minY = v, this.maxX = t, 
                this.maxY = o;
            }, n.prototype.addVertices = function(t, e, r, i) {
                for (var t = t.worldTransform, n = t.a, o = t.b, s = t.c, a = t.d, u = t.tx, h = t.ty, l = this.minX, c = this.minY, d = this.maxX, f = this.maxY, p = r; p < i; p += 2) var v = e[p], y = e[p + 1], g = n * v + s * y + u, v = a * y + o * v + h, l = g < l ? g : l, c = v < c ? v : c, d = d < g ? g : d, f = f < v ? v : f;
                this.minX = l, this.minY = c, this.maxX = d, this.maxY = f;
            }, n.prototype.addBounds = function(t) {
                var e = this.minX, r = this.minY, i = this.maxX, n = this.maxY;
                this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > i ? t.maxX : i, 
                this.maxY = t.maxY > n ? t.maxY : n;
            }, n.prototype.addBoundsMask = function(t, e) {
                var r, i, n = (t.minX > e.minX ? t : e).minX, o = (t.minY > e.minY ? t : e).minY, s = (t.maxX < e.maxX ? t : e).maxX, a = (t.maxY < e.maxY ? t : e).maxY;
                n <= s && o <= a && (r = this.minX, i = this.minY, t = this.maxX, e = this.maxY, 
                this.minX = n < r ? n : r, this.minY = o < i ? o : i, this.maxX = t < s ? s : t, 
                this.maxY = e < a ? a : e);
            }, n.prototype.addBoundsArea = function(t, e) {
                var r, i, n = t.minX > e.x ? t.minX : e.x, o = t.minY > e.y ? t.minY : e.y, s = t.maxX < e.x + e.width ? t.maxX : e.x + e.width, a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
                n <= s && o <= a && (r = this.minX, i = this.minY, t = this.maxX, e = this.maxY, 
                this.minX = n < r ? n : r, this.minY = o < i ? o : i, this.maxX = t < s ? s : t, 
                this.maxY = e < a ? a : e);
            }, t = n;
            function n() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, 
                this.rect = null;
            }
            r.default = t;
        }, {
            "../math": 70
        } ],
        48: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("../utils"), a = t("./DisplayObject"), t = (o = a) && o.__esModule ? o : {
                default: o
            };
            var u, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(h, u = t.default), h.prototype.onChildrenChange = function() {}, h.prototype.addChild = function(t) {
                var e = arguments.length;
                if (1 < e) for (var r = 0; r < e; r++) this.addChild(arguments[r]); else t.parent && t.parent.removeChild(t), 
                t.parent = this, t.transform._parentID = -1, this.children.push(t), this._boundsID++, 
                this.onChildrenChange(this.children.length - 1), t.emit("added", this);
                return t;
            }, h.prototype.addChildAt = function(t, e) {
                if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
                return t.parent && t.parent.removeChild(t), t.parent = this, t.transform._parentID = -1, 
                this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), 
                t;
            }, h.prototype.swapChildren = function(t, e) {
                var r, i;
                t !== e && (r = this.getChildIndex(t), i = this.getChildIndex(e), this.children[r] = e, 
                this.children[i] = t, this.onChildrenChange(r < i ? r : i));
            }, h.prototype.getChildIndex = function(t) {
                t = this.children.indexOf(t);
                if (-1 === t) throw new Error("The supplied DisplayObject must be a child of the caller");
                return t;
            }, h.prototype.setChildIndex = function(t, e) {
                if (e < 0 || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                var r = this.getChildIndex(t);
                (0, s.removeItems)(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e);
            }, h.prototype.getChildAt = function(t) {
                if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
                return this.children[t];
            }, h.prototype.removeChild = function(t) {
                var e = arguments.length;
                if (1 < e) for (var r = 0; r < e; r++) this.removeChild(arguments[r]); else {
                    var i = this.children.indexOf(t);
                    if (-1 === i) return null;
                    t.parent = null, t.transform._parentID = -1, (0, s.removeItems)(this.children, i, 1), 
                    this._boundsID++, this.onChildrenChange(i), t.emit("removed", this);
                }
                return t;
            }, h.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e.parent = null, e.transform._parentID = -1, (0, s.removeItems)(this.children, t, 1), 
                this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), e;
            }, h.prototype.removeChildren = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments[1], r = "number" == typeof e ? e : this.children.length, e = r - t, i = void 0;
                if (0 < e && e <= r) {
                    for (var i = this.children.splice(t, e), n = 0; n < i.length; ++n) i[n].parent = null, 
                    i[n].transform && (i[n].transform._parentID = -1);
                    this._boundsID++, this.onChildrenChange(t);
                    for (var o = 0; o < i.length; ++o) i[o].emit("removed", this);
                    return i;
                }
                if (0 == e && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
            }, h.prototype.updateTransform = function() {
                this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                for (var t = 0, e = this.children.length; t < e; ++t) {
                    var r = this.children[t];
                    r.visible && r.updateTransform();
                }
            }, h.prototype.calculateBounds = function() {
                this._bounds.clear(), this._calculateBounds();
                for (var t = 0; t < this.children.length; t++) {
                    var e = this.children[t];
                    e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), 
                    this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds));
                }
                this._lastBoundsID = this._boundsID;
            }, h.prototype._calculateBounds = function() {}, h.prototype.renderWebGL = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) if (this._mask || this._filters) this.renderAdvancedWebGL(t); else {
                    this._renderWebGL(t);
                    for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].renderWebGL(t);
                }
            }, h.prototype.renderAdvancedWebGL = function(t) {
                t.flush();
                var e = this._filters, r = this._mask;
                if (e) {
                    this._enabledFilters || (this._enabledFilters = []);
                    for (var i = this._enabledFilters.length = 0; i < e.length; i++) e[i].enabled && this._enabledFilters.push(e[i]);
                    this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters);
                }
                r && t.maskManager.pushMask(this, this._mask), this._renderWebGL(t);
                for (var n = 0, o = this.children.length; n < o; n++) this.children[n].renderWebGL(t);
                t.flush(), r && t.maskManager.popMask(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter();
            }, h.prototype._renderWebGL = function(t) {}, h.prototype._renderCanvas = function(t) {}, 
            h.prototype.renderCanvas = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                    this._mask && t.maskManager.pushMask(this._mask), this._renderCanvas(t);
                    for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].renderCanvas(t);
                    this._mask && t.maskManager.popMask(t);
                }
            }, h.prototype.destroy = function(t) {
                u.prototype.destroy.call(this);
                var e = "boolean" == typeof t ? t : t && t.children, r = this.removeChildren(0, this.children.length);
                if (e) for (var i = 0; i < r.length; ++i) r[i].destroy(t);
            }, i(h, [ {
                key: "width",
                get: function() {
                    return this.scale.x * this.getLocalBounds().width;
                },
                set: function(t) {
                    var e = this.getLocalBounds().width;
                    this.scale.x = 0 !== e ? t / e : 1, this._width = t;
                }
            }, {
                key: "height",
                get: function() {
                    return this.scale.y * this.getLocalBounds().height;
                },
                set: function(t) {
                    var e = this.getLocalBounds().height;
                    this.scale.y = 0 !== e ? t / e : 1, this._height = t;
                }
            } ]), h);
            function h() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, u.call(this));
                return t.children = [], t;
            }
            (r.default = i).prototype.containerUpdateTransform = i.prototype.updateTransform;
        }, {
            "../utils": 124,
            "./DisplayObject": 49
        } ],
        49: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = d(t("eventemitter3")), s = t("../const"), a = d(t("../settings")), u = d(t("./TransformStatic")), h = d(t("./Transform")), l = d(t("./Bounds")), c = t("../math");
            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var f, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(p, f = o.default), p.prototype.updateTransform = function() {
                this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, 
                this._bounds.updateID++;
            }, p.prototype._recursivePostUpdateTransform = function() {
                this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
            }, p.prototype.getBounds = function(t, e) {
                return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, 
                this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), 
                e || (this._boundsRect || (this._boundsRect = new c.Rectangle()), e = this._boundsRect), 
                this._bounds.getRectangle(e);
            }, p.prototype.getLocalBounds = function(t) {
                var e = this.transform, r = this.parent;
                this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new c.Rectangle()), 
                t = this._localBoundsRect);
                t = this.getBounds(!1, t);
                return this.parent = r, this.transform = e, t;
            }, p.prototype.toGlobal = function(t, e) {
                return 2 < arguments.length && void 0 !== arguments[2] && arguments[2] || (this._recursivePostUpdateTransform(), 
                this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, 
                this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e);
            }, p.prototype.toLocal = function(t, e, r, i) {
                return e && (t = e.toGlobal(t, r, i)), i || (this._recursivePostUpdateTransform(), 
                this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, 
                this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r);
            }, p.prototype.renderWebGL = function(t) {}, p.prototype.renderCanvas = function(t) {}, 
            p.prototype.setParent = function(t) {
                if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                return t.addChild(this), t;
            }, p.prototype.setTransform = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0, s = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 0, a = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 0, u = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : 0;
                return this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = i || 1, 
                this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = u, 
                this;
            }, p.prototype.destroy = function() {
                this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, 
                this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, 
                this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0;
            }, i(p, [ {
                key: "_tempDisplayObjectParent",
                get: function() {
                    return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new p()), 
                    this.tempDisplayObjectParent;
                }
            }, {
                key: "x",
                get: function() {
                    return this.position.x;
                },
                set: function(t) {
                    this.transform.position.x = t;
                }
            }, {
                key: "y",
                get: function() {
                    return this.position.y;
                },
                set: function(t) {
                    this.transform.position.y = t;
                }
            }, {
                key: "worldTransform",
                get: function() {
                    return this.transform.worldTransform;
                }
            }, {
                key: "localTransform",
                get: function() {
                    return this.transform.localTransform;
                }
            }, {
                key: "position",
                get: function() {
                    return this.transform.position;
                },
                set: function(t) {
                    this.transform.position.copy(t);
                }
            }, {
                key: "scale",
                get: function() {
                    return this.transform.scale;
                },
                set: function(t) {
                    this.transform.scale.copy(t);
                }
            }, {
                key: "pivot",
                get: function() {
                    return this.transform.pivot;
                },
                set: function(t) {
                    this.transform.pivot.copy(t);
                }
            }, {
                key: "skew",
                get: function() {
                    return this.transform.skew;
                },
                set: function(t) {
                    this.transform.skew.copy(t);
                }
            }, {
                key: "rotation",
                get: function() {
                    return this.transform.rotation;
                },
                set: function(t) {
                    this.transform.rotation = t;
                }
            }, {
                key: "worldVisible",
                get: function() {
                    var t = this;
                    do {
                        if (!t.visible) return !1;
                    } while (t = t.parent);
                    return !0;
                }
            }, {
                key: "mask",
                get: function() {
                    return this._mask;
                },
                set: function(t) {
                    this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1);
                }
            }, {
                key: "filters",
                get: function() {
                    return this._filters && this._filters.slice();
                },
                set: function(t) {
                    this._filters = t && t.slice();
                }
            } ]), p);
            function p() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, p);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, f.call(this)), e = (a.default.TRANSFORM_MODE === s.TRANSFORM_MODE.STATIC ? u : h).default;
                return t.tempDisplayObjectParent = null, t.transform = new e(), t.alpha = 1, t.visible = !0, 
                t.renderable = !0, t.parent = null, t.worldAlpha = 1, t.filterArea = null, t._filters = null, 
                t._enabledFilters = null, t._bounds = new l.default(), t._boundsID = 0, t._lastBoundsID = -1, 
                t._boundsRect = null, t._localBoundsRect = null, t._mask = null, t._destroyed = !1, 
                t;
            }
            (r.default = i).prototype.displayObjectUpdateTransform = i.prototype.updateTransform;
        }, {
            "../const": 46,
            "../math": 70,
            "../settings": 101,
            "./Bounds": 47,
            "./Transform": 50,
            "./TransformStatic": 52,
            eventemitter3: 3
        } ],
        50: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("../math"), a = t("./TransformBase"), t = (o = a) && o.__esModule ? o : {
                default: o
            };
            var u, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(h, u = t.default), h.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), 
                this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x);
            }, h.prototype.updateLocalTransform = function() {
                var t = this.localTransform;
                t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, 
                t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), 
                t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d);
            }, h.prototype.updateTransform = function(t) {
                var e = this.localTransform;
                e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, 
                e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), 
                e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
                var r = t.worldTransform, t = this.worldTransform;
                t.a = e.a * r.a + e.b * r.c, t.b = e.a * r.b + e.b * r.d, t.c = e.c * r.a + e.d * r.c, 
                t.d = e.c * r.b + e.d * r.d, t.tx = e.tx * r.a + e.ty * r.c + r.tx, t.ty = e.tx * r.b + e.ty * r.d + r.ty, 
                this._worldID++;
            }, h.prototype.setFromMatrix = function(t) {
                t.decompose(this);
            }, i(h, [ {
                key: "rotation",
                get: function() {
                    return this._rotation;
                },
                set: function(t) {
                    this._rotation = t, this.updateSkew();
                }
            } ]), h);
            function h() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, u.call(this));
                return t.position = new s.Point(0, 0), t.scale = new s.Point(1, 1), t.skew = new s.ObservablePoint(t.updateSkew, t, 0, 0), 
                t.pivot = new s.Point(0, 0), t._rotation = 0, t._cx = 1, t._sx = 0, t._cy = 0, t._sy = 1, 
                t;
            }
            r.default = i;
        }, {
            "../math": 70,
            "./TransformBase": 51
        } ],
        51: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("../math");
            n.prototype.updateLocalTransform = function() {}, n.prototype.updateTransform = function(t) {
                var e = t.worldTransform, r = this.worldTransform, t = this.localTransform;
                r.a = t.a * e.a + t.b * e.c, r.b = t.a * e.b + t.b * e.d, r.c = t.c * e.a + t.d * e.c, 
                r.d = t.c * e.b + t.d * e.d, r.tx = t.tx * e.a + t.ty * e.c + e.tx, r.ty = t.tx * e.b + t.ty * e.d + e.ty, 
                this._worldID++;
            }, t = n;
            function n() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.worldTransform = new i.Matrix(), this.localTransform = new i.Matrix(), 
                this._worldID = 0, this._parentID = 0;
            }
            (r.default = t).prototype.updateWorldTransform = t.prototype.updateTransform, t.IDENTITY = new t();
        }, {
            "../math": 70
        } ],
        52: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("../math"), a = t("./TransformBase"), t = (o = a) && o.__esModule ? o : {
                default: o
            };
            var u, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(h, u = t.default), h.prototype.onChange = function() {
                this._localID++;
            }, h.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), 
                this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), 
                this._localID++;
            }, h.prototype.updateLocalTransform = function() {
                var t = this.localTransform;
                this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, 
                t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), 
                t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, 
                this._parentID = -1);
            }, h.prototype.updateTransform = function(t) {
                var e, r, i = this.localTransform;
                this._localID !== this._currentLocalID && (i.a = this._cx * this.scale._x, i.b = this._sx * this.scale._x, 
                i.c = this._cy * this.scale._y, i.d = this._sy * this.scale._y, i.tx = this.position._x - (this.pivot._x * i.a + this.pivot._y * i.c), 
                i.ty = this.position._y - (this.pivot._x * i.b + this.pivot._y * i.d), this._currentLocalID = this._localID, 
                this._parentID = -1), this._parentID !== t._worldID && (e = t.worldTransform, (r = this.worldTransform).a = i.a * e.a + i.b * e.c, 
                r.b = i.a * e.b + i.b * e.d, r.c = i.c * e.a + i.d * e.c, r.d = i.c * e.b + i.d * e.d, 
                r.tx = i.tx * e.a + i.ty * e.c + e.tx, r.ty = i.tx * e.b + i.ty * e.d + e.ty, this._parentID = t._worldID, 
                this._worldID++);
            }, h.prototype.setFromMatrix = function(t) {
                t.decompose(this), this._localID++;
            }, i(h, [ {
                key: "rotation",
                get: function() {
                    return this._rotation;
                },
                set: function(t) {
                    this._rotation = t, this.updateSkew();
                }
            } ]), h);
            function h() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, u.call(this));
                return t.position = new s.ObservablePoint(t.onChange, t, 0, 0), t.scale = new s.ObservablePoint(t.onChange, t, 1, 1), 
                t.pivot = new s.ObservablePoint(t.onChange, t, 0, 0), t.skew = new s.ObservablePoint(t.updateSkew, t, 0, 0), 
                t._rotation = 0, t._cx = 1, t._sx = 0, t._cy = 0, t._sy = 1, t._localID = 0, t._currentLocalID = 0, 
                t;
            }
            r.default = i;
        }, {
            "../math": 70,
            "./TransformBase": 51
        } ],
        53: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = f(t("../display/Container")), n = f(t("../textures/RenderTexture")), o = f(t("../textures/Texture")), s = f(t("./GraphicsData")), a = f(t("../sprites/Sprite")), u = t("../math"), h = t("../utils"), E = t("../const"), l = f(t("../display/Bounds")), c = f(t("./utils/bezierCurveTo")), d = f(t("../renderers/canvas/CanvasRenderer"));
            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var p, v = void 0, y = new u.Matrix(), g = new u.Point(), _ = new Float32Array(4), m = new Float32Array(4), i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(b, p = i.default), b.prototype.clone = function() {
                var t;
                (t = new b()).renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, 
                t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, 
                t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = 0, t.cachedSpriteDirty = this.cachedSpriteDirty;
                for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone());
                return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), 
                t;
            }, b.prototype.lineStyle = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
                return this.lineWidth = t, this.lineColor = e, this.lineAlpha = r, this.currentPath && (this.currentPath.shape.points.length ? ((r = new u.Polygon(this.currentPath.shape.points.slice(-2))).closed = !1, 
                this.drawShape(r)) : (this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, 
                this.currentPath.lineAlpha = this.lineAlpha)), this;
            }, b.prototype.moveTo = function(t, e) {
                e = new u.Polygon([ t, e ]);
                return e.closed = !1, this.drawShape(e), this;
            }, b.prototype.lineTo = function(t, e) {
                return this.currentPath.shape.points.push(t, e), this.dirty++, this;
            }, b.prototype.quadraticCurveTo = function(t, e, r, i) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [ 0, 0 ]) : this.moveTo(0, 0);
                var n = this.currentPath.shape.points, o = 0, s = 0;
                0 === n.length && this.moveTo(0, 0);
                for (var a = n[n.length - 2], u = n[n.length - 1], h = 1; h <= 20; ++h) {
                    var l = h / 20;
                    n.push((o = a + (t - a) * l) + (t + (r - t) * l - o) * l, (s = u + (e - u) * l) + (e + (i - e) * l - s) * l);
                }
                return this.dirty++, this;
            }, b.prototype.bezierCurveTo = function(t, e, r, i, n, o) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [ 0, 0 ]) : this.moveTo(0, 0);
                var s = this.currentPath.shape.points, a = s[s.length - 2], u = s[s.length - 1];
                return s.length -= 2, (0, c.default)(a, u, t, e, r, i, n, o, s), this.dirty++, this;
            }, b.prototype.arcTo = function(t, e, r, i, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                var o, s, a = this.currentPath.shape.points, u = a[a.length - 2], h = a[a.length - 1] - e, l = u - t, c = i - e, d = r - t, f = Math.abs(h * d - l * c);
                return f < 1e-8 || 0 === n ? a[a.length - 2] === t && a[a.length - 1] === e || a.push(t, e) : (o = h * h + l * l, 
                s = c * c + d * d, u = h * c + l * d, r = (i = n * Math.sqrt(o) / f) * u / o, o = i * d + (a = n * Math.sqrt(s) / f) * l, 
                f = i * c + a * h, s = d * (i + (u = a * u / s)), u = c * (i + u), r = Math.atan2(h * (a + r) - f, l * (a + r) - o), 
                s = Math.atan2(u - f, s - o), this.arc(o + t, f + e, n, r, s, d * h < l * c)), this.dirty++, 
                this;
            }, b.prototype.arc = function(t, e, r, i, n) {
                var o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                if (i === n) return this;
                !o && n <= i ? n += 2 * Math.PI : o && i <= n && (i += 2 * Math.PI);
                var s = n - i, a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
                if (0 == s) return this;
                var o = t + Math.cos(i) * r, n = e + Math.sin(i) * r, u = this.currentPath ? this.currentPath.shape.points : null;
                u ? u[u.length - 2] === o && u[u.length - 1] === n || u.push(o, n) : (this.moveTo(o, n), 
                u = this.currentPath.shape.points);
                for (var h = s / (2 * a), l = 2 * h, c = Math.cos(h), d = Math.sin(h), f = a - 1, p = f % 1 / f, v = 0; v <= f; ++v) {
                    var y = h + i + l * (v + p * v), g = Math.cos(y), y = -Math.sin(y);
                    u.push((c * g + d * y) * r + t, (c * -y + d * g) * r + e);
                }
                return this.dirty++, this;
            }, b.prototype.beginFill = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                return this.filling = !0, this.fillColor = t, this.fillAlpha = e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, 
                this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), 
                this;
            }, b.prototype.endFill = function() {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this;
            }, b.prototype.drawRect = function(t, e, r, i) {
                return this.drawShape(new u.Rectangle(t, e, r, i)), this;
            }, b.prototype.drawRoundedRect = function(t, e, r, i, n) {
                return this.drawShape(new u.RoundedRectangle(t, e, r, i, n)), this;
            }, b.prototype.drawCircle = function(t, e, r) {
                return this.drawShape(new u.Circle(t, e, r)), this;
            }, b.prototype.drawEllipse = function(t, e, r, i) {
                return this.drawShape(new u.Ellipse(t, e, r, i)), this;
            }, b.prototype.drawPolygon = function(t) {
                var e = !0;
                if ((r = t) instanceof u.Polygon && (e = r.closed, r = r.points), !Array.isArray(r)) for (var r = new Array(arguments.length), i = 0; i < r.length; ++i) r[i] = arguments[i];
                t = new u.Polygon(r);
                return t.closed = e, this.drawShape(t), this;
            }, b.prototype.clear = function() {
                return (this.lineWidth || this.filling || 0 < this.graphicsData.length) && (this.lineWidth = 0, 
                this.filling = !1, this.boundsDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), 
                this.currentPath = null, this._spriteRect = null, this;
            }, b.prototype.isFastRect = function() {
                return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === E.SHAPES.RECT && !this.graphicsData[0].lineWidth;
            }, b.prototype._renderWebGL = function(t) {
                this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), 
                this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), 
                t.plugins.graphics.render(this));
            }, b.prototype._renderSpriteRect = function(t) {
                var e = this.graphicsData[0].shape;
                this._spriteRect || (this._spriteRect = new a.default(new o.default(o.default.WHITE)));
                var r, i, n = this._spriteRect;
                16777215 === this.tint ? n.tint = this.graphicsData[0].fillColor : (i = m, (0, h.hex2rgb)(this.graphicsData[0].fillColor, r = _), 
                (0, h.hex2rgb)(this.tint, i), r[0] *= i[0], r[1] *= i[1], r[2] *= i[2], n.tint = (0, 
                h.rgb2hex)(r)), n.alpha = this.graphicsData[0].fillAlpha, n.worldAlpha = this.worldAlpha * n.alpha, 
                n.blendMode = this.blendMode, n._texture._frame.width = e.width, n._texture._frame.height = e.height, 
                n.transform.worldTransform = this.transform.worldTransform, n.anchor.set(-e.x / e.width, -e.y / e.height), 
                n._onAnchorUpdate(), n._renderWebGL(t);
            }, b.prototype._renderCanvas = function(t) {
                !0 !== this.isMask && t.plugins.graphics.render(this);
            }, b.prototype._calculateBounds = function() {
                this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), 
                this.cachedSpriteDirty = !0);
                var t = this._localBounds;
                this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY);
            }, b.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, g);
                for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                    var i = e[r];
                    if (i.fill && (i.shape && i.shape.contains(g.x, g.y))) {
                        if (i.holes) for (var n = 0; n < i.holes.length; n++) if (i.holes[n].contains(g.x, g.y)) return !1;
                        return !0;
                    }
                }
                return !1;
            }, b.prototype.updateLocalBounds = function() {
                var t = 1 / 0, e = -1 / 0, r = 1 / 0, i = -1 / 0;
                if (this.graphicsData.length) for (var n = 0, o = 0, s = 0, a = 0, u = 0; u < this.graphicsData.length; u++) {
                    var h = this.graphicsData[u], l = h.type, c = h.lineWidth, d = h.shape;
                    if (l === E.SHAPES.RECT || l === E.SHAPES.RREC) n = d.x - c / 2, o = d.y - c / 2, 
                    t = n < t ? n : t, e = e < n + (s = d.width + c) ? n + s : e, r = o < r ? o : r, 
                    i = i < o + (a = d.height + c) ? o + a : i; else if (l === E.SHAPES.CIRC) n = d.x, 
                    o = d.y, t = n - (s = d.radius + c / 2) < t ? n - s : t, e = e < n + s ? n + s : e, 
                    r = o - (a = d.radius + c / 2) < r ? o - a : r, i = i < o + a ? o + a : i; else if (l === E.SHAPES.ELIP) n = d.x, 
                    o = d.y, t = n - (s = d.width + c / 2) < t ? n - s : t, e = e < n + s ? n + s : e, 
                    r = o - (a = d.height + c / 2) < r ? o - a : r, i = i < o + a ? o + a : i; else for (var f, p, v, y, g, _, m, b, x = d.points, T = 0; T + 2 < x.length; T += 2) n = x[T], 
                    o = x[T + 1], f = x[T + 2], p = x[T + 3], v = Math.abs(f - n), y = Math.abs(p - o), 
                    a = c, (s = Math.sqrt(v * v + y * y)) < 1e-9 || (t = (m = (f + n) / 2) - (g = (a / s * y + v) / 2) < t ? m - g : t, 
                    e = e < m + g ? m + g : e, r = (b = (p + o) / 2) - (_ = (a / s * v + y) / 2) < r ? b - _ : r, 
                    i = i < b + _ ? b + _ : i);
                } else i = r = e = t = 0;
                var w = this.boundsPadding;
                this._localBounds.minX = t - w, this._localBounds.maxX = e + w, this._localBounds.minY = r - w, 
                this._localBounds.maxY = i + w;
            }, b.prototype.drawShape = function(t) {
                this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), 
                this.currentPath = null;
                t = new s.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, t);
                return this.graphicsData.push(t), t.type === E.SHAPES.POLY && (t.shape.closed = t.shape.closed || this.filling, 
                this.currentPath = t), this.dirty++, t;
            }, b.prototype.generateCanvasTexture = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, r = this.getLocalBounds(), i = n.default.create(r.width, r.height, t, e);
                v = v || new d.default(), this.transform.updateLocalTransform(), this.transform.localTransform.copy(y), 
                y.invert(), y.tx -= r.x, y.ty -= r.y, v.render(this, i, !0, y);
                t = o.default.fromCanvas(i.baseTexture._canvasRenderTarget.canvas, t, "graphics");
                return t.baseTexture.resolution = e, t.baseTexture.update(), t;
            }, b.prototype.closePath = function() {
                var t = this.currentPath;
                return t && t.shape && t.shape.close(), this;
            }, b.prototype.addHole = function() {
                var t = this.graphicsData.pop();
                return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), 
                this.currentPath = null, this;
            }, b.prototype.destroy = function(t) {
                p.prototype.destroy.call(this, t);
                for (var e, r = 0; r < this.graphicsData.length; ++r) this.graphicsData[r].destroy();
                for (e in this._webgl) for (var i = 0; i < this._webgl[e].data.length; ++i) this._webgl[e].data[i].destroy();
                this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, 
                this._webgl = null, this._localBounds = null;
            }, b);
            function b() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, b);
                var e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, p.call(this));
                return e.fillAlpha = 1, e.lineWidth = 0, e.nativeLines = t, e.lineColor = 0, e.graphicsData = [], 
                e.tint = 16777215, e._prevTint = 16777215, e.blendMode = E.BLEND_MODES.NORMAL, e.currentPath = null, 
                e._webGL = {}, e.isMask = !1, e.boundsPadding = 0, e._localBounds = new l.default(), 
                e.dirty = 0, e.fastRectDirty = -1, e.clearDirty = 0, e.boundsDirty = -1, e.cachedSpriteDirty = !1, 
                e._spriteRect = null, e._fastRect = !1, e;
            }
            (r.default = i)._SPRITE_TEXTURE = null;
        }, {
            "../const": 46,
            "../display/Bounds": 47,
            "../display/Container": 48,
            "../math": 70,
            "../renderers/canvas/CanvasRenderer": 77,
            "../sprites/Sprite": 102,
            "../textures/RenderTexture": 113,
            "../textures/Texture": 115,
            "../utils": 124,
            "./GraphicsData": 54,
            "./utils/bezierCurveTo": 56
        } ],
        54: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (u.prototype.clone = function() {
                return new u(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape);
            }, u.prototype.addHole = function(t) {
                this.holes.push(t);
            }, u.prototype.destroy = function() {
                this.shape = null, this.holes = null;
            }, u);
            function u(t, e, r, i, n, o, s, a) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u), this.lineWidth = t, this.nativeLines = s, this.lineColor = e, this.lineAlpha = r, 
                this._lineTint = e, this.fillColor = i, this.fillAlpha = n, this._fillTint = i, 
                this.fill = o, this.holes = [], this.shape = a, this.type = a.type;
            }
            r.default = i;
        }, {} ],
        55: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../../renderers/canvas/CanvasRenderer"), o = (i = n) && i.__esModule ? i : {
                default: i
            }, b = t("../../const");
            s.prototype.render = function(t) {
                var e = this.renderer, r = e.context, i = t.worldAlpha, n = t.transform.worldTransform, o = e.resolution;
                this._prevTint !== this.tint && (this.dirty = !0), r.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), 
                t.dirty && (this.updateGraphicsTint(t), t.dirty = !1), e.setBlendMode(t.blendMode);
                for (var s = 0; s < t.graphicsData.length; s++) {
                    var a, u, h, l, c, d, f, p, v = t.graphicsData[s], y = v.shape, g = v._fillTint, _ = v._lineTint;
                    if (r.lineWidth = v.lineWidth, v.type === b.SHAPES.POLY) {
                        r.beginPath(), this.renderPolygon(y.points, y.closed, r);
                        for (var m = 0; m < v.holes.length; m++) this.renderPolygon(v.holes[m].points, !0, r);
                        v.fill && (r.globalAlpha = v.fillAlpha * i, r.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), 
                        r.fill()), v.lineWidth && (r.globalAlpha = v.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | _).toString(16)).substr(-6), 
                        r.stroke());
                    } else v.type === b.SHAPES.RECT ? (!v.fillColor && 0 !== v.fillColor || (r.globalAlpha = v.fillAlpha * i, 
                    r.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), r.fillRect(y.x, y.y, y.width, y.height)), 
                    v.lineWidth && (r.globalAlpha = v.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | _).toString(16)).substr(-6), 
                    r.strokeRect(y.x, y.y, y.width, y.height))) : v.type === b.SHAPES.CIRC ? (r.beginPath(), 
                    r.arc(y.x, y.y, y.radius, 0, 2 * Math.PI), r.closePath(), v.fill && (r.globalAlpha = v.fillAlpha * i, 
                    r.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), r.fill()), v.lineWidth && (r.globalAlpha = v.lineAlpha * i, 
                    r.strokeStyle = "#" + ("00000" + (0 | _).toString(16)).substr(-6), r.stroke())) : v.type === b.SHAPES.ELIP ? (h = 2 * y.width, 
                    p = 2 * y.height, f = y.x - h / 2, a = y.y - p / 2, r.beginPath(), l = h / 2 * .5522848, 
                    d = p / 2 * .5522848, u = f + h, c = a + p, h = f + h / 2, r.moveTo(f, p = a + p / 2), 
                    r.bezierCurveTo(f, p - d, h - l, a, h, a), r.bezierCurveTo(h + l, a, u, p - d, u, p), 
                    r.bezierCurveTo(u, p + d, h + l, c, h, c), r.bezierCurveTo(h - l, c, f, p + d, f, p), 
                    r.closePath(), v.fill && (r.globalAlpha = v.fillAlpha * i, r.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), 
                    r.fill()), v.lineWidth && (r.globalAlpha = v.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | _).toString(16)).substr(-6), 
                    r.stroke())) : v.type === b.SHAPES.RREC && (l = y.x, c = y.y, d = y.width, f = y.height, 
                    p = y.radius, p = (y = Math.min(d, f) / 2 | 0) < p ? y : p, r.beginPath(), r.moveTo(l, c + p), 
                    r.lineTo(l, c + f - p), r.quadraticCurveTo(l, c + f, l + p, c + f), r.lineTo(l + d - p, c + f), 
                    r.quadraticCurveTo(l + d, c + f, l + d, c + f - p), r.lineTo(l + d, c + p), r.quadraticCurveTo(l + d, c, l + d - p, c), 
                    r.lineTo(l + p, c), r.quadraticCurveTo(l, c, l, c + p), r.closePath(), !v.fillColor && 0 !== v.fillColor || (r.globalAlpha = v.fillAlpha * i, 
                    r.fillStyle = "#" + ("00000" + (0 | g).toString(16)).substr(-6), r.fill()), v.lineWidth && (r.globalAlpha = v.lineAlpha * i, 
                    r.strokeStyle = "#" + ("00000" + (0 | _).toString(16)).substr(-6), r.stroke()));
                }
            }, s.prototype.updateGraphicsTint = function(t) {
                t._prevTint = t.tint;
                for (var e = (t.tint >> 16 & 255) / 255, r = (t.tint >> 8 & 255) / 255, i = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; ++n) {
                    var o = t.graphicsData[n], s = 0 | o.fillColor, a = 0 | o.lineColor;
                    o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * i * 255, 
                    o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * i * 255;
                }
            }, s.prototype.renderPolygon = function(t, e, r) {
                r.moveTo(t[0], t[1]);
                for (var i = 1; i < t.length / 2; ++i) r.lineTo(t[2 * i], t[2 * i + 1]);
                e && r.closePath();
            }, s.prototype.destroy = function() {
                this.renderer = null;
            }, t = s;
            function s(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.renderer = t;
            }
            r.default = t, o.default.registerPlugin("graphics", t);
        }, {
            "../../const": 46,
            "../../renderers/canvas/CanvasRenderer": 77
        } ],
        56: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e, r, i, n, o, s, a) {
                var u = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : [], h = 0, l = 0, c = 0, d = 0, f = 0;
                u.push(t, e);
                for (var p = 1, v = 0; p <= 20; ++p) c = (l = (h = 1 - (v = p / 20)) * h) * h, f = (d = v * v) * v, 
                u.push(c * t + 3 * l * v * r + 3 * h * d * n + f * s, c * e + 3 * l * v * i + 3 * h * d * o + f * a);
                return u;
            };
        }, {} ],
        57: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var h = t("../../utils"), l = t("../../const"), i = a(t("../../renderers/webgl/utils/ObjectRenderer")), n = a(t("../../renderers/webgl/WebGLRenderer")), o = a(t("./WebGLGraphicsData")), s = a(t("./shaders/PrimitiveShader")), c = a(t("./utils/buildPoly")), d = a(t("./utils/buildRectangle")), f = a(t("./utils/buildRoundedRectangle")), p = a(t("./utils/buildCircle"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var u, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(v, u = i.default), v.prototype.onContextChange = function() {
                this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new s.default(this.gl);
            }, v.prototype.destroy = function() {
                i.default.prototype.destroy.call(this);
                for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                this.graphicsDataPool = null;
            }, v.prototype.render = function(t) {
                var e = this.renderer, r = e.gl, i = void 0, n = t._webGL[this.CONTEXT_UID];
                n && t.dirty === n.dirty || (this.updateGraphics(t), n = t._webGL[this.CONTEXT_UID]);
                var o = this.primitiveShader;
                e.bindShader(o), e.state.setBlendMode(t.blendMode);
                for (var s = 0, a = n.data.length; s < a; s++) {
                    var u = (i = n.data[s]).shader;
                    e.bindShader(u), u.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), 
                    u.uniforms.tint = (0, h.hex2rgb)(t.tint), u.uniforms.alpha = t.worldAlpha, e.bindVao(i.vao), 
                    i.nativeLines ? r.drawArrays(r.LINES, 0, i.points.length / 6) : i.vao.draw(r.TRIANGLE_STRIP, i.indices.length);
                }
            }, v.prototype.updateGraphics = function(t) {
                var e = this.renderer.gl, r = t._webGL[this.CONTEXT_UID];
                if ((r = r || (t._webGL[this.CONTEXT_UID] = {
                    lastIndex: 0,
                    data: [],
                    gl: e,
                    clearDirty: -1,
                    dirty: -1
                })).dirty = t.dirty, t.clearDirty !== r.clearDirty) {
                    r.clearDirty = t.clearDirty;
                    for (var i = 0; i < r.data.length; i++) this.graphicsDataPool.push(r.data[i]);
                    r.data.length = 0, r.lastIndex = 0;
                }
                for (var n = void 0, o = void 0, s = r.lastIndex; s < t.graphicsData.length; s++) {
                    var a = t.graphicsData[s], n = this.getWebGLData(r, 0);
                    a.nativeLines && a.lineWidth && (o = this.getWebGLData(r, 0, !0), r.lastIndex++), 
                    a.type === l.SHAPES.POLY && (0, c.default)(a, n, o), a.type === l.SHAPES.RECT ? (0, 
                    d.default)(a, n, o) : a.type === l.SHAPES.CIRC || a.type === l.SHAPES.ELIP ? (0, 
                    p.default)(a, n, o) : a.type === l.SHAPES.RREC && (0, f.default)(a, n, o), r.lastIndex++;
                }
                this.renderer.bindVao(null);
                for (var u = 0; u < r.data.length; u++) (n = r.data[u]).dirty && n.upload();
            }, v.prototype.getWebGLData = function(t, e, r) {
                var i = t.data[t.data.length - 1];
                return (!i || i.nativeLines !== r || 32e4 < i.points.length) && ((i = this.graphicsDataPool.pop() || new o.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState)).nativeLines = r, 
                i.reset(e), t.data.push(i)), i.dirty = !0, i;
            }, v);
            function v(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, v);
                var e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, u.call(this, t));
                return e.graphicsDataPool = [], e.primitiveShader = null, e.gl = t.gl, e.CONTEXT_UID = 0, 
                e;
            }
            r.default = t, n.default.registerPlugin("graphics", t);
        }, {
            "../../const": 46,
            "../../renderers/webgl/WebGLRenderer": 84,
            "../../renderers/webgl/utils/ObjectRenderer": 94,
            "../../utils": 124,
            "./WebGLGraphicsData": 58,
            "./shaders/PrimitiveShader": 59,
            "./utils/buildCircle": 60,
            "./utils/buildPoly": 62,
            "./utils/buildRectangle": 63,
            "./utils/buildRoundedRectangle": 64
        } ],
        58: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("pixi-gl-core"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            s.prototype.reset = function() {
                this.points.length = 0, this.indices.length = 0;
            }, s.prototype.upload = function() {
                this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), 
                this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), 
                this.dirty = !1;
            }, s.prototype.destroy = function() {
                this.color = null, this.points = null, this.indices = null, this.vao.destroy(), 
                this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, 
                this.indexBuffer = null, this.glPoints = null, this.glIndices = null;
            }, t = s;
            function s(t, e, r) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.gl = t, this.color = [ 0, 0, 0 ], this.points = [], this.indices = [], 
                this.buffer = o.default.GLBuffer.createVertexBuffer(t), this.indexBuffer = o.default.GLBuffer.createIndexBuffer(t), 
                this.dirty = !0, this.nativeLines = !1, this.glPoints = null, this.glIndices = null, 
                this.shader = e, this.vao = new o.default.VertexArrayObject(t, r).addIndex(this.indexBuffer).addAttribute(this.buffer, e.attributes.aVertexPosition, t.FLOAT, !1, 24, 0).addAttribute(this.buffer, e.attributes.aColor, t.FLOAT, !1, 24, 8);
            }
            r.default = t;
        }, {
            "pixi-gl-core": 12
        } ],
        59: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../../../Shader"), t = (i = n) && i.__esModule ? i : {
                default: i
            };
            var o, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(s, o = t.default), s);
            function s(t) {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, o.call(this, t, [ "attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}" ].join("\n"), [ "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}" ].join("\n")));
            }
            r.default = t;
        }, {
            "../../../Shader": 44
        } ],
        60: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e, r) {
                var i = t.shape, n = i.x, o = i.y, s = void 0, a = void 0;
                a = t.type === x.SHAPES.CIRC ? (s = i.radius, i.radius) : (s = i.width, i.height);
                if (0 !== s && 0 !== a) {
                    var u = Math.floor(30 * Math.sqrt(i.radius)) || Math.floor(15 * Math.sqrt(i.width + i.height)), h = 2 * Math.PI / u;
                    if (t.fill) {
                        var l = (0, T.hex2rgb)(t.fillColor), c = t.fillAlpha, d = l[0] * c, f = l[1] * c, p = l[2] * c, v = e.points, y = e.indices, g = v.length / 6;
                        y.push(g);
                        for (var _ = 0; _ < u + 1; _++) v.push(n, o, d, f, p, c), v.push(n + Math.sin(h * _) * s, o + Math.cos(h * _) * a, d, f, p, c), 
                        y.push(g++, g++);
                        y.push(g - 1);
                    }
                    if (t.lineWidth) {
                        l = t.points;
                        t.points = [];
                        for (var m = 0; m < u + 1; m++) t.points.push(n + Math.sin(h * m) * s, o + Math.cos(h * m) * a);
                        (0, b.default)(t, e, r), t.points = l;
                    }
                }
            };
            var i, n = t("./buildLine"), b = (i = n) && i.__esModule ? i : {
                default: i
            }, x = t("../../../const"), T = t("../../../utils");
        }, {
            "../../../const": 46,
            "../../../utils": 124,
            "./buildLine": 61
        } ],
        61: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e, r) {
                t.nativeLines ? function(t, e) {
                    var r = 0, i = t.points;
                    if (0 !== i.length) {
                        var n = e.points, o = i.length / 2, e = (0, j.hex2rgb)(t.lineColor), s = t.lineAlpha, a = e[0] * s, u = e[1] * s, h = e[2] * s;
                        for (r = 1; r < o; r++) {
                            var l = i[2 * (r - 1)], c = i[2 * (r - 1) + 1], d = i[2 * r], f = i[2 * r + 1];
                            n.push(l, c), n.push(a, u, h, s), n.push(d, f), n.push(a, u, h, s);
                        }
                    }
                }(t, r) : function(t, e) {
                    var r = t.points;
                    if (0 !== r.length) {
                        var i, n = new F.Point(r[0], r[1]), o = new F.Point(r[r.length - 2], r[r.length - 1]);
                        n.x === o.x && n.y === o.y && ((r = r.slice()).pop(), r.pop(), i = (o = new F.Point(r[r.length - 2], r[r.length - 1])).x + .5 * (n.x - o.x), 
                        o = o.y + .5 * (n.y - o.y), r.unshift(i, o), r.push(i, o));
                        var s = e.points, a = e.indices, u = r.length / 2, h = r.length, l = s.length / 6, c = t.lineWidth / 2, e = (0, 
                        j.hex2rgb)(t.lineColor), d = t.lineAlpha, f = e[0] * d, p = e[1] * d, v = e[2] * d, y = r[0], g = r[1], _ = r[2], m = r[3], b = 0, x = 0, T = -(g - m), w = y - _, E = 0, S = 0, O = 0, M = 0, P = Math.sqrt(T * T + w * w);
                        T /= P, w /= P, T *= c, w *= c, s.push(y - T, g - w, f, p, v, d), s.push(y + T, g + w, f, p, v, d);
                        for (var C = 1; C < u - 1; ++C) {
                            y = r[2 * (C - 1)], g = r[2 * (C - 1) + 1], _ = r[2 * C], m = r[2 * C + 1], b = r[2 * (C + 1)], 
                            x = r[2 * (C + 1) + 1], T = -(g - m), w = y - _, P = Math.sqrt(T * T + w * w), T /= P, 
                            w /= P, T *= c, w *= c, E = -(m - x), S = _ - b, P = Math.sqrt(E * E + S * S), E /= P, 
                            S /= P;
                            var R = -w + g - (-w + m), A = -T + _ - (-T + y), D = (-T + y) * (-w + m) - (-T + _) * (-w + g), I = -(S *= c) + x - (-S + m), L = -(E *= c) + _ - (-E + b), N = (-E + b) * (-S + m) - (-E + _) * (-S + x), k = R * L - I * A;
                            Math.abs(k) < .1 ? (k += 10.1, s.push(_ - T, m - w, f, p, v, d), s.push(_ + T, m + w, f, p, v, d)) : 196 * c * c < ((L = (A * N - L * D) / k) - _) * (L - _) + ((k = (I * D - R * N) / k) - m) * (k - m) ? (O = T - E, 
                            M = w - S, P = Math.sqrt(O * O + M * M), O /= P, M /= P, O *= c, M *= c, s.push(_ - O, m - M), 
                            s.push(f, p, v, d), s.push(_ + O, m + M), s.push(f, p, v, d), s.push(_ - O, m - M), 
                            s.push(f, p, v, d), h++) : (s.push(L, k), s.push(f, p, v, d), s.push(_ - (L - _), m - (k - m)), 
                            s.push(f, p, v, d));
                        }
                        y = r[2 * (u - 2)], g = r[2 * (u - 2) + 1], _ = r[2 * (u - 1)], m = r[2 * (u - 1) + 1], 
                        T = -(g - m), w = y - _, P = Math.sqrt(T * T + w * w), T /= P, w /= P, T *= c, w *= c, 
                        s.push(_ - T, m - w), s.push(f, p, v, d), s.push(_ + T, m + w), s.push(f, p, v, d), 
                        a.push(l);
                        for (var B = 0; B < h; ++B) a.push(l++);
                        a.push(l - 1);
                    }
                }(t, e);
            };
            var F = t("../../../math"), j = t("../../../utils");
        }, {
            "../../../math": 70,
            "../../../utils": 124
        } ],
        62: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e, r) {
                t.points = t.shape.points.slice();
                var i = t.points;
                if (t.fill && 6 <= i.length) {
                    for (var n = [], o = t.holes, s = 0; s < o.length; s++) {
                        var a = o[s];
                        n.push(i.length / 2), i = i.concat(a.points);
                    }
                    var u = e.points, h = e.indices, l = i.length / 2, c = (0, x.hex2rgb)(t.fillColor), d = t.fillAlpha, f = c[0] * d, p = c[1] * d, v = c[2] * d, y = (0, 
                    T.default)(i, n, 2);
                    if (!y) return;
                    for (var g = u.length / 6, _ = 0; _ < y.length; _ += 3) h.push(y[_] + g), h.push(y[_] + g), 
                    h.push(y[_ + 1] + g), h.push(y[_ + 2] + g), h.push(y[_ + 2] + g);
                    for (var m = 0; m < l; m++) u.push(i[2 * m], i[2 * m + 1], f, p, v, d);
                }
                0 < t.lineWidth && (0, b.default)(t, e, r);
            };
            var b = i(t("./buildLine")), x = t("../../../utils"), T = i(t("earcut"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
        }, {
            "../../../utils": 124,
            "./buildLine": 61,
            earcut: 2
        } ],
        63: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e, r) {
                var i = t.shape, n = i.x, o = i.y, s = i.width, a = i.height;
                {
                    var u, h, l, c, d;
                    t.fill && (f = (0, v.hex2rgb)(t.fillColor), u = t.fillAlpha, h = f[0] * u, l = f[1] * u, 
                    c = f[2] * u, d = e.points, i = e.indices, f = d.length / 6, d.push(n, o), d.push(h, l, c, u), 
                    d.push(n + s, o), d.push(h, l, c, u), d.push(n, o + a), d.push(h, l, c, u), d.push(n + s, o + a), 
                    d.push(h, l, c, u), i.push(f, f, 1 + f, 2 + f, 3 + f, 3 + f));
                }
                {
                    var f;
                    t.lineWidth && (f = t.points, t.points = [ n, o, n + s, o, n + s, o + a, n, o + a, n, o ], 
                    (0, p.default)(t, e, r), t.points = f);
                }
            };
            var i, n = t("./buildLine"), p = (i = n) && i.__esModule ? i : {
                default: i
            }, v = t("../../../utils");
        }, {
            "../../../utils": 124,
            "./buildLine": 61
        } ],
        64: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e, r) {
                var i = t.shape, n = i.x, o = i.y, s = i.width, a = i.height, i = i.radius, u = [];
                if (u.push(n, o + i), S(n, o + a - i, n, o + a, n + i, o + a, u), S(n + s - i, o + a, n + s, o + a, n + s, o + a - i, u), 
                S(n + s, o + i, n + s, o, n + s - i, o, u), S(n + i, o, n, o, n, o + i + 1e-10, u), 
                t.fill) {
                    for (var h = (0, E.hex2rgb)(t.fillColor), l = t.fillAlpha, c = h[0] * l, d = h[1] * l, f = h[2] * l, p = e.points, v = e.indices, y = p.length / 6, g = (0, 
                    T.default)(u, null, 2), _ = 0, m = g.length; _ < m; _ += 3) v.push(g[_] + y), v.push(g[_] + y), 
                    v.push(g[_ + 1] + y), v.push(g[_ + 2] + y), v.push(g[_ + 2] + y);
                    for (var b = 0, x = u.length; b < x; b++) p.push(u[b], u[++b], c, d, f, l);
                }
                t.lineWidth && (h = t.points, t.points = u, (0, w.default)(t, e, r), t.points = h);
            };
            var T = i(t("earcut")), w = i(t("./buildLine")), E = t("../../../utils");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function y(t, e, r) {
                return t + (e - t) * r;
            }
            function S(t, e, r, i, n, o, s) {
                for (var a, u, h, l, c, d, f, p = 6 < arguments.length && void 0 !== s ? s : [], v = 0; v <= 20; ++v) a = y(t, r, f = v / 20), 
                u = y(e, i, f), h = y(r, n, f), l = y(i, o, f), c = y(a, h, f), d = y(u, l, f), 
                p.push(c, d);
                return p;
            }
        }, {
            "../../../utils": 124,
            "./buildLine": 61,
            earcut: 2
        } ],
        65: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.autoDetectRenderer = r.Application = r.Filter = r.SpriteMaskFilter = r.Quad = r.RenderTarget = r.ObjectRenderer = r.WebGLManager = r.Shader = r.CanvasRenderTarget = r.TextureUvs = r.VideoBaseTexture = r.BaseRenderTexture = r.RenderTexture = r.BaseTexture = r.Texture = r.Spritesheet = r.CanvasGraphicsRenderer = r.GraphicsRenderer = r.GraphicsData = r.Graphics = r.TextMetrics = r.TextStyle = r.Text = r.SpriteRenderer = r.CanvasTinter = r.CanvasSpriteRenderer = r.Sprite = r.TransformBase = r.TransformStatic = r.Transform = r.Container = r.DisplayObject = r.Bounds = r.glCore = r.WebGLRenderer = r.CanvasRenderer = r.ticker = r.utils = r.settings = void 0;
            var i = t("./const");
            Object.keys(i).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t];
                    }
                });
            });
            var n = t("./math");
            Object.keys(n).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
                    enumerable: !0,
                    get: function() {
                        return n[t];
                    }
                });
            });
            var o = t("pixi-gl-core");
            Object.defineProperty(r, "glCore", {
                enumerable: !0,
                get: function() {
                    return Y(o).default;
                }
            });
            var s = t("./display/Bounds");
            Object.defineProperty(r, "Bounds", {
                enumerable: !0,
                get: function() {
                    return Y(s).default;
                }
            });
            var a = t("./display/DisplayObject");
            Object.defineProperty(r, "DisplayObject", {
                enumerable: !0,
                get: function() {
                    return Y(a).default;
                }
            });
            var u = t("./display/Container");
            Object.defineProperty(r, "Container", {
                enumerable: !0,
                get: function() {
                    return Y(u).default;
                }
            });
            var h = t("./display/Transform");
            Object.defineProperty(r, "Transform", {
                enumerable: !0,
                get: function() {
                    return Y(h).default;
                }
            });
            var l = t("./display/TransformStatic");
            Object.defineProperty(r, "TransformStatic", {
                enumerable: !0,
                get: function() {
                    return Y(l).default;
                }
            });
            var c = t("./display/TransformBase");
            Object.defineProperty(r, "TransformBase", {
                enumerable: !0,
                get: function() {
                    return Y(c).default;
                }
            });
            var d = t("./sprites/Sprite");
            Object.defineProperty(r, "Sprite", {
                enumerable: !0,
                get: function() {
                    return Y(d).default;
                }
            });
            var f = t("./sprites/canvas/CanvasSpriteRenderer");
            Object.defineProperty(r, "CanvasSpriteRenderer", {
                enumerable: !0,
                get: function() {
                    return Y(f).default;
                }
            });
            var p = t("./sprites/canvas/CanvasTinter");
            Object.defineProperty(r, "CanvasTinter", {
                enumerable: !0,
                get: function() {
                    return Y(p).default;
                }
            });
            var v = t("./sprites/webgl/SpriteRenderer");
            Object.defineProperty(r, "SpriteRenderer", {
                enumerable: !0,
                get: function() {
                    return Y(v).default;
                }
            });
            var y = t("./text/Text");
            Object.defineProperty(r, "Text", {
                enumerable: !0,
                get: function() {
                    return Y(y).default;
                }
            });
            var g = t("./text/TextStyle");
            Object.defineProperty(r, "TextStyle", {
                enumerable: !0,
                get: function() {
                    return Y(g).default;
                }
            });
            var _ = t("./text/TextMetrics");
            Object.defineProperty(r, "TextMetrics", {
                enumerable: !0,
                get: function() {
                    return Y(_).default;
                }
            });
            var m = t("./graphics/Graphics");
            Object.defineProperty(r, "Graphics", {
                enumerable: !0,
                get: function() {
                    return Y(m).default;
                }
            });
            var b = t("./graphics/GraphicsData");
            Object.defineProperty(r, "GraphicsData", {
                enumerable: !0,
                get: function() {
                    return Y(b).default;
                }
            });
            var x = t("./graphics/webgl/GraphicsRenderer");
            Object.defineProperty(r, "GraphicsRenderer", {
                enumerable: !0,
                get: function() {
                    return Y(x).default;
                }
            });
            var T = t("./graphics/canvas/CanvasGraphicsRenderer");
            Object.defineProperty(r, "CanvasGraphicsRenderer", {
                enumerable: !0,
                get: function() {
                    return Y(T).default;
                }
            });
            var w = t("./textures/Spritesheet");
            Object.defineProperty(r, "Spritesheet", {
                enumerable: !0,
                get: function() {
                    return Y(w).default;
                }
            });
            var E = t("./textures/Texture");
            Object.defineProperty(r, "Texture", {
                enumerable: !0,
                get: function() {
                    return Y(E).default;
                }
            });
            var S = t("./textures/BaseTexture");
            Object.defineProperty(r, "BaseTexture", {
                enumerable: !0,
                get: function() {
                    return Y(S).default;
                }
            });
            var O = t("./textures/RenderTexture");
            Object.defineProperty(r, "RenderTexture", {
                enumerable: !0,
                get: function() {
                    return Y(O).default;
                }
            });
            var M = t("./textures/BaseRenderTexture");
            Object.defineProperty(r, "BaseRenderTexture", {
                enumerable: !0,
                get: function() {
                    return Y(M).default;
                }
            });
            var P = t("./textures/VideoBaseTexture");
            Object.defineProperty(r, "VideoBaseTexture", {
                enumerable: !0,
                get: function() {
                    return Y(P).default;
                }
            });
            var C = t("./textures/TextureUvs");
            Object.defineProperty(r, "TextureUvs", {
                enumerable: !0,
                get: function() {
                    return Y(C).default;
                }
            });
            var R = t("./renderers/canvas/utils/CanvasRenderTarget");
            Object.defineProperty(r, "CanvasRenderTarget", {
                enumerable: !0,
                get: function() {
                    return Y(R).default;
                }
            });
            var A = t("./Shader");
            Object.defineProperty(r, "Shader", {
                enumerable: !0,
                get: function() {
                    return Y(A).default;
                }
            });
            var D = t("./renderers/webgl/managers/WebGLManager");
            Object.defineProperty(r, "WebGLManager", {
                enumerable: !0,
                get: function() {
                    return Y(D).default;
                }
            });
            var I = t("./renderers/webgl/utils/ObjectRenderer");
            Object.defineProperty(r, "ObjectRenderer", {
                enumerable: !0,
                get: function() {
                    return Y(I).default;
                }
            });
            var L = t("./renderers/webgl/utils/RenderTarget");
            Object.defineProperty(r, "RenderTarget", {
                enumerable: !0,
                get: function() {
                    return Y(L).default;
                }
            });
            var N = t("./renderers/webgl/utils/Quad");
            Object.defineProperty(r, "Quad", {
                enumerable: !0,
                get: function() {
                    return Y(N).default;
                }
            });
            var k = t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");
            Object.defineProperty(r, "SpriteMaskFilter", {
                enumerable: !0,
                get: function() {
                    return Y(k).default;
                }
            });
            var B = t("./renderers/webgl/filters/Filter");
            Object.defineProperty(r, "Filter", {
                enumerable: !0,
                get: function() {
                    return Y(B).default;
                }
            });
            var F = t("./Application");
            Object.defineProperty(r, "Application", {
                enumerable: !0,
                get: function() {
                    return Y(F).default;
                }
            });
            var j = t("./autoDetectRenderer");
            Object.defineProperty(r, "autoDetectRenderer", {
                enumerable: !0,
                get: function() {
                    return j.autoDetectRenderer;
                }
            });
            var U = H(t("./utils")), G = H(t("./ticker")), X = Y(t("./settings")), W = Y(t("./renderers/canvas/CanvasRenderer")), t = Y(t("./renderers/webgl/WebGLRenderer"));
            function H(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e;
            }
            function Y(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r.settings = X.default, r.utils = U, r.ticker = G, r.CanvasRenderer = W.default, 
            r.WebGLRenderer = t.default;
        }, {
            "./Application": 43,
            "./Shader": 44,
            "./autoDetectRenderer": 45,
            "./const": 46,
            "./display/Bounds": 47,
            "./display/Container": 48,
            "./display/DisplayObject": 49,
            "./display/Transform": 50,
            "./display/TransformBase": 51,
            "./display/TransformStatic": 52,
            "./graphics/Graphics": 53,
            "./graphics/GraphicsData": 54,
            "./graphics/canvas/CanvasGraphicsRenderer": 55,
            "./graphics/webgl/GraphicsRenderer": 57,
            "./math": 70,
            "./renderers/canvas/CanvasRenderer": 77,
            "./renderers/canvas/utils/CanvasRenderTarget": 79,
            "./renderers/webgl/WebGLRenderer": 84,
            "./renderers/webgl/filters/Filter": 86,
            "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 89,
            "./renderers/webgl/managers/WebGLManager": 93,
            "./renderers/webgl/utils/ObjectRenderer": 94,
            "./renderers/webgl/utils/Quad": 95,
            "./renderers/webgl/utils/RenderTarget": 96,
            "./settings": 101,
            "./sprites/Sprite": 102,
            "./sprites/canvas/CanvasSpriteRenderer": 103,
            "./sprites/canvas/CanvasTinter": 104,
            "./sprites/webgl/SpriteRenderer": 106,
            "./text/Text": 108,
            "./text/TextMetrics": 109,
            "./text/TextStyle": 110,
            "./textures/BaseRenderTexture": 111,
            "./textures/BaseTexture": 112,
            "./textures/RenderTexture": 113,
            "./textures/Spritesheet": 114,
            "./textures/Texture": 115,
            "./textures/TextureUvs": 116,
            "./textures/VideoBaseTexture": 117,
            "./ticker": 120,
            "./utils": 124,
            "pixi-gl-core": 12
        } ],
        66: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("./Matrix"), l = (i = n) && i.__esModule ? i : {
                default: i
            };
            var c = [ 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1 ], d = [ 0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1 ], f = [ 0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1 ], p = [ 1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1 ], v = [], y = [];
            function g(t) {
                return t < 0 ? -1 : 0 < t ? 1 : 0;
            }
            !function() {
                for (var t = 0; t < 16; t++) {
                    var e = [];
                    y.push(e);
                    for (var r = 0; r < 16; r++) for (var i = g(c[t] * c[r] + f[t] * d[r]), n = g(d[t] * c[r] + p[t] * d[r]), o = g(c[t] * f[r] + f[t] * p[r]), s = g(d[t] * f[r] + p[t] * p[r]), a = 0; a < 16; a++) if (c[a] === i && d[a] === n && f[a] === o && p[a] === s) {
                        e.push(a);
                        break;
                    }
                }
                for (var u = 0; u < 16; u++) {
                    var h = new l.default();
                    h.set(c[u], d[u], f[u], p[u], 0, 0), v.push(h);
                }
            }();
            var o = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MIRROR_HORIZONTAL: 12,
                uX: function(t) {
                    return c[t];
                },
                uY: function(t) {
                    return d[t];
                },
                vX: function(t) {
                    return f[t];
                },
                vY: function(t) {
                    return p[t];
                },
                inv: function(t) {
                    return 8 & t ? 15 & t : 7 & -t;
                },
                add: function(t, e) {
                    return y[t][e];
                },
                sub: function(t, e) {
                    return y[t][o.inv(e)];
                },
                rotate180: function(t) {
                    return 4 ^ t;
                },
                isSwapWidthHeight: function(t) {
                    return 2 == (3 & t);
                },
                byDirection: function(t, e) {
                    return 2 * Math.abs(t) <= Math.abs(e) ? 0 <= e ? o.S : o.N : 2 * Math.abs(e) <= Math.abs(t) ? 0 < t ? o.E : o.W : 0 < e ? 0 < t ? o.SE : o.SW : 0 < t ? o.NE : o.NW;
                },
                matrixAppendRotationInv: function(t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0, e = v[o.inv(e)];
                    e.tx = r, e.ty = i, t.append(e);
                }
            };
            r.default = o;
        }, {
            "./Matrix": 67
        } ],
        67: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("./Point"), a = (o = s) && o.__esModule ? o : {
                default: o
            };
            u.prototype.fromArray = function(t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
            }, u.prototype.set = function(t, e, r, i, n, o) {
                return this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, 
                this;
            }, u.prototype.toArray = function(t, e) {
                this.array || (this.array = new Float32Array(9));
                e = e || this.array;
                return t ? (e[0] = this.a, e[1] = this.b, e[2] = 0, e[3] = this.c, e[4] = this.d, 
                e[5] = 0, e[6] = this.tx, e[7] = this.ty) : (e[0] = this.a, e[1] = this.c, e[2] = this.tx, 
                e[3] = this.b, e[4] = this.d, e[5] = this.ty, e[6] = 0, e[7] = 0), e[8] = 1, e;
            }, u.prototype.apply = function(t, e) {
                e = e || new a.default();
                var r = t.x, t = t.y;
                return e.x = this.a * r + this.c * t + this.tx, e.y = this.b * r + this.d * t + this.ty, 
                e;
            }, u.prototype.applyInverse = function(t, e) {
                e = e || new a.default();
                var r = 1 / (this.a * this.d + this.c * -this.b), i = t.x, t = t.y;
                return e.x = this.d * r * i + -this.c * r * t + (this.ty * this.c - this.tx * this.d) * r, 
                e.y = this.a * r * t + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, 
                e;
            }, u.prototype.translate = function(t, e) {
                return this.tx += t, this.ty += e, this;
            }, u.prototype.scale = function(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, 
                this;
            }, u.prototype.rotate = function(t) {
                var e = Math.cos(t), r = Math.sin(t), i = this.a, n = this.c, t = this.tx;
                return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, 
                this.d = n * r + this.d * e, this.tx = t * e - this.ty * r, this.ty = t * r + this.ty * e, 
                this;
            }, u.prototype.append = function(t) {
                var e = this.a, r = this.b, i = this.c, n = this.d;
                return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, 
                this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, 
                this;
            }, u.prototype.setTransform = function(t, e, r, i, n, o, s, a, u) {
                var h = Math.sin(s), l = Math.cos(s), c = Math.cos(u), d = Math.sin(u), s = -Math.sin(a), u = Math.cos(a), a = l * n, n = h * n, h = -h * o, o = l * o;
                return this.a = c * a + d * h, this.b = c * n + d * o, this.c = s * a + u * h, this.d = s * n + u * o, 
                this.tx = t + (r * a + i * h), this.ty = e + (r * n + i * o), this;
            }, u.prototype.prepend = function(t) {
                var e, r, i = this.tx;
                return 1 === t.a && 0 === t.b && 0 === t.c && 1 === t.d || (e = this.a, r = this.c, 
                this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, 
                this.d = r * t.b + this.d * t.d), this.tx = i * t.a + this.ty * t.c + t.tx, this.ty = i * t.b + this.ty * t.d + t.ty, 
                this;
            }, u.prototype.decompose = function(t) {
                var e = this.a, r = this.b, i = this.c, n = this.d, o = -Math.atan2(-i, n), s = Math.atan2(r, e);
                return Math.abs(o + s) < 1e-5 ? (t.rotation = s, e < 0 && 0 <= n && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), 
                t.skew.x = t.skew.y = 0) : (t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + r * r), 
                t.scale.y = Math.sqrt(i * i + n * n), t.position.x = this.tx, t.position.y = this.ty, 
                t;
            }, u.prototype.invert = function() {
                var t = this.a, e = this.b, r = this.c, i = this.d, n = this.tx, o = t * i - e * r;
                return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, 
                this.ty = -(t * this.ty - e * n) / o, this;
            }, u.prototype.identity = function() {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, 
                this;
            }, u.prototype.clone = function() {
                var t = new u();
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
                t;
            }, u.prototype.copy = function(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
                t;
            }, i(u, null, [ {
                key: "IDENTITY",
                get: function() {
                    return new u();
                }
            }, {
                key: "TEMP_MATRIX",
                get: function() {
                    return new u();
                }
            } ]), i = u;
            function u() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u), this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, 
                this.array = null;
            }
            r.default = i;
        }, {
            "./Point": 69
        } ],
        68: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            o.prototype.set = function(t, e) {
                t = t || 0, e = e || (0 !== e ? t : 0);
                this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope));
            }, o.prototype.copy = function(t) {
                this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope));
            }, i(o, [ {
                key: "x",
                get: function() {
                    return this._x;
                },
                set: function(t) {
                    this._x !== t && (this._x = t, this.cb.call(this.scope));
                }
            }, {
                key: "y",
                get: function() {
                    return this._y;
                },
                set: function(t) {
                    this._y !== t && (this._y = t, this.cb.call(this.scope));
                }
            } ]), i = o;
            function o(t, e) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, o), this._x = r, this._y = i, this.cb = t, this.scope = e;
            }
            r.default = i;
        }, {} ],
        69: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (n.prototype.clone = function() {
                return new n(this.x, this.y);
            }, n.prototype.copy = function(t) {
                this.set(t.x, t.y);
            }, n.prototype.equals = function(t) {
                return t.x === this.x && t.y === this.y;
            }, n.prototype.set = function(t, e) {
                this.x = t || 0, this.y = e || (0 !== e ? this.x : 0);
            }, n);
            function n() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.x = t, this.y = e;
            }
            r.default = i;
        }, {} ],
        70: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./Point");
            Object.defineProperty(r, "Point", {
                enumerable: !0,
                get: function() {
                    return d(i).default;
                }
            });
            var n = t("./ObservablePoint");
            Object.defineProperty(r, "ObservablePoint", {
                enumerable: !0,
                get: function() {
                    return d(n).default;
                }
            });
            var o = t("./Matrix");
            Object.defineProperty(r, "Matrix", {
                enumerable: !0,
                get: function() {
                    return d(o).default;
                }
            });
            var s = t("./GroupD8");
            Object.defineProperty(r, "GroupD8", {
                enumerable: !0,
                get: function() {
                    return d(s).default;
                }
            });
            var a = t("./shapes/Circle");
            Object.defineProperty(r, "Circle", {
                enumerable: !0,
                get: function() {
                    return d(a).default;
                }
            });
            var u = t("./shapes/Ellipse");
            Object.defineProperty(r, "Ellipse", {
                enumerable: !0,
                get: function() {
                    return d(u).default;
                }
            });
            var h = t("./shapes/Polygon");
            Object.defineProperty(r, "Polygon", {
                enumerable: !0,
                get: function() {
                    return d(h).default;
                }
            });
            var l = t("./shapes/Rectangle");
            Object.defineProperty(r, "Rectangle", {
                enumerable: !0,
                get: function() {
                    return d(l).default;
                }
            });
            var c = t("./shapes/RoundedRectangle");
            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "RoundedRectangle", {
                enumerable: !0,
                get: function() {
                    return d(c).default;
                }
            });
        }, {
            "./GroupD8": 66,
            "./Matrix": 67,
            "./ObservablePoint": 68,
            "./Point": 69,
            "./shapes/Circle": 71,
            "./shapes/Ellipse": 72,
            "./shapes/Polygon": 73,
            "./shapes/Rectangle": 74,
            "./shapes/RoundedRectangle": 75
        } ],
        71: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("./Rectangle"), o = (i = n) && i.__esModule ? i : {
                default: i
            }, s = t("../../const");
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.radius);
            }, a.prototype.contains = function(t, e) {
                if (this.radius <= 0) return !1;
                var r = this.radius * this.radius, t = this.x - t, e = this.y - e;
                return (t *= t) + (e *= e) <= r;
            }, a.prototype.getBounds = function() {
                return new o.default(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);
            }, t = a;
            function a() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a), this.x = t, this.y = e, this.radius = r, this.type = s.SHAPES.CIRC;
            }
            r.default = t;
        }, {
            "../../const": 46,
            "./Rectangle": 74
        } ],
        72: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("./Rectangle"), o = (i = n) && i.__esModule ? i : {
                default: i
            }, s = t("../../const");
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.width, this.height);
            }, a.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                t = (t - this.x) / this.width, e = (e - this.y) / this.height;
                return (t *= t) + (e *= e) <= 1;
            }, a.prototype.getBounds = function() {
                return new o.default(this.x - this.width, this.y - this.height, this.width, this.height);
            }, t = a;
            function a() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a), this.x = t, this.y = e, this.width = r, this.height = i, this.type = s.SHAPES.ELIP;
            }
            r.default = t;
        }, {
            "../../const": 46,
            "./Rectangle": 74
        } ],
        73: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../Point"), s = (i = n) && i.__esModule ? i : {
                default: i
            }, a = t("../../const");
            u.prototype.clone = function() {
                return new u(this.points.slice());
            }, u.prototype.close = function() {
                var t = this.points;
                t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1]);
            }, u.prototype.contains = function(t, e) {
                for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
                    var s = this.points[2 * n], a = this.points[2 * n + 1], u = this.points[2 * o], h = this.points[2 * o + 1];
                    e < a != e < h && t < (e - a) / (h - a) * (u - s) + s && (r = !r);
                }
                return r;
            }, t = u;
            function u() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                if (!function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u), (e = Array.isArray(e[0]) ? e[0] : e)[0] instanceof s.default) {
                    for (var i = [], n = 0, o = e.length; n < o; n++) i.push(e[n].x, e[n].y);
                    e = i;
                }
                this.closed = !0, this.points = e, this.type = a.SHAPES.POLY;
            }
            r.default = t;
        }, {
            "../../const": 46,
            "../Point": 69
        } ],
        74: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = t("../../const");
            s.prototype.clone = function() {
                return new s(this.x, this.y, this.width, this.height);
            }, s.prototype.copy = function(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, 
                this;
            }, s.prototype.contains = function(t, e) {
                return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height);
            }, s.prototype.pad = function(t, e) {
                t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, 
                this.height += 2 * e;
            }, s.prototype.fit = function(t) {
                this.x < t.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = t.x), 
                this.y < t.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = t.y), 
                this.x + this.width > t.x + t.width && (this.width = t.width - this.x, this.width < 0 && (this.width = 0)), 
                this.y + this.height > t.y + t.height && (this.height = t.height - this.y, this.height < 0 && (this.height = 0));
            }, s.prototype.enlarge = function(t) {
                var e = Math.min(this.x, t.x), r = Math.max(this.x + this.width, t.x + t.width), i = Math.min(this.y, t.y), t = Math.max(this.y + this.height, t.y + t.height);
                this.x = e, this.width = r - e, this.y = i, this.height = t - i;
            }, i(s, [ {
                key: "left",
                get: function() {
                    return this.x;
                }
            }, {
                key: "right",
                get: function() {
                    return this.x + this.width;
                }
            }, {
                key: "top",
                get: function() {
                    return this.y;
                }
            }, {
                key: "bottom",
                get: function() {
                    return this.y + this.height;
                }
            } ], [ {
                key: "EMPTY",
                get: function() {
                    return new s(0, 0, 0, 0);
                }
            } ]), i = s;
            function s() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(i), 
                this.type = o.SHAPES.RECT;
            }
            r.default = i;
        }, {
            "../../const": 46
        } ],
        75: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var o = t("../../const");
            s.prototype.clone = function() {
                return new s(this.x, this.y, this.width, this.height, this.radius);
            }, s.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                    if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
                    var r = t - (this.x + this.radius), i = e - (this.y + this.radius), n = this.radius * this.radius;
                    if (r * r + i * i <= n) return !0;
                    if ((r = t - (this.x + this.width - this.radius)) * r + i * i <= n) return !0;
                    if (r * r + (i = e - (this.y + this.height - this.radius)) * i <= n) return !0;
                    if ((r = t - (this.x + this.radius)) * r + i * i <= n) return !0;
                }
                return !1;
            }, t = s;
            function s() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 20;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.x = t, this.y = e, this.width = r, this.height = i, this.radius = n, 
                this.type = o.SHAPES.RREC;
            }
            r.default = t;
        }, {
            "../../const": 46
        } ],
        76: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = t("../utils"), s = t("../math"), a = t("../const"), u = c(t("../settings")), h = c(t("../display/Container")), l = c(t("../textures/RenderTexture")), t = c(t("eventemitter3"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var d, f = new s.Matrix(), i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(p, d = t.default), p.prototype.resize = function(t, e) {
                this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, 
                this.view.height = e * this.resolution, this.autoResize && (this.view.style.width = t + "px", 
                this.view.style.height = e + "px");
            }, p.prototype.generateTexture = function(t, e, r) {
                var i = t.getLocalBounds(), r = l.default.create(0 | i.width, 0 | i.height, e, r);
                return f.tx = -i.x, f.ty = -i.y, this.render(t, r, !1, f, !0), r;
            }, p.prototype.destroy = function(t) {
                t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = a.RENDERER_TYPE.UNKNOWN, 
                this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, 
                this.autoResize = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, 
                this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, 
                this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null;
            }, i(p, [ {
                key: "width",
                get: function() {
                    return this.view.width;
                }
            }, {
                key: "height",
                get: function() {
                    return this.view.height;
                }
            }, {
                key: "backgroundColor",
                get: function() {
                    return this._backgroundColor;
                },
                set: function(t) {
                    this._backgroundColor = t, this._backgroundColorString = (0, o.hex2string)(t), (0, 
                    o.hex2rgb)(t, this._backgroundColorRgba);
                }
            } ]), p);
            function p(t, e, r, i) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, p);
                var n = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, d.call(this));
                return (0, o.sayHello)(t), "number" == typeof e && (e = Object.assign({
                    width: e,
                    height: r || u.default.RENDER_OPTIONS.height
                }, i)), e = Object.assign({}, u.default.RENDER_OPTIONS, e), n.options = e, n.type = a.RENDERER_TYPE.UNKNOWN, 
                n.screen = new s.Rectangle(0, 0, e.width, e.height), n.view = e.view || document.createElement("canvas"), 
                n.resolution = e.resolution || u.default.RESOLUTION, n.transparent = e.transparent, 
                n.autoResize = e.autoResize || !1, n.blendModes = null, n.preserveDrawingBuffer = e.preserveDrawingBuffer, 
                n.clearBeforeRender = e.clearBeforeRender, n.roundPixels = e.roundPixels, n._backgroundColor = 0, 
                n._backgroundColorRgba = [ 0, 0, 0, 0 ], n._backgroundColorString = "#000000", n.backgroundColor = e.backgroundColor || n._backgroundColor, 
                n._tempDisplayObjectParent = new h.default(), n._lastObjectRendered = n._tempDisplayObjectParent, 
                n;
            }
            r.default = i;
        }, {
            "../const": 46,
            "../display/Container": 48,
            "../math": 70,
            "../settings": 101,
            "../textures/RenderTexture": 113,
            "../utils": 124,
            eventemitter3: 3
        } ],
        77: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = l(t("../SystemRenderer")), n = l(t("./utils/CanvasMaskManager")), a = l(t("./utils/CanvasRenderTarget")), o = l(t("./utils/mapCanvasBlendModesToPixi")), s = t("../../utils"), u = t("../../const"), h = l(t("../../settings"));
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var c, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(d, c = i.default), d.prototype.render = function(t, e, r, i, n) {
                var o, s;
                this.view && (this.renderingToScreen = !e, this.emit("prerender"), o = this.resolution, 
                e ? ((e = e.baseTexture || e)._canvasRenderTarget || (e._canvasRenderTarget = new a.default(e.width, e.height, e.resolution), 
                e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, 
                this.resolution = e._canvasRenderTarget.resolution) : this.context = this.rootContext, 
                s = this.context, e || (this._lastObjectRendered = t), n || (e = t.parent, n = this._tempDisplayObjectParent.transform.worldTransform, 
                i ? (i.copy(n), this._tempDisplayObjectParent.transform._worldID = -1) : n.identity(), 
                t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e), s.setTransform(1, 0, 0, 1, 0, 0), 
                s.globalAlpha = 1, this._activeBlendMode = u.BLEND_MODES.NORMAL, s.globalCompositeOperation = this.blendModes[u.BLEND_MODES.NORMAL], 
                navigator.isCocoonJS && this.view.screencanvas && (s.fillStyle = "black", s.clear()), 
                (void 0 !== r ? r : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? s.clearRect(0, 0, this.width, this.height) : (s.fillStyle = this._backgroundColorString, 
                s.fillRect(0, 0, this.width, this.height))), r = this.context, this.context = s, 
                t.renderCanvas(this), this.context = r, this.resolution = o, this.emit("postrender"));
            }, d.prototype.clear = function(t) {
                var e = this.context;
                t = t || this._backgroundColorString, !this.transparent && t ? (e.fillStyle = t, 
                e.fillRect(0, 0, this.width, this.height)) : e.clearRect(0, 0, this.width, this.height);
            }, d.prototype.setBlendMode = function(t) {
                this._activeBlendMode !== t && (this._activeBlendMode = t, this.context.globalCompositeOperation = this.blendModes[t]);
            }, d.prototype.destroy = function(t) {
                this.destroyPlugins(), c.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, 
                this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null;
            }, d.prototype.resize = function(t, e) {
                c.prototype.resize.call(this, t, e), this.smoothProperty && (this.rootContext[this.smoothProperty] = h.default.SCALE_MODE === u.SCALE_MODES.LINEAR);
            }, d.prototype.invalidateBlendMode = function() {
                this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation);
            }, d);
            function d(t, e, r) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, d);
                r = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, c.call(this, "Canvas", t, e, r));
                return r.type = u.RENDERER_TYPE.CANVAS, r.rootContext = r.view.getContext("2d", {
                    alpha: r.transparent
                }), r.context = r.rootContext, r.refresh = !0, r.maskManager = new n.default(r), 
                r.smoothProperty = "imageSmoothingEnabled", r.rootContext.imageSmoothingEnabled || (r.rootContext.webkitImageSmoothingEnabled ? r.smoothProperty = "webkitImageSmoothingEnabled" : r.rootContext.mozImageSmoothingEnabled ? r.smoothProperty = "mozImageSmoothingEnabled" : r.rootContext.oImageSmoothingEnabled ? r.smoothProperty = "oImageSmoothingEnabled" : r.rootContext.msImageSmoothingEnabled && (r.smoothProperty = "msImageSmoothingEnabled")), 
                r.initPlugins(), r.blendModes = (0, o.default)(), r._activeBlendMode = null, r.renderingToScreen = !1, 
                r.resize(r.options.width, r.options.height), r;
            }
            r.default = i, s.pluginTarget.mixin(i);
        }, {
            "../../const": 46,
            "../../settings": 101,
            "../../utils": 124,
            "../SystemRenderer": 76,
            "./utils/CanvasMaskManager": 78,
            "./utils/CanvasRenderTarget": 79,
            "./utils/mapCanvasBlendModesToPixi": 81
        } ],
        78: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var y = t("../../../const");
            i.prototype.pushMask = function(t) {
                var e = this.renderer;
                e.context.save();
                var r = t.alpha, i = t.transform.worldTransform, n = e.resolution;
                e.context.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n), 
                t._texture || (this.renderGraphicsShape(t), e.context.clip()), t.worldAlpha = r;
            }, i.prototype.renderGraphicsShape = function(t) {
                var e = this.renderer.context, r = t.graphicsData.length;
                if (0 !== r) {
                    e.beginPath();
                    for (var i = 0; i < r; i++) {
                        var n, o, s, a, u, h, l, c, d = t.graphicsData[i], f = d.shape;
                        if (d.type === y.SHAPES.POLY) {
                            var p = f.points;
                            e.moveTo(p[0], p[1]);
                            for (var v = 1; v < p.length / 2; v++) e.lineTo(p[2 * v], p[2 * v + 1]);
                            p[0] === p[p.length - 2] && p[1] === p[p.length - 1] && e.closePath();
                        } else d.type === y.SHAPES.RECT ? (e.rect(f.x, f.y, f.width, f.height), e.closePath()) : d.type === y.SHAPES.CIRC ? (e.arc(f.x, f.y, f.radius, 0, 2 * Math.PI), 
                        e.closePath()) : d.type === y.SHAPES.ELIP ? (o = (a = 2 * f.width) / 2 * .5522848, 
                        h = (c = 2 * f.height) / 2 * .5522848, s = (l = f.x - a / 2) + a, u = (n = f.y - c / 2) + c, 
                        a = l + a / 2, e.moveTo(l, c = n + c / 2), e.bezierCurveTo(l, c - h, a - o, n, a, n), 
                        e.bezierCurveTo(a + o, n, s, c - h, s, c), e.bezierCurveTo(s, c + h, a + o, u, a, u), 
                        e.bezierCurveTo(a - o, u, l, c + h, l, c), e.closePath()) : d.type === y.SHAPES.RREC && (u = f.x, 
                        h = f.y, l = f.width, c = f.height, d = f.radius, f = Math.min(l, c) / 2 | 0, e.moveTo(u, h + (d = f < d ? f : d)), 
                        e.lineTo(u, h + c - d), e.quadraticCurveTo(u, h + c, u + d, h + c), e.lineTo(u + l - d, h + c), 
                        e.quadraticCurveTo(u + l, h + c, u + l, h + c - d), e.lineTo(u + l, h + d), e.quadraticCurveTo(u + l, h, u + l - d, h), 
                        e.lineTo(u + d, h), e.quadraticCurveTo(u, h, u, h + d), e.closePath());
                    }
                }
            }, i.prototype.popMask = function(t) {
                t.context.restore(), t.invalidateBlendMode();
            }, i.prototype.destroy = function() {}, t = i;
            function i(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, i), this.renderer = t;
            }
            r.default = t;
        }, {
            "../../../const": 46
        } ],
        79: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("../../../settings"), a = (o = s) && o.__esModule ? o : {
                default: o
            };
            u.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }, u.prototype.resize = function(t, e) {
                this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution;
            }, u.prototype.destroy = function() {
                this.context = null, this.canvas = null;
            }, i(u, [ {
                key: "width",
                get: function() {
                    return this.canvas.width;
                },
                set: function(t) {
                    this.canvas.width = t;
                }
            }, {
                key: "height",
                get: function() {
                    return this.canvas.height;
                },
                set: function(t) {
                    this.canvas.height = t;
                }
            } ]), i = u;
            function u(t, e, r) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), 
                this.resolution = r || a.default.RESOLUTION, this.resize(t, e);
            }
            r.default = i;
        }, {
            "../../../settings": 101
        } ],
        80: [ function(t, e, r) {
            "use strict";
            function i(t) {
                var e = document.createElement("canvas");
                e.width = 6, e.height = 1;
                var r = e.getContext("2d");
                return r.fillStyle = t, r.fillRect(0, 0, 6, 1), e;
            }
            r.__esModule = !0, r.default = function() {
                if ("undefined" == typeof document) return !1;
                var t = i("#ff00ff"), e = i("#ffff00"), r = document.createElement("canvas");
                r.width = 6, r.height = 1;
                r = r.getContext("2d");
                r.globalCompositeOperation = "multiply", r.drawImage(t, 0, 0), r.drawImage(e, 2, 0);
                r = r.getImageData(2, 0, 1, 1);
                if (!r) return !1;
                r = r.data;
                return 255 === r[0] && 0 === r[1] && 0 === r[2];
            };
        }, {} ],
        81: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                (0, s.default)() ? (t[n.BLEND_MODES.NORMAL] = "source-over", t[n.BLEND_MODES.ADD] = "lighter", 
                t[n.BLEND_MODES.MULTIPLY] = "multiply", t[n.BLEND_MODES.SCREEN] = "screen", t[n.BLEND_MODES.OVERLAY] = "overlay", 
                t[n.BLEND_MODES.DARKEN] = "darken", t[n.BLEND_MODES.LIGHTEN] = "lighten", t[n.BLEND_MODES.COLOR_DODGE] = "color-dodge", 
                t[n.BLEND_MODES.COLOR_BURN] = "color-burn", t[n.BLEND_MODES.HARD_LIGHT] = "hard-light", 
                t[n.BLEND_MODES.SOFT_LIGHT] = "soft-light", t[n.BLEND_MODES.DIFFERENCE] = "difference", 
                t[n.BLEND_MODES.EXCLUSION] = "exclusion", t[n.BLEND_MODES.HUE] = "hue", t[n.BLEND_MODES.SATURATION] = "saturate", 
                t[n.BLEND_MODES.COLOR] = "color", t[n.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[n.BLEND_MODES.NORMAL] = "source-over", 
                t[n.BLEND_MODES.ADD] = "lighter", t[n.BLEND_MODES.MULTIPLY] = "source-over", t[n.BLEND_MODES.SCREEN] = "source-over", 
                t[n.BLEND_MODES.OVERLAY] = "source-over", t[n.BLEND_MODES.DARKEN] = "source-over", 
                t[n.BLEND_MODES.LIGHTEN] = "source-over", t[n.BLEND_MODES.COLOR_DODGE] = "source-over", 
                t[n.BLEND_MODES.COLOR_BURN] = "source-over", t[n.BLEND_MODES.HARD_LIGHT] = "source-over", 
                t[n.BLEND_MODES.SOFT_LIGHT] = "source-over", t[n.BLEND_MODES.DIFFERENCE] = "source-over", 
                t[n.BLEND_MODES.EXCLUSION] = "source-over", t[n.BLEND_MODES.HUE] = "source-over", 
                t[n.BLEND_MODES.SATURATION] = "source-over", t[n.BLEND_MODES.COLOR] = "source-over", 
                t[n.BLEND_MODES.LUMINOSITY] = "source-over");
                return t[n.BLEND_MODES.NORMAL_NPM] = t[n.BLEND_MODES.NORMAL], t[n.BLEND_MODES.ADD_NPM] = t[n.BLEND_MODES.ADD], 
                t[n.BLEND_MODES.SCREEN_NPM] = t[n.BLEND_MODES.SCREEN], t;
            };
            var i, n = t("../../../const"), o = t("./canUseNewCanvasBlendModes"), s = (i = o) && i.__esModule ? i : {
                default: i
            };
        }, {
            "../../../const": 46,
            "./canUseNewCanvasBlendModes": 80
        } ],
        82: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../../const"), o = t("../../settings"), s = (i = o) && i.__esModule ? i : {
                default: i
            };
            a.prototype.update = function() {
                this.count++, this.mode !== n.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, 
                this.run()));
            }, a.prototype.run = function() {
                for (var t = this.renderer.textureManager, e = t._managedTextures, r = !1, i = 0; i < e.length; i++) {
                    var n = e[i];
                    !n._glRenderTargets && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), 
                    r = !(e[i] = null));
                }
                if (r) {
                    for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
                    e.length = o;
                }
            }, a.prototype.unload = function(t) {
                var e = this.renderer.textureManager;
                t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture, !0);
                for (var r = t.children.length - 1; 0 <= r; r--) this.unload(t.children[r]);
            }, t = a;
            function a(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a), this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = s.default.GC_MAX_IDLE, 
                this.checkCountMax = s.default.GC_MAX_CHECK_COUNT, this.mode = s.default.GC_MODE;
            }
            r.default = t;
        }, {
            "../../const": 46,
            "../../settings": 101
        } ],
        83: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, s = t("pixi-gl-core"), a = t("../../const"), n = t("./utils/RenderTarget"), u = (i = n) && i.__esModule ? i : {
                default: i
            }, o = t("../../utils");
            h.prototype.bindTexture = function() {}, h.prototype.getTexture = function() {}, 
            h.prototype.updateTexture = function(t, e) {
                var r = this.gl, i = !!t._glRenderTargets;
                if (!t.hasLoaded) return null;
                var n = this.renderer.boundTextures;
                if (void 0 === e) for (var o = e = 0; o < n.length; ++o) if (n[o] === t) {
                    e = o;
                    break;
                }
                n[e] = t, r.activeTexture(r.TEXTURE0 + e);
                r = t._glTextures[this.renderer.CONTEXT_UID];
                return r ? i ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : r.upload(t.source) : (i ? ((i = new u.default(this.gl, t.width, t.height, t.scaleMode, t.resolution)).resize(t.width, t.height), 
                r = (t._glRenderTargets[this.renderer.CONTEXT_UID] = i).texture) : ((r = new s.GLTexture(this.gl, null, null, null, null)).bind(e), 
                r.premultiplyAlpha = !0, r.upload(t.source)), t._glTextures[this.renderer.CONTEXT_UID] = r, 
                t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), 
                this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && r.enableMipmap(), t.wrapMode === a.WRAP_MODES.CLAMP ? r.enableWrapClamp() : t.wrapMode === a.WRAP_MODES.REPEAT ? r.enableWrapRepeat() : r.enableWrapMirrorRepeat()) : r.enableWrapClamp(), 
                t.scaleMode === a.SCALE_MODES.NEAREST ? r.enableNearestScaling() : r.enableLinearScaling()), 
                r;
            }, h.prototype.destroyTexture = function(t, e) {
                var r, i, n;
                (t = t.baseTexture || t).hasLoaded && (r = this.renderer.CONTEXT_UID, i = t._glTextures, 
                n = t._glRenderTargets, i[r] && (this.renderer.unbindTexture(t), i[r].destroy(), 
                t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), 
                delete i[r], e || -1 !== (t = this._managedTextures.indexOf(t)) && (0, o.removeItems)(this._managedTextures, t, 1)), 
                n && n[r] && (n[r].destroy(), delete n[r]));
            }, h.prototype.removeAll = function() {
                for (var t = 0; t < this._managedTextures.length; ++t) {
                    var e = this._managedTextures[t];
                    e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID];
                }
            }, h.prototype.destroy = function() {
                for (var t = 0; t < this._managedTextures.length; ++t) {
                    var e = this._managedTextures[t];
                    this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this);
                }
                this._managedTextures = null;
            }, t = h;
            function h(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h), this.renderer = t, this.gl = t.gl, this._managedTextures = [];
            }
            r.default = t;
        }, {
            "../../const": 46,
            "../../utils": 124,
            "./utils/RenderTarget": 96,
            "pixi-gl-core": 12
        } ],
        84: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = _(t("../SystemRenderer")), n = _(t("./managers/MaskManager")), o = _(t("./managers/StencilManager")), s = _(t("./managers/FilterManager")), a = _(t("./utils/RenderTarget")), u = _(t("./utils/ObjectRenderer")), h = _(t("./TextureManager")), l = _(t("../../textures/BaseTexture")), c = _(t("./TextureGarbageCollector")), d = _(t("./WebGLState")), f = _(t("./utils/mapWebGLDrawModesToPixi")), p = _(t("./utils/validateContext")), v = t("../../utils"), y = _(t("pixi-gl-core")), g = t("../../const");
            function _(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var m, b = 0, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(x, m = i.default), x.prototype._initContext = function() {
                var t = this.gl;
                t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
                var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                this._activeShader = null, this._activeVao = null, this.boundTextures = new Array(e), 
                this.emptyTextures = new Array(e), this.textureManager = new h.default(this), this.textureGC = new c.default(this), 
                this.state.resetToDefault(), this.rootRenderTarget = new a.default(t, this.width, this.height, null, this.resolution, !0), 
                this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget);
                var r = new y.default.GLTexture.fromData(t, null, 1, 1), i = {
                    _glTextures: {}
                };
                i._glTextures[this.CONTEXT_UID] = {};
                for (var n = 0; n < e; n++) {
                    var o = new l.default();
                    o._glTextures[this.CONTEXT_UID] = r, this.boundTextures[n] = i, this.emptyTextures[n] = o, 
                    this.bindTexture(null, n);
                }
                this.emit("context", t), this.resize(this.screen.width, this.screen.height);
            }, x.prototype.render = function(t, e, r, i, n) {
                this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost() && (this._nextTextureLocation = 0, 
                e || (this._lastObjectRendered = t), n || (n = t.parent, t.parent = this._tempDisplayObjectParent, 
                t.updateTransform(), t.parent = n), this.bindRenderTexture(e, i), this.currentRenderer.start(), 
                (void 0 !== r ? r : this.clearBeforeRender) && this._activeRenderTarget.clear(), 
                t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender"));
            }, x.prototype.setObjectRenderer = function(t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, 
                this.currentRenderer.start());
            }, x.prototype.flush = function() {
                this.setObjectRenderer(this.emptyRenderer);
            }, x.prototype.resize = function(t, e) {
                i.default.prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), 
                this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), 
                this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)));
            }, x.prototype.setBlendMode = function(t) {
                this.state.setBlendMode(t);
            }, x.prototype.clear = function(t) {
                this._activeRenderTarget.clear(t);
            }, x.prototype.setTransform = function(t) {
                this._activeRenderTarget.transform = t;
            }, x.prototype.clearRenderTexture = function(t, e) {
                t = t.baseTexture._glRenderTargets[this.CONTEXT_UID];
                return t && t.clear(e), this;
            }, x.prototype.bindRenderTexture = function(t, e) {
                var r, i = void 0;
                return t ? ((r = t.baseTexture)._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(r, 0), 
                this.unbindTexture(r), (i = r._glRenderTargets[this.CONTEXT_UID]).setFrame(t.frame)) : i = this.rootRenderTarget, 
                i.transform = e, this.bindRenderTarget(i), this;
            }, x.prototype.bindRenderTarget = function(t) {
                return t !== this._activeRenderTarget && ((this._activeRenderTarget = t).activate(), 
                this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), 
                this.stencilManager.setMaskStack(t.stencilMaskStack)), this;
            }, x.prototype.bindShader = function(t, e) {
                return this._activeShader !== t && ((this._activeShader = t).bind(), !1 !== e && (t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0))), 
                this;
            }, x.prototype.bindTexture = function(t, e, r) {
                if ((t = (t = t || this.emptyTextures[e]).baseTexture || t).touched = this.textureGC.count, 
                r) e = e || 0; else {
                    for (var i = 0; i < this.boundTextures.length; i++) if (this.boundTextures[i] === t) return i;
                    void 0 === e && (this._nextTextureLocation++, this._nextTextureLocation %= this.boundTextures.length, 
                    e = this.boundTextures.length - this._nextTextureLocation - 1);
                }
                var n = this.gl, r = t._glTextures[this.CONTEXT_UID];
                return r ? (this.boundTextures[e] = t, n.activeTexture(n.TEXTURE0 + e), n.bindTexture(n.TEXTURE_2D, r.texture)) : this.textureManager.updateTexture(t, e), 
                e;
            }, x.prototype.unbindTexture = function(t) {
                var e = this.gl;
                t = t.baseTexture || t;
                for (var r = 0; r < this.boundTextures.length; r++) this.boundTextures[r] === t && (this.boundTextures[r] = this.emptyTextures[r], 
                e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));
                return this;
            }, x.prototype.createVao = function() {
                return new y.default.VertexArrayObject(this.gl, this.state.attribState);
            }, x.prototype.bindVao = function(t) {
                return this._activeVao === t || (t ? t.bind() : this._activeVao && this._activeVao.unbind(), 
                this._activeVao = t), this;
            }, x.prototype.reset = function() {
                return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, 
                this.rootRenderTarget.activate(), this.state.resetToDefault(), this;
            }, x.prototype.handleContextLost = function(t) {
                t.preventDefault();
            }, x.prototype.handleContextRestored = function() {
                this.textureManager.removeAll(), this._initContext();
            }, x.prototype.destroy = function(t) {
                this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), 
                this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), 
                this.textureManager.destroy(), m.prototype.destroy.call(this, t), this.uid = 0, 
                this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), 
                this.maskManager = null, this.filterManager = null, this.textureManager = null, 
                this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, 
                this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), 
                this.gl = null;
            }, x);
            function x(t, e, r) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, x);
                r = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, m.call(this, "WebGL", t, e, r));
                return r.legacy = r.options.legacy, r.legacy && (y.default.VertexArrayObject.FORCE_NATIVE = !0), 
                r.type = g.RENDERER_TYPE.WEBGL, r.handleContextLost = r.handleContextLost.bind(r), 
                r.handleContextRestored = r.handleContextRestored.bind(r), r.view.addEventListener("webglcontextlost", r.handleContextLost, !1), 
                r.view.addEventListener("webglcontextrestored", r.handleContextRestored, !1), r._contextOptions = {
                    alpha: r.transparent,
                    antialias: r.options.antialias,
                    premultipliedAlpha: r.transparent && "notMultiplied" !== r.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: r.options.preserveDrawingBuffer,
                    powerPreference: r.options.powerPreference
                }, r._backgroundColorRgba[3] = r.transparent ? 0 : 1, r.maskManager = new n.default(r), 
                r.stencilManager = new o.default(r), r.emptyRenderer = new u.default(r), r.currentRenderer = r.emptyRenderer, 
                r.initPlugins(), r.options.context && (0, p.default)(r.options.context), r.gl = r.options.context || y.default.createContext(r.view, r._contextOptions), 
                r.CONTEXT_UID = b++, r.state = new d.default(r.gl), r.renderingToScreen = !0, r.boundTextures = null, 
                r._activeShader = null, r._activeVao = null, r._activeRenderTarget = null, r._initContext(), 
                r.filterManager = new s.default(r), r.drawModes = (0, f.default)(r.gl), r._nextTextureLocation = 0, 
                r.setBlendMode(0), r;
            }
            r.default = t, v.pluginTarget.mixin(t);
        }, {
            "../../const": 46,
            "../../textures/BaseTexture": 112,
            "../../utils": 124,
            "../SystemRenderer": 76,
            "./TextureGarbageCollector": 82,
            "./TextureManager": 83,
            "./WebGLState": 85,
            "./managers/FilterManager": 90,
            "./managers/MaskManager": 91,
            "./managers/StencilManager": 92,
            "./utils/ObjectRenderer": 94,
            "./utils/RenderTarget": 96,
            "./utils/mapWebGLDrawModesToPixi": 99,
            "./utils/validateContext": 100,
            "pixi-gl-core": 12
        } ],
        85: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("./utils/mapWebGLBlendModesToPixi"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            s.prototype.push = function() {
                var t = (t = this.stack[this.stackIndex]) || (this.stack[this.stackIndex] = new Uint8Array(16));
                ++this.stackIndex;
                for (var e = 0; e < this.activeState.length; e++) t[e] = this.activeState[e];
            }, s.prototype.pop = function() {
                var t = this.stack[--this.stackIndex];
                this.setState(t);
            }, s.prototype.setState = function(t) {
                this.setBlend(t[0]), this.setDepthTest(t[1]), this.setFrontFace(t[2]), this.setCullFace(t[3]), 
                this.setBlendMode(t[4]);
            }, s.prototype.setBlend = function(t) {
                this.activeState[0] !== (t = t ? 1 : 0) && (this.activeState[0] = t, this.gl[t ? "enable" : "disable"](this.gl.BLEND));
            }, s.prototype.setBlendMode = function(t) {
                t !== this.activeState[4] && (this.activeState[4] = t, 2 === (t = this.blendModes[t]).length ? this.gl.blendFunc(t[0], t[1]) : this.gl.blendFuncSeparate(t[0], t[1], t[2], t[3]));
            }, s.prototype.setDepthTest = function(t) {
                this.activeState[1] !== (t = t ? 1 : 0) && (this.activeState[1] = t, this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST));
            }, s.prototype.setCullFace = function(t) {
                this.activeState[3] !== (t = t ? 1 : 0) && (this.activeState[3] = t, this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE));
            }, s.prototype.setFrontFace = function(t) {
                this.activeState[2] !== (t = t ? 1 : 0) && (this.activeState[2] = t, this.gl.frontFace(this.gl[t ? "CW" : "CCW"]));
            }, s.prototype.resetAttributes = function() {
                for (var t = 0; t < this.attribState.tempAttribState.length; t++) this.attribState.tempAttribState[t] = 0;
                for (var e = 0; e < this.attribState.attribState.length; e++) this.attribState.attribState[e] = 0;
                for (var r = 1; r < this.maxAttribs; r++) this.gl.disableVertexAttribArray(r);
            }, s.prototype.resetToDefault = function() {
                this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                for (var t = 0; t < this.activeState.length; ++t) this.activeState[t] = 32;
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState);
            }, t = s;
            function s(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), 
                this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = t, this.maxAttribs = t.getParameter(t.MAX_VERTEX_ATTRIBS), 
                this.attribState = {
                    tempAttribState: new Array(this.maxAttribs),
                    attribState: new Array(this.maxAttribs)
                }, this.blendModes = (0, o.default)(t), this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object");
            }
            r.default = t;
        }, {
            "./utils/mapWebGLBlendModesToPixi": 98
        } ],
        86: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = h(t("./extractUniformsFromSrc")), s = t("../../../utils"), a = t("../../../const"), u = h(t("../../../settings"));
            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var l = {}, i = (c.prototype.apply = function(t, e, r, i, n) {
                t.applyFilter(this, e, r, i);
            }, i(c, [ {
                key: "blendMode",
                get: function() {
                    return this._blendMode;
                },
                set: function(t) {
                    this._blendMode = t;
                }
            } ], [ {
                key: "defaultVertexSrc",
                get: function() {
                    return [ "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}" ].join("\n");
                }
            }, {
                key: "defaultFragmentSrc",
                get: function() {
                    return [ "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}" ].join("\n");
                }
            } ]), c);
            function c(t, e, r) {
                for (var i in !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, c), this.vertexSrc = t || c.defaultVertexSrc, this.fragmentSrc = e || c.defaultFragmentSrc, 
                this._blendMode = a.BLEND_MODES.NORMAL, this.uniformData = r || (0, o.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), 
                this.uniforms = {}, this.uniformData) this.uniforms[i] = this.uniformData[i].value;
                this.glShaders = {}, l[this.vertexSrc + this.fragmentSrc] || (l[this.vertexSrc + this.fragmentSrc] = (0, 
                s.uid)()), this.glShaderKey = l[this.vertexSrc + this.fragmentSrc], this.padding = 4, 
                this.resolution = u.default.RESOLUTION, this.enabled = !0, this.autoFit = !0;
            }
            r.default = i;
        }, {
            "../../../const": 46,
            "../../../settings": 101,
            "../../../utils": 124,
            "./extractUniformsFromSrc": 87
        } ],
        87: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e, r) {
                t = o(t), e = o(e);
                return Object.assign(t, e);
            };
            var i, n = t("pixi-gl-core");
            var h = ((i = n) && i.__esModule ? i : {
                default: i
            }).default.shader.defaultValue;
            function o(t) {
                for (var e, r = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), i = {}, n = t.replace(/\s+/g, " ").split(/\s*;\s*/), o = 0; o < n.length; o++) {
                    var s, a, u = n[o].trim();
                    -1 < u.indexOf("uniform") && (s = (a = u.split(" "))[1], -(u = 1) < (a = a[2]).indexOf("[") && (a = (e = a.split(/\[|]/))[0], 
                    u *= Number(e[1])), a.match(r) || (i[a] = {
                        value: h(s, u),
                        name: a,
                        type: s
                    }));
                }
                return i;
            }
        }, {
            "pixi-gl-core": 12
        } ],
        88: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.calculateScreenSpaceMatrix = function(t, e, r) {
                t = t.identity();
                return t.translate(e.x / r.width, e.y / r.height), t.scale(r.width, r.height), t;
            }, r.calculateNormalizedScreenSpaceMatrix = function(t, e, r) {
                var i = t.identity();
                i.translate(e.x / r.width, e.y / r.height);
                t = r.width / e.width, e = r.height / e.height;
                return i.scale(t, e), i;
            }, r.calculateSpriteMatrix = function(t, e, r, i) {
                var n = i.worldTransform.copy(a.Matrix.TEMP_MATRIX), o = i._texture.baseTexture, s = t.identity(), t = r.height / r.width;
                s.translate(e.x / r.width, e.y / r.height), s.scale(1, t);
                e = r.width / o.width, r = r.height / o.height;
                return n.tx /= o.width * e, n.ty /= o.width * e, n.invert(), s.prepend(n), s.scale(1, 1 / t), 
                s.scale(e, r), s.translate(i.anchor.x, i.anchor.y), s;
            };
            var a = t("../../../math");
        }, {
            "../../../math": 70
        } ],
        89: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../Filter"), o = (i = n) && i.__esModule ? i : {
                default: i
            }, s = t("../../../../math");
            t("path");
            var a, o = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(u, a = o.default), u.prototype.apply = function(t, e, r) {
                var i = this.maskSprite;
                this.uniforms.mask = i._texture, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, i), 
                this.uniforms.alpha = i.worldAlpha, t.applyFilter(this, e, r);
            }, u);
            function u(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u);
                var e = new s.Matrix(), r = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, a.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
                return t.renderable = !1, r.maskSprite = t, r.maskMatrix = e, r;
            }
            r.default = o;
        }, {
            "../../../../math": 70,
            "../Filter": 86,
            path: 23
        } ],
        90: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = l(t("./WebGLManager")), s = l(t("../utils/RenderTarget")), n = l(t("../utils/Quad")), o = t("../../../math"), a = l(t("../../../Shader")), u = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../filters/filterTransforms")), h = l(t("bit-twiddle"));
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function d() {
                c(this, d), this.renderTarget = null, this.sourceFrame = new o.Rectangle(), this.destinationFrame = new o.Rectangle(), 
                this.filters = [], this.target = null, this.resolution = 1;
            }
            var f, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(p, f = i.default), p.prototype.pushFilter = function(t, e) {
                var r = this.renderer, i = this.filterData;
                i || (i = this.renderer._activeRenderTarget.filterStack, (h = new d()).sourceFrame = h.destinationFrame = this.renderer._activeRenderTarget.size, 
                h.renderTarget = r._activeRenderTarget, this.renderer._activeRenderTarget.filterData = i = {
                    index: 0,
                    stack: [ h ]
                }, this.filterData = i);
                var n = (n = i.stack[++i.index]) || (i.stack[i.index] = new d()), o = e[0].resolution, s = 0 | e[0].padding, a = t.filterArea || t.getBounds(!0), u = n.sourceFrame, h = n.destinationFrame;
                u.x = (a.x * o | 0) / o, u.y = (a.y * o | 0) / o, u.width = (a.width * o | 0) / o, 
                u.height = (a.height * o | 0) / o, i.stack[0].renderTarget.transform || e[0].autoFit && u.fit(i.stack[0].destinationFrame), 
                u.pad(s), h.width = u.width, h.height = u.height;
                s = this.getPotRenderTarget(r.gl, u.width, u.height, o);
                n.target = t, n.filters = e, n.resolution = o, (n.renderTarget = s).setFrame(h, u), 
                r.bindRenderTarget(s), s.clear();
            }, p.prototype.popFilter = function() {
                var t = this.filterData, e = t.stack[t.index - 1], r = t.stack[t.index];
                this.quad.map(r.renderTarget.size, r.sourceFrame).upload();
                var i = r.filters;
                if (1 === i.length) i[0].apply(this, r.renderTarget, e.renderTarget, !1, r), this.freePotRenderTarget(r.renderTarget); else {
                    var n = r.renderTarget;
                    (a = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, r.resolution)).setFrame(r.destinationFrame, r.sourceFrame), 
                    a.clear();
                    for (var o = 0, o = 0; o < i.length - 1; ++o) {
                        i[o].apply(this, n, a, !0, r);
                        var s = n, n = a, a = s;
                    }
                    i[o].apply(this, n, e.renderTarget, !1, r), this.freePotRenderTarget(n), this.freePotRenderTarget(a);
                }
                t.index--, 0 === t.index && (this.filterData = null);
            }, p.prototype.applyFilter = function(t, e, r, i) {
                var n = this.renderer, o = n.gl, s = t.glShaders[n.CONTEXT_UID];
                s || (t.glShaderKey ? (s = this.shaderCache[t.glShaderKey]) || (s = new a.default(this.gl, t.vertexSrc, t.fragmentSrc), 
                t.glShaders[n.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = s) : s = t.glShaders[n.CONTEXT_UID] = new a.default(this.gl, t.vertexSrc, t.fragmentSrc), 
                n.bindVao(null), this.quad.initVao(s)), n.bindVao(this.quad.vao), n.bindRenderTarget(r), 
                i && (o.disable(o.SCISSOR_TEST), n.clear(), o.enable(o.SCISSOR_TEST)), r === n.maskManager.scissorRenderTarget && n.maskManager.pushScissorMask(null, n.maskManager.scissorData), 
                n.bindShader(s);
                r = this.renderer.emptyTextures[0];
                this.renderer.boundTextures[0] = r, this.syncUniforms(s, t), n.state.setBlendMode(t.blendMode), 
                o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, e.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), 
                o.bindTexture(o.TEXTURE_2D, r._glTextures[this.renderer.CONTEXT_UID].texture);
            }, p.prototype.syncUniforms = function(t, e) {
                var r, i, n, o = e.uniformData, s = e.uniforms, a = 1, e = void 0;
                for (i in t.uniforms.filterArea && (e = this.filterData.stack[this.filterData.index], 
                (r = t.uniforms.filterArea)[0] = e.renderTarget.size.width, r[1] = e.renderTarget.size.height, 
                r[2] = e.sourceFrame.x, r[3] = e.sourceFrame.y, t.uniforms.filterArea = r), t.uniforms.filterClamp && (e = e || this.filterData.stack[this.filterData.index], 
                (r = t.uniforms.filterClamp)[0] = 0, r[1] = 0, r[2] = (e.sourceFrame.width - 1) / e.renderTarget.size.width, 
                r[3] = (e.sourceFrame.height - 1) / e.renderTarget.size.height, t.uniforms.filterClamp = r), 
                o) "sampler2D" === o[i].type && 0 !== s[i] ? (s[i].baseTexture ? t.uniforms[i] = this.renderer.bindTexture(s[i].baseTexture, a) : (t.uniforms[i] = a, 
                n = this.renderer.gl, this.renderer.boundTextures[a] = this.renderer.emptyTextures[a], 
                n.activeTexture(n.TEXTURE0 + a), s[i].texture.bind()), a++) : "mat3" === o[i].type ? void 0 !== s[i].a ? t.uniforms[i] = s[i].toArray(!0) : t.uniforms[i] = s[i] : "vec2" === o[i].type ? void 0 !== s[i].x ? ((n = t.uniforms[i] || new Float32Array(2))[0] = s[i].x, 
                n[1] = s[i].y, t.uniforms[i] = n) : t.uniforms[i] = s[i] : "float" === o[i].type && t.uniforms.data[i].value === o[i] || (t.uniforms[i] = s[i]);
            }, p.prototype.getRenderTarget = function(t, e) {
                var r = this.filterData.stack[this.filterData.index], e = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, e || r.resolution);
                return e.setFrame(r.destinationFrame, r.sourceFrame), e;
            }, p.prototype.returnRenderTarget = function(t) {
                this.freePotRenderTarget(t);
            }, p.prototype.calculateScreenSpaceMatrix = function(t) {
                var e = this.filterData.stack[this.filterData.index];
                return u.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size);
            }, p.prototype.calculateNormalizedScreenSpaceMatrix = function(t) {
                var e = this.filterData.stack[this.filterData.index];
                return u.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame);
            }, p.prototype.calculateSpriteMatrix = function(t, e) {
                var r = this.filterData.stack[this.filterData.index];
                return u.calculateSpriteMatrix(t, r.sourceFrame, r.renderTarget.size, e);
            }, p.prototype.destroy = function() {
                this.shaderCache = {}, this.emptyPool();
            }, p.prototype.getPotRenderTarget = function(t, e, r, i) {
                var n = (65535 & (e = h.default.nextPow2(e * i))) << 16 | 65535 & (r = h.default.nextPow2(r * i));
                this.pool[n] || (this.pool[n] = []);
                var o = this.pool[n].pop();
                return o || (n = this.renderer.boundTextures[0], t.activeTexture(t.TEXTURE0), o = new s.default(t, e, r, null, 1), 
                t.bindTexture(t.TEXTURE_2D, n._glTextures[this.renderer.CONTEXT_UID].texture)), 
                o.resolution = i, o.defaultFrame.width = o.size.width = e / i, o.defaultFrame.height = o.size.height = r / i, 
                o;
            }, p.prototype.emptyPool = function() {
                for (var t in this.pool) {
                    var e = this.pool[t];
                    if (e) for (var r = 0; r < e.length; r++) e[r].destroy(!0);
                }
                this.pool = {};
            }, p.prototype.freePotRenderTarget = function(t) {
                var e = t.size.width * t.resolution, r = t.size.height * t.resolution;
                this.pool[(65535 & e) << 16 | 65535 & r].push(t);
            }, p);
            function p(t) {
                c(this, p);
                var e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, f.call(this, t));
                return e.gl = e.renderer.gl, e.quad = new n.default(e.gl, t.state.attribState), 
                e.shaderCache = {}, e.pool = {}, e.filterData = null, e;
            }
            r.default = i;
        }, {
            "../../../Shader": 44,
            "../../../math": 70,
            "../filters/filterTransforms": 88,
            "../utils/Quad": 95,
            "../utils/RenderTarget": 96,
            "./WebGLManager": 93,
            "bit-twiddle": 1
        } ],
        91: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = o(t("./WebGLManager")), n = o(t("../filters/spriteMask/SpriteMaskFilter"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var s, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = i.default), a.prototype.pushMask = function(t, e) {
                var r;
                e.texture ? this.pushSpriteMask(t, e) : this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect() ? (r = e.worldTransform, 
                r = Math.atan2(r.b, r.a), (r = Math.round(r * (180 / Math.PI))) % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)) : this.pushStencilMask(e);
            }, a.prototype.popMask = function(t, e) {
                e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e);
            }, a.prototype.pushSpriteMask = function(t, e) {
                var r = this.alphaMaskPool[this.alphaMaskIndex];
                (r = r || (this.alphaMaskPool[this.alphaMaskIndex] = [ new n.default(e) ]))[0].resolution = this.renderer.resolution, 
                r[0].maskSprite = e, t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, r), 
                this.alphaMaskIndex++;
            }, a.prototype.popSpriteMask = function() {
                this.renderer.filterManager.popFilter(), this.alphaMaskIndex--;
            }, a.prototype.pushStencilMask = function(t) {
                this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t);
            }, a.prototype.popStencilMask = function() {
                this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil();
            }, a.prototype.pushScissorMask = function(t, e) {
                e.renderable = !0;
                var r = this.renderer._activeRenderTarget, i = e.getBounds();
                i.fit(r.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                var n = this.renderer.resolution;
                this.renderer.gl.scissor(i.x * n, (r.root ? r.size.height - i.y - i.height : i.y) * n, i.width * n, i.height * n), 
                this.scissorRenderTarget = r, this.scissorData = e, this.scissor = !0;
            }, a.prototype.popScissorMask = function() {
                this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                var t = this.renderer.gl;
                t.disable(t.SCISSOR_TEST);
            }, a);
            function a(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, t));
                return t.scissor = !1, t.scissorData = null, t.scissorRenderTarget = null, t.enableScissor = !0, 
                t.alphaMaskPool = [], t.alphaMaskIndex = 0, t;
            }
            r.default = i;
        }, {
            "../filters/spriteMask/SpriteMaskFilter": 89,
            "./WebGLManager": 93
        } ],
        92: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("./WebGLManager"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            var s, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = o.default), a.prototype.setMaskStack = function(t) {
                this.stencilMaskStack = t;
                var e = this.renderer.gl;
                0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST);
            }, a.prototype.pushStencil = function(t) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                var e = this.renderer.gl, r = this.stencilMaskStack.length;
                0 === r && e.enable(e.STENCIL_TEST), this.stencilMaskStack.push(t), e.colorMask(!1, !1, !1, !1), 
                e.stencilFunc(e.EQUAL, r, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.INCR), 
                this.renderer.plugins.graphics.render(t), this._useCurrent();
            }, a.prototype.popStencil = function() {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                var t = this.renderer.gl, e = this.stencilMaskStack.pop();
                0 === this.stencilMaskStack.length ? (t.disable(t.STENCIL_TEST), t.clear(t.STENCIL_BUFFER_BIT), 
                t.clearStencil(0)) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), 
                this.renderer.plugins.graphics.render(e), this._useCurrent());
            }, a.prototype._useCurrent = function() {
                var t = this.renderer.gl;
                t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), 
                t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
            }, a.prototype._getBitwiseMask = function() {
                return (1 << this.stencilMaskStack.length) - 1;
            }, a.prototype.destroy = function() {
                o.default.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null;
            }, a);
            function a(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, t));
                return t.stencilMaskStack = null, t;
            }
            r.default = t;
        }, {
            "./WebGLManager": 93
        } ],
        93: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (n.prototype.onContextChange = function() {}, n.prototype.destroy = function() {
                this.renderer.off("context", this.onContextChange, this), this.renderer = null;
            }, n);
            function n(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.renderer = t, this.renderer.on("context", this.onContextChange, this);
            }
            r.default = i;
        }, {} ],
        94: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../managers/WebGLManager"), t = (i = n) && i.__esModule ? i : {
                default: i
            };
            var o, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(s, o = t.default), s.prototype.start = function() {}, s.prototype.stop = function() {
                this.flush();
            }, s.prototype.flush = function() {}, s.prototype.render = function(t) {}, s);
            function s() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, o.apply(this, arguments));
            }
            r.default = t;
        }, {
            "../managers/WebGLManager": 93
        } ],
        95: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = o(t("pixi-gl-core")), n = o(t("../../../utils/createIndicesForQuads"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            s.prototype.initVao = function(t) {
                this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8);
            }, s.prototype.map = function(t, e) {
                var r, i;
                return this.uvs[0] = 0, this.uvs[1] = 0, this.uvs[2] = 0 + e.width / t.width, this.uvs[3] = 0, 
                this.uvs[4] = 0 + e.width / t.width, this.uvs[5] = 0 + e.height / t.height, this.uvs[6] = 0, 
                this.uvs[7] = 0 + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, 
                this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, 
                this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, 
                this;
            }, s.prototype.upload = function() {
                for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], 
                this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
                return this.vertexBuffer.upload(this.interleaved), this;
            }, s.prototype.destroy = function() {
                var t = this.gl;
                t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer);
            }, t = s;
            function s(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.gl = t, this.vertices = new Float32Array([ -1, -1, 1, -1, 1, 1, -1, 1 ]), 
                this.uvs = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), this.interleaved = new Float32Array(16);
                for (var r = 0; r < 4; r++) this.interleaved[4 * r] = this.vertices[2 * r], this.interleaved[4 * r + 1] = this.vertices[2 * r + 1], 
                this.interleaved[4 * r + 2] = this.uvs[2 * r], this.interleaved[4 * r + 3] = this.uvs[2 * r + 1];
                this.indices = (0, n.default)(1), this.vertexBuffer = i.default.GLBuffer.createVertexBuffer(t, this.interleaved, t.STATIC_DRAW), 
                this.indexBuffer = i.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), 
                this.vao = new i.default.VertexArrayObject(t, e);
            }
            r.default = t;
        }, {
            "../../../utils/createIndicesForQuads": 122,
            "pixi-gl-core": 12
        } ],
        96: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, s = t("../../../math"), a = t("../../../const"), n = t("../../../settings"), u = (i = n) && i.__esModule ? i : {
                default: i
            }, h = t("pixi-gl-core");
            l.prototype.clear = function(t) {
                t = t || this.clearColor;
                this.frameBuffer.clear(t[0], t[1], t[2], t[3]);
            }, l.prototype.attachStencilBuffer = function() {
                this.root || this.frameBuffer.enableStencil();
            }, l.prototype.setFrame = function(t, e) {
                this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || this.destinationFrame;
            }, l.prototype.activate = function() {
                var t = this.gl;
                this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), 
                this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), 
                t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), 
                t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
            }, l.prototype.calculateProjection = function(t, e) {
                var r = this.projectionMatrix;
                e = e || t, r.identity(), this.root ? (r.a = 1 / t.width * 2, r.d = -1 / t.height * 2, 
                r.tx = -1 - e.x * r.a, r.ty = 1 - e.y * r.d) : (r.a = 1 / t.width * 2, r.d = 1 / t.height * 2, 
                r.tx = -1 - e.x * r.a, r.ty = -1 - e.y * r.d);
            }, l.prototype.resize = function(t, e) {
                e |= 0, this.size.width === (t |= 0) && this.size.height === e || (this.size.width = t, 
                this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, 
                this.frameBuffer.resize(t * this.resolution, e * this.resolution), e = this.frame || this.size, 
                this.calculateProjection(e));
            }, l.prototype.destroy = function() {
                this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null;
            }, t = l;
            function l(t, e, r, i, n, o) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, l), this.gl = t, this.frameBuffer = null, this.texture = null, this.clearColor = [ 0, 0, 0, 0 ], 
                this.size = new s.Rectangle(0, 0, 1, 1), this.resolution = n || u.default.RESOLUTION, 
                this.projectionMatrix = new s.Matrix(), this.transform = null, this.frame = null, 
                this.defaultFrame = new s.Rectangle(), this.destinationFrame = null, this.sourceFrame = null, 
                this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = void 0 !== i ? i : u.default.SCALE_MODE, 
                this.root = o, this.root ? (this.frameBuffer = new h.GLFramebuffer(t, 100, 100), 
                this.frameBuffer.framebuffer = null) : (this.frameBuffer = h.GLFramebuffer.createRGBA(t, 100, 100), 
                this.scaleMode === a.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), 
                this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(e, r);
            }
            r.default = t;
        }, {
            "../../../const": 46,
            "../../../math": 70,
            "../../../settings": 101,
            "pixi-gl-core": 12
        } ],
        97: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e) {
                var r = !e;
                if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
                {
                    var i;
                    r && ((i = document.createElement("canvas")).width = 1, i.height = 1, e = s.default.createContext(i));
                }
                var n = e.createShader(e.FRAGMENT_SHADER);
                for (;;) {
                    var o = a.replace(/%forloop%/gi, function(t) {
                        for (var e = "", r = 0; r < t; ++r) 0 < r && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
                        return e;
                    }(t));
                    if (e.shaderSource(n, o), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS)) break;
                    t = t / 2 | 0;
                }
                r && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext();
                return t;
            };
            var i, n = t("pixi-gl-core"), s = (i = n) && i.__esModule ? i : {
                default: i
            };
            var a = [ "precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}" ].join("\n");
        }, {
            "pixi-gl-core": 12
        } ],
        98: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                return e[i.BLEND_MODES.NORMAL] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.ADD] = [ t.ONE, t.DST_ALPHA ], 
                e[i.BLEND_MODES.MULTIPLY] = [ t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.SCREEN] = [ t.ONE, t.ONE_MINUS_SRC_COLOR ], 
                e[i.BLEND_MODES.OVERLAY] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.DARKEN] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
                e[i.BLEND_MODES.LIGHTEN] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.COLOR_DODGE] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
                e[i.BLEND_MODES.COLOR_BURN] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.HARD_LIGHT] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
                e[i.BLEND_MODES.SOFT_LIGHT] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.DIFFERENCE] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
                e[i.BLEND_MODES.EXCLUSION] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.HUE] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
                e[i.BLEND_MODES.SATURATION] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.COLOR] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
                e[i.BLEND_MODES.LUMINOSITY] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[i.BLEND_MODES.NORMAL_NPM] = [ t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
                e[i.BLEND_MODES.ADD_NPM] = [ t.SRC_ALPHA, t.DST_ALPHA, t.ONE, t.DST_ALPHA ], e[i.BLEND_MODES.SCREEN_NPM] = [ t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_COLOR ], 
                e;
            };
            var i = t("../../../const");
        }, {
            "../../../const": 46
        } ],
        99: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return e[i.DRAW_MODES.POINTS] = t.POINTS, e[i.DRAW_MODES.LINES] = t.LINES, e[i.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, 
                e[i.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[i.DRAW_MODES.TRIANGLES] = t.TRIANGLES, 
                e[i.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[i.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN, 
                e;
            };
            var i = t("../../../const");
        }, {
            "../../../const": 46
        } ],
        100: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                t.getContextAttributes().stencil;
            };
        }, {} ],
        101: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = n(t("./utils/maxRecommendedTextures")), t = n(t("./utils/canUploadSameBuffer"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r.default = {
                TARGET_FPMS: .06,
                MIPMAP_TEXTURES: !0,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                SPRITE_MAX_TEXTURES: (0, i.default)(32),
                SPRITE_BATCH_SIZE: 4096,
                RETINA_PREFIX: /@([0-9\.]+)x/,
                RENDER_OPTIONS: {
                    view: null,
                    antialias: !1,
                    forceFXAA: !1,
                    autoResize: !1,
                    transparent: !1,
                    backgroundColor: 0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1,
                    roundPixels: !1,
                    width: 800,
                    height: 600,
                    legacy: !1
                },
                TRANSFORM_MODE: 0,
                GC_MODE: 0,
                GC_MAX_IDLE: 3600,
                GC_MAX_CHECK_COUNT: 600,
                WRAP_MODE: 0,
                SCALE_MODE: 0,
                PRECISION_VERTEX: "highp",
                PRECISION_FRAGMENT: "mediump",
                CAN_UPLOAD_SAME_BUFFER: (0, t.default)()
            };
        }, {
            "./utils/canUploadSameBuffer": 121,
            "./utils/maxRecommendedTextures": 126
        } ],
        102: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = t("../math"), s = t("../utils"), a = t("../const"), u = h(t("../textures/Texture")), t = h(t("../display/Container"));
            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var l, c = new o.Point(), i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(d, l = t.default), d.prototype._onTextureUpdate = function() {
                this._textureID = -1, this._textureTrimmedID = -1, this._width && (this.scale.x = (0, 
                s.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = (0, 
                s.sign)(this.scale.y) * this._height / this._texture.orig.height);
            }, d.prototype._onAnchorUpdate = function() {
                this._transformID = -1, this._transformTrimmedID = -1;
            }, d.prototype.calculateVertices = function() {
                var t, e, r, i, n, o, s, a, u, h, l, c, d, f;
                this._transformID === this.transform._worldID && this._textureID === this._texture._updateID || (this._transformID = this.transform._worldID, 
                this._textureID = this._texture._updateID, d = this._texture, t = (f = this.transform.worldTransform).a, 
                e = f.b, r = f.c, i = f.d, n = f.tx, o = f.ty, s = this.vertexData, a = d.trim, 
                u = d.orig, h = this._anchor, d = f = c = l = 0, f = a ? (l = (c = a.x - h._x * u.width) + a.width, 
                (d = a.y - h._y * u.height) + a.height) : (l = (c = -h._x * u.width) + u.width, 
                (d = -h._y * u.height) + u.height), s[0] = t * c + r * d + n, s[1] = i * d + e * c + o, 
                s[2] = t * l + r * d + n, s[3] = i * d + e * l + o, s[4] = t * l + r * f + n, s[5] = i * f + e * l + o, 
                s[6] = t * c + r * f + n, s[7] = i * f + e * c + o);
            }, d.prototype.calculateTrimmedVertices = function() {
                if (this.vertexTrimmedData) {
                    if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
                } else this.vertexTrimmedData = new Float32Array(8);
                this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                var t = this._texture, e = this.vertexTrimmedData, r = t.orig, i = this._anchor, n = this.transform.worldTransform, o = n.a, s = n.b, a = n.c, u = n.d, h = n.tx, l = n.ty, t = -i._x * r.width, n = t + r.width, i = -i._y * r.height, r = i + r.height;
                e[0] = o * t + a * i + h, e[1] = u * i + s * t + l, e[2] = o * n + a * i + h, e[3] = u * i + s * n + l, 
                e[4] = o * n + a * r + h, e[5] = u * r + s * n + l, e[6] = o * t + a * r + h, e[7] = u * r + s * t + l;
            }, d.prototype._renderWebGL = function(t) {
                this.calculateVertices(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this);
            }, d.prototype._renderCanvas = function(t) {
                t.plugins[this.pluginName].render(this);
            }, d.prototype._calculateBounds = function() {
                var t = this._texture.trim, e = this._texture.orig;
                !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), 
                this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
            }, d.prototype.getLocalBounds = function(t) {
                return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, 
                this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), 
                this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new o.Rectangle()), 
                t = this._localBoundsRect), this._bounds.getRectangle(t)) : l.prototype.getLocalBounds.call(this, t);
            }, d.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, c);
                var e = this._texture.orig.width, r = this._texture.orig.height, i = -e * this.anchor.x, t = 0;
                return c.x >= i && c.x < i + e && (t = -r * this.anchor.y, c.y >= t && c.y < t + r);
            }, d.prototype.destroy = function(t) {
                l.prototype.destroy.call(this, t), this._anchor = null, ("boolean" == typeof t ? t : t && t.texture) && (t = "boolean" == typeof t ? t : t && t.baseTexture, 
                this._texture.destroy(!!t)), this._texture = null, this.shader = null;
            }, d.from = function(t) {
                return new d(u.default.from(t));
            }, d.fromFrame = function(t) {
                var e = s.TextureCache[t];
                if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return new d(e);
            }, d.fromImage = function(t, e, r) {
                return new d(u.default.fromImage(t, e, r));
            }, i(d, [ {
                key: "width",
                get: function() {
                    return Math.abs(this.scale.x) * this._texture.orig.width;
                },
                set: function(t) {
                    var e = (0, s.sign)(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t;
                }
            }, {
                key: "height",
                get: function() {
                    return Math.abs(this.scale.y) * this._texture.orig.height;
                },
                set: function(t) {
                    var e = (0, s.sign)(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t;
                }
            }, {
                key: "anchor",
                get: function() {
                    return this._anchor;
                },
                set: function(t) {
                    this._anchor.copy(t);
                }
            }, {
                key: "tint",
                get: function() {
                    return this._tint;
                },
                set: function(t) {
                    this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16);
                }
            }, {
                key: "texture",
                get: function() {
                    return this._texture;
                },
                set: function(t) {
                    this._texture !== t && (this._texture = t, this.cachedTint = 16777215, this._textureID = -1, 
                    this._textureTrimmedID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)));
                }
            } ]), d);
            function d(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, d);
                var e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, l.call(this));
                return e._anchor = new o.ObservablePoint(e._onAnchorUpdate, e), e._texture = null, 
                e._width = 0, e._height = 0, e._tint = null, e._tintRGB = null, e.tint = 16777215, 
                e.blendMode = a.BLEND_MODES.NORMAL, e.shader = null, e.cachedTint = 16777215, e.texture = t || u.default.EMPTY, 
                e.vertexData = new Float32Array(8), e.vertexTrimmedData = null, e._transformID = -1, 
                e._textureID = -1, e._transformTrimmedID = -1, e._textureTrimmedID = -1, e.pluginName = "sprite", 
                e;
            }
            r.default = i;
        }, {
            "../const": 46,
            "../display/Container": 48,
            "../math": 70,
            "../textures/Texture": 115,
            "../utils": 124
        } ],
        103: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = n(t("../../renderers/canvas/CanvasRenderer")), h = t("../../const"), l = t("../../math"), c = n(t("./CanvasTinter"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var d = new l.Matrix(), t = (o.prototype.render = function(t) {
                var e, r = t._texture, i = this.renderer, n = r._frame.width, o = r._frame.height, s = t.transform.worldTransform, a = 0, u = 0;
                r.orig.width <= 0 || r.orig.height <= 0 || !r.baseTexture.source || (i.setBlendMode(t.blendMode), 
                r.valid && (i.context.globalAlpha = t.worldAlpha, e = r.baseTexture.scaleMode === h.SCALE_MODES.LINEAR, 
                i.smoothProperty && i.context[i.smoothProperty] !== e && (i.context[i.smoothProperty] = e), 
                u = r.trim ? (a = r.trim.width / 2 + r.trim.x - t.anchor.x * r.orig.width, r.trim.height / 2 + r.trim.y - t.anchor.y * r.orig.height) : (a = (.5 - t.anchor.x) * r.orig.width, 
                (.5 - t.anchor.y) * r.orig.height), r.rotate && (s.copy(d), l.GroupD8.matrixAppendRotationInv(s = d, r.rotate, a, u), 
                u = a = 0), a -= n / 2, u -= o / 2, i.roundPixels ? (i.context.setTransform(s.a, s.b, s.c, s.d, s.tx * i.resolution | 0, s.ty * i.resolution | 0), 
                a |= 0, u |= 0) : i.context.setTransform(s.a, s.b, s.c, s.d, s.tx * i.resolution, s.ty * i.resolution), 
                s = r.baseTexture.resolution, 16777215 !== t.tint ? (t.cachedTint === t.tint && t.tintedTexture.tintId === t._texture._updateID || (t.cachedTint = t.tint, 
                t.tintedTexture = c.default.getTintedTexture(t, t.tint)), i.context.drawImage(t.tintedTexture, 0, 0, n * s, o * s, a * i.resolution, u * i.resolution, n * i.resolution, o * i.resolution)) : i.context.drawImage(r.baseTexture.source, r._frame.x * s, r._frame.y * s, n * s, o * s, a * i.resolution, u * i.resolution, n * i.resolution, o * i.resolution)));
            }, o.prototype.destroy = function() {
                this.renderer = null;
            }, o);
            function o(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, o), this.renderer = t;
            }
            r.default = t, i.default.registerPlugin("sprite", t);
        }, {
            "../../const": 46,
            "../../math": 70,
            "../../renderers/canvas/CanvasRenderer": 77,
            "./CanvasTinter": 104
        } ],
        104: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, c = t("../../utils"), n = t("../../renderers/canvas/utils/canUseNewCanvasBlendModes");
            var o = {
                getTintedTexture: function(t, e) {
                    var r = t._texture, i = "#" + ("00000" + (0 | (e = o.roundColor(e))).toString(16)).substr(-6);
                    r.tintCache = r.tintCache || {};
                    var n = r.tintCache[i], t = void 0;
                    if (n) {
                        if (n.tintId === r._updateID) return r.tintCache[i];
                        t = r.tintCache[i];
                    } else t = o.canvas || document.createElement("canvas");
                    return o.tintMethod(r, e, t), t.tintId = r._updateID, o.convertTintToImage ? ((e = new Image()).src = t.toDataURL(), 
                    r.tintCache[i] = e) : (r.tintCache[i] = t, o.canvas = null), t;
                },
                tintWithMultiply: function(t, e, r) {
                    var i = r.getContext("2d"), n = t._frame.clone(), o = t.baseTexture.resolution;
                    n.x *= o, n.y *= o, n.width *= o, n.height *= o, r.width = Math.ceil(n.width), r.height = Math.ceil(n.height), 
                    i.save(), i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), 
                    i.globalCompositeOperation = "multiply", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), 
                    i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), 
                    i.restore();
                },
                tintWithOverlay: function(t, e, r) {
                    var i = r.getContext("2d"), n = t._frame.clone(), o = t.baseTexture.resolution;
                    n.x *= o, n.y *= o, n.width *= o, n.height *= o, r.width = Math.ceil(n.width), r.height = Math.ceil(n.height), 
                    i.save(), i.globalCompositeOperation = "copy", i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), 
                    i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", 
                    i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), 
                    i.restore();
                },
                tintWithPerPixel: function(t, e, r) {
                    var i = r.getContext("2d"), n = t._frame.clone(), o = t.baseTexture.resolution;
                    n.x *= o, n.y *= o, n.width *= o, n.height *= o, r.width = Math.ceil(n.width), r.height = Math.ceil(n.height), 
                    i.save(), i.globalCompositeOperation = "copy", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), 
                    i.restore();
                    for (var e = (0, c.hex2rgb)(e), s = e[0], a = e[1], u = e[2], n = i.getImageData(0, 0, n.width, n.height), h = n.data, l = 0; l < h.length; l += 4) h[l + 0] *= s, 
                    h[l + 1] *= a, h[l + 2] *= u;
                    i.putImageData(n, 0, 0);
                },
                roundColor: function(t) {
                    var e = o.cacheStepsPerColorChannel, t = (0, c.hex2rgb)(t);
                    return t[0] = Math.min(255, t[0] / e * e), t[1] = Math.min(255, t[1] / e * e), t[2] = Math.min(255, t[2] / e * e), 
                    (0, c.rgb2hex)(t);
                },
                cacheStepsPerColorChannel: 8,
                convertTintToImage: !1,
                canUseMultiply: (0, ((i = n) && i.__esModule ? i : {
                    default: i
                }).default)(),
                tintMethod: 0
            };
            o.tintMethod = o.canUseMultiply ? o.tintWithMultiply : o.tintWithPerPixel, r.default = o;
        }, {
            "../../renderers/canvas/utils/canUseNewCanvasBlendModes": 80,
            "../../utils": 124
        } ],
        105: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (n.prototype.destroy = function() {
                this.vertices = null, this.positions = null, this.uvs = null, this.colors = null;
            }, n);
            function n(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.vertices = new ArrayBuffer(t), this.float32View = new Float32Array(this.vertices), 
                this.uint32View = new Uint32Array(this.vertices);
            }
            r.default = i;
        }, {} ],
        106: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = h(t("../../renderers/webgl/utils/ObjectRenderer")), n = h(t("../../renderers/webgl/WebGLRenderer")), o = h(t("../../utils/createIndicesForQuads")), s = h(t("./generateMultiTextureShader")), a = h(t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader")), u = h(t("./BatchBuffer")), D = h(t("../../settings")), I = t("../../utils"), L = h(t("pixi-gl-core")), N = h(t("bit-twiddle"));
            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var l, k = 0, B = 0, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(c, l = i.default), c.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), D.default.SPRITE_MAX_TEXTURES), 
                this.MAX_TEXTURES = (0, a.default)(this.MAX_TEXTURES, t)), this.shader = (0, s.default)(t, this.MAX_TEXTURES), 
                this.indexBuffer = L.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), 
                this.renderer.bindVao(null);
                for (var e = this.shader.attributes, r = 0; r < this.vaoMax; r++) {
                    var i = this.vertexBuffers[r] = L.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW), n = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(i, e.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(i, e.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(i, e.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                    e.aTextureId && n.addAttribute(i, e.aTextureId, t.FLOAT, !1, this.vertByteSize, 16), 
                    this.vaos[r] = n;
                }
                this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES);
            }, c.prototype.onPrerender = function() {
                this.vertexCount = 0;
            }, c.prototype.render = function(t) {
                this.currentIndex >= this.size && this.flush(), t._texture._uvs && (this.sprites[this.currentIndex++] = t);
            }, c.prototype.flush = function() {
                if (0 !== this.currentIndex) {
                    var t, e, r = this.renderer.gl, i = this.MAX_TEXTURES, n = N.default.nextPow2(this.currentIndex), o = N.default.log2(n), s = this.buffers[o], a = this.sprites, u = this.groups, h = s.float32View, l = s.uint32View, c = this.boundTextures, d = this.renderer.boundTextures, f = this.renderer.textureGC.count, p = 0, v = void 0, y = void 0, g = 1, _ = 0, m = u[0], b = I.premultiplyBlendMode[a[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][a[0].blendMode];
                    m.textureCount = 0, m.start = 0, m.blend = b, k++;
                    for (var x, T = void 0, T = 0; T < i; ++T) c[T] = d[T], c[T]._virtalBoundId = T;
                    for (T = 0; T < this.currentIndex; ++T) {
                        var w = a[T], v = w._texture.baseTexture, E = I.premultiplyBlendMode[Number(v.premultipliedAlpha)][w.blendMode];
                        if (b !== E && (b = E, y = null, _ = i, k++), y !== v && (y = v)._enabled !== k) {
                            if (_ === i && (k++, m.size = T - m.start, _ = 0, (m = u[g++]).blend = b, m.textureCount = 0, 
                            m.start = T), v.touched = f, -1 === v._virtalBoundId) for (var S = 0; S < i; ++S) {
                                var O = (S + B) % i, M = c[O];
                                if (M._enabled !== k) {
                                    B++, M._virtalBoundId = -1, c[v._virtalBoundId = O] = v;
                                    break;
                                }
                            }
                            v._enabled = k, m.textureCount++, m.ids[_] = v._virtalBoundId, m.textures[_++] = v;
                        }
                        t = w.vertexData, e = w._texture._uvs.uvsUint32, this.renderer.roundPixels ? (P = this.renderer.resolution, 
                        h[p] = (t[0] * P | 0) / P, h[p + 1] = (t[1] * P | 0) / P, h[p + 5] = (t[2] * P | 0) / P, 
                        h[p + 6] = (t[3] * P | 0) / P, h[p + 10] = (t[4] * P | 0) / P, h[p + 11] = (t[5] * P | 0) / P, 
                        h[p + 15] = (t[6] * P | 0) / P, h[p + 16] = (t[7] * P | 0) / P) : (h[p] = t[0], 
                        h[p + 1] = t[1], h[p + 5] = t[2], h[p + 6] = t[3], h[p + 10] = t[4], h[p + 11] = t[5], 
                        h[p + 15] = t[6], h[p + 16] = t[7]), l[p + 2] = e[0], l[p + 7] = e[1], l[p + 12] = e[2], 
                        l[p + 17] = e[3];
                        var P = Math.min(w.worldAlpha, 1), P = P < 1 && v.premultipliedAlpha ? (0, I.premultiplyTint)(w._tintRGB, P) : w._tintRGB + (255 * P << 24);
                        l[p + 3] = l[p + 8] = l[p + 13] = l[p + 18] = P, h[p + 4] = h[p + 9] = h[p + 14] = h[p + 19] = v._virtalBoundId, 
                        p += 20;
                    }
                    for (m.size = T - m.start, D.default.CAN_UPLOAD_SAME_BUFFER ? this.vertexBuffers[this.vertexCount].upload(s.vertices, 0, !0) : (this.vaoMax <= this.vertexCount && (this.vaoMax++, 
                    x = this.shader.attributes, n = this.vertexBuffers[this.vertexCount] = L.default.GLBuffer.createVertexBuffer(r, null, r.STREAM_DRAW), 
                    o = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(n, x.aVertexPosition, r.FLOAT, !1, this.vertByteSize, 0).addAttribute(n, x.aTextureCoord, r.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(n, x.aColor, r.UNSIGNED_BYTE, !0, this.vertByteSize, 12), 
                    x.aTextureId && o.addAttribute(n, x.aTextureId, r.FLOAT, !1, this.vertByteSize, 16), 
                    this.vaos[this.vertexCount] = o), this.renderer.bindVao(this.vaos[this.vertexCount]), 
                    this.vertexBuffers[this.vertexCount].upload(s.vertices, 0, !1), this.vertexCount++), 
                    T = 0; T < i; ++T) d[T]._virtalBoundId = -1;
                    for (T = 0; T < g; ++T) {
                        for (var C = u[T], R = C.textureCount, A = 0; A < R; A++) y = C.textures[A], d[C.ids[A]] !== y && this.renderer.bindTexture(y, C.ids[A], !0), 
                        y._virtalBoundId = -1;
                        this.renderer.state.setBlendMode(C.blend), r.drawElements(r.TRIANGLES, 6 * C.size, r.UNSIGNED_SHORT, 6 * C.start * 2);
                    }
                    this.currentIndex = 0;
                }
            }, c.prototype.start = function() {
                this.renderer.bindShader(this.shader), D.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), 
                this.vertexBuffers[this.vertexCount].bind());
            }, c.prototype.stop = function() {
                this.flush();
            }, c.prototype.destroy = function() {
                for (var t = 0; t < this.vaoMax; t++) this.vertexBuffers[t] && this.vertexBuffers[t].destroy(), 
                this.vaos[t] && this.vaos[t].destroy();
                this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), 
                l.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), 
                this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, 
                this.sprites = null;
                for (var e = 0; e < this.buffers.length; ++e) this.buffers[e].destroy();
            }, c);
            function c(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, c);
                var e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, l.call(this, t));
                e.vertSize = 5, e.vertByteSize = 4 * e.vertSize, e.size = D.default.SPRITE_BATCH_SIZE, 
                e.buffers = [];
                for (var r = 1; r <= N.default.nextPow2(e.size); r *= 2) e.buffers.push(new u.default(4 * r * e.vertByteSize));
                e.indices = (0, o.default)(e.size), e.shader = null, e.currentIndex = 0, e.groups = [];
                for (var i = 0; i < e.size; i++) e.groups[i] = {
                    textures: [],
                    textureCount: 0,
                    ids: [],
                    size: 0,
                    start: 0,
                    blend: 0
                };
                return e.sprites = [], e.vertexBuffers = [], e.vaos = [], e.vaoMax = 2, e.vertexCount = 0, 
                e.renderer.on("prerender", e.onPrerender, e), e;
            }
            r.default = i, n.default.registerPlugin("sprite", i);
        }, {
            "../../renderers/webgl/WebGLRenderer": 84,
            "../../renderers/webgl/utils/ObjectRenderer": 94,
            "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 97,
            "../../settings": 101,
            "../../utils": 124,
            "../../utils/createIndicesForQuads": 122,
            "./BatchBuffer": 105,
            "./generateMultiTextureShader": 107,
            "bit-twiddle": 1,
            "pixi-gl-core": 12
        } ],
        107: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e) {
                var r = s;
                r = (r = r.replace(/%count%/gi, e)).replace(/%forloop%/gi, function(t) {
                    var e = "";
                    e += "\n", e += "\n";
                    for (var r = 0; r < t; r++) 0 < r && (e += "\nelse "), r < t - 1 && (e += "if(textureId == " + r + ".0)"), 
                    e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", 
                    e += "\n}";
                    return e += "\n", e += "\n";
                }(e));
                for (var r = new o.default(t, "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n", r), i = [], n = 0; n < e; n++) i[n] = n;
                return r.bind(), r.uniforms.uSamplers = i, r;
            };
            var i, n = t("../../Shader"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            t("path");
            var s = [ "varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}" ].join("\n");
        }, {
            "../../Shader": 44,
            path: 23
        } ],
        108: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = d(t("../sprites/Sprite")), s = d(t("../textures/Texture")), a = t("../math"), u = t("../utils"), v = t("../const"), h = d(t("../settings")), l = d(t("./TextStyle")), y = d(t("./TextMetrics")), c = d(t("../utils/trimCanvas"));
            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var f, p = {
                texture: !0,
                children: !1,
                baseTexture: !0
            }, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(g, f = o.default), g.prototype.updateText = function(t) {
                var e = this._style;
                if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), 
                this.dirty || !t) {
                    this._font = this._style.toFontString();
                    var r = this.context, i = y.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas), n = i.width, t = i.height, o = i.lines, s = i.lineHeight, a = i.lineWidths, u = i.maxLineWidth, h = i.fontProperties;
                    this.canvas.width = Math.ceil((n + 2 * e.padding) * this.resolution), this.canvas.height = Math.ceil((t + 2 * e.padding) * this.resolution), 
                    r.scale(this.resolution, this.resolution), r.clearRect(0, 0, this.canvas.width, this.canvas.height), 
                    r.font = this._font, r.strokeStyle = e.stroke, r.lineWidth = e.strokeThickness, 
                    r.textBaseline = e.textBaseline, r.lineJoin = e.lineJoin, r.miterLimit = e.miterLimit;
                    var l = void 0, c = void 0;
                    if (e.dropShadow) {
                        r.fillStyle = e.dropShadowColor, r.globalAlpha = e.dropShadowAlpha, r.shadowBlur = e.dropShadowBlur, 
                        0 < e.dropShadowBlur && (r.shadowColor = e.dropShadowColor);
                        for (var d = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, f = Math.sin(e.dropShadowAngle) * e.dropShadowDistance, p = 0; p < o.length; p++) l = e.strokeThickness / 2, 
                        c = e.strokeThickness / 2 + p * s + h.ascent, "right" === e.align ? l += u - a[p] : "center" === e.align && (l += (u - a[p]) / 2), 
                        e.fill && (this.drawLetterSpacing(o[p], l + d + e.padding, c + f + e.padding), e.stroke && e.strokeThickness && (r.strokeStyle = e.dropShadowColor, 
                        this.drawLetterSpacing(o[p], l + d + e.padding, c + f + e.padding, !0), r.strokeStyle = e.stroke));
                    }
                    r.shadowBlur = 0, r.globalAlpha = 1, r.fillStyle = this._generateFillStyle(e, o);
                    for (var v = 0; v < o.length; v++) l = e.strokeThickness / 2, c = e.strokeThickness / 2 + v * s + h.ascent, 
                    "right" === e.align ? l += u - a[v] : "center" === e.align && (l += (u - a[v]) / 2), 
                    e.stroke && e.strokeThickness && this.drawLetterSpacing(o[v], l + e.padding, c + e.padding, !0), 
                    e.fill && this.drawLetterSpacing(o[v], l + e.padding, c + e.padding);
                    this.updateTexture();
                }
            }, g.prototype.drawLetterSpacing = function(t, e, r) {
                var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3], n = this._style.letterSpacing;
                if (0 !== n) for (var o, s = String.prototype.split.call(t, ""), a = e, u = 0; u < t.length; ) o = s[u++], 
                i ? this.context.strokeText(o, a, r) : this.context.fillText(o, a, r), a += this.context.measureText(o).width + n; else i ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r);
            }, g.prototype.updateTexture = function() {
                var t = this.canvas;
                this._style.trim && (i = (0, c.default)(t), t.width = i.width, t.height = i.height, 
                this.context.putImageData(i.data, 0, 0));
                var e = this._texture, r = this._style, i = r.trim ? 0 : r.padding, r = e.baseTexture;
                r.hasLoaded = !0, r.resolution = this.resolution, r.realWidth = t.width, r.realHeight = t.height, 
                r.width = t.width / this.resolution, r.height = t.height / this.resolution, e.trim.width = e._frame.width = t.width / this.resolution, 
                e.trim.height = e._frame.height = t.height / this.resolution, e.trim.x = -i, e.trim.y = -i, 
                e.orig.width = e._frame.width - 2 * i, e.orig.height = e._frame.height - 2 * i, 
                this._onTextureUpdate(), r.emit("update", r), this.dirty = !1;
            }, g.prototype.renderWebGL = function(t) {
                this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), 
                this.updateText(!0), f.prototype.renderWebGL.call(this, t);
            }, g.prototype._renderCanvas = function(t) {
                this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), 
                this.updateText(!0), f.prototype._renderCanvas.call(this, t);
            }, g.prototype.getLocalBounds = function(t) {
                return this.updateText(!0), f.prototype.getLocalBounds.call(this, t);
            }, g.prototype._calculateBounds = function() {
                this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
            }, g.prototype._onStyleChange = function() {
                this.dirty = !0;
            }, g.prototype._generateFillStyle = function(t, e) {
                if (!Array.isArray(t.fill)) return t.fill;
                if (navigator.isCocoonJS) return t.fill[0];
                var r = void 0, i = void 0, n = void 0, o = void 0, s = this.canvas.width / this.resolution, a = this.canvas.height / this.resolution, u = t.fill.slice(), h = t.fillGradientStops.slice();
                if (!h.length) for (var l = u.length + 1, c = 1; c < l; ++c) h.push(c / l);
                if (u.unshift(t.fill[0]), h.unshift(0), u.push(t.fill[t.fill.length - 1]), h.push(1), 
                t.fillGradientType === v.TEXT_GRADIENT.LINEAR_VERTICAL) for (var r = this.context.createLinearGradient(s / 2, 0, s / 2, a), i = (u.length + 1) * e.length, n = 0, d = 0; d < e.length; d++) {
                    n += 1;
                    for (var f = 0; f < u.length; f++) o = "number" == typeof h[f] ? h[f] / e.length + d / e.length : n / i, 
                    r.addColorStop(o, u[f]), n++;
                } else {
                    r = this.context.createLinearGradient(0, a / 2, s, a / 2), i = u.length + 1, n = 1;
                    for (var p = 0; p < u.length; p++) o = "number" == typeof h[p] ? h[p] : n / i, r.addColorStop(o, u[p]), 
                    n++;
                }
                return r;
            }, g.prototype.destroy = function(t) {
                "boolean" == typeof t && (t = {
                    children: t
                }), t = Object.assign({}, p, t), f.prototype.destroy.call(this, t), this.context = null, 
                this.canvas = null, this._style = null;
            }, i(g, [ {
                key: "width",
                get: function() {
                    return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
                },
                set: function(t) {
                    this.updateText(!0);
                    var e = (0, u.sign)(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t;
                }
            }, {
                key: "height",
                get: function() {
                    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
                },
                set: function(t) {
                    this.updateText(!0);
                    var e = (0, u.sign)(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t;
                }
            }, {
                key: "style",
                get: function() {
                    return this._style;
                },
                set: function(t) {
                    (t = t || {}) instanceof l.default ? this._style = t : this._style = new l.default(t), 
                    this.localStyleID = -1, this.dirty = !0;
                }
            }, {
                key: "text",
                get: function() {
                    return this._text;
                },
                set: function(t) {
                    t = String("" === t || null == t ? " " : t), this._text !== t && (this._text = t, 
                    this.dirty = !0);
                }
            } ]), g);
            function g(t, e, r) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, g), (r = r || document.createElement("canvas")).width = 3, r.height = 3;
                var i = s.default.fromCanvas(r, h.default.SCALE_MODE, "text");
                i.orig = new a.Rectangle(), i.trim = new a.Rectangle();
                i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, f.call(this, i));
                return s.default.addToCache(i._texture, i._texture.baseTexture.textureCacheIds[0]), 
                i.canvas = r, i.context = i.canvas.getContext("2d"), i.resolution = h.default.RESOLUTION, 
                i._text = null, i._style = null, i._styleListener = null, i._font = "", i.text = t, 
                i.style = e, i.localStyleID = -1, i;
            }
            r.default = i;
        }, {
            "../const": 46,
            "../math": 70,
            "../settings": 101,
            "../sprites/Sprite": 102,
            "../textures/Texture": 115,
            "../utils": 124,
            "../utils/trimCanvas": 129,
            "./TextMetrics": 109,
            "./TextStyle": 110
        } ],
        109: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (g.measureText = function(t, e, r) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : g._canvas;
                r = r || e.wordWrap;
                var n = e.toFontString(), o = g.measureFont(n), s = i.getContext("2d");
                s.font = n;
                for (var a = (r ? g.wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/), u = new Array(a.length), h = 0, l = 0; l < a.length; l++) {
                    var c = s.measureText(a[l]).width + (a[l].length - 1) * e.letterSpacing;
                    u[l] = c, h = Math.max(h, c);
                }
                n = h + e.strokeThickness;
                e.dropShadow && (n += e.dropShadowDistance);
                r = e.lineHeight || o.fontSize + e.strokeThickness, i = Math.max(r, o.fontSize + e.strokeThickness) + (a.length - 1) * (r + e.leading);
                return e.dropShadow && (i += e.dropShadowDistance), new g(t, e, n, i, a, u, r + e.leading, h, o);
            }, g.wordWrap = function(t, e) {
                for (var r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : g._canvas).getContext("2d"), i = "", n = t.split("\n"), o = e.wordWrapWidth, s = {}, a = 0; a < n.length; a++) {
                    for (var u = o, h = n[a].split(" "), l = 0; l < h.length; l++) {
                        var c = r.measureText(h[l]).width;
                        if (e.breakWords && o < c) for (var d = h[l].split(""), f = 0; f < d.length; f++) {
                            var p = d[f], v = s[p];
                            void 0 === v && (v = r.measureText(p).width, s[p] = v), u < v ? (i += "\n" + p, 
                            u = o - v) : (0 === f && (i += " "), i += p, u -= v);
                        } else {
                            var y = c + r.measureText(" ").width;
                            0 === l || u < y ? (0 < l && (i += "\n"), i += h[l], u = o - c) : (u -= y, i += " " + h[l]);
                        }
                    }
                    a < n.length - 1 && (i += "\n");
                }
                return i;
            }, g.measureFont = function(t) {
                if (g._fonts[t]) return g._fonts[t];
                var e = {}, r = g._canvas, i = g._context;
                i.font = t;
                var n = Math.ceil(i.measureText("|MÉq").width), o = 2 * (s = Math.ceil(i.measureText("M").width)), s = 1.4 * s | 0;
                r.width = n, r.height = o, i.fillStyle = "#f00", i.fillRect(0, 0, n, o), i.font = t, 
                i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText("|MÉq", 0, s);
                for (var a = i.getImageData(0, 0, n, o).data, i = a.length, u = 4 * n, h = 0, l = 0, c = !1, h = 0; h < s; ++h) {
                    for (var d = 0; d < u; d += 4) if (255 !== a[l + d]) {
                        c = !0;
                        break;
                    }
                    if (c) break;
                    l += u;
                }
                for (e.ascent = s - h, l = i - u, c = !1, h = o; s < h; --h) {
                    for (var f = 0; f < u; f += 4) if (255 !== a[l + f]) {
                        c = !0;
                        break;
                    }
                    if (c) break;
                    l -= u;
                }
                return e.descent = h - s, e.fontSize = e.ascent + e.descent, g._fonts[t] = e;
            }, g);
            function g(t, e, r, i, n, o, s, a, u) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, g), this.text = t, this.style = e, this.width = r, this.height = i, this.lines = n, 
                this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = u;
            }
            r.default = i;
            r = document.createElement("canvas");
            r.width = r.height = 10, i._canvas = r, i._context = r.getContext("2d"), i._fonts = {};
        }, {} ],
        110: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = t("../const"), s = t("../utils");
            var a = {
                align: "left",
                breakWords: !1,
                dropShadow: !1,
                dropShadowAlpha: 1,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "black",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: o.TEXT_GRADIENT.LINEAR_VERTICAL,
                fillGradientStops: [],
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                trim: !1,
                wordWrap: !1,
                wordWrapWidth: 100,
                leading: 0
            }, i = (u.prototype.clone = function() {
                var t, e = {};
                for (t in a) e[t] = this[t];
                return new u(e);
            }, u.prototype.reset = function() {
                Object.assign(this, a);
            }, u.prototype.toFontString = function() {
                for (var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize, e = this.fontFamily, r = (e = !Array.isArray(this.fontFamily) ? this.fontFamily.split(",") : e).length - 1; 0 <= r; r--) {
                    var i = e[r].trim();
                    /([\"\'])[^\'\"]+\1/.test(i) || (i = '"' + i + '"'), e[r] = i;
                }
                return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",");
            }, i(u, [ {
                key: "align",
                get: function() {
                    return this._align;
                },
                set: function(t) {
                    this._align !== t && (this._align = t, this.styleID++);
                }
            }, {
                key: "breakWords",
                get: function() {
                    return this._breakWords;
                },
                set: function(t) {
                    this._breakWords !== t && (this._breakWords = t, this.styleID++);
                }
            }, {
                key: "dropShadow",
                get: function() {
                    return this._dropShadow;
                },
                set: function(t) {
                    this._dropShadow !== t && (this._dropShadow = t, this.styleID++);
                }
            }, {
                key: "dropShadowAlpha",
                get: function() {
                    return this._dropShadowAlpha;
                },
                set: function(t) {
                    this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++);
                }
            }, {
                key: "dropShadowAngle",
                get: function() {
                    return this._dropShadowAngle;
                },
                set: function(t) {
                    this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++);
                }
            }, {
                key: "dropShadowBlur",
                get: function() {
                    return this._dropShadowBlur;
                },
                set: function(t) {
                    this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++);
                }
            }, {
                key: "dropShadowColor",
                get: function() {
                    return this._dropShadowColor;
                },
                set: function(t) {
                    t = l(t);
                    this._dropShadowColor !== t && (this._dropShadowColor = t, this.styleID++);
                }
            }, {
                key: "dropShadowDistance",
                get: function() {
                    return this._dropShadowDistance;
                },
                set: function(t) {
                    this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++);
                }
            }, {
                key: "fill",
                get: function() {
                    return this._fill;
                },
                set: function(t) {
                    t = l(t);
                    this._fill !== t && (this._fill = t, this.styleID++);
                }
            }, {
                key: "fillGradientType",
                get: function() {
                    return this._fillGradientType;
                },
                set: function(t) {
                    this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++);
                }
            }, {
                key: "fillGradientStops",
                get: function() {
                    return this._fillGradientStops;
                },
                set: function(t) {
                    !function(t, e) {
                        if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                        if (t.length !== e.length) return !1;
                        for (var r = 0; r < t.length; ++r) if (t[r] !== e[r]) return !1;
                        return !0;
                    }(this._fillGradientStops, t) && (this._fillGradientStops = t, this.styleID++);
                }
            }, {
                key: "fontFamily",
                get: function() {
                    return this._fontFamily;
                },
                set: function(t) {
                    this.fontFamily !== t && (this._fontFamily = t, this.styleID++);
                }
            }, {
                key: "fontSize",
                get: function() {
                    return this._fontSize;
                },
                set: function(t) {
                    this._fontSize !== t && (this._fontSize = t, this.styleID++);
                }
            }, {
                key: "fontStyle",
                get: function() {
                    return this._fontStyle;
                },
                set: function(t) {
                    this._fontStyle !== t && (this._fontStyle = t, this.styleID++);
                }
            }, {
                key: "fontVariant",
                get: function() {
                    return this._fontVariant;
                },
                set: function(t) {
                    this._fontVariant !== t && (this._fontVariant = t, this.styleID++);
                }
            }, {
                key: "fontWeight",
                get: function() {
                    return this._fontWeight;
                },
                set: function(t) {
                    this._fontWeight !== t && (this._fontWeight = t, this.styleID++);
                }
            }, {
                key: "letterSpacing",
                get: function() {
                    return this._letterSpacing;
                },
                set: function(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++);
                }
            }, {
                key: "lineHeight",
                get: function() {
                    return this._lineHeight;
                },
                set: function(t) {
                    this._lineHeight !== t && (this._lineHeight = t, this.styleID++);
                }
            }, {
                key: "leading",
                get: function() {
                    return this._leading;
                },
                set: function(t) {
                    this._leading !== t && (this._leading = t, this.styleID++);
                }
            }, {
                key: "lineJoin",
                get: function() {
                    return this._lineJoin;
                },
                set: function(t) {
                    this._lineJoin !== t && (this._lineJoin = t, this.styleID++);
                }
            }, {
                key: "miterLimit",
                get: function() {
                    return this._miterLimit;
                },
                set: function(t) {
                    this._miterLimit !== t && (this._miterLimit = t, this.styleID++);
                }
            }, {
                key: "padding",
                get: function() {
                    return this._padding;
                },
                set: function(t) {
                    this._padding !== t && (this._padding = t, this.styleID++);
                }
            }, {
                key: "stroke",
                get: function() {
                    return this._stroke;
                },
                set: function(t) {
                    t = l(t);
                    this._stroke !== t && (this._stroke = t, this.styleID++);
                }
            }, {
                key: "strokeThickness",
                get: function() {
                    return this._strokeThickness;
                },
                set: function(t) {
                    this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++);
                }
            }, {
                key: "textBaseline",
                get: function() {
                    return this._textBaseline;
                },
                set: function(t) {
                    this._textBaseline !== t && (this._textBaseline = t, this.styleID++);
                }
            }, {
                key: "trim",
                get: function() {
                    return this._trim;
                },
                set: function(t) {
                    this._trim !== t && (this._trim = t, this.styleID++);
                }
            }, {
                key: "wordWrap",
                get: function() {
                    return this._wordWrap;
                },
                set: function(t) {
                    this._wordWrap !== t && (this._wordWrap = t, this.styleID++);
                }
            }, {
                key: "wordWrapWidth",
                get: function() {
                    return this._wordWrapWidth;
                },
                set: function(t) {
                    this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++);
                }
            } ]), u);
            function u(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u), this.styleID = 0, Object.assign(this, a, t);
            }
            function h(t) {
                return "number" == typeof t ? (0, s.hex2string)(t) : "string" == typeof t && 0 === t.indexOf("0x") ? t.replace("0x", "#") : t;
            }
            function l(t) {
                if (Array.isArray(t)) {
                    for (var e = 0; e < t.length; ++e) t[e] = h(t[e]);
                    return t;
                }
                return h(t);
            }
            r.default = i;
        }, {
            "../const": 46,
            "../utils": 124
        } ],
        111: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = n(t("./BaseTexture")), o = n(t("../settings"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var s, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = i.default), a.prototype.resize = function(t, e) {
                t === this.width && e === this.height || (this.valid = 0 < t && 0 < e, this.width = t, 
                this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, 
                this.valid && this.emit("update", this));
            }, a.prototype.destroy = function() {
                s.prototype.destroy.call(this, !0), this.renderer = null;
            }, a);
            function a() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100, r = arguments[2], i = arguments[3];
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                var n = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, null, r));
                return n.resolution = i || o.default.RESOLUTION, n.width = t, n.height = e, n.realWidth = n.width * n.resolution, 
                n.realHeight = n.height * n.resolution, n.scaleMode = void 0 !== r ? r : o.default.SCALE_MODE, 
                n.hasLoaded = !0, n._glRenderTargets = {}, n._canvasRenderTarget = null, n.valid = !1, 
                n;
            }
            r.default = i;
        }, {
            "../settings": 101,
            "./BaseTexture": 112
        } ],
        112: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var s = t("../utils"), n = u(t("../settings")), i = u(t("eventemitter3")), a = u(t("../utils/determineCrossOrigin")), o = u(t("bit-twiddle"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var h, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(l, h = i.default), l.prototype.update = function() {
                "svg" !== this.imageType && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, 
                this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, 
                this._updateDimensions()), this.emit("update", this);
            }, l.prototype._updateDimensions = function() {
                this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, 
                this.isPowerOfTwo = o.default.isPow2(this.realWidth) && o.default.isPow2(this.realHeight);
            }, l.prototype.loadSource = function(t) {
                var e = this.isLoading;
                this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, 
                this.source.onerror = null);
                var r, i = !this.source;
                ((this.source = t).src && t.complete || t.getContext) && t.width && t.height ? (this._updateImageType(), 
                "svg" === this.imageType ? this._loadSvgSource() : this._sourceLoaded(), i && this.emit("loaded", this)) : t.getContext || (this.isLoading = !0, 
                r = this, t.onload = function() {
                    r._updateImageType(), t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, 
                    r._sourceLoaded(), "svg" !== r.imageType ? r.emit("loaded", r) : r._loadSvgSource());
                }, t.onerror = function() {
                    t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r.emit("error", r));
                }, t.complete && t.src && (t.onload = null, t.onerror = null, "svg" !== r.imageType ? (this.isLoading = !1, 
                t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this)) : r._loadSvgSource()));
            }, l.prototype._updateImageType = function() {
                if (this.imageUrl) {
                    var t = (0, s.decomposeDataUri)(this.imageUrl), e = void 0;
                    if (t && "image" === t.mediaType) {
                        t = t.subType.split("+")[0];
                        if (!(e = (0, s.getUrlFileExtension)("." + t))) throw new Error("Invalid image type in data URI.");
                    } else e = (e = (0, s.getUrlFileExtension)(this.imageUrl)) || "png";
                    this.imageType = e;
                }
            }, l.prototype._loadSvgSource = function() {
                var t;
                "svg" === this.imageType && ((t = (0, s.decomposeDataUri)(this.imageUrl)) ? this._loadSvgSourceUsingDataUri(t) : this._loadSvgSourceUsingXhr());
            }, l.prototype._loadSvgSourceUsingDataUri = function(t) {
                var e = void 0;
                if ("base64" === t.encoding) {
                    if (!atob) throw new Error("Your browser doesn't support base64 conversions.");
                    e = atob(t.data);
                } else e = t.data;
                this._loadSvgSourceUsingString(e);
            }, l.prototype._loadSvgSourceUsingXhr = function() {
                var t = this, e = new XMLHttpRequest();
                e.onload = function() {
                    if (e.readyState !== e.DONE || 200 !== e.status) throw new Error("Failed to load SVG using XHR.");
                    t._loadSvgSourceUsingString(e.response);
                }, e.onerror = function() {
                    return t.emit("error", t);
                }, e.open("GET", this.imageUrl, !0), e.send();
            }, l.prototype._loadSvgSourceUsingString = function(t) {
                var e = (0, s.getSvgSize)(t), r = e.width, t = e.height;
                if (!r || !t) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                this.realWidth = Math.round(r * this.sourceScale), this.realHeight = Math.round(t * this.sourceScale), 
                this._updateDimensions();
                e = document.createElement("canvas");
                e.width = this.realWidth, e.height = this.realHeight, e._pixiId = "canvas_" + (0, 
                s.uid)(), e.getContext("2d").drawImage(this.source, 0, 0, r, t, 0, 0, this.realWidth, this.realHeight), 
                this.origSource = this.source, this.source = e, l.addToCache(this, e._pixiId), this.isLoading = !1, 
                this._sourceLoaded(), this.emit("loaded", this);
            }, l.prototype._sourceLoaded = function() {
                this.hasLoaded = !0, this.update();
            }, l.prototype.destroy = function() {
                this.imageUrl && (delete s.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")), 
                this.source = null, this.dispose(), l.removeFromCache(this), this.textureCacheIds = null, 
                this._destroyed = !0;
            }, l.prototype.dispose = function() {
                this.emit("dispose", this);
            }, l.prototype.updateSourceImage = function(t) {
                this.source.src = t, this.loadSource(this.source);
            }, l.fromImage = function(t, e, r, i) {
                var n, o = s.BaseTextureCache[t];
                return o || (n = new Image(), void 0 === e && 0 !== t.indexOf("data:") ? n.crossOrigin = (0, 
                a.default)(t) : e && (n.crossOrigin = "string" == typeof e ? e : "anonymous"), (o = new l(n, r)).imageUrl = t, 
                i && (o.sourceScale = i), o.resolution = (0, s.getResolutionOfUrl)(t), n.src = t, 
                l.addToCache(o, t)), o;
            }, l.fromCanvas = function(t, e) {
                t._pixiId || (t._pixiId = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "canvas") + "_" + (0, 
                s.uid)());
                var r = s.BaseTextureCache[t._pixiId];
                return r || (r = new l(t, e), l.addToCache(r, t._pixiId)), r;
            }, l.from = function(t, e, r) {
                if ("string" == typeof t) return l.fromImage(t, void 0, e, r);
                if (t instanceof HTMLImageElement) {
                    var i = t.src, n = s.BaseTextureCache[i];
                    return n || ((n = new l(t, e)).imageUrl = i, r && (n.sourceScale = r), n.resolution = (0, 
                    s.getResolutionOfUrl)(i), l.addToCache(n, i)), n;
                }
                return t instanceof HTMLCanvasElement ? l.fromCanvas(t, e) : t;
            }, l.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), s.BaseTextureCache[e], 
                s.BaseTextureCache[e] = t);
            }, l.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = s.BaseTextureCache[t];
                    if (e) {
                        var r = e.textureCacheIds.indexOf(t);
                        return -1 < r && e.textureCacheIds.splice(r, 1), delete s.BaseTextureCache[t], e;
                    }
                } else if (t && t.textureCacheIds) {
                    for (var i = 0; i < t.textureCacheIds.length; ++i) delete s.BaseTextureCache[t.textureCacheIds[i]];
                    return t.textureCacheIds.length = 0, t;
                }
                return null;
            }, l);
            function l(t, e, r) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, l);
                var i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, h.call(this));
                return i.uid = (0, s.uid)(), i.touched = 0, i.resolution = r || n.default.RESOLUTION, 
                i.width = 100, i.height = 100, i.realWidth = 100, i.realHeight = 100, i.scaleMode = void 0 !== e ? e : n.default.SCALE_MODE, 
                i.hasLoaded = !1, i.isLoading = !1, i.source = null, i.origSource = null, i.imageType = null, 
                i.sourceScale = 1, i.premultipliedAlpha = !0, i.imageUrl = null, i.isPowerOfTwo = !1, 
                i.mipmap = n.default.MIPMAP_TEXTURES, i.wrapMode = n.default.WRAP_MODE, i._glTextures = {}, 
                i._enabled = 0, i._virtalBoundId = -1, i._destroyed = !1, i.textureCacheIds = [], 
                t && i.loadSource(t), i;
            }
            r.default = i;
        }, {
            "../settings": 101,
            "../utils": 124,
            "../utils/determineCrossOrigin": 123,
            "bit-twiddle": 1,
            eventemitter3: 3
        } ],
        113: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var a = i(t("./BaseRenderTexture")), t = i(t("./Texture"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var u, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(h, u = t.default), h.prototype.resize = function(t, e, r) {
                this.valid = 0 < t && 0 < e, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, 
                r || this.baseTexture.resize(t, e), this._updateUvs();
            }, h.create = function(t, e, r, i) {
                return new h(new a.default(t, e, r, i));
            }, h);
            function h(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h);
                var r, i, n, o, s = null;
                t instanceof a.default || (r = arguments[1], i = arguments[2], n = arguments[3], 
                o = arguments[4], s = arguments[0], e = null, t = new a.default(r, i, n, o));
                e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, u.call(this, t, e));
                return e.legacyRenderer = s, e.valid = !0, e._updateUvs(), e;
            }
            r.default = t;
        }, {
            "./BaseRenderTexture": 111,
            "./Texture": 115
        } ],
        114: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var u = t("../"), o = t("../utils");
            i(h, null, [ {
                key: "BATCH_SIZE",
                get: function() {
                    return 1e3;
                }
            } ]), h.prototype._updateResolution = function(t) {
                var e = this.data.meta.scale, t = (0, o.getResolutionOfUrl)(t, null);
                return 1 !== (t = null === t ? void 0 !== e ? parseFloat(e) : 1 : t) && (this.baseTexture.resolution = t, 
                this.baseTexture.update()), t;
            }, h.prototype.parse = function(t) {
                this._batchIndex = 0, this._callback = t, this._frameKeys.length <= h.BATCH_SIZE ? (this._processFrames(0), 
                this._parseComplete()) : this._nextBatch();
            }, h.prototype._processFrames = function(t) {
                for (var e = t, r = h.BATCH_SIZE; e - t < r && e < this._frameKeys.length; ) {
                    var i, n, o, s = this._frameKeys[e], a = this._frames[s].frame;
                    a && (i = o = null, n = new u.Rectangle(0, 0, this._frames[s].sourceSize.w / this.resolution, this._frames[s].sourceSize.h / this.resolution), 
                    o = this._frames[s].rotated ? new u.Rectangle(a.x / this.resolution, a.y / this.resolution, a.h / this.resolution, a.w / this.resolution) : new u.Rectangle(a.x / this.resolution, a.y / this.resolution, a.w / this.resolution, a.h / this.resolution), 
                    this._frames[s].trimmed && (i = new u.Rectangle(this._frames[s].spriteSourceSize.x / this.resolution, this._frames[s].spriteSourceSize.y / this.resolution, a.w / this.resolution, a.h / this.resolution)), 
                    this.textures[s] = new u.Texture(this.baseTexture, o, n, i, this._frames[s].rotated ? 2 : 0), 
                    u.Texture.addToCache(this.textures[s], s)), e++;
                }
            }, h.prototype._parseComplete = function() {
                var t = this._callback;
                this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
            }, h.prototype._nextBatch = function() {
                var t = this;
                this._processFrames(this._batchIndex * h.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
                    t._batchIndex * h.BATCH_SIZE < t._frameKeys.length ? t._nextBatch() : t._parseComplete();
                }, 0);
            }, h.prototype.destroy = function() {
                var t, e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                for (t in this.textures) this.textures[t].destroy();
                this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, 
                e && this.baseTexture.destroy(), this.baseTexture = null;
            }, i = h;
            function h(t, e) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h), this.baseTexture = t, this.textures = {}, this.data = e, this.resolution = this._updateResolution(r || this.baseTexture.imageUrl), 
                this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, 
                this._callback = null;
            }
            r.default = i;
        }, {
            "../": 65,
            "../utils": 124
        } ],
        115: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = d(t("./BaseTexture")), s = d(t("./VideoBaseTexture")), a = d(t("./TextureUvs")), u = d(t("eventemitter3")), h = t("../math"), l = t("../utils"), c = d(t("../settings"));
            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var f, p = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(v, f = u.default), v.prototype.update = function() {
                this.baseTexture.update();
            }, v.prototype.onBaseTextureLoaded = function(t) {
                this._updateID++, this.noFrame ? this.frame = new h.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, 
                this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this);
            }, v.prototype.onBaseTextureUpdated = function(t) {
                this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this);
            }, v.prototype.destroy = function(t) {
                this.baseTexture && (t && (l.TextureCache[this.baseTexture.imageUrl] && v.removeFromCache(this.baseTexture.imageUrl), 
                this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), 
                this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), 
                this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, 
                v.removeFromCache(this), this.textureCacheIds = null;
            }, v.prototype.clone = function() {
                return new v(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
            }, v.prototype._updateUvs = function() {
                this._uvs || (this._uvs = new a.default()), this._uvs.set(this._frame, this.baseTexture, this.rotate), 
                this._updateID++;
            }, v.fromImage = function(t, e, r, i) {
                var n = l.TextureCache[t];
                return n || (n = new v(o.default.fromImage(t, e, r, i)), v.addToCache(n, t)), n;
            }, v.fromFrame = function(t) {
                var e = l.TextureCache[t];
                if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return e;
            }, v.fromCanvas = function(t, e) {
                return new v(o.default.fromCanvas(t, e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "canvas"));
            }, v.fromVideo = function(t, e) {
                return "string" == typeof t ? v.fromVideoUrl(t, e) : new v(s.default.fromVideo(t, e));
            }, v.fromVideoUrl = function(t, e) {
                return new v(s.default.fromUrl(t, e));
            }, v.from = function(t) {
                if ("string" != typeof t) return t instanceof HTMLImageElement ? new v(o.default.from(t)) : t instanceof HTMLCanvasElement ? v.fromCanvas(t, c.default.SCALE_MODE, "HTMLCanvasElement") : t instanceof HTMLVideoElement ? v.fromVideo(t) : t instanceof o.default ? new v(t) : t;
                var e = l.TextureCache[t];
                return e || (null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? v.fromVideoUrl(t) : v.fromImage(t));
            }, v.fromLoader = function(t, e, r) {
                var i = new o.default(t, void 0, (0, l.getResolutionOfUrl)(e)), t = new v(i);
                return i.imageUrl = e, o.default.addToCache(t.baseTexture, r = r || e), v.addToCache(t, r), 
                r !== e && (o.default.addToCache(t.baseTexture, e), v.addToCache(t, e)), t;
            }, v.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), l.TextureCache[e], 
                l.TextureCache[e] = t);
            }, v.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = l.TextureCache[t];
                    if (e) {
                        var r = e.textureCacheIds.indexOf(t);
                        return -1 < r && e.textureCacheIds.splice(r, 1), delete l.TextureCache[t], e;
                    }
                } else if (t && t.textureCacheIds) {
                    for (var i = 0; i < t.textureCacheIds.length; ++i) l.TextureCache[t.textureCacheIds[i]] === t && delete l.TextureCache[t.textureCacheIds[i]];
                    return t.textureCacheIds.length = 0, t;
                }
                return null;
            }, i(v, [ {
                key: "frame",
                get: function() {
                    return this._frame;
                },
                set: function(t) {
                    if (this._frame = t, this.noFrame = !1, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: X: " + t.x + " + " + t.width + " = " + (t.x + t.width) + " > " + this.baseTexture.width + " Y: " + t.y + " + " + t.height + " = " + (t.y + t.height) + " > " + this.baseTexture.height);
                    this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t), 
                    this.valid && this._updateUvs();
                }
            }, {
                key: "rotate",
                get: function() {
                    return this._rotate;
                },
                set: function(t) {
                    this._rotate = t, this.valid && this._updateUvs();
                }
            }, {
                key: "width",
                get: function() {
                    return this.orig.width;
                }
            }, {
                key: "height",
                get: function() {
                    return this.orig.height;
                }
            } ]), v);
            function v(t, e, r, i, n) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, v);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, f.call(this));
                if (o.noFrame = !1, e || (o.noFrame = !0, e = new h.Rectangle(0, 0, 1, 1)), t instanceof v && (t = t.baseTexture), 
                o.baseTexture = t, o._frame = e, o.trim = i, o.valid = !1, o.requiresUpdate = !1, 
                o._uvs = null, o.orig = r || e, o._rotate = Number(n || 0), !0 === n) o._rotate = 2; else if (o._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                return t.hasLoaded ? (o.noFrame && (e = new h.Rectangle(0, 0, t.width, t.height), 
                t.on("update", o.onBaseTextureUpdated, o)), o.frame = e) : t.once("loaded", o.onBaseTextureLoaded, o), 
                o._updateID = 0, o.transform = null, o.textureCacheIds = [], o;
            }
            function y(t) {
                t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {};
            }
            (r.default = p).EMPTY = new p(new o.default()), y(p.EMPTY), y(p.EMPTY.baseTexture), 
            p.WHITE = function() {
                var t = document.createElement("canvas");
                t.width = 10, t.height = 10;
                var e = t.getContext("2d");
                return e.fillStyle = "white", e.fillRect(0, 0, 10, 10), new p(new o.default(t));
            }(), y(p.WHITE), y(p.WHITE.baseTexture);
        }, {
            "../math": 70,
            "../settings": 101,
            "../utils": 124,
            "./BaseTexture": 112,
            "./TextureUvs": 116,
            "./VideoBaseTexture": 117,
            eventemitter3: 3
        } ],
        116: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../math/GroupD8"), u = (i = n) && i.__esModule ? i : {
                default: i
            };
            o.prototype.set = function(t, e, r) {
                var i, n, o, s = e.width, a = e.height;
                r ? (i = t.width / 2 / s, n = t.height / 2 / a, o = t.x / s + i, e = t.y / a + n, 
                r = u.default.add(r, u.default.NW), this.x0 = o + i * u.default.uX(r), this.y0 = e + n * u.default.uY(r), 
                r = u.default.add(r, 2), this.x1 = o + i * u.default.uX(r), this.y1 = e + n * u.default.uY(r), 
                r = u.default.add(r, 2), this.x2 = o + i * u.default.uX(r), this.y2 = e + n * u.default.uY(r), 
                r = u.default.add(r, 2), this.x3 = o + i * u.default.uX(r), this.y3 = e + n * u.default.uY(r)) : (this.x0 = t.x / s, 
                this.y0 = t.y / a, this.x1 = (t.x + t.width) / s, this.y1 = t.y / a, this.x2 = (t.x + t.width) / s, 
                this.y2 = (t.y + t.height) / a, this.x3 = t.x / s, this.y3 = (t.y + t.height) / a), 
                this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, 
                this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535;
            }, t = o;
            function o() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, o), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, 
                this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4);
            }
            r.default = t;
        }, {
            "../math/GroupD8": 66
        } ],
        117: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("./BaseTexture"), a = (o = s) && o.__esModule ? o : {
                default: o
            }, u = t("../utils"), h = t("../ticker"), l = t("../const");
            var c, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(d, c = a.default), d.prototype._isSourcePlaying = function() {
                var t = this.source;
                return 0 < t.currentTime && !1 === t.paused && !1 === t.ended && 2 < t.readyState;
            }, d.prototype._isSourceReady = function() {
                return 3 === this.source.readyState || 4 === this.source.readyState;
            }, d.prototype._onPlayStart = function() {
                this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (h.shared.add(this.update, this, l.UPDATE_PRIORITY.HIGH), 
                this._isAutoUpdating = !0);
            }, d.prototype._onPlayStop = function() {
                this._isAutoUpdating && (h.shared.remove(this.update, this), this._isAutoUpdating = !1);
            }, d.prototype._onCanPlay = function() {
                this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), 
                this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, 
                this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), 
                this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play());
            }, d.prototype.destroy = function() {
                this._isAutoUpdating && h.shared.remove(this.update, this), this.source && this.source._pixiId && (a.default.removeFromCache(this.source._pixiId), 
                delete this.source._pixiId), c.prototype.destroy.call(this);
            }, d.fromVideo = function(t, e) {
                t._pixiId || (t._pixiId = "video_" + (0, u.uid)());
                var r = u.BaseTextureCache[t._pixiId];
                return r || (r = new d(t, e), a.default.addToCache(r, t._pixiId)), r;
            }, d.fromUrl = function(t, e) {
                var r = document.createElement("video");
                if (r.setAttribute("webkit-playsinline", ""), r.setAttribute("playsinline", ""), 
                Array.isArray(t)) for (var i = 0; i < t.length; ++i) r.appendChild(f(t[i].src || t[i], t[i].mime)); else r.appendChild(f(t.src || t, t.mime));
                return r.load(), d.fromVideo(r, e);
            }, i(d, [ {
                key: "autoUpdate",
                get: function() {
                    return this._autoUpdate;
                },
                set: function(t) {
                    t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (h.shared.remove(this.update, this), 
                    this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (h.shared.add(this.update, this, l.UPDATE_PRIORITY.HIGH), 
                    this._isAutoUpdating = !0));
                }
            } ]), d);
            function d(t, e) {
                if (!function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, d), !t) throw new Error("No video source element specified.");
                (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0);
                e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, c.call(this, t, e));
                return e.width = t.videoWidth, e.height = t.videoHeight, e._autoUpdate = !0, e._isAutoUpdating = !1, 
                e.autoPlay = !0, e.update = e.update.bind(e), e._onCanPlay = e._onCanPlay.bind(e), 
                t.addEventListener("play", e._onPlayStart.bind(e)), t.addEventListener("pause", e._onPlayStop.bind(e)), 
                e.hasLoaded = !1, e.__loaded = !1, e._isSourceReady() ? e._onCanPlay() : (t.addEventListener("canplay", e._onCanPlay), 
                t.addEventListener("canplaythrough", e._onCanPlay)), e;
            }
            function f(t, e) {
                e = e || "video/" + t.substr(t.lastIndexOf(".") + 1);
                var r = document.createElement("source");
                return r.src = t, r.type = e, r;
            }
            (r.default = i).fromUrls = i.fromUrl;
        }, {
            "../const": 46,
            "../ticker": 120,
            "../utils": 124,
            "./BaseTexture": 112
        } ],
        118: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = u(t("../settings")), s = t("../const"), a = u(t("./TickerListener"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            h.prototype._requestIfNeeded = function() {
                null === this._requestId && this._head.next && (this.lastTime = performance.now(), 
                this._requestId = requestAnimationFrame(this._tick));
            }, h.prototype._cancelIfNeeded = function() {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null);
            }, h.prototype._startIfPossible = function() {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start();
            }, h.prototype.add = function(t, e) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : s.UPDATE_PRIORITY.NORMAL;
                return this._addListener(new a.default(t, e, r));
            }, h.prototype.addOnce = function(t, e) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : s.UPDATE_PRIORITY.NORMAL;
                return this._addListener(new a.default(t, e, r, !0));
            }, h.prototype._addListener = function(t) {
                var e = this._head.next, r = this._head;
                if (e) {
                    for (;e; ) {
                        if (t.priority > e.priority) {
                            t.connect(r);
                            break;
                        }
                        e = (r = e).next;
                    }
                    t.previous || t.connect(r);
                } else t.connect(r);
                return this._startIfPossible(), this;
            }, h.prototype.remove = function(t, e) {
                for (var r = this._head.next; r; ) r = r.match(t, e) ? r.destroy() : r.next;
                return this._head.next || this._cancelIfNeeded(), this;
            }, h.prototype.start = function() {
                this.started || (this.started = !0, this._requestIfNeeded());
            }, h.prototype.stop = function() {
                this.started && (this.started = !1, this._cancelIfNeeded());
            }, h.prototype.destroy = function() {
                this.stop();
                for (var t = this._head.next; t; ) t = t.destroy(!0);
                this._head.destroy(), this._head = null;
            }, h.prototype.update = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : performance.now(), e = void 0;
                if (t > this.lastTime) {
                    (e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), 
                    this.deltaTime = e * o.default.TARGET_FPMS * this.speed;
                    for (var e = this._head, r = e.next; r; ) r = r.emit(this.deltaTime);
                    e.next || this._cancelIfNeeded();
                } else this.deltaTime = this.elapsedMS = 0;
                this.lastTime = t;
            }, i(h, [ {
                key: "FPS",
                get: function() {
                    return 1e3 / this.elapsedMS;
                }
            }, {
                key: "minFPS",
                get: function() {
                    return 1e3 / this._maxElapsedMS;
                },
                set: function(t) {
                    t = Math.min(Math.max(0, t) / 1e3, o.default.TARGET_FPMS);
                    this._maxElapsedMS = 1 / t;
                }
            } ]), i = h;
            function h() {
                var e = this;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h), this._head = new a.default(null, null, 1 / 0), this._requestId = null, 
                this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / o.default.TARGET_FPMS, 
                this.lastTime = -1, this.speed = 1, this.started = !1, this._tick = function(t) {
                    e._requestId = null, e.started && (e.update(t), e.started && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick)));
                };
            }
            r.default = i;
        }, {
            "../const": 46,
            "../settings": 101,
            "./TickerListener": 119
        } ],
        119: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (n.prototype.match = function(t, e) {
                return e = e || null, this.fn === t && this.context === e;
            }, n.prototype.emit = function(t) {
                this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                t = this.next;
                return this.once && this.destroy(!0), this._destroyed && (this.next = null), t;
            }, n.prototype.connect = function(t) {
                (this.previous = t).next && (t.next.previous = this), this.next = t.next, t.next = this;
            }, n.prototype.destroy = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), 
                this.next && (this.next.previous = this.previous);
                var e = this.previous;
                return this.next = t ? null : e, this.previous = null, e;
            }, n);
            function n(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.fn = t, this.context = e, this.priority = r, this.once = i, this.next = null, 
                this.previous = null, this._destroyed = !1;
            }
            r.default = i;
        }, {} ],
        120: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.Ticker = r.shared = void 0;
            var i, n = t("./Ticker"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            t = new o.default();
            t.autoStart = !0, t.destroy = function() {}, r.shared = t, r.Ticker = o.default;
        }, {
            "./Ticker": 118
        } ],
        121: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function() {
                return !(navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform));
            };
        }, {} ],
        122: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                for (var e = 6 * t, r = new Uint16Array(e), i = 0, n = 0; i < e; i += 6, n += 4) r[i + 0] = n + 0, 
                r[i + 1] = n + 1, r[i + 2] = n + 2, r[i + 3] = n + 0, r[i + 4] = n + 2, r[i + 5] = n + 3;
                return r;
            };
        }, {} ],
        123: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window.location;
                if (0 === t.indexOf("data:")) return "";
                e = e || window.location, s = s || document.createElement("a");
                s.href = t;
                var r = !(t = o.default.parse(s.href)).port && "" === e.port || t.port === e.port;
                return t.hostname === e.hostname && r && t.protocol === e.protocol ? "" : "anonymous";
            };
            var i, n = t("url"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            var s = void 0;
        }, {
            url: 29
        } ],
        124: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.premultiplyBlendMode = r.BaseTextureCache = r.TextureCache = r.mixins = r.pluginTarget = r.EventEmitter = r.removeItems = r.isMobile = void 0, 
            r.uid = function() {
                return ++d;
            }, r.hex2rgb = function(t, e) {
                return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, 
                e;
            }, r.hex2string = function(t) {
                return t = t.toString(16), "#" + (t = "000000".substr(0, 6 - t.length) + t);
            }, r.rgb2hex = function(t) {
                return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0);
            }, r.getResolutionOfUrl = function(t, e) {
                t = n.default.RETINA_PREFIX.exec(t);
                if (t) return parseFloat(t[1]);
                return void 0 !== e ? e : 1;
            }, r.decomposeDataUri = function(t) {
                t = i.DATA_URI.exec(t);
                if (t) return {
                    mediaType: t[1] ? t[1].toLowerCase() : void 0,
                    subType: t[2] ? t[2].toLowerCase() : void 0,
                    encoding: t[3] ? t[3].toLowerCase() : void 0,
                    data: t[4]
                };
                return;
            }, r.getUrlFileExtension = function(t) {
                t = i.URL_FILE_EXTENSION.exec(t);
                if (t) return t[1].toLowerCase();
                return;
            }, r.getSvgSize = function(t) {
                var e = i.SVG_SIZE.exec(t), t = {};
                e && (t[e[1]] = Math.round(parseFloat(e[3])), t[e[5]] = Math.round(parseFloat(e[7])));
                return t;
            }, r.skipHello = function() {
                f = !0;
            }, r.sayHello = function(t) {
                var e;
                f || (-1 < navigator.userAgent.toLowerCase().indexOf("chrome") ? (e = [ "\n %c %c %c PixiJS " + i.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;" ], 
                window.console.log.apply(console, e)) : window.console && window.console.log("PixiJS " + i.VERSION + " - " + t + " - http://www.pixijs.com/"), 
                f = !0);
            }, r.isWebGLSupported = function() {
                var t = {
                    stencil: !0,
                    failIfMajorPerformanceCaveat: !0
                };
                try {
                    if (!window.WebGLRenderingContext) return !1;
                    var e, r = document.createElement("canvas"), i = r.getContext("webgl", t) || r.getContext("experimental-webgl", t), n = !(!i || !i.getContextAttributes().stencil);
                    return !i || (e = i.getExtension("WEBGL_lose_context")) && e.loseContext(), i = null, 
                    n;
                } catch (t) {
                    return !1;
                }
            }, r.sign = function(t) {
                return 0 === t ? 0 : t < 0 ? -1 : 1;
            }, r.destroyTextureCache = function() {
                var t = void 0;
                for (t in p) p[t].destroy();
                for (t in v) v[t].destroy();
            }, r.clearTextureCache = function() {
                var t = void 0;
                for (t in p) delete p[t];
                for (t in v) delete v[t];
            }, r.correctBlendMode = function(t, e) {
                return y[e ? 1 : 0][t];
            }, r.premultiplyTint = function(t, e) {
                return 1 !== e ? 0 !== e ? (255 * e << 24) + (((t >> 16 & 255) * e + .5 | 0) << 16) + (((t >> 8 & 255) * e + .5 | 0) << 8) + ((255 & t) * e + .5 | 0) : 0 : (255 * e << 24) + t;
            }, r.premultiplyRgba = function(t, e, r, i) {
                r = r || new Float32Array(4), i || void 0 === i ? (r[0] = t[0] * e, r[1] = t[1] * e, 
                r[2] = t[2] * e) : (r[0] = t[0], r[1] = t[1], r[2] = t[2]);
                return r[3] = e, r;
            }, r.premultiplyTintToRgba = function(t, e, r, i) {
                (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, 
                r[2] = (255 & t) / 255, !i && void 0 !== i || (r[0] *= e, r[1] *= e, r[2] *= e);
                return r[3] = e, r;
            };
            var i = t("../const"), n = c(t("../settings")), o = c(t("eventemitter3")), s = c(t("./pluginTarget")), a = l(t("./mixin")), u = l(t("ismobilejs")), h = c(t("remove-array-items")), t = c(t("./mapPremultipliedBlendModes"));
            function l(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e;
            }
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var d = 0, f = !1;
            r.isMobile = u, r.removeItems = h.default, r.EventEmitter = o.default, r.pluginTarget = s.default, 
            r.mixins = a;
            var p = r.TextureCache = Object.create(null), v = r.BaseTextureCache = Object.create(null);
            var y = r.premultiplyBlendMode = (0, t.default)();
        }, {
            "../const": 46,
            "../settings": 101,
            "./mapPremultipliedBlendModes": 125,
            "./mixin": 127,
            "./pluginTarget": 128,
            eventemitter3: 3,
            ismobilejs: 4,
            "remove-array-items": 31
        } ],
        125: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function() {
                for (var t = [], e = [], r = 0; r < 32; r++) t[r] = r, e[r] = r;
                t[n.BLEND_MODES.NORMAL_NPM] = n.BLEND_MODES.NORMAL, t[n.BLEND_MODES.ADD_NPM] = n.BLEND_MODES.ADD, 
                t[n.BLEND_MODES.SCREEN_NPM] = n.BLEND_MODES.SCREEN, e[n.BLEND_MODES.NORMAL] = n.BLEND_MODES.NORMAL_NPM, 
                e[n.BLEND_MODES.ADD] = n.BLEND_MODES.ADD_NPM, e[n.BLEND_MODES.SCREEN] = n.BLEND_MODES.SCREEN_NPM;
                var i = [];
                return i.push(e), i.push(t), i;
            };
            var n = t("../const");
        }, {
            "../const": 46
        } ],
        126: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                if (o.default.tablet || o.default.phone) return 4;
                return t;
            };
            var i, n = t("ismobilejs"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
        }, {
            ismobilejs: 4
        } ],
        127: [ function(t, e, r) {
            "use strict";
            function i(t, e) {
                if (t && e) for (var r = Object.keys(e), i = 0; i < r.length; ++i) {
                    var n = r[i];
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                }
            }
            r.__esModule = !0, r.mixin = i, r.delayMixin = function(t, e) {
                n.push(t, e);
            }, r.performMixins = function() {
                for (var t = 0; t < n.length; t += 2) i(n[t], n[t + 1]);
                n.length = 0;
            };
            var n = [];
        }, {} ],
        128: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = {
                mixin: function(t) {
                    var r;
                    (r = t).__plugins = {}, r.registerPlugin = function(t, e) {
                        r.__plugins[t] = e;
                    }, r.prototype.initPlugins = function() {
                        for (var t in this.plugins = this.plugins || {}, r.__plugins) this.plugins[t] = new r.__plugins[t](this);
                    }, r.prototype.destroyPlugins = function() {
                        for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
                        this.plugins = null;
                    };
                }
            };
        }, {} ],
        129: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                var e = t.width, r = t.height, t = t.getContext("2d"), i = t.getImageData(0, 0, e, r).data, n = i.length, o = {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null
                }, s = void 0, a = void 0, u = void 0;
                for (s = 0; s < n; s += 4) 0 !== i[s + 3] && (a = s / 4 % e, u = ~~(s / 4 / e), 
                null === o.top && (o.top = u), (null === o.left || a < o.left) && (o.left = a), 
                (null === o.right || o.right < a) && (o.right = 1 + a), (null === o.bottom || o.bottom < u) && (o.bottom = u));
                e = o.right - o.left, r = o.bottom - o.top + 1;
                t = t.getImageData(o.left, o.top, e, r);
                return {
                    height: r,
                    width: e,
                    data: t
                };
            };
        }, {} ],
        130: [ function(t, e, r) {
            "use strict";
            function d() {
                var t = new Error().stack;
                void 0 === t || (t = t.split("\n").splice(3).join("\n"), console.groupCollapsed);
            }
            r.__esModule = !0, r.default = function(r) {
                var t = r.mesh, e = r.particles, i = r.extras, n = r.filters, o = r.prepare, s = r.loaders, a = r.interaction;
                Object.defineProperties(r, {
                    SpriteBatch: {
                        get: function() {
                            throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.");
                        }
                    },
                    AssetLoader: {
                        get: function() {
                            throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.");
                        }
                    },
                    Stage: {
                        get: function() {
                            return d(), r.Container;
                        }
                    },
                    DisplayObjectContainer: {
                        get: function() {
                            return d(), r.Container;
                        }
                    },
                    Strip: {
                        get: function() {
                            return d(), t.Mesh;
                        }
                    },
                    Rope: {
                        get: function() {
                            return d(), t.Rope;
                        }
                    },
                    ParticleContainer: {
                        get: function() {
                            return d(), e.ParticleContainer;
                        }
                    },
                    MovieClip: {
                        get: function() {
                            return d(), i.AnimatedSprite;
                        }
                    },
                    TilingSprite: {
                        get: function() {
                            return d(), i.TilingSprite;
                        }
                    },
                    BitmapText: {
                        get: function() {
                            return d(), i.BitmapText;
                        }
                    },
                    blendModes: {
                        get: function() {
                            return d(), r.BLEND_MODES;
                        }
                    },
                    scaleModes: {
                        get: function() {
                            return d(), r.SCALE_MODES;
                        }
                    },
                    BaseTextureCache: {
                        get: function() {
                            return d(), r.utils.BaseTextureCache;
                        }
                    },
                    TextureCache: {
                        get: function() {
                            return d(), r.utils.TextureCache;
                        }
                    },
                    math: {
                        get: function() {
                            return d(), r;
                        }
                    },
                    AbstractFilter: {
                        get: function() {
                            return d(), r.Filter;
                        }
                    },
                    TransformManual: {
                        get: function() {
                            return d(), r.TransformBase;
                        }
                    },
                    TARGET_FPMS: {
                        get: function() {
                            return d(), r.settings.TARGET_FPMS;
                        },
                        set: function(t) {
                            d(), r.settings.TARGET_FPMS = t;
                        }
                    },
                    FILTER_RESOLUTION: {
                        get: function() {
                            return d(), r.settings.FILTER_RESOLUTION;
                        },
                        set: function(t) {
                            d(), r.settings.FILTER_RESOLUTION = t;
                        }
                    },
                    RESOLUTION: {
                        get: function() {
                            return d(), r.settings.RESOLUTION;
                        },
                        set: function(t) {
                            d(), r.settings.RESOLUTION = t;
                        }
                    },
                    MIPMAP_TEXTURES: {
                        get: function() {
                            return d(), r.settings.MIPMAP_TEXTURES;
                        },
                        set: function(t) {
                            d(), r.settings.MIPMAP_TEXTURES = t;
                        }
                    },
                    SPRITE_BATCH_SIZE: {
                        get: function() {
                            return d(), r.settings.SPRITE_BATCH_SIZE;
                        },
                        set: function(t) {
                            d(), r.settings.SPRITE_BATCH_SIZE = t;
                        }
                    },
                    SPRITE_MAX_TEXTURES: {
                        get: function() {
                            return d(), r.settings.SPRITE_MAX_TEXTURES;
                        },
                        set: function(t) {
                            d(), r.settings.SPRITE_MAX_TEXTURES = t;
                        }
                    },
                    RETINA_PREFIX: {
                        get: function() {
                            return d(), r.settings.RETINA_PREFIX;
                        },
                        set: function(t) {
                            d(), r.settings.RETINA_PREFIX = t;
                        }
                    },
                    DEFAULT_RENDER_OPTIONS: {
                        get: function() {
                            return d(), r.settings.RENDER_OPTIONS;
                        }
                    }
                });
                for (var u = [ {
                    parent: "TRANSFORM_MODE",
                    target: "TRANSFORM_MODE"
                }, {
                    parent: "GC_MODES",
                    target: "GC_MODE"
                }, {
                    parent: "WRAP_MODES",
                    target: "WRAP_MODE"
                }, {
                    parent: "SCALE_MODES",
                    target: "SCALE_MODE"
                }, {
                    parent: "PRECISION",
                    target: "PRECISION_FRAGMENT"
                } ], h = 0; h < u.length; h++) !function(t) {
                    var e = u[t];
                    Object.defineProperty(r[e.parent], "DEFAULT", {
                        get: function() {
                            return d((e.parent, e.target)), r.settings[e.target];
                        },
                        set: function(t) {
                            d((e.parent, e.target)), r.settings[e.target] = t;
                        }
                    });
                }(h);
                Object.defineProperties(r.settings, {
                    PRECISION: {
                        get: function() {
                            return d(), r.settings.PRECISION_FRAGMENT;
                        },
                        set: function(t) {
                            d(), r.settings.PRECISION_FRAGMENT = t;
                        }
                    }
                }), i.AnimatedSprite && Object.defineProperties(i, {
                    MovieClip: {
                        get: function() {
                            return d(), i.AnimatedSprite;
                        }
                    }
                });
                r.DisplayObject.prototype.generateTexture = function(t, e, r) {
                    return d(), t.generateTexture(this, e, r);
                }, r.Graphics.prototype.generateTexture = function(t, e) {
                    return d(), this.generateCanvasTexture(t, e);
                }, r.RenderTexture.prototype.render = function(t, e, r, i) {
                    this.legacyRenderer.render(t, this, r, e, !i), d();
                }, r.RenderTexture.prototype.getImage = function(t) {
                    return d(), this.legacyRenderer.extract.image(t);
                }, r.RenderTexture.prototype.getBase64 = function(t) {
                    return d(), this.legacyRenderer.extract.base64(t);
                }, r.RenderTexture.prototype.getCanvas = function(t) {
                    return d(), this.legacyRenderer.extract.canvas(t);
                }, r.RenderTexture.prototype.getPixels = function(t) {
                    return d(), this.legacyRenderer.pixels(t);
                }, r.Sprite.prototype.setTexture = function(t) {
                    this.texture = t, d();
                }, i.BitmapText && (i.BitmapText.prototype.setText = function(t) {
                    this.text = t, d();
                });
                r.Text.prototype.setText = function(t) {
                    this.text = t, d();
                }, r.Text.calculateFontProperties = function(t) {
                    return d(), r.TextMetrics.measureFont(t);
                }, Object.defineProperties(r.Text, {
                    fontPropertiesCache: {
                        get: function() {
                            return d(), r.TextMetrics._fonts;
                        }
                    },
                    fontPropertiesCanvas: {
                        get: function() {
                            return d(), r.TextMetrics._canvas;
                        }
                    },
                    fontPropertiesContext: {
                        get: function() {
                            return d(), r.TextMetrics._context;
                        }
                    }
                }), r.Text.prototype.setStyle = function(t) {
                    this.style = t, d();
                }, r.Text.prototype.determineFontProperties = function(t) {
                    return d(), r.TextMetrics.measureFont(t);
                }, r.Text.getFontStyle = function(t) {
                    return d(), (t = !((t = t || {}) instanceof r.TextStyle) ? new r.TextStyle(t) : t).toFontString();
                }, Object.defineProperties(r.TextStyle.prototype, {
                    font: {
                        get: function() {
                            d();
                            var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                            return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily;
                        },
                        set: function(t) {
                            d(), 1 < t.indexOf("italic") ? this._fontStyle = "italic" : -1 < t.indexOf("oblique") ? this._fontStyle = "oblique" : this._fontStyle = "normal", 
                            -1 < t.indexOf("small-caps") ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                            var e = t.split(" "), r = -1;
                            this._fontSize = 26;
                            for (var i = 0; i < e.length; ++i) if (e[i].match(/(px|pt|em|%)/)) {
                                r = i, this._fontSize = e[i];
                                break;
                            }
                            this._fontWeight = "normal";
                            for (var n = 0; n < r; ++n) if (e[n].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                this._fontWeight = e[n];
                                break;
                            }
                            if (-1 < r && r < e.length - 1) {
                                this._fontFamily = "";
                                for (var o = r + 1; o < e.length; ++o) this._fontFamily += e[o] + " ";
                                this._fontFamily = this._fontFamily.slice(0, -1);
                            } else this._fontFamily = "Arial";
                            this.styleID++;
                        }
                    }
                }), r.Texture.prototype.setFrame = function(t) {
                    this.frame = t, d();
                }, r.Texture.addTextureToCache = function(t, e) {
                    r.Texture.addToCache(t, e), d();
                }, r.Texture.removeTextureFromCache = function(t) {
                    return d(), r.BaseTexture.removeFromCache(t), r.Texture.removeFromCache(t);
                }, Object.defineProperties(n, {
                    AbstractFilter: {
                        get: function() {
                            return d(), r.AbstractFilter;
                        }
                    },
                    SpriteMaskFilter: {
                        get: function() {
                            return d(), r.SpriteMaskFilter;
                        }
                    }
                }), r.utils.uuid = function() {
                    return d(), r.utils.uid();
                }, r.utils.canUseNewCanvasBlendModes = function() {
                    return d(), r.CanvasTinter.canUseMultiply;
                };
                var l = !0;
                Object.defineProperty(r.utils, "_saidHello", {
                    set: function(t) {
                        t && (d(), this.skipHello()), l = t;
                    },
                    get: function() {
                        return l;
                    }
                }), o.BasePrepare && (o.BasePrepare.prototype.register = function(t, e) {
                    return d(), t && this.registerFindHook(t), e && this.registerUploadHook(e), this;
                });
                o.canvas && Object.defineProperty(o.canvas, "UPLOADS_PER_FRAME", {
                    set: function() {
                        d();
                    },
                    get: function() {
                        return d(), NaN;
                    }
                });
                o.webgl && Object.defineProperty(o.webgl, "UPLOADS_PER_FRAME", {
                    set: function() {
                        d();
                    },
                    get: function() {
                        return d(), NaN;
                    }
                });
                {
                    var c;
                    s.Loader && (c = s.Resource, s = s.Loader, Object.defineProperties(c.prototype, {
                        isJson: {
                            get: function() {
                                return d(), this.type === c.TYPE.JSON;
                            }
                        },
                        isXml: {
                            get: function() {
                                return d(), this.type === c.TYPE.XML;
                            }
                        },
                        isImage: {
                            get: function() {
                                return d(), this.type === c.TYPE.IMAGE;
                            }
                        },
                        isAudio: {
                            get: function() {
                                return d(), this.type === c.TYPE.AUDIO;
                            }
                        },
                        isVideo: {
                            get: function() {
                                return d(), this.type === c.TYPE.VIDEO;
                            }
                        }
                    }), Object.defineProperties(s.prototype, {
                        before: {
                            get: function() {
                                return d(), this.pre;
                            }
                        },
                        after: {
                            get: function() {
                                return d(), this.use;
                            }
                        }
                    }));
                }
                a.interactiveTarget && Object.defineProperty(a.interactiveTarget, "defaultCursor", {
                    set: function(t) {
                        d(), this.cursor = t;
                    },
                    get: function() {
                        return d(), this.cursor;
                    }
                });
                a.InteractionManager && (Object.defineProperty(a.InteractionManager, "defaultCursorStyle", {
                    set: function(t) {
                        d(), this.cursorStyles.default = t;
                    },
                    get: function() {
                        return d(), this.cursorStyles.default;
                    }
                }), Object.defineProperty(a.InteractionManager, "currentCursorStyle", {
                    set: function(t) {
                        d(), this.currentCursorMode = t;
                    },
                    get: function() {
                        return d(), this.currentCursorMode;
                    }
                }));
            };
        }, {} ],
        131: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var s = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core"));
            var a = new s.Rectangle(), t = (i.prototype.image = function(t) {
                var e;
                return (e = new Image()).src = this.base64(t), e;
            }, i.prototype.base64 = function(t) {
                return this.canvas(t).toDataURL();
            }, i.prototype.canvas = function(t) {
                var e = this.renderer, r = void 0, i = void 0, n = void 0, o = void 0;
                (o = t ? t instanceof s.RenderTexture ? t : e.generateTexture(t) : o) ? (r = o.baseTexture._canvasRenderTarget.context, 
                i = o.baseTexture._canvasRenderTarget.resolution, n = o.frame) : (r = e.rootContext, 
                (n = a).width = this.renderer.width, n.height = this.renderer.height);
                t = n.width * i, o = n.height * i, e = new s.CanvasRenderTarget(t, o), o = r.getImageData(n.x * i, n.y * i, t, o);
                return e.context.putImageData(o, 0, 0), e.canvas;
            }, i.prototype.pixels = function(t) {
                var e = this.renderer, r = void 0, i = void 0, n = void 0, o = void 0;
                return (o = t ? t instanceof s.RenderTexture ? t : e.generateTexture(t) : o) ? (r = o.baseTexture._canvasRenderTarget.context, 
                i = o.baseTexture._canvasRenderTarget.resolution, n = o.frame) : (r = e.rootContext, 
                (n = a).width = e.width, n.height = e.height), r.getImageData(0, 0, n.width * i, n.height * i).data;
            }, i.prototype.destroy = function() {
                this.renderer.extract = null, this.renderer = null;
            }, i);
            function i(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, i), (this.renderer = t).extract = this;
            }
            r.default = t, s.CanvasRenderer.registerPlugin("extract", t);
        }, {
            "../../core": 65
        } ],
        132: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./webgl/WebGLExtract");
            Object.defineProperty(r, "webgl", {
                enumerable: !0,
                get: function() {
                    return o(i).default;
                }
            });
            var n = t("./canvas/CanvasExtract");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "canvas", {
                enumerable: !0,
                get: function() {
                    return o(n).default;
                }
            });
        }, {
            "./canvas/CanvasExtract": 131,
            "./webgl/WebGLExtract": 133
        } ],
        133: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var u = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core"));
            var h = new u.Rectangle(), t = (i.prototype.image = function(t) {
                var e;
                return (e = new Image()).src = this.base64(t), e;
            }, i.prototype.base64 = function(t) {
                return this.canvas(t).toDataURL();
            }, i.prototype.canvas = function(t) {
                var e = this.renderer, r = void 0, i = void 0, n = void 0, o = !1, s = void 0;
                (s = t ? t instanceof u.RenderTexture ? t : this.renderer.generateTexture(t) : s) ? (i = (r = s.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution, 
                n = s.frame, o = !1) : (i = (r = this.renderer.rootRenderTarget).resolution, o = !0, 
                (n = h).width = r.size.width, n.height = r.size.height);
                var a = n.width * i, t = n.height * i, s = new u.CanvasRenderTarget(a, t);
                return r && (e.bindRenderTarget(r), r = new Uint8Array(4 * a * t), (e = e.gl).readPixels(n.x * i, n.y * i, a, t, e.RGBA, e.UNSIGNED_BYTE, r), 
                (a = s.context.getImageData(0, 0, a, t)).data.set(r), s.context.putImageData(a, 0, 0), 
                o && (s.context.scale(1, -1), s.context.drawImage(s.canvas, 0, -t))), s.canvas;
            }, i.prototype.pixels = function(t) {
                var e = this.renderer, r = void 0, i = void 0, n = void 0, o = void 0;
                (o = t ? t instanceof u.RenderTexture ? t : this.renderer.generateTexture(t) : o) ? (i = (r = o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution, 
                n = o.frame) : (i = (r = this.renderer.rootRenderTarget).resolution, (n = h).width = r.size.width, 
                n.height = r.size.height);
                var s = n.width * i, t = n.height * i, o = new Uint8Array(4 * s * t);
                return r && (e.bindRenderTarget(r), (e = e.gl).readPixels(n.x * i, n.y * i, s, t, e.RGBA, e.UNSIGNED_BYTE, o)), 
                o;
            }, i.prototype.destroy = function() {
                this.renderer.extract = null, this.renderer = null;
            }, i);
            function i(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, i), (this.renderer = t).extract = this;
            }
            r.default = t, u.WebGLRenderer.registerPlugin("extract", t);
        }, {
            "../../core": 65
        } ],
        134: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core"));
            var s, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = o.Sprite), a.prototype.stop = function() {
                this.playing && (this.playing = !1, this._autoUpdate && o.ticker.shared.remove(this.update, this));
            }, a.prototype.play = function() {
                this.playing || (this.playing = !0, this._autoUpdate && o.ticker.shared.add(this.update, this, o.UPDATE_PRIORITY.HIGH));
            }, a.prototype.gotoAndStop = function(t) {
                this.stop();
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture();
            }, a.prototype.gotoAndPlay = function(t) {
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play();
            }, a.prototype.update = function(t) {
                var e = this.animationSpeed * t, r = this.currentFrame;
                if (null !== this._durations) {
                    var i = this._currentTime % 1 * this._durations[this.currentFrame];
                    for (i += e / 60 * 1e3; i < 0; ) this._currentTime--, i += this._durations[this.currentFrame];
                    var n = Math.sign(this.animationSpeed * t);
                    for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame]; ) i -= this._durations[this.currentFrame] * n, 
                    this._currentTime += n;
                    this._currentTime += i / this._durations[this.currentFrame];
                } else this._currentTime += e;
                this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), 
                this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (0 < this.animationSpeed && this.currentFrame < r || this.animationSpeed < 0 && this.currentFrame > r) && this.onLoop(), 
                this.updateTexture());
            }, a.prototype.updateTexture = function() {
                this._texture = this._textures[this.currentFrame], this._textureID = -1, this.onFrameChange && this.onFrameChange(this.currentFrame);
            }, a.prototype.destroy = function(t) {
                this.stop(), s.prototype.destroy.call(this, t);
            }, a.fromFrames = function(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(o.Texture.fromFrame(t[r]));
                return new a(e);
            }, a.fromImages = function(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(o.Texture.fromImage(t[r]));
                return new a(e);
            }, i(a, [ {
                key: "totalFrames",
                get: function() {
                    return this._textures.length;
                }
            }, {
                key: "textures",
                get: function() {
                    return this._textures;
                },
                set: function(t) {
                    if (t[0] instanceof o.Texture) this._textures = t, this._durations = null; else {
                        this._textures = [], this._durations = [];
                        for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time);
                    }
                    this.gotoAndStop(0), this.updateTexture();
                }
            }, {
                key: "currentFrame",
                get: function() {
                    var t = Math.floor(this._currentTime) % this._textures.length;
                    return t < 0 && (t += this._textures.length), t;
                }
            } ]), a);
            function a(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                var r = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, t[0] instanceof o.Texture ? t[0] : t[0].texture));
                return r._textures = null, r._durations = null, r.textures = t, r._autoUpdate = !1 !== e, 
                r.animationSpeed = 1, r.loop = !0, r.onComplete = null, r.onFrameChange = null, 
                r.onLoop = null, r._currentTime = 0, r.playing = !1, r;
            }
            r.default = i;
        }, {
            "../core": 65
        } ],
        135: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var S = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), o = s(t("../core/math/ObservablePoint")), y = s(t("../core/settings"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var a, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(O, a = S.Container), O.prototype.updateText = function() {
                for (var t = O.fonts[this._font.name], e = this._font.size / t.size, r = new S.Point(), i = [], n = [], o = null, s = 0, a = 0, u = 0, h = -1, l = 0, c = 0, d = 0, f = 0; f < this.text.length; f++) {
                    var p, v = this.text.charCodeAt(f);
                    /(\s)/.test(this.text.charAt(f)) && (h = f, l = s), /(?:\r\n|\r|\n)/.test(this.text.charAt(f)) ? (n.push(s), 
                    a = Math.max(a, s), u++, r.x = 0, r.y += t.lineHeight, o = null) : -1 !== h && 0 < this._maxWidth && r.x * e > this._maxWidth ? (S.utils.removeItems(i, h - c, f - h), 
                    f = h, h = -1, ++c, n.push(l), a = Math.max(a, l), u++, r.x = 0, r.y += t.lineHeight, 
                    o = null) : (p = t.chars[v]) && (o && p.kerning[o] && (r.x += p.kerning[o]), i.push({
                        texture: p.texture,
                        line: u,
                        charCode: v,
                        position: new S.Point(r.x + p.xOffset, r.y + p.yOffset)
                    }), s = r.x + (p.texture.width + p.xOffset), r.x += p.xAdvance, d = Math.max(d, p.yOffset + p.texture.height), 
                    o = v);
                }
                n.push(s);
                for (var a = Math.max(a, s), y = [], g = 0; g <= u; g++) {
                    var _ = 0;
                    "right" === this._font.align ? _ = a - n[g] : "center" === this._font.align && (_ = (a - n[g]) / 2), 
                    y.push(_);
                }
                for (var m = i.length, b = this.tint, x = 0; x < m; x++) {
                    var T = this._glyphs[x];
                    T ? T.texture = i[x].texture : (T = new S.Sprite(i[x].texture), this._glyphs.push(T)), 
                    T.position.x = (i[x].position.x + y[i[x].line]) * e, T.position.y = i[x].position.y * e, 
                    T.scale.x = T.scale.y = e, T.tint = b, T.parent || this.addChild(T);
                }
                for (var w = m; w < this._glyphs.length; ++w) this.removeChild(this._glyphs[w]);
                if (this._textWidth = a * e, this._textHeight = (r.y + t.lineHeight) * e, 0 !== this.anchor.x || 0 !== this.anchor.y) for (var E = 0; E < m; E++) this._glyphs[E].x -= this._textWidth * this.anchor.x, 
                this._glyphs[E].y -= this._textHeight * this.anchor.y;
                this._maxLineHeight = d * e;
            }, O.prototype.updateTransform = function() {
                this.validate(), this.containerUpdateTransform();
            }, O.prototype.getLocalBounds = function() {
                return this.validate(), a.prototype.getLocalBounds.call(this);
            }, O.prototype.validate = function() {
                this.dirty && (this.updateText(), this.dirty = !1);
            }, O.registerFont = function(t, e) {
                var r = {}, i = t.getElementsByTagName("info")[0], n = t.getElementsByTagName("common")[0], o = e.baseTexture.resolution || y.default.RESOLUTION;
                r.font = i.getAttribute("face"), r.size = parseInt(i.getAttribute("size"), 10), 
                r.lineHeight = parseInt(n.getAttribute("lineHeight"), 10) / o, r.chars = {};
                for (var s = t.getElementsByTagName("char"), a = 0; a < s.length; a++) {
                    var u = s[a], h = parseInt(u.getAttribute("id"), 10), l = new S.Rectangle(parseInt(u.getAttribute("x"), 10) / o + e.frame.x / o, parseInt(u.getAttribute("y"), 10) / o + e.frame.y / o, parseInt(u.getAttribute("width"), 10) / o, parseInt(u.getAttribute("height"), 10) / o);
                    r.chars[h] = {
                        xOffset: parseInt(u.getAttribute("xoffset"), 10) / o,
                        yOffset: parseInt(u.getAttribute("yoffset"), 10) / o,
                        xAdvance: parseInt(u.getAttribute("xadvance"), 10) / o,
                        kerning: {},
                        texture: new S.Texture(e.baseTexture, l)
                    };
                }
                for (var c = t.getElementsByTagName("kerning"), d = 0; d < c.length; d++) {
                    var f = c[d], p = parseInt(f.getAttribute("first"), 10) / o, v = parseInt(f.getAttribute("second"), 10) / o, f = parseInt(f.getAttribute("amount"), 10) / o;
                    r.chars[v] && (r.chars[v].kerning[p] = f);
                }
                return O.fonts[r.font] = r;
            }, i(O, [ {
                key: "tint",
                get: function() {
                    return this._font.tint;
                },
                set: function(t) {
                    this._font.tint = "number" == typeof t && 0 <= t ? t : 16777215, this.dirty = !0;
                }
            }, {
                key: "align",
                get: function() {
                    return this._font.align;
                },
                set: function(t) {
                    this._font.align = t || "left", this.dirty = !0;
                }
            }, {
                key: "anchor",
                get: function() {
                    return this._anchor;
                },
                set: function(t) {
                    "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t);
                }
            }, {
                key: "font",
                get: function() {
                    return this._font;
                },
                set: function(t) {
                    t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), 
                    this._font.size = 2 <= t.length ? parseInt(t[0], 10) : O.fonts[this._font.name].size) : (this._font.name = t.name, 
                    this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0);
                }
            }, {
                key: "text",
                get: function() {
                    return this._text;
                },
                set: function(t) {
                    t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0);
                }
            }, {
                key: "maxWidth",
                get: function() {
                    return this._maxWidth;
                },
                set: function(t) {
                    this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0);
                }
            }, {
                key: "maxLineHeight",
                get: function() {
                    return this.validate(), this._maxLineHeight;
                }
            }, {
                key: "textWidth",
                get: function() {
                    return this.validate(), this._textWidth;
                }
            }, {
                key: "textHeight",
                get: function() {
                    return this.validate(), this._textHeight;
                }
            } ]), O);
            function O(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, O);
                var r = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, a.call(this));
                return r._textWidth = 0, r._textHeight = 0, r._glyphs = [], r._font = {
                    tint: void 0 !== e.tint ? e.tint : 16777215,
                    align: e.align || "left",
                    name: null,
                    size: 0
                }, r.font = e.font, r._text = t, r._maxWidth = 0, r._maxLineHeight = 0, r._anchor = new o.default(function() {
                    r.dirty = !0;
                }, r, 0, 0), r.dirty = !1, r.updateText(), r;
            }
            (r.default = i).fonts = {};
        }, {
            "../core": 65,
            "../core/math/ObservablePoint": 68,
            "../core/settings": 101
        } ],
        136: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("../core/math/Matrix"), a = (o = s) && o.__esModule ? o : {
                default: o
            };
            var u = new a.default(), i = (h.prototype.multiplyUvs = function(t, e) {
                void 0 === e && (e = t);
                for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
                    var n = t[i], o = t[i + 1];
                    e[i] = n * r.a + o * r.c + r.tx, e[i + 1] = n * r.b + o * r.d + r.ty;
                }
                return e;
            }, h.prototype.update = function(t) {
                var e = this._texture;
                if (!e || !e.valid) return !1;
                if (!t && this._lastTextureID === e._updateID) return !1;
                this._lastTextureID = e._updateID;
                var r = e._uvs;
                this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                var i = e.orig, n = e.trim;
                n && (u.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), 
                this.mapCoord.append(u));
                t = e.baseTexture, r = this.uClampFrame, i = this.clampMargin / t.resolution, n = this.clampOffset;
                return r[0] = (e._frame.x + i + n) / t.width, r[1] = (e._frame.y + i + n) / t.height, 
                r[2] = (e._frame.x + e._frame.width - i + n) / t.width, r[3] = (e._frame.y + e._frame.height - i + n) / t.height, 
                this.uClampOffset[0] = n / t.realWidth, this.uClampOffset[1] = n / t.realHeight, 
                !0;
            }, i(h, [ {
                key: "texture",
                get: function() {
                    return this._texture;
                },
                set: function(t) {
                    this._texture = t, this._lastTextureID = -1;
                }
            } ]), h);
            function h(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h), this._texture = t, this.mapCoord = new a.default(), this.uClampFrame = new Float32Array(4), 
                this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, 
                this.clampMargin = void 0 === e ? .5 : e;
            }
            r.default = i;
        }, {
            "../core/math/Matrix": 67
        } ],
        137: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var l = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), c = s(t("../core/sprites/canvas/CanvasTinter")), o = s(t("./TextureTransform"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var a, u = new l.Point(), i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(h, a = l.Sprite), h.prototype._onTextureUpdate = function() {
                this.uvTransform && (this.uvTransform.texture = this._texture);
            }, h.prototype._renderWebGL = function(t) {
                var e = this._texture;
                e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), 
                t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this));
            }, h.prototype._renderCanvas = function(t) {
                var e, r, i, n, o, s, a, u, h = this._texture;
                h.baseTexture.hasLoaded && (e = t.context, r = this.worldTransform, u = t.resolution, 
                n = (i = h.baseTexture).resolution, o = this.tilePosition.x / this.tileScale.x % h._frame.width * n, 
                s = this.tilePosition.y / this.tileScale.y % h._frame.height * n, this._canvasPattern || (a = new l.CanvasRenderTarget(h._frame.width, h._frame.height, n), 
                16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, 
                this.tintedTexture = c.default.getTintedTexture(this, this.tint)), a.context.drawImage(this.tintedTexture, 0, 0)) : a.context.drawImage(i.source, -h._frame.x * n, -h._frame.y * n), 
                this._canvasPattern = a.context.createPattern(a.canvas, "repeat")), e.globalAlpha = this.worldAlpha, 
                e.setTransform(r.a * u, r.b * u, r.c * u, r.d * u, r.tx * u, r.ty * u), t.setBlendMode(this.blendMode), 
                e.fillStyle = this._canvasPattern, e.scale(this.tileScale.x / n, this.tileScale.y / n), 
                u = this.anchor.x * -this._width, t = this.anchor.y * -this._height, this.uvRespectAnchor ? (e.translate(o, s), 
                e.fillRect(u - o, t - s, this._width / this.tileScale.x * n, this._height / this.tileScale.y * n)) : (e.translate(o + u, s + t), 
                e.fillRect(-o, -s, this._width / this.tileScale.x * n, this._height / this.tileScale.y * n)));
            }, h.prototype._calculateBounds = function() {
                var t = this._width * -this._anchor._x, e = this._height * -this._anchor._y, r = this._width * (1 - this._anchor._x), i = this._height * (1 - this._anchor._y);
                this._bounds.addFrame(this.transform, t, e, r, i);
            }, h.prototype.getLocalBounds = function(t) {
                return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, 
                this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), 
                this._bounds.maxY = this._height * (1 - this._anchor._x), t || (this._localBoundsRect || (this._localBoundsRect = new l.Rectangle()), 
                t = this._localBoundsRect), this._bounds.getRectangle(t)) : a.prototype.getLocalBounds.call(this, t);
            }, h.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, u);
                var e = this._width, r = this._height, t = -e * this.anchor._x;
                if (u.x >= t && u.x < t + e) {
                    e = -r * this.anchor._y;
                    if (u.y >= e && u.y < e + r) return !0;
                }
                return !1;
            }, h.prototype.destroy = function(t) {
                a.prototype.destroy.call(this, t), this.tileTransform = null, this.uvTransform = null;
            }, h.from = function(t, e, r) {
                return new h(l.Texture.from(t), e, r);
            }, h.fromFrame = function(t, e, r) {
                var i = l.utils.TextureCache[t];
                if (!i) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new h(i, e, r);
            }, h.fromImage = function(t, e, r, i, n) {
                return new h(l.Texture.fromImage(t, i, n), e, r);
            }, i(h, [ {
                key: "clampMargin",
                get: function() {
                    return this.uvTransform.clampMargin;
                },
                set: function(t) {
                    this.uvTransform.clampMargin = t, this.uvTransform.update(!0);
                }
            }, {
                key: "tileScale",
                get: function() {
                    return this.tileTransform.scale;
                },
                set: function(t) {
                    this.tileTransform.scale.copy(t);
                }
            }, {
                key: "tilePosition",
                get: function() {
                    return this.tileTransform.position;
                },
                set: function(t) {
                    this.tileTransform.position.copy(t);
                }
            }, {
                key: "width",
                get: function() {
                    return this._width;
                },
                set: function(t) {
                    this._width = t;
                }
            }, {
                key: "height",
                get: function() {
                    return this._height;
                },
                set: function(t) {
                    this._height = t;
                }
            } ]), h);
            function h(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 100;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h);
                var i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, a.call(this, t));
                return i.tileTransform = new l.TransformStatic(), i._width = e, i._height = r, i._canvasPattern = null, 
                i.uvTransform = t.transform || new o.default(t), i.pluginName = "tilingSprite", 
                i.uvRespectAnchor = !1, i;
            }
            r.default = i;
        }, {
            "../core": 65,
            "../core/sprites/canvas/CanvasTinter": 104,
            "./TextureTransform": 136
        } ],
        138: [ function(t, e, r) {
            "use strict";
            var a = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), u = i(t("../core/textures/Texture")), h = i(t("../core/textures/BaseTexture")), l = t("../core/utils");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var t = a.DisplayObject, c = new a.Matrix();
            t.prototype._cacheAsBitmap = !1, t.prototype._cacheData = !1;
            function n() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.textureCacheId = null, this.originalRenderWebGL = null, this.originalRenderCanvas = null, 
                this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, 
                this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, 
                this.originalFilterArea = null, this.sprite = null;
            }
            Object.defineProperties(t.prototype, {
                cacheAsBitmap: {
                    get: function() {
                        return this._cacheAsBitmap;
                    },
                    set: function(t) {
                        var e;
                        this._cacheAsBitmap !== t && (e = void 0, (this._cacheAsBitmap = t) ? (this._cacheData || (this._cacheData = new n()), 
                        (e = this._cacheData).originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, 
                        e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, 
                        e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, 
                        e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, 
                        this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, 
                        this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), 
                        this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, 
                        this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, 
                        this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, 
                        this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea));
                    }
                }
            }), t.prototype._renderCachedWebGL = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), 
                this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, 
                this._cacheData.sprite._renderWebGL(t));
            }, t.prototype._initCachedDisplayObject = function(t) {
                var e, r, i, n, o, s;
                this._cacheData && this._cacheData.sprite || (e = this.alpha, this.alpha = 1, t.currentRenderer.flush(), 
                r = this.getLocalBounds().clone(), this._filters && (o = this._filters[0].padding, 
                r.pad(o)), i = t._activeRenderTarget, n = t.filterManager.filterStack, s = a.RenderTexture.create(0 | r.width, 0 | r.height), 
                o = "cacheAsBitmap_" + (0, l.uid)(), this._cacheData.textureCacheId = o, h.default.addToCache(s.baseTexture, o), 
                u.default.addToCache(s, o), (o = c).tx = -r.x, o.ty = -r.y, this.transform.worldTransform.identity(), 
                this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, s, !0, o, !0), 
                t.bindRenderTarget(i), t.filterManager.filterStack = n, this.renderWebGL = this._renderCachedWebGL, 
                this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null, 
                (s = new a.Sprite(s)).transform.worldTransform = this.transform.worldTransform, 
                s.anchor.x = -(r.x / r.width), s.anchor.y = -(r.y / r.height), s.alpha = e, s._bounds = this._bounds, 
                this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, 
                this._cacheData.sprite = s, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, 
                this.updateTransform(), this.parent = null), this.containsPoint = s.containsPoint.bind(s));
            }, t.prototype._renderCachedCanvas = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), 
                this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t));
            }, t.prototype._initCachedDisplayObjectCanvas = function(t) {
                var e, r, i, n, o;
                this._cacheData && this._cacheData.sprite || (e = this.getLocalBounds(), r = this.alpha, 
                this.alpha = 1, i = t.context, o = a.RenderTexture.create(0 | e.width, 0 | e.height), 
                n = "cacheAsBitmap_" + (0, l.uid)(), this._cacheData.textureCacheId = n, h.default.addToCache(o.baseTexture, n), 
                u.default.addToCache(o, n), this.transform.localTransform.copy(n = c), n.invert(), 
                n.tx -= e.x, n.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, 
                t.render(this, o, !0, n, !1), t.context = i, this.renderCanvas = this._renderCachedCanvas, 
                this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null, 
                (o = new a.Sprite(o)).transform.worldTransform = this.transform.worldTransform, 
                o.anchor.x = -(e.x / e.width), o.anchor.y = -(e.y / e.height), o._bounds = this._bounds, 
                o.alpha = r, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, 
                this.updateTransform(), this.parent = null), this.updateTransform = this.displayObjectUpdateTransform, 
                this._cacheData.sprite = o, this.containsPoint = o.containsPoint.bind(o));
            }, t.prototype._calculateCachedBounds = function() {
                this._cacheData.sprite._calculateBounds();
            }, t.prototype._getCachedLocalBounds = function() {
                return this._cacheData.sprite.getLocalBounds();
            }, t.prototype._destroyCachedDisplayObject = function() {
                this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, h.default.removeFromCache(this._cacheData.textureCacheId), 
                u.default.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
            }, t.prototype._cacheAsBitmapDestroy = function(t) {
                this.cacheAsBitmap = !1, this.destroy(t);
            };
        }, {
            "../core": 65,
            "../core/textures/BaseTexture": 112,
            "../core/textures/Texture": 115,
            "../core/utils": 124
        } ],
        139: [ function(t, e, r) {
            "use strict";
            t = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core"));
            t.DisplayObject.prototype.name = null, t.Container.prototype.getChildByName = function(t) {
                for (var e = 0; e < this.children.length; e++) if (this.children[e].name === t) return this.children[e];
                return null;
            };
        }, {
            "../core": 65
        } ],
        140: [ function(t, e, r) {
            "use strict";
            var i = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core"));
            i.DisplayObject.prototype.getGlobalPosition = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : new i.Point();
                return this.parent ? this.parent.toGlobal(this.position, t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1]) : (t.x = this.position.x, 
                t.y = this.position.y), t;
            };
        }, {
            "../core": 65
        } ],
        141: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.BitmapText = r.TilingSpriteRenderer = r.TilingSprite = r.TextureTransform = r.AnimatedSprite = void 0;
            var i = t("./AnimatedSprite");
            Object.defineProperty(r, "AnimatedSprite", {
                enumerable: !0,
                get: function() {
                    return u(i).default;
                }
            });
            var n = t("./TextureTransform");
            Object.defineProperty(r, "TextureTransform", {
                enumerable: !0,
                get: function() {
                    return u(n).default;
                }
            });
            var o = t("./TilingSprite");
            Object.defineProperty(r, "TilingSprite", {
                enumerable: !0,
                get: function() {
                    return u(o).default;
                }
            });
            var s = t("./webgl/TilingSpriteRenderer");
            Object.defineProperty(r, "TilingSpriteRenderer", {
                enumerable: !0,
                get: function() {
                    return u(s).default;
                }
            });
            var a = t("./BitmapText");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "BitmapText", {
                enumerable: !0,
                get: function() {
                    return u(a).default;
                }
            }), t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition");
        }, {
            "./AnimatedSprite": 134,
            "./BitmapText": 135,
            "./TextureTransform": 136,
            "./TilingSprite": 137,
            "./cacheAsBitmap": 138,
            "./getChildByName": 139,
            "./getGlobalPosition": 140,
            "./webgl/TilingSpriteRenderer": 142
        } ],
        142: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var f = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), p = t("../../core/const");
            t("path");
            var i, v = new f.Matrix(), t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(n, i = f.ObjectRenderer), n.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.shader = new f.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n"), 
                this.simpleShader = new f.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n"), 
                this.renderer.bindVao(null), this.quad = new f.Quad(t, this.renderer.state.attribState), 
                this.quad.initVao(this.shader);
            }, n.prototype.render = function(t) {
                var e = this.renderer, r = this.quad;
                e.bindVao(r.vao);
                var i = r.vertices;
                i[0] = i[6] = t._width * -t.anchor.x, i[1] = i[3] = t._height * -t.anchor.y, i[2] = i[4] = t._width * (1 - t.anchor.x), 
                i[5] = i[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && ((i = r.uvs)[0] = i[6] = -t.anchor.x, 
                i[1] = i[3] = -t.anchor.y, i[2] = i[4] = 1 - t.anchor.x, i[5] = i[7] = 1 - t.anchor.y), 
                r.upload();
                var n = t._texture, o = n.baseTexture, s = t.tileTransform.localTransform, a = t.uvTransform, u = o.isPowerOfTwo && n.frame.width === o.width && n.frame.height === o.height;
                u && (o._glTextures[e.CONTEXT_UID] ? u = o.wrapMode !== p.WRAP_MODES.CLAMP : o.wrapMode === p.WRAP_MODES.CLAMP && (o.wrapMode = p.WRAP_MODES.REPEAT));
                var h = u ? this.simpleShader : this.shader;
                e.bindShader(h);
                var l = n.width, c = n.height, d = t._width, i = t._height;
                v.set(s.a * l / d, s.b * l / i, s.c * c / d, s.d * c / i, s.tx / d, s.ty / i), v.invert(), 
                u ? v.prepend(a.mapCoord) : (h.uniforms.uMapCoord = a.mapCoord.toArray(!0), h.uniforms.uClampFrame = a.uClampFrame, 
                h.uniforms.uClampOffset = a.uClampOffset), h.uniforms.uTransform = v.toArray(!0), 
                h.uniforms.uColor = f.utils.premultiplyTintToRgba(t.tint, t.worldAlpha, h.uniforms.uColor, o.premultipliedAlpha), 
                h.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), h.uniforms.uSampler = e.bindTexture(n), 
                e.setBlendMode(f.utils.correctBlendMode(t.blendMode, o.premultipliedAlpha)), r.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);
            }, n);
            function n(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, i.call(this, t));
                return t.shader = null, t.simpleShader = null, t.quad = null, t;
            }
            r.default = t, f.WebGLRenderer.registerPlugin("tilingSprite", t);
        }, {
            "../../core": 65,
            "../../core/const": 46,
            path: 23
        } ],
        143: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), s = u(t("./BlurXFilter")), a = u(t("./BlurYFilter"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var h, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(l, h = o.Filter), l.prototype.apply = function(t, e, r) {
                var i = t.getRenderTarget(!0);
                this.blurXFilter.apply(t, e, i, !0), this.blurYFilter.apply(t, i, r, !1), t.returnRenderTarget(i);
            }, i(l, [ {
                key: "blur",
                get: function() {
                    return this.blurXFilter.blur;
                },
                set: function(t) {
                    this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
                }
            }, {
                key: "quality",
                get: function() {
                    return this.blurXFilter.quality;
                },
                set: function(t) {
                    this.blurXFilter.quality = this.blurYFilter.quality = t;
                }
            }, {
                key: "blurX",
                get: function() {
                    return this.blurXFilter.blur;
                },
                set: function(t) {
                    this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
                }
            }, {
                key: "blurY",
                get: function() {
                    return this.blurYFilter.blur;
                },
                set: function(t) {
                    this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
                }
            }, {
                key: "blendMode",
                get: function() {
                    return this.blurYFilter._blendMode;
                },
                set: function(t) {
                    this.blurYFilter._blendMode = t;
                }
            } ]), l);
            function l(t, e, r, i) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, l);
                var n = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, h.call(this));
                return n.blurXFilter = new s.default(t, e, r, i), n.blurYFilter = new a.default(t, e, r, i), 
                n.padding = 0, n.resolution = r || o.settings.RESOLUTION, n.quality = e || 4, n.blur = t || 8, 
                n;
            }
            r.default = i;
        }, {
            "../../core": 65,
            "./BlurXFilter": 144,
            "./BlurYFilter": 145
        } ],
        144: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), h = s(t("./generateBlurVertSource")), l = s(t("./generateBlurFragSource")), c = s(t("./getMaxBlurKernelSize"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var a, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(u, a = o.Filter), u.prototype.apply = function(t, e, r, i) {
                if (this.firstRun && (n = t.renderer.gl, n = (0, c.default)(n), this.vertexSrc = (0, 
                h.default)(n, !0), this.fragmentSrc = (0, l.default)(n), this.firstRun = !1), this.uniforms.strength = 1 / r.size.width * (r.size.width / e.size.width), 
                this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 
                1 === this.passes) t.applyFilter(this, e, r, i); else {
                    for (var n = t.getRenderTarget(!0), o = e, s = n, a = 0; a < this.passes - 1; a++) {
                        t.applyFilter(this, o, s, !0);
                        var u = s, s = o, o = u;
                    }
                    t.applyFilter(this, o, r, i), t.returnRenderTarget(n);
                }
            }, i(u, [ {
                key: "blur",
                get: function() {
                    return this.strength;
                },
                set: function(t) {
                    this.padding = 2 * Math.abs(t), this.strength = t;
                }
            }, {
                key: "quality",
                get: function() {
                    return this._quality;
                },
                set: function(t) {
                    this._quality = t, this.passes = t;
                }
            } ]), u);
            function u(t, e, r, i) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u);
                var n = (0, h.default)(i = i || 5, !0), i = (0, l.default)(i), i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, a.call(this, n, i));
                return i.resolution = r || o.settings.RESOLUTION, i._quality = 0, i.quality = e || 4, 
                i.strength = t || 8, i.firstRun = !0, i;
            }
            r.default = i;
        }, {
            "../../core": 65,
            "./generateBlurFragSource": 146,
            "./generateBlurVertSource": 147,
            "./getMaxBlurKernelSize": 148
        } ],
        145: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), h = s(t("./generateBlurVertSource")), l = s(t("./generateBlurFragSource")), c = s(t("./getMaxBlurKernelSize"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var a, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(u, a = o.Filter), u.prototype.apply = function(t, e, r, i) {
                if (this.firstRun && (n = t.renderer.gl, n = (0, c.default)(n), this.vertexSrc = (0, 
                h.default)(n, !1), this.fragmentSrc = (0, l.default)(n), this.firstRun = !1), this.uniforms.strength = 1 / r.size.height * (r.size.height / e.size.height), 
                this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 
                1 === this.passes) t.applyFilter(this, e, r, i); else {
                    for (var n = t.getRenderTarget(!0), o = e, s = n, a = 0; a < this.passes - 1; a++) {
                        t.applyFilter(this, o, s, !0);
                        var u = s, s = o, o = u;
                    }
                    t.applyFilter(this, o, r, i), t.returnRenderTarget(n);
                }
            }, i(u, [ {
                key: "blur",
                get: function() {
                    return this.strength;
                },
                set: function(t) {
                    this.padding = 2 * Math.abs(t), this.strength = t;
                }
            }, {
                key: "quality",
                get: function() {
                    return this._quality;
                },
                set: function(t) {
                    this._quality = t, this.passes = t;
                }
            } ]), u);
            function u(t, e, r, i) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u);
                var n = (0, h.default)(i = i || 5, !1), i = (0, l.default)(i), i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, a.call(this, n, i));
                return i.resolution = r || o.settings.RESOLUTION, i._quality = 0, i.quality = e || 4, 
                i.strength = t || 8, i.firstRun = !0, i;
            }
            r.default = i;
        }, {
            "../../core": 65,
            "./generateBlurFragSource": 146,
            "./generateBlurVertSource": 147,
            "./getMaxBlurKernelSize": 148
        } ],
        146: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                for (var e = u[t], r = e.length, i = h, n = "", o = void 0, s = 0; s < t; s++) {
                    var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s);
                    r <= (o = s) && (o = t - s - 1), a = a.replace("%value%", e[o]), n += a, n += "\n";
                }
                return i = (i = i.replace("%blur%", n)).replace("%size%", t);
            };
            var u = {
                5: [ .153388, .221461, .250301 ],
                7: [ .071303, .131514, .189879, .214607 ],
                9: [ .028532, .067234, .124009, .179044, .20236 ],
                11: [ .0093, .028002, .065984, .121703, .175713, .198596 ],
                13: [ .002406, .009255, .027867, .065666, .121117, .174868, .197641 ],
                15: [ 489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448 ]
            }, h = [ "varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}" ].join("\n");
        }, {} ],
        147: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t, e) {
                var r = Math.ceil(t / 2), i = u, n = "", o = void 0;
                o = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                for (var s = 0; s < t; s++) {
                    var a = o.replace("%index%", s);
                    a = a.replace("%sampleIndex%", s - (r - 1) + ".0"), n += a, n += "\n";
                }
                return i = (i = i.replace("%blur%", n)).replace("%size%", t);
            };
            var u = [ "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}" ].join("\n");
        }, {} ],
        148: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function(t) {
                var e = t.getParameter(t.MAX_VARYING_VECTORS), r = 15;
                for (;e < r; ) r -= 2;
                return r;
            };
        }, {} ],
        149: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core"));
            t("path");
            var s, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = o.Filter), a.prototype._loadMatrix = function(t) {
                var e = t;
                1 < arguments.length && void 0 !== arguments[1] && arguments[1] && (this._multiply(e, this.uniforms.m, t), 
                e = this._colorMatrix(e)), this.uniforms.m = e;
            }, a.prototype._multiply = function(t, e, r) {
                return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], 
                t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], 
                t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], 
                t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], 
                t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], 
                t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], 
                t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], 
                t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], 
                t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], 
                t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], 
                t;
            }, a.prototype._colorMatrix = function(t) {
                t = new Float32Array(t);
                return t[4] /= 255, t[9] /= 255, t[14] /= 255, t[19] /= 255, t;
            }, a.prototype.brightness = function(t, e) {
                this._loadMatrix([ t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0 ], e);
            }, a.prototype.greyscale = function(t, e) {
                this._loadMatrix([ t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0 ], e);
            }, a.prototype.blackAndWhite = function(t) {
                this._loadMatrix([ .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.hue = function(t, e) {
                t = (t || 0) / 180 * Math.PI;
                var r = Math.cos(t), i = Math.sin(t), t = (0, Math.sqrt)(1 / 3);
                this._loadMatrix([ r + 1 / 3 * (1 - r), 1 / 3 * (1 - r) - t * i, 1 / 3 * (1 - r) + t * i, 0, 0, 1 / 3 * (1 - r) + t * i, r + 1 / 3 * (1 - r), 1 / 3 * (1 - r) - t * i, 0, 0, 1 / 3 * (1 - r) - t * i, 1 / 3 * (1 - r) + t * i, r + 1 / 3 * (1 - r), 0, 0, 0, 0, 0, 1, 0 ], e);
            }, a.prototype.contrast = function(t, e) {
                var r = (t || 0) + 1, t = -.5 * (r - 1);
                this._loadMatrix([ r, 0, 0, 0, t, 0, r, 0, 0, t, 0, 0, r, 0, t, 0, 0, 0, 1, 0 ], e);
            }, a.prototype.saturate = function() {
                var t = 2 * (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0) / 3 + 1, e = -.5 * (t - 1);
                this._loadMatrix([ t, e, e, 0, 0, e, t, e, 0, 0, e, e, t, 0, 0, 0, 0, 0, 1, 0 ], arguments[1]);
            }, a.prototype.desaturate = function() {
                this.saturate(-1);
            }, a.prototype.negative = function(t) {
                this._loadMatrix([ 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.sepia = function(t) {
                this._loadMatrix([ .393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.technicolor = function(t) {
                this._loadMatrix([ 1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.polaroid = function(t) {
                this._loadMatrix([ 1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.toBGR = function(t) {
                this._loadMatrix([ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.kodachrome = function(t) {
                this._loadMatrix([ 1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.browni = function(t) {
                this._loadMatrix([ .5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.vintage = function(t) {
                this._loadMatrix([ .6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.colorTone = function(t, e, r, i, n) {
                var o = ((r = r || 16770432) >> 16 & 255) / 255, s = (r >> 8 & 255) / 255, a = (255 & r) / 255, u = ((i = i || 3375104) >> 16 & 255) / 255, r = (i >> 8 & 255) / 255, i = (255 & i) / 255;
                this._loadMatrix([ .3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, u, r, i, e = e || .15, 0, o - u, s - r, a - i, 0, 0 ], n);
            }, a.prototype.night = function(t, e) {
                this._loadMatrix([ -2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0 ], e);
            }, a.prototype.predator = function(t, e) {
                this._loadMatrix([ 11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0 ], e);
            }, a.prototype.lsd = function(t) {
                this._loadMatrix([ 2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0 ], t);
            }, a.prototype.reset = function() {
                this._loadMatrix([ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ], !1);
            }, i(a, [ {
                key: "matrix",
                get: function() {
                    return this.uniforms.m;
                },
                set: function(t) {
                    this.uniforms.m = t;
                }
            }, {
                key: "alpha",
                get: function() {
                    return this.uniforms.uAlpha;
                },
                set: function(t) {
                    this.uniforms.uAlpha = t;
                }
            } ]), a);
            function a() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));
                return t.uniforms.m = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ], 
                t.alpha = 1, t;
            }
            (r.default = i).prototype.grayscale = i.prototype.greyscale;
        }, {
            "../../core": 65,
            path: 23
        } ],
        150: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core"));
            t("path");
            var s, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = o.Filter), a.prototype.apply = function(t, e, r) {
                var i = 1 / r.destinationFrame.width * (r.size.width / e.size.width);
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), 
                this.uniforms.scale.x = this.scale.x * i, this.uniforms.scale.y = this.scale.y * i, 
                t.applyFilter(this, e, r);
            }, i(a, [ {
                key: "map",
                get: function() {
                    return this.uniforms.mapSampler;
                },
                set: function(t) {
                    this.uniforms.mapSampler = t;
                }
            } ]), a);
            function a(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                var r = new o.Matrix();
                t.renderable = !1;
                var i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));
                return i.maskSprite = t, i.maskMatrix = r, i.uniforms.mapSampler = t._texture, i.uniforms.filterMatrix = r, 
                i.uniforms.scale = {
                    x: 1,
                    y: 1
                }, i.scale = new o.Point(e = null == e ? 20 : e, e), i;
            }
            r.default = i;
        }, {
            "../../core": 65,
            path: 23
        } ],
        151: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core"));
            t("path");
            var n, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(o, n = i.Filter), o);
            function o() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, o), function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, n.call(this, "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'));
            }
            r.default = i;
        }, {
            "../../core": 65,
            path: 23
        } ],
        152: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./fxaa/FXAAFilter");
            Object.defineProperty(r, "FXAAFilter", {
                enumerable: !0,
                get: function() {
                    return c(i).default;
                }
            });
            var n = t("./noise/NoiseFilter");
            Object.defineProperty(r, "NoiseFilter", {
                enumerable: !0,
                get: function() {
                    return c(n).default;
                }
            });
            var o = t("./displacement/DisplacementFilter");
            Object.defineProperty(r, "DisplacementFilter", {
                enumerable: !0,
                get: function() {
                    return c(o).default;
                }
            });
            var s = t("./blur/BlurFilter");
            Object.defineProperty(r, "BlurFilter", {
                enumerable: !0,
                get: function() {
                    return c(s).default;
                }
            });
            var a = t("./blur/BlurXFilter");
            Object.defineProperty(r, "BlurXFilter", {
                enumerable: !0,
                get: function() {
                    return c(a).default;
                }
            });
            var u = t("./blur/BlurYFilter");
            Object.defineProperty(r, "BlurYFilter", {
                enumerable: !0,
                get: function() {
                    return c(u).default;
                }
            });
            var h = t("./colormatrix/ColorMatrixFilter");
            Object.defineProperty(r, "ColorMatrixFilter", {
                enumerable: !0,
                get: function() {
                    return c(h).default;
                }
            });
            var l = t("./void/VoidFilter");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "VoidFilter", {
                enumerable: !0,
                get: function() {
                    return c(l).default;
                }
            });
        }, {
            "./blur/BlurFilter": 143,
            "./blur/BlurXFilter": 144,
            "./blur/BlurYFilter": 145,
            "./colormatrix/ColorMatrixFilter": 149,
            "./displacement/DisplacementFilter": 150,
            "./fxaa/FXAAFilter": 151,
            "./noise/NoiseFilter": 153,
            "./void/VoidFilter": 154
        } ],
        153: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core"));
            t("path");
            var s, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = o.Filter), i(a, [ {
                key: "noise",
                get: function() {
                    return this.uniforms.uNoise;
                },
                set: function(t) {
                    this.uniforms.uNoise = t;
                }
            }, {
                key: "seed",
                get: function() {
                    return this.uniforms.uSeed;
                },
                set: function(t) {
                    this.uniforms.uSeed = t;
                }
            } ]), a);
            function a() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .5, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Math.random();
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                var r = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"));
                return r.noise = t, r.seed = e, r;
            }
            r.default = i;
        }, {
            "../../core": 65,
            path: 23
        } ],
        154: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core"));
            t("path");
            var n, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(o, n = i.Filter), o);
            function o() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, o);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, n.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"));
                return t.glShaderKey = "void", t;
            }
            r.default = i;
        }, {
            "../../core": 65,
            path: 23
        } ],
        155: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core"));
            s.prototype.getLocalPosition = function(t, e, r) {
                return t.worldTransform.applyInverse(r || this.global, e);
            }, s.prototype._copyEvent = function(t) {
                t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = t.buttons, 
                this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, 
                this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, 
                this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0;
            }, s.prototype._reset = function() {
                this.isPrimary = !1;
            }, i(s, [ {
                key: "pointerId",
                get: function() {
                    return this.identifier;
                }
            } ]), i = s;
            function s() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.global = new o.Point(), this.target = null, this.originalEvent = null, 
                this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, 
                this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, 
                this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0;
            }
            r.default = i;
        }, {
            "../core": 65
        } ],
        156: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (n.prototype.stopPropagation = function() {
                this.stopped = !0;
            }, n.prototype._reset = function() {
                this.stopped = !1, this.currentTarget = null, this.target = null;
            }, n);
            function n() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, 
                this.data = null;
            }
            r.default = i;
        }, {} ],
        157: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, n = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), o = h(t("./InteractionData")), s = h(t("./InteractionEvent")), u = h(t("./InteractionTrackingData")), a = h(t("eventemitter3")), t = h(t("./interactiveTarget"));
            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n.utils.mixins.delayMixin(n.DisplayObject.prototype, t.default);
            var l, c = "MOUSE", d = {
                target: null,
                data: {
                    global: null
                }
            }, a = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(f, l = a.default), f.prototype.hitTest = function(t, e) {
                return d.target = null, d.data.global = t, e = e || this.renderer._lastObjectRendered, 
                this.processInteractive(d, e, null, !0), d.target;
            }, f.prototype.setTargetElement = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents();
            }, f.prototype.addEvents = function() {
                this.interactionDOMElement && (n.ticker.shared.add(this.update, this, n.UPDATE_PRIORITY.INTERACTION), 
                window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", 
                this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), 
                this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), 
                this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), 
                this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), 
                this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), 
                window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), 
                this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), 
                this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), 
                this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), 
                window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), 
                this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), 
                this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), 
                this.eventsAdded = !0);
            }, f.prototype.removeEvents = function() {
                this.interactionDOMElement && (n.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", 
                this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), 
                this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), 
                this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), 
                this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), 
                this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), 
                window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), 
                this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), 
                this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), 
                this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), 
                window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), 
                this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), 
                this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), 
                this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), 
                this.interactionDOMElement = null, this.eventsAdded = !1);
            }, f.prototype.update = function(t) {
                if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, 
                this.interactionDOMElement)) if (this.didMove) this.didMove = !1; else {
                    for (var e in this.cursor = null, this.activeInteractionData) !this.activeInteractionData.hasOwnProperty(e) || (e = this.activeInteractionData[e]).originalEvent && "touch" !== e.pointerType && (e = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e), 
                    this.processInteractive(e, this.renderer._lastObjectRendered, this.processPointerOverOut, !0));
                    this.setCursorMode(this.cursor);
                }
            }, f.prototype.setCursorMode = function(t) {
                if (this.currentCursorMode !== (t = t || "default")) {
                    this.currentCursorMode = t;
                    var e = this.cursorStyles[t];
                    if (e) switch (void 0 === e ? "undefined" : i(e)) {
                      case "string":
                        this.interactionDOMElement.style.cursor = e;
                        break;

                      case "function":
                        e(t);
                        break;

                      case "object":
                        Object.assign(this.interactionDOMElement.style, e);
                    } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t);
                }
            }, f.prototype.dispatchEvent = function(t, e, r) {
                r.stopped || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r));
            }, f.prototype.mapPositionToPoint = function(t, e, r) {
                var i = void 0, i = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }, n = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
                t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) * n;
            }, f.prototype.processInteractive = function(t, e, r, i, n) {
                if (!e || !e.visible) return !1;
                var o = t.data.global, s = !1, a = n = e.interactive || n;
                if (e.hitArea ? a = !1 : i && e._mask && (e._mask.containsPoint(o) || (i = !1)), 
                e.interactiveChildren && e.children) for (var u = e.children, h = u.length - 1; 0 <= h; h--) {
                    var l = u[h], c = this.processInteractive(t, l, r, i, a);
                    c && l.parent && (a = !1, c && (t.target && (i = !1), s = !0));
                }
                return n && (i && !t.target && (e.hitArea ? (e.worldTransform.applyInverse(o, this._tempPoint), 
                e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) && (s = !0)) : e.containsPoint && e.containsPoint(o) && (s = !0)), 
                e.interactive && (s && !t.target && (t.target = e), r && r(t, e, !!s))), s;
            }, f.prototype.onPointerDown = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    this.autoPreventDefault && e[0].isNormalized && t.preventDefault();
                    for (var r = e.length, i = 0; i < r; i++) {
                        var n = e[i], o = this.getInteractionDataForPointerId(n), o = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        o.data.originalEvent = t, this.processInteractive(o, this.renderer._lastObjectRendered, this.processPointerDown, !0), 
                        this.emit("pointerdown", o), "touch" === n.pointerType ? this.emit("touchstart", o) : "mouse" !== n.pointerType && "pen" !== n.pointerType || (n = 2 === n.button, 
                        this.emit(n ? "rightdown" : "mousedown", this.eventData));
                    }
                }
            }, f.prototype.processPointerDown = function(t, e, r) {
                var i = t.data, n = t.data.identifier;
                r && (e.trackedPointers[n] || (e.trackedPointers[n] = new u.default(n)), this.dispatchEvent(e, "pointerdown", t), 
                "touch" === i.pointerType ? this.dispatchEvent(e, "touchstart", t) : "mouse" !== i.pointerType && "pen" !== i.pointerType || ((i = 2 === i.button) ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, 
                this.dispatchEvent(e, i ? "rightdown" : "mousedown", t)));
            }, f.prototype.onPointerComplete = function(t, e, r) {
                for (var i = this.normalizeToPointerData(t), n = i.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
                    var a, u = i[s], h = this.getInteractionDataForPointerId(u), l = this.configureInteractionEventForDOMEvent(this.eventData, u, h);
                    l.data.originalEvent = t, this.processInteractive(l, this.renderer._lastObjectRendered, r, e || !o), 
                    this.emit(e ? "pointercancel" : "pointerup" + o, l), "mouse" === u.pointerType || "pen" === u.pointerType ? (a = 2 === u.button, 
                    this.emit(a ? "rightup" + o : "mouseup" + o, l)) : "touch" === u.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, l), 
                    this.releaseInteractionDataForPointerId(u.pointerId, h));
                }
            }, f.prototype.onPointerCancel = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel);
            }, f.prototype.processPointerCancel = function(t, e) {
                var r = t.data, i = t.data.identifier;
                void 0 !== e.trackedPointers[i] && (delete e.trackedPointers[i], this.dispatchEvent(e, "pointercancel", t), 
                "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t));
            }, f.prototype.onPointerUp = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp);
            }, f.prototype.processPointerUp = function(t, e, r) {
                var i, n = t.data, o = t.data.identifier, s = e.trackedPointers[o], a = "touch" === n.pointerType;
                "mouse" !== n.pointerType && "pen" !== n.pointerType || (i = 2 === n.button, n = u.default.FLAGS, 
                n = i ? n.RIGHT_DOWN : n.LEFT_DOWN, n = void 0 !== s && s.flags & n, r ? (this.dispatchEvent(e, i ? "rightup" : "mouseup", t), 
                n && this.dispatchEvent(e, i ? "rightclick" : "click", t)) : n && this.dispatchEvent(e, i ? "rightupoutside" : "mouseupoutside", t), 
                s && (i ? s.rightDown = !1 : s.leftDown = !1)), r ? (this.dispatchEvent(e, "pointerup", t), 
                a && this.dispatchEvent(e, "touchend", t), s && (this.dispatchEvent(e, "pointertap", t), 
                a && (this.dispatchEvent(e, "tap", t), s.over = !1))) : s && (this.dispatchEvent(e, "pointerupoutside", t), 
                a && this.dispatchEvent(e, "touchendoutside", t)), s && s.none && delete e.trackedPointers[o];
            }, f.prototype.onPointerMove = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    "mouse" === e[0].pointerType && (this.didMove = !0, this.cursor = null);
                    for (var r = e.length, i = 0; i < r; i++) {
                        var n = e[i], o = this.getInteractionDataForPointerId(n), s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        s.data.originalEvent = t;
                        o = "touch" !== n.pointerType || this.moveWhenInside;
                        this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, o), 
                        this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), 
                        "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s);
                    }
                    "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
                }
            }, f.prototype.processPointerMove = function(t, e, r) {
                var i = t.data, n = "touch" === i.pointerType, i = "mouse" === i.pointerType || "pen" === i.pointerType;
                i && this.processPointerOverOut(t, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t), 
                n && this.dispatchEvent(e, "touchmove", t), i && this.dispatchEvent(e, "mousemove", t));
            }, f.prototype.onPointerOut = function(t) {
                var e, r;
                this.supportsTouchEvents && "touch" === t.pointerType || ("mouse" === (e = this.normalizeToPointerData(t)[0]).pointerType && (this.mouseOverRenderer = !1, 
                this.setCursorMode(null)), r = this.getInteractionDataForPointerId(e), (t = this.configureInteractionEventForDOMEvent(this.eventData, e, r)).data.originalEvent = e, 
                this.processInteractive(t, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), 
                this.emit("pointerout", t), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", t) : this.releaseInteractionDataForPointerId(r.identifier));
            }, f.prototype.processPointerOverOut = function(t, e, r) {
                var i = t.data, n = t.data.identifier, o = "mouse" === i.pointerType || "pen" === i.pointerType, i = e.trackedPointers[n];
                void 0 !== (i = r && !i ? e.trackedPointers[n] = new u.default(n) : i) && (r && this.mouseOverRenderer ? (i.over || (i.over = !0, 
                this.dispatchEvent(e, "pointerover", t), o && this.dispatchEvent(e, "mouseover", t)), 
                o && null === this.cursor && (this.cursor = e.cursor)) : i.over && (i.over = !1, 
                this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), 
                i.none && delete e.trackedPointers[n]));
            }, f.prototype.onPointerOver = function(t) {
                var e = this.normalizeToPointerData(t)[0], t = this.getInteractionDataForPointerId(e), t = this.configureInteractionEventForDOMEvent(this.eventData, e, t);
                "mouse" === (t.data.originalEvent = e).pointerType && (this.mouseOverRenderer = !0), 
                this.emit("pointerover", t), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", t);
            }, f.prototype.getInteractionDataForPointerId = function(t) {
                var e = t.pointerId, r = void 0;
                return e === c || "mouse" === t.pointerType ? r = this.mouse : this.activeInteractionData[e] ? r = this.activeInteractionData[e] : ((r = this.interactionDataPool.pop() || new o.default()).identifier = e, 
                this.activeInteractionData[e] = r), r._copyEvent(t), r;
            }, f.prototype.releaseInteractionDataForPointerId = function(t) {
                var e = this.activeInteractionData[t];
                e && (delete this.activeInteractionData[t], e._reset(), this.interactionDataPool.push(e));
            }, f.prototype.configureInteractionEventForDOMEvent = function(t, e, r) {
                return t.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), navigator.isCocoonJS && "touch" === e.pointerType && (r.global.x = r.global.x / this.resolution, 
                r.global.y = r.global.y / this.resolution), "touch" === e.pointerType && (e.globalX = r.global.x, 
                e.globalY = r.global.y), r.originalEvent = e, t._reset(), t;
            }, f.prototype.normalizeToPointerData = function(t) {
                var e = [];
                if (this.supportsTouchEvents && t instanceof TouchEvent) for (var r = 0, i = t.changedTouches.length; r < i; r++) {
                    var n = t.changedTouches[r];
                    void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), 
                    void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), 
                    void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), 
                    void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), 
                    void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), 
                    n.twist = 0, void (n.tangentialPressure = 0) === n.layerX && (n.layerX = n.offsetX = n.clientX), 
                    void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, 
                    e.push(n);
                } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent || (void 0 === t.isPrimary && (t.isPrimary = !0), 
                void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), 
                void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), 
                void 0 === t.pointerId && (t.pointerId = c), void 0 === t.pressure && (t.pressure = .5), 
                t.twist = 0, t.tangentialPressure = 0, t.isNormalized = !0), e.push(t);
                return e;
            }, f.prototype.destroy = function() {
                this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, 
                this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, 
                this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, 
                this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, 
                this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, 
                this.onPointerOver = null, this._tempPoint = null;
            }, f);
            function f(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, f);
                var r = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, l.call(this));
                return e = e || {}, r.renderer = t, r.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault, 
                r.interactionFrequency = e.interactionFrequency || 10, r.mouse = new o.default(), 
                r.mouse.identifier = c, r.mouse.global.set(-999999), r.activeInteractionData = {}, 
                r.activeInteractionData[c] = r.mouse, r.interactionDataPool = [], r.eventData = new s.default(), 
                r.interactionDOMElement = null, r.moveWhenInside = !1, r.eventsAdded = !1, r.mouseOverRenderer = !1, 
                r.supportsTouchEvents = "ontouchstart" in window, r.supportsPointerEvents = !!window.PointerEvent, 
                r.onPointerUp = r.onPointerUp.bind(r), r.processPointerUp = r.processPointerUp.bind(r), 
                r.onPointerCancel = r.onPointerCancel.bind(r), r.processPointerCancel = r.processPointerCancel.bind(r), 
                r.onPointerDown = r.onPointerDown.bind(r), r.processPointerDown = r.processPointerDown.bind(r), 
                r.onPointerMove = r.onPointerMove.bind(r), r.processPointerMove = r.processPointerMove.bind(r), 
                r.onPointerOut = r.onPointerOut.bind(r), r.processPointerOverOut = r.processPointerOverOut.bind(r), 
                r.onPointerOver = r.onPointerOver.bind(r), r.cursorStyles = {
                    default: "inherit",
                    pointer: "pointer"
                }, r.currentCursorMode = null, r.cursor = null, r._tempPoint = new n.Point(), r.resolution = 1, 
                r.setTargetElement(r.renderer.view, r.renderer.resolution), r;
            }
            r.default = a, n.WebGLRenderer.registerPlugin("interaction", a), n.CanvasRenderer.registerPlugin("interaction", a);
        }, {
            "../core": 65,
            "./InteractionData": 155,
            "./InteractionEvent": 156,
            "./InteractionTrackingData": 158,
            "./interactiveTarget": 160,
            eventemitter3: 3
        } ],
        158: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            o.prototype._doSet = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t;
            }, i(o, [ {
                key: "pointerId",
                get: function() {
                    return this._pointerId;
                }
            }, {
                key: "flags",
                get: function() {
                    return this._flags;
                },
                set: function(t) {
                    this._flags = t;
                }
            }, {
                key: "none",
                get: function() {
                    return this._flags === this.constructor.FLAGS.NONE;
                }
            }, {
                key: "over",
                get: function() {
                    return 0 != (this._flags & this.constructor.FLAGS.OVER);
                },
                set: function(t) {
                    this._doSet(this.constructor.FLAGS.OVER, t);
                }
            }, {
                key: "rightDown",
                get: function() {
                    return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN);
                },
                set: function(t) {
                    this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t);
                }
            }, {
                key: "leftDown",
                get: function() {
                    return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN);
                },
                set: function(t) {
                    this._doSet(this.constructor.FLAGS.LEFT_DOWN, t);
                }
            } ]), i = o;
            function o(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, o), this._pointerId = t, this._flags = o.FLAGS.NONE;
            }
            (r.default = i).FLAGS = Object.freeze({
                NONE: 0,
                OVER: 1,
                LEFT_DOWN: 2,
                RIGHT_DOWN: 4
            });
        }, {} ],
        159: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./InteractionData");
            Object.defineProperty(r, "InteractionData", {
                enumerable: !0,
                get: function() {
                    return u(i).default;
                }
            });
            var n = t("./InteractionManager");
            Object.defineProperty(r, "InteractionManager", {
                enumerable: !0,
                get: function() {
                    return u(n).default;
                }
            });
            var o = t("./interactiveTarget");
            Object.defineProperty(r, "interactiveTarget", {
                enumerable: !0,
                get: function() {
                    return u(o).default;
                }
            });
            var s = t("./InteractionTrackingData");
            Object.defineProperty(r, "InteractionTrackingData", {
                enumerable: !0,
                get: function() {
                    return u(s).default;
                }
            });
            var a = t("./InteractionEvent");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "InteractionEvent", {
                enumerable: !0,
                get: function() {
                    return u(a).default;
                }
            });
        }, {
            "./InteractionData": 155,
            "./InteractionEvent": 156,
            "./InteractionManager": 157,
            "./InteractionTrackingData": 158,
            "./interactiveTarget": 160
        } ],
        160: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = {
                interactive: !1,
                interactiveChildren: !0,
                hitArea: null,
                get buttonMode() {
                    return "pointer" === this.cursor;
                },
                set buttonMode(t) {
                    t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null);
                },
                cursor: null,
                get trackedPointers() {
                    return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers;
                },
                _trackedPointers: void 0
            };
        }, {} ],
        161: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.parse = a, r.default = function() {
                return function(e, r) {
                    var t, i;
                    e.data && e.type === s.Resource.TYPE.XML && 0 !== e.data.getElementsByTagName("page").length && 0 !== e.data.getElementsByTagName("info").length && null !== e.data.getElementsByTagName("info")[0].getAttribute("face") ? (i = e.isDataUrl ? "" : n.dirname(e.url), 
                    e.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/")), 
                    (i = i.replace(this.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/"), 
                    t = i + e.data.getElementsByTagName("page")[0].getAttribute("file"), o.utils.TextureCache[t] ? (a(e, o.utils.TextureCache[t]), 
                    r()) : (i = {
                        crossOrigin: e.crossOrigin,
                        loadType: s.Resource.LOAD_TYPE.IMAGE,
                        metadata: e.metadata.imageMetadata,
                        parentResource: e
                    }, this.add(e.name + "_image", t, i, function(t) {
                        a(e, t.texture), r();
                    }))) : r();
                };
            };
            var n = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("path")), o = t("../core"), s = t("resource-loader"), i = t("../extras");
            function a(t, e) {
                t.bitmapFont = i.BitmapText.registerFont(t.data, e);
            }
        }, {
            "../core": 65,
            "../extras": 141,
            path: 23,
            "resource-loader": 36
        } ],
        162: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.shared = r.Resource = r.textureParser = r.getResourcePath = r.spritesheetParser = r.parseBitmapFontData = r.bitmapFontParser = r.Loader = void 0;
            var i = t("./bitmapFontParser");
            Object.defineProperty(r, "bitmapFontParser", {
                enumerable: !0,
                get: function() {
                    return h(i).default;
                }
            }), Object.defineProperty(r, "parseBitmapFontData", {
                enumerable: !0,
                get: function() {
                    return i.parse;
                }
            });
            var n = t("./spritesheetParser");
            Object.defineProperty(r, "spritesheetParser", {
                enumerable: !0,
                get: function() {
                    return h(n).default;
                }
            }), Object.defineProperty(r, "getResourcePath", {
                enumerable: !0,
                get: function() {
                    return n.getResourcePath;
                }
            });
            var o = t("./textureParser");
            Object.defineProperty(r, "textureParser", {
                enumerable: !0,
                get: function() {
                    return h(o).default;
                }
            });
            var s = t("resource-loader");
            Object.defineProperty(r, "Resource", {
                enumerable: !0,
                get: function() {
                    return s.Resource;
                }
            });
            var a = h(t("../core/Application")), u = h(t("./loader"));
            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r.Loader = u.default;
            var l = new u.default();
            l.destroy = function() {}, r.shared = l;
            a = a.default.prototype;
            a._loader = null, Object.defineProperty(a, "loader", {
                get: function() {
                    var t;
                    return this._loader || (t = this._options.sharedLoader, this._loader = t ? l : new u.default()), 
                    this._loader;
                }
            }), a._parentDestroy = a.destroy, a.destroy = function(t) {
                this._loader && (this._loader.destroy(), this._loader = null), this._parentDestroy(t);
            };
        }, {
            "../core/Application": 43,
            "./bitmapFontParser": 161,
            "./loader": 163,
            "./spritesheetParser": 164,
            "./textureParser": 165,
            "resource-loader": 36
        } ],
        163: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = u(t("resource-loader")), n = t("resource-loader/lib/middlewares/parsing/blob"), o = u(t("eventemitter3")), s = u(t("./textureParser")), a = u(t("./spritesheetParser")), t = u(t("./bitmapFontParser"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var h, l, c = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(d, h = i.default), d.addPixiMiddleware = function(t) {
                d._pixiMiddleware.push(t);
            }, d.prototype.destroy = function() {
                this.removeAllListeners(), this.reset();
            }, d);
            function d(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, d);
                var i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, h.call(this, t, e));
                o.default.call(i);
                for (var r = 0; r < d._pixiMiddleware.length; ++r) i.use(d._pixiMiddleware[r]());
                return i.onStart.add(function(t) {
                    return i.emit("start", t);
                }), i.onProgress.add(function(t, e) {
                    return i.emit("progress", t, e);
                }), i.onError.add(function(t, e, r) {
                    return i.emit("error", t, e, r);
                }), i.onLoad.add(function(t, e) {
                    return i.emit("load", t, e);
                }), i.onComplete.add(function(t, e) {
                    return i.emit("complete", t, e);
                }), i;
            }
            for (l in r.default = c, o.default.prototype) c.prototype[l] = o.default.prototype[l];
            c._pixiMiddleware = [ n.blobMiddlewareFactory, s.default, a.default, t.default ];
            i = i.default.Resource;
            i.setExtensionXhrType("fnt", i.XHR_RESPONSE_TYPE.DOCUMENT);
        }, {
            "./bitmapFontParser": 161,
            "./spritesheetParser": 164,
            "./textureParser": 165,
            eventemitter3: 3,
            "resource-loader": 36,
            "resource-loader/lib/middlewares/parsing/blob": 37
        } ],
        164: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function() {
                return function(r, i) {
                    var t, e, n = r.name + "_image";
                    r.data && r.type === o.Resource.TYPE.JSON && r.data.frames && !this.resources[n] ? (t = {
                        crossOrigin: r.crossOrigin,
                        loadType: o.Resource.LOAD_TYPE.IMAGE,
                        metadata: r.metadata.imageMetadata,
                        parentResource: r
                    }, e = u(r, this.baseUrl), this.add(n, e, t, function(t) {
                        var e = new a.Spritesheet(t.texture.baseTexture, r.data, r.url);
                        e.parse(function() {
                            r.spritesheet = e, r.textures = e.textures, i();
                        });
                    })) : i();
                };
            }, r.getResourcePath = u;
            var i, o = t("resource-loader"), n = t("url"), s = (i = n) && i.__esModule ? i : {
                default: i
            }, a = t("../core");
            function u(t, e) {
                return t.isDataUrl ? t.data.meta.image : s.default.resolve(t.url.replace(e, ""), t.data.meta.image);
            }
        }, {
            "../core": 65,
            "resource-loader": 36,
            url: 29
        } ],
        165: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function() {
                return function(t, e) {
                    t.data && t.type === n.Resource.TYPE.IMAGE && (t.texture = s.default.fromLoader(t.data, t.url, t.name)), 
                    e();
                };
            };
            var i, n = t("resource-loader"), o = t("../core/textures/Texture"), s = (i = o) && i.__esModule ? i : {
                default: i
            };
        }, {
            "../core/textures/Texture": 115,
            "resource-loader": 36
        } ],
        166: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), a = t("../extras/TextureTransform"), u = (o = a) && o.__esModule ? o : {
                default: o
            };
            var h, l = new s.Point(), c = new s.Polygon(), i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(d, h = s.Container), d.prototype._renderWebGL = function(t) {
                this.refresh(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this);
            }, d.prototype._renderCanvas = function(t) {
                this.refresh(), t.plugins[this.pluginName].render(this);
            }, d.prototype._onTextureUpdate = function() {
                this._uvTransform.texture = this._texture, this.refresh();
            }, d.prototype.multiplyUvs = function() {
                this.uploadUvTransform || this._uvTransform.multiplyUvs(this.uvs);
            }, d.prototype.refresh = function(t) {
                this._uvTransform.update(t) && this._refresh();
            }, d.prototype._refresh = function() {}, d.prototype._calculateBounds = function() {
                this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length);
            }, d.prototype.containsPoint = function(t) {
                if (!this.getBounds().contains(t.x, t.y)) return !1;
                this.worldTransform.applyInverse(t, l);
                for (var e = this.vertices, r = c.points, i = this.indices, n = this.indices.length, o = this.drawMode === d.DRAW_MODES.TRIANGLES ? 3 : 1, s = 0; s + 2 < n; s += o) {
                    var a = 2 * i[s], u = 2 * i[s + 1], h = 2 * i[s + 2];
                    if (r[0] = e[a], r[1] = e[1 + a], r[2] = e[u], r[3] = e[1 + u], r[4] = e[h], r[5] = e[1 + h], 
                    c.contains(l.x, l.y)) return !0;
                }
                return !1;
            }, i(d, [ {
                key: "texture",
                get: function() {
                    return this._texture;
                },
                set: function(t) {
                    this._texture !== t && (this._texture = t) && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this));
                }
            }, {
                key: "tint",
                get: function() {
                    return s.utils.rgb2hex(this.tintRgb);
                },
                set: function(t) {
                    this.tintRgb = s.utils.hex2rgb(t, this.tintRgb);
                }
            } ]), d);
            function d(t, e, r, i, n) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, d);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, h.call(this));
                return o._texture = t, o.uvs = r || new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), 
                o.vertices = e || new Float32Array([ 0, 0, 100, 0, 100, 100, 0, 100 ]), o.indices = i || new Uint16Array([ 0, 1, 3, 2 ]), 
                o.dirty = 0, o.indexDirty = 0, o.blendMode = s.BLEND_MODES.NORMAL, o.canvasPadding = 0, 
                o.drawMode = n || d.DRAW_MODES.TRIANGLE_MESH, o.shader = null, o.tintRgb = new Float32Array([ 1, 1, 1 ]), 
                o._glDatas = {}, o._uvTransform = new u.default(t), o.uploadUvTransform = !1, o.pluginName = "mesh", 
                o;
            }
            (r.default = i).DRAW_MODES = {
                TRIANGLE_MESH: 0,
                TRIANGLES: 1
            };
        }, {
            "../core": 65,
            "../extras/TextureTransform": 136
        } ],
        167: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o, s = t("./Plane"), t = (o = s) && o.__esModule ? o : {
                default: o
            };
            var a, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(u, a = t.default), u.prototype.updateHorizontalVertices = function() {
                var t = this.vertices;
                t[9] = t[11] = t[13] = t[15] = this._topHeight, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight, 
                t[25] = t[27] = t[29] = t[31] = this._height;
            }, u.prototype.updateVerticalVertices = function() {
                var t = this.vertices;
                t[2] = t[10] = t[18] = t[26] = this._leftWidth, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth, 
                t[6] = t[14] = t[22] = t[30] = this._width;
            }, u.prototype._renderCanvas = function(t) {
                var e = t.context;
                e.globalAlpha = this.worldAlpha;
                var r = this.worldTransform, i = t.resolution;
                t.roundPixels ? e.setTransform(r.a * i, r.b * i, r.c * i, r.d * i, r.tx * i | 0, r.ty * i | 0) : e.setTransform(r.a * i, r.b * i, r.c * i, r.d * i, r.tx * i, r.ty * i);
                t = this._texture.baseTexture, r = t.source, i = t.width, t = t.height;
                this.drawSegment(e, r, i, t, 0, 1, 10, 11), this.drawSegment(e, r, i, t, 2, 3, 12, 13), 
                this.drawSegment(e, r, i, t, 4, 5, 14, 15), this.drawSegment(e, r, i, t, 8, 9, 18, 19), 
                this.drawSegment(e, r, i, t, 10, 11, 20, 21), this.drawSegment(e, r, i, t, 12, 13, 22, 23), 
                this.drawSegment(e, r, i, t, 16, 17, 26, 27), this.drawSegment(e, r, i, t, 18, 19, 28, 29), 
                this.drawSegment(e, r, i, t, 20, 21, 30, 31);
            }, u.prototype.drawSegment = function(t, e, r, i, n, o, s, a) {
                var u = this.uvs, h = this.vertices, l = (u[s] - u[n]) * r, c = (u[a] - u[o]) * i, s = h[s] - h[n], a = h[a] - h[o];
                t.drawImage(e, u[n] * r, u[o] * i, l = l < 1 ? 1 : l, c = c < 1 ? 1 : c, h[n], h[o], s = s < 1 ? 1 : s, a = a < 1 ? 1 : a);
            }, u.prototype._refresh = function() {
                a.prototype._refresh.call(this);
                var t = this.uvs, e = this._texture;
                this._origWidth = e.orig.width, this._origHeight = e.orig.height;
                var r = 1 / this._origWidth, e = 1 / this._origHeight;
                t[0] = t[8] = t[16] = t[24] = 0, t[1] = t[3] = t[5] = t[7] = 0, t[6] = t[14] = t[22] = t[30] = 1, 
                t[25] = t[27] = t[29] = t[31] = 1, t[2] = t[10] = t[18] = t[26] = r * this._leftWidth, 
                t[4] = t[12] = t[20] = t[28] = 1 - r * this._rightWidth, t[9] = t[11] = t[13] = t[15] = e * this._topHeight, 
                t[17] = t[19] = t[21] = t[23] = 1 - e * this._bottomHeight, this.updateHorizontalVertices(), 
                this.updateVerticalVertices(), this.dirty = !0, this.multiplyUvs();
            }, i(u, [ {
                key: "width",
                get: function() {
                    return this._width;
                },
                set: function(t) {
                    this._width = t, this._refresh();
                }
            }, {
                key: "height",
                get: function() {
                    return this._height;
                },
                set: function(t) {
                    this._height = t, this._refresh();
                }
            }, {
                key: "leftWidth",
                get: function() {
                    return this._leftWidth;
                },
                set: function(t) {
                    this._leftWidth = t, this._refresh();
                }
            }, {
                key: "rightWidth",
                get: function() {
                    return this._rightWidth;
                },
                set: function(t) {
                    this._rightWidth = t, this._refresh();
                }
            }, {
                key: "topHeight",
                get: function() {
                    return this._topHeight;
                },
                set: function(t) {
                    this._topHeight = t, this._refresh();
                }
            }, {
                key: "bottomHeight",
                get: function() {
                    return this._bottomHeight;
                },
                set: function(t) {
                    this._bottomHeight = t, this._refresh();
                }
            } ]), u);
            function u(t, e, r, i, n) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u);
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, a.call(this, t, 4, 4));
                return o._origWidth = t.orig.width, o._origHeight = t.orig.height, o._width = o._origWidth, 
                o._height = o._origHeight, o.leftWidth = void 0 !== e ? e : 10, o.rightWidth = void 0 !== i ? i : 10, 
                o.topHeight = void 0 !== r ? r : 10, o.bottomHeight = void 0 !== n ? n : 10, o.refresh(!0), 
                o;
            }
            r.default = i;
        }, {
            "./Plane": 168
        } ],
        168: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("./Mesh"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            var s, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = o.default), a.prototype._refresh = function() {
                for (var t = this._texture, e = this.verticesX * this.verticesY, r = [], i = [], n = [], o = this.verticesX - 1, s = this.verticesY - 1, a = t.width / o, u = t.height / s, h = 0; h < e; h++) {
                    var l = h % this.verticesX, c = h / this.verticesX | 0;
                    r.push(l * a, c * u), i.push(l / o, c / s);
                }
                for (var d = o * s, f = 0; f < d; f++) {
                    var p = f % o, v = f / o | 0, y = v * this.verticesX + p, g = v * this.verticesX + p + 1, _ = (1 + v) * this.verticesX + p, p = (1 + v) * this.verticesX + p + 1;
                    n.push(y, g, _), n.push(g, p, _);
                }
                this.vertices = new Float32Array(r), this.uvs = new Float32Array(i), this.colors = new Float32Array([]), 
                this.indices = new Uint16Array(n), this.indexDirty = !0, this.multiplyUvs();
            }, a.prototype._onTextureUpdate = function() {
                o.default.prototype._onTextureUpdate.call(this), this._ready && this.refresh();
            }, a);
            function a(t, e, r) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, t));
                return t._ready = !0, t.verticesX = e || 10, t.verticesY = r || 10, t.drawMode = o.default.DRAW_MODES.TRIANGLES, 
                t.refresh(), t;
            }
            r.default = t;
        }, {
            "./Mesh": 166
        } ],
        169: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("./Mesh"), t = (i = n) && i.__esModule ? i : {
                default: i
            };
            var o, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(s, o = t.default), s.prototype._refresh = function() {
                var t = this.points;
                if (!(t.length < 1) && this._texture._uvs) {
                    this.vertices.length / 4 !== t.length && (this.vertices = new Float32Array(4 * t.length), 
                    this.uvs = new Float32Array(4 * t.length), this.colors = new Float32Array(2 * t.length), 
                    this.indices = new Uint16Array(2 * t.length));
                    var e = this.uvs, r = this.indices, i = this.colors;
                    e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, i[0] = 1, i[1] = 1, r[0] = 0, r[1] = 1;
                    for (var n = t.length, o = 1; o < n; o++) {
                        var s = 4 * o, a = o / (n - 1);
                        e[s] = a, e[1 + s] = 0, e[2 + s] = a, e[3 + s] = 1, i[s = 2 * o] = 1, i[1 + s] = 1, 
                        r[s = 2 * o] = s, r[1 + s] = 1 + s;
                    }
                    this.dirty++, this.indexDirty++, this.multiplyUvs(), this.refreshVertices();
                }
            }, s.prototype.refreshVertices = function() {
                var t = this.points;
                if (!(t.length < 1)) for (var e = t[0], r = void 0, i = this.vertices, n = t.length, o = 0; o < n; o++) {
                    var s = t[o], a = 4 * o, u = -((r = o < t.length - 1 ? t[o + 1] : s).x - e.x), h = r.y - e.y, l = Math.sqrt(h * h + u * u), c = this._texture.height / 2;
                    h /= l, u /= l, h *= c, u *= c, i[a] = s.x + h, i[1 + a] = s.y + u, i[2 + a] = s.x - h, 
                    i[3 + a] = s.y - u, e = s;
                }
            }, s.prototype.updateTransform = function() {
                this.autoUpdate && this.refreshVertices(), this.containerUpdateTransform();
            }, s);
            function s(t, e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, o.call(this, t));
                return t.points = e, t.vertices = new Float32Array(4 * e.length), t.uvs = new Float32Array(4 * e.length), 
                t.colors = new Float32Array(2 * e.length), t.indices = new Uint16Array(2 * e.length), 
                t.autoUpdate = !0, t.refresh(), t;
            }
            r.default = t;
        }, {
            "./Mesh": 166
        } ],
        170: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), o = t("../Mesh"), s = (i = o) && i.__esModule ? i : {
                default: i
            };
            a.prototype.render = function(t) {
                var e = this.renderer, r = e.context, i = t.worldTransform, n = e.resolution;
                e.roundPixels ? r.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n | 0, i.ty * n | 0) : r.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n), 
                e.setBlendMode(t.blendMode), t.drawMode === s.default.DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(t) : this._renderTriangles(t);
            }, a.prototype._renderTriangleMesh = function(t) {
                for (var e = t.vertices.length / 2, r = 0; r < e - 2; r++) {
                    var i = 2 * r;
                    this._renderDrawTriangle(t, i, 2 + i, 4 + i);
                }
            }, a.prototype._renderTriangles = function(t) {
                for (var e = t.indices, r = e.length, i = 0; i < r; i += 3) {
                    var n = 2 * e[i], o = 2 * e[i + 1], s = 2 * e[i + 2];
                    this._renderDrawTriangle(t, n, o, s);
                }
            }, a.prototype._renderDrawTriangle = function(t, e, r, i) {
                var n, o, s, a, u, h, l, c, d, f, p, v, y, g, _, m, b = this.renderer.context, x = t.uvs, T = t.vertices, w = t._texture;
                w.valid && (o = (n = w.baseTexture).source, s = n.width, a = n.height, f = d = c = l = h = u = void 0, 
                f = t.uploadUvTransform ? (v = t._uvTransform.mapCoord, u = (x[e] * v.a + x[e + 1] * v.c + v.tx) * n.width, 
                h = (x[r] * v.a + x[r + 1] * v.c + v.tx) * n.width, l = (x[i] * v.a + x[i + 1] * v.c + v.tx) * n.width, 
                c = (x[e] * v.b + x[e + 1] * v.d + v.ty) * n.height, d = (x[r] * v.b + x[r + 1] * v.d + v.ty) * n.height, 
                (x[i] * v.b + x[i + 1] * v.d + v.ty) * n.height) : (u = x[e] * n.width, h = x[r] * n.width, 
                l = x[i] * n.width, c = x[e + 1] * n.height, d = x[r + 1] * n.height, x[i + 1] * n.height), 
                y = T[e], _ = T[r], p = T[i], g = T[e + 1], w = T[r + 1], v = T[i + 1], 0 < t.canvasPadding && (x = t.canvasPadding / t.worldTransform.a, 
                m = t.canvasPadding / t.worldTransform.d, r = g - (e = (g + w + v) / 3), y = (T = (y + _ + p) / 3) + (i = y - T) / (t = Math.sqrt(i * i + r * r)) * (t + x), 
                g = e + r / t * (t + m), r = w - e, _ = T + (i = _ - T) / (t = Math.sqrt(i * i + r * r)) * (t + x), 
                w = e + r / t * (t + m), r = v - e, p = T + (i = p - T) / (t = Math.sqrt(i * i + r * r)) * (t + x), 
                v = e + r / t * (t + m)), b.save(), b.beginPath(), b.moveTo(y, g), b.lineTo(_, w), 
                b.lineTo(p, v), b.closePath(), b.clip(), b.transform((y * d + c * p + _ * f - d * p - c * _ - y * f) / (m = u * d + c * l + h * f - d * l - c * h - u * f), (g * d + c * v + w * f - d * v - c * w - g * f) / m, (u * _ + y * l + h * p - _ * l - y * h - u * p) / m, (u * w + g * l + h * v - w * l - g * h - u * v) / m, (u * d * p + c * _ * l + y * h * f - y * d * l - c * h * p - u * _ * f) / m, (u * d * v + c * w * l + g * h * f - g * d * l - c * h * v - u * w * f) / m), 
                b.drawImage(o, 0, 0, s * n.resolution, a * n.resolution, 0, 0, s, a), b.restore(), 
                this.renderer.invalidateBlendMode());
            }, a.prototype.renderMeshFlat = function(t) {
                var e = this.renderer.context, r = t.vertices, i = r.length / 2;
                e.beginPath();
                for (var n = 1; n < i - 2; ++n) {
                    var o = 2 * n, s = r[o], a = r[1 + o], u = r[2 + o], h = r[3 + o], l = r[4 + o], o = r[5 + o];
                    e.moveTo(s, a), e.lineTo(u, h), e.lineTo(l, o);
                }
                e.fillStyle = "#FF0000", e.fill(), e.closePath();
            }, a.prototype.destroy = function() {
                this.renderer = null;
            }, t = a;
            function a(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a), this.renderer = t;
            }
            r.default = t, n.CanvasRenderer.registerPlugin("mesh", t);
        }, {
            "../../core": 65,
            "../Mesh": 166
        } ],
        171: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./Mesh");
            Object.defineProperty(r, "Mesh", {
                enumerable: !0,
                get: function() {
                    return h(i).default;
                }
            });
            var n = t("./webgl/MeshRenderer");
            Object.defineProperty(r, "MeshRenderer", {
                enumerable: !0,
                get: function() {
                    return h(n).default;
                }
            });
            var o = t("./canvas/CanvasMeshRenderer");
            Object.defineProperty(r, "CanvasMeshRenderer", {
                enumerable: !0,
                get: function() {
                    return h(o).default;
                }
            });
            var s = t("./Plane");
            Object.defineProperty(r, "Plane", {
                enumerable: !0,
                get: function() {
                    return h(s).default;
                }
            });
            var a = t("./NineSlicePlane");
            Object.defineProperty(r, "NineSlicePlane", {
                enumerable: !0,
                get: function() {
                    return h(a).default;
                }
            });
            var u = t("./Rope");
            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "Rope", {
                enumerable: !0,
                get: function() {
                    return h(u).default;
                }
            });
        }, {
            "./Mesh": 166,
            "./NineSlicePlane": 167,
            "./Plane": 168,
            "./Rope": 169,
            "./canvas/CanvasMeshRenderer": 170,
            "./webgl/MeshRenderer": 172
        } ],
        172: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), s = i(t("pixi-gl-core")), a = i(t("../Mesh"));
            t("path");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var n, u = o.Matrix.IDENTITY, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(h, n = o.ObjectRenderer), h.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.shader = new o.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n");
            }, h.prototype.render = function(t) {
                var e, r = this.renderer, i = r.gl, n = t._texture;
                n.valid && ((e = t._glDatas[r.CONTEXT_UID]) || (r.bindVao(null), (e = {
                    shader: this.shader,
                    vertexBuffer: s.default.GLBuffer.createVertexBuffer(i, t.vertices, i.STREAM_DRAW),
                    uvBuffer: s.default.GLBuffer.createVertexBuffer(i, t.uvs, i.STREAM_DRAW),
                    indexBuffer: s.default.GLBuffer.createIndexBuffer(i, t.indices, i.STATIC_DRAW),
                    vao: null,
                    dirty: t.dirty,
                    indexDirty: t.indexDirty
                }).vao = new s.default.VertexArrayObject(i).addIndex(e.indexBuffer).addAttribute(e.vertexBuffer, e.shader.attributes.aVertexPosition, i.FLOAT, !1, 8, 0).addAttribute(e.uvBuffer, e.shader.attributes.aTextureCoord, i.FLOAT, !1, 8, 0), 
                t._glDatas[r.CONTEXT_UID] = e), r.bindVao(e.vao), t.dirty !== e.dirty && (e.dirty = t.dirty, 
                e.uvBuffer.upload(t.uvs)), t.indexDirty !== e.indexDirty && (e.indexDirty = t.indexDirty, 
                e.indexBuffer.upload(t.indices)), e.vertexBuffer.upload(t.vertices), r.bindShader(e.shader), 
                e.shader.uniforms.uSampler = r.bindTexture(n), r.state.setBlendMode(o.utils.correctBlendMode(t.blendMode, n.baseTexture.premultipliedAlpha)), 
                e.shader.uniforms.uTransform && (t.uploadUvTransform ? e.shader.uniforms.uTransform = t._uvTransform.mapCoord.toArray(!0) : e.shader.uniforms.uTransform = u.toArray(!0)), 
                e.shader.uniforms.translationMatrix = t.worldTransform.toArray(!0), e.shader.uniforms.uColor = o.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, e.shader.uniforms.uColor, n.baseTexture.premultipliedAlpha), 
                i = t.drawMode === a.default.DRAW_MODES.TRIANGLE_MESH ? i.TRIANGLE_STRIP : i.TRIANGLES, 
                e.vao.draw(i, t.indices.length, 0));
            }, h);
            function h(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, h);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, n.call(this, t));
                return t.shader = null, t;
            }
            r.default = t, o.WebGLRenderer.registerPlugin("mesh", t);
        }, {
            "../../core": 65,
            "../Mesh": 166,
            path: 23,
            "pixi-gl-core": 12
        } ],
        173: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(t, i.key, i);
                }
            }
            var o = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), s = t("../core/utils");
            var a, i = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(u, a = o.Container), u.prototype.setProperties = function(t) {
                t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], 
                this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], 
                this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4]);
            }, u.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform();
            }, u.prototype.renderWebGL = function(t) {
                var e = this;
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, 
                this.baseTexture.hasLoaded || this.baseTexture.once("update", function() {
                    return e.onChildrenChange(0);
                })), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this));
            }, u.prototype.onChildrenChange = function(t) {
                t = Math.floor(t / this._batchSize);
                t < this._bufferToUpdate && (this._bufferToUpdate = t);
            }, u.prototype.renderCanvas = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                    var e = t.context, r = this.worldTransform, i = !0, n = 0, o = 0, s = 0, a = 0;
                    t.setBlendMode(this.blendMode), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                    for (var u = 0; u < this.children.length; ++u) {
                        var h, l, c = this.children[u];
                        c.visible && (h = c._texture.frame, e.globalAlpha = this.worldAlpha * c.alpha, a = c.rotation % (2 * Math.PI) == 0 ? (i && (e.setTransform(r.a, r.b, r.c, r.d, r.tx * t.resolution, r.ty * t.resolution), 
                        i = !1), n = c.anchor.x * (-h.width * c.scale.x) + c.position.x + .5, o = c.anchor.y * (-h.height * c.scale.y) + c.position.y + .5, 
                        s = h.width * c.scale.x, h.height * c.scale.y) : (i = i || !0, c.displayObjectUpdateTransform(), 
                        l = c.worldTransform, t.roundPixels ? e.setTransform(l.a, l.b, l.c, l.d, l.tx * t.resolution | 0, l.ty * t.resolution | 0) : e.setTransform(l.a, l.b, l.c, l.d, l.tx * t.resolution, l.ty * t.resolution), 
                        n = c.anchor.x * -h.width + .5, o = c.anchor.y * -h.height + .5, s = h.width, h.height), 
                        l = c._texture.baseTexture.resolution, e.drawImage(c._texture.baseTexture.source, h.x * l, h.y * l, h.width * l, h.height * l, n * t.resolution, o * t.resolution, s * t.resolution, a * t.resolution));
                    }
                }
            }, u.prototype.destroy = function(t) {
                if (a.prototype.destroy.call(this, t), this._buffers) for (var e = 0; e < this._buffers.length; ++e) this._buffers[e].destroy();
                this._properties = null, this._buffers = null;
            }, i(u, [ {
                key: "tint",
                get: function() {
                    return this._tint;
                },
                set: function(t) {
                    this._tint = t, (0, s.hex2rgb)(t, this.tintRgb);
                }
            } ]), u);
            function u() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1500, e = arguments[1], r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 16384;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, u);
                var i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, a.call(this));
                return t < (r = 16384 < r ? 16384 : r) && (r = t), i._properties = [ !1, !0, !1, !1, !1 ], 
                i._maxSize = t, i._batchSize = r, i._glBuffers = {}, i._bufferToUpdate = 0, i.interactiveChildren = !1, 
                i.blendMode = o.BLEND_MODES.NORMAL, i.roundPixels = !0, i.baseTexture = null, i.setProperties(e), 
                i._tint = 0, i.tintRgb = new Float32Array(4), i.tint = 16777215, i;
            }
            r.default = i;
        }, {
            "../core": 65,
            "../core/utils": 124
        } ],
        174: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./ParticleContainer");
            Object.defineProperty(r, "ParticleContainer", {
                enumerable: !0,
                get: function() {
                    return o(i).default;
                }
            });
            var n = t("./webgl/ParticleRenderer");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "ParticleRenderer", {
                enumerable: !0,
                get: function() {
                    return o(n).default;
                }
            });
        }, {
            "./ParticleContainer": 173,
            "./webgl/ParticleRenderer": 176
        } ],
        175: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var c = i(t("pixi-gl-core")), d = i(t("../../core/utils/createIndicesForQuads"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            s.prototype.initBuffers = function() {
                var t = this.gl, e = 0;
                this.indices = (0, d.default)(this.size), this.indexBuffer = c.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW);
                for (var r = this.dynamicStride = 0; r < this.dynamicProperties.length; ++r) {
                    var i = this.dynamicProperties[r];
                    i.offset = e, e += i.size, this.dynamicStride += i.size;
                }
                this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = c.default.GLBuffer.createVertexBuffer(t, this.dynamicData, t.STREAM_DRAW);
                for (var n = 0, o = this.staticStride = 0; o < this.staticProperties.length; ++o) {
                    var s = this.staticProperties[o];
                    s.offset = n, n += s.size, this.staticStride += s.size;
                }
                this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = c.default.GLBuffer.createVertexBuffer(t, this.staticData, t.STATIC_DRAW), 
                this.vao = new c.default.VertexArrayObject(t).addIndex(this.indexBuffer);
                for (var a = 0; a < this.dynamicProperties.length; ++a) {
                    var u = this.dynamicProperties[a];
                    this.vao.addAttribute(this.dynamicBuffer, u.attribute, t.FLOAT, !1, 4 * this.dynamicStride, 4 * u.offset);
                }
                for (var h = 0; h < this.staticProperties.length; ++h) {
                    var l = this.staticProperties[h];
                    this.vao.addAttribute(this.staticBuffer, l.attribute, t.FLOAT, !1, 4 * this.staticStride, 4 * l.offset);
                }
            }, s.prototype.uploadDynamic = function(t, e, r) {
                for (var i = 0; i < this.dynamicProperties.length; i++) {
                    var n = this.dynamicProperties[i];
                    n.uploadFunction(t, e, r, this.dynamicData, this.dynamicStride, n.offset);
                }
                this.dynamicBuffer.upload();
            }, s.prototype.uploadStatic = function(t, e, r) {
                for (var i = 0; i < this.staticProperties.length; i++) {
                    var n = this.staticProperties[i];
                    n.uploadFunction(t, e, r, this.staticData, this.staticStride, n.offset);
                }
                this.staticBuffer.upload();
            }, s.prototype.destroy = function() {
                this.dynamicProperties = null, this.dynamicData = null, this.dynamicBuffer.destroy(), 
                this.staticProperties = null, this.staticData = null, this.staticBuffer.destroy();
            }, t = s;
            function s(t, e, r, i) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, 
                this.size = i, this.dynamicProperties = [], this.staticProperties = [];
                for (var n = 0; n < e.length; ++n) {
                    var o = {
                        attribute: (o = e[n]).attribute,
                        size: o.size,
                        uploadFunction: o.uploadFunction,
                        offset: o.offset
                    };
                    (r[n] ? this.dynamicProperties : this.staticProperties).push(o);
                }
                this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, 
                this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers();
            }
            r.default = t;
        }, {
            "../../core/utils/createIndicesForQuads": 122,
            "pixi-gl-core": 12
        } ],
        176: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var f = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), i = n(t("./ParticleShader")), a = n(t("./ParticleBuffer"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var o, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(s, o = f.ObjectRenderer), s.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new i.default(t), this.properties = [ {
                    attribute: this.shader.attributes.aVertexPosition,
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aPositionCoord,
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aRotation,
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aTextureCoord,
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aColor,
                    size: 1,
                    uploadFunction: this.uploadAlpha,
                    offset: 0
                } ];
            }, s.prototype.start = function() {
                this.renderer.bindShader(this.shader);
            }, s.prototype.render = function(t) {
                var e = t.children, r = t._maxSize, i = t._batchSize, n = this.renderer, o = e.length;
                if (0 !== o) {
                    r < o && (o = r);
                    var s = (s = t._glBuffers[n.CONTEXT_UID]) || (t._glBuffers[n.CONTEXT_UID] = this.generateBuffers(t)), a = e[0]._texture.baseTexture;
                    this.renderer.setBlendMode(f.utils.correctBlendMode(t.blendMode, a.premultipliedAlpha));
                    var u = n.gl, r = t.worldTransform.copy(this.tempMatrix);
                    r.prepend(n._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = r.toArray(!0), 
                    this.shader.uniforms.uColor = f.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, a.premultipliedAlpha), 
                    this.shader.uniforms.uSampler = n.bindTexture(a);
                    for (var h = 0, l = 0; h < o; h += i, l += 1) {
                        var c = o - h;
                        i < c && (c = i);
                        var d = s[l];
                        d.uploadDynamic(e, h, c), t._bufferToUpdate === l && (d.uploadStatic(e, h, c), t._bufferToUpdate = l + 1), 
                        n.bindVao(d.vao), d.vao.draw(u.TRIANGLES, 6 * c);
                    }
                }
            }, s.prototype.generateBuffers = function(t) {
                for (var e = this.renderer.gl, r = [], i = t._maxSize, n = t._batchSize, o = t._properties, s = 0; s < i; s += n) r.push(new a.default(e, this.properties, o, n));
                return r;
            }, s.prototype.uploadVertices = function(t, e, r, i, n, o) {
                for (var s = 0, a = 0, u = 0, h = 0, l = 0; l < r; ++l) {
                    var c = t[e + l], d = c._texture, f = c.scale.x, p = c.scale.y, v = d.trim, d = d.orig;
                    v ? (s = (a = v.x - c.anchor.x * d.width) + v.width, u = (h = v.y - c.anchor.y * d.height) + v.height) : (s = d.width * (1 - c.anchor.x), 
                    a = d.width * -c.anchor.x, u = d.height * (1 - c.anchor.y), h = d.height * -c.anchor.y), 
                    i[o] = a * f, i[o + 1] = h * p, i[o + n] = s * f, i[o + n + 1] = h * p, i[o + 2 * n] = s * f, 
                    i[o + 2 * n + 1] = u * p, i[o + 3 * n] = a * f, i[o + 3 * n + 1] = u * p, o += 4 * n;
                }
            }, s.prototype.uploadPosition = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].position;
                    i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, 
                    i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n;
                }
            }, s.prototype.uploadRotation = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].rotation;
                    i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n;
                }
            }, s.prototype.uploadUvs = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; ++s) {
                    var a = t[e + s]._texture._uvs;
                    a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, 
                    i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3) : (i[o] = 0, 
                    i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, 
                    i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0), o += 4 * n;
                }
            }, s.prototype.uploadAlpha = function(t, e, r, i, n, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].alpha;
                    i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n;
                }
            }, s.prototype.destroy = function() {
                this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), o.prototype.destroy.call(this), 
                this.shader.destroy(), this.indices = null, this.tempMatrix = null;
            }, s);
            function s(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, o.call(this, t));
                return t.shader = null, t.indexBuffer = null, t.properties = null, t.tempMatrix = new f.Matrix(), 
                t.CONTEXT_UID = 0, t;
            }
            r.default = t, f.WebGLRenderer.registerPlugin("particle", t);
        }, {
            "../../core": 65,
            "./ParticleBuffer": 175,
            "./ParticleShader": 177
        } ],
        177: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = t("../../core/Shader"), t = (i = n) && i.__esModule ? i : {
                default: i
            };
            var o, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(s, o = t.default), s);
            function s(t) {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, o.call(this, t, [ "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}" ].join("\n"), [ "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform vec4 uColor;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uColor;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}" ].join("\n")));
            }
            r.default = t;
        }, {
            "../../core/Shader": 44
        } ],
        178: [ function(t, e, r) {
            "use strict";
            Math.sign || (Math.sign = function(t) {
                return 0 === (t = Number(t)) || isNaN(t) ? t : 0 < t ? 1 : -1;
            });
        }, {} ],
        179: [ function(t, e, r) {
            "use strict";
            var i, n = t("object-assign"), t = (i = n) && i.__esModule ? i : {
                default: i
            };
            Object.assign || (Object.assign = t.default);
        }, {
            "object-assign": 5
        } ],
        180: [ function(t, e, r) {
            "use strict";
            t("./Object.assign"), t("./requestAnimationFrame"), t("./Math.sign"), window.ArrayBuffer || (window.ArrayBuffer = Array), 
            window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), 
            window.Uint16Array || (window.Uint16Array = Array);
        }, {
            "./Math.sign": 178,
            "./Object.assign": 179,
            "./requestAnimationFrame": 181
        } ],
        181: [ function(t, e, r) {
            !function(t) {
                "use strict";
                var e;
                Date.now && Date.prototype.getTime || (Date.now = function() {
                    return new Date().getTime();
                }), t.performance && t.performance.now || (e = Date.now(), t.performance || (t.performance = {}), 
                t.performance.now = function() {
                    return Date.now() - e;
                });
                for (var i = Date.now(), r = [ "ms", "moz", "webkit", "o" ], n = 0; n < r.length && !t.requestAnimationFrame; ++n) {
                    var o = r[n];
                    t.requestAnimationFrame = t[o + "RequestAnimationFrame"], t.cancelAnimationFrame = t[o + "CancelAnimationFrame"] || t[o + "CancelRequestAnimationFrame"];
                }
                t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
                    if ("function" != typeof t) throw new TypeError(t + "is not a function");
                    var e = Date.now(), r = 16 + i - e;
                    return r < 0 && (r = 0), i = e, setTimeout(function() {
                        i = Date.now(), t(performance.now());
                    }, r);
                }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                    return clearTimeout(t);
                });
            }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {} ],
        182: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, a = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../core")), n = t("./limiters/CountLimiter"), o = (i = n) && i.__esModule ? i : {
                default: i
            };
            var u = a.ticker.shared;
            a.settings.UPLOADS_PER_FRAME = 4;
            s.prototype.upload = function(t, e) {
                "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), 
                this.ticking || (this.ticking = !0, u.addOnce(this.tick, this, a.UPDATE_PRIORITY.UTILITY))) : e && e();
            }, s.prototype.tick = function() {
                setTimeout(this.delayedTick, 0);
            }, s.prototype.prepareItems = function() {
                for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
                    var t = this.queue[0], e = !1;
                    if (t && !t._destroyed) for (var r = 0, i = this.uploadHooks.length; r < i; r++) if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                        this.queue.shift(), e = !0;
                        break;
                    }
                    e || this.queue.shift();
                }
                if (this.queue.length) u.addOnce(this.tick, this, a.UPDATE_PRIORITY.UTILITY); else {
                    this.ticking = !1;
                    for (var n = this.completes.slice(0), o = this.completes.length = 0, s = n.length; o < s; o++) n[o]();
                }
            }, s.prototype.registerFindHook = function(t) {
                return t && this.addHooks.push(t), this;
            }, s.prototype.registerUploadHook = function(t) {
                return t && this.uploadHooks.push(t), this;
            }, s.prototype.add = function(t) {
                for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++);
                if (t instanceof a.Container) for (var i = t.children.length - 1; 0 <= i; i--) this.add(t.children[i]);
                return this;
            }, s.prototype.destroy = function() {
                this.ticking && u.remove(this.tick, this), this.ticking = !1, this.addHooks = null, 
                this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, 
                this.limiter = null, this.uploadHookHelper = null;
            }, t = s;
            function s(t) {
                var e = this;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, s), this.limiter = new o.default(a.settings.UPLOADS_PER_FRAME), this.renderer = t, 
                this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], 
                this.completes = [], this.ticking = !1, this.delayedTick = function() {
                    e.queue && e.prepareItems();
                }, this.registerFindHook(p), this.registerFindHook(v), this.registerFindHook(h), 
                this.registerFindHook(l), this.registerFindHook(c), this.registerUploadHook(d), 
                this.registerUploadHook(f);
            }
            function h(t, e) {
                var r = !1;
                if (t && t._textures && t._textures.length) for (var i, n = 0; n < t._textures.length; n++) t._textures[n] instanceof a.Texture && (i = t._textures[n].baseTexture, 
                -1 === e.indexOf(i) && (e.push(i), r = !0));
                return r;
            }
            function l(t, e) {
                return t instanceof a.BaseTexture && (-1 === e.indexOf(t) && e.push(t), !0);
            }
            function c(t, e) {
                if (t._texture && t._texture instanceof a.Texture) {
                    t = t._texture.baseTexture;
                    return -1 === e.indexOf(t) && e.push(t), !0;
                }
                return !1;
            }
            function d(t, e) {
                return e instanceof a.Text && (e.updateText(!0), !0);
            }
            function f(t, e) {
                if (e instanceof a.TextStyle) {
                    e = e.toFontString();
                    return a.TextMetrics.measureFont(e), !0;
                }
                return !1;
            }
            function p(t, e) {
                if (t instanceof a.Text) {
                    -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
                    t = t._texture.baseTexture;
                    return -1 === e.indexOf(t) && e.push(t), !0;
                }
                return !1;
            }
            function v(t, e) {
                return t instanceof a.TextStyle && (-1 === e.indexOf(t) && e.push(t), !0);
            }
            r.default = t;
        }, {
            "../core": 65,
            "./limiters/CountLimiter": 185
        } ],
        183: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), o = t("../BasePrepare"), t = (i = o) && i.__esModule ? i : {
                default: i
            };
            var s, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = t.default), a.prototype.destroy = function() {
                s.prototype.destroy.call(this), this.ctx = null, this.canvas = null;
            }, a);
            function a(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, t));
                return (t.uploadHookHelper = t).canvas = document.createElement("canvas"), t.canvas.width = 16, 
                t.canvas.height = 16, t.ctx = t.canvas.getContext("2d"), t.registerUploadHook(u), 
                t;
            }
            function u(t, e) {
                if (e instanceof n.BaseTexture) {
                    var r = e.source, i = 0 === r.width ? t.canvas.width : Math.min(t.canvas.width, r.width), e = 0 === r.height ? t.canvas.height : Math.min(t.canvas.height, r.height);
                    return t.ctx.drawImage(r, 0, 0, i, e, 0, 0, t.canvas.width, t.canvas.height), !0;
                }
                return !1;
            }
            r.default = t, n.CanvasRenderer.registerPlugin("prepare", t);
        }, {
            "../../core": 65,
            "../BasePrepare": 182
        } ],
        184: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = t("./webgl/WebGLPrepare");
            Object.defineProperty(r, "webgl", {
                enumerable: !0,
                get: function() {
                    return u(i).default;
                }
            });
            var n = t("./canvas/CanvasPrepare");
            Object.defineProperty(r, "canvas", {
                enumerable: !0,
                get: function() {
                    return u(n).default;
                }
            });
            var o = t("./BasePrepare");
            Object.defineProperty(r, "BasePrepare", {
                enumerable: !0,
                get: function() {
                    return u(o).default;
                }
            });
            var s = t("./limiters/CountLimiter");
            Object.defineProperty(r, "CountLimiter", {
                enumerable: !0,
                get: function() {
                    return u(s).default;
                }
            });
            var a = t("./limiters/TimeLimiter");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(r, "TimeLimiter", {
                enumerable: !0,
                get: function() {
                    return u(a).default;
                }
            });
        }, {
            "./BasePrepare": 182,
            "./canvas/CanvasPrepare": 183,
            "./limiters/CountLimiter": 185,
            "./limiters/TimeLimiter": 186,
            "./webgl/WebGLPrepare": 187
        } ],
        185: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (n.prototype.beginFrame = function() {
                this.itemsLeft = this.maxItemsPerFrame;
            }, n.prototype.allowedToUpload = function() {
                return 0 < this.itemsLeft--;
            }, n);
            function n(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.maxItemsPerFrame = t, this.itemsLeft = 0;
            }
            r.default = i;
        }, {} ],
        186: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = (n.prototype.beginFrame = function() {
                this.frameStart = Date.now();
            }, n.prototype.allowedToUpload = function() {
                return Date.now() - this.frameStart < this.maxMilliseconds;
            }, n);
            function n(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), this.maxMilliseconds = t, this.frameStart = 0;
            }
            r.default = i;
        }, {} ],
        187: [ function(t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i, n = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
            }(t("../../core")), o = t("../BasePrepare"), t = (i = o) && i.__esModule ? i : {
                default: i
            };
            var s, t = (function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(a, s = t.default), a);
            function a(t) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }(this, s.call(this, t));
                return t.uploadHookHelper = t.renderer, t.registerFindHook(l), t.registerUploadHook(u), 
                t.registerUploadHook(h), t;
            }
            function u(t, e) {
                return e instanceof n.BaseTexture && (e._glTextures[t.CONTEXT_UID] || t.textureManager.updateTexture(e), 
                !0);
            }
            function h(t, e) {
                return e instanceof n.Graphics && (!e.dirty && !e.clearDirty && e._webGL[t.plugins.graphics.CONTEXT_UID] || t.plugins.graphics.updateGraphics(e), 
                !0);
            }
            function l(t, e) {
                return t instanceof n.Graphics && (e.push(t), !0);
            }
            r.default = t, n.WebGLRenderer.registerPlugin("prepare", t);
        }, {
            "../../core": 65,
            "../BasePrepare": 182
        } ],
        188: [ function(g, t, _) {
            !function(t) {
                "use strict";
                _.__esModule = !0, _.loader = _.prepare = _.particles = _.mesh = _.loaders = _.interaction = _.filters = _.extras = _.extract = _.accessibility = void 0;
                var e = g("./polyfill");
                Object.keys(e).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && Object.defineProperty(_, t, {
                        enumerable: !0,
                        get: function() {
                            return e[t];
                        }
                    });
                });
                var r = g("./core");
                Object.keys(r).forEach(function(t) {
                    "default" !== t && "__esModule" !== t && Object.defineProperty(_, t, {
                        enumerable: !0,
                        get: function() {
                            return r[t];
                        }
                    });
                });
                var i, n = g("./deprecation"), o = (i = n) && i.__esModule ? i : {
                    default: i
                }, s = v(g("./accessibility")), a = v(g("./extract")), u = v(g("./extras")), h = v(g("./filters")), l = v(g("./interaction")), c = v(g("./loaders")), d = v(g("./mesh")), f = v(g("./particles")), p = v(g("./prepare"));
                function v(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e;
                }
                r.utils.mixins.performMixins();
                var y = c.shared || null;
                _.accessibility = s, _.extract = a, _.extras = u, _.filters = h, _.interaction = l, 
                _.loaders = c, _.mesh = d, _.particles = f, _.prepare = p, _.loader = y, "function" == typeof o.default && (0, 
                o.default)(_), t.PIXI = _;
            }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {
            "./accessibility": 42,
            "./core": 65,
            "./deprecation": 130,
            "./extract": 132,
            "./extras": 141,
            "./filters": 152,
            "./interaction": 159,
            "./loaders": 162,
            "./mesh": 171,
            "./particles": 174,
            "./polyfill": 180,
            "./prepare": 184
        } ]
    }, {}, [ 188 ])(188);
});