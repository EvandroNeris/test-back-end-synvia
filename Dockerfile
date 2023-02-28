FROM node:16.18.0

WORKDIR /node/app

ENV PORT=3333 SECRET_KEY=synvia NODE_ENV=development

EXPOSE ${PORT}

COPY package*.json ./

COPY tsconfig.json ./

COPY . .

RUN NODE_ENV=development npm install

RUN npm uninstall bcrypt 

RUN npm install bcrypt 

ENTRYPOINT [ "npm", "start" ]
