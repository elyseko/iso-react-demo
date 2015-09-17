import { Router, IndexRoute } from "react-router";
import createHistory from 'history/lib/createMemoryHistory';
import React from "react";
import sharedRoutes from "../shared/routes.js"

// export default (historyItem) => {
export default (
  <Router history={createHistory} routes={sharedRoutes}>
  </Router>
);
