"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=n(function(C,v){
var l=require('@stdlib/strided-base-smskmap/dist'),R=require('@stdlib/math-base-special-rampf/dist');function _(e,r,a,s,i,t,u){return l(e,r,a,s,i,t,u,R)}v.exports=_
});var o=n(function(D,q){
var E=require('@stdlib/strided-base-smskmap/dist').ndarray,O=require('@stdlib/math-base-special-rampf/dist');function b(e,r,a,s,i,t,u,y,j,x){return E(e,r,a,s,i,t,u,y,j,x,O)}q.exports=b
});var d=n(function(F,f){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=p(),h=o();g(c,"ndarray",h);f.exports=c
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=d(),m,k=z(w(__dirname,"./native.js"));k instanceof Error?m=A:m=k;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
