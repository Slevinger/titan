# Use the official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Compile TypeScript
RUN npm run build

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.js"]
