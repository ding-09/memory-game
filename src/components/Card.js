import React from 'react';

function Card(props) {
  const {
    image: { src, title, backgroundColor, borderStyle },
    changeScore
  } = props;

  const cardStyle = {
    backgroundColor: backgroundColor,
    border: borderStyle,
  };
  return (
    <button className="card" style={cardStyle} onClick={changeScore}>
      <figure>
        <img src={src} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </button>
  );
}

export default Card;
