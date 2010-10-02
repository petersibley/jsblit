/** @ignore
* Represents the content loading system for app assets
* @constructor
* @extends Content
*/
function ContentSL() {
	this.proxy = null;
}
Utils.extend(ContentSL, Content);

/** @ignore */
ContentSL.prototype.setProxy = function (proxy) {
	this.proxy = proxy;
};

/** @ignore */
ContentSL.prototype.loadTextureAsync = function (request) {
	this.proxy.loadTextureAsync(request.uri, request, this);
};

/** @ignore */
ContentSL.prototype.loadTextureCompleted = function (textureId, width, height, token, error) {
	var texture = new Texture2D(width, height);
	texture.platformData = textureId;
	token.loadCompletedDelegate.loadTextureCompleted(new TextureLoadResponse(texture, token.token, error));
};