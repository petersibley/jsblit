function MockCamera()
{
    this.viewport = null;
    this.isDirty = false;
}

MockCamera.prototype = {

    setViewport: function (viewport) {
        this.viewport = viewport;
    },
    
    setDirty: function () {
        this.isDirty = true;
    },
    
    setClean: function () {
        this.isDirty = false;
    },
    
    getIsDirty: function() {
        return this.isDirty;
    },
    
    getViewport: function() {
        return this.viewport;
    }
};