import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { ColorFormComponent } from './colorForm.component';
import { AppURL } from '../app.url';
import { MenuComponent } from '../menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: AppURL.Comment,
    component: ColorFormComponent
  }
];

export const ColorFormRouteRoutes = RouterModule.forChild(routes);
