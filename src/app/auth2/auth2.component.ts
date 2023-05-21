import { AuthService } from './../@services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.scss']
})
export class Auth2Component {
  constructor(
    private auth: AuthService
  ) { }

  LogInObject = {
    Username: "",
    Password: ""
  }
  onSubmit() {
    console.log(this.LogInObject)
    this.auth.LogInToSystem(this.LogInObject)
      .subscribe({
        next: (res) => {
          if (res.StatusCode == 200)
            alert("scsefuk")
          else {
            alert("error")
          }
        }
      })
  }
}
