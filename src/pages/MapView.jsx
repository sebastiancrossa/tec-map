// Libraries
import React from "react";

// Component Imports
import Map from "../components/Map";

const MapView = () => {
  return (
    <div>
      <p>This is the map view</p>

      <div
        style={{
          height: "100vh",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Map />
      </div>
    </div>
  );
};

export default MapView;
