
/**
* Creates a 4x4 matrix
* @constructor
* @param {Number} m11
* @param {Number} m12
* @param {Number} m13
* @param {Number} m14
* @param {Number} m21
* @param {Number} m22
* @param {Number} m23
* @param {Number} m24
* @param {Number} m31
* @param {Number} m32
* @param {Number} m33
* @param {Number} m34
* @param {Number} m41
* @param {Number} m42
* @param {Number} m43
* @param {Number} m44
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
* @type Matrix4x4
*/
Matrix4x4.createIdentity = function () {
    return new Matrix4x4(1, 0, 0, 0,
                         0, 1, 0, 0,
                         0, 0, 1, 0,
                         0, 0, 0, 1);
};

/**
* Returns a scaling matrix
* @param {Number} sx The x scaling factor
* @param {Number} sy The y scaling factor
* @param {Number} sz The z scaling factor
* @type Matrix4x4
*/
Matrix4x4.createScale = function (sx, sy, sz) {
    return new Matrix4x4(sx, 0,  0,  0,
                         0,  sy, 0,  0,
                         0,  0,  sz, 0,
                         0,  0,  0,  1);
};

/**
* Returns a translation matrix to be used with a column vector p = M * v
* @param {Number} tx The x translation value
* @param {Number} ty The y translation value
* @param {Number} tz The z translation value
* @type Matrix4x4
*/
Matrix4x4.createTranslate = function (tx, ty, tz) {
    return new Matrix4x4(1, 0, 0, tx,
                         0, 1, 0, ty,
                         0, 0, 1, tz,
                         0, 0, 0, 1);
};

/**
* Returns a matrix that rotates a vector around the x axis, from the origin. The rotation matrix
* is a right handed rotation, a positive angle will rotate the vector anticlockwise around the x axis
* @param {Number} angle The angle to rotate in radians
* @type Matrix4x4
*/
Matrix4x4.rotateX = function (angle) {
    return new Matrix4x4(1, 0, 0, 0,
                         0, MathHelper.cos(angle), -MathHelper.sin(angle), 0,
                         0, MathHelper.sin(angle), MathHelper.cos(angle), 0,
                         0, 0, 0, 1);
};

/**
* Returns a matrix that rotates a vector around the y axis, from the origin. The rotation matrix
* is a right handed rotation, a positive angle will rotate the vector anticlockwise around the y axis
* @param {Number} angle The angle to rotate in radians
* @type Matrix4x4
*/
Matrix4x4.rotateY = function (angle) {
    return new Matrix4x4(MathHelper.cos(angle), 0, -MathHelper.sin(angle), 0,
                         0, 1, 0, 0,
                         MathHelper.sin(angle), 0, MathHelper.cos(angle), 0,
                         0, 0, 0, 1);
};

/**
* Returns a matrix that rotates a vector around the z axis, from the origin. The rotation matrix
* is a right handed rotation, a positive angle will rotate the vector anticlockwise around the z axis
* @param {Number} angle The angle to rotate in radians
* @type Matrix4x4
*/
Matrix4x4.rotateZ = function (angle) {
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
    * @type Matrix4x4
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
    * @type Matrix4x4
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
    * @type Matrix4x4
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
    * @param {Number} f input scalar
    * @type Matrix4x4
    */
    multiplyScalar: function (f) {
        return new Matrix4x4(this.m11 * f, this.m12 * f, this.m13 * f, this.m14 * f,
                             this.m21 * f, this.m22 * f, this.m23 * f, this.m24 * f,
                             this.m31 * f, this.m32 * f, this.m33 * f, this.m34 * f,
                             this.m41 * f, this.m42 * f, this.m43 * f, this.m44 * f);
    },

    /**
    * Returns the transpose of the calling matrix
    * @type Matrix4x4
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
    * @type Vector4
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
    * @type Vector3
    */
    transformVector3: function (v) {
        return new Vector3(this.m11 * v.x + this.m12 * v.y + this.m13 * v.z,
                           this.m21 * v.x + this.m22 * v.y + this.m23 * v.z,
                           this.m31 * v.x + this.m32 * v.y + this.m33 * v.z);
    },
    
    /**
    * Returns the determinant of the calling matrix
    * @type {Number}
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
    * Returns a string containing the current state of the matrix.  Useful for debugging purposes
    * @type String
    */
    toString: function () {
        return this.m11 + ", " + this.m12 + ", " + this.m13 + ", " + this.m14 + "\n" +
               this.m21 + ", " + this.m22 + ", " + this.m23 + ", " + this.m24 + "\n" +
               this.m31 + ", " + this.m32 + ", " + this.m33 + ", " + this.m34 + "\n" +
               this.m41 + ", " + this.m42 + ", " + this.m43 + ", " + this.m44 + "\n";
    }
};

