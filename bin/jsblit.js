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
function Vector2(x, y)
{
    this.x = x;
    this.y = y;
}

Vector2.prototype =
{
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
function Vector3(x, y, z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector3.prototype =
{
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
function Vector4(x, y, z, w)
{
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
}

Vector4.prototype =
{
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
        if (MathHelper.abs(determinant) < MathHelper.zeroTolerance)
        {
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
    if (MathHelper.abs(trace) > MathHelper.zeroTolerance)
    {
        result.w = MathHelper.sqrt(trace + 1) * 0.5;
        temp = 1.0 / (4 * result.w);
        result.x = (m.m32 - m.m23) * temp;
        result.y = (m.m13 - m.m31) * temp;
        result.z = (m.m21 - m.m12) * temp;
    }
    else
    {
        largestIndex = 0;
        if (m.m22 > m.m11)
        {
            largestIndex = 1;
            if (m.m33 > m.m22)
            {
                largestIndex = 2;
            }
        }
        else if (m.m33 > m.m11)
        {
            largestIndex = 2;
        }
       
	    switch (largestIndex)
		{
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
    
    if (t === 0.0)
    {
        return source;
    }
    if (t === 1.0)
    {
        return target;
    }
    
    cos = source.dot(target);
    angle = MathHelper.acos(cos);
    if (MathHelper.abs(angle) >= MathHelper.zeroTolerance)
    {
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
        if (MathHelper.abs(norm) > MathHelper.zeroTolerance)
        {
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
        if (lengthSquared > MathHelper.zeroTolerance)
        {
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
function Frame()
{
    this.Position = new Vector3(0, 0, 0);
    this.Rotation = Quaternion.createIdentity();
}/**
* Represents a camera that applies perspective distortion to a scene
* @constructor
*/
function PerspectiveCamera()
{
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
    * @param {Vector3} up
    */
    setUp: function (up) {
        this.up = up;
        this.setDirty();
    },
    
    /**
    * Returns the current up vecotr of the camera
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
        //this.projectionTransform = GraphicsHelper.createPerspective(this.fieldOfView,
        //                                                            this.viewport.getAspectRatio(),
        //                                                            this.viewport.getNearDistance(),
        //                                                            this.viewport.getFarDistance());
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
function Viewport(width, height, nearDistance, farDistance)
{
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
