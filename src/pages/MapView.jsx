// Libraries
import React, { useState, useEffect } from "react";
import {
  Stack,
  Tag,
  Button,
  Collapse,
  Icon,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/core";

// Styles
import { OuterContainer } from "../style";
import {
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
      servicios: ["bathroom"],
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
      servicios: ["bathroom"],
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
      servicios: ["bathroom", "computers", "printers"],
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
      servicios: ["bathroom"],
      coords: [
        [20.735332, -103.457545],
        [20.734958, -103.457572],
        [20.734933, -103.457202],
        [20.735291, -103.45718],
      ],
    },
  ];

  const [data, setData] = useState(lugares);

  const [show, setShow] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const [filterValue, setFilterValue] = useState([]);

  const handleToggle = () => setShow(!show);

  const handleCheckboxToggle = (e, val) => {
    let newArr = [...filterValue];

    // Si el arreglo de filtros ya incluye el valor que estamos queriendo pasar, eliminarlo
    if (newArr.includes(val)) {
      newArr.filter((item) => item != val);
    } else {
      newArr.push(val);
    }

    setOnCheck(!onCheck);
    setFilterValue(newArr);
  };

  useEffect(() => {
    console.log(filterValue);
    console.log(data);
  }, [onCheck]);

  return (
    <Layout>
      <OuterContainer>
        <div>
          <Button onClick={handleToggle} style={{ backgroundColor: "#EDF2F7" }}>
            <Icon name="settings" />
          </Button>
          <Collapse
            mt={4}
            isOpen={show}
            style={{
              backgroundColor: "#EDF2F7",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            Filtrar por:
            <Stack isInline spacing={4}>
              <Checkbox
                value="bathroom"
                isChecked={filterValue.includes("bathroom")}
                onChange={(e) => handleCheckboxToggle(e, "bathroom")}
              >
                Baños
              </Checkbox>
              <Checkbox
                value="computers"
                isChecked={filterValue.includes("computers")}
                onChange={(e) => handleCheckboxToggle(e, "computers")}
              >
                Computadoras
              </Checkbox>
              <Checkbox
                value="printers"
                isChecked={filterValue.includes("printers")}
                onChange={(e) => handleCheckboxToggle(e, "printers")}
              >
                Impresión
              </Checkbox>
            </Stack>
          </Collapse>
        </div>

        <GridContainer>
          <div>
            <h1>Establecimientos</h1>
            <SpacesListContainer>
              {data ? (
                data.map((lugar) => (
                  <Establecimiento color={lugar.color}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h1 style={{ margin: "0" }}>{lugar.name}</h1>
                    </div>

                    <p style={{ marginBottom: "0.3rem" }}>{lugar.desc}</p>

                    {lugar.servicios.length > 0 && (
                      <Stack spacing={2} isInline>
                        {lugar.servicios.map((servicio) => {
                          if (servicio === "bathroom") {
                            return (
                              <Tag
                                size="sm"
                                style={{ backgroundColor: "#90CDF4" }}
                                color="white"
                              >
                                Baños
                              </Tag>
                            );
                          }

                          if (servicio === "computers") {
                            return (
                              <Tag
                                size="sm"
                                style={{ backgroundColor: "#4FD1C5" }}
                                color="white"
                              >
                                Computadoras
                              </Tag>
                            );
                          }

                          if (servicio === "printers") {
                            return (
                              <Tag
                                size="sm"
                                style={{ backgroundColor: "#FC8181" }}
                                color="white"
                              >
                                Impresión
                              </Tag>
                            );
                          }
                        })}
                      </Stack>
                    )}
                  </Establecimiento>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
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
