package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.NombrePaquete;

public interface INombrePaquete {
	
	/**
	 * Enlista todos los nombrepaquetes
	 * @return Listado de nombrepaquetes
	 */
	public List<NombrePaquete> findAllPackageNames();
	
	/**
	 * Guarda nombrepaquete
	 * @param nombrepaquete Datos del nombrepaquete
	 * @return Devuelve el nombrepaquete con el id asignado
	 */
	public NombrePaquete savePackageName(NombrePaquete nombrepaquete);
	
	/**
	 * Elimina un nombrepaquete de la base
	 * @param id
	 * @return el nombrepaquete eliminado
	 */
	public NombrePaquete deletePackageNameById(Long id);
	
	/**
	 * Encuentra un nombrepaquete en la base
	 * @param id
	 * @return el nombrepaquete encontrado
	 */
	public NombrePaquete findPackageNameById(Long id);
	
	

}
