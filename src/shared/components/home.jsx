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
      <div className="ui six doubling cards">
        {viewUtils.renderCards(this.props.data.getCards)}
      </div>

    );
  }
}
