# MERN Authentication App

This project demonstrates a basic MERN stack application with user authentication and registration. The frontend is built using React, while the backend is powered by Node.js, Express, and MongoDB. The application uses JWT (JSON Web Tokens) for user authentication and bcrypt for password hashing. The communication between the frontend and backend is done using RESTful APIs.

## Project Structure

/mern-auth-app
├── /client         --> React Frontend
└── /server         --> Node.js + Express Backend


### Backend

/server

/config: MongoDB connection configuration.

/controllers: Logic for user registration and login.

/models: User schema for MongoDB.

/routes: API routes for registration, login, and protected profile.

/middleware: JWT authentication middleware.

.env: Environment variables for sensitive info.

server.js: Main entry point for the backend server.


### Frontend

/client

/components: Reusable components (e.g., InputField).

/pages: Contains pages for Register, Login, and Profile.

/utils: Utility functions like Axios instance and authentication utilities.

App.js: Main component for routing and application setup.

index.js: Entry point for the React application.


## Technologies Used

- **Frontend**: React, Axios, React Router DOM
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens), bcryptjs
- **Other**: dotenv, cors

## Features

- **User Registration**: Allows users to create an account with email and password.
- **User Login**: Provides authentication via email and password.
- **Profile Page (Protected)**: Displays user profile data, protected by JWT authentication.
- **JWT Authentication**: Secure authentication using JSON Web Tokens for protected routes.



