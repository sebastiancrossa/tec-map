// Libraries
import React from "react";

// Styles
import {
  Container,
  SpacesListContainer,
  MapContainer,
} from "../styles/mapView.style";

// Component Imports
import Layout from "../components/layout";
import Map from "../components/Map";

const MapView = () => {
  return (
    <Layout>
      <Container>
        <SpacesListContainer>Establecimientos</SpacesListContainer>

        <MapContainer>
          <Map />
        </MapContainer>
      </Container>
    </Layout>
  );
};

export default MapView;
