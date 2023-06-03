import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdValueService {
  numero = 0;
  editAllow = false;
  setNumero(value) {
    this.numero = value
  }
  getNumero() {
    return this.numero
  }
  usedArray() {
    this.editAllow = true
  }
  noUse() {
    this.editAllow = false
  }
  isTrue() {
    return this.editAllow
  }
}
