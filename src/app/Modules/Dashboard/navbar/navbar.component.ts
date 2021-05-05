import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._auth.validarAut();
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
