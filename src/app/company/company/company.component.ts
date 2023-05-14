import { Component } from '@angular/core';
import { faFilter, faPlus, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  filt = faFilter;
  plus = faPlus;
  trash = faTrash;
  searc = faSearch;


  OpenFilter() {
    console.log("clicked");
  }
  confirmDelet() {
    console.log("deleted");
  }

}
