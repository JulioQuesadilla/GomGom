package com.gomgom.app.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="usuarios")
public class Usuario implements Serializable {
	private static final long serialVersionUID =1L;

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idUsuario;
	private String nombre;
	private String apellido;
	private String username;
	private String domicilio;
	private String correo;
	@Column(name="contraseña")
	private String contrasenia;

	
	public Usuario() {}


	public Usuario(Long idUsuario, String nombre, String apellido, String username, String domicilio, String correo,
			String contrasenia) {
		super();
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.username = username;
		this.domicilio = domicilio;
		this.correo = correo;
		this.contrasenia = contrasenia;
	}


	public Long getIdUsuario() {
		return idUsuario;
	}


	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getDomicilio() {
		return domicilio;
	}


	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}


	public String getCorreo() {
		return correo;
	}


	public void setCorreo(String correo) {
		this.correo = correo;
	}


	public String getContrasenia() {
		return contrasenia;
	}


	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public String toString() {
		return "Usuario [idUsuario=" + idUsuario + ", nombre=" + nombre + ", apellido=" + apellido + ", username="
				+ username + ", domicilio=" + domicilio + ", correo=" + correo + ", contrasenia=" + contrasenia + "]";
	}
	
	
	

}
