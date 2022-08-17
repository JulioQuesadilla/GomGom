package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.HasChamoy;

public interface IHasChamoyService {
	
	/**
	 * Enlista todos los haschamoys
	 * @return Listado de haschamoys
	 */
	public List<HasChamoy> findAllHasChamoy();
	
	/**
	 * Guarda haschamoy
	 * @param haschamoy Datos del haschamoy
	 * @return Devuelve el haschamoy con el id asignado
	 */
	public HasChamoy saveHasChamoy(HasChamoy haschamoy);
	
	/**
	 * Elimina un haschamoy de la base
	 * @param id
	 * @return el haschamoy eliminado
	 */
	public HasChamoy deleteHasChamoyById(Long id);
	
	/**
	 * Encuentra un haschamoy en la base
	 * @param id
	 * @return el haschamoy encontrado
	 */
	public HasChamoy findHasChamoyById(Long id);
	
	

}
