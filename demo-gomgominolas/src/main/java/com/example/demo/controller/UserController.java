package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    IUserService userService;

    @GetMapping("/Users")
    public List<User> users(){
        return userService.findAllUsers();
    }

    @GetMapping("/Users/{id}")
    public User userById(@PathVariable Long id){
        return userService.findUserById(id);
    }
    @PostMapping("/Users")
    public User newUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @PutMapping("/Users")
    public User replaceUser(@RequestBody User user) {
        user.setIdUsuario(null);


        return userService.saveUser(user);

    }
    @DeleteMapping("Users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }


}
