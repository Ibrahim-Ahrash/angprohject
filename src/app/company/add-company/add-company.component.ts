import { Component, OnInit } from '@angular/core';
import { faUserTie, faLandmark, faBuilding, faStore, faLocationDot, faPhone, faCity, faArrowsToCircle, faUser, faLock, faAt } from '@fortawesome/free-solid-svg-icons';
import { Observable, forkJoin } from 'rxjs';
import { CompanyserviceService } from 'src/app/@services/companyservice.service';
import { ServicesService } from 'src/app/@services/services.service';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  constructor(
    private getcom: CompanyserviceService,
    private company: ServicesService
  ) { }

  ShowResultMenu = true;


  cities = []
  activitie = []
  branches = []
  system = []

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
  sources: Observable<any>[] = [
    this.getcom.getCities(),
    this.getcom.getActivities(),
    this.getcom.getSystemModuls(),
  ];
  ngOnInit(): void {
    forkJoin(this.sources).subscribe({
      next: (res) => {
        this.cities = res[0].JsonArray;
        this.activitie = res[1].JsonArray;
        this.system = res[2].JsonArray;

      }
    })
  }
  onKeyPress(event) {
    console.log("clicked")

    this.ShowResultMenu = true;

    // if (event.target.value == "") return;

    this.SearchObject.SearchValue = event.target.value;
    console.log(this.SearchObject.SearchValue)
    this.company.getCustomersBySerach(this.SearchObject)
      .subscribe({
        next: (res) => {
          console.log("232")
          this.branches = res.JsonArray;
          console.log(this.branches);
        }
      })
  }

  HideSearchResult() {

    setTimeout(() => this.ShowResultMenu = false, 500)
  }

}
