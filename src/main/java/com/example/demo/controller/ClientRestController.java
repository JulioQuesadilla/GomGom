package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.service.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ClientRestController {
    @Autowired
    IClientService ClientService;

    @GetMapping("/Clients")
    public List<Client> Clients(){
        return ClientService.findAllClients();
    }

    @GetMapping("/Clients/{id}")
    public Client ClientById(@PathVariable Long id){
        return ClientService.findClientById(id);
    }
    @PostMapping("/Clients")
    public Client newClient(@RequestBody Client Client){
        return ClientService.saveClient(Client);
    }
    @PutMapping("/Clients")
    public Client replaceClient(@RequestBody Client Client) {
        Client.setIdClientes(null);


        return ClientService.saveClient(Client);

    }
    @DeleteMapping("Clients/{id}")
    public void deleteClient(@PathVariable Long id) {
        ClientService.deleteClient(id);
    }
}
