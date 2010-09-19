/**
* Provides common graphics helper function
* @class
*/
var GraphicsHelper = {};

/**
* Creates a right handed look at matrix.  This is with +Z coming
* towards the viewer, +X is to the right and +Y is up
* @param {Vector3} position The position of the eye
* @param {Vector3} look The look direction
* @param {Vector3} up The up direction
* @return {Matrix4x4}
*/
GraphicsHelper.createLookAtRH = function (position, look, up) {
    var rotatedPos, viewSide, viewUp, result;
    
    look = look.normalize();
    up = up.normalize();
    viewUp = up.subtract(look.multiplyScalar(up.dot(look))).normalize();
    viewSide = look.cross(viewUp);
    
    result = Matrix4x4.createIdentity();
    result.m11 = viewSide.x;
    result.m12 = viewSide.y;
    result.m13 = viewSide.z;
    result.m21 = viewUp.x;
    result.m22 = viewUp.y;
    result.m23 = viewUp.z;
    result.m31 = -look.x;
    result.m32 = -look.y;
    result.m33 = -look.z;
    rotatedPos = result.transformVector3(position);
    result.m14 = -rotatedPos.x;
    result.m24 = -rotatedPos.y;
    result.m34 = -rotatedPos.z;
    return result;
};

/**
* Creates a perspective projection matrix for use with column vectors.
* The near and far planes are mapped to [-1, 1] to match opengl conventions
* @param {number} verticalFov The vertical field of view
* @param {number} aspectRatio The aspect ratio of the viewport
* @param {number} near The distance to the near plane
* @param {number} far The distance to the far plane
* @return {Matrix4x4}
*/
GraphicsHelper.createPerspective = function (verticalFov,
                                             aspectRatio,
                                             near,
                                             far) {
    var d;
    d = 1.0 / MathHelper.tan(verticalFov / 2.0);
    return new Matrix4x4(d / aspectRatio, 0, 0, 0,
                         0, d, 0, 0,
                         0, 0, (near + far) / (near - far), (2 * near * far) / (near - far),
                         0, 0, -1, 0);
};