package com.gomgom.app.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@Table(name="paquetes")
public class Paquete implements Serializable {
	private static final long serialVersionUID =1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idPaquetes;
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="id_nombre_paquete", referencedColumnName = "id_nombre_paquete")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private NombrePaquete idNombrePaquete;
	private Double precio;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@JoinTable(
			name = "pedidos",
			joinColumns = @JoinColumn(name="paquetes_id_paquetes"),
			inverseJoinColumns = @JoinColumn(name="gomitas_id_gomitas")			
			
			)
	private List<Gomitas> gomitas;
	
	public Paquete(){}
	
	

	public List<Gomitas> getGomitas() {
		return gomitas;
	}


	public void setGomitas(List<Gomitas> gomitas) {
		this.gomitas = gomitas;
	}


	public Long getIdPaquetes() {
		return idPaquetes;
	}

	public void setIdPaquetes(Long idPaquetes) {
		this.idPaquetes = idPaquetes;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public String toString() {
		return "Paquete [idPaquetes=" + idPaquetes + ", idNombrePaquete=" + idNombrePaquete + ", precio=" + precio
				+ "]";
	}
	
	
}
