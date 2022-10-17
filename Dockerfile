FROM node:16

RUN npm install --location=global truffle ganache

WORKDIR /app

# Expose ganache port
EXPOSE 8545
