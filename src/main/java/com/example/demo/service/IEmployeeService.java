package com.example.demo.service;

import com.example.demo.entity.Employee;

import java.util.List;

public interface IEmployeeService {
    public List<Employee> findAllEmployees();

    public Employee findEmployeeById(Long id);
    public Employee saveEmployee(Employee employee);
    public void deleteEmployee(Long id);
}
