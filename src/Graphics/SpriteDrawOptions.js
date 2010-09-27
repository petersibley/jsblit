/**
* Specifies the different draw options that can be specified when
* drawing a 2D sprite
* @constructor
*/
function SpriteDrawOptions() {
    /**
    * The depth value, in the range [-1, 1].  Larger depths indicate
    * the item will be drawn before items with smaller depths.
    * @type number
    */
    this.depth = 0;
    
    /**
    * Specifies a rectangle in the source texture to draw. If not
    * specified it is assumed the entire texture should be used 
    * as the source
    * @type Rect2D
    */
    this.sourceRect = null;
    
    /**
    * Specifies where the sprite will be draw in the 
    * render target x,y, width, height
    * @type Rect2D
    */
    this.destinationRect = null;
    
    /**
    * Specifies the location where the top left of the image
    * will be drawn from.  If the destinationRect property is
    * set this value is ignored
    * @type Vector2
    */
    this.position = new Vector2(0, 0);
    
    /**
    * The x and y scaling factor to be applied to the sprite
    * @type Vector2
    */
    this.scale = null;
    
    /**
    * Specifies the rotation in radians.  A positive value will rotate
    * the sprite in a clockwise direction. Tip: To convert degrees to
    * radians use the MathHelper.degreesToRadians function.
    */
    this.rotation = null;
    
    /**
    * The origin of the rotation relative to the render target
    * @type Vector2
    */
    this.origin = new Vector2(0, 0);

	/**
	* Specifies the alpha value to apply to the sprite. A value of 0 represents fully
    * transparent. A value of 1.0 represents a fully opaque sprite.  Defaults to 1.0
	* @type number
	*/
	this.alpha = 1.0;
}