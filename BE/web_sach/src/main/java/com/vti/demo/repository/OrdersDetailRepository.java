package com.vti.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vti.demo.enity.OrdersDetail;


@Repository
public interface OrdersDetailRepository extends JpaRepository<OrdersDetail, Integer>{
public List<OrdersDetail> findAll();
	
	public OrdersDetail findOrdersDetailById(int id);
	
	public List<OrdersDetail> findOrdersDetailByOrdersId(int id_orders);
	
	public void deleteOrdersDetailById(int id);
	
	
}
