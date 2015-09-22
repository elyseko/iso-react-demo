import React from 'react'

export default class Card extends React.Component {
  render() {
    return (
      <div className="card four stackable">
        <img className="ui image left floated" src={this.props.thumbnail} />
        <a className="right floated" href="/game/${ this.props.id }">
          {this.props.name}
        </a>
        <div>
          Published in {this.props.year_published}
        </div>
      </div>
    );
  }
}
