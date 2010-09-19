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
