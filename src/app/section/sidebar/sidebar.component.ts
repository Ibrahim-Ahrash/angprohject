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
      title: 'الخدمات'
    },
    {
      title: 'الشركات واالفروع',
      expanded: true,
      children: [
        {
          title: "إضافة شركة"
        },
        {
          title: "الشركات",
          link: '/custmers'
        }
      ]

    }
  ];
}
