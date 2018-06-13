FROM node:8

WORKDIR /src/app
COPY package.json ./
RUN ["npm", "install"]
RUN npm install pm2 --global --quiet

COPY . .
CMD ["node", "./app.js"]
