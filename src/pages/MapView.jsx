// Libraries
import React from "react";
import { Stack, Tag } from "@chakra-ui/core";

// Styles
import {
  OuterContainer,
  GridContainer,
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
      desc:
        "Iis qui facit eorum claritatem Investigationes: demonstraverunt lectores legere me lius quod.",
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
      desc:
        "Iis qui facit eorum claritatem Investigationes: demonstraverunt lectores legere me lius quod.",
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
      desc:
        "Iis qui facit eorum claritatem Investigationes: demonstraverunt lectores legere me lius quod.",
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
      desc:
        "Iis qui facit eorum claritatem Investigationes: demonstraverunt lectores legere me lius quod.",
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
      <OuterContainer>
        <GridContainer>
          <div>
            <h1>Establecimientos</h1>
            <SpacesListContainer>
              {lugares.map((lugar) => (
                <Establecimiento color={lugar.color}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="circle" color />{" "}
                    <h1 style={{ margin: "0" }}>{lugar.name}</h1>
                  </div>

                  <p style={{ marginBottom: "0.3rem" }}>{lugar.desc}</p>

                  <Stack spacing={1} isInline>
                    <Tag
                      size="sm"
                      style={{ backgroundColor: "#FC8181" }}
                      color="white"
                    >
                      Impresión
                    </Tag>
                    <Tag
                      size="sm"
                      style={{ backgroundColor: "#4FD1C5" }}
                      color="white"
                    >
                      Computadoras
                    </Tag>
                    <Tag
                      size="sm"
                      style={{ backgroundColor: "#90CDF4" }}
                      color="white"
                    >
                      Baños
                    </Tag>
                  </Stack>
                </Establecimiento>
              ))}
            </SpacesListContainer>
          </div>

          <MapContainer>
            <Map />
          </MapContainer>
        </GridContainer>
      </OuterContainer>
    </Layout>
  );
};

export default MapView;
