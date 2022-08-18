package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "has_chamoy")
@Data
public class Chamoy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_chamoy")
    private Long IdChamoy;
    @Column(name = "has_chamoy")
    private String hasChamoy;
}
