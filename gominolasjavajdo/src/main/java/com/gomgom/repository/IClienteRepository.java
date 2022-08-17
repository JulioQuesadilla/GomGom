package com.gomgom.repository;

import org.springframework.data.repository.CrudRepository;

import com.gomgom.app.entity.Cliente;


public interface IClienteRepository extends CrudRepository<Cliente, Long> {

}
