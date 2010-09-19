//Some global variables needed for setInverval 'this' scope massaging
var JsBlitAppGlobalInstances = [];

/** @ignore */
function JsBlitAppCallMainLoop(appId) {
    JsBlitAppGlobalInstances[appId].mainLoop();
}

/**
* Represents an app that renders jsblit content
* @param {JsBlitWindow} jsBlitWindow The window the app will render into
* @constructor
*/
function JsBlitApp(jsBlitWindow) {
    this.appTime = new AppTime();
    this.delegate = null;
    this.jsBlitWindow = jsBlitWindow;
    this.graphicsDevice = new GraphicsDevice(this.jsBlitWindow);
    this.content = new Content();
    this.frameRate = 10;
    this.keyboardState = new KeyboardState(null);
    this.mouseState = new MouseState();
    this.globalInstance = JsBlitAppGlobalInstances;
        
    //Some jiggery pokery for setInterval 'this' scope resolution
    this.globalInstance[this.jsBlitWindow.id] = this;
}

JsBlitApp.prototype = {

    /**
    * Returns the JsBlitWindow instance associated with the app
    * @return {JsBlitWindow}
    */
    getWindow: function () {
        return this.jsBlitWindow;
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
        this.mainLoopId = setInterval('JsBlitAppCallMainLoop("' + this.jsBlitWindow.id + '");', 
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
    * Returns the graphics device associated with the app
    * @return {GraphicsDevice}
    */
    getGraphicsDevice: function () {
        return this.graphicsDevice;
    },
    
    /**
    * Sets the delegate that handles all of the render/update
    * calls. The delegate must implement the following function signatures
    * void update(GraphicsDevice, AppTime, MouseState, KeyboardState);
    * void render(GraphicsDevice, AppTime);
    * @param {Object} delegate
    */
    setDelegate: function (delegate) {
        this.delegate = delegate;
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
        
        this.keyboardState.keyCode = this.jsBlitWindow.getKeyCode();
        this.delegate.update(this.graphicsDevice,
                             this.appTime,
                             this.mouseState,
                             this.keyboardState);
        this.delegate.render(this.graphicsDevice, this.appTime);
    }
};