package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "gomitas")
@Data
public class Gummy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_gomitas")
    private Long idGomita;

    private String nombre;

    private String imagen;
}
