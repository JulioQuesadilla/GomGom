package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "paquetes")
@Data
public class Pack implements Serializable {
	private static final long serialVersionUID =1L;
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_paquetes")
    private Long IdPaquete;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_nombre_paquete")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private PackName packName;

    private Double precio;
}
