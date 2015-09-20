/*
  Sample API module

  - Keeping it simple using callbacks, could be done with promises instead
  - Handles pushing data into the cache when calls are made
*/

import boardgames from './boardgames.json'
import Cache from './cache'
let cache = new Cache(); //TODO should we instantiate a better way?

//stubbed data
export default class Store {

  // fake a get call
  _get(callback, data, id) {
    let err = null; //placeholder for real calls
    //call API - for this example fake an async call with setTimeout
    setTimeout( () => {
      //set the response in the cache - cache exists across
      //multiple calls and this solves a problem with having
      //to make a state existence check in componentWillMount
      let dataToCache = data;
      if (err) {
        dataToCache = err;
      }
      cache.add(id, dataToCache);
      callback(err, {result: dataToCache, id: id});
    }, 200);
  }

  _checkCache(callback, id) {
    //check cache to see if ids exist
    if (cache.exists(id)) {
      console.log("LOG: cache hit");
      callback(null, {result: cache.get(id), id: id});
    }
  }

  getCards(callback, cardsId, options) {
    let err = null;
    this._checkCache(callback, cardsId)
    this._get(callback, boardgames.items, cardsId);
  }

  getCard(callback, cardId, options) {
    let err = null;
    this._checkCache(callback, cardId)
    this._get(callback, boardgames.items[cardId], cardId);
  }

}
