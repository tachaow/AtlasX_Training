import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import { AxAuthenticationService } from '@atlasx/core/authentication'

import { GisService } from './gis.service'

import Point from '@arcgis/core/geometry/Point'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import Graphic from '@arcgis/core/Graphic'


@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.scss'],
})
export class GisComponent implements OnInit, AfterViewInit {
  @ViewChild('mapDiv', { static: true }) mapDiv!: ElementRef<HTMLDivElement>

  constructor(
    private route: ActivatedRoute,
    public gisService: GisService,
    public authService: AxAuthenticationService
  ) {}

  ngOnInit() {
    // Get functions from system id.
    const systemId: string = this.route.snapshot.data.systemId
    this.gisService.loadFunctions(systemId)
  }

  ngAfterViewInit(): void {
    // Create a new map.
    this.gisService.createMap(this.mapDiv.nativeElement)

    const point = new Point({
      longitude: 100.5408754,
      latitude: 13.7030248,
    })

    const marker = new SimpleMarkerSymbol({
      color: [226, 119, 40],
      outline: {
        color: [255, 255, 255],
        width: 2,
      },
    })

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: marker,
      });

      // this.mapView.graphics.add(pointGraphic);

    /*** For test only ***/
    const atlasxLayer = new MapImageLayer({
      url: 'https://appserver2.cdg.co.th/arcgis/rest/services/AtlasX/City/MapServer',
      id: 'AtlasXCity',
    })
    this.gisService.map.add(atlasxLayer)
  }
}
