package com.vti.demo.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;


import com.vti.demo.enity.Customer;

public interface CustomerService {
	public Page<Customer> getAll(Pageable pageable);
	
	public List<Customer> getAllCustomers();
	
	public Customer getCustomerByID(int id);
	
	public Customer getCustomerByEmail(String email);
	
	public void createCustomer(Customer customer);
	
	public void updateCustomer(Customer customer);
	
	@Modifying
	@Transactional
	public void deleteCustomer(int id);
}
