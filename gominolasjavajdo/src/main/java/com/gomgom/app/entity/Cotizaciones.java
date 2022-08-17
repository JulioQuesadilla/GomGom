package com.gomgom.app.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@Entity
@Table(name="cotizaciones_eventos")
public class Cotizaciones implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="id_cotizacion")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long cotizacionId;
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="id_usuario")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Usuario idUsuario;
	private Date fecha;
	private String evento;
	private Long numPersonas;
	private Long presupuesto;
	private String telefono;
	private String descripcion;
	
	public Cotizaciones(){}

	
	public Cotizaciones(Long cotizacionId, Usuario idUsuario, Date fecha, String evento, Long numPersonas,
			Long presupuesto, String telefono, String descripcion) {
		super();
		this.cotizacionId = cotizacionId;
		this.idUsuario = idUsuario;
		this.fecha = fecha;
		this.evento = evento;
		this.numPersonas = numPersonas;
		this.presupuesto = presupuesto;
		this.telefono = telefono;
		this.descripcion = descripcion;
	}


	public Long getCotizacionId() {
		return cotizacionId;
	}

	public void setCotizacionId(Long cotizacionId) {
		this.cotizacionId = cotizacionId;
	}

	
	public Usuario getIdUsuario() {
		return idUsuario;
	}


	public void setIdUsuario(Usuario idUsuario) {
		this.idUsuario = idUsuario;
	}


	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getEvento() {
		return evento;
	}

	public void setEvento(String evento) {
		this.evento = evento;
	}

	public Long getNumPersonas() {
		return numPersonas;
	}

	public void setNumPersonas(Long numPersonas) {
		this.numPersonas = numPersonas;
	}

	public Long getPresupuesto() {
		return presupuesto;
	}

	public void setPresupuesto(Long presupuesto) {
		this.presupuesto = presupuesto;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Cotizaciones [cotizacionId=" + cotizacionId + ", idUsuario=" + idUsuario + ", fecha=" + fecha
				+ ", evento=" + evento + ", numPersonas=" + numPersonas + ", presupuesto=" + presupuesto + ", telefono="
				+ telefono + ", descripcion=" + descripcion + "]";
	};
	
}
