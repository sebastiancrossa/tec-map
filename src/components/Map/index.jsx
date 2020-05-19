// Libraries
import React, { useState } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";

const Leaflet = window.L;

const Map = () => {
  // Preferencias para inicializar el mapa y su centro
  const [mapPrefs] = useState({
    lat: 20.735007,
    lng: -103.456181,
    zoom: 17,
    lugares: {
      centroCongresos: [
        [20.732895, -103.456267],
        [20.73248, -103.455965],
        [20.732869, -103.45541],
        [20.7333, -103.455776],
      ],
    },
  });

  // Inicializacion de toda la info que nos sirve para denotar el mapa
  const position = [mapPrefs.lat, mapPrefs.lng];

  const bound1 = [20.735007, -103.456181];
  const bound2 = [20.73483, -103.455061];
  const bounds = Leaflet.latLngBounds([bound1, bound2]);

  return (
    <LeafletMap
      center={position}
      zoom={mapPrefs.zoom}
      maxBounds={bounds}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polygon positions={mapPrefs.lugares.centroCongresos} color="blue" />
    </LeafletMap>
  );
};

/*
<Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
*/

export default Map;
