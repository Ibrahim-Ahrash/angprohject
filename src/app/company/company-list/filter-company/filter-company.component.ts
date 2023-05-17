import { ServicesService } from './../../../@services/services.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyserviceService } from 'src/app/@services/companyservice.service';
import { Observable, catchError, forkJoin, throwError } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { NbToastrService, NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'app-filter-company',
  templateUrl: './filter-company.component.html',
  styleUrls: ['./filter-company.component.scss']
})
export class FilterCompanyComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private getcom: CompanyserviceService,
    private toaster: NbToastrService,
    private dailogref: NbDialogRef<any>,
    private company: ServicesService
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

  filter = new FormGroup({
    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
    IsRange: new FormControl(false,),
    CityID: new FormControl(0),
    ActivityID: new FormControl(0),
    SystemModuleID: new FormControl(0),
    ProductID: new FormControl(0),

  })
  onSubmit() {
    console.log("submitted")
    this.company.getByFilter(this.filter.getRawValue())
      .pipe(
        catchError((error) => {
          console.error('Error:', error);
          return throwError('Something went wrong!');
        })
      )
      .subscribe(
        {
          next: (res) => {
            console.log(res)
            this.dailogref.close(res.JsonArray);
          }
        }
      )
  }


  close() {
    this.dailogref.close(false)
  }
  ngOnInit(): void {
    forkJoin(this.sources).subscribe({
      next: (res) => {
        this.cities = res[0].JsonArray;
        this.activitie = res[1].JsonArray;
        this.system = res[2].JsonArray;
        this.product = res[3].JsonArray;
        console.log("activites are")

      }
    })
  }
}
