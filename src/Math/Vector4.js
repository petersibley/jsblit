function Vector4(x, y, z, w)
{
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
}

Vector4.prototype =
{
    dot: function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    },

    normalize: function () {
        var length = this.length();
        if (length < MathHelper.zeroTolerance) {
            return new Vector4(0.0, 0.0, 0.0, 0.0);
        }

        var inverseLength = 1.0 / length;
        return new Vector4(this.x * inverseLength,
                           this.y * inverseLength,
                           this.z * inverseLength,
                           this.w * inverseLength);
    },

    length: function () {
        return MathHelper.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    },

    lengthSquared: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    },

    add: function (v) {
        return new Vector4(this.x + v.x,
                           this.y + v.y,
                           this.z + v.z,
                           this.w + v.w);
    },

    subtract: function (v) {
        return new Vector4(this.x - v.x,
                           this.y - v.y,
                           this.z - v.z,
                           this.w - v.w);
    },

    multiplyScalar: function (f) {
        return new Vector4(this.x * f,
                           this.y * f,
                           this.z * f,
                           this.w * f);
    },

    equals: function (v) {
        return this.x == v.x &&
               this.y == v.y &&
               this.z == v.z &&
               this.w == v.w;
    },

    toString: function () {
        return '[' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ']';
    }
}