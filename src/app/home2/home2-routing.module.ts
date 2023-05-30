import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2.component';

const routes: Routes = [
  {
    path: '',
    component: Home2Component,
    children: [
      {
        path: 'services',
        loadChildren: () => import("../services/services.module").then(m => m.ServicesModule)
      },
      {
        path: 'company',
        loadChildren: () => import("../company/company.module").then(m => m.CompanyModule)
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2RoutingModule { }
