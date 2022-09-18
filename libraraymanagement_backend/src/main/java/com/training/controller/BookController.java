package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.model.Book;
import com.training.service.BookService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class BookController {
	@Autowired
	BookService bservice;
	@GetMapping("/book")
	public List<Book> getallbooks() {
		return bservice.getallbooks();
	}
	@PutMapping("/bookc/{bookid}/{iscompleted}")
	public void updateBookiscompleted(@PathVariable int bookid, @PathVariable int iscompleted ) {
		bservice.updateBookiscompleted(bookid, iscompleted);
		
	}
	@PutMapping("/bookw/{bookid}/{isinwishlist}")
	public void updateBookisinwishlist(@PathVariable int bookid, @PathVariable int isinwishlist ) {
		bservice.updateBookisinwishlist(bookid, isinwishlist);
		
	}
	
	
}
