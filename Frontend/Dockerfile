FROM node:18-alpine AS builder

WORKDIR /Frontend

COPY package*.json .

RUN npm install

COPY . . 

RUN npm run build
 

FROM nginx:alpine

COPY --from=builder /Frontend/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
