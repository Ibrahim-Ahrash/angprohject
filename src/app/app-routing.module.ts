import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './section/header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesListComponent } from './services/services-list/services-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'sections', component: HeaderComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
