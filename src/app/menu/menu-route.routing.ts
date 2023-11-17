import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MenuComponent } from './menu.component'
import { CommentComponent } from '../comment/comment.component'
import { AppURL } from '../app.url'
import { LocatorComponent } from '../locator/locator.component'
import { ColorFormComponent } from '../colorForm/colorForm.component'

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: AppURL.Comment,
    component: CommentComponent
  },
  {
    path: AppURL.Locator,
    component: LocatorComponent
  },
  {
    path: AppURL.ColorForm,
    component: ColorFormComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}

