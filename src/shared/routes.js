/*
  Shared routes to be used on the server and in the browser

  - Must be included into an instance of react-router <Router routes="">
*/

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import Detail from "./components/Detail";

// console.log("history", createHistory)

export default (
    <Route component={ App } path="/">
      <IndexRoute component={ Home } />
      <Route component={ Detail } path="game/:id" />
    </Route>
);
