/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const App = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
