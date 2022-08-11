SELECT usuarios.nombre, usuarios.apellido, empleados.rfc, empleados.id_roles, roles.rol
FROM gomgom.usuarios NATURAL JOIN gomgom.empleados NATURAL JOIN gomgom.roles;

SELECT usuarios.nombre, usuarios.apellido, clientes.id_roles, roles.rol
FROM gomgom.usuarios NATURAL JOIN gomgom.clientes NATURAL JOIN gomgom.roles;



SELECT DISTINCT * FROM gomgom.usuarios INNER JOIN gomgom.roles;


SELECT * FROM gomgom.empleados;