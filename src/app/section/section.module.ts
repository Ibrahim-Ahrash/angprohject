import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NbMenuModule, NbLayoutModule, NbActionsModule, NbUserModule, NbContextMenuModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NbMenuModule,
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule

  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
  ]
})

export class SectionModule { }
