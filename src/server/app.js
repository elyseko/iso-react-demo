import express from "express";
import path from 'path';
import httpProxy from 'http-proxy';

var proxy = httpProxy.createProxyServer();
var app = express();

// instantiate react-router
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from 'react-router';
import Location from 'react-router/lib/Location.js';
import routes from '../shared/routes';

if (typeof window === 'undefined') {
  process.env.IS_NODE = true;
} else {
  process.env.IS_BROWSER = true;
}

// var isProduction = process.env.NODE_ENV === 'production';

var publicPath = path.resolve(__dirname, 'public/build');
app.use(express.static(publicPath));

// point at the ejs templates
// app.set('views',__dirname);
// set the view engine to ejs
app.set('view engine', 'ejs');

let getData = (callback) => {
  callback({
        1: "a",
        2: "b"
  })
}

import bundle from './bundle.js'
bundle();

app.all("/build/*", function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
});
//view routes
app.get('/*',(req, res) => {
  var location = new Location(req.path, req.query);

  Router.run(routes, location, Handler (error, initialState, transition) => {
    // do your own data fetching, perhaps using the
    // branch of components in the initialState
    let data = getData((data)=>{
    // fetchSomeData(initialState.components, (error, initialData) => {
      var html = ReactDOM.renderToString(
        <Handler {...initialState}/>
      );
      console.log("html\n", html)
      res.render('pages/index', {"title": "Test", "html": html, data: JSON.stringify(data)});
    });
  });
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(4000, function(){
  console.log("running on port 4000")
});
