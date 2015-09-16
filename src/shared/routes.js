import { Route, IndexRoute } from "react-router";
import React from "react";
import App from "./components/App";
import Home from "./components/Home";
import Detail from "./components/Detail";
//
// // export default (historyItem) => {
export default (
  <Route component={ App } path="/">
    <IndexRoute component={Home} />
    <Route component={ Detail } path="detail" />
  </Route>
);
