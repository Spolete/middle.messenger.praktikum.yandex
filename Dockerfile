FROM --platform=linux/amd64 node:16.15.0 AS builder

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/amd64 node:16.15.0 AS production

WORKDIR /var/www/app

COPY --from=builder /var/www/app/package*.json ./

RUN npm install --omit=dev

COPY --from=builder /var/www/app/dist ./dist

COPY --from=builder /var/www/app/server.js ./

EXPOSE 3000

CMD ["node", "./server.js"]
