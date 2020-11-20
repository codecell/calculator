/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// import calculate from '../logic/calculate';

function App() {
  return (
    <div className="App-header">
      <h1 className="header">CALCULATE PRO</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
