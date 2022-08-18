package com.example.demo.service;

import com.example.demo.entity.Gummy;
import com.example.demo.repository.IGummyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GummyServiceImp implements IGummyService{

    @Autowired
    IGummyRepository gummyRepository;

    @Override
    public List<Gummy> findAllGummies() {
         return (List<Gummy>) gummyRepository.findAll();
    }

    @Override
    public Gummy findGummyById(Long id) {
        return gummyRepository.findById(id).orElse(null);
    }

    @Override
    public Gummy saveGummy(Gummy gummy) {
        return gummyRepository.save(gummy);
    }

    @Override
    public void deleteGummy(Long id){
        gummyRepository.deleteById(id);
    }
}
