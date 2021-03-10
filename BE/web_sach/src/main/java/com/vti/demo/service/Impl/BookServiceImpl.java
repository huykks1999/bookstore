package com.vti.demo.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.demo.enity.Book;
import com.vti.demo.repository.BookRepository;
import com.vti.demo.services.BookService;

@Service
public class BookServiceImpl implements BookService{
	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	@Override
	public Book getBookByID(int id) {
		return bookRepository.findBookById(id);
	}
	
	@Override
	public List<Book> getBookByTypeBookId(int type_Book_Id) {
		return bookRepository.findBookByTypeBookId(type_Book_Id);
	}


	@Override
	public void createBook(Book book) {
		bookRepository.save(book);
		
	}

	@Override
	public void updateBook(Book book) {
		bookRepository.save(book);
	}

	@Override
	public void deleteBook(int id) {
		bookRepository.deleteBookById(id);
		
	}

	@Override
	public List<Book> bestSoldBooks() {
		return bookRepository.bestSoldBooks();
	}

}
