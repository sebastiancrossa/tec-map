// Libraries
import React, { useState, useEffect } from "react";
import moment from "moment";
import { lugares } from "../utils/db";
import { checkIsOpen } from "../utils/checkIsOpen";

// Styles
import {
  Stack,
  Collapse,
  Checkbox,
  Icon,
  Button,
  Tag,
  List,
  ListItem,
} from "@chakra-ui/core";
import { OuterContainer as Container } from "../style";
import {
  Header,
  SpacesContainer,
  Establecimiento,
  ListContainer,
} from "../styles/listView.style";

// Component Imports
import Layout from "../components/layout";

const ListView = () => {
  // ! REFACTOR THE FILTERING CODE SO THE LOGIC IS CONTAINED IN ONE FILE (OR MOST OF IT)
  const [data, setData] = useState(lugares);

  const [show, setShow] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const [filterValue, setFilterValue] = useState([]);

  const handleToggle = () => setShow(!show);

  const handleCheckboxToggle = (e, val) => {
    let newArr = [...filterValue];

    // Si el arreglo de filtros ya incluye el valor que estamos queriendo pasar, eliminarlo
    if (newArr.includes(val)) {
      newArr = newArr.filter((item) => item !== val);
    } else {
      newArr.push(val);
    }

    setFilterValue(newArr);
    setOnCheck(!onCheck);
  };

  useEffect(() => {
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
  }, [onCheck]);

  return (
    <Layout>
      <Container>
        <div style={{ marginBottom: "1rem" }}>
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

        <Header>Establecimientos</Header>

        <SpacesContainer>
          {data.map((lugar) => (
            <Establecimiento
              isOpen={checkIsOpen(lugar.horarios[moment().format("e")])}
            >
              <div style={{ marginBottom: "1rem" }}>
                <h1 style={{ margin: "0" }}>{lugar.name}</h1>
                <p style={{ marginBottom: "0.3rem" }}>{lugar.desc}</p>

                {/* REFACTOR THIS UGLY CODE !!! */}
                <ListContainer>
                  <h3>Horarios semanales</h3>
                  <List>
                    <ListItem>
                      Lunes: {lugar.horarios[1][0]}am - {lugar.horarios[1][1]}pm
                    </ListItem>
                    <ListItem>
                      Martes: {lugar.horarios[2][0]}am - {lugar.horarios[2][1]}
                      pm
                    </ListItem>
                    <ListItem>
                      Miercoles: {lugar.horarios[3][0]}am -{" "}
                      {lugar.horarios[3][1]}pm
                    </ListItem>
                    <ListItem>
                      Jueves: {lugar.horarios[4][0]}am - {lugar.horarios[4][1]}
                      pm
                    </ListItem>
                    <ListItem>
                      Viernes: {lugar.horarios[5][0]}am - {lugar.horarios[5][1]}
                      pm
                    </ListItem>
                    <ListItem>
                      Sabado: {lugar.horarios[6][0]}am - {lugar.horarios[6][1]}
                      pm
                    </ListItem>
                    <ListItem>
                      Domingo: {lugar.horarios[0][0]}am - {lugar.horarios[0][1]}
                      pm
                    </ListItem>
                  </List>
                </ListContainer>
              </div>

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
          ))}
        </SpacesContainer>
      </Container>
    </Layout>
  );
};

export default ListView;
