import React from 'react'
import viewUtils from '../viewUtils'

let GET_CARD = "getCard";
let GET_RELATED = "getRelated";

export default class Detail extends React.Component {
  constructor(props) {
    super();
    // get the data off of props - guarenteed to be available
    // because all calls are made at the router level
    // TODO: check for error and/or loading states
    this.state =  {
                    data: props.data[GET_CARD + props.params.id],
                    related: props.data[GET_RELATED + props.params.id]
                  }
  }

  static requestData() {
    return [{request: GET_CARD, params: {id: ":id"}}, {request: GET_RELATED, params: {id: ":id"}}];
  }

  render() {
    return (
      <div className="details">
        <h1>{this.state.data.name}</h1>
        <img className="ui image left floated" src={this.state.data.thumbnail} />
        <div>
          <h2>Related Games</h2>
          <div>
            {viewUtils.renderCards(this.state.related)}
          </div>
        </div>
      </div>
    )
  }
}
