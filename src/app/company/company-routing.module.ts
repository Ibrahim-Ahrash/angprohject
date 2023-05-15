import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';


const routes: Routes = [
  {
    path: '', component: CompanyComponent,
    children: [
      {
        path: 'company-list',
        loadChildren: () => import("./company-list/company-list.module").then(m => m.CompanyListModule)
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
