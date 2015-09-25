import React from 'react'
import viewUtils from '../viewUtils'

let GET_CARD = "getCard";
let GET_RELATED = "getRelated";

export default class Detail extends React.Component {

  static requestData() {
    return [{request: GET_CARD, params: {id: ":id"}}, {request: GET_RELATED, params: {id: ":id"}}];
  }

  render() {
    // TODO: check for error and/or loading states
    let item = this.props.data[GET_CARD + this.props.params.id];
    let related = this.props.data[GET_RELATED + this.props.params.id];
    if (item) {
       return (
        <div className="ui details">
          <div width="100%">
            <div className="ui hidden divider"></div>
            <h1>{item.name}</h1>
            <img className="ui image" src={item.thumbnail} />
            <div className="ui hidden divider"></div>
          </div>
          <div className="ui six doubling cards">
            {viewUtils.renderCards(related)}
          </div>
        </div>
      )
    } else {
      return (
        <div className="ui details">
          Loading
        </div>
      )
    }
  }
}
