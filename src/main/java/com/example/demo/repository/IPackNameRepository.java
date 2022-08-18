package com.example.demo.repository;

import com.example.demo.entity.PackName;
import org.springframework.data.repository.CrudRepository;

public interface IPackNameRepository extends CrudRepository<PackName,Long> {
}
