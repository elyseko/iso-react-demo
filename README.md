# iso-react-demo
Example of how to build an isomorphic react app.

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
