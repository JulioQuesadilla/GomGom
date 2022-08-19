package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

import java.io.Serializable;
import java.security.PrivateKey;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "pedidos")
@Data
public class Order implements Serializable {
	private static final long serialVersionUID =1L;

	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedidos")
    private  Long idPedido;

    @ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<Gummy> gummies;

    @ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<Pack> pack;

    private Date fecha;
    
    @Column(name="venta_total")
    private Double ventaTotal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_has_chamoy")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Chamoy chamoy;


}
