#bin/bash

@echo off

cd music
touch Dockerfile
docker build -t music
docker run -dp 127.0.0.1:3000:3000 getting-started
docker ps

# {
#  "image": "mcr.microsoft.com/devcontainers/universal:2",
#  "features": {
#  }
#}

cat <<-'EOM'

And the changes should be applied upon saves!

EOM
