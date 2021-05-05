import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList = [] as User[];

  constructor(
    private _http: HttpClient,
  ) { }

  getUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
}
