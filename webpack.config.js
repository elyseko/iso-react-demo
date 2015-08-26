var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'server', 'app.js');

module.exports = {
  target: "node",
  devtool: "source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,

  },
  debug: true,
  entry: {
    app: mainPath
  },
  output: {
    path: buildPath,
    publicPath: "build/",
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  externals: /^[a-z\-0-9]+$/,
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
    extensions: ['', '.js', '.json']
  }
};
