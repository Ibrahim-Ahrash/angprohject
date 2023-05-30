import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigServerService } from '../config/config-server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private config: ConfigServerService
  ) { }
  loggedIn: boolean = false;

  LogInToSystem(LogInObject: any): Observable<any> {
    return this.http.post(`${this.config.getAPILink()}/api/Users/Login`, LogInObject);
  }

  getToken() {

    return localStorage.getItem("Token");

  }

  isAuthenticated() {
    const token = localStorage.getItem('Token');
    return token !== null;
  }
}
