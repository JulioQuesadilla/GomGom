package com.example.demo.controller;

import com.example.demo.entity.Chamoy;
import com.example.demo.service.IChamoyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ChamoyRestController {


    @Autowired
    IChamoyService ChamoyService;

    @GetMapping("/Chamoys")
    public List<Chamoy> Chamoys(){
        return ChamoyService.findAllChamoy();
    }

    @GetMapping("/Chamoys/{id}")
    public Chamoy ChamoyById(@PathVariable Long id){
        return ChamoyService.findChamoyById(id);
    }
    @PostMapping("/Chamoys")
    public Chamoy newChamoy(@RequestBody Chamoy Chamoy){
        return ChamoyService.saveChamoy(Chamoy);
    }
    @PutMapping("/Chamoys")
    public Chamoy replaceChamoy(@RequestBody Chamoy Chamoy) {
        Chamoy.setIdChamoy(null);


        return ChamoyService.saveChamoy(Chamoy);

    }
    @DeleteMapping("Chamoys/{id}")
    public void deleteChamoy(@PathVariable Long id) {
        ChamoyService.deleteChamoy(id);
    }
}
