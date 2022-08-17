package com.gomgom.app.service;

import java.util.List;

import com.gomgom.app.entity.Empleado;

public interface IEmpleadoService {
	
	/**
	 * Enlista todos los employees
	 * @return Listado de employees
	 */
	public List<Empleado> findAllEmployees();
	
	/**
	 * Guarda employee
	 * @param employee Datos del employee
	 * @return Devuelve el employee con el id asignado
	 */
	public Empleado saveEmployee(Empleado employee);
	
	/**
	 * Elimina un employee de la base
	 * @param id
	 * @return el employee eliminado
	 */
	public Empleado deleteEmployeeById(Long id);
	
	/**
	 * Encuentra un employee en la base
	 * @param id
	 * @return el employee encontrado
	 */
	public Empleado findEmployeeById(Long id);
	
	

}
