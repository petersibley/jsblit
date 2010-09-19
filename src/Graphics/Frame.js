/**
* A Frame represents a translate and rotation of an orthonormal basis
* @constructor
*/
function Frame() {
    /**
    * The position of the frame
    * @type Vector3
    */
    this.position = new Vector3(0, 0, 0);
    
    /**
    * The rotation applied to the frame
    * @type Quaternion
    */
    this.rotation = Quaternion.createIdentity();
}