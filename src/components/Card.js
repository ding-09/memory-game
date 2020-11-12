import React from 'react';

function Card(props) {
  const { img } = props;
  return (
    <div className="card">
      <figure>
        <img src={img} alt="food" />
        <figcaption>Food</figcaption>
      </figure>
    </div>
  );
}

export default Card;
