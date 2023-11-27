import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Graphic from '@arcgis/core/Graphic';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Polygon from '@arcgis/core/geometry/Polygon';


@Component({
  selector: 'app-queryTask',
  templateUrl: './queryTask.component.html',
  styleUrls: ['./queryTask.component.css']
})
export class QueryTaskComponent implements OnInit, AfterViewInit {


  // สร้าง ViewChild อ้างอิงถึง #mapPanel ที่เราสร้างไว้ใน template
  @ViewChild('mapPanel', { static: true }) mapPanel!: ElementRef;

  map: Map | null = null;
  mapView: MapView | null = null;

  starterLongitude = -102.79;
  starterLatittude = 40.21;

  myMarkerColor = [226, 119, 40];
  constructor() { }

  assignmentUrl = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2";

  areaDetail: any;

  rowGroupMetadata: any;
  loading: boolean = true;

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

    //############### FeatureLayter ###########################
    const featureLayer = new FeatureLayer({
      url: this.assignmentUrl
    });

    const query = featureLayer.createQuery();
    query.where = '1=1';
    query.outFields = ['*'];
    query.returnGeometry = true;

    featureLayer.queryFeatures(query).then((response) => {

      // console.log("featureLayer :" + response.features);
      this.areaDetail = response.features;
      this.loading = false;
    });



  }

  ngAfterViewInit(): void {
  }

  onClickRow(value: any) {
    console.log(value);


    // Create a symbol for rendering the graphic
    const fillSymbol = {
      type: "simple-fill", // autocasts as new SimpleFillSymbol()
      color: [227, 139, 79, 0.8],
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 1
      }
    };

    // Add the geometry and symbol to a new graphic
    const polygonGraphic = new Graphic({
      geometry: value.geometry,
      symbol: fillSymbol
    });


    const polygon = new Polygon({
      rings: value.geometry.rings[0]
    })

    this.mapView?.goTo({
      target: polygon.extent.expand(2.5)
    });

    // Add the graphics to the view's graphics layer
    this.mapView.graphics.removeAll();
    this.mapView.graphics.add(polygonGraphic);

  }

}
