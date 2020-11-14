import React, { useState, useEffect } from 'react';
import Card from './Card';
import takoyaki from '../images/takoyaki.jpg';
import boba from '../images/boba.jpg';
import ramen from '../images/ramen.jpg';
import curry from '../images/curry.jpg';
import hotpot from '../images/hotpot.jpg';
import matcha from '../images/matcha.jpg';
import zongzi from '../images/zongzi.jpg';
import sushi from '../images/sushi.png';
import dimsum from '../images/dimsum.jpg';
import chickenRice from '../images/chicken-rice.png';
import crawfish from '../images/crawfish.png';
import steak from '../images/steak.png';

function CardContainer(props) {
  const { changeScore, score } = props;

  let images = [
    {
      src: takoyaki,
      title: 'Takoyaki',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: boba,
      title: 'Boba',
      backgroundColor: 'rgb(54 145 154)',
      borderStyle: '1px solid rgb(54 145 154)',
    },
    {
      src: steak,
      title: 'Steak',
      backgroundColor: 'rgb(119 4 4)',
      borderStyle: '1px solid rgb(119 4 4)',
    },
    {
      src: zongzi,
      title: 'Zongzi',
      backgroundColor: 'rgb(76 136 89)',
      borderStyle: '1px solid rgb(76 136 89)',
    },
    {
      src: dimsum,
      title: 'Dimsum',
      backgroundColor: 'rgb(111 31 0)',
      borderStyle: '1px solid rgb(111 31 0)',
    },
    {
      src: ramen,
      title: 'Ramen',
      backgroundColor: 'rgb(255 141 0)',
      borderStyle: '1px solid rgb(255 141 0)',
    },
    {
      src: crawfish,
      title: 'Crawfish',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: sushi,
      title: 'Sushi',
      backgroundColor: 'rgb(245 194 80)',
      borderStyle: '1px solid rgb(245 194 80)',
    },
    {
      src: chickenRice,
      title: 'Chicken Rice',
      backgroundColor: 'rgb(136 96 6)',
      borderStyle: '1px solid rgb(136 96 6)',
    },
    {
      src: matcha,
      title: 'Matcha Drink',
      backgroundColor: 'rgb(255 148 148)',
      borderStyle: '1px solid rgb(255 148 148)',
    },
    {
      src: curry,
      title: 'Curry',
      backgroundColor: 'rgb(189 166 82)',
      borderStyle: '1px solid rgb(189 166 82)',
    },
    {
      src: hotpot,
      title: 'Hotpot',
      backgroundColor: 'rgb(226 143 58)',
      borderStyle: '1px solid rgb(226 143 58)',
    },
  ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score]);

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} changeScore={changeScore} />
      ))}
    </>
  );
}

export default CardContainer;
