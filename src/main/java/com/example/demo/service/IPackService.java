package com.example.demo.service;

import com.example.demo.entity.Pack;

import java.util.List;

public interface IPackService {
    public List<Pack> findAllPacks();

    public Pack findPackById(Long Id);

    public Pack SavePack(Pack pack);

    public void detetePack(Long id);
}
