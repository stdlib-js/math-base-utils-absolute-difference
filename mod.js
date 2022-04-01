// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY;var n=function(r){return Math.abs(r)};var a=function(r){return r!=r},t=Number.NEGATIVE_INFINITY,u=r,N=t;var I=r,e=n,f=a,o=function(r){return r===u||r===N};var v=function(r,n){return f(r)||f(n)?NaN:o(r)||o(n)?r===n?NaN:I:e(r-n)};export{v as default};
//# sourceMappingURL=mod.js.map
