package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.Cliente;

public interface IClienteService {
	
	/**
	 * Enlista todos los clientes
	 * @return Listado de clientes
	 */
	public List<Cliente> findAllClients();
	
	/**
	 * Guarda cliente
	 * @param cliente Datos del cliente
	 * @return Devuelve el cliente con el id asignado
	 */
	public Cliente saveClient(Cliente cliente);
	
	/**
	 * Elimina un cliente de la base
	 * @param id
	 * @return el cliente eliminado
	 */
	public Cliente deleteClientById(Long id);
	
	/**
	 * Encuentra un cliente en la base
	 * @param id
	 * @return el cliente encontrado
	 */
	public Cliente findClientById(Long id);
	
	

}
