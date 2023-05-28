import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUserTie, faLandmark, faBuilding, faStore, faLocationDot, faPhone, faCity, faArrowsToCircle, faUser, faLock, faAt } from '@fortawesome/free-solid-svg-icons';
import { Observable, forkJoin, from } from 'rxjs';
import { CompanyserviceService } from 'src/app/@services/companyservice.service';
import { FormValidationService } from 'src/app/@services/form-validation.service';
import { ServicesService } from 'src/app/@services/services.service';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  constructor(
    private getcom: CompanyserviceService,
    private company: ServicesService,
    private validation: FormValidationService
  ) { }

  ShowResultMenu = true;


  cities = []
  activitie = []
  branches = []
  system = []
  subcities: any = []
  subcitiess: any = []

  suit = faUserTie;
  areaicon = faLandmark
  nameIcon = faBuilding;
  priductIcon = faStore;
  addressIcon = faLocationDot;
  phoneIcon = faPhone;
  cityIcon = faCity;
  arrow = faArrowsToCircle;
  lock = faLock;
  user = faUser;
  at = faAt;

  SearchObject = {

    SearchValue: ''
  }


  companyDetails = new FormGroup({
    custmerName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, this.validation.ValidatePhoneNumber]),
    City: new FormControl(''),
    Address: new FormControl('', Validators.required),
    Man: new FormControl(''),
    Owner: new FormControl('', Validators.required),
    activityType: new FormControl(''),
    subcity: new FormControl(''),
    branch: new FormControl(''),
    system: new FormControl(''),
    accountOwnerName: new FormControl(''),
    userName: new FormControl('', Validators.required),
    email: new FormControl(''),
    password: new FormControl('', Validators.required),

  })
  subcityarea = '';

  sources: Observable<any>[] = [
    this.getcom.getCities(),
    this.getcom.getActivities(),
    this.getcom.getSystemModuls(),
    this.company.getBranch()
  ];


  ngOnInit(): void {


    this.companyDetails.get('City').valueChanges.subscribe({
      next: (res) => {

        this.subcityarea = res
        this.cities.forEach(obj => {
          if (obj.CityID_PK == res) {
            this.subcities = obj.SubCities;
          }

        });
        console.log(this.gggg());
      }

    })

    forkJoin(this.sources).subscribe({
      next: (res) => {
        this.cities = res[0].JsonArray;
        console.log(this.cities);

        this.activitie = res[1].JsonArray;
        this.system = res[2].JsonArray;
        this.branches = res[3].JsonArray

      }
    })

  }
  subCityNames: any
  gggg() {
    this.subCityNames = this.subcities.map(subCity => {
      return { SubCityName: subCity.SubCityName };
    });

    console.log(this.subCityNames);
  }
  getBrah() {
    this.company.getBranch()
      .subscribe({
        next: (res) => {
          this.branches = res.JsonArray;
          console.log(this.branches);
        }
      })
  }

  HideSearchResult() {

    setTimeout(() => this.ShowResultMenu = false, 500)
  }
  onSubmit() {
    console.log(this.companyDetails)
  }
  selectedTeam = '';
  onSelected(value: string): void {
    this.selectedTeam = value;
  }
  // onCityChange() {
  //   if (this.subcityarea) {
  //     this.subcities = this.subcityarea.subcities;
  //   } else {
  //     this.subcities = [];
  //   }
  // }

}
