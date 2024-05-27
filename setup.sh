#!/bin/bash
# for debug run this
# docker build --no-cache --progress=plain -f ./docker/Dockerfile . -t my-website-image
docker build -f ./docker/Dockerfile . -t my-website-image

docker run --rm -d --name server --expose 8080 -e PORT=3001 -p 8080:3001 my-website-image