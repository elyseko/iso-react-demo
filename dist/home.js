// import React from 'react';
//
// export class Home extends React.Component {
//   render() {
//     return <div>"Hello World"</div>;
//   }
// }

'use strict';

var React = require('react');
var Test = React.createClass({
  displayName: 'Test',

  render: function render() {
    return React.createElement(
      'div',
      null,
      '"Hello World"'
    );
  }
});

module.exports = Test;
