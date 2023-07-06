# Use an official Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (e.g., 3000) for accessing the React app
EXPOSE 3000

# Set the command to start the React app when the container starts
CMD ["npm", "start"]