package com.example.demo.service;

import com.example.demo.entity.Client;
import com.example.demo.repository.IClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClientServiceImp implements IClientService{
    @Autowired
    IClientRepository clientRepository;
    @Override
    public List<Client> findAllClients() {
        return (List<Client>) clientRepository.findAll();
    }

    @Override
    public Client findClientById(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    @Override
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);

    }
}
