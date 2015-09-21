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
// import bundle from './bundle.js';

import Store from '../shared/store'
const store = new Store();

const proxy = httpProxy.createProxyServer();

  const app = express();
  let foo = "bar";

let publicPath = path.resolve(__dirname, '/public');
console.log("publicPath", publicPath, __dirname, process.cwd())
app.use('static', express.static(publicPath));
// app.use("/build/*", express.static(publicPath));

// point at the ejs templates
app.set('view engine', 'ejs');

// // TODO: need to flag this so not in production
// bundle();

// app.all("/build/*", function (req, res) {
//   console.log("proxy")
//     proxy.web(req, res, {
//         target: 'http://localhost:8080'
//     });
// });

//view routes
  app.get('/*',(req, res) => {
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
          // check for static method on parent components
          if (item.hasOwnProperty("requestData")) {
            requests = requests.concat(item.requestData());
          }
        });
        // init object to serialize to browser
        // set normalized req data
        let viewData = {request: req};

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
            let html = ReactDOM.renderToString(
              <RoutingContext {...renderProps}/>
            );
            res.render('pages/index', {
              "title": "Home",
              "html": html,
              data: JSON.stringify({viewData})
            });
          }
        }
        requests.forEach((item, index)=> {
          console.log("each item", item, index)
          // check item in case a component implements requestData
          // but does not return an itme
          if (item) {
            store[item.request](callback, item.request);
          } else {
            console.error("static method requestData must return a valid store request")
          }
        });
      }
    })
  });

// proxy.on('error', function(e) {
//   console.log('Could not connect to proxy, please try again...');
// });

app.listen(4000, function(){
  console.log("running on port 4000")
});



// viewData = {
//   request: //normalized server req data or browser data
//   storeRequestId: //data returned from request
//   storeRequstId2: //data returned from request
// }
