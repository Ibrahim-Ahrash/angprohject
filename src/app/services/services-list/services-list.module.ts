import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbButtonModule, NbCardModule, NbPopoverModule } from '@nebular/theme';
import { ServicesListRoutingModule } from './services-list-routing.module';
import { CreateServicesComponent } from './create-services/create-services.component';
import { FilterServicesComponent } from './filter-services/filter-services.component';
import { ServicesListComponent } from './services-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    CreateServicesComponent,
    FilterServicesComponent,
    ServicesListComponent,

  ],
  imports: [
    CommonModule,
    ServicesListRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbPopoverModule,
    FontAwesomeModule,
    AgGridModule
  ]
})
export class ServicesListModule {

}
