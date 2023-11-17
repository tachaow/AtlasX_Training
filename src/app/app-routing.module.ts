import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppURL } from './app.url'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'gis',
    loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule),
    data: { systemId: 'GIS' },
  },
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: AppURL.Comment,
    loadChildren: () => import('./comment/comment.module').then((m) => m.CommentModule),
  },
  {
    path: AppURL.Locator,
    loadChildren: () => import('./locator/locator.module').then((m) => m.LocatorModule),
  },
  {
    path: AppURL.ColorForm,
    loadChildren:()=> import('./colorForm/colorForm.module').then((m)=> m.ColorFormModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
