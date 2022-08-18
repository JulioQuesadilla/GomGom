package com.gomgom.app.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name="gomitas")
public class Gomitas implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="id_gomitas")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long gomitaId;
	private String nombre;
	private String imagen;
	
	public Gomitas( ) {}

	public Gomitas(Long gomitaId, String nombre, String imagen) {
		super();
		this.gomitaId = gomitaId;
		this.nombre = nombre;
		this.imagen = imagen;
	}

	public Long getGomitaId() {
		return gomitaId;
	}

	public void setGomitaId(Long gomitaId) {
		this.gomitaId = gomitaId;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Gomitas [gomitaId=" + gomitaId + ", nombre=" + nombre + ", imagen=" + imagen + "]";
	};
	
}
