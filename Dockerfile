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

FROM node:14-alpine
ENV NODE_ENV=production
COPY --from=build-stage /usr/src/app/build/ /usr/src/app/build
WORKDIR /usr/src/app
RUN npm install -g serve
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD serve -s /usr/src/app/build -l 3000
