import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Graphic from '@arcgis/core/Graphic';

import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import Polygon from '@arcgis/core/geometry/Polygon';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import FeatureSet from "@arcgis/core/rest/support/FeatureSet.js";

import * as closestFacility from '@arcgis/core/rest/closestFacility';
import ClosestFacilityParameters from '@arcgis/core/rest/support/ClosestFacilityParameters';
import { G } from '@fullcalendar/core/internal-common';


@Component({
  selector: 'app-SpatialQuery',
  templateUrl: './SpatialQuery.component.html',
  styleUrls: ['./SpatialQuery.component.css']
})
export class SpatialQueryComponent implements OnInit {

  @ViewChild('mapPanel', { static: true }) mapPanel!: ElementRef;

  map: Map | null = null;
  mapView: MapView | null = null;

  starterLongitude = -102.79;
  starterLatittude = 40.21;

  myMarkerColor = [226, 119, 40];

  assignmentUrl = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0";
  closesFacilityUrl = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NetworkAnalysis/SanDiego/NAServer/ClosestFacility";

  areaDetail: any;

  rowGroupMetadata: any;
  loading: boolean = true;

  citiesLayer: any;
  facilitiesGraphic: Graphic[] = [];

  incidentGraphic:any;

  bufferGeometry: any;

  constructor() { }

  ngOnInit() {

    this.map = new Map({
      basemap: "topo-vector"
    });

    // // สร้าง instance ของ MapView ซึ่งเป็นส่วนที่ใช้ render map บนหน้าเพจ
    this.mapView = new MapView({
      container: this.mapPanel.nativeElement,
      map: this.map,
      center: [this.starterLongitude, this.starterLatittude], // [longitude, latitude]
      zoom: 5, // zoom level
    });

    this.coreSpatialQuery(null);


    //================= สร้างในแผนที่
    // this.mapView.graphics.add(pointGraphic);

    //############## Click Function. ##############
    this.mapView.on('click', (event) => {

      console.log('event ;' + event)

      const point = new Point({ longitude: Number(event.mapPoint.longitude), latitude: Number(event.mapPoint.latitude) });

      const marker = new SimpleMarkerSymbol({
        color: this.myMarkerColor,
        outline: {
          color: [255, 255, 255],
          width: 2,
        },
      });

      this.incidentGraphic = new Graphic({
        geometry: point,
        symbol: marker,
      });

      const pointSymbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [227, 139, 79, 0.8],
        outline: {
          // autocasts as new SimpleLineSymbol()
          color: [236, 143, 94, 0.5],
          // width: 0.5
        }
      };


      //#################  Create Buffer #####################
      this.bufferGeometry = geometryEngine.buffer(event.mapPoint, 20, 'kilometers');

      const bufferGraphic = new Graphic({
        geometry: this.bufferGeometry,
        symbol: pointSymbol
      })

      this.mapView.graphics.removeAll();
      this.mapView.graphics.addMany([this.incidentGraphic, bufferGraphic]);

      this.coreSpatialQuery(event);



    });
  }

  coreSpatialQuery(event: any) {

    if (event == null) return;

    this.citiesLayer = new FeatureLayer({
      url: this.assignmentUrl
    });

    const query = this.citiesLayer.createQuery();
    query.geometry = this.bufferGeometry;
    query.spatialRelationship = 'intersects';
    query.returnGeometry = true;

    this.citiesLayer.queryFeatures(query).then((response: any) => {
  

      console.log('feature :' + response.feature);
      response.features.forEach((res: any, i: number) => {

        console.log('gemoetry :', res.gemoetry);

        const point = new Point({
          longitude: res.geometry.longitude,
          latitude: res.geometry.latitude
        });

        const placeMark = new SimpleMarkerSymbol({
          color: [0, 160, 40],
          outline: {
            color: [0, 0, 0],
            width: 2,
          },
        })

        const placePoint = new Graphic({
          geometry:point, //res.geometry,
          symbol: placeMark,
          attributes: {
            name: res.attributes.areaname
          }
        });

        // debugger;
        this.facilitiesGraphic.push(placePoint);

        // console.log(this.pointGraphic);
      });

      this.mapView.graphics.addMany(this.facilitiesGraphic);


      console.log(response.features);


      console.log('incidentGraphic :'+this.incidentGraphic);
      closestFacility.solve(this.closesFacilityUrl,
        new ClosestFacilityParameters({
          incidents: new FeatureSet({
            features: [this.incidentGraphic],
          }),
          facilities: new FeatureSet({
            features: this.facilitiesGraphic,
          }),
          returnRoutes: true,
          defaultTargetFacilityCount: 10,
        })
      ).then((response: any) => { console.log('closestFacility :' + response) });

    });




    // const query = this.citiesLayer.createQuery();
    // query.geometry = polygon;
    // query.spatialRelationship = 'intersects';
    // query.returnGeometry = true;
    // featureLayer.queryFeatures(query).then((response) => {
    // console.log(response);
    // });

  }

}
