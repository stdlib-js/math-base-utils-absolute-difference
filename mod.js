// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY;function n(r){return r!=r}var t=Number.NEGATIVE_INFINITY;function u(n){return n===r||n===t}function N(t,N){return n(t)||n(N)?NaN:u(t)||u(N)?t===N?NaN:r:function(r){return Math.abs(r)}(t-N)}export{N as default};
//# sourceMappingURL=mod.js.map
