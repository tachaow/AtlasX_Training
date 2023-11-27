import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import { AxAuthenticationService } from '@atlasx/core/authentication'

import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Graphic from '@arcgis/core/Graphic';

import * as identify from "@arcgis/core/rest/identify";
import IdentifyParameters from "@arcgis/core/rest/support/IdentifyParameters";

import { GisService } from './gis.service'

import { LocatorComponent } from '../page/locator/locator.component';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.scss'],
})
export class GisComponent implements OnInit, AfterViewInit {

  @ViewChild('mapDiv', { static: true }) mapDiv!: ElementRef<HTMLDivElement>
  @ViewChild(LocatorComponent) locatorComponent


  constructor(
    private route: ActivatedRoute,
    public gisService: GisService,
    public authService: AxAuthenticationService,
  ) { }

  ngOnInit() {
    
    // Get functions from system id.
    const systemId: string = this.route.snapshot.data.systemId
    this.gisService.loadFunctions(systemId)
  }

  ngAfterViewInit(): void {

    // this.locatorComponent.title = 'Hi Chaowalit'
   
    console.log('ViewChild: '+ this.locatorComponent)

    // Create a new map.
    this.gisService.createMap(this.mapDiv.nativeElement)

    /*** For test only ***/
    const identifyURL = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer';

    const atlasxLayer = new MapImageLayer({
      url: identifyURL,
      opacity: 0.5
    })

    this.gisService.map.add(atlasxLayer)

    this.gisService.mapView.on('click', (event) => {

      console.log(event);

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
      params.mapExtent = this.gisService.mapView.extent
      params.returnGeometry = true

      identify
        .identify('https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer', params)
        .then((response: any) => {

          console.log('myReponse: ',response);
          console.log('results: ',response.results[0].feature);

          let feature = response.results[0].feature;

          //Build popup template
          console.log('STATE_NAME'+feature.attributes.STATE_NAME);
          console.log('STATE_NAME'+feature.attributes.Shape_Area);

          feature.popupTemplate = {
            title: feature.attributes.STATE_NAME,
            content: "<p>Area: " + feature.attributes.Shape_Area + "</p>"
          }

          //Show popup
          this.gisService.mapView.openPopup({
            features: [feature],
            location: event.mapPoint,
          });

        })
    })
  }
}
