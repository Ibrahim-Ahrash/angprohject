import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/@services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private login: AuthService,
    private router: Router
  ) { }

  usericon = faUser;
  passicon = faLock;


  ViewPassword = false;

  LogInObject = {

    Username: "",
    Password: ""
  }

  ErrorMessage = "";
  Error = false;

  onSubmit() {

    console.log(this.LogInObject);

    if (this.LogInObject.Username == "123" || this.LogInObject.Password == "123") {
      alert("123")
      this.ErrorMessage = "الرجاء تعبئة جميع الحقول";
      this.Error = true;

      return;
    }
    this.login.LogInToSystem(this.LogInObject)
      .subscribe({
        next: (res) => {

          if (res.StatusCode == 200) {

            localStorage.setItem("UserData", JSON.stringify(res.JsonObject));
            localStorage.setItem("Token", res.JsonObject.AccessToken + ':' + res.JsonObject.UserName)
            this.router.navigateByUrl("/home");
            console.log("success")

          } else {
            this.ErrorMessage = res.Message;
            this.Error = true;
            console.log("invalid")

          }

        }
      })
  }
}
