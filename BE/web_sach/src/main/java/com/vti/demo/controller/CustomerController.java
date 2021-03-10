package com.vti.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.vti.demo.enity.Customer;
import com.vti.demo.services.CustomerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
//	@GetMapping
//	public CommonResponse getAll(Pageable pageable){PaginationResponse<Customer> data = new PaginationResponsezz<Customer>(customerService.getAll(pageable), "admin/enterprise");
//		return new CommonResponse(ResponseType.INFO.toString(), RestCode.SUCCESS.getCode(), "Get Success", data);
//	}
	
	
	@GetMapping()
	public ResponseEntity <?>getList() {
		return new ResponseEntity<>(customerService.getAllCustomers(),HttpStatus.OK);
	}
	
//	public List<Department> getAllDepartments() {
//		return departmentService.getAllDepartments();
//	}
	
	@GetMapping(value="/{id}")
	public Customer getCustomer(@PathVariable(name="id") int id) {
		return customerService.getCustomerByID(id);
	}
	
	@GetMapping(value="/getCustomerByEmail/{email}")
	public Customer getCustomerByEmail(@PathVariable(name="email") String email) {
		return customerService.getCustomerByEmail(email);
	}
	
	@PostMapping()
	public void addCustomer(@RequestBody Customer customer) {
		customerService.createCustomer(customer);
	}
	
	@PutMapping(value="/{id}")
	public void updateCustomer(@PathVariable(name="id") int id,@RequestBody Customer customer ) {
		customer.setId(id);
		customerService.updateCustomer(customer);
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteCustomer(@PathVariable(name="id") int id) {
		customerService.deleteCustomer(id);;
	}
}
