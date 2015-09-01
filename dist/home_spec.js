'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var TestUtils = require('react/addons').addons.TestUtils;

describe("Home Page Component", function () {
  var Home = undefined;
  beforeEach(Home = require('../dist/home.js'));
  describe("renders", function () {
    it("with a div", function (done) {
      console.log(Home);
      done();
    });
  });
});