package com.example.demo.service;

import com.example.demo.entity.Order;
import com.example.demo.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderServiceImp implements IOrderService{
    @Autowired
    IOrderRepository orderRepository;
    @Override
    public List<Order> findAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }

    @Override
    public Order findOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public void deleteOrder(Long id) {
    orderRepository.deleteById(id);
    }
}
