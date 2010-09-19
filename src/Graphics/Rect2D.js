/**
* Defines a 2D rectangle
* @param {number} x The x position of the top left of the rectangle
* @param {number} y The y position of the top left of the rectangle
* @param {number} width The width of the rectangle
* @param {number} height The height of the rectangle
* @constructor
*/
function Rect2D(x, y, width, height) {
    /**
    * The x position of the top left of the rectangle
    * @type number
    */
    this.x = x;
    
    /**
    * The y position of the top left of the rectangle
    * @type number
    */
    this.y = y;
    
    /**
    * The width of the rectangle
    * @type number
    */
    this.width = width;
    
    /**
    * The height of the rectangle
    * @type number
    */
    this.height = height;
}

Rect2D.prototype = {
};