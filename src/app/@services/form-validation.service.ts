import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ServicesService } from './services.service';
@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor(
    private custmerName: ServicesService
  ) { }

  ValidateSelectInput(control: AbstractControl): { [key: string]: any } | null {

    let selectInput = control.value.toString();
    if (selectInput == "") return { SelectError: 'هذا الحقل مطلوب' }
    if ((/^[0-9]+$/.test(selectInput))) return { SelectError: 'يجب الا يحتوى على ارقام' }
    if (selectInput.length <= 3) return { SelectError: 'يجب ان لا تكون اقل من 3 حروف' }
    if (selectInput.length > 50) return { SelectError: 'الاسم طويل جدا' }
    return null;
  }

  ValidatePhoneNumber(control: AbstractControl): { [key: string]: any } | null {


    let PhoneNumber = control.value.toString();

    if (PhoneNumber == "") {
      return {
        PhoneError: 'يجب الا يحتوى رقم الهاتف على فراغ'
      }
    }

    if (!(/^[0-9]+$/.test(PhoneNumber))) {

      return {
        PhoneError: 'يجب الا يحتوى رقم الهاتف على حروف'
      }
    }


    if (PhoneNumber.length >= 3) {
      let FirtNumbers = PhoneNumber[0] + PhoneNumber[1] + PhoneNumber[2];

      if (FirtNumbers != "092" && FirtNumbers != "091" && FirtNumbers != "094") {

        return {
          PhoneError: 'يجب ان تكون بداية رقم الهاتف 092 او 091 او 094'
        }
      }

      if (PhoneNumber.length != 10) {

        return {
          PhoneError: 'طور رقم الهاتف غير صحيح'
        }
      }

    }


    return null;
  }
  validatePassword(control: AbstractControl): { [key: string]: any } | null {
    let Password = control.value.toString();
    if (Password == '') return { passwordError: 'يجب ادخال كلمة السر' }
    if (Password.length <= 7) return { passwordError: 'كلمة المرور يجب ان تكون اطول من 7 حروف' }
    if ((/^[0-9]+$/.test(Password))) return { passwordError: 'يجب ان تحتوي كلمة المرور على حرف' }
    return null
  }

  checkIfTaken(selectInput) {
    this.custmerName.getCustomersBySerach(selectInput)
      .subscribe({
        next: res => {
          console.log(res);

          if (res == selectInput) return { SelectError: 'هذا الاسم محجوز' }

          return null
        }
      })

  }
  alidateSelectNumber(control: AbstractControl): { [key: string]: any } | null {
    let selected = control.value.toString();
    if (selected == '0') return { listError: 'يجب تحديد واحدة' }
    return null;
  }
}
