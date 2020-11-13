import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="main-title">Memory Game</h1>
      <div className="score-board">
        <p className="current-score">Score: 0</p>
        <p className="best-score">Best Score: 0</p>
      </div>
    </header>
  );
}

export default Header;
