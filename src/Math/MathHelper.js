/**
* The MathHelper class provides common math functions.
* @class
*/
var MathHelper = {};

/**
* A small value indicating the maximum precision used for equaliy checks
* @const
* @type {number}
*/
MathHelper.zeroTolerance = 0.000001;

/**
* PI constant
* @const
* @type {number}
*/
MathHelper.PI = 3.141592653589793238462643383279;

/**
* 180.0 divided by PI
* @const
* @type {number}
*/
MathHelper.oneEightyOverPI = 180.0 / MathHelper.PI;

/**
* PI divided by 180.0
* @const
* @type {number}
*/
MathHelper.piOverOneEighty = MathHelper.PI / 180.0;

/**
* Converts radians to degrees
* @param {number} angle An angle in degrees
* @return {number}
*/
MathHelper.degreesToRadians = function (angle) {
    return angle * MathHelper.piOverOneEighty;
};

/**
* Converts degrees to radians
* @param {number} angle An angle in radians
*/
MathHelper.radiansToDegrees = function (angle) {
    return angle * MathHelper.oneEightyOverPI; 
};

/**
* Returns a random number in the range [0, 1]
*/
MathHelper.random = function () {
    return Math.random();
};

/**
* Returns the sin of the angle parameter
* @param {number} angle in radians
* @return {number}
*/
MathHelper.sin = function (angle) {
    return Math.sin(angle);
};

/**
* Returns the asin of the angle parameter
* @param {number} angle in radians
* @return {number}
*/
MathHelper.asin = function (angle) {
    return Math.asin(angle);
};

/**
* Returns the cos of the angle parameter
* @param {number} angle in radians
* @return {number}
*/
MathHelper.cos = function (angle) {
    return Math.cos(angle);
};

/**
* Returns the acos of the angle parameter
* @param {number} angle in radians
* @return {number}
*/
MathHelper.acos = function (angle) {
    return Math.acos(angle);
};

/** Returns the tangent of the angle parameter
* @param {number} angle in radians
* @return {number}
*/
MathHelper.tan = function (angle) {
	return Math.tan(angle);
};

/** Returns the arc tangent of the angle parameter
* @param {number} angle in radians
* @return {number}
*/
MathHelper.atan = function (angle) {
	return Math.atan(angle);
};

/** Returns the arc tangent of the quotient of y/x. (angle in radians between x-axis and point (x,y) 
* @param {number} y
* @param {number} x
* @return {number}
*/
MathHelper.atan2 = function (y, x) {
	return Math.atan2(y, x);
};

/**
* Returns the square root of the input parameter
* @param {number} v input value
* @return {number}
*/
MathHelper.sqrt = function (v) {
    return Math.sqrt(v);
};

/**
* Returns the inverse square root of the input parameter
* @param {number} v input value
* @return {number}
*/
MathHelper.invSqrt = function (v) {
    return 1.0 / Math.sqrt(v);
};

/**
* Returns the absolute value of the input parameter
* @param {number} v input value
* @return {number}
*/
MathHelper.abs = function (v) {
    return Math.abs(v);
};

 /**
* Returns if the value is finite (i.e., less than POSITIVE_INFINITY and greater than NEGATIVE_INFINITY)
* @param {number} v input value
* @return {boolean} 
*/
MathHelper.isFinite = function (v) {
	return v > Number.NEGATIVE_INFINITY && v < Number.POSITIVE_INFINITY;
};

/**
* Returns the value v , clamped to [min,max] interval (so v > max would be max.)
* @param {number} v input value
* @param {number} min lower bound (inclusive) that we want to clamp v against.
* @param {number} max upper bound (inclusiveP that we want to clamp v against.
* @return {number}
*/
MathHelper.clamp = function (v, min, max) {
	return (Math.min(Math.max(v, min), max)); 
};



