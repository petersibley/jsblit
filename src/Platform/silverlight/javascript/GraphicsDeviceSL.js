/*global RenderTargetSL, SpriteBatchSL */

/**
* An abstraction of the graphical hardware in a users computer
* @param {JsBlitWindow} jsBlitWindow The window the content is displayed in
* @constructor
* @extends GraphicsDevice
* @ignore
*/
function GraphicsDeviceSL(jsBlitWindow) {
    
    GraphicsDeviceSL.baseConstructor.call(this, jsBlitWindow);
    this.proxy = null;
}
Utils.extend(GraphicsDeviceSL, GraphicsDevice);

GraphicsDeviceSL.prototype.setProxy = function (graphicsDeviceProxy) {
	this.proxy = graphicsDeviceProxy;
};

/**
* Creates a new render target for content to be rendered into
* @param {number} width The width of the render target
* @param {number} height The height of the render target
*/
GraphicsDeviceSL.prototype.createRenderTarget = function (width, height) {
    return new RenderTargetSL(this.proxy, width, height);
};

/**
* When called creates a sprite batch
* @return {SpriteBatch}
*/
GraphicsDeviceSL.prototype.createSpriteBatch = function () {
	return new SpriteBatchSL(this);
};

/**
* Sets the current render target
* @param {RenderTarget} renderTarget
*/
GraphicsDeviceSL.prototype.setRenderTarget = function (renderTarget) {
    
	//TODO: Allow multiple calls
    if (this.renderTarget !== null) {
		throw 'Multiple setRenderTarget calls not supported';
    }
        
    this.renderTarget = renderTarget;
    this.proxy.setRenderTarget(renderTarget.runtimeId);
};
    
/**
* Clears the contents of the current render target with the specified color
* @param {Color} color
*/
GraphicsDeviceSL.prototype.clear = function (color) {
        
	this.proxy.clear(this.renderTarget.runtimeId, color.r, color.g, color.b, color.a);
};

GraphicsDeviceSL.prototype.drawSprites = function (restoreState, commands) {
        
	this.proxy.drawSprites(this.renderTarget.runtimeId, commands);
};