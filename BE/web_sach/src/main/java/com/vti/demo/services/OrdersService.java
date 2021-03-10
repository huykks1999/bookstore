package com.vti.demo.services;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;


import com.vti.demo.enity.Orders;


public interface OrdersService {
	public List<Orders> getAllOrders();
	
	public Orders getOrdersByID(int id);
	
	public List<Orders> getOrdersByCustomerId(int id_customer);
	
	public void createOrders(Orders orders);
	
	public void updateOrders(Orders orders);
	
	
	
	@Modifying
	@Transactional
	public void deleteOrders(int id);
}
