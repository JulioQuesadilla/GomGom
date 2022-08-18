package com.example.demo.service;

import com.example.demo.entity.Sale;

import java.util.List;

public interface ISaleService {
    public List<Sale> findAllSales();

    public Sale findSaleById(Long id);

    public Sale saveSale(Sale sale);

    public void deleteSale(Long id);
}
