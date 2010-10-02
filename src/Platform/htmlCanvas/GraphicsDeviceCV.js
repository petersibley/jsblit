/*global RenderTargetCV, SpriteBatchCV */

/**
* An abstraction of the graphical hardware in a users computer
* @param {JsBlitWindow} jsBlitWindow The window the content is displayed in
* @constructor
* @extends GraphicsDevice
* @ignore
*/
function GraphicsDeviceCV(jsBlitWindow) {
    
    GraphicsDeviceCV.baseConstructor.call(this, jsBlitWindow);
    this.renderContext2D = null;
}
Utils.extend(GraphicsDeviceCV, GraphicsDevice);

/**
* Creates a new render target for content to be rendered into
* @param {number} width The width of the render target
* @param {number} height The height of the render target
*/
GraphicsDeviceCV.prototype.createRenderTarget = function (width, height) {
    return new RenderTargetCV(width, height);
};

/**
* When called creates a sprite batch
* @return {SpriteBatch}
*/
GraphicsDeviceCV.prototype.createSpriteBatch = function () {
	return new SpriteBatchCV(this);
};
    
/**
* Sets the current render target
* @param {RenderTarget} renderTarget
*/
GraphicsDeviceCV.prototype.setRenderTarget = function (renderTarget) {
    
	//TODO: Allow multiple calls
    if (this.renderTarget !== null) {
		throw 'Multiple setRenderTarget calls not supported';
    }
        
    this.renderTarget = renderTarget;
    this.renderContext2D = this.renderTarget.platformData.getContext('2d');
        
    this.jsBlitWindow.platformData.appendChild(this.renderTarget.platformData);
};
    
/**
* Clears the contents of the current render target with the specified color
* @param {Color} color
*/
GraphicsDeviceCV.prototype.clear = function (color) {
        
    this.renderContext2D.fillStyle = color.formatString;
    this.renderContext2D.fillRect(0, 0, this.renderTarget.width, this.renderTarget.height);
};
    
GraphicsDeviceCV.prototype.drawSprites = function (restoreState, textures, drawOptions) {
        
    var index, currentTexture, currentOptions, scale, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, sRect, dRect, rotation, origin;
    if (restoreState) {
        this.renderContext2D.save();
    }
    
    /*jslint plusplus:false */
    for (index = 0; index < textures.length; ++index) {
        currentOptions = drawOptions[index];
		currentTexture = textures[currentOptions.spriteBatchTextureIndex];
        sRect = currentOptions.sourceRect;
        if (sRect === null) {
            sx = sy = 0;
            sWidth = currentTexture.width;
            sHeight = currentTexture.height;
        }
        else {
            sx = sRect.x;
            sy = sRect.y;
            sWidth = sRect.width;
            sHeight = sRect.height;
        }

        dRect = currentOptions.destinationRect;
        if (dRect === null) {
            dx = currentOptions.position.x;
            dy = currentOptions.position.y;
            dWidth = sWidth;
            dHeight = sHeight;
        }
        else {
            dx = dRect.x;
            dy = dRect.y;
            dWidth = dRect.width;
            dHeight = dRect.height;
        }
     
        //TODO: Performant?
        this.renderContext2D.save();
        
        rotation = currentOptions.rotation;
        if (rotation !== null) {
            origin = currentOptions.origin;
            this.renderContext2D.translate(dx + origin.x, dy + origin.y);
            this.renderContext2D.rotate(rotation);
            
            dx = -origin.x;
            dy = -origin.y;
        }
        
        scale = currentOptions.scale;
        if (scale !== null) {
            this.renderContext2D.scale(scale.x, scale.y);
        }

		this.renderContext2D.globalAlpha = currentOptions.alpha;
        this.renderContext2D.drawImage(currentTexture.platformData,
                                       sx, sy, sWidth, sHeight,
                                       dx, dy, dWidth, dHeight);
               
        this.renderContext2D.restore();
    }
    
    if (restoreState) {
        this.renderContext2D.restore();
    }
};