FROM node:fermium-alpine3.10

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit

COPY src/ ./

ENTRYPOINT [ "node" ]
CMD [ "index.js" ]