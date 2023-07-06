# This Dockerfile builds a Docker image for a React.js project
# using npm packages with Node.js version 16.

# Use the official Node.js 16 image as the base image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the project files into the container
COPY . .

# Install the npm packages
RUN npm install

# Build the React app
RUN npm run build

# Expose the port that the React app will be running on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]