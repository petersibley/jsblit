/**
* A sprite in the asteroid game
* @constructor
*/
function Sprite() {
    this.speed = 0;
    this.direction = new Vector3(1, 0, 0);
    this.position = new Vector3(0, 0, 0);
    this.texture = null;
    this.totalRotation = 0;
    this.scale = new Vector2(1, 1);
}

Sprite.prototype = {

    update: function() {
        this.position = this.position.add(this.direction.multiplyScalar(this.speed));
    },
    
    addRotation: function (angle) {
        this.totalRotation += angle;
        var rotation = Quaternion.fromAxisAngle(new Vector3(0,0,1), angle);
        this.direction = rotation.transform(this.direction);
    },
    
    addVelocity: function(value) {
        this.speed += value;
        if(this.speed < 0) {
            this.speed = 0;
        }
    }
};