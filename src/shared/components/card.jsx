import React from 'react'
import { Link } from "react-router"

export default class Card extends React.Component {
  render() {
    return (
      <Link  className="card" to={`/game/${this.props.id}`}>
        <img className="ui image" src={this.props.thumbnail} />
        <div>{this.props.name}</div>
        <div>
          <span>Published in </span><span>{this.props.year_published}</span>
        </div>
      </Link>

    );
  }
}
