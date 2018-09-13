FROM node:8-alpine
WORKDIR /opt/app
COPY ["package*.json", "./"]
RUN ["npm", "install"]
COPY ["src", "./src"]
EXPOSE 3000
CMD ["npm", "start"]
