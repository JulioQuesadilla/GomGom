package com.example.demo.service;

import com.example.demo.entity.Sale;
import com.example.demo.repository.ISaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SaleServiceImp implements ISaleService{

    @Autowired
    ISaleRepository saleRepository;
    @Override
    public List<Sale> findAllSales() {
        return (List<Sale>) saleRepository.findAll();
    }

    @Override
    public Sale findSaleById(Long id) {
        return saleRepository.findById(id).orElse(null);
    }

    @Override
    public Sale saveSale(Sale sale) {
        return saleRepository.save(sale);
    }

    @Override
    public void deleteSale(Long id) {
        saleRepository.deleteById(id);

    }
}
