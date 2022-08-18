package com.example.demo.controller;

import com.example.demo.entity.PackName;
import com.example.demo.entity.User;
import com.example.demo.service.IPackNameService;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api")
public class PackNameController {
    @Autowired
    IPackNameService packNameService;

    @GetMapping("/PackNames")
    public List<PackName> PackNames(){
        return packNameService.findAllPackNames();
    }

    @GetMapping("/PackNames/{id}")
    public PackName PackNameById(@PathVariable Long id){
        return packNameService.findPackNameById(id);
    }
    @PostMapping("/PackNames")
    public PackName newPackName(@RequestBody PackName PackName){
        return packNameService.savePackName(PackName);
    }
    @PutMapping("/PackNames")
    public PackName replacePackName(@RequestBody PackName PackName) {
        PackName.setIdPaquete(null);


        return packNameService.savePackName(PackName);

    }
    @DeleteMapping("PackNames/{id}")
    public void deletePackName(@PathVariable Long id) {
        packNameService.deletePackName(id);
    }
}
