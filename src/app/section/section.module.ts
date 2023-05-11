import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NbActionsModule, NbContextMenuModule, NbLayoutModule, NbMenuModule, NbUserModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    FontAwesomeModule,
    NbContextMenuModule,
    NbMenuModule

  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
  ]
})

export class SectionModule { }
