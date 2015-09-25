import React from 'react';
import ReactDOM from 'react-dom/server';

import { RoutingContext, match } from 'react-router'
import routes from '../shared/routes';
import createLocation from '$history'
import routeUtils from '../shared/routeUtils'

let createElement = (Component, props) => {
  props.data = props.params.data;
  props.params.data = undefined;
  return <Component {...props}/>
}

module.exports = (req, res) => {
  let location = createLocation(req.url);
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if (error)
      res.status(500).send(error.message)
    else if (renderProps == null)
      res.status(404).send('Not found')
    else {
      let components = renderProps.components
      let requests = routeUtils.getListOfRequests(components);
      renderProps.createElement = createElement;
      // define callback
      let count = requests.length;
      let viewData = {};
      let callback = (err, data)=> {
        if(!err) {
          viewData[data.id] = data.result;
        } else {
          viewData[data.id] = err;
        }
        count--;
        if (count <= 0) {
          renderProps.params.data = viewData;
          let html = ReactDOM.renderToString(<RoutingContext {...renderProps}/>);
          res.render('pages/index', {"title": "Test", "html": html, data: JSON.stringify(viewData)});
        }
      }
      routeUtils.batchRequests(requests, callback, renderProps.params);
    }
  })
}
