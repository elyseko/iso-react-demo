//these are integration tests which require the server to be running

"use strict";

var request = require("superagent");
var base_url = "http://localhost:4000/";

describe("The server is running on port 4000", function () {
  describe("GET /", function () {
    xit("returns status code 200", function (done) {
      request.get(base_url).end(function (error, res) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    xit("returns a valid html response", function (done) {
      request.get(base_url).end(function (error, res) {
        expect(res.text.indexOf('body')).not.toBe(-1);
        expect(res.text.indexOf('html')).not.toBe(-1);
        expect(res.text.indexOf('title')).not.toBe(-1);
        done();
      });
    });
  });
});