import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigServerService } from './config/config-server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
    private config: ConfigServerService
  ) { }
  getServicesList(ServiceFilter): Observable<any> {

    return this.http.post(`${this.config.getAPILink()}/api/Services/Requests/Get`, ServiceFilter)
  }

  getServicesBySystemModule(SystemModelID_PK): Observable<any> {

    return this.http.get(`${this.config.getAPILink()}/api/Services/Get/SystemModuleID/${SystemModelID_PK}`)
  }

  AddNewService(ServiceObject): Observable<any> {

    return this.http.post(`${this.config.getAPILink()}/api/Services/Add`, ServiceObject)
  }

  DeleteService(ServiceID): Observable<any> {

    return this.http.delete(`${this.config.getAPILink()}/api/Services/Remove/${ServiceID}`)
  }

  getServiceDetails(ServiceRequestID_PK): Observable<any> {

    return this.http.get(`${this.config.getAPILink()}/api/Services/Requests/Get/${ServiceRequestID_PK}`)
  }
  getCustomersBySerach(SearchObject): Observable<any> {

    // return this.http.post(`${this.config.getAPILink()}/api/CustomersBO/Branches/SearchValue`, SearchObject)
    return this.http.post(`${this.config.getAPILink()}/api/CustomersBO/Companies/SearchValue`, SearchObject)
    // POST api/CustomersBO/Companies/SearchValue
    // GET api/CustomersBO/Branches/Get/{CompanyID}

  }

  DeleteCustomers(CompanyID_PK): Observable<any> {

    return this.http.delete(`${this.config.getAPILink()}/api/CustomersBO/Company/Remove/${CompanyID_PK}`)
  }

  getByFilter(obj): Observable<any> {

    return this.http.post(`${this.config.getAPILink()}/api/CustomersBO/Companies/AdvancedSearch`, obj)

  }
  getRandom(): Observable<any> {
    return this.http.get(`${this.config.getAPILink()}/api/CRMBackOffice/AsaryaService/Get`)
  }
  getBranch(): Observable<any> {
    return this.http.get(`${this.config.getAPILink()}/api/CRMBackOffice/RefBranches/Get`)
  }
  getAll(CompanyID): Observable<any> {
    return this.http.get(`${this.config.getAPILink()}/api/CustomersBO/Branches/Get/` + CompanyID);
  }
  addCompnay(CompanyData): Observable<any> {
    return this.http.post(this.config.getAPILink() + '/api/CustomersBO/Companies/Add', CompanyData)
  }

  getCompanybtId(CompanyID): Observable<any> {
    return this.http.get(this.config.getAPILink() + '/api/CustomersBO/Branches/Get/' + CompanyID)
  }
  getCompanyDeatails(CompanyPk): Observable<any> {
    return this.http.get(this.config.getAPILink() + '/api/CustomersBO/Companies/Get/' + CompanyPk)
  }

  forTests(): Observable<any> {
    return this.http.get(this.config.getAPILink() + '/api/CustomersBO/Companies/Get')
  }
  getAcoount(id): Observable<any> {
    return this.http.get(this.config.getAPILink() + '/api/CustomersBO/Accounts/Get/' + id)
  }
  updateCompany(CompanyData): Observable<any> {
    return this.http.patch(this.config.getAPILink() + '/api/CustomersBO/Company/Update', CompanyData)
  }
}

