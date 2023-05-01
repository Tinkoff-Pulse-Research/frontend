FROM node:latest

WORKDIR /wallet_web
RUN npm install serve -g

COPY . .
EXPOSE 3000
CMD ["serve", ".", "-n"]