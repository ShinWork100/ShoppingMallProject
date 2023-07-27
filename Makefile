# Variables
NODE = node
NPM = npm
APP_ENTRY = server.js

# Targets
.PHONY: all clean run

all: install run

install:
	$(NPM) install

run:
	$(NODE) $(APP_ENTRY)

clean:
	rm -rf node_modules

.ONESHELL:
runserver:
	@cd my-backend && node server.js

.ONESHELL:
runweb:
	@cd web && npm start

# Add more rules as needed for building, testing, etc.
