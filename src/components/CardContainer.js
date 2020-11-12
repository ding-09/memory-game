import React from 'react';
import Card from './Card';
import takoyaki from '../images/takoyaki.jpg';
import boba from '../images/boba.jpg';
import ramen from '../images/ramen.jpg'
import curry from '../images/curry.jpg';

function CardContainer() {
  const images = [takoyaki, boba, ramen, curry];

  return (
    <div class="card-container">
      <Card img={images[0]} />
      <Card img={images[1]} />
      <Card img={images[2]} />
      <Card img={images[3]} />
    </div>
  );
}

export default CardContainer;
