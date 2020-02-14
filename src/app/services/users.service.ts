import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { map, tap } from "rxjs/operators";

@Injectable()
export class UsersService {
  public get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public set user(value) {
    localStorage.setItem('user', JSON.stringify(value));
  }


  constructor(private http: HttpClient) {}
  getUserByEmail(email:string): Observable<User> {
    return this.http.get(`http://localhost:3001/users?email=${email}`)
      .pipe(
        map((response: any) => response),
        tap((user: any) => {
          this.user = user;
        })
        ,
    map((user: User) => user[0] ? user[0] : undefined))
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post('http://localhost:3001/users', user)
      .pipe(map((response: any) => response));
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get('http://localhost:3001/users')
      .pipe(map((response: any) => response));
  }
}
