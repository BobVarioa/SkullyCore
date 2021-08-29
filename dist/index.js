(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/cppkies/dist/index.js
  var require_dist = __commonJS({
    "node_modules/cppkies/dist/index.js"(exports, module) {
      (function(e, n) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : (e = e || self, e.Cppkies = n());
      })(exports, function() {
        "use strict";
        var R = Math.abs, F = Math.floor, H = Math.min, D = Math.pow, Y = Math.max;
        function e(e2, n2) {
          function i() {
            this.constructor = e2;
          }
          K(e2, n2), e2.prototype = n2 === null ? Object.create(n2) : (i.prototype = n2.prototype, new i());
        }
        function n(e2, n2, i, o2) {
          return new (i || (i = Promise))(function(a2, r2) {
            function t2(e3) {
              try {
                d2(o2.next(e3));
              } catch (n3) {
                r2(n3);
              }
            }
            function s2(e3) {
              try {
                d2(o2["throw"](e3));
              } catch (n3) {
                r2(n3);
              }
            }
            function d2(e3) {
              e3.done ? a2(e3.value) : new i(function(n3) {
                n3(e3.value);
              }).then(t2, s2);
            }
            d2((o2 = o2.apply(e2, n2 || [])).next());
          });
        }
        function o(e2, n2) {
          function i(e3) {
            return function(n3) {
              return o2([e3, n3]);
            };
          }
          function o2(i2) {
            if (a2)
              throw new TypeError("Generator is already executing.");
            for (; c2; )
              try {
                if (a2 = 1, r2 && (s2 = 2 & i2[0] ? r2["return"] : i2[0] ? r2["throw"] || ((s2 = r2["return"]) && s2.call(r2), 0) : r2.next) && !(s2 = s2.call(r2, i2[1])).done)
                  return s2;
                switch ((r2 = 0, s2) && (i2 = [2 & i2[0], s2.value]), i2[0]) {
                  case 0:
                  case 1:
                    s2 = i2;
                    break;
                  case 4:
                    return c2.label++, { value: i2[1], done: false };
                  case 5:
                    c2.label++, r2 = i2[1], i2 = [0];
                    continue;
                  case 7:
                    i2 = c2.ops.pop(), c2.trys.pop();
                    continue;
                  default:
                    if ((s2 = c2.trys, !(s2 = 0 < s2.length && s2[s2.length - 1])) && (i2[0] === 6 || i2[0] === 2)) {
                      c2 = 0;
                      continue;
                    }
                    if (i2[0] === 3 && (!s2 || i2[1] > s2[0] && i2[1] < s2[3])) {
                      c2.label = i2[1];
                      break;
                    }
                    if (i2[0] === 6 && c2.label < s2[1]) {
                      c2.label = s2[1], s2 = i2;
                      break;
                    }
                    if (s2 && c2.label < s2[2]) {
                      c2.label = s2[2], c2.ops.push(i2);
                      break;
                    }
                    s2[2] && c2.ops.pop(), c2.trys.pop();
                    continue;
                }
                i2 = n2.call(e2, c2);
              } catch (n3) {
                i2 = [6, n3], r2 = 0;
              } finally {
                a2 = s2 = 0;
              }
            if (5 & i2[0])
              throw i2[1];
            return { value: i2[0] ? i2[1] : void 0, done: true };
          }
          var a2, r2, s2, d2, c2 = { label: 0, sent: function() {
            if (1 & s2[0])
              throw s2[1];
            return s2[1];
          }, trys: [], ops: [] };
          return d2 = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (d2[Symbol.iterator] = function() {
            return this;
          }), d2;
        }
        function a() {
          for (var e2 = 0, n2 = 0, o2 = arguments.length; n2 < o2; n2++)
            e2 += arguments[n2].length;
          for (var t2 = Array(e2), r2 = 0, n2 = 0; n2 < o2; n2++)
            for (var d2 = arguments[n2], a2 = 0, c2 = d2.length; a2 < c2; a2++, r2++)
              t2[r2] = d2[a2];
          return t2;
        }
        function r(e2) {
          return e2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }
        function t(e2, n2) {
          var i = n2[0] === null, o2 = /(?:)/;
          n2[0] !== null && (o2 = typeof n2[0] == "string" ? new RegExp(r(n2[0]), "g") : n2[0], !o2.test(e2) && console.warn("Nothing to inject."));
          var a2 = /(\)[^{]*{)/, t2 = /(}?)$/;
          switch (n2[2]) {
            case "before":
              e2 = i ? e2.replace(a2, "$1" + n2[1]) : e2.replace(o2, "" + n2[1] + n2[0]);
              break;
            case "replace":
              e2 = i ? n2[1] : e2.replace(o2, n2[1]);
              break;
            case "after":
              e2 = i ? e2.replace(t2, n2[1] + "$1") : e2.replace(o2, "" + n2[0] + n2[1]);
              break;
            default:
              throw new Error('where Parameter must be "before", "replace" or "after"');
          }
          return e2;
        }
        function s(e2, n2, i, o2, r2) {
          r2 === void 0 && (r2 = {});
          var s2 = Function.apply(void 0, a(Object.keys(r2), ["return (" + t(e2.toString(), [n2, i, o2]) + ")"])).apply(void 0, Object.values(r2));
          return s2.prototype = e2.prototype, s2;
        }
        function d(e2, n2, i) {
          i === void 0 && (i = {});
          for (var o2, r2 = e2.toString(), s2 = 0, d2 = n2; s2 < d2.length; s2++)
            o2 = d2[s2], r2 = t(r2, o2);
          var c2 = Function.apply(void 0, a(Object.keys(i), ["return (" + r2 + ")"])).apply(void 0, Object.values(i));
          return c2.prototype = e2.prototype, c2;
        }
        function c(e2, n2) {
          for (var o2 in n2)
            e2[o2] = n2[o2];
        }
        function u(e2) {
          return e2.charAt(0).toUpperCase() + e2.slice(1).toLowerCase();
        }
        function p(e2, n2) {
          return e2.hasOwnProperty(n2);
        }
        function g(e2) {
          for (var n2, i = [[1e3, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]], o2 = "", a2 = 0, r2 = i; a2 < r2.length; a2++)
            for (n2 = r2[a2]; e2 >= n2[0]; )
              o2 += n2[1], e2 -= n2[0];
          return o2;
        }
        function m(e2) {
          switch (e2) {
            case "mod":
              return { achievements: {}, buildings: {}, upgrades: {} };
            case "dragon":
              return { level: "sync", auras: ["sync", "sync"] };
            case "achievement":
              return { won: false };
            case "upgrade":
              return { bought: false, unlocked: false };
            case "building":
              return { amount: 0, bought: 0, free: 0, totalCookies: 0, level: 0, muted: 0, minigameSave: "" };
            default:
              throw new Error("Invalid fragment name!");
          }
        }
        function k() {
          return { mods: {}, foreign: m("mod"), saveVer: 1, dragon: m("dragon") };
        }
        function b() {
          Ge.save = Q = k();
        }
        function h(e2) {
          return Q.foreign.buildings[e2.name] || m("building");
        }
        function v(e2) {
          var n2 = e2.amount, i = e2.bought, o2 = e2.free, a2 = e2.totalCookies, r2 = e2.level, t2 = e2.muted, s2 = e2.minigameSave, d2 = e2.name;
          Q.foreign.buildings[d2] = { amount: n2, bought: i, free: o2, totalCookies: a2, level: r2, muted: t2, minigameSave: s2 };
        }
        function f(e2) {
          return Q.foreign.upgrades[e2.name] || m("upgrade");
        }
        function C(e2) {
          Q.foreign.upgrades[e2.name] = { unlocked: !!e2.unlocked, bought: !!e2.bought };
        }
        function y(e2) {
          return Q.foreign.achievements[e2.name] || m("achievement");
        }
        function L(e2) {
          Q.foreign.achievements[e2.name] = { won: !!e2.won };
        }
        function O() {
          Q.dragon.level !== "sync" && Q.dragon.level <= Game.dragonLevels.length - 1 && (Game.dragonLevel = Q.dragon.level), Q.dragon.auras[0] !== "sync" && Q.dragon.auras[0] <= Object.keys(Game.dragonAuras).length - 1 && (Game.dragonAura = Q.dragon.auras[0]), Q.dragon.auras[1] !== "sync" && Q.dragon.auras[1] <= Object.keys(Game.dragonAuras).length - 1 && (Game.dragonAura2 = Q.dragon.auras[1]);
        }
        function A() {
          for (var e2, n2 = 0, i = Ge.customBuildings; n2 < i.length; n2++)
            e2 = i[n2], c(e2, h(e2));
          for (var o2, a2 = 0, r2 = Ge.customUpgrades; a2 < r2.length; a2++)
            o2 = r2[a2], c(o2, f(o2)), o2.bought && Game.CountsAsUpgradeOwned(o2.pool) && Game.UpgradesOwned++;
          for (var t2, s2 = 0, d2 = Ge.customAchievements; s2 < d2.length; s2++)
            t2 = d2[s2], c(t2, y(t2)), t2.won && Game.CountsAsAchievementOwned(t2.pool) && Game.AchievementsOwned++;
          O();
        }
        function w() {
          for (var e2, n2 = 0, i = Ge.customBuildings; n2 < i.length; n2++)
            e2 = i[n2], v(e2);
          for (var o2, a2 = 0, r2 = Ge.customUpgrades; a2 < r2.length; a2++)
            o2 = r2[a2], C(o2);
          for (var t2, s2 = 0, d2 = Ge.customAchievements; s2 < d2.length; s2++)
            t2 = d2[s2], L(t2);
        }
        function j(e2) {
          var n2 = k();
          if (typeof e2 != "object" || e2 === null)
            return n2;
          if (!p(e2, "saveVer") || typeof e2.saveVer != "number" || 1 < e2.saveVer)
            return n2;
          if (n2.foreign = p(e2, "foreign") ? function(e3) {
            var n3 = m("mod");
            if (typeof e3 != "object" || e3 === null)
              return n3;
            if (p(e3, "buildings") && typeof e3.buildings == "object" && e3.buildings !== null)
              for (var i2 in e3.buildings) {
                var o3 = e3.buildings[i2];
                if (typeof o3 == "object" && o3 !== null)
                  for (var a2 in n3.buildings[i2] = m("building"), o3)
                    typeof n3.buildings[i2][a2] == typeof o3[a2] && (n3.buildings[i2][a2] = o3[a2]);
              }
            if (p(e3, "upgrades") && typeof e3.upgrades == "object" && e3.upgrades !== null)
              for (var r2 in e3.upgrades) {
                var t2 = e3.upgrades[r2];
                if (typeof t2 == "object" && t2 !== null)
                  for (var a2 in n3.upgrades[r2] = m("upgrade"), n3.upgrades[r2])
                    typeof n3.upgrades[r2][a2] == typeof t2[a2] && (n3.upgrades[r2][a2] = t2[a2]);
              }
            if (p(e3, "achievements") && typeof e3.achievements == "object" && e3.achievements !== null)
              for (var s2 in e3.achievements) {
                var d2 = e3.achievements[s2];
                if (typeof d2 == "object" && d2 !== null)
                  for (var a2 in n3.achievements[s2] = m("achievement"), n3.achievements[s2])
                    typeof n3.achievements[s2][a2] == typeof d2[a2] && (n3.achievements[s2][a2] = d2[a2]);
              }
            return n3;
          }(e2.foreign) : m("mod"), p(e2, "dragon") && typeof e2.dragon == "object" && e2.dragon !== null && (p(e2.dragon, "level") && (typeof e2.dragon.level == "number" || e2.dragon.level === "sync") && (n2.dragon.level = e2.dragon.level), p(e2.dragon, "auras") && e2.dragon.auras instanceof Array))
            for (var o2 in e2.dragon.auras) {
              var i = e2.dragon.auras[o2];
              (typeof i == "number" || i === "sync") && (n2.dragon.auras[o2] = i);
            }
          return n2;
        }
        function S(e2) {
          var n2;
          try {
            n2 = JSON.parse(e2);
          } catch (n3) {
            e2 !== "" && console.warn("CPPKIES: Found invalid save, creating new one..."), b();
          }
          Q = Ge.save = j(n2), A();
        }
        function T() {
          return w(), JSON.stringify(Q);
        }
        function U(e2, n2) {
          Z[e2] = n2;
        }
        function P(e2) {
          if (J.includes(e2))
            throw new Error("Recursive alias");
          return (J.push(e2), e2 in Z) ? P(Z[e2]) : (J = [], e2);
        }
        function I(e2) {
          return new Promise(function(n2) {
            var i = new Image();
            i.addEventListener("load", function() {
              n2(i);
            }), i.crossOrigin = "Anonymous", i.src = e2;
          });
        }
        function M(e2) {
          return new Promise(function(n2) {
            e2.canvas.toBlob(function(e3) {
              n2(URL.createObjectURL(e3));
            });
          });
        }
        function G(e2, n2, i, o2, a2, r2) {
          return new Promise(function(t2) {
            i[0] instanceof Array || (i = [i]), i = i;
            var s2 = {};
            for (var d2 in i)
              for (var c2 in i[d2])
                if (i[d2][c2]) {
                  if (i[d2][c2] = i[d2][c2].toString().toLowerCase(), !(i[d2][c2] in n2))
                    throw new Error("Invalid icon name");
                  s2[i[d2][c2]] = [parseInt(c2), parseInt(d2)];
                }
            var u2 = document.createElement("canvas").getContext("2d"), p2 = new Image();
            p2.addEventListener("load", function() {
              for (var e3 in u2.canvas.width = a2[0], u2.canvas.height = a2[1], s2)
                u2.drawImage(p2, s2[e3][0] * o2[0], s2[e3][1] * o2[1], o2[0], o2[1], n2[e3][0] * o2[0], n2[e3][1] * o2[1], o2[0], o2[1]);
              var i2, d3 = function() {
                M(u2).then(t2);
              };
              r2 && (i2 = r2(u2)), i2 instanceof Promise ? i2.then(d3) : d3();
            }), p2.crossOrigin = "Anonymous", p2.src = e2;
          });
        }
        function _(e2) {
          return e2 = a(e2), (e2[2] === void 0 || e2[2] === null) && (e2[2] = Ge.iconLink), e2[2] = P(e2[2]), e2;
        }
        function B(e2) {
          var n2 = new X(), i = [new V("tooltip", function() {
            e2.tooltip = s(s(e2.tooltip, "return", "let tempRet = ", "replace"), null, '\n//Cppkies injection\n				return Cppkies.buildingHooks[this.name].emit("tooltip", tempRet)', "after");
          }), new V("buy", function() {
            e2.buy = s(e2.buy, null, '\n//Cppkies injection\n				if(success) {\n					Cppkies.buildingHooks[this.name].emit("buy")\n				}', "after");
          }), new V("levelUp", function() {
            e2.levelUp = s(e2.levelUp, "me.level+=1;", '\n// Cppkies injection\nCppkies.buildingHooks[me.name].emit("levelUp")', "after", { me: e2 });
          })];
          i.forEach(function(e3) {
            var n3;
            (n3 = e3.func) === null || n3 === void 0 ? void 0 : n3.call(e3);
          }), Ge.hooks.on("buildingCps", function(i2) {
            return { building: i2.building, cps: Game.Objects[i2.building] === e2 ? n2.emit("cps", i2.cps) : i2.cps };
          }), oe[e2.name] = n2;
        }
        function N() {
          for (var e2, n2 = 0, i = Game.ObjectsById; n2 < i.length; n2++)
            e2 = i[n2], oe[e2.name] || B(e2);
        }
        function q(e2) {
          return e2.tier === "fortune";
        }
        function E(e2) {
          for (var n2, o2 = 1, a2 = 1; a2 <= e2; a2++)
            o2 += (n2 = me[a2]) !== null && n2 !== void 0 ? n2 : me["default"];
          return 9 * D(10, o2);
        }
        function x() {
          Ge.on("getIcon", function(e2) {
            var n2 = e2.icon, i = e2.type, o2 = e2.tier;
            return Ge.customTiers.forEach(function(e3) {
              e3.keyName === o2.toString() && e3.iconLink && (n2[2] = e3.iconLink);
            }), { icon: n2, type: i, tier: o2 };
          }), Ge.on("getIcon", function(e2) {
            var n2 = e2.icon, i = e2.type, o2 = e2.tier;
            return Ge.customBuildings.forEach(function(e3) {
              e3.name === i && e3.iconLink && (n2[2] = e3.iconLink);
            }), { icon: n2, tier: o2, type: i };
          }), Ge.on("getIcon", function(e2) {
            var n2 = e2.icon, i = e2.type, o2 = e2.tier;
            return n2[2] !== void 0 && n2[2] !== null || p(Game.Tiers[o2.toString()], "iconLink") || (n2[2] = ""), { icon: n2, tier: o2, type: i };
          }), Ge.on("preSave", function() {
            if (Game.dragonAura !== 0 && (Q.dragon.auras[0] = "sync"), Game.dragonAura2 !== 0 && (Q.dragon.auras[1] = "sync"), Game.dragonAuras[Game.dragonAura] instanceof Ue && (Q.dragon.auras[0] = Game.dragonAura, Game.dragonAura = 0), Game.dragonAuras[Game.dragonAura2] instanceof Ue && (Q.dragon.auras[1] = Game.dragonAura2, Game.dragonAura2 = 0), Game.dragonLevels[Game.dragonLevel] instanceof Pe || Game.dragonLevel >= $)
              for (Q.dragon.level = Game.dragonLevel; Game.dragonLevels[Game.dragonLevel] instanceof Pe || Game.dragonLevel >= $; )
                Game.dragonLevel--;
          }), Ge.on("postSave", function() {
            Q.dragon.auras[0] !== "sync" && Game.dragonAuras[Q.dragon.auras[0]] && (Game.dragonAura = Q.dragon.auras[0]), Q.dragon.auras[1] !== "sync" && Game.dragonAuras[Q.dragon.auras[1]] && (Game.dragonAura2 = Q.dragon.auras[1]), Q.dragon.level !== "sync" && Game.dragonLevels[Q.dragon.level] && (Game.dragonLevel = Q.dragon.level);
          }), Ge.on("reset", function() {
            Q.dragon.auras = ["sync", "sync"], Q.dragon.level = "sync";
          }), Ge.on("specialPic", function(e2) {
            var n2, i = Game.dragonLevels[Game.dragonLevel];
            return e2.tab === "dragon" && i instanceof Pe && (e2.pic = (n2 = i.picLink) !== null && n2 !== void 0 ? n2 : e2.pic), e2;
          });
        }
        var W, K = function(e2, n2) {
          return K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, n3) {
            e3.__proto__ = n3;
          } || function(e3, n3) {
            for (var i in n3)
              n3.hasOwnProperty(i) && (e3[i] = n3[i]);
          }, K(e2, n2);
        }, X = function() {
          function e2() {
            this._events = {};
          }
          return e2.prototype.on = function(e3, n2) {
            this._events[e3] ? this._events[e3].push(n2) : this._events[e3] = [n2];
          }, e2.prototype.once = function(e3, n2) {
            var i = this;
            this.on(e3, function(o2) {
              return i.off(e3, n2), n2(o2);
            });
          }, e2.prototype.off = function(e3, n2) {
            this._events[e3].splice(this._events[e3].indexOf(n2), 1);
          }, e2.prototype.emit = function(e3) {
            for (var n2 = [], i = 1; i < arguments.length; i++)
              n2[i - 1] = arguments[i];
            var o2 = n2[0];
            this._events[e3] || (this._events[e3] = []);
            for (var a2, r2 = 0, t2 = this._events[e3]; r2 < t2.length; r2++)
              a2 = t2[r2], o2 = a2(o2);
            return o2;
          }, e2.prototype.constEmit = function(e3) {
            for (var n2 = [], i = 1; i < arguments.length; i++)
              n2[i - 1] = arguments[i];
            this._events[e3] || (this._events[e3] = []);
            for (var o2, a2 = 0, r2 = this._events[e3]; a2 < r2.length; a2++)
              o2 = r2[a2], o2(n2[0]);
          }, e2;
        }(), V = function() {
          return function(e2, n2) {
            this.value = e2, this.func = n2;
          };
        }(), $ = Game.dragonLevels.length + 0, Q = k(), Z = {}, J = [], z = {}, ee = { "3d": [0, 21], milestone1: [0, 22], milestone2: [0, 23], milestone3: [0, 24], krumblor: [0, 25], level1: [0, 26], level2: [0, 27] }, ne = {}, ie = { research: [9, 0], cookie: [10, 0], mouse: [11, 0], multicursor: [12, 0], kitten: [18, 0] }, oe = {}, ae = [], re = function(n2) {
          function i(e2, o2, a2, r2, t2, s2, d2, c2, u2, p2) {
            var g2, m2, k2 = this;
            if (Game.Objects[e2])
              throw new Error(`Can't create building, "` + e2 + '" is already used as a building name');
            r2[1] !== 0 && console.warn("All icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=relink-column"), t2[0] !== 0 && console.warn("All big icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=big-icons"), k2 = n2.call(this, e2, o2, a2, t2[1], r2[0], s2, 0, d2, c2) || this, ae.push(k2), oe[e2] || B(k2);
            var b2 = function(e3) {
              if (0 >= parseInt(e3))
                return "continue";
              var n3 = Game.ObjectsById[e3];
              if (n3.canvas = l("rowCanvas" + e3), !n3.canvas)
                return "continue";
              if (n3.ctx = n3.canvas.getContext("2d"), n3.canvas.addEventListener("mouseover", function() {
                n3.mouseOn = true;
              }), n3.canvas.addEventListener("mouseout", function() {
                n3.mouseOn = false;
              }), n3.canvas.addEventListener("mousemove", function(i3) {
                var e4 = n3.canvas.getBoundingClientRect();
                n3.mousePos[0] = i3.pageX - e4.left, n3.mousePos[1] = i3.pageY - e4.top;
              }), n3.minigame && n3.minigameLoaded) {
                var i2 = n3.minigame.save();
                n3.minigame.launch(), n3.minigame.load(i2);
              }
            };
            for (var v2 in Game.ObjectsById)
              b2(v2);
            k2.buildingLink = (g2 = t2[2]) !== null && g2 !== void 0 ? g2 : Ge.buildingLink, k2.iconLink = P((m2 = r2[2]) !== null && m2 !== void 0 ? m2 : Ge.iconLink), u2 && (Game.foolObjects[e2] = u2), p2 && (Game.goldenCookieBuildingBuffs[e2] = p2), k2.iconLink && oe[k2.name].on("tooltip", function(e3) {
              return k2.locked ? e3 : e3.replace("background-position", "background-image:url(" + k2.iconLink + ");background-position");
            }), Game.BuildStore(), k2.buildingLink && Ge.hooks.on("buildStore", function() {
              l("productIcon" + k2.id).style.backgroundImage = "url(" + k2.buildingLink + ")", l("productIconOff" + k2.id).style.backgroundImage = "url(" + k2.buildingLink + ")";
            }), Game.BuildStore(), k2.canvas = l("rowCanvas" + k2.id), k2.ctx = k2.canvas.getContext("2d"), k2.pics = [];
            var f2 = document.createElement("div");
            f2.className = "tinyProductIcon", f2.id = "mutedProduct" + k2.id, f2.style.display = "none", k2.buildingLink && (f2.style.backgroundImage = "url(" + k2.buildingLink + ")"), f2.style.backgroundPositionX = "-" + r2[0] + "px", f2.style.backgroundPositionY = "-" + r2[1] + "px", f2.addEventListener("click", function() {
              k2.mute(0), window.PlaySound(k2.muted ? "snd/clickOff.mp3" : "snd/clickOn.mp3");
            }), window.AddEvent(k2.canvas, "mouseover", function() {
              k2.mouseOn = true;
            }), window.AddEvent(k2.canvas, "mouseout", function() {
              k2.mouseOn = false;
            }), k2.canvas.addEventListener("mousemove", function(n3) {
              var e3 = k2.canvas.getBoundingClientRect();
              k2.mousePos[0] = n3.pageX - e3.left, k2.mousePos[1] = n3.pageY - e3.top;
            }), l("buildingsMute").appendChild(f2);
            var C2 = h(k2);
            for (var v2 in C2)
              k2[v2] = C2[v2];
            return Game.recalculateGains = 1, k2;
          }
          return e(i, n2), i;
        }(Game.Object), te = [], se = function(n2) {
          function i(e2, o2, a2, r2, t2) {
            t2 === void 0 && (t2 = function() {
            });
            var s2 = n2.call(this, e2, typeof o2 == "function" ? "" : o2, typeof a2 == "function" ? 0 : a2, typeof r2 == "function" ? [0, 0] : _(r2), t2) || this;
            typeof o2 == "function" && (s2.descFunc = o2), typeof a2 == "function" && (s2.priceFunc = a2), typeof r2 == "function" && (s2.iconFunction = function() {
              return _(r2());
            }), te.push(s2);
            var d2 = f(s2);
            for (var c2 in d2)
              s2[c2] = d2[c2];
            return Game.upgradesToRebuild = 1, s2.bought && Game.CountsAsUpgradeOwned(s2.pool) && Game.UpgradesOwned++, s2;
          }
          return e(i, n2), i;
        }(Game.Upgrade), de = function(n2) {
          function i(e2, i2, o2, a2, r2, t2, s2) {
            t2 === void 0 && (t2 = ["Legacy"]), s2 === void 0 && (s2 = function() {
            });
            var d2 = n2.call(this, e2, i2, o2, a2, s2) || this;
            return d2.pool = "prestige", d2.posX = r2[0], d2.posY = r2[1], d2.parents = t2.map(function(e3) {
              return Game.Upgrades[e3] || Game.UpgradesById[e3];
            }), Game.PrestigeUpgrades.push(d2), Game.UpgradePositions[d2.id] = r2, d2;
          }
          return e(i, n2), i;
        }(se), ce = function(n2) {
          function i(e2, i2, o2, a2) {
            var r2 = this;
            return typeof o2 == "string" && (o2 = Game.Objects[o2]), r2 = n2.call(this, e2, u(o2.plural) + " are <b>twice</b> as efficient.<q>" + i2 + "</q>", o2.basePrice * Game.Tiers[a2].price, Game.GetIcon(o2.name, a2)) || this, Game.SetTier(o2.name, a2), r2.buildingTie1 = o2, q(r2) && (r2.order = 19e3, o2.fortune = r2), isNaN(parseInt(a2.toString())) || (a2 = parseInt(a2.toString())), typeof a2 == "number" && (r2.order = 100 * (o2.id + 1) + r2.id / 1e3, r2.order -= 75 * Y(0, H(o2.id - 4, 3)), 8 <= o2.id && (r2.order -= 75)), a2 === "fortune" && Game.Tiers[a2].upgrades.push(r2), o2.buyFunction.apply(o2), r2;
          }
          return e(i, n2), i;
        }(se), le = function(n2) {
          function i(e2, i2, o2, r2) {
            var t2 = this;
            if (r2) {
              if (!r2.endsWith(".png"))
                throw new Error(`Can't use the grandma picture URL "` + r2 + '", URL must end with .png');
              r2 = r2.substring(0, r2.length - 4);
            }
            typeof o2 == "string" && (o2 = Game.Objects[o2]);
            var s2 = o2.id - 1;
            return s2 === 1 ? s2 = "grandma" : s2 += " grandmas", t2 = n2.call(this, e2, "Grandmas are <b>twice</b> as efficient. " + u(o2.plural) + " gain <b>+1% CpS</b> per " + s2 + ".<q>" + i2 + "</q>", o2.basePrice * Game.Tiers[2].price, [10, 9, ""], Game.Objects.Grandma.redraw) || this, o2.grandma = t2, t2.buildingTie = o2, t2.order = 250 + t2.id / 1e3, 12 <= o2.id && (t2.order += 5), Game.GrandmaSynergies.push(t2.name), r2 && Ge.hooks.on("grandmaPic", function(e3) {
              return t2.bought ? a(e3, [r2]) : e3;
            }), Game.Objects.Grandma.redraw(), o2.buyFunction.apply(o2), t2;
          }
          return e(i, n2), i;
        }(se), ue = function(n2) {
          function i(e2, i2, o2, a2, r2) {
            var t2 = this;
            typeof o2 == "string" && (o2 = Game.Objects[o2]), typeof a2 == "string" && (a2 = Game.Objects[a2]);
            var s2 = Game.GetIcon(o2.name, r2);
            if (o2.basePrice > a2.basePrice) {
              var d2 = o2;
              o2 = a2, a2 = d2;
            }
            return t2 = n2.call(this, e2, u(o2.plural) + " gain <b>+5% CpS</b> per " + a2.name.toLowerCase() + ".<br>" + u(a2.plural) + " gain <b>+0.1% CpS</b> per \n			" + o2.name.toLowerCase() + ".<q>" + i2 + "</q>", (10 * o2.basePrice + 1 * a2.basePrice) * Game.Tiers[r2].price, s2) || this, t2.tier = r2, t2.buildingTie1 = o2, t2.buildingTie2 = a2, t2.order = 5e3 + t2.id / 1e3, o2.synergies.push(t2), a2.synergies.push(t2), Game.Tiers[r2].upgrades.push(t2), Game.RebuildUpgrades(), o2.buyFunction.apply(o2), t2;
          }
          return e(i, n2), i;
        }(se), pe = [5, 7, 8, 9, 10], ge = function(n2) {
          function i(e2, i2, o2, a2) {
            a2 === void 0 && (a2 = 20);
            var r2 = this, t2 = Game.Objects.Cursor, s2 = parseInt(o2.toString());
            return r2 = n2.call(this, e2, "Multiplies the gain from Thousand fingers by <b>" + a2 + "</b>.<q>" + i2 + "</q>", Game.Tiers[o2].special || isNaN(s2) ? t2.basePrice * Game.Tiers[o2].price : D(10, pe[H(s2 - 4, pe.length - 1)] + 3 * Y(s2 - 8, 0)), Game.GetIcon(t2.name, o2)) || this, r2.tier = o2, r2.pool = "", r2.order = 100 + r2.id / 1e3, Ge.on("cursorFingerMult", function(e3) {
              return r2.bought ? e3 * a2 : e3;
            }), Game.Tiers[o2].special || isNaN(s2) || Ge.buildingHooks.Cursor.on("buy", function() {
              t2.amount >= (s2 === 4 ? 25 : 50 * (s2 - 4)) && Game.Unlock(r2.name);
            }), o2 === "fortune" && Game.Tiers[o2].upgrades.push(r2), Game.Objects.Cursor.buyFunction.apply(Game.Objects.Cursor), r2;
          }
          return e(i, n2), i;
        }(se), me = { 1: 5, 2: 4, 4: 4, default: 3 }, ke = [0.1, 0.125, 0.15, 0.175, 0.2, 0.2, 0.2, 0.2, 0.2, 0.175, 0.15, 0.125, 0.115], be = function(n2) {
          function i(e2, i2, o2, a2, r2, t2) {
            a2 === void 0 && (a2 = Game.Tiers[o2].special || isNaN(parseInt(o2.toString())) ? null : ke[(parseInt(o2.toString()) - 1) % (ke.length - 1)]), t2 === void 0 && (t2 = Game.Tiers[o2].special || isNaN(parseInt(o2.toString())) ? null : o2 === 1 ? 0.5 : o2 - 1);
            var s2 = n2.call(this, e2, "You gain <b>more CpS</b> the more milk you have.<q>" + i2 + "</q>", Game.Tiers[o2].special || isNaN(parseInt(o2.toString())) ? r2 !== null && r2 !== void 0 ? r2 : 0 : E(o2), Game.GetIcon("Kitten", o2)) || this;
            return s2.tier = o2, s2.kitten = true, s2.pool = "", a2 === null && console.warn("Please make sure to specify the power if the kitten tier is special"), (Game.Tiers[o2].special || isNaN(parseInt(o2.toString()))) && r2 === void 0 && console.warn("Please make sure to specify the cost if the kitten tier is special"), t2 !== null && Ge.on("logic", function() {
              Game.milkProgress >= t2 && Game.Unlock(s2.name);
            }), s2.order = 2e4 + s2.id / 1e3, a2 !== null && Ge.on("rawCpsMult", function(e3) {
              var n3 = s2.bought ? 1 + Game.milkProgress * a2 * Ge.hiddenMilkMult : 1;
              return Game.cookiesMultByType.kittens *= n3, e3 * n3;
            }), Game.UpgradesByPool.kitten.push(s2), o2 === "fortune" && Game.Tiers[o2].upgrades.push(s2), s2;
          }
          return e(i, n2), i;
        }(se), he = function(n2) {
          function i(e2, i2, o2, a2) {
            a2 === void 0 && (a2 = 1);
            var r2 = n2.call(this, e2, "Clicking gains <b>+" + a2 + "% of your CpS</b>.<q>" + i2 + "</q>", D(10, 3 + 2 * parseInt(o2.toString())), Game.GetIcon("Mouse", o2)) || this;
            r2.tier = o2, r2.pool = "";
            var t2 = parseInt(o2.toString());
            return r2.order = 150 + r2.id / 1e3, Ge.on("cpcAdd", function(e3) {
              return r2.bought ? e3 + Game.cookiesPs * a2 / 100 : e3;
            }), Game.Tiers[o2].special || isNaN(t2) || Ge.on("check", function() {
              Game.handmadeCookies >= D(10, 1 + 2 * t2) && Game.Unlock(r2.name);
            }), o2 === "fortune" && Game.Tiers[o2].upgrades.push(r2), r2;
          }
          return e(i, n2), i;
        }(se), ve = function(n2) {
          function i(e2, i2, o2, a2, r2, t2, s2) {
            var d2, c2 = n2.call(this, e2, "Cookie production multiplier <b>+" + Beautify(typeof r2 == "function" ? r2() : r2, 1) + "%</b>.<q>" + i2 + "</q>", o2, a2) || this;
            return c2.power = r2, c2.pool = "cookie", c2.order = ((d2 = s2 !== null && s2 !== void 0 ? s2 : Ge.cookieOrder) !== null && d2 !== void 0 ? d2 : 10020) + c2.id / 1e3, c2.unlockAt = { name: e2, cookies: (typeof o2 == "function" ? o2() : o2) / 20, require: t2 === null || t2 === void 0 ? void 0 : t2.require, season: t2 === null || t2 === void 0 ? void 0 : t2.season }, Game.UnlockAt.push(c2.unlockAt), Game.UpgradesByPool.cookie.push(c2), Game.cookieUpgrades.push(c2), c2;
          }
          return e(i, n2), i;
        }(se), fe = [], Ce = function() {
          return function(e2, n2, i, o2, a2, r2, t2, s2, d2) {
            o2 === void 0 && (o2 = false), a2 === void 0 && (a2 = "auto"), r2 === void 0 && (r2 = null), t2 === void 0 && (t2 = null), s2 === void 0 && (s2 = null), d2 === void 0 && (d2 = "auto");
            var c2;
            this.name = e2, this.color = i, this.special = o2, this.keyName = d2 === "auto" ? o2 ? e2 : (Object.keys(Game.Tiers).filter(function(e3) {
              return !isNaN(parseInt(e3));
            }).length + 1).toString() : d2, r2 === null && (this.unlock = -1), typeof r2 == "number" && (this.unlock = r2), (o2 === false && r2 === null || r2 === "auto") && (this.unlock = Game.Tiers[parseInt(this.keyName) - 1].unlock + 50), typeof t2 == "number" && (this.achievUnlock = t2), (o2 === false && t2 === null || t2 === "auto") && (this.achievUnlock = Game.Tiers[parseInt(this.keyName) - 1].achievUnlock + 50), s2 && (this.req = s2), this.price = a2 === "auto" ? 1e8 * Game.Tiers[Object.keys(Game.Tiers).filter(function(e3) {
              return !isNaN(parseInt(e3));
            }).length.toString()].price : a2, this.iconRow = n2[1], this.iconLink = P((c2 = n2[2]) !== null && c2 !== void 0 ? c2 : Ge.iconLink), Game.Tiers[this.keyName] = this, fe.push(this);
          };
        }(), ye = [], Le = function(n2) {
          function i(e2, i2, o2) {
            var a2 = n2.call(this, e2, i2, _(o2)) || this;
            return c(a2, y(a2)), ye.push(a2), a2.won && Game.CountsAsAchievementOwned(a2.pool) && Game.AchievementsOwned++, a2;
          }
          return e(i, n2), i;
        }(Game.Achievement), Oe = function(n2) {
          function i(e2, i2, o2, a2) {
            a2 === void 0 && (a2 = D(10, F(1.5 * Game.BankAchievements.length + 2)));
            var r2 = n2.call(this, e2, "Bake <b>" + toFixed(a2) + "</b> cookie" + (R(a2) === 1 ? "" : "s") + " in one ascension." + (o2 ? "<q>" + o2 + "</q>" : ""), i2) || this;
            return r2.treshold = a2, r2.order = 100 + 0.01 * Game.BankAchievements.length, Game.BankAchievements.push(r2), r2;
          }
          return e(i, n2), i;
        }(Le), Ae = function(n2) {
          function i(e2, i2, o2, a2) {
            a2 === void 0 && (a2 = D(10, F(1.2 * Game.BankAchievements.length)));
            var r2 = n2.call(this, e2, "Bake <b>" + toFixed(a2) + "</b> cookie" + (R(a2) === 1 ? "" : "s") + " per second." + (o2 ? "<q>" + o2 + "</q>" : ""), i2) || this;
            return r2.treshold = a2, r2.order = 200 + 0.01 * Game.CpsAchievements.length, Game.CpsAchievements.push(r2), r2;
          }
          return e(i, n2), i;
        }(Le), we = function(n2) {
          function i(e2, i2, o2, a2) {
            var r2 = this, t2 = typeof o2 == "object" ? o2 : Game.Objects[o2], s2 = null, d2 = -1;
            if (t2.id === 0) {
              switch (a2) {
                case "cursor2":
                  s2 = [0, 6], d2 = 2;
                  break;
                case "cursor50":
                  s2 = [1, 6], d2 = 50;
                  break;
                default:
                  if (0 >= Game.Tiers[a2].achievUnlock) {
                    console.warn("Tier has invalid unlock amount");
                    break;
                  }
                  d2 = a2 === 1 ? 1 : 2 * Game.Tiers[a2].achievUnlock;
              }
              Ge.buildingHooks.Cursor.on("buy", function() {
                Game.Objects.Cursor.amount >= d2 && Game.Win(r2.name);
              });
            } else
              d2 = Game.Tiers[a2].achievUnlock;
            return r2 = n2.call(this, e2, "Have <b>" + d2 + "</b> " + (R(d2) === 1 ? t2.single : t2.plural) + "." + (i2 ? "<q>" + i2 + "</q>" : ""), s2 !== null && s2 !== void 0 ? s2 : Game.GetIcon(t2.name, a2)) || this, Game.SetTier(t2.name, a2 === "cursor2" || a2 === "cursor50" ? 1 : a2), t2.tieredAchievs[a2] = r2, r2.buildingTie = t2, r2.order = 1e3 + 100 * t2.id + r2.id / 1e3, r2.order -= 75 * Y(0, H(t2.id - 4, 3)), 8 <= t2.id && (r2.order -= 75), t2.id === 0 && (r2.order += 50), r2;
          }
          return e(i, n2), i;
        }(Le), je = function(n2) {
          function i(e2, i2, o2, a2, r2) {
            var t2 = this;
            typeof i2 == "string" && (i2 = Game.Objects[i2]);
            var s2 = [i2.iconColumn, 21 + o2, i2 instanceof re ? i2.iconLink : void 0], d2 = D(10, 12 + i2.id + (r2 !== null && r2 !== void 0 ? r2 : 0) + 7 * (o2 - 1));
            return t2 = n2.call(this, e2, "Make <b>" + toFixed(d2) + "</b> cookies just from " + i2.plural + "." + (a2 ? "<q>" + a2 + "</q>" : ""), s2) || this, t2.order = 1020 + 100 * i2.id + t2.id / 1e3, t2.order -= 75 * Y(0, H(i2.id - 4, 3)), 8 <= i2.id && (t2.order -= 75), i2.id === 0 && (t2.order += 50), i2.productionAchievs.push({ pow: d2, achiev: t2 }), t2;
          }
          return e(i, n2), i;
        }(Le), Se = function(n2) {
          function i(e2, i2, o2) {
            var a2 = this;
            typeof i2 == "string" && (i2 = Game.Objects[i2]);
            var r2 = [i2.iconColumn, 26, i2 instanceof re ? i2.iconLink : void 0];
            return a2 = n2.call(this, e2, "Reach level <b>10</b> " + i2.plural + "." + (o2 ? "<q>" + o2 + "</q>" : ""), r2) || this, a2.order = 1020 + 100 * i2.id + a2.id / 1e3, a2.order -= 75 * Y(0, H(i2.id - 4, 3)), 8 <= i2.id && (a2.order -= 75), i2.id === 0 && (a2.order += 50), i2.levelAchiev10 = a2, a2;
          }
          return e(i, n2), i;
        }(Le), Te = function(n2) {
          function i(e2, i2, o2) {
            var a2 = this, r2 = parseInt(i2.toString());
            return a2 = n2.call(this, e2, "Make <b>" + toFixed(D(10, 1 + 2 * r2)) + "</b> cookies from clicking." + (o2 ? "<q>" + o2 + "</q>" : ""), Game.GetIcon("Mouse", i2)) || this, a2.pool = "normal", a2.tier = i2, a2.order = 1e3 + a2.id / 1e3, Game.Tiers[i2].special || isNaN(r2) || Ge.on("check", function() {
              Game.handmadeCookies >= D(10, 1 + 2 * r2) && Game.Win(a2.name);
            }), a2;
          }
          return e(i, n2), i;
        }(Le), Ue = function() {
          function e2(e3, n2, i) {
            this.name = e3, this.desc = n2, typeof i == "string" && (i = Game.Objects[i]), this.pic = i instanceof Game.Object ? _([i.iconColumn, 25, i instanceof re ? i.iconLink : void 0]) : i, Game.dragonAuras[Object.keys(Game.dragonAuras).length] = this, Q.dragon.auras[0] !== "sync" && Object.keys(Game.dragonAuras).length >= Q.dragon.auras[0] && (Game.dragonAura = Q.dragon.auras[0]), Q.dragon.auras[1] !== "sync" && Object.keys(Game.dragonAuras).length >= Q.dragon.auras[1] && (Game.dragonAura2 = Q.dragon.auras[1]);
          }
          return e2;
        }(), Pe = function() {
          function e2(n2, i, o2, a2, r2, t2, s2) {
            s2 === void 0 && (s2 = Game.dragonLevels.length - 3), this.buy = r2, this.picY = 0;
            var d2 = Game.dragonLevels[s2 - 1];
            this.name = n2 !== null && n2 !== void 0 ? n2 : d2.name, this.action = i, this.costStr = typeof o2 == "string" ? function() {
              return o2;
            } : o2, this.cost = a2, t2 ? (this.pic = t2[0], this.picY = t2[1], this.picY !== 0 && console.warn("For now, all dragon levels must not use pic Y, sorry."), this.picLink = t2[2]) : (this.pic = d2.pic, d2 instanceof e2 && (this.picY = d2.picY, this.picLink = d2.picLink)), Game.dragonLevels.splice(s2, 0, this), Q.dragon.level !== "sync" && Game.dragonLevels.length >= Q.dragon.level && (Game.dragonLevel = Q.dragon.level);
          }
          return e2;
        }(), Ie = function(n2) {
          function i(e2, i2, o2) {
            var a2 = this;
            return typeof o2 == "string" && (o2 = Game.Objects[o2]), a2 = n2.call(this, null, "Train " + e2 + "<br/><small>Aura : " + i2 + "</small>", "100 " + o2.plural, function() {
              return 100 <= o2.amount;
            }, function() {
              return o2.sacrifice(100);
            }) || this, a2;
          }
          return e(i, n2), i;
        }(Pe), Me = function() {
          return function(e2, n2, i, o2) {
            if (o2 === void 0 && (o2 = false), this.name = e2, this.pic = i, this.special = o2, !i.endsWith(".png"))
              throw new Error(`Can't create milk with the milk URL "` + i + '", the URL must end with .png!');
            o2 || (this.name = "Rank " + g(Game.Milks.length + 1) + " - " + e2), this.pic = i.substr(0, i.length - 4), _(n2), this.icon = [n2[0], n2[1]], this.iconLink = n2[2], o2 ? Game.MilksByChoice[Object.keys(Game.MilksByChoice).length] = this : Game.Milks.push(this);
          };
        }(), Ge = { hooks: null, on: null, hiddenMilkMult: 1, iconLink: "", buildingLink: "", cookieOrder: 10020, buildingHooks: oe, buildingHooksById: [], hookAllBuildings: N, customBuildings: ae, customUpgrades: te, customTiers: fe, save: Q, onLoad: [], Building: re, Upgrade: se, TieredUpgrade: ce, Tier: Ce, HeavenlyUpgrade: de, GrandmaSynergy: le, SynergyUpgrade: ue, CursorUpgrade: ge, KittenUpgrade: be, MouseUpgrade: he, CookieUpgrade: ve, Achievement: Le, CpsAchievement: Ae, BankAchievement: Oe, TieredAchievement: we, ProductionAchievement: je, Level10Achievement: Se, MouseAchievement: Te, customAchievements: ye, DragonAura: Ue, DragonLevel: Pe, DragonAuraLevel: Ie, Milk: Me, injectCode: s, injectCodes: d, DEFAULT_ONBUY: function() {
          Game.UnlockTiered(this), this.amount >= Game.SpecialGrandmaUnlock && 0 < Game.Objects.Grandma.amount && this.grandma && Game.Unlock(this.grandma.name);
        }, DEFAULT_CPS: function(e2) {
          return Game.GetTieredCpsMult(e2) * Game.magicCpS(e2.name) * e2.baseCps;
        }, icons: { relinkColumn: function(e2, a2, r2, t2) {
          return t2 === void 0 && (t2 = false), n(this, void 0, void 0, function() {
            var n2, s2, s2, d2, c2;
            return o(this, function(i) {
              switch (i.label) {
                case 0:
                  for (s2 in r2 === void 0 && (!z[e2] && (z[e2] = 0), r2 = z[e2]++), n2 = {}, ee)
                    n2[s2] = [r2, ee[s2][1]];
                  for (s2 in Game.Tiers)
                    n2[Game.Tiers[s2].name.toLowerCase()] = n2[s2.toString()] = [r2, Game.Tiers[s2].iconRow];
                  return d2 = U, c2 = [e2], [4, G(t2 ? P(e2) : e2, n2, a2, [48, 48], [48 * (r2 + 1), 48 * (Object.values(n2).reduce(function(e3, n3) {
                    return Y(e3, n3[1]);
                  }, -Infinity) + 1)], function(n3) {
                    return new Promise(function(i2) {
                      if (P(e2) !== e2) {
                        var o2 = new Image();
                        o2.addEventListener("load", function() {
                          n3.drawImage(o2, 0, 0), i2();
                        }), o2.src = P(e2), o2.crossOrigin = "Anonymous";
                      } else
                        i2();
                    });
                  })];
                case 1:
                  return d2.apply(void 0, c2.concat([i.sent()])), [2];
              }
            });
          });
        }, relinkRow: function(e2, a2, r2, t2) {
          return t2 === void 0 && (t2 = false), n(this, void 0, void 0, function() {
            var n2, s2, s2, d2, c2;
            return o(this, function(i) {
              switch (i.label) {
                case 0:
                  for (s2 in r2 === void 0 && (!ne[e2] && (ne[e2] = 0), r2 = ne[e2]++), n2 = {}, ie)
                    n2[s2] = [ie[s2][0], r2];
                  for (s2 in Game.ObjectsById)
                    n2[Game.ObjectsById[s2].single.toLowerCase()] = n2[s2] = [Game.ObjectsById[s2].iconColumn, r2];
                  return d2 = U, c2 = [e2], [4, G(t2 ? P(e2) : e2, n2, a2, [48, 48], [48 * (Object.values(n2).reduce(function(e3, n3) {
                    return Y(e3, n3[0]);
                  }, -Infinity) + 1), 48 * (r2 + 1)], function(n3) {
                    return new Promise(function(i2) {
                      if (P(e2) !== e2) {
                        var o2 = new Image();
                        o2.addEventListener("load", function() {
                          n3.drawImage(o2, 0, 0), i2();
                        }), o2.src = P(e2), o2.crossOrigin = "Anonymous";
                      } else
                        i2();
                    });
                  })];
                case 1:
                  return d2.apply(void 0, c2.concat([i.sent()])), [2];
              }
            });
          });
        }, patchIconsheet: function(e2, i, a2) {
          var r2;
          return a2 === void 0 && (a2 = true), n(this, void 0, void 0, function() {
            var n2, t2, s2, d2, c2, u2, p2, g2, m2, k2, b2, h2, v2, f2, C2;
            return o(this, function(o2) {
              switch (o2.label) {
                case 0:
                  return n2 = document.createElement("canvas").getContext("2d"), [4, I(a2 ? P(e2) : e2)];
                case 1:
                  for (t2 = o2.sent(), s2 = [t2.width, t2.height], d2 = 0, c2 = i; d2 < c2.length; d2++)
                    u2 = c2[d2], 48 * u2[0][0] > s2[0] && (s2[0] = 48 * u2[0][0]), 48 * u2[0][1] > s2[1] && (s2[1] = 48 * u2[0][1]);
                  n2.canvas.width = s2[0], n2.canvas.height = s2[1], n2.drawImage(t2, 0, 0), p2 = {}, g2 = 0, m2 = i, o2.label = 2;
                case 2:
                  return g2 < m2.length ? (k2 = m2[g2], b2 = P(((r2 = k2[1][2]) !== null && r2 !== void 0 ? r2 : Ge.iconLink) || "img/icons.png"), !!p2[b2]) ? [3, 4] : (h2 = p2, v2 = b2, [4, I(b2)]) : [3, 6];
                case 3:
                  h2[v2] = o2.sent(), o2.label = 4;
                case 4:
                  n2.clearRect(48 * k2[0][0], 48 * k2[0][1], 48, 48), n2.drawImage(p2[b2], 48 * k2[1][0], 48 * k2[1][1], 48, 48, 48 * k2[0][0], 48 * k2[0][1], 48, 48), o2.label = 5;
                case 5:
                  return g2++, [3, 2];
                case 6:
                  return f2 = U, C2 = [e2], [4, M(n2)];
                case 7:
                  return f2.apply(void 0, C2.concat([o2.sent()])), [2];
              }
            });
          });
        }, extraColumnIcons: ee, extraRowIcons: ie, alias: U, aliases: Z } };
        window.Cppkies ? W = window.Cppkies : (W = Ge, window.Cppkies = W, function() {
          return new Promise(function(e2) {
            var n2 = new X(), i = [new V("customMenu", function() {
              Game.UpdateMenu = s(Game.UpdateMenu, null, '\n					// Cppkies injection\n					switch (Game.onMenu) {\n						case "prefs":\n							Cppkies.hooks.emit("optionsMenu")\n							break\n						case "stats":\n							Cppkies.hooks.emit("statsMenu")\n							break\n						case "log":\n							Cppkies.hooks.emit("logMenu")\n							break\n					}\n					Cppkies.hooks.emit("menu")\n					', "after");
            }), new V("preSave", function() {
              Game.WriteSave = s(Game.WriteSave, null, '\n					// Cppkies injection\n					Cppkies.hooks.emit("preSave")\n					', "before");
            }), new V("postSave", function() {
              Game.WriteSave = s(Game.WriteSave, "if (type==2 || type==3)", '\n					// Cppkies injection\n					Cppkies.hooks.emit("postSave")\n					', "before");
            }), new V("reset", function() {
              Game.Reset = s(Game.Reset, null, '\n					// Cppkies injection\n					Cppkies.hooks.constEmit("reset", hard)\n					', "before");
            }), new V("reincarnate", function() {
              Game.registerHook("reincarnate", function() {
                return n2.emit("reincarnate");
              });
            }), new V("getIcon", function() {
              Game.GetIcon = d(Game.GetIcon, [["return [col,Game.Tiers[tier].iconRow];", '// Cppkies Injection\n					return Cppkies.hooks.emit("getIcon", { icon: [col, Game.Tiers[tier].iconRow], tier: tier, type: type }).icon', "replace"], ["col=18;", 'else if (type === "Mouse") col = 11;', "after"]]);
            }), new V("buildStore", function() {
              Game.BuildStore = s(Game.BuildStore, null, ';\nCppkies.hooks.emit("buildStore")', "after");
            }), new V("grandmaPic", function() {
              Game.Objects.Grandma.art.pic = s(Game.Objects.Grandma.art.pic, "return choose(list)+'.png'", '// Cppkies injection\n					list = Cppkies.hooks.emit("grandmaPic", list)\n					', "before");
            }), new V("cps", function() {
              Game.CalculateGains = d(Game.CalculateGains, [["var rawCookiesPs=Game.cookiesPs*mult;", '// Cppkies injection\n					Game.cookiesPs = Cppkies.hooks.emit("rawCps", Game.cookiesPs);\n					mult = Cppkies.hooks.emit("rawCpsMult", mult);\n', "before"], ["Game.cookiesPs=Game.runModHookOnValue('cps',Game.cookiesPs);", '// Cppkies injection\n						mult = Cppkies.hooks.emit("cpsMult", mult);\n', "before"]]), Game.registerHook("cps", function(e3) {
                return n2.emit("cps", e3);
              });
            }), new V("cursorFingerMult", function() {
              Game.Objects.Cursor.cps = s(Game.Objects.Cursor.cps, "var mult=1;", '// Cppkies injection\nadd = Cppkies.hooks.emit("cursorFingerMult", add);\n', "before");
            }), new V("cpc", function() {
              Game.mouseCps = d(Game.mouseCps, [["var num=0;", '// Cppkies injection\n						add = Cppkies.hooks.emit("cursorFingerMult", add);\n', "before"], ["var out", '// Cppkies injection\n						add = Cppkies.hooks.emit("cpcAdd", add);\n', "before"]]), Game.registerHook("cookiesPerClick", function(e3) {
                return n2.emit("cpc", e3);
              });
            }), new V("buildingCps", function() {
              Game.CalculateGains = s(Game.CalculateGains, "me.storedTotalCps=me.amount*me.storedCps;", '// Cppkies injection (internal, do not use)\nme.storedCps = Cppkies.hooks.emit("buildingCps", { building: i, cps: me.storedCps }).cps;\n', "before");
            }), new V("logic", function() {
              Game.registerHook("logic", function() {
                return n2.emit("logic");
              });
            }), new V("draw", function() {
              Game.registerHook("draw", function() {
                return n2.emit("draw");
              });
            }), new V("check", function() {
              Game.registerHook("check", function() {
                return n2.emit("check");
              });
            }), new V("ticker", function() {
              Game.getNewTicker = s(Game.getNewTicker, "Game.TickerAge=Game.fps*10;", '// Cppkies injection\nlist = Cppkies.hooks.emit("ticker", list);\n', "before");
            }), new V("specialPic", function() {
              Game.DrawSpecial = s(Game.DrawSpecial, "if (hovered || selected)", '// Cppkies injection\nconst override = Cppkies.hooks.emit("specialPic", {tab: Game.specialTabs[i], frame: frame, pic: pic})\npic = override.pic\nframe = override.frame;\n', "before"), Game.ToggleSpecialMenu = s(Game.ToggleSpecialMenu, "else {pic='dragon.png?v='+Game.version;frame=4;}", '// Cppkies injection\nconst override = Cppkies.hooks.emit("specialPic", {tab: Game.specialTab, frame: frame, pic: pic})\npic = override.pic\nframe = override.frame;\n', "after");
            })];
            i.forEach(function(e3) {
              var n3;
              (n3 = e3.func) === null || n3 === void 0 ? void 0 : n3.call(e3);
            }), Game.Loader.Load = s(Game.Loader.Load, "img.src=this.domain", `
			// Cppkies injection
			img.src = (assets[i].indexOf('http') !== -1 ? "" : this.domain)
`, "replace"), Game.UpdateMenu = d(Game.UpdateMenu, [["url(img/'+milk.pic+'.png)", "url(' + (milk.pic.indexOf('http') >= 0 ? milk.pic : 'img/'+milk.pic) + '.png)", "replace"], ["img/icons.png?v='+Game.version+'", "' + (Game.Milks[i].iconLink ? Game.Milks[i].iconLink : 'img/icons.png?v='+Game.version) + '", "replace"]]), Game.ToggleSpecialMenu = d(Game.ToggleSpecialMenu, [[">=5", '>=Game.dragonLevels.findIndex(val => val.name === "Krumblor, cookie hatchling")', "replace"], [">=25", '>=Game.dragonLevels.findIndex(val => val.action === "Train secondary aura<br><small>Lets you use two dragon auras simultaneously</small>") + 1', "replace"]]), Game.Objects.Cursor.buyFunction = s(Game.Objects.Cursor.buyFunction, "Game.Unlock('Octillion fingers');", "\n 			// Cppkies injection\n			for(const i in this.tieredUpgrades) {\n				if (isNaN(parseInt(i))) continue\n				if (this.amount >= Game.Tiers[this.tieredUpgrades[i].tier].unlock - 50) this.tieredUpgrades[i].unlock()\n			}\n", "after"), Game.Object = s(Game.Object, "Game.ObjectsN++", "\n// Cppkies injection\nCppkies.hookAllBuildings();\n", "after"), Game.CalculateGains = s(Game.CalculateGains, "var catMult=1;", "// Cppkies injection\n			Cppkies.hiddenMilkMult = milkMult;\n", "before"), e2(n2);
          });
        }().then(function(e2) {
          W.hooks = e2, W.on = e2.on.bind(e2), Game.Notify("Cppkies loaded!", "", [32, 17], 1.5);
          var n2 = document.createElement("div");
          n2.textContent = "Cppkies!", document.querySelector("#topBar").insertBefore(n2, document.querySelector("#topBar").children[1]), Game.modSaveData.cppkies || (Game.modSaveData.cppkies = "{}"), Game.registerMod("cppkies", { save: T, load: S }), Game.Win("Third-party"), N(), Ge.onLoad.forEach(function(e3) {
            return e3();
          }), Ge.onLoad = new Proxy(Ge.onLoad, { set: function(e3, n3, i) {
            return n3 !== "length" && i(), true;
          } }), window.CPPKIES_ONLOAD || (window.CPPKIES_ONLOAD = []), window.CPPKIES_ONLOAD.forEach(function(e3) {
            return e3();
          }), window.CPPKIES_ONLOAD = new Proxy(Ge.onLoad, { set: function(e3, n3, i) {
            return n3 !== "length" && i(), true;
          } }), x();
        }));
        var _e = W;
        return _e;
      });
    }
  });

  // jscc_temp/src/index.ts
  var import_cppkies4 = __toModule(require_dist());

  // jscc_temp/src/tags.ts
  var _TagCondition = class {
    constructor(name, color, tagFunction) {
      this.name = name;
      this.color = color;
      this.tagFunction = tagFunction;
      _TagCondition.Conditions.push(this);
    }
  };
  var TagCondition = _TagCondition;
  TagCondition.Conditions = [];

  // jscc_temp/src/upgrade/AdvancedHeavelyUpgrade.ts
  var import_cppkies = __toModule(require_dist());
  var AdvancedHeavenlyUpgrade = class extends import_cppkies.default.HeavenlyUpgrade {
    constructor(name, desc, price, icon, position, parents, buyFunc) {
      super(name, desc, price, icon, [position[0], position[1]], parents, buyFunc);
    }
  };

  // jscc_temp/src/upgrade/AdvancedUpgrade.ts
  var import_cppkies2 = __toModule(require_dist());
  var AdvancedUpgrade = class extends import_cppkies2.default.Upgrade {
    constructor(name, desc, price, icon, buyFunc) {
      super(name, desc, price, icon, buyFunc);
    }
  };

  // jscc_temp/src/rifts.ts
  var PagedHeavenlyUpgrade = class extends AdvancedHeavenlyUpgrade {
    constructor(name, desc, price, position, page, icon, parents, buyFunc) {
      super(name, desc, price, icon, position, parents, buyFunc);
      if (typeof window.SkullyCore.pages[page] === "undefined")
        window.SkullyCore.pages[page] = [];
      window.SkullyCore.pages[page].push(this);
      if (page !== "vanilla")
        Game.PrestigeUpgrades.pop();
    }
  };
  var RiftUpgrade = class extends PagedHeavenlyUpgrade {
    constructor(name, desc, position, goto, back, icon = [
      1,
      2,
      "https://raw.githubusercontent.com/MasterOfBob777/SkullyCore/master/static/skullyCoreIcons.png"
    ], parents, buyFunc) {
      super(name, desc, 0, position, back, icon, parents, buyFunc);
      this.isRift = true;
      this.activateFunction = () => {
        window.SkullyCore.currentPage = this.goto;
        Game.BuildAscendTree();
      };
      this.exclude = {
        all: true
      };
      this.back = back;
      this.noTags = true;
      this.unlocked = 1;
      this.bought = 1;
      this.noNeuromancy = true;
      this.goto = goto;
    }
  };
  new TagCondition("Rift", "#9700cf", (me) => typeof me.isRift !== "undefined");
  var PrestigePage = class {
    constructor(name, id, parents, gotoicon, backicon) {
      this.name = name;
      this.id = id;
      this.Rift = new RiftUpgrade(`Goto${this.name}...`, "Goto a new universe of possiblities. Don't worry, you can come back.", [-30, -130], this.id, "vanilla", gotoicon, parents);
      this.VanillaRift = new RiftUpgrade("Goto Vanilla...", "Takes you back to the vanilla prestige tree.", [-30, -30], "vanilla", this.id, backicon);
    }
  };

  // jscc_temp/src/bars/BaseWidget.ts
  var BaseWidget = class {
    constructor() {
      this._hidden = false;
    }
    set hidden(state) {
      this._hidden = state;
      if (typeof this.div !== "undefined") {
        this.div.style.display = state ? "none" : "block";
      }
    }
    get hidden() {
      return this._hidden;
    }
  };

  // jscc_temp/src/helpers/common.ts
  function createElementFromString(htmlString) {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }
  function exclude(type, me) {
    var _a, _b;
    if (typeof (me == null ? void 0 : me.exclude) !== "undefined") {
      if (typeof ((_a = me == null ? void 0 : me.exclude) == null ? void 0 : _a.all) !== "undefined" && !me.exclude.all)
        return true;
      if (typeof ((_b = me == null ? void 0 : me.exclude) == null ? void 0 : _b[type]) !== "undefined" && !me.exclude[type])
        return true;
    }
    return false;
  }
  function IconToStyle(icon) {
    return `${!(typeof icon[2] === "undefined" || icon[2] === "") ? `background-image: url(${icon[2]});` : ""}background-position:${-icon[0] * 48}px ${-icon[1] * 48}px;`;
  }

  // jscc_temp/src/helpers/tooltip.ts
  function attachTooltip(div, tooltip) {
    div.addEventListener("mouseout", () => {
      Game.tooltip.shouldHide = 1;
    });
    div.addEventListener("mouseover", function arrow() {
      Game.tooltip.dynamic = 1;
      Game.tooltip.draw(this, tooltip, "bottom");
      Game.tooltip.wobble();
    });
  }

  // jscc_temp/src/bars/BuildingBarMenuWidget.ts
  var _BuildingBarMenuWidget = class extends BaseWidget {
    constructor(id, icon, building, tooltip) {
      super();
      var _a, _b;
      this.id = id;
      this.icon = icon;
      this.building = building;
      this.tooltip = tooltip;
      const bars = _BuildingBarMenuWidget.Bars;
      (_b = bars[_a = this.building]) != null ? _b : bars[_a] = [];
      this.index = bars[this.building].push(this) - 1;
    }
    getDiv() {
      let div = createElementFromString(`
			<div 
				class="building_bar" 
				id="${this.id}BuildingBarMenu"
			> 
				<div 
					id="${this.id}BuildingBarMenuIcon" 
					class="baseIcon ${!this.icon[2] ? "usesIcon" : ""}" 
					style="${IconToStyle(this.icon)}"
				></div>
			</div>
		`);
      if (typeof this.onclick !== "undefined") {
        div.addEventListener("click", this.onclick.bind(this));
      }
      if (typeof this.tooltip !== "undefined") {
        attachTooltip(div, this.tooltip);
      }
      if (typeof this.customDiv !== "undefined") {
        div = this.customDiv(div);
      }
      if (this.hidden) {
        div.style.display = "none";
      }
      return div;
    }
  };
  var BuildingBarMenuWidget = _BuildingBarMenuWidget;
  BuildingBarMenuWidget.Bars = {};

  // jscc_temp/src/bars/TopBarMenuWidget.ts
  var _TopBarMenuWidget = class extends BaseWidget {
    constructor(id, icon, tooltip) {
      super();
      this.id = id;
      this.icon = icon;
      this.tooltip = tooltip;
      this.index = _TopBarMenuWidget.Bars.push(this) - 1;
    }
    getDiv() {
      let div = createElementFromString(`
        <div 
			class="top_bar"
			id="${this.id}TopBarMenu"
		> 
            <div 
				id="${this.id}TopBarMenuIcon" 
				class="baseIcon ${!this.icon[2] ? "usesIcon" : ""}" 
				style="${IconToStyle(this.icon)}"
			></div>
        </div>`);
      if (typeof this.onclick !== "undefined") {
        div.addEventListener("click", this.onclick.bind(this));
      }
      if (typeof this.tooltip !== "undefined") {
        attachTooltip(div, this.tooltip);
      }
      if (typeof this.customDiv !== "undefined") {
        div = this.customDiv(div);
      }
      if (this.hidden) {
        div.style.display = "none";
      }
      return div;
    }
  };
  var TopBarMenuWidget = _TopBarMenuWidget;
  TopBarMenuWidget.Bars = [];

  // jscc_temp/src/buff/AdvancedBuff.ts
  var AdvancedBuff = class extends Game.buffType {
    constructor(name, func) {
      super(name, func);
    }
  };

  // jscc_temp/src/quests.ts
  var Task = class extends AdvancedBuff {
    constructor(name, func, check, finish) {
      super(name, func);
    }
  };

  // jscc_temp/src/achievement/AdvancedAchievement.ts
  var import_cppkies3 = __toModule(require_dist());
  var AdvancedAchievement = class extends import_cppkies3.default.Achievement {
    constructor(name, desc, icon) {
      super(name, desc, icon);
    }
  };

  // jscc_temp/src/achievement/AuthorAchievement.ts
  var AuthorAchievement = class extends AdvancedAchievement {
    constructor(name, desc, icon) {
      super(name, desc, icon);
      this.pool = "authors";
      this.exclude = { shadow: true };
      this.won = 1;
      this.noTags = true;
      this.noNeuromancy = true;
    }
  };

  // jscc_temp/src/index.ts
  var SkullyCore = {
    AdvancedAchievement,
    AdvancedHeavenlyUpgrade,
    AdvancedUpgrade,
    AuthorAchievement,
    TagCondition,
    PrestigePage,
    RiftUpgrade,
    PagedHeavenlyUpgrade,
    currentPage: "vanilla",
    pages: { vanilla: Game.PrestigeUpgrades },
    TopBarMenuWidget,
    BuildingBarMenuWidget,
    Task,
    onLoad: [],
    exclude,
    IconToStyle,
    createElementFromString
  };
  var SkullyCoreExport;
  if (typeof window.SkullyCore !== "undefined")
    SkullyCoreExport = window.SkullyCore;
  else {
    window.SkullyCore = SkullyCore;
    SkullyCoreExport = SkullyCore;
    import_cppkies4.default.onLoad.push(() => {
      var InjectCode;
      (function(InjectCode2) {
        InjectCode2["After"] = "after";
        InjectCode2["Replace"] = "replace";
        InjectCode2["Before"] = "before";
      })(InjectCode || (InjectCode = {}));
      Game.UpdateMenu = import_cppkies4.default.injectCodes(Game.UpdateMenu, [
        [
          "for (var i in achievements)",
          'pools.authors = "<b>Authors</b> <small>The people who made the mods you are playing with now!</small>";',
          InjectCode.Before
        ]
      ]);
      Game.crate = import_cppkies4.default.injectCodes(Game.crate, [
        [
          "if (neuromancy)",
          'if (neuromancy && (typeof me.noNeuromancy !== "undefined" ? !me.noNeuromancy : true))',
          InjectCode.Replace
        ]
      ]);
      Game.crateTooltip = import_cppkies4.default.injectCodes(Game.crateTooltip, [
        [
          "var tagsStr='';",
          `
				if (typeof me.noTags !== "undefined" ? me.noTags : false) tags = []
				if (typeof me.tags !== "undefined") {
					for(let i in me.tags) {
						tags.concat(me.tags[i]);
					}
				}
				if (typeof window.SkullyCore !== "undefined") window.SkullyCore.TagCondition.Conditions.forEach((element) => {
					if (typeof element.tagFunction === "function") {
						if (element.tagFunction(me)) tags.push(element.name, element.color) 
					} else {
						console.warn("Malformed TagCondition")
					}
				})
				`,
          InjectCode.Before
        ]
      ]);
      Game.UpdateMenu = import_cppkies4.default.injectCodes(Game.UpdateMenu, [
        [
          "if (me.pool=='' || me.pool=='cookie' || me.pool=='tech') upgradesTotal++;",
          `if (me.pool=='' || me.pool=='cookie' || me.pool=='tech') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("total", me)) upgradesTotal++;
				}`,
          InjectCode.Replace
        ],
        [
          "if (me.pool=='debug') hiddenUpgrades += str2;",
          `if (me.pool=='debug') { 
					// SkullyCore Inject
					if (window.SkullyCore.exclude("debug", me)) hiddenUpgrades += str2;
				}`,
          InjectCode.Replace
        ],
        [
          "if (me.pool=='prestige') {prestigeUpgrades+=str2;prestigeUpgradesTotal++;}",
          `if (me.pool=='prestige') {
               		// SkullyCore Inject
					if (window.SkullyCore.exclude("prestige", me)) {
						prestigeUpgrades += str2;
						prestigeUpgradesTotal++;
					}
				}`,
          InjectCode.Replace
        ],
        [
          "if (me.pool=='prestige') prestigeUpgradesOwned++;",
          `if (me.pool=='prestige') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("prestige", me)) prestigeUpgradesOwned++;
				}`,
          InjectCode.Replace
        ],
        [
          "if (me.pool=='cookie') cookieUpgrades+=str2;",
          `if (me.pool=='cookie') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("cookie", me)) cookieUpgrades += str2;
				}`,
          InjectCode.Replace
        ],
        [
          "if (me.pool!='toggle' && me.pool!='unused') upgrades+=str2;",
          `if (me.pool!='toggle' && me.pool!='unused') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("other", me)) {
						upgrades+=str2;
					}
				}`,
          InjectCode.Replace
        ],
        [
          "achievementsOwnedOther++;",
          `if (window.SkullyCore.exclude("shadow", me)) {
					// SkullyCore Inject
					achievementsOwnedOther++;
				}`,
          InjectCode.Replace
        ]
      ]);
      Game.BuildAscendTree = import_cppkies4.default.injectCodes(Game.BuildAscendTree, [
        [
          "for (var i in Game.PrestigeUpgrades)",
          "for (var i in window.SkullyCore.pages[window.SkullyCore.currentPage])",
          InjectCode.Replace
        ],
        [
          "var str='';",
          "var currentHeavenlyUpgrades = window.SkullyCore.pages[window.SkullyCore.currentPage];\n",
          InjectCode.Before
        ],
        ["Game.PrestigeUpgrades", "currentHeavenlyUpgrades", InjectCode.Replace]
      ]);
      document.getElementsByTagName("head")[0].appendChild(createElementFromString(`
			<style type="text/css">
				.widget_container {
					display: flex;
					position: absolute;
					bottom: -12px;
					z-index: 10000
				}

				#comments_container {
					/* dirty hack */
					margin-left:  24px;
				}

				.widget_container > div { 
					width: 32px;
					height: 32px;

					position: relative !important;
					bottom: 0px;
					left: 0px !important;

					z-index:10000;
					filter: drop-shadow(0px 3px 2px #000);
					-webkit-filter: drop-shadow(0px 3px 2px #000);
					cursor: pointer;

					margin-left: 4px;
				}
				.widget_container > div:hover {
					bottom: 8px;
				}
		
				.baseIcon {
					width: 48px;
					height: 48px;
					position: absolute;
					left: -8px;
					top: -8px;
				}

				div#lumpsAmount
				{
					position: relative !important;
				}
			</style>`));
      SkullyCore.onLoad.forEach((func) => func());
      const TopBar = l("comments").appendChild(createElementFromString(`
				<div id="comments_container" class="widget_container"></div>
			`));
      TopBarMenuWidget.Bars.forEach((bar) => {
        bar.div = TopBar.appendChild(bar.getDiv());
      });
      Game.ObjectsById.forEach((object) => {
        var _a, _b;
        const el = l(`row${object.id}`);
        if (el !== null) {
          const building = el.appendChild(createElementFromString(`
						<div id="row${object.id}_container" class="widget_container"></div>
					`));
          const bars = BuildingBarMenuWidget.Bars;
          (_b = bars[_a = object.name]) != null ? _b : bars[_a] = [];
          bars[object.name].forEach((bar) => {
            bar.div = building.appendChild(bar.getDiv());
          });
        }
      });
    });
    SkullyCore.onLoad.push(() => {
      new TagCondition("Author", "#ffffff", (me) => me.pool === "authors");
      const iconLink = "https://raw.githubusercontent.com/MasterOfBob777/SkullyCore/master/static/skullyCoreIcons.png";
      new AuthorAchievement("Orteil & Opti", "The people who made this awesome game!", [17, 5, ""]);
      new AuthorAchievement("TheGLander", "The developer of Cppkies and the CCRepo (W.I.P)", [3, 2, iconLink]);
      new AuthorAchievement("TheSkullyKO", "The ideas guy and artist for SkullyCore and other Skully mods", [
        1,
        0,
        iconLink
      ]);
      const BobCheevo = new AuthorAchievement("Bob", "The developer that made this menu for authors and hopefully will work on much more.", [2, 2, iconLink]);
      let BobClicks = 0;
      let BobLines = [
        { text: "The developer that made this menu for authors and hopefully will work on much more." },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "You can stop clicking on me now. There's not an achievement or anything, there's not bcps (Bob Clicks per Second), there's really nothing too interesting." },
        { text: "Like I'm serious there's nothing execept these words." },
        { text: "..." },
        { text: "....." },
        { text: "......." },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "Hi!" },
        { text: "Wow, you're still here. Usually those two tricks work. " },
        { text: "Well there's nothing else." },
        { text: "I mean you can keep clicking on me." },
        { text: "But it's ultimately a waste of your time." },
        { text: "Oh look! There's a golden cookie, better go click on it not me!", func: () => {
          new Game.shimmer("golden").force = "blab";
        } },
        { text: "Hah that's what you get for clicking on me!" },
        { text: "Wait that wasn't a wrath cookie, just a harmless blab! Grrrrr, I'll get you next time!" },
        { text: "For a reward, I'll go away for now, but I'll be back!", func: () => {
          Game.RemoveAchiev("Bob");
          setTimeout(() => {
            Game.Achievements["Bob"].won = 1;
            BobClicks++;
          }, 1e4);
        } },
        { text: "Okay, I'm Back." },
        { text: "To be continued..... " }
      ];
      BobCheevo.clickFunction = () => {
        if (BobClicks !== BobLines.length)
          BobClicks++;
      };
      BobCheevo.descFunc = () => {
        if (typeof BobLines[BobClicks].func !== "undefined") {
          BobLines[BobClicks].func();
        }
        return BobLines[BobClicks].text;
      };
      BobCheevo.iconFunction = () => {
        var _a, _b;
        return (_b = (_a = BobLines[BobClicks]) == null ? void 0 : _a.icon) != null ? _b : [0, 2];
      };
      console.log("SkullyCore Loaded!");
    });
  }
  var src_default = SkullyCoreExport;
})();
//# sourceMappingURL=index.js.map
