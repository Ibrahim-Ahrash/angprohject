import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  ValidateSelectInput(control: AbstractControl): { [key: string]: any } | null {

    let selectInput = control.value.toString();
    if (selectInput == "") return { SelectError: 'هذا الحقل اجباري' }
    // if (!(/^[a-zA-Z\s]+$/.test(selectInput)))
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

}
