MERGEDFILE=./bin/jsblit.js
OUTFILE=./bin/jsblit-compiled.js
COMPILERJAR=./tools/compiler-latest/compiler.jar 
RHINOJAR=./tools/env-js/rhino/js.jar 
JSLINT=./tools/env-js/misc/jslint.js
JSDOC=./tools/jsdoc_toolkit/2.3.2/
DOCOUTDIR=./docs/
SRC=./src/Math/MathHelper.js \
    ./src/Math/Vector2.js \
    ./src/Math/Vector3.js \
    ./src/Math/Vector4.js \
    ./src/Math/Matrix4x4.js \
    ./src/Math/Quaternion.js \
    ./src/Graphics/Color.js \
    ./src/Graphics/GraphicsHelper.js \
    ./src/Graphics/Frame.js \
    ./src/Graphics/PerspectiveCamera.js \
    ./src/Graphics/Viewport.js \
    ./src/Graphics/SpriteSortOrder.js \
    ./src/Graphics/SpriteDrawOptions.js \
    ./src/Graphics/Rect2D.js \
    ./src/Graphics/GraphicsDevice.js \
    ./src/Graphics/Texture2D.js \
    ./src/Graphics/RenderTarget.js \
    ./src/Graphics/SpriteBatch.js \
    ./src/Content/TextureLoadRequest.js \
    ./src/Content/TextureLoadResponse.js \
    ./src/Content/Content.js \
    ./src/Application/AppTime.js \
    ./src/Application/MouseState.js \
    ./src/Application/KeyboardState.js \
    ./src/Application/JsBlitWindow.js \
    ./src/Application/JsBlitApp.js 
 
JAVA=java
all:clean lint compile documentation testAll
$(MERGEDFILE) : $(SRC) 
	rm -f $(MERGEDFILE)
	cat $(SRC) >> $(MERGEDFILE)

clean:
	rm -f $(MERGEDFILE) $(OUTFILE)
	rm -rf $(DOCOUTDIR)


lint: $(MERGEDFILE)
	$(JAVA) -jar $(RHINOJAR)  $(JSLINT) $< 

compile: clean $(MERGEDFILE)
	$(JAVA) -jar $(COMPILERJAR)  --warning_level=VERBOSE $(patsubst %,--js %,$(SRC)) --js_output_file $(OUTFILE)

testMath: $(MERGEDFILE) compile
	open src/Math/tests/index.html

testGraphics: $(MERGEDFILE) compile
	open src/Graphics/tests/index.html

testAll: $(MERGEDFILE) compile 
	open src/Math/tests/index.html
	open src/Graphics/tests/index.html

documentation:	$(MERGEDFILE)
	$(JAVA) -jar $(JSDOC)jsrun.jar $(JSDOC)app/run.js -d=$(DOCOUTDIR) -a -t=$(JSDOC)templates/jsdoc $(MERGEDFILE)
