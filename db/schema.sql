DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE dept (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) 
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobTitle VARCHAR(25) NOT NULL,
    salary DECIMAL,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES dept(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(25),
    lastName VARCHAR(25),
    role_id INT,
    dept_id INT, 
    salary DECIMAL,
    managerID INT
)