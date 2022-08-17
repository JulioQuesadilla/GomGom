package com.gomgom.app.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="clientes")
public class Cliente implements Serializable {
	private static final long serialVersionUID =1L;

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long idCliente;
	private Long idUsuario;
	private Long idRol;
	
	public Cliente(){}
	public Cliente(Long idCliente, Long idUsuario, Long idRol) {
		super();
		this.idCliente = idCliente;
		this.idUsuario = idUsuario;
		this.idRol = idRol;
	}
	public Long getIdCliente() {
		return idCliente;
	}
	public void setIdCliente(Long idCliente) {
		this.idCliente = idCliente;
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return "Cliente [idCliente=" + idCliente + ", idUsuario=" + idUsuario + ", idRol=" + idRol + "]";
	}
	
	

}
