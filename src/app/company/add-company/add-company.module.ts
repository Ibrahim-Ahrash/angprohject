import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './add-company.component';
import { AddCompanyRoutingModule } from './add-company-routing.module';

@NgModule({
  declarations: [AddCompanyComponent],
  imports: [
    CommonModule,
    AddCompanyRoutingModule
  ]
})
export class AddCompanyModule { }
