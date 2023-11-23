import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Graphic from '@arcgis/core/Graphic';

import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export interface IUserMap {
    map: Map | null;
    mapView: MapView | null;

    //const point = new Point();

    handleLocate(event);

}
