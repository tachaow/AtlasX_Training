import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
})
export class LocatorComponent implements OnInit {

  public latitude: string = '';
  public lagitude: string = '';

  // CustomPoint = {

  // };

  @Input() myTitle = 'Locate';
  @Output() messageEvent = new EventEmitter<string>()

  message: string = "Hello Chaowalit";
  constructor() {
    // this.latitude = "two way Binding";
  }

  ngOnInit(): void {
  }

  sendMessage() {
      console.log();
  }

}
