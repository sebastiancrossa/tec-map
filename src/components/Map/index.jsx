// Libraries
import React, { useState } from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const [mapPrefs] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  });

  const position = [mapPrefs.lat, mapPrefs.lng];

  return (
    <LeafletMap center={position} zoom={mapPrefs.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Map;
