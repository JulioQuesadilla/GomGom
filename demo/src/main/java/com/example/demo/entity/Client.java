package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "clientes")
@Data
public class Client {
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
