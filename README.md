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

# cosh

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [hyperbolic cosine][hyperbolic-cosine] of a number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cosh
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cosh = require( '@stdlib/math-base-special-cosh' );
```

#### cosh( x )

Computes the [hyperbolic cosine][hyperbolic-cosine] of `x`.

```javascript
var v = cosh( 0.0 );
// returns 1.0

v = cosh( 2.0 );
// returns ~3.762

v = cosh( -2.0 );
// returns ~3.762

v = cosh( 710.0 );
// returns Infinity

v = cosh( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var cosh = require( '@stdlib/math-base-special-cosh' );

var x = linspace( -5.0, 5.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( cosh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sinh`][@stdlib/math/base/special/sinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic sine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tanh`][@stdlib/math/base/special/tanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cosh.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cosh

[test-image]: https://github.com/stdlib-js/math-base-special-cosh/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cosh/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cosh/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cosh?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cosh.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cosh/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cosh/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cosh/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cosh/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cosh/blob/main/branches.md

[hyperbolic-cosine]: http://mathworld.wolfram.com/HyperbolicCosine.html

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos

[@stdlib/math/base/special/sinh]: https://github.com/stdlib-js/math-base-special-sinh

[@stdlib/math/base/special/tanh]: https://github.com/stdlib-js/math-base-special-tanh

<!-- </related-links> -->

</section>

<!-- /.links -->
