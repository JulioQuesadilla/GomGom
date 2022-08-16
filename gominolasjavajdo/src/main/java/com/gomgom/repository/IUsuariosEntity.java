package com.gomgom.repository;

import org.springframework.data.repository.CrudRepository;

import com.gomgom.entity.Usuario;

public interface IUsuariosEntity extends CrudRepository<Usuario, Long> {

}
