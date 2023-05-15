import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyserviceService } from 'src/app/@services/companyservice.service';
import { Observable, forkJoin } from 'rxjs';
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
  // getdata() {
  //   forkJoin([
  //     this.getcom.getCities(),
  //     this.getcom.getActivities,
  //     this.getcom.getSystemModuls,
  //     this.getcom.GetProducts
  //   ]).subscribe({
  //     next: (res) => {
  //       this.cities = res[0].JsonArray;
  //       this.activitie = res[1].JsonArray;
  //       this.system = res[2].JsonArray;
  //       this.product = res[3].JsonArray;
  //       // .filter(v => v.ProductCategoryID_PK == 1)[0].products;
  //       console.log(res);

  //     }
  //   })
  // }

  ngOnInit(): void {
    forkJoin(this.sources).subscribe({
      next: (res) => {
        this.cities = res[0].JsonArray;
        this.activitie = res[1].JsonArray;
        this.system = res[2].JsonArray;
        this.product = res[3].JsonArray;
        console.log("activites are")
        console.log(this.activitie)
      }
    })
  }
}
