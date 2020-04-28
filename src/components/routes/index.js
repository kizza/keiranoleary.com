import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Showcase from "./Showcase";

export default (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/showcase">
      <Showcase />
    </Route>
    <Route path="/contact">
      <p>Contact</p>
    </Route>
  </Switch>
);
