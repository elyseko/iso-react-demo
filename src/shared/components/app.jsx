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
          <h3 className="ui fixed inverted main menu">
            <Link className="item" to="/">Isomorphic React Example</Link>
          </h3>
          <div className="ui container main-content">
            {this.props.children}
          </div>
        </div>
      );
  }
}
