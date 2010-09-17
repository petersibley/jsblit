module("Graphics::Frame");

test("Constructor", function() {
    var f = new Frame();
	equals(f.Position.x, 0, "x");
    equals(f.Position.y, 0, "y");
    equals(f.Position.z, 0, "z");
    equals(f.Rotation.w, 1, "rw");
    equals(f.Rotation.x, 0, "rx");
    equals(f.Rotation.y, 0, "ry");
    equals(f.Rotation.z, 0, "rz");
});
