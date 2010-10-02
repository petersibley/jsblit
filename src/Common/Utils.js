/**
* A utility class for common jsblit functionality
* @class
*/
function Utils() {
}

//See: http://www.kevlindev.com/tutorials/javascript/inheritance/index.htm
/**
* Applys prototype inheritance to the derived class
* @param {Object} derived The derived classes constructor
* @param {Object} base The base classes constructor
*/
Utils.extend = function (derived, base) {
	
    /** 
    * @constructor
    * @ignore 
    */
    function Inheritance() {
    }
    Inheritance.prototype = base.prototype;

    derived.prototype = new Inheritance();
    derived.prototype.constructor = derived;
    derived.baseConstructor = base;
    derived.superClass = base.prototype;
};

