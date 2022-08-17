package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "nombre_paquetes")
@Data
public class PackName {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_nombre_paquete")
    private Long idPaquete;
    @Column(name = "nombre_paquete")
    private  String nombrePaqueteNombre;
}
