import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endPoint = environment.apiEndpoint;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.endPoint}/users`)
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

  addUser(user: User): Observable<User[]> {
    return this.http.post(`${this.endPoint}/users`, user, this.httpOptions)
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
}
