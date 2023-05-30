import { Component, Inject } from '@angular/core';
@Component({
  selector: 'app-error',
  template: `
    <h2>يجب تسجيل الدخول</h2>

  `
})
export class ErrorComponent {
  title: string;
  message: string;

}
