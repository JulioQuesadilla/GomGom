package com.example.demo.controller;

import com.example.demo.entity.Employee;
import com.example.demo.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class EmployeeRestControler {
    @Autowired
    IEmployeeService EmployeeService;

    @GetMapping("/Employees")
    public List<Employee> Employees(){
        return EmployeeService.findAllEmployees();
    }

    @GetMapping("/Employees/{id}")
    public Employee EmployeeById(@PathVariable Long id){
        return EmployeeService.findEmployeeById(id);
    }
    @PostMapping("/Employees")
    public Employee newEmployee(@RequestBody Employee Employee){
        return EmployeeService.saveEmployee(Employee);
    }
    @PutMapping("/Employees")
    public Employee replaceEmployee(@RequestBody Employee Employee) {
        Employee.setIdEmpleado(null);


        return EmployeeService.saveEmployee(Employee);

    }
    @DeleteMapping("Employees/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        EmployeeService.deleteEmployee(id);
    }
}
