import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { AppURL } from '../app.url'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  items: MenuItem[]

  ngOnInit() {
    this.items = [
      {
        label: 'Web Beginner',
        icon: 'pi pi-pw pi-book',
        items: [
          {
            label: 'แบบฝึกหัดที่ 1',
            icon: 'pi pi-pencil',
            items: [
              { label: 'Assignment 1.1', icon: 'pi pi-fw pi-file-edit', routerLink:['/colorForm'] },
              { label: 'Assignment 1.2', icon: 'pi pi-fw pi-file-edit' },
              { label: 'Assignment 1.3', icon: 'pi pi-fw pi-file-edit', routerLink:['/comment']},
            ],
          },
          {
            label: 'แบบฝึกหัดที่ 2',
            icon: 'pi pi-pencil',
            items: [{ label: 'Assignment 2.1', icon: 'pi pi-fw pi-file-edit', routerLink:['/locator'] }],
          },
          { label: 'แบบฝึกหัดที่ 3', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 4', icon: 'pi pi-pencil' },
        ],
      },
      {
        label: 'Web Intermediate',
        icon: 'pi pi-fw pi-book',
        items: [
          { label: 'แบบฝึกหัดที่ 1', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 2', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 3', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 4', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 5', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 6', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 7', icon: 'pi pi-pencil' },
          { label: 'แบบฝึกหัดที่ 8', icon: 'pi pi-pencil' },
        ],
      },
    ]
  }
}
