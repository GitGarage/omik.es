/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(C){'use strict';function N(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ta(a){if(null==a||Va(a))return!1;if(L(a)||G(a)||F&&a instanceof F)return!0;
var b="length"in Object(a)&&a.length;return T(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||ta(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&D(n)?da(n)?a[m]=new Date(n.valueOf()):Wa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(D(a[m])||(a[m]=L(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Pb(a,va.call(arguments,1),!1)}function Zd(a){return Pb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Rb(a,b){return S(Object.create(a),b)}function A(){}function Xa(a){return a}function ha(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ma}function y(a){return"undefined"===typeof a}function w(a){return"undefined"!==
typeof a}function D(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function G(a){return"string"===typeof a}function T(a){return"number"===typeof a}function da(a){return"[object Date]"===ma.call(a)}function z(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===ma.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function $d(a){return a&&T(a.length)&&
ae.test(ma.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!D(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw xa("cpws");var b=!1,c=e(a);void 0===c&&(c=L(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}
var f=[],g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");L(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?na(a.getTime(),
b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||L(b)||da(b)||Wa(b))return!1;d=U();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!z(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(va.call(b,d))}function ab(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function bb(a,b){if(!y(a))return T(b)||(b=b?2:null),JSON.stringify(a,ce,b)}function xc(a){return G(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ma?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),w(e)&&(f=w(f)?zc(f):!0,ua.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];q(a,function(a,c){L(a)?q(a,function(a){b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))}):b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ea(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ea(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,G(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),
b(d,c?[c]:[],e))}function Bc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===C.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=cb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function ge(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function he(a){a=ca.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}
function Cc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Dc){var b=rb();(qa=y(b)?C.jQuery:b?C[b]:void 0)&&qa.fn.on?(F=qa,S(qa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=qa.cleanData,qa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=qa._data(f,"events"))&&c.$destroy&&qa(f).triggerHandler("$destroy");a(b)}):F=O;ca.element=F;Dc=!0}}function sb(a,
b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&L(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?ab(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=F(va.call(a,0,e))),c.push(b);return c||a}function U(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=N("$injector"),c=N("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||N;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return R}}function b(a,
d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return R}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],u=a("$injector","invoke","push",e),R={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider",
"register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:u,run:function(a){p.push(a);return this}};h&&u(h);return R})}})}function ia(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function le(a){S(a,{bootstrap:Bc,copy:pa,extend:S,merge:Zd,equals:na,element:F,forEach:q,injector:cb,noop:A,bind:ab,
toJson:bb,fromJson:xc,identity:Xa,isUndefined:y,isDefined:w,isString:G,isFunction:z,isObject:D,isNumber:T,isElement:Qb,isArray:L,version:me,isDate:da,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:he,$$minErr:N,$$csp:Ba,reloadWithDebugInfo:ge});Ub=ke(C);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Fc).directive({a:oe,input:Gc,textarea:Gc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,
ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Lc);a.provider({$anchorScroll:Xe,
$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Mc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$jsonpCallbacks:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,
$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function db(a){return a.replace(Kf,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=$a(f,d.childNodes);d=e.firstChild;
d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function O(a){if(a instanceof O)return a;var b;G(a)&&(a=W(a),b=!0);if(!(this instanceof O)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new O(a)}if(b){b=C.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,
b){b||eb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)eb(d[c])}function Rc(a,b,d,c){if(w(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];w(d)&&Za(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function eb(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:
(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete fb[d],a.ng339=void 0))}function xb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Pf,d=fb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=w(d),e=!c&&b&&!D(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];S(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&
q(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=
b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(w(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",
a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[wa(a)]&&d}function Rf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||
Sf;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return S(O,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&
(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Yd)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function cb(a,b){function d(a){return function(b,c){if(D(b))q(b,uc(a));else return a(b,c)}}function c(a,b){Qa(a,
"service");if(z(b)||L(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||L(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{G(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):Pa(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,
c,f){var g=[];a=cb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);L(a)&&(a=a[a.length-1]);d=11>=Ea?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=
L(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:cb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ra([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ha(b),!1)}),constant:d(function(a,b){Qa(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=
p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ca.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),u={},R=h(u,function(a,b){var c=p.get(a+"Provider",b);return B.invoke(c.$get,c,void 0,a)}),B=R;n.$injectorProvider={$get:ha(R)};var r=g(a),B=R.get("$injector");B.strictDi=b;q(r,function(a){a&&B.invoke(a)});return B}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window",
"$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=G(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===
a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){G(a)&&(a=a.split(" "));var b=U();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return D(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(R--,0===R)for(;B.length;)try{B.pop()()}catch(b){d.error(b)}}}
function f(){t=null;g();h()}function g(){r=K();r=y(r)?null:r;na(r,E)&&(r=E);E=r}function h(){if(v!==k.url()||J!==r)v=k.url(),J=r,q(M,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,u={};k.isMock=!1;var R=0,B=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){R++};k.notifyWhenNoOutstandingRequests=function(a){0===R?a():B.push(a)};var r,J,v=l.href,fa=b.find("base"),t=null,K=c.history?function(){try{return m.state}catch(a){}}:
A;g();J=r;k.url=function(b,d,e){y(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=J===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;J=e;!c.history||h&&f?(h||(t=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(t=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),J=r);t&&(t=b);return k}return t||l.href.replace(/%27/g,"'")};k.state=function(){return r};var M=[],H=!1,E=null;k.onUrlChange=function(b){if(!H){if(c.history)F(a).on("popstate",
f);F(a).on("hashchange",f);H=!0}M.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=fa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;R++;c=n(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};k.defer.cancel=function(a){return u[a]?(delete u[a],p(a),e(A),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,
d)}]}function ef(){this.$get=function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw N("$cacheFactory")("iid",a);var g=0,h=S({},c,{id:a}),k=U(),l=c&&c.capacity||Number.MAX_VALUE,m=U(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=U();g=0;m=U();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Fc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=U();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!L(b)&&D(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=U();this.directive=function B(b,d){Qa(b,"directive");G(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=
a.invoke(f);z(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,uc(B));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||L(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||
b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return w(a)?(p=a,this):p};var u=10;this.onChangesTtl=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,t,K,M,H,E){function I(){try{if(!--qa)throw Y=void 0,ga("infchng",u);K.$apply(function(){for(var a=
[],b=0,c=Y.length;b<c;++b)try{Y[b]()}catch(d){a.push(d)}Y=void 0;if(a.length)throw a;})}finally{qa++}}function Da(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function P(a,b,c){pa.innerHTML="<span "+b+">";b=pa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function x(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Pc(k,a[g]=C.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(da(m,F("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,r,v;if(n)for(v=Array(c.length),m=0;m<h.length;m+=3)f=h[m],v[f]=c[f];else v=c;m=0;for(p=h.length;m<p;)k=v[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,r=c.transcludeOnThisElement?za(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?za(a,b):null,c(f,l,k,d,r)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,m,p,n,r=0;r<a.length;r++){k=new Da;l=$b(a[r],[],k,0===r?d:void 0,e);(f=l.length?oa(l,a[r],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[r].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(r,f,k),p=!0,n=n||f;f=null}return p?g:null}function za(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=U(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?za(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr;switch(a.nodeType){case 1:O(b,Aa(wa(a)),"E",d,e);for(var g,k,l,m,p=a.attributes,n=0,r=p&&p.length;n<r;n++){var v=!1,u=!1;g=p[n];k=g.name;l=W(g.value);g=Aa(k);if(m=Ba.test(g))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(g=g.match(Ca))&&V(g[1])&&(v=k,u=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));g=Aa(k.toLowerCase());f[g]=k;if(m||!c.hasOwnProperty(g))c[g]=l,Uc(a,g)&&(c[g]=!0);ia(a,b,l,g,m);O(b,g,"A",d,e,v,u)}f=a.className;D(f)&&(f=f.animVal);if(G(f)&&""!==f)for(;a=h.exec(f);)g=Aa(a[2]),O(b,g,"C",d,e)&&(c[g]=W(a[3])),f=f.substr(a.index+a[0].length);break;case Ma:if(11===Ea)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ca(b,a.nodeValue);break;case 8:hb(a,b,c,d,e)}b.sort(Z);
return b}function hb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Aa(f[1]);O(b,h,"M",d,e)&&(c[h]=W(f[2]))}}catch(k){}}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function Zc(a,b,c){return function(d,e,f,g,h){e=N(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||
(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Zc(a,c,d));a.require=x.require;a.directiveName=I;if(u===x||x.$$isolateScope)a=ja(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Zc(b,c,d));b.require=x.require;b.directiveName=I;if(u===x||x.$$isolateScope)b=ja(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);fa&&(e=t);c||(c=fa?I.parent():I);if(d){var f=l.$$slots[d];if(f)return f(a,
b,e,c,s);if(y(f))throw ga("noslot",d,ya(I));}else return l(a,b,e,c,s)}var n,E,x,M,B,t,P,I;b===f?(g=d,I=d.$$element):(I=F(f),g=new Da(I,d));B=e;u?M=e.$new(!0):r&&(B=e.$parent);l&&(P=m,P.$$boundTransclude=l,P.isSlotFilled=function(a){return!!l.$$slots[a]});v&&(t=ag(I,g,P,v,M,e,u));u&&(aa.$$addScopeInfo(I,M,!0,!(H&&(H===u||H===u.$$originalDirective))),aa.$$addScopeClass(I,!0),M.$$isolateBindings=u.$$isolateBindings,E=ka(e,g,M,M.$$isolateBindings,u),E.removeWatches&&M.$on("$destroy",E.removeWatches));
for(n in t){E=v[n];x=t[n];var Zb=E.$$bindings.bindToController;x.bindingInfo=x.identifier&&Zb?ka(B,g,x.instance,Zb,E):{};var K=x();K!==x.instance&&(x.instance=K,I.data("$"+E.name+"Controller",K),x.bindingInfo.removeWatches&&x.bindingInfo.removeWatches(),x.bindingInfo=ka(B,g,x.instance,Zb,E))}q(v,function(a,b){var c=a.require;a.bindToController&&!L(c)&&D(c)&&S(t[b].instance,ib(b,c,I,t))});q(t,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$doCheck)&&
(B.$watch(function(){b.$doCheck()}),b.$doCheck());z(b.$onDestroy)&&B.$on("$destroy",function(){b.$onDestroy()})});n=0;for(E=h.length;n<E;n++)x=h[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);var s=e;u&&(u.template||null===u.templateUrl)&&(s=M);a&&a(s,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)x=k[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);q(t,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,
r=l.newScopeDirective,v=l.controllerDirectives,u=l.newIsolateScopeDirective,H=l.templateDirective,E=l.nonTlbTranscludeDirective,M=!1,B=!1,fa=l.hasElementTranscludeDirective,t=d.$$element=F(b),x,I,P,K=e,s,Fa=!1,za=!1,w,A=0,C=a.length;A<C;A++){x=a[A];var G=x.$$start,hb=x.$$end;G&&(t=N(b,G,hb));P=void 0;if(n>x.priority)break;if(w=x.scope)x.templateUrl||(D(w)?(X("new/isolated scope",u||r,x,t),u=x):X("new/isolated scope",u,x,t)),r=r||x;I=x.name;if(!Fa&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&
!x.$$tlb)){for(w=A+1;Fa=a[w++];)if(Fa.transclude&&!Fa.$$tlb||Fa.replace&&(Fa.templateUrl||Fa.template)){za=!0;break}Fa=!0}!x.templateUrl&&x.controller&&(w=x.controller,v=v||U(),X("'"+I+"' controller",v[I],x,t),v[I]=x);if(w=x.transclude)if(M=!0,x.$$tlb||(X("transclusion",E,x,t),E=x),"element"==w)fa=!0,n=x.priority,P=t,t=d.$$element=F(aa.$$createComment(I,d[I])),b=t[0],ea(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,K=ac(za,P,e,n,g&&g.name,{nonTlbTranscludeDirective:E});else{var oa=U();P=F(Xb(b)).contents();
if(D(w)){P=[];var Q=U(),O=U();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;oa[b]=null;O[b]=c});q(t.contents(),function(a){var b=Q[Aa(wa(a))];b?(O[b]=!0,oa[b]=oa[b]||[],oa[b].push(a)):P.push(a)});q(O,function(a,b){if(!a)throw ga("reqslot",b);});for(var V in oa)oa[V]&&(oa[V]=ac(za,oa[V],e))}t.empty();K=ac(za,P,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});K.$$slots=oa}if(x.template)if(B=!0,X("template",H,x,t),H=x,w=z(x.template)?x.template(t,d):x.template,
w=xa(w),x.replace){g=x;P=Vb.test(w)?$c(da(x.templateNamespace,W(w))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ga("tplrt",I,"");ea(f,t,b);C={$attr:{}};w=$b(b,[],C);var Z=a.splice(A+1,a.length-(A+1));(u||r)&&T(w,u,r);a=a.concat(w).concat(Z);$(d,C);C=a.length}else t.html(w);if(x.templateUrl)B=!0,X("template",H,x,t),H=x,x.replace&&(g=x),p=ba(a.splice(A,a.length-A),t,d,f,M&&K,h,k,{controllerDirectives:v,newScopeDirective:r!==x&&r,newIsolateScopeDirective:u,templateDirective:H,nonTlbTranscludeDirective:E}),
C=a.length;else if(x.compile)try{s=x.compile(t,d,K);var Y=x.$$originalDirective||x;z(s)?m(null,ab(Y,s),G,hb):s&&m(ab(Y,s.pre),ab(Y,s.post),G,hb)}catch(ca){c(ca,ya(t))}x.terminal&&(p.terminal=!0,n=Math.max(n,x.priority))}p.scope=r&&!0===r.scope;p.transcludeOnThisElement=M;p.templateOnThisElement=B;p.transclude=K;l.hasElementTranscludeDirective=fa;return p}function ib(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&
e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else D(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=U(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"==p&&(p=b[l.name]);m=t(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}
function T(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],{$$isolateScope:b,$$newScope:c})}function O(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var p;e=a.get(e+"Directive");for(var n=0,r=e.length;n<r;n++)try{if(p=e[n],(y(h)||h>p.priority)&&-1!=p.restrict.indexOf(g)){l&&(p=Rb(p,{$$start:l,$$end:m}));if(!p.$$bindings){var u=p,v=p,x=p.name,H={isolateScope:null,bindToController:null};D(v.scope)&&(!0===v.bindToController?(H.bindToController=d(v.scope,x,!0),H.isolateScope={}):
H.isolateScope=d(v.scope,x,!1));D(v.bindToController)&&(H.bindToController=d(v.bindToController,x,!0));if(D(H.bindToController)){var E=v.controller,M=v.controllerAs;if(!E)throw ga("noctrl",x);if(!Xc(E,M))throw ga("noident",x);}var t=u.$$bindings=H;D(t.isolateScope)&&(p.$$isolateBindings=t.isolateScope)}b.push(p);k=p}}catch(I){c(I)}}return k}function V(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function $(a,b){var c=b.$attr,
d=a.$attr;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ba(a,b,c,d,f,g,h,k){var l=[],m,p,n=b[0],r=a.shift(),u=Rb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),H=z(r.templateUrl)?r.templateUrl(b,c):r.templateUrl,E=r.templateNamespace;b.empty();e(H).then(function(e){var v,M;e=xa(e);if(r.replace){e=
Vb.test(e)?$c(da(E,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw ga("tplrt",r.name,H);e={$attr:{}};ea(d,b,v);var B=$b(v,[],e);D(r.scope)&&T(B,!0);a=B.concat(a);$(c,e)}else v=n,b.html(e);a.unshift(u);m=oa(a,v,c,f,b,r,g,h,k);q(d,function(a,c){a==v&&(d[c]=b[0])});for(p=s(b[0].childNodes,f);l.length;){e=l.shift();M=l.shift();var t=l.shift(),I=l.shift(),B=b[0];if(!e.$$destroyed){if(M!==n){var P=M.className;k.hasElementTranscludeDirective&&r.replace||(B=Xb(v));ea(t,F(M),B);x(F(B),P)}M=m.transcludeOnThisElement?
za(e,m.transclude,I):I;m(p,e,B,d,M)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=za(b,m.transclude,e)),m(p,b,c,d,a)))}}function Z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ca(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function da(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ha(a,b){if("srcdoc"==b)return M.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=
c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function ia(a,c,d,e,f){var g=ha(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",ya(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=U());if(m.test(e))throw ga("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,
b):k.$set(e,a)}))}}}})}}function ea(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ja(a,
b){return S(function(){return a.apply(null,arguments)},a,b)}function la(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function ka(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(I),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,v,u,x,H;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(G(a)||Ga(a))g(h,a,d[h]),
d[h]=a});c.$$observers[m].$$scope=a;v=c[m];G(v)?d[h]=b(v)(a):Ga(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);H=u.literal?na:function(a,b){return a===b||a!==a&&b!==b};x=u.assign||function(){v=d[h]=u(a);throw ga("nonassign",c[m],m,f.name);};v=d[h]=u(a);p=function(b){H(b,d[h])||(H(b,v)?x(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,u.literal);k.push(p);break;case "<":if(!ua.call(c,
m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);var E=d[h]=u(a);l[h]=new Fb(bc,d[h]);p=a.$watch(u,function(a,b){if(b===a){if(b===E)return;b=E}g(h,a,b);d[h]=a},u.literal);k.push(p);break;case "&":u=c.hasOwnProperty(m)?n(c[m]):A;if(u===A&&p)break;d[h]=function(b){return u(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ta=/^\w/,pa=C.document.createElement("div"),qa=u,Y;Da.prototype={$normalize:Aa,$addClass:function(a){a&&0<a.length&&
H.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&H.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&H.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&H.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===
f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&w(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));g=W(g[2*l]).split(/\s/);f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ta.test(e)?this.$$element.attr(e,b):P(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=U()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){Za(e,b)}}};var ra=b.startSymbol(),sa=b.endSymbol(),xa="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa)},Ba=/^ngAttr[A-Z]/,Ca=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;aa.$$addBindingClass=
p?function(a){x(a,"ng-binding")}:A;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;aa.$$addScopeClass=p?function(a,b){x(a,b?"ng-isolate-scope":"ng-scope")}:A;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return aa}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function Aa(a){return db(a.replace(Yc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),
f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&G(b))return b;if(G(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");D(b)?S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector",
"$window",function(d,c){function e(a,b,c,d){if(!a||!D(a.$scope))throw N("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&G(k)&&(n=k);if(G(f)){k=f.match(cd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Pa(f,m,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(D(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},
{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return F(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return D(a)?da(a)?a.toISOString():bb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||y(a)||(L(a)?q(a,function(a){b.push(ea(c)+"="+ea(cc(a)))}):b.push(ea(c)+"="+ea(cc(a))))});
return b.join("&")}}}function of(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(L(a)?q(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!da(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ea(e)+"="+ea(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(G(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function ed(a){var b=
U(),d;G(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&q(a,function(a,d){var f=Q(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(z(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return D(a)&&"[object File]"!==
ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?bb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ec),put:ia(ec),patch:ia(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return w(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory",
"$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,d={};q(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=gd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!D(b))throw N("$http")("badreq",b);if(!G(b.url))throw N("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,
transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);g.method=ub(g.method);g.paramSerializer=G(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],p=k.when(g);q(R,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,
a.responseError)});p=c(p,h);p=p.then(function(b){var c=b.headers,d=gd(b.data,fd(c),void 0,b.transformRequest);y(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});p=c(p,m);d?(p.success=function(a){Pa(a,"fn");p.then(function(b){a(b.data,b.status,b.headers,g)});return p},p.error=function(a){Pa(a,"fn");p.then(null,function(b){a(b.data,b.status,b.headers,g)});return p}):(p.success=hd("success"),
p.error=hd("error"));return p}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}E&&(200<=a&&300>a?E.put(P,[a,c,ed(d),e]):E.remove(P));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?M.resolve:M.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function t(a){n(a.data,a.status,ia(a.headers()),
a.statusText)}function R(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var M=k.defer(),H=M.promise,E,I,Da=c.headers,P=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R,R);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=D(c.cache)?c.cache:D(a.cache)?a.cache:u);E&&(I=E.get(P),w(I)?I&&z(I.then)?I.then(t,t):L(I)?n(I[1],I[0],ia(I[2]),I[3]):n(I,200,{},"OK"):E.put(P,H));y(I)&&((I=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:
void 0)&&(Da[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,P,d,l,Da,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return H}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");a.paramSerializer=G(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var R=[];q(c,function(a){R.unshift(G(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(S({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function pf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=
e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);d&&d(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,u,R,B){function r(){fa&&fa();t&&t.abort()}function J(b,c,e,
f,g){w(M)&&d.cancel(M);fa=t=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(e))var v=c.createCallback(h),fa=f(h,v,function(a,b){var d=200===a&&c.getResponse(v);J(l,a,d,"",b);c.removeCallback(v)});else{var t=b(e,h);t.open(e,h,!0);q(m,function(a,b){w(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==Y(h).protocol?404:
0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;q(R,function(a,b){t.addEventListener(b,a)});q(B,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(u)try{t.responseType=u}catch(K){if("json"!==u)throw K;}t.send(y(k)?null:k)}if(0<n)var M=d(r,n);else n&&z(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse",
"$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,p,n){function J(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);var d;if(n&&!w(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=bb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),
v=ha(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}n=!!n;var q,t,K=0,M=[],H=[];v=f.length;for(var E=[],I=[];K<v;)if(-1!=(q=f.indexOf(a,K))&&-1!=(t=f.indexOf(b,q+l)))K!==q&&E.push(g(f.substring(K,q))),K=f.substring(q+l,t),M.push(K),H.push(d(K,J)),K=t+m,I.push(E.length),E.push("");else{K!==v&&E.push(g(f.substring(K)));break}p&&1<E.length&&Ka.throwNoconcat(f);if(!k||M.length){var Da=function(a){for(var b=0,c=M.length;b<c;b++){if(n&&y(a[b]))return;E[I[b]]=a[b]}return E.join("")};return S(function(a){var b=
0,d=M.length,e=Array(d);try{for(;b<d;b++)e[b]=H[b](a);return Da(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:M,$$watchDelegate:function(a,b){var c;return a.$watchGroup(H,function(d,e){var f=Da(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,
b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,u):f(r)}var p=4<arguments.length,u=p?va.call(arguments,4):[],R=b.setInterval,q=b.clearInterval,r=0,J=w(m)&&!m,v=(J?c:d).defer(),fa=v.promise;l=w(l)?l:0;fa.$$intervalId=R(function(){J?e.defer(n):a.$evalAsync(n);v.notify(r++);0<l&&r>=l&&(v.resolve(r),q(fa.$$intervalId),delete g[fa.$$intervalId]);J||a.$apply()},k);g[fa.$$intervalId]=v;return fa}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),
delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=qb(a[b]);return a.join("/")}function jd(a,b){var d=Y(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||hg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Y(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path=
"/"+b.$$path)}function ka(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!G(d))throw Gb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+
a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ka(a,c))?(g=f,g=w(f=ka(d,f))?b+(ka("/",f)||f):a+g):w(f=ka(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=ka(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,
0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?
f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):
a};this.html5Mode=function(a){return Ga(a)?(b.enabled=a,this):D(a)?(Ga(a.enabled)&&(b.enabled=a.enabled),Ga(a.requireBase)&&(b.requireBase=a.requireBase),Ga(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,
b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var u=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,u,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var R=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=F(a.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;
var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Y(h.animVal).href);R.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){y(ka(u,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),
k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Sa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw X("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a.window===a)throw X("isecwindow",b);if(a.children&&
(a.nodeName||a.prop&&a.attr&&a.find))throw X("isecdom",b);if(a===Object)throw X("isecobj",b);}return a}function nd(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a===jg||a===kg||a===lg)throw X("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw X("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===
typeof b?a:a+b}function V(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,
b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:
!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,
b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,
left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=U(),b=U(),d={"true":!0,
"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,H;e=e||J;switch(typeof c){case "string":H=c=c.trim();var E=e?b:a;g=E[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:B;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));E[H]=
g}return u(g,d);case "function":return u(c,d);default:return u(A,d)}}function h(a){function b(c,d,e,f){var g=J;J=!0;try{return a(c,d,e,f)}finally{J=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,
e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=k,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&
d.$$postDigest(function(){w(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){w(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function u(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,
d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var R=Ba().noUnsafeEval,B={csp:R,expensiveChecks:!1,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},r={csp:R,expensiveChecks:!0,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},J=!1;g.$$runningExpensiveChecks=function(){return J};return g}]}function wf(){this.$get=
["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=N("$q",TypeError),h=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};S(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});S(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(D(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=
1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},
l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=d.prototype;n.defer=h;n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=m;n.resolve=m;n.all=function(a){var b=
new f,c=0,d=L(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};n.race=function(a){var b=h();q(a,function(a){m(a).then(b.resolve,b.reject)});return b.promise};return n}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,
e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=N("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ea&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount=
{};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(J.$$phase)throw d("inprog",J.$$phase);J.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function B(){for(;t.length;)try{t.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){J.$apply(B)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,
1);return function(){0<=Za(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)ua.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,u,r,q=b,t,y=[],A,C;n("$digest");h.$$checkUrlChange();this===J&&null!==e&&(h.defer.cancel(e),B());c=null;do{r=!1;t=this;for(p=0;p<v.length;p++){try{C=v[p],C.scope.$eval(C.expression,C.locals)}catch(F){f(F)}c=null}v.length=0;a:do{if(p=t.$$watchers)for(u=
p.length;u--;)try{if(a=p[u])if(m=a.get,(g=m(t))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,t),5>q&&(A=4-q,y[A]||(y[A]=[]),y[A].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(G){f(G)}if(!(p=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(p=t.$$nextSibling);)t=t.$parent}while(t=p);if((r||v.length)&&
!q--)throw J.$$phase=null,d("infdig",b,y);}while(r||v.length);for(J.$$phase=null;K<w.length;)try{w[K++]()}catch(D){f(D)}w.length=K=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===J&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){J.$$phase||v.length||h.defer(function(){v.length&&J.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){w.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{J.$$phase=null}}catch(b){f(b)}finally{try{J.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var J=new m,v=J.$$asyncQueue=[],w=J.$$postDigestQueue=[],t=J.$$applyAsyncQueue=[],K=0;return J}]}function ne(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Y(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(G(a)){if(-1<a.indexOf("***"))throw sa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw sa("imatcher");}function xd(a){var b=[];w(a)&&q(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw sa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||y(b)||
""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=Y(e.toString()),n,p,u=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){u=!0;break}if(u)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){u=!1;break}if(u)return e;throw sa("insecurl",e.toString());}if(d===la.HTML)return f(e);throw sa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ea)throw sa("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(la,function(a,b){var d=Q(b);c[db("parse_as_"+d)]=function(b){return e(a,b)};c[db("get_trusted_"+d)]=function(b){return f(a,b)};c[db("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,
l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!e||m&&n||(m=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ea)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}
function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!G(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;L(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,S({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",
g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ca.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=
a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=va.call(arguments,3),n=w(l)&&!l,p=(n?c:d).defer(),u=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,
m))}catch(b){p.reject(b),e(b)}finally{delete g[u.$$timeoutId]}n||a.$apply()},k);u.$$timeoutId=q;g[q]=p;return u}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Y(a){Ea&&($.setAttribute("href",a),a=$.href);$.setAttribute("href",a);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,
""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function id(a){a=G(a)?Y(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ff(){this.$get=ha(C)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+
1))));return c}}function Jf(){this.$get=zd}function Mc(a){function b(d,c){if(D(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Cd);b("orderBy",Dd);b("uppercase",ug)}function qg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw N("filter")("notarray",
a);}c=c||"$";var e;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=vg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d,c){var e=D(a)&&d in a;!0===b?b=na:z(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!vc(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?La(f,a[d],b,d,!1):La(f,a,b,d,c)}}function La(a,b,d,c,e,
f){var g=lc(a),h=lc(b);if("string"===h&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c,e);if(L(a))return a.some(function(a){return La(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if("$"!==k.charAt(0)&&La(a[k],b,d,c,!0))return!0;return f?!1:La(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!z(f)&&!y(f)&&(g=k===c,!La(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);
if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;
for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!G(a)&&!T(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+a}function ba(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;G(c)&&(c=yg.test(c)?Z(c):b(c));T(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=zg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));q(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){y(b)&&(b=2);return bb(a,b)}}function sg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(isNaN(b))return a;T(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return G(a)?a.slice(b,d):va.call(a,b,d)}function Dd(a){function b(b){return b.map(function(b){var c=1,d=Xa;if(z(b))d=b;else if(G(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(k)&&(k=a.index),D(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!ta(a))throw N("orderBy")("notarray",a);L(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ta(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a)}function Jd(a,b,d,
c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=
a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Za(g,a);a.$$parentForm=Lb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);c.addClass(a,
Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ua,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=
!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(da(d))return d;if(G(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function p(a){return w(a)&&!da(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var u=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),u&&(a=Sb(a,u)),a});h.$formatters.push(function(a){if(a&&!da(a))throw nb("datefmt",a);if(n(a))return(q=a)&&u&&(q=Sb(q,u,!0)),m("date")(a,c,u);q=null;return""});if(w(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||y(s)||d(a)>=s};g.$observe("min",
function(a){s=p(a);h.$validate()})}if(w(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,
b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(q(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):D(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||U(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}
function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=L(a)?a.map(function(a){return ia(a)}):ia(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Kd(a){function b(a,
b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ga(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,
a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function(a){return G(a)?a.toLowerCase():a},ub=function(a){return G(a)?a.toUpperCase():a},Ea,F,qa,va=[].slice,
bg=[].splice,Dg=[].push,ma=Object.prototype.toString,wc=Object.getPrototypeOf,xa=N("ng"),ca=C.angular||(C.angular={}),Ub,pb=0;Ea=C.document.documentMode;A.$inject=[];Xa.$inject=[];var L=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return G(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!w(Ba.rules)){var a=C.document.querySelector("[ng-csp]")||
C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},rb=function(){if(w(rb.name_))return rb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Dc=!1,Ma=3,me={full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};O.expando="ng339";var fb=O.cache={},Pf=1;O._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Wb=N("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Uf=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=O.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
C.document.readyState?C.setTimeout(b):(this.on("DOMContentLoaded",b),O(C).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[Q(a)]=a});var Vc={};q("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Yb,removeData:eb,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)eb(a[b])}},function(a,b){O[b]=a});q({data:Yb,inheritedData:Cb,scope:function(a){return F.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=db(b);if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=Q(b),Eb[c])if(w(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?c:void 0;else if(w(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(w(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){O.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&y(2==a.length&&
a!==zb&&a!==Sc?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:eb,on:function(a,b,d,c){if(w(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=F(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new O(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new O(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new O(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,F(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new O(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=S(c,b)),b=ia(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){O.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),w(f)&&(f=F(f))):Qc(f,a(this[g],b,c,e));return w(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Ra.prototype={put:function(a,
b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Ra}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=N("$injector");cb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw G(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);
b=Wc(a);q(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var Rd=N("$animate"),$e=function(){this.$get=A},af=function(){var a=new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=G(b)?b.split(" "):L(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?S(k.from,c):c;k.to=k.to?S(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=N("$compile"),bc=new function(){};
Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=N("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=N("$http"),hd=function(a){return function(){throw Gg("legacy",
a);}},Ka=ca.$interpolateMinErr=N("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var rf=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var f="angular.callbacks."+a,g=b(a);c[f]=d[a]=g;return f},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},
removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=N("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||T(a))a=a.toString(),this.$$search=Ac(a);else if(D(a))a=pa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],
function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=y(b)?null:b;return this}});var X=N("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw X("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";
s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,
left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,
operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():
this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw X("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw X("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw X("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>
a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(c,d.$filter);var e="",f;this.stage="assign";
if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Sa,ra,nd,ig,Ib,mg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");
return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&w(a.watchId))b=
b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);
c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Sa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Sa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();
a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=
h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw X("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=
[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,
a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},
assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),
d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw X("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;V(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Sa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Sa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:
a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(ra(g[q](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,
function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,
c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:
d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(w(h)?h:0)-(w(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||
b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,
g,h,k),m+="",Sa(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,
b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,sa=N("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},pg=N("$compile"),$=C.document.createElement("a"),yd=Y(C.location.href);zd.$inject=["$document"];Mc.$inject=["$provide"];var Gd=22,Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var Ag={yyyy:ba("FullYear",4,0,!1,!0),yy:ba("FullYear",2,0,
!0,!0),y:ba("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),LLLL:kb("Month",!1,!0),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/
60),2)+Kb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Bd.$inject=["$locale"];var tg=ha(Q),ug=ha(ub);Dd.$inject=["$parse"];var oe=ha({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?
"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=Aa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",
new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Aa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ea&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,
$setDirty:A,$setPristine:A,$setSubmitted:A};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Ua).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();
n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):A;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);S(n,Lb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,
Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=U();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Td,Nb(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Nb(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Nb(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(da(a))return a;if(G(a)){rc.lastIndex=0;var d=rc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Nb(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!T(a))throw nb("numfmt",
a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){w(a)&&!T(a)&&(a=parseFloat(a));g=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(w(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){w(a)&&!T(a)&&(a=parseFloat(a));h=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[Q(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ha({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=qc("",!0),ze=qc("Odd",0),ye=qc("Even",1),Ae=Ta({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Lc={},Og={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Aa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,B,r,y=function(){B&&(B.remove(),B=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){B=null}),B=r,r=null)};c.$watch(f,function(f){var m=function(){!w(h)||h&&!c.$eval(h)||b()},t=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===q){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==q||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ta({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(L(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Ua="ng-pristine",Mb="ng-dirty",Qd="ng-pending",nb=N("ngModel"),Pg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,u=n,s=null,B,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));
return c};u=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ya(c));};this.$render=A;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var J=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Ua)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Mb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(s);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!T(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===J&&r.$setValidity(a,b)}function g(a){h===J&&c(a)}J++;var h=J;(function(){var a=r.$$parserName||"parse";if(y(B))f(a,null);else return B||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(s);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(B=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){B=!1;break}T(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){u(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&w(d.debounce)&&(d=d.debounce,T(d)?c=d:T(d[b])?c=d[b]:T(d["default"])&&(c=d["default"]));g.cancel(s);c?s=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;B=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,A))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ta({terminal:!0,priority:1E3}),Rg=N("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var w=a&&d(a)||b,r=s&&d(s),y=s?function(a,b){return r(c,b)}:function(a){return Ca(a)},v=function(a,b){return y(a,E(a,b))},A=d(n[2]||n[1]),t=d(n[3]||""),K=d(n[4]||""),z=d(n[8]),H={},E=q?function(a,b){H[q]=b;H[p]=
a;return H}:function(a){H[p]=a;return H};return{trackBy:s,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=E(l,h),l=y(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=K(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=E(d[p],p),r=w(c,q),p=y(r,q),u=A(c,q),H=t(c,q),q=K(c,q),r=new e(p,r,u,H,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return s?ca.copy(a.viewValue):a.viewValue}}}}}var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
t&&p.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];w(c.group)?Db(c.element.parentNode):Db(c.element)}t=K.getOptions();var d={};v&&h.prepend(B);t.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=C,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(C);s.$render();s.$isEmpty(a)||(b=p.readValue(),(K.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),
s.$render()))}var p=l[0],s=l[1],y=k.multiple,B;l=0;for(var r=h.children(),A=r.length;l<A;l++)if(""===r[l].value){B=r.eq(l);break}var v=!!B,z=F(e.cloneNode(!1));z.val("?");var t,K=c(k.ngOptions,h,d),C=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){t.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=t.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=
t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},K.trackBy&&d.$watchCollection(function(){if(L(s.$viewValue))return s.$viewValue.map(function(a){return K.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=t.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),v||B.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||v?(z.remove(),v||h.prepend(B),h.val(""),B.prop("selected",
!0),B.attr("selected",!0)):(v||B.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))},p.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(v||B.remove(),z.remove(),t.getViewValueFromOption(a)):null},K.trackBy&&d.$watch(function(){return K.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(B.remove(),a(B)(d),B.removeClass("ng-scope")):B=F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables,n)}}}}],Ie=["$locale","$interpolate",
"$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},w=b.startSymbol(),B=b.endSymbol(),r=w+l+"-"+n+B,z=ca.noop,v;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&T(v)&&isNaN(v)||
(z(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=N("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var w=l[3]||l[1],y=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,z,v,A,t={$id:Ca};s?r=a(s):(v=function(a,b){return Ca(b)},
A=function(a){return a});return function(a,d,f,g,l){r&&(z=function(b,c,d){y&&(t[y]=b);t[w]=c;t.$index=d;return r(a,t)});var m=U();a.$watchCollection(n,function(f){var g,n,r=d[0],s,u=U(),t,C,F,E,G,D,H;p&&(a[p]=f);if(ta(f))G=f,n=z||v;else for(H in n=z||A,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);t=G.length;H=Array(t);for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],E=n(C,F,g),m[E])D=m[E],delete m[E],u[E]=D,H[g]=D;else{if(u[E])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,E,F);H[g]={id:E,
scope:void 0,clone:void 0};u[E]=!0}for(s in m){D=m[s];E=tb(D.clone);b.leave(E);if(E[0].parentNode)for(g=0,n=E.length;g<n;g++)E[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],D=H[g],D.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);D.clone[0]!=s&&b.move(tb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,w,F,y,C,t)}else l(function(a,c){D.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;u[D.id]=D;e(D.scope,g,w,F,y,C,t)});m=
u})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ta(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,
e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ne=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,
element:b})}}),Tg=N("ngTransclude"),Qe=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw Tg("orphan",ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){a.length?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},Vg=["$element","$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=Ug;d.unknownOption=F(C.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();
return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=
void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){w(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,
d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=w(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||
0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(w(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ha({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw N("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
y(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};C.angular.bootstrap?
C.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),F(C.document).ready(function(){fe(C.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;
/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(P,d){'use strict';function G(t,g){g=g||{};d.forEach(g,function(d,q){delete g[q]});for(var q in t)!t.hasOwnProperty(q)||"$"===q.charAt(0)&&"$"===q.charAt(1)||(g[q]=t[q]);return g}var z=d.$$minErr("$resource"),M=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},
"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(q,L,H,I){function A(d,h){return encodeURIComponent(d).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,h?"%20":"+")}function B(d,h){this.template=d;this.defaults=v({},g.defaults,h);this.urlParams={}}function J(e,h,n,k){function b(a,c){var b={};c=v({},h,c);u(c,function(c,h){x(c)&&(c=c(a));var f;if(c&&c.charAt&&"@"==c.charAt(0)){f=a;var l=c.substr(1);if(null==l||""===l||"hasOwnProperty"===
l||!M.test("."+l))throw z("badmember",l);for(var l=l.split("."),m=0,k=l.length;m<k&&d.isDefined(f);m++){var r=l[m];f=null!==f?f[r]:void 0}}else f=c;b[h]=f});return b}function N(a){return a.resource}function m(a){G(a||{},this)}var t=new B(e,k);n=v({},g.defaults.actions,n);m.prototype.toJSON=function(){var a=v({},this);delete a.$promise;delete a.$resolved;return a};u(n,function(a,c){var h=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,E=d.isDefined(a.cancellable)?a.cancellable:k&&d.isDefined(k.cancellable)?
k.cancellable:g.defaults.cancellable;e&&!d.isNumber(e)&&(L.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete a.timeout,e=null);m[c]=function(f,l,k,g){var r={},n,w,C;switch(arguments.length){case 4:C=g,w=k;case 3:case 2:if(x(l)){if(x(f)){w=f;C=l;break}w=l;C=k}else{r=f;n=l;w=k;break}case 1:x(f)?
w=f:h?n=f:r=f;break;case 0:break;default:throw z("badargs",arguments.length);}var D=this instanceof m,p=D?n:a.isArray?[]:new m(n),s={},A=a.interceptor&&a.interceptor.response||N,B=a.interceptor&&a.interceptor.responseError||void 0,y,F;u(a,function(a,c){switch(c){default:s[c]=O(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!D&&E&&(y=H.defer(),s.timeout=y.promise,e&&(F=I(y.resolve,e)));h&&(s.data=n);t.setUrlParams(s,v({},b(n,a.params||{}),r),a.url);r=q(s).then(function(f){var b=
f.data;if(b){if(d.isArray(b)!==!!a.isArray)throw z("badcfg",c,a.isArray?"array":"object",d.isArray(b)?"array":"object",s.method,s.url);if(a.isArray)p.length=0,u(b,function(a){"object"===typeof a?p.push(new m(a)):p.push(a)});else{var l=p.$promise;G(b,p);p.$promise=l}}f.resource=p;return f},function(a){(C||K)(a);return H.reject(a)});r["finally"](function(){p.$resolved=!0;!D&&E&&(p.$cancelRequest=d.noop,I.cancel(F),y=F=s.timeout=null)});r=r.then(function(a){var c=A(a);(w||K)(c,a.headers);return c},B);
return D?r:(p.$promise=r,p.$resolved=!1,E&&(p.$cancelRequest=y.resolve),p)};m.prototype["$"+c]=function(a,b,d){x(a)&&(d=b,b=a,a={});a=m[c].call(this,a,this,b,d);return a.$promise||a}});m.bind=function(a){return J(e,v({},h,a),n)};return m}var K=d.noop,u=d.forEach,v=d.extend,O=d.copy,x=d.isFunction;B.prototype={setUrlParams:function(e,h,n){var k=this,b=n||k.template,g,m,q="",a=k.urlParams={};u(b.split(/\W/),function(c){if("hasOwnProperty"===c)throw z("badname");!/^\d+$/.test(c)&&c&&(new RegExp("(^|[^\\\\]):"+
c+"(\\W|$)")).test(b)&&(a[c]={isQueryParamValue:(new RegExp("\\?.*=:"+c+"(?:\\W|$)")).test(b)})});b=b.replace(/\\:/g,":");b=b.replace(t,function(a){q=a;return""});h=h||{};u(k.urlParams,function(a,e){g=h.hasOwnProperty(e)?h[e]:k.defaults[e];d.isDefined(g)&&null!==g?(m=a.isQueryParamValue?A(g,!0):A(g,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),b=b.replace(new RegExp(":"+e+"(\\W|$)","g"),function(a,c){return m+c})):b=b.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(a,c,b){return"/"==
b.charAt(0)?b:c+b})});k.defaults.stripTrailingSlashes&&(b=b.replace(/\/+$/,"")||"/");b=b.replace(/\/\.(?=\w+($|\?))/,".");e.url=q+b.replace(/\/\\\./,"/.");u(h,function(a,b){k.urlParams[b]||(e.params=e.params||{},e.params[b]=a)})}};return J}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
;
/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(E,d){'use strict';function y(t,l,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(b,e,a,c,k){function p(){m&&(g.cancel(m),m=null);h&&(h.$destroy(),h=null);n&&(m=g.leave(n),m.then(function(){m=null}),n=null)}function B(){var a=t.current&&t.current.locals;if(d.isDefined(a&&a.$template)){var a=b.$new(),c=t.current;n=k(a,function(a){g.enter(a,null,n||e).then(function(){!d.isDefined(A)||A&&!b.$eval(A)||l()});p()});h=c.scope=a;h.$emit("$viewContentLoaded");
h.$eval(s)}else p()}var h,n,m,A=a.autoscroll,s=a.onload||"";b.$on("$routeChangeSuccess",B);B()}}}function w(d,l,g){return{restrict:"ECA",priority:-400,link:function(b,e){var a=g.current,c=a.locals;e.html(c.$template);var k=d(e.contents());if(a.controller){c.$scope=b;var p=l(a.controller,c);a.controllerAs&&(b[a.controllerAs]=p);e.data("$ngControllerController",p);e.children().data("$ngControllerController",p)}b[a.resolveAs||"$resolve"]=c;k(b)}}}var x,C,s=d.module("ngRoute",["ng"]).provider("$route",
function(){function t(b,e){return d.extend(Object.create(b),e)}function l(b,d){var a=d.caseInsensitiveMatch,c={originalPath:b,regexp:b},g=c.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(b,a,d,c){b="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!b});a=a||"";return""+(b?"":a)+"(?:"+(b?a:"")+(c&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+b+"$",a?"i":"");return c}x=d.isArray;C=
d.isObject;var g={};this.when=function(b,e){var a;a=void 0;if(x(e)){a=a||[];for(var c=0,k=e.length;c<k;c++)a[c]=e[c]}else if(C(e))for(c in a=a||{},e)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=e[c];a=a||e;d.isUndefined(a.reloadOnSearch)&&(a.reloadOnSearch=!0);d.isUndefined(a.caseInsensitiveMatch)&&(a.caseInsensitiveMatch=this.caseInsensitiveMatch);g[b]=d.extend(a,b&&l(b,a));b&&(c="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/",g[c]=d.extend({redirectTo:b},l(c,a)));return this};this.caseInsensitiveMatch=
!1;this.otherwise=function(b){"string"===typeof b&&(b={redirectTo:b});this.when(null,b);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(b,e,a,c,k,p,l){function h(a){var f=v.current;(x=(r=y())&&f&&r.$$route===f.$$route&&d.equals(r.pathParams,f.pathParams)&&!r.reloadOnSearch&&!z)||!f&&!r||b.$broadcast("$routeChangeStart",r,f).defaultPrevented&&a&&a.preventDefault()}function n(){var u=v.current,f=r;if(x)u.params=f.params,d.copy(u.params,
a),b.$broadcast("$routeUpdate",u);else if(f||u)z=!1,(v.current=f)&&f.redirectTo&&(d.isString(f.redirectTo)?e.path(w(f.redirectTo,f.params)).search(f.params).replace():e.url(f.redirectTo(f.pathParams,e.path(),e.search())).replace()),c.when(f).then(m).then(function(c){f==v.current&&(f&&(f.locals=c,d.copy(f.params,a)),b.$broadcast("$routeChangeSuccess",f,u))},function(a){f==v.current&&b.$broadcast("$routeChangeError",f,u,a)})}function m(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,c){b[c]=
d.isString(a)?k.get(a):k.invoke(a,null,null,c)});a=s(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function s(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=l.valueOf(c),b=p(c)));return b}function y(){var a,b;d.forEach(g,function(c,g){var q;if(q=!b){var h=e.path();q=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=q[k-1],n=h[k];m&&
n&&(l[m.name]=n)}q=l}else q=null;else q=null;q=a=q}q&&(b=t(c,{params:d.extend({},e.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function w(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),g=e[1];c.push(b[g]);c.push(e[2]||"");delete b[g]}});return c.join("")}var z=!1,r,x,v={routes:g,reload:function(){z=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=
!0;z=!1}};b.$evalAsync(function(){h(a);a.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),e.path(w(this.current.$$route.originalPath,a)),e.search(a);else throw D("norout");}};b.$on("$locationChangeStart",h);b.$on("$locationChangeSuccess",n);return v}]}),D=d.$$minErr("ngRoute");s.provider("$routeParams",function(){this.$get=function(){return{}}});s.directive("ngView",y);s.directive("ngView",w);y.$inject=["$route","$anchorScroll",
"$animate"];w.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map
;
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */

!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
/**
 * Created by omikes on 10/14/16.
 */



var app = angular.module('app', ['ngResource', 'ngRoute']);

var n1 = 0.000;
var n2 = 0.000;

var coords = [{x: -1.000, y: -1.000, z: -1.000}, {x: -1.000, y: -1.000, z: 1.000},
    {x: -1.000, y: 1.000, z: -1.000}, {x: -1.000, y: 1.000, z: 1.000},
    {x: 1.000, y: -1.000, z: -1.000}, {x: 1.000, y: -1.000, z: 1.000},
    {x: 1.000, y: 1.000, z: -1.000}, {x: 1.000, y: 1.000, z: 1.000}];

var template = [{x: -1.000, y: -1.000, z: -1.000}, {x: -1.000, y: -1.000, z: 1.000},
    {x: -1.000, y: 1.000, z: -1.000}, {x: -1.000, y: 1.000, z: 1.000},
    {x: 1.000, y: -1.000, z: -1.000}, {x: 1.000, y: -1.000, z: 1.000},
    {x: 1.000, y: 1.000, z: -1.000}, {x: 1.000, y: 1.000, z: 1.000}];

var new_coords = [];

var sides = [[1,3,7,5,0],
    [0,2,6,4,1],
    [2,3,7,6,2],
    [0,1,5,4,3],
    [0,1,3,2,4],
    [4,5,7,6,5]];

function rotate_xs(x, n)
{
    var r = [];
    for (var c = 0; c < n.length; c++)
    {
        r[c] = {x: n[c].x,
            y: n[c].y * Math.cos(x) - n[c].z * Math.sin(x),
            z: n[c].y * Math.sin(x) + n[c].z * Math.cos(x)};
    }
    return r;
}

function rotate_ys(y, n)
{
    var r = [];
    for (var c = 0; c < n.length; c++)
    {
        r[c] = {x: n[c].x * Math.cos(y) + n[c].z * Math.sin(y),
            y: n[c].y,
            z: n[c].z * Math.cos(y) - n[c].x * Math.sin(y)};
    }
    return r;
}

function rotate_x(x)
{
    var n = coords;
    var r = [];
    for (var c = 0; c < 8; c++)
    {
        r[c] = {x: n[c].x,
            y: n[c].y * Math.cos(x) - n[c].z * Math.sin(x),
            z: n[c].y * Math.sin(x) + n[c].z * Math.cos(x)};
    }
    return r;
}

function rotate_y(y, n)
{
    var r = [];
    for (var c = 0; c < 8; c++)
    {
        r[c] = {x: n[c].x * Math.cos(y) + n[c].z * Math.sin(y),
            y: n[c].y,
            z: n[c].z * Math.cos(y) - n[c].x * Math.sin(y)};
    }
    return r;
}

function forward(corners)
{
    var cs = rotate_y(n2, rotate_x(n1));
    return ((cs[corners[0]].z + cs[corners[1]].z + cs[corners[2]].z + cs[corners[3]].z) / 4.000);
}

function draw(r, repeat, clear)
{
    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    if (clear)
        ctx.clearRect(0, 0, c.width, c.height);
    var half = c.height / 2.000;

    var sorted_sides = sides.sort(function(a,b){
        return forward(a) - forward(b);
    });
    for (var s = 0; s < 6; s++)
    {
        var side = sorted_sides[s];
        var z = forward(side);
        var style = Math.round(255.000 * z).toString(16);
        var color = '#' + style + style + style;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        ctx.beginPath();
        for (var l = 0; l < 5; l++)
        {
            var corner = r[side[l % 4]];
            switch(l) {
                case 0:
                    ctx.moveTo((corner.x * (half / 1.500)) * ((corner.z + 8) / 10) + half,
                        (corner.y * (half / 1.500)) * ((corner.z + 8) / 10) + half);
                    break;
                default:
                    ctx.lineTo((corner.x * (half / 1.500)) * ((corner.z + 8) / 10) + half,
                        (corner.y * (half / 1.500)) * ((corner.z + 8) / 10) + half);

            }

            new_coords[side[l % 4]] = {};
            new_coords[side[l % 4]].x = 0 - corner.x * ((corner.z + 8) / 10) * 0.600;
            new_coords[side[l % 4]].y = corner.y * ((corner.z + 8) / 10) * 0.600;
            new_coords[side[l % 4]].z = -1;
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        if (side[4] == 0 || side[4] == 5)
            drawSide(shapes[side[4]], side[4]);
        if (side[4] == 4)
            drawCurves();
        if (side[4] == 1)
        {
            if (repeat > 0)
            {
                drawBack();
                draw(rotate_ys(n2, rotate_xs(n1, angular.copy(new_coords))), repeat - 1, false);
            }
        }
    }
}

var shape = [];
var shapes = [[],[],[],[],[],[]];

app.directive('drawText', function(Draw) {
    return function($scope, $elem, $attrs) {
        $scope.$watch($attrs.drawText, function(text){
            Draw.get({text: text}, function(resp) {
                shapes[0] = resp.side;
                drawSide(shapes[0], 0);
            });
        });
    };
});

app.directive('drawSpiral', function(Draw) {
    return function($scope, $elem, $attrs) {
        $scope.$watch($attrs.drawSpiral, function(text){
            Draw.get({text: '`'}, function(resp) {
                shapes[5] = resp.side;
            });
        });
    };
});

function drawBack()
{
    var black = [{z: -1.000, y: -0.900, x: -0.900}, {z: -1.000, y: -0.900, x: 0.900},
        {z: -1.000, y: 0.900, x: 0.900}, {z: -1.000, y: 0.900, x: -0.900}];
    var this_shape = rotate_ys(n2, rotate_xs(n1, black));

    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#000';
    var half = c.height / 2.000;

    ctx.beginPath();
    ctx.moveTo((this_shape[0].x * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half,
        (this_shape[0].y * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half);
    for (var z = 1; z < 5; z++)
    {
        ctx.lineTo((this_shape[z%4].x * (half / 1.500)) * ((this_shape[z%4].z + 8) / 10) + half,
            (this_shape[z%4].y * (half / 1.500)) * ((this_shape[z%4].z + 8) / 10) + half);
    }
    ctx.closePath();
    ctx.fill();
}

function drawCurves()
{
    var hash = [{z: -1.000, y: -1.000, x: -1.000}, {z: 1.000, y: -1.000, x: -1.000},
        {z: 1.000, y: 1.000, x: -1.000}, {z: -1.000, y: 1.000, x: -1.000}];
    var this_shape = rotate_ys(n2, rotate_xs(n1, hash));

    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.strokeStyle = '#000';
    var half = c.height / 2.000;

    for (var z = 0; z < 4; z++)
    {
        ctx.beginPath();
        ctx.moveTo((this_shape[(z+0)%4].x * (half / 1.500)) * ((this_shape[(z+0)%4].z + 8) / 10) + half,
            (this_shape[(z+0)%4].y * (half / 1.500)) * ((this_shape[(z+0)%4].z + 8) / 10) + half);
        ctx.bezierCurveTo((((this_shape[(z+0)%4].x + this_shape[(z+1)%4].x) / 2) * (half / 1.500)) * ((((this_shape[(z+0)%4].z + this_shape[(z+1)%4].z) / 2) + 8) / 10) + half,
            (((this_shape[(z+0)%4].y + this_shape[(z+1)%4].y) / 2) * (half / 1.500)) * ((((this_shape[(z+0)%4].z + this_shape[(z+1)%4].z) / 2) + 8) / 10) + half,
            (((this_shape[(z+1)%4].x + this_shape[(z+2)%4].x) / 2) * (half / 1.500)) * ((((this_shape[(z+1)%4].z + this_shape[(z+2)%4].z) / 2) + 8) / 10) + half,
            (((this_shape[(z+1)%4].y + this_shape[(z+2)%4].y) / 2) * (half / 1.500)) * ((((this_shape[(z+1)%4].z + this_shape[(z+2)%4].z) / 2) + 8) / 10) + half,
            (this_shape[(z+2)%4].x * (half / 1.500)) * ((this_shape[(z+2)%4].z + 8) / 10) + half,
            (this_shape[(z+2)%4].y * (half / 1.500)) * ((this_shape[(z+2)%4].z + 8) / 10) + half);
        ctx.stroke();
    }
}

function drawSide(tshape, s)
{
    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.strokeStyle = '#000';
    var half = c.height / 2.000;
    var size = 1.00 / 1000.000;
    var spiral = 1.00 / 90.000;
    var t_shape = [];
    var m = -1;

    for (var j = 0; j < tshape.length; j++)
    {
        m++;
        if (j > 0 && tshape[j][0].group == tshape[j-1][0].group)
            m--;
        t_shape[j] = angular.copy(tshape[j]);
        for (var k = 0; k < t_shape[j].length; k++)
        {
            switch (s) {
                case 0:
                    t_shape[j][k].x = (parseFloat(t_shape[j][k].x) + m * 220.000 - 800) * size;
                    t_shape[j][k].y = (parseFloat(t_shape[j][k].y) - 200) * size;
                    t_shape[j][k].z = 1;
                    break;
                case 5:
                    t_shape[j][k].z = (parseFloat(t_shape[j][k].x) + m * 220.000 - 90) * spiral;
                    t_shape[j][k].x = 1;
                    t_shape[j][k].y = (parseFloat(t_shape[j][k].y) - 295) * spiral;
                    break;
            }
        }
        var this_shape = rotate_ys(n2, rotate_xs(n1, t_shape[j]));
        ctx.beginPath();
        ctx.moveTo((this_shape[0].x * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half,
            (this_shape[0].y * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half);
        for (var i = 1; i < this_shape.length; i++)
            ctx.lineTo((this_shape[i].x * (half / 1.500)) * ((this_shape[i].z + 8) / 10) + half,
                (this_shape[i].y * (half / 1.500)) * ((this_shape[i].z + 8) / 10) + half);
        ctx.stroke();
    }
}

app.directive('getClick', function() {
    return function($scope, $elem) {
        $elem.bind("click", function(e){
            if (shape.length == 0)
                shape.push([]);
            shape[shape.length - 1].push({x: e.x - e.target.offsetLeft, y: e.y - e.target.offsetTop});
        });
    };
});

app.directive('pressKey', function() {
    return function($scope, $elem) {
        $elem.bind("keydown", function(e){
            switch (e.which) {
                case 37:
                    n2 -= 0.05;
                    break;
                case 38:
                    n1 += 0.05;
                    break;
                case 39:
                    n2 += 0.05;
                    break;
                case 40:
                    n1 -= 0.05;
                    break;
            }
            if (e.which > 36 && e.which < 41)
            {
                draw(rotate_y(n2, rotate_x(n1)));
            }
        });
    };
});
/**
 * Created by mikey on 10/13/2016
 */



app.factory('Characters', ['$resource', function ($resource) {
    return $resource('/characters');
}]);

app.factory('Combine', ['$resource', function ($resource) {
    return $resource('/combine');
}]);

app.factory('Coordinates', ['$resource', function ($resource) {
    return $resource('/coordinates');
}]);

app.factory('Draw', ['$resource', function ($resource) {
    return $resource('/draw');
}]);
app.controller("editorController", ['$scope', 'Characters', 'Combine', 'Coordinates', function ($scope, Characters, Combine, Coordinates) {
  var s = $scope;
  s.characters = {};
  s.character = '';

  s.loadData = function() {
    s.character = s.selected;
    if (s.character && s.character.length > 0)
    {
      Characters.get(function(resp){
        s.characters = resp.characters;
        Coordinates.get({character: s.selected}, function(resp_2){
          shape = resp_2.coordinates;
          s.character = s.selected;
          repaint(shape);
        });
      });
    }
  };

  s.init = function() {
    Characters.get(function(resp){
      s.characters = resp.characters;
    });

    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeStyle = '#ff9';

    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(200, 400);
    ctx.closePath();
    ctx.stroke();
  };

  s.submit = function() {
    Characters.get({value: s.character, shape: JSON.stringify(shape)}, function(resp){
      s.characters = resp.characters;
    });
  };

  function repaint(this_shape)
  {
    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeStyle = '#000';

    for (var j = 0; j < this_shape.length; j++)
    {
      ctx.beginPath();
      ctx.moveTo(this_shape[j][0].x, this_shape[j][0].y);
      for (var i = 1; i < this_shape[j].length; i++)
        ctx.lineTo(this_shape[j][i].x, this_shape[j][i].y);
      for (var i = this_shape[j].length - 1; i > 0; i--)
        ctx.lineTo(this_shape[j][i].x, this_shape[j][i].y);
      ctx.closePath();
      ctx.stroke();
    }

    ctx.strokeStyle = '#ff9';

    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(200, 400);
    ctx.closePath();
    ctx.stroke();

  }

  s.combine = function() {
    Combine.get({value: s.character, shape: JSON.stringify(shape)});
  };

  s.clear = function () {
    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    shape = [];
  };

  s.redraw = function(e) {
    var last_change = [].concat(shape[shape.length - 1], {x: e.x - e.target.offsetLeft, y: e.y - e.target.offsetTop});
    var this_shape = [].concat(shape);
    this_shape[this_shape.length - 1] = last_change;
    repaint(this_shape);
  };
}]);
app.controller("mainController", ['$scope', function ($scope) {
  var s = $scope;
  var clientX = 0;
  var clientY = 0;
  var boolean = false;

  s.init = function() {
    var height = $(window).height();
    var width = $(window).width();
    var size = height > width ? width : height;
    var canvas = $("#canvas");
    canvas.attr('width', size);
    canvas.attr('height', size);

    canvas.focus();
    draw(rotate_y(n2, rotate_x(n1)));

    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
  };

  function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup"
        }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
  }

  s.mouseUp = function(){
    boolean = false;
  };

  s.mouseDown = function(event){
    boolean = true;
    clientX = event.clientX;
    clientY = event.clientY;
  };

  s.mouseMove = function(event){
    if (boolean)
    {
      var cX = (event.clientX - clientX) * 0.005;
      var cY = (clientY - event.clientY) * 0.005;
      n2 += cX;
      n1 += cY;
      clientX = event.clientX;
      clientY = event.clientY;

      coords = angular.copy(template);
      draw(rotate_y(n2, rotate_x(n1)), 1, true);
    }
  };

}]);
(function() {
  var slice = [].slice;

  this.ActionCable = {
    INTERNAL: {
      "message_types": {
        "welcome": "welcome",
        "ping": "ping",
        "confirmation": "confirm_subscription",
        "rejection": "reject_subscription"
      },
      "default_mount_path": "/cable",
      "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
    },
    createConsumer: function(url) {
      var ref;
      if (url == null) {
        url = (ref = this.getConfig("url")) != null ? ref : this.INTERNAL.default_mount_path;
      }
      return new ActionCable.Consumer(this.createWebSocketURL(url));
    },
    getConfig: function(name) {
      var element;
      element = document.head.querySelector("meta[name='action-cable-" + name + "']");
      return element != null ? element.getAttribute("content") : void 0;
    },
    createWebSocketURL: function(url) {
      var a;
      if (url && !/^wss?:/i.test(url)) {
        a = document.createElement("a");
        a.href = url;
        a.href = a.href;
        a.protocol = a.protocol.replace("http", "ws");
        return a.href;
      } else {
        return url;
      }
    },
    startDebugging: function() {
      return this.debugging = true;
    },
    stopDebugging: function() {
      return this.debugging = null;
    },
    log: function() {
      var messages;
      messages = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (this.debugging) {
        messages.push(Date.now());
        return console.log.apply(console, ["[ActionCable]"].concat(slice.call(messages)));
      }
    }
  };

  if (typeof window !== "undefined" && window !== null) {
    window.ActionCable = this.ActionCable;
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = this.ActionCable;
  }

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ActionCable.ConnectionMonitor = (function() {
    var clamp, now, secondsSince;

    ConnectionMonitor.pollInterval = {
      min: 3,
      max: 30
    };

    ConnectionMonitor.staleThreshold = 6;

    function ConnectionMonitor(connection) {
      this.connection = connection;
      this.visibilityDidChange = bind(this.visibilityDidChange, this);
      this.reconnectAttempts = 0;
    }

    ConnectionMonitor.prototype.start = function() {
      if (!this.isRunning()) {
        this.startedAt = now();
        delete this.stoppedAt;
        this.startPolling();
        document.addEventListener("visibilitychange", this.visibilityDidChange);
        return ActionCable.log("ConnectionMonitor started. pollInterval = " + (this.getPollInterval()) + " ms");
      }
    };

    ConnectionMonitor.prototype.stop = function() {
      if (this.isRunning()) {
        this.stoppedAt = now();
        this.stopPolling();
        document.removeEventListener("visibilitychange", this.visibilityDidChange);
        return ActionCable.log("ConnectionMonitor stopped");
      }
    };

    ConnectionMonitor.prototype.isRunning = function() {
      return (this.startedAt != null) && (this.stoppedAt == null);
    };

    ConnectionMonitor.prototype.recordPing = function() {
      return this.pingedAt = now();
    };

    ConnectionMonitor.prototype.recordConnect = function() {
      this.reconnectAttempts = 0;
      this.recordPing();
      delete this.disconnectedAt;
      return ActionCable.log("ConnectionMonitor recorded connect");
    };

    ConnectionMonitor.prototype.recordDisconnect = function() {
      this.disconnectedAt = now();
      return ActionCable.log("ConnectionMonitor recorded disconnect");
    };

    ConnectionMonitor.prototype.startPolling = function() {
      this.stopPolling();
      return this.poll();
    };

    ConnectionMonitor.prototype.stopPolling = function() {
      return clearTimeout(this.pollTimeout);
    };

    ConnectionMonitor.prototype.poll = function() {
      return this.pollTimeout = setTimeout((function(_this) {
        return function() {
          _this.reconnectIfStale();
          return _this.poll();
        };
      })(this), this.getPollInterval());
    };

    ConnectionMonitor.prototype.getPollInterval = function() {
      var interval, max, min, ref;
      ref = this.constructor.pollInterval, min = ref.min, max = ref.max;
      interval = 5 * Math.log(this.reconnectAttempts + 1);
      return Math.round(clamp(interval, min, max) * 1000);
    };

    ConnectionMonitor.prototype.reconnectIfStale = function() {
      if (this.connectionIsStale()) {
        ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + (this.getPollInterval()) + " ms, time disconnected = " + (secondsSince(this.disconnectedAt)) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
        this.reconnectAttempts++;
        if (this.disconnectedRecently()) {
          return ActionCable.log("ConnectionMonitor skipping reopening recent disconnect");
        } else {
          ActionCable.log("ConnectionMonitor reopening");
          return this.connection.reopen();
        }
      }
    };

    ConnectionMonitor.prototype.connectionIsStale = function() {
      var ref;
      return secondsSince((ref = this.pingedAt) != null ? ref : this.startedAt) > this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.disconnectedRecently = function() {
      return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.visibilityDidChange = function() {
      if (document.visibilityState === "visible") {
        return setTimeout((function(_this) {
          return function() {
            if (_this.connectionIsStale() || !_this.connection.isOpen()) {
              ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);
              return _this.connection.reopen();
            }
          };
        })(this), 200);
      }
    };

    now = function() {
      return new Date().getTime();
    };

    secondsSince = function(time) {
      return (now() - time) / 1000;
    };

    clamp = function(number, min, max) {
      return Math.max(min, Math.min(max, number));
    };

    return ConnectionMonitor;

  })();

}).call(this);
(function() {
  var i, message_types, protocols, ref, supportedProtocols, unsupportedProtocol,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  ref = ActionCable.INTERNAL, message_types = ref.message_types, protocols = ref.protocols;

  supportedProtocols = 2 <= protocols.length ? slice.call(protocols, 0, i = protocols.length - 1) : (i = 0, []), unsupportedProtocol = protocols[i++];

  ActionCable.Connection = (function() {
    Connection.reopenDelay = 500;

    function Connection(consumer) {
      this.consumer = consumer;
      this.open = bind(this.open, this);
      this.subscriptions = this.consumer.subscriptions;
      this.monitor = new ActionCable.ConnectionMonitor(this);
      this.disconnected = true;
    }

    Connection.prototype.send = function(data) {
      if (this.isOpen()) {
        this.webSocket.send(JSON.stringify(data));
        return true;
      } else {
        return false;
      }
    };

    Connection.prototype.open = function() {
      if (this.isActive()) {
        ActionCable.log("Attempted to open WebSocket, but existing socket is " + (this.getState()));
        throw new Error("Existing connection must be closed before opening");
      } else {
        ActionCable.log("Opening WebSocket, current state is " + (this.getState()) + ", subprotocols: " + protocols);
        if (this.webSocket != null) {
          this.uninstallEventHandlers();
        }
        this.webSocket = new WebSocket(this.consumer.url, protocols);
        this.installEventHandlers();
        this.monitor.start();
        return true;
      }
    };

    Connection.prototype.close = function(arg) {
      var allowReconnect, ref1;
      allowReconnect = (arg != null ? arg : {
        allowReconnect: true
      }).allowReconnect;
      if (!allowReconnect) {
        this.monitor.stop();
      }
      if (this.isActive()) {
        return (ref1 = this.webSocket) != null ? ref1.close() : void 0;
      }
    };

    Connection.prototype.reopen = function() {
      var error, error1;
      ActionCable.log("Reopening WebSocket, current state is " + (this.getState()));
      if (this.isActive()) {
        try {
          return this.close();
        } catch (error1) {
          error = error1;
          return ActionCable.log("Failed to reopen WebSocket", error);
        } finally {
          ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
          setTimeout(this.open, this.constructor.reopenDelay);
        }
      } else {
        return this.open();
      }
    };

    Connection.prototype.getProtocol = function() {
      var ref1;
      return (ref1 = this.webSocket) != null ? ref1.protocol : void 0;
    };

    Connection.prototype.isOpen = function() {
      return this.isState("open");
    };

    Connection.prototype.isActive = function() {
      return this.isState("open", "connecting");
    };

    Connection.prototype.isProtocolSupported = function() {
      var ref1;
      return ref1 = this.getProtocol(), indexOf.call(supportedProtocols, ref1) >= 0;
    };

    Connection.prototype.isState = function() {
      var ref1, states;
      states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return ref1 = this.getState(), indexOf.call(states, ref1) >= 0;
    };

    Connection.prototype.getState = function() {
      var ref1, state, value;
      for (state in WebSocket) {
        value = WebSocket[state];
        if (value === ((ref1 = this.webSocket) != null ? ref1.readyState : void 0)) {
          return state.toLowerCase();
        }
      }
      return null;
    };

    Connection.prototype.installEventHandlers = function() {
      var eventName, handler;
      for (eventName in this.events) {
        handler = this.events[eventName].bind(this);
        this.webSocket["on" + eventName] = handler;
      }
    };

    Connection.prototype.uninstallEventHandlers = function() {
      var eventName;
      for (eventName in this.events) {
        this.webSocket["on" + eventName] = function() {};
      }
    };

    Connection.prototype.events = {
      message: function(event) {
        var identifier, message, ref1, type;
        if (!this.isProtocolSupported()) {
          return;
        }
        ref1 = JSON.parse(event.data), identifier = ref1.identifier, message = ref1.message, type = ref1.type;
        switch (type) {
          case message_types.welcome:
            this.monitor.recordConnect();
            return this.subscriptions.reload();
          case message_types.ping:
            return this.monitor.recordPing();
          case message_types.confirmation:
            return this.subscriptions.notify(identifier, "connected");
          case message_types.rejection:
            return this.subscriptions.reject(identifier);
          default:
            return this.subscriptions.notify(identifier, "received", message);
        }
      },
      open: function() {
        ActionCable.log("WebSocket onopen event, using '" + (this.getProtocol()) + "' subprotocol");
        this.disconnected = false;
        if (!this.isProtocolSupported()) {
          ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting.");
          return this.close({
            allowReconnect: false
          });
        }
      },
      close: function(event) {
        ActionCable.log("WebSocket onclose event");
        if (this.disconnected) {
          return;
        }
        this.disconnected = true;
        this.monitor.recordDisconnect();
        return this.subscriptions.notifyAll("disconnected", {
          willAttemptReconnect: this.monitor.isRunning()
        });
      },
      error: function() {
        return ActionCable.log("WebSocket onerror event");
      }
    };

    return Connection;

  })();

}).call(this);
(function() {
  var slice = [].slice;

  ActionCable.Subscriptions = (function() {
    function Subscriptions(consumer) {
      this.consumer = consumer;
      this.subscriptions = [];
    }

    Subscriptions.prototype.create = function(channelName, mixin) {
      var channel, params, subscription;
      channel = channelName;
      params = typeof channel === "object" ? channel : {
        channel: channel
      };
      subscription = new ActionCable.Subscription(this.consumer, params, mixin);
      return this.add(subscription);
    };

    Subscriptions.prototype.add = function(subscription) {
      this.subscriptions.push(subscription);
      this.consumer.ensureActiveConnection();
      this.notify(subscription, "initialized");
      this.sendCommand(subscription, "subscribe");
      return subscription;
    };

    Subscriptions.prototype.remove = function(subscription) {
      this.forget(subscription);
      if (!this.findAll(subscription.identifier).length) {
        this.sendCommand(subscription, "unsubscribe");
      }
      return subscription;
    };

    Subscriptions.prototype.reject = function(identifier) {
      var i, len, ref, results, subscription;
      ref = this.findAll(identifier);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        subscription = ref[i];
        this.forget(subscription);
        this.notify(subscription, "rejected");
        results.push(subscription);
      }
      return results;
    };

    Subscriptions.prototype.forget = function(subscription) {
      var s;
      this.subscriptions = (function() {
        var i, len, ref, results;
        ref = this.subscriptions;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          s = ref[i];
          if (s !== subscription) {
            results.push(s);
          }
        }
        return results;
      }).call(this);
      return subscription;
    };

    Subscriptions.prototype.findAll = function(identifier) {
      var i, len, ref, results, s;
      ref = this.subscriptions;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        s = ref[i];
        if (s.identifier === identifier) {
          results.push(s);
        }
      }
      return results;
    };

    Subscriptions.prototype.reload = function() {
      var i, len, ref, results, subscription;
      ref = this.subscriptions;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        subscription = ref[i];
        results.push(this.sendCommand(subscription, "subscribe"));
      }
      return results;
    };

    Subscriptions.prototype.notifyAll = function() {
      var args, callbackName, i, len, ref, results, subscription;
      callbackName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      ref = this.subscriptions;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        subscription = ref[i];
        results.push(this.notify.apply(this, [subscription, callbackName].concat(slice.call(args))));
      }
      return results;
    };

    Subscriptions.prototype.notify = function() {
      var args, callbackName, i, len, results, subscription, subscriptions;
      subscription = arguments[0], callbackName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
      if (typeof subscription === "string") {
        subscriptions = this.findAll(subscription);
      } else {
        subscriptions = [subscription];
      }
      results = [];
      for (i = 0, len = subscriptions.length; i < len; i++) {
        subscription = subscriptions[i];
        results.push(typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : void 0);
      }
      return results;
    };

    Subscriptions.prototype.sendCommand = function(subscription, command) {
      var identifier;
      identifier = subscription.identifier;
      return this.consumer.send({
        command: command,
        identifier: identifier
      });
    };

    return Subscriptions;

  })();

}).call(this);
(function() {
  ActionCable.Subscription = (function() {
    var extend;

    function Subscription(consumer, params, mixin) {
      this.consumer = consumer;
      if (params == null) {
        params = {};
      }
      this.identifier = JSON.stringify(params);
      extend(this, mixin);
    }

    Subscription.prototype.perform = function(action, data) {
      if (data == null) {
        data = {};
      }
      data.action = action;
      return this.send(data);
    };

    Subscription.prototype.send = function(data) {
      return this.consumer.send({
        command: "message",
        identifier: this.identifier,
        data: JSON.stringify(data)
      });
    };

    Subscription.prototype.unsubscribe = function() {
      return this.consumer.subscriptions.remove(this);
    };

    extend = function(object, properties) {
      var key, value;
      if (properties != null) {
        for (key in properties) {
          value = properties[key];
          object[key] = value;
        }
      }
      return object;
    };

    return Subscription;

  })();

}).call(this);
(function() {
  ActionCable.Consumer = (function() {
    function Consumer(url) {
      this.url = url;
      this.subscriptions = new ActionCable.Subscriptions(this);
      this.connection = new ActionCable.Connection(this);
    }

    Consumer.prototype.send = function(data) {
      return this.connection.send(data);
    };

    Consumer.prototype.connect = function() {
      return this.connection.open();
    };

    Consumer.prototype.disconnect = function() {
      return this.connection.close({
        allowReconnect: false
      });
    };

    Consumer.prototype.ensureActiveConnection = function() {
      if (!this.connection.isActive()) {
        return this.connection.open();
      }
    };

    return Consumer;

  })();

}).call(this);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//




(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//







;
