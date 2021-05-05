import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user: User;
  idUser: number;

  constructor(
    private route: ActivatedRoute,
    private _users: UsersService,
  ) {
    this.idUser = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.user = this._users.usersList.find(user => user.id == this.idUser);
      console.log('Usuario: ', this.user);
    }, 900);
  }

}
