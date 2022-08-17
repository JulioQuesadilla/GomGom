package com.gomgom.app.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="paquetes")
public class Paquete implements Serializable {
	private static final long serialVersionUID =1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_paquetes")
	private Long idPaquetes;
	@Column(name="id_nombre_paquete")
	private Long idNombrePaquete;
	private Double precio;
	
	public Paquete(){}
	

	public Paquete(Long idPaquetes, Long idNombrePaquete, Double precio) {
		super();
		this.idPaquetes = idPaquetes;
		this.idNombrePaquete = idNombrePaquete;
		this.precio = precio;
	}


	public Long getIdPaquetes() {
		return idPaquetes;
	}

	public void setIdPaquetes(Long idPaquetes) {
		this.idPaquetes = idPaquetes;
	}

	public Long getIdNombrePaquete() {
		return idNombrePaquete;
	}

	public void setIdNombrePaquete(Long idNombrePaquete) {
		this.idNombrePaquete = idNombrePaquete;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public String toString() {
		return "Paquete [idPaquetes=" + idPaquetes + ", idNombrePaquete=" + idNombrePaquete + ", precio=" + precio
				+ "]";
	}
	
	
}
