import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  private dataShareSubject = new BehaviorSubject(null);
  public userInfo: User = null;
  historyBooks: Book[] = [];
  horrorBooks: Book[] = [];
  cookBooks: Book[] = [];
  comicBooks: Book[] = [];
  scienceBooks: Book[] = [];
  otherBooks: Book[] = []; 

  constructor() { }

  public unsubscribe() {
    this.dataShareSubject = new BehaviorSubject(null);
  }

  public setData(data) {
   this.dataShareSubject.next(data);
  }

  public getData() {
    return this.dataShareSubject.asObservable();
  }
}
