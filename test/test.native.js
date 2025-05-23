/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var tiny = require( './fixtures/julia/tiny.json' );
var large = require( './fixtures/julia/large.json' );


// VARIABLES //

var cosh = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cosh instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cosh, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the hyperbolic cosine', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = cosh( x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hyperbolic cosine (tiny values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = tiny.x;
	expected = tiny.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = cosh( x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hyperbolic cosine (large values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = large.x;
	expected = large.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = cosh( x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `1` if provided `+-0`', opts, function test( t ) {
	var v;

	v = cosh( -0.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = cosh( +0.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = cosh( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided a `+infinity`', opts, function test( t ) {
	var v = cosh( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided a `-infinity`', opts, function test( t ) {
	var v = cosh( NINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});
