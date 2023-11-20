import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorFormComponent } from './colorForm.component';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule, EditorModule,FormsModule,CardModule
  ],
  declarations: [ColorFormComponent]
})
export class ColorFormModule { }
