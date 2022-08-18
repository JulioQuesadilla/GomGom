package com.example.demo.entity;

import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "has_chamoy")
@Data
public class Chamoy implements Serializable {
	private static final long serialVersionUID =1L;

	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_has_chamoy")
    private Long IdChamoy;
    @Column(name = "has_chamoy")
    private String hasChamoy;
}
