# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production
COPY . .

EXPOSE 9000
CMD [ "node", "app.js" ]
