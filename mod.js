// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY;var n=function(r){return Math.abs(r)};var t=function(r){return r!=r},u=Number.NEGATIVE_INFINITY,N=r,a=u;var I=function(r){return r===N||r===a};function e(u,N){return t(u)||t(N)?NaN:I(u)||I(N)?u===N?NaN:r:n(u-N)}export{e as default};
//# sourceMappingURL=mod.js.map
