package com.example.demo.service;

import com.example.demo.entity.Event;

import java.util.List;

public interface IEventService {
    public List<Event> findAllEvents();

    public Event findEventById(Long id);

    public Event saveEvent(Event event);

    public void deleteEvent(Long id);
}
