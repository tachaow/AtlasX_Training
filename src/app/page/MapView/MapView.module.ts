import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from './MapView.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  imports: [
    CommonModule,ButtonModule,InputTextModule
  ],
  declarations: [MapViewComponent]
})
export class MapViewModule { }
