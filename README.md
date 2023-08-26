# Authentication using Express-session

Web application built using the Model-View-Controller (MVC) architecture and integrated with express-session for managing user sessions. This README provides an overview of the project structure, key components, and how to set up and run the application.

## Table of Contents

-   Introduction
-   Features
-   Prerequisites
-   Installation
-   Configuration
-   Project Structure
-   Usage

## Introduction

It is a web application that follows the MVC design pattern, allowing for a clear separation of concerns between different aspects of the application. It uses Express.js as the web framework and integrates the `express-session` middleware for handling user sessions. It uses ejs for templating the pages.

## Features

-   **MVC Architecture:** The application is structured using the Model-View-Controller architecture to ensure modularity and separation of concerns.

-   **User Authentication:** express-session is used to manage user sessions, providing a secure and efficient way to handle user authentication and persistence across requests.

-   **Password Hashing:** User passwords are securely hashed using the `bcrypt` library before being stored in the database, ensuring the safety of user data.

-   **MongoDB Integration:** The application uses MongoDB as the database to store and retrieve data, providing a flexible and scalable solution for data management.

-   **Scalable Design:** The MVC architecture promotes scalability by decoupling the application into three core components: Models, Views, and Controllers.

-   **Customizable Views:** The Views can be easily customized using a templating engine of your choice (e.g., EJS, Handlebars) to render dynamic content.

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js and npm (Node Package Manager)
-   Git (optional, for cloning the repository)
-   MongoDB

## Installation

1. Clone this repository to your local machine using git clone or download the ZIP archive.

1. Navigate to the project directory:
   `cd express-session-authentication`
1. Install the required dependencies:
   `npm install`

## Configuration

1.  Rename the .env.example file to .env.

1.  Modify the .env file to set up your environment variables, such as the session secret and database connection details.

## Project Structure

The project follows a standard MVC structure:

-   app.js: Entry point of the application where Express is configured and initialized.

-   controllers/: Holds the controller logic for different routes and actions.

-   models/: Defines the data models and interacts with the MongoDB database.

-   views/: Contains the view templates that are rendered by the application.

-   public/: Directory for static assets like stylesheets, images, and client-side scripts.

-   routes/: Defines the routes for different parts of the application.

-   db/: Contains function for connecting to database.

-   middleware/: Contains a middleware function which checks if user is authenticated or not.

## Usage

1. Run the MongoDB server.

1. Run the application:
   `npm start`
1. Access the application in your web browser at http://localhost:3000.

## Demo

https://github.com/Pankaj-Panday/express-session-authentication/assets/55234406/680284a4-c9fe-4288-a8f8-a2bd3db8494c

