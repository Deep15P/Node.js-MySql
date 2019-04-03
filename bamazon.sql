DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL (10,2) NULL, 
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone", "mobile", 100.40, 5),
        ("iMac", "computer", 2000.30, 10),
        ("shoes", "clothing", 115.30, 3);

