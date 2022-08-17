package com.gomgom.app.entity;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@Table(name="clientes")
public class Cliente implements Serializable {
	private static final long serialVersionUID =1L;

	 /*  Columnas  */
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long idCliente;

	@ManyToOne(fetch=FetchType.LAZY)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Roles rol;
	

	@OneToOne(mappedBy = "clientes", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Usuario usuario;
	
}
