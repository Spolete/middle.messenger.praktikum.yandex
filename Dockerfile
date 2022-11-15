FROM --platform=linux/amd64 node:16.15.0

WORKDIR /var/www

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "./server.js"]
