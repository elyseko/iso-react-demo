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
let api = new API();

var proxy = httpProxy.createProxyServer();
var app = express();

var publicPath = path.resolve(__dirname, 'public/build');
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
  var location = createLocation(req.url);
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if (error)
      res.status(500).send(error.message)
    else if (renderProps == null)
      res.status(404).send('Not found')
    else
      //TODO: abstract to coming from settings on component
      api.getCards( (err, data) => {
        if(err) {
          console.log("failed to get required data", err)
        }
        console.log("render props", renderProps)
        renderProps.params.data = data;
        var html = ReactDOM.renderToString(<RoutingContext {...renderProps}/>);
        res.render('pages/index', {"title": "Test", "html": html, data: JSON.stringify({"all":data})});
      }, "all");
  })
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(4000, function(){
  console.log("running on port 4000")
});
