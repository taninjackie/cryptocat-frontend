FROM node:14-alpine AS builder
ENV NODE_ENV=production
ENV PATH /usr/src/app/node_modules/.bin:$PATH
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --frozen-lockfile
COPY public/ public/
COPY src/ src/
RUN yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build/ .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
