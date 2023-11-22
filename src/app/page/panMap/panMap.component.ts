import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panMap',
  templateUrl: './panMap.component.html',
  styleUrls: ['./panMap.component.css']
})
export class PanMapComponent implements OnInit {

  @ViewChild('mapPanel', { static: true }) mapPanel!: ElementRef;

  
  constructor() { }

  ngOnInit() {
  }


  handleLocate($event:any){}

}
