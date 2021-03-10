package com.vti.demo.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.demo.enity.TypeBook;
import com.vti.demo.repository.TypeBookRepository;
import com.vti.demo.services.TypeBookService;


@Service
public class TypeBookServiceImpl implements TypeBookService{
	@Autowired
	private TypeBookRepository typeBookRepository;

	@Override
	public List<TypeBook> getAllTypeBooks() {
		return typeBookRepository.findAll();
	}

	@Override
	public TypeBook getTypeBookByID(int id) {
		return typeBookRepository.findTypeBookById(id);
	}

	@Override
	public void createTypeBook(TypeBook typeBook) {
		typeBookRepository.save(typeBook);
		
	}

	@Override
	public void updateTypeBook(TypeBook typeBook) {
		typeBookRepository.save(typeBook);
		
	}

	@Override
	public void deleteTypeBook(int id) {
		typeBookRepository.deleteTypeBookById(id);
	}
	
}
