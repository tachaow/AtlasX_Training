import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from './MapView.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LocatorModule } from '../locator/locator.module';



@NgModule({
  imports: [
    CommonModule,ButtonModule,InputTextModule,LocatorModule
  ],
  declarations: [MapViewComponent]
})
export class MapViewModule { }
