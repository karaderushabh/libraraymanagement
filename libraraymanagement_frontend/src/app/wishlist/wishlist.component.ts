import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../booklist/book.model';
import { UpdatedataService } from '../updatedata.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private addinwishservice: UpdatedataService
  ) {}
  public book: Book[] = [];
  public bookw: Book = {} as Book;
  public wishzero: boolean = false;

  ngOnInit(): void {
    this.http
      .get<Book[]>('http://localhost:8080/api/book')
      .subscribe((response) => {
        this.book = response;
        for (let i = 0; i < this.book.length; i++) {
          if (this.book[i].isinwishlist == 1) {
            this.wishzero = true;
          }
        }
      });
  }
  remove(book: Book) {
    this.bookw = book;
    this.updatebookwish();
  }
  updatebookwish(): void {
    this.addinwishservice
      .updatebookwish(this.bookw, this.bookw.bookid, 0)
      .subscribe((data) => {
        alert(this.bookw.bookname + ' will be removed from Wishist ');
        location.reload();
      });
  }
}
