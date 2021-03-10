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
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "typeBook", catalog = "bookStore")
public class TypeBook implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "typeBook", fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	private Collection<Book> books;

	public TypeBook(int id, String name, Collection<Book> books) {
		super();
		this.id = id;
		this.name = name;
		this.books = books;
	}
	
	public TypeBook(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public TypeBook() {
		super();
	}

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
	
}
