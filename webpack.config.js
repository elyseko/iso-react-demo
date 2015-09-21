var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist');
var serverPath = path.resolve(__dirname, 'src/server', 'app.js');
var browserPath = path.resolve(__dirname, 'src/client', 'main.js');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var envPlugin = new Webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEV || 'true')),
  __PRODUCTION__: JSON.stringify(JSON.parse(process.env.PRODUCTION || 'false'))
});

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
      libraryTarget: "commonjs2",
      publicPath: "dist"
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
    plugins: [envPlugin]
  },
  {
    devtool: "eval",
    debug: true,
    entry: {
      app:["./src/client/main.js"]
    },
    output: {
      path: buildPath + "/public/build",
      publicPath: "dist/public/build",
      filename: "browser.js"
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json-loader",
          exclude: /nodeModulesPath/
        },
        {
          test: /\.jsx?$/,
          exclude: /nodeModulesPath/,
          loader: 'babel-loader'
        },
        {
          test: /\.ejs$/,
          loader: "ejs-loader?variable=data",
          exclude: /nodeModulesPath/
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [new Webpack.NoErrorsPlugin(),envPlugin]
  }
];
