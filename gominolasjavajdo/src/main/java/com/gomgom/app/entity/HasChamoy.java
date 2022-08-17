package com.gomgom.app.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name="hasChamoy")
public class HasChamoy implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_has_Chamoy")
	private Long hasChamoyId;
	private String hasChamoy;
	
	public HasChamoy() {}
	public HasChamoy(Long hasChamoyId, String hasChamoy) {
		super();
		this.hasChamoyId = hasChamoyId;
		this.hasChamoy = hasChamoy;
	}
	public Long getHasChamoyId() {
		return hasChamoyId;
	}
	public void setHasChamoyId(Long hasChamoyId) {
		this.hasChamoyId = hasChamoyId;
	}
	public String getHasChamoy() {
		return hasChamoy;
	}
	public void setHasChamoy(String hasChamoy) {
		this.hasChamoy = hasChamoy;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return "HasChamoy [hasChamoyId=" + hasChamoyId + ", hasChamoy=" + hasChamoy + "]";
	}
	
	
	
}
