FROM node:20

WORKDIR /goit-node-rest-api

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "app"]
