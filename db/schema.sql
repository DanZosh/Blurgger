-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;


-- departments TABLE
-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT(11) AUTO_INCREMENT NOT NULL,
-- Makes a string column called "burger_name" which cannot contain null --
burger_name VARCHAR(30) NOT NULL,
-- Makes a boolean column called "devoured" which cannot contain null --
devoured BOOLEAN NOT NULL,
-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id);
);

SELECT * FROM burgers;