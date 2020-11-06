import React from 'react';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function Card(props) {
  return (
    <div className="Card">
      <h3>{capitalize(props.category)} choice</h3>
      <h2>{props.title}</h2>
      <button onClick={() => {props.makeChoice(props.category, props.title)}}>Select!</button>
    </div>
  );
}

export default Card;
