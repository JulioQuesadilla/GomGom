package com.example.demo.controller;

import com.example.demo.entity.Event;
import com.example.demo.service.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api")
public class EventRestController {
    @Autowired
    IEventService EventService;

    @GetMapping("/Events")
    public List<Event> Events(){
        return EventService.findAllEvents();
    }

    @GetMapping("/Events/{id}")
    public Event EventById(@PathVariable Long id){
        return EventService.findEventById(id);
    }
    @PostMapping("/Events")
    public Event newEvent(@RequestBody Event Event){
        return EventService.saveEvent(Event);
    }
    @PutMapping("/Events")
    public Event replaceEvent(@RequestBody Event Event) {
        Event.setIdCotizacion(null);


        return EventService.saveEvent(Event);

    }
    @DeleteMapping("Events/{id}")
    public void deleteEvent(@PathVariable Long id) {
        EventService.deleteEvent(id);
    }
}
