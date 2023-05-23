import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import { SectionModule } from '../section/section.module';
import { NbMenuModule, NbLayoutModule, NbActionsModule, NbSidebarModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    Home2Component
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    NbMenuModule,
    NbLayoutModule,
    NbActionsModule,
    SectionModule,
    FontAwesomeModule,
    NbSidebarModule
  ]
})
export class Home2Module { }
