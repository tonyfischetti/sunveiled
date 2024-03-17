
all: deploy

.PHONY: deploy
deploy:
	rsync -Phav ./ scripturetalk:~/public_html
