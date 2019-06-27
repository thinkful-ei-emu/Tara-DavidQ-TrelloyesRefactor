import React from 'react';
import Card from './card.js';

import './list.css';

function List(props) {
  const arrayOfCards = props.cardIds.map((letter) => {
    let cardObj = props.allCards[letter];
    return (<Card 
      handleDelete={props.handleDelete} 
      key={cardObj.id}
      title={cardObj.title} 
      content={cardObj.content} 
      id={cardObj.id} />)
  })

    return (
      <div className="List">
        <header className="List-header">
          {props.header}
        </header>
          <div className="List-cards">
            {arrayOfCards}
          </div>
      </div>
    );
  }

  export default List;