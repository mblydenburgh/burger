DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger VARCHAR(255),
    eaten BOOLEAN
);

INSERT INTO burgers (burger,eaten)
VALUES ("BBQ Burger",false), ("Bacon Cheese Burger",false), ("Southwestern Burger",false), ("Happy-Meal",true);