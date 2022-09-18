import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../booklist/book.model';
import { UpdatedataService } from '../updatedata.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private addinwishservice: UpdatedataService,
    private addincompltedservice: UpdatedataService
  ) {}
  public book: Book[] = [];
  public bookw: Book = {} as Book;
  public bookc: Book = {} as Book;

  ngOnInit(): void {
    this.http
      .get<Book[]>('http://localhost:8080/api/book')
      .subscribe((response) => {
        this.book = response;
      });
  }

  addtowish(book: Book) {
    this.bookw = book;
    this.updatebookwish();
  }

  updatebookwish(): void {
    this.addinwishservice
      .updatebookwish(this.bookw, this.bookw.bookid, 1)
      .subscribe((data) => {
        alert('Book added in WishList');
      });
  }

  addtocompleted(book: Book) {
    this.bookc = book;
    this.updatebookcompleted();
  }
  updatebookcompleted(): void {
    this.addincompltedservice
      .updatebookcompleted(this.bookc, this.bookc.bookid, 1)
      .subscribe((data) => {
        alert('Book added in Completed List');
      });
  }
}
