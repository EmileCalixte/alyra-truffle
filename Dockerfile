FROM node:16

RUN npm install --location=global truffle

WORKDIR /app
