FROM node:20-alpine

WORKDIR /app

#Dependencies installation
COPY package*.json ./
RUN npm install

#Folder preparation
COPY .prettierrc .
COPY *.json .
COPY .eslintrc.js .
COPY ./src ./src

#Exposed port
EXPOSE 3000

#Command execution
CMD ["npm", "run", "start"]