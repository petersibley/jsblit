function Quaternion(w, x, y, z) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
}

Quaternion.fromRotationMatrix = function(m) {
}

//axis must be of unit length
Quaternion.fromAxisAngle = function(axis, angle) {

    var halfAngle = 0.5 * angle;
    var sin = MathHelper.sin(halfAngle);
    return new Quaternion(MathHelper.cos(halfAngle), axis.x * sin, axis.y * sin, axis.z * sin);
}

Quaternion.prototype = 
{
    dot: function(q)
    {
        return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
    },
    
    inverse: function() {
    
        var norm = this.w * this.w + this.x * this.x + this.y * this.y * this.z * this.z;
        if(norm > 0.0)
        {
            var inverseNorm = 1.0 / norm;
            return new Quaternion(this.w * inverseNorm,
                                  this.x * inverseNorm,
                                  this.y * inverseNorm,
                                  this.z * inverseNorm)
        }
        return new Quaternion(0.0, 0.0, 0.0, 0.0);
    },
    
    conjugate: function() {
        return new Quaternion(this.w, -this.x, -this.y, -this.z);
    },
    
    slerp: function(t, source, target) {
    
        var cos = source.dot(target);
        var angle = MathHelper.acos(cos);
        
        if(MathHelper.fabs(angle) >= MathHelper.zeroTolerance)
        {
            var sin = MathHelper.sin(angle);
            var invSin = 1.0 / sin;
            var a = MathHelper.sin((1.0 - t) * angle) * invSin;
            var b = MathHelper.sin(t * angle) * invSin;
            return source.multiplyScalar(a).add(target.multiplyScalar(b));
        }
        
        return source;
    },
    
    //Rotates a Vector3 by the quaternion
    rotateVector: function(v) {
        var m = toRotationMatrix();
        return m.multiplyVector3(v);
    },
    
    add: function(q) {
        return new Quaternion(this.w + q.w, this.x + q.x, this.y + q.y, this.z + q.z);
    },
    
    multiplyScalar: function(f, q) {
        return new Quaternion(this.w * f, this.x * f, this.y * f, this.z * f);
    },
    
    toRotationMatrix: function() {
    
        var x = 2.0 * this.x;
        var y = 2.0 * this.y;
        var z = 2.0 * this.z;
        var wx = x * this.w;
        var wy = y * this.w;
        var wz = z * this.w;
        var xx = x * this.x;
        var xy = y * this.x;
        var xz = z * this.x;
        var yy = y * this.y;
        var yz = z * this.y;
        var zz = z * this.z;
        
        return new Matrix4x4(1.0 - (yy + zz), xy - wz, xz + wy, 0,
                             xy + wz, 1.0 - (xx + zz), yz - wx, 0,
                             xz - wy, yz + wx, 1.0 - (xx + yy), 0,
                             0, 0, 0, 1);
    },
    
    // Returns the result as a Vector4, the w component is the angle
    toAxisAngle: function() {
    
        var lengthSquared = this.x * this.x + this.y * this.y + this.z * this.z;
        if(lengthSquared > MathHelper.zeroTolerance)
        {
            var inverseLength = MathHelper.invSqrt(lengthSquared);
            return new Vector4(this.x * inverseLength, this.y * inverseLength, this.z * inverseLength, 2.0 * MathHelper.acos(this.w));
        }
        return new Vector4(1, 0, 0, 0);
    }
}