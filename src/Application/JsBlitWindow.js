//Globals needed for 'this' massaging with events
var JsBlitWindowEvents = [];

/** @ignore */
function JsBlitWindowOnKeyDown(event) {
    var key;
    
    /*jslint forin:false */
    for (key in JsBlitWindowEvents) {
    
        //jslint really wants us to do this
        if (true) {
            JsBlitWindowEvents[key].onKeyDown(event);
        }
    }
}

/** @ignore */
function JsBlitWindowOnKeyUp(event) {
    var key;
    
    /*jslint forin:false */
    for (key in JsBlitWindowEvents) {
    
        //jslint really wants this
        if (true) {
            JsBlitWindowEvents[key].onKeyUp(event);
        }
    }
}

/**
* The JsBlitWindow class is responsible for capturing user
* input for the JsBlitApplication
* @param {string} id A unique id for the window
* @param {number} width The width of the window
* @param {number} height The height of the window
* @constructor
*/
function JsBlitWindow(id, width, height) {

    /**
    * A unique id for the window
    * @type {string}
    */
    this.id = id;
    
    /**
    * The width of the window
    * @type {number}
    */
    this.width = width;
    
    /**
    * The height of the window
    * @type {number}
    */
    this.height = height;
    
    //TODO: Abstract SL, canvas, webgl
    this.platformData = document.createElement('div');
    this.platformData.style.width = this.width;
    this.platformData.style.height = this.height;
    this.platformData.tabIndex = 0;
    
    //Abstract away for SL, canvas, webgl
    //TODO: Is this a good way to do this?
    JsBlitWindowEvents[this.id] = this;
    this.platformData.onkeydown = JsBlitWindowOnKeyDown;    
    this.platformData.onkeyup = JsBlitWindowOnKeyUp;
    
    this.currentKeyCode = null;
}

JsBlitWindow.prototype = {

    /**
    * @ignore
    */
    onKeyDown: function (event) {
        this.currentKeyCode = event.which;
    },
    
    /**
    * @ignore
    */
    onKeyUp: function (event) {
        this.currentKeyCode = null;
    },
    
    /**
    * Returns the current key code, if no key is pressed null is returned
    * @return {number}
    */
    getKeyCode: function () {
        return this.currentKeyCode;
    }
};