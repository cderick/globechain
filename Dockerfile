FROM node:8.3-alpine
EXPOSE 8080
RUN mkdir /globechain_portf
WORKDIR /globechain_portf
RUN cd /globechain_portf
COPY ./package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]