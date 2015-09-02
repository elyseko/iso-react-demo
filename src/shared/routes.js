import { Route } from "react-router";
import React from "react";

import Home from "./components/Home";
import Detail from "./components/Detail";

export default (
  <Route component={ Home } path="/">
    <Route component={ Detail } path="/detail" />
  </Route>
);
