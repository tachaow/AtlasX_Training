import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Graphic from '@arcgis/core/Graphic';

import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

import { Message } from 'primeng/api';


@Component({
  selector: 'app-arcGisMap',
  templateUrl: './arcGisMap.component.html',
  styleUrls: ['./arcGisMap.component.css']
})
export class ArcGisMapComponent implements OnInit {

  // สร้าง ViewChild อ้างอิงถึง #mapPanel ที่เราสร้างไว้ใน template
  @ViewChild('mapPanel', { static: true }) mapPanel!: ElementRef;

  map: Map | null = null;
  mapView: MapView | null = null;

  messages!: Message[];

  myMarkerColor = [226, 119, 40];

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




    const point = new Point({
      longitude: 100.5408754,
      latitude: 13.7030248,
    });

    const marker = new SimpleMarkerSymbol({
      color: this.myMarkerColor,
      outline: {
        color: [255, 255, 255],
        width: 2,
      },
    });

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: marker,
    });

    this.mapView.graphics.add(pointGraphic);


    const layer = new MapImageLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/',
    });

    this.map.add(layer);

    this.mapView.on('click', (event) => {
      console.log(event)
    });

  }

  handleLocate(event: any) {

    //move to new position
    this.mapView.goTo(new Point({ latitude: event.latitude, longitude: event.longitude }));

    const pointGraphic = new Graphic({
      geometry: new Point({ latitude: event.latitude, longitude: event.longitude }),
      symbol: new SimpleMarkerSymbol({
        color: this.myMarkerColor,
        outline: {
          color: [255, 255, 255],
          width: 2,
        },
      }),
    });

    this.mapView.graphics.removeAll();
    // this.mapView.graphics.remove(graphic);
    this.mapView.graphics.add(pointGraphic);

  }
}
