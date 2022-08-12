-- ¿QUiénes son empleadxs?
SELECT usuarios.nombre, usuarios.apellido, empleados.rfc, empleados.id_roles, roles.rol
FROM gomgom.usuarios NATURAL JOIN gomgom.empleados NATURAL JOIN gomgom.roles;

-- ¿Quiénes son usuarixs?
SELECT usuarios.nombre, usuarios.apellido, clientes.id_roles, roles.rol
FROM gomgom.usuarios NATURAL JOIN gomgom.clientes NATURAL JOIN gomgom.roles;

-- ¿Qué pedidos hay?
SELECT pedidos.numero_pedido, gomitas.nombre, ventas.id_usuario FROM gomgom.pedidos NATURAL JOIN gomgom.ventas
NATURAL JOIN gomgom.gomitas ORDER BY numero_pedido;

SELECT * FROM gomgom.pedidos;
SELECT id_has_chamoy, fecha, venta_total FROM gomgom.pedidos INNER JOIN gomgom.paquetes ON paquetes_id_paquetes;

-- ¿Qué paquetes hay y cuále es su precio?
SELECT DISTINCT nombre_paquete AS Paketaxos, precio AS precio FROM gomgom.paquetes INNER JOIN gomgom.nombre_paquete ON id_paquetes;

-- ¿Qué pedidos hay y qué gomitas llevan los paquetes que pidieron?
SELECT numero_pedido, nombre_paquete, venta_total, fecha, gomitas.nombre FROM gomgom.nombre_paquete NATURAL JOIN gomgom.paquetes NATURAL JOIN gomgom.pedidos NATURAL JOIN gomgom.gomitas
ORDER BY numero_pedido, nombre_paquete;

SELECT * FROM gomgom.paquetes;