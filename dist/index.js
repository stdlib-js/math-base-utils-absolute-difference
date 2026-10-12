"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=s(function(o,u){
var f=require('@stdlib/constants-float64-pinf/dist'),q=require('@stdlib/math-base-special-abs/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-assert-is-infinite/dist');function v(e,r){return i(e)||i(r)?NaN:t(e)||t(r)?e===r?NaN:f:q(e-r)}u.exports=v
});var N=n();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
