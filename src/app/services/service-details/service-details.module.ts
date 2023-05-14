import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ServiceDetailsComponent } from './service-details.component';


@NgModule({
  declarations: [ServiceDetailsComponent],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    NbCardModule,
    NbInputModule
  ]
})
export class ServiceDetailsModule { }
