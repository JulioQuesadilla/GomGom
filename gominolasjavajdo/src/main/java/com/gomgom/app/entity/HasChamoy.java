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
	@Column(name="has_Chamoy_id")
	private Long hasChamoyId;
	private String hasChamoy;
}
