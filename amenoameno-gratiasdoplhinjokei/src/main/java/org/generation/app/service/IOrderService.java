package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Order;
import org.generation.app.entity.Order;

public interface IOrderService {
	/**
	 * Enlista ordens para base de datos
	 * @return Lista de ordens
	 */
	public List<Order> findAllOrders();
	/**
	 * Guarda un orden en base de datos
	 * @param order Datos del orden
	 * @return devuelve orden con ID asignado
	 */
	public Order saveOrder(Order order);
	
	/**
	 * Elimina un orden de la base de datos
	 * según su id
	 * @param id : número de id del orden a eliminar
	 * @return 
	 */
	public Order deleteOrderById(Long id);
	
	
	/**
	 * Encuentra un orden de db
	 * según su id
	 * @param id :número de id del orden a buscar
	 * @return un objeto Order, que es orden en la db
	 */
	public Order findOrderById(Long id);

}
