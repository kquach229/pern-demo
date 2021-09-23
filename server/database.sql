-- Create todo database
CREATE DATABASE perntodo;

-- Create the table and define data types/constraints
CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);