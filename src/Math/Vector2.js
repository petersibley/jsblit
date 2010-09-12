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
