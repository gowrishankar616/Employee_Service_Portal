package com.vcube.EmployeeServicePortal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vcube.EmployeeServicePortal.entity.Employee;
import com.vcube.EmployeeServicePortal.service.EmployeeService;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/postEmp")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping("/getEmp")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/getEmp/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return employeeService.getEmployeeById(id);
    }

    @PutMapping("/putEmp/{id}")
    public Employee updateEmployee(
            @PathVariable int id,
            @RequestBody Employee employee) {

        employee.setId(id);
        return employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/delEmp/{id}")
    public String deleteEmployee(@PathVariable int id) {
        employeeService.deleteEmployee(id);
        return "Employee deleted successfully";
    }
}