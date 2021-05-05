import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Modules/login/login.component';
import { UsersComponent } from './Modules/Dashboard/users/users.component';
import { UserComponent } from './Modules/Dashboard/user/user.component';
import { NavbarComponent } from './Modules/Dashboard/navbar/navbar.component';
import { ContactanosComponent } from './Modules/Dashboard/contactanos/contactanos.component';
import { InicioComponent } from './Modules/Dashboard/inicio/inicio.component';
import { DetailUserComponent } from './Modules/Dashboard/detail-user/detail-user.component';
import { PostComponent } from './Modules/Dashboard/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
    NavbarComponent,
    ContactanosComponent,
    InicioComponent,
    DetailUserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
