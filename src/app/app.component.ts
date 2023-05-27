import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
