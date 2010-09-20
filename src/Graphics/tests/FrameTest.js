module("Graphics::Frame");

test("Constructor", function() {
    var f = new Frame();
	equals(f.position.x, 0, "x");
    equals(f.position.y, 0, "y");
    equals(f.position.z, 0, "z");
    equals(f.rotation.w, 1, "rw");
    equals(f.rotation.x, 0, "rx");
    equals(f.rotation.y, 0, "ry");
    equals(f.rotation.z, 0, "rz");
});
