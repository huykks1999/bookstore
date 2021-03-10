package com.vti.demo.enity;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "book", catalog = "bookStore")
public class Book implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "description")
	private String description;

	@Column(name = "nbx")
	private String nbx;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "price")
	private double price;
	
	@Column(name = "sale_Price")
	private double sale_price;
	
	@Column(name = "author")
	private String author;
	
	
	@Column(name = "pages_Number")
	private int pages_number;
	
	@Column(name = "enable")
	private boolean enable;
	
	@Column(name = "type_Book_Id")
	private int type_Book_Id;
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@OneToMany(mappedBy = "book", fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	private Collection<OrdersDetail> ordersDetail;
	

	@ManyToOne 
	@JoinColumn(name = "type_Book_Id",insertable =  false, updatable = false) // thông qua khóa ngoại type_Book_id_id
	private TypeBook typeBook;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNbx() {
		return nbx;
	}

	public void setNbx(String nbx) {
		this.nbx = nbx;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getSale_price() {
		return sale_price;
	}

	public void setSale_price(double sale_price) {
		this.sale_price = sale_price;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPages_number() {
		return pages_number;
	}

	public void setPages_number(int pages_number) {
		this.pages_number = pages_number;
	}

	public TypeBook getTypeBook() {
		return typeBook;
	}

	public void setTypeBook(TypeBook typeBook) {
		this.typeBook = typeBook;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getType_Book_Id() {
		return type_Book_Id;
	}

	public void setType_Book_Id(int type_Book_Id) {
		this.type_Book_Id = type_Book_Id;
	}

	public boolean isEnable() {
		return enable;
	}

	public void setEnable(boolean enable) {
		this.enable = enable;
	}
	
}
