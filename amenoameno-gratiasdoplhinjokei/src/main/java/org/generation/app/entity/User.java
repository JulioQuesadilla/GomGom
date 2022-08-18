package org.generation.app.entity;

import lombok.Data;

@Data
public class User {
	private String username;
	private String password;
	
	public User() {}
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	

}
