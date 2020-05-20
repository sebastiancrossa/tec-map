// Libraries
import React from "react";

// Component Imports
import Layout from "../components/layout";
import Map from "../components/Map";

const MapView = () => {
  return (
    <Layout>
      <div
        style={{
          height: "100vh",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Map />
      </div>
    </Layout>
  );
};

export default MapView;
