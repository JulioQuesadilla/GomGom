package com.gomgom.app.entity;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@Table(name="nombre_paquete")
public class NombrePaquete implements Serializable {
	private static final long serialVersionUID =1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idNombrePaquete;
	private String nombrePaquete;
	
	public NombrePaquete() {}

	public NombrePaquete(Long idNombrePaquete, String nombrePaquete) {
		super();
		this.idNombrePaquete = idNombrePaquete;
		this.nombrePaquete = nombrePaquete;
	}

	public Long getIdNombrePaquete() {
		return idNombrePaquete;
	}

	public void setIdNombrePaquete(Long idNombrePaquete) {
		this.idNombrePaquete = idNombrePaquete;
	}

	public String getNombrePaquete() {
		return nombrePaquete;
	}

	public void setNombrePaquete(String nombrePaquete) {
		this.nombrePaquete = nombrePaquete;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "NombrePaquete [idNombrePaquete=" + idNombrePaquete + ", nombrePaquete=" + nombrePaquete + "]";
	}
	
	
	

}
