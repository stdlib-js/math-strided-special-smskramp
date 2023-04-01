// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,l){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=l.value,r.__proto__=c):r[e]=l.value),_="get"in l,p="set"in l,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,l.get),p&&a&&a.call(r,e,l.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(r,e,t,n,o,a,u,i){var l,c,f,_;if(r<=0)return a;for(l=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,f=u<0?(1-r)*u:0,_=0;_<r;_++)0===n[c]&&(a[f]=i(e[l])),l+=t,c+=o,f+=u;return a}function _(r,e,t,n,o,a,u,i,l,c,f){var _,p,y,b;if(r<=0)return i;for(_=n,p=u,y=c,b=0;b<r;b++)0===o[p]&&(i[y]=f(e[_])),_+=t,p+=a,y+=l;return i}function p(r){return function(r){return r!=r}(r)?NaN:r>0?r:0}function y(r,e,t,n,o,a,u){return f(r,e,t,n,o,a,u,p)}function b(r,e,t,n,o,a,u,i,l,c){return _(r,e,t,n,o,a,u,i,l,c,p)}c(f,"ndarray",_),c(y,"ndarray",b);export{y as default,b as ndarray};
//# sourceMappingURL=mod.js.map
