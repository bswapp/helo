CREATE TABLE helo (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password VARCHAR(100),
    profile_pic TEXT
);
CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR(75),
img TEXT,
subtitle TEXT,
author_id INT REFERENCES helo (id)
)