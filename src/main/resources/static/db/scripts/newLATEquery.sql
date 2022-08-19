SELECT * FROM gomgom.ventas;

INSERT INTO pedidos (fecha, venta_total, id_has_chamoy) VALUES ('2022-08-17', '510', '2');
INSERT INTO pedidos (fecha, venta_total, id_has_chamoy) VALUES ('2022-08-16', '250', '1');
INSERT INTO pedidos (fecha, venta_total, id_has_chamoy) VALUES ('2022-08-16', '200', '1');


INSERT INTO pedidos_pack (order_id_pedidos, pack_id_paquetes) VALUES ('1', '6');
INSERT INTO pedidos_pack (order_id_pedidos, pack_id_paquetes) VALUES ('1', '6');
INSERT INTO pedidos_pack (order_id_pedidos, pack_id_paquetes) VALUES ('2', '1');
INSERT INTO pedidos_pack (order_id_pedidos, pack_id_paquetes) VALUES ('2', '5');
INSERT INTO pedidos_pack (order_id_pedidos, pack_id_paquetes) VALUES ('3', '5');

INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('1', '5');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('1', '7');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('1', '8');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('1', '4');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('1', '2');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('2', '5');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('2', '9');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('2', '1');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('3', '4');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('3', '6');
INSERT INTO pedidos_gummies (order_id_pedidos, gummies_id_gomitas) VALUES ('3', '10');

INSERT INTO ventas (id_pedidos, id_usuario) VALUES ('1', '4');
INSERT INTO ventas (id_pedidos, id_usuario) VALUES ('2', '2');
INSERT INTO ventas (id_pedidos, id_usuario) VALUES ('3', '3');

