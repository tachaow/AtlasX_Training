import { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { LayoutService } from './service/app.layout.service'
import { AppURL } from '../app.url'

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = []

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Web Beginner',
        icon: 'pi pi-pw pi-book',
        items: [
          {
            label: 'แบบฝึกหัดที่ 1',
            icon: 'pi pi-pencil',
            items: [
              {
                label: 'Assignment 1.1 - Background Color ',
                icon: 'pi pi-fw pi-file-edit',
                routerLink: ['/' + AppURL.ColorForm],
              },
              { label: 'Assignment 1.2 - Dog Form', icon: 'pi pi-fw pi-file-edit', routerLink: ['/' + AppURL.DogForm] },
              {
                label: 'Assignment 1.3 - Coment Simulation',
                icon: 'pi pi-fw pi-file-edit',
                routerLink: ['/' + AppURL.Comment],
              },
            ],
          },
          {
            label: 'แบบฝึกหัดที่ 2',
            icon: 'pi pi-pencil',
            items: [
              { label: 'Assignment 2.1 - Locator', icon: 'pi pi-fw pi-file-edit', routerLink: ['/' + AppURL.Locator] },
            ],
          },
          {
            label: 'แบบฝึกหัดที่ 3',
            icon: 'pi pi-pencil',
            items: [{ label: 'Pan Map View', icon: 'pi pi-fw pi-file-edit', routerLink: ['/' + AppURL.GisPanMap] }],
          },
          {
            label: 'แบบฝึกหัดที่ 4',
            icon: 'pi pi-pencil',
            items: [{ label: 'Identify Task', icon: 'pi pi-fw pi-file-edit', routerLink: ['/' + AppURL.IdentifyTask] }]
          },
        ],
      },
      {
        label: 'Web Intermediate',
        icon: 'pi pi-fw pi-book',
        items: [
          { label: 'แบบฝึกหัดที่ 1 Query Task', icon: 'pi pi-pencil', routerLink: ['/' + AppURL.QueryTask] },
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
