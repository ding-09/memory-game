import './App.css';
import Card from './components/Card';
import takoyaki from './images/takoyaki.jpg';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Card img={takoyaki} />
    </div>
  );
}

export default App;
