package org.generation.app.service;

import java.util.List;

import org.generation.app.entity.Role;
import org.generation.app.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImp implements IRoleService {
	@Autowired
	IRoleRepository roleRepository;
	@Override
	public List<Role> findAllRoles() {
		// TODO Auto-generated method stub
		return (List<Role>) roleRepository.findAll();
	}

	@Override
	public Role saveRole(Role role) {
		// TODO Auto-generated method stub
		return roleRepository.save(role);
	}

	@Override
	public Role deleteRoleById(Long id) {
		Role role = findRoleById(id);
		roleRepository.deleteById(id);
		return role;
	}

	@Override
	public Role findRoleById(Long id) {
		// TODO Auto-generated method stub
		return roleRepository.findById(id).orElse(null);
	}

}
