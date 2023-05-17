import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
import { faFilter, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NbDialogService } from '@nebular/theme';
import { FilterCompanyComponent } from './filter-company/filter-company.component';
import { ServicesService } from 'src/app/@services/services.service';
import { GridApi } from 'ag-grid-community';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  constructor(
    private diag: NbDialogService,
    private company: ServicesService
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
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },

    },
    {
      field: 'BranchMangerPhoneNumber',
      headerName: 'رقم هاتف صاحب النشاط',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },

    },
    {
      field: 'BranchMangerName',
      headerName: 'اسم صاحب النشاط',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },

    },
    {
      field: 'Name',
      headerName: 'اسم الشركة',
      filter: 'agSetColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },
    },
    {
      field: 'BranchID_PK',
      headerName: 'رقم الزبون',
      filter: 'agNumberColumnFilter',
      filterParams: { applyMiniFilterWhileTyping: true },
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
    this.company.DeleteCustomers(selectedData[0].BranchID_PK)
      .subscribe({
        next: (res) => {
          console.log(res)
        }
      })
  }
}
