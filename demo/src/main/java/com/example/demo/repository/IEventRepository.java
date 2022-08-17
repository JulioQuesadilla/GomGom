package com.example.demo.repository;

import com.example.demo.entity.Event;
import org.springframework.data.repository.CrudRepository;

public interface IEventRepository extends CrudRepository<Event,Long> {
}
