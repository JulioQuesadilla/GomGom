package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "nombre_paquete")
@Data
public class PackName {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_nombre_paquete")
    private Long idPaquete;
    @Column(name = "nombre_paquete")
    private  String nombrePaqueteNombre;
}
