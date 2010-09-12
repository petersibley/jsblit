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
