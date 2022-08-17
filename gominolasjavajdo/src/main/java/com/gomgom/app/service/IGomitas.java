package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.Gomitas;

public interface IGomitas {
	
	/**
	 * Enlista todos los gomitas
	 * @return Listado de gomitas
	 */
	public List<Gomitas> findAllGomitas();
	
	/**
	 * Guarda gomita
	 * @param gomita Datos del gomita
	 * @return Devuelve el gomita con el id asignado
	 */
	public Gomitas saveGomita(Gomitas gomita);
	
	/**
	 * Elimina un gomita de la base
	 * @param id
	 * @return el gomita eliminado
	 */
	public Gomitas deleteGomitaById(Long id);
	
	/**
	 * Encuentra un gomita en la base
	 * @param id
	 * @return el gomita encontrado
	 */
	public Gomitas findGomitaById(Long id);
	
	

}
