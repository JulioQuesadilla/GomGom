package com.example.demo.entity;

import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "nombre_paquete")
@Data
public class PackName implements Serializable {
	private static final long serialVersionUID =1L;
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_nombre_paquete")
    private Long idPaquete;
    @Column(name = "nombre_paquete")
    private  String nombrePaqueteNombre;
}
