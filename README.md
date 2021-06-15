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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the [hyperbolic cosine][hyperbolic-cosine] of a number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cosh
```

</section>

<section class="usage">

## Usage

```javascript
var cosh = require( '@stdlib/math-base-special-cosh' );
```

#### cosh( x )

Computes the [hyperbolic cosine][hyperbolic-cosine] of a `number` (in radians).

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
var linspace = require( '@stdlib/array-linspace' );
var cosh = require( '@stdlib/math-base-special-cosh' );

var x = linspace( -5.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( cosh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cosh.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cosh

[test-image]: https://github.com/stdlib-js/math-base-special-cosh/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-cosh/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cosh/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cosh?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cosh
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cosh/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cosh/main/LICENSE

[hyperbolic-cosine]: http://mathworld.wolfram.com/HyperbolicCosine.html

</section>

<!-- /.links -->
