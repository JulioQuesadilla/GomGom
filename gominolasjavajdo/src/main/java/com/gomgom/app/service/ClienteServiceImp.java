package com.gomgom.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.gomgom.app.entity.Cliente;
import com.gomgom.repository.IClienteRepository;

public class ClienteServiceImp implements IClienteService {
	
	@Autowired
	IClienteRepository clienteRepository;

	@Override
	public List<Cliente> findAllClients() {
		// TODO Auto-generated method stub
		return (List<Cliente>) clienteRepository.findAll();
	}

	@Override
	public Cliente saveClient(Cliente cliente) {
		// TODO Auto-generated method stub
		return clienteRepository.save(cliente);
	}

	@Override
	public Cliente deleteClientById(Long id) {
		// TODO Auto-generated method stub
		Cliente cliente = findClientById(id);
		clienteRepository.deleteById(id);
		return cliente;
	}

	@Override
	public Cliente findClientById(Long id) {
		// TODO Auto-generated method stub
		return findClientById(id);
	}

}
