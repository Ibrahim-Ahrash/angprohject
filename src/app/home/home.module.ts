import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { SectionModule } from '../section/section.module';
import { ServicesListModule } from '../services/services-list/services-list.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    SectionModule,
    ServicesListModule
  ]
})
export class HomeModule { }
