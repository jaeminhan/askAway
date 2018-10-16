DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS users;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    topic_id INT,
    user_id INT,
    created_on TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content text NOT NULL,
    user_id INT,
    created_on TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    created_on TIMESTAMP DEFAULT current_timestamp
);