// Libraries
import React, { useState } from "react";
import { lugares } from "../utils/db";

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

  const [show, setShow] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const [filterValue, setFilterValue] = useState([]);

  const handleToggle = () => setShow(!show);

  const handleCheckboxToggle = (e, i) => {};

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
                isChecked={filterValue.includes("printers")}
                onChange={(e) => handleCheckboxToggle(e, "printers")}
              >
                Abierto
              </Checkbox>
            </Stack>
          </Collapse>
        </div>

        <Header>Establecimientos</Header>

        <SpacesContainer>
          {lugares.map((lugar) => (
            <Establecimiento>
              <div style={{ marginBottom: "1rem" }}>
                <h1 style={{ margin: "0" }}>{lugar.name}</h1>
                <p style={{ marginBottom: "0.3rem" }}>{lugar.desc}</p>

                {/* REFACTOR THIS UGLY CODE !!! */}
                <ListContainer>
                  <h3>Horarios semanales</h3>
                  <List styleType="disc">
                    <ListItem>
                      {lugar.horarios[0].mon[0]} - {lugar.horarios[0].mon[1]}
                    </ListItem>
                    <ListItem>
                      {lugar.horarios[1].tus[0]} - {lugar.horarios[1].tus[1]}
                    </ListItem>
                    <ListItem>
                      {lugar.horarios[2].wed[0]} - {lugar.horarios[2].wed[1]}
                    </ListItem>
                    <ListItem>
                      {lugar.horarios[3].thur[0]} - {lugar.horarios[3].thur[1]}
                    </ListItem>
                    <ListItem>
                      {lugar.horarios[4].fri[0]} - {lugar.horarios[4].fri[1]}
                    </ListItem>
                    <ListItem>
                      {lugar.horarios[5].sat[0]} - {lugar.horarios[5].sat[1]}
                    </ListItem>
                    <ListItem>
                      {lugar.horarios[6].sun[0]} - {lugar.horarios[6].sun[1]}
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
