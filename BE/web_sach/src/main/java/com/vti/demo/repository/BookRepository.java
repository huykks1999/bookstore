package com.vti.demo.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vti.demo.enity.Book;
@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
	public List<Book> findAll();
	
	public Book findBookById(int id);
	
	public List<Book> findBookByTypeBookId(int type_Book_Id);
	
	public void deleteBookById(int id);
	
	
	@Query(value = "SELECT book.id, book.name, book.image, book.description, book.nbx, book.quantity, book.price, book.sale_Price, book.type_Book_Id, book.author, book.pages_Number, book.enable FROM orders_detail join book on orders_detail.id_Book = book.id group by id_Book order by sum(orders_detail.quantity) desc limit 6",nativeQuery = true)
	List<Book> bestSoldBooks();
	
//	@Modifying
//	@Query("update Customer c set c.quanity = ?1 where c.name ?2")
//	void updateQuanityByName(@Param("quantity") Quantity quantity);
}
