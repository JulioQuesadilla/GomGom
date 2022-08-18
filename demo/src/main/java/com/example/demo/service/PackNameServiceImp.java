package com.example.demo.service;

import com.example.demo.entity.PackName;
import com.example.demo.repository.IPackNameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PackNameServiceImp implements IPackNameService{

    @Autowired
    IPackNameRepository packNameRepository;
    @Override
    public List<PackName> findAllPackNames() {
        return (List<PackName>) packNameRepository.findAll();
    }

    @Override
    public PackName findPackNameById(Long id) {
        return packNameRepository.findById(id).orElse(null);
    }

    @Override
    public PackName savePackName(PackName packName) {
        return packNameRepository.save(packName);
    }

    @Override
    public void deletePackName(Long id) {
        packNameRepository.deleteById(id);

    }
}
