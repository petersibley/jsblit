function Vector3(x, y, z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector3.prototype =
{
    dot: function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    },

    normalize: function () {
        var length = this.length();
        if (length < MathHelper.zeroTolerance) {
            return new Vector3(0.0, 0.0, 0.0);
        }

        var inverseLength = 1.0 / length;
        return new Vector3(this.x * inverseLength,
                           this.y * inverseLength,
                           this.z * inverseLength);
    },

    cross: function (v) {
        return new Vector3(this.y * v.z - this.z * v.y,
                           this.z * v.x - this.x * v.z,
                           this.x * v.y - this.y * v.x);
    },

    length: function () {
        return MathHelper.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },

    lengthSquared: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    },

    add: function (v) {
        return new Vector3(this.x + v.x,
                           this.y + v.y,
                           this.z + v.z);
    },

    subtract: function (v) {
        return new Vector3(this.x - v.x,
                           this.y - v.y,
                           this.z - v.z);
    },

    multiplyScalar: function (f) {
        return new Vector3(this.x * f,
                           this.y * f,
                           this.z * f);
    },

    equals: function (v) {
        return this.x == v.x &&
               this.y == v.y &&
               this.z == v.z;
    },
    
    toString: function () {
        return '[' + this.x + ', ' + this.y + ', ' + this.z + ']';
    }
}