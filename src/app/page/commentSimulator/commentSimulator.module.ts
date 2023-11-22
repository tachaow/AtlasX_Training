import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSimulatorComponent } from './commentSimulator.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [
    CommonModule,InputTextModule,ButtonModule,FormsModule,InputTextareaModule
  ],
  declarations: [CommentSimulatorComponent]
})
export class CommentSimulatorModule { }
