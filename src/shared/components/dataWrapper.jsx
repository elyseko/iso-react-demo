import React from 'react'
import Store from '../store'
import routeUtils from '../routeUtils'

const store = new Store();

export default class DataWrapper extends React.Component {

  constructor(props) {
    super();
    this.state = {data:{}};
    this.getData(props);
  }

  componentWillReceiveProps(nextProps) {
    this.getData(nextProps);
  }

  getData(props) {
    let requests = routeUtils.getListOfRequests([props.component])
    let newData = {}
    let count = requests.length;
    if (count) {
      requests.forEach((item, index)=> {
        // check item in case a component implements requestData
        // but does not return an item
        if (item) {
          let options = {};
          let key = ""
          if (item.hasOwnProperty("params")) {
            Object.keys(item.params).forEach((option, index) => {
              key += options[option] = props.params[option];
            });
          }
          this.updateState = this.updateState.bind(this)
          //TODO: handle cleanup in component will mount
          store[item.request](this.updateState, item.request, options);
        } else {
          console.error("static method requestData must return a valid store request")
        }
      });
    }
  }

  updateState(err, item) {
    let obj = this.state.data || {}
    obj[item.id] = item.result
    if (this.props) {
      this.setState({data: obj})
    } else {
      this.state.data = obj
    }
  }

  render() {
    return (
      <this.props.component {...this.props}
                            data={this.state.data} />
    );
  }
}
