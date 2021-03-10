package com.vti.demo.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.demo.dto.OrdersDetailDTO;
import com.vti.demo.enity.Book;
import com.vti.demo.enity.OrdersDetail;
import com.vti.demo.repository.BookRepository;
import com.vti.demo.repository.OrdersDetailRepository;
import com.vti.demo.repository.OrdersRepository;
import com.vti.demo.services.OrdersDetailService;

@Service
public class OrdersDetailServiceImpl implements OrdersDetailService{
	
	@Autowired
	private OrdersDetailRepository ordersDetailRepository;
	
	@Autowired
	private OrdersRepository ordersRepository;
	
	private final BookRepository bookRepo;
	
	public OrdersDetailServiceImpl(BookRepository bookRepo) {
		this.bookRepo = bookRepo;
	}
	
	@Override
	public List<OrdersDetail> getAllOrdersDetail() {
		// TODO Auto-generated method stub
		return ordersDetailRepository.findAll();
	}

	@Override
	public OrdersDetail getOrdersDetailByID(int id) {
		// TODO Auto-generated method stub
		return ordersDetailRepository.findOrdersDetailById(id);
	}

	@Override
	public List<OrdersDetail> getOrdersDetailByOrdersId(int id_orders) {
		// TODO Auto-generated method stub
		return ordersDetailRepository.findOrdersDetailByOrdersId(id_orders);
	}

	@Override
	public void createOrdersDetail(List<OrdersDetail> ordersDetails) {
		// TODO Auto-generated method stub
		for (OrdersDetail ordersDetail : ordersDetails) {
			ordersDetail.setId_orders(ordersRepository.maxIdOrder());
			ordersDetailRepository.save(ordersDetail);
		}
	}

	@Override
	public void updateOrdersDetail(OrdersDetail ordersDetail) {
		// TODO Auto-generated method stub
		ordersDetailRepository.save(ordersDetail);
	}

	@Override
	public void deleteOrdersDetail(int id) {
		// TODO Auto-generated method stub
		ordersDetailRepository.deleteOrdersDetailById(id);
	}

	@Override
	public void updateBookQuantity(OrdersDetailDTO orderDetailDTO) {
		Book book = bookRepo.findBookById(orderDetailDTO.getId_book());
		Integer currentQuantity = book.getQuantity();
		book.setQuantity(currentQuantity -= orderDetailDTO.getQuantity());
		bookRepo.save(book);
	}
	
}
