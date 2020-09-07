import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/services/datashare.service';
import { Book } from 'src/app/interfaces/book';
import { User } from 'src/app/interfaces/user';
import { Store, select } from '@ngrx/store';
import * as fromBook from '../../store/book.reducer';
import * as bookActions from '../../store/book.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  enableEditDelete: boolean;
  books$: Observable<Book[]>;
  error$: Observable<string>;
  userInfo: User;

  constructor(
    private router: Router,
    private datashareService: DatashareService,
    private store: Store<fromBook.AppState>
  ) { }

  ngOnInit(): void {

    this.userInfo = this.datashareService.userInfo;
    if (this.userInfo && this.userInfo.username === 'admin') {
      this.enableEditDelete = true;
    }
    this.refreshBooks();
  }


  refreshBooks(): void {
    this.store.dispatch(new bookActions.LoadBooks());
    this.books$ = this.store.pipe(select(fromBook.getBooks));
    this.error$ = this.store.pipe(select(fromBook.getError));
  }

  public logOut(): void {
    this.datashareService.userInfo = this.userInfo;
    this.router.navigate(['../']);
  }

  addNew(): void {
    this.router.navigate(['../action']);
  }

  edit(book): void {
    this.datashareService.unsubscribe();
    this.datashareService.setData(book);
    this.router.navigate(['../action']);
  }

  delete(book): void {
    if (confirm('Are You Sure You want to Delete the Book : ' + book.title + '?')) {
      this.store.dispatch(new bookActions.DeleteBook(book.id));
    }
  }



}
