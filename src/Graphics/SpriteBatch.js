/**
* Used to draw sprites onto a render target
* @param {GraphicsDevice} graphicsDevice
* @constructor
*/
function SpriteBatch(graphicsDevice) {
    this.sortOrder = SpriteSortOrder.inOrder;
    this.restoreState = true;
    this.graphicsDevice = graphicsDevice;
    
    //List of sprites and their draw commands
    this.textures = [];
    this.drawOptions = [];
}

SpriteBatch.prototype = {

    /**
    * Called before drawing any sprites to the render target
    * @param {SpriteSortOrder} sortOrder
    * @param {boolean} restoreState - if true then any state modified by the draw calls
    *                  will be restored at the end of the draw calls
    */
    begin: function (sortOrder, restoreState) {
        this.sortOrder = sortOrder;
        this.restoreState = restoreState;
        this.textures.length = 0;
        this.drawOptions.length = 0;
    },
    
    /**
    * Draws a sprite into the render target with the specified draw options
    * @param {Texture2D} texture The texture containing the sprite
    * @param {SpriteDrawOptions} drawOptions The options to use to draw the sprite
    */
    draw: function (texture, drawOptions) {
        this.textures.push(texture);
        this.drawOptions.push(drawOptions);
    },
    
    /**
    * Signals the end of a batch or sprite rendering
    */
    end: function () {
    
        //TODO: Be smarter with sort order, depth sorting
        
        this.graphicsDevice.drawSprites(this.restoreState, this.textures, this.drawOptions);
    }
};