// Libraries
import React, { useState } from "react";
import { Map as LeafletMap, TileLayer, Tooltip, Polygon } from "react-leaflet";

const Leaflet = window.L;

const Map = () => {
  // Preferencias para inicializar el mapa y su centro
  const [mapPrefs] = useState({
    lat: 20.735007,
    lng: -103.456181,
    zoom: 17,
    lugares: [
      {
        name: "Centro de Congresos",
        color: "blue",
        coords: [
          [20.732895, -103.456267],
          [20.73248, -103.455965],
          [20.732869, -103.45541],
          [20.7333, -103.455776],
        ],
      },
      {
        name: "Gimnasio",
        color: "red",
        coords: [
          [20.736284, -103.455898],
          [20.735463, -103.455966],
          [20.735404, -103.455617],
          [20.736248, -103.455524],
        ],
      },
      {
        name: "Biblioteca",
        color: "green",
        coords: [
          [20.735269, -103.455015],
          [20.734837, -103.455036],
          [20.734782, -103.454457],
          [20.735184, -103.454446],
        ],
      },
    ],
  });

  console.log(mapPrefs.lugares.map((lugar) => console.log(lugar)));

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

      {mapPrefs.lugares.map((lugar) => (
        <Polygon positions={lugar.coords} color={lugar.color}>
          <Tooltip direction="bottom" sticky>
            {lugar.name}
          </Tooltip>
        </Polygon>
      ))}
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
