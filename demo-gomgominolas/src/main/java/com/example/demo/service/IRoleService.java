package com.example.demo.service;

import com.example.demo.entity.Role;

import java.util.List;

public interface IRoleService {

    public List<Role> findAllRoles();
    public Role findRoleById(Long id);
    public Role SaveRole(Role role);
    public void deleteRole(Long id);
}
