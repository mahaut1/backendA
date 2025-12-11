FROM node:20-alpine

WORKDIR /backend-A

COPY package*.json ./

RUN npm ci --silent || npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]