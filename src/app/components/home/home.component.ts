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
  userId;
  pwd;

  books$: Observable<Book[]>;
  error$: Observable<String>;
  book_list: Book[];

  constructor(
    private router: Router,
    private bookService: BookService,
    private datashareService: DatashareService,
    private store: Store<fromBook.AppState>
  ) { }

  ngOnInit(): void {
    this.user = {
      userName: null,
      password: null
    };
    if (this.datashareService.userInfo) {
      this.userId = this.datashareService.userInfo.userName;
      this.pwd = this.datashareService.userInfo.password;
      this.user = this.datashareService.userInfo;
    }

    this.store.dispatch(new bookActions.LoadBooks());
    this.books$ = this.store.pipe(select(fromBook.getBooks));
    this.error$ = this.store.pipe(select(fromBook.getError));
  }

  signIn(userName, password) {
    this.alert = false;
    console.log(this.userId);
    if (userName != null && password != null) {
      if ((userName === 'admin' && password === 'zaq1ZAQ!') ||
        (userName === this.user.userName && password === this.user.password)) {
        let userInfo: User;
        if (userName === 'admin') {
          userInfo = {
            userName: 'admin',
            password: 'zaq1ZAQ!'
          };
        } else {
          userInfo = this.user;
        }
        this.datashareService.userInfo = userInfo;
        this.router.navigate(['../result']);
      } else {
        this.isWrongUser = true;
        console.log('wrong username or password');
      }
    } else {
      this.isRequired = true;
      console.log('you must enter username');
    }

  }

  signUp(name, pwd) {
    this.alert = true;
    this.user = {
      userName: name,
      password: pwd
    }
    document.getElementById('id02').style.display = 'none'

  }

}
