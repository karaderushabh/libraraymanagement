import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public book: Book[] = [];
  ngOnInit(): void {
    this.http
      .get<Book[]>('http://localhost:8080/api/book')
      .subscribe((response) => {
        this.book = response;
      });
  }
}
