package com.vti.demo.controller;

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

import com.vti.demo.enity.Book;
import com.vti.demo.services.BookService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/book")
public class BookController {
	@Autowired
	private BookService bookService;
	
	@GetMapping()
	public ResponseEntity <?>getList() {
		return new ResponseEntity<>(bookService.getAllBooks(),HttpStatus.OK);
	}
	
	@GetMapping("/bestSoldBooks")
	public ResponseEntity <?>bestSoldBooks() {
		return new ResponseEntity<>(bookService.bestSoldBooks(),HttpStatus.OK);
	}
	
//	public List<Department> getAllDepartments() {
//		return departmentService.getAllDepartments();
//	}
	
	@GetMapping(value="/{id}")
	public Book getBook(@PathVariable(name="id") int id) {
		return bookService.getBookByID(id);
	}
	
	@GetMapping(value="/getBookByTypeBookId/{type_Book_Id}")
	public List<Book> getBookByTypeBookId(@PathVariable(name="type_Book_Id") int type_Book_Id) {
		return bookService.getBookByTypeBookId(type_Book_Id);
	}
	
	@PostMapping()
	public void addBook(@RequestBody Book book) {
		bookService.createBook(book);
	}
	
	@PutMapping(value="/{id}")
	public void updateBook(@PathVariable(name="id") int id,@RequestBody Book book ) {
		book.setId(id);
		bookService.updateBook(book);
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteBook(@PathVariable(name="id") int id) {
		bookService.deleteBook(id);
	}
}
