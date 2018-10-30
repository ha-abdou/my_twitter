FROM node

EXPOSE 3000

#nodemon
RUN npm install -g nodemon

RUN git config --global user.email "hassaineabdelillah@gmail.com"

RUN git config --global user.name "habdel-i"

RUN apt -y update && apt install -y git-flow

RUN mkdir /app

WORKDIR /app

CMD ["sleep", "infinity"]