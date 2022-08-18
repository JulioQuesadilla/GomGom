package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "cotizaciones_eventos")
@Data
public class Event implements Serializable {
	private static final long serialVersionUID =1L;

	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cotizacion")
    private Long idCotizacion;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_usuario")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;
    private Date fecha;
    @Column(name = "num_personas")
    private String numPersonas;

    private Long presupuesto;

    private String telefono;

    private  String descripcion;
    private String evento;
}
