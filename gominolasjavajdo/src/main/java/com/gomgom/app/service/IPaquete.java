package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.Paquete;

public interface IPaquete {
	
	/**
	 * Enlista todos los paquetes
	 * @return Listado de paquetes
	 */
	public List<Paquete> findAllPackages();
	
	/**
	 * Guarda paquete
	 * @param paquete Datos del paquete
	 * @return Devuelve el paquete con el id asignado
	 */
	public Paquete savePackage(Paquete paquete);
	
	/**
	 * Elimina un usuari de la base
	 * @param id
	 * @return el paquete eliminado
	 */
	public Paquete deletePackageById(Long id);
	
	/**
	 * Encuentra un paquete en la base
	 * @param id
	 * @return el paquete encontrado
	 */
	public Paquete findPackageById(Long id);
	
	

}
