/**
* A utility class for common jsblit functionality
* @class
*/
function Utils() {
}

//See: http://www.kevlindev.com/tutorials/javascript/inheritance/index.htm
/**
* Applys prototype inheritance to the derived class
* @param {Object} derived The derived classes constructor
* @param {Object} base The base classes constructor
*/
Utils.extend = function (derived, base) {
	
    /** 
    * @constructor
    * @ignore 
    */
    function Inheritance() {
    }
    Inheritance.prototype = base.prototype;

    derived.prototype = new Inheritance();
    derived.prototype.constructor = derived;
    derived.baseConstructor = base;
    derived.superClass = base.prototype;
};

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



/**
* A vector class representing two dimensional space
* @constructor
* @param {number} x
* @param {number} y
*/
function Vector2(x, y) {
    this.x = x;
    this.y = y;
}

Vector2.prototype = {
    /**
    * Calculates the dot product between the calling vector and parameter v
    * @param {Vector2} v input vector
    * @return {number}
    */
    dot: function (v) {
        return this.x * v.x + this.y * v.y;
    },

	/**
	* Returns a new vector that's perpendicular to this vector
	* @return {Vector2}
	*/
	perp: function () {
		return new Vector2(this.y, -this.x);
	},

    /**
    * Creates a unit length version of the vector, which still points in the same direction as the original vector
    * @return {Vector2}
    */
    normalize: function () {
        var length, inverseLength;
        
        length = this.length();
        if (length < MathHelper.zeroTolerance) {
            return new Vector2(0.0, 0.0);
        }

        inverseLength = 1.0 / length;
        return new Vector2(this.x * inverseLength,
                           this.y * inverseLength);
    },

    /**
    * Calculates the length of the vector
    * @return {number}
    */
    length: function () {
        return MathHelper.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
    * Calculates the length of the vector squared.  Useful if only a relative length
    * check is required, since this is more performant than the length() method
	* @return {number}
    */
    lengthSquared: function () {
        return this.x * this.x + this.y * this.y;
    },

    /**
    * Adds vector v to the current vector and returns the result.
    * @param {Vector2} v input vector
    * @returns {Vector2} A vector containing the addition of the two input vectors
    */
    add: function (v) {
        return new Vector2(this.x + v.x,
                           this.y + v.y);
    },

    /**
    * Subtracts vector v from the current vector and returns the result.
    * @param {Vector2} v input vector
    * @returns {Vector2} A vector containing the subtraction of the two input vectors
    */
    subtract: function (v) {
        return new Vector2(this.x - v.x,
                           this.y - v.y);
    },

    /**
    * Multiplies each element of the vector with scalar f and returns the result
    * @param {number} f a value that will be multiplied with each element of the vector
    * @return {Vector2}
    */
    multiplyScalar: function (f) {
        return new Vector2(this.x * f,
                           this.y * f);
    },

    /**
    * Checks if the calling vector is equal to parameter vector v
    * @param {Vector2} v input vector
    * @returns {boolean} A Boolean value, true if each element of the calling vector match input vector v, false otherwise
    */
    equals: function (v) {
        return this.x === v.x &&
               this.y === v.y;
    },
    
    /**
    * Returns a string containing the current state of the vector, useful for debugging purposes
    * @return {string}
    */
    toString: function () {
        return '[' + this.x + ', ' + this.y + ']';
    }
};
/**
* A vector class representing three dimensional space
* @constructor
* @param {number} x
* @param {number} y
* @param {number} z
*/
function Vector3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector3.prototype = {
    /**
    * Calculates the dot product between the calling vector and parameter v
    * @param {Vector3} v input vector
    * @return {number}
    */
    dot: function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    },

    /**
    * Creates a unit length version of the vector, which still points in the same direction as the original vector
    * @return {Vector3}
    */
    normalize: function () {
        var length, inverseLength;
        
        length = this.length();
        if (length < MathHelper.zeroTolerance) {
            return new Vector3(0.0, 0.0, 0.0);
        }

        inverseLength = 1.0 / length;
        return new Vector3(this.x * inverseLength,
                           this.y * inverseLength,
                           this.z * inverseLength);
    },

    /**
    * Calculates the cross product of the vector and vector parameter v and returns the result
    * @param {Vector3} v input vector
    * @return {Vector3}
    */
    cross: function (v) {
        return new Vector3(this.y * v.z - this.z * v.y,
                           this.z * v.x - this.x * v.z,
                           this.x * v.y - this.y * v.x);
    },

    /**
    * Calculates the length of the vector
    * @return {number}
    */
    length: function () {
        return MathHelper.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },

    /**
    * Calculates the length of the vector squared.  Useful if only a relative length
    * check is required, since this is more performant than the length() method
    * @return {number}
    */
    lengthSquared: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    },

    /**
    * Adds vector v to the current vector and returns the result.
    * @param {Vector3} v input vector
    * @returns {Vector3} A vector containing the addition of the two input vectors
    */
    add: function (v) {
        return new Vector3(this.x + v.x,
                           this.y + v.y,
                           this.z + v.z);
    },

    /**
    * Subtracts vector v from the current vector and returns the result.
    * @param {Vector3} v input vector
    * @returns {Vector3} A vector containing the subtraction of the two input vectors
    */
    subtract: function (v) {
        return new Vector3(this.x - v.x,
                           this.y - v.y,
                           this.z - v.z);
    },

    /**
    * Multiplies each element of the vector with scalar f and returns the result
    * @param {number} f a value that will be multiplied with each element of the vector
    * @return {Vector3}
    */
    multiplyScalar: function (f) {
        return new Vector3(this.x * f,
                           this.y * f,
                           this.z * f);
    },

    /**
    * Checks if the calling vector is equal to parameter vector v
    * @param {Vector3} v input vector
    * @return {boolean} A Boolean value, true if each element of the calling vector match input vector v, false otherwise
    */
    equals: function (v) {
        return this.x === v.x &&
               this.y === v.y &&
               this.z === v.z;
    },
    
    /**
    * Returns a string containing the current state of the vector, useful for debugging purposes
    * @return {string}
    */
    toString: function () {
        return '[' + this.x + ', ' + this.y + ', ' + this.z + ']';
    }
};
/**
* A vector class representing four dimensional space
* @constructor
* @param {number} x
* @param {number} y
* @param {number} z
* @param {number} w
*/
function Vector4(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
}

Vector4.prototype = {
    /**
    * Calculates the dot product between the calling vector and parameter v
    * @param {Vector4} v input vector
    * @return {number}
    */
    dot: function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    },

    /**
    * Creates a unit length version of the vector, which still points in the same direction as the original vector
    * @return {Vector4}
    */
    normalize: function () {
        var length, inverseLength;
        
        length = this.length();
        if (length < MathHelper.zeroTolerance) {
            return new Vector4(0.0, 0.0, 0.0, 0.0);
        }

        inverseLength = 1.0 / length;
        return new Vector4(this.x * inverseLength,
                           this.y * inverseLength,
                           this.z * inverseLength,
                           this.w * inverseLength);
    },

    /**
    * Calculates the length of the vector
    * @return {number}
    */
    length: function () {
        return MathHelper.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    },

    /**
    * Calculates the length of the vector squared.  Useful if only a relative length
    * check is required, since this is more performant than the length() method
    * @return {number}
    */
    lengthSquared: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    },

    /**
    * Adds vector v to the current vector and returns the result.
    * @param {Vector4} v input vector
    * @return {Vector4} A vector containing the addition of the two input vectors
    */
    add: function (v) {
        return new Vector4(this.x + v.x,
                           this.y + v.y,
                           this.z + v.z,
                           this.w + v.w);
    },

    /**
    * Subtracts vector v from the current vector and returns the result.
    * @param {Vector4} v input vector
    * @return {Vector4} A vector containing the subtraction of the two input vectors
    */
    subtract: function (v) {
        return new Vector4(this.x - v.x,
                           this.y - v.y,
                           this.z - v.z,
                           this.w - v.w);
    },

    /**
    * Multiplies each element of the vector with scalar f and returns the result
    * @param {number} f a value that will be multiplied with each element of the vector
    * @return {Vector4}
    */
    multiplyScalar: function (f) {
        return new Vector4(this.x * f,
                           this.y * f,
                           this.z * f,
                           this.w * f);
    },

    /**
    * Checks if the calling vector is equal to parameter vector v
    * @param {Vector4} v input vector
    * @return {boolean} A Boolean value, true if each element of the calling vector match input vector v, false otherwise
    */
    equals: function (v) {
        return this.x === v.x &&
               this.y === v.y &&
               this.z === v.z &&
               this.w === v.w;
    },

    /**
    * Returns a string containing the current state of the vector, useful for debugging purposes
    * @return {string}
    */
    toString: function () {
        return '[' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ']';
    }
};

/**
* Creates a 4x4 matrix
* @constructor
* @param {number} m11
* @param {number} m12
* @param {number} m13
* @param {number} m14
* @param {number} m21
* @param {number} m22
* @param {number} m23
* @param {number} m24
* @param {number} m31
* @param {number} m32
* @param {number} m33
* @param {number} m34
* @param {number} m41
* @param {number} m42
* @param {number} m43
* @param {number} m44
*/
function Matrix4x4(m11, m12, m13, m14,
                   m21, m22, m23, m24,
                   m31, m32, m33, m34,
                   m41, m42, m43, m44) {
    this.m11 = m11;
    this.m12 = m12;
    this.m13 = m13;
    this.m14 = m14;
    this.m21 = m21;
    this.m22 = m22;
    this.m23 = m23;
    this.m24 = m24;
    this.m31 = m31;
    this.m32 = m32;
    this.m33 = m33;
    this.m34 = m34;
    this.m41 = m41;
    this.m42 = m42;
    this.m43 = m43;
    this.m44 = m44;
}

/**
* Returns an identity matrix
* @return {Matrix4x4}
*/
Matrix4x4.createIdentity = function () {
    return new Matrix4x4(1, 0, 0, 0,
                         0, 1, 0, 0,
                         0, 0, 1, 0,
                         0, 0, 0, 1);
};

/**
* Returns a scaling matrix
* @param {number} sx The x scaling factor
* @param {number} sy The y scaling factor
* @param {number} sz The z scaling factor
* @return {Matrix4x4}
*/
Matrix4x4.createScale = function (sx, sy, sz) {
    return new Matrix4x4(sx, 0,  0,  0,
                         0,  sy, 0,  0,
                         0,  0,  sz, 0,
                         0,  0,  0,  1);
};

/**
* Returns a translation matrix to be used with a column vector p = M * v
* @param {number} tx The x translation value
* @param {number} ty The y translation value
* @param {number} tz The z translation value
* @return {Matrix4x4}
*/
Matrix4x4.createTranslation = function (tx, ty, tz) {
    return new Matrix4x4(1, 0, 0, tx,
                         0, 1, 0, ty,
                         0, 0, 1, tz,
                         0, 0, 0, 1);
};

/**
* Returns a matrix that rotates a vector around the x axis, from the origin. The rotation matrix
* is a right handed rotation, a positive angle will rotate the vector anticlockwise around the x axis
* @param {number} angle The angle to rotate in radians
* @return {Matrix4x4}
*/
Matrix4x4.createRotationX = function (angle) {
    return new Matrix4x4(1, 0, 0, 0,
                         0, MathHelper.cos(angle), -MathHelper.sin(angle), 0,
                         0, MathHelper.sin(angle), MathHelper.cos(angle), 0,
                         0, 0, 0, 1);
};

/**
* Returns a matrix that rotates a vector around the y axis, from the origin. The rotation matrix
* is a right handed rotation, a positive angle will rotate the vector anticlockwise around the y axis
* @param {number} angle The angle to rotate in radians
* @return {Matrix4x4}
*/
Matrix4x4.createRotationY = function (angle) {
    return new Matrix4x4(MathHelper.cos(angle), 0, -MathHelper.sin(angle), 0,
                         0, 1, 0, 0,
                         MathHelper.sin(angle), 0, MathHelper.cos(angle), 0,
                         0, 0, 0, 1);
};

/**
* Returns a matrix that rotates a vector around the z axis, from the origin. The rotation matrix
* is a right handed rotation, a positive angle will rotate the vector anticlockwise around the z axis
* @param {number} angle The angle to rotate in radians
* @return {Matrix4x4}
*/
Matrix4x4.createRotationZ = function (angle) {
    return new Matrix4x4(MathHelper.cos(angle), -MathHelper.sin(angle), 0, 0,
                         MathHelper.sin(angle), MathHelper.cos(angle), 0, 0,
                         0, 0, 1, 0,
                         0, 0, 0, 1);
};

Matrix4x4.prototype =
{
    /**
    * Adds matrix m to to the current matrix and returns the result
    * @param {Matrix4x4} m The matrix which will be added to the calling matrix
    * @return {Matrix4x4}
    */
    add: function (m) {
        return new Matrix4x4(this.m11 + m.m11, this.m12 + m.m12, this.m13 + m.m13, this.m14 + m.m14,
                             this.m21 + m.m21, this.m22 + m.m22, this.m23 + m.m23, this.m24 + m.m24,
                             this.m31 + m.m31, this.m32 + m.m32, this.m33 + m.m33, this.m34 + m.m34,
                             this.m41 + m.m41, this.m42 + m.m42, this.m43 + m.m43, this.m44 + m.m44);
    },

    /**
    * Adds matrix m to to the current matrix and returns the result
    * @param {Matrix4x4} m The matrix which will be added to the calling matrix
    * @return {Matrix4x4}
    */
    subtract: function (m) {
        return new Matrix4x4(this.m11 - m.m11, this.m12 - m.m12, this.m13 - m.m13, this.m14 - m.m14,
                             this.m21 - m.m21, this.m22 - m.m22, this.m23 - m.m23, this.m24 - m.m24,
                             this.m31 - m.m31, this.m32 - m.m32, this.m33 - m.m33, this.m34 - m.m34,
                             this.m41 - m.m41, this.m42 - m.m42, this.m43 - m.m43, this.m44 - m.m44);
    },

    /**
    * Multiples the calling matrix by matrix m and returns the result
    * @param {Matrix4x4} m input matrix
    * @return {Matrix4x4}
    */
    multiply: function (m) {
        return new Matrix4x4(this.m11 * m.m11 + this.m12 * m.m21 + this.m13 * m.m31 + this.m14 * m.m41,
                             this.m11 * m.m12 + this.m12 * m.m22 + this.m13 * m.m32 + this.m14 * m.m42,
                             this.m11 * m.m13 + this.m12 * m.m23 + this.m13 * m.m33 + this.m14 * m.m43,
                             this.m11 * m.m14 + this.m12 * m.m24 + this.m13 * m.m34 + this.m14 * m.m44,

                             this.m21 * m.m11 + this.m22 * m.m21 + this.m23 * m.m31 + this.m24 * m.m41,
                             this.m21 * m.m12 + this.m22 * m.m22 + this.m23 * m.m32 + this.m24 * m.m42,
                             this.m21 * m.m13 + this.m22 * m.m23 + this.m23 * m.m33 + this.m24 * m.m43,
                             this.m21 * m.m14 + this.m22 * m.m24 + this.m23 * m.m34 + this.m24 * m.m44,

                             this.m31 * m.m11 + this.m32 * m.m21 + this.m33 * m.m31 + this.m34 * m.m41,
                             this.m31 * m.m12 + this.m32 * m.m22 + this.m33 * m.m32 + this.m34 * m.m42,
                             this.m31 * m.m13 + this.m32 * m.m23 + this.m33 * m.m33 + this.m34 * m.m43,
                             this.m31 * m.m14 + this.m32 * m.m24 + this.m33 * m.m34 + this.m34 * m.m44,

                             this.m41 * m.m11 + this.m42 * m.m21 + this.m43 * m.m31 + this.m44 * m.m41,
                             this.m41 * m.m12 + this.m42 * m.m22 + this.m43 * m.m32 + this.m44 * m.m42,
                             this.m41 * m.m13 + this.m42 * m.m23 + this.m43 * m.m33 + this.m44 * m.m43,
                             this.m41 * m.m14 + this.m42 * m.m24 + this.m43 * m.m34 + this.m44 * m.m44);
    },

    /**
    * Multiples each element of the matrix by the scalar f and returns the result
    * @param {number} f input scalar
    * @return {Matrix4x4}
    */
    multiplyScalar: function (f) {
        return new Matrix4x4(this.m11 * f, this.m12 * f, this.m13 * f, this.m14 * f,
                             this.m21 * f, this.m22 * f, this.m23 * f, this.m24 * f,
                             this.m31 * f, this.m32 * f, this.m33 * f, this.m34 * f,
                             this.m41 * f, this.m42 * f, this.m43 * f, this.m44 * f);
    },

    /**
    * Returns the transpose of the calling matrix
    * @return {Matrix4x4}
    */
    transpose: function () {
        return new Matrix4x4(this.m11, this.m21, this.m31, this.m41,
                             this.m12, this.m22, this.m32, this.m42,
                             this.m13, this.m23, this.m33, this.m43,
                             this.m14, this.m24, this.m34, this.m44);
    },
    
    /**
    * Multiples the matrix by the column vector v
    * @param {Vector4} v input vector
    * @return {Vector4}
    */
    transformVector4: function (v) {
        return new Vector4(this.m11 * v.x + this.m12 * v.y + this.m13 * v.z + this.m14 * v.w,
                           this.m21 * v.x + this.m22 * v.y + this.m23 * v.z + this.m24 * v.w,
                           this.m31 * v.x + this.m32 * v.y + this.m33 * v.z + this.m34 * v.w,
                           this.m41 * v.x + this.m42 * v.y + this.m43 * v.z + this.m44 * v.w);
    },
    
    /**
    * Multiples the matrix by the column vector v. It is assumed the Vector3 v value
    * is equivalent to a Vector4 instance with a w value of 0
    * @param {Vector3} v input vector
    * @return {Vector3}
    */
    transformVector3: function (v) {
        return new Vector3(this.m11 * v.x + this.m12 * v.y + this.m13 * v.z,
                           this.m21 * v.x + this.m22 * v.y + this.m23 * v.z,
                           this.m31 * v.x + this.m32 * v.y + this.m33 * v.z);
    },
    
    /**
    * Returns the determinant of the calling matrix
    * @return {number}
    */
    determinant: function () {
        var a, b, c, d, e, f, g, h, i, j, k, l;
        a = this.m11 * this.m22 - this.m12 * this.m21;
        b = this.m11 * this.m23 - this.m13 * this.m21;
        c = this.m11 * this.m24 - this.m14 * this.m21;
        d = this.m12 * this.m23 - this.m13 * this.m22;
        e = this.m12 * this.m24 - this.m14 * this.m22;
        f = this.m13 * this.m24 - this.m14 * this.m23;
        g = this.m31 * this.m42 - this.m32 * this.m41;
        h = this.m31 * this.m43 - this.m33 * this.m41;
        i = this.m31 * this.m44 - this.m34 * this.m41;
        j = this.m32 * this.m43 - this.m33 * this.m42;
        k = this.m32 * this.m44 - this.m34 * this.m42;
        l = this.m33 * this.m44 - this.m34 * this.m43;
        return a * l - b * k + c * j + d * i - e * h + f * g;
    },
    
    /**
    * Returns the inverse of the calling matrix.  If the matrix cannot be inverted
    * the the identity matrix is returned.
    * @return {Matrix4x4}
    */
    inverse: function () {
        var a, b, c, d, e, f, g, h, i, j, k, l, determinant, invD, 
            m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44;
            
        a = this.m11 * this.m22 - this.m12 * this.m21;
        b = this.m11 * this.m23 - this.m13 * this.m21;
        c = this.m11 * this.m24 - this.m14 * this.m21;
        d = this.m12 * this.m23 - this.m13 * this.m22;
        e = this.m12 * this.m24 - this.m14 * this.m22;
        f = this.m13 * this.m24 - this.m14 * this.m23;
        g = this.m31 * this.m42 - this.m32 * this.m41;
        h = this.m31 * this.m43 - this.m33 * this.m41;
        i = this.m31 * this.m44 - this.m34 * this.m41;
        j = this.m32 * this.m43 - this.m33 * this.m42;
        k = this.m32 * this.m44 - this.m34 * this.m42;
        l = this.m33 * this.m44 - this.m34 * this.m43;
        determinant =  a * l - b * k + c * j + d * i - e * h + f * g;
        if (MathHelper.abs(determinant) < MathHelper.zeroTolerance) {
            return Matrix4x4.createIdentity();
        }
        
        m11 = this.m22 * l - this.m23 * k + this.m24 * j;
        m12 = -this.m12 * l + this.m13 * k - this.m14 * j;
        m13 = this.m42 * f - this.m43 * e + this.m44 * d;
        m14 = -this.m32 * f + this.m33 * e - this.m34 * d;
        
        m21 = -this.m21 * l + this.m23 * i - this.m24 * h;
        m22 = this.m11 * l - this.m13 * i + this.m14 * h;
        m23 = -this.m41 * f + this.m43 * c - this.m44 * b;
        m24 = this.m31 * f - this.m33 * c + this.m34 * b;
        
        m31 = this.m21 * k - this.m22 * i + this.m24 * g;
        m32 = -this.m11 * k + this.m12 * i - this.m14 * g;
        m33 = this.m41 * e - this.m42 * c + this.m44 * a;
        m34 = -this.m31 * e + this.m32 * c - this.m34 * a;
        
        m41 = -this.m21 * j + this.m22 * h - this.m23 * g;
        m42 = this.m11 * j - this.m12 * h + this.m13 * g;
        m43 = -this.m41 * d + this.m42 * b - this.m43 * a;
        m44 = this.m31 * d - this.m32 * b + this.m33 * a;
        invD = 1.0 / determinant;
        return new Matrix4x4(m11 * invD, m12 * invD, m13 * invD, m14 * invD,
                             m21 * invD, m22 * invD, m23 * invD, m24 * invD,
                             m31 * invD, m32 * invD, m33 * invD, m34 * invD,
                             m41 * invD, m42 * invD, m43 * invD, m44 * invD);
    },

    /**
    * Returns a string containing the current state of the matrix.  Useful for debugging purposes
    * @return {string}
    */
    toString: function () {
        return this.m11 + ", " + this.m12 + ", " + this.m13 + ", " + this.m14 + "\n" +
               this.m21 + ", " + this.m22 + ", " + this.m23 + ", " + this.m24 + "\n" +
               this.m31 + ", " + this.m32 + ", " + this.m33 + ", " + this.m34 + "\n" +
               this.m41 + ", " + this.m42 + ", " + this.m43 + ", " + this.m44 + "\n";
    }
};
//For more information I would recommend "Essential Mathematics For Games", Van Verth, Bishop

/**
* Quaternion
* @constructor
*/
function Quaternion(w, x, y, z) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
}

/**
* Returns the identity quaternion.
* @return {Quaternion}
*/
Quaternion.createIdentity = function () {
    return new Quaternion(1, 0, 0, 0);
};

//TODO drop in matrix3x3 here

/**
* Creates a Quaternion from a rotation matrix
* @param {Matrix4x4} m rotation matrix  
* @return {Quaternion} 
*/
Quaternion.fromRotationMatrix = function (m) {
    //See: http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

	/*jslint onevar: false */
	//JSLint and I don't agree, as type annotions mean we need multiple vars.

	/** @type {number} */
    var trace; 

	/** @type {number} */
	var temp; 

	/** @type {Quaternion} */
	var result;

	/** @type {number} */
	var largestIndex;
    
    
    result = new Quaternion(0, 0, 0, 0);
    trace = m.m11 + m.m22 + m.m33;
    if (MathHelper.abs(trace) > MathHelper.zeroTolerance) {
        result.w = MathHelper.sqrt(trace + 1) * 0.5;
        temp = 1.0 / (4 * result.w);
        result.x = (m.m32 - m.m23) * temp;
        result.y = (m.m13 - m.m31) * temp;
        result.z = (m.m21 - m.m12) * temp;
    }
    else {
        largestIndex = 0;
        if (m.m22 > m.m11) {
            largestIndex = 1;
            if (m.m33 > m.m22) {
                largestIndex = 2;
            }
        }
        else if (m.m33 > m.m11) {
            largestIndex = 2;
        }
       
	    switch (largestIndex) {
        case 0:
            result.x = 0.5 * MathHelper.sqrt(m.m11 - m.m22 - m.m33 + 1);
            temp = 1.0 / (4 * result.x);
            result.w = (m.m32 - m.m23) * temp;
            result.y = (m.m12 + m.m21) * temp;
            result.z = (m.m13 + m.m31) * temp;
            break;
        case 1:
            result.y = 0.5 * MathHelper.sqrt(m.m22 - m.m11 - m.m33 + 1);
            temp = 1.0 / (4 * result.y);
            result.w = (m.m13 - m.m31) * temp;
            result.x = (m.m12 + m.m21) * temp;
            result.z = (m.m23 + m.m32) * temp;
            break;
        case 2:
            result.z = 0.5 * MathHelper.sqrt(m.m33 - m.m11 - m.m22 + 1);
            temp = 1.0 / (4 * result.z);
            result.w = (m.m21 - m.m12) * temp;
            result.x = (m.m13 + m.m31) * temp;
            result.y = (m.m32 + m.m23) * temp;
            break;
		}
    }
    return result;
};

/**
* Creates a Quaternion from an axis and an angle
* @param {Vector3} axis The rotation axis, must be a unit vector
* @param {number} angle An angle in radians.  A positive angle will rotate anticlockwise around the axis
* @return {Quaternion}
*/
Quaternion.fromAxisAngle = function (axis, angle) {
    var halfAngle, s;
    halfAngle = 0.5 * angle;
    s = MathHelper.sin(halfAngle);
    return new Quaternion(MathHelper.cos(halfAngle), axis.x * s, axis.y * s, axis.z * s);
};

/**
* Returns a quaternion that has been slerped between source and target by t amount
* @param {number} t A value between 0.0 and 1.0 inclusive
* @param {Quaternion} source The starting quaternion value
* @param {Quaternion} target The target quaternion value
* @return {Quaternion}
*/
Quaternion.slerp = function (t, source, target) {
    var cos, angle, sin, invSin, a, b;
    
    if (t === 0.0) {
        return source;
    }
    if (t === 1.0) {
        return target;
    }
    
    cos = source.dot(target);
    angle = MathHelper.acos(cos);
    if (MathHelper.abs(angle) >= MathHelper.zeroTolerance) {
        sin = MathHelper.sin(angle);
        invSin = 1.0 / sin;
        a = MathHelper.sin((1.0 - t) * angle) * invSin;
        b = MathHelper.sin(t * angle) * invSin;
        return source.multiplyScalar(a).add(target.multiplyScalar(b));
    }
    
    return source;
};

Quaternion.prototype = 
{
    /**
    * Returns the dot product of two Quaternions
    * @param {Quaternion} q input quaternion
    * @return {number}
    */
    dot: function (q) {
        return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
    },
    
    /**
    * Calculates the length of the Quaternion
    * @return {number}
    */
    length: function () {
        return MathHelper.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
    },
    
    /**
    * Creates a unit length version of the Quaternion
    * @return {Quaternion}
    */
    normalize: function () {
        var length, inverseLength;
        
        length = this.length();
        if (length < MathHelper.zeroTolerance) {
            return new Quaternion(0.0, 0.0, 0.0, 0.0);
        }

        inverseLength = 1.0 / length;
        return new Quaternion(this.w * inverseLength,
                              this.x * inverseLength,
                              this.y * inverseLength,
                              this.z * inverseLength);
    },
    
    /**
    * Returns the inverse of the calling quaternion
    * @return {Quaternion} If the Quaternion cannot be inversed, a Quaternion with x,y,z,w == 0.0 is returned
    */
    inverse: function () {
        var norm, invNorm;
        
        norm = this.w * this.w + this.x * this.x + this.y * this.y * this.z * this.z;
        if (MathHelper.abs(norm) > MathHelper.zeroTolerance) {
            invNorm = 1.0 / norm;
            return new Quaternion(this.w * invNorm,
                                  -this.x * invNorm,
                                  -this.y * invNorm,
                                  -this.z * invNorm);
        }
        return new Quaternion(0.0, 0.0, 0.0, 0.0);
    },
    
    /**
    * Returns the conjugate of the quaternion
    * @return {Quaternion}
    */
    conjugate: function () {
        return new Quaternion(this.w, -this.x, -this.y, -this.z);
    },
    
    /**
    * Applies the quaternion rotation to the input vector and returns the result
    * @param {Vector3} v input vector to be rotated
    * @return {Vector3} The rotated vector
    */
    transform: function (v) {
        
        //See Bishop, Van Verth (make sure to look at the errata)
        var p, d, c;
        d = 2.0 * (this.x * v.x + this.y * v.y + this.z * v.z);
        c = 2.0 * this.w;
        p = c * this.w - 1.0;
        return new Vector3(p * v.x + d * this.x + c * (this.y * v.z - this.z * v.y),
                           p * v.y + d * this.y + c * (this.z * v.x - this.x * v.z),
                           p * v.z + d * this.z + c * (this.x * v.y - this.y * v.x));
    },
    
    add: function (q) {
        return new Quaternion(this.w + q.w, this.x + q.x, this.y + q.y, this.z + q.z);
    },
    
    /**
    * Returns a Quaternion representing the result of multiplying the calling Quaternion by Quaternion q
    * like q2 * q1 where q1 is applied before q2
    * @param {Quaternion} q input quaternion
    * @return {Quaternion}
    */
    multiply: function (q) {
        return new Quaternion(this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z,
                              this.y * q.z - this.z * q.y + this.w * q.x + q.w * this.x,
                              this.z * q.x - this.x * q.z + this.w * q.y + q.w * this.y,
                              this.x * q.y - this.y * q.x + this.w * q.z + q.w * this.z);
    },
    
    /**
    * Multiplies each element in the Quaternion by the scalar f
    * @param {number} f input scalar
    * @return {Quaternion}
    */
    multiplyScalar: function (f) {
        return new Quaternion(this.w * f, this.x * f, this.y * f, this.z * f);
    },
    
    /**
    * Converts the quaternion to a rotation matrix
    * @return {Matrix4x4}
    */
    toRotationMatrix: function () {
        var x, y, z, wx, wy, wz, xx, xy, xz, yy, yz, zz;
        x = 2.0 * this.x;
        y = 2.0 * this.y;
        z = 2.0 * this.z;
        wx = x * this.w;
        wy = y * this.w;
        wz = z * this.w;
        xx = x * this.x;
        xy = y * this.x;
        xz = z * this.x;
        yy = y * this.y;
        yz = z * this.y;
        zz = z * this.z;
        
        //TODO: When Matrix3x3 exists change this to a 3x3 instead
        return new Matrix4x4(1.0 - (yy + zz), xy - wz, xz + wy, 0,
                             xy + wz, 1.0 - (xx + zz), yz - wx, 0,
                             xz - wy, yz + wx, 1.0 - (xx + yy), 0,
                             0, 0, 0, 1);
    },
    
    /**
    * Converts the Quaternion to an axis and an angle
    * @return {Vector4} Containing the values x,y,z,angle where angle is in radians
    */
    toAxisAngle: function () {
        var lengthSquared, inverseLength;
        
        lengthSquared = this.x * this.x + this.y * this.y + this.z * this.z;
        if (lengthSquared > MathHelper.zeroTolerance) {
            inverseLength = MathHelper.invSqrt(lengthSquared);
            return new Vector4(this.x * inverseLength, this.y * inverseLength, this.z * inverseLength, 2.0 * MathHelper.acos(this.w));
        }
        return new Vector4(1, 0, 0, 0);
    },
    
    /**
    * Returns a string containing the current state of the Quaternion
    * @return {string}
    */
    toString: function () {
        return '[' + this.w + ', ' + this.x + ', ' + this.y + ', ' + this.z + ']';
    }
};
/**
* A user defined color
* @param {number} r Red value with range [0, 255]
* @param {number} g Green value with range [0, 255]
* @param {number} b Blue value with range [0, 255]
* @param {number} a Alpha value with range [0, 255]
* @constructor
*/
function Color(r, g, b, a) {
    /**
    * The red component, with range [0, 255]
    * @type number
    */
    this.r = r;
    
    /**
    * The green component, with range [0, 255]
    * @type number
    */
    this.g = g;
    
    /**
    * The blue component, with range [0, 255]
    * @type number
    */
    this.b = b;
    
    /**
    * The alpha component, with range [0, 255]
    * @type number
    */
    this.a = a;
    
    //TODO: abstract sl, webgl, canvas
    this.formatString = 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + (this.a / 255) + ')';
}

/**
* White color
* @type Color
*/
Color.white = new Color(255, 255, 255, 255);

/**
* Black color
* @type color
*/
Color.black = new Color(0, 0, 0, 255);

/**
* Red color
* @type color
*/
Color.red = new Color(255, 0, 0, 255);

/**
* Green color
* @type color
*/
Color.green = new Color(0, 255, 0, 255);

/**
* Blue color
* @type color
*/
Color.blue = new Color(0, 0, 255, 255);

/**
* Provides common graphics helper function
* @class
*/
var GraphicsHelper = {};

/**
* Creates a right handed look at matrix.  This is with +Z coming
* towards the viewer, +X is to the right and +Y is up
* @param {Vector3} position The position of the eye
* @param {Vector3} look The look direction
* @param {Vector3} up The up direction
* @return {Matrix4x4}
*/
GraphicsHelper.createLookAtRH = function (position, look, up) {
    var rotatedPos, viewSide, viewUp, result;
    
    look = look.normalize();
    up = up.normalize();
    viewUp = up.subtract(look.multiplyScalar(up.dot(look))).normalize();
    viewSide = look.cross(viewUp);
    
    result = Matrix4x4.createIdentity();
    result.m11 = viewSide.x;
    result.m12 = viewSide.y;
    result.m13 = viewSide.z;
    result.m21 = viewUp.x;
    result.m22 = viewUp.y;
    result.m23 = viewUp.z;
    result.m31 = -look.x;
    result.m32 = -look.y;
    result.m33 = -look.z;
    rotatedPos = result.transformVector3(position);
    result.m14 = -rotatedPos.x;
    result.m24 = -rotatedPos.y;
    result.m34 = -rotatedPos.z;
    return result;
};

/**
* Creates a perspective projection matrix for use with column vectors.
* The near and far planes are mapped to [-1, 1] to match opengl conventions
* @param {number} verticalFov The vertical field of view
* @param {number} aspectRatio The aspect ratio of the viewport
* @param {number} near The distance to the near plane
* @param {number} far The distance to the far plane
* @return {Matrix4x4}
*/
GraphicsHelper.createPerspective = function (verticalFov,
                                             aspectRatio,
                                             near,
                                             far) {
    var d;
    d = 1.0 / MathHelper.tan(verticalFov / 2.0);
    return new Matrix4x4(d / aspectRatio, 0, 0, 0,
                         0, d, 0, 0,
                         0, 0, (near + far) / (near - far), (2 * near * far) / (near - far),
                         0, 0, -1, 0);
};/**
* A Frame represents a translate and rotation of an orthonormal basis
* @constructor
*/
function Frame() {
    /**
    * The position of the frame
    * @type Vector3
    */
    this.position = new Vector3(0, 0, 0);
    
    /**
    * The rotation applied to the frame
    * @type Quaternion
    */
    this.rotation = Quaternion.createIdentity();
}/**
* Represents a camera that applies perspective distortion to a scene
* @constructor
*/
function PerspectiveCamera() {
    this.viewport = null;
    this.position = new Vector3(0, 0, 0);
    this.up = new Vector3(0, 1, 0);
    this.look = new Vector3(0, 0, -1);
    this.fieldOfView = MathHelper.PI / 2;
    this.viewTransform = Matrix4x4.createIdentity();
    this.projectionTransform = Matrix4x4.createIdentity();
    this.isDirty = true;
}

PerspectiveCamera.prototype = {

    /**
    * When called marks the camera as being dirty
    */
    setDirty: function () {
        this.isDirty = true;
    },
    
    /**
    * Sets the viewport on the camera
    * @param {Viewport} viewport
    */
    setViewport: function (viewport) {
        this.viewport = viewport;
        this.setDirty();
    },
    
    /**
    * Returns the viewport associated with the camera
    * @return {Viewport}
    */
    getViewport: function () {
        return this.viewport;
    },
    
    /**
    * Sets the position of the camera
    * @param {Vector3} position
    */
    setPosition: function (position) {
        this.position = position;
        this.setDirty();
    },
    
    /**
    * Returns the position of the camera
    * @return {Vector3}
    */
    getPosition: function () {
        return this.position;
    },
    
    /**
    * Sets the vertical field of view of the camera
    * @param {number} fieldOfView Angle in radians
    */
    setVerticalFov: function (fieldOfView) {
        this.fieldOfView = fieldOfView;
        this.setDirty();
    },
    
    /**
    * Returns the vertical field of view of the camera
    * @return {number}
    */
    getVerticalFov: function () {
        return this.fieldOfView;
    },
    
    /**
    * Sets the look direction of the camera
    * @param {Vector3} look A unit look vector
    */
    setLook: function (look) {
        this.look = look;
        this.setDirty();
    },
    
    /**
    * Returns the current look vector of the camera
    */
    getLook: function () {
        return this.look;
    },
    
    /**
    * Sets the up direction of the camera
    * @param {Vector3} up A unit up vector
    */
    setUp: function (up) {
        this.up = up;
        this.setDirty();
    },
    
    /**
    * Returns the current up vector of the camera
    * @return {Vector3}
    */
    getUp: function () {
        return this.up;
    },
    
    /**
    * Returns the current view transform
    * @return {Matrix4x4}
    */
    getViewTransform: function () {
        if (this.isDirty) {
            this.updateTransforms();
        }
        return this.viewTransform;
    },
    
    /**
    * Returns the current projection transform
    * @return {Matrix4x4}
    */
    getProjectionTransform: function () {
        if (this.isDirty) {
            this.updateTransforms();
        }
        return this.projectionTransform;
    },
    
    /**
    * When called updates the view and projection transforms based on the current state of the system
    */
    updateTransforms: function () {
        this.viewTransform = GraphicsHelper.createLookAtRH(this.position, this.look, this.up);
        this.projectionTransform = GraphicsHelper.createPerspective(this.fieldOfView,
                                                                    this.viewport.getAspectRatio(),
                                                                    this.viewport.getNearDistance(),
                                                                    this.viewport.getFarDistance());
        this.isDirty = false;
    }
};
/**
* Represents a viewport into the 3D scene
* @param {number} width The width of the viewport in pixels
* @param {number} height The height of the viewport in pixels
* @param {number} nearDistance The distance to the near plane
* @param {number} farDistance The distance to the far plane
* @constructor
*/
function Viewport(width, height, nearDistance, farDistance) {
    this.width = width;
    this.height = height;
    this.aspectRatio = this.width / this.height;
    this.nearDistance = nearDistance;
    this.farDistance = farDistance;
}

Viewport.prototype = {
    
    /**
    * Returns the width of the viewport
    * @return {number}
    */
    getWidth: function () {
        return this.width;
    },
    
    /**
    * Returns the height of the viewport in pixels
    * @return {number}
    */
    getHeight: function () {
        return this.height;
    },
    
    /**
    * Returns the aspect ratio of the viewport
    * @return {number}
    */
    getAspectRatio: function () {
        return this.aspectRatio;
    },
    
    /**
    * Returns the near plane distance
    * @return {number}
    */
    getNearDistance: function () {
        return this.nearDistance;
    },
    
    /**
    * Returns the far plane distance
    * @return {number}
    */
    getFarDistance: function () {
        return this.farDistance;
    }
};
/**
* Enumeration of the various draw orders that can be applied when
* drawing a batch of 2D sprites
* @constructor
*/
function SpriteSortOrder() {
}

/**
* Sprites will be drawn in the order the draw calls were made
* @type number
*/
SpriteSortOrder.inOrder = 0;

/**
 * Sprites will be drawn in back to front order. Sprites with smaller
 * depth values will be drawn before sprites with larger depth values
*/
SpriteSortOrder.backToFront = 1;

/**
* Sprites will be drawn in front to back order.  Sprites with larger
* depth values will be drawn before sprites with smaller depth values
*/
SpriteSortOrder.frontToBack = 2;


//Texture - i.e. sort by texture

/**
* Specifies the different draw options that can be specified when
* drawing a 2D sprite
* @constructor
*/
function SpriteDrawOptions() {
    /**
    * The depth value, in the range [-1, 1].  Larger depths indicate
    * the item will be drawn before items with smaller depths.
    * @type number
    */
    this.depth = 0;
    
    /**
    * Specifies a rectangle in the source texture to draw. If not
    * specified it is assumed the entire texture should be used 
    * as the source
    * @type Rect2D
    */
    this.sourceRect = null;
    
    /**
    * Specifies where the sprite will be draw in the 
    * render target x,y, width, height
    * @type Rect2D
    */
    this.destinationRect = null;
    
    /**
    * Specifies the location where the top left of the image
    * will be drawn from.  If the destinationRect property is
    * set this value is ignored
    * @type Vector2
    */
    this.position = new Vector2(0, 0);
    
    /**
    * The x and y scaling factor to be applied to the sprite
    * @type Vector2
    */
    this.scale = new Vector2(1, 1);
    
    /**
    * Specifies the rotation in radians.  A positive value will rotate
    * the sprite in a clockwise direction. Tip: To convert degrees to
    * radians use the MathHelper.degreesToRadians function.
    */
    this.rotation = 0.0;
    
    /**
    * The origin of the rotation relative to the render target
    * @type Vector2
    */
    this.origin = new Vector2(0, 0);

	/**
	* Specifies the alpha value to apply to the sprite. A value of 0 represents fully
    * transparent. A value of 1.0 represents a fully opaque sprite.  Defaults to 1.0
	* @type number
	*/
	this.alpha = 1.0;
}/**
* Defines a 2D rectangle
* @param {number} x The x position of the top left of the rectangle
* @param {number} y The y position of the top left of the rectangle
* @param {number} width The width of the rectangle
* @param {number} height The height of the rectangle
* @constructor
*/
function Rect2D(x, y, width, height) {
    /**
    * The x position of the top left of the rectangle
    * @type number
    */
    this.x = x;
    
    /**
    * The y position of the top left of the rectangle
    * @type number
    */
    this.y = y;
    
    /**
    * The width of the rectangle
    * @type number
    */
    this.width = width;
    
    /**
    * The height of the rectangle
    * @type number
    */
    this.height = height;
}

Rect2D.prototype = {
};/**
* An abstraction of the graphical hardware in a users computer
* @param {JsBlitWindow} jsBlitWindow The window the content is displayed in
* @constructor
*/
function GraphicsDevice(jsBlitWindow) {
    
    //TODO: Get rid of the js window rubbish from here, shouldn't be needed
    this.jsBlitWindow = jsBlitWindow;
    this.renderTarget = null;
}

GraphicsDevice.prototype = {
    
    /**
    * Returns the current render target
    * @return {RenderTarget}
    */
    getRenderTarget: function () {
        return this.renderTarget;
    },
    
    /**
    * Creates a new render target for content to be rendered into
    * @param {number} width The width of the render target
    * @param {number} height The height of the render target
    * @return {RenderTarget}
    */
    createRenderTarget: function (width, height) {
    },
    
    /**
    * When called creates a sprite batch
    * @return {SpriteBatch}
    */
    createSpriteBatch: function () {
    },
    
    /**
    * Sets the current render target
    * @param {RenderTarget} renderTarget
    */
    setRenderTarget: function (renderTarget) {
    },
    
    /**
    * Clears the contents of the current render target with the specified color
    * @param {Color} color
    */
    clear: function (color) {
    }
};/**
* Represents a two dimensional texture
* @param {number} width
* @param {number} height
* @constructor
*/
function Texture2D(width, height) {

    /**
    * The height of the texture
    * @type number
    */
    this.height = height;
    
    /**
    * The width of the texture
    * @type number
    */
    this.width = width;
    
    //TODO: Remove with platform abstraction
    this.platformData = null;
}/**
* A render target represents a surface that can be drawn onto
* @param {number} width
* @param {number} height
* @constructor
*/
function RenderTarget(width, height) {

    /**
    * The width of the render target
    * @type number
    */
    this.width = width;
    
    /**
    * The height of the render target
    * @type number
    */
    this.height = height;
}/**
* Used to draw sprites onto a render target
* @param {GraphicsDevice} graphicsDevice
* @constructor
*/
function SpriteBatch(graphicsDevice) {
    this.sortOrder = SpriteSortOrder.inOrder;
    this.restoreState = true;
    this.graphicsDevice = graphicsDevice;
}

SpriteBatch.prototype = {

    /**
    * Called before drawing any sprites to the render target
    * @param {SpriteSortOrder} sortOrder
    * @param {boolean} restoreState - if true then any state modified by the draw calls
    *                  will be restored at the end of the draw calls
    */
    begin: function (sortOrder, restoreState) {
    },
    
    /**
    * Draws a sprite into the render target with the specified draw options
    * @param {Texture2D} texture The texture containing the sprite
    * @param {SpriteDrawOptions} drawOptions The options to use to draw the sprite. Note: Do
    * not reuse drawOptions instances for multiple draw calls if you change properties of the
    * drawOptions instance, since these instances are not copied by just referenced from the
    * sprite batch class.  Sharing one drawOption instance across multiple draw calls is fine
    * as long as all draw calls have the same values.
    */
    draw: function (texture, drawOptions) {
    },
    
    /**
    * Signals the end of a batch or sprite rendering
    */
    end: function () {
    }
};/**
* Represents a request for a texture load.
* @param {string} uri The uri of the image source
* @param {Object} token A user defined token that is returned in the TextureLoadResponse
* @param {Object} loadCompletedDelegate An object that has a method that has the 
*                 following signature void loadTextureCompleted(TextureLoadResponse response)
* @constructor
*/
function TextureLoadRequest(uri, token, loadCompletedDelegate) {

    /**
    * URI of texture to load
    * @type string
    */
    this.uri = uri;
    
    /**
    * User defined token, will be returned in the TextureLoadResponse object
    * @type Object
    */
    this.token = token;
    
    /**
    * Delegate class that has a signature loadTextureCompleted(TextureLoadResponse response)
    */
    this.loadCompletedDelegate = loadCompletedDelegate;
}/**
* Represents the response from an async texture load request
* @param {Texture2D} texture
* @param {Object} token A user defined token passed into the TextureLoadRequest instance
* @param {Object} error
* @constructor
*/
function TextureLoadResponse(texture, token, error) {

    /**
    * The loaded image.  If an error has occurred this field is undefined
    * @type Texture2D
    */
    this.texture = texture;
    
    /**
    * A user defined token, passed into the TextureLoadRequest instance
    * @type Object
    */
    this.token = token;
    
    /**
    * If an error occurs during load this error field is populated, 
    * otherwise it is set to null.  There are currently no fields
    * available in this object, just check for it being non null
    * @type Object
    */
    this.error = error;
}
/**
* Represents the content loading system for app assets
* @constructor
*/
function Content() {
}

Content.prototype = {

    /**
    * Loads a texture asyncronously from the content system at the specified location
    * @param {TextureLoadRequest} request Request parameters
    */
    loadTextureAsync: function (request) {
    }
};/**
* Represents time within the context of a running application
* @constructor
*/
function AppTime() {
    this.multiplier = 1;
    this.seconds = 0;
    this.startTime = (new Date()).getTime();
}

AppTime.prototype = {

    /**
    * Allows a caller to speed up or slow down the app time, useful for debugging
    * animation issues. For example specifying a value of 0.5 would slow down time by a half
    * @param {number} multiplier
    */
    setMultiplier: function (multiplier) {
        this.multiplier = multiplier;
    },
    
    /**
    * When called updates the AppTime instance to reflect
    * the current time
    */
    update: function () {
        var now = (new Date()).getTime();
        this.seconds = (now - this.startTime) / 1000 * this.multiplier;
    },
    
    /**
    * Returns the current app time. This is a number that is monotonically increasing
    * @return {number}
    */
    getSeconds: function () {
        return this.seconds;
    }
};/**
* Contains the current mouse state of the application
* @constructor
*/
function MouseState() {
}/**
* Contains the current keyboard state of the application
* @constructor
*/
function KeyboardState(keyCode) {

    //TODO: Handle multiple keys, bit mask, how work in browser?
    
    /**
    * The current key code, if no key is pressed this is null
    * @type number
    */
    this.keyCode = keyCode;
}//Some global variables needed for setInverval 'this' scope massaging
var JsBlitWindowGlobalInstances = [];

/** @ignore */
function JsBlitWindowCallMainLoop(id) {
    JsBlitWindowGlobalInstances[id].mainLoop();
}

/**
* The JsBlitWindow class is responsible for capturing user
* input for the JsBlitApplication
* @param {string} id A unique id for the window
* @param {number} width The width of the window
* @param {number} height The height of the window
* @param {Object} delegate A delegate that implements all of the JsBlitWindow
* @param {GraphicsDevice} graphicsDevice The graphics device which renders the scene
* callbacks.  TODO: List
* @constructor
*/
function JsBlitWindow(id, width, height, delegate, graphicsDevice, content) {

	/**
    * A unique id for the window
    * @type {string}
    */
    this.id = id;
    
    /**
    * The width of the window
    * @type {number}
    */
    this.width = width;
    
    /**
    * The height of the window
    * @type {number}
    */
    this.height = height;
    
    this.content = content;
    this.graphicsDevice = graphicsDevice;
    this.delegate = delegate;
	this.currentKeyCode = null;
	this.appTime = new AppTime();
    this.frameRate = 10;
    this.keyboardState = new KeyboardState(null);
    this.mouseState = new MouseState();
    this.mainLoopId = -1;
        
    //Some jiggery pokery for setInterval 'this' scope resolution
    JsBlitWindowGlobalInstances[this.id] = this;
}

JsBlitWindow.prototype = {
    
    /**
    * Returns the graphics device associated with the app
    * @return {GraphicsDevice}
    */
    getGraphicsDevice: function () {
        return this.graphicsDevice;
    },
    
    /**
    * Sets the maximum animation frame rate
    * @param {number} frameRate For example 30 means 30 frames per second
    */
    setFrameRate: function (frameRate) {
        this.frameRate = frameRate;
    },
    
    /**
    * When called signals the app to start rendering
    */
    startRendering: function () {
    
        //setInterval will set the wrong scope if we directly
        //try to call this.mainLoop, so need to call with the
        //correct scope.
        /*jslint browser:true */
        this.mainLoopId = setInterval('JsBlitWindowCallMainLoop("' + this.id + '");', 
                                      1000 / this.frameRate);
    },
    
    /**
    * When called signals the app to stop rendering
    */
    stopRendering: function () {
        /*jslint browser:true */
        clearInterval(this.mainLoopId);
    },
    
       /**
    * The main game loop of the app
    * @ignore
    */
    mainLoop: function () {
            
        //Updates the current time
        this.appTime.update();
        
        //At some point these could be in seperate threads or 
        //call frequency, best to split them up
        
        //TODO: Mouse input
        
        this.keyboardState.keyCode = this.getKeyCode();
        this.delegate.update(this.graphicsDevice,
                             this.appTime,
                             this.mouseState,
                             this.keyboardState);
        this.delegate.render(this.graphicsDevice, this.appTime);
    },
    
    /**
    * Returns the current key code, if no key is pressed null is returned
    * @return {number}
    */
    getKeyCode: function () {
		return this.currentKeyCode;
    },
    
	/** @ignore */
    setKeyCode: function (keyCode) {
		this.currentKeyCode = keyCode;
    },
    
    //TODO: Change this name to onLoad
	/** @ignore */
    onLoaded: function () {
		this.delegate.onLoaded(this);
    }
};/**
* Represents the content loading system for app assets
* @constructor
* @extends Content
* @ignore
*/
function ContentCV() {
}
Utils.extend(ContentCV, Content);

/**
* Loads a texture asyncronously from the content system at the specified location
* @param {TextureLoadRequest} request Request parameters
*/
ContentCV.prototype.loadTextureAsync = function (request) {
        
    /*jslint browser:true */
    var img = document.createElement('Image');
    
    /** @ignore */
    img.onload = function () {
    
        //Create a texture, associate underlying HTML image element (could also be SL / webgl texture etc)
        var texture = new Texture2D(img.width, img.height);
        texture.platformData = img;
        
        var response = new TextureLoadResponse(texture, request.token, null);
        request.loadCompletedDelegate.loadTextureCompleted(response);
    };
    
    /** @ignore */
    img.onerror = function () {
        request.loadCompletedDelegate.loadTextureCompleted(new TextureLoadResponse(null, request.token, {}));
    };
    
    img.src = request.uri;
};/*global RenderTargetCV, SpriteBatchCV */

/**
* An abstraction of the graphical hardware in a users computer
* @param {JsBlitWindow} jsBlitWindow The window the content is displayed in
* @constructor
* @extends GraphicsDevice
* @ignore
*/
function GraphicsDeviceCV(jsBlitWindow) {
    
    GraphicsDeviceCV.baseConstructor.call(this, jsBlitWindow);
    this.renderContext2D = null;
}
Utils.extend(GraphicsDeviceCV, GraphicsDevice);

/**
* Creates a new render target for content to be rendered into
* @param {number} width The width of the render target
* @param {number} height The height of the render target
*/
GraphicsDeviceCV.prototype.createRenderTarget = function (width, height) {
    return new RenderTargetCV(width, height);
};

/**
* When called creates a sprite batch
* @return {SpriteBatch}
*/
GraphicsDeviceCV.prototype.createSpriteBatch = function () {
	return new SpriteBatchCV(this);
};
    
/**
* Sets the current render target
* @param {RenderTarget} renderTarget
*/
GraphicsDeviceCV.prototype.setRenderTarget = function (renderTarget) {
    
	//TODO: Allow multiple calls
    if (this.renderTarget !== null) {
		throw 'Multiple setRenderTarget calls not supported';
    }
        
    this.renderTarget = renderTarget;
    this.renderContext2D = this.renderTarget.platformData.getContext('2d');
        
    this.jsBlitWindow.platformData.appendChild(this.renderTarget.platformData);
};
    
/**
* Clears the contents of the current render target with the specified color
* @param {Color} color
*/
GraphicsDeviceCV.prototype.clear = function (color) {
        
    this.renderContext2D.fillStyle = color.formatString;
    this.renderContext2D.fillRect(0, 0, this.renderTarget.width, this.renderTarget.height);
};
    
GraphicsDeviceCV.prototype.drawSprites = function (restoreState, textures, drawOptions) {
        
    var index, currentTexture, currentOptions, scale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, sRect, dRect, rotation, origin;
    if (restoreState) {
        this.renderContext2D.save();
    }
    
    /*jslint plusplus:false */
    for (index = 0; index < textures.length; ++index) {
        currentOptions = drawOptions[index];
		currentTexture = textures[currentOptions.spriteBatchTextureIndex];
        sRect = currentOptions.sourceRect;
        if (sRect === null) {
            sx = sy = 0;
            sWidth = currentTexture.width;
            sHeight = currentTexture.height;
        }
        else {
            sx = sRect.x;
            sy = sRect.y;
            sWidth = sRect.width;
            sHeight = sRect.height;
        }

        dRect = currentOptions.destinationRect;
        if (dRect === null) {
            dx = currentOptions.position.x;
            dy = currentOptions.position.y;
            dWidth = sWidth;
            dHeight = sHeight;
        }
        else {
            dx = dRect.x;
            dy = dRect.y;
            dWidth = dRect.width;
            dHeight = dRect.height;
        }
     
        //TODO: Performant?
        this.renderContext2D.save();
        
        rotation = currentOptions.rotation;
        if (rotation !== null) {
            origin = currentOptions.origin;
            this.renderContext2D.translate(dx + origin.x, dy + origin.y);
            this.renderContext2D.rotate(rotation);
            
            dx = -origin.x;
            dy = -origin.y;
        }
        
        scale = currentOptions.scale;
        if (scale !== null) {
            this.renderContext2D.scale(scale.x, scale.y);
        }

		this.renderContext2D.globalAlpha = currentOptions.alpha;
        this.renderContext2D.drawImage(currentTexture.platformData,
                                       sx, sy, sWidth, sHeight,
                                       dx, dy, dWidth, dHeight);
               
        this.renderContext2D.restore();
    }
    
    if (restoreState) {
        this.renderContext2D.restore();
    }
};/**
* A render target represents a surface that can be drawn onto
* @param {number} width
* @param {number} height
* @constructor
* @extends RenderTarget
* @ignore
*/
function RenderTargetCV(width, height) {

	RenderTargetCV.baseConstructor.call(this, width, height);
	
    /*jslint browser:true */
    this.platformData = document.createElement('Canvas');
    this.platformData.width = this.width;
    this.platformData.height = this.height;
}
Utils.extend(RenderTargetCV, RenderTarget);/**
* Used to draw sprites onto a render target
* @param {GraphicsDevice} graphicsDevice
* @constructor
* @extends SpriteBatch
* @ignore
*/
function SpriteBatchCV(graphicsDevice) {

	SpriteBatchCV.baseConstructor.call(this, graphicsDevice);

    this.textures = [];
    this.drawOptions = [];
}

/** @ignore */
Utils.extend(SpriteBatchCV, SpriteBatch);

/** @ignore */
SpriteBatchCV.frontToBackSort = function (a, b) { 
	return b.depth - a.depth;
};

/** @ignore */
SpriteBatchCV.backToFrontSort = function (a, b) { 
	return a.depth - b.depth;
};

/**
* @ignore
* Called before drawing any sprites to the render target
* @param {SpriteSortOrder} sortOrder
* @param {boolean} restoreState - if true then any state modified by the draw calls
*                  will be restored at the end of the draw calls
* @ignore
*/
SpriteBatchCV.prototype.begin = function (sortOrder, restoreState) {
	this.sortOrder = sortOrder;
	this.restoreState = restoreState;
	this.textures.length = 0;
	this.drawOptions.length = 0;
};
    
/**
* Draws a sprite into the render target with the specified draw options
* @param {Texture2D} texture The texture containing the sprite
* @param {SpriteDrawOptions} drawOptions The options to use to draw the sprite. Note: Do
* not reuse drawOptions instances for multiple draw calls if you change properties of the
* drawOptions instance, since these instances are not copied by just referenced from the
* sprite batch class.  Sharing one drawOption instance across multiple draw calls is fine
* as long as all draw calls have the same values.
* @ignore
*/
SpriteBatchCV.prototype.draw = function (texture, drawOptions) {
    this.textures.push(texture);
    this.drawOptions.push(drawOptions);

	//Is this evil or acceptable?  Need an index into the textures
	//so that if the drawOptions is sorted we know which texture 
	//should be associated with it.  
	drawOptions.spriteBatchTextureIndex = this.textures.length - 1;
};
    
/**
* Signals the end of a batch or sprite rendering
* @ignore
*/
SpriteBatchCV.prototype.end = function () {
    
    //TODO: Be smarter with texture sort

    if (this.sortOrder === SpriteSortOrder.frontToBack) {
        this.drawOptions.sort(SpriteBatch.frontToBackSort);
    }
    else if (this.sortOrder === SpriteSortOrder.backToFront) {
        this.drawOptions.sort(SpriteBatch.backToFrontSort);
    }

    this.graphicsDevice.drawSprites(this.restoreState, this.textures, this.drawOptions);
};//Globals needed for 'this' massaging with events
var JsBlitWindowCVEvents = [];

/** @ignore */
function JsBlitWindowCVOnKeyDown(event) {
    var key;
    
    /*jslint forin:false */
    for (key in JsBlitWindowCVEvents) {
    
        //jslint really wants us to do this
        if (true) {
            JsBlitWindowCVEvents[key].onKeyDown(event);
        }
    }
}

/** @ignore */
function JsBlitWindowCVOnKeyUp(event) {
    var key;
    
    /*jslint forin:false */
    for (key in JsBlitWindowCVEvents) {
    
        //jslint really wants this
        if (true) {
            JsBlitWindowCVEvents[key].onKeyUp(event);
        }
    }
}

/** @ignore */
function JsBlitWindowCVOnLoad(windowId) {
	JsBlitWindowCVEvents[windowId].onLoaded();
}

/**
* The JsBlitWindow class is responsible for capturing user
* input for the JsBlitApplication
* @param {string} id A unique id for the window
* @param {number} width The width of the window
* @param {number} height The height of the window
* @param {Object} delegate A delegate that handles all of the JsBlitWindowCV callbacks
* @constructor
* @extends JsBlitWindow
* @ignore
*/
function JsBlitWindowCV(id, width, height, delegate) {

    JsBlitWindowCV.baseConstructor.call(this, id, width, height, delegate, new GraphicsDeviceCV(this), new ContentCV());
    
    this.platformData = document.createElement('div');
    this.platformData.style.width = this.width;
    this.platformData.style.height = this.height;
    this.platformData.tabIndex = 0;
 
    JsBlitWindowCVEvents[this.id] = this;
    this.platformData.onkeydown = JsBlitWindowCVOnKeyDown;    
    this.platformData.onkeyup = JsBlitWindowCVOnKeyUp;
    
    //Simulate a delay incase user is newing up this object and expecting other
    //state to be ready in the loaded event, which might not be the case if we 
    //raise the loaded event right here and the rest of the calling function has
    //not had the opportunity to complete
    setTimeout('JsBlitWindowCVOnLoad("' + this.id + '")', 100);
}
Utils.extend(JsBlitWindowCV, JsBlitWindow);

/**
* @ignore
*/
JsBlitWindowCV.prototype.onKeyDown = function (event) {
	this.currentKeyCode = event.which;
};
    
/**
* @ignore
*/
JsBlitWindowCV.prototype.onKeyUp = function (event) {
	this.currentKeyCode = null;
};/*global GraphicsDeviceSL, ContentSL */

var JsBlitWindowSLGlobalInstances = [];

/** @ignore */
function JsBlitWindowPluginLoaded(sender) {
	var host = sender.getHost();
	JsBlitWindowSLGlobalInstances[host.InitParams.split('=')[1]].slLoaded(host.Content.graphicsDevice,
																		  host.Content.content);
}

/** @ignore */
function JsBlitWindowSLOnKeyDown(windowId, keyCode) {
	JsBlitWindowSLGlobalInstances[windowId].onKeyDown(keyCode);
}

/** @ignore */
function JsBlitWindowSLOnKeyUp(windowId, keyCode) {
	JsBlitWindowSLGlobalInstances[windowId].onKeyUp(keyCode);
}

/**
* The JsBlitWindowSL class is responsible for capturing user
* input for the JsBlitApplication
* @param {string} id A unique id for the window
* @param {number} width The width of the window
* @param {number} height The height of the window
* @param {Object} delegate A delegate that handles all of the JsBlitWindowCV callbacks
* @param {string} runtimePath A path to the location of the JsBlit.xap file (including JsBlit.xap in the name)
* @constructor
* @extends JsBlitWindow
* @ignore
*/
function JsBlitWindowSL(id, width, height, delegate, runtimePath) {
        
    //This is the underlying Silverlight representation of the graphics device
    this.proxyGraphicsDevice = null;
    
	JsBlitWindowSL.baseConstructor.call(this, id, width, height, delegate, new GraphicsDeviceSL(this), new ContentSL());
	JsBlitWindowSLGlobalInstances[this.id] = this;
	this.platformData = document.createElement('div');

	//jslint doesn't seem to like multiline strings using \ so concatentate strings
	this.platformData.innerHTML = '<object data="data:application/x-silverlight," type="application/x-silverlight-2" width="' + width + '" height="' + height + '">' +
										'<param name="source" value="' + runtimePath + '"/>' +
										'<param name="onLoad" value="JsBlitWindowPluginLoaded" />' +
										'<param name="initParams" value="id=' + this.id + '" />' +
										'<param name="background" value="white" />' +
										'<param name="minRuntimeVersion" value="2.0.31005.0" />' +
										'<param name="autoUpgrade" value="true" />' +
										'<param name="maxFrameRate" value="30" />' +
										'<param name="enableHtmlAccess" value="true" />' +
										'<a href="http://go.microsoft.com/fwlink/?LinkID=124807" style="text-decoration: none;">' +
										'<img src="http://go.microsoft.com/fwlink/?LinkId=108181" alt="Get Microsoft Silverlight" style="border-style: none"/>' +
										'</a>' +
										'</object>' +
									'<iframe style="visibility:hidden;height:0;width:0;border:0px"></iframe>';
}
Utils.extend(JsBlitWindowSL, JsBlitWindow);  

JsBlitWindowSL.prototype.slLoaded = function (graphicsDevice, content) {

	//TODO: Jut create graphics device here? Cleaner?
	this.graphicsDevice.setProxy(graphicsDevice);
	this.content.setProxy(content);
	this.onLoaded();
};

JsBlitWindowSL.prototype.onKeyDown = function (keyCode) {
	this.setKeyCode(keyCode);
};

JsBlitWindowSL.prototype.onKeyUp = function (keyCode) {
	this.setKeyCode(null);
};/** @ignore
* Represents the content loading system for app assets
* @constructor
* @extends Content
*/
function ContentSL() {
	this.proxy = null;
}
Utils.extend(ContentSL, Content);

/** @ignore */
ContentSL.prototype.setProxy = function (proxy) {
	this.proxy = proxy;
};

/** @ignore */
ContentSL.prototype.loadTextureAsync = function (request) {
	this.proxy.loadTextureAsync(request.uri, request, this);
};

/** @ignore */
ContentSL.prototype.loadTextureCompleted = function (textureId, width, height, token, error) {
	var texture = new Texture2D(width, height);
	texture.platformData = textureId;
	token.loadCompletedDelegate.loadTextureCompleted(new TextureLoadResponse(texture, token.token, error));
};/*global RenderTargetSL, SpriteBatchSL */

/**
* An abstraction of the graphical hardware in a users computer
* @param {JsBlitWindow} jsBlitWindow The window the content is displayed in
* @constructor
* @extends GraphicsDevice
* @ignore
*/
function GraphicsDeviceSL(jsBlitWindow) {
    
    GraphicsDeviceSL.baseConstructor.call(this, jsBlitWindow);
    this.proxy = null;
}
Utils.extend(GraphicsDeviceSL, GraphicsDevice);

GraphicsDeviceSL.prototype.setProxy = function (graphicsDeviceProxy) {
	this.proxy = graphicsDeviceProxy;
};

/**
* Creates a new render target for content to be rendered into
* @param {number} width The width of the render target
* @param {number} height The height of the render target
*/
GraphicsDeviceSL.prototype.createRenderTarget = function (width, height) {
    return new RenderTargetSL(this.proxy, width, height);
};

/**
* When called creates a sprite batch
* @return {SpriteBatch}
*/
GraphicsDeviceSL.prototype.createSpriteBatch = function () {
	return new SpriteBatchSL(this);
};

/**
* Sets the current render target
* @param {RenderTarget} renderTarget
*/
GraphicsDeviceSL.prototype.setRenderTarget = function (renderTarget) {
    
	//TODO: Allow multiple calls
    if (this.renderTarget !== null) {
		throw 'Multiple setRenderTarget calls not supported';
    }
        
    this.renderTarget = renderTarget;
    this.proxy.setRenderTarget(renderTarget.runtimeId);
};
    
/**
* Clears the contents of the current render target with the specified color
* @param {Color} color
*/
GraphicsDeviceSL.prototype.clear = function (color) {
        
	this.proxy.clear(this.renderTarget.runtimeId, color.r, color.g, color.b, color.a);
};

GraphicsDeviceSL.prototype.drawSprites = function (restoreState, commands) {
        
	this.proxy.drawSprites(this.renderTarget.runtimeId, commands);
};/**
* A render target represents a surface that can be drawn onto
* @param {number} width
* @param {number} height
* @constructor
* @extends RenderTarget
* @ignore
*/
function RenderTargetSL(deviceProxy, width, height) {

	RenderTargetSL.baseConstructor.call(this, width, height);
	
	//Creates a render target in the SL runtime and returns a unique id to it
	this.runtimeId = deviceProxy.createRenderTarget(width, height);
}

Utils.extend(RenderTargetSL, RenderTarget);

//TODO: Need to have a release

/**
* Used to draw sprites onto a render target
* @param {GraphicsDevice} graphicsDevice
* @constructor
* @extends SpriteBatch
* @ignore
*/
function SpriteBatchSL(graphicsDevice) {

	SpriteBatchSL.baseConstructor.call(this, graphicsDevice);
    
    //List of sprites and their draw commands
    this.textures = [];
    this.drawOptions = [];
}
Utils.extend(SpriteBatchSL, SpriteBatch);

SpriteBatchSL.frontToBackSort = function (a, b) { 
	return b.depth - a.depth;
};

SpriteBatchSL.backToFrontSort = function (a, b) { 
	return a.depth - b.depth;
};

/**
* Called before drawing any sprites to the render target
* @param {SpriteSortOrder} sortOrder
* @param {boolean} restoreState - if true then any state modified by the draw calls
*                  will be restored at the end of the draw calls
*/
SpriteBatchSL.prototype.begin = function (sortOrder, restoreState) {
	this.sortOrder = sortOrder;
	this.restoreState = restoreState;
    this.textures.length = 0;
    this.drawOptions.length = 0;
};
    
/**
* Draws a sprite into the render target with the specified draw options
* @param {Texture2D} texture The texture containing the sprite
* @param {SpriteDrawOptions} drawOptions The options to use to draw the sprite. Note: Do
* not reuse drawOptions instances for multiple draw calls if you change properties of the
* drawOptions instance, since these instances are not copied by just referenced from the
* sprite batch class.  Sharing one drawOption instance across multiple draw calls is fine
* as long as all draw calls have the same values.
*/
SpriteBatchSL.prototype.draw = function (texture, drawOptions) {
    this.textures.push(texture);
    this.drawOptions.push(drawOptions);

	//Is this evil or acceptable?  Need an index into the textures
	//so that if the drawOptions is sorted we know which texture 
	//should be associated with it.  
	drawOptions.spriteBatchTextureIndex = this.textures.length - 1;
};
    
/**
* Signals the end of a batch or sprite rendering
*/
SpriteBatchSL.prototype.end = function () {
    
    var commands, i, currentOption, rotation;
    
    //TODO: Be smarter with texture sort

	//TODO: Sort is not working in Firefox
    if (this.sortOrder === SpriteSortOrder.frontToBack) {
        this.drawOptions.sort(SpriteBatch.frontToBackSort);
    }
    else if (this.sortOrder === SpriteSortOrder.backToFront) {
        this.drawOptions.sort(SpriteBatch.backToFrontSort);
    }

	commands = '';
	for (i = 0; i < this.drawOptions.length; ++i) {
		currentOption = this.drawOptions[i];
		
		rotation = currentOption.rotation;
		if (rotation === null) {
			rotation = 0;
		}
		
		commands += this.textures[currentOption.spriteBatchTextureIndex].platformData + ',' + 
		            currentOption.position.x + ',' + currentOption.position.y + ',' +
		            currentOption.scale.x + ',' + currentOption.scale.y + ',' +
					rotation + ',' + 
					currentOption.alpha + ',' +
					currentOption.origin.x + ',' + currentOption.origin.y;
		            
		if (i < this.drawOptions.length - 1) {
			commands += ',';
		}
	}
    this.graphicsDevice.drawSprites(this.restoreState, commands);
};
