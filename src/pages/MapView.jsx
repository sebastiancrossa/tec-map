// Libraries
import React, { useState, useEffect } from "react";
import moment from "moment";
import { lugares } from "../utils/db";
import { checkIsOpen } from "../utils/checkIsOpen";

// Styles
import {
  Stack,
  Tag,
  TagLabel,
  Button,
  Collapse,
  Icon,
  Checkbox,
  Radio,
  RadioGroup,
} from "@chakra-ui/core";
import { OuterContainer } from "../style";
import {
  GridContainer,
  SpacesListContainer,
  Establecimiento,
  MapContainer,
  SettingsContainer,
} from "../styles/mapView.style";

// Component Imports
import Layout from "../components/layout";
import Map from "../components/Map";

const MapView = () => {
  const [data, setData] = useState(lugares);
  const [lang, setLang] = useState("es");

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const [filterValue, setFilterValue] = useState([]);

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
        data.filter((item) =>
          filterValue.every((filter) => {
            if (filter === "open") {
              return checkIsOpen(item.horarios[moment().format("e")]);
            }

            return item.servicios.includes(filter);
          })
        )
      );
    }
    setLoading(false);
  }, [onCheck]);

  return (
    <Layout>
      <OuterContainer>
        <SettingsContainer>
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
            {lang === "en" ? "Filter by:" : "Filtrar por:"}
            <Stack isInline spacing={4}>
              <Checkbox
                value="bathroom"
                isChecked={filterValue.includes("bathroom")}
                onChange={(e) => handleCheckboxToggle(e, "bathroom")}
              >
                {lang === "en" ? "Bathrooms" : "Baños"}
              </Checkbox>
              <Checkbox
                value="computers"
                isChecked={filterValue.includes("computers")}
                onChange={(e) => handleCheckboxToggle(e, "computers")}
              >
                {lang === "en" ? "Computers" : "Computadoras"}
              </Checkbox>
              <Checkbox
                value="printers"
                isChecked={filterValue.includes("printers")}
                onChange={(e) => handleCheckboxToggle(e, "printers")}
              >
                {lang === "en" ? "Printers" : "Impresión"}
              </Checkbox>
              <Checkbox
                value="open"
                isChecked={filterValue.includes("open")}
                onChange={(e) => handleCheckboxToggle(e, "open")}
              >
                {lang === "en" ? "Open" : "Abierto"}
              </Checkbox>
            </Stack>
            <br />

            {lang === "en" ? "Language:" : "Idioma:"}
            <RadioGroup
              isInline
              spacing={4}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <Radio value="en">{lang === "en" ? "English" : "Ingles"}</Radio>
              <Radio value="es">{lang === "en" ? "Spanish" : "Español"}</Radio>
            </RadioGroup>
          </Collapse>
        </SettingsContainer>

        <GridContainer>
          <div>
            <h1>{lang === "en" ? "Places" : "Establecimientos"}</h1>
            <SpacesListContainer>
              {data ? (
                data.map((lugar) => (
                  <Establecimiento
                    color={lugar.color}
                    isOpen={checkIsOpen(lugar.horarios[moment().format("e")])}
                    key={lugar.name}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1 style={{ margin: "0" }}>{lugar.name[lang]}</h1>
                      <Tag
                        variantColor={lugar.color}
                        rounded="full"
                        size="sm"
                        style={{ width: "7rem" }}
                      >
                        <TagLabel
                          style={{ textAlign: "center", margin: "0 auto" }}
                        >
                          {lugar.horarios[moment().format("e")][0]}am -{" "}
                          {lugar.horarios[moment().format("e")][1]}pm
                        </TagLabel>
                      </Tag>
                    </div>

                    <p style={{ marginBottom: "0.3rem" }}>{lugar.desc[lang]}</p>

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
                                {lang === "en" ? "Bathrooms" : "Baños"}
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
                                {lang === "en" ? "Computers" : "Computadoras"}
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
                                {lang === "en" ? "Printers" : "Impresión"}
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
            {!loading ? <Map data={data} lang={lang} /> : <h1>Loading...</h1>}
          </MapContainer>
        </GridContainer>
      </OuterContainer>
    </Layout>
  );
};

export default MapView;
