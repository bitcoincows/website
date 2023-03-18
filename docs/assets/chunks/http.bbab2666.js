import{c as N,a as Ie}from"../app.b8b298ad.js";var G={},Fe={get exports(){return G},set exports(t){G=t}},$=typeof Reflect=="object"?Reflect:null,oe=$&&typeof $.apply=="function"?$.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},z;$&&typeof $.ownKeys=="function"?z=$.ownKeys:Object.getOwnPropertySymbols?z=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:z=function(e){return Object.getOwnPropertyNames(e)};function We(t){console&&console.warn&&console.warn(t)}var be=Number.isNaN||function(e){return e!==e};function m(){m.init.call(this)}Fe.exports=m;G.once=ke;m.EventEmitter=m;m.prototype._events=void 0;m.prototype._eventsCount=0;m.prototype._maxListeners=void 0;var ie=10;function Y(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(m,"defaultMaxListeners",{enumerable:!0,get:function(){return ie},set:function(t){if(typeof t!="number"||t<0||be(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");ie=t}});m.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};m.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||be(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Ee(t){return t._maxListeners===void 0?m.defaultMaxListeners:t._maxListeners}m.prototype.getMaxListeners=function(){return Ee(this)};m.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var c=e==="error",f=this._events;if(f!==void 0)c=c&&f.error===void 0;else if(!c)return!1;if(c){var h;if(n.length>0&&(h=n[0]),h instanceof Error)throw h;var y=new Error("Unhandled error."+(h?" ("+h.message+")":""));throw y.context=h,y}var A=f[e];if(A===void 0)return!1;if(typeof A=="function")oe(A,this,n);else for(var j=A.length,B=Le(A,j),i=0;i<j;++i)oe(B[i],this,n);return!0};function Oe(t,e,n,i){var c,f,h;if(Y(n),f=t._events,f===void 0?(f=t._events=Object.create(null),t._eventsCount=0):(f.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),f=t._events),h=f[e]),h===void 0)h=f[e]=n,++t._eventsCount;else if(typeof h=="function"?h=f[e]=i?[n,h]:[h,n]:i?h.unshift(n):h.push(n),c=Ee(t),c>0&&h.length>c&&!h.warned){h.warned=!0;var y=new Error("Possible EventEmitter memory leak detected. "+h.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");y.name="MaxListenersExceededWarning",y.emitter=t,y.type=e,y.count=h.length,We(y)}return t}m.prototype.addListener=function(e,n){return Oe(this,e,n,!1)};m.prototype.on=m.prototype.addListener;m.prototype.prependListener=function(e,n){return Oe(this,e,n,!0)};function Ue(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Re(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},c=Ue.bind(i);return c.listener=n,i.wrapFn=c,c}m.prototype.once=function(e,n){return Y(n),this.on(e,Re(this,e,n)),this};m.prototype.prependOnceListener=function(e,n){return Y(n),this.prependListener(e,Re(this,e,n)),this};m.prototype.removeListener=function(e,n){var i,c,f,h,y;if(Y(n),c=this._events,c===void 0)return this;if(i=c[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete c[e],c.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(f=-1,h=i.length-1;h>=0;h--)if(i[h]===n||i[h].listener===n){y=i[h].listener,f=h;break}if(f<0)return this;f===0?i.shift():He(i,f),i.length===1&&(c[e]=i[0]),c.removeListener!==void 0&&this.emit("removeListener",e,y||n)}return this};m.prototype.off=m.prototype.removeListener;m.prototype.removeAllListeners=function(e){var n,i,c;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var f=Object.keys(i),h;for(c=0;c<f.length;++c)h=f[c],h!=="removeListener"&&this.removeAllListeners(h);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(c=n.length-1;c>=0;c--)this.removeListener(e,n[c]);return this};function Te(t,e,n){var i=t._events;if(i===void 0)return[];var c=i[e];return c===void 0?[]:typeof c=="function"?n?[c.listener||c]:[c]:n?$e(c):Le(c,c.length)}m.prototype.listeners=function(e){return Te(this,e,!0)};m.prototype.rawListeners=function(e){return Te(this,e,!1)};m.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Se.call(t,e)};m.prototype.listenerCount=Se;function Se(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}m.prototype.eventNames=function(){return this._eventsCount>0?z(this._events):[]};function Le(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function He(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function $e(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function ke(t,e){return new Promise(function(n,i){function c(h){t.removeListener(e,f),i(h)}function f(){typeof t.removeListener=="function"&&t.removeListener("error",c),n([].slice.call(arguments))}Ae(t,e,f,{once:!0}),e!=="error"&&Ve(t,c,{once:!0})})}function Ve(t,e,n){typeof t.on=="function"&&Ae(t,"error",e,n)}function Ae(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function c(f){i.once&&t.removeEventListener(e,c),n(f)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var se=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var i=0,c=e.length,f;i<c;i++)(f||!(i in e))&&(f||(f=Array.prototype.slice.call(e,0,i)),f[i]=e[i]);return t.concat(f||Array.prototype.slice.call(e))},qe=function(){function t(e,n,i){this.name=e,this.version=n,this.os=i,this.type="browser"}return t}(),Je=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),Ge=function(){function t(e,n,i,c){this.name=e,this.version=n,this.os=i,this.bot=c,this.type="bot-device"}return t}(),Xe=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),Ke=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),ze=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,Qe=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,ae=3,Ye=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",ze]],ce=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function nr(t){return t?ue(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Ke:typeof navigator<"u"?ue(navigator.userAgent):tt()}function Ze(t){return t!==""&&Ye.reduce(function(e,n){var i=n[0],c=n[1];if(e)return e;var f=c.exec(t);return!!f&&[i,f]},!1)}function ue(t){var e=Ze(t);if(!e)return null;var n=e[0],i=e[1];if(n==="searchbot")return new Xe;var c=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);c?c.length<ae&&(c=se(se([],c,!0),rt(ae-c.length),!0)):c=[];var f=c.join("."),h=et(t),y=Qe.exec(t);return y&&y[1]?new Ge(n,f,h,y[1]):new qe(n,f,h)}function et(t){for(var e=0,n=ce.length;e<n;e++){var i=ce[e],c=i[0],f=i[1],h=f.exec(t);if(h)return c}return null}function tt(){var t=typeof process<"u"&&process.version;return t?new Je(process.version.slice(1)):null}function rt(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var ee={},nt={get exports(){return ee},set exports(t){ee=t}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(t){var e,n,i,c,f,h,y,A,j,B,O,L,S,w,P,E,C,I,W,V,q,X,K;(function(g){var U=typeof N=="object"?N:typeof self=="object"?self:typeof this=="object"?this:{};g(s(U,s(t.exports)));function s(a,u){return a!==U&&(typeof Object.create=="function"?Object.defineProperty(a,"__esModule",{value:!0}):a.__esModule=!0),function(p,r){return a[p]=u?u(p,r):r}}})(function(g){var U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,a){s.__proto__=a}||function(s,a){for(var u in a)a.hasOwnProperty(u)&&(s[u]=a[u])};e=function(s,a){U(s,a);function u(){this.constructor=s}s.prototype=a===null?Object.create(a):(u.prototype=a.prototype,new u)},n=Object.assign||function(s){for(var a,u=1,p=arguments.length;u<p;u++){a=arguments[u];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(s[r]=a[r])}return s},i=function(s,a){var u={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&a.indexOf(p)<0&&(u[p]=s[p]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,p=Object.getOwnPropertySymbols(s);r<p.length;r++)a.indexOf(p[r])<0&&Object.prototype.propertyIsEnumerable.call(s,p[r])&&(u[p[r]]=s[p[r]]);return u},c=function(s,a,u,p){var r=arguments.length,o=r<3?a:p===null?p=Object.getOwnPropertyDescriptor(a,u):p,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,a,u,p);else for(var v=s.length-1;v>=0;v--)(l=s[v])&&(o=(r<3?l(o):r>3?l(a,u,o):l(a,u))||o);return r>3&&o&&Object.defineProperty(a,u,o),o},f=function(s,a){return function(u,p){a(u,p,s)}},h=function(s,a){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,a)},y=function(s,a,u,p){function r(o){return o instanceof u?o:new u(function(l){l(o)})}return new(u||(u=Promise))(function(o,l){function v(T){try{d(p.next(T))}catch(x){l(x)}}function _(T){try{d(p.throw(T))}catch(x){l(x)}}function d(T){T.done?o(T.value):r(T.value).then(v,_)}d((p=p.apply(s,a||[])).next())})},A=function(s,a){var u={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},p,r,o,l;return l={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function v(d){return function(T){return _([d,T])}}function _(d){if(p)throw new TypeError("Generator is already executing.");for(;u;)try{if(p=1,r&&(o=d[0]&2?r.return:d[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,d[1])).done)return o;switch(r=0,o&&(d=[d[0]&2,o.value]),d[0]){case 0:case 1:o=d;break;case 4:return u.label++,{value:d[1],done:!1};case 5:u.label++,r=d[1],d=[0];continue;case 7:d=u.ops.pop(),u.trys.pop();continue;default:if(o=u.trys,!(o=o.length>0&&o[o.length-1])&&(d[0]===6||d[0]===2)){u=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){u.label=d[1];break}if(d[0]===6&&u.label<o[1]){u.label=o[1],o=d;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(d);break}o[2]&&u.ops.pop(),u.trys.pop();continue}d=a.call(s,u)}catch(T){d=[6,T],r=0}finally{p=o=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},K=function(s,a,u,p){p===void 0&&(p=u),s[p]=a[u]},j=function(s,a){for(var u in s)u!=="default"&&!a.hasOwnProperty(u)&&(a[u]=s[u])},B=function(s){var a=typeof Symbol=="function"&&Symbol.iterator,u=a&&s[a],p=0;if(u)return u.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&p>=s.length&&(s=void 0),{value:s&&s[p++],done:!s}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")},O=function(s,a){var u=typeof Symbol=="function"&&s[Symbol.iterator];if(!u)return s;var p=u.call(s),r,o=[],l;try{for(;(a===void 0||a-- >0)&&!(r=p.next()).done;)o.push(r.value)}catch(v){l={error:v}}finally{try{r&&!r.done&&(u=p.return)&&u.call(p)}finally{if(l)throw l.error}}return o},L=function(){for(var s=[],a=0;a<arguments.length;a++)s=s.concat(O(arguments[a]));return s},S=function(){for(var s=0,a=0,u=arguments.length;a<u;a++)s+=arguments[a].length;for(var p=Array(s),r=0,a=0;a<u;a++)for(var o=arguments[a],l=0,v=o.length;l<v;l++,r++)p[r]=o[l];return p},w=function(s){return this instanceof w?(this.v=s,this):new w(s)},P=function(s,a,u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var p=u.apply(s,a||[]),r,o=[];return r={},l("next"),l("throw"),l("return"),r[Symbol.asyncIterator]=function(){return this},r;function l(R){p[R]&&(r[R]=function(H){return new Promise(function(Z,Ne){o.push([R,H,Z,Ne])>1||v(R,H)})})}function v(R,H){try{_(p[R](H))}catch(Z){x(o[0][3],Z)}}function _(R){R.value instanceof w?Promise.resolve(R.value.v).then(d,T):x(o[0][2],R)}function d(R){v("next",R)}function T(R){v("throw",R)}function x(R,H){R(H),o.shift(),o.length&&v(o[0][0],o[0][1])}},E=function(s){var a,u;return a={},p("next"),p("throw",function(r){throw r}),p("return"),a[Symbol.iterator]=function(){return this},a;function p(r,o){a[r]=s[r]?function(l){return(u=!u)?{value:w(s[r](l)),done:r==="return"}:o?o(l):l}:o}},C=function(s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=s[Symbol.asyncIterator],u;return a?a.call(s):(s=typeof B=="function"?B(s):s[Symbol.iterator](),u={},p("next"),p("throw"),p("return"),u[Symbol.asyncIterator]=function(){return this},u);function p(o){u[o]=s[o]&&function(l){return new Promise(function(v,_){l=s[o](l),r(v,_,l.done,l.value)})}}function r(o,l,v,_){Promise.resolve(_).then(function(d){o({value:d,done:v})},l)}},I=function(s,a){return Object.defineProperty?Object.defineProperty(s,"raw",{value:a}):s.raw=a,s},W=function(s){if(s&&s.__esModule)return s;var a={};if(s!=null)for(var u in s)Object.hasOwnProperty.call(s,u)&&(a[u]=s[u]);return a.default=s,a},V=function(s){return s&&s.__esModule?s:{default:s}},q=function(s,a){if(!a.has(s))throw new TypeError("attempted to get private field on non-instance");return a.get(s)},X=function(s,a,u){if(!a.has(s))throw new TypeError("attempted to set private field on non-instance");return a.set(s,u),u},g("__extends",e),g("__assign",n),g("__rest",i),g("__decorate",c),g("__param",f),g("__metadata",h),g("__awaiter",y),g("__generator",A),g("__exportStar",j),g("__createBinding",K),g("__values",B),g("__read",O),g("__spread",L),g("__spreadArrays",S),g("__await",w),g("__asyncGenerator",P),g("__asyncDelegator",E),g("__asyncValues",C),g("__makeTemplateObject",I),g("__importStar",W),g("__importDefault",V),g("__classPrivateFieldGet",q),g("__classPrivateFieldSet",X)})})(nt);var b={};Object.defineProperty(b,"__esModule",{value:!0});var ot=b.getLocalStorage=Rt=b.getLocalStorageOrThrow=Et=b.getCrypto=_t=b.getCryptoOrThrow=wt=b.getLocation=yt=b.getLocationOrThrow=pt=b.getNavigator=ht=b.getNavigatorOrThrow=ft=b.getDocument=ct=b.getDocumentOrThrow=st=b.getFromWindowOrThrow=it=b.getFromWindow=void 0;function F(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}var it=b.getFromWindow=F;function k(t){const e=F(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}var st=b.getFromWindowOrThrow=k;function at(){return k("document")}var ct=b.getDocumentOrThrow=at;function ut(){return F("document")}var ft=b.getDocument=ut;function lt(){return k("navigator")}var ht=b.getNavigatorOrThrow=lt;function dt(){return F("navigator")}var pt=b.getNavigator=dt;function vt(){return k("location")}var yt=b.getLocationOrThrow=vt;function gt(){return F("location")}var wt=b.getLocation=gt;function mt(){return k("crypto")}var _t=b.getCryptoOrThrow=mt;function bt(){return F("crypto")}var Et=b.getCrypto=bt;function Ot(){return k("localStorage")}var Rt=b.getLocalStorageOrThrow=Ot;function Tt(){return F("localStorage")}ot=b.getLocalStorage=Tt;var re={};Object.defineProperty(re,"__esModule",{value:!0});var St=re.getWindowMetadata=void 0;const fe=b;function Lt(){let t,e;try{t=fe.getDocumentOrThrow(),e=fe.getLocationOrThrow()}catch{return null}function n(){const O=t.getElementsByTagName("link"),L=[];for(let S=0;S<O.length;S++){const w=O[S],P=w.getAttribute("rel");if(P&&P.toLowerCase().indexOf("icon")>-1){const E=w.getAttribute("href");if(E)if(E.toLowerCase().indexOf("https:")===-1&&E.toLowerCase().indexOf("http:")===-1&&E.indexOf("//")!==0){let C=e.protocol+"//"+e.host;if(E.indexOf("/")===0)C+=E;else{const I=e.pathname.split("/");I.pop();const W=I.join("/");C+=W+"/"+E}L.push(C)}else if(E.indexOf("//")===0){const C=e.protocol+E;L.push(C)}else L.push(E)}}return L}function i(...O){const L=t.getElementsByTagName("meta");for(let S=0;S<L.length;S++){const w=L[S],P=["itemprop","property","name"].map(E=>w.getAttribute(E)).filter(E=>E?O.includes(E):!1);if(P.length&&P){const E=w.getAttribute("content");if(E)return E}}return""}function c(){let O=i("name","og:site_name","og:title","twitter:title");return O||(O=t.title),O}function f(){return i("description","og:description","twitter:description","keywords")}const h=c(),y=f(),A=e.origin,j=n();return{description:y,url:A,icons:j,name:h}}St=re.getWindowMetadata=Lt;var or=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),Pe="%[a-f0-9]{2}",le=new RegExp("("+Pe+")|([^%]+?)","gi"),he=new RegExp("("+Pe+")+","gi");function te(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),i=t.slice(e);return Array.prototype.concat.call([],te(n),te(i))}function At(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(le)||[],n=1;n<e.length;n++)t=te(e,n).join(""),e=t.match(le)||[];return t}}function Pt(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=he.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var i=At(n[0]);i!==n[0]&&(e[n[0]]=i)}n=he.exec(t)}e["%C2"]="�";for(var c=Object.keys(e),f=0;f<c.length;f++){var h=c[f];t=t.replace(new RegExp(h,"g"),e[h])}return t}var ir=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return Pt(t)}},sr=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},ar=function(t,e){for(var n={},i=Object.keys(t),c=Array.isArray(e),f=0;f<i.length;f++){var h=i[f],y=t[h];(c?e.indexOf(h)!==-1:e(h,y,t))&&(n[h]=y)}return n};function xt(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return JSON.parse(t)}catch{return t}}function de(t){return typeof t=="string"?t:JSON.stringify(t)}const Ct="PARSE_ERROR",jt="INVALID_REQUEST",Bt="METHOD_NOT_FOUND",Mt="INVALID_PARAMS",xe="INTERNAL_ERROR",ne="SERVER_ERROR",Dt=[-32700,-32600,-32601,-32602,-32603],J={[Ct]:{code:-32700,message:"Parse error"},[jt]:{code:-32600,message:"Invalid Request"},[Bt]:{code:-32601,message:"Method not found"},[Mt]:{code:-32602,message:"Invalid params"},[xe]:{code:-32603,message:"Internal error"},[ne]:{code:-32e3,message:"Server error"}},Ce=ne;function Nt(t){return Dt.includes(t)}function pe(t){return Object.keys(J).includes(t)?J[t]:J[Ce]}function It(t){const e=Object.values(J).find(n=>n.code===t);return e||J[Ce]}function Ft(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var Wt={},M={},ve;function Ut(){if(ve)return M;ve=1,Object.defineProperty(M,"__esModule",{value:!0}),M.isBrowserCryptoAvailable=M.getSubtleCrypto=M.getBrowerCrypto=void 0;function t(){return(N===null||N===void 0?void 0:N.crypto)||(N===null||N===void 0?void 0:N.msCrypto)||{}}M.getBrowerCrypto=t;function e(){const i=t();return i.subtle||i.webkitSubtle}M.getSubtleCrypto=e;function n(){return!!t()&&!!e()}return M.isBrowserCryptoAvailable=n,M}var D={},ye;function Ht(){if(ye)return D;ye=1,Object.defineProperty(D,"__esModule",{value:!0}),D.isBrowser=D.isNode=D.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}D.isReactNative=t;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}D.isNode=e;function n(){return!t()&&!e()}return D.isBrowser=n,D}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=ee;e.__exportStar(Ut(),t),e.__exportStar(Ht(),t)})(Wt);function $t(){const t=Date.now()*Math.pow(10,3),e=Math.floor(Math.random()*Math.pow(10,3));return t+e}function kt(t,e,n){return{id:n||$t(),jsonrpc:"2.0",method:t,params:e}}function cr(t,e){return{id:t,jsonrpc:"2.0",result:e}}function Vt(t,e,n){return{id:t,jsonrpc:"2.0",error:qt(e,n)}}function qt(t,e){return typeof t>"u"?pe(xe):(typeof t=="string"&&(t=Object.assign(Object.assign({},pe(ne)),{message:t})),typeof e<"u"&&(t.data=e),Nt(t.code)&&(t=It(t.code)),t)}class je{}class ur extends je{constructor(e){super()}}class Jt extends je{constructor(){super()}}class Gt extends Jt{constructor(e){super()}}const Xt="^https?:",Kt="^wss?:";function zt(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function Be(t,e){const n=zt(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function ge(t){return Be(t,Xt)}function fr(t){return Be(t,Kt)}function lr(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function Me(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function hr(t){return Me(t)&&"method"in t}function Qt(t){return Me(t)&&(Yt(t)||De(t))}function Yt(t){return"result"in t}function De(t){return"error"in t}class dr extends Gt{constructor(e){super(e),this.events=new G.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(kt(e.method,e.params||[]),n)}async requestStrict(e,n){return new Promise(async(i,c)=>{if(!this.connection.connected)try{await this.open()}catch(f){c(f)}this.events.on(`${e.id}`,f=>{De(f)?c(f.error):i(f.result)});try{await this.connection.send(e,n)}catch(f){c(f)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Qt(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.hasRegisteredEventListeners=!0)}}var Q={},Zt={get exports(){return Q},set exports(t){Q=t}};(function(t,e){var n=typeof self<"u"?self:N,i=function(){function f(){this.fetch=!1,this.DOMException=n.DOMException}return f.prototype=n,new f}();(function(f){(function(h){var y={searchParams:"URLSearchParams"in f,iterable:"Symbol"in f&&"iterator"in Symbol,blob:"FileReader"in f&&"Blob"in f&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in f,arrayBuffer:"ArrayBuffer"in f};function A(r){return r&&DataView.prototype.isPrototypeOf(r)}if(y.arrayBuffer)var j=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],B=ArrayBuffer.isView||function(r){return r&&j.indexOf(Object.prototype.toString.call(r))>-1};function O(r){if(typeof r!="string"&&(r=String(r)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(r))throw new TypeError("Invalid character in header field name");return r.toLowerCase()}function L(r){return typeof r!="string"&&(r=String(r)),r}function S(r){var o={next:function(){var l=r.shift();return{done:l===void 0,value:l}}};return y.iterable&&(o[Symbol.iterator]=function(){return o}),o}function w(r){this.map={},r instanceof w?r.forEach(function(o,l){this.append(l,o)},this):Array.isArray(r)?r.forEach(function(o){this.append(o[0],o[1])},this):r&&Object.getOwnPropertyNames(r).forEach(function(o){this.append(o,r[o])},this)}w.prototype.append=function(r,o){r=O(r),o=L(o);var l=this.map[r];this.map[r]=l?l+", "+o:o},w.prototype.delete=function(r){delete this.map[O(r)]},w.prototype.get=function(r){return r=O(r),this.has(r)?this.map[r]:null},w.prototype.has=function(r){return this.map.hasOwnProperty(O(r))},w.prototype.set=function(r,o){this.map[O(r)]=L(o)},w.prototype.forEach=function(r,o){for(var l in this.map)this.map.hasOwnProperty(l)&&r.call(o,this.map[l],l,this)},w.prototype.keys=function(){var r=[];return this.forEach(function(o,l){r.push(l)}),S(r)},w.prototype.values=function(){var r=[];return this.forEach(function(o){r.push(o)}),S(r)},w.prototype.entries=function(){var r=[];return this.forEach(function(o,l){r.push([l,o])}),S(r)},y.iterable&&(w.prototype[Symbol.iterator]=w.prototype.entries);function P(r){if(r.bodyUsed)return Promise.reject(new TypeError("Already read"));r.bodyUsed=!0}function E(r){return new Promise(function(o,l){r.onload=function(){o(r.result)},r.onerror=function(){l(r.error)}})}function C(r){var o=new FileReader,l=E(o);return o.readAsArrayBuffer(r),l}function I(r){var o=new FileReader,l=E(o);return o.readAsText(r),l}function W(r){for(var o=new Uint8Array(r),l=new Array(o.length),v=0;v<o.length;v++)l[v]=String.fromCharCode(o[v]);return l.join("")}function V(r){if(r.slice)return r.slice(0);var o=new Uint8Array(r.byteLength);return o.set(new Uint8Array(r)),o.buffer}function q(){return this.bodyUsed=!1,this._initBody=function(r){this._bodyInit=r,r?typeof r=="string"?this._bodyText=r:y.blob&&Blob.prototype.isPrototypeOf(r)?this._bodyBlob=r:y.formData&&FormData.prototype.isPrototypeOf(r)?this._bodyFormData=r:y.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)?this._bodyText=r.toString():y.arrayBuffer&&y.blob&&A(r)?(this._bodyArrayBuffer=V(r.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):y.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(r)||B(r))?this._bodyArrayBuffer=V(r):this._bodyText=r=Object.prototype.toString.call(r):this._bodyText="",this.headers.get("content-type")||(typeof r=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob&&(this.blob=function(){var r=P(this);if(r)return r;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?P(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(C)}),this.text=function(){var r=P(this);if(r)return r;if(this._bodyBlob)return I(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(W(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(U)}),this.json=function(){return this.text().then(JSON.parse)},this}var X=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function K(r){var o=r.toUpperCase();return X.indexOf(o)>-1?o:r}function g(r,o){o=o||{};var l=o.body;if(r instanceof g){if(r.bodyUsed)throw new TypeError("Already read");this.url=r.url,this.credentials=r.credentials,o.headers||(this.headers=new w(r.headers)),this.method=r.method,this.mode=r.mode,this.signal=r.signal,!l&&r._bodyInit!=null&&(l=r._bodyInit,r.bodyUsed=!0)}else this.url=String(r);if(this.credentials=o.credentials||this.credentials||"same-origin",(o.headers||!this.headers)&&(this.headers=new w(o.headers)),this.method=K(o.method||this.method||"GET"),this.mode=o.mode||this.mode||null,this.signal=o.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&l)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(l)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})};function U(r){var o=new FormData;return r.trim().split("&").forEach(function(l){if(l){var v=l.split("="),_=v.shift().replace(/\+/g," "),d=v.join("=").replace(/\+/g," ");o.append(decodeURIComponent(_),decodeURIComponent(d))}}),o}function s(r){var o=new w,l=r.replace(/\r?\n[\t ]+/g," ");return l.split(/\r?\n/).forEach(function(v){var _=v.split(":"),d=_.shift().trim();if(d){var T=_.join(":").trim();o.append(d,T)}}),o}q.call(g.prototype);function a(r,o){o||(o={}),this.type="default",this.status=o.status===void 0?200:o.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in o?o.statusText:"OK",this.headers=new w(o.headers),this.url=o.url||"",this._initBody(r)}q.call(a.prototype),a.prototype.clone=function(){return new a(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new w(this.headers),url:this.url})},a.error=function(){var r=new a(null,{status:0,statusText:""});return r.type="error",r};var u=[301,302,303,307,308];a.redirect=function(r,o){if(u.indexOf(o)===-1)throw new RangeError("Invalid status code");return new a(null,{status:o,headers:{location:r}})},h.DOMException=f.DOMException;try{new h.DOMException}catch{h.DOMException=function(o,l){this.message=o,this.name=l;var v=Error(o);this.stack=v.stack},h.DOMException.prototype=Object.create(Error.prototype),h.DOMException.prototype.constructor=h.DOMException}function p(r,o){return new Promise(function(l,v){var _=new g(r,o);if(_.signal&&_.signal.aborted)return v(new h.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function T(){d.abort()}d.onload=function(){var x={status:d.status,statusText:d.statusText,headers:s(d.getAllResponseHeaders()||"")};x.url="responseURL"in d?d.responseURL:x.headers.get("X-Request-URL");var R="response"in d?d.response:d.responseText;l(new a(R,x))},d.onerror=function(){v(new TypeError("Network request failed"))},d.ontimeout=function(){v(new TypeError("Network request failed"))},d.onabort=function(){v(new h.DOMException("Aborted","AbortError"))},d.open(_.method,_.url,!0),_.credentials==="include"?d.withCredentials=!0:_.credentials==="omit"&&(d.withCredentials=!1),"responseType"in d&&y.blob&&(d.responseType="blob"),_.headers.forEach(function(x,R){d.setRequestHeader(R,x)}),_.signal&&(_.signal.addEventListener("abort",T),d.onreadystatechange=function(){d.readyState===4&&_.signal.removeEventListener("abort",T)}),d.send(typeof _._bodyInit>"u"?null:_._bodyInit)})}return p.polyfill=!0,f.fetch||(f.fetch=p,f.Headers=w,f.Request=g,f.Response=a),h.Headers=w,h.Request=g,h.Response=a,h.fetch=p,Object.defineProperty(h,"__esModule",{value:!0}),h})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var c=i;e=c.fetch,e.default=c.fetch,e.fetch=c.fetch,e.Headers=c.Headers,e.Request=c.Request,e.Response=c.Response,t.exports=e})(Zt,Q);const we=Ie(Q),er={Accept:"application/json","Content-Type":"application/json"},tr="POST",me={headers:er,method:tr},_e=10;class pr{constructor(e){if(this.url=e,this.events=new G.EventEmitter,this.isAvailable=!1,this.registering=!1,!ge(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const i=de(e),f=await(await we(this.url,Object.assign(Object.assign({},me),{body:i}))).json();this.onPayload({data:f})}catch(i){this.onError(e.id,i)}}async register(e=this.url){if(!ge(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((i,c)=>{this.events.once("register_error",f=>{this.resetMaxListeners(),c(f)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return c(new Error("HTTP connection is missing or invalid"));i()})})}this.url=e,this.registering=!0;try{const n=de({id:1,jsonrpc:"2.0",method:"test",params:[]});await we(e,Object.assign(Object.assign({},me),{body:n})),this.onOpen()}catch(n){const i=this.parseError(n);throw this.events.emit("register_error",i),this.onClose(),i}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?xt(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const i=this.parseError(n),c=i.message||i.toString(),f=Vt(e,c);this.events.emit("payload",f)}parseError(e,n=this.url){return Ft(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>_e&&this.events.setMaxListeners(_e)}}export{st as A,ct as B,ht as C,yt as D,_t as E,Et as F,Rt as G,pr as H,$t as I,dr as J,ur as K,or as a,nr as b,wt as c,ir as d,ft as e,ar as f,St as g,pt as h,G as i,de as j,fr as k,Wt as l,lr as m,xt as n,Vt as o,Ft as p,hr as q,cr as r,sr as s,ee as t,Yt as u,De as v,Qt as w,kt as x,ot as y,it as z};
