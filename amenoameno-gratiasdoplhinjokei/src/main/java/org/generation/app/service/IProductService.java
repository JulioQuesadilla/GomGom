package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Product;

public interface IProductService {
	/**
	 * Enlista rols para base de datos
	 * @return Lista de rols
	 */
	public List<Product> findAllProducts();
	/**
	 * Guarda un rol en base de datos
	 * @param product Datos del rol
	 * @return devuelve rol con ID asignado
	 */
	public Product saveProduct(Product product);
	
	/**
	 * Elimina un rol de la base de datos
	 * según su id
	 * @param id : número de id del rol a eliminar
	 * @return 
	 */
	public Product deleteProductById(Long id);
	
	
	/**
	 * Encuentra un rol de db
	 * según su id
	 * @param id :número de id del rol a buscar
	 * @return un objeto Product, que es rol en la db
	 */
	public Product findProductById(Long id);
}
