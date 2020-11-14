import React from 'react';

function Header(props) {
  const { score } = props;

  return (
    <header className="header">
      <h1 className="main-title">Memory Game</h1>
      <div className="score-board">
        <p className="current-score">Score: {score}</p>
        <p className="best-score">High Score: 0</p>
      </div>
    </header>
  );
}

export default Header;
