import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { LocatorComponent } from './locator.component';
import { MenuComponent } from '../menu/menu.component';
import { AppURL } from '../app.url';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: AppURL.Comment,
    component: LocatorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocatorRoutingModule {}
