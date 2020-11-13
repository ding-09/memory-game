import React from 'react';

function Card(props) {
  const {
    card: { src, title, backgroundColor, borderStyle },
  } = props;

  const cardStyle = {
    backgroundColor: backgroundColor,
    border: borderStyle,
  };
  return (
    <div className="card" style={cardStyle}>
      <figure>
        <img src={src} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
}

export default Card;
