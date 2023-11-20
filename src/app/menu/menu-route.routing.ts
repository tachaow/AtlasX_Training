import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MenuComponent } from './menu.component'
import { CommentComponent } from '../page/comment/comment.component'
import { AppURL } from '../app.url'
import { LocatorComponent } from '../page/locator/locator.component'
import { ColorFormComponent } from '../page/colorForm/colorForm.component'
import { DogFormComponent } from '../page/dogForm/dogForm.component'

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: AppURL.ColorForm,
    component: ColorFormComponent,
  },
  {
    path: AppURL.DogForm,
    component: DogFormComponent,
  },
  {
    path: AppURL.Comment,
    component: CommentComponent,
  },
  {
    path: AppURL.Locator,
    component: LocatorComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
