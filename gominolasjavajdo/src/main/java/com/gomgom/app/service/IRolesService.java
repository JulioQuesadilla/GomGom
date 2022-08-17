package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.Roles;

public interface IRolesService {
	
	/**
	 * Enlista todos los rols
	 * @return Listado de rols
	 */
	public List<Roles> findAllRoles();
	
	/**
	 * Guarda rol
	 * @param rol Datos del rol
	 * @return Devuelve el rol con el id asignado
	 */
	public Roles saveRole(Roles rol);
	
	/**
	 * Elimina un usuari de la base
	 * @param id
	 * @return el rol eliminado
	 */
	public Roles deleteRoleById(Long id);
	
	/**
	 * Encuentra un rol en la base
	 * @param id
	 * @return el rol encontrado
	 */
	public Roles findRoleById(Long id);
	
	

}
