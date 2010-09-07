module("Math::Matrix4x4");

test("Constructor", function() {
    var m = new Matrix4x4(1,2,3,4,
                          5,6,7,8,
                          9,10,11,12,
                          13,14,15,16);
    
	equals(m.m11, 1.0, "m11 constructor");
    equals(m.m12, 2.0, "m12 constructor");
    equals(m.m13, 3.0, "m13 constructor");
    equals(m.m14, 4.0, "m14 constructor");
    equals(m.m21, 5.0, "m21 constructor");
    equals(m.m22, 6.0, "m22 constructor");
    equals(m.m23, 7.0, "m23 constructor");
    equals(m.m24, 8.0, "m24 constructor");
    equals(m.m31, 9.0, "m31 constructor");
    equals(m.m32, 10.0, "m32 constructor");
    equals(m.m33, 11.0, "m33 constructor");
    equals(m.m34, 12.0, "m34 constructor");
    equals(m.m41, 13.0, "m41 constructor");
    equals(m.m42, 14.0, "m42 constructor");
    equals(m.m43, 15.0, "m43 constructor");
    equals(m.m44, 16.0, "m44 constructor");
});

test("createIdentity", function() {
    var m = Matrix4x4.createIdentity();
    equals(m.m11, 1.0, "m11 identity");
    equals(m.m12, 0.0, "m12 identity");
    equals(m.m13, 0.0, "m13 identity");
    equals(m.m14, 0.0, "m14 identity");
    equals(m.m21, 0.0, "m21 identity");
    equals(m.m22, 1.0, "m22 identity");
    equals(m.m23, 0.0, "m23 identity");
    equals(m.m24, 0.0, "m24 identity");
    equals(m.m31, 0.0, "m31 identity");
    equals(m.m32, 0.0, "m32 identity");
    equals(m.m33, 1.0, "m33 identity");
    equals(m.m34, 0.0, "m34 identity");
    equals(m.m41, 0.0, "m41 identity");
    equals(m.m42, 0.0, "m42 identity");
    equals(m.m43, 0.0, "m43 identity");
    equals(m.m44, 1.0, "m44 identity");
});

test("createScale", function() {
    var m = Matrix4x4.createScale(4,5,6);
    equals(m.m11, 4.0, "m11 scale");
    equals(m.m12, 0.0, "m12 scale");
    equals(m.m13, 0.0, "m13 scale");
    equals(m.m14, 0.0, "m14 scale");
    equals(m.m21, 0.0, "m21 scale");
    equals(m.m22, 5.0, "m22 scale");
    equals(m.m23, 0.0, "m23 scale");
    equals(m.m24, 0.0, "m24 scale");
    equals(m.m31, 0.0, "m31 scale");
    equals(m.m32, 0.0, "m32 scale");
    equals(m.m33, 6.0, "m33 scale");
    equals(m.m34, 0.0, "m34 scale");
    equals(m.m41, 0.0, "m41 scale");
    equals(m.m42, 0.0, "m42 scale");
    equals(m.m43, 0.0, "m43 scale");
    equals(m.m44, 1.0, "m44 scale");
});

test("createTranslate", function() {
    var m = Matrix4x4.createTranslate(4,5,6);
    equals(m.m11, 1.0, "m11 translate");
    equals(m.m12, 0.0, "m12 translate");
    equals(m.m13, 0.0, "m13 translate");
    equals(m.m14, 4.0, "m14 translate");
    equals(m.m21, 0.0, "m21 translate");
    equals(m.m22, 1.0, "m22 translate");
    equals(m.m23, 0.0, "m23 translate");
    equals(m.m24, 5.0, "m24 translate");
    equals(m.m31, 0.0, "m31 translate");
    equals(m.m32, 0.0, "m32 translate");
    equals(m.m33, 1.0, "m33 translate");
    equals(m.m34, 6.0, "m34 translate");
    equals(m.m41, 0.0, "m41 translate");
    equals(m.m42, 0.0, "m42 translate");
    equals(m.m43, 0.0, "m43 translate");
    equals(m.m44, 1.0, "m44 translate");
});

test("rotateX", function() {
    var angle = MathHelper.PI / 3;
    var m = Matrix4x4.rotateX(angle);
    equals(m.m11, 1.0, "m11 rotateX");
    equals(m.m12, 0.0, "m12 rotateX");
    equals(m.m13, 0.0, "m13 rotateX");
    equals(m.m14, 0.0, "m14 rotateX");
    equals(m.m21, 0.0, "m21 rotateX");
    equals(m.m22, MathHelper.cos(angle), "m22 rotateX");
    equals(m.m23, -MathHelper.sin(angle), "m23 rotateX");
    equals(m.m24, 0.0, "m24 rotateX");
    equals(m.m31, 0.0, "m31 rotateX");
    equals(m.m32, MathHelper.sin(angle), "m32 rotateX");
    equals(m.m33, MathHelper.cos(angle), "m33 rotateX");
    equals(m.m34, 0.0, "m34 rotateX");
    equals(m.m41, 0.0, "m41 rotateX");
    equals(m.m42, 0.0, "m42 rotateX");
    equals(m.m43, 0.0, "m43 rotateX");
    equals(m.m44, 1.0, "m44 rotateX");
});

test("rotateY", function() {
    var angle = MathHelper.PI / 3;
    var m = Matrix4x4.rotateY(angle);
    equals(m.m11, MathHelper.cos(angle), "m11 rotateY");
    equals(m.m12, 0.0, "m12 rotateY");
    equals(m.m13, -MathHelper.sin(angle), "m13 rotateY");
    equals(m.m14, 0.0, "m14 rotateY");
    equals(m.m21, 0.0, "m21 rotateY");
    equals(m.m22, 1.0, "m22 rotateY");
    equals(m.m23, 0.0, "m23 rotateY");
    equals(m.m24, 0.0, "m24 rotateY");
    equals(m.m31, MathHelper.sin(angle), "m31 rotateY");
    equals(m.m32, 0.0, "m32 rotateY");
    equals(m.m33, MathHelper.cos(angle), "m33 rotateY");
    equals(m.m34, 0.0, "m34 rotateY");
    equals(m.m41, 0.0, "m41 rotateY");
    equals(m.m42, 0.0, "m42 rotateY");
    equals(m.m43, 0.0, "m43 rotateY");
    equals(m.m44, 1.0, "m44 rotateY");
});

test("rotateZ", function() {
    var angle = MathHelper.PI / 3;
    var m = Matrix4x4.rotateZ(angle);
    equals(m.m11, MathHelper.cos(angle), "m11 rotateZ");
    equals(m.m12, -MathHelper.sin(angle), "m12 rotateZ");
    equals(m.m13, 0.0, "m13 rotateZ");
    equals(m.m14, 0.0, "m14 rotateZ");
    equals(m.m21, MathHelper.sin(angle), "m21 rotateZ");
    equals(m.m22, MathHelper.cos(angle), "m22 rotateZ");
    equals(m.m23, 0.0, "m23 rotateZ");
    equals(m.m24, 0.0, "m24 rotateZ");
    equals(m.m31, 0.0, "m31 rotateZ");
    equals(m.m32, 0.0, "m32 rotateZ");
    equals(m.m33, 1.0, "m33 rotateZ");
    equals(m.m34, 0.0, "m34 rotateZ");
    equals(m.m41, 0.0, "m41 rotateZ");
    equals(m.m42, 0.0, "m42 rotateZ");
    equals(m.m43, 0.0, "m43 rotateZ");
    equals(m.m44, 1.0, "m44 rotateZ");
});

test("add", function() {
    var m1 = new Matrix4x4(-1.2,2.2,-3.4,4.5,
                           5.5,-6.5,7.5,-8.2,
                           -9.9,10.1,-11.3,12.3,
                           13.4,-14.5,15.6,-16.6);
                          
    var m2 = new Matrix4x4(-17.1,18.5,19.9,20.3,
                           21.2,22.6,-23.0,24.4,
                           25.3,-26.7,27.1,-28.5,
                           29.4,30.8,31.2,32.6);
    
    var m = m1.add(m2);
    equals(m.m11, -18.3, "m11 add");
    equals(m.m12, 20.7, "m12 add");
    equals(m.m13, 16.5, "m13 add");
    equals(m.m14, 24.8, "m14 add");
    equals(m.m21, 26.7, "m21 add");
    equals(m.m22, 16.1, "m22 add");
    equals(m.m23, -15.5, "m23 add");
    equals(m.m24, 16.2, "m24 add");
    equals(m.m31, 15.4, "m31 add");
    equals(m.m32, -16.6, "m32 add");
    equals(m.m33, 15.8, "m33 add");
    equals(m.m34, -16.2, "m34 add");
    equals(m.m41, 42.8, "m41 add");
    equals(m.m42, 16.3, "m42 add");
    equals(m.m43, 46.8, "m43 add");
    equals(m.m44, 16.0, "m44 add");
});

test("subtract", function() {
    var m1 = new Matrix4x4(-1.1,2.2,-3.3,4.5,
                           5.5,-6.5,7.5,-8.8,
                           -9.9,10.1,-11.2,12.3,
                           13.4,-14.5,15.6,-16.7);
                          
    var m2 = new Matrix4x4(-17.1,18.5,19.9,20.3,
                           21.2,22.6,-23.0,24.4,
                           25.3,-26.7,27.1,-28.5,
                           29.3,30.8,31.2,32.6);
         
    var m = m1.subtract(m2);
    equals(m.m11, 16.0, "m11 subtract");
    equals(m.m12, -16.3, "m12 subtract");
    equals(m.m13, -23.2, "m13 subtract");
    equals(m.m14, -15.8, "m14 subtract");
    equals(m.m21, -15.7, "m21 subtract");
    equals(m.m22, -29.1, "m22 subtract");
    equals(m.m23, 30.5, "m23 subtract");
    equals(m.m24, -33.2, "m24 subtract");
    equals(m.m31, -35.2, "m31 subtract");
    equals(m.m32, 36.8, "m32 subtract");
    equals(m.m33, -38.3, "m33 subtract");
    equals(m.m34, 40.8, "m34 subtract");
    equals(m.m41, -15.9, "m41 subtract");
    equals(m.m42, -45.3, "m42 subtract");
    equals(m.m43, -15.6, "m43 subtract");
    equals(m.m44, -49.3, "m44 subtract");
});

test("multiplyScalar", function() {
    var m1 = new Matrix4x4(-1.1,2.2,3.3,4.4,
                           5.5,6.6,7.7,8.8,
                           9.9,10.0,-11.1,12.2,
                           13.3,14.4,15.5,16.6);
         
    var m = m1.multiplyScalar(2.0);
    equals(m.m11, -2.2, "m11 multiplyScalar");
    equals(m.m12, 4.4, "m12 multiplyScalar");
    equals(m.m13, 6.6, "m13 multiplyScalar");
    equals(m.m14, 8.8, "m14 multiplyScalar");
    equals(m.m21, 11, "m21 multiplyScalar");
    equals(m.m22, 13.2, "m22 multiplyScalar");
    equals(m.m23, 15.4, "m23 multiplyScalar");
    equals(m.m24, 17.6, "m24 multiplyScalar");
    equals(m.m31, 19.8, "m31 multiplyScalar");
    equals(m.m32, 20, "m32 multiplyScalar");
    equals(m.m33, -22.2, "m33 multiplyScalar");
    equals(m.m34, 24.4, "m34 multiplyScalar");
    equals(m.m41, 26.6, "m41 multiplyScalar");
    equals(m.m42, 28.8, "m42 multiplyScalar");
    equals(m.m43, 31, "m43 multiplyScalar");
    equals(m.m44, 33.2, "m44 multiplyScalar");
});

test("tranpose", function() {
    var m1 = new Matrix4x4(-1.1,2.2,3.3,4.4,
                           5.5,6.6,7.7,8.8,
                           9.9,10.0,-11.1,12.2,
                           13.3,14.4,15.5,16.6);
         
    var m = m1.transpose();
    equals(m.m11, -1.1, "m11 tranpose");
    equals(m.m12, 5.5, "m12 tranpose");
    equals(m.m13, 9.9, "m13 tranpose");
    equals(m.m14, 13.3, "m14 tranpose");
    equals(m.m21, 2.2, "m21 tranpose");
    equals(m.m22, 6.6, "m22 tranpose");
    equals(m.m23, 10.0, "m23 tranpose");
    equals(m.m24, 14.4, "m24 tranpose");
    equals(m.m31, 3.3, "m31 tranpose");
    equals(m.m32, 7.7, "m32 tranpose");
    equals(m.m33, -11.1, "m33 tranpose");
    equals(m.m34, 15.5, "m34 tranpose");
    equals(m.m41, 4.4, "m41 tranpose");
    equals(m.m42, 8.8, "m42 tranpose");
    equals(m.m43, 12.2, "m43 tranpose");
    equals(m.m44, 16.6, "m44 tranpose");
});

test("determinant", function() {
    var m = new Matrix4x4(-1.1,2.2,-3.3,4.5,
                          5.5,-6.5,7.5,-8.8,
                          -9.9,10.1,-11.2,12.3,
                          13.4,-14.5,15.6,-16.7);
    equals(m.determinant(), 2.991599999999437, "determinant");
});

test("multiply", function() {
    var m1 = new Matrix4x4(-1.1,2.2,-3.3,4.5,
                           5.5,-6.5,7.5,-8.8,
                           -9.9,10.1,-11.2,12.3,
                           13.4,-14.5,15.6,-16.7);
                          
    var m2 = new Matrix4x4(-17.1,18.5,19.9,20.3,
                           21.2,22.6,-23.0,24.4,
                           25.3,-26.7,27.1,-28.5,
                           29.4,30.8,31.2,32.6);
         
    var m = m1.multiply(m2);
    equals(m.m11, 114.25999999999999, "m11 multiply");
    equals(m.m12, 256.08, "m12 multiply");
    equals(m.m13, -21.52000000000001, "m13 multiply");
    equals(m.m14, 272.1, "m14 multiply");
    equals(m.m21, -300.82000000000005, "m21 multiply");
    equals(m.m22, -516.44, "m22 multiply");
    equals(m.m23, 187.64, "m23 multiply");
    equals(m.m24, -547.58, "m24 multiply");
    equals(m.m31, 461.66999999999996, "m31 multiply");
    equals(m.m32, 722.99, "m32 multiply");
    equals(m.m33, -349.06999999999994, "m33 multiply");
    equals(m.m34, 765.65, "m34 multiply");
    equals(m.m41, -632.8399999999999, "m41 multiply");
    equals(m.m42, -1010.6800000000001, "m42 multiply");
    equals(m.m43, 501.88, "m43 multiply");
    equals(m.m44, -1070.7999999999997, "m44 multiply");
});

test("transformVector4", function() {
    var m = new Matrix4x4(-1.1,2.2,-3.3,4.5,
                          5.5,-6.5,7.5,-8.8,
                          -9.9,10.1,-11.2,12.3,
                          13.4,-14.5,15.6,-16.7);
    var v = new Vector4(1.1, 2.2, 3.3, 4.4);
    var result = m.transformVector4(v);
    equals(result.x, 12.540000000000003, "x transformVector4");
    equals(result.y, -22.220000000000006, "y transformVector4");
    equals(result.z, 28.490000000000013, "z transformVector4");
    equals(result.w,  -39.16000000000001, "w transformVector4");
});

test("transformVector3", function() {
    var m = new Matrix4x4(-1.1,2.2,-3.3,4.5,
                          5.5,-6.5,7.5,-8.8,
                          -9.9,10.1,-11.2,12.3,
                          13.4,-14.5,15.6,-16.7);
    var v = new Vector3(1.1, 2.2, 3.3);
    var result = m.transformVector3(v);
    equals(result.x, -7.259999999999998, "x transformVector4");
    equals(result.y, 16.5, "y transformVector4");
    equals(result.z, -25.629999999999992, "z transformVector4");
});
