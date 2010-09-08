/**
* A vector class representing two dimensional space
* @constructor
* @param {Number} x
* @param {Number} y
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
    * @type Number
    */
    dot: function (v) {
        return this.x * v.x + this.y * v.y;
    },

	/**
	* Returns a new vector that's perpendicular to this vector
	* @type Vector2
	*/
	perp: function () {
		return new Vector2(this.y, -this.x);
	},

    /**
    * Creates a unit length version of the vector, which still points in the same direction as the original vector
    * @type Vector2
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
    * @type Number
    */
    length: function () {
        return MathHelper.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
    * Calculates the length of the vector squared.  Useful if only a relative length
    * check is required, since this is more performant than the length() method
    */
    lengthSquared: function () {
        return this.x * this.x + this.y * this.y;
    },

    /**
    * Adds vector v to the current vector and returns the result.
    * @param {Vector2} v input vector
    * @returns A vector containing the addition of the two input vectors
    * @type Vector2
    */
    add: function (v) {
        return new Vector2(this.x + v.x,
                           this.y + v.y);
    },

    /**
    * Subtracts vector v from the current vector and returns the result.
    * @param {Vector2} v input vector
    * @returns A vector containing the subtraction of the two input vectors
    * @type Vector2
    */
    subtract: function (v) {
        return new Vector2(this.x - v.x,
                           this.y - v.y);
    },

    /**
    * Multiplies each element of the vector with scalar f and returns the result
    * @param {Number} f a value that will be multiplied with each element of the vector
    * @type Vector2
    */
    multiplyScalar: function (f) {
        return new Vector2(this.x * f,
                           this.y * f);
    },

    /**
    * Checks if the calling vector is equal to parameter vector v
    * @param {Vector2} v input vector
    * @return A Boolean value, true if each element of the calling vector match input vector v, false otherwise
    * @type Boolean
    */
    equals: function (v) {
        return this.x === v.x &&
               this.y === v.y;
    },
    
    /**
    * Returns a string containing the current state of the vector, useful for debugging purposes
    * @type String
    */
    toString: function () {
        return '[' + this.x + ', ' + this.y + ']';
    }
};
