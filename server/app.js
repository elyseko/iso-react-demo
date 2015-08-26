var express = require("express");
var app = express();
var path = require('path');
var render = require('render');
// var httpProxy = require('http-proxy');
//
// var proxy = httpProxy.createProxyServer();

var isProduction = process.env.NODE_ENV === 'production';

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.set('views',__dirname + '/views');
// set the view engine to ejs
app.set('view engine', 'ejs');

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
// proxy.on('error', function(e) {
//   console.log('Could not connect to proxy, please try again...');
// });

// // We only want to run the workflow when not in production
// if (!isProduction) {
//
//   // We require the bundler inside the if block because
//   // it is only needed in a development environment. Later
//   // you will see why this is a good idea
//   var bundle = require('./bundle.js');
//   bundle();
//
//   // Any requests to localhost:3000/build is proxied
//   // to webpack-dev-server
//   app.all('/build/*', function (req, res) {
//     proxy.web(req, res, {
//         target: 'http://localhost:8080'
//     });
//   });
//
// }

app.get('/', function(req, res){
  res.render('index', {"title": "Test", "html": "<div>Test</div>"});
});

app.listen(4000, function(){
  console.log("running on port 4000")
});
