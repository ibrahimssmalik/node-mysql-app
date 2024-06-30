# JoinUs Web App incorporating MySQL Database

## Synopsis

JoinUs is a simple web app that collects user email addresses and stores them in a MySQL database.

## Contents

- `README.md`: Readme file for the app.
- `schema.sql`: SQL script for creating the MySQL database schema.
- `exercises.sql`: SQL script for database analysis.
- `app.js`: JavaScript file to populate the database with 500 random users.
- `JoinUs/app.js`: JavaScript file to collect user email and store it in the database.
- `JoinUs/views/home.js`: HTML markup file for the web page layout.
- `JoinUs/public/app.css`: CSS file for styling the web page.

## Version Information

April 2024 - Final version of web app.

## How to Run the Program

1. Open your preferred Integrated Development Environment (IDE).
2. Run `schema.sql` to create the MySQL database schema.
3. Open `app.js`, include your MySQL root user password, and run the script to populate the database with 500 random users.
4. Navigate to the `JoinUs` directory and open `app.js`.
5. Include your MySQL root user password in the appropriate section of the script.
6. Run `localhost:8080` in your web browser to access the web app.

## Dependencies

- MySQL

## Security Considerations

Ensure that sensitive information such as passwords is handled securely in your scripts.