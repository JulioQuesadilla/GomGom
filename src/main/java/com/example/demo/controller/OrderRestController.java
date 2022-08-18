package com.example.demo.controller;

import com.example.demo.entity.Order;
import com.example.demo.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class OrderRestController {
    @Autowired
    IOrderService OrderService;

    @GetMapping("/Orders")
    public List<Order> Orders(){
        return OrderService.findAllOrders();
    }

    @GetMapping("/Orders/{id}")
    public Order OrderById(@PathVariable Long id){
        return OrderService.findOrderById(id);
    }
    @PostMapping("/Orders")
    public Order newOrder(@RequestBody Order Order){
        return OrderService.saveOrder(Order);
    }
    @PutMapping("/Orders")
    public Order replaceOrder(@RequestBody Order Order) {
        Order.setIdPedido(null);


        return OrderService.saveOrder(Order);

    }
    @DeleteMapping("Orders/{id}")
    public void deleteOrder(@PathVariable Long id) {
        OrderService.deleteOrder(id);
    }
}
