package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "ventas")
@Data
public class Sale implements Serializable {
	private static final long serialVersionUID =1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ventas")
    private Long idVenta;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_usuario")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;



    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_pedidos")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Order order;
}
