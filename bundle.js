// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).absdiff=n()}(this,(function(){"use strict";var e=Number.POSITIVE_INFINITY;var n=function(e){return Math.abs(e)};var t=function(e){return e!=e},f=Number.NEGATIVE_INFINITY,r=e,u=f;var o=e,i=n,a=t,d=function(e){return e===r||e===u};return function(e,n){return a(e)||a(n)?NaN:d(e)||d(n)?e===n?NaN:o:i(e-n)}}));
//# sourceMappingURL=bundle.js.map
