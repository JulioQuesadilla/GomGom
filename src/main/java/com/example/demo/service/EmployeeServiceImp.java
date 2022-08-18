package com.example.demo.service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.IEmployeeRepository;
import com.example.demo.repository.IEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeServiceImp implements IEmployeeService{
    @Autowired
    IEmployeeRepository employeeRepository;

    @Override
    public List<Employee> findAllEmployees() {
        return (List<Employee>) employeeRepository.findAll();
    }

    @Override
    public Employee findEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);

    }
}
