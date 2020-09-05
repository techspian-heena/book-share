import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private endPoint = environment.apiEndpoint;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) {
  }


  getAllBooks(): Observable<Book[]> {

    return this.http.get(this.endPoint)
      .pipe(
        map((res: any) => {
          if (res != null) {
            return res;
          } else {
            return null;
          }
        })
      );

  }

  addBook(book: Book): Observable<Book[]> {
    return this.http.post(this.endPoint, book, this.httpOptions)
      .pipe(
        map((res: any) => {
          if (res != null) {
            return res;
          } else {
            return null;
          }
        })
      );
  }

  updateBook(book): Observable<Book> {
    return this.http.put<Book>(`${this.endPoint}/${book.id}`,
      book)
      .pipe(
        map((res: any) => {
          if (res != null) {
            return res;
          } else {
            return null;
          }
        })
      )
  }

  deleteBook(id) {
    return this.http.delete(`${this.endPoint}/${id}`, this.httpOptions)
      .pipe(
        map((res: any) => {
          if (res != null) {
            return true
          } else {
            return false;
          }
        })
      );
  }
}
