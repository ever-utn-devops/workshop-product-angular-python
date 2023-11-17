FROM node:10-alpine
WORKDIR /usr/app
COPY ./product-api/package*.json ./
RUN npm install
COPY ./product-api/. .
EXPOSE 3006
CMD [ "node", "server.js" ]