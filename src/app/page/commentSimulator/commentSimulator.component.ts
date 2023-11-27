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

    if (this.name == '' || this.comment == '') return;

    this.commentList.push({ name: this.name, comment: this.comment, timeStamp: new Date().toDateString() });

    console.log(this.commentList[0]);

    this.clearForm();

  }

  onEdit(index:any){
    this.name = this.commentList[index].name;
    this.comment = this.commentList[index].comment;
  }

  onDelete(index:any){
    this.clearForm();
    this.commentList.splice(index,1);
    // this.commentList = [];
  }

  clearForm(){
    this.name ='';
    this.comment='';
  }

}
