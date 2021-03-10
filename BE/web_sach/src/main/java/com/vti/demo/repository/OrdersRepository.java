package com.vti.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vti.demo.enity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer>{
	public List<Orders> findAll();
	
	public Orders findOrdersById(int id);
	
	public List<Orders> findOrdersByCustomerId(int id_customer);
	
	public void deleteOrdersById(int id);
	
	@Query("SELECT MAX(o.id) FROM Orders o")
	public int maxIdOrder();
	
}
