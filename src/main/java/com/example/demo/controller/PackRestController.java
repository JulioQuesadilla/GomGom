package com.example.demo.controller;

import com.example.demo.entity.Pack;
import com.example.demo.service.IPackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PackRestController {
    @Autowired
    IPackService PackService;

    @GetMapping("/Packs")
    public List<Pack> Packs(){
        return PackService.findAllPacks();
    }

    @GetMapping("/Packs/{id}")
    public Pack PackById(@PathVariable Long id){
        return PackService.findPackById(id);
    }
    @PostMapping("/Packs")
    public Pack newPack(@RequestBody Pack Pack){
        return PackService.SavePack(Pack);
    }
    @PutMapping("/Packs")
    public Pack replacePack(@RequestBody Pack Pack) {
        Pack.setIdPaquete(null);


        return PackService.SavePack(Pack);

    }
    @DeleteMapping("Packs/{id}")
    public void deletePack(@PathVariable Long id) {
        PackService.detetePack(id);
    }
}
