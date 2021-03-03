FROM ruby:2.6.6-slim-buster

RUN apt-get update -qq && apt-get install -yq --no-install-recommends \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN rm -f .bundle/config
RUN gem install bundler 

RUN mkdir /app
WORKDIR /app
