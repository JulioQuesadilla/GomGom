package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

import java.io.Serializable;
import java.security.PrivateKey;
import java.sql.Date;

@Entity
@Table(name = "pedidos")
@Data
public class Order implements Serializable {
	private static final long serialVersionUID =1L;

	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedidos")
    private  Long idPedido;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="gomitas_id_gomitas")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Gummy gummy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="paquetes_id_paquetes")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Pack pack;

    private Date fecha;
    
    @Column(name="venta_total")
    private Double total;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_has_chamoy")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Chamoy chamoy;
    
    @Column(name="numero_pedido")
    private Long numeroPedido;


}
