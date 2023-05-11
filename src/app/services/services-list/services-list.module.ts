import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesListRoutingModule } from './services-list-routing.module';
import { CreateServicesComponent } from './create-services/create-services.component';
import { FilterServicesComponent } from './filter-services/filter-services.component';


@NgModule({
  declarations: [
    CreateServicesComponent,
    FilterServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesListRoutingModule
  ]
})
export class ServicesListModule { }
