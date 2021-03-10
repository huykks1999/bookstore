package com.vti.demo.services;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.vti.demo.enity.Book;

public interface BookService {
	public List<Book> getAllBooks();
	
	public List<Book> bestSoldBooks();
	
	public Book getBookByID(int id);
	
	public List<Book> getBookByTypeBookId(int type_Book_Id);
	
	public void createBook(Book book);
	
	public void updateBook(Book book);
	
	@Modifying
	@Transactional
	public void deleteBook(int id);
}
