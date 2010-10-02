/**
* A user defined color
* @param {number} r Red value with range [0, 255]
* @param {number} g Green value with range [0, 255]
* @param {number} b Blue value with range [0, 255]
* @param {number} a Alpha value with range [0, 255]
* @constructor
*/
function Color(r, g, b, a) {
    /**
    * The red component, with range [0, 255]
    * @type number
    */
    this.r = r;
    
    /**
    * The green component, with range [0, 255]
    * @type number
    */
    this.g = g;
    
    /**
    * The blue component, with range [0, 255]
    * @type number
    */
    this.b = b;
    
    /**
    * The alpha component, with range [0, 255]
    * @type number
    */
    this.a = a;
    
    //TODO: abstract sl, webgl, canvas
    this.formatString = 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + (this.a / 255) + ')';
}

/**
* White color
* @type Color
*/
Color.white = new Color(255, 255, 255, 255);

/**
* Black color
* @type color
*/
Color.black = new Color(0, 0, 0, 255);

/**
* Red color
* @type color
*/
Color.red = new Color(255, 0, 0, 255);

/**
* Green color
* @type color
*/
Color.green = new Color(0, 255, 0, 255);

/**
* Blue color
* @type color
*/
Color.blue = new Color(0, 0, 255, 255);

