import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Observable } from 'rxjs';
import * as fromBook from '../../store/book.reducer';
import { Store, select } from '@ngrx/store';
import * as bookActions from '../../store/book.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$: Observable<Book[]>;
  error$: Observable<string>;

  @Input() result: boolean;
  @Input() book;

  constructor(
    private store: Store<fromBook.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new bookActions.LoadBooks());
    this.books$ = this.store.pipe(select(fromBook.getBooks));
    this.error$ = this.store.pipe(select(fromBook.getError));
  }

}
