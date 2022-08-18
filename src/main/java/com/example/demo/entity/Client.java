package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "clientes")
@Data
public class Client implements Serializable {
	private static final long serialVersionUID =1L;

	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Clientes")
    private Long idClientes;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_roles")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Role role;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_usuario")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

}
