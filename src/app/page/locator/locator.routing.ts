import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { LocatorComponent } from './locator.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { AppURL } from 'src/app/app.url';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: AppURL.Locator,
    component: LocatorComponent
  }
]

export const LocatorRoutes = RouterModule.forChild(routes);
