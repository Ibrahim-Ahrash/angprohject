import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-messgebox',
  templateUrl: './messgebox.component.html',
  styleUrls: ['./messgebox.component.scss']
})
export class MessgeboxComponent implements OnInit {
  constructor(
    private dailogRef: NbDialogRef<any>
  ) { }

  @Input() OpenType: 'YESNO' | 'ONLYOK';
  ngOnInit(): void {
  }
  close(State) {

    this.dailogRef.close(State);
  }
}
