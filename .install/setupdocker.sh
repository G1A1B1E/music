cd music
touch Dockerfile
docker build -t music
docker run -dp 127.0.0.1:3000:3000 getting-started
docker ps
