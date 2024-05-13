# Neokred MERN Interview Task: Fullstack Application with Registration and Login Functionality

This project is a fullstack application implementing registration and login functionality using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application uses JWT tokens for user authentication, allowing only authenticated users to access specific pages.

## Tech Stack Used

- **MongoDB**: Database hosted on MongoDB Atlas.
- **Express.js**: Backend server framework.
- **React.js**: Frontend JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime environment for server-side scripting.

The frontend design is implemented using **Material UI** and state management with **Redux** for a more organized and efficient application structure.

## Project Setup

### Frontend

1. **Clone Repository**
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**
   ```
   cd Client
   npm install
   ```

3. **Start Frontend Server**
   ```
   npm start
   ```

### Backend

1. **Install Dependencies**
   ```
   cd Server
   npm install
   PORT=7777
   ```


2. **Start Backend Server**
   ```
   npm start
   ```

## Functionality Implemented

### Registration Page

- Implemented registration form with validations for fields such as Full Name, Email Address, Password, Date of Birth, etc.
- Frontend and backend validations ensure data integrity and correctness.

### Login Page

- Login form with email and password validation.
- JWT token generation upon successful login.

### Profile Page

- Display user details from registration.
- Accessible only to authenticated users.

### Authentication and Authorization

- JWT tokens used for user authentication and authorization.
- Token stored securely on the client-side and included in subsequent requests.
- Token expiry time set to 5 minutes with automatic redirection on expiry.

### Logout Functionality

- Logout button clears JWT token and logs out the user securely.
- Redirects user to the login page to end the session.

## Project Submission

The project is submitted on GitHub with both frontend and backend code in the same repository for easy access and review.
