FROM node:lts-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["node","src/server.js"]

EXPOSE 8000