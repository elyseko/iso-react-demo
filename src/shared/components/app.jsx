import React from 'react'

export default class App extends React.Component {
  requestData() {
    return ["call()", "call2()"];
  }
  
  render() {
    return (
        <div classNam="app">
          Test App
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      );
  }
}
