package com.training.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="book", schema="app")
public class Book {
	@Id
	@Column
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int bookid;
	@Column
	private String bookname;
	@Column
	private int isinwishlist;
	@Column
	private String authorname;
	@Column
	private int iscompleted;
	@OneToOne
	@JoinColumn(name="bookuserid", referencedColumnName = "userid")
	private BookUser bookuser;

}
