# iso-react-demo
Example of how to build an isomorphic react app
Server runs at port 4000

# Setup
`$ npm install
$ webpack
$ nodemon install -g
$ nodemon public/build/server.js`


# Libraries

# Tests
Mocha

# Resources
https://github.com/petehunt/webpack-howto
http://isomorphic.net/libraries


### Bug with global = function(){return this;}
Strict mode causing this? to be undefined
Ammended this line with || window in /Users/elysekolker/dev/iso-react-demo/node_modules/webpack-dev-server/node_modules/socket.io-client/node_modules/engine.io-client/node_modules/ws/lib/browser.js
and
/Users/elysekolker/dev/iso-react-demo/node_modules/webpack-dev-server/node_modules/socket.io/node_modules/engine.io/node_modules/ws/lib/browser.js
