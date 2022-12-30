FROM node:18

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src

RUN yarn

COPY [".", "/usr/src/"]

EXPOSE 5000

CMD ["yarn", "start"]
