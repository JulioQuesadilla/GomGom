package com.example.demo.controller;

import com.example.demo.entity.Sale;
import com.example.demo.entity.User;
import com.example.demo.service.ISaleService;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api")
public class SaleRestController {
    @Autowired
    ISaleService SaleService;

    @GetMapping("/Sales")
    public List<Sale> Sales(){
        return SaleService.findAllSales();
    }

    @GetMapping("/Sales/{id}")
    public Sale SaleById(@PathVariable Long id){
        return SaleService.findSaleById(id);
    }
    @PostMapping("/Sales")
    public Sale newSale(@RequestBody Sale Sale){
        return SaleService.saveSale(Sale);
    }
    @PutMapping("/Sales")
    public Sale replaceSale(@RequestBody Sale Sale) {
        Sale.setIdVenta(null);


        return SaleService.saveSale(Sale);

    }
    @DeleteMapping("Sales/{id}")
    public void deleteSale(@PathVariable Long id) {
        SaleService.deleteSale(id);
    }
}
