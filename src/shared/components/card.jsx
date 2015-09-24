import React from 'react'
import { Link } from "react-router"

export default class Card extends React.Component {
  render() {
    return (
      <Link to={`/game/${this.props.id}`}>
        <div className="card">
            {this.props.name}
          <img className="ui image left floated" src={this.props.thumbnail} />
          <div>
            <span>Published in </span><span>{this.props.year_published}</span>
          </div>
        </div>
      </Link>

    );
  }
}
