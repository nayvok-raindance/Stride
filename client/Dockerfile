FROM node:18-alpine

EXPOSE 3000

WORKDIR /stride-client

COPY package.json package-lock.json ./

RUN npm install --quiet

COPY . .

CMD ["npm", "run", "dev"]