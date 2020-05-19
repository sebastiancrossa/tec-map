// Libraries
import React from "react";
import { render } from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

// Styles
import "./index.css";

// Component Imports
import App from "./App";

render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
