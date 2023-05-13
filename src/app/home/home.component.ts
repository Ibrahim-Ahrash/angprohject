import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <nb-layout>
    <nb-layout-header>
      <app-header class="w-100"></app-header></nb-layout-header>

      <nb-sidebar right><app-sidebar></app-sidebar></nb-sidebar>

      <nb-layout-column class="p-3">
    </nb-layout-column>
  </nb-layout>


`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
