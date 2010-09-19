module("Graphics::Rect2D");

test("Constructor", function() {
    var r = new Rect2D(10.1, -11.2, 12.3, -13.4);
    equals(r.x, 10.1, "x");
    equals(r.y, -11.2, "y");
    equals(r.width, 12.3, "width");
    equals(r.height, -13.4, "height");
});