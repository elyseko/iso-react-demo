import React from 'react'
import { Link } from "react-router"

export default class App extends React.Component {

  /*
    requestData

    lists calls that need to be made
    so the server knows what data to request
  */
  static requestData() {
    // return ["call()", "call2()"];
  }

  render() {
    return (
        <div className="app">
          <h3>Isomorphic React Example</h3>
          <div className="nav">
            <Link to="/about">About</Link>
          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      );
  }
}
