const cache = {};

export default class Cache {
  constructor(data) {
    this.cache = cache;
    this.build(data);
  }

  add(key, data) {
    this.cache[key] = data;
  }

  delete(key) {
    delete this.cache[key];
  }

  get(key) {
    return this.cache[key];
  }

  exists(key) {
    return !! this.cache[key];
  }

  build(data) {
    if (data) {
      Object.keys(data).forEach( (item, index) => {
        this.add(item, data[item]);
      });
    }
  }
}
