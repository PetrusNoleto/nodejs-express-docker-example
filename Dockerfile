FROM node:20
WORKDIR /home/example/server/
COPY . ./
RUN cd /home/example/server/ && npm install
RUN cd /home/example/server/ && npm run build
EXPOSE 80