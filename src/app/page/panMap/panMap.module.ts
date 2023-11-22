import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanMapComponent } from './panMap.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [PanMapComponent]
})
export class PanMapModule { }
