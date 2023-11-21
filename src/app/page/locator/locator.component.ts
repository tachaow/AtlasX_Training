import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
})
export class LocatorComponent implements OnInit {

  latitude: string = '';
  logitude: string = '';

  private strTitle: string = ''

  get titleName() {
    return this.strTitle
  }
  set titleName(inputTitle: string) {
    this.strTitle = inputTitle;
  }

  CustomPoint = {
    latitude: '',
    logitude: ''
  };

  @Input() myTitle = 'Locate';
  // @Output() locate = new EventEmitter<string>()

  @Output() locate: EventEmitter<string> = new EventEmitter<string>()
  // message: string = "Hello Chaowalit";
  constructor() {
    // this.latitude = "two way Binding";
  }

  ngOnInit(): void {
    console.log(this.CustomPoint);
  }

  onLocate() {
    this.CustomPoint.logitude = this.logitude;
    this.CustomPoint.latitude = this.latitude;

    // this.CustomPoint.({logitude:this.logitude, latitude:this.latitude})

    console.log(this.CustomPoint);
    this.locate.emit(this.strTitle);
  }

  // sendMessage() {
  //   console.log();
  // }

}
