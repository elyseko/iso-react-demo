# iso-react-demo
Example of how to build an isomorphic react app.

Runs at localhost:4000.

# Setup
`
npm install
webpack install -g
`

Run the following in separate windows.
`
webpack --watch
gulp browser-sync
npm start
`

# Libraries
* Requires webpack to build
* Browser sync is to server static assets so we don't need to bundle them
into the webpack bundle for the server. Browser sync will decide what port to
use automatically and log it in the terminal window.
