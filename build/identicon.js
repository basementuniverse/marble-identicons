(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/commonjs/common.js":
/*!***********************************************************!*\
  !*** ./node_modules/@basementuniverse/commonjs/common.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 * @version 1.2.9
 */

/** @class Math */

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
Math.floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
Math.clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
Math.frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
Math.lerp = (a, b, i) => a + (b - a) * i;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
Math.unlerp = (a, b, i) => (i - a) / (b - a);

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
Math.blerp = (c00, c10, c01, c11, ix, iy) => Math.lerp(Math.lerp(c00, c10, ix), Math.lerp(c01, c11, ix), iy);

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
Math.remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
Math.smoothstep = (a, b, i) => Math.lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
Math.radians = degrees => (Math.PI / 180) * degrees;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
Math.degrees = radians => (180 / Math.PI) * radians;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
Math.randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
Math.randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
Math.cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {
  let total = 0;
  for (let i = samples; i--;) {
    total += Math.random();
  }
  return mu + (total - samples / 2) / (samples / 2) * sigma;
};

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
Math.cltRandomInt = (min, max) => Math.floor(min + Math.cltRandom(0.5, 0.5, 2) * (max + 1 - min));

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
Math.weightedRandom = w => {
  let total = w.reduce((a, i) => a + i, 0), n = 0;
  const r = Math.random() * total;
  while (total > r) {
    total -= w[n++];
  }
  return n - 1;
};

/**
 * An interpolation function
 * @callback interpolationCallback
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {interpolationCallback} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
Math.lerpArray = (a, i, f = Math.lerp) => {
  const s = i * (a.length - 1);
  const p = Math.clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, Math.frac(s));
};

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
Math.dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
Math.factorial = a => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
Math.permutation = (n, r) => Math.factorial(n) / Math.factorial(n - r);

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
Math.combination = (n, r) => Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r));

/** @class Array */

/**
 * A function for generating array values
 * @callback timesCallback
 * @param {number} i The array index
 * @return {*} The array value
 */

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {timesCallback} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
Array.times = (f, n) => Array(n).fill(0).map((_, i) => f(i));

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
Array.range = n => Array.times(i => i, n);

/**
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<Array<*>>}
 */
Array.zip = (a, b) => a.map((k, i) => [k, b[i]]);

/**
 * Return array[i] with positive and negative wrapping
 * @name at
 * @function
 * @memberof Array.prototype
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
Object.defineProperty(Array.prototype, 'at', {
  value: function (i) {
    const l = this.length;
    return this[i < 0 ? l - (Math.abs(i + 1) % l) - 1 : i % l];
  }
});

/**
 * Chop an array into chunks of size n
 * @name chunk
 * @function
 * @memberof Array.prototype
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
Object.defineProperty(Array.prototype, 'chunk', {
  value: function (n) {
    return Array.times(i => this.slice(i * n, i * n + n), Math.ceil(this.length / n));
  }
});

/**
 * Randomly shuffle an array in-place
 * @name shuffle
 * @function
 * @memberof Array.prototype
 * @return {Array<*>} The shuffled array
 */
Object.defineProperty(Array.prototype, 'shuffle', {
  value: function () {
    return this.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
  }
});

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Create a new vector
 * @param {number|vec} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec} A new vector
 * @example <caption>Various ways to initialise a vector</caption>
 * let a = vec(3, 2);  // (3, 2)
 * let b = vec(4);     // (4, 4)
 * let c = vec(a);     // (3, 2)
 * let d = vec();      // (0, 0)
 */
const vec = (x, y) => (!x && !y ?
  { x: 0, y: 0 } : (typeof x === 'object' ?
    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?
      { x: x, y: x } : { x: x, y: y })
  )
);

/**
 * Get the components of a vector as an array
 * @param {vec} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec.components = a => [a.x, a.y];

/**
 * Return a unit vector (1, 0)
 * @return {vec} A unit vector (1, 0)
 */
vec.ux = () => vec(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec} A unit vector (0, 1)
 */
vec.uy = () => vec(0, 1);

/**
 * Add vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a + b
 */
vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

/**
 * Scale a vector
 * @param {vec} a Vector a
 * @param {number} b Scalar b
 * @return {vec} a * b
 */
vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });

/**
 * Subtract vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a - b
 */
vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

/**
 * Get the length of a vector
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec} a The vector to normalise
 * @return {vec} ^a
 */
vec.nor = a => {
  let len = vec.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec();
};

/**
 * Get a dot product of vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {number} a ∙ b
 */
vec.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec} A rotated vector
 */
vec.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}

/**
 * Check if two vectors are equal
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec} a The vector to copy
 * @return {vec} A copy of vector a
 */
vec.cpy = a => vec(a);

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec} a Vector a
 * @param {vectorMapCallback} f The function to call on each component of the vector
 * @return {vec} Vector a mapped through f
 */
vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

/**
 * Create a new matrix
 * @param {number} [m=4] The number of rows
 * @param {number} [n=4] The number of columns
 * @param {Array<number>} [entries=[]] Matrix values in reading order
 * @return {mat} A new matrix
 */
const mat = (m = 4, n = 4, entries = []) => ({
  m, n,
  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)
});

/**
 * Get an identity matrix of size n
 * @param {number} n The size of the matrix
 * @return {mat} An identity matrix
 */
mat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));

/**
 * Get an entry from a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {number} The value at position (i, j) in matrix a
 */
mat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];

/**
 * Set an entry of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @param {number} v The value to set in matrix a
 */
mat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };

/**
 * Get a row from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} m The row offset
 * @return {Array<number>} Row m from matrix a
 */
mat.row = (a, m) => {
  const s = (m - 1) * a.n;
  return a.entries.slice(s, s + a.n);
};

/**
 * Get a column from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} n The column offset
 * @return {Array<number>} Column n from matrix a
 */
mat.col = (a, n) => Array.times(i => mat.get(a, (i + 1), n), a.m);

/**
 * Add matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a + b
 */
mat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);

/**
 * Subtract matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a - b
 */
mat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);

/**
 * Multiply matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat|boolean} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, Math.dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

/**
 * Scale a matrix
 * @param {mat} a Matrix a
 * @param {number} b Scalar b
 * @return {mat} a * b
 */
mat.scale = (a, b) => mat.map(a, v => v * b);

/**
 * Transpose a matrix
 * @param {mat} a The matrix to transpose
 * @return {mat} A transposed matrix
 */
mat.trans = a => mat(a.n, a.m, Array.times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
 */
mat.minor = (a, i, j) => {
  if (a.m !== a.n) { return false; }
  const entries = [];
  for (let ii = 1; ii <= a.m; ii++) {
    if (ii === i) { continue; }
    for (let jj = 1; jj <= a.n; jj++) {
      if (jj === j) { continue; }
      entries.push(mat.get(a, ii, jj));
    }
  }
  return mat(a.m - 1, a.n - 1, entries);
};

/**
 * Get the determinant of a matrix
 * @param {mat} a Matrix a
 * @return {number|boolean} |a| or false if the matrix is not square
 */
mat.det = a => {
  if (a.m !== a.n) { return false; }
  if (a.m === 1) {
    return a.entries[0];
  }
  if (a.m === 2) {
    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];
  }
  let total = 0, sign = 1;
  for (let j = 1; j <= a.n; j++) {
    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));
    sign *= -1;
  }
  return total;
};

/**
 * Normalise a matrix
 * @param {mat} a The matrix to normalise
 * @return {mat|boolean} ^a or false if the matrix is not square
 */
mat.nor = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  return mat.map(a, i => i * d);
};

/**
 * Get the adjugate of a matrix
 * @param {mat} a The matrix from which to get the adjugate
 * @return {mat} The adjugate of a
 */
mat.adj = a => {
  const minors = mat(a.m, a.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= a.n; j++) {
      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));
    }
  }
  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));
  return mat.trans(cofactors);
};

/**
 * Get the inverse of a matrix
 * @param {mat} a The matrix to invert
 * @return {mat|boolean} a^-1 or false if the matrix has no inverse
 */
mat.inv = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  if (d === 0) { return false; }
  return mat.scale(mat.adj(a), 1 / d);
};

/**
 * Check if two matrices are equal
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {boolean} True if matrices a and b are identical, false otherwise
 */
mat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);

/**
 * Copy a matrix
 * @param {mat} a The matrix to copy
 * @return {mat} A copy of matrix a
 */
mat.cpy = a => mat(a.m, a.n, [...a.entries]);

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */

/**
 * Call a function on each entry of a matrix and build a new matrix from the results
 * @param {mat} a Matrix a
 * @param {matrixMapCallback} f The function to call on each entry of the matrix
 * @return {mat} Matrix a mapped through f
 */
mat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));

/**
 * Convert a matrix into a string
 * @param {mat} a The matrix to convert
 * @param {string} [ms=', '] The separator string for columns
 * @param {string} [ns='\n'] The separator string for rows
 * @return {string} A string representation of the matrix
 */
mat.str = (a, ms = ', ', ns = '\n') => a.entries.chunk(a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec, mat };
}


/***/ }),

/***/ "./node_modules/seed-random/index.js":
/*!*******************************************!*\
  !*** ./node_modules/seed-random/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var width = 256;// each RC4 output is 0 <= x < 256
var chunks = 6;// at least six RC4 outputs for each double
var digits = 52;// there are 52 significant digits in a double
var pool = [];// pool: entropy pool starts empty
var GLOBAL = typeof __webpack_require__.g === 'undefined' ? window : __webpack_require__.g;

//
// The following constants are related to IEEE 754 limits.
//
var startdenom = Math.pow(width, chunks),
    significance = Math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1;


var oldRandom = Math.random;

//
// seedrandom()
// This is the seedrandom function described above.
//
module.exports = function(seed, options) {
  if (options && options.global === true) {
    options.global = false;
    Math.random = module.exports(seed, options);
    options.global = true;
    return Math.random;
  }
  var use_entropy = (options && options.entropy) || false;
  var key = [];

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    use_entropy ? [seed, tostring(pool)] :
    0 in arguments ? seed : autoseed(), 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Override Math.random

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.

  return function() {         // Closure to return a random double:
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer Math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };
};

module.exports.resetGlobal = function () {
  Math.random = oldRandom;
};

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
/** @constructor */
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability discard an initial batch of values.
    // See http://www.rsa.com/rsalabs/node.asp?id=2009
  })(width);
}

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj)[0], prop;
  if (depth && typ == 'o') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 's' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto if available.
//
/** @param {Uint8Array=} seed */
function autoseed(seed) {
  try {
    GLOBAL.crypto.getRandomValues(seed = new Uint8Array(width));
    return tostring(seed);
  } catch (e) {
    return [+new Date, GLOBAL, GLOBAL.navigator && GLOBAL.navigator.plugins,
            GLOBAL.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to intefere with determinstic PRNG state later,
// seedrandom will not call Math.random on its own again after
// initialization.
//
mixkey(Math.random(), pool);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.identicon = void 0;
const seed = __webpack_require__(/*! seed-random */ "./node_modules/seed-random/index.js");
const commonjs_1 = __webpack_require__(/*! @basementuniverse/commonjs */ "./node_modules/@basementuniverse/commonjs/common.js");
const defaultIdenticonSettings = {
    size: 100,
    baseSeed: '',
    font: 'Helvetica',
    fontStyle: 'bold',
    fontSize: 0.4,
    backgroundColours: [
        '#16a085',
        '#1abc9c',
        '#2ecc71',
        '#3498db',
        '#1970b9',
        '#9b59b6',
        '#e67e22',
        '#e74c3c',
        '#e0395b',
    ],
    initialsColours: [
        '#ffffff',
    ],
    initialsOffset: commonjs_1.vec(),
    initialsAlpha: 1,
    initialsCompositeOperation: 'source-over',
    stripeColours: [
        '#f1c40f',
    ],
    stripeAlpha: 0.15,
    stripeCompositeOperation: 'lighter',
    stripes: [3, 8],
    stripeWidth: [0.2, 0.7],
    stripeDeviation: [-0.5, 0.5],
    curveAmount: [0.2, 0.4],
    curveOffset: [0, 0.5],
    startWidthSign: ['positive', 'negative'],
    endWidthSign: ['positive', 'negative'],
};
const MIN = 0;
const MAX = 1;
const TAU = Math.PI * 2;
const SIGN_FACTOR = {
    positive: 1,
    negative: -1,
};
const RADIUS_PADDING_FACTOR = 2;
function identicon(name, settings = {}) {
    const actualSettings = Object.assign({}, defaultIdenticonSettings, settings);
    if (!name || typeof name !== 'string') {
        name = 'Anonymous';
    }
    const initials = name
        .split(/[\s\-']/)
        .map(i => i[0].toUpperCase())
        .join('');
    const actualSeed = `${settings.baseSeed}${name}`;
    seed(actualSeed, { global: true });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = actualSettings.size;
    canvas.height = actualSettings.size;
    draw(context, actualSettings, initials);
    seed.resetGlobal();
    return canvas;
}
exports.identicon = identicon;
function draw(context, settings, initials) {
    context.save();
    const colour = Math.randomIntBetween(0, Math.max(settings.backgroundColours.length, settings.stripeColours.length, settings.initialsColours.length) - 1);
    context.fillStyle = settings.backgroundColours[Math.clamp(colour, 0, settings.backgroundColours.length - 1)];
    context.fillRect(0, 0, settings.size, settings.size);
    context.save();
    context.fillStyle = settings.stripeColours[Math.clamp(colour, 0, settings.stripeColours.length - 1)];
    context.globalAlpha = settings.stripeAlpha;
    context.globalCompositeOperation = settings.stripeCompositeOperation;
    const countStripes = Math.randomIntBetween(settings.stripes[MIN], settings.stripes[MAX]);
    let theta = Math.random() * TAU;
    for (let i = 0; i < countStripes; i++) {
        drawStripe(context, settings, theta);
        theta += Math.randomBetween(settings.stripeDeviation[MIN], settings.stripeDeviation[MAX]);
    }
    context.restore();
    drawInitials(context, settings, initials, colour);
    context.restore();
}
function drawStripe(context, settings, t1) {
    const s1 = SIGN_FACTOR[settings.startWidthSign.shuffle()[0]];
    const t2 = t1 + Math.randomBetween(settings.stripeWidth[MIN], settings.stripeWidth[MAX]) * s1;
    const t3 = t1 + Math.PI + Math.randomBetween(settings.curveOffset[MIN], settings.curveOffset[MAX]);
    const s2 = SIGN_FACTOR[settings.endWidthSign.shuffle()[0]];
    const t4 = t3 + Math.randomBetween(settings.stripeWidth[MIN], settings.stripeWidth[MAX]) * s2;
    const t5 = t1 + Math.PI / 2;
    const center = commonjs_1.vec.mul(commonjs_1.vec(settings.size), 0.5);
    const radius = Math.sqrt(center.x * center.x + center.y * center.y) * RADIUS_PADDING_FACTOR;
    const a1 = pointOnCircle(center, radius, t1);
    const a2 = pointOnCircle(center, radius, t2);
    const b1 = pointOnCircle(center, radius, t3);
    const b2 = pointOnCircle(center, radius, t4);
    const c = pointOnCircle(center, radius * Math.randomBetween(settings.curveAmount[MIN], settings.curveAmount[MAX]), t5);
    context.beginPath();
    context.moveTo(a1.x, a1.y);
    context.quadraticCurveTo(c.x, c.y, b1.x, b1.y);
    context.lineTo(b2.x, b2.y);
    context.quadraticCurveTo(c.x, c.y, a2.x, a2.y);
    context.closePath();
    context.fill();
}
function pointOnCircle(center, radius, theta) {
    return commonjs_1.vec.add(center, commonjs_1.vec(radius * Math.sin(theta), radius * Math.cos(theta)));
}
function drawInitials(context, settings, initials, colourIndex) {
    context.save();
    context.font = `${settings.fontStyle} ${Math.floor(settings.size * settings.fontSize)}px ${settings.font}`;
    context.fillStyle = settings.initialsColours[Math.clamp(colourIndex, 0, settings.initialsColours.length - 1)];
    context.globalAlpha = settings.initialsAlpha;
    context.globalCompositeOperation = settings.initialsCompositeOperation;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    const center = commonjs_1.vec.mul(commonjs_1.vec(settings.size), 0.5);
    context.fillText(initials, center.x + settings.initialsOffset.x, center.y + settings.initialsOffset.y);
    context.restore();
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0IsRUFBRSxLQUFLO0FBQ25ELHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CLEVBQUUsOENBQThDLEtBQUssY0FBYztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9tYXJibGUtaWRlbnRpY29ucy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvbWFyYmxlLWlkZW50aWNvbnMvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvY29tbW9uanMvY29tbW9uLmpzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL21hcmJsZS1pZGVudGljb25zLy4vbm9kZV9tb2R1bGVzL3NlZWQtcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL21hcmJsZS1pZGVudGljb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL21hcmJsZS1pZGVudGljb25zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvbWFyYmxlLWlkZW50aWNvbnMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICogQHZlcnNpb24gMS4yLjlcbiAqL1xuXG4vKiogQGNsYXNzIE1hdGggKi9cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXG4gKiBAcGFyYW0ge251bWJlcn0gW3A9TnVtYmVyLkVQU0lMT05dIFRoZSBwcmVjaXNpb24gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKi9cbk1hdGguZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbk1hdGguY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG5cbi8qKlxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgZnJvbSB3aGljaCB0byBnZXQgdGhlIGZyYWN0aW9uYWwgcGFydFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcbiAqL1xuTWF0aC5mcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuTWF0aC5sZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICovXG5NYXRoLnVubGVycCA9IChhLCBiLCBpKSA9PiAoaSAtIGEpIC8gKGIgLSBhKTtcblxuLyoqXG4gKiBEbyBhIGJpbGluZWFyIGludGVycG9sYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzAxIEJvdHRvbS1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxuICogQHBhcmFtIHtudW1iZXJ9IGl5IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeVxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxuICovXG5NYXRoLmJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBNYXRoLmxlcnAoTWF0aC5sZXJwKGMwMCwgYzEwLCBpeCksIE1hdGgubGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuTWF0aC5yZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcblxuLyoqXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbk1hdGguc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBNYXRoLmxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuTWF0aC5yYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICovXG5NYXRoLmRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggRXhjbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICovXG5NYXRoLnJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5NYXRoLnJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTAuNV0gVGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqL1xuTWF0aC5jbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XG4gIH1cbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xufTtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxuICovXG5NYXRoLmNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLmNsdFJhbmRvbSgwLjUsIDAuNSwgMikgKiAobWF4ICsgMSAtIG1pbikpO1xuXG4vKipcbiAqIFJldHVybiBhIHdlaWdodGVkIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcbiAqL1xuTWF0aC53ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xuICBsZXQgdG90YWwgPSB3LnJlZHVjZSgoYSwgaSkgPT4gYSArIGksIDApLCBuID0gMDtcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcbiAgd2hpbGUgKHRvdGFsID4gcikge1xuICAgIHRvdGFsIC09IHdbbisrXTtcbiAgfVxuICByZXR1cm4gbiAtIDE7XG59O1xuXG4vKipcbiAqIEFuIGludGVycG9sYXRpb24gZnVuY3Rpb25cbiAqIEBjYWxsYmFjayBpbnRlcnBvbGF0aW9uQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gaW50ZXJwb2xhdGVkIHZhbHVlIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEBwYXJhbSB7aW50ZXJwb2xhdGlvbkNhbGxiYWNrfSBbZj1NYXRoLmxlcnBdIFRoZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRvIHVzZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cbiAqL1xuTWF0aC5sZXJwQXJyYXkgPSAoYSwgaSwgZiA9IE1hdGgubGVycCkgPT4ge1xuICBjb25zdCBzID0gaSAqIChhLmxlbmd0aCAtIDEpO1xuICBjb25zdCBwID0gTWF0aC5jbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIE1hdGguZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuTWF0aC5kb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXG4gKi9cbk1hdGguZmFjdG9yaWFsID0gYSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpID0gMjsgaSA8PSBhOyBpKyspIHtcbiAgICByZXN1bHQgKj0gaTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcbiAqL1xuTWF0aC5wZXJtdXRhdGlvbiA9IChuLCByKSA9PiBNYXRoLmZhY3RvcmlhbChuKSAvIE1hdGguZmFjdG9yaWFsKG4gLSByKTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuQ3JcbiAqL1xuTWF0aC5jb21iaW5hdGlvbiA9IChuLCByKSA9PiBNYXRoLmZhY3RvcmlhbChuKSAvIChNYXRoLmZhY3RvcmlhbChyKSAqIE1hdGguZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKiBAY2xhc3MgQXJyYXkgKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xuICogQGNhbGxiYWNrIHRpbWVzQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge3RpbWVzQ2FsbGJhY2t9IGZcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8Kj59XG4gKi9cbkFycmF5LnRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgMC0+KG4gLSAxKVxuICovXG5BcnJheS5yYW5nZSA9IG4gPT4gQXJyYXkudGltZXMoaSA9PiBpLCBuKTtcblxuLyoqXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuQXJyYXkuemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQG5hbWUgYXRcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIEFycmF5LnByb3RvdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdhdCcsIHtcbiAgdmFsdWU6IGZ1bmN0aW9uIChpKSB7XG4gICAgY29uc3QgbCA9IHRoaXMubGVuZ3RoO1xuICAgIHJldHVybiB0aGlzW2kgPCAwID8gbCAtIChNYXRoLmFicyhpICsgMSkgJSBsKSAtIDEgOiBpICUgbF07XG4gIH1cbn0pO1xuXG4vKipcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXG4gKiBAbmFtZSBjaHVua1xuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgQXJyYXkucHJvdG90eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY2h1bmsgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgJ2NodW5rJywge1xuICB2YWx1ZTogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gQXJyYXkudGltZXMoaSA9PiB0aGlzLnNsaWNlKGkgKiBuLCBpICogbiArIG4pLCBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyBuKSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIFJhbmRvbWx5IHNodWZmbGUgYW4gYXJyYXkgaW4tcGxhY2VcbiAqIEBuYW1lIHNodWZmbGVcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIEFycmF5LnByb3RvdHlwZVxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnc2h1ZmZsZScsIHtcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoYSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKS5tYXAoYSA9PiBhWzFdKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBBIG5ldyB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMoMywgMik7ICAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjKDQpOyAgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMoKTsgICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XG4gIHsgeDogMCwgeTogMCB9IDogKHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XG4gICAgeyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfSA6ICh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCA/XG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxuICApXG4pO1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKi9cbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMCwgMSlcbiAqL1xudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcbiAqL1xudmVjLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyBiLngsIHk6IGEueSArIGIueSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKiBiXG4gKi9cbnZlYy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogYiwgeTogYS55ICogYiB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAtIGJcbiAqL1xudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWN9IF5hXG4gKi9cbnZlYy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlY30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMucm90ID0gKGEsIHIpID0+IHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcbiAgICBjID0gTWF0aC5jb3Mocik7XG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjdG9yTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjdG9yTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogQSBtYXRyaXhcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcbiAqL1xuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xuICBtLCBuLFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXG59KTtcblxuLyoqXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcbiAqL1xubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcblxuLyoqXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXG4gKi9cbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcblxuLyoqXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcbiAqL1xubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xuXG4vKipcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LnJvdyA9IChhLCBtKSA9PiB7XG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5jb2wgPSAoYSwgbikgPT4gQXJyYXkudGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bCA9IChhLCBiKSA9PiB7XG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIE1hdGguZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIEFycmF5LnRpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5kZXQgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYS5tID09PSAxKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcbiAgfVxuICBpZiAoYS5tID09PSAyKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcbiAgfVxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcbiAgICBzaWduICo9IC0xO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBhLmVudHJpZXMuY2h1bmsoYS5uKS5tYXAociA9PiByLmpvaW4obXMpKS5qb2luKG5zKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMsIG1hdCB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHdpZHRoID0gMjU2Oy8vIGVhY2ggUkM0IG91dHB1dCBpcyAwIDw9IHggPCAyNTZcclxudmFyIGNodW5rcyA9IDY7Ly8gYXQgbGVhc3Qgc2l4IFJDNCBvdXRwdXRzIGZvciBlYWNoIGRvdWJsZVxyXG52YXIgZGlnaXRzID0gNTI7Ly8gdGhlcmUgYXJlIDUyIHNpZ25pZmljYW50IGRpZ2l0cyBpbiBhIGRvdWJsZVxyXG52YXIgcG9vbCA9IFtdOy8vIHBvb2w6IGVudHJvcHkgcG9vbCBzdGFydHMgZW1wdHlcclxudmFyIEdMT0JBTCA9IHR5cGVvZiBnbG9iYWwgPT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xyXG5cclxuLy9cclxuLy8gVGhlIGZvbGxvd2luZyBjb25zdGFudHMgYXJlIHJlbGF0ZWQgdG8gSUVFRSA3NTQgbGltaXRzLlxyXG4vL1xyXG52YXIgc3RhcnRkZW5vbSA9IE1hdGgucG93KHdpZHRoLCBjaHVua3MpLFxyXG4gICAgc2lnbmlmaWNhbmNlID0gTWF0aC5wb3coMiwgZGlnaXRzKSxcclxuICAgIG92ZXJmbG93ID0gc2lnbmlmaWNhbmNlICogMixcclxuICAgIG1hc2sgPSB3aWR0aCAtIDE7XHJcblxyXG5cclxudmFyIG9sZFJhbmRvbSA9IE1hdGgucmFuZG9tO1xyXG5cclxuLy9cclxuLy8gc2VlZHJhbmRvbSgpXHJcbi8vIFRoaXMgaXMgdGhlIHNlZWRyYW5kb20gZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlLlxyXG4vL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlZWQsIG9wdGlvbnMpIHtcclxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdsb2JhbCA9PT0gdHJ1ZSkge1xyXG4gICAgb3B0aW9ucy5nbG9iYWwgPSBmYWxzZTtcclxuICAgIE1hdGgucmFuZG9tID0gbW9kdWxlLmV4cG9ydHMoc2VlZCwgb3B0aW9ucyk7XHJcbiAgICBvcHRpb25zLmdsb2JhbCA9IHRydWU7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb207XHJcbiAgfVxyXG4gIHZhciB1c2VfZW50cm9weSA9IChvcHRpb25zICYmIG9wdGlvbnMuZW50cm9weSkgfHwgZmFsc2U7XHJcbiAgdmFyIGtleSA9IFtdO1xyXG5cclxuICAvLyBGbGF0dGVuIHRoZSBzZWVkIHN0cmluZyBvciBidWlsZCBvbmUgZnJvbSBsb2NhbCBlbnRyb3B5IGlmIG5lZWRlZC5cclxuICB2YXIgc2hvcnRzZWVkID0gbWl4a2V5KGZsYXR0ZW4oXHJcbiAgICB1c2VfZW50cm9weSA/IFtzZWVkLCB0b3N0cmluZyhwb29sKV0gOlxyXG4gICAgMCBpbiBhcmd1bWVudHMgPyBzZWVkIDogYXV0b3NlZWQoKSwgMyksIGtleSk7XHJcblxyXG4gIC8vIFVzZSB0aGUgc2VlZCB0byBpbml0aWFsaXplIGFuIEFSQzQgZ2VuZXJhdG9yLlxyXG4gIHZhciBhcmM0ID0gbmV3IEFSQzQoa2V5KTtcclxuXHJcbiAgLy8gTWl4IHRoZSByYW5kb21uZXNzIGludG8gYWNjdW11bGF0ZWQgZW50cm9weS5cclxuICBtaXhrZXkodG9zdHJpbmcoYXJjNC5TKSwgcG9vbCk7XHJcblxyXG4gIC8vIE92ZXJyaWRlIE1hdGgucmFuZG9tXHJcblxyXG4gIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHJhbmRvbSBkb3VibGUgaW4gWzAsIDEpIHRoYXQgY29udGFpbnNcclxuICAvLyByYW5kb21uZXNzIGluIGV2ZXJ5IGJpdCBvZiB0aGUgbWFudGlzc2Egb2YgdGhlIElFRUUgNzU0IHZhbHVlLlxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oKSB7ICAgICAgICAgLy8gQ2xvc3VyZSB0byByZXR1cm4gYSByYW5kb20gZG91YmxlOlxyXG4gICAgdmFyIG4gPSBhcmM0LmcoY2h1bmtzKSwgICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG51bWVyYXRvciBuIDwgMiBeIDQ4XHJcbiAgICAgICAgZCA9IHN0YXJ0ZGVub20sICAgICAgICAgICAgICAgICAvLyAgIGFuZCBkZW5vbWluYXRvciBkID0gMiBeIDQ4LlxyXG4gICAgICAgIHggPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbmQgbm8gJ2V4dHJhIGxhc3QgYnl0ZScuXHJcbiAgICB3aGlsZSAobiA8IHNpZ25pZmljYW5jZSkgeyAgICAgICAgICAvLyBGaWxsIHVwIGFsbCBzaWduaWZpY2FudCBkaWdpdHMgYnlcclxuICAgICAgbiA9IChuICsgeCkgKiB3aWR0aDsgICAgICAgICAgICAgIC8vICAgc2hpZnRpbmcgbnVtZXJhdG9yIGFuZFxyXG4gICAgICBkICo9IHdpZHRoOyAgICAgICAgICAgICAgICAgICAgICAgLy8gICBkZW5vbWluYXRvciBhbmQgZ2VuZXJhdGluZyBhXHJcbiAgICAgIHggPSBhcmM0LmcoMSk7ICAgICAgICAgICAgICAgICAgICAvLyAgIG5ldyBsZWFzdC1zaWduaWZpY2FudC1ieXRlLlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKG4gPj0gb3ZlcmZsb3cpIHsgICAgICAgICAgICAgLy8gVG8gYXZvaWQgcm91bmRpbmcgdXAsIGJlZm9yZSBhZGRpbmdcclxuICAgICAgbiAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbGFzdCBieXRlLCBzaGlmdCBldmVyeXRoaW5nXHJcbiAgICAgIGQgLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJpZ2h0IHVzaW5nIGludGVnZXIgTWF0aCB1bnRpbFxyXG4gICAgICB4ID4+Pj0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3ZSBoYXZlIGV4YWN0bHkgdGhlIGRlc2lyZWQgYml0cy5cclxuICAgIH1cclxuICAgIHJldHVybiAobiArIHgpIC8gZDsgICAgICAgICAgICAgICAgIC8vIEZvcm0gdGhlIG51bWJlciB3aXRoaW4gWzAsIDEpLlxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5yZXNldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcclxuICBNYXRoLnJhbmRvbSA9IG9sZFJhbmRvbTtcclxufTtcclxuXHJcbi8vXHJcbi8vIEFSQzRcclxuLy9cclxuLy8gQW4gQVJDNCBpbXBsZW1lbnRhdGlvbi4gIFRoZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGtleSBpbiB0aGUgZm9ybSBvZlxyXG4vLyBhbiBhcnJheSBvZiBhdCBtb3N0ICh3aWR0aCkgaW50ZWdlcnMgdGhhdCBzaG91bGQgYmUgMCA8PSB4IDwgKHdpZHRoKS5cclxuLy9cclxuLy8gVGhlIGcoY291bnQpIG1ldGhvZCByZXR1cm5zIGEgcHNldWRvcmFuZG9tIGludGVnZXIgdGhhdCBjb25jYXRlbmF0ZXNcclxuLy8gdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGZyb20gQVJDNC4gIEl0cyByZXR1cm4gdmFsdWUgaXMgYSBudW1iZXIgeFxyXG4vLyB0aGF0IGlzIGluIHRoZSByYW5nZSAwIDw9IHggPCAod2lkdGggXiBjb3VudCkuXHJcbi8vXHJcbi8qKiBAY29uc3RydWN0b3IgKi9cclxuZnVuY3Rpb24gQVJDNChrZXkpIHtcclxuICB2YXIgdCwga2V5bGVuID0ga2V5Lmxlbmd0aCxcclxuICAgICAgbWUgPSB0aGlzLCBpID0gMCwgaiA9IG1lLmkgPSBtZS5qID0gMCwgcyA9IG1lLlMgPSBbXTtcclxuXHJcbiAgLy8gVGhlIGVtcHR5IGtleSBbXSBpcyB0cmVhdGVkIGFzIFswXS5cclxuICBpZiAoIWtleWxlbikgeyBrZXkgPSBba2V5bGVuKytdOyB9XHJcblxyXG4gIC8vIFNldCB1cCBTIHVzaW5nIHRoZSBzdGFuZGFyZCBrZXkgc2NoZWR1bGluZyBhbGdvcml0aG0uXHJcbiAgd2hpbGUgKGkgPCB3aWR0aCkge1xyXG4gICAgc1tpXSA9IGkrKztcclxuICB9XHJcbiAgZm9yIChpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcclxuICAgIHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyBrZXlbaSAlIGtleWxlbl0gKyAodCA9IHNbaV0pKV07XHJcbiAgICBzW2pdID0gdDtcclxuICB9XHJcblxyXG4gIC8vIFRoZSBcImdcIiBtZXRob2QgcmV0dXJucyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgYXMgb25lIG51bWJlci5cclxuICAobWUuZyA9IGZ1bmN0aW9uKGNvdW50KSB7XHJcbiAgICAvLyBVc2luZyBpbnN0YW5jZSBtZW1iZXJzIGluc3RlYWQgb2YgY2xvc3VyZSBzdGF0ZSBuZWFybHkgZG91YmxlcyBzcGVlZC5cclxuICAgIHZhciB0LCByID0gMCxcclxuICAgICAgICBpID0gbWUuaSwgaiA9IG1lLmosIHMgPSBtZS5TO1xyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgdCA9IHNbaSA9IG1hc2sgJiAoaSArIDEpXTtcclxuICAgICAgciA9IHIgKiB3aWR0aCArIHNbbWFzayAmICgoc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIHQpXSkgKyAoc1tqXSA9IHQpKV07XHJcbiAgICB9XHJcbiAgICBtZS5pID0gaTsgbWUuaiA9IGo7XHJcbiAgICByZXR1cm4gcjtcclxuICAgIC8vIEZvciByb2J1c3QgdW5wcmVkaWN0YWJpbGl0eSBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgdmFsdWVzLlxyXG4gICAgLy8gU2VlIGh0dHA6Ly93d3cucnNhLmNvbS9yc2FsYWJzL25vZGUuYXNwP2lkPTIwMDlcclxuICB9KSh3aWR0aCk7XHJcbn1cclxuXHJcbi8vXHJcbi8vIGZsYXR0ZW4oKVxyXG4vLyBDb252ZXJ0cyBhbiBvYmplY3QgdHJlZSB0byBuZXN0ZWQgYXJyYXlzIG9mIHN0cmluZ3MuXHJcbi8vXHJcbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqLCBkZXB0aCkge1xyXG4gIHZhciByZXN1bHQgPSBbXSwgdHlwID0gKHR5cGVvZiBvYmopWzBdLCBwcm9wO1xyXG4gIGlmIChkZXB0aCAmJiB0eXAgPT0gJ28nKSB7XHJcbiAgICBmb3IgKHByb3AgaW4gb2JqKSB7XHJcbiAgICAgIHRyeSB7IHJlc3VsdC5wdXNoKGZsYXR0ZW4ob2JqW3Byb3BdLCBkZXB0aCAtIDEpKTsgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChyZXN1bHQubGVuZ3RoID8gcmVzdWx0IDogdHlwID09ICdzJyA/IG9iaiA6IG9iaiArICdcXDAnKTtcclxufVxyXG5cclxuLy9cclxuLy8gbWl4a2V5KClcclxuLy8gTWl4ZXMgYSBzdHJpbmcgc2VlZCBpbnRvIGEga2V5IHRoYXQgaXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMsIGFuZFxyXG4vLyByZXR1cm5zIGEgc2hvcnRlbmVkIHN0cmluZyBzZWVkIHRoYXQgaXMgZXF1aXZhbGVudCB0byB0aGUgcmVzdWx0IGtleS5cclxuLy9cclxuZnVuY3Rpb24gbWl4a2V5KHNlZWQsIGtleSkge1xyXG4gIHZhciBzdHJpbmdzZWVkID0gc2VlZCArICcnLCBzbWVhciwgaiA9IDA7XHJcbiAgd2hpbGUgKGogPCBzdHJpbmdzZWVkLmxlbmd0aCkge1xyXG4gICAga2V5W21hc2sgJiBqXSA9XHJcbiAgICAgIG1hc2sgJiAoKHNtZWFyIF49IGtleVttYXNrICYgal0gKiAxOSkgKyBzdHJpbmdzZWVkLmNoYXJDb2RlQXQoaisrKSk7XHJcbiAgfVxyXG4gIHJldHVybiB0b3N0cmluZyhrZXkpO1xyXG59XHJcblxyXG4vL1xyXG4vLyBhdXRvc2VlZCgpXHJcbi8vIFJldHVybnMgYW4gb2JqZWN0IGZvciBhdXRvc2VlZGluZywgdXNpbmcgd2luZG93LmNyeXB0byBpZiBhdmFpbGFibGUuXHJcbi8vXHJcbi8qKiBAcGFyYW0ge1VpbnQ4QXJyYXk9fSBzZWVkICovXHJcbmZ1bmN0aW9uIGF1dG9zZWVkKHNlZWQpIHtcclxuICB0cnkge1xyXG4gICAgR0xPQkFMLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoc2VlZCA9IG5ldyBVaW50OEFycmF5KHdpZHRoKSk7XHJcbiAgICByZXR1cm4gdG9zdHJpbmcoc2VlZCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFsrbmV3IERhdGUsIEdMT0JBTCwgR0xPQkFMLm5hdmlnYXRvciAmJiBHTE9CQUwubmF2aWdhdG9yLnBsdWdpbnMsXHJcbiAgICAgICAgICAgIEdMT0JBTC5zY3JlZW4sIHRvc3RyaW5nKHBvb2wpXTtcclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vIHRvc3RyaW5nKClcclxuLy8gQ29udmVydHMgYW4gYXJyYXkgb2YgY2hhcmNvZGVzIHRvIGEgc3RyaW5nXHJcbi8vXHJcbmZ1bmN0aW9uIHRvc3RyaW5nKGEpIHtcclxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSgwLCBhKTtcclxufVxyXG5cclxuLy9cclxuLy8gV2hlbiBzZWVkcmFuZG9tLmpzIGlzIGxvYWRlZCwgd2UgaW1tZWRpYXRlbHkgbWl4IGEgZmV3IGJpdHNcclxuLy8gZnJvbSB0aGUgYnVpbHQtaW4gUk5HIGludG8gdGhlIGVudHJvcHkgcG9vbC4gIEJlY2F1c2Ugd2UgZG9cclxuLy8gbm90IHdhbnQgdG8gaW50ZWZlcmUgd2l0aCBkZXRlcm1pbnN0aWMgUFJORyBzdGF0ZSBsYXRlcixcclxuLy8gc2VlZHJhbmRvbSB3aWxsIG5vdCBjYWxsIE1hdGgucmFuZG9tIG9uIGl0cyBvd24gYWdhaW4gYWZ0ZXJcclxuLy8gaW5pdGlhbGl6YXRpb24uXHJcbi8vXHJcbm1peGtleShNYXRoLnJhbmRvbSgpLCBwb29sKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlkZW50aWNvbiA9IHZvaWQgMDtcbmNvbnN0IHNlZWQgPSByZXF1aXJlKFwic2VlZC1yYW5kb21cIik7XG5jb25zdCBjb21tb25qc18xID0gcmVxdWlyZShcIkBiYXNlbWVudHVuaXZlcnNlL2NvbW1vbmpzXCIpO1xuY29uc3QgZGVmYXVsdElkZW50aWNvblNldHRpbmdzID0ge1xuICAgIHNpemU6IDEwMCxcbiAgICBiYXNlU2VlZDogJycsXG4gICAgZm9udDogJ0hlbHZldGljYScsXG4gICAgZm9udFN0eWxlOiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDAuNCxcbiAgICBiYWNrZ3JvdW5kQ29sb3VyczogW1xuICAgICAgICAnIzE2YTA4NScsXG4gICAgICAgICcjMWFiYzljJyxcbiAgICAgICAgJyMyZWNjNzEnLFxuICAgICAgICAnIzM0OThkYicsXG4gICAgICAgICcjMTk3MGI5JyxcbiAgICAgICAgJyM5YjU5YjYnLFxuICAgICAgICAnI2U2N2UyMicsXG4gICAgICAgICcjZTc0YzNjJyxcbiAgICAgICAgJyNlMDM5NWInLFxuICAgIF0sXG4gICAgaW5pdGlhbHNDb2xvdXJzOiBbXG4gICAgICAgICcjZmZmZmZmJyxcbiAgICBdLFxuICAgIGluaXRpYWxzT2Zmc2V0OiBjb21tb25qc18xLnZlYygpLFxuICAgIGluaXRpYWxzQWxwaGE6IDEsXG4gICAgaW5pdGlhbHNDb21wb3NpdGVPcGVyYXRpb246ICdzb3VyY2Utb3ZlcicsXG4gICAgc3RyaXBlQ29sb3VyczogW1xuICAgICAgICAnI2YxYzQwZicsXG4gICAgXSxcbiAgICBzdHJpcGVBbHBoYTogMC4xNSxcbiAgICBzdHJpcGVDb21wb3NpdGVPcGVyYXRpb246ICdsaWdodGVyJyxcbiAgICBzdHJpcGVzOiBbMywgOF0sXG4gICAgc3RyaXBlV2lkdGg6IFswLjIsIDAuN10sXG4gICAgc3RyaXBlRGV2aWF0aW9uOiBbLTAuNSwgMC41XSxcbiAgICBjdXJ2ZUFtb3VudDogWzAuMiwgMC40XSxcbiAgICBjdXJ2ZU9mZnNldDogWzAsIDAuNV0sXG4gICAgc3RhcnRXaWR0aFNpZ246IFsncG9zaXRpdmUnLCAnbmVnYXRpdmUnXSxcbiAgICBlbmRXaWR0aFNpZ246IFsncG9zaXRpdmUnLCAnbmVnYXRpdmUnXSxcbn07XG5jb25zdCBNSU4gPSAwO1xuY29uc3QgTUFYID0gMTtcbmNvbnN0IFRBVSA9IE1hdGguUEkgKiAyO1xuY29uc3QgU0lHTl9GQUNUT1IgPSB7XG4gICAgcG9zaXRpdmU6IDEsXG4gICAgbmVnYXRpdmU6IC0xLFxufTtcbmNvbnN0IFJBRElVU19QQURESU5HX0ZBQ1RPUiA9IDI7XG5mdW5jdGlvbiBpZGVudGljb24obmFtZSwgc2V0dGluZ3MgPSB7fSkge1xuICAgIGNvbnN0IGFjdHVhbFNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdElkZW50aWNvblNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgaWYgKCFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gJ0Fub255bW91cyc7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxzID0gbmFtZVxuICAgICAgICAuc3BsaXQoL1tcXHNcXC0nXS8pXG4gICAgICAgIC5tYXAoaSA9PiBpWzBdLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICBjb25zdCBhY3R1YWxTZWVkID0gYCR7c2V0dGluZ3MuYmFzZVNlZWR9JHtuYW1lfWA7XG4gICAgc2VlZChhY3R1YWxTZWVkLCB7IGdsb2JhbDogdHJ1ZSB9KTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2FudmFzLndpZHRoID0gYWN0dWFsU2V0dGluZ3Muc2l6ZTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gYWN0dWFsU2V0dGluZ3Muc2l6ZTtcbiAgICBkcmF3KGNvbnRleHQsIGFjdHVhbFNldHRpbmdzLCBpbml0aWFscyk7XG4gICAgc2VlZC5yZXNldEdsb2JhbCgpO1xuICAgIHJldHVybiBjYW52YXM7XG59XG5leHBvcnRzLmlkZW50aWNvbiA9IGlkZW50aWNvbjtcbmZ1bmN0aW9uIGRyYXcoY29udGV4dCwgc2V0dGluZ3MsIGluaXRpYWxzKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29uc3QgY29sb3VyID0gTWF0aC5yYW5kb21JbnRCZXR3ZWVuKDAsIE1hdGgubWF4KHNldHRpbmdzLmJhY2tncm91bmRDb2xvdXJzLmxlbmd0aCwgc2V0dGluZ3Muc3RyaXBlQ29sb3Vycy5sZW5ndGgsIHNldHRpbmdzLmluaXRpYWxzQ29sb3Vycy5sZW5ndGgpIC0gMSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3Vyc1tNYXRoLmNsYW1wKGNvbG91ciwgMCwgc2V0dGluZ3MuYmFja2dyb3VuZENvbG91cnMubGVuZ3RoIC0gMSldO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgc2V0dGluZ3Muc2l6ZSwgc2V0dGluZ3Muc2l6ZSk7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBzZXR0aW5ncy5zdHJpcGVDb2xvdXJzW01hdGguY2xhbXAoY29sb3VyLCAwLCBzZXR0aW5ncy5zdHJpcGVDb2xvdXJzLmxlbmd0aCAtIDEpXTtcbiAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gc2V0dGluZ3Muc3RyaXBlQWxwaGE7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBzZXR0aW5ncy5zdHJpcGVDb21wb3NpdGVPcGVyYXRpb247XG4gICAgY29uc3QgY291bnRTdHJpcGVzID0gTWF0aC5yYW5kb21JbnRCZXR3ZWVuKHNldHRpbmdzLnN0cmlwZXNbTUlOXSwgc2V0dGluZ3Muc3RyaXBlc1tNQVhdKTtcbiAgICBsZXQgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogVEFVO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRTdHJpcGVzOyBpKyspIHtcbiAgICAgICAgZHJhd1N0cmlwZShjb250ZXh0LCBzZXR0aW5ncywgdGhldGEpO1xuICAgICAgICB0aGV0YSArPSBNYXRoLnJhbmRvbUJldHdlZW4oc2V0dGluZ3Muc3RyaXBlRGV2aWF0aW9uW01JTl0sIHNldHRpbmdzLnN0cmlwZURldmlhdGlvbltNQVhdKTtcbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgZHJhd0luaXRpYWxzKGNvbnRleHQsIHNldHRpbmdzLCBpbml0aWFscywgY29sb3VyKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIGRyYXdTdHJpcGUoY29udGV4dCwgc2V0dGluZ3MsIHQxKSB7XG4gICAgY29uc3QgczEgPSBTSUdOX0ZBQ1RPUltzZXR0aW5ncy5zdGFydFdpZHRoU2lnbi5zaHVmZmxlKClbMF1dO1xuICAgIGNvbnN0IHQyID0gdDEgKyBNYXRoLnJhbmRvbUJldHdlZW4oc2V0dGluZ3Muc3RyaXBlV2lkdGhbTUlOXSwgc2V0dGluZ3Muc3RyaXBlV2lkdGhbTUFYXSkgKiBzMTtcbiAgICBjb25zdCB0MyA9IHQxICsgTWF0aC5QSSArIE1hdGgucmFuZG9tQmV0d2VlbihzZXR0aW5ncy5jdXJ2ZU9mZnNldFtNSU5dLCBzZXR0aW5ncy5jdXJ2ZU9mZnNldFtNQVhdKTtcbiAgICBjb25zdCBzMiA9IFNJR05fRkFDVE9SW3NldHRpbmdzLmVuZFdpZHRoU2lnbi5zaHVmZmxlKClbMF1dO1xuICAgIGNvbnN0IHQ0ID0gdDMgKyBNYXRoLnJhbmRvbUJldHdlZW4oc2V0dGluZ3Muc3RyaXBlV2lkdGhbTUlOXSwgc2V0dGluZ3Muc3RyaXBlV2lkdGhbTUFYXSkgKiBzMjtcbiAgICBjb25zdCB0NSA9IHQxICsgTWF0aC5QSSAvIDI7XG4gICAgY29uc3QgY2VudGVyID0gY29tbW9uanNfMS52ZWMubXVsKGNvbW1vbmpzXzEudmVjKHNldHRpbmdzLnNpemUpLCAwLjUpO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGguc3FydChjZW50ZXIueCAqIGNlbnRlci54ICsgY2VudGVyLnkgKiBjZW50ZXIueSkgKiBSQURJVVNfUEFERElOR19GQUNUT1I7XG4gICAgY29uc3QgYTEgPSBwb2ludE9uQ2lyY2xlKGNlbnRlciwgcmFkaXVzLCB0MSk7XG4gICAgY29uc3QgYTIgPSBwb2ludE9uQ2lyY2xlKGNlbnRlciwgcmFkaXVzLCB0Mik7XG4gICAgY29uc3QgYjEgPSBwb2ludE9uQ2lyY2xlKGNlbnRlciwgcmFkaXVzLCB0Myk7XG4gICAgY29uc3QgYjIgPSBwb2ludE9uQ2lyY2xlKGNlbnRlciwgcmFkaXVzLCB0NCk7XG4gICAgY29uc3QgYyA9IHBvaW50T25DaXJjbGUoY2VudGVyLCByYWRpdXMgKiBNYXRoLnJhbmRvbUJldHdlZW4oc2V0dGluZ3MuY3VydmVBbW91bnRbTUlOXSwgc2V0dGluZ3MuY3VydmVBbW91bnRbTUFYXSksIHQ1KTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKGExLngsIGExLnkpO1xuICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjLngsIGMueSwgYjEueCwgYjEueSk7XG4gICAgY29udGV4dC5saW5lVG8oYjIueCwgYjIueSk7XG4gICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGMueCwgYy55LCBhMi54LCBhMi55KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xufVxuZnVuY3Rpb24gcG9pbnRPbkNpcmNsZShjZW50ZXIsIHJhZGl1cywgdGhldGEpIHtcbiAgICByZXR1cm4gY29tbW9uanNfMS52ZWMuYWRkKGNlbnRlciwgY29tbW9uanNfMS52ZWMocmFkaXVzICogTWF0aC5zaW4odGhldGEpLCByYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSkpKTtcbn1cbmZ1bmN0aW9uIGRyYXdJbml0aWFscyhjb250ZXh0LCBzZXR0aW5ncywgaW5pdGlhbHMsIGNvbG91ckluZGV4KSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5mb250ID0gYCR7c2V0dGluZ3MuZm9udFN0eWxlfSAke01hdGguZmxvb3Ioc2V0dGluZ3Muc2l6ZSAqIHNldHRpbmdzLmZvbnRTaXplKX1weCAke3NldHRpbmdzLmZvbnR9YDtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHNldHRpbmdzLmluaXRpYWxzQ29sb3Vyc1tNYXRoLmNsYW1wKGNvbG91ckluZGV4LCAwLCBzZXR0aW5ncy5pbml0aWFsc0NvbG91cnMubGVuZ3RoIC0gMSldO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBzZXR0aW5ncy5pbml0aWFsc0FscGhhO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gc2V0dGluZ3MuaW5pdGlhbHNDb21wb3NpdGVPcGVyYXRpb247XG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGNvbnN0IGNlbnRlciA9IGNvbW1vbmpzXzEudmVjLm11bChjb21tb25qc18xLnZlYyhzZXR0aW5ncy5zaXplKSwgMC41KTtcbiAgICBjb250ZXh0LmZpbGxUZXh0KGluaXRpYWxzLCBjZW50ZXIueCArIHNldHRpbmdzLmluaXRpYWxzT2Zmc2V0LngsIGNlbnRlci55ICsgc2V0dGluZ3MuaW5pdGlhbHNPZmZzZXQueSk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=