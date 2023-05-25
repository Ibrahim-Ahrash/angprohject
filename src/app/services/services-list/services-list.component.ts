import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ColDef, ColGroupDef, GridApi } from 'ag-grid-community';
import { ServicesService } from 'src/app/@services/services.service';
import { faFilter, faPlus, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ServicesListModule } from './services-list.module';
import { CreateServicesComponent } from './create-services/create-services.component';
import { FilterServicesComponent } from './filter-services/filter-services.component';
import { MessgeboxComponent } from 'src/app/section/messgebox/messgebox.component';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {
  constructor(
    private http: HttpClient,
    private services: ServicesService,
    private diag: NbDialogService,
    private toaster: NbToastrService,
    private router: Router
  ) { }
  private gridApi: GridApi;
  private gridColumnApi: any;
  rowData = [];

  filt = faFilter;
  plus = faPlus;
  trash = faTrash;
  user = faUsers;

  defaultColDef = {

    resizable: true,
    flex: 1,
    sortable: true
  };

  FilterObject = {
    IsRange: false,
    Duration: 1,
    DateType: 1,
    FromDate: '',
    ToDate: '',
    RefBranchID: null,
    ServiceStatusID: null,
    UserID: '',
    UserType: 1,
  };


  ngOnInit(): void {

    if (!!localStorage.getItem("getServicesList")) {

      this.FilterObject = JSON.parse(localStorage.getItem("getServicesList"));
    }

    this.getServiceList();
  }

  getServiceList() {

    localStorage.setItem("getServicesList", JSON.stringify(this.FilterObject))

    this.services.getServicesList(this.FilterObject)
      .subscribe({
        next: (res) => {

          this.rowData = res.JsonArray;
          // console.log(res);
          console.log(localStorage.getItem("getServicesList"))
        }
      })

  }

  OpenFilter() {

    this.diag.open(FilterServicesComponent, {
      hasBackdrop: true,
      closeOnEsc: true,
      closeOnBackdropClick: true,
      context: {
        FilterObject: this.FilterObject
      }
    }).onClose.subscribe({
      next: (filterResult) => {
        this.FilterObject = filterResult;
        this.getServiceList();
      }
    });
  }

  CreateNewServices() {

    this.diag.open(CreateServicesComponent).onClose
      .subscribe({
        next: (res) => {

          if (!res) return;

          this.getServiceList();
        }
      })
  }

  ConfermDelete() {


    const selectedData = this.gridApi.getSelectedRows();

    console.log(selectedData);

    if (selectedData.length == 0) {

      this.toaster.warning("تنبية", "please Select Service to Delete");
      return;
    }

    if (selectedData[0].ServiseStatusID_FK != 10) {

      // this.ShowMessage();
      return;
    }

    this.diag.open(MessgeboxComponent, {
      autoFocus: false,
      context: {
        OpenType: 'YESNO'
      }
    }).onClose.subscribe({
      next: (res) => {

        if (!res) return;

        this.DeleteService(selectedData[0].ServiceRequestID_PK)
      }
    })
  }

  DeleteService(ServiceRequestID_PK) {
    console.log("read")

    this.services.DeleteService(ServiceRequestID_PK)
      .subscribe({
        next: (res) => {

          if (res.StatusCode == 200) {

            this.toaster.success("تمت العملية", "تمت عملية الحدف");
            this.getServiceList();
            this.rowData = this.rowData.filter(v => v.ServiceRequestID_PK != ServiceRequestID_PK)

          } else {

            this.toaster.danger("حذث خطأ", res.Message);

          }
        }
      })

  }

  ShowCustomerData(CustomerData) {

    // console.log(CustomerData);

    this.router.navigateByUrl(`/home/services/service-details/${CustomerData.data.ServiceRequestID_PK}`)
  }

  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  columnDefs: ColDef[] = [
    {
      field: 'Note',
      headerName: 'تفاصيل الخدمة',
      filter: 'agNumberColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },

    },
    {
      field: 'ServiceStatusCaption',
      headerName: 'حالة الخدمة',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },
      cellRenderer: (params) => {

        // console.log(params);
        return `<span style="
        padding: 5px;
        font-size: 12px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        background: ${params.data.ServiseStatusID_FK == 40 ? '#080' : '#F0f'};
        border-radius: 5px;
        height: 100%;
        margin: 0px 20px;
        font-weight: bold;
        ">${params.value}</span>`
      }



    },
    {
      field: 'ServiceCaption',
      headerName: 'نوع الخدمة',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },

    },
    {
      field: 'CreatedDate',
      headerName: 'تاريخ الانشاء',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },

    },
    {
      field: 'BranchName',
      headerName: 'فرع الزبون',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },

    },
    {
      field: 'CurrentBranchName',
      headerName: 'الفرع',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },
    },
    {
      field: 'ServiceRequestID_PK',
      headerName: 'رقم الطلب',
      filter: 'agNumberColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },
    }
  ];




}
