import React from 'react'
import { Link } from "react-router"
import API from "../api"

let api = new API();

export default class Home extends React.Component {

  constructor(props) {
    super();
    console.log(props.params.data)
    this.state = { data: props.params.data.getCards };
  }

  static requestData() {
    return [{request: "getCards"}];
  }

  componentWillMount() {
    if(!this.state.data) {
      api.getCards((err, data)=>{
        this.setState({data: data});
      }, "getCards");
    }
  }

  renderCards() {
    let cards = [];
    let items =  this.state.data;
    if (items) {
      Object.keys(items).forEach( (item, index) => {
        console.log(item, index)
        cards.push(
          <div key={"card-item" +   index}>
            <span>Name: {items[item].name}</span>
            <div>
              {items[item].description}
            </div>
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
