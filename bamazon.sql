DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

CREATE TABLE products (
    id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL (10,2) NULL, 
    stock_quantity INT NULL,
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone", "mobile", 100.40, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity
VALUES ("iMac", "computer", 2000.30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "clothing", 115.30, 3);