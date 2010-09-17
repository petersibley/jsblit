/**
* Represents a viewport into the 3D scene
* @param {number} width The width of the viewport in pixels
* @param {number} height The height of the viewport in pixels
* @param {number} nearDistance The distance to the near plane
* @param {number} farDistance The distance to the far plane
* @constructor
*/
function Viewport(width, height, nearDistance, farDistance)
{
    this.width = width;
    this.height = height;
    this.aspectRatio = this.width / this.height;
    this.nearDistance = nearDistance;
    this.farDistance = farDistance;
}

Viewport.prototype = {
    
    /**
    * Returns the width of the viewport
    * @return {number}
    */
    getWidth: function () {
        return this.width;
    },
    
    /**
    * Returns the height of the viewport in pixels
    * @return {number}
    */
    getHeight: function () {
        return this.height;
    },
    
    /**
    * Returns the aspect ratio of the viewport
    * @return {number}
    */
    getAspectRatio: function () {
        return this.aspectRatio;
    },
    
    /**
    * Returns the near plane distance
    * @return {number}
    */
    getNearDistance: function () {
        return this.nearDistance;
    },
    
    /**
    * Returns the far plane distance
    * @return {number}
    */
    getFarDistance: function () {
        return this.farDistance;
    }
};
