// Libraries
import React from "react";

// Styles
import { OuterContainer as Container } from "../style";
import { Header } from "../styles/listView.style";

// Component Imports
import Layout from "../components/layout";

const ListView = () => {
  return (
    <Layout>
      <Container>
        <Header>Establecimientos</Header>
      </Container>
    </Layout>
  );
};

export default ListView;
