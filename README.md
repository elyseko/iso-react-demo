# iso-react-demo
Example of how to build an isomorphic react app.
[Slides from #strangeloop](https://speakerdeck.com/elyseko/building-isomorphic-web-apps-with-react)

Runs at localhost:4000.

# Setup
```
npm install

# if you don't have webpack
npm install webpack -g
```

Run the following in separate windows.
```
webpack --watch
gulp browser-sync
npm start
```

* When you start browser sync it will open a window for you automatically,
since there is no index.html it will show an error. To verify it is working, test
/build/browser.js

# Libraries
* Requires webpack to build
* Browser sync is to server static assets so we don't need to bundle them
into the webpack bundle for the server. Browser sync will decide what port to
use automatically and log it in the terminal window.

# References/Resources
* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/rackt/react-router)
* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [Webpack](https://webpack.github.io/)
* [Browser Sync](http://www.browsersync.io/)

* [List of Isomorphic Apps](http://isomorphic.net/)
* [React Nexus](https://blog.rotenberg.io/isomorphic-apps-done-right-with-react-nexus/)
* [Pellet (Vevo)](https://github.com/Rebelizer/pellet)

* [airbnb isomorphic article](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
* [Webpack React How To](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
* [Webpack How TO](https://github.com/petehunt/webpack-howto)
* [Webpack Dev Server Help](http://stackoverflow.com/questions/27532246/how-to-use-webpack-for-development-without-webpack-dev-server)
* [Exploring Isomorphic Javascript](http://nicolashery.com/exploring-isomorphic-javascript/)
* [Simple Isomrophic Example](http://jmfurlott.com/tutorial-setting-up-a-simple-isomorphic-react-app/)
* [Getting Started with React](https://blog.risingstack.com/the-react-way-getting-started-tutorial/)
* [Webpack Env Variables](http://nicolashery.com/using-environment-variables-with-webpack-and-divshot/)
* [Higher Order Components](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)
* [Node and Webpack](http://jlongster.com/Backend-Apps-with-Webpack--Part-II)
