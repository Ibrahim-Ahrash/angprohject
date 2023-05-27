import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './add-company.component';
import { AddCompanyRoutingModule } from './add-company-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbActionsModule, NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [AddCompanyComponent],
  imports: [
    CommonModule,
    AddCompanyRoutingModule,
    NbCardModule,
    NbActionsModule,
    NbButtonModule,
    FontAwesomeModule
  ]
})
export class AddCompanyModule { }
