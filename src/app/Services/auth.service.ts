import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from '../Interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  alerta: Alert = {
    message: 'Ingrese sus datos.',
    color: 'info'
  };

  constructor(
    private router: Router,
  ) { }

  validarAut() {
    if (!sessionStorage.getItem(btoa('user'))) {
      this.router.navigate(['/']);
      this.alerta = {
        message: 'El token del usuario ha caducado.',
        color: 'danger'
      }
    }
  }

}
