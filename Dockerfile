FROM node

EXPOSE 3000

#nodemon
RUN npm install -g nodemon

RUN mkdir /app

WORKDIR /app

CMD ["sleep", "infinity"]