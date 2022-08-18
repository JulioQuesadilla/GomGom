package com.example.demo.entity;

import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "gomitas")
@Data
public class Gummy implements Serializable {
	private static final long serialVersionUID =1L;	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_gomitas")
    private Long idGomita;

    private String nombre;

    private String imagen;
}
