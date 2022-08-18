package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "empleados")
@Data
public class Employee implements Serializable {
	private static final long serialVersionUID =1L;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_empleado")
    private Long idEmpleado;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_usuario")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_roles")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Role role;

    private String rfc;

    private Double salario;
    private Long descuento;

}
