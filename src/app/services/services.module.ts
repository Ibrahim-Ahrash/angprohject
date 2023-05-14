import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';



@NgModule({
  declarations: [
    ServicesComponent,


  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    RouterModule
  ]
})
export class ServicesModule { }
