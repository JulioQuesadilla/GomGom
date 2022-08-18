package com.example.demo.service;

import com.example.demo.entity.Chamoy;
import com.example.demo.repository.IChamoyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ChamoyServiceImp implements IChamoyService{
    @Autowired
    IChamoyRepository chamoyRepository;
    @Override
    public List<Chamoy> findAllChamoy() {
        return (List<Chamoy>) chamoyRepository.findAll();
    }

    @Override
    public Chamoy findChamoyById(Long id) {
        return chamoyRepository.findById(id).orElse(null);
    }

    @Override
    public Chamoy saveChamoy(Chamoy chamoy) {
        return chamoyRepository.save(chamoy);
    }

    @Override
    public void deleteChamoy(Long id) {
        chamoyRepository.deleteById(id);

    }
}
