import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
// import { CustomPoint } from './clsCustomPoint';


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],

})
export class LocatorComponent implements OnInit {

  // customPoint :CustomPoint = new CustomPoint()


  customPoint = {
    latitude: '',
    longitude: ''
  };

  mytest: string;

  // @Input() 
  // set testMsg(value: any) {
  //   this.mytest = value;
  // }
  @Input()
  set msgTest(value: any) {
    this.mytest = value;
  }
  get msgTest():any{
    return this.mytest;
  }


  @Input()
  set coordinate(data: any) {
    debugger;
    this.customPoint = data
  }
  get coordinate(): any {
    debugger;
    return this.customPoint
  }

  @Output() locate: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.customPoint);
  }

  onLocate() {
    this.locate.emit(this.customPoint)
    console.log('onLocat: ' + this.customPoint)
  }

}
