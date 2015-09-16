import express from "express";
import path from 'path';
import httpProxy from 'http-proxy';

var proxy = httpProxy.createProxyServer();
var app = express();

// instantiate react-router
import React from 'react';
import ReactDOM from 'react-dom/server';
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import routes from '../shared/routes';
import bundle from './bundle.js';

//setup server history
import createHistory from 'history/lib/createMemoryHistory';


// var isProduction = process.env.NODE_ENV === 'production';

var publicPath = path.resolve(__dirname, 'public/build');
app.use(express.static(publicPath));

// point at the ejs templates
app.set('view engine', 'ejs');

let getData = (callback) => {
  callback({
        1: "a",
        2: "b"
  })
}

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
  // let history = createHistory({
  //   getCurrentLocation: () => createLocation(req.path, {}, undefined, 'root')
  // });

  // var routesWithHistory = routes; //routes({});
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if (error)
      res.status(500).send(error.message)
    else if (renderProps == null)
      res.status(404).send('Not found')
    else
      var html = ReactDOM.renderToString(<RoutingContext {...renderProps}/>);
      res.render('pages/index', {"title": "Test", "html": html, data: JSON.stringify({
            1: "a",
            2: "b"
      })});
  })
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(4000, function(){
  console.log("running on port 4000")
});
