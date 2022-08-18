/* Se insertan los siguientes registros en la tabla */

INSERT INTO customer_data (first_name, last_name) VALUES('Benito', 'Bodoque');
INSERT INTO customer_data (first_name, last_name) VALUES('Reese', 'Wilkerson');
INSERT INTO customer_data (first_name, last_name) VALUES('Nelson', 'Montz');
INSERT INTO customer_data (first_name, last_name) VALUES('Leonel', 'Messi');
INSERT INTO customer_data (first_name, last_name) VALUES('Rick', 'Sánchez');

INSERT INTO customer_data (first_name, last_name) VALUES('Cristiano', 'Ronaldo');
INSERT INTO customer_data (first_name, last_name) VALUES('Lois', 'Wilkerson');
INSERT INTO customer_data (first_name, last_name) VALUES('Perlita', 'Cangrejo');
INSERT INTO customer_data (first_name, last_name) VALUES('Patricio', 'Estrella');
INSERT INTO customer_data (first_name, last_name) VALUES('Espergencia', 'Valdés');

INSERT INTO customer_data (first_name, last_name) VALUES('Edna', 'Krabappel');
INSERT INTO customer_data (first_name, last_name) VALUES('Lois', 'Wilkerson');
INSERT INTO customer_data (first_name, last_name) VALUES('Eric', 'Cartman');
INSERT INTO customer_data (first_name, last_name) VALUES('Kenny', 'McCormick');
INSERT INTO customer_data (first_name, last_name) VALUES('Thomas', 'Anderson');

INSERT INTO customer_data (first_name, last_name) VALUES('Marty', 'McFly');
INSERT INTO customer_data (first_name, last_name) VALUES('Saul', 'Goodman');
INSERT INTO customer_data (first_name, last_name) VALUES('Federico', 'Bardón');
INSERT INTO customer_data (first_name, last_name) VALUES('Walter', 'White');
INSERT INTO customer_data (first_name, last_name) VALUES('Emmett', 'Brown');

INSERT INTO customer_data (first_name, last_name) VALUES('Pedro', 'Navajas');


INSERT INTO product (description, price) VALUES ('Guitarra ameno', '1500');
INSERT INTO product (description, price) VALUES ('Cibersecurity for dummies', '500');
INSERT INTO product (description, price) VALUES ('Laptop lenovo', '4000');
INSERT INTO product (description, price) VALUES ('Xbox series', '15000');
INSERT INTO product (description, price) VALUES ('Control play 2', '300');
INSERT INTO product (description, price) VALUES ('Camisita fachera', '400');
INSERT INTO product (description, price) VALUES ('Torta de jaiba', '15');
INSERT INTO product (description, price) VALUES ('Delfin greenpeace', '100');

INSERT INTO role (description, role_type) VALUES ('La persona más owner', 'owner');
INSERT INTO role (description, role_type) VALUES ('El talento es importante en una empresa', 'empleadx');
INSERT INTO role (description, role_type) VALUES ('El cliente siempre tiene la razoooó', 'cliente');


INSERT INTO customer_order (description, status, customer_id_customer) VALUES ('Venta del lunes 24/03', 'Vendido', '3');
INSERT INTO customer_order (description, status, customer_id_customer) VALUES ('Venta del martes 25/03', 'En tránsito', '9');
INSERT INTO customer_order (description, status, customer_id_customer) VALUES ('Venta del miércoles 26/03', 'Vendido', '6');
INSERT INTO customer_order (description, status, customer_id_customer) VALUES ('Venta del miércoles 26/03', 'Vendido', '8');
INSERT INTO customer_order (description, status, customer_id_customer) VALUES ('Venta del miércoles 26/03', 'En tránsito', '11');
INSERT INTO customer_order (description, status, customer_id_customer) VALUES ('Venta del jueves 27/03', 'En tránsito', '17');

INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('1', '1');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('2', '3');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('2', '5');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('3', '2');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('4', '2');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('4', '2');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('4', '2');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('5', '5');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('6', '4');
INSERT INTO customer_order_products (order_order_id, products_product_id) VALUES ('6', '1');