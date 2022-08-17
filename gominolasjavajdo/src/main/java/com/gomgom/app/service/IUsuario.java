package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.Usuario;

public interface IUsuario {
	
	/**
	 * Enlista todos los usuarios
	 * @return Listado de usuarios
	 */
	public List<Usuario> findAllUsers();
	
	/**
	 * Guarda usuario
	 * @param usuario Datos del usuario
	 * @return Devuelve el usuario con el id asignado
	 */
	public Usuario saveUser(Usuario usuario);
	
	/**
	 * Elimina un usuari de la base
	 * @param id
	 * @return el usuario eliminado
	 */
	public Usuario deleteUserById(Long id);
	
	/**
	 * Encuentra un usuario en la base
	 * @param id
	 * @return el usuario encontrado
	 */
	public Usuario findUserById(Long id);
	
	

}
