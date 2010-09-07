/**
* The MathHelper class provides common math functions.
* @class
*/
var MathHelper = {};

/**
* A small value indicating the maximum precision used for equaliy checks
* @const
* @type {Number}
*/
MathHelper.zeroTolerance = 0.000001;

/**
* PI constant
* @const
* @type {Number}
*/
MathHelper.PI = 3.141592653589793238462643383279;

/**
* Returns the sin of the angle parameter
* @param {Number} angle in radians
* @return {Number}
*/
MathHelper.sin = function (angle) {
    return Math.sin(angle);
};

/**
* Returns the asin of the angle parameter
* @param {Number} angle in radians
* @return {Number}
*/
MathHelper.asin = function (angle) {
    return Math.asin(angle);
};

/**
* Returns the cos of the angle parameter
* @param {Number} angle in radians
* @return {Number}
*/
MathHelper.cos = function (angle) {
    return Math.cos(angle);
};

/**
* Returns the acos of the angle parameter
* @param {Number} angle in radians
* @return {Number}
*/
MathHelper.acos = function (angle) {
    return Math.acos(angle);
};

/**
* Returns the square root of the input parameter
* @param {Number} v input value
* @return {Number}
*/
MathHelper.sqrt = function (v) {
    return Math.sqrt(v);
};

/**
* Returns the inverse square root of the input parameter
* @param {Number} v input value
* @return {Number}
*/
MathHelper.invSqrt = function (v) {
    return 1.0 / Math.sqrt(v);
};

/**
* Returns the absolute value of the input parameter
* @param {Number} v input value
* @return {Number}
*/
MathHelper.abs = function (v) {
    return Math.abs(v);
};