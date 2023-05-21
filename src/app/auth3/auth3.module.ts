import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth3RoutingModule } from './auth3-routing.module';
import { Auth3Component } from './auth3.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [Auth3Component],
  imports: [
    CommonModule,
    Auth3RoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class Auth3Module { }
