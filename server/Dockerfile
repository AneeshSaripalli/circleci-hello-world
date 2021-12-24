FROM node:12.18.1

WORKDIR /app

EXPOSE 80

CMD ["npm", "start"]

COPY package.json .
RUN npm install
COPY tsconfig.json .

COPY src .

RUN npm run build
RUN ls dist