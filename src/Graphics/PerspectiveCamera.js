/**
* Represents a camera that applies perspective distortion to a scene
* @constructor
*/
function PerspectiveCamera() {
    this.viewport = null;
    this.position = new Vector3(0, 0, 0);
    this.up = new Vector3(0, 1, 0);
    this.look = new Vector3(0, 0, -1);
    this.fieldOfView = MathHelper.PI / 2;
    this.viewTransform = Matrix4x4.createIdentity();
    this.projectionTransform = Matrix4x4.createIdentity();
    this.isDirty = true;
}

PerspectiveCamera.prototype = {

    /**
    * When called marks the camera as being dirty
    */
    setDirty: function () {
        this.isDirty = true;
    },
    
    /**
    * Sets the viewport on the camera
    * @param {Viewport} viewport
    */
    setViewport: function (viewport) {
        this.viewport = viewport;
        this.setDirty();
    },
    
    /**
    * Returns the viewport associated with the camera
    * @return {Viewport}
    */
    getViewport: function () {
        return this.viewport;
    },
    
    /**
    * Sets the position of the camera
    * @param {Vector3} position
    */
    setPosition: function (position) {
        this.position = position;
        this.setDirty();
    },
    
    /**
    * Returns the position of the camera
    * @return {Vector3}
    */
    getPosition: function () {
        return this.position;
    },
    
    /**
    * Sets the vertical field of view of the camera
    * @param {number} fieldOfView Angle in radians
    */
    setVerticalFov: function (fieldOfView) {
        this.fieldOfView = fieldOfView;
        this.setDirty();
    },
    
    /**
    * Returns the vertical field of view of the camera
    * @return {number}
    */
    getVerticalFov: function () {
        return this.fieldOfView;
    },
    
    /**
    * Sets the look direction of the camera
    * @param {Vector3} look A unit look vector
    */
    setLook: function (look) {
        this.look = look;
        this.setDirty();
    },
    
    /**
    * Returns the current look vector of the camera
    */
    getLook: function () {
        return this.look;
    },
    
    /**
    * Sets the up direction of the camera
    * @param {Vector3} up A unit up vector
    */
    setUp: function (up) {
        this.up = up;
        this.setDirty();
    },
    
    /**
    * Returns the current up vector of the camera
    * @return {Vector3}
    */
    getUp: function () {
        return this.up;
    },
    
    /**
    * Returns the current view transform
    * @return {Matrix4x4}
    */
    getViewTransform: function () {
        if (this.isDirty) {
            this.updateTransforms();
        }
        return this.viewTransform;
    },
    
    /**
    * Returns the current projection transform
    * @return {Matrix4x4}
    */
    getProjectionTransform: function () {
        if (this.isDirty) {
            this.updateTransforms();
        }
        return this.projectionTransform;
    },
    
    /**
    * When called updates the view and projection transforms based on the current state of the system
    */
    updateTransforms: function () {
        this.viewTransform = GraphicsHelper.createLookAtRH(this.position, this.look, this.up);
        this.projectionTransform = GraphicsHelper.createPerspective(this.fieldOfView,
                                                                    this.viewport.getAspectRatio(),
                                                                    this.viewport.getNearDistance(),
                                                                    this.viewport.getFarDistance());
        this.isDirty = false;
    }
};
