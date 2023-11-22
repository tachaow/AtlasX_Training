import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { CustomPoint } from './clsCustomPoint';


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
  
})
export class LocatorComponent implements OnInit {

  customPoint :CustomPoint = new CustomPoint()

  CustomPoint = {
    latitude: '',
    logitude: ''
  };

  @Input() 
  set coordinate(data:CustomPoint) {
      this.customPoint = data
  }
  get coordinate():CustomPoint {
      return this.customPoint
  }
  @Output() locate: EventEmitter<CustomPoint> = new EventEmitter<CustomPoint>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.customPoint);
  }

  onLocate() {
    this.locate.emit(this.customPoint)
    console.log(this.customPoint)
  }

}
