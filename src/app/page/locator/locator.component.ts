import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
})
export class LocatorComponent implements OnInit {

  public latitude: string = '';
  public logitude: string = '';

  CustomPoint = {
    latitude: '',
    logitude: ''
  };

  @Input() myTitle = 'Locate';
  @Output() messageEvent = new EventEmitter<string>()

  // message: string = "Hello Chaowalit";
  constructor() {
    // this.latitude = "two way Binding";
  }

  ngOnInit(): void {
    console.log(this.CustomPoint);
  }

  onLocate(){
    this.CustomPoint.logitude = this.logitude;
    this.CustomPoint.latitude = this.latitude;

    console.log(this.CustomPoint);
  }

  sendMessage() {
    console.log();
  }

}
