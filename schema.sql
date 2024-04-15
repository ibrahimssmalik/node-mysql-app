DROP DATABASE IF EXISTS join_us;
CREATE DATABASE join_us;
USE join_us;

CREATE TABLE users (
	email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Data Insert Using Node.JS
SELECT *
FROM users;