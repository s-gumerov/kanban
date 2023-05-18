up:
	docker-compose up -d
	yarn lerna run build --scope=client
	yarn lerna run dev --scope=server
	yarn lerna run dev --scope=client

destroy:
	docker-compose stop
	docker-compose rm -f

.PHONY: up destroy # let's go to reserve rules names