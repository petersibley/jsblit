module("Math::Vector4");

test("Constructor", function() {
    var v = new Vector4(1.0, 2.0, 3.0, 4.0);
    
	equals(v.x, 1.0, "x constructor incorrect");
    equals(v.y, 2.0, "y constructor incorrect");
    equals(v.z, 3.0, "z constructor incorrect");
    equals(v.w, 4.0, "w constructor incorrect");
});

test("add", function() {
    var v1 = new Vector4(1.0, 2.6, 3.0, 4.0);
    var v2 = new Vector4(-10.5, 16.0, -20.7, 6.2);
    var v3 = v1.add(v2);
    
    equals(v3.x, -9.5, "x add incorrect");
    equals(v3.y, 18.6, "y add incorrect");
    equals(v3.z, -17.7, "z add incorrect");
    equals(v3.w, 10.2, "w add incorrect");
});

test("subtract", function() {
    var v1 = new Vector4(5.2, -15.0, 20.4, -19.3);
    var v2 = new Vector4(12.0, 21.6, -3.0, 6.6);
    var v3 = v1.subtract(v2);
    
    equals(v3.x, -6.8, "x subtract incorrect");
    equals(v3.y, -36.6, "y subtract incorrect");
    equals(v3.z, 23.4, "z subtract incorrect");
    equals(v3.w, -25.9, "w subtract incorrect");
});

test("multiplyScalar", function() {
    var v1 = new Vector4(10, 20, 30, 50);
    var v2 = v1.multiplyScalar(4);
    
    equals(v2.x, 40, "x multiplyScalar incorrect");
    equals(v2.y, 80, "y multiplyScalar incorrect");
    equals(v2.z, 120, "z multiplyScalar incorrect");
    equals(v2.w, 200, "w multiplyScalar incorrect");
});

test("equals", function() {
    var v1 = new Vector4(1,2,3,4);
    var v2 = new Vector4(1,2,3,4);
    var v3 = new Vector4(5,6,7,8);
    
    ok(v1.equals(v2), "v1 should equal v2");
    ok(!v1.equals(v3), "v1 should not equal v3");
});

test("length", function() {
    var v = new Vector4(1,2,3,4.4);
    equals(v.length(), Math.sqrt(1*1 + 2*2 + 3*3 + 4.4 * 4.4));
});

test("lengthSquared", function() {
    var v = new Vector4(1,2,3,4.4);
    equals(v.lengthSquared(), 1*1 + 2*2 + 3*3 + 4.4*4.4);
});

test("dot", function() {
    var v1 = new Vector4(10, 15, 20, 25.5);
    var v2 = new Vector4(11, 12, 13, 14.4);
    equals(v1.dot(v2), 10 * 11 + 15 * 12 + 20 * 13 + 25.5 * 14.4);
});

test("normalize", function() {
    var v1 = new Vector4(10, -11, 30, -19);
    var inverseLength = 1.0 / v1.length();
    
    v2 = v1.normalize();
    equals(v2.x, 10 * inverseLength, "x normalize incorrect");
    equals(v2.y, -11 * inverseLength, "y normalize incorrect");
    equals(v2.z, 30 * inverseLength, "z normalize incorrect");
    equals(v2.w, -19 * inverseLength, "w normalize incorrect");
});