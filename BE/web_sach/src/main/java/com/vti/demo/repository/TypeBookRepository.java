package com.vti.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vti.demo.enity.TypeBook;
@Repository
public interface TypeBookRepository extends JpaRepository<TypeBook, Integer>{
	
	public List<TypeBook> findAll();
	
	public TypeBook findTypeBookById(int id);
	
	public void deleteTypeBookById(int id);
}
