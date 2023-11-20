import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocatorComponent } from './locator.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [LocatorComponent]
})
export class LocatorModule { }
