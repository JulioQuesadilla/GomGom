package com.example.demo.service;

import com.example.demo.entity.Role;
import com.example.demo.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImp implements IRoleService {
    @Autowired
    IRoleRepository roleRepository;
    @Override
    public List<Role> findAllRoles() {
        return (List<Role>) roleRepository.findAll();
    }

    @Override
    public Role findRoleById(Long id) {
        return roleRepository.findById(id).orElse(null);
    }

    @Override
    public Role SaveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void deleteRole(Long id) {
        roleRepository.deleteById(id);

    }
}
