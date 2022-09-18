import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../booklist/book.model';
import { UpdatedataService } from '../updatedata.service';

@Component({
  selector: 'app-completedlist',
  templateUrl: './completedlist.component.html',
  styleUrls: ['./completedlist.component.css'],
})
export class CompletedlistComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private addincompltedservice: UpdatedataService
  ) {}
  public book: Book[] = [];
  public completezero: boolean = false;
  public bookc: Book = {} as Book;
  ngOnInit(): void {
    this.http
      .get<Book[]>('http://localhost:8080/api/book')
      .subscribe((response) => {
        this.book = response;
        for (let i = 0; i < this.book.length; i++) {
          if (this.book[i].iscompleted == 1) {
            this.completezero = true;
          }
        }
      });
  }
  remove(book: Book) {
    this.bookc = book;
    this.updatebookcompleted();
  }
  updatebookcompleted(): void {
    this.addincompltedservice
      .updatebookcompleted(this.bookc, this.bookc.bookid, 0)
      .subscribe((data) => {
        alert(this.bookc.bookname + ' will be removed from Completed list ');
        location.reload();
      });
  }
}
