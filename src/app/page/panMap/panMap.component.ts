import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';


@Component({
  selector: 'app-panMap',
  templateUrl: './panMap.component.html',
  styleUrls: ['./panMap.component.css']
})
export class PanMapComponent implements OnInit {
  // สร้าง ViewChild อ้างอิงถึง #mapPanel ที่เราสร้างไว้ใน template
  @ViewChild('mapPanel', { static: true }) mapPanel!: ElementRef

  map: Map | null = null;
  mapView: MapView | null = null;

  constructor() { }

  ngOnInit() {
    // สร้าง instance ของ Map โดยเราสามารถก าหนด basemap รวมถึงเพิ่ม layer ต่างๆ ได้ที่ตรงนี้
    this.map = new Map({
      basemap: 'topo-vector',
    });
    // สร้าง instance ของ MapView ซึ่งเป็นส่วนที่ใช้ render map บนหน้าเพจ
    this.mapView = new MapView({
      container: this.mapPanel.nativeElement,
      map: this.map,
      center: [100.5408754, 13.7030248], // [longitude, latitude]
      zoom: 15, // zoom level
    });
  }



  handleLocate($event: any) { }

}
