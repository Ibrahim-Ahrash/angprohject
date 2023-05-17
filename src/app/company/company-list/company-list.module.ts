import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { NbCardModule, NbActionsModule, NbButtonModule } from '@nebular/theme';
import { CompanyListRoutingModule } from './company-list-routing.module';
import { FilterCompanyComponent } from './filter-company/filter-company.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyListComponent,
    FilterCompanyComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbActionsModule,
    FontAwesomeModule,
    CompanyListRoutingModule,
    AgGridModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanyListModule { }
