import { Component, NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppURL } from './app.url'
import { AppLayoutComponent } from './layout/app.layout.component'
import { ColorFormComponent } from './page/colorForm/colorForm.component'
import { LocatorComponent } from './page/locator/locator.component'
import { DogFormComponent } from './page/dogForm/dogForm.component'
import { MapViewComponent } from './page/MapView/MapView.component'
import { MyAppComponent } from './page/myApp/myApp.component'
import { CommentSimulatorComponent } from './page/commentSimulator/commentSimulator.component'
import { PanMapComponent } from './page/panMap/panMap.component'
import { ForTestComponent } from './page/ForTest/ForTest.component'
import { ArcGisMapComponent } from './page/arcGisMap/arcGisMap.component'
import { compareByFieldSpecs } from '@fullcalendar/core/internal'
import { IdentifyTaskComponent } from './page/IdentifyTask/IdentifyTask.component'
import { QueryTaskComponent } from './page/Intermediate/queryTask/queryTask.component'
import { SpatialQueryComponent } from './page/Intermediate/SpatialQuery/SpatialQuery.component'

const routes: Routes = [

  {
    path: 'test',
    component: AppLayoutComponent,
    // component:ArcGisMapComponent,
    children: [{ path: '', component: ArcGisMapComponent }]
  },
  {
    path: AppURL.BankPage,
    component: AppLayoutComponent,
    children: [{ path: '', component: MyAppComponent }]
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
    path: AppURL.GisPanMap,
    component: AppLayoutComponent,
    children: [{ path: '', component: ArcGisMapComponent }]
  },
  {
    path: AppURL.GisAssFour,
    loadChildren: () => import('./gisAssFour/gis.module').then((m) => m.GisModule),
    data: { systemId: 'GIS' },
  },
  {
    path: AppURL.IdentifyTask,
    component: AppLayoutComponent,
    children: [{ path: '', component: IdentifyTaskComponent }]
  },
  {
    path: AppURL.QueryTask,
    component: AppLayoutComponent,
    children: [{ path: '', component: QueryTaskComponent }]
  },
  {
    path: AppURL.SpatialQuery,
    component: AppLayoutComponent,
    children: [{ path: '', component: SpatialQueryComponent }]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
