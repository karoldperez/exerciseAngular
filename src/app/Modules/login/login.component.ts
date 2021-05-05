import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/Interfaces/alert';
import { User } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/Services/auth.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup;

  constructor(
    private _users: UsersService,
    private fb: FormBuilder,
    public _auth: AuthService,
    private router: Router,
  ) {
    this.user = fb.group({
      'usuario': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'clave': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  ngOnInit(): void { }

  validarLogin(): void {
    const encontrado = this._users.usersList.find(
      x =>
        x.username.toLowerCase() == (this.user.get('usuario').value) + ''.toLowerCase() &&
        x.username.toLowerCase() == (this.user.get('clave').value) + ''.toLowerCase()
    )
    if (encontrado) {
      sessionStorage.setItem(btoa('user'), btoa(JSON.stringify(encontrado)));
      this._auth.alerta = {
        message: 'Usuario encontrado.',
        color: 'success',
      }
      setTimeout(() => {
        this.router.navigate(['/users']);
      }, 2000);
    } else {
      this._auth.alerta = {
        message: 'Usuario no encontrado.',
        color: 'danger',
      }
    }
  }

}
