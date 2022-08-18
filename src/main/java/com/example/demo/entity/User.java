package com.example.demo.entity;

import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Data
@Table(name = "usuarios")
public class User implements Serializable {
	private static final long serialVersionUID =1L;

    @Id
    @Column(name="id_usuario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;
    private String nombre;
    private String apellido;
    private String domicilio;
    private String username;
    private String correo;
    private String contraseña;
}
