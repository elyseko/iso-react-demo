/*
  Some utility functions that are used by both the server and the browser
  routing logic
*/

import Store from './store'
const store = new Store();

module.exports = {
  /*
    compiles a list of requests from the static method
    requestData
  */
  getListOfRequests: function(components) {
    let requests = [];
    components.forEach((item, index) => {
      // make sure this is really a component
      if (!item) return;
      // check for static method on parent components
      if (item.hasOwnProperty("requestData")) {
        requests = requests.concat(item.requestData());
      }
    });
    return requests;
  },
  /*
    makes a batch of calls to the store
  */
  batchRequests: function(requests, callback, params) {
    requests.forEach((item, index)=> {
      // check item in case a component implements requestData
      // but does not return an item
      if (item) {
        let options = {};
        if (item.hasOwnProperty("params")) {
          Object.keys(item.params).forEach((option, index) => {
            options[option] = params[option];
          });
        }
        store[item.request](callback, item.request, options);
      } else {
        console.error("static method requestData must return a valid store request")
      }
    });
  }
}
