package com.vti.demo.dto;

import com.vti.demo.enity.OrdersDetail;

public class OrdersDetailDTO {
	
	private int quantity;
	
	private int id_book;
	
	private double price;

	public OrdersDetailDTO(int quantity, double price, int id_book) {
		super();
		this.quantity = quantity;
		this.id_book = id_book;
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getId_book() {
		return id_book;
	}

	public void setId_book(int id_book) {
		this.id_book = id_book;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	
	public OrdersDetail toEntity() {
		return new OrdersDetail(this.quantity, this.price, this.id_book);
	}
}
