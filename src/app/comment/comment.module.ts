import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CommentComponent } from './comment.component'

import { CommentRoutingModule } from './comment.routing'
import { LocatorRoutingModule } from '../locator/locator.routing'

import { InputTextModule } from 'primeng/inputtext'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { DividerModule } from 'primeng/divider'
import { ReactiveFormsModule } from '@angular/forms'
import { ToastModule } from 'primeng/toast'
import { LocatorModule } from '../locator/locator.module'

@NgModule({
  imports: [
    CommonModule,
    LocatorModule,
    
    //routing
    CommentRoutingModule,
    LocatorRoutingModule,

    InputTextModule,
    CardModule,
    ButtonModule,
    InputTextareaModule,
    DividerModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  declarations: [CommentComponent],
})
export class CommentModule {}
