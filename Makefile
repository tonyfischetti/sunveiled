
all: deploy

.PHONY: deploy
deploy:
	rsync -Phav --delete ./ scripturetalk:~/public_html
