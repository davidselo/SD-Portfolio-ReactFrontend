# First stage, install dependencies.
FROM node:16 as installer

# Change the working directory on the Docker image to /app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the /app directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --ignore-engines

# Second stage, build and run project.
FROM node:16

# Change the working directory on the Docker image to /app
WORKDIR /usr/src/app

COPY --from=installer /usr/src/app/node_modules node_modules
COPY . .

ENV IS_DOCKER=true
ENV NODE_ENV=dev
EXPOSE 3001
CMD ["yarn","start"]