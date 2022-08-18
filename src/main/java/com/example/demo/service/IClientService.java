package com.example.demo.service;

import com.example.demo.entity.Client;

import java.util.List;

public interface IClientService {
    public List<Client> findAllClients();
    public Client findClientById(Long id);
    public Client saveClient(Client client);
    public void deleteClient(Long id);
}
