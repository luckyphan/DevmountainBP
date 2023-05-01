-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    person_id INT,
    product_name VARCHAR(15),
    product_price INT,
    quantity INT
 )
-- Add 5 orders to the orders table.
 INSERT INTO orders(person_ID,product_name,product_price ,quantity)
 VALUES (5,'shampoo',5.99,55),
 (5,'toys',2.99,188), (2,'brushes',3.44,52), (1,'pears',1.99,122), (7,'fishnet',19.99,33), (5,'dogfood',22.99,40)

-- Make orders for at least two different people.
 INSERT INTO orders(person_ID,product_name,product_price ,quantity)
 VALUES (4,'shrimp',12.99,100), (8,'parrots',199.99,12)
-- person_id should be different for different people.

-- Select all the records from the orders table.
SELECT * FROM orders
-- Calculate the total number of products ordered.
SELECT COUNT (*) FROM orders 
-- Calculate the total order price.
SELECT SUM(product_price) FROM orders 
-- Calculate the total order price by a single person_id.
SELECT SUM(product_price) FROM orders WHERE person_id = 5
