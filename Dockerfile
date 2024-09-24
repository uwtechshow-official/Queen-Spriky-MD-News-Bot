# Use Node.js LTS version based on Debian Buster
FROM node:lts-buster

# Install necessary dependencies: ffmpeg, imagemagick, webp
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json .

# Install npm dependencies and globally install qrcode-terminal and pm2
RUN npm install && npm install -g qrcode-terminal pm2

# Copy the entire project to the container
COPY . .

# Expose port 5000 (if your app uses this port)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
