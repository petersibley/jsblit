module("Math::Quaternion");

test("Constructor", function() {
    var q = new Quaternion(1.1,2.2,3.3,4.4);
	equals(q.w, 1.1, "w");
    equals(q.x, 2.2, "x");
    equals(q.y, 3.3, "y");
    equals(q.z, 4.4, "z");
});

test("createIdentity", function() {
    var q = Quaternion.createIdentity();
    equals(q.w, 1, "w");
    equals(q.x, 0, "x");
    equals(q.y, 0, "y");
    equals(q.z, 0, "z");
};

test("fromRotationMatrix", function() {
    var m = Matrix4x4.createRotationX(MathHelper.PI / 2);
    var q = Quaternion.fromRotationMatrix(m);
    var v = new Vector3(0,1,0);
    var v2 = q.transform(v);
    
    ok(MathHelper.abs(v2.x - 0) <= MathHelper.zeroTolerance, "x1");
    ok(MathHelper.abs(v2.y - 0) <= MathHelper.zeroTolerance, "y1");
    ok(MathHelper.abs(v2.z - 1) <= MathHelper.zeroTolerance, "z1");
    
    m = Matrix4x4.createRotationY(MathHelper.PI / 2);
    q = Quaternion.fromRotationMatrix(m);
    v = new Vector3(1,0,0);
    v2 = q.transform(v);
    ok(MathHelper.abs(v2.x - 0) <= MathHelper.zeroTolerance, "x2");
    ok(MathHelper.abs(v2.y - 0) <= MathHelper.zeroTolerance, "y2");
    ok(MathHelper.abs(v2.z - 1) <= MathHelper.zeroTolerance, "z2");
    
    m = Matrix4x4.createRotationZ(MathHelper.PI / 2);
    q = Quaternion.fromRotationMatrix(m);
    v = new Vector3(0,1,0);
    v2 = q.transform(v);
    ok(MathHelper.abs(v2.x - -1) <= MathHelper.zeroTolerance, "x3");
    ok(MathHelper.abs(v2.y - 0) <= MathHelper.zeroTolerance, "y3");
    ok(MathHelper.abs(v2.z - 0) <= MathHelper.zeroTolerance, "z3");
});

test("fromAxisAngle", function() {
    var v = new Vector3(1.1, 2.2, 3.3);
    v = v.normalize();
    
    var q = Quaternion.fromAxisAngle(v, MathHelper.PI / 3);
    equals(q.w, 0.8660254037844387, "w");
    equals(q.x, 0.1336306209562122, "x");
    equals(q.y, 0.2672612419124244, "y");
    equals(q.z, 0.40089186286863654, "z");
});

test("dot", function() {
    var q1 = new Quaternion(1.1, -2.2, 3.3, -4.4);
    var q2 = new Quaternion(5.5, 6.6, -7.7, 8.8);
    var d = q1.dot(q2);
    equals(d, -72.6, "d");
});

test("inverse", function() {

    var axis = new Vector3(1,0,0);
    var q = Quaternion.fromAxisAngle(axis, (MathHelper.PI / 2.0));
    var v = new Vector3(0,1,0);
    var v2 = q.transform(v);
    
    var qInv = q.inverse();
    v2 = qInv.transform(v2);
    ok(MathHelper.abs(v2.x - 0) <= MathHelper.zeroTolerance, "x1");
    ok(MathHelper.abs(v2.y - 1) <= MathHelper.zeroTolerance, "y1");
    ok(MathHelper.abs(v2.z - 0) <= MathHelper.zeroTolerance, "z1");
});

test("conjugate", function() {
    var q1 = new Quaternion(-4.4, 1.1,-2.2,3.3);
    var q = q1.conjugate();
    
	equals(q.w, -4.4, "w");
    equals(q.x, -1.1, "x");
    equals(q.y, 2.2, "y");
    equals(q.z, -3.3, "z");
});

test("slerp", function() {
    var qSource = Quaternion.fromAxisAngle(new Vector3(1,0,0), 0);
    var qTarget = Quaternion.fromAxisAngle(new Vector3(3,5,9), MathHelper.PI / 3);
    var q = Quaternion.slerp(0.56, qSource, qTarget); 
    equals(q.w, 0.9573194975320675, "w");
    equals(q.x, 0.8670953908334149, "x");
    equals(q.y, 1.445158984722358, "y");
    equals(q.z, 2.6012861725002447, "z");
    
    q = Quaternion.slerp(0, qSource, qTarget); 
    equals(q.w, qSource.w, "w");
    equals(q.x, qSource.x, "x");
    equals(q.y, qSource.y, "y");
    equals(q.z, qSource.z, "z");
    
    q = Quaternion.slerp(1, qSource, qTarget); 
    equals(q.w, qTarget.w, "w");
    equals(q.x, qTarget.x, "x");
    equals(q.y, qTarget.y, "y");
    equals(q.z, qTarget.z, "z");
});

test("add", function() {
    var q1 = new Quaternion(1.1, -2.2, 3.3, -4.4);
    var q2 = new Quaternion(3.5, 9.6, -2.7, 5.8);
    var q = q1.add(q2);
    equals(q.w, 4.6, "w");
    equals(q.x, 7.3999999999999995, "x");
    equals(q.y, 0.5999999999999996, "y");
    equals(q.z, 1.3999999999999995, "z");
});

test("length", function() {
    var q1 = new Quaternion(-4.4, 1.1,-2.2,3.3);
    
	ok(MathHelper.abs(q1.length() - MathHelper.sqrt(-4.4 * -4.4 + 1.1 * 1.1 + -2.2 * -2.2 + 3.3 * 3.3)) <= MathHelper.zeroTolerance);
});

test("normalize", function() {
    var q1 = new Quaternion(-4.4, 1.1,-2.2,3.3);
    var q = q1.normalize();
    equals(q.w, -0.7302967433402214, "w");
    equals(q.x, 0.18257418583505536, "x");
    equals(q.y, -0.3651483716701107, "y");
    equals(q.z, 0.547722557505166, "z");
});

test("transform", function() {
    var axis = new Vector3(1,0,0);
    var q = Quaternion.fromAxisAngle(axis, (MathHelper.PI / 2.0));
    var v = new Vector3(0,1,0);
    var v2 = q.transform(v);
    ok(MathHelper.abs(v2.x - 0) <= MathHelper.zeroTolerance, "x1");
    ok(MathHelper.abs(v2.y - 0) <= MathHelper.zeroTolerance, "y1");
    ok(MathHelper.abs(v2.z - 1) <= MathHelper.zeroTolerance, "z1");
    
    axis = new Vector3(0,1,0);
    q = Quaternion.fromAxisAngle(axis, (MathHelper.PI / 2.0));
    v = new Vector3(1,0,0);
    v2 = q.transform(v);
    ok(MathHelper.abs(v2.x - 0) <= MathHelper.zeroTolerance, "x2");
    ok(MathHelper.abs(v2.y - 0) <= MathHelper.zeroTolerance, "y2");
    ok(MathHelper.abs(v2.z - -1) <= MathHelper.zeroTolerance, "z2");
    
    axis = new Vector3(0,0,-1);
    q = Quaternion.fromAxisAngle(axis, (MathHelper.PI / 2.0));
    v = new Vector3(0,1,0);
    v2 = q.transform(v);
    ok(MathHelper.abs(v2.x - 1) <= MathHelper.zeroTolerance, "x3");
    ok(MathHelper.abs(v2.y - 0) <= MathHelper.zeroTolerance, "y3");
    ok(MathHelper.abs(v2.z - 0) <= MathHelper.zeroTolerance, "z3");
});

test("multiplyScalar", function() {
    var q1 = new Quaternion(-4.4, 1.1,-2.2,3.3);
    var q = q1.multiplyScalar(3.2);
	equals(q.w, -4.4 * 3.2, "w");
    equals(q.x, 1.1 * 3.2, "x");
    equals(q.y, -2.2 * 3.2, "y");
    equals(q.z, 3.3 * 3.2, "z");
});

test("multiply", function() {
    var q1 = new Quaternion(-4.4, 1.1, -2.2, 3.3);
    var q2 = new Quaternion(8.8, 5.5, 6.6, -7.7);
    var q = q2.multiply(q1);
    q = q.normalize();
	equals(q.w, -0.05536365323582676, "w");
    equals(q.x, -0.11072730647165334, "x");
    equals(q.y, -0.858136625155313, "y");
    equals(q.z, 0.4982728791224398, "z");
});

test("toRotationMatrix", function() {
    var q1 = new Quaternion(-4.4, 1.1, -2.2, 3.3);
    var m = q1.toRotationMatrix();
	equals(m.m11, -30.46, "m11 constructor");
    equals(m.m12, 24.2, "m12 constructor");
    equals(m.m13, 26.620000000000005, "m13 constructor");
    equals(m.m14, 0, "m14 constructor");
    equals(m.m21, -33.88, "m21 constructor");
    equals(m.m22, -23.2, "m22 constructor");
    equals(m.m23, -4.839999999999998, "m23 constructor");
    equals(m.m24, 0, "m24 constructor");
    equals(m.m31, -12.100000000000003, "m31 constructor");
    equals(m.m32, -24.200000000000003, "m32 constructor");
    equals(m.m33, -11.100000000000001, "m33 constructor");
    equals(m.m34, 0, "m34 constructor");
    equals(m.m41, 0, "m41 constructor");
    equals(m.m42, 0, "m42 constructor");
    equals(m.m43, 0, "m43 constructor");
    equals(m.m44, 1, "m44 constructor");
});

test("toAxisAngle", function() {
    var v = new Vector3(1,2,3);
    v = v.normalize();
    var q = Quaternion.fromAxisAngle(v, MathHelper.PI / 3);
    
    var axisAngle = q.toAxisAngle();
    ok(MathHelper.abs(axisAngle.w - MathHelper.PI / 3) <= MathHelper.zeroTolerance, "w");
    ok(MathHelper.abs(axisAngle.x - v.x) <= MathHelper.zeroTolerance, "x");
    ok(MathHelper.abs(axisAngle.y - v.y) <= MathHelper.zeroTolerance, "y");
    ok(MathHelper.abs(axisAngle.z - v.z) <= MathHelper.zeroTolerance, "z");
});
