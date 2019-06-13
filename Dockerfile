FROM node:11.14.0-alpine

ENV INSTALL_PATH /app

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY . .

RUN yarn install

USER node

EXPOSE 8000

CMD ["node", "app.js"]