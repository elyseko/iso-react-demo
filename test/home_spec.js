import ReactDOM from 'react-dom/server';
let TestUtils = require('react/addons').addons.TestUtils;

describe("Home Page Component",() => {
  let Home;
  beforeEach(
    Home = require('../dist/home.js')
  )
  describe("renders", () => {
    it("with a div",(done) => {
      console.log(Home);
      done();
    });
  });
});
