import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  items: NbMenuItem[] = [
    {
      title: 'الخدمات',
      link: '/home/services'
    },
    {
      title: 'الشركات والفروع',
      expanded: true,
      children: [
        {
          title: "إضافة شركة",
          link: '/home/company/add-company'
        },
        {
          title: "الشركات",
          link: '/home/company/company-list'
        }
      ]

    }
  ];
}
