
FROM node:14

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm i nodemon
RUN npm i ts-node
RUN npm i typescript
RUN npm install

COPY . .

EXPOSE 3001

CMD  ["npm", "start"]