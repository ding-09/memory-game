import React, { useState } from 'react';
import CardContainer from './CardContainer';
import Header from './Header';

function Game() {
  const [score, setScore] = useState(0);

  const changeScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <>
      <Header score={score} />
      <div className="card-container" id="card-container">
        <CardContainer changeScore={changeScore} />
      </div>
    </>
  );
}

export default Game;
