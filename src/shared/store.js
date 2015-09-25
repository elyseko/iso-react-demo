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
      return callback(err, {result: dataToCache, id: id});
    }, 200);
  }

  _checkCache(id) {
    //check cache to see if ids exist
    if (cache.exists(id)) {
      console.info("LOG: cache hit");
      return true;
    }
  }

  getCards(callback, cardsId, options) {
    let err = null;
    if (this._checkCache(cardsId)) {
      callback(err, {result: cache.get(cardsId), id: cardsId});
    } else {
      this._get(callback, boardgames.items, cardsId);
    }
  }

  getCard(callback, cardId, options) {
    let err = null;

    if (!options || !options.id) {
      err = {err: "missing options or no id on request"}
      return callback(err, {id: cardId});
    }

    let cacheId = cardId + options.id;
    if (this._checkCache(cacheId)) {
      callback(err, {result: cache.get(cacheId), id: cacheId});
    } else {
      this._get(callback, boardgames.items[options.id-1], cacheId);
    }
  }

  getRelated(callback, relatedId, options) {
    let err = null;

    if (!options || !options.id) {
      err = {err: "missing options or no id on request"}
      return callback(err, {id: cardId});
    }

    let cacheId = relatedId + options.id;
    if (this._checkCache(cacheId)) {
      return callback(err, {result: cache.get(cacheId), id: cacheId});
    } else {
      //TODO: hook up to actual related ap
      this._get(callback, boardgames.items.slice(0,4), cacheId);
    }
  }

}
