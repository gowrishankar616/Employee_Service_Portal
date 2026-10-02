package com.vcube.EmployeeServicePortal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vcube.EmployeeServicePortal.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
