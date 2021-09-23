FROM node:14-alpine as module-install-stage
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production

FROM node:14-alpine as build-stage
COPY --from=module-install-stage /usr/src/app/node_modules/ /usr/src/app/node_modules
WORKDIR /usr/src/app
COPY . .
RUN yarn build

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /usr/src/app/build/ .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
