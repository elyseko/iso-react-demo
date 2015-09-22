import React from 'react'
import { Link } from "react-router"
import Store from "../store"
import Card from "./card"

let store = new Store();

export default class Home extends React.Component {

  constructor(props) {
    super();
    this.state = { data: props.params.data.getCards };
  }

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
        let currentCard = items[item];
        cards.push(
          <Card key={"card-item" + index} {...currentCard}>
          </Card>
        )
      });
    }
    return cards;
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderCards()}
      </div>
    );
  }
}
