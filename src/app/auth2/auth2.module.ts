import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth2Component } from './auth2.component';
import { Auth2RoutingModule } from './auth2-routing.module';
import { NbButtonModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Auth2Component
  ],
  imports: [
    CommonModule,
    Auth2RoutingModule,
    NbButtonModule,
    NbThemeModule,
    NbLayoutModule,
    FormsModule
  ]
})
export class Auth2Module { }
