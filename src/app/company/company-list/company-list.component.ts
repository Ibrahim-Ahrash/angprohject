import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
import { faFilter, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FilterCompanyComponent } from './filter-company/filter-company.component';
import { ServicesService } from 'src/app/@services/services.service';
import { GridApi } from 'ag-grid-community';
import { MessgeboxComponent } from 'src/app/section/messgebox/messgebox.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  constructor(
    private diag: NbDialogService,
    private toaster: NbToastrService,
    private company: ServicesService,
    private routess: Router
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
          console.log(res)
          this.rowData = res.JsonArray
        }

      })
  }
  colDef: ColDef[] = [

    {
      field: 'CustomerCode',
      headerName: 'CustomerCode',

    },
    {
      field: 'BranchMangerPhoneNumber',
      headerName: 'رقم هاتف صاحب النشاط',

    },
    {
      field: 'BranchMangerName',
      headerName: 'اسم صاحب النشاط',

    },
    {
      field: 'Name',
      headerName: 'اسم الشركة',

    },
    {
      field: 'BranchID_PK',
      headerName: 'رقم الزبون',

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
    this.routess.navigateByUrl('/home/company/add-company')
  }
}
