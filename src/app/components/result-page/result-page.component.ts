import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/services/datashare.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/interfaces/book';
import { User } from 'src/app/interfaces/user';
import { Store, select } from '@ngrx/store';
import * as fromBook from "../state/book.reducer";
import * as bookActions from "../state/book.actions";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  enableEditDelete: boolean;
  books$: Observable<Book[]>;
  error$: Observable<String>;
  userInfo: User;

  constructor(
    private location: Location,
    private router: Router,
    private datashareService: DatashareService,
    private bookService: BookService,
    private store: Store<fromBook.AppState>
  ) { }

  ngOnInit(): void {
    this.userInfo = this.datashareService.userInfo;
    if (this.userInfo.username === 'admin')
      this.enableEditDelete = true;
    this.refreshBooks();
  }

  refreshBooks() {
    this.store.dispatch(new bookActions.LoadBooks());
    this.books$ = this.store.pipe(select(fromBook.getBooks));
    this.error$ = this.store.pipe(select(fromBook.getError));
  }

  public back() {
    this.datashareService.userInfo = this.userInfo;
    this.router.navigate(['../']);
  }

  addNew() {
    this.router.navigate(['../action']);
  }

  edit(book) {
    this.datashareService.unsubscribe();
    this.datashareService.setData(book);
    this.router.navigate(['../action']);
  }

  delete(book) {
    if (confirm('Are You Sure You want to Delete the Book' + book.title + '?')) {
      this.store.dispatch(new bookActions.DeleteBook(book.id));
    }
  }



}
