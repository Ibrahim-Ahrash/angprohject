import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbThemeModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbMenuModule, NbDialogModule, NbToastrModule } from '@nebular/theme';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular'
import { HttpClientModule } from '@angular/common/http';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    AgGridModule,
    HttpClientModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    SectionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
