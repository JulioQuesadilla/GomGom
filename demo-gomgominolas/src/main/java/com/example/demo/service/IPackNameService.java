package com.example.demo.service;


import com.example.demo.entity.PackName;

import java.util.List;

public interface IPackNameService {
    public List<PackName> findAllPackNames();
    public PackName findPackNameById(Long id);
    public PackName savePackName(PackName packName);
    public void deletePackName(Long id);
}
