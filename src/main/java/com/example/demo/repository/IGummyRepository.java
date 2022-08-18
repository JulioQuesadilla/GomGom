package com.example.demo.repository;

import com.example.demo.entity.Gummy;
import org.springframework.data.repository.CrudRepository;

public interface IGummyRepository extends CrudRepository<Gummy,Long> {
}
