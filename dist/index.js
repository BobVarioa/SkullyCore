(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var dist = createCommonjsModule(function (module, exports) {
	(function(e,n){module.exports=n();})(commonjsGlobal,function(){var R=Math.abs,F=Math.floor,H=Math.min,D=Math.pow,Y=Math.max;function e(e,n){function i(){this.constructor=e;}K(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i);}function n(e,n,i,o){return new(i||(i=Promise))(function(a,r){function t(e){try{d(o.next(e));}catch(n){r(n);}}function s(e){try{d(o["throw"](e));}catch(n){r(n);}}function d(e){e.done?a(e.value):new i(function(n){n(e.value);}).then(t,s);}d((o=o.apply(e,n||[])).next());})}function o(e,n){function i(e){return function(n){return o([e,n])}}function o(i){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,r&&(s=2&i[0]?r["return"]:i[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch((r=0,s)&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if((s=c.trys,!(s=0<s.length&&s[s.length-1]))&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){c.label=i[1];break}if(6===i[0]&&c.label<s[1]){c.label=s[1],s=i;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(i);break}s[2]&&c.ops.pop(),c.trys.pop();continue;}i=n.call(e,c);}catch(n){i=[6,n],r=0;}finally{a=s=0;}if(5&i[0])throw i[1];return {value:i[0]?i[1]:void 0,done:!0}}var a,r,s,d,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return d={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(d[Symbol.iterator]=function(){return this}),d}function a(){for(var e=0,n=0,o=arguments.length;n<o;n++)e+=arguments[n].length;for(var t=Array(e),r=0,n=0;n<o;n++)for(var d=arguments[n],a=0,c=d.length;a<c;a++,r++)t[r]=d[a];return t}function r(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function t(e,n){var i=null===n[0],o=/(?:)/;null!==n[0]&&(o="string"==typeof n[0]?new RegExp(r(n[0]),"g"):n[0],!o.test(e)&&console.warn("Nothing to inject."));var a=/(\)[^{]*{)/,t=/(}?)$/;switch(n[2]){case"before":e=i?e.replace(a,"$1"+n[1]):e.replace(o,""+n[1]+n[0]);break;case"replace":e=i?n[1]:e.replace(o,n[1]);break;case"after":e=i?e.replace(t,n[1]+"$1"):e.replace(o,""+n[0]+n[1]);break;default:throw new Error("where Parameter must be \"before\", \"replace\" or \"after\"");}return e}function s(e,n,i,o,r){void 0===r&&(r={});var s=Function.apply(void 0,a(Object.keys(r),["return ("+t(e.toString(),[n,i,o])+")"])).apply(void 0,Object.values(r));return s.prototype=e.prototype,s}function d(e,n,i){void 0===i&&(i={});for(var o,r=e.toString(),s=0,d=n;s<d.length;s++)o=d[s],r=t(r,o);var c=Function.apply(void 0,a(Object.keys(i),["return ("+r+")"])).apply(void 0,Object.values(i));return c.prototype=e.prototype,c}function c(e,n){for(var o in n)e[o]=n[o];}function u(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function p(e,n){return e.hasOwnProperty(n)}function g(e){for(var n,i=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],o="",a=0,r=i;a<r.length;a++)for(n=r[a];e>=n[0];)o+=n[1],e-=n[0];return o}function m(e){switch(e){case"mod":return {achievements:{},buildings:{},upgrades:{}};case"dragon":return {level:"sync",auras:["sync","sync"]};case"achievement":return {won:!1};case"upgrade":return {bought:!1,unlocked:!1};case"building":return {amount:0,bought:0,free:0,totalCookies:0,level:0,muted:0,minigameSave:""};default:throw new Error("Invalid fragment name!");}}function k(){return {mods:{},foreign:m("mod"),saveVer:1,dragon:m("dragon")}}function b(){Ge.save=Q=k();}function h(e){return Q.foreign.buildings[e.name]||m("building")}function v(e){var n=e.amount,i=e.bought,o=e.free,a=e.totalCookies,r=e.level,t=e.muted,s=e.minigameSave,d=e.name;Q.foreign.buildings[d]={amount:n,bought:i,free:o,totalCookies:a,level:r,muted:t,minigameSave:s};}function f(e){return Q.foreign.upgrades[e.name]||m("upgrade")}function C(e){Q.foreign.upgrades[e.name]={unlocked:!!e.unlocked,bought:!!e.bought};}function y(e){return Q.foreign.achievements[e.name]||m("achievement")}function L(e){Q.foreign.achievements[e.name]={won:!!e.won};}function O(){"sync"!==Q.dragon.level&&Q.dragon.level<=Game.dragonLevels.length-1&&(Game.dragonLevel=Q.dragon.level),"sync"!==Q.dragon.auras[0]&&Q.dragon.auras[0]<=Object.keys(Game.dragonAuras).length-1&&(Game.dragonAura=Q.dragon.auras[0]),"sync"!==Q.dragon.auras[1]&&Q.dragon.auras[1]<=Object.keys(Game.dragonAuras).length-1&&(Game.dragonAura2=Q.dragon.auras[1]);}function A(){for(var e,n=0,i=Ge.customBuildings;n<i.length;n++)e=i[n],c(e,h(e));for(var o,a=0,r=Ge.customUpgrades;a<r.length;a++)o=r[a],c(o,f(o)),o.bought&&Game.CountsAsUpgradeOwned(o.pool)&&Game.UpgradesOwned++;for(var t,s=0,d=Ge.customAchievements;s<d.length;s++)t=d[s],c(t,y(t)),t.won&&Game.CountsAsAchievementOwned(t.pool)&&Game.AchievementsOwned++;O();}function w(){for(var e,n=0,i=Ge.customBuildings;n<i.length;n++)e=i[n],v(e);for(var o,a=0,r=Ge.customUpgrades;a<r.length;a++)o=r[a],C(o);for(var t,s=0,d=Ge.customAchievements;s<d.length;s++)t=d[s],L(t);}function j(e){var n=k();if("object"!=typeof e||null===e)return n;if(!p(e,"saveVer")||"number"!=typeof e.saveVer||1<e.saveVer)return n;if(n.foreign=p(e,"foreign")?function(e){var n=m("mod");if("object"!=typeof e||null===e)return n;if(p(e,"buildings")&&"object"==typeof e.buildings&&null!==e.buildings)for(var i in e.buildings){var o=e.buildings[i];if("object"==typeof o&&null!==o)for(var a in n.buildings[i]=m("building"),o)typeof n.buildings[i][a]==typeof o[a]&&(n.buildings[i][a]=o[a]);}if(p(e,"upgrades")&&"object"==typeof e.upgrades&&null!==e.upgrades)for(var r in e.upgrades){var t=e.upgrades[r];if("object"==typeof t&&null!==t)for(var a in n.upgrades[r]=m("upgrade"),n.upgrades[r])typeof n.upgrades[r][a]==typeof t[a]&&(n.upgrades[r][a]=t[a]);}if(p(e,"achievements")&&"object"==typeof e.achievements&&null!==e.achievements)for(var s in e.achievements){var d=e.achievements[s];if("object"==typeof d&&null!==d)for(var a in n.achievements[s]=m("achievement"),n.achievements[s])typeof n.achievements[s][a]==typeof d[a]&&(n.achievements[s][a]=d[a]);}return n}(e.foreign):m("mod"),p(e,"dragon")&&"object"==typeof e.dragon&&null!==e.dragon&&(p(e.dragon,"level")&&("number"==typeof e.dragon.level||"sync"===e.dragon.level)&&(n.dragon.level=e.dragon.level),p(e.dragon,"auras")&&e.dragon.auras instanceof Array))for(var o in e.dragon.auras){var i=e.dragon.auras[o];("number"==typeof i||"sync"===i)&&(n.dragon.auras[o]=i);}return n}function S(e){var n;try{n=JSON.parse(e);}catch(n){""!==e&&console.warn("CPPKIES: Found invalid save, creating new one..."),b();}Q=Ge.save=j(n),A();}function T(){return w(),JSON.stringify(Q)}function U(e,n){Z[e]=n;}function P(e){if(J.includes(e))throw new Error("Recursive alias");return (J.push(e),e in Z)?P(Z[e]):(J=[],e)}function I(e){return new Promise(function(n){var i=new Image;i.addEventListener("load",function(){n(i);}),i.crossOrigin="Anonymous",i.src=e;})}function M(e){return new Promise(function(n){e.canvas.toBlob(function(e){n(URL.createObjectURL(e));});})}function G(e,n,i,o,a,r){return new Promise(function(t){i[0]instanceof Array||(i=[i]),i=i;var s={};for(var d in i)for(var c in i[d])if(i[d][c]){if(i[d][c]=i[d][c].toString().toLowerCase(),!(i[d][c]in n))throw new Error("Invalid icon name");s[i[d][c]]=[parseInt(c),parseInt(d)];}var u=document.createElement("canvas").getContext("2d"),p=new Image;p.addEventListener("load",function(){for(var e in u.canvas.width=a[0],u.canvas.height=a[1],s)u.drawImage(p,s[e][0]*o[0],s[e][1]*o[1],o[0],o[1],n[e][0]*o[0],n[e][1]*o[1],o[0],o[1]);var i,d=function(){M(u).then(t);};r&&(i=r(u)),i instanceof Promise?i.then(d):d();}),p.crossOrigin="Anonymous",p.src=e;})}function _(e){return e=a(e),(void 0===e[2]||null===e[2])&&(e[2]=Ge.iconLink),e[2]=P(e[2]),e}function B(e){var n=new X,i=[new V("tooltip",function(){e.tooltip=s(s(e.tooltip,"return","let tempRet = ","replace"),null,"\n//Cppkies injection\n\t\t\t\treturn Cppkies.buildingHooks[this.name].emit(\"tooltip\", tempRet)","after");}),new V("buy",function(){e.buy=s(e.buy,null,"\n//Cppkies injection\n\t\t\t\tif(success) {\n\t\t\t\t\tCppkies.buildingHooks[this.name].emit(\"buy\")\n\t\t\t\t}","after");}),new V("levelUp",function(){e.levelUp=s(e.levelUp,"me.level+=1;","\n// Cppkies injection\nCppkies.buildingHooks[me.name].emit(\"levelUp\")","after",{me:e});})];i.forEach(function(e){var n;null===(n=e.func)||void 0===n?void 0:n.call(e);}),Ge.hooks.on("buildingCps",function(i){return {building:i.building,cps:Game.Objects[i.building]===e?n.emit("cps",i.cps):i.cps}}),oe[e.name]=n;}function N(){for(var e,n=0,i=Game.ObjectsById;n<i.length;n++)e=i[n],oe[e.name]||B(e);}function q(e){return "fortune"===e.tier}function E(e){for(var n,o=1,a=1;a<=e;a++)o+=null!==(n=me[a])&&void 0!==n?n:me["default"];return 9*D(10,o)}function x(){Ge.on("getIcon",function(e){var n=e.icon,i=e.type,o=e.tier;return Ge.customTiers.forEach(function(e){e.keyName===o.toString()&&e.iconLink&&(n[2]=e.iconLink);}),{icon:n,type:i,tier:o}}),Ge.on("getIcon",function(e){var n=e.icon,i=e.type,o=e.tier;return Ge.customBuildings.forEach(function(e){e.name===i&&e.iconLink&&(n[2]=e.iconLink);}),{icon:n,tier:o,type:i}}),Ge.on("getIcon",function(e){var n=e.icon,i=e.type,o=e.tier;return void 0!==n[2]&&null!==n[2]||p(Game.Tiers[o.toString()],"iconLink")||(n[2]=""),{icon:n,tier:o,type:i}}),Ge.on("preSave",function(){if(0!==Game.dragonAura&&(Q.dragon.auras[0]="sync"),0!==Game.dragonAura2&&(Q.dragon.auras[1]="sync"),Game.dragonAuras[Game.dragonAura]instanceof Ue&&(Q.dragon.auras[0]=Game.dragonAura,Game.dragonAura=0),Game.dragonAuras[Game.dragonAura2]instanceof Ue&&(Q.dragon.auras[1]=Game.dragonAura2,Game.dragonAura2=0),Game.dragonLevels[Game.dragonLevel]instanceof Pe||Game.dragonLevel>=$)for(Q.dragon.level=Game.dragonLevel;Game.dragonLevels[Game.dragonLevel]instanceof Pe||Game.dragonLevel>=$;)Game.dragonLevel--;}),Ge.on("postSave",function(){"sync"!==Q.dragon.auras[0]&&Game.dragonAuras[Q.dragon.auras[0]]&&(Game.dragonAura=Q.dragon.auras[0]),"sync"!==Q.dragon.auras[1]&&Game.dragonAuras[Q.dragon.auras[1]]&&(Game.dragonAura2=Q.dragon.auras[1]),"sync"!==Q.dragon.level&&Game.dragonLevels[Q.dragon.level]&&(Game.dragonLevel=Q.dragon.level);}),Ge.on("reset",function(){Q.dragon.auras=["sync","sync"],Q.dragon.level="sync";}),Ge.on("specialPic",function(e){var n,i=Game.dragonLevels[Game.dragonLevel];return "dragon"===e.tab&&i instanceof Pe&&(e.pic=null!==(n=i.picLink)&&void 0!==n?n:e.pic),e});}var W,K=function(e,n){return K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n;}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i]);},K(e,n)},X=function(){function e(){this._events={};}return e.prototype.on=function(e,n){this._events[e]?this._events[e].push(n):this._events[e]=[n];},e.prototype.once=function(e,n){var i=this;this.on(e,function(o){return i.off(e,n),n(o)});},e.prototype.off=function(e,n){this._events[e].splice(this._events[e].indexOf(n),1);},e.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=n[0];this._events[e]||(this._events[e]=[]);for(var a,r=0,t=this._events[e];r<t.length;r++)a=t[r],o=a(o);return o},e.prototype.constEmit=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];this._events[e]||(this._events[e]=[]);for(var o,a=0,r=this._events[e];a<r.length;a++)o=r[a],o(n[0]);},e}(),V=function(){return function(e,n){this.value=e,this.func=n;}}(),$=Game.dragonLevels.length+0,Q=k(),Z={},J=[],z={},ee={"3d":[0,21],milestone1:[0,22],milestone2:[0,23],milestone3:[0,24],krumblor:[0,25],level1:[0,26],level2:[0,27]},ne={},ie={research:[9,0],cookie:[10,0],mouse:[11,0],multicursor:[12,0],kitten:[18,0]},oe={},ae=[],re=function(n){function i(e,o,a,r,t,s,d,c,u,p){var g,m,k=this;if(Game.Objects[e])throw new Error("Can't create building, \""+e+"\" is already used as a building name");0!==r[1]&&console.warn("All icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=relink-column"),0!==t[0]&&console.warn("All big icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=big-icons"),k=n.call(this,e,o,a,t[1],r[0],s,0,d,c)||this,ae.push(k),oe[e]||B(k);var b=function(e){if(0>=parseInt(e))return "continue";var n=Game.ObjectsById[e];if(n.canvas=l("rowCanvas"+e),!n.canvas)return "continue";if(n.ctx=n.canvas.getContext("2d"),n.canvas.addEventListener("mouseover",function(){n.mouseOn=!0;}),n.canvas.addEventListener("mouseout",function(){n.mouseOn=!1;}),n.canvas.addEventListener("mousemove",function(i){var e=n.canvas.getBoundingClientRect();n.mousePos[0]=i.pageX-e.left,n.mousePos[1]=i.pageY-e.top;}),n.minigame&&n.minigameLoaded){var i=n.minigame.save();n.minigame.launch(),n.minigame.load(i);}};for(var v in Game.ObjectsById)b(v);k.buildingLink=null!==(g=t[2])&&void 0!==g?g:Ge.buildingLink,k.iconLink=P(null!==(m=r[2])&&void 0!==m?m:Ge.iconLink),u&&(Game.foolObjects[e]=u),p&&(Game.goldenCookieBuildingBuffs[e]=p),k.iconLink&&oe[k.name].on("tooltip",function(e){return k.locked?e:e.replace("background-position","background-image:url("+k.iconLink+");background-position")}),Game.BuildStore(),k.buildingLink&&Ge.hooks.on("buildStore",function(){l("productIcon"+k.id).style.backgroundImage="url("+k.buildingLink+")",l("productIconOff"+k.id).style.backgroundImage="url("+k.buildingLink+")";}),Game.BuildStore(),k.canvas=l("rowCanvas"+k.id),k.ctx=k.canvas.getContext("2d"),k.pics=[];var f=document.createElement("div");f.className="tinyProductIcon",f.id="mutedProduct"+k.id,f.style.display="none",k.buildingLink&&(f.style.backgroundImage="url("+k.buildingLink+")"),f.style.backgroundPositionX="-"+r[0]+"px",f.style.backgroundPositionY="-"+r[1]+"px",f.addEventListener("click",function(){k.mute(0),window.PlaySound(k.muted?"snd/clickOff.mp3":"snd/clickOn.mp3");}),window.AddEvent(k.canvas,"mouseover",function(){k.mouseOn=!0;}),window.AddEvent(k.canvas,"mouseout",function(){k.mouseOn=!1;}),k.canvas.addEventListener("mousemove",function(n){var e=k.canvas.getBoundingClientRect();k.mousePos[0]=n.pageX-e.left,k.mousePos[1]=n.pageY-e.top;}),l("buildingsMute").appendChild(f);var C=h(k);for(var v in C)k[v]=C[v];return Game.recalculateGains=1,k}return e(i,n),i}(Game.Object),te=[],se=function(n){function i(e,o,a,r,t){void 0===t&&(t=function(){});var s=n.call(this,e,"function"==typeof o?"":o,"function"==typeof a?0:a,"function"==typeof r?[0,0]:_(r),t)||this;"function"==typeof o&&(s.descFunc=o),"function"==typeof a&&(s.priceFunc=a),"function"==typeof r&&(s.iconFunction=function(){return _(r())}),te.push(s);var d=f(s);for(var c in d)s[c]=d[c];return Game.upgradesToRebuild=1,s.bought&&Game.CountsAsUpgradeOwned(s.pool)&&Game.UpgradesOwned++,s}return e(i,n),i}(Game.Upgrade),de=function(n){function i(e,i,o,a,r,t,s){void 0===t&&(t=["Legacy"]),void 0===s&&(s=function(){});var d=n.call(this,e,i,o,a,s)||this;return d.pool="prestige",d.posX=r[0],d.posY=r[1],d.parents=t.map(function(e){return Game.Upgrades[e]||Game.UpgradesById[e]}),Game.PrestigeUpgrades.push(d),Game.UpgradePositions[d.id]=r,d}return e(i,n),i}(se),ce=function(n){function i(e,i,o,a){var r=this;return "string"==typeof o&&(o=Game.Objects[o]),r=n.call(this,e,u(o.plural)+" are <b>twice</b> as efficient.<q>"+i+"</q>",o.basePrice*Game.Tiers[a].price,Game.GetIcon(o.name,a))||this,Game.SetTier(o.name,a),r.buildingTie1=o,q(r)&&(r.order=19e3,o.fortune=r),isNaN(parseInt(a.toString()))||(a=parseInt(a.toString())),"number"==typeof a&&(r.order=100*(o.id+1)+r.id/1e3,r.order-=75*Y(0,H(o.id-4,3)),8<=o.id&&(r.order-=75)),"fortune"===a&&Game.Tiers[a].upgrades.push(r),o.buyFunction.apply(o),r}return e(i,n),i}(se),le=function(n){function i(e,i,o,r){var t=this;if(r){if(!r.endsWith(".png"))throw new Error("Can't use the grandma picture URL \""+r+"\", URL must end with .png");r=r.substring(0,r.length-4);}"string"==typeof o&&(o=Game.Objects[o]);var s=o.id-1;return 1===s?s="grandma":s+=" grandmas",t=n.call(this,e,"Grandmas are <b>twice</b> as efficient. "+u(o.plural)+" gain <b>+1% CpS</b> per "+s+".<q>"+i+"</q>",o.basePrice*Game.Tiers[2].price,[10,9,""],Game.Objects.Grandma.redraw)||this,o.grandma=t,t.buildingTie=o,t.order=250+t.id/1e3,12<=o.id&&(t.order+=5),Game.GrandmaSynergies.push(t.name),r&&Ge.hooks.on("grandmaPic",function(e){return t.bought?a(e,[r]):e}),Game.Objects.Grandma.redraw(),o.buyFunction.apply(o),t}return e(i,n),i}(se),ue=function(n){function i(e,i,o,a,r){var t=this;"string"==typeof o&&(o=Game.Objects[o]),"string"==typeof a&&(a=Game.Objects[a]);var s=Game.GetIcon(o.name,r);if(o.basePrice>a.basePrice){var d=o;o=a,a=d;}return t=n.call(this,e,u(o.plural)+" gain <b>+5% CpS</b> per "+a.name.toLowerCase()+".<br>"+u(a.plural)+" gain <b>+0.1% CpS</b> per \n\t\t\t"+o.name.toLowerCase()+".<q>"+i+"</q>",(10*o.basePrice+1*a.basePrice)*Game.Tiers[r].price,s)||this,t.tier=r,t.buildingTie1=o,t.buildingTie2=a,t.order=5e3+t.id/1e3,o.synergies.push(t),a.synergies.push(t),Game.Tiers[r].upgrades.push(t),Game.RebuildUpgrades(),o.buyFunction.apply(o),t}return e(i,n),i}(se),pe=[5,7,8,9,10],ge=function(n){function i(e,i,o,a){void 0===a&&(a=20);var r=this,t=Game.Objects.Cursor,s=parseInt(o.toString());return r=n.call(this,e,"Multiplies the gain from Thousand fingers by <b>"+a+"</b>.<q>"+i+"</q>",Game.Tiers[o].special||isNaN(s)?t.basePrice*Game.Tiers[o].price:D(10,pe[H(s-4,pe.length-1)]+3*Y(s-8,0)),Game.GetIcon(t.name,o))||this,r.tier=o,r.pool="",r.order=100+r.id/1e3,Ge.on("cursorFingerMult",function(e){return r.bought?e*a:e}),Game.Tiers[o].special||isNaN(s)||Ge.buildingHooks.Cursor.on("buy",function(){t.amount>=(4===s?25:50*(s-4))&&Game.Unlock(r.name);}),"fortune"===o&&Game.Tiers[o].upgrades.push(r),Game.Objects.Cursor.buyFunction.apply(Game.Objects.Cursor),r}return e(i,n),i}(se),me={1:5,2:4,4:4,default:3},ke=[.1,.125,.15,.175,.2,.2,.2,.2,.2,.175,.15,.125,.115],be=function(n){function i(e,i,o,a,r,t){void 0===a&&(a=Game.Tiers[o].special||isNaN(parseInt(o.toString()))?null:ke[(parseInt(o.toString())-1)%(ke.length-1)]),void 0===t&&(t=Game.Tiers[o].special||isNaN(parseInt(o.toString()))?null:1===o?.5:o-1);var s=n.call(this,e,"You gain <b>more CpS</b> the more milk you have.<q>"+i+"</q>",Game.Tiers[o].special||isNaN(parseInt(o.toString()))?null!==r&&void 0!==r?r:0:E(o),Game.GetIcon("Kitten",o))||this;return s.tier=o,s.kitten=!0,s.pool="",null===a&&console.warn("Please make sure to specify the power if the kitten tier is special"),(Game.Tiers[o].special||isNaN(parseInt(o.toString())))&&void 0===r&&console.warn("Please make sure to specify the cost if the kitten tier is special"),null!==t&&Ge.on("logic",function(){Game.milkProgress>=t&&Game.Unlock(s.name);}),s.order=2e4+s.id/1e3,null!==a&&Ge.on("rawCpsMult",function(e){var n=s.bought?1+Game.milkProgress*a*Ge.hiddenMilkMult:1;return Game.cookiesMultByType.kittens*=n,e*n}),Game.UpgradesByPool.kitten.push(s),"fortune"===o&&Game.Tiers[o].upgrades.push(s),s}return e(i,n),i}(se),he=function(n){function i(e,i,o,a){void 0===a&&(a=1);var r=n.call(this,e,"Clicking gains <b>+"+a+"% of your CpS</b>.<q>"+i+"</q>",D(10,3+2*parseInt(o.toString())),Game.GetIcon("Mouse",o))||this;r.tier=o,r.pool="";var t=parseInt(o.toString());return r.order=150+r.id/1e3,Ge.on("cpcAdd",function(e){return r.bought?e+Game.cookiesPs*a/100:e}),Game.Tiers[o].special||isNaN(t)||Ge.on("check",function(){Game.handmadeCookies>=D(10,1+2*t)&&Game.Unlock(r.name);}),"fortune"===o&&Game.Tiers[o].upgrades.push(r),r}return e(i,n),i}(se),ve=function(n){function i(e,i,o,a,r,t,s){var d,c=n.call(this,e,"Cookie production multiplier <b>+"+Beautify("function"==typeof r?r():r,1)+"%</b>.<q>"+i+"</q>",o,a)||this;return c.power=r,c.pool="cookie",c.order=(null!==(d=null!==s&&void 0!==s?s:Ge.cookieOrder)&&void 0!==d?d:10020)+c.id/1e3,c.unlockAt={name:e,cookies:("function"==typeof o?o():o)/20,require:null===t||void 0===t?void 0:t.require,season:null===t||void 0===t?void 0:t.season},Game.UnlockAt.push(c.unlockAt),Game.UpgradesByPool.cookie.push(c),Game.cookieUpgrades.push(c),c}return e(i,n),i}(se),fe=[],Ce=function(){return function(e,n,i,o,a,r,t,s,d){void 0===o&&(o=!1),void 0===a&&(a="auto"),void 0===r&&(r=null),void 0===t&&(t=null),void 0===s&&(s=null),void 0===d&&(d="auto");var c;this.name=e,this.color=i,this.special=o,this.keyName="auto"===d?o?e:(Object.keys(Game.Tiers).filter(function(e){return !isNaN(parseInt(e))}).length+1).toString():d,null===r&&(this.unlock=-1),"number"==typeof r&&(this.unlock=r),(!1===o&&null===r||"auto"===r)&&(this.unlock=Game.Tiers[parseInt(this.keyName)-1].unlock+50),"number"==typeof t&&(this.achievUnlock=t),(!1===o&&null===t||"auto"===t)&&(this.achievUnlock=Game.Tiers[parseInt(this.keyName)-1].achievUnlock+50),s&&(this.req=s),this.price="auto"===a?1e8*Game.Tiers[Object.keys(Game.Tiers).filter(function(e){return !isNaN(parseInt(e))}).length.toString()].price:a,this.iconRow=n[1],this.iconLink=P(null!==(c=n[2])&&void 0!==c?c:Ge.iconLink),Game.Tiers[this.keyName]=this,fe.push(this);}}(),ye=[],Le=function(n){function i(e,i,o){var a=n.call(this,e,i,_(o))||this;return c(a,y(a)),ye.push(a),a.won&&Game.CountsAsAchievementOwned(a.pool)&&Game.AchievementsOwned++,a}return e(i,n),i}(Game.Achievement),Oe=function(n){function i(e,i,o,a){void 0===a&&(a=D(10,F(1.5*Game.BankAchievements.length+2)));var r=n.call(this,e,"Bake <b>"+toFixed(a)+"</b> cookie"+(1===R(a)?"":"s")+" in one ascension."+(o?"<q>"+o+"</q>":""),i)||this;return r.treshold=a,r.order=100+.01*Game.BankAchievements.length,Game.BankAchievements.push(r),r}return e(i,n),i}(Le),Ae=function(n){function i(e,i,o,a){void 0===a&&(a=D(10,F(1.2*Game.BankAchievements.length)));var r=n.call(this,e,"Bake <b>"+toFixed(a)+"</b> cookie"+(1===R(a)?"":"s")+" per second."+(o?"<q>"+o+"</q>":""),i)||this;return r.treshold=a,r.order=200+.01*Game.CpsAchievements.length,Game.CpsAchievements.push(r),r}return e(i,n),i}(Le),we=function(n){function i(e,i,o,a){var r=this,t="object"==typeof o?o:Game.Objects[o],s=null,d=-1;if(0===t.id){switch(a){case"cursor2":s=[0,6],d=2;break;case"cursor50":s=[1,6],d=50;break;default:if(0>=Game.Tiers[a].achievUnlock){console.warn("Tier has invalid unlock amount");break}d=1===a?1:2*Game.Tiers[a].achievUnlock;}Ge.buildingHooks.Cursor.on("buy",function(){Game.Objects.Cursor.amount>=d&&Game.Win(r.name);});}else d=Game.Tiers[a].achievUnlock;return r=n.call(this,e,"Have <b>"+d+"</b> "+(1===R(d)?t.single:t.plural)+"."+(i?"<q>"+i+"</q>":""),null!==s&&void 0!==s?s:Game.GetIcon(t.name,a))||this,Game.SetTier(t.name,"cursor2"===a||"cursor50"===a?1:a),t.tieredAchievs[a]=r,r.buildingTie=t,r.order=1e3+100*t.id+r.id/1e3,r.order-=75*Y(0,H(t.id-4,3)),8<=t.id&&(r.order-=75),0===t.id&&(r.order+=50),r}return e(i,n),i}(Le),je=function(n){function i(e,i,o,a,r){var t=this;"string"==typeof i&&(i=Game.Objects[i]);var s=[i.iconColumn,21+o,i instanceof re?i.iconLink:void 0],d=D(10,12+i.id+(null!==r&&void 0!==r?r:0)+7*(o-1));return t=n.call(this,e,"Make <b>"+toFixed(d)+"</b> cookies just from "+i.plural+"."+(a?"<q>"+a+"</q>":""),s)||this,t.order=1020+100*i.id+t.id/1e3,t.order-=75*Y(0,H(i.id-4,3)),8<=i.id&&(t.order-=75),0===i.id&&(t.order+=50),i.productionAchievs.push({pow:d,achiev:t}),t}return e(i,n),i}(Le),Se=function(n){function i(e,i,o){var a=this;"string"==typeof i&&(i=Game.Objects[i]);var r=[i.iconColumn,26,i instanceof re?i.iconLink:void 0];return a=n.call(this,e,"Reach level <b>10</b> "+i.plural+"."+(o?"<q>"+o+"</q>":""),r)||this,a.order=1020+100*i.id+a.id/1e3,a.order-=75*Y(0,H(i.id-4,3)),8<=i.id&&(a.order-=75),0===i.id&&(a.order+=50),i.levelAchiev10=a,a}return e(i,n),i}(Le),Te=function(n){function i(e,i,o){var a=this,r=parseInt(i.toString());return a=n.call(this,e,"Make <b>"+toFixed(D(10,1+2*r))+"</b> cookies from clicking."+(o?"<q>"+o+"</q>":""),Game.GetIcon("Mouse",i))||this,a.pool="normal",a.tier=i,a.order=1e3+a.id/1e3,Game.Tiers[i].special||isNaN(r)||Ge.on("check",function(){Game.handmadeCookies>=D(10,1+2*r)&&Game.Win(a.name);}),a}return e(i,n),i}(Le),Ue=function(){function e(e,n,i){this.name=e,this.desc=n,"string"==typeof i&&(i=Game.Objects[i]),this.pic=i instanceof Game.Object?_([i.iconColumn,25,i instanceof re?i.iconLink:void 0]):i,Game.dragonAuras[Object.keys(Game.dragonAuras).length]=this,"sync"!==Q.dragon.auras[0]&&Object.keys(Game.dragonAuras).length>=Q.dragon.auras[0]&&(Game.dragonAura=Q.dragon.auras[0]),"sync"!==Q.dragon.auras[1]&&Object.keys(Game.dragonAuras).length>=Q.dragon.auras[1]&&(Game.dragonAura2=Q.dragon.auras[1]);}return e}(),Pe=function(){function e(n,i,o,a,r,t,s){void 0===s&&(s=Game.dragonLevels.length-3),this.buy=r,this.picY=0;var d=Game.dragonLevels[s-1];this.name=null!==n&&void 0!==n?n:d.name,this.action=i,this.costStr="string"==typeof o?function(){return o}:o,this.cost=a,t?(this.pic=t[0],this.picY=t[1],0!==this.picY&&console.warn("For now, all dragon levels must not use pic Y, sorry."),this.picLink=t[2]):(this.pic=d.pic,d instanceof e&&(this.picY=d.picY,this.picLink=d.picLink)),Game.dragonLevels.splice(s,0,this),"sync"!==Q.dragon.level&&Game.dragonLevels.length>=Q.dragon.level&&(Game.dragonLevel=Q.dragon.level);}return e}(),Ie=function(n){function i(e,i,o){var a=this;return "string"==typeof o&&(o=Game.Objects[o]),a=n.call(this,null,"Train "+e+"<br/><small>Aura : "+i+"</small>","100 "+o.plural,function(){return 100<=o.amount},function(){return o.sacrifice(100)})||this,a}return e(i,n),i}(Pe),Me=function(){return function(e,n,i,o){if(void 0===o&&(o=!1),this.name=e,this.pic=i,this.special=o,!i.endsWith(".png"))throw new Error("Can't create milk with the milk URL \""+i+"\", the URL must end with .png!");o||(this.name="Rank "+g(Game.Milks.length+1)+" - "+e),this.pic=i.substr(0,i.length-4),_(n),this.icon=[n[0],n[1]],this.iconLink=n[2],o?Game.MilksByChoice[Object.keys(Game.MilksByChoice).length]=this:Game.Milks.push(this);}}(),Ge={hooks:null,on:null,hiddenMilkMult:1,iconLink:"",buildingLink:"",cookieOrder:10020,buildingHooks:oe,buildingHooksById:[],hookAllBuildings:N,customBuildings:ae,customUpgrades:te,customTiers:fe,save:Q,onLoad:[],Building:re,Upgrade:se,TieredUpgrade:ce,Tier:Ce,HeavenlyUpgrade:de,GrandmaSynergy:le,SynergyUpgrade:ue,CursorUpgrade:ge,KittenUpgrade:be,MouseUpgrade:he,CookieUpgrade:ve,Achievement:Le,CpsAchievement:Ae,BankAchievement:Oe,TieredAchievement:we,ProductionAchievement:je,Level10Achievement:Se,MouseAchievement:Te,customAchievements:ye,DragonAura:Ue,DragonLevel:Pe,DragonAuraLevel:Ie,Milk:Me,injectCode:s,injectCodes:d,DEFAULT_ONBUY:function(){Game.UnlockTiered(this),this.amount>=Game.SpecialGrandmaUnlock&&0<Game.Objects.Grandma.amount&&this.grandma&&Game.Unlock(this.grandma.name);},DEFAULT_CPS:function(e){return Game.GetTieredCpsMult(e)*Game.magicCpS(e.name)*e.baseCps},icons:{relinkColumn:function(e,a,r,t){return void 0===t&&(t=!1),n(this,void 0,void 0,function(){var n,s,s,d,c;return o(this,function(i){switch(i.label){case 0:for(s in void 0===r&&(!z[e]&&(z[e]=0),r=z[e]++),n={},ee)n[s]=[r,ee[s][1]];for(s in Game.Tiers)n[Game.Tiers[s].name.toLowerCase()]=n[s.toString()]=[r,Game.Tiers[s].iconRow];return d=U,c=[e],[4,G(t?P(e):e,n,a,[48,48],[48*(r+1),48*(Object.values(n).reduce(function(e,n){return Y(e,n[1])},-Infinity)+1)],function(n){return new Promise(function(i){if(P(e)!==e){var o=new Image;o.addEventListener("load",function(){n.drawImage(o,0,0),i();}),o.src=P(e),o.crossOrigin="Anonymous";}else i();})})];case 1:return d.apply(void 0,c.concat([i.sent()])),[2];}})})},relinkRow:function(e,a,r,t){return void 0===t&&(t=!1),n(this,void 0,void 0,function(){var n,s,s,d,c;return o(this,function(i){switch(i.label){case 0:for(s in void 0===r&&(!ne[e]&&(ne[e]=0),r=ne[e]++),n={},ie)n[s]=[ie[s][0],r];for(s in Game.ObjectsById)n[Game.ObjectsById[s].single.toLowerCase()]=n[s]=[Game.ObjectsById[s].iconColumn,r];return d=U,c=[e],[4,G(t?P(e):e,n,a,[48,48],[48*(Object.values(n).reduce(function(e,n){return Y(e,n[0])},-Infinity)+1),48*(r+1)],function(n){return new Promise(function(i){if(P(e)!==e){var o=new Image;o.addEventListener("load",function(){n.drawImage(o,0,0),i();}),o.src=P(e),o.crossOrigin="Anonymous";}else i();})})];case 1:return d.apply(void 0,c.concat([i.sent()])),[2];}})})},patchIconsheet:function(e,i,a){var r;return void 0===a&&(a=!0),n(this,void 0,void 0,function(){var n,t,s,d,c,u,p,g,m,k,b,h,v,f,C;return o(this,function(o){switch(o.label){case 0:return n=document.createElement("canvas").getContext("2d"),[4,I(a?P(e):e)];case 1:for(t=o.sent(),s=[t.width,t.height],(d=0,c=i);d<c.length;d++)u=c[d],48*u[0][0]>s[0]&&(s[0]=48*u[0][0]),48*u[0][1]>s[1]&&(s[1]=48*u[0][1]);n.canvas.width=s[0],n.canvas.height=s[1],n.drawImage(t,0,0),p={},g=0,m=i,o.label=2;case 2:return g<m.length?(k=m[g],b=P((null!==(r=k[1][2])&&void 0!==r?r:Ge.iconLink)||"img/icons.png"),!!p[b])?[3,4]:(h=p,v=b,[4,I(b)]):[3,6];case 3:h[v]=o.sent(),o.label=4;case 4:n.clearRect(48*k[0][0],48*k[0][1],48,48),n.drawImage(p[b],48*k[1][0],48*k[1][1],48,48,48*k[0][0],48*k[0][1],48,48),o.label=5;case 5:return g++,[3,2];case 6:return f=U,C=[e],[4,M(n)];case 7:return f.apply(void 0,C.concat([o.sent()])),[2];}})})},extraColumnIcons:ee,extraRowIcons:ie,alias:U,aliases:Z}};window.Cppkies?W=window.Cppkies:(W=Ge,window.Cppkies=W,function(){return new Promise(function(e){var n=new X,i=[new V("customMenu",function(){Game.UpdateMenu=s(Game.UpdateMenu,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tswitch (Game.onMenu) {\n\t\t\t\t\t\tcase \"prefs\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"optionsMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"stats\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"statsMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"log\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"logMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t\tCppkies.hooks.emit(\"menu\")\n\t\t\t\t\t","after");}),new V("preSave",function(){Game.WriteSave=s(Game.WriteSave,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tCppkies.hooks.emit(\"preSave\")\n\t\t\t\t\t","before");}),new V("postSave",function(){Game.WriteSave=s(Game.WriteSave,"if (type==2 || type==3)","\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tCppkies.hooks.emit(\"postSave\")\n\t\t\t\t\t","before");}),new V("reset",function(){Game.Reset=s(Game.Reset,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tCppkies.hooks.constEmit(\"reset\", hard)\n\t\t\t\t\t","before");}),new V("reincarnate",function(){Game.registerHook("reincarnate",function(){return n.emit("reincarnate")});}),new V("getIcon",function(){Game.GetIcon=d(Game.GetIcon,[["return [col,Game.Tiers[tier].iconRow];","// Cppkies Injection\n\t\t\t\t\treturn Cppkies.hooks.emit(\"getIcon\", { icon: [col, Game.Tiers[tier].iconRow], tier: tier, type: type }).icon","replace"],["col=18;","else if (type === \"Mouse\") col = 11;","after"]]);}),new V("buildStore",function(){Game.BuildStore=s(Game.BuildStore,null,";\nCppkies.hooks.emit(\"buildStore\")","after");}),new V("grandmaPic",function(){Game.Objects.Grandma.art.pic=s(Game.Objects.Grandma.art.pic,"return choose(list)+'.png'","// Cppkies injection\n\t\t\t\t\tlist = Cppkies.hooks.emit(\"grandmaPic\", list)\n\t\t\t\t\t","before");}),new V("cps",function(){Game.CalculateGains=d(Game.CalculateGains,[["var rawCookiesPs=Game.cookiesPs*mult;","// Cppkies injection\n\t\t\t\t\tGame.cookiesPs = Cppkies.hooks.emit(\"rawCps\", Game.cookiesPs);\n\t\t\t\t\tmult = Cppkies.hooks.emit(\"rawCpsMult\", mult);\n","before"],["Game.cookiesPs=Game.runModHookOnValue('cps',Game.cookiesPs);","// Cppkies injection\n\t\t\t\t\t\tmult = Cppkies.hooks.emit(\"cpsMult\", mult);\n","before"]]),Game.registerHook("cps",function(e){return n.emit("cps",e)});}),new V("cursorFingerMult",function(){Game.Objects.Cursor.cps=s(Game.Objects.Cursor.cps,"var mult=1;","// Cppkies injection\nadd = Cppkies.hooks.emit(\"cursorFingerMult\", add);\n","before");}),new V("cpc",function(){Game.mouseCps=d(Game.mouseCps,[["var num=0;","// Cppkies injection\n\t\t\t\t\t\tadd = Cppkies.hooks.emit(\"cursorFingerMult\", add);\n","before"],["var out","// Cppkies injection\n\t\t\t\t\t\tadd = Cppkies.hooks.emit(\"cpcAdd\", add);\n","before"]]),Game.registerHook("cookiesPerClick",function(e){return n.emit("cpc",e)});}),new V("buildingCps",function(){Game.CalculateGains=s(Game.CalculateGains,"me.storedTotalCps=me.amount*me.storedCps;","// Cppkies injection (internal, do not use)\nme.storedCps = Cppkies.hooks.emit(\"buildingCps\", { building: i, cps: me.storedCps }).cps;\n","before");}),new V("logic",function(){Game.registerHook("logic",function(){return n.emit("logic")});}),new V("draw",function(){Game.registerHook("draw",function(){return n.emit("draw")});}),new V("check",function(){Game.registerHook("check",function(){return n.emit("check")});}),new V("ticker",function(){Game.getNewTicker=s(Game.getNewTicker,"Game.TickerAge=Game.fps*10;","// Cppkies injection\nlist = Cppkies.hooks.emit(\"ticker\", list);\n","before");}),new V("specialPic",function(){Game.DrawSpecial=s(Game.DrawSpecial,"if (hovered || selected)","// Cppkies injection\nconst override = Cppkies.hooks.emit(\"specialPic\", {tab: Game.specialTabs[i], frame: frame, pic: pic})\npic = override.pic\nframe = override.frame;\n","before"),Game.ToggleSpecialMenu=s(Game.ToggleSpecialMenu,"else {pic='dragon.png?v='+Game.version;frame=4;}","// Cppkies injection\nconst override = Cppkies.hooks.emit(\"specialPic\", {tab: Game.specialTab, frame: frame, pic: pic})\npic = override.pic\nframe = override.frame;\n","after");})];i.forEach(function(e){var n;null===(n=e.func)||void 0===n?void 0:n.call(e);}),Game.Loader.Load=s(Game.Loader.Load,"img.src=this.domain","\n\t\t\t// Cppkies injection\n\t\t\timg.src = (assets[i].indexOf('http') !== -1 ? \"\" : this.domain)\n","replace"),Game.UpdateMenu=d(Game.UpdateMenu,[["url(img/'+milk.pic+'.png)","url(' + (milk.pic.indexOf('http') >= 0 ? milk.pic : 'img/'+milk.pic) + '.png)","replace"],["img/icons.png?v='+Game.version+'","' + (Game.Milks[i].iconLink ? Game.Milks[i].iconLink : 'img/icons.png?v='+Game.version) + '","replace"]]),Game.ToggleSpecialMenu=d(Game.ToggleSpecialMenu,[[">=5",">=Game.dragonLevels.findIndex(val => val.name === \"Krumblor, cookie hatchling\")","replace"],[">=25",">=Game.dragonLevels.findIndex(val => val.action === \"Train secondary aura<br><small>Lets you use two dragon auras simultaneously</small>\") + 1","replace"]]),Game.Objects.Cursor.buyFunction=s(Game.Objects.Cursor.buyFunction,"Game.Unlock('Octillion fingers');","\n \t\t\t// Cppkies injection\n\t\t\tfor(const i in this.tieredUpgrades) {\n\t\t\t\tif (isNaN(parseInt(i))) continue\n\t\t\t\tif (this.amount >= Game.Tiers[this.tieredUpgrades[i].tier].unlock - 50) this.tieredUpgrades[i].unlock()\n\t\t\t}\n","after"),Game.Object=s(Game.Object,"Game.ObjectsN++","\n// Cppkies injection\nCppkies.hookAllBuildings();\n","after"),Game.CalculateGains=s(Game.CalculateGains,"var catMult=1;","// Cppkies injection\n\t\t\tCppkies.hiddenMilkMult = milkMult;\n","before"),e(n);})}().then(function(e){W.hooks=e,W.on=e.on.bind(e),Game.Notify("Cppkies loaded!","",[32,17],1.5);var n=document.createElement("div");n.textContent="Cppkies!",document.querySelector("#topBar").insertBefore(n,document.querySelector("#topBar").children[1]),Game.modSaveData.cppkies||(Game.modSaveData.cppkies="{}"),Game.registerMod("cppkies",{save:T,load:S}),Game.Win("Third-party"),N(),Ge.onLoad.forEach(function(e){return e()}),Ge.onLoad=new Proxy(Ge.onLoad,{set:function(e,n,i){return "length"!==n&&i(),!0}}),window.CPPKIES_ONLOAD||(window.CPPKIES_ONLOAD=[]),window.CPPKIES_ONLOAD.forEach(function(e){return e()}),window.CPPKIES_ONLOAD=new Proxy(Ge.onLoad,{set:function(e,n,i){return "length"!==n&&i(),!0}}),x();}));var _e=W;return _e});

	});

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var TagConditions = [];
	/**
	 * A class that adds a tag to a CrateLike as the name suggests
	 * @class
	 */
	var TagCondition = /** @class */ (function () {
	    /**
	     * A class that adds a tag to a CrateLike as the name suggests
	     * @param name The tag's name
	     * @param color The color of your tag
	     * @param tagFunction A function that should return a boolean on whether this tag should be added to a CrateLike
	     */
	    function TagCondition(name, color, tagFunction) {
	        this.name = name;
	        this.color = color;
	        this.tagFunction = tagFunction;
	        TagConditions.push([this.name, this.color, this.tagFunction]);
	    }
	    return TagCondition;
	}());
	/**
	 * An extended Achievement class that add a few utility features
	 * @class
	 */
	var AdvancedAchievement = /** @class */ (function (_super) {
	    __extends(AdvancedAchievement, _super);
	    /**
	     * Creates a achievement with a few utility features.
	     * @param name The name of the achievement
	     * @param desc The description of it
	     * @param icon The icon for it
	     */
	    function AdvancedAchievement(name, desc, icon) {
	        return _super.call(this, name, desc, icon) || this;
	    }
	    return AdvancedAchievement;
	}(dist.Achievement));
	/**
	 * An class to add your own credits to your mod
	 * @class
	 */
	var AuthorAchievement = /** @class */ (function (_super) {
	    __extends(AuthorAchievement, _super);
	    /**
	     * Creates an Author Achievement
	     * @param name Your name / The author's name
	     * @param desc A short desciption of what you or the author did
	     * @param icon An icon that preferably describes yourself / the author
	     */
	    function AuthorAchievement(name, desc, icon) {
	        var _this = _super.call(this, name, desc, icon) || this;
	        _this.pool = "authors";
	        _this.exclude = { shadow: true };
	        _this.won = 1;
	        _this.noTags = true;
	        _this.noNeuromancy = true;
	        return _this;
	    }
	    return AuthorAchievement;
	}(AdvancedAchievement));
	new TagCondition("Author", "#ffffff", function (me) {
	    if (me.pool === "authors") {
	        return true;
	    }
	    else {
	        return false;
	    }
	});
	/**
	 * An extended Upgrade class that add a few utility features
	 * @class
	 */
	var AdvancedUpgrade = /** @class */ (function (_super) {
	    __extends(AdvancedUpgrade, _super);
	    /**
	     * Creates a AdvancedUpgrade
	     * @param name The name of your upgrade
	     * @param desc Your upgrade's description
	     * @param price The price of your upgrade
	     * @param icon Your upgrade's icon
	     * @param buyFunc A function that gets called when your upgrade is bought
	     */
	    function AdvancedUpgrade(name, desc, price, icon, buyFunc) {
	        return _super.call(this, name, desc, price, icon, buyFunc) || this;
	    }
	    return AdvancedUpgrade;
	}(dist.Upgrade));
	/**
	 * An extended Heavenly Upgrade class that add a few utility features
	 * @class
	 */
	var AdvancedHeavenlyUpgrade = /** @class */ (function (_super) {
	    __extends(AdvancedHeavenlyUpgrade, _super);
	    /**
	     * Creates a AdvancedHeavenlyUpgrade.
	     * @param name The name of the heavenly upgrade
	     * @param desc The heavenly upgrade's description
	     * @param price The price of the heavenly upgrade
	     * @param icon The icon of your heavenly upgrade
	     * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
	     * @param parents Your heavenly upgrade's parents
	     * @param buyFunc A function that gets called when buying your heavenly upgrade
	     */
	    function AdvancedHeavenlyUpgrade(name, desc, price, icon, position, parents, buyFunc) {
	        return _super.call(this, name, desc, price, icon, [position[0], position[1]], parents, buyFunc) || this;
	    }
	    return AdvancedHeavenlyUpgrade;
	}(dist.HeavenlyUpgrade));

	/**
	 * A class that adds a Heavenly Upgrade that is only visble if it's page is selected
	 * @class
	 */
	var PagedHeavenlyUpgrade = /** @class */ (function (_super) {
	    __extends(PagedHeavenlyUpgrade, _super);
	    /**
	     * Creates a PagedHeavenlyUpgrade.
	     * @param name The name of the heavenly upgrade
	     * @param desc The heavenly upgrade's description
	     * @param price The price of the heavenly upgrade
	     * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
	     * @param page The page's id that denotes when your heavenly upgrade will be visable
	     * @param icon The icon of your heavenly upgrade
	     * @param parents Your heavenly upgrade's parents
	     * @param buyFunc A function that gets called when buying your heavenly upgrade
	     */
	    function PagedHeavenlyUpgrade(name, desc, price, position, page, icon, parents, buyFunc) {
	        var _this = _super.call(this, name, desc, price, icon, position, parents, buyFunc) || this;
	        if (typeof window.SkullyCore.pages[page] === "undefined")
	            window.SkullyCore.pages[page] = [];
	        window.SkullyCore.pages[page].push(_this);
	        if (page !== "vanilla")
	            Game.PrestigeUpgrades.pop();
	        return _this;
	    }
	    return PagedHeavenlyUpgrade;
	}(AdvancedHeavenlyUpgrade));
	/**
	 * A class that allows you to transfer yourself to another page. Note : You probably shouldn't define this yourself unless you know what you're doing
	 * @class
	 */
	var RiftUpgrade = /** @class */ (function (_super) {
	    __extends(RiftUpgrade, _super);
	    /**
	     * Creates a RiftUpgrade.
	     * @param name The name of the heavenly upgrade
	     * @param desc The heavenly upgrade's description
	     * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
	     * @param goto
	     * @param back
	     * @param icon The icon of your heavenly upgrade
	     * @param parents Your heavenly upgrade's parents
	     * @param buyFunc A function that gets called when buying your heavenly upgrade
	     */
	    function RiftUpgrade(name, desc, position, goto, back, icon, parents, buyFunc) {
	        if (icon === void 0) { icon = [0, 0]; }
	        var _this = _super.call(this, name, desc, 0, position, back, icon, parents, buyFunc) || this;
	        /**
	         * Don't change this. This is for checking if the rift is a rift when going through tags.
	         */
	        _this.isRift = true;
	        _this.activateFunction = function () {
	            window.SkullyCore.currentPage = _this.goto;
	            Game.BuildAscendTree();
	        };
	        _this.exclude = {
	            all: true
	        };
	        _this.back = back;
	        _this.noTags = true;
	        _this.unlocked = 1;
	        _this.bought = 1;
	        _this.noNeuromancy = true;
	        _this.goto = goto;
	        return _this;
	    }
	    return RiftUpgrade;
	}(PagedHeavenlyUpgrade));
	new TagCondition("Rift", "#9700cf", function (me) {
	    /*
	        Why do I not just change the pool? Because It breaks HUs, why you ask? Because Orteil that's why.
	    */
	    if (typeof me.isRift !== "undefined") {
	        return true;
	    }
	    else {
	        return false;
	    }
	});
	/**
	 *
	 * @class
	 */
	var PrestigePage = /** @class */ (function () {
	    /**
	     * Creates a PrestigePage
	     * @param name The page's name in a sentence
	     * @param id The internal id of the page
	     * @param parents Your Goto Rift's parents (vanilla page)
	     * @param gotoicon Your Goto Rift's icon
	     * @param backicon Your Back Rift's icon
	     */
	    function PrestigePage(name, id, parents, gotoicon, backicon) {
	        this.name = name;
	        this.id = id;
	        this.Rift = new RiftUpgrade("Goto " + this.name + "...", "Goto a new universe of possiblities. Don't worry you can come back.", [-30, -130], this.id, "vanilla", gotoicon, parents);
	        this.VanillaRift = new RiftUpgrade("Goto Vanilla...", "Takes you back to the vanilla prestige tree.", [-30, -30], "vanilla", this.id, backicon);
	    }
	    return PrestigePage;
	}());

	// Todo : find a resonable way for a mod to choose which bar to inject into 
	// Todo : handle multiple widgets on the same bar 
	// Todo : this one actually needs dom manipulation 
	// Todo : toggle, and menu
	// Todo : have a option to add all the switches here, maybe. 
	// Todo : hide widgets in a similar fashion to vaulting 
	// Todo : aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
	var TopBarMenuWidget = /** @class */ (function () {
	    function TopBarMenuWidget(id, icon, tooltip) {
	        this.id = id;
	        this.icon = icon;
	        this.tooltip = tooltip;
	        window.SkullyCore.BarWidgets.TopBar.Bars.push(this);
	    }
	    TopBarMenuWidget.prototype.getDiv = function () {
	        if (typeof this.onclick !== "undefined" && this.onclick.toString().includes("\"")) {
	            throw new Error("One of your onclick functions in a TopBarMenuWidget has quote in it, please remove it");
	        }
	        if (typeof this.tooltip !== "undefined" && this.tooltip.toString().includes("\"")) {
	            throw new Error("One of your tooltip functions in a TopBarMenuWidget has quote in it, please remove it");
	        }
	        window.SkullyCore.BarWidgets.TopBar.currentPos += 48;
	        return "\n        <div class=\"top_bar\" style=\"left:" + window.SkullyCore.BarWidgets.TopBar.currentPos + "px;\" id=\"" + this.id + "\" " + (typeof this.onclick !== "undefined" ? "onclick=\"" + this.onclick.toString() + "\"" : "") + " onmouseout=\"Game.tooltip.shouldHide=1;\" onmouseover=\"Game.tooltip.dynamic=1;Game.tooltip.draw(this,function(){return " + this.tooltip.toString().replace(new RegExp("\""), "'") + "();},'bottom');Game.tooltip.wobble();\"> \n            <div id=\"" + this.id + "Icon\" class=\"baseIcon " + (typeof this.icon[2] !== "undefined" ? '' : 'usesIcon') + "\" style=\"" + (typeof this.icon[2] !== "undefined" ? 'background-image:url(' + this.icon[2] + ');' : '') + "background-position:" + -this.icon[0] * 48 + "px " + -this.icon[1] * 48 + "px;\"></div>\n        </div>\n        ";
	    };
	    return TopBarMenuWidget;
	}());

	var Effect = /** @class */ (function () {
	    function Effect() {
	    }
	    return Effect;
	}());

	var Task = /** @class */ (function (_super) {
	    __extends(Task, _super);
	    function Task() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return Task;
	}(Game.buffType));
	/*
	name
	desc
	icon
	check
	finish
	dismissable?
	time?
	*/

	// Copied from Cppkies 2 : Electric Boogaloo
	var SkullyCore = {
	    // Base
	    AdvancedAchievement: AdvancedAchievement,
	    AdvancedHeavenlyUpgrade: AdvancedHeavenlyUpgrade,
	    AdvancedUpgrade: AdvancedUpgrade,
	    AuthorAchievement: AuthorAchievement,
	    TagCondition: TagCondition,
	    TagConditions: TagConditions,
	    // Prestige Pages & Rifts
	    PrestigePage: PrestigePage,
	    RiftUpgrade: RiftUpgrade,
	    PagedHeavenlyUpgrade: PagedHeavenlyUpgrade,
	    currentPage: "vanilla",
	    pages: { "vanilla": Game.PrestigeUpgrades },
	    // Injecting into bars to add stuff (ex. sugar lumps)
	    TopBarMenuWidget: TopBarMenuWidget,
	    BarWidgets: {
	        TopBar: {
	            currentPos: 12,
	            Bars: []
	        }
	    },
	    // Full screen cosmetic effects
	    Effect: Effect,
	    // Task Effects (aka. quests), tasks that have a completion req and give a reward when completed 
	    Task: Task,
	    // OnLoad
	    onLoad: [],
	};
	window.SkullyCore = SkullyCore;

	dist.onLoad.push(function () {
	    // Author Upgrade
	    Game.UpdateMenu = dist.injectCodes(Game.UpdateMenu, [
	        ["for (var i in achievements)", "pools.authors = \"<b>Authors</b> <small>The people who made the mods you are playing with now!</small>\";", "before"],
	    ]);
	    Game.crate = dist.injectCodes(Game.crate, [
	        ["if (neuromancy)", "if (neuromancy && (typeof me.noNeuromancy !== \"undefined\" ? !me.noNeuromancy : true))", "replace"]
	    ]);
	    Game.crateTooltip = dist.injectCodes(Game.crateTooltip, [
	        // Tag Logic
	        ["var tagsStr='';", "\n        if (typeof me.noTags !== \"undefined\" ? me.noTags : false) tags = []\n        if (typeof me.tags !== \"undefined\") {\n            for(let i in me.tags) {\n                tags.concat(me.tags[i]);\n            }\n        }\n        if (typeof window.SkullyCore !== \"undefined\") window.SkullyCore.TagConditions.forEach((element) => {\n            if(typeof element[2] === \"function\") {\n                if(element[2](me)) tags.push(element[0], element[1]) \n            } else if (typeof element[2] === \"boolean\") {\n                if(element[2]) tags.push(element[0], element[1])\n            } else {\n                console.warn(\"Malformed TagCondition\")\n            }\n        })\n        ", "before"]
	    ]);
	    /*
	    Note for anyone reading this I don't use the in operator because apparently it is rather slow. While I myself have not done any tests I did this just to be safe.
	    Plus while it would be a bit more readable, It wouldn't make much of a difference since it would look something like this:
	    if ((native.code === true) && ("exclude" in me ? "total" in me.exclude ? !me.exclude.total : true : true)) { // True in this case is treated as an "ignore me"
	        //actual code
	    }
	    Rather then this :
	    if ((native.code === true) && (typeof me.exclude === "undefined" ? true : typeof me.exclude.total === "undefined"  ? true : !me.exclude.total)) {
	        //actual code
	    }
	    So a bit of a difference but not much, as I said.

	    Another thing I noticed opon writing this is I could've used nested if statements instead of nested ternary operators but... uhh I probabaly should've done that but.... I don't want to redo my code now.
	    I might redo it later though.
	    
	        - Bob
	    */
	    Game.UpdateMenu = dist.injectCodes(Game.UpdateMenu, [
	        // Exclude Total
	        ["if (me.pool=='' || me.pool=='cookie' || me.pool=='tech') upgradesTotal++;", "if ((me.pool=='' || me.pool=='cookie' || me.pool=='tech' ) && ((typeof me.exclude === \"undefined\" ? true : typeof me.exclude.total === \"undefined\"  ? true : !me.exclude.total) || (typeof me.exclude === \"undefined\" ? true : typeof me.exclude.all === \"undefined\"  ? false : !me.exclude.all))) upgradesTotal++;", "replace"],
	        // Exclude Debug - Display
	        ["if (me.pool=='debug') hiddenUpgrades+=str2;", "if ((me.pool=='debug') && ((typeof me.exclude === \"undefined\" ? true : typeof me.exclude.debug === \"undefined\"  ? true : !me.exclude.debug ) || (typeof me.exclude === \"undefined\" ? true : typeof me.exclude.all === \"undefined\"  ? false : !me.exclude.all))) {\n            hiddenUpgrades+=str2;\n        }", "replace"],
	        // Exclude Prestige - Display & Count
	        ["else if (me.pool=='prestige') {prestigeUpgrades+=str2;prestigeUpgradesTotal++;}", "else if ((me.pool=='prestige') && ((typeof me.exclude === \"undefined\" ? true : typeof me.exclude.prestige === \"undefined\"  ? true : !me.exclude.prestige)  || (typeof me.exclude === \"undefined\" ? true : typeof me.exclude.all === \"undefined\"  ? false : !me.exclude.all))) {\n            prestigeUpgrades+=str2;\n            prestigeUpgradesTotal++;\n        }", "replace"],
	        ["else if (me.pool=='prestige') prestigeUpgradesOwned++;", "else if ((me.pool=='prestige') && ((typeof me.exclude === \"undefined\" ? true : typeof me.exclude.prestige === \"undefined\"  ? true : !me.exclude.prestige)  || (typeof me.exclude === \"undefined\" ? true : typeof me.exclude.all === \"undefined\"  ? false : !me.exclude.all))) {\n            prestigeUpgradesOwned++;\n        }", "replace"],
	        // Exclude Cookie - Display
	        ["else if (me.pool=='cookie') cookieUpgrades+=str2;", "\nelse if ((me.pool=='cookie') && ((typeof me.exclude === \"undefined\" ? true : typeof me.exclude.cookie === \"undefined\"  ? true : !me.exclude.cookie) || (typeof me.exclude === \"undefined\" ? true : typeof me.exclude.all === \"undefined\"  ? false : !me.exclude.all))) {\n            cookieUpgrades+=str2;\n        }", "replace"],
	        // Exclude Other - Display
	        ["else if (me.pool!='toggle' && me.pool!='unused') upgrades+=str2;", "\nelse if ((me.pool!='toggle' && me.pool!='unused') && ((typeof me.exclude === \"undefined\" ? true : typeof me.exclude.other === \"undefined\"  ? true : !me.exclude.other)  || (typeof me.exclude === \"undefined\" ? true : typeof me.exclude.all === \"undefined\"  ? false : !me.exclude.all))) {\n            upgrades+=str2;\n        }", "replace"],
	        // Exclude Shadow - Count
	        ["achievementsOwnedOther++;", " if ((typeof me.exclude === \"undefined\" ? true : typeof me.exclude.shadow === \"undefined\"  ? true : !me.exclude.shadow)  || (typeof me.exclude === \"undefined\" ? true : typeof me.exclude.all === \"undefined\"  ? false : !me.exclude.all)) ", "before"],
	    ]);
	    Game.BuildAscendTree = dist.injectCodes(Game.BuildAscendTree, [
	        ["for (var i in Game.PrestigeUpgrades)", "for (var i in window.SkullyCore.pages[window.SkullyCore.currentPage])", "replace"],
	        ["var str='';", "var currentHeavenlyUpgrades = window.SkullyCore.pages[window.SkullyCore.currentPage];\n", "before"],
	        ["Game.PrestigeUpgrades", "currentHeavenlyUpgrades", "replace"]
	    ]);
	    document.getElementsByTagName("head")[0].innerHTML += "\n    <style type=\"text/css\">\n        .top_bar { \n            width:32px;\n            height:32px;\n            position:absolute;\n            bottom:-12px;\n            z-index:10000;\n            filter:drop-shadow(0px 3px 2px #000);\n            -webkit-filter:drop-shadow(0px 3px 2px #000);\n        }\n        .top_bar:hover {\n            bottom:-10px\n        }\n        .baseIcon {\n            width:48px;\n            height:48px;\n            position:absolute;\n            left:-8px;\n            top:-8px;\n            pointer-events:none;\n        }\n    </style>\n    ";
	    SkullyCore.onLoad.forEach(function (element) {
	        element();
	    });
	    // TopBars
	    var TopBars = l("comments");
	    SkullyCore.BarWidgets.TopBar.Bars.forEach(function (value, index, array) {
	        TopBars.innerHTML += value.getDiv();
	    });
	    l("prefsButton").setAttribute("onclick", "Game.ShowMenu('prefs');");
	    l("statsButton").setAttribute("onclick", "Game.ShowMenu('stats');");
	    l("logButton").setAttribute("onclick", "Game.ShowMenu('log');");
	    l("legacyButton").setAttribute("onclick", "PlaySound('snd/tick.mp3');Game.Ascend();");
	});
	SkullyCore.onLoad.push(function () {
	    new SkullyCore.AuthorAchievement("Orteil & Opti", "The people who made this awesome game!", [17, 5, ""]);
	    new SkullyCore.AuthorAchievement("TheGLander", "The developer of Cppkies and the CCRepo (W.I.P) ", [0, 0]);
	    new SkullyCore.AuthorAchievement("TheSkullyKO", "The ideas guy and artist for SkullyCore and other Skully mods", [0, 1]);
	    var BobCheevo = new SkullyCore.AuthorAchievement("Bob", "The developer that made this menu for authors and hopefully will work on much more.", [0, 2]);
	    //#region Spoliers for tiny minigame, Hide it if you don't want to be spolied!!!!! (Currenly unavailable tho)
	    /*
	    declare global {
	        interface Window {
	            BobClicks: number | undefined
	        }
	    }
	    window.BobClicks = 0;
	    
	    let BobLines: {text: string, icon?: Game.Icon, func?: ()=>void }[] = [
	        {text: "The developer that made this menu for authors and hopefully will work on much more."},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "You can stop clicking on me now. There's not an achievement or anything, there's not bcps (Bob Clicks per Second), there's really nothing too interesting."},
	        {text: "Like I'm serious there's nothing execept these words."},
	        {text: "..."},
	        {text: "....."},
	        {text: "......."},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "Hi!"},
	        {text: "Wow, you're still here. Usually those two tricks work. "},
	        {text: "Well there's nothing else."},
	        {text: "I mean you can keep clicking on me."},
	        {text: "But it's ultimately a waste of your time."},
	        {text: "Oh look! There's a golden cookie, better go click on it not me!", func:() => {
	            new Game.shimmer("golden").force="blab"; // This is in the actual game just the wrong case is used in the types I guess
	        }},
	        {text: "Hah that's what you get for clicking on me!"},
	        {text: "Wait that wasn't a wrath cookie, just a harmless blab! Grrrrr, I'll get you next time!"},
	        {text: "For a reward, I'll go away for now, but I'll be back!", func: () => {
	            Game.RemoveAchiev("Bob")
	            setTimeout(() => {
	                Game.Achievements["Bob"].won=1;
	                window.BobClicks++;
	            })
	        }},
	        {text: "Okay, I'm Back."},
	        {text: "To be continued..... "}
	    ]
	    BobCheevo.clickFunction = () => {
	        window.BobClicks++;
	    }
	    BobCheevo.descFunc = () => {
	        if (typeof BobLines[window.BobClicks].func !== "undefined") {
	            BobLines[window.BobClicks].func();
	        }
	        return BobLines[window.BobClicks].text
	    }

	    BobCheevo.iconFunction = () => {
	        return typeof BobLines[window.BobClicks].icon !== "undefined" ? BobLines[window.BobClicks].icon : [0, 2]
	    }
	    */
	    //#endregion
	    console.log("SkullyCore Loaded!");
	    //let testPage = new SkullyCore.PrestigePage("Test", "test", ["Legacy"])
	    //new SkullyCore.PagedHeavenlyUpgrade("test", "test", 0, [-30, 70], testPage.id, [0, 0], [testPage.VanillaRift.id])
	    new SkullyCore.TopBarMenuWidget("test", [0, 0], function () {
	        return 'test';
	    });
	});

})));
//# sourceMappingURL=index.js.map
