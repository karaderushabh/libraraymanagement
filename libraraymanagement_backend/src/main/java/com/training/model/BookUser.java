package com.training.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="bookuser", schema="app")
@Data
public class BookUser {
	@Id
	@Column
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
	@Column
	private String name;
	@Column
	private String email;
	@Column
	private String password;
}
