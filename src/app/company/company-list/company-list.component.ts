import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
import { faFilter, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FilterCompanyComponent } from './filter-company/filter-company.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  constructor(
    private diag: NbDialogService,
    private toaster: NbToastrService,
  ) { }

  filt = faFilter;
  plus = faPlus;
  trash = faTrash;
  searc = faSearch;
  rowData: any[] = [];



  searchvalue = {
    SearchValue: ""
  };
  private gridApi: any;
  private gridColumnApi: any;
  defaultColDef = {

    resizable: true,
    flex: 1,
    sortable: true
  };
  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
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
    console.log("deleted");
  }
}
