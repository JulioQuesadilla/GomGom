package com.example.demo.repository;

import com.example.demo.entity.Order;
import org.apache.catalina.startup.ClassLoaderFactory;
import org.springframework.data.repository.CrudRepository;

public interface IOrderRepository extends CrudRepository<Order, Long> {
}
