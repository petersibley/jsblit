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

//BackToFront - sort by depth property
//FrontToBack - sort by depth property
//Texture - i.e. sort by texture

