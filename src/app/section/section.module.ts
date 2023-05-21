import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NbMenuModule, NbLayoutModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbCardModule, NbButtonModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessgeboxComponent } from './messgebox/messgebox.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MessgeboxComponent

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NbMenuModule,
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbCardModule,
    NbButtonModule

  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    MessgeboxComponent
  ]
})

export class SectionModule { }
