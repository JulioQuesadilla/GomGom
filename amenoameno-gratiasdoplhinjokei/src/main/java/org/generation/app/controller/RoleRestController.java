package org.generation.app.controller;

import java.util.List;

import org.generation.app.entity.Customer;
import org.generation.app.entity.Role;
import org.generation.app.service.ICustomerService;
import org.generation.app.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api")
public class RoleRestController {
	
	@Autowired
	IRoleService roleService;
	
	@GetMapping("/roles")
	public List<Role> getRoles() {
		return roleService.findAllRoles();		
	}

}
