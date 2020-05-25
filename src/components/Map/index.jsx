// Libraries
import React, { useState } from "react";
import { Map as LeafletMap, TileLayer, Tooltip, Polygon } from "react-leaflet";

const Leaflet = window.L;

const Map = ({ data, lang }) => {
  // Preferencias para inicializar el mapa y su centro
  const [mapPrefs] = useState({
    lat: 20.735007,
    lng: -103.456181,
    zoom: 17,
    lugares: data,
  });

  // Inicializacion de toda la info que nos sirve para denotar el mapa
  const position = [mapPrefs.lat, mapPrefs.lng];

  const bound1 = [20.735007, -103.456181];
  const bound2 = [20.73483, -103.455061];
  const bounds = Leaflet.latLngBounds([bound1, bound2]);

  return (
    <LeafletMap center={position} zoom={mapPrefs.zoom} maxBounds={bounds}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {mapPrefs.lugares.map((lugar) => (
        <Polygon positions={lugar.coords} color={lugar.color}>
          <Tooltip direction="bottom" sticky>
            {lugar.name[lang]}
          </Tooltip>
        </Polygon>
      ))}
    </LeafletMap>
  );
};

export default Map;
