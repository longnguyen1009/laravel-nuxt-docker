# Image
FROM node:16.13.0-alpine

# Set up work directory

WORKDIR /app

RUN apk update

COPY ./client/package*.json ./
RUN npm i

ENV HOST 0.0.0.0
EXPOSE 4000

CMD yarn dev
