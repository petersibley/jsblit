module("Graphics::PerspectiveCamera");

test("Constructor", function() {
    var c = new PerspectiveCamera();
    equals(c.getViewport(), null, "viewport");
    same(c.getPosition(), (new Vector3(0,0,0)), "position");
    same(c.getUp(), new Vector3(0,1,0), "up");
    same(c.getLook(), new Vector3(0,0,-1), "look");
    equals(c.getVerticalFov(), MathHelper.PI / 2, "fov");
    same(c.getViewTransform(), Matrix4x4.createIdentity(), "vt");
    same(c.getProjectionTransform(), Matrix4x4.createIdentity(), "pt");
});

test("setViewport", function() {
    var v = new Viewport(800,800, 0.001, 1000);
    var c = new PerspectiveCamera();
    
    equals(c.getViewport(), null, "viewport before");
    c.setViewport(v);
    equals(c.getViewport(), v, "viewport after");
});

test("setPosition", function() {
    var c = new PerspectiveCamera();
    var p = new Vector3(10,20,30);
    c.setPosition(p);
    same(c.getPosition(), p, "p");
});

test("setVerticalFov", function() {
    var c = new PerspectiveCamera();
    c.setVerticalFov(123);
    equals(c.getVerticalFov(), 123, "fov");
});

test("setLook", function() {
    var c = new PerspectiveCamera();
    var p = new Vector3(10,20,30);
    c.setLook(p);
    same(c.getLook(), p, "p");
});

test("setUp", function() {
    var c = new PerspectiveCamera();
    var p = new Vector3(10,20,30);
    c.setUp(p);
    same(c.getUp(), p, "p");
});

test("getViewTransform", function() {
    var c = new PerspectiveCamera();
    c.setPosition(new Vector3(4,5,6));
    c.setLook((new Vector3(10,11,12)).subtract(new Vector3(4,5,6)));
    c.setUp(new Vector3(0,1,0));
    
    var m = c.getViewTransform();
    equals(m.m11, -0.7071067811865475, "m11");
    equals(m.m12, 0, "m12");
    equals(m.m13, 0.7071067811865475, "m13");
    equals(m.m14, -1.414213562373095, "m14");
    equals(m.m21, -0.40824829046386296, "m21");
    equals(m.m22, 0.816496580927726, "m22");
    equals(m.m23, -0.40824829046386296, "m23");
    equals(m.m24, -8.881784197001252e-16, "m24");
    equals(m.m31, -0.5773502691896257, "m31");
    equals(m.m32, -0.5773502691896257, "m32");
    equals(m.m33, -0.5773502691896257, "m33");
    equals(m.m34, 8.660254037844386, "m34");
    equals(m.m41, 0, "m41");
    equals(m.m42, 0, "m42");
    equals(m.m43, 0, "m43");
    equals(m.m44, 1, "m44");
});

test("getProjectionTransform", function() {
    var v = new Viewport(1200,800, 0.001, 1000);
    var c = new PerspectiveCamera();
    c.setVerticalFov(MathHelper.PI / 2);
    c.setViewport(v);
    
    var m = c.getProjectionTransform();
    var d;
    d = 1.0 / MathHelper.tan(MathHelper.PI / 2.0 / 2.0);
    var aspectRatio = 1200/800;
    var near = 0.001;
    var far = 1000;
    var m = new Matrix4x4(d / aspectRatio, 0, 0, 0,
                          0, d, 0, 0,
                          0, 0, (near + far) / (near - far), (2 * near * far) / (near - far),
                          0, 0, -1, 0);
                         
    equals(m.m11, d / aspectRatio, "m11");
    equals(m.m12, 0, "m12");
    equals(m.m13, 0, "m13");
    equals(m.m14, 0, "m14");
    equals(m.m21, 0, "m21");
    equals(m.m22, d, "m22");
    equals(m.m23, 0, "m23");
    equals(m.m24, 0, "m24");
    equals(m.m31, 0, "m31");
    equals(m.m32, 0, "m32");
    equals(m.m33, (near + far) / (near - far), "m33");
    equals(m.m34, (2 * near * far) / (near - far), "m34");
    equals(m.m41, 0, "m41");
    equals(m.m42, 0, "m42");
    equals(m.m43, -1, "m43");
    equals(m.m44, 0, "m44");
});



