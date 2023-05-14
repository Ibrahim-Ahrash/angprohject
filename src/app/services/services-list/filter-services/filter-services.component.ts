import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-services',
  templateUrl: './filter-services.component.html',
  styleUrls: ['./filter-services.component.css']
})
export class FilterServicesComponent {

  constructor(private nbRefDailog: NbDialogRef<any>) { }

  branch = [];
  @Input() FilterObject: any

  ngOnInit(): void {

    this.branch = JSON.parse(localStorage.getItem("UserData")).userBranchs;
    console.log("btanched are")
    console.log(this.branch);

  }

  OnFilterSubmit() {

    this.nbRefDailog.close(this.FilterObject);
  }
}
