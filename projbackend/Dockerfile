FROM node:14-slim

WORKDIR /usr/src/app

COPY  ./package-lock.json ./
COPY  ./package.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
