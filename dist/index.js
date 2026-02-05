"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=a(function(c,u){
var s=require('@stdlib/constants-float64-pinf/dist'),f=require('@stdlib/math-base-special-abs/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-assert-is-infinite/dist');function q(e,r){return i(e)||i(r)?NaN:t(e)||t(r)?e===r?NaN:s:f(e-r)}u.exports=q
});var v=n();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
