package com.gomgom.app.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name="cotizaciones")
public class Cotizaciones implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long cotizacionId;
	private Long idUsuario;
	private Date fecha;
	private String evento;
	private Long numPersonas;
	private Long presupuesto;
	private String telefono;
	private String descripcion;
}
