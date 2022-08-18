package com.example.demo.repository;

import com.example.demo.entity.Client;
import org.springframework.data.repository.CrudRepository;

public interface IClientRepository extends CrudRepository<Client,Long> {
}
