package com.gomgom.repository;

import org.springframework.data.repository.CrudRepository;

import com.gomgom.app.entity.Usuario;

public interface IUsuariosRepository extends CrudRepository<Usuario, Long> {

}
