import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentSimulator',
  templateUrl: './commentSimulator.component.html',
  styleUrls: ['./commentSimulator.component.css']
})
export class CommentSimulatorComponent implements OnInit {

  name: string = '';
  comment:string='';
  commentList: { name: string, comment: string, timeStamp: string }[] = []


  constructor() { }

  ngOnInit() {
  }

  submit() {

    this.commentList.push({ name: this.name, comment: this.comment, timeStamp: new Date().toDateString() });

    console.log(this.commentList[0]);

    this.clearForm();

  }

  onEdit(){
    this.name = this.commentList[0].name;
    this.comment = this.commentList[0].comment;
  }

  onDelete(){
    this.clearForm();
    this.commentList = [];
  }

  clearForm(){
    this.name ='';
    this.comment='';
  }

}
