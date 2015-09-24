/*
Client (browser) Routes

  - includes shared routes
  - sets up history in browsery compliant way
*/

import React from "react"
import { Router, IndexRoute } from "react-router"
import createHistory from '$history'
import sharedRoutes from "../shared/routes"
import store from '../shared/store'
import routeUtils from '../shared/routeUtils'

// runs once for each component that the router
// knows about
function createElement(Component, props) {
  let requests = routeUtils.getListOfRequests([Component])
  let viewData = {};
  let count = requests.length;
  let callback = (err, data)=> {
    console.log("client", err,data);
    if(!err) {
      viewData[data.id] = data.result;
    } else {
      viewData[data.id] = err;
    }
    count--;
    if (count <= 0) {
      return <Component {...props}/>
    }
  }
  routeUtils.batchRequests(requests, callback);
  // otherwise set loading props if data isn't needed
  // before render
}

export default (
    <Router history={createHistory()}
            routes={sharedRoutes}
            createElement={createElement}>
    </Router>
);
