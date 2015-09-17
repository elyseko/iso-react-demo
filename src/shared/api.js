/*
  Sample API module

  Keeping it simple using callbacks, could be done with promises instead
*/

import Cache from './cache'
let cache = new Cache();

const testData =  {
                    "hello": {"name": "hello", "description": "This is a description"},
                    "world": {"name": "world", "description": "This is a world description"}
                  }

export default class API {

  getCards(callback, cardsId, options) {
    let err = null;
    //check cache to see if ids exist
    if (cache.exists(cardsId)) {
      callback(err, cache.get(cardsId));
    }
    //call API
    setTimeout( () => {
      callback(err, {result: testData, id: cardsId});
    }, 200);
  }

}
