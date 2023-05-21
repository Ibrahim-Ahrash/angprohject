import { AuthService } from './../@services/auth/auth.service';
import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth3',
  templateUrl: './auth3.component.html',
  styleUrls: ['./auth3.component.scss']
})
export class Auth3Component {
  constructor(
    private auth: AuthService,
    private rout: Router
  ) { }
  eye = faEye;
  noteye = faEyeSlash
  viewPassword: boolean = true;
  loginObhect = {
    Username: "",
    Password: ""
  }
  Message: string = ""
  onSubmit() {
    console.log(this.loginObhect)
    this.auth.LogInToSystem(this.loginObhect)
      .subscribe({
        next: (res) => {
          if (res.StatusCode == 200) {
            localStorage.setItem("UserData", JSON.stringify(res.JsonObject));
            localStorage.setItem("Token", res.JsonObject.AccessToken + ':' + res.JsonObject.UserName)
            this.rout.navigateByUrl('/home')
          }
          else if (res.StatusCode == 406) {
            this.Message = "خطأ في اسم المستخدم او كلمة السر"
          }
        }
      })
  }
}
