package com.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.model.Book;
import com.training.repo.BookRepo;

@Service
public class BookService {

	
	@Autowired
	BookRepo brepo;
	public List<Book> getallbooks() {
		return brepo.findAll();
	}
	
	public void updateBookiscompleted(int bookid, int iscompleted ) {
		Optional<Book> b = brepo.findById(bookid);
		Book book = b.get();
		book.setIscompleted(iscompleted);
		brepo.save(book);
	}
	
	public void updateBookisinwishlist(int bookid, int isinwishlist ) {
		Optional<Book> b = brepo.findById(bookid);
		Book book = b.get();
		book.setIsinwishlist(isinwishlist);
		brepo.save(book);
	}
	
	
}
