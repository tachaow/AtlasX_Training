import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from "src/app/app.url";
import { AppLayoutComponent } from "src/app/layout/app.layout.component";
import { ColorFormComponent } from "../colorForm/colorForm.component";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
  },
  {
    path: AppURL.ColorForm,
    component: ColorFormComponent
  }
];

export const DogFormRoutes = RouterModule.forChild(routes);
