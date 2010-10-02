//Globals needed for 'this' massaging with events
var JsBlitWindowCVEvents = [];

/** @ignore */
function JsBlitWindowCVOnKeyDown(event) {
    var key;
    
    /*jslint forin:false */
    for (key in JsBlitWindowCVEvents) {
    
        //jslint really wants us to do this
        if (true) {
            JsBlitWindowCVEvents[key].onKeyDown(event);
        }
    }
}

/** @ignore */
function JsBlitWindowCVOnKeyUp(event) {
    var key;
    
    /*jslint forin:false */
    for (key in JsBlitWindowCVEvents) {
    
        //jslint really wants this
        if (true) {
            JsBlitWindowCVEvents[key].onKeyUp(event);
        }
    }
}

/** @ignore */
function JsBlitWindowCVOnLoad(windowId) {
	JsBlitWindowCVEvents[windowId].onLoaded();
}

/**
* The JsBlitWindow class is responsible for capturing user
* input for the JsBlitApplication
* @param {string} id A unique id for the window
* @param {number} width The width of the window
* @param {number} height The height of the window
* @param {Object} delegate A delegate that handles all of the JsBlitWindowCV callbacks
* @constructor
* @extends JsBlitWindow
* @ignore
*/
function JsBlitWindowCV(id, width, height, delegate) {

    JsBlitWindowCV.baseConstructor.call(this, id, width, height, delegate, new GraphicsDeviceCV(this), new ContentCV());
    
    this.platformData = document.createElement('div');
    this.platformData.style.width = this.width;
    this.platformData.style.height = this.height;
    this.platformData.tabIndex = 0;
 
    JsBlitWindowCVEvents[this.id] = this;
    this.platformData.onkeydown = JsBlitWindowCVOnKeyDown;    
    this.platformData.onkeyup = JsBlitWindowCVOnKeyUp;
    
    //Simulate a delay incase user is newing up this object and expecting other
    //state to be ready in the loaded event, which might not be the case if we 
    //raise the loaded event right here and the rest of the calling function has
    //not had the opportunity to complete
    setTimeout('JsBlitWindowCVOnLoad("' + this.id + '")', 100);
}
Utils.extend(JsBlitWindowCV, JsBlitWindow);

/**
* @ignore
*/
JsBlitWindowCV.prototype.onKeyDown = function (event) {
	this.currentKeyCode = event.which;
};
    
/**
* @ignore
*/
JsBlitWindowCV.prototype.onKeyUp = function (event) {
	this.currentKeyCode = null;
};