FROM node
WORKDIR /app
COPY application/ /app
RUN pwd
RUN npm install
#RUN npm start

EXPOSE 8080
CMD [ "npm", "start" ]