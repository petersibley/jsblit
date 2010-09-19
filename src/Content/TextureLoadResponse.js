/**
* Represents the response from an async texture load request
* @param {Texture2D} texture
* @param {Object} token A user defined token passed into the TextureLoadRequest instance
* @param {Object} error
* @constructor
*/
function TextureLoadResponse(texture, token, error) {

    /**
    * The loaded image.  If an error has occurred this field is undefined
    * @type Texture2D
    */
    this.texture = texture;
    
    /**
    * A user defined token, passed into the TextureLoadRequest instance
    * @type Object
    */
    this.token = token;
    
    /**
    * If an error occurs during load this error field is populated, 
    * otherwise it is set to null.  There are currently no fields
    * available in this object, just check for it being non null
    * @type Object
    */
    this.error = error;
}
