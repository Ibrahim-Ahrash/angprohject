import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './section/header/header.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent
  },
  {
    path: '/sections', component: HeaderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
