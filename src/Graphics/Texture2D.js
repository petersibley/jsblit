/**
* Represents a two dimensional texture
* @param {number} width
* @param {number} height
* @constructor
*/
function Texture2D(width, height) {

    /**
    * The height of the texture
    * @type number
    */
    this.height = height;
    
    /**
    * The width of the texture
    * @type number
    */
    this.width = width;
    
    //TODO: Remove with platform abstraction
    this.platformData = null;
}