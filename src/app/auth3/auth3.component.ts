import { AuthService } from './../@services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth3',
  templateUrl: './auth3.component.html',
  styleUrls: ['./auth3.component.scss']
})
export class Auth3Component implements OnInit {
  constructor(
    private auth: AuthService,
    private rout: Router
  ) { }
  counter = 0;
  eye = faEye;
  noteye = faEyeSlash
  viewPassword: boolean = true;
  loginObhect = {
    Username: "",
    Password: ""
  }
  Message: string = ""

  onSubmit() {

    if (this.loginObhect.Username == "" && this.loginObhect.Password == "") {
      this.Message = "الرجاء ادخال اسم المستخدم وكلمة المرور";
      return;
    }

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
            this.counter = this.counter + 1;
            if (this.counter >= 3) {
              this.Message = "لقد بادخال خاطئ اكثر من ثلات مرات تم حظرك لمدة 4 ساعات"
              return;
            }
            this.Message = `  لقد ادخلت اسم المستخدم او كلمة المرور ${this.counter} مرات خطأ`

          }
          else {

            this.Message = "حدث خطأ غير معروف يرجى المحاولة في وقت لاحق"
          }
        }
      })
  }
  ngOnInit(): void {
    localStorage.removeItem('Token');
  }
}
