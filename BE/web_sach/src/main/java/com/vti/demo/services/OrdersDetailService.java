package com.vti.demo.services;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.vti.demo.dto.OrdersDetailDTO;
import com.vti.demo.enity.OrdersDetail;


public interface OrdersDetailService {
	public List<OrdersDetail> getAllOrdersDetail();
	
	public OrdersDetail getOrdersDetailByID(int id);
	
	public List<OrdersDetail> getOrdersDetailByOrdersId(int id_orders);
	
	public void createOrdersDetail(List<OrdersDetail> ordersDetails);
	
	public void updateOrdersDetail(OrdersDetail ordersDetail);
	
	void updateBookQuantity(OrdersDetailDTO orderDetail);
	
	@Modifying
	@Transactional
	public void deleteOrdersDetail(int id);
}
