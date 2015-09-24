/*
  Some utility functions that are used by multiple react components
*/
import React from 'react'
import Card from './components/card'

module.exports = {
  renderCards: function(cardData) {
    let cards = [];
    let items =  cardData;
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
}
