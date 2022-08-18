package com.example.demo.repository;

import com.example.demo.entity.Pack;
import org.springframework.data.repository.CrudRepository;

public interface IPackRepository extends CrudRepository<Pack,Long> {
}
