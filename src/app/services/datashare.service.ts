import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  private dataShareSubject = new BehaviorSubject(null);
  public userInfo: User = null;

  constructor() { }

  public unsubscribe(): void {
    this.dataShareSubject = new BehaviorSubject(null);
  }

  public setData(data): void {
   this.dataShareSubject.next(data);
  }

  public getData(): Observable<any> {
    return this.dataShareSubject.asObservable();
  }
}
