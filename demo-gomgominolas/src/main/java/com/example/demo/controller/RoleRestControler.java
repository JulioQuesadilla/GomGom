package com.example.demo.controller;

import com.example.demo.entity.Role;
import com.example.demo.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api")
public class RoleRestControler {
    @Autowired
    IRoleService RoleService;

    @GetMapping("/Roles")
    public List<Role> Roles(){
        return RoleService.findAllRoles();
    }

    @GetMapping("/Roles/{id}")
    public Role RoleById(@PathVariable Long id){
        return RoleService.findRoleById(id);
    }
    @PostMapping("/Roles")
    public Role newRole(@RequestBody Role Role){
        return RoleService.SaveRole(Role);
    }
    @PutMapping("/Roles")
    public Role replaceRole(@RequestBody Role Role) {
        Role.setIdRoles(null);


        return RoleService.SaveRole(Role);

    }
    @DeleteMapping("Roles/{id}")
    public void deleteRole(@PathVariable Long id) {
        RoleService.deleteRole(id);
    }
}
