package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Role;

public interface IRoleService {
	/**
	 * Enlista rols para base de datos
	 * @return Lista de rols
	 */
	public List<Role> findAllRoles();
	/**
	 * Guarda un rol en base de datos
	 * @param role Datos del rol
	 * @return devuelve rol con ID asignado
	 */
	public Role saveRole(Role role);
	
	/**
	 * Elimina un rol de la base de datos
	 * según su id
	 * @param id : número de id del rol a eliminar
	 * @return 
	 */
	public Role deleteRoleById(Long id);
	
	
	/**
	 * Encuentra un rol de db
	 * según su id
	 * @param id :número de id del rol a buscar
	 * @return un objeto Role, que es rol en la db
	 */
	public Role findRoleById(Long id);

}
