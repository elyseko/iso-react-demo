/*
  Client (browser) Routes

  - includes shared routes
  - sets up history in browsery compliant way
*/

import React from "react"
import { Router, IndexRoute } from "react-router"
import createBrowserHistory from 'history/lib/createBrowserHistory'
import sharedRoutes from "../shared/routes.js"

export default (
  <Router history={createBrowserHistory()} routes={sharedRoutes}>
  </Router>
);
