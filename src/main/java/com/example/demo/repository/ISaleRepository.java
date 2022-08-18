package com.example.demo.repository;

import com.example.demo.entity.Sale;
import org.springframework.data.repository.CrudRepository;

public interface ISaleRepository  extends CrudRepository<Sale,Long> {
}
