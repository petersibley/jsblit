module("Graphics::Viewport");

test("Constructor", function() {
    var v = new Viewport(1000, 2000, 0.001, 1000);
	equals(v.getWidth(), 1000, "width");
    equals(v.getHeight(), 2000, "height");
    equals(v.getAspectRatio(), 1000.0/2000.0, "aspectRatio");
    equals(v.getNearDistance(), 0.001, "near");
    equals(v.getFarDistance(), 1000, "far");
});