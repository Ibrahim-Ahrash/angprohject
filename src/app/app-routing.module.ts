import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './section/header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import("./auth/login/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
