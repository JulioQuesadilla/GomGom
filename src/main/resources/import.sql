/*USE gomgom;*/
INSERT INTO usuarios(nombre, apellido, username, domicilio, correo, contraseña) VALUES ('Fernanda', 'Castillo', 'admin', 'Av. Miguel Angel de Quevedo No. 432, local B Col. Santa Catarina, Tampico, Tamaulipas CP. 04000', 'fernanda@com', 'GomGom123^!ZzdWz3254?)--');
INSERT INTO usuarios(nombre, apellido, username, domicilio, correo, contraseña) VALUES ('Serafín', 'Uribe Valdés', 'serafdulces', 'Periferico Paseo de la Republica 2630, Tampico, Tamaulipas CP. 58297', 'serafincin@gmail.com', 'serafincontra1');
INSERT INTO usuarios(nombre, apellido, username, domicilio, correo, contraseña) VALUES ('Abue', 'Glez', 'abuehackerman', 'Calle Patzcuaro 352, Unidad Habitacional Diplomáticos de México, Colonia Alighieri Dante, CP. 35440, Tampico, Tamaulipas', 'abueloco@gmail.com', 'abuehackerman123');
INSERT INTO usuarios(nombre, apellido, username, domicilio, correo, contraseña) VALUES ('Patricia Marcela', 'Solorio Verduzco', 'paty_chilitos', 'Blvd. Harold R. Pape 1806, Fraccionamiento Villas del Temporal, Tampico, Tamaulipas, CP. 55445', 'patimar_y_sol.sv@hotmail.com', 'contraseñagom');
INSERT INTO usuarios(nombre, apellido, username, domicilio, correo, contraseña) VALUES ('Dolores', 'Baeza Ramírez', 'dbrzG', 'Av Yaxchilan 80, Benito Juárez entre Madero e Ignacio López, CP.3333, Tampico', 'dbrz_baeza.correopersonal@outlook.com', 'dbrzGomgom');



INSERT INTO roles(rol) VALUES ('admin');
INSERT INTO roles(rol) VALUES ('empleado');
INSERT INTO roles(rol) VALUES ('cliente');



INSERT INTO empleados(id_usuario, id_roles, rfc, salario, descuento) VALUES (1, 1, '-----', '0', '99');
INSERT INTO empleados(id_usuario, id_roles, rfc, salario, descuento) VALUES (4, 2, 'SVPM910625JRA', '6000', '0');



INSERT INTO clientes(id_usuario, id_roles) VALUES (2, 3);
INSERT INTO clientes(id_usuario, id_roles) VALUES (3, 3);
INSERT INTO clientes(id_usuario, id_roles) VALUES (5, 3);




INSERT INTO cotizaciones_eventos(id_usuario, fecha, evento, num_personas, presupuesto, telefono, descripcion) VALUES (4, '2022-10-01', 'Bautizo', 100, 500, 5524856969,'Gomitas de colores tenues que combinene con la celebración');
INSERT INTO cotizaciones_eventos(id_usuario, fecha, evento, num_personas, presupuesto, telefono, descripcion) VALUES (2, '2022-11-01', 'Cumpleaños', 50, 800, 5538469174,'Gomitas dulces y coloridas para niños');
INSERT INTO cotizaciones_eventos(id_usuario, fecha, evento, num_personas, presupuesto, telefono, descripcion) VALUES (5, '2022-08-26', 'Boda', 350, 999, 5634979030,'Gomitas para centros de mesa con colores sobrios');
INSERT INTO cotizaciones_eventos(id_usuario, fecha, evento, num_personas, presupuesto, telefono, descripcion) VALUES (3, '2022-09-15', 'Otro', 25, 200, 5522058986,'Gomitas con colores patrios');




INSERT INTO nombre_paquete (nombre_paquete) VALUES ('Paquete 50');
INSERT INTO nombre_paquete (nombre_paquete) VALUES ('Paquete 75');
INSERT INTO nombre_paquete (nombre_paquete) VALUES ('Paquete 100');
INSERT INTO nombre_paquete (nombre_paquete) VALUES ('Paquete 150');
INSERT INTO nombre_paquete (nombre_paquete) VALUES ('Paquete 200');
INSERT INTO nombre_paquete (nombre_paquete) VALUES ('Paquete 250');




INSERT INTO paquetes(id_nombre_paquete, precio) VALUES (1, 50);
INSERT INTO paquetes(id_nombre_paquete, precio) VALUES (2, 75);
INSERT INTO paquetes(id_nombre_paquete, precio) VALUES (3, 100);
INSERT INTO paquetes(id_nombre_paquete, precio) VALUES (4, 150);
INSERT INTO paquetes(id_nombre_paquete, precio) VALUES (5, 200);
INSERT INTO paquetes(id_nombre_paquete, precio) VALUES (6, 250);




INSERT INTO gomitas (nombre, imagen) VALUES ('Rockabolas', 'https://i.ibb.co/Gcd1bH4/74990248-6569-4d43-bf15-4abbea76d405.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Cherry Sours', 'https://i.ibb.co/9w97nvW/a404a659-01ae-40da-ac28-76d1f588bc53.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Skwinkles', 'https://i.ibb.co/wh3GdW9/skwinkles.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Aros de Durazno', 'https://i.ibb.co/4KsBvwQ/Gomitas-aro.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Mangomitas', 'https://i.ibb.co/Gp3pXwZ/mango-enchilado.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Winis Enchilados', 'https://i.ibb.co/vj8vZWM/a04c0a7e-5a42-4707-bf6c-3e4b9b4c8a4c.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Picafresas', 'https://i.ibb.co/Rb6rHwL/unnamed.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Picasandía', 'https://i.ibb.co/1qgTNL3/97f769ce-4e4e-4741-b2b5-811cc0420136.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Gusano Enchilado', 'https://i.ibb.co/BjZqbx4/gusano-enchi.jpg');
INSERT INTO gomitas (nombre, imagen) VALUES ('Tamarinditos', 'https://i.ibb.co/hYTYvKn/b3c8142b-0d8f-417f-ac75-a46235682b70.jpg');

--



INSERT INTO has_chamoy(has_chamoy) VALUES ('No tiene chamoy');
INSERT INTO has_chamoy(has_chamoy) VALUES ('Sí tiene chamoy');



SELECT * FROM pedidos;

ALTER TABLE pedidos AUTO_INCREMENT= 20;
-- Paquetes de un cliente
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (1, 6, 2, '2022-10-01', 500.00, 1);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (1, 6, 3, '2022-10-01', 500.00, 1);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (1, 6, 1, '2022-10-01', 500.00, 1);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (1, 6, 9, '2022-10-01', 500.00, 1);

INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (1, 6, 9, '2022-10-01', 500.00, 1);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (1, 6, 6, '2022-10-01', 500.00, 1);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (1, 6, 7, '2022-10-01', 500.00, 1);

 -- Paquetes de otrx clientx
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 5, 6, '2022-11-01', 760.00, 2);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 5, 3, '2022-11-01', 760.00, 2);

INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 5, 6, '2022-11-01', 760.00, 2);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 5, 3, '2022-11-01', 760.00, 2);

INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 5, 6, '2022-11-01', 760.00, 2);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 5, 3, '2022-11-01', 760.00, 2);

INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 4, 6, '2022-11-01', 760.00, 2);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (2, 4, 3, '2022-11-01', 760.00, 2);


-- Paquetes de cliente

INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (3, 2, 1, '2022-08-26', 75.00, 1);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (3, 2, 1, '2022-08-26', 75.00, 1);


-- Paquetes de cliente
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (4, 5, 4, '2022-09-15', 210.00, 2);
INSERT INTO pedidos(numero_pedido, paquetes_id_paquetes, gomitas_id_gomitas, fecha, venta_total, id_has_chamoy) VALUES (4, 5, 10, '2022-09-15', 210.00, 2);




-- Ventas de un pedido
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (5, 20);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (5, 21);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (5, 22);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (5, 23);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (5, 24);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (5, 25);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (5, 26);

 -- Ventas de otro pedido
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 27);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 28);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 29);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 30);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 31);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 32);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 33);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (2, 34);

 -- Ventas del tercer pedido
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (3, 35);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (3, 36);

-- último pedido vendido
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (4, 37);
INSERT INTO ventas(id_usuario, id_pedidos) VALUES (4, 38);

SELECT * FROM ventas;