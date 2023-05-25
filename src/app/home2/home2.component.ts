import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  constructor(
    private routee: Router
  ) { }
  server = faServer;

  items = [
    {
      title: 'الخدمات',
      link: '/home/services',
    },
    {
      title: "الشركات",
      link: '/home/company/company-list',
    },
    {
      title: "إضافة شركة",
      link: '/home/company/add-company',
    },

  ];
  naviGate() {
    this.routee.navigateByUrl('')
  }
  ngOnInit(): void {
    console.log(this.items)
  }
}
