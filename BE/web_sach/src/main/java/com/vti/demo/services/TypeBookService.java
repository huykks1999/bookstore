package com.vti.demo.services;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.vti.demo.enity.TypeBook;

public interface TypeBookService {
	public List<TypeBook> getAllTypeBooks();
	
	public TypeBook getTypeBookByID(int id);
	
	public void createTypeBook(TypeBook typeBook);
	
	public void updateTypeBook(TypeBook typeBook);
	
	@Modifying
	@Transactional
	public void deleteTypeBook(int id);
}
