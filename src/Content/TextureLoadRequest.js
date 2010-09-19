/**
* Represents a request for a texture load.
* @param {string} uri The uri of the image source
* @param {Object} token A user defined token that is returned in the TextureLoadResponse
* @param {Object} loadCompletedDelegate An object that has a method that has the 
*                 following signature void loadTextureCompleted(TextureLoadResponse response)
* @constructor
*/
function TextureLoadRequest(uri, token, loadCompletedDelegate) {

    /**
    * URI of texture to load
    * @type string
    */
    this.uri = uri;
    
    /**
    * User defined token, will be returned in the TextureLoadResponse object
    * @type Object
    */
    this.token = token;
    
    /**
    * Delegate class that has a signature loadTextureCompleted(TextureLoadResponse response)
    */
    this.loadCompletedDelegate = loadCompletedDelegate;
}