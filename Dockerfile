# Build stage: Use Node.js base image
FROM node:16 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy project files to the working directory
COPY . .

# Install dependencies and build the project
RUN npm install
RUN npm run build

# Run stage: Use Nginx base image
FROM nginx:alpine

# Copy the built project files from the build stage to the Nginx directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
