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
