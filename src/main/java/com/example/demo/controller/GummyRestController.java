package com.example.demo.controller;

import com.example.demo.entity.Gummy;
import com.example.demo.service.IGummyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class GummyRestController {
    @Autowired
    IGummyService GummyService;

    @GetMapping("/Gummys")
    public List<Gummy> Gummys(){
        return GummyService.findAllGummies();
    }

    @GetMapping("/Gummys/{id}")
    public Gummy GummyById(@PathVariable Long id){
        return GummyService.findGummyById(id);
    }
    @PostMapping("/Gummys")
    public Gummy newGummy(@RequestBody Gummy Gummy){
        return GummyService.saveGummy(Gummy);
    }
    @PutMapping("/Gummys")
    public Gummy replaceGummy(@RequestBody Gummy Gummy) {
        Gummy.setIdGomita(null);


        return GummyService.saveGummy(Gummy);

    }
    @DeleteMapping("Gummys/{id}")
    public void deleteGummy(@PathVariable Long id) {
        GummyService.deleteGummy(id);
    }
}
