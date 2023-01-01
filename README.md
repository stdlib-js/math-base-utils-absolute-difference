<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Absolute Difference

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [absolute difference][absolute-difference] of two real numbers.

<section class="intro">

The [absolute difference][absolute-difference] of two real `numbers` is defined as the absolute value of their difference.

<!-- <equation class="equation" label="eq:absolute_difference" align="center" raw="|\Delta| = | x - y |" alt="Absolute difference"> -->

<div class="equation" align="center" data-raw-text="|\Delta| = | x - y |" data-equation="eq:absolute_difference">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/utils/absolute-difference/docs/img/equation_absolute_difference.svg" alt="Absolute difference">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import absdiff from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-utils-absolute-difference@deno/mod.js';
```

#### absdiff( x, y )

Computes the [absolute difference][absolute-difference] of two real numbers.

```javascript
var d = absdiff( 2.0, 5.0 );
// returns 3.0

d = absdiff( -1.0, 3.14 );
// returns ~4.14

d = absdiff( 10.1, -2.05 );
// returns ~12.15

d = absdiff( -0.0, 0.0 );
// returns +0.0

d = absdiff( NaN, 5.0 );
// returns NaN

d = absdiff( 5.0, NaN );
// returns NaN

d = absdiff( Infinity, Infinity );
// returns NaN

d = absdiff( -Infinity, -Infinity );
// returns NaN

d = absdiff( Infinity, -Infinity );
// returns Infinity

d = absdiff( -Infinity, Infinity );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import absdiff from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-utils-absolute-difference@deno/mod.js';

var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*1.0e4) - 1.0e2;
    y = (randu()*1.0e4) - 1.0e2;
    d = absdiff( x, y );
    console.log( 'x = %d. y = %d. |x-y| = %d.', x, y, d );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/utils/relative-difference`][@stdlib/math/base/utils/relative-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/utils/float64-epsilon-difference`][@stdlib/math/base/utils/float64-epsilon-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers in units of double-precision floating-point epsilon.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-utils-absolute-difference.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-utils-absolute-difference

[test-image]: https://github.com/stdlib-js/math-base-utils-absolute-difference/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-utils-absolute-difference/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-utils-absolute-difference/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-utils-absolute-difference?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-utils-absolute-difference.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-utils-absolute-difference/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-utils-absolute-difference/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-utils-absolute-difference/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-utils-absolute-difference/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-utils-absolute-difference/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-utils-absolute-difference/main/LICENSE

[absolute-difference]: https://en.wikipedia.org/wiki/Absolute_difference

<!-- <related-links> -->

[@stdlib/math/base/utils/relative-difference]: https://github.com/stdlib-js/math-base-utils-relative-difference/tree/deno

[@stdlib/math/base/utils/float64-epsilon-difference]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
