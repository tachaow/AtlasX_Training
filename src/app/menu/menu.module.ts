import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-route.routing';
import {PanelMenuModule} from 'primeng/panelmenu';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  imports: [ CommonModule,MenuRoutingModule,PanelMenuModule,FieldsetModule],
  declarations: [MenuComponent]
})
export class MenuModule { }
