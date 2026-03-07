FROM node:18-alpine

WORKDIR /Backend

COPY package*.json .

RUN npm install

COPY . .

WORKDIR /Backend/src

EXPOSE 3000

CMD ["node", "--no-warnings", "app.js"]

