import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CommentComponent } from './comment.component'

//rounting
import { CommentRoutingModule } from './comment.routing'

import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { DividerModule } from 'primeng/divider'
import { ReactiveFormsModule } from '@angular/forms'
import { ToastModule } from 'primeng/toast'
import { InputTextModule } from 'primeng/inputtext'


@NgModule({
  imports: [
    CommonModule,

    //routing
    CommentRoutingModule,
    // LocatorRoutingModule,

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
