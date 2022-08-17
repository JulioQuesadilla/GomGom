package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.Cotizaciones;

public interface ICotizaciones {
	
	/**
	 * Enlista todos los cotizaciones
	 * @return Listado de cotizaciones
	 */
	public List<Cotizaciones> findAllEstimates();
	
	/**
	 * Guarda cotizaciones
	 * @param cotizaciones Datos del cotizaciones
	 * @return Devuelve el cotizaciones con el id asignado
	 */
	public Cotizaciones saveEstimates(Cotizaciones cotizaciones);
	
	/**
	 * Elimina un cotizaciones de la base
	 * @param id
	 * @return el cotizaciones eliminado
	 */
	public Cotizaciones deleteEstimatesById(Long id);
	
	/**
	 * Encuentra un cotizaciones en la base
	 * @param id
	 * @return el cotizaciones encontrado
	 */
	public Cotizaciones findEstimatesById(Long id);
	
	

}
