package com.example.demo.service;

import com.example.demo.entity.Pack;
import com.example.demo.repository.IPackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackServiceImp implements IPackService{

    @Autowired
    IPackRepository packRepository;
    @Override
    public List<Pack> findAllPacks() {
        return (List<Pack>) packRepository.findAll();
    }

    @Override
    public Pack findPackById(Long id) {
        return packRepository.findById(id).orElse(null);
    }

    @Override
    public Pack SavePack(Pack pack) {
        return packRepository.save(pack);
    }

    @Override
    public void detetePack(Long id) {
        packRepository.deleteById(id);

    }
}
