/**
* A render target represents a surface that can be drawn onto
* @param {number} width
* @param {number} height
* @constructor
*/
function RenderTarget(width, height) {

    /**
    * The width of the render target
    * @type number
    */
    this.width = width;
    
    /**
    * The height of the render target
    * @type number
    */
    this.height = height;
    
    //TODO: Move this into a canvas specific implementation
    //TODO: Need some kind of browser check code to know which ones support
    //      canvas / webgl / silveright etc
    
    /*jslint browser:true */
    this.platformData = document.createElement('Canvas');
    this.platformData.width = this.width;
    this.platformData.height = this.height;
}