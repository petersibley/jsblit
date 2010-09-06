module("Math::Vector3");

test("Constructor", function() {
    var v = new Vector3(1.0, 2.0, 3.0);
    
	equals(v.x, 1.0, "x constructor incorrect");
    equals(v.y, 2.0, "y constructor incorrect");
    equals(v.z, 3.0, "z constructor incorrect");
});

test("add", function() {
    var v1 = new Vector3(1.0, 2.6, 3.0);
    var v2 = new Vector3(-10.5, 16.0, -20.7);
    var v3 = v1.add(v2);
    
    equals(v3.x, -9.5, "x add incorrect");
    equals(v3.y, 18.6, "y add incorrect");
    equals(v3.z, -17.7, "z add incorrect");
});

test("subtract", function() {
    var v1 = new Vector3(5.2, -15.0, 20.4);
    var v2 = new Vector3(12.0, 21.6, -3.0);
    var v3 = v1.subtract(v2);
    
    equals(v3.x, -6.8, "x subtract incorrect");
    equals(v3.y, -36.6, "y subtract incorrect");
    equals(v3.z, 23.4, "z subtract incorrect");
});

test("multiplyScalar", function() {
    var v1 = new Vector3(10, 20, 30);
    var v2 = v1.multiplyScalar(4);
    
    equals(v2.x, 40, "x multiplyScalar incorrect");
    equals(v2.y, 80, "y multiplyScalar incorrect");
    equals(v2.z, 120, "z multiplyScalar incorrect");
});

test("equals", function() {
    var v1 = new Vector3(1,2,3);
    var v2 = new Vector3(1,2,3);
    var v3 = new Vector3(4,5,6);
    
    ok(v1.equals(v2), "v1 should equal v2");
    ok(!v1.equals(v3), "v1 should not equal v3");
});

test("length", function() {
    var v = new Vector3(1,2,3);
    equals(v.length(), Math.sqrt(1*1 + 2*2 + 3*3));
});

test("lengthSquared", function() {
    var v = new Vector3(1,2,3);
    equals(v.lengthSquared(), 1*1 + 2*2 + 3*3);
});

test("dot", function() {
    var v1 = new Vector3(10, 15, 20);
    var v2 = new Vector3(11, 12, 13);
    equals(v1.dot(v2), 10 * 11 + 15 * 12 + 20 * 13);
});

test("cross", function() {
    var v1 = new Vector3(3, -3, 1);
    var v2 = new Vector3(4, 9, 2);
    var v3 = v1.cross(v2);
    
    equals(v3.x, -15, "x cross incorrect");
    equals(v3.y, -2, "y cross incorrect");
    equals(v3.z, 39, "z cross incorrect");
});

test("normalize", function() {
    var v1 = new Vector3(10, -11, 30);
    var inverseLength = 1.0 / v1.length();
    
    v2 = v1.normalize();
    equals(v2.x, 10 * inverseLength, "x normailze incorrect");
    equals(v2.y, -11 * inverseLength, "y normailze incorrect");
    equals(v2.z, 30 * inverseLength, "z normailze incorrect");
});