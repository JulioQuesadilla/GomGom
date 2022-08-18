package com.example.demo.repository;

import com.example.demo.entity.Role;
import org.springframework.data.repository.CrudRepository;

public interface IRoleRepository extends CrudRepository <Role,Long> {
}
