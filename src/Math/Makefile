MERGEDFILE=jsblit.js
OUTFILE=jsblit-compiled.js
COMPILERJAR=../../tools/compiler-latest/compiler.jar 
RHINOJAR=../../tools/env-js/rhino/js.jar 
JSLINT=../../tools/env-js/misc/jslint.js 
SRC:=$(filter-out $(OUTFILE), $(filter-out $(MERGEDFILE),$(wildcard *.js)))
JAVA=java
all: compile
concatenate : $(SRC) 
	rm -f $(MERGEDFILE)
	cat $(SRC) >> $(MERGEDFILE)
clean:
	rm -f $(MERGEDFILE) $(OUTFILE)
lint: $(SRC)
	for f in $(SRC); do\
		echo -------------------;\
		echo running lint on $$f;\
		echo -------------------;\
		$(JAVA) -jar $(RHINOJAR)  $(JSLINT) $$f;\
		echo -------------------;\
	done

compile: lint concatenate
	$(JAVA) -jar $(COMPILERJAR) --js $(MERGEDFILE)  --js_output_file $(OUTFILE)
test: all
	open index.html

