import { NbCardModule, NbActionsModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbActionsModule,
    FontAwesomeModule
  ]
})
export class CompanyModule { }
