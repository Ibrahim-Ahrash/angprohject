import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdValueService {
  numero = 0;
  setNumero(value){
    this.numero = value
  }
  getNumero(){
    return this.numero
  }
}