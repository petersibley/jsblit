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
    this.drawOptions = new SpriteDrawOptions();
    this.halfDimension = new Vector3(0, 0, 0);
}

Sprite.prototype = {

    setDepth: function (depth) {
		this.drawOptions.depth = depth;
	},

	setAlpha: function (opacity) {
		this.drawOptions.alpha = opacity;
	},

    setTexture: function (texture) {
        this.texture = texture;
        this.halfDimension = new Vector3(this.texture.width / 2, this.texture.height / 2, 0);
    },
	
    update: function() {
        this.position = this.position.add(this.direction.multiplyScalar(this.speed));
    },
    
    updateDrawOptions: function () {
        this.drawOptions.position = this.position.subtract(this.halfDimension);
        this.drawOptions.rotation = this.totalRotation;
        this.drawOptions.origin = this.position;
        this.drawOptions.scale = this.scale;
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