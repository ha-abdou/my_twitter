FROM node

EXPOSE 3000

RUN npm install -g nodemon

RUN npm install -g typescript

RUN npm install -g ts-node

RUN npm install -g tslint

RUN git config --global user.email "hassaineabdelillah@gmail.com"

RUN git config --global user.name "habdel-i"

RUN apt -y update && apt install -y git-flow

RUN mkdir /app

WORKDIR /app

CMD ["sleep", "infinity"]