package com.example.demo.service;

import com.example.demo.entity.User;

import java.util.List;

public interface IUserService {

    public List<User> findAllUsers();

    public User findUserById(Long id);

    public User saveUser(User user);

    public void deleteUser(Long id);


}
