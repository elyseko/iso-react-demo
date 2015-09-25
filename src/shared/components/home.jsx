import React from 'react'
import { Link } from "react-router"
import viewUtils from "../viewUtils"

export default class Home extends React.Component {

  constructor(props) {
    super();
  }

  static requestData() {
    return [{request: "getCards"}];
  }

  render() {
    return (
      <div>
        <div className="ui two item menu">
          <a className="item active">Default</a>
          <a className="item">Reverse</a>
        </div>
        <div className="ui six doubling cards">
          {viewUtils.renderCards(this.props.data.getCards)}
        </div>
      </div>

    );
  }
}
