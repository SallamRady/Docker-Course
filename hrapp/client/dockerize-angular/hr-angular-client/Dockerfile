# Stage 1: Build the Angular application
FROM node:20 AS build

# create working directory
RUN mkdir -p /app

# Set the working directory
WORKDIR /app/

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the Angular application
FROM nginx:alpine

# Copy the build output from Stage 1 to the Nginx html directory
COPY --from=build /app/dist/hr-angular-client /usr/share/nginx/html


# Expose port 4200
EXPOSE 4200

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]