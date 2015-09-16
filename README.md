# iso-react-demo
Example of how to build an isomorphic react app

# Setup
$ npm install
$ webpack
$ nodemon install -g
$ nodemon public/build/server.js

# Libraries

# Tests

## Server Tests

Use jasmine-node

$ npm install jasmine-node -g

## Client Tests

Use jasmine + karma


### Bug with global = function(){return this;}
Strict mode causing this? to be undefined
Ammended this line with || window in /Users/elysekolker/dev/iso-react-demo/node_modules/webpack-dev-server/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/lib/browser.js
and
/Users/elysekolker/dev/iso-react-demo/node_modules/webpack-dev-server/node_modules/socket.io/node_modules/engine.io/node_modules/ws/lib/browser.js
