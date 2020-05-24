// Libraries
import React from "react";
import { withRouter } from "react-router-dom";

// Styles
import { Background } from "./navbar.styled";

const Navbar = ({ history }) => {
  return (
    <Background>
      <button onClick={() => history.push("/")}>Tec Map</button>
      <button onClick={() => history.push("/lista")}>
        Lista Establecimientos
      </button>
    </Background>
  );
};

export default withRouter(Navbar);
