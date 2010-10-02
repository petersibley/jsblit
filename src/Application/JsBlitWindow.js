//Some global variables needed for setInverval 'this' scope massaging
var JsBlitWindowGlobalInstances = [];

/** @ignore */
function JsBlitWindowCallMainLoop(id) {
    JsBlitWindowGlobalInstances[id].mainLoop();
}

/**
* The JsBlitWindow class is responsible for capturing user
* input for the JsBlitApplication
* @param {string} id A unique id for the window
* @param {number} width The width of the window
* @param {number} height The height of the window
* @param {Object} delegate A delegate that implements all of the JsBlitWindow
* @param {GraphicsDevice} graphicsDevice The graphics device which renders the scene
* callbacks.  TODO: List
* @constructor
*/
function JsBlitWindow(id, width, height, delegate, graphicsDevice, content) {

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
    
    this.content = content;
    this.graphicsDevice = graphicsDevice;
    this.delegate = delegate;
	this.currentKeyCode = null;
	this.appTime = new AppTime();
    this.frameRate = 10;
    this.keyboardState = new KeyboardState(null);
    this.mouseState = new MouseState();
    this.mainLoopId = -1;
        
    //Some jiggery pokery for setInterval 'this' scope resolution
    JsBlitWindowGlobalInstances[this.id] = this;
}

JsBlitWindow.prototype = {
    
    /**
    * Returns the graphics device associated with the app
    * @return {GraphicsDevice}
    */
    getGraphicsDevice: function () {
        return this.graphicsDevice;
    },
    
    /**
    * Sets the maximum animation frame rate
    * @param {number} frameRate For example 30 means 30 frames per second
    */
    setFrameRate: function (frameRate) {
        this.frameRate = frameRate;
    },
    
    /**
    * When called signals the app to start rendering
    */
    startRendering: function () {
    
        //setInterval will set the wrong scope if we directly
        //try to call this.mainLoop, so need to call with the
        //correct scope.
        /*jslint browser:true */
        this.mainLoopId = setInterval('JsBlitWindowCallMainLoop("' + this.id + '");', 
                                      1000 / this.frameRate);
    },
    
    /**
    * When called signals the app to stop rendering
    */
    stopRendering: function () {
        /*jslint browser:true */
        clearInterval(this.mainLoopId);
    },
    
       /**
    * The main game loop of the app
    * @ignore
    */
    mainLoop: function () {
            
        //Updates the current time
        this.appTime.update();
        
        //At some point these could be in seperate threads or 
        //call frequency, best to split them up
        
        //TODO: Mouse input
        
        this.keyboardState.keyCode = this.getKeyCode();
        this.delegate.update(this.graphicsDevice,
                             this.appTime,
                             this.mouseState,
                             this.keyboardState);
        this.delegate.render(this.graphicsDevice, this.appTime);
    },
    
    /**
    * Returns the current key code, if no key is pressed null is returned
    * @return {number}
    */
    getKeyCode: function () {
		return this.currentKeyCode;
    },
    
	/** @ignore */
    setKeyCode: function (keyCode) {
		this.currentKeyCode = keyCode;
    },
    
    //TODO: Change this name to onLoad
	/** @ignore */
    onLoaded: function () {
		this.delegate.onLoaded(this);
    }
};