MERGEDFILE=jsblit.js
OUTFILE=jsblit-compiled.js
COMPILERJAR=../../tools/compiler-latest/compiler.jar 
RHINOJAR=../../tools/env-js/rhino/js.jar 
JSLINT=../../tools/env-js/misc/jslint.js
JSDOC=../../tools/jsdoc_toolkit/2.3.2/
DOCOUTDIR=./docs/
SRC=MathHelper.js Vector2.js Vector3.js Vector4.js Matrix4x4.js Quaternion.js 
JAVA=java
all:clean lint compile documentation
$(MERGEDFILE) : $(SRC) 
	rm -f $(MERGEDFILE)
	cat $(SRC) >> $(MERGEDFILE)

clean:
	rm -f $(MERGEDFILE) $(OUTFILE)
	rm -rf $(DOCOUTDIR)


lint: $(MERGEDFILE)
	$(JAVA) -jar $(RHINOJAR)  $(JSLINT) $< 

compile: $(SRC)
	$(JAVA) -jar $(COMPILERJAR)  --warning_level=VERBOSE $(patsubst %,--js %,$(SRC)) --js_output_file $(OUTFILE)

test: compile 
	open tests/index.html

documentation:	$(MERGEDFILE)
	$(JAVA) -jar $(JSDOC)jsrun.jar $(JSDOC)app/run.js -d=$(DOCOUTDIR) -a -t=$(JSDOC)templates/jsdoc $(MERGEDFILE)
