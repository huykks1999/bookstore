package com.vti.demo.controller;

import java.util.List;

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

import com.vti.demo.enity.Orders;
import com.vti.demo.services.OrdersService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/orders")
public class OrdersController {
	@Autowired
	private OrdersService ordersService;
	
	@GetMapping()
	public ResponseEntity <?>getList() {
		return new ResponseEntity<>(ordersService.getAllOrders(),HttpStatus.OK);
	}
	
	
//	public List<Department> getAllDepartments() {
//		return departmentService.getAllDepartments();
//	}
	
	@GetMapping(value="/{id}")
	public Orders getOrders(@PathVariable(name="id") int id) {
		return ordersService.getOrdersByID(id);
	}
	
	@GetMapping(value="/getOrdersByCustomerId/{id_customer}")
	public List<Orders> getOrdersByCustomerId(@PathVariable(name="id_customer") int id_customer) {
		return ordersService.getOrdersByCustomerId(id_customer);
	}
	
	@PostMapping()
	public void addOrders(@RequestBody Orders orders) {
		ordersService.createOrders(orders);
	}
	
	@PutMapping(value="/{id}")
	public void updateOrders(@PathVariable(name="id") int id,@RequestBody Orders orders ) {
		orders.setId(id);
		ordersService.updateOrders(orders);
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteOrders(@PathVariable(name="id") int id) {
		ordersService.deleteOrders(id);
	}
}
