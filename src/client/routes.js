import { Router, IndexRoute } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory'
import React from "react";
import sharedRoutes from "../shared/routes.js"

// export default (historyItem) => {
export default (
  <Router history={createBrowserHistory()} routes={sharedRoutes}>
  </Router>
);
