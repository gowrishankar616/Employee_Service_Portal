package com.vcube.EmployeeServicePortal.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vcube.EmployeeServicePortal.entity.Employee;
import com.vcube.EmployeeServicePortal.repo.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    // Create employee
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Get employee by ID
    public Employee getEmployeeById(int id) {
        return employeeRepository.findById(id).orElse(null);
    }

    // Update employee
    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Delete employee
    public void deleteEmployee(int id) {
        employeeRepository.deleteById(id);
    }
}