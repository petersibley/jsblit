/**
* Represents the content loading system for app assets
* @constructor
*/
function Content() {

    //TODO: This should be abstrct, move into silverlight, webgl, canvas versions
}

Content.prototype = {

    /**
    * Loads a texture asyncronously from the content system at the specified location
    * @param {TextureLoadRequest} request Request parameters
    */
    loadTextureAsync: function (request) {
        
        //TODO: Should be split in concrete implementations for different platforms        
        //TODO: okay to create html elements like this, abstract away?
        
        /*jslint browser:true */
        var img = document.createElement('Image');
        
        /** @ignore */
        img.onload = function () {
        
            //Create a texture, associate underlying HTML image element (could also be SL / webgl texture etc)
            var texture = new Texture2D(img.width, img.height);
            texture.platformData = img;
            
            var response = new TextureLoadResponse(texture, request.token, null);
            request.loadCompletedDelegate.loadTextureCompleted(response);
        };
        
        /** @ignore */
        img.onerror = function () {
            request.loadCompletedDelegate.loadTextureCompleted(new TextureLoadResponse(null, request.token, {}));
        };
        
        img.src = request.uri;
    }
};