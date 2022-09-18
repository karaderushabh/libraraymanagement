import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './booklist/book.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UpdatedataService {
  private postUrlc: string;
  private postUrlw: string;
  private postuserUrl: string;

  constructor(private http: HttpClient) {
    this.postUrlc = 'http://localhost:8080/api/bookc/';
    this.postUrlw = 'http://localhost:8080/api/bookw/';
    this.postuserUrl = 'http://localhost:8080/api/user';
  }
  public userregistration(user: User) {
    return this.http.post<User>(this.postuserUrl, user);
  }
  public updatebookwish(book: Book, bookid: number, isinwishlist: number) {
    return this.http.put<Book>(
      this.postUrlw + bookid + '/' + isinwishlist,
      book
    );
  }
  public updatebookcompleted(book: Book, bookid: number, iscompleted: number) {
    return this.http.put<Book>(
      this.postUrlc + bookid + '/' + iscompleted,
      book
    );
  }
}
