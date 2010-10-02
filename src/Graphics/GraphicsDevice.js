/**
* An abstraction of the graphical hardware in a users computer
* @param {JsBlitWindow} jsBlitWindow The window the content is displayed in
* @constructor
*/
function GraphicsDevice(jsBlitWindow) {
    
    //TODO: Get rid of the js window rubbish from here, shouldn't be needed
    this.jsBlitWindow = jsBlitWindow;
    this.renderTarget = null;
}

GraphicsDevice.prototype = {
    
    /**
    * Returns the current render target
    * @return {RenderTarget}
    */
    getRenderTarget: function () {
        return this.renderTarget;
    },
    
    /**
    * Creates a new render target for content to be rendered into
    * @param {number} width The width of the render target
    * @param {number} height The height of the render target
    * @return {RenderTarget}
    */
    createRenderTarget: function (width, height) {
    },
    
    /**
    * When called creates a sprite batch
    * @return {SpriteBatch}
    */
    createSpriteBatch: function () {
    },
    
    /**
    * Sets the current render target
    * @param {RenderTarget} renderTarget
    */
    setRenderTarget: function (renderTarget) {
    },
    
    /**
    * Clears the contents of the current render target with the specified color
    * @param {Color} color
    */
    clear: function (color) {
    }
};