import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core'
import { CustomPoint } from './clsCustomPoint';
import { cu } from '@fullcalendar/core/internal-common';
// import { CustomPoint } from './clsCustomPoint';


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],

})
export class LocatorComponent implements OnInit, AfterViewInit {

  customPoint: CustomPoint = new CustomPoint()


  // customPoint = {
  //   latitude: '',
  //   longitude: ''
  // };

  mytest: string;

  // @Input() 
  // set testMsg(value: any) {
  //   this.mytest = value;
  // }
  @Input()
  set msgTest(value: any) {
    this.mytest = value;
  }
  get msgTest(): any {
    return this.mytest;
  }


  @Input()
  set coordinate(data: CustomPoint) {
    this.customPoint = data
  }
  get coordinate(): CustomPoint {

    return this.customPoint
  }

  @Output() locate: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }


  ngOnInit(): void {
    // console.log('ngOnInit custmPoint :' + this.customPoint);
    console.log('ngOnInit customPoint_latitude :' + this.customPoint.latitude);
    console.log('ngOnInit customPoint_longitude :' + this.customPoint.longitude);
    console.log('ngOnInit coordinate :' + this.customPoint);

    // this.customPoint.latitude = 40.21;
    // this.customPoint.longitude = -102.79;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit customPoint_latitude :' + this.customPoint.latitude);
    console.log('ngAfterViewInit customPoint_longitude :' + this.customPoint.longitude);
    console.log('ngAfterViewInit coordinate :' + this.customPoint);
  }


  onLocate() {
    this.locate.emit(this.customPoint)
    // console.log('onLocat: ' + this.customPoint)
  }

}
