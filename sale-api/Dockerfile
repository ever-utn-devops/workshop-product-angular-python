FROM node:10-alpine
WORKDIR /usr/app
COPY ./sale-api/package*.json ./
RUN npm install
COPY ./sale-api/. .
EXPOSE 3009
CMD [ "node", "server.js" ]

