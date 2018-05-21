DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR(100) NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity DECIMAL(10,4) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("300", "Skribblenaut", "Games", "29", "30");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("301", "Minecraft", "Games", "29", "35");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("302", "Farmville", "Games", "29", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("303", "Rolling Sky", "Games", "29", "90");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("304", "Mario Kart", "Games", "29", "15");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("305", "Splatoon", "Games", "29", "22");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("306", "Crossy Road", "Games", "29", "96");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("307", "Overcooked", "Games", "29", "41");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("308", "Cooking Mama", "Games", "29", "39");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("309", "Neko Atsume", "Games", "29", "75");