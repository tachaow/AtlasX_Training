import { Component, OnInit } from '@angular/core'
import { IComment } from './IComment'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MessageService } from 'primeng/api'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [MessageService],
})
export class CommentComponent implements IComment {
  constructor(private builder: FormBuilder, private messageService: MessageService) {
    this.initialCommentFormDate()
  }

  visible: boolean

  commentData = {
    name: '',
    comment: '',
    timeStamp: undefined,
  }

  commentForm: FormGroup

  private initialCommentFormDate() {
    this.commentForm = this.builder.group({
      name: [],
      comment: [],
      timeStamp: [],
    })
  }

  onConfirm() {
    throw new Error('Method not implemented.')
  }
  onReject() {
    throw new Error('Method not implemented.')
  }
  showConfirm() {
    throw new Error('Method not implemented.')
  }

  onDelete() {
   

    console.log('u click delete')

    
  }
  onEdit() {}

  onSubmit() {
    this.commentData.name = this.commentForm.controls.name.value
    this.commentData.comment = this.commentForm.controls.comment.value

    const now = new Date()
    this.commentData.timeStamp = now

    console.log(this.commentForm.value)
  }

  showWarn() {
    console.log('in if delete dd')

    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' })
  }
}
