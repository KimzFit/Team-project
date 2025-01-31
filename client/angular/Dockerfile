# FROM node:alpine

# # WORKDIR /usr/src/app
# WORKDIR /app

# COPY . .

# RUN npm install -g @angular/cli

# RUN npm install

# CMD ["ng", "serve", "--host", "0.0.0.0"]

# ใช้ Node.js เวอร์ชัน Alpine เพื่อลดขนาด Image
FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
