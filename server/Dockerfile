FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 7000

CMD ["npm" , "run", "dev"]
