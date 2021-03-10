package com.vti.demo.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.vti.demo.enity.Customer;
import com.vti.demo.repository.CustomerRepository;
import com.vti.demo.services.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public Page<Customer> getAll(Pageable pageable) {
		return customerRepository.findAll(pageable);
	}
	
	@Override
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	@Override
	public Customer getCustomerByID(int id) {
		return customerRepository.findCustomerById(id);
	}
	
	@Override
	public Customer getCustomerByEmail(String email) {
		return customerRepository.findCustomerByEmail(email);
	}

	
	@Override
	public void createCustomer(Customer customer) {
		customerRepository.save(customer);
	}

	@Override
	public void updateCustomer(Customer customer) {
		customerRepository.save(customer);
	}

	@Override
	public void deleteCustomer(int id) {
		customerRepository.deleteCustomerById(id);
	}

	
	
}
