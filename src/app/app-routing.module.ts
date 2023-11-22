import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppURL } from './app.url'
import { AppLayoutComponent } from './layout/app.layout.component'
import { ColorFormComponent } from './page/colorForm/colorForm.component'
import { LocatorComponent } from './page/locator/locator.component'
import { DogFormComponent } from './page/dogForm/dogForm.component'
import { MapViewComponent } from './page/MapView/MapView.component'
import { MyAppComponent } from './page/myApp/myApp.component'
import { CommentSimulatorComponent } from './page/commentSimulator/commentSimulator.component'

const routes: Routes = [

  // {
  //   path:AppURL.PanMap,
  //   component:AppLayoutComponent,
  //   children:[{path:'',component:PanMapComponent}]
  // },
  {
    path:'test',
    component:AppLayoutComponent,
    children:[{path:'',component:CommentSimulatorComponent}]
  },
  {
    path:AppURL.BankPage,
    component:AppLayoutComponent,
    children:[{path:'',component:MyAppComponent}]
  },
  {
    path: 'mypage',
    component: MyAppComponent,
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
    children: [{ path: '', component: CommentSimulatorComponent }],
  },
  {
    path: AppURL.Locator,
    component: AppLayoutComponent,
    children: [{ path: '', component: LocatorComponent }],
  },
  {
    path: AppURL.MyApp,
    component: AppLayoutComponent,
    children: [{ path: '', component: MyAppComponent }],
  },
  {
    path: AppURL.MapView,
    component: AppLayoutComponent,
    children: [{ path: '', component: MapViewComponent }]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'gis',
    // component: AppLayoutComponent,
    loadChildren: () => import('./gisPanMap/gis.module').then((m) => m.GisModule),
    data: { systemId: 'GIS' },
  },
  {
    path: AppURL.GisPanMap,
    loadChildren: () => import('./gisPanMap/gis.module').then((m) => m.GisModule),
    data: { systemId: 'GIS' },
  },
  {
    path: AppURL.GisAssFour,
    loadChildren: () => import('./gisAssFour/gis.module').then((m) => m.GisModule),
    data: { systemId: 'GIS' },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }



// {
//   path: '',
//   loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule),
//   data: { systemId: 'GIS' },
// },
// {
//   path: '',
//   component: GisComponent,
//   children: [{ path: '', component: GisComponent }]
// },

// {
//   path: AppURL.ColorForm,
//   component: AppLayoutComponent,
//   children: [{ path: '', redirectTo:"www.google.com" }],
// },