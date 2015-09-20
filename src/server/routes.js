/*
  Server Routes

  - includes shared routes
  - sets up history in node compliant way
*/

import React from "react";
import { Router, IndexRoute } from "react-router";
import createHistory from 'history/lib/createMemoryHistory';
import sharedRoutes from "../shared/routes.js"

export default (
  <Router history={createHistory} routes={sharedRoutes}>
  </Router>
);
