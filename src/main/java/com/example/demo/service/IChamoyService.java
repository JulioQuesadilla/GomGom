package com.example.demo.service;

import com.example.demo.entity.Chamoy;

import java.util.List;

public interface IChamoyService {
    public List<Chamoy> findAllChamoy();
    public Chamoy findChamoyById(Long id);
    public Chamoy saveChamoy(Chamoy chamoy);
    public void deleteChamoy(Long id);
}
