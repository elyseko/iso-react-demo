var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public/build/');
var serverPath = path.resolve(__dirname, 'src/server', 'app.js');
var browserPath = path.resolve(__dirname, 'src/client', 'main.js');

module.exports = [
  {
    target: "node",
    devtool: "source-map",
    debug: true,
    entry: {
      app: [serverPath]
    },
    output: {
      path: buildPath,
      filename: "server.js",
      libraryTarget: "umd"
    },
    externals: [/^[a-z\-0-9]+$/, 'react-router/lib/Location.js', 'react-dom/server'],
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json-loader"
        },
        {
          test: /\.jsx?$/,
          exclude: /nodeModulesPath/,
          loader: 'babel'
        },
        {
          test: /\.ejs$/,
          loader: "ejs-loader?variable=data"
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx']
    }
  },
  {
    devtool: "source-map",
    debug: true,
    entry: {
      app:['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', "./src/client/main.js"]
    },
    output: {
      path: buildPath,
      publicPath: "/build/",
      filename: "browser.js"
    },
    externals: [/^[a-z\-0-9]+$/, 'react-router/lib/Location.js', 'react-dom/server'],
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json-loader"
        },
        {
          test: /\.jsx?$/,
          exclude: /nodeModulesPath/,
          loader: 'babel'
        },
        {
          test: /\.ejs$/,
          loader: "ejs-loader?variable=data"
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
  }
];
