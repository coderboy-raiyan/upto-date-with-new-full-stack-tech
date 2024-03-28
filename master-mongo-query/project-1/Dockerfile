FROM node

WORKDIR /app

COPY package.json /app

RUN yarn 

COPY . /app

EXPOSE 5000

CMD [ "yarn", "dev" ]