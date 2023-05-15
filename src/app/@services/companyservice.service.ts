import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServerService } from './config/config-server.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(
    private config: ConfigServerService,
    private http: HttpClient
  ) { }

  getActivities(): Observable<any> {

    return this.http.get(`${this.config.getAPILink()}/api/CRMBackOffice/Activities/Get`)
  }

  getCities(): Observable<any> {

    return this.http.get(`${this.config.getAPILink()}/api/CRMBackOffice/Cities/Get`)
  }
  getSystemModuls(): Observable<any> {

    return this.http.get(`${this.config.getAPILink()}/api/CRMBackOffice/RefSystemModule/Get`)

  }

  GetProducts(): Observable<any> {

    return this.http.get(`${this.config.getAPILink()}/api/CRMBackOffice/Products/Get`)
  }
}
