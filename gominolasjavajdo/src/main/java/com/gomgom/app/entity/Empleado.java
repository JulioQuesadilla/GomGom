package com.gomgom.app.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="empleados")
public class Empleado implements Serializable {
	private static final long serialVersionUID =1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idEmpleado;
	private Long idUsuario;
	private Long idRol;
	private String rfc;
	private Double salario;
	private Long descuento;
	
	public Empleado() {}
	public Empleado(Long idEmpleado, Long idUsuario, Long idRol, String rfc, Double salario, Long descuento) {
		super();
		this.idEmpleado = idEmpleado;
		this.idUsuario = idUsuario;
		this.idRol = idRol;
		this.rfc = rfc;
		this.salario = salario;
		this.descuento = descuento;
	}
	public Long getIdEmpleado() {
		return idEmpleado;
	}
	public void setIdEmpleado(Long idEmpleado) {
		this.idEmpleado = idEmpleado;
	}
	public Long getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}
	public Long getIdRol() {
		return idRol;
	}
	public void setIdRol(Long idRol) {
		this.idRol = idRol;
	}
	public String getRfc() {
		return rfc;
	}
	public void setRfc(String rfc) {
		this.rfc = rfc;
	}
	public Double getSalario() {
		return salario;
	}
	public void setSalario(Double salario) {
		this.salario = salario;
	}
	public Long getDescuento() {
		return descuento;
	}
	public void setDescuento(Long descuento) {
		this.descuento = descuento;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return "Empleado [idEmpleado=" + idEmpleado + ", idUsuario=" + idUsuario + ", idRol=" + idRol + ", rfc=" + rfc
				+ ", salario=" + salario + ", descuento=" + descuento + "]";
	}
	
	
	
	

}
