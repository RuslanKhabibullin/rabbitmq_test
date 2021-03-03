# RabbitMQ test example

Just a pet project with Rabbimq setup between different applications using Docker

## Setup

Build applications using Docker:

```
docker-compose build
```

Run containers and install dependencies:

```
docker-compose up -d
docker-compose exec publisher bundle
docker-compose exec consumer npm i
```

Run NodeJS consumer:

```
docker-compose exec consumer node index.js
```

Send example data from Ruby publisher:

```
docker-compose exec publisher ruby main.rb
```
