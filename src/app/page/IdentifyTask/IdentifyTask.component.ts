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
import { CustomPoint } from '../locator/clsCustomPoint';

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
  @Output() coordinate: EventEmitter<CustomPoint> = new EventEmitter<CustomPoint>()

  customPoint: CustomPoint = new CustomPoint;


  map: Map | null = null;
  mapView: MapView | null = null;
  // arcLocator: Locator | null= null;

  messages!: Message[];

  myMarkerColor = [226, 119, 40];
  starterLongitude = -102.79;
  starterLatittude = 40.21;

  stateOutline!: Graphic;
  constructor(public gisService: GisService) { }

  ngOnInit(): void {

    //============================  เอาแผนที่มาแสดง ================================
    // สร้าง instance ของ Map โดยเราสามารถก าหนด basemap รวมถึงเพิ่ม layer ต่างๆ ได้ที่ตรงนี้
    this.map = new Map({
      basemap: 'topo-vector',
    });

    // สร้าง instance ของ MapView ซึ่งเป็นส่วนที่ใช้ render map บนหน้าเพจ
    this.mapView = new MapView({
      container: this.mapPanel.nativeElement,
      map: this.map,
      center: [this.starterLongitude, this.starterLatittude], // [longitude, latitude]
      zoom: 5, // zoom level
    });

    //=========== สร้าง จุด =============================

    //======= จุดตัด ===========
    const point = new Point({
      longitude: this.starterLongitude,
      latitude: this.starterLatittude,
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
    // const pointGraphic = new Graphic({
    //   geometry: point,
    //   symbol: marker,
    // });

    //================= สร้างในแผนที่
    // this.mapView.graphics.add(pointGraphic);

    // Click Function.
    this.mapView.on('click', (event) => {
      // console.log('event ;' + event)

    });

  }

  ngAfterViewInit(): void {

    /*** For test only ***/
    const identifyURL = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer';

    const atlasxLayer = new MapImageLayer({
      url: identifyURL,
      opacity: 0.5
    })

    this.map.add(atlasxLayer)

    ///############## click event ############################
    this.mapView.on('click', (event) => {

      console.log('ngAfterViewInit ' + event);

      console.log('longitude :' + event.mapPoint.longitude);
      console.log('latitude :' + event.mapPoint.latitude);

      //############### send location ######################
      this.customPoint = { longitude: event.mapPoint.longitude, latitude: event.mapPoint.latitude }
      this.coordinate.emit(this.customPoint)

      const params = new IdentifyParameters()
      params.tolerance = 1
      params.layerIds = [3]
      params.geometry = event.mapPoint
      params.mapExtent = this.mapView.extent
      params.returnGeometry = true


      const polyUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer'

      identify
        .identify(polyUrl, params)
        .then((response: any) => {

          // console.log('myReponse: ', response);
          // console.log('feature: ', response.results[0].feature);

          let feature = response.results[0].feature;

          //Build popup template
          // console.log('STATE_NAME :' + feature.attributes.STATE_NAME);
          // console.log('Shape_Area :' + feature.attributes.Shape_Area);

          feature.popupTemplate = {
            title: "{STATE_NAME}",
            content:
              "<b>Population (2007):</b> {POP2007}" +
              "<br><b>Area:</b> {Shape_Area}"
          };

          // console.log('gemoetry :' + feature.geometry);
          // console.log('gemoetry  type:' + feature.geometry.type);
          // console.log('gemoetry  ring:' + feature.geometry.rings);

          //==================== Show popup ==================
          this.mapView.openPopup({
            features: [feature],
            location: event.mapPoint,
          });

          /***************************
          * Create a polygon graphic
          ***************************/

          // Create a polygon geometry
          // const polygon = {
          //   type: "polygon", // autocasts as new Polygon()
          //   rings: feature.geometry.rings
          // };

          // Create a symbol for rendering the graphic
          const pointSymbol = {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [227, 139, 79, 0.8],
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: [255, 255, 255],
              width: 1
            }
          };

          // Add the geometry and symbol to a new graphic
          // const polygonGraphic = new Graphic({
          //   geometry: feature.geometry,
          //   symbol: fillSymbol
          // });
          const graphic = new Graphic({
            geometry: feature.geometry,
            symbol: pointSymbol,
            attributes: {
              name: 'San Diego'
            }
          });

          // Add the graphics to the view's graphics layer
          this.mapView.graphics.removeAll();
          this.mapView.graphics.add(graphic);

        })




    })
  }


  handleLocate(event: any) {

    // console.log(event);
    // console.log('latitude :' + event.latitude);
    // console.log('longitude :' + event.longitude);

    //move to new position
    const pLatitude = Number(event.latitude);
    const pLongitude = Number(event.longitude);

    // console.log('latitude :' + pLatitude);
    // console.log('longitude :' + pLongitude);

    this.mapView.goTo(new Point({ latitude: pLatitude, longitude: pLongitude }));

    // this.mapView.goTo(new Point({ latitude: 42.69623697766467, longitude: -108.0634374999986 }));

    const pointGraphic = new Graphic({
      geometry: new Point({ latitude: pLatitude, longitude: pLongitude }),
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
