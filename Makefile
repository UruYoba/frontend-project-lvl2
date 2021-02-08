lint:
	npx eslint .
install:
	npm install
publish:
	npm publish --dry-run
	sudo npm link
test:
	npm test