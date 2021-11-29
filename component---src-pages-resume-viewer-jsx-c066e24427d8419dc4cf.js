/*! For license information please see component---src-pages-resume-viewer-jsx-c066e24427d8419dc4cf.js.LICENSE.txt */
(self.webpackChunkresume_builder=self.webpackChunkresume_builder||[]).push([[714],{2137:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function u(e){r(i,a,o,u,s,"next",e)}function s(e){r(i,a,o,u,s,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return a}})},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},5536:function(e,t,n){"use strict";var r=n(7294);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.Z=function(){var e=a(r.useState(!1),2),t=e[0],n=e[1];return r.useEffect((function(){var e="undefined"!=typeof window&&window.matchMedia&&window.matchMedia("print"),t=function(e){return n(!!e.matches)};return e.addListener(t),function(){return e.removeListener(t)}}),[]),t}},8401:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return f}});var a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"==typeof e&&i.test(e)},s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(e,t,n){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return l(r)}},916:function(e,t,n){"use strict";var r=n(7294),a=n(5900),o=n.n(a),i=(0,n(920).Z)((e=>({a4Container:{backgroundColor:e.palette.background.paper,width:"21cm",minHeight:"29.7cm","@media print":{"-webkit-print-color-adjust":"exact",position:"absolute",top:0,left:0,visibility:"visible !important","& *":{visibility:"visible !important","& div":{"&:last-child":{borderBottom:"none"}}}}},alignCenter:{margin:"0 auto"},alignLeft:{marginLeft:"calc(50% - (11.5cm + 120px))","@media print":{margin:"0 auto"}}})));t.Z=function(e){var{children:t,customHeight:n,alignCenter:a=!0}=e,u=i(),s={};return n&&(s={height:n+"vh"}),r.createElement("div",{className:o()(u.a4Container,{[u.alignCenter]:a,[u.alignLeft]:!a}),style:s},t)}},7146:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(2137),a=n(361),o=n.n(a),i=n(7294),u=n(9703),s=n(8401),c=n(5536),l=n(4959),f=n(916),d=n(8241),p=n(1027),v=n(52),m=n(291),g=[{locale:"en",messages:n(3710)},{locale:"pt-br",messages:n(4544)},{locale:"es",messages:n(5665)}].map((e=>(0,u.createIntl)(e,(0,u.createIntlCache)()))),h=n(9150),y=n(1626),b=e=>{var{params:t,uri:a}=e,b=(0,u.useIntl)(),[w,S]=(t["*"]||"").split("/"),_=a.split("/").pop(),C=(0,c.Z)(),E=(0,i.useMemo)((()=>{var e=g.find((e=>e.locale===S));return e||g.find((e=>e.locale===b.defaultLocale))}),[b.defaultLocale,S]),{0:L,1:k}=(0,i.useState)(["Default"]),Z=(0,v.v9)(y.b),x=(0,v.I0)(),I=["Default"].find((e=>e.toLowerCase()===_.toLowerCase())),D=(0,p.Pk)(Z);return(0,i.useEffect)((()=>{var e=function(){var e=(0,r.Z)((function*(){var e,t,r=yield(0,d.ie)(w);(0,d.r7)(r)||(0,u.navigate)("/");var a=JSON.parse(r);(0,p.Pk)(a)||(0,u.navigate)("/");var c=(0,p.Q9)(o()(Object.assign({},a,{__translation__:a.__translation__,enableSourceDataDownload:a.enableSourceDataDownload,coverLetter:{}})));(0,p.Pk)(c)||(0,u.navigate)("/"),x((0,m.Z)(c));var l=yield(e=>(0,i.lazy)((()=>n(5147)("./"+e+"/Index").catch((()=>Promise.all([n.e(774),n.e(24),n.e(520)]).then(n.bind(n,7129)))))))(I);k([i.createElement(l,{key:(0,s.Z)(),customTranslations:c.__translation__,isPrinting:C,jsonResume:Object.assign({},h,(0,p.HJ)(o()(c))),coverLetterVariables:(null===(e=c.coverLetter)||void 0===e||null===(t=e.value)||void 0===t?void 0:t.variables)||[]})])}));return function(){return e.apply(this,arguments)}}();w||(0,u.navigate)("/"),e()}),[x,b.defaultLocale,C,S,w,I]),i.createElement(u.RawIntlProvider,{value:E},i.createElement(l.Z,{title:E.formatMessage({id:"resume_viewer"}),robots:"noindex, nofollow"}),i.createElement(f.Z,{alignCenter:!0},D&&i.createElement(i.Suspense,{fallback:b.formatMessage({id:"loading"})},L),!D&&b.formatMessage({id:"loading"})))}},291:function(e,t){"use strict";t.Z=e=>({type:"SET_TOGGLEABLE_JSON_RESUME",resume:e})},1626:function(e,t,n){"use strict";n.d(t,{D:function(){return r},b:function(){return a}});var r=e=>e.resumeTemplate,a=e=>e.toggleableJsonResume},8241:function(e,t,n){"use strict";n.d(t,{n4:function(){return o},Sn:function(){return i},cf:function(){return u},Ah:function(){return s},ie:function(){return c},r7:function(){return l}});var r=n(2137),a=n(5256),o=()=>{if("undefined"==typeof localStorage)return[];var e=localStorage.getItem(a.rm);return e?e.split(":"):[]},i=()=>{localStorage.removeItem(a.rm)},u=()=>"undefined"==typeof localStorage?null:localStorage.getItem(a.sV)===a.qZ,s=()=>{localStorage.setItem(a.sV,a.qZ)},c=function(){var e=(0,r.Z)((function*(e){var t="https://raw.githubusercontent.com/"+e+"/resume.json/main/resume.json";return(yield fetch(t,{method:"GET"}).then(function(){var e=(0,r.Z)((function*(e){return yield e.text()}));return function(t){return e.apply(this,arguments)}}()))||"{}"}));return function(t){return e.apply(this,arguments)}}(),l=e=>{if(!e||"string"!=typeof e)return!1;try{return JSON.parse(e),!0}catch(t){return!1}}},5147:function(e,t,n){var r={"./Compact/Index":[9747,774,733,747],"./Default/Index":[7129,774,733,24,850],"./VanHack/Index":[1298,774,733,298]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=5147,e.exports=a},9150:function(e){"use strict";e.exports=JSON.parse('{"coverLetter":"","basics":{"location":{},"profiles":[]},"work":[],"volunteer":[],"education":[],"awards":[],"publications":[],"skills":[],"languages":[],"interests":[],"references":[],"projects":[],"certificates":[],"__translation__":{},"enableSourceDataDownload":false}')}}]);
//# sourceMappingURL=component---src-pages-resume-viewer-jsx-c066e24427d8419dc4cf.js.map