/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App-header">
      <h1 className="header">CALCULATOR PRO</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
