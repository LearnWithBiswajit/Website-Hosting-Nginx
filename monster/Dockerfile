# Pull node 23 image
FROM node:23-alpine
# This is the working directory
WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./
# Install pm2
RUN npm i pm2 -g --force
# Install all required node modules packages
RUN npm i --force
# Bundle app source
COPY . .
# Build the application
RUN npm run build
# Expose port
EXPOSE 3000
# Execute the command to start the server
CMD ["node", "dist/main.js"]