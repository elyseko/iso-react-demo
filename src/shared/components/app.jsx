/*
  Parent react component

  Header, footer and other components common to all
  routes go in here
*/

import React from 'react'
import { Link } from "react-router"

export default class App extends React.Component {

  render() {
    return (
        <div className="app">
          <h3 className="ui header"><Link to="/">Isomorphic React Example</Link></h3>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      );
  }
}
