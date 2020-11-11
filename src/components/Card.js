import React from 'react';

function Card(props) {
  const { img } = props;
  return (
    <div>
      <div className="card">
        <figure>
          <img src={img} alt="takoyaki" />
          <figcaption>Takoyaki</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Card;
