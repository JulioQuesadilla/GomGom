package com.gomgom.repository;

import org.springframework.data.repository.CrudRepository;

import com.gomgom.app.entity.Empleado;


public interface IEmpleadoRepository extends CrudRepository<Empleado, Long> {

}
