// Libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MapView} />
        <Route exact path="/lista" component={ListView} />

        <Route component={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
