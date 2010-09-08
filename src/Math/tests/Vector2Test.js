module("Math::Vector2");

test("Constructor", function() {
    var v = new Vector2(1.0, 2.0);
    
	equals(v.x, 1.0, "x constructor incorrect");
    equals(v.y, 2.0, "y constructor incorrect");
});

test("add", function() {
    var v1 = new Vector2(1.0, 2.6);
    var v2 = new Vector2(-10.5, 16.0);
    var v3 = v1.add(v2);
    
    equals(v3.x, -9.5, "x add incorrect");
    equals(v3.y, 18.6, "y add incorrect");
});

test("subtract", function() {
    var v1 = new Vector2(5.2, -15.0);
    var v2 = new Vector2(12.0, 21.6);
    var v3 = v1.subtract(v2);
    
    equals(v3.x, -6.8, "x subtract incorrect");
    equals(v3.y, -36.6, "y subtract incorrect");
});

test("multiplyScalar", function() {
    var v1 = new Vector2(10, 20);
    var v2 = v1.multiplyScalar(4);
    
    equals(v2.x, 40, "x multiplyScalar incorrect");
    equals(v2.y, 80, "y multiplyScalar incorrect");
});

test("equals", function() {
    var v1 = new Vector2(1,2);
    var v2 = new Vector2(1,2);
    var v3 = new Vector2(4,5);
    
    ok(v1.equals(v2), "v1 should equal v2");
    ok(!v1.equals(v3), "v1 should not equal v3");
});

test("length", function() {
    var v = new Vector2(1,2);
    equals(v.length(), Math.sqrt(1*1 + 2*2));
});

test("lengthSquared", function() {
    var v = new Vector2(1,2);
    equals(v.lengthSquared(), 1*1 + 2*2);
});

test("dot", function() {
    var v1 = new Vector2(10, 15);
    var v2 = new Vector2(11, 12);
    equals(v1.dot(v2), 10 * 11 + 15 * 12);
});

test("perp", function() {
    var v1 = new Vector2(3, -3);
    var v2 = v1.perp();
    
    equals(v1.dot(v2), 0, "v1 should be orthogonal to v2");
});

test("normalize", function() {
    var v1 = new Vector2(10, -11);
    var inverseLength = 1.0 / v1.length();
    
    v2 = v1.normalize();
    equals(v2.x, 10 * inverseLength, "x normalize incorrect");
    equals(v2.y, -11 * inverseLength, "y normalize incorrect");
});
