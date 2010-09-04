OUTFILE=jsblit.js
SRC:=$(filter-out $(OUTFILE),$(wildcard *.js))
concatenate:
	rm -f $(OUTFILE)
	cat $(SRC) >> $(OUTFILE)

clean:
	rm -f $(OUTFILE)

all: clean concatenate

test: all
	open index.html

