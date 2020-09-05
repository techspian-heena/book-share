import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { BookService } from '../../services/book.service';
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import * as bookActions from '../state/book.actions';
import { mergeMap, map, catchError } from "rxjs/operators";
import { Book } from "../../interfaces/book";

@Injectable()
export class BookEffect {

    constructor(
        private actions$: Actions,
        private bookService: BookService
      ) {}

      @Effect()
      loadBooks$: Observable<Action> = this.actions$.pipe(
        ofType<bookActions.LoadBooks>(
            bookActions.BookActionTypes.LOAD_BOOKS
        ),
        mergeMap((action: bookActions.LoadBooks) =>
          this.bookService.getAllBooks().pipe(
            map(
              (books: Book[]) =>
                new bookActions.LoadBooksSuccess(books)
            ),
            catchError(err => of(new bookActions.LoadBooksFail(err)))
          )
        )
      );

      @Effect()
      createBook$: Observable<Action> = this.actions$.pipe(
        ofType<bookActions.CreateBook>(
            bookActions.BookActionTypes.CREATE_BOOK
        ),
        map((action: bookActions.CreateBook) => action.payload),
        mergeMap((book: Book) =>
          this.bookService.addBook(book).pipe(
            map(
              (newBook: any) =>
                new bookActions.CreateBookSuccess(newBook)
            ),
            catchError(err => of(new bookActions.CreateBookFail(err)))
          )
        )
      );

      @Effect()
      updateBook$: Observable<Action> = this.actions$.pipe(
        ofType<bookActions.UpdateBook>(
          bookActions.BookActionTypes.UPDATE_BOOK
        ),
        map((action: bookActions.UpdateBook) => action.payload),
        mergeMap((book: Book) =>
          this.bookService.updateBook(book).pipe(
            map(
              (updateBook: Book) =>
                new bookActions.UpdateBookSuccess({
                  id: updateBook.id,
                  changes: updateBook
                })
            ),
            catchError(err => of(new bookActions.UpdateBookFail(err)))
          )
        )
      );

      @Effect()
      deleteBook$: Observable<Action> = this.actions$.pipe(
      ofType<bookActions.DeleteBook>(
        bookActions.BookActionTypes.DELETE_BOOK
     ),
     map((action: bookActions.DeleteBook) => action.payload),
     mergeMap((id: number) =>
      this.bookService.deleteBook(id).pipe(
        map(() => new bookActions.DeleteBookSuccess(id)),
        catchError(err => of(new bookActions.DeleteBookFail(err)))
      )
    )
  );
}