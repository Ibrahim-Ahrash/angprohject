import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUserTie, faLandmark, faBuilding, faStore, faLocationDot, faPhone, faCity, faArrowsToCircle, faUser, faLock, faAt } from '@fortawesome/free-solid-svg-icons';
import { Observable, forkJoin, from } from 'rxjs';
import { CompanyserviceService } from 'src/app/@services/companyservice.service';
import { FormValidationService } from 'src/app/@services/form-validation.service';
import { ServicesService } from 'src/app/@services/services.service';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
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
  eye = faEye;
  noteye = faEyeSlash
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

  SubCities = [];

  companyDetails = new FormGroup({
    custmerName: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
    phoneNumber: new FormControl('', [Validators.required, this.validation.ValidatePhoneNumber]),
    City: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Man: new FormControl(''),
    Owner: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
    activityType: new FormControl('', Validators.required),
    subcity: new FormControl('0', Validators.required),
    branch: new FormControl('', Validators.required),
    system: new FormControl('', Validators.required),
    accountOwnerName: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
    userName: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, this.validation.validatePassword]),

  })
  subcityarea = '';

  sources: Observable<any>[] = [
    this.getcom.getCities(),
    this.getcom.getActivities(),
    this.getcom.getSystemModuls(),
    this.company.getBranch()
  ];
  getCities() {
    this.getcom.getCities()
      .subscribe({
        next: (res) => {
          this.cities = res.JsonArray
        }
      })
  }

  ngOnInit(): void {


    this.companyDetails.get('City').valueChanges.subscribe({
      next: (res) => {

        this.SubCities = this.cities.filter(v => v.CityID_PK == res)[0].SubCities;


        // this.subcityarea = res
        // this.cities.forEach(obj => {
        //   if (obj.CityID_PK == res) {
        //     this.subcities = obj.SubCities;
        //   }

        // });
        // console.log(this.gggg());
      }

    })

    forkJoin(this.sources).subscribe({
      next: (res) => {
        this.cities = res[0].JsonArray;
        this.activitie = res[1].JsonArray;
        this.system = res[2].JsonArray.slice(1);
        this.branches = res[3].JsonArray

      }
    })

  }
  // subCityNames: any
  // gggg() {
  //   this.subCityNames = this.subcities.map(subCity => {
  //     return { SubCityName: subCity.SubCityName };
  //   });


  getBrah() {
    this.company.getBranch()
      .subscribe({
        next: (res) => {
          this.branches = res.JsonArray;
        }
      })
  }

  selectedTeam = '';
  onSelected(value: string): void {
    this.selectedTeam = value;
  }
  onSubmit() {
    console.log(this.companyDetails)
  }
  showPassword: boolean = false;
  showHidePassword(e) {
    this.showPassword = e.target.checked;
  }
}
