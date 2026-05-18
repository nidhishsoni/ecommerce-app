CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price INT
);

INSERT INTO products(name, price)
VALUES
('Product 1', 500),
('Product 2', 800);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100)
);