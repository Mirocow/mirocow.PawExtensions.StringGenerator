  
.DEFAULT_GOAL := help
.PHONY: build test
.SILENT:

identifier = com.mirocow.PawExtensions.StringGenerator
extensions_dir = $(HOME)/Library/Containers/com.luckymarmot.Paw/Data/Library/Application Support/com.luckymarmot.Paw/Extensions/

## Install the extension
install: clean build
	mkdir -p "$(extensions_dir)$(identifier)/"
	cp -r ./* "$(extensions_dir)$(identifier)/"
