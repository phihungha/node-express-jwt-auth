FROM node:19-alpine3.16
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev
COPY . .
CMD ["node", "app.js"]
EXPOSE 3000