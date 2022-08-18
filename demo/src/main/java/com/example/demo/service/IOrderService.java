package com.example.demo.service;

import com.example.demo.entity.Order;

import java.util.List;

public interface IOrderService {
    public List<Order> findAllOrders();

    public Order findOrderById(Long id);

    public Order saveOrder(Order order);

    public void deleteOrder(Long id);
}
