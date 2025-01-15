FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# RUN npm run test

COPY . ./app/

EXPOSE 3000

CMD ["npm", "run", "dev"]
