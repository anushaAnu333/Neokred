Neokred MERN Interview Task: Fullstack Application with Registration and Login Functionality
In this task, I have created a fullstack application with registration and login functionality using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application utilizes JWT tokens for user authentication and ensures that only authenticated users can access certain pages.

Project Setup
I started by setting up the project using the following steps:

Setting up the Project Structure:
Created a new fullstack application project.
Used Express.js for the backend server and React.js for the frontend system.
Utilized MongoDB Atlas for hosting the database.
Design Implementation
I implemented the design files provided for three pages: login, registration, and profile. The goal was not only to achieve functionality but also to pay attention to code quality, organization, and naming conventions.

Registration Page
Implemented the registration page with the following fields and validations (both frontend and backend):

Full Name (Required, alphabetic characters only, max length of 50 characters)
Email Address (Required, valid email format)
Password (Required, min length of 8 characters, at least one uppercase letter and one digit)
Confirm Password (Required, must match the entered password)
Date of Birth (Required, must be a valid date)
Phone Number (Required, valid phone number format with 10 digits)
Address (Required, max length of 100 characters)
City (Required, alphabetic characters only, max length of 50 characters)
State (Required)
Zip Code (Required, 6-digit number)
Country (Required)
Security Question (Required)
Security Answer (Required, max length of 100 characters)
Implemented appropriate form validation to ensure all required fields are filled correctly.

Login Page
Implemented the login page with the following fields and validations:

Email Address (Required, valid email format)
Password (Required, min length of 8 characters)
Included client-side validation to verify that fields are filled correctly.

Profile Page
Implemented the profile page to display details submitted during the registration process. Only authenticated users can access this page.

Authentication and Authorization
Used JWT tokens to authenticate and authorize users:

Generated a JWT token upon successful registration or login.
Stored the token securely on the client-side.
Included the token in subsequent requests to authenticate the user.
Set the JWT token expiry time to 5 minutes.
Redirect on Token Expiry
Implemented logic to redirect the user back to the login page when the JWT token expires after 5 minutes.

Redirect from Login
Ensured that authenticated users are automatically redirected to the profile page when visiting the login page.

Logout Functionality
Included a logout button on the profile page:

Cleared the JWT token and logged the user out upon clicking the logout button.
Redirected the user to the login page to securely end the session.

Project Submission
Submitted the project on GitHub with both frontend and backend code in the same repository.

