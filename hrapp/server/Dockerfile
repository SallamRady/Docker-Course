# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /index.js

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8989

# Define the command to run the app
CMD ["node", "index.js"]