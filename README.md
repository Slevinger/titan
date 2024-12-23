# **Mongoose-TypeScript App**

## Overview
This project is a scalable **Node.js** application built with **TypeScript**, **Express**, and **Mongoose**. It includes features for fetching photos from the Pixabay API and managing orders in a **Dockerized MongoDB** database.

 ---

## Features

1. **Fetch Photos**:
    - Fetch a specified number of photo URLs from the Pixabay API.
    - Endpoint: `/api/photos`.

2. **Order Management**:
    - Create an order with user and photo details.
    - Retrieve all orders for a specific user.
    - Endpoints: `/api/orders`.

3. **Scalable and Dockerized**:
    - Easily add new features (e.g., Users, Products).
    - Dockerized environment for MongoDB and the application.

 ---

## Technology Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Dockerized)
- **Language**: TypeScript
- **Dependencies**:
    - `mongoose` for database interactions.
    - `axios` for API calls.
    - `dotenv` for environment variable management.
- **Tooling**:
    - `ts-node` for running TypeScript directly.
    - `nodemon` for development.

 ---

## Getting Started

### Prerequisites

- Docker installed on your system.
- Node.js and npm installed (for local development).

 ---

### Local Development

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/mongoose-typescript-app.git
   cd mongoose-typescript-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB**:
   Ensure you have MongoDB running locally or use Docker:
   ```bash
   docker run -d --name mongo -p 27017:27017 mongo
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

 ---

### Dockerized Setup

1. **Build and Start Services**:
   ```bash
   docker-compose build
   docker-compose up
   ```

2. **Verify Services**:
    - MongoDB: Accessible at `localhost:27017`.
    - Application: Accessible at `http://localhost:3000`.

 ---

## Environment Variables

Configure the `.env` file in the root directory:

 ```dotenv
 PORT=3000
 MONGO_URI=mongodb://root:example@mongo:27017/mongoose-typescript-app
 PIXABAY_API_KEY=45640711-3b2c9c3e0dd9ac6e6a5b798be
 ```

 ---

## API Documentation

### 1. **Fetch Photos**

- **Endpoint**: `GET /api/photos`
- **Description**: Fetches a specified number of photo URLs from the Pixabay API.
- **Query Parameters**:
    - `n` (number): Number of photos to fetch.
- **Response**: Array of photo URLs.

**Example Request**:
 ```bash
 curl "http://localhost:3000/api/photos?n=5"
 ```

**Example Response**:
 ```json
 [
   "https://pixabay.com/photo1.jpg",
   "https://pixabay.com/photo2.jpg" ]
 ```

 ---

### 2. **Create Order**

- **Endpoint**: `POST /api/orders`
- **Description**: Creates a new order with user details and photo URLs.
- **Request Body**:
    - `email` (string): User's email.
    - `fullName` (string): User's full name.
    - `fullAddress` (string): User's address.
    - `images` (array): List of image URLs.
    - `frameColor` (string): Frame color for the photos.
    - `user` (string): User ID.
- **Response**: Created order object.

**Example Request**:
 ```bash
 curl -X POST "http://localhost:3000/api/orders" \
 -H "Content-Type: application/json" \
 -d '{
   "email": "user@example.com",
   "fullName": "John Doe",
   "fullAddress": "123 Main St, City, Country",
   "images": ["https://example.com/photo1.jpg"],
   "frameColor": "black",
   "user": "johndoe"
 }'
 ```

**Example Response**:
 ```json
 {
   "_id": "64c1b9f5e7d1a90012345678",
   "email": "user@example.com",
   "fullName": "John Doe",
   "fullAddress": "123 Main St, City, Country",
   "images": ["https://example.com/photo1.jpg"],
   "frameColor": "black",
   "user": "johndoe",
   "createdAt": "2023-12-23T12:34:56.789Z",
   "updatedAt": "2023-12-23T12:34:56.789Z"
 }
 ```

 ---

### 3. **Get User Orders**

- **Endpoint**: `GET /api/orders/:user`
- **Description**: Retrieves all orders associated with a specific user.
- **Path Parameters**:
    - `user` (string): User ID.
- **Response**: Array of orders.

**Example Request**:
 ```bash
 curl "http://localhost:3000/api/orders/johndoe"
 ```

**Example Response**:
 ```json
 [
   {
     "_id": "64c1b9f5e7d1a90012345678",
     "email": "user@example.com",
     "fullName": "John Doe",
     "fullAddress": "123 Main St, City, Country",
     "images": ["https://example.com/photo1.jpg"],
     "frameColor": "black",
     "user": "johndoe",
     "createdAt": "2023-12-23T12:34:56.789Z",
     "updatedAt": "2023-12-23T12:34:56.789Z"
   }
 ]
 ```

 ---

## Development Scripts

- **Run in Development Mode**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Start Production Build**:
  ```bash
  npm start
  ```

