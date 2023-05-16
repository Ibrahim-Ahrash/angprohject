import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyserviceService } from 'src/app/@services/companyservice.service';
import { Observable, forkJoin } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-filter-company',
  templateUrl: './filter-company.component.html',
  styleUrls: ['./filter-company.component.scss']
})
export class FilterCompanyComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private getcom: CompanyserviceService
  ) { }

  cities = []
  activitie = []
  product = []
  system = []

  
  sources: Observable<any>[] = [
    this.getcom.getCities(),
    this.getcom.getActivities(),
    this.getcom.getSystemModuls(),
    this.getcom.GetProducts()
  ];

  filter= new FormGroup({
    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
    IsRange	: new FormControl(false,),
    CityID: new FormControl(0),
    ActivityID: new FormControl(0),
    SystemModuleID: new FormControl(0),
    ProductID: new FormControl(0),

  })


  ngOnInit(): void {
    forkJoin(this.sources).subscribe({
      next: (res) => {
        this.cities = res[0].JsonArray;
        console.log(this.cities);
        this.activitie = res[1].JsonArray;
        this.system = res[2].JsonArray;
        console.log(this.activitie);
        console.log("this.activitie");
        console.log(this.system);
        this.product = res[3].JsonArray;
        console.log("activites are")
        console.log(this.product)
      }
    })
  }
}
