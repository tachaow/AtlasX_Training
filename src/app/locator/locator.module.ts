import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocatorComponent } from './locator.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule ,
    ButtonModule
  ],
  declarations: [LocatorComponent]
})
export class LocatorModule { }
