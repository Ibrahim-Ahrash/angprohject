import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdValueService {
  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();
  chnga: boolean = false

  setId(id: number) {
    this.idSource.next(id);
  }
  callOr() {

  }
  constructor() { }
}
