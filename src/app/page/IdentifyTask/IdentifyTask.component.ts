import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Graphic from '@arcgis/core/Graphic';

import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

import { Message } from 'primeng/api';

import { LocatorComponent } from '../locator/locator.component';

import * as identify from "@arcgis/core/rest/identify.js";
import Polygon from "@arcgis/core/geometry/Polygon.js";
import IdentifyParameters from '@arcgis/core/rest/support/IdentifyParameters';
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol.js";
import { GisService } from 'src/app/gis/gis.service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-IdentifyTask',
  templateUrl: './IdentifyTask.component.html',
  styleUrls: ['./IdentifyTask.component.css']
})
export class IdentifyTaskComponent implements OnInit, AfterViewInit {

  messageFormIdentify: string = 'Hi Chaowalit';

  @ViewChild('mapDiv', { static: true }) mapDiv!: ElementRef<HTMLDivElement>
  // สร้าง ViewChild อ้างอิงถึง #mapPanel ที่เราสร้างไว้ใน template
  @ViewChild('mapPanel', { static: true }) mapPanel!: ElementRef;
  @Output() coordinate: EventEmitter<LocatorComponent> = new EventEmitter<LocatorComponent>()
  customPoint: LocatorComponent = new LocatorComponent;


  map: Map | null = null;
  mapView: MapView | null = null;
  // arcLocator: Locator | null= null;

  messages!: Message[];

  myMarkerColor = [226, 119, 40];
  stateOutline!: Graphic;
  constructor(public gisService: GisService) { }

  ngOnInit(): void {
    // สร้าง ViewChild อ้างอิงถึง #mapPanel ที่เราสร้างไว้ใน template
    // @ViewChild('mapPanel', { static: true }) mapPanel!: ElementRef;

    //============================  เอาแผนที่มาแสดง ================================
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



    //=========== สร้าง จุด =============================

    //======= จุดตัด ===========
    const point = new Point({
      longitude: 100.5408754,
      latitude: 13.7030248,
    });

    //========= กำหนดค่าสัญลักษณ์ ===========
    const marker = new SimpleMarkerSymbol({
      color: [226, 119, 40],
      outline: {
        color: [255, 255, 255],
        width: 2,
      },
    });

    //======== สร้างกราฟฟิกจาก จุดตัด และ ตัวระบุนำแหน่งในแผนที่
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: marker,
    });

    //================= สร้างในแผนที่
    this.mapView.graphics.add(pointGraphic);

  }
  // ngOnInit() {

  //   const layer = new MapImageLayer({
  //     url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer',
  //   });

  //   // สร้าง instance ของ Map โดยเราสามารถกำหนด basemap รวมถึงเพิ่ม layer ต่างๆ ได้ที่ตรงนี้
  //   this.map = new Map({
  //     basemap: 'topo-vector',
  //   });
  //   // สร้าง instance ของ MapView ซึ่งเป็นส่วนที่ใช้ render map บนหน้าเพจ
  //   this.mapView = new MapView({
  //     container: this.mapPanel.nativeElement,
  //     map: this.map,
  //     center: [100.5408754, 13.7030248], // [longitude, latitude]
  //     zoom: 15, // zoom level
  //   });

  //   const point = new Point({
  //     longitude: 100.5408754,
  //     latitude: 13.7030248,
  //   });

  //   const marker = new SimpleMarkerSymbol({
  //     color: this.myMarkerColor,
  //     outline: {
  //       color: [255, 255, 255],
  //       width: 2,
  //     },
  //   });

  //   const pointGraphic = new Graphic({
  //     geometry: point,
  //     symbol: marker,
  //   });

  //   this.mapView.graphics.add(pointGraphic);


  //   this.map.add(layer);

  //   this.mapView.popupEnabled = false;

  //   this.mapView.graphics.removeAll();
  //   // this.mapView.graphics.remove(graphic);
  //   this.mapView.graphics.add(pointGraphic);

  //   // Click Function.
  //   this.mapView.on('click', (event) => {

  //     console.log(event)

  //     // this.coreIdentify(event);

  //   });
  // }


  ngAfterViewInit(): void {


    // this.locatorComponent.title = 'Hi Chaowalit'

    // console.log('ViewChild: '+ this.locatorComponent)

    // Create a new map.
    // this.gisService.createMap(this.mapDiv.nativeElement)

    /*** For test only ***/
    const identifyURL = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer';

    const atlasxLayer = new MapImageLayer({
      url: identifyURL,
      opacity: 0.5
    })

    this.map.add(atlasxLayer)

    this.mapView.on('click', (event) => {

      console.log('ngAfterViewInit ' + event);

      // const point = new Point({
      //   longitude: 100,
      //   latitude: 13,
      // });

      // this.gisService.mapView.graphics.removeAll();

      // this.gisService.mapView.goTo([event.mapPoint.longitude, event.mapPoint.latitude])

      // const marker = new SimpleMarkerSymbol({
      //   color: [225, 128, 0],
      //   outline: {
      //     color: [255, 255, 255],
      //     width: 1,
      //   }
      // })

      // const pointGraphic = new Graphic({
      //   geometry: event.mapPoint,
      //   symbol: marker
      // })

      // this.gisService.mapView.graphics.add(pointGraphic)


      const params = new IdentifyParameters()
      params.tolerance = 1
      params.layerIds = [3]
      params.geometry = event.mapPoint
      params.mapExtent = this.mapView.extent
      params.returnGeometry = true

      identify
        .identify('https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer', params)
        .then((response: any) => {

          console.log('myReponse: ', response);
          console.log('feature: ', response.results[0].feature);

          let feature = response.results[0].feature;

          //Build popup template
          console.log('STATE_NAME :' + feature.attributes.STATE_NAME);
          console.log('Shape_Area :' + feature.attributes.Shape_Area);

          feature.popupTemplate = {
            title: feature.attributes.STATE_NAME,
            content: "<p>Area: " + feature.attributes.Shape_Area + "</p>"
          }


          //Show popup
          this.mapView.openPopup({
            features: [feature],
            location: event.mapPoint,
          });

        })
    })
  }


  handleLocate(event: any) {
  }

}