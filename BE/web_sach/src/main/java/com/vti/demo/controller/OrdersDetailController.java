package com.vti.demo.controller;

import java.util.ArrayList;
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

import com.vti.demo.dto.OrdersDetailDTO;
import com.vti.demo.enity.OrdersDetail;
import com.vti.demo.services.OrdersDetailService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ordersDetail")
public class OrdersDetailController {
	@Autowired
	private OrdersDetailService ordersDetailService;
	
	@GetMapping()
	public ResponseEntity <?>getList() {
		return new ResponseEntity<>(ordersDetailService.getAllOrdersDetail(),HttpStatus.OK);
	}
	
	@GetMapping(value="/{id}")
	public OrdersDetail getOrdersDetail(@PathVariable(name="id") int id) {
		return ordersDetailService.getOrdersDetailByID(id);
	}
	
	
	@GetMapping(value="/getOrdersByOrdersId/{id_orders}")
	public List<OrdersDetail> getOrdersByOrdersId(@PathVariable(name="id_orders") int id_orders) {
		return ordersDetailService.getOrdersDetailByOrdersId(id_orders);
	}
	
	@PostMapping()
	public void addOrdersDetail(@RequestBody List<OrdersDetailDTO> ordersDetailDTOs) {
		List<OrdersDetail> ordersDetails = new ArrayList<OrdersDetail>();
		for (OrdersDetailDTO ordersDetailDTO : ordersDetailDTOs) {
			ordersDetails.add(ordersDetailDTO.toEntity());
			ordersDetailService.updateBookQuantity(ordersDetailDTO);
		}
		ordersDetailService.createOrdersDetail(ordersDetails);
		
		
	}
	
	@PutMapping(value="/{id}")
	public void updateOrdersDetail(@PathVariable(name="id") int id,@RequestBody OrdersDetail ordersDetail ) {
		ordersDetail.setId(id);
		ordersDetailService.updateOrdersDetail(ordersDetail);
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteOrdersDetail(@PathVariable(name="id") int id) {
		ordersDetailService.deleteOrdersDetail(id);
	}
}
