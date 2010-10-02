/**
* Used to draw sprites onto a render target
* @param {GraphicsDevice} graphicsDevice
* @constructor
* @extends SpriteBatch
* @ignore
*/
function SpriteBatchSL(graphicsDevice) {

	SpriteBatchSL.baseConstructor.call(this, graphicsDevice);
    
    //List of sprites and their draw commands
    this.textures = [];
    this.drawOptions = [];
}
Utils.extend(SpriteBatchSL, SpriteBatch);

SpriteBatchSL.frontToBackSort = function (a, b) { 
	return b.depth - a.depth;
};

SpriteBatchSL.backToFrontSort = function (a, b) { 
	return a.depth - b.depth;
};

/**
* Called before drawing any sprites to the render target
* @param {SpriteSortOrder} sortOrder
* @param {boolean} restoreState - if true then any state modified by the draw calls
*                  will be restored at the end of the draw calls
*/
SpriteBatchSL.prototype.begin = function (sortOrder, restoreState) {
	this.sortOrder = sortOrder;
	this.restoreState = restoreState;
    this.textures.length = 0;
    this.drawOptions.length = 0;
};
    
/**
* Draws a sprite into the render target with the specified draw options
* @param {Texture2D} texture The texture containing the sprite
* @param {SpriteDrawOptions} drawOptions The options to use to draw the sprite. Note: Do
* not reuse drawOptions instances for multiple draw calls if you change properties of the
* drawOptions instance, since these instances are not copied by just referenced from the
* sprite batch class.  Sharing one drawOption instance across multiple draw calls is fine
* as long as all draw calls have the same values.
*/
SpriteBatchSL.prototype.draw = function (texture, drawOptions) {
    this.textures.push(texture);
    this.drawOptions.push(drawOptions);

	//Is this evil or acceptable?  Need an index into the textures
	//so that if the drawOptions is sorted we know which texture 
	//should be associated with it.  
	drawOptions.spriteBatchTextureIndex = this.textures.length - 1;
};
    
/**
* Signals the end of a batch or sprite rendering
*/
SpriteBatchSL.prototype.end = function () {
    
    var commands, i, currentOption, rotation;
    
    //TODO: Be smarter with texture sort

	//TODO: Sort is not working in Firefox
    if (this.sortOrder === SpriteSortOrder.frontToBack) {
        this.drawOptions.sort(SpriteBatch.frontToBackSort);
    }
    else if (this.sortOrder === SpriteSortOrder.backToFront) {
        this.drawOptions.sort(SpriteBatch.backToFrontSort);
    }

	commands = '';
	for (i = 0; i < this.drawOptions.length; ++i) {
		currentOption = this.drawOptions[i];
		
		rotation = currentOption.rotation;
		if (rotation === null) {
			rotation = 0;
		}
		
		commands += this.textures[currentOption.spriteBatchTextureIndex].platformData + ',' + 
		            currentOption.position.x + ',' + currentOption.position.y + ',' +
		            currentOption.scale.x + ',' + currentOption.scale.y + ',' +
					rotation + ',' + 
					currentOption.alpha + ',' +
					currentOption.origin.x + ',' + currentOption.origin.y;
		            
		if (i < this.drawOptions.length - 1) {
			commands += ',';
		}
	}
    this.graphicsDevice.drawSprites(this.restoreState, commands);
};
