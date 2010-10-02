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
}