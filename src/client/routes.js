/*
Client (browser) Routes

  - includes shared routes
  - sets up history in browsery compliant way
*/

import React from "react"
import { Router, IndexRoute } from "react-router"
import createHistory from '$history'
import sharedRoutes from "../shared/routes"
import DataWrapper from '../shared/components/dataWrapper'


  // runs once for each component that the router
  // knows about
  function createElement(Component, props) {
    return <DataWrapper component={Component} {...props}/>
  }

export default (

    <Router history={createHistory()}
            routes={sharedRoutes}
            createElement={createElement}>
    </Router>
);
