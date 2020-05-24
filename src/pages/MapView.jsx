// Libraries
import React, { useState, useEffect } from "react";
import moment from "moment";
import { lugares } from "../utils/db";

// Styles
import { Stack, Tag, Button, Collapse, Icon, Checkbox } from "@chakra-ui/core";
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
  const [data, setData] = useState(lugares);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const [filterValue, setFilterValue] = useState([]);

  // checks if the current users time is in the range of the availability hours for each establishment
  // returns a boolean
  // range => [n, n] array of numbers that represent the time range of disponibility
  const checkIsOpen = (range) => {
    const currentTime = moment().format("HH");

    if (currentTime >= range[0] && currentTime <= range[1]) {
      console.log(moment().format("e"), " is in range ", range);

      return true;
    } else {
      console.log(moment().format("e"), " is not in range ", range);

      return false;
    }
  };

  const handleToggle = () => setShow(!show);

  const handleCheckboxToggle = (e, val) => {
    setLoading(true);
    let newArr = [...filterValue];

    // Si el arreglo de filtros ya incluye el valor que estamos queriendo pasar, eliminarlo
    if (newArr.includes(val)) {
      newArr = newArr.filter((item) => item !== val);
    } else {
      newArr.push(val);
    }

    setLoading(false);
    setFilterValue(newArr);
    setOnCheck(!onCheck);
  };

  useEffect(() => {
    setLoading(true);
    if (filterValue.length === 0) {
      setData(lugares);
    } else {
      setData(
        data.filter(
          (item) =>
            (filterValue.includes("computers") &&
              item.servicios.includes("computers")) ||
            (filterValue.includes("bathroom") &&
              item.servicios.includes("bathroom")) ||
            (filterValue.includes("printers") &&
              item.servicios.includes("printers")) ||
            (filterValue.includes("open") &&
              checkIsOpen(item.horarios[moment().format("e")]))
        )
      );
    }
    setLoading(false);
  }, [onCheck]);

  return (
    <Layout>
      <OuterContainer>
        <div>
          <Button
            onClick={() => handleToggle()}
            style={{ backgroundColor: "#EDF2F7" }}
          >
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
              <Checkbox
                value="open"
                isChecked={filterValue.includes("open")}
                onChange={(e) => handleCheckboxToggle(e, "open")}
              >
                Abierto
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
                  <Establecimiento
                    color={lugar.color}
                    isOpen={checkIsOpen(lugar.horarios[moment().format("e")])}
                  >
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
            {!loading ? <Map data={data} /> : <h1>Loading...</h1>}
          </MapContainer>
        </GridContainer>
      </OuterContainer>
    </Layout>
  );
};

export default MapView;
