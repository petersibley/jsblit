MERGEDFILE=jsblit.js
OUTFILE=jsblit-compiled.js
COMPILERJAR=../../tools/compiler-latest/compiler.jar 
RHINOJAR=../../tools/env-js/rhino/js.jar 
JSLINT=../../tools/env-js/misc/jslint.js
JSDOC=../../tools/jsdoc_toolkit/2.3.2/
DOCOUTDIR=./docs/
SRC:=$(filter-out $(OUTFILE), $(filter-out $(MERGEDFILE),$(wildcard *.js)))
JAVA=java
all: compile
concatenate : $(SRC) 
	rm -f $(MERGEDFILE)
	cat $(SRC) >> $(MERGEDFILE)

clean:
	rm -f $(MERGEDFILE) $(OUTFILE)

lint: $(MERGEDFILE)
	$(JAVA) -jar $(RHINOJAR)  $(JSLINT) $<

compile: lint concatenate
	$(JAVA) -jar $(COMPILERJAR) --js $(MERGEDFILE)  --js_output_file $(OUTFILE)

test: concatenate
	open tests/index.html

documentation:	concatenate
	$(JAVA) -jar $(JSDOC)jsrun.jar $(JSDOC)app/run.js -d=$(DOCOUTDIR) -a -t=$(JSDOC)templates/jsdoc $(MERGEDFILE)
