/**
* Used to draw sprites onto a render target
* @param {GraphicsDevice} graphicsDevice
* @constructor
*/
function SpriteBatch(graphicsDevice) {
    this.sortOrder = SpriteSortOrder.inOrder;
    this.restoreState = true;
    this.graphicsDevice = graphicsDevice;
}

SpriteBatch.prototype = {

    /**
    * Called before drawing any sprites to the render target
    * @param {SpriteSortOrder} sortOrder
    * @param {boolean} restoreState - if true then any state modified by the draw calls
    *                  will be restored at the end of the draw calls
    */
    begin: function (sortOrder, restoreState) {
    },
    
    /**
    * Draws a sprite into the render target with the specified draw options
    * @param {Texture2D} texture The texture containing the sprite
    * @param {SpriteDrawOptions} drawOptions The options to use to draw the sprite. Note: Do
    * not reuse drawOptions instances for multiple draw calls if you change properties of the
    * drawOptions instance, since these instances are not copied by just referenced from the
    * sprite batch class.  Sharing one drawOption instance across multiple draw calls is fine
    * as long as all draw calls have the same values.
    */
    draw: function (texture, drawOptions) {
    },
    
    /**
    * Signals the end of a batch or sprite rendering
    */
    end: function () {
    }
};