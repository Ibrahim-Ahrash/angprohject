import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbThemeModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbMenuModule, NbDialogModule, NbToastrModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SectionModule } from './section/section.module';
import { FormsModule } from '@angular/forms';
import { TokenIntrsiptService } from './@services/token-intrsipt.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
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
    SectionModule,
    FormsModule,
    BrowserAnimationsModule,


  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntrsiptService,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
