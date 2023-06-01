import { ColDef } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';
import { faFilter, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FilterCompanyComponent } from './filter-company/filter-company.component';
import { ServicesService } from 'src/app/@services/services.service';
import { GridApi } from 'ag-grid-community';
import { MessgeboxComponent } from 'src/app/section/messgebox/messgebox.component';
import { Router } from '@angular/router';
import { IdValueService } from 'src/app/id-value.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  constructor(
    private diag: NbDialogService,
    private toaster: NbToastrService,
    private company: ServicesService,
    private routess: Router,
    private idval: IdValueService
  ) { }

  filt = faFilter;
  plus = faPlus;
  trash = faTrash;
  searc = faSearch;
  rowData: any[] = [];


  searchvalue = {
    SearchValue: ""
  };
  private gridApi: GridApi;
  private gridColumnApi: GridApi;
  defaultColDef = {

    resizable: true,
    flex: 1,
    sortable: true
  };
  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  search() {

    this.company.getCustomersBySerach(this.searchvalue)
      .subscribe({
        next: (res) => {
          this.rowData = res.JsonArray
        }

      })
  }
  // ,",{"products":null,"CompanyID_PK":15143,"AccountID_FK":15147,"SallerID":null,"Name":"الطيب للشكولاتة والمكسرات ","Address":"الزاوية","PhoneNumber":"927963028","CompanyOwner":"الطيب","CreatedDate":"5/30/2023","ModifiedDate":null,"ActivityCaption":"حلويات"},{"products":null,"CompanyID_PK":15142,"AccountID_FK":15146,"SallerID":null,"Name":"ابناء الوافي لقطع الغيار الكوري والياباني","Address":"شارع الضمان","PhoneNumber":"924976291","CompanyOwner":"عبد المهيمن","CreatedDate":"5/30/2023","ModifiedDate":null,"ActivityCaption":"أخرى"},{"products":null,"CompanyID_PK":15141,"AccountID_FK":15145,"SallerID":null,"Name":"فريكو 2","Address":"الهضبة","PhoneNumber":"911808521","CompanyOwner":"رياض محمد البشير","CreatedDate":"5/29/2023","ModifiedDate":null,"ActivityCaption":"غير محدد"},{"products":null,"CompanyID_PK":15140,"AccountID_FK":15144,"SallerID":null,"Name":"محمود سبور ","Address":"طريق الاثار ","PhoneNumber":"910731020","CompanyOwner":"محمود عامر دنقة ","CreatedDate":"5/25/2023","ModifiedDate":null,"ActivityCaption":"متجر ملابس"},{"products":null,"CompanyID_PK":15139,"AccountID_FK":15143,"SallerID":null,"Name":"شركة الساحل للخضروات - عين زارة","Address":"عين زارة","PhoneNumber":"922301732","CompanyOwner":"ايهاب ","CreatedDate":"5/25/2023","ModifiedDate":null,"ActivityCaption":"سوبرماركت"},{"products":null,"CompanyID_PK":15138,"AccountID_FK":15142,"SallerID":null,"Name":"Life style","Address":" السراج","PhoneNumber":"910000000","CompanyOwner":"نادر","CreatedDate":"5/24/2023","ModifiedDate":null,"ActivityCaption":"متجر ملابس"},{"products":null,"CompanyID_PK":15137,"AccountID_FK":15141,"SallerID":null,"Name":"صيدلية افنان ","Address":"طريق المصفاة","PhoneNumber":"942197994","CompanyOwner":"احمد المقطوف ","CreatedDate":"5/23/2023","ModifiedDate":null,"ActivityCaption":"صيدلية"},{"products":null,"CompanyID_PK":15136,"AccountID_FK":15140,"SallerID":null,"Name":"فيولا","Address":"طريق الشط","PhoneNumber":"928961419","CompanyOwner":"احمد علوان","CreatedDate":"5/22/2023","ModifiedDate":null,"ActivityCaption":"أخرى"},{"products":null,"CompanyID_PK":15135,"AccountID_FK":15139,"SallerID":null,"Name":"محمد ميلاد ","Address":".","PhoneNumber":"916246506","CompanyOwner":"محمد ميلاد","CreatedDate":"5/22/2023","ModifiedDate":null,"ActivityCaption":"أخرى"}]}
  nameFormatter(params) {
    return params.value || 'غير محدد';
  }
  colDef: ColDef[] = [

    {
      field: 'Address',
      headerName: 'النشاط',
      valueFormatter: this.nameFormatter

    },
    {
      field: 'PhoneNumber',
      headerName: 'رقم هاتف صاحب النشاط',
      valueFormatter: this.nameFormatter

    },
    {
      field: 'CompanyOwner',
      headerName: 'اسم صاحب النشاط',
      valueFormatter: this.nameFormatter

    },
    {
      field: 'Name',
      headerName: 'اسم الشركة',
      valueFormatter: this.nameFormatter

    },
    {
      field: 'AccountID_FK',
      headerName: 'رقم الزبون',
      valueFormatter: this.nameFormatter

    }

  ]

  OpenFilter() {

    this.diag.open(FilterCompanyComponent).onClose
      .subscribe({
        next: (res) => {

          if (!res) return;

          this.rowData = res;
        }
      })
  }

  confirmDelet() {
    const selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    this.diag.open(MessgeboxComponent, {
      autoFocus: false,
      context: {
        OpenType: 'YESNO'
      }
    }).onClose.subscribe({
      next: (res) => {

        if (!res) return;

        this.company.DeleteCustomers(selectedData[0].BranchID_PK)
          .subscribe({
            next: (res) => {
              if (res.StatusCode == 200) {

                this.toaster.success("تمت العملية", "تمت عملية الحدف");
                console.log(res)
              }
              else this.toaster.danger("خطأ", res.Message)
            }
          })
      }
    })
  }

  addCompnay() {
    //   // this.routess.navigateByUrl('/home/company/add-company')
    //   console.log("Clicked")
    //   this.company.getUser()
    //     .subscribe({
    //       next: (res) => {
    //         console.log(res.JsonArray)
    //       }
    //     })
  }
  ShowCustomerData(CustomerData) {


    this.idval.setNumero(CustomerData.data.CompanyID_PK);
    console.log('the id is '+CustomerData.data.CompanyID_PK);

    this.company.getCompanybtId(CustomerData.data.CompanyID_PK)
      .subscribe({
        next: res => {
          console.log('res area');

        }
      })
    this.routess.navigateByUrl('/home/company/add-company')
  }

  ngOnInit(): void {
    this.company.forTests().subscribe({
      next: res => {
        this.rowData = res.JsonArray

      }
    })
  }
}


// colDef: ColDef[] = [

//   {
//     field: 'CustomerCode',
//     headerName: 'CustomerCode',

//   },
//   {
//     field: 'BranchMangerPhoneNumber',
//     headerName: 'رقم هاتف صاحب النشاط',

//   },
//   {
//     field: 'BranchMangerName',
//     headerName: 'اسم صاحب النشاط',

//   },
//   {
//     field: 'Name',
//     headerName: 'اسم الشركة',

//   },
//   {
//     field: 'BranchID_PK',
//     headerName: 'رقم الزبون',

//   }

// ]
