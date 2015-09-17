import express from "express";
import path from 'path';
import httpProxy from 'http-proxy';

// instantiate react-router
import React from 'react';
import ReactDOM from 'react-dom/server';
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import routes from '../shared/routes';

// setup dev webpack dev server
import bundle from './bundle.js';

import API from '../shared/api'
const api = new API();

const proxy = httpProxy.createProxyServer();
const app = express();

const publicPath = path.resolve(__dirname, 'public/build');
app.use(express.static(publicPath));

// point at the ejs templates
app.set('view engine', 'ejs');

// TODO: need to flag this so not in production
bundle();

app.all("/build/*", function (req, res) {
  console.log("proxy")
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
});

//view routes
app.get('/*',(req, res) => {
  console.log("route", req.path);
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
      let requests = []
      components.forEach((item, index) => {
        if (item.hasOwnProperty("requestData")) {
          requests = requests.concat(item.requestData());
        }
      });
      let viewData = {};
      let count = requests.length;
      let callback = (err, data)=> {
        console.log("callback")
        if(!err) {
          viewData[data.id] = data.result;
        } else {
          viewData[data.id] = err;
        }
        count--;
        if (count <= 0) {
          renderProps.params.data = viewData;
          let html = ReactDOM.renderToString(<RoutingContext {...renderProps}/>);
          res.render('pages/index', {"title": "Test", "html": html, data: JSON.stringify({viewData})});
        }
      }
      requests.forEach((item, index)=> {
        api[item.request](callback, item.request);
      });
    }
  })
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(4000, function(){
  console.log("running on port 4000")
});
