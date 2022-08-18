package com.example.demo.service;

import com.example.demo.entity.Gummy;

import java.util.List;

public interface IGummyService {
    public List<Gummy> findAllGummies();
    public Gummy findGummyById(Long id);
    public Gummy saveGummy(Gummy gummy);
    public  void deleteGummy(Long id);
}
