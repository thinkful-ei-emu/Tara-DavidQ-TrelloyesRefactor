import React from 'react';

import './card.css';

function Card(props) {
    const { title, content, id } = props
    return (
      <div className="Card" id={id}>
        <button onClick={() => {props.handleDelete(props.id)}} type="button">delete</button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }

  export default Card;