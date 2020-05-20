// Libraries
import React from "react";

// Styles
import {
  Container,
  SpacesListContainer,
  Establecimiento,
  MapContainer,
} from "../styles/mapView.style";

// Component Imports
import Layout from "../components/layout";
import Map from "../components/Map";

const MapView = () => {
  // ! Exportar a un archivo externo y manejarlo de ahi
  const lugares = [
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
    {
      name: "Difusión Cultural",
      color: "purple",
      coords: [
        [20.735332, -103.457545],
        [20.734958, -103.457572],
        [20.734933, -103.457202],
        [20.735291, -103.45718],
      ],
    },
  ];

  return (
    <Layout>
      <Container>
        <SpacesListContainer>
          <h1>Establecimientos:</h1>

          {lugares.map((lugar) => (
            <Establecimiento color={lugar.color}>
              <div className="circle" color /> {lugar.name}
            </Establecimiento>
          ))}
        </SpacesListContainer>

        <MapContainer>
          <Map />
        </MapContainer>
      </Container>
    </Layout>
  );
};

export default MapView;
