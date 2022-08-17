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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long gomitaId;
	private String nombre;
	private String imagen;
}
