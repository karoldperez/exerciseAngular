import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './Modules/Dashboard/contactanos/contactanos.component';
import { DetailUserComponent } from './Modules/Dashboard/detail-user/detail-user.component';
import { InicioComponent } from './Modules/Dashboard/inicio/inicio.component';
import { PostComponent } from './Modules/Dashboard/post/post.component';
import { UsersComponent } from './Modules/Dashboard/users/users.component';
import { LoginComponent } from './Modules/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'user/:id', component: DetailUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
