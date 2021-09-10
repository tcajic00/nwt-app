import React from 'react';

import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Car repair queue</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add vehicle</h2>
        </div>
        <div className="flex-large" id="title-2">
          <h2>Vehicle queue</h2>
        </div>
      </div>
    </div>
  )
}

export default App;
