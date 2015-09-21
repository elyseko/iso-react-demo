import React from 'react'
import { Link } from "react-router"
import Store from "../store"

let store = new Store();

export default class Home extends React.Component {

  constructor(props) {
    super();
    this.state = { data: props.params.data.getCards };
  }

  /*
    requestData Array

    lists calls that need to be made
    so the server knows what data to request
  */
  static requestData() {
    return [{request: "getCards"}];
  }

  componentWillMount() {
    store.getCards((err, data)=>{
      if (data.err) {
        this.setState({getCardsError: data.err});
      } else {
        this.setState({data: data.result});
      }
    }, "getCards");
  }

  renderCards() {
    let cards = [];
    let items =  this.state.data;
    if (items) {
      Object.keys(items).forEach( (item, index) => {
        console.log(item, index)
        let current = items[item];
        cards.push(
          <div key={"card-item" +   index}>
            <a href="/game/{current.id}"><span>Title: </span>{current.name}</a>
            <div>
              Year Published: {current.year_published}
            </div>
            <img src={current.thumbnail} />
          </div>
        )
      });
    }
    return cards;
  }

  render() {
    return (
      <div>
        <h4>Card Items</h4>
        {this.renderCards()}
      </div>
    );
  }
}
