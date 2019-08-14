# =============================================================================
# @file    Makefile
# @brief   Makefile for some steps in creating a Lost It! application
# @author  Michael Hucka
# @date    2018-09-13
# @license Please see the file named LICENSE in the project directory
# @website https://github.com/caltechlibrary/lostit
# =============================================================================

# Variables -------------------------------------------------------------------

release	   := $(shell egrep 'version.*=' lostit/__version__.py | awk '{print $$3}' | tr -d "'")
platform   := $(shell python3 -c 'import sys; print(sys.platform)')
distro	   := $(shell python3 -c 'import platform; print(platform.dist()[0].lower())')
linux_vers := $(shell python3 -c 'import platform; print(platform.dist()[1].lower())' | cut -f1-2 -d'.')
macos_vers := $(shell sw_vers -productVersion 2>/dev/null | cut -f1-2 -d'.' || true)
github-css := dev/github-css/github-markdown-css.html

about-file := ABOUT.html
help-file  := lostit/data/help.html

# Main build targets ----------------------------------------------------------

build: | dependencies data-files build-$(platform)

# Platform-specific instructions ----------------------------------------------

build-darwin: $(about-file) $(help-file) dist/LostIt.app
	packagesbuild dev/installers/macos/LostIt.pkgproj
	mv dist/LostIt.pkg dist/LostIt-$(release)-macos-$(macos_vers).pkg 

build-linux: dist/lostit
	(cd dist; tar czf LostIt-$(release)-$(distro)-$(linux_vers).tar.gz lostit)

dist/LostIt.app:
	pyinstaller --clean pyinstaller-$(platform).spec
	sed -i '' -e 's/0.0.0/$(release)/' dist/LostIt.app/Contents/Info.plist
	rm -f dist/LostIt.app/Contents/Info.plist.bak
	rm -f dist/lostit

dependencies:;
	pip3 install -r requirements.txt

data-files: $(about-file) $(help-file)

# Component files placed in the installers ------------------------------------

# Temporary link so that the generic .md -> .html rule works for ABOUT.html.
ABOUT.md: README.md
	ln -s ${<F} ${@F}

%.html: %.md
	pandoc --standalone --quiet -f gfm -H $(github-css) -o $@~ $<
	inliner -n < $@~ > $@
	rm -f $@~

# Miscellaneous directives ----------------------------------------------------

clean: clean-dist clean-html

clean-dist:;
	-rm -fr dist/LostIt.app dist/LostIt.pkg dist/lostit build

clean-html:;
	-rm -fr ABOUT.md ABOUT.html lostit/data/help.html tmp.html

.PHONY: html clean clean-dist clean-html
