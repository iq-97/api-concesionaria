FROM node:10-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src

# check files list
RUN ls -a

RUN npm install \
    && npm i --global nodemon \
    && npm i --global typescript
#RUN npm i 
#RUN npm typescript -g
#RUN npm run build

EXPOSE ${PORT}

CMD [ "npm","run", "start:dev" ]