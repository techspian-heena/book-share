import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service'
import { Book } from 'src/app/interfaces/book';
import { User } from 'src/app/interfaces/user';
import { DatashareService } from 'src/app/services/datashare.service';
import { Observable } from 'rxjs';
import * as fromBook from "../state/book.reducer";
import { Store, select } from "@ngrx/store";
import * as bookActions from "../state/book.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  userName: string;
  password: string;
  repeatPwd: string;
  email: string;
  isRequired: boolean;
  isWrongUser: boolean;
  isCloseForm: boolean;
  alert: boolean;

  books$: Observable<Book[]>;
  error$: Observable<String>;
  book_list: Book[];

  constructor(
    private router: Router,
    private store: Store<fromBook.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new bookActions.LoadBooks());
    this.books$ = this.store.pipe(select(fromBook.getBooks));
    this.error$ = this.store.pipe(select(fromBook.getError));
  }

  logIn() {
    this.router.navigate(['./entry/login']);
  }

  signUp() {
    this.router.navigate(['./entry/sign-up']);
  }

}
