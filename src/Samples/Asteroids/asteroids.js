/**
* A class used to create a sample game of asteroids to show how
* the use the jsBlit 2D APIs and content management
* @constructor
*/
function Asteroids() {

    //The window is used the capture all of the input events. Each window
    //must be given a unique id
    this.jsBlitWindow = new JsBlitWindow('window1', 830, 664);
    
    //The app contains the main game loop and creates all of the global
    //objects such as a graphics device, content management etc. Each
    //app instance requires a unique window to render in
    this.app = new JsBlitApp(this.jsBlitWindow);
    this.app.setFrameRate(30);
    
    //The JsBlitApp instance has several callbacks that need
    //to be handled by a delegate, such as render and update
    //methods.
    this.app.delegate = this;
    
    //We must define a render target that we want to render into and set
    //that as the active render target on the graphics device
    var rt = new RenderTarget(830, 664);
    this.app.getGraphicsDevice().setRenderTarget(rt);
    
    //A possible optimization is to put all these into one texture
    //and then just render parts of the same texture
    this.backgroundTexture = null;
    this.rocketTexture = null;
    this.asteroidTexture = null;
    
    //The sprite batch instance is used to render all of the game sprite
    //to the render target
    this.spriteBatch = new SpriteBatch(this.app.getGraphicsDevice());
    
    this.rocketSprite = null;
    this.allSprites = new Array();
}

Asteroids.prototype = {

    /**
    * Creates the asteroid sprites
    */
    createAsteroids: function () {
    
        var num, i, sprite;
        num = 20;
        for(i=0; i<num; ++i) {
            sprite = new Sprite();
            sprite.texture = this.asteroidTexture;
            sprite.addRotation(MathHelper.random() * 2 * MathHelper.PI);
            sprite.addVelocity(0.5 + MathHelper.random() * 10);
            sprite.scale = new Vector2(0.5, 0.5);
            
            var rt = this.app.getGraphicsDevice().getRenderTarget();
            sprite.position = new Vector3(MathHelper.random() * rt.width, MathHelper.random() * rt.height, 0);
            this.allSprites.push(sprite);
        }
    },
    
    /**
    * Creates the rocket sprite
    */
    createRocket: function () {
        var rt;
        
        this.rocketSprite = new Sprite();
        this.rocketSprite.texture = this.rocketTexture;
        
        //Since the rocket image points upwards, set initial direction vector
        this.rocketSprite.direction = new Vector3(0,-1,0);
        
        rt = this.app.getGraphicsDevice().getRenderTarget();
        this.rocketSprite.position = new Vector3(rt.width / 2, rt.height / 2,0);
        this.allSprites.push(this.rocketSprite);
    },
    
    /**
    * Requests all of the sprites needed in the game to be loaded
    */
    loadContent: function () {
    
        //Load all of the sprite textures need in the game
        this.app.content.loadTextureAsync(new TextureLoadRequest('./background830x664.jpg',
                                                                 'background',
                                                                 this));
                                                               
        this.app.content.loadTextureAsync(new TextureLoadRequest('./asteroid200x200.png',
                                                                 'asteroid',
                                                                 this));
                                                               
        this.app.content.loadTextureAsync(new TextureLoadRequest('./rocket.png',
                                                                 'rocket',
                                                                 this));
    },
    
    /**
    * The Content::loadTextureAsync call expects the delegate to have a signature in the object
    * like the function below.  This is called in the success and error cases.
    * @param {ImageLoadResponse} response
    */
    loadTextureCompleted: function (response) {

        if(response.error != null) {
            alert('failed to load image resources:' + response.token);
            return;
        }
        
        //We pass in a string as the 'token' parameter when loading the texture
        //so that we can distinguish them here
        if(response.token === 'background') {
            this.backgroundTexture = response.texture;
        }
        else if(response.token === 'rocket') {
            this.rocketTexture = response.texture;
        }
        else if(response.token === 'asteroid') {
            this.asteroidTexture = response.texture;
        }
        
        //Once all of the sprites have loaded we can now start
        //rendering - this call is important otherwise nothing
        //will be drawn to the screen
        if(this.asteroidTexture != null && 
           this.backgroundTexture != null &&
           this.rocketTexture != null) {
            this.createRocket();
            this.createAsteroids();
            this.app.startRendering(); 
        }
    },
    
    /**
    * Returns the window that the asteroids game user input will be captured in
    * @return {JsBlitWindow}
    */
    getJsBlitWindow: function () {
        return this.jsBlitWindow;
    },
    
    /**
    * Called by the JsBlitApp instance, allowing the game to update any state
    * based on user input such as keyboard and mouse
    * @param {GraphicsDevice} graphicsDevice - rendering abstraction
    * @param {AppTime} appTime - game time information
    * @param {MouseState} mouseState - current mouse state
    * @param {KeyboardState} keyboardState - current keyboard state
    */
    update: function (graphicsDevice, appTime, mouseState, keyboardState) {
    
        var spriteIndex, currentSprite, rtWidth, rtHeight, velocityPressed;
    
        if(this.rocketSprite == null) {
            return;
        }
        
        velocityPressed = false;
        
        //TODO: Should be a bit mask of key codes
        if(keyboardState.keyCode != null) {
            switch(keyboardState.keyCode) {
                case 188:
                    //<
                    this.rocketSprite.addRotation(MathHelper.degreesToRadians(-10));
                    break;
                    
                case 190:
                    //>
                    this.rocketSprite.addRotation(MathHelper.degreesToRadians(10));
                    break;
                    
                case 70:
                    //f
                    break;
                    
                case 82:
                    //r
                    velocityPressed = true;
                    this.rocketSprite.addVelocity(0.5);
                    break;
            }
        }
        
        //Make sure we put some friction on the rocket
        if(!velocityPressed) {
            this.rocketSprite.addVelocity(-0.25);
        }
        
        //Move all of the sprites and keep in the bounds of the render target
        rtWidth = graphicsDevice.getRenderTarget().width;
        rtHeight = graphicsDevice.getRenderTarget().height;
        for(spriteIndex = 0; spriteIndex<this.allSprites.length; ++spriteIndex) {
            currentSprite = this.allSprites[spriteIndex];
            currentSprite.update();
            
            if(currentSprite.position.x > rtWidth) {
                currentSprite.position.x = 0;
            }
            if(currentSprite.position.x < 0) {
                currentSprite.position.x = rtWidth;
            }
            if(currentSprite.position.y > rtHeight) {
                currentSprite.position.y = 0;
            }
            if(currentSprite.position.y < 0) {
                currentSprite.position.y = rtHeight;
            }
        }
    },
    
    /**
    * Called by the JsBlitApp instance, allow the game to render a scene
    * @param {GraphicsDevice} graphicsDevice
    * @param {AppTime} appTime
    */
    render: function (graphicsDevice, appTime) {

        //jsBlit is an immediate API, meaning you have to redraw
        //the entire scene each frame, its not a retained system like SVG or Silverlight.
        
        var spriteIndex, currentSprite, drawOptions, halfDimension;
        
        //Clear the render targe completely, since we are rendering a background
        //image over the entire render target we don't have to do this but it is
        //here for completeness
        //graphicsDevice.clear(Color.white);
        
        //In our case we just have a bunch of sprites that we want to draw 
        //each frame, all calls must be between the begin and end calls
        
        this.spriteBatch.begin(SpriteSortOrder.inOrder, true);
        
        //Examples of other properties we can set
        //drawOptions.sourceRect = new Rect2D(300, 400, 200, 200);
        //drawOptions.destinationRect = new Rect2D(100, 200, 600, 200);
        //drawOptions.rotation = MathHelper.degreesToRadians(this.angle);
        //drawOptions.origin = new Vector2(this.backgroundTexture.width / 2, this.backgroundTexture.height / 2);
        
        drawOptions = new SpriteDrawOptions();
        this.spriteBatch.draw(this.backgroundTexture, drawOptions);
        
        for(spriteIndex = 0; spriteIndex<this.allSprites.length; ++spriteIndex){
            currentSprite = this.allSprites[spriteIndex];
            
            //TODO: Reuse these, don't create every frame
            drawOptions = new SpriteDrawOptions();
            halfDimension = new Vector3(currentSprite.texture.width / 2, currentSprite.texture.height / 2, 0);
            drawOptions.position = currentSprite.position.subtract(halfDimension);
            drawOptions.rotation = currentSprite.totalRotation;
            drawOptions.origin = currentSprite.position;
            drawOptions.scale = currentSprite.scale;
            
            this.spriteBatch.draw(currentSprite.texture, drawOptions);  
        }
        
        this.spriteBatch.end();
    }
};

var asteroids = new Asteroids();
asteroids.loadContent();