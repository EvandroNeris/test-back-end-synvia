FROM node:alpine
WORKDIR /node/app
COPY package*.json ./
ENV PORT=3333 SECRET_KEY=synvia
EXPOSE ${PORT}
COPY . .
RUN npm i
ENTRYPOINT [ "npm", "start" ]