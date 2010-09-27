/**
* Enumeration of the various draw orders that can be applied when
* drawing a batch of 2D sprites
* @constructor
*/
function SpriteSortOrder() {
}

/**
* Sprites will be drawn in the order the draw calls were made
* @type number
*/
SpriteSortOrder.inOrder = 0;

/**
 * Sprites will be drawn in back to front order. Sprites with smaller
 * depth values will be drawn before sprites with larger depth values
*/
SpriteSortOrder.backToFront = 1;

/**
* Sprites will be drawn in front to back order.  Sprites with larger
* depth values will be drawn before sprites with smaller depth values
*/
SpriteSortOrder.frontToBack = 2;


//Texture - i.e. sort by texture

