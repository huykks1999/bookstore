package com.vti.demo.service.Impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.demo.enity.Orders;
import com.vti.demo.repository.OrdersRepository;
import com.vti.demo.services.OrdersService;

@Service
public class OrdersServiceImpl implements OrdersService{
	
	@Autowired
	private OrdersRepository ordersRepository;
	
	@Override
	public List<Orders> getAllOrders() {
		return ordersRepository.findAll();
	}

	@Override
	public Orders getOrdersByID(int id) {
		return ordersRepository.findOrdersById(id);
	}

	@Override
	public List<Orders> getOrdersByCustomerId(int id_customer) {
		return ordersRepository.findOrdersByCustomerId(id_customer);
	}

	@Override
	public void createOrders(Orders orders) {
		ordersRepository.save(orders);
	}

	@Override
	public void updateOrders(Orders orders) {
		ordersRepository.save(orders);
		
	}

	@Override
	public void deleteOrders(int id) {
		ordersRepository.deleteOrdersById(id);
		
	}

	

//	@Override
//	public List<ThongKe> thongKe() {
//		Date date = new Date();
//		int currentMonth = date.getMonth();
//		List<?>listThongKe=null;
//		for(int i=1 ; i<= currentMonth; i++) {
//			listThongKe.add(ordersRepository.thongKe(i));
//		}
//		return listThongKe;
//	}

}
