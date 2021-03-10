package com.vti.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vti.demo.enity.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	public List<Customer> findAll();
	
	public Customer findCustomerById(int id);
	
	public Customer findCustomerByEmail(String email);
	
	public void deleteCustomerById(int id);
}
