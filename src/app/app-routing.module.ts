import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppURL } from './app.url'
import { MyappComponent } from './myapp/myapp.component'
import { AppLayoutComponent } from './layout/app.layout.component'
import { ColorFormComponent } from './page/colorForm/colorForm.component'
import { LocatorComponent } from './page/locator/locator.component'
import { DogFormComponent } from './page/dogForm/dogForm.component'
import { CommentComponent } from './page/comment/comment.component'
import { MapViewComponent } from './page/MapView/MapView.component'
import { GisComponent } from './gis/gis.component'


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'gis',
  //   loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule),
  //   data: { systemId: 'GIS' },
  // },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  // },
  // {
  //   path: 'test',
  //   component:MTestComponent,
  // },
  {
    path: 'mypage',
    component: MyappComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: '', component: MyappComponent }],
  },
  {
    path: AppURL.ColorForm,
    component: AppLayoutComponent,
    children: [{ path: '', component: ColorFormComponent }],
  },
  {
    path: AppURL.DogForm,
    component: AppLayoutComponent,
    children: [{ path: '', component: DogFormComponent }],
  },
  {
    path: AppURL.Comment,
    component: AppLayoutComponent,
    children: [{ path: '', component: CommentComponent }],
  },
  {
    path: AppURL.Locator,
    component: AppLayoutComponent,
    children: [{ path: '', component: LocatorComponent }],
  },
  {
    path: AppURL.MapView,
    component: AppLayoutComponent,
    children: [{ path: '', component: MapViewComponent }]
  },
  // {
  //   path: AppURL.Gis,
  //   component: AppLayoutComponent,
  //   children: [{ path: '', component: GisComponent }]
  // },
  {
    path: 'gis',
    loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule),
    data: { systemId: 'GIS' },
  },
  {
    path: 'gis2',
    children: [
      {
        path: 'gis2', loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule),
        data: { systemId: 'GIS' },
      }
    ]

  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
