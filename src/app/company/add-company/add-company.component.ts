import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { faUserTie, faLandmark, faBuilding, faStore, faLocationDot, faPhone, faCity, faArrowsToCircle, faUser, faLock, faAt } from '@fortawesome/free-solid-svg-icons';
import { Observable, forkJoin, from } from 'rxjs';
import { CompanyserviceService } from 'src/app/@services/companyservice.service';
import { FormValidationService } from 'src/app/@services/form-validation.service';
import { ServicesService } from 'src/app/@services/services.service';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { IdValueService } from 'src/app/id-value.service';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  CompanyId: number = 0;
  constructor(
    private getcom: CompanyserviceService,
    private company: ServicesService,
    private validation: FormValidationService,
    private idval: IdValueService,
    private toaster: NbToastrService,

  ) { }

  useInitiaValue = false;
  eye = faEye;
  noteye = faEyeSlash
  ShowResultMenu = true;
  selectedTeam = '';
  cities: any
  activitie = []
  branches = []
  system = []
  editable: any;
  editable2: any;
  editable3: any;
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
  showPassword: boolean = false;
  SearchObject = { SearchValue: '' }
  SubCities = [];
  newCompany: any;
  editSave: any;
  async getEdiab() {
    this.editable = await this.company.getCompanybtId(this.CompanyId).toPromise().then(res => res.JsonArray);
    this.editable2 = await this.company.getCompanyDeatails(this.CompanyId).toPromise().then(res => res.JsonObject);
    this.editable3 = await this.company.getAcoount(this.CompanyId).toPromise().then(res => res.JsonObject);
    console.log(this.editable);
    console.log(this.editable2);
    console.log(this.editable3);

    this.companyDetails.patchValue({
      company: {
        CompanyID_PK: this.editable2.CompanyID_PK,
        ActivityID_FK: this.editable.ActivityCaption,
        AccountID_FK: this.editable2.AccountID_FK,
        Name: this.editable2.Name,
        Address: this.editable2.Address,
        PhoneNumber: this.editable2.PhoneNumber,
        CompanyOwner: this.editable2.CompanyOwner,
        SubCityID_FK: this.editable.SubCityNameSubCityName,
        RefBranchID_FK: this.editable.RefBranchID_FK,
        IsMainBranch: this.editable.IsMainBranch,
        AgentSellerID: this.editable.AgentSellerID,
        SystemModulesID_FK: this.editable.SystemModulesID_FK,
      },
      account: {
        AccountID_PK: this.editable3.AccountID_PK,
        UserName: this.editable3.UserName,
        Password: this.editable3.Password,
        FullName: this.editable3.FullName,
        Phone: this.editable3.Phone,
        Email: this.editable3.Email
      }
    });
  }
  companyDetails = new FormGroup({
    company: new FormGroup({
      CompanyID_PK: new FormControl(0),
      ActivityID_FK: new FormControl('0', Validators.required), // prodcuts
      AccountID_FK: new FormControl(),  //un
      Name: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
      Address: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', [Validators.required, this.validation.ValidatePhoneNumber]),
      CompanyOwner: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
      SubCityID_FK: new FormControl('0', [Validators.required, this.validation.alidateSelectNumber]), //subcity
      RefBranchID_FK: new FormControl('0', [Validators.required, this.validation.alidateSelectNumber]), // branch
      IsMainBranch: new FormControl(true), //un
      AgentSellerID: new FormControl(null), //un
      SystemModulesID_FK: new FormControl('0', [Validators.required, this.validation.alidateSelectNumber]),
    }),
    account: new FormGroup({
      AccountID_PK: new FormControl(0),
      UserName: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
      Password: new FormControl('', [Validators.required, this.validation.validatePassword]),
      FullName: new FormControl('', [Validators.required, this.validation.ValidateSelectInput]),
      Phone: new FormControl('', [Validators.required, this.validation.ValidatePhoneNumber]),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  });

  sources: Observable<any>[] = [
    this.getcom.getCities(),
    this.getcom.getActivities(),
    this.getcom.getSystemModuls(),
    this.company.getBranch(),


  ];

  selectedCity = '';
  seletCity(value) {
    this.selectedCity = value.target.value
    this.SubCities = this.cities.filter(v => v.CityID_PK == this.selectedCity)[0].SubCities;
  }
  ngOnInit(): void {
    if (this.idval.isTrue()) {
      this.editSave = true;
      this.useInitiaValue = true
      this.CompanyId = this.idval.getNumero()
      console.log("its truye and will be executed")
      this.getEdiab()
    }
    forkJoin(this.sources).subscribe({
      next: (res) => {
        this.cities = res[0].JsonArray;
        this.activitie = res[1].JsonArray;
        this.system = res[2].JsonArray.slice(1);
        this.branches = res[3].JsonArray;
        console.log(this.cities);
      }
    })
  }
  getBrah() {
    this.company.getBranch()
      .subscribe({
        next: (res) => { this.branches = res.JsonArray; }
      })
  }

  onSubmit() {
    if (this.companyDetails.invalid) {
      console.log('fill form');
      this.MarkInvalidControls()
      return;
    }
    this.newCompany = Object.assign({}, this.companyDetails.getRawValue());
    this.newCompany.company.branches = [{
      BranchID_PK: 0,
      Name: this.newCompany.company.Name,
      SubCityID_FK: this.newCompany.company.SubCityID_FK,
      PhoneNumber: this.newCompany.company.PhoneNumber,
      BranchAddressLine: this.newCompany.company.Address,
      Email: this.newCompany.account.Email,
      RefBranchID_FK: this.newCompany.company.RefBranchID_FK,
      BranchMangerName: this.newCompany.company.CompanyOwner,
      BranchMangerPhoneNumber: this.newCompany.company.PhoneNumber,
      IsMainBranch: this.newCompany.company.IsMainBranch,
      AgentSellerID: this.newCompany.company.AgentSellerID,
      SystemModulesID_FK: this.newCompany.company.SystemModulesID_FK
    }]
    delete this.newCompany.company.IsMainBranch;
    delete this.newCompany.company.SubCityID_FK;
    delete this.newCompany.company.RefBranchID_FK;
    delete this.newCompany.company.AgentSellerID;
    delete this.newCompany.company.SystemModulesID_FK;
    console.log(this.newCompany);

    this.company.addCompnay(this.newCompany)
      .subscribe({
        next: res => {
          if (res.StatusCode == 200) {
            this.toaster.success("تمت العملية", "تمت عملية إضافة الخدمة بنجاح");
            console.log(res);
          }
        }
      })
  }

  get Company() { return this.companyDetails.get("company"); }
  get Account() { return this.companyDetails.get("account"); }

  onSelected(value: string) {
    if (value == '') return;
    this.selectedTeam = value;
  }

  MarkInvalidControls() {
    const controls = this.companyDetails.controls;
    for (const name in controls) {
      if (controls[name] instanceof FormGroup) {
        // If the control is a form group, loop through its controls
        const nestedControls = controls[name].controls;
        for (const nestedName in nestedControls) {
          if (nestedControls[nestedName].invalid) {
            nestedControls[nestedName].markAsTouched({ onlySelf: true });
          }
        }
      } else if (controls[name].invalid) {
        // If the control is not a form group but is invalid, mark it as touched
        controls[name].markAsTouched({ onlySelf: true });
      }
    }
  }
  updataCompany() {

    if (this.companyDetails.invalid) {
      console.log('fill form');
      this.MarkInvalidControls()
      return;
    }
    this.newCompany = Object.assign({}, this.companyDetails.getRawValue());
    console.log(this.newCompany);

    this.idval.noUse()
    this.editSave = false;

  }


  onSubsmit(form: NgForm) {

    // reset form here
    form.form.markAsPristine();
    form.resetForm();
  }
}
