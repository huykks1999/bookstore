package com.vti.demo.enity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders_detail", catalog = "bookStore")
public class OrdersDetail implements Serializable{
	private static final long serialVersionUID = 1L;

	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "price")
	private double price;
	
	@Column(name = "id_Orders")
	private int id_orders;
	
	@Column(name = "id_Book")
	private int id_book;
	
	@ManyToOne 
	@JoinColumn(name = "id_Orders",insertable =  false, updatable = false) // thông qua khóa ngoại type_Book_id_id
	private Orders orders;
	
	@ManyToOne 
	@JoinColumn(name = "id_Book",insertable =  false, updatable = false) // thông qua khóa ngoại type_Book_id_id
	private Book book;
	
	public OrdersDetail() {
	}

	public OrdersDetail(int quantity, double price, int id_book) {
		this.quantity = quantity;
		this.id_book = id_book;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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


	public int getId_orders() {
		return id_orders;
	}

	public void setId_orders(int id_orders) {
		this.id_orders = id_orders;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}
	
}
