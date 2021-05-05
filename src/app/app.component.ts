import { Component } from '@angular/core';
import { User } from './Interfaces/user';
import { AuthService } from './Services/auth.service';
import { UsersService } from './Services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private _users: UsersService,
  ){
    _users.getUsers().subscribe(
      data => {
        console.log('Users: ', data);
        const users = data as User[];
        this._users.usersList = users;
      },
      error => {
        console.log('Users: ', error);
      },
      () => {
        console.log('Finally Users.');
      }
    )
  }

}
