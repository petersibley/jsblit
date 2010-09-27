/**
* An abstraction of the graphical hardware in a users computer
* @param {JsBlitWindow} jsBlitWindow The window the content is displayed in
* @constructor
*/
function GraphicsDevice(jsBlitWindow) {
    
    this.jsBlitWindow = jsBlitWindow;
    this.renderTarget = null;
    
    //TODO: abstract away
    this.renderContext2D = null;
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
    * Sets the current render target
    * @param {RenderTarget} renderTarget
    */
    setRenderTarget: function (renderTarget) {
    
        //TODO: Allow multiple calls
        if (this.renderTarget !== null) {
            throw 'Multiple setRenderTarget calls not supported';
        }
        
        this.renderTarget = renderTarget;
        this.renderContext2D = this.renderTarget.platformData.getContext('2d');
        
        //TODO: Abstract away
        this.jsBlitWindow.platformData.appendChild(this.renderTarget.platformData);
    },
    
    /**
    * Clears the contents of the current render target with the specified color
    * @param {Color} color
    */
    clear: function (color) {
        
        //TODO: abstract away canvas, SL, webgl
        this.renderContext2D.fillStyle = color.formatString;
        this.renderContext2D.fillRect(0, 0, this.renderTarget.width, this.renderTarget.height);
    },
    
    drawSprites: function (restoreState, textures, drawOptions) {
        
        //TODO: Abstract away for SL, canvas, webgl
        
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
                this.renderContext2D.translate(origin.x, origin.y);
                this.renderContext2D.rotate(rotation);
                dx -= origin.x;
                dy -= origin.y;
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
            //if(scale != null) {
            //    this.renderContext2D.scale(1, 1);
            //}
            //
            //if(rotation != null) {
            //    this.renderContext2D.rotate(-rotation);
            //    this.renderContext2D.translate(-origin.x, -origin.y);
            //}
        }
        
        if (restoreState) {
            this.renderContext2D.restore();
        }
    }
};