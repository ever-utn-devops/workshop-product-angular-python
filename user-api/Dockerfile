FROM node:10-alpine
WORKDIR /usr/app
COPY ./user-api/package*.json ./
RUN npm install
COPY ./user-api/. .
EXPOSE 3008
CMD [ "node", "server.js" ]
