package com.vcube.EmployeeServicePortal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employee72")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String fname;
	String lname;
	Integer age;
	String city;
	String state;
	String country;
	long salary;

}
