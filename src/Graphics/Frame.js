/**
* A Frame represents a translate and rotation of an orthonormal basis
* @constructor
*/
function Frame()
{
    this.Position = new Vector3(0, 0, 0);
    this.Rotation = Quaternion.createIdentity();
}