package com.vti.demo.controller;

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

import com.vti.demo.enity.TypeBook;
import com.vti.demo.services.TypeBookService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/typeBook")
public class TypeBookController {
	@Autowired
	private TypeBookService typeBookService;
	
	@GetMapping()
	public ResponseEntity <?>getList() {
		return new ResponseEntity<>(typeBookService.getAllTypeBooks(),HttpStatus.OK);
	}
	
//	public List<Department> getAllDepartments() {
//		return departmentService.getAllDepartments();
//	}
	
	@GetMapping(value="/{id}")
	public TypeBook getTypeBook(@PathVariable(name="id") int id) {
		return typeBookService.getTypeBookByID(id);
	}
	
	@PostMapping()
	public void addTypeBook(@RequestBody TypeBook typeBook) {
		typeBookService.createTypeBook(typeBook);
	}
	
	@PutMapping(value="/{id}")
	public void updateTypeBook(@PathVariable(name="id") int id,@RequestBody TypeBook typeBook) {
		typeBook.setId(id);
		typeBookService.updateTypeBook(typeBook);
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteTypeBook(@PathVariable(name="id") int id) {
		typeBookService.deleteTypeBook(id);
	}
}
